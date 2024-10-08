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
} from '../public-api';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { ClassUtilityService } from '../shared/services/class-utility.service';

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
  @Input() pageSize: number = 10;
  @Input() totalPages: number = 1;
  @Input() hiddenColumns: number[] = [];
  @Input() sortableColumns: number[] = [];
  @Input() emptyStateText: string = 'No hay datos para mostrar';
  @Input() twClass: string = '';
  @Input() actionIcons: IIcon[] = [];

  @Output() pageSelected = new EventEmitter<number>();
  @Output() selectedUsers = new EventEmitter<ISmartListItem[]>();
  @Output() rowAction = new EventEmitter<{
    actionType: 'button' | 'checkbox';
    action: string;
    item: ISmartListItem;
  }>();
  @Output() columnSort = new EventEmitter<{
    column: string;
    order: 'asc' | 'desc' | null;
    dataType: 'text' | 'date';
  }>();
  @Output() pageSizeChanged = new EventEmitter<number>();

  isMobile: boolean = false;
  isActionsModalOpen: boolean = false;
  paginatedItems: ISmartListItem[] = [];
  totalItems: number = 0;
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
  ngOnInit() {
    this.initialPageSize = this.pageSize;

    this.viewportSubscription = this.viewportService
      .getIsMobile()
      .subscribe((isMobile) => {
        this.isMobile = isMobile;
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
  ngOnChanges(changes: SimpleChanges) {
    if (changes['smartlistConfig'] && changes['smartlistConfig'].currentValue) {
      this.metadata = this.smartlistConfig?.Metadata || null;
      this.totalItems = this.data.length; // Asegúrate de actualizar `totalItems` correctamente
      this.initializeTable();
    }
  }
  

  /**
   * Inicializa la tabla y ajusta los elementos paginados.
   */
  initializeTable() {
    this.metadata = this.smartlistConfig?.Metadata || null;
    this.totalItems = this.data.length;
    this.page = 1;
    this.paginate();
  }

  /**
   * Paginación de los elementos de la tabla.
   */
  paginate() {
    const startIndex = (this.page - 1) * this.pageSize;
    this.paginatedItems =
      this.data?.slice(startIndex, startIndex + this.pageSize) || [];
    this.totalPages = Math.ceil(this.totalItems / this.pageSize);
    this.cdr.detectChanges();
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
    return (
      this.paginatedItems.length > 0 &&
      this.paginatedItems.every((item) => item.selected)
    );
  }

  /**
   * Alterna la selección de todos los elementos.
   */
  selectAllResults() {
    const allSelected = this.areAllSelected();
    this.data.forEach((item) => {
      item.selected = !allSelected;
    });
    this.selectedItems = this.data.filter((item) => item.selected);
    this.selectedUsers.emit(this.selectedItems);
    this.paginate();
  }

  /**
   * Alterna la selección de un elemento específico.
   * @param item El elemento de la tabla que se selecciona o deselecciona.
   */
  toggleSelect(item: ISmartListItem) {
    item.selected = !item.selected;
    if (item.selected) {
      this.selectedItems.push(item);
    } else {
      this.selectedItems = this.selectedItems.filter(
        (selected) => selected !== item,
      );
    }
    this.selectedUsers.emit(this.selectedItems);
  }

  /**
   * Navega a una página específica de la tabla.
   * @param page El número de la página a la que se navega.
   */
  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.page = page;
      this.paginate();
      this.pageSelected.emit(page);
    }
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

    // Remueve prefijos como 'evowave.' y convierte camelCase a formato de palabras con espacios.
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
   * Alterna el estado de orden en la columna seleccionada solo si está habilitada para ordenar.
   * @param columnName El nombre del campo de la columna
   */
  toggleSort(columnName: string) {
    const columnIndex = this.metadata?.Columns.findIndex(
      (col) => col.FieldName === columnName,
    );
  
    if (
      columnIndex === undefined ||
      !this.sortableColumns?.includes(columnIndex)
    ) {
      return;
    }
  
    // Resetea la ordenación de otras columnas
    Object.keys(this.sortState).forEach((key) => {
      if (key !== columnName) {
        this.sortState[key] = null;
      }
    });
  
    // Alterna el estado de la columna seleccionada
    this.sortState[columnName] =
      this.sortState[columnName] === 'asc' ? 'desc' : 'asc';
  
    this.columnSort.emit({
      column: columnName,
      order: this.sortState[columnName],
      dataType: this.detectColumnType(columnName),
    });
  }
  

  /**
   * Retorna el ícono correspondiente al estado de la ordenación de una columna si está habilitada para ordenar.
   * @param columnName El nombre del campo de la columna
   * @returns El nombre del ícono para esa columna
   */
getSortIcon(columnName: string): string {
  const columnIndex = this.metadata?.Columns.findIndex(
    (col) => col.FieldName === columnName,
  );

  if (
    columnIndex !== undefined &&
    this.sortableColumns?.includes(columnIndex)
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
  return '';
}

  /**
   * Devuelve las clases CSS que se aplicarán al componente usando el servicio.
   * @returns {string} Clases CSS aplicadas al componente.
   */
  getClasses(context: string): string {
    const baseClasses = this.classUtility.getCombinedClasses(
      'layout',
      this.twClass,
    );

    // Agrega clases adicionales según el contexto proporcionado
    if (context === 'table-container') {
      return `${baseClasses} table-container-class`;
    } else if (context === 'card-container') {
      return `${baseClasses} card-container-class`;
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
}
