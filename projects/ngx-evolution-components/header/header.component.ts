import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AvatarComponent,
  IHeaderBoxButton,
  IHeaderItems,
  IHeaderCompanyData,
  IHeaderIcons,
  IHeaderTitles,
  MenuComponent,
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
export class HeaderComponent {
  @Input() icons!: IHeaderIcons;
  @Input() titles!: IHeaderTitles;
  @Input() items!: IHeaderItems;
  @Input() companyData!: IHeaderCompanyData;
  @Input() box?: IHeaderBoxButton[];
  @Input() userData!: IUserData;
  @Input() twClass?: string;
}
