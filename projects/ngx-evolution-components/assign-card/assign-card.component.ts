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
import { ClassUtilityService } from '../shared/services/class-utility.service';

@Component({
  selector: 'assign-card',
  standalone: true,
  imports: [CommonModule, MatIconModule, ButtonComponent],
  templateUrl: './assign-card.component.html',
  styleUrls: ['./assign-card.component.scss', '../styles/output.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AssignCardComponent {
  @Input() config: ICardConfig = {
    assignActionText: '',
    assignTargetText: '',
    items: [],
    buttonText: 'Acción',
    emptyStateText: 'No hay elementos disponibles',
  };
  @Output() removeItem = new EventEmitter<string>();
  @Output() buttonClick = new EventEmitter<string[]>();
  hoveredItem: string | null = null;

  constructor(private classUtility: ClassUtilityService) {}

  /**
   * Devuelve las clases CSS que se aplicarán al acordeón usando el servicio.
   * @returns {string} Clases CSS aplicadas al acordeón.
   */
  getClasses(): string {
    return this.classUtility.getCombinedClasses('card', this.config.twClass);
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
