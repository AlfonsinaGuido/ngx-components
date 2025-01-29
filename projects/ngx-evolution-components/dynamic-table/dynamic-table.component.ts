import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  SimpleChanges,
  ChangeDetectorRef,
  ViewEncapsulation,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from '../pagination/pagination.component';
import { MatIconModule } from '@angular/material/icon';
import {
  IColorMatchRule,
  IColorRuleByColumn,
  IDynamicTableColumn,
  IPaginationConfig,
  IPaginationEvents,
  ITableRow,
} from '../public-api';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'evo-dynamic-table',
  standalone: true,
  imports: [
    CommonModule,
    PaginationComponent,
    FormsModule,
    MatIconModule,
    ButtonComponent,
  ],
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DynamicTableComponent implements OnInit, OnChanges, OnDestroy {
  @Input() columns: IDynamicTableColumn[] = [];
  @Input() data: ITableRow[] = [];
  @Input() paginationConfig: IPaginationConfig = {
    isManualPaginate: false,
    currentPage: 1,
    totalPages: 1,
    pageSize: 5,
    totalItems: 0,
    titles: {
      showing: 'Mostrando',
      results: 'resultados',
      page: 'Página',
      of: 'de',
    },
    page: 0,
  };
  @Input() multiSelect: boolean = false;
  @Input() hiddenColumns: number[] = [];
  @Input() sortableColumns: number[] = [];
  @Input() tagsColumns: number[] = [];
  @Input() colorRules: IColorRuleByColumn = {};
  @Input() maxHeight: string = 'auto';
  @Input() isMobile: boolean = false;
  @Input() emptyStateText: string = 'No hay datos para mostrar';
  @Input() twClass: string = '';

  @Output() selectionChange = new EventEmitter<ITableRow[]>();
  @Output() columnSort = new EventEmitter<
    string | { columnIndex: number; sortDirection: 'asc' | 'desc' | null }
  >();
  @Output() tagClick = new EventEmitter<{
    row: ITableRow;
    columnIndex: number;
  }>();
  @Output() paginationEvents: IPaginationEvents = {
    onPageChange: (page: number) => this.goToPage(page),
    onPreviousPage: () => this.previousPage(),
    onNextPage: () => this.nextPage(),
  };

  paginatedItems: ITableRow[] = [];
  sortState: { [colIndex: number]: 'asc' | 'desc' | null } = {};
  private viewportSubscription!: Subscription;
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.initializeTable();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] || changes['columns'] || changes['paginationConfig']) {
      this.initializeTable();
    }
  }

  ngOnDestroy(): void {
    if (this.viewportSubscription) {
      this.viewportSubscription.unsubscribe();
    }
  }

  /**
   * Inicializa la tabla, configurando la paginación y ordenamiento inicial (si aplica).
   * @private
   */
  private initializeTable(): void {
    this.adjustPagination();
    this.cdr.markForCheck();
  }

  /**
   * Ajusta la lógica de paginación en caso de que sea paginación automática.
   * @private
   */
  private adjustPagination(): void {
    if (this.paginationConfig.isManualPaginate) {
      // Si es paginación manual, el padre es el responsable de "cortar" el data.
      this.paginatedItems = [...this.data];
    } else {
      // Cálculo automático
      this.paginationConfig.totalItems = this.data.length;
      this.paginationConfig.totalPages = Math.ceil(
        this.paginationConfig.totalItems / this.paginationConfig.pageSize,
      );

      const startIndex =
        (this.paginationConfig.currentPage - 1) *
        this.paginationConfig.pageSize;
      const endIndex = startIndex + this.paginationConfig.pageSize;

      this.paginatedItems = this.data.slice(startIndex, endIndex);
    }
  }

  /**
   * Avanza a la página indicada, siempre que sea válida.
   * @param page Número de página (1-based).
   */
  public goToPage(page: number): void {
    if (page < 1 || page > this.paginationConfig.totalPages) return;

    this.paginationConfig.currentPage = page;
    this.adjustPagination();
  }

  /**
   * Navega a la página anterior.
   */
  public previousPage(): void {
    if (this.paginationConfig.currentPage > 1) {
      this.goToPage(this.paginationConfig.currentPage - 1);
    }
  }

  /**
   * Navega a la página siguiente.
   */
  public nextPage(): void {
    if (this.paginationConfig.currentPage < this.paginationConfig.totalPages) {
      this.goToPage(this.paginationConfig.currentPage + 1);
    }
  }

  /**
   * Retorna si todas las filas (de la página actual, si no hay paginación manual) están seleccionadas.
   */
  public areAllSelected(): boolean {
    const targetItems = this.paginationConfig.isManualPaginate
      ? this.data
      : this.paginatedItems;

    return targetItems.every((row) => row.selected);
  }

  /**
   * Selecciona/deselecciona todas las filas.
   */
  public toggleSelectAll(): void {
    const targetItems = this.paginationConfig.isManualPaginate
      ? this.data
      : this.paginatedItems;

    const allSelected = targetItems.every((row) => row.selected);
    targetItems.forEach((row) => (row.selected = !allSelected));

    this.emitSelection();
  }

  /**
   * Selecciona/deselecciona una fila en específico.
   * @param row La fila a togglear.
   */
  public toggleRowSelect(row: ITableRow): void {
    row.selected = !row.selected;
    this.emitSelection();
  }

  /**
   * Emite la lista de filas seleccionadas.
   * @private
   */
  private emitSelection(): void {
    const selectedRows = this.data.filter((item) => item.selected);
    this.selectionChange.emit(selectedRows);
  }

  /**
   * Determina si la columna está oculta (según arreglo de hiddenColumns).
   * @param colIndex Índice de la columna.
   */
  public isColumnHidden(colIndex: number): boolean {
    return this.hiddenColumns.includes(colIndex);
  }

  /**
   * Verifica si la columna está definida como “tag”.
   * @param colIndex Índice de la columna.
   */
  public isTagColumn(colIndex: number): boolean {
    return this.tagsColumns.includes(colIndex);
  }

  /**
   * Se encarga de emitir el evento de sort al padre, alternando entre asc, desc y sin orden.
   * @param colIndex Índice de la columna a ordenar.
   */
  public toggleSort(colIndex: number): void {
    if (!this.sortableColumns.includes(colIndex)) return;

    const currentState = this.sortState[colIndex] || null;
    let newState: 'asc' | 'desc' | null = null;

    if (currentState === null) {
      newState = 'asc';
    } else if (currentState === 'asc') {
      newState = 'desc';
    } else if (currentState === 'desc') {
      newState = null;
    }
    this.sortState[colIndex] = newState;
    let orderBy: string = '';
    const activeSorts: string[] = [];
    for (const idx of Object.keys(this.sortState)) {
      const indexNum = parseInt(idx, 10);
      const dir = this.sortState[indexNum];
      if (dir) {
        activeSorts.push(`${this.columns[indexNum].field} ${dir}`);
      }
    }
    orderBy = activeSorts.join(',');
    this.columnSort.emit(orderBy);
  }

  /**
   * Retorna el ícono de ordenamiento según el estado actual de la columna (asc, desc o nulo).
   * @param colIndex índice de la columna
   */
  public getSortIcon(colIndex: number): string {
    if (!this.sortableColumns.includes(colIndex)) {
      return 'sort'; // Ícono genérico de no-sort
    }
    switch (this.sortState[colIndex]) {
      case 'asc':
        return 'arrow_upward';
      case 'desc':
        return 'arrow_downward';
      default:
        return 'sort';
    }
  }

  /**
   * Retorna las clases o estilo a aplicar a la celda en caso de coincidencia con una regla de color.
   * @param row Fila actual
   * @param colIndex índice de la columna
   */
  public getColorStyle(
    row: ITableRow,
    colIndex: number,
  ): { [klass: string]: any } {
    const rules = this.colorRules[colIndex];
    if (!rules || rules.length === 0) return {};

    const cellValue = row[this.columns[colIndex].field];
    const matchedRule = rules.find((rule) => rule.matchValue === cellValue);
    if (matchedRule) {
      return {
        'background-color': matchedRule.bgColor,
        color: matchedRule.textColor,
      };
    }
    return {};
  }

  /**
   * Devuelve la regla de color (si aplica) para la celda actual,
   * o null si no hay coincidencia.
   */
  private getMatchedColorRule(
    row: ITableRow,
    colIndex: number,
  ): IColorMatchRule | null {
    const rules = this.colorRules[colIndex];
    if (!rules) return null;

    const cellValue = row[this.columns[colIndex].field];
    return rules.find((r) => r.matchValue === cellValue) || null;
  }

  /**
   * Determina si la celda debe mostrarse como un "tag" de color (regla) o no.
   */
  public shouldRenderColorTag(row: ITableRow, colIndex: number): boolean {
    // Decides si hay una regla de color que coincida.
    return !!this.getMatchedColorRule(row, colIndex);
  }

  /**
   * Retorna el estilo para la "etiqueta" (tag)
   * con background y color definidas por la regla.
   */
  public getTagStyle(
    row: ITableRow,
    colIndex: number,
  ): { [k: string]: string } {
    const rule = this.getMatchedColorRule(row, colIndex);
    if (!rule) return {};
    return {
      'background-color': rule.bgColor,
      color: rule.textColor,
    };
  }

  /**
   * Maneja el clic en la "X" de una columna "tag".
   * @param row La fila actual
   * @param colIndex índice de la columna
   */
  public onTagClick(row: ITableRow, colIndex: number): void {
    // Emitimos un evento para que el padre decida qué hacer.
    this.tagClick.emit({ row, columnIndex: colIndex });
  }

  /**
   * Función para trackear elementos en el *ngFor (optimiza performance).
   * @param index Índice
   * @param item Fila
   */
  public trackByRow(index: number, item: ITableRow): any {
    return item?.['id'] || index;
  }

  /**
   * Función para trackear columnas en el *ngFor (optimiza performance).
   * @param index Índice
   * @param column Columna
   */
  public trackByColumn(index: number, column: IDynamicTableColumn): any {
    return column.field || index;
  }
}
