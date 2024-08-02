import { Component, Input } from '@angular/core';
import { IActividad } from '../shared/interfaces/actividad.interface';
import { TagComponent } from '../tag/tag.component';
import { MatIconModule } from '@angular/material/icon';
import { AvatarComponent } from '../public-api';

@Component({
  selector: 'evo-carta-actividad',
  standalone: true,
  imports: [TagComponent, AvatarComponent, MatIconModule],
  templateUrl: './carta-actividad.component.html',
  styleUrls: ['./carta-actividad.component.scss', '../styles/output.scss'],
})
export class CartaActividadComponent {
  @Input() actividad!: IActividad;
}
