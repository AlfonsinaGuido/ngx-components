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
import { ButtonComponent, IIcon, IValueList } from '../public-api';

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
  @Input() items!: IValueList[];
  @Input() isMultiple?: boolean;
  @Input() isRequired?: boolean;
  @Input() requiredErrorMessage?: string;
  @Input() detail?: string;
  @Input() buttonIcon!: IIcon;
  @Input() twClass?: string;
  @Output() valueChange = new EventEmitter<any>();

  @ViewChild('selectControl') selectControl!: MatSelect;

  /**
   * Limpia el valor del control, emite el nuevo valor,
   * y cierra el control de selección si está presente.
   */
  public clean(): void {
    this.control.reset();
    this.valueChange.emit(this.control.value);
    if (this.selectControl) {
      this.selectControl.close();
    }
  }

  /**
   * Emite el nuevo valor del control.
   */
  public onValueChange(): void {
    this.valueChange.emit(this.control.value);
  }
}
