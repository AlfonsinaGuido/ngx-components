import { Component, Input } from '@angular/core';
import {
  ColumnaTableroComponent,
  HeaderColumnaComponent,
  IActividad,
  IColumna,
} from '../public-api';
import { CdkDropListGroup } from '@angular/cdk/drag-drop';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

interface actividadesData {
  nombreEmpleado: string;
  count: number;
  actividades: {
    status: string;
    actividades: IActividad[];
  };
}

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
  public actividadesMock: IActividad[] = [];
  public actividadesEmpleos: actividadesData[] = [];
  public isSingle: boolean = true;
}
