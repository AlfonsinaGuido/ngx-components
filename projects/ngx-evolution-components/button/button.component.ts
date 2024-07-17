import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ButtonTheme, IconInterface } from '../public-api';

@Component({
  selector: 'evo-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {
  @Input() label!: string;
  @Input() icon?: IconInterface;
  @Input() theme: ButtonTheme = 'default';
  @Input() disabled!: boolean;
  @Input() classes!: string;
  @Input() isFlat: boolean = false;
  @Input() isFluid: boolean = false;
  @Input() withoutBorder: boolean = false;

  get getClasses() {
    return {
      [this.classes]: !!this.classes,
      ['theme-' + this.theme]: true,
      disabled: this.disabled === true,
      'is-flat': this.isFlat,
      'is-fluid': this.isFluid,
      'only-icon': !this.label,
      'without-border': this.withoutBorder,
    };
  }
}
