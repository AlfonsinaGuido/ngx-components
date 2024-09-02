import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AvatarComponent,
  IHeaderBoxButton,
  IHeaderButtonItems,
  IHeaderCompanyData,
  IHeaderIcons,
  IHeaderTitles,
  MenuComponent,
  IMenuIcons,
  SvgComponent,
  IUserData,
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
  @Input() icons!: IHeaderIcons;
  @Input() titles!: IHeaderTitles;
  @Input() buttonItems!: IHeaderButtonItems;
  @Input() companyData!: IHeaderCompanyData;
  @Input() box?: IHeaderBoxButton[];
  @Input() userData!: IUserData;
  @Input() classes?: string;
  public appMenuIcons!: IMenuIcons;
  public notificationMenuIcons!: IMenuIcons;
  public userMenuIcons!: IMenuIcons;

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
