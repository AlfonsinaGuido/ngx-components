import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import {
  AvatarComponent,
  ButtonComponent,
  IButton,
  IMenuIcons,
  IUserData,
} from '../public-api';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';

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
  ],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss', '../styles/output.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MenuComponent implements OnInit {
  @Input() title?: string;
  @Input() items!: IButton[];
  @Input() icons!: IMenuIcons;
  @Input() notificationsNumber?: number;
  @Input() userData?: IUserData;
  @Input() twClass?: string;

  ngOnInit(): void {
    if (!this.icons.buttonIcon) {
      this.icons.buttonIcon = {
        icon: 'expand_more',
        type: 'class',
      };
    }
  }

  onMenuOpen(): void {
    if (this.userData) {
      this.icons.buttonIcon = {
        icon: 'expand_less',
        type: 'class',
      };
    }
  }

  onMenuClose(): void {
    if (this.userData) {
      this.icons.buttonIcon = {
        icon: 'expand_more',
        type: 'class',
      };
    }
  }
}
