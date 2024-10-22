import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'evo-info-panel',
  standalone: true,
  imports: [MarkdownModule],
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.scss', '../styles/output.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class InfoPanelComponent {
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() info?: string;
  @Input() twClass?: string;
}
