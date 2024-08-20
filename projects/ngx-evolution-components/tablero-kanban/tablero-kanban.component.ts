import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  ColumnaTableroComponent,
  Duracion,
  EstadoActividad,
  HeaderColumnaComponent,
  IActividad,
  IColumna,
  Prioridad,
} from '../public-api';
import { CdkDropListGroup } from '@angular/cdk/drag-drop';
import { CdkAccordion, CdkAccordionModule } from '@angular/cdk/accordion';
import { CommonModule } from '@angular/common';

const actividadesMock: IActividad[] = [
  {
    id: 1,
    titulo: 'Inducción a la empresa',
    tipo: 'Reunión',
    fase: 'Antes del primer día',
    descripcion:
      'Día de inducción a la empresa. Es necesario asistir presencialmente.',
    objetivos:
      'Procurar que el empleado pueda asociarse con los valores de la empresa',
    prioridad: Prioridad.High,
    responsable: 'Miguel Perez',
    duracion: 8,
    tipoDuracion: Duracion.Horas,
    realizaEvaluacion: false,
    status: EstadoActividad.Abierta,
    fechaFin: new Date(2024, 7, 20),
  },
  {
    id: 2,
    titulo: 'Curso de Evolution',
    tipo: 'Capacitación',
    fase: 'La primera semana',
    descripcion:
      'Curso de una semana para el aprendizaje básico del sistema Evolution.',
    objetivos:
      'El participante debe llegar a familiarizarse con todos los módulos de Evolution.',
    prioridad: Prioridad.Medium,
    responsable: 'Ricardo Hernandez',
    duracion: 5,
    tipoDuracion: Duracion.Dias,
    realizaEvaluacion: true,
    status: EstadoActividad.EnProgreso,
    fechaFin: new Date(2024, 7, 20),
  },
  {
    id: 3,
    titulo: 'Visita Guiada',
    tipo: 'Reunión',
    fase: 'Antes del primer día',
    descripcion: 'Realizar una visita guiada sobre las instalaciones.',
    objetivos: 'Asignar parqueo y conocer el edificio.',
    prioridad: Prioridad.Low,
    responsable: 'Hugo Maldonado',
    duracion: 2,
    tipoDuracion: Duracion.Horas,
    realizaEvaluacion: false,
    status: EstadoActividad.Cerrada,
    fechaFin: new Date(2024, 7, 20),
  },
  {
    id: 4,
    titulo: 'Revisión de documentos',
    tipo: 'Revisión',
    fase: 'La primera semana',
    descripcion: 'Revisión de documentos y firma de contrato.',
    objetivos: 'Asegurar que todos los documentos estén en orden.',
    prioridad: Prioridad.High,
    responsable: 'Miguel Perez',
    duracion: 2,
    tipoDuracion: Duracion.Horas,
    realizaEvaluacion: false,
    status: EstadoActividad.Abierta,
    fechaFin: new Date(2024, 7, 20),
  },
];
@Component({
  selector: 'evo-tablero-kanban',
  standalone: true,
  imports: [
    ColumnaTableroComponent,
    CdkDropListGroup,
    CommonModule,
    HeaderColumnaComponent,
    CdkAccordionModule,
  ],
  templateUrl: './tablero-kanban.component.html',
  styleUrls: ['./tablero-kanban.component.scss', '../styles/output.scss'],
})
export class TableroKanbanComponent implements OnInit {
  @Input() columnas!: IColumna[];
  @Input() twClass?: string;
  public actividadesEmpleos = [
    {
      nombreEmpleado: 'Empleado 1',
      count: actividadesMock.length,
      actividades: [
        {
          status: EstadoActividad.Abierta,
          actividades: actividadesMock.filter(
            (act) => act.status === EstadoActividad.Abierta,
          ),
        },
        {
          status: EstadoActividad.EnProgreso,
          actividades: actividadesMock.filter(
            (act) => act.status === EstadoActividad.EnProgreso,
          ),
        },
        {
          status: EstadoActividad.Cerrada,
          actividades: actividadesMock.filter(
            (act) => act.status === EstadoActividad.Cerrada,
          ),
        },
      ],
    },
    {
      nombreEmpleado: 'Empleado 2',
      count: actividadesMock.length,
      actividades: [
        {
          status: EstadoActividad.Abierta,
          actividades: actividadesMock.filter(
            (act) => act.status === EstadoActividad.Abierta,
          ),
        },
        {
          status: EstadoActividad.EnProgreso,
          actividades: actividadesMock.filter(
            (act) => act.status === EstadoActividad.EnProgreso,
          ),
        },
        {
          status: EstadoActividad.Cerrada,
          actividades: actividadesMock.filter(
            (act) => act.status === EstadoActividad.Cerrada,
          ),
        },
      ],
    },
  ];
  @ViewChild('accordion', { static: true }) accordion!: CdkAccordion;

  ngOnInit() {}

  ngAfterViewInit() {
    console.log(this.accordion);
    this.accordion.openAll();
  }

  constructor() {}
}
