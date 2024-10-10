import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ButtonComponent, IAccordionConfig, IIcon } from '../public-api';
import { ClassUtilityService } from '../shared/services/class-utility.service';

@Component({
  selector: 'evo-accordion',
  standalone: true,
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss', '../styles/output.scss'],
  imports: [CommonModule, ButtonComponent],
  encapsulation: ViewEncapsulation.None,
})
export class AccordionComponent {
  @Input() config: IAccordionConfig = {
    title: '',
    icon: { type: 'class', icon: '' },
    height: 'auto',
    twClass: '',
  };

  isOpen: boolean = false;

  constructor(private classUtility: ClassUtilityService) {}

  /**
   * Obtiene el valor máximo de altura permitido para el acordeón.
   * Si el valor de height es 'auto', el maxHeight será 'none' (sin restricciones),
   * de lo contrario, será el valor del height proporcionado.
   * @returns {string} El valor de max-height aplicado al acordeón.
   */
  get maxHeight(): string {
    return this.config.height === 'auto' ? 'none' : this.config.height;
  }

  /**
   * Alterna el estado abierto/cerrado del acordeón.
   * Si está abierto, lo cierra; si está cerrado, lo abre.
   */
  toggleAccordion() {
    this.isOpen = !this.isOpen;
  }

  /**
   * Devuelve las clases CSS que se aplicarán al acordeón usando el servicio.
   * @returns {string} Clases CSS aplicadas al acordeón.
   */
  getClasses(): string {
    return this.classUtility.getCombinedClasses(
      'evo-accordion',
      this.config.twClass,
    );
  }
}
