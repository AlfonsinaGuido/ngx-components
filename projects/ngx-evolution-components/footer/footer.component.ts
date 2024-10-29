import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'evo-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss', '../styles/output.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FooterComponent {
  @Input() twClass?: string;
}
