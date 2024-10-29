import { Component, Input } from '@angular/core';
import { IPrioridad } from '../public-api';

@Component({
  selector: 'evo-tag',
  standalone: true,
  imports: [],
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss', '../styles/output.scss'],
})
export class TagComponent {
  @Input() prioridad?: IPrioridad;
  @Input() label!: string;
  @Input() size: 'sm' | 'md' | 'lg' = 'sm';
  @Input() twClass?: string;
}
