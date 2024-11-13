import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  CartaActividadComponent,
  Duracion,
  EstadoActividad,
  IActividad,
  IValidationAction,
} from '../public-api';
import { CommonModule } from '@angular/common';
import {
  DragDropModule,
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'evo-columna-tablero',
  standalone: true,
  imports: [CartaActividadComponent, CommonModule, DragDropModule],
  templateUrl: './columna-tablero.component.html',
  styleUrls: ['./columna-tablero.component.scss', '../styles/output.scss'],
})
export class ColumnaTableroComponent {
  actividadSelected: IActividad = {
    Codigo: 0,
    Duracion: 0,
    Etapa: {
      Codigo: 0,
      Nombre: '',
      Descripcion: '',
    },
    EstadoDb: EstadoActividad.Pendiente,
    Tipo: {
      Codigo: 0,
      Nombre: '',
      Descripcion: '',
    },
    UnidadDuracionDb: Duracion.Horas,
    Nombre: '',
    FechaFin: new Date(),
  };
  @Input() activities!: IActividad[];
  @Input() validation?: IValidationAction;
  @Output('orderActivity')
  public orderActivity: EventEmitter<IActividad> = new EventEmitter();
  @Output('updateActivity')
  public updateActivity: EventEmitter<IActividad> = new EventEmitter();

  drop(event: CdkDragDrop<IActividad[]>) {
    // Cambio de orden
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      const itemMoved = event.container.data[event.currentIndex];
      this.orderActivity.emit(itemMoved);
      // Cambio de columna (array)
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      const itemMoved = event.container.data[event.currentIndex];
      this.updateActivity.emit(itemMoved);
    }
  }

  validationCDK = (item: CdkDrag<IActividad>) => {
    if (this.validation) {
      return this.validation.action(item.data, this.validation.estado);
    }
    return false;
  };

  mostrar(event: IActividad) {
    this.actividadSelected = event;
  }
}
