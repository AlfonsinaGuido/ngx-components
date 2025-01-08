import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ISummaryElement } from '../public-api';

@Component({
  selector: 'evo-summary',
  standalone: true,
  imports: [],
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss', '../styles/output.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SummaryComponent {
  @Input() title!: string;
  @Input() elements!: ISummaryElement[];
  @Input() twClass?: string;
}
