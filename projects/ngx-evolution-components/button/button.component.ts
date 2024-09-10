import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import {
  AvatarComponent,
  IButtonAction,
  ButtonTheme,
  IIcon,
  SvgComponent,
} from '../public-api';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'evo-button',
  standalone: true,
  imports: [CommonModule, SvgComponent, MatIconModule, AvatarComponent],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss', '../styles/output.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent implements OnInit {
  @Input() label?: string;
  @Input() icon?: IIcon;
  @Input() theme: ButtonTheme = 'default';
  @Input() disabled?: boolean;
  @Input() twClass?: string;
  @Input() isFlat: boolean = false;
  @Input() isFluid: boolean = false;
  @Input() withoutBorder: boolean = false;
  @Input() url?: string;
  @Input() avatarName?: string;
  @Input() avatarImgUrl?: string;
  @Input() onClick?: IButtonAction;

  ngOnInit(): void {
    if (this.icon && !this.icon.position) {
      this.icon.position = 'left';
    }
  }

  public get getClasses() {
    const classes = this.twClass ? this.twClass.split(' ') : [];
    return {
      ...classes.reduce(
        (acc, cls) => {
          acc[cls] = true;
          return acc;
        },
        {} as { [key: string]: boolean },
      ),
      ['theme-' + this.theme]: true,
      disabled: this.disabled === true,
      'is-flat': this.isFlat,
      'is-fluid': this.isFluid,
      'only-icon': !this.label,
      'without-border': this.withoutBorder,
    };
  }

  public onClickHandler() {
    if (this.onClick) {
      this.onClick.action();
    }
  }
}
