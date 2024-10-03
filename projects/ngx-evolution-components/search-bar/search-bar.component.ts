import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'evo-search-bar',
  standalone: true,
  imports: [CommonModule, MatIconModule, FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss', '../styles/output.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SearchBarComponent {
  @Input() placeholder: string = 'Buscar...';
  @Output() searchQuery = new EventEmitter<string>();

  inputValue: string = '';
  private typingTimeout: any;

  onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.inputValue = target.value;

    // Limpiar el timeout anterior
    clearTimeout(this.typingTimeout);

    // Iniciar un nuevo timeout
    this.typingTimeout = setTimeout(() => {
      this.emitSearch();
    }, 400);
  }

  emitSearch() {
    if (this.inputValue.trim() !== '') {
      this.searchQuery.emit(this.inputValue);
    }
  }

  clearInput() {
    this.inputValue = '';
    this.searchQuery.emit(this.inputValue);
  }
}
