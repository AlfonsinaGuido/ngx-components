import { Component, Input } from '@angular/core';
import {
  ColumnaTableroComponent,
  EstadoActividad,
  HeaderColumnaComponent,
  IActividad,
  IColumna,
} from '../public-api';
import { CdkDropListGroup } from '@angular/cdk/drag-drop';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { actividades } from '../data/kanban/actividades.data';

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
  private actividadesMock: IActividad[] = actividades;

  public actividadesEmpleos = [
    {
      nombreEmpleado: 'Victor Hugo',
      count: this.actividadesMock.length,
      actividades: [
        {
          status: EstadoActividad.abierta,
          actividades: this.actividadesMock.filter(
            (act: IActividad) => act.status === EstadoActividad.abierta,
          ),
        },
        {
          status: EstadoActividad.enProgreso,
          actividades: this.actividadesMock.filter(
            (act: IActividad) => act.status === EstadoActividad.enProgreso,
          ),
        },
        {
          status: EstadoActividad.cerrada,
          actividades: this.actividadesMock.filter(
            (act: IActividad) => act.status === EstadoActividad.cerrada,
          ),
        },
      ],
    },
    {
      nombreEmpleado: 'Monica Guadalupe',
      count: this.actividadesMock.length,
      actividades: [
        {
          status: EstadoActividad.abierta,
          actividades: this.actividadesMock.filter(
            (act: IActividad) => act.status === EstadoActividad.abierta,
          ),
        },
        {
          status: EstadoActividad.enProgreso,
          actividades: this.actividadesMock.filter(
            (act: IActividad) => act.status === EstadoActividad.enProgreso,
          ),
        },
        {
          status: EstadoActividad.cerrada,
          actividades: this.actividadesMock.filter(
            (act: IActividad) => act.status === EstadoActividad.cerrada,
          ),
        },
      ],
    },
  ];
  public isSingle: boolean = true;
}
