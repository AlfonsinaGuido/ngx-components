import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import {
  ButtonComponent,
  IPaginationConfig,
  ClassUtilityService,
} from '../public-api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pagination',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss', '../styles/output.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PaginationComponent {
  @Input() config: IPaginationConfig = {
    isManualPaginate: false,
    currentPage: 1,
    totalPages: 1,
    pageSize: 10,
    totalItems: 0,
    titles: {
      showing: 'Mostrando',
      results: 'resultados',
      page: 'Página',
      of: 'de',
    },
    twClass: '',
    simplePageIndicator: false,
    nextPage: false,
  };

  @Output() pageSelected = new EventEmitter<{ page: number }>();
  @Output() nextPageClicked = new EventEmitter<void>();
  @Output() previousPageClicked = new EventEmitter<void>();

  constructor(private classUtility: ClassUtilityService) {}

  /**
   * Navega a la página anterior.
   */
  previousPage() {
    if (this.config.currentPage > 1) {
      this.previousPageClicked.emit();
    }
  }

  /**
   * Navega a la página siguiente.
   * Si simplePageIndicator es true, se evalúa la propiedad nextPage para habilitar la lógica.
   * Si simplePageIndicator es false, se ignora nextPage y se emite el evento si aún hay páginas.
   */
  nextPage() {
    if (this.config.simplePageIndicator) {
      if (this.config.nextPage) {
        this.nextPageClicked.emit();
      }
    } else {
      if (this.config.currentPage < this.config.totalPages) {
        this.nextPageClicked.emit();
      }
    }
  }

  /**
   * Retorna el valor mínimo entre dos valores.
   */
  getMinValue(value1: number, value2: number): number {
    return Math.min(value1, value2);
  }

  /**
   * Devuelve las clases CSS que se aplicarán al acordeón usando el servicio.
   * @returns {string} Clases CSS aplicadas al acordeón.
   */
  getClasses(): string {
    return this.classUtility.getCombinedClasses(
      'evo-pagination',
      this.config.twClass,
    );
  }

  /**
   * Obtiene el texto para el indicador de la página actual.
   * Si simplePageIndicator es true, muestra solo "Página n".
   * Caso contrario, muestra "Página n de n".
   */
  getPageIndicatorText(): string {
    if (this.config.simplePageIndicator) {
      return `${this.config.titles.page} ${this.config.currentPage}`;
    }
    return `${this.config.titles.page} ${this.config.currentPage} ${this.config.titles.of} ${this.config.totalPages}`;
  }

  /**
   * Obtiene el texto para mostrar el rango de ítems y el total de resultados.
   */
  getItemsRangeText(): string {
    if (this.config.hideItemsRange) {
      return '';
    }
    let startItem = this.config.currentPage * this.config.pageSize;
    let endItem = this.config.totalItems;

    if (startItem > endItem) {
      startItem = endItem;
    }

    return `${this.config.titles.showing} ${startItem} - ${endItem} ${this.config.titles.results}`;
  }
}
