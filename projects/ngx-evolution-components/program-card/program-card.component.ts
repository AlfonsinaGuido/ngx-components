import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ButtonComponent,
  SvgComponent,
  IProgramCardInterface,
} from '../public-api';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'evo-card',
  standalone: true,
  imports: [CommonModule, ButtonComponent, SvgComponent, MatIconModule],
  templateUrl: './program-card.component.html',
  styleUrls: ['./program-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProgramCardComponent {
  @Input() cardData!: IProgramCardInterface;

  /**
   * Obtiene las clases dinámicas basadas en las propiedades de `cardData`.
   * Retorna un objeto donde cada propiedad es una clase CSS y su valor es un booleano
   * que indica si la clase debe ser aplicada o no.
   */
  get getClasses() {
    const classes = this.cardData.twClass
      ? this.cardData.twClass.split(' ')
      : [];

    const dynamicClasses = {
      'is-fluid': this.cardData.isFluid !== false,
      [`size-${this.cardData.size}`]: !!this.cardData.size,
      'fixed-size': this.cardData.isFluid === false,
    };

    return {
      ...classes.reduce(
        (acc, cls) => {
          acc[cls] = true;
          return acc;
        },
        {} as { [key: string]: boolean },
      ),
      ...dynamicClasses,
    };
  }

  /**
   * Manejador del evento de clic en el botón. Si la propiedad `onButtonClick` está definida
   * en `cardData`, se ejecuta la acción definida en el objeto.
   */
  onButtonClickHandler() {
    if (this.cardData.onButtonClick) {
      this.cardData.onButtonClick.action();
    }
  }
}
