import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  ViewEncapsulation,
} from '@angular/core';
import { ButtonComponent, ButtonInterface, IconInterface } from '../public-api';
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
  ],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss', '../styles/output.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MenuComponent implements AfterViewInit, OnDestroy {
  @Input() appTitle!: string;
  @Input() items!: ButtonInterface[];
  @Input() buttonIcon!: IconInterface;
  @Input() closeIcon!: IconInterface;
  matMenuPosition!: number;
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
}
