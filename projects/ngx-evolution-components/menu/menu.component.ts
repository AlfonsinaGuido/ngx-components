import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  ViewEncapsulation,
} from '@angular/core';
import {
  AvatarComponent,
  ButtonComponent,
  ButtonInterface,
  IconInterface,
  UserDataInterface,
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
export class MenuComponent implements AfterViewInit, OnDestroy {
  @Input() title?: string;
  @Input() items!: ButtonInterface[];
  @Input() buttonIcon?: IconInterface = {
    icon: 'expand_more',
    type: 'class',
  };
  @Input() closeIcon?: IconInterface;
  @Input() notificationsNumber?: number;
  @Input() userData?: UserDataInterface;
  @Input() classes?: string;
  matMenuPosition: number = 5;
  private resizeObserver!: ResizeObserver;

  ngAfterViewInit(): void {
    this.observeHeaderResize();
  }

  ngOnDestroy(): void {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }

  observeHeaderResize(): void {
    const header = document.querySelector('evo-header header') as HTMLElement;
    if (header) {
      this.resizeObserver = new ResizeObserver(() => {
        const headerRect = header.getBoundingClientRect();
        this.matMenuPosition = headerRect.height * 0.35;
      });
      this.resizeObserver.observe(header);
    }
  }

  onMenuOpen(): void {
    if (this.userData) {
      this.buttonIcon = {
        icon: 'expand_less',
        type: 'class',
      };
    }
  }

  onMenuClose(): void {
    if (this.userData) {
      this.buttonIcon = {
        icon: 'expand_more',
        type: 'class',
      };
    }
  }
}
