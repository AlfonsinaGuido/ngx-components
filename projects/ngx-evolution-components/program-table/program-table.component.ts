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
  HostListener,
  ElementRef,
} from '@angular/core';

import {
  ISmartlistFullConfig,
  ITableItem,
  IColumnConfig,
  ISmartlistMetadata,
  IActionConfig,
  ButtonComponent,
  ITableTitles,
} from '../public-api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'program-table',
  templateUrl: './program-table.component.html',
  styleUrls: ['./program-table.component.scss', '../styles/output.scss'],
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  encapsulation: ViewEncapsulation.None,
})
export class ProgramTableComponent implements OnInit, OnChanges {
  @Input() smartlistConfig: ISmartlistFullConfig | null = null;
  @Input() data: ITableItem[] = [];
  @Input() titles: ITableTitles = {
    mostrando: 'Mostrando',
    resultados: 'resultados',
  };

  @Input() page: number = 1;
  @Input() pageSize: number = 10;
  @Input() totalPages: number = 1;

  @Input() hiddenColumns: number[] = [];

  @Output() pageSelected = new EventEmitter<number>();
  @Output() selectedUsers = new EventEmitter<ITableItem[]>();
  @Output() rowAction = new EventEmitter<{
    actionType: 'button' | 'checkbox';
    action: string;
    item: ITableItem;
  }>();
  @Output() columnSort = new EventEmitter<{
    column: string;
    order: 'asc' | 'desc' | null;
    dataType: 'text' | 'date';
  }>();
  @Output() pageSizeChanged = new EventEmitter<number>();

  isMobile: boolean = false;
  isActionsModalOpen: boolean = false;
  paginatedItems: ITableItem[] = [];
  totalItems: number = 0;
  selectedItems: ITableItem[] = [];
  selectedItem: ITableItem | null = null;
  metadata: ISmartlistMetadata | null = null;
  currentItemActions: IActionConfig[] = [];
  private sortState: { [key: string]: 'asc' | 'desc' | null } = {};
  initialPageSize: number = 5;

  constructor(
    private cdr: ChangeDetectorRef,
    private eRef: ElementRef,
  ) {}

  /**
   * Inicializa la tabla y verifica el viewport al cargar el componente.
   */
  ngOnInit() {
    this.initialPageSize = this.pageSize;
    this.checkViewport();
    this.initializeTable();
  }

  /**
   * Detecta cuando la ventana cambia de tamaño y ajusta el estado `isMobile`.
   * @param event Evento de redimensionamiento.
   */
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkViewport();
  }

  /**
   * Verifica si el tamaño de la ventana corresponde a un dispositivo móvil y ajusta el pageSize.
   */
  checkViewport() {
    const wasMobile = this.isMobile;
    this.isMobile = window.innerWidth <= 768;

    if (this.isMobile && !wasMobile) {
      if (this.pageSize !== 1) {
        this.pageSize = 1;
        this.pageSizeChanged.emit(this.pageSize);
        this.paginate();
      }
    } else if (!this.isMobile && wasMobile) {
      if (this.pageSize !== this.initialPageSize) {
        this.pageSize = this.initialPageSize;
        this.pageSizeChanged.emit(this.pageSize);
        this.paginate();
      }
    }
  }

  /**
   * Cierra el menú de acciones cuando se hace clic fuera de él.
   * @param event Evento de clic.
   */
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const clickTarget = event.target as HTMLElement;
    if (
      this.isActionsModalOpen &&
      this.selectedItem &&
      this.eRef.nativeElement.contains(clickTarget) === false
    ) {
      this.closeActionsModal();
    }
  }

  /**
   * Alterna el menú de acciones para un elemento específico.
   * @param item El elemento de la tabla que se selecciona.
   */
  toggleActionsMenu(item: ITableItem) {
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
  openActionsModal(item: ITableItem) {
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
    if (changes['smartlistConfig'] || changes['data']) {
      this.metadata = this.smartlistConfig?.Metadata || null;
      this.initializeTable();
    }
  }

  /**
   * Inicializa la tabla y ajusta los elementos paginados.
   */
  initializeTable() {
    this.metadata = this.smartlistConfig?.Metadata || null;
    this.totalItems = this.data.length;
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
  handleAction(item: ITableItem, actionCode: string) {
    if (!item) return;

    const action: IActionConfig | undefined = this.metadata?.Buttons?.find(
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
  toggleSelect(item: ITableItem) {
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
   * Obtiene la cadena localizada a partir de una clave.
   * @param key Clave de la cadena localizada.
   * @returns La cadena localizada o `undefined`.
   */
  getLocalizedString(key: string): string | undefined {
    return this.metadata?.LocalizedStrings?.find((str) => str.Key === key)
      ?.Translation;
  }

  /**
   * Obtiene la etiqueta del botón basada en el estado de un elemento.
   * @param item El elemento de la tabla.
   * @returns La etiqueta del botón para ese estado.
   */
  getButtonLabel(item: ITableItem): string {
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
  getButtonTheme(action: ITableItem): string {
    switch (action['Code']) {
      case 'edit':
        return 'program-table-button__update';
      case 'new':
        return 'program-table-button__add';
      case 'delete':
        return 'program-table-button__delete';
      default:
        return 'program-table-button__default';
    }
  }

  /**
   * Alterna el estado de orden en la columna seleccionada y emite un evento al padre.
   * @param columnName El nombre del campo de la columna
   */
  toggleSort(columnName: string) {
    // Resetea la ordenación de otras columnas
    Object.keys(this.sortState).forEach((key) => {
      if (key !== columnName) {
        this.sortState[key] = null;
      }
    });

    // Alterna el estado de la columna seleccionada
    switch (this.sortState[columnName]) {
      case 'asc':
        this.sortState[columnName] = 'desc';
        break;
      case 'desc':
        this.sortState[columnName] = null;
        break;
      default:
        this.sortState[columnName] = 'asc';
    }

    // Detecta el tipo de datos (texto o fecha) del primer valor válido en esa columna
    const dataType = this.detectColumnType(columnName);

    // Emite el evento de ordenamiento al padre
    this.columnSort.emit({
      column: columnName,
      order: this.sortState[columnName],
      dataType,
    });
  }

  /**
   * Retorna el ícono correspondiente al estado de la ordenación de una columna.
   * @param columnName El nombre del campo de la columna
   * @returns El nombre del ícono para esa columna
   */
  getSortIcon(columnName: string): string {
    switch (this.sortState[columnName]) {
      case 'asc':
        return 'arrow_upward';
      case 'desc':
        return 'arrow_downward';
      default:
        return 'sort';
    }
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
