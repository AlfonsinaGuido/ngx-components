import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ClassUtilityService } from '../public-api';

@Component({
  selector: 'evo-search-bar',
  standalone: true,
  imports: [CommonModule, MatIconModule, FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss', '../styles/output.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SearchBarComponent implements OnChanges {
  @Input() placeholder: string = 'Buscar...';
  @Input() twClass: string = '';
  @Output() searchQuery = new EventEmitter<string>();

  inputValue: string = '';
  private typingTimeout: any;

  constructor(private classUtility: ClassUtilityService) {}

  /**
   * Detecta cambios en las propiedades de entrada y actualiza el campo de búsqueda si es necesario.
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['placeholder'] && !changes['placeholder'].isFirstChange()) {
      this.clearInput(); // Limpia el campo cuando cambia el placeholder
    }
  }

  /**
   * Maneja el evento de entrada en el campo de búsqueda y emite la consulta de búsqueda después de un tiempo de espera.
   * @param {Event} event - El evento de entrada del campo de búsqueda.
   */
  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.inputValue = target.value;
    clearTimeout(this.typingTimeout);
    this.typingTimeout = setTimeout(() => {
      this.emitSearch(); // Emitir siempre el valor actual, incluso si está vacío
    }, 400);
  }

  /**
   * Emite el valor de la búsqueda, incluyendo el valor vacío si el campo está vacío.
   */
  emitSearch(): void {
    this.searchQuery.emit(this.inputValue); // Emitir siempre el valor actual
  }

  /**
   * Limpia el campo de entrada y emite un valor vacío.
   */
  clearInput(): void {
    this.inputValue = '';
    this.emitSearch(); // Emitir un valor vacío explícitamente
  }

  /**
   * Devuelve las clases CSS que se aplicarán al componente usando el servicio.
   * @returns {string} Clases CSS aplicadas al componente.
   */
  getClasses(): string {
    return this.classUtility.getCombinedClasses('evo-search-bar', this.twClass);
  }
}
