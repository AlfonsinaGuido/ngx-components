import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'evo-highlight',
  standalone: true,
  imports: [],
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.scss', '../styles/output.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HighlightComponent {
  @Input() title?: string = '';
  @Input() subtitle?: string = '';
  @Input() cardtext?: string = '';
}
