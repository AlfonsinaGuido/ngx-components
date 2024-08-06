import { Component, Input } from '@angular/core';
import { Prioridad } from '../public-api';

@Component({
  selector: 'evo-tag',
  standalone: true,
  imports: [],
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss', '../styles/output.scss'],
})
export class TagComponent {
  @Input() label!: string;
  @Input() prioridad!: Prioridad;
  @Input() size: 'sm' | 'md' | 'lg' = 'sm';
}
