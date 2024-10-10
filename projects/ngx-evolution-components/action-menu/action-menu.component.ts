import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
} from '@angular/core';
import {
  ButtonComponent,
  IActionConfig,
  IActionMenuConfig,
  IIcon,
} from '../public-api';
import { ClassUtilityService } from '../shared/services/class-utility.service';

@Component({
  selector: 'action-menu',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './action-menu.component.html',
  styleUrls: ['./action-menu.component.scss', '../styles/output.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ActionMenuComponent {
  @Input() config: IActionMenuConfig = {
    actions: [],
    isOpen: false,
    icons: [],
    twClass: '',
  };
  @Output() actionSelected = new EventEmitter<string>();
  @Output() menuClosed = new EventEmitter<void>();

  constructor(private classUtility: ClassUtilityService) {}

  /**
   * Devuelve las clases CSS que se aplicarán al acordeón usando el servicio.
   * @returns {string} Clases CSS aplicadas al acordeón.
   */
  getClasses(): string {
    return this.classUtility.getCombinedClasses(
      this.config.isOpen ? 'evo-actions-menu open' : 'evo-actions-menu',
      this.config.twClass,
    );
  }

  /**
   * Llama al evento de acción seleccionada y cierra el menú
   * @param action Acción seleccionada
   */
  onActionClick(action: IActionConfig) {
    this.actionSelected.emit(action.Code);
    this.closeActionsMenu();
  }

  /**
   * Cierra el menú de acciones
   */
  closeActionsMenu() {
    this.menuClosed.emit();
  }

  /**
   * Obtiene el ícono correspondiente para una acción basada en su índice.
   * @param index El índice de la acción.
   * @returns El ícono correspondiente o un ícono con nombre vacío si no hay ícono.
   */
  getActionIcon(index: number): IIcon {
    if (this.config.icons && index >= 0 && index < this.config.icons.length) {
      return this.config.icons[index];
    }
    // Retorna un ícono con nombre vacío en lugar de `undefined`
    return { type: 'class', icon: '' };
  }

  // Función para determinar si se debe mostrar el tooltip
  shouldShowTooltip(text: string): boolean {
    const maxLength = 30; // Ajusta este valor según el espacio disponible para el texto
    return text.length > maxLength;
  }
}
