import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ButtonComponent, IButton, IIcon, SvgComponent } from '../public-api';

@Component({
  selector: 'evo-login',
  standalone: true,
  imports: [SvgComponent, ButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {
  @Input() title?: string = '';
  @Input() subtitle?: string = '';
  @Input() svg?: IIcon = { icon: '', type: 'svg' };
  @Input() button!: IButton;

  ngOnInit(): void {
    if (!this.button.icon) {
      this.button.icon = {
        icon: 'login',
        type: 'class',
        position: 'right',
      };
    }
  }
}
