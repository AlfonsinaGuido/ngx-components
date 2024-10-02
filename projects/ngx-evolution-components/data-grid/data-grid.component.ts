import { Component, Input } from '@angular/core';
import { TagComponent } from '../public-api';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { IDataGrid } from '../shared/interfaces/idatagrid.interface';

@Component({
  selector: 'evo-data-grid',
  standalone: true,
  imports: [MatDialogModule, CommonModule, TagComponent, MatIcon],
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss', '../styles/output.scss'],
})
export class DataGridComponent {
  @Input() data!: IDataGrid[];
}
