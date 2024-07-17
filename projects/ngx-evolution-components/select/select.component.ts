import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
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
  styleUrl: './select.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class SelectComponent {
  @Input() control!: FormControl;
  @Input() label!: string;
  @Input() items!: SelectInterface[];
  @Input() isMultiple?: boolean;
  @Input() isRequired?: boolean;
  @Input() errorMessage?: string;
  @Input() detail?: string;

  icon: IconInterface = {
    icon: 'https://pic.onlinewebfonts.com/thumbnails/icons_320714.svg',
    type: 'svg',
  };

  @ViewChild('selectControl') selectControl!: MatSelect;

  clean() {
    this.control.reset();
    if (this.selectControl) {
      this.selectControl.close();
    }
  }
}
