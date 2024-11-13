import { AsyncPipe } from '@angular/common';
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
  IAutocompleteItems,
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
    AsyncPipe,
    ButtonComponent,
  ],
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss', '../styles/output.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AutocompleteComponent implements OnInit, OnDestroy {
  @Input() inputConfiguration!: IInput;
  @Input() items: IAutocompleteItems[] = [];
  @Output() valueChange = new EventEmitter<any>();
  public filteredOptions: IAutocompleteItems[];
  private valueChangesSubscription: Subscription = new Subscription();
  matcher = new CustomErrorStateMatcher();

  @ViewChild('input') input!: ElementRef<HTMLInputElement>;

  constructor() {
    this.filteredOptions = this.items.slice();
  }

  ngOnInit() {
    this.valueChangesSubscription =
      this.inputConfiguration.control.valueChanges.subscribe((value) => {
        this.valueChange.emit(value);
      });
  }

  ngOnDestroy() {
    if (this.valueChangesSubscription) {
      this.valueChangesSubscription.unsubscribe();
    }
  }

  /**
   * Filtra una lista de opciones basándose en el valor del input.
   * Convierte el valor del input a minúsculas y filtra los elementos
   * de `items` cuyo campo `Description` contiene el valor ingresado.
   * @public
   * @returns {void} No retorna ningún valor.
   */
  public filter(): void {
    const filterValue = this.input.nativeElement.value.toLowerCase();
    this.filteredOptions = this.items.filter((o) =>
      o.Description.toLowerCase().includes(filterValue),
    );
  }

  /**
   * Restaura el control asociado al input a su valor inicial y emite
   * el valor actual a través del evento `valueChange`.
   * @public
   * @param {any} event - Evento que contiene el valor del input a emitir.
   * @returns {void} No retorna ningún valor.
   */
  public clean(event: any): void {
    this.inputConfiguration.control.reset();
    this.valueChange.emit(event.target.value);
  }
}
