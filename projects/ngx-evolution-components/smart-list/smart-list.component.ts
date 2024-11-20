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
  ISmartListTitles,
  ViewportService,
  ActionMenuComponent,
  PaginationComponent,
  IIcon,
  ClassUtilityService,
} from '../public-api';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

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
  ],
  encapsulation: ViewEncapsulation.None,
})
export class SmartListComponent implements OnInit, OnChanges {
  @Input() smartlistConfig: ISmartlistFullConfig | null = null;
  @Input() data: ISmartListItem[] = [];
  @Input() titles: ISmartListTitles = {
    showing: 'Mostrando',
    results: 'resultados',
    page: 'Pag',
    of: 'de',
  };

  @Input() page: number = 1;
  @Input() pageSize: number = 1;
  @Input() totalPages: number = 2;
  @Input() hiddenColumns: number[] = [];
  @Input() sortableColumns: number[] = [];
  @Input() emptyStateText: string = 'No hay datos para mostrar';
  @Input() twClass: string = '';
  @Input() actionIcons: IIcon[] = [];
  @Input() isManualPaginate: boolean = false;
  @Input() totalItems: number = 0;

  @Output() pageSelected = new EventEmitter<number>();
  @Output() selectedUsers = new EventEmitter<ISmartListItem[]>();
  @Output() rowAction = new EventEmitter<{
    actionType: 'button' | 'checkbox';
    action: string;
    item: ISmartListItem;
  }>();
  @Output() columnSort = new EventEmitter<any>();
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
    this.initialPageSize = this.pageSize;

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
   * Ajusta el pageSize según el estado de `isMobile`.
   */
  adjustPageSize() {
    if (this.isMobile && this.pageSize !== 1) {
      this.pageSize = 1;
      this.pageSizeChanged.emit(this.pageSize);
      this.paginate();
    } else if (!this.isMobile && this.pageSize !== this.initialPageSize) {
      this.pageSize = this.initialPageSize;
      this.pageSizeChanged.emit(this.pageSize);
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
    if (this.isManualPaginate) {
      this.paginatedItems = [...this.data];
    } else {
      this.totalItems = this.data.length;
      this.totalPages = Math.ceil(this.totalItems / this.pageSize);
      const startIndex = (this.page - 1) * this.pageSize;
      this.paginatedItems = this.data.slice(
        startIndex,
        startIndex + this.pageSize,
      );
    }
  }

  /**
   * Ajusta la configuración de la paginación según si el dispositivo es móvil.
   */
  adjustPagination(): void {
    if (this.isMobile) {
      this.pageSize = 1;
    } else {
      this.pageSize = 10;
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
      (col, index) => col.Visible && !this.hiddenColumns.includes(index),
    );
  }

  /**
   * Maneja las acciones de la fila al hacer clic en un botón de acción.
   * @param item El elemento de la tabla.
   * @param actionCode El código de la acción que se ejecuta.
   */
  handleAction(item: ISmartListItem, actionCode: string) {
    if (!item) return;

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
    if (page >= 1 && page <= this.totalPages) {
      this.page = page;
      this.pageSelected.emit(page);
      this.paginate();
    }
  }

  /**
   * Método para optimizar el renderizado de filas en el For utilizando el índice como clave.
   * @param index Índice de la fila en el array.
   * @returns El índice de la fila.
   */
  trackByIndex(index: number): number {
    return index;
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
    if (this.page > 1) {
      this.goToPage(this.page - 1);
    }
  }

  /**
   * Navega a la página siguiente.
   */
  nextPage() {
    if (this.page < this.totalPages) {
      this.goToPage(this.page + 1);
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
        return 'Asignado';
      case 'agregar':
        return 'Agregar';
      case 'quitar':
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
    switch (action['Code']) {
      case 'edit':
        return 'smart-list-button__update';
      case 'new':
        return 'smart-list-button__add';
      case 'delete':
        return 'smart-list-button__delete';
      default:
        return 'smart-list-button__default';
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
    if (columnIndex === -1 || !this.sortableColumns.includes(columnIndex)) {
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
    if (columnIndex !== -1 && this.sortableColumns.includes(columnIndex)) {
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
      this.twClass,
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
