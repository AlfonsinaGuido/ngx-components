import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ButtonTheme, IconInterface, SvgComponent } from '../public-api';

@Component({
  selector: 'evo-button',
  standalone: true,
  imports: [CommonModule, SvgComponent],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss', '../styles/output.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {
  @Input() label!: string;
  @Input() icon?: IconInterface;
  @Input() theme: ButtonTheme = 'default';
  @Input() disabled?: boolean;
  @Input() classes?: string;
  @Input() isFlat: boolean = false;
  @Input() isFluid: boolean = false;
  @Input() withoutBorder: boolean = false;
  @Input() onClick?: (param?: any) => any | void | {};

  constructor() {}

  get getClasses() {
    return {
      [this.classes as string]: !!this.classes,
      ['theme-' + this.theme]: true,
      disabled: this.disabled === true,
      'is-flat': this.isFlat,
      'is-fluid': this.isFluid,
      'only-icon': !this.label,
      'without-border': this.withoutBorder,
    };
  }

  onClickHandler(param?: any) {
    if (this.onClick) {
      this.onClick(param);
    } else {
      console.warn('onClick no esta definido');
    }
  }
}
