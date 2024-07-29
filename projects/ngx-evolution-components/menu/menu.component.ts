import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ButtonComponent, ButtonInterface, IconInterface } from '../public-api';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'evo-menu',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatMenuModule, ButtonComponent],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss', '../styles/output.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MenuComponent {
  @Input() titleApps!: string;
  @Input() items!: ButtonInterface[];

  icon: IconInterface = {
    icon: 'https://pic.onlinewebfonts.com/thumbnails/icons_572677.svg',
    type: 'svg',
  };
}
