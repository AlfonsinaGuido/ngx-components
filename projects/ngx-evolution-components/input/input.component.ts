import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  CustomErrorStateMatcher,
  MatNativeControlInputType,
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
  ],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss', '../styles/output.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class InputComponent implements OnInit, OnDestroy {
  @Input() control!: FormControl;
  @Input() label!: string;
  @Input() inputType!: MatNativeControlInputType;
  @Input() inputPlaceholder?: string;
  @Input() requiredErrorMessage?: string;
  @Input() emailErrorMessage?: string;
  @Input() patternErrorMessage?: string;
  @Input() anotherErrorMessage?: string;
  @Input() detail?: string;
  @Input() classes?: string;
  @Output() valueChange = new EventEmitter<any>();
  private valueChangesSubscription: Subscription = new Subscription();
  matcher = new CustomErrorStateMatcher();

  ngOnInit() {
    this.valueChangesSubscription = this.control.valueChanges.subscribe(
      (value) => {
        this.valueChange.emit(value);
      },
    );
  }

  ngOnDestroy() {
    if (this.valueChangesSubscription) {
      this.valueChangesSubscription.unsubscribe();
    }
  }
}
