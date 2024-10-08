import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { ButtonComponent, IPaginationConfig } from '../public-api';
import { CommonModule } from '@angular/common';
import { ClassUtilityService } from '../shared/services/class-utility.service';

@Component({
  selector: 'pagination',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PaginationComponent {
  @Input() config: IPaginationConfig = {
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
   */
  nextPage() {
    if (this.config.currentPage < this.config.totalPages) {
      this.nextPageClicked.emit();
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
      'pagination flex justify-around items-center mt-4',
      this.config.twClass,
    );
  }

  /**
   * Obtiene el texto para el indicador de la página actual y el total de páginas.
   */
  getPageIndicatorText(): string {
    return `${this.config.titles.page} ${this.config.currentPage} ${this.config.titles.of} ${this.config.totalPages}`;
  }

  /**
   * Obtiene el texto para mostrar el rango de ítems y el total de resultados.
   */
  getItemsRangeText(): string {
    const startItem = (this.config.currentPage - 1) * this.config.pageSize + 1;
    const endItem = this.getMinValue(
      this.config.currentPage * this.config.pageSize,
      this.config.totalItems,
    );
    return `${this.config.titles.showing} ${startItem} - ${endItem} ${this.config.titles.results}`;
  }
}
