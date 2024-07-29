import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonInterface, MenuComponent } from '../public-api';

@Component({
  selector: 'evo-header',
  standalone: true,
  imports: [CommonModule, MenuComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', '../styles/output.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  @Input() titleMenu!: string;
  @Input() itemsMenu!: ButtonInterface[];
  @Input() imgCompany!: string;
  @Input() nameCompany!: string;
}
