import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatBadgeModule } from '@angular/material/badge';
import { ITab } from '../public-api';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'evo-tabs',
  standalone: true,
  imports: [MatTabsModule, MatBadgeModule, NgTemplateOutlet],
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss', '../styles/output.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TabsComponent {
  @Input() tabs: ITab[] = [];
  @Input() selectedIndex: number = 0;
  @Input() twClass?: string;
  @Output() selectedIndexChange = new EventEmitter<number>();
}
