import { Component, Input } from '@angular/core';
import { CartaActividadComponent, IActividad } from '../public-api';
import { CommonModule } from '@angular/common';
import {
  DragDropModule,
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'evo-columna-tablero',
  standalone: true,
  imports: [CartaActividadComponent, CommonModule, DragDropModule],
  templateUrl: './columna-tablero.component.html',
  styleUrls: ['./columna-tablero.component.scss', '../styles/output.scss'],
})
export class ColumnaTableroComponent {
  @Input() actividades!: IActividad[];
  @Input() name!: string;

  drop(event: CdkDragDrop<IActividad[]>) {
    if (event.previousContainer === event.container) {
      console.log('Drag and drop - Ordenar');
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      // TODO: Emitir evento desde el board (?) para re ordenar tarjeta
    } else {
      console.log('Drag and drop - Columna');
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      // TODO: Emitir evento desde el board (?) para cambiar de columna
    }
  }
}
