import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
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
  @Input() actividades!: IActividad[];
  @Input() validacion?: IValidationAction;
  @Output('ordenActividad')
  public ordenActividad: EventEmitter<any> = new EventEmitter();
  @Output('actualizarActividad')
  public actualizarActividad: EventEmitter<IActividad> = new EventEmitter();

  drop(event: CdkDragDrop<IActividad[]>) {
    // Cambio de orden
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      const itemMoved = event.container.data[event.currentIndex];
      this.ordenActividad.emit(itemMoved);
      // Cambio de columna (array)
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      const itemMoved = event.container.data[event.currentIndex];
      this.actualizarActividad.emit(itemMoved);
    }
  }

  validationCDK = (item: CdkDrag<IActividad>) => {
    if (this.validacion) {
      return this.validacion.action(item.data);
    }
    return false;
  };

  mostrar(event: any) {
    this.actividadSelected = event.actividad;
  }
}
