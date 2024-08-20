import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AvatarComponent,
  HeaderBoxButtonsInterface,
  HeaderButtonItemsInterface,
  HeaderCompanyDataInterface,
  HeaderIconsInterface,
  HeaderTitlesInterface,
  MenuComponent,
  MenuIconsInterface,
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
export class HeaderComponent implements OnInit {
  @Input() icons!: HeaderIconsInterface;
  @Input() titles!: HeaderTitlesInterface;
  @Input() buttonItems!: HeaderButtonItemsInterface;
  @Input() companyData!: HeaderCompanyDataInterface;
  @Input() box?: HeaderBoxButtonsInterface[];
  @Input() userData!: UserDataInterface;
  @Input() classes?: string;
  public appMenuIcons!: MenuIconsInterface;
  public notificationMenuIcons!: MenuIconsInterface;
  public userMenuIcons!: MenuIconsInterface;

  ngOnInit(): void {
    this.appMenuIcons = {
      buttonIcon: this.icons.appIcon,
      closeIcon: this.icons.closeMenuIcon,
    };
    this.notificationMenuIcons = {
      buttonIcon: this.icons.notificationIcon,
      closeIcon: this.icons.closeMenuIcon,
    };
    this.userMenuIcons = {
      closeIcon: this.icons.closeMenuIcon,
    };
  }
}
