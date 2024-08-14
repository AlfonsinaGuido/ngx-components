import { Component, Input } from '@angular/core';
import { ColumnaTableroComponent, IColumna } from '../public-api';
import { CdkDropListGroup } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'evo-tablero-kanban',
  standalone: true,
  imports: [ColumnaTableroComponent, CdkDropListGroup, CommonModule],
  templateUrl: './tablero-kanban.component.html',
  styleUrls: ['./tablero-kanban.component.scss', '../styles/output.scss'],
})
export class TableroKanbanComponent {
  @Input() columnas!: IColumna[];
}
