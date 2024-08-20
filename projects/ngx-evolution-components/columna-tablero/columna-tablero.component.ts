import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  CartaActividadComponent,
  HeaderColumnaComponent,
  IActividad,
} from '../public-api';
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
  @Output('ordenActividad')
  public ordenActividad: EventEmitter<any> = new EventEmitter();
  @Output('actualizarActividad')
  public actualizarActividad: EventEmitter<any> = new EventEmitter();

  drop(event: CdkDragDrop<IActividad[]>) {
    // Cambio de orden
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      this.ordenActividad.emit(this.actividades);
      // Cambio de columna (array)
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      this.actualizarActividad.emit(this.actividades);
    }
  }
}
