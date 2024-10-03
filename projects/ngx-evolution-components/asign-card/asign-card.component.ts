import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from '../public-api';
import { ICardConfig, ICardItem } from '../public-api';

@Component({
  selector: 'evo-card',
  standalone: true,
  imports: [CommonModule, MatIconModule, ButtonComponent],
  templateUrl: './asign-card.component.html',
  styleUrls: ['./asign-card.component.scss', '../styles/output.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CardComponent {
  @Input() config: ICardConfig = {
    titlep1: '',
    titlep2: '',
    items: [],
    buttonText: 'Acción',
    emptyStateText: 'No hay elementos disponibles',
  };
  @Output() removeItem = new EventEmitter<string>();
  @Output() buttonClick = new EventEmitter<string[]>();
  hoveredItem: string | null = null;

  /**
   * Devuelve las clases CSS que se aplicarán a la tarjeta.
   * Combina las clases base con las clases de Tailwind CSS especificadas en la configuración.
   * @returns {string} Clases CSS aplicadas a la tarjeta.
   */
  getCardClasses(): string {
    const baseClasses = 'card';
    const dynamicClasses = this.config.twClass ? this.config.twClass : '';
    return `${baseClasses} ${dynamicClasses}`.trim();
  }

  /**
   * Elimina un elemento de la lista y emite el evento correspondiente.
   * @param {ICardItem} item - Elemento que se va a eliminar.
   */
  remove(item: ICardItem): void {
    this.config.items = this.config.items.filter((i) => i.id !== item.id);
    this.removeItem.emit(item.id);
  }

  /**
   * Maneja el clic en el botón de acción y emite un evento con los IDs de los elementos.
   */
  onButtonClick(): void {
    const itemIds = this.config.items.map((item) => item.id);
    this.buttonClick.emit(itemIds);
  }

  /**
   * Devuelve el número total de elementos en la tarjeta.
   * @returns {number} Número total de elementos.
   */
  get totalItems(): number {
    return this.config.items.length;
  }
}
