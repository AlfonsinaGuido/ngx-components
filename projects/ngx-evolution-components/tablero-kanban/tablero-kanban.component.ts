import { Component, EventEmitter, Input, Output } from '@angular/core';
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
    estadoDb: string;
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
  @Input() columns!: IColumna[];
  @Input() twClass?: string;
  @Output('activityModified')
  public activityModified: EventEmitter<IActividad> = new EventEmitter();
  public actividadesMock: IActividad[] = [];
  public actividadesEmpleos: actividadesData[] = [];
  public isSingle: boolean = true;

  changeActivityStatus(event: IActividad): void {
    this.activityModified.emit(event);
  }
}
