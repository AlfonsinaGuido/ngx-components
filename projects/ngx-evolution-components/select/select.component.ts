import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { ButtonComponent, IIcon, ISelect } from '../public-api';

@Component({
  selector: 'evo-select',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonComponent,
  ],
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss', '../styles/output.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SelectComponent {
  @Input() control!: FormControl;
  @Input() label?: string;
  @Input() items!: ISelect[];
  @Input() isMultiple?: boolean;
  @Input() isRequired?: boolean;
  @Input() requiredErrorMessage?: string;
  @Input() detail?: string;
  @Input() buttonIcon!: IIcon;
  @Input() twClass?: string;
  @Output() valueChange = new EventEmitter<any>();

  @ViewChild('selectControl') selectControl!: MatSelect;

  /**
   * Limpia el valor del control de input, emite el nuevo valor,
   * y cierra el control de selección si está presente.
   * @public
   * @param {any} event - Evento que contiene el valor del input a emitir.
   * @returns {void} No retorna ningún valor.
   */
  public clean(event: any): void {
    this.control.reset();
    this.valueChange.emit(event.target.value);
    if (this.selectControl) {
      this.selectControl.close();
    }
  }

  /**
   * Emite el valor cambiado del input. *
   * @public
   * @param {any} event - Evento que contiene el nuevo valor del input a emitir.
   * @returns {void} No retorna ningún valor.
   */
  public onValueChange(event: any): void {
    this.valueChange.emit(event.value);
  }
}
