import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { IActividad, TagComponent } from '../public-api';
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
  imports: [MatDialogModule, CommonModule, TagComponent, TagComponent, MatIcon],
  templateUrl: './dialogo-actividad.component.html',
  styleUrls: ['./dialogo-actividad.component.scss', '../styles/output.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DialogoActividadComponent implements OnInit {
  public actividad: IActividad;

  constructor(
    private dialogRef: MatDialogRef<DialogoActividadComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { actividad: IActividad },
  ) {
    dialogRef.disableClose = false;
    this.actividad = data.actividad;
  }

  ngOnInit(): void {}
}
