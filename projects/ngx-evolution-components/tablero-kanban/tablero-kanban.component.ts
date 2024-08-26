import { Component, Input } from '@angular/core';
import {
  ColumnaTableroComponent,
  EstadoActividad,
  HeaderColumnaComponent,
  IColumna,
} from '../public-api';
import { CdkDropListGroup } from '@angular/cdk/drag-drop';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { actividades } from 'stories/data/kanban/actividades.data';

@Component({
  selector: 'evo-tablero-kanban',
  standalone: true,
  imports: [
    ColumnaTableroComponent,
    CdkDropListGroup,
    CommonModule,
    HeaderColumnaComponent,
    CdkAccordionModule,
    MatIcon,
  ],
  templateUrl: './tablero-kanban.component.html',
  styleUrls: ['./tablero-kanban.component.scss', '../styles/output.scss'],
})
export class TableroKanbanComponent {
  @Input() columnas!: IColumna[];
  @Input() twClass?: string;
  private actividadesMock = actividades;

  public actividadesEmpleos = [
    {
      nombreEmpleado: 'Victor Hugo',
      count: this.actividadesMock.length,
      actividades: [
        {
          status: EstadoActividad.Abierta,
          actividades: this.actividadesMock.filter(
            (act) => act.status === EstadoActividad.Abierta,
          ),
        },
        {
          status: EstadoActividad.EnProgreso,
          actividades: this.actividadesMock.filter(
            (act) => act.status === EstadoActividad.EnProgreso,
          ),
        },
        {
          status: EstadoActividad.Cerrada,
          actividades: this.actividadesMock.filter(
            (act) => act.status === EstadoActividad.Cerrada,
          ),
        },
      ],
    },
    {
      nombreEmpleado: 'Monica Guadalupe',
      count: this.actividadesMock.length,
      actividades: [
        {
          status: EstadoActividad.Abierta,
          actividades: this.actividadesMock.filter(
            (act) => act.status === EstadoActividad.Abierta,
          ),
        },
        {
          status: EstadoActividad.EnProgreso,
          actividades: this.actividadesMock.filter(
            (act) => act.status === EstadoActividad.EnProgreso,
          ),
        },
        {
          status: EstadoActividad.Cerrada,
          actividades: this.actividadesMock.filter(
            (act) => act.status === EstadoActividad.Cerrada,
          ),
        },
      ],
    },
  ];
  public isSingle: boolean = true;
}
