import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  ChangeDetectorRef,
  SimpleChanges,
  ViewEncapsulation,
  ElementRef,
} from '@angular/core';

import {
  ISmartlistFullConfig,
  ISmartListItem,
  IColumnConfig,
  ISmartlistMetadata,
  IActionConfig,
  ButtonComponent,
  ViewportService,
  ActionMenuComponent,
  PaginationComponent,
  ClassUtilityService,
  IPaginationConfig,
  ITableConfig,
  IPaginationEvents,
  SelectComponent,
  IValueList,
  columnEncargado,
  columnEstado,
} from '../public-api';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'smart-list',
  templateUrl: './smart-list.component.html',
  styleUrls: ['./smart-list.component.scss', '../styles/output.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    ActionMenuComponent,
    PaginationComponent,
    SelectComponent,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class SmartListComponent implements OnInit, OnChanges {
  @Input() smartlistConfig: ISmartlistFullConfig | null = null;
  @Input() data: ISmartListItem[] = [];
  @Input() tableConfig: ITableConfig = {
    hiddenColumns: [],
    sortableColumns: [],
    actionIcons: [],
    emptyStateText: 'No hay datos para mostrar',
    twClass: '',
    showActions: true,
    showStateButtons: false,
    noPagination: true,
    maxHeight: '10px',
  };
  @Input() paginationConfig: IPaginationConfig = {
    isManualPaginate: false,
    currentPage: 1,
    totalPages: 1,
    pageSize: 10,
    totalItems: 0,
    page: 1,
    titles: {
      showing: 'Mostrando',
      results: 'resultados',
      page: 'Pag',
      of: 'de',
    },
  };

  @Output() paginationEvents: IPaginationEvents = {
    onPageChange: (page: number) => this.goToPage(page),
    onPreviousPage: () => this.previousPage(),
    onNextPage: () => this.nextPage(),
  };
  @Output() columnSort = new EventEmitter<string>();
  @Output() rowAction = new EventEmitter<{
    actionType: 'button' | 'checkbox' | 'selector';
    action: string;
    item: ISmartListItem;
  }>();

  @Output() selectedUsers = new EventEmitter<ISmartListItem[]>();

  @Output() pageSelected = new EventEmitter<number>();
  @Output() pageSizeChanged = new EventEmitter<number>();

  isMobile: boolean = false;
  isActionsModalOpen: boolean = false;
  paginatedItems: ISmartListItem[] = [];
  selectedItems: ISmartListItem[] = [];
  selectedItem: ISmartListItem | null = null;
  metadata: ISmartlistMetadata | null = null;
  currentItemActions: IActionConfig[] = [];
  sortState: { [key: string]: 'asc' | 'desc' | null } = {};
  initialPageSize: number = 5;
  private viewportSubscription!: Subscription;
  private selectControls = new WeakMap<
    ISmartListItem,
    { [key: string]: FormControl }
  >();
  constructor(
    private cdr: ChangeDetectorRef,
    private eRef: ElementRef,
    private viewportService: ViewportService,
    private classUtility: ClassUtilityService,
  ) {}

  /**
   * Inicializa la tabla y verifica el viewport al cargar el componente.
   */
  ngOnInit(): void {
    this.initialPageSize = this.paginationConfig.pageSize;

    this.viewportSubscription = this.viewportService
      .getIsMobile()
      .subscribe((isMobile) => {
        this.isMobile = isMobile;
        this.adjustPagination();
        this.adjustPageSize();
      });
    this.initializeTable();
  }

  ngOnDestroy(): void {
    if (this.viewportSubscription) {
      this.viewportSubscription.unsubscribe();
    }
  }

  /**
   * Transforma las opciones de selector para cumplir con el contrato de IValueList.
   * @param options Opciones en el formato { Id: string; Description: string }[].
   * @returns Opciones transformadas en el formato IValueList[].
   */
  transformSelectorOptions(
    options: { Id: string; Description: string }[],
  ): IValueList[] {
    return options.map((option) => ({
      ...option,
      Bag: {}, // Agrega un objeto vacío para cumplir con el contrato de IValueList
    }));
  }

  /**
   * Maneja el cambio de valor en el selector dentro de una fila.
   * @param item El elemento de la fila donde se realizó el cambio.
   * @param fieldName El nombre del campo asociado al selector.
   * @param value El nuevo valor seleccionado.
   */
  handleSelectorChange(
    item: ISmartListItem,
    fieldName: string,
    value: any,
  ): void {
    if (!item) return; // Si el item no existe, no hace nada.
    item[fieldName] = value;
    this.rowAction.emit({ actionType: 'selector', action: 'update', item });
  }

  /**
   * Obtiene los datos completos de la tabla con los valores seleccionados en cada fila.
   * @returns Un arreglo con todos los elementos de la tabla y sus valores actuales.
   */
  getTableData(): ISmartListItem[] {
    return [...this.data];
  }

  /**
   * Crea o devuelve un FormControl para el selector asociado a un item y columna especifica.
   */
  getOrCreateSelectControl(
    item: ISmartListItem,
    column: IColumnConfig,
  ): FormControl {
    let controlsForItem = this.selectControls.get(item);
    if (!controlsForItem) {
      controlsForItem = {};
      this.selectControls.set(item, controlsForItem);
    }
    if (!controlsForItem[column.FieldName]) {
      controlsForItem[column.FieldName] = new FormControl(
        item[column.FieldName] || this.createDefaultControl(column),
      );
    }
    return controlsForItem[column.FieldName];
  }

  /**
   * Crea un valor de control por defecto si no existe en el elemento.
   * @param column La columna que contiene el selector.
   * @returns Un valor inicial para el control.
   */
  createDefaultControl(column: IColumnConfig): any {
    return column.MultiSelect ?? [];
  }

  /**
   * Evento que se dispara al cambiar el valor del selector en una fila.
   * Actualiza el valor en el item para la columna dada.
   */
  onSelectorValueChange(
    value: any,
    item: ISmartListItem,
    column: IColumnConfig,
  ): void {
    const control = this.getOrCreateSelectControl(item, column);
    control.setValue(value);
    item[column.FieldName] = value;
    this.rowAction.emit({ actionType: 'selector', action: 'update', item });
  }

  /**
   * Retorna toda la información de la tabla con los valores seleccionados actualizados.
   */
  getAllData(): ISmartListItem[] {
    return this.data; // Devuelve la referencia a la data actualizada
  }

  /**
   * Actualiza los valores de selectores en filas específicas, si se requiere.
   * @param updates Arreglo de objetos con { codes: any[], value: any, fieldName: string }
   */
  updateSelectorValues(
    updates: { codes: any[]; value: any; fieldName: string }[],
  ): void {
    for (const update of updates) {
      // Se asume que se puede identificar el item por la llave primaria u otra lógica
      const primaryKeyField =
        this.metadata?.Columns.find((c) => c.IsPrimaryKey)?.FieldName || '';
      for (const code of update.codes) {
        const item = this.data.find((d) => d[primaryKeyField] === code);
        if (item) {
          item[update.fieldName] = update.value;
          const column = this.metadata?.Columns.find(
            (c) => c.FieldName === update.fieldName,
          );
          if (column) {
            const control = this.getOrCreateSelectControl(item, column);
            control.setValue(update.value);
          }
        }
      }
    }
  }

  /**
   * Ajusta el pageSize según el estado de `isMobile`.
   */
  adjustPageSize() {
    if (this.isMobile && this.paginationConfig.pageSize !== 1) {
      this.paginationConfig.pageSize = 1;
      this.pageSizeChanged.emit(this.paginationConfig.pageSize);
      this.paginate();
    } else if (
      !this.isMobile &&
      this.paginationConfig.pageSize !== this.initialPageSize
    ) {
      this.paginationConfig.pageSize = this.initialPageSize;
      this.pageSizeChanged.emit(this.paginationConfig.pageSize);
      this.paginate();
    }
  }

  /**
   * Alterna el menú de acciones para un elemento específico.
   * @param item El elemento de la tabla que se selecciona.
   */
  toggleActionsMenu(item: ISmartListItem) {
    if (this.selectedItem === item && this.isActionsModalOpen) {
      this.closeActionsModal();
    } else {
      this.openActionsModal(item);
    }
  }

  /**
   * Abre el menú de acciones para un elemento.
   * @param item El elemento para el cual se abrirá el menú de acciones.
   */
  openActionsModal(item: ISmartListItem) {
    this.selectedItem = item;
    this.currentItemActions = this.metadata?.Buttons || [];
    this.isActionsModalOpen = true;
  }

  /**
   * Cierra el menú de acciones.
   */
  closeActionsModal() {
    this.isActionsModalOpen = false;
    this.selectedItem = null;
  }

  /**
   * Detecta los cambios en las entradas del componente y actualiza la tabla.
   * @param changes Cambios detectados en los inputs.
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] || changes['smartlistConfig']) {
      this.initializeTable();
    }
  }

  /**
   * Inicializa la tabla y ajusta los elementos paginados.
   */

  initializeTable(): void {
    this.metadata = this.smartlistConfig?.Metadata || null;

    // Si showStateButtons es true, agregamos la columna estado
    if (this.metadata && this.tableConfig.showStateButtons) {
      // Verificamos que no exista ya la columna 'estado' para no duplicarla
      const hasEstado = this.metadata.Columns.some(
        (col) => col.FieldName === 'estado',
      );
      if (!hasEstado) {
        this.metadata.Columns.push(columnEstado);
      }
    }

    // Si MultiSelect es true y columnEncargado tiene SelectorOptions, agregamos la columna encargado
    if (
      this.metadata &&
      this.tableConfig &&
      this.tableConfig.showSelect &&
      this.tableConfig.selectorOptions &&
      this.tableConfig.selectorOptions.length > 0
    ) {
      const hasEncargado = this.metadata.Columns.some(
        (col) => col.FieldName === 'encargado',
      );
      if (!hasEncargado) {
        this.metadata.Columns.push(columnEncargado);
      }
    }

    this.paginate();
    this.cdr.markForCheck();
  }

  getVisibleActions(): IActionConfig[] {
    return this.metadata?.Buttons?.filter((btn) => btn.Visible) || [];
  }

  /**
   * Paginación de los elementos de la tabla.
   */
  paginate(): void {
    if (this.paginationConfig.isManualPaginate) {
      this.paginatedItems = [...this.data];
    } else {
      this.paginationConfig.totalItems = this.data.length;
      this.paginationConfig.totalPages = Math.ceil(
        this.paginationConfig.totalItems / this.paginationConfig.pageSize,
      );
      const startIndex =
        (this.paginationConfig.page! - 1) * this.paginationConfig.pageSize;
      this.paginatedItems = this.data.slice(
        startIndex,
        startIndex + this.paginationConfig.pageSize,
      );
    }
  }

  /**
   * Ajusta la configuración de la paginación según si el dispositivo es móvil.
   */
  adjustPagination(): void {
    if (this.isMobile) {
      this.paginationConfig.pageSize = 1;
    } else {
      this.paginationConfig.pageSize = 10;
    }
    this.paginate();
    this.cdr.markForCheck();
  }

  /**
   * Retorna el valor mínimo entre dos valores.
   * @param value1 Primer valor.
   * @param value2 Segundo valor.
   * @returns El valor mínimo entre `value1` y `value2`.
   */
  getMinValue(value1: number, value2: number): number {
    return Math.min(value1, value2);
  }

  /**
   * Filtra y obtiene las columnas visibles en la tabla.
   * @returns Array de las columnas visibles.
   */
  getVisibleColumns(): IColumnConfig[] {
    if (!this.metadata || !this.metadata.Columns) return [];
    return this.metadata.Columns.filter(
      (col, index) =>
        col.Visible && !this.tableConfig.hiddenColumns.includes(index),
    );
  }

  /**
   * Maneja las acciones de la fila al hacer clic en un botón de acción.
   * @param item El elemento de la tabla.
   * @param actionCode El código de la acción que se ejecuta.
   */
  handleAction(item: ISmartListItem, actionCode: string) {
    if (
      !item ||
      item['estado'] === 'asignado' ||
      item['estado'] === 'assigned'
    ) {
      return;
    }

    const action = this.metadata?.Buttons?.find(
      (btn) => btn.Code === actionCode,
    );

    if (action?.ConfirmationMessage) {
      if (confirm(action.ConfirmationMessage)) {
        this.rowAction.emit({ actionType: 'button', action: actionCode, item });
      }
    } else {
      this.rowAction.emit({ actionType: 'button', action: actionCode, item });
    }
  }

  /**
   * Verifica si todos los elementos están seleccionados.
   * @returns `true` si todos están seleccionados, `false` de lo contrario.
   */
  areAllSelected(): boolean {
    return this.paginatedItems.every((item) => item.selected);
  }

  /**
   * Alterna la selección de todos los elementos.
   */
  selectAllResults(): void {
    const allSelected = this.data.every((item) => item.selected);
    this.data.forEach((item) => (item.selected = !allSelected));
    this.selectedItems = this.data.filter((item) => item.selected);
    this.selectedUsers.emit(this.selectedItems);
    this.paginate();
  }

  /**
   * Alterna la selección de todos los elementos paginados en la tabla.
   * Marca todos los elementos como seleccionados o deseleccionados según su estado actual.
   * Emite los elementos seleccionados mediante el evento `selectedUsers`.
   */
  selectAll(): void {
    const allSelected = this.areAllSelected();
    this.paginatedItems.forEach((item) => (item.selected = !allSelected));
    this.selectedUsers.emit(
      this.paginatedItems.filter((item) => item.selected),
    );
    this.cdr.markForCheck();
  }

  /**
   * Alterna la selección de un elemento específico.
   * @param item El elemento de la tabla que se selecciona o deselecciona.
   */
  toggleSelect(item: ISmartListItem): void {
    item.selected = !item.selected;
    this.selectedItems = this.paginatedItems.filter((i) => i.selected);
    this.selectedUsers.emit(this.selectedItems);
    this.cdr.markForCheck();
  }

  /**
   * Navega a una página específica de la tabla.
   * @param page El número de la página a la que se navega.
   */
  goToPage(page: number): void {
    if (page >= 1 && page <= this.paginationConfig.totalPages) {
      this.paginationConfig.page! = page;
      this.pageSelected.emit(page);
      this.paginate();
    }
  }

  /**
   * Método para optimizar el renderizado de filas en el For utilizando una clave única.
   * @param index Índice de la fila en el array.
   * @param item Elemento de la lista.
   * @returns La clave única del elemento o el índice si no se encuentra una clave.
   */
  trackByItem(index: number, item: ISmartListItem): any {
    return item['key'] || index;
  }

  /**
   * Navega a la página anterior.
   */
  previousPage() {
    if (this.paginationConfig.page! > 1) {
      this.goToPage(this.paginationConfig.page! - 1);
    }
  }

  /**
   * Navega a la página siguiente.
   */
  nextPage() {
    if (this.paginationConfig.page! < this.paginationConfig.totalPages) {
      this.goToPage(this.paginationConfig.page! + 1);
    }
  }

  /**
   * Formatea el valor de 'Code' para mostrarlo como título, eliminando prefijos y convirtiendo a un formato legible.
   * Por ejemplo, de 'evowave.SolicitudAmonestaciones' a 'Solicitud Amonestaciones'.
   *
   * @param code - El código a formatear.
   * @returns El nombre del título formateado.
   */
  getTitleFromCode(code: string): string {
    if (!code) return '';

    const formattedTitle = code
      .replace(/^.*\./, '')
      .replace(/([A-Z])/g, ' $1')
      .trim();
    return formattedTitle;
  }

  /**
   * Obtiene la etiqueta del botón basada en el estado de un elemento.
   * @param item El elemento de la tabla.
   * @returns La etiqueta del botón para ese estado.
   */
  getButtonLabel(item: ISmartListItem): string {
    switch (item['estado']) {
      case 'asignado':
      case 'assigned':
        return 'Asignado';
      case 'agregar':
      case 'add':
        return 'Agregar';
      case 'quitar':
      case 'remove':
        return 'Quitar';
      default:
        return '';
    }
  }

  /**
   * Obtiene la clase del tema del botón basada en la acción.
   * @param action El objeto de acción de la tabla.
   * @returns La clase del tema del botón.
   */
  getButtonTheme(action: ISmartListItem): string {
    switch (action['estado']) {
      case 'asignado':
      case 'assigned':
        return 'smart-list-button smart-list-button__assigned';
      case 'agregar':
      case 'add':
        return 'smart-list-button smart-list-button__add';
      case 'quitar':
      case 'remove':
        return 'smart-list-button smart-list-button__delete';
      default:
        return 'smart-list-button smart-list-button__default';
    }
  }

  /**
   * Alterna el estado de orden en la columna seleccionada, incluyendo el estado sin ordenar.
   * @param columnName El nombre del campo de la columna
   */
  toggleSort(columnName: string) {
    const columnIndex = this.getVisibleColumns().findIndex(
      (col) => col.FieldName === columnName,
    );

    // Verifica si la columna es ordenable según la lista de índices de `sortableColumns`
    if (
      columnIndex === -1 ||
      !this.tableConfig.sortableColumns.includes(columnIndex)
    ) {
      return;
    }

    // Alterna el estado de la columna seleccionada entre 'asc', 'desc' y null
    this.sortState[columnName] =
      this.sortState[columnName] === 'asc'
        ? 'desc'
        : this.sortState[columnName] === 'desc'
          ? null
          : 'asc';

    const orderByClause = Object.entries(this.sortState)
      .filter(([_, order]) => order !== null)
      .map(([column, order]) =>
        order === 'asc' ? column : `${column} ${order}`,
      )
      .join(',');

    this.columnSort.emit(orderByClause);
  }

  /**
   * Retorna el ícono correspondiente al estado de la ordenación de una columna si está habilitada para ordenar.
   * @param columnName El nombre del campo de la columna
   * @returns El nombre del ícono para esa columna
   */
  getSortIcon(columnName: string): string {
    const columnIndex = this.getVisibleColumns().findIndex(
      (col) => col.FieldName === columnName,
    );

    // Verifica si la columna es ordenable según la lista de índices de `sortableColumns`
    if (
      columnIndex !== -1 &&
      this.tableConfig.sortableColumns.includes(columnIndex)
    ) {
      switch (this.sortState[columnName]) {
        case 'asc':
          return 'arrow_upward';
        case 'desc':
          return 'arrow_downward';
        default:
          return 'sort';
      }
    }
    return 'sort';
  }

  /**
   * Devuelve las clases CSS que se aplicarán al componente usando el servicio.
   * @returns {string} Clases CSS aplicadas al componente.
   */
  getClasses(context: string): string {
    const baseClasses = this.classUtility.getCombinedClasses(
      context,
      this.tableConfig.twClass,
    );

    // Agrega clases adicionales según el contexto proporcionado
    if (context === 'evo-table-container') {
      return `${baseClasses} evo-table-container-class`;
    } else if (context === 'evo-card-container') {
      return `${baseClasses} evo-card-container-class`;
    }

    return baseClasses;
  }

  /**
   * Cierra el menú de acciones.
   */
  closeActionsMenu() {
    this.isActionsModalOpen = false;
    this.selectedItem = null;
  }

  /**
   * Detecta el tipo de dato de una columna verificando el primer valor válido.
   * Usa un regex para identificar si el valor es una fecha o texto.
   * @param columnName El nombre del campo de la columna
   * @returns 'text' o 'date' dependiendo del tipo de dato
   */
  detectColumnType(columnName: string): 'text' | 'date' {
    const regexDate = /^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(.\d{3}Z)?)?$/; // Regex para identificar fechas

    const firstValidValue = this.data.find(
      (item) => item[columnName] !== null && item[columnName] !== undefined,
    )?.[columnName];

    if (
      typeof firstValidValue === 'string' &&
      regexDate.test(firstValidValue)
    ) {
      return 'date';
    }
    return 'text';
  }

  /**
   * Método para optimizar renderizado de columnas en el *ngFor.
   */
  trackByColumnCode(index: number, column: IColumnConfig): string | number {
    return column?.Code || index;
  }

  /**
   * Genera la clase CSS correspondiente al ícono de ordenamiento.
   * @param columnName El nombre del campo de la columna
   * @returns La clase CSS para el ícono de ordenamiento
   */
  getSortIconClass(columnName: string): string {
    const icon = this.getSortIcon(columnName);
    return `sort-icon ${icon}`;
  }
}
