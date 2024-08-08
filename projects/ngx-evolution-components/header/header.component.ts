import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ButtonInterface,
  HeaderButtonInterface,
  IconInterface,
  MenuComponent,
  SvgComponent,
} from '../public-api';

@Component({
  selector: 'evo-header',
  standalone: true,
  imports: [CommonModule, MenuComponent, SvgComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', '../styles/output.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  @Input() menuIcon!: IconInterface;
  @Input() closeMenuIcon!: IconInterface;
  @Input() menuTitle!: string;
  @Input() menuItems!: ButtonInterface[];
  @Input() companyImage?: string;
  @Input() companyName?: string;
  @Input() notificationIcon!: IconInterface;
  @Input() box?: HeaderButtonInterface[];
}
