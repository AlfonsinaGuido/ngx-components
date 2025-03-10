import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  ButtonComponent,
  CustomErrorStateMatcher,
  IInput,
} from '../public-api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'evo-input',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    ButtonComponent,
  ],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss', '../styles/output.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class InputComponent implements OnInit, OnDestroy {
  @Input() inputConfiguration!: IInput;
  @Output() valueChange = new EventEmitter<any>();
  private valueChangesSubscription: Subscription = new Subscription();
  matcher = new CustomErrorStateMatcher();

  ngOnInit() {
    if (!this.inputConfiguration.inputType)
      this.inputConfiguration.inputType = 'text';
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
   * Limpia el valor del control de input y emite el nuevo valor.
   * @public
   * @param {any} event - Evento que contiene el valor del input a emitir.
   * @returns {void} No retorna ningún valor.
   */
  public clean(event: any) {
    this.inputConfiguration.control.reset();
    this.valueChange.emit(event.target.value);
  }
}
