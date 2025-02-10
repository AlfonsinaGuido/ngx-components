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
  AutocompleteComponent,
} from '../public-api';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
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
  }

  /**
   * Inicializa form y validators del formulario dinamico contenido en el filter
   */
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

  /**
   * Emite el form, al componente padre
   */
  applyFilter() {
    this.filterResponse.emit(this.response);
  }

  /**
   * Almacena los resultados de los campos filtrados y los almacena
   * en un solo objeto de response
   * @param event respuesta del input
   * @param id codigo del campo
   */
  getInputValue(event: any, id: string) {
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

  /**
   * Limpia formulario y emite una respuesta de campos vacios
   */
  cleanFields() {
    this.fields.fields.forEach((value) => {
      value.control.reset();
    });
    this.response.forEach((value) => {
      value.content = '';
    });
    this.filterResponse.emit(this.response);
  }

  /**
   * Devuelve el FormControl dependiendo del input ingresado
   * @param fieldName codigo del input
   * @returns FormControl
   */
  getFormControl(fieldName: string): FormControl {
    return this.form.controls[fieldName] as FormControl;
  }
}
