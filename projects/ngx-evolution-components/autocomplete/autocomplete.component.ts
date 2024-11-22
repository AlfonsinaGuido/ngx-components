import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  ButtonComponent,
  CustomErrorStateMatcher,
  IValueList,
  IInput,
} from '../public-api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'evo-autocomplete',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    ButtonComponent,
  ],
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss', '../styles/output.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AutocompleteComponent implements OnInit, OnDestroy {
  @Input() inputConfiguration!: IInput;
  @Input() items: IValueList[] = [];
  @Output() valueChange = new EventEmitter<any>();
  public filteredOptions: IValueList[];
  private valueChangesSubscription: Subscription = new Subscription();
  matcher = new CustomErrorStateMatcher();

  @ViewChild('input') input!: ElementRef<HTMLInputElement>;

  constructor() {
    this.filteredOptions = this.items.slice();
  }

  ngOnInit() {
    this.valueChangesSubscription =
      this.inputConfiguration.control.valueChanges.subscribe((value) => {
        if (value) this.valueChange.emit(value.Id);
      });
  }

  ngOnDestroy() {
    if (this.valueChangesSubscription) {
      this.valueChangesSubscription.unsubscribe();
    }
  }

  /**
   * Formatea el valor que se muestra en el input del autocompletado.
   * Si la opción es nula o indefinida, devuelve una cadena vacía.
   * @param {IValueList | null} option - La opción seleccionada de la lista. Puede ser nula.
   * @returns {string} La descripción de la opción seleccionada, o una cadena vacía si la opción es nula o no tiene descripción.
   */
  public displayFn(option: IValueList | null): string {
    return option?.Description ?? '';
  }

  /**
   * Filtra una lista de opciones basándose en el valor del input.
   * Convierte el valor del input a minúsculas y filtra los elementos
   * de `items` cuyo campo `Description` contiene el valor ingresado.
   */
  public filter(): void {
    const filterValue = this.input.nativeElement.value.toLowerCase();
    this.filteredOptions = this.items.filter((o) =>
      o.Description.toLowerCase().includes(filterValue),
    );
  }

  /**
   * Restaura el control asociado al input a su valor inicial.
   */
  public clean(): void {
    this.inputConfiguration.control.reset();
  }
}
