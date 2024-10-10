import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ButtonComponent,
  SvgComponent,
  IProgramCardConfigInterface,
} from '../public-api';
import { MatIconModule } from '@angular/material/icon';
import { ClassUtilityService } from '../shared/services/class-utility.service';

@Component({
  selector: 'evo-card',
  standalone: true,
  imports: [CommonModule, ButtonComponent, SvgComponent, MatIconModule],
  templateUrl: './program-card.component.html',
  styleUrls: ['./program-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProgramCardComponent {
  @Input() config!: IProgramCardConfigInterface;

  constructor(private classUtility: ClassUtilityService) {}

  /**
   * Devuelve las clases CSS que se aplicarán.
   * Combina las clases base con las clases de Tailwind CSS especificadas en el parámetro `twClass`
   * y las clases dinámicas definidas.
   * @returns {string} Clases CSS aplicadas.
   */
  getClasses(): string {
    const defaultClasses = ['evo-program-card'];

    const dynamicClasses = [
      this.config.isFluid !== false ? 'is-fluid' : '',
      this.config.size ? `size-${this.config.size}` : '',
      this.config.isFluid === false ? 'fixed-size' : '',
    ];

    const combinedClasses = [...defaultClasses, ...dynamicClasses]
      .join(' ')
      .trim();

    return this.classUtility.getCombinedClasses(
      combinedClasses,
      this.config.twClass,
    );
  }

  /**
   * Manejador del evento de clic en el botón. Si la propiedad `onButtonClick` está definida
   * en `config`, se ejecuta la acción definida en el objeto.
   */
  onButtonClickHandler() {
    if (this.config.onButtonClick) {
      this.config.onButtonClick.action();
    }
  }
}
