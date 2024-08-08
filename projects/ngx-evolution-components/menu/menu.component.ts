import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ButtonComponent, ButtonInterface, IconInterface } from '../public-api';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'evo-menu',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatMenuModule, MatDividerModule, ButtonComponent],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss', '../styles/output.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MenuComponent implements OnInit {
  @Input() appTitle!: string;
  @Input() items!: ButtonInterface[];
  @Input() buttonIcon!: IconInterface;
  @Input() closeIcon!: IconInterface;
  matMenuPosition!: number;

  ngOnInit(): void {
    this.adjustMatMenuPosition();
  }

  adjustMatMenuPosition() {
    const header = document.querySelector('evo-header') as HTMLElement;
    const matMenu = document.querySelector('mat-menu') as HTMLElement;
    if (header && matMenu) {
      const headerRect = header.getBoundingClientRect();
      this.matMenuPosition = headerRect.height + 5;
    }
  }
}
