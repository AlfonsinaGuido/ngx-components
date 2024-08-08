import { Component, Input } from '@angular/core';
import { TagComponent } from '../tag/tag.component';
import { MatIconModule } from '@angular/material/icon';
import { AvatarComponent } from '../public-api';
import { DatePipe } from '@angular/common';
import { Prioridad } from '../enums/prioridad.enum';

@Component({
  selector: 'evo-carta-actividad',
  standalone: true,
  imports: [TagComponent, AvatarComponent, MatIconModule, DatePipe],
  templateUrl: './carta-actividad.component.html',
  styleUrls: ['./carta-actividad.component.scss', '../styles/output.scss'],
})
export class CartaActividadComponent {
  @Input() description!: string;
  @Input() title!: string;
  @Input() responsible?: string;
  @Input() priority!: Prioridad;
  @Input() endDate?: Date | string;
}
