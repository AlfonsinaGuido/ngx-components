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
import { ButtonComponent, IconInterface, SelectInterface } from '../public-api';

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
  @Input() label!: string;
  @Input() items!: SelectInterface[];
  @Input() isMultiple?: boolean;
  @Input() isRequired?: boolean;
  @Input() requiredErrorMessage?: string;
  @Input() detail?: string;
  @Output() valueChange = new EventEmitter<any>();

  icon: IconInterface = {
    icon: 'https://pic.onlinewebfonts.com/thumbnails/icons_320714.svg',
    type: 'svg',
  };

  @ViewChild('selectControl') selectControl!: MatSelect;

  clean(event: any) {
    this.control.reset();
    this.valueChange.emit(event.target.value);
    if (this.selectControl) {
      this.selectControl.close();
    }
  }

  onValueChange(event: any) {
    this.valueChange.emit(event.value);
  }
}
