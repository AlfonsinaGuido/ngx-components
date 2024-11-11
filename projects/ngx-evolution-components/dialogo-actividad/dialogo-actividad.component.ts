import { Component, Inject, ViewEncapsulation } from '@angular/core';
import {
  IActividad,
  IDataGridItem,
  DataGridComponent,
  IPrioridad,
} from '../public-api';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'evo-dialogo-actividad',
  standalone: true,
  imports: [MatDialogModule, CommonModule, MatIcon, DataGridComponent],
  templateUrl: './dialogo-actividad.component.html',
  styleUrls: ['./dialogo-actividad.component.scss', '../styles/output.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DialogoActividadComponent {
  public actividad: IActividad;
  public dataGrid: IDataGridItem[];

  constructor(
    private dialogRef: MatDialogRef<DialogoActividadComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { actividad: IActividad },
  ) {
    dialogRef.disableClose = false;
    this.actividad = data.actividad;
    this.dataGrid = this.mapActividadToDataGrid();
  }

  private mapActividadToDataGrid(): IDataGridItem[] {
    return [
      {
        propertyTitle: 'Responsable',
        propertyValue: this.actividad.EmpleoResponsable?.NombresApellidos,
        valueType: 'single',
        icon: 'person',
      },
      {
        propertyTitle: 'Fecha fin',
        propertyValue: this.actividad.FechaFin.toLocaleDateString(),
        valueType: 'single',
        icon: 'calendar_today',
      },
      {
        propertyTitle: 'Etapa',
        propertyValue: this.actividad.Etapa.Nombre,
        valueType: 'single',
        icon: 'timeline',
      },
      {
        propertyTitle: 'Estado',
        propertyValue: this.actividad.EstadoDb,
        valueType: 'single',
        icon: 'fiber_manual_record',
      },
      {
        propertyTitle: 'Prioridad',
        propertyValue: this.actividad.Prioridad?.Nombre,
        valueType: 'tag',
        icon: 'label',
        prioridad: this.actividad.Prioridad as IPrioridad,
      },
      {
        propertyTitle: 'Descripción',
        propertyValue: this.actividad.Descripcion,
        valueType: 'descriptive',
        icon: 'subtitles',
      },
      {
        propertyTitle: 'Objetivos',
        propertyValue: this.actividad.Objetivo,
        valueType: 'descriptive',
        icon: 'playlist_add_check',
      },
    ];
  }
}
