import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import {
  AvatarComponent,
  ButtonComponent,
  IButton,
  IIcon,
  IMenuIcons,
  IPlaza,
  ISettingMenu,
  IUserData,
} from '../public-api';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'evo-menu',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
    ButtonComponent,
    AvatarComponent,
    MatSlideToggleModule,
  ],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss', '../styles/output.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MenuComponent implements OnInit, OnChanges {
  @Input() title?: string;
  @Input() items!: IButton[];
  @Input() icons!: IMenuIcons;
  @Input() seeAllButton?: IButton;
  @Input() lengthOfItems?: number;
  @Input() settingMenu?: ISettingMenu;
  @Input() userData?: IUserData;
  @Input() twClass?: string;
  public jobPositionChangeIcon: IIcon = {
    icon: 'swap_horiz',
    type: 'class',
  };
  public defaultUserMenuIcons: IMenuIcons | undefined = undefined;
  public sessionJobPosition!: IPlaza;

  ngOnInit(): void {
    if (this.userData) {
      if (!this.icons.buttonIcon) {
        this.defaultUserMenuIcons = {
          buttonIcon: {
            icon: 'expand_more',
            type: 'class',
          },
          ...this.icons,
        };
      }

      const lastItem = this.items.length - 1;
      if (!this.items[lastItem].icon) {
        this.items[lastItem].icon = {
          icon: 'logout',
          type: 'class',
        };
      }
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['userData'] && this.userData?.jobPositions?.length) {
      this.sessionJobPosition = this.userData.jobPositions[0];
    }
  }

  public onMenuOpen(): void {
    if (this.defaultUserMenuIcons) {
      this.defaultUserMenuIcons.buttonIcon = {
        icon: 'expand_less',
        type: 'class',
      };
    }
  }

  public onMenuClose(): void {
    if (this.defaultUserMenuIcons) {
      this.defaultUserMenuIcons.buttonIcon = {
        icon: 'expand_more',
        type: 'class',
      };
    }
  }
}
