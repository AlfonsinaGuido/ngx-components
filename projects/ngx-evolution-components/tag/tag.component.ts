import { Component, Input } from '@angular/core';
import { IPrioridad } from '../public-api';

@Component({
  selector: 'evo-tag',
  standalone: true,
  imports: [],
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss', '../styles/output.scss'],
})
export class TagComponent {
  @Input() prioridad?: IPrioridad;
  @Input() label!: string;
  @Input() size: 'sm' | 'md' | 'lg' = 'sm';
  @Input() twClass?: string;

  /**
   * Determina el color del texto basado en el background del tag
   * @param backgroundColor color del background
   * @returns color negro o blanco en hexadecimal
   */
  getTextColorBasedOnBackground(backgroundColor: string): string {
    // Remueve el hash del string de color
    const color = backgroundColor.replace('#', '');

    // Parsea el color a RGB
    const r = parseInt(color.substring(0, 2), 16);
    const g = parseInt(color.substring(2, 4), 16);
    const b = parseInt(color.substring(4, 6), 16);

    // Formula de brillo según el color ingresado
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    // Regresa negro o blanco según el resultado de la formula
    return brightness > 128 ? '#000000' : '#FFFFFF';
  }
}
