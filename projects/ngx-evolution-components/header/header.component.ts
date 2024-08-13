import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AvatarComponent,
  ButtonInterface,
  HeaderButtonInterface,
  IconInterface,
  MenuComponent,
  SvgComponent,
  UserDataInterface,
} from '../public-api';

@Component({
  selector: 'evo-header',
  standalone: true,
  imports: [CommonModule, MenuComponent, SvgComponent, AvatarComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', '../styles/output.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  @Input() appIcon!: IconInterface;
  @Input() notificationIcon!: IconInterface;
  @Input() closeMenuIcon?: IconInterface;
  @Input() appTitle!: string;
  @Input() notificationTitle!: string;
  @Input() appItems!: ButtonInterface[];
  @Input() notificationItems!: ButtonInterface[];
  @Input() userDataItems!: ButtonInterface[];
  @Input() companyImage?: string;
  @Input() companyName?: string;
  @Input() box?: HeaderButtonInterface[];
  @Input() userData!: UserDataInterface;
  @Input() classes?: string;
}
