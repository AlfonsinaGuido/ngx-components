import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import {
  InputComponent,
  ButtonComponent,
  SearchBarComponent,
  IFilter,
  SelectComponent,
  IFilterResponse,
} from '../public-api';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AutocompleteComponent } from '../autocomplete/autocomplete.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'evo-filter',
  standalone: true,
  imports: [
    InputComponent,
    ButtonComponent,
    SearchBarComponent,
    CommonModule,
    AutocompleteComponent,
    SelectComponent,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class FilterComponent implements OnInit {
  @Input() fields: IFilter = {
    fields: [],
  };
  @Output() filterResponse = new EventEmitter<any>();
  public form!: FormGroup;
  response: IFilterResponse[] = [];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
    console.log('Input de campos ingresados ', this.fields);
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      defaultFieldSelect: new FormControl('', []),
      multipleFieldSelect: new FormControl([], []),
      requiredFieldSelect: new FormControl('', []),
      emailFieldInput: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      patternFieldInput: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\+502 \d{4} \d{4}$/),
      ]),
      requiredFieldAutocomplete: new FormControl('', [Validators.required]),
    });
  }

  applyFilter() {
    this.filterResponse.emit(this.response);
  }

  testingparams(event: any, id: string) {
    const index = this.response.findIndex((obj) => obj.id === id);

    if (index !== -1) {
      this.response[index] = {
        id: id,
        content: event,
      };
    } else {
      this.response.push({
        id: id,
        content: event,
      });
    }
  }

  cleanFields() {
    this.fields.fields.forEach((value) => {
      value.control.reset();
    });
    this.response.forEach((value) => {
      value.content = '';
    });
    this.filterResponse.emit(this.response);
  }

  getFormControl(fieldName: string): FormControl {
    return this.form.controls[fieldName] as FormControl;
  }
}
