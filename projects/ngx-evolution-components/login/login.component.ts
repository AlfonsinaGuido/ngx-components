import { Component, Input, ViewEncapsulation } from '@angular/core';
import { IButton, IIcon } from '../public-api';
import { SvgComponent } from '../svg/svg.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'evo-login',
  standalone: true,
  imports: [SvgComponent, ButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent {
  @Input() title?: string = '';
  @Input() subtitle?: string = '';
  @Input() svg?: IIcon = { icon: '', type: 'svg', position: 'left' };
  @Input() button?: IButton;
}
