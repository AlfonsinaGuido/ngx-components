import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import {
  AvatarComponent,
  IActividad,
  TagComponent,
  OpcionActividad,
  DialogoActividadComponent,
} from '../public-api';
import { DatePipe, NgIf } from '@angular/common';

const SOON_TO_EXPIRE = 2;

@Component({
  selector: 'evo-carta-actividad',
  standalone: true,
  imports: [
    TagComponent,
    AvatarComponent,
    MatIconModule,
    DatePipe,
    NgIf,
    MatTooltipModule,
  ],
  templateUrl: './carta-actividad.component.html',
  styleUrls: ['./carta-actividad.component.scss', '../styles/output.scss'],
})
export class CartaActividadComponent implements OnInit {
  @Input() id!: string | number;
  @Input() endDate?: Date;
  @Input() twClass?: string;
  @Input() actividad!: IActividad;
  @Output() taskUpdate = new EventEmitter<{ actividad: IActividad }>();
  @Output() taskUpdateModal = new EventEmitter<IActividad>();
  public isSoonToExpire: boolean = false;
  public expired: boolean = false;

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    this.isSoonToExpire = this.soonToExpire();
    this.expired = this.hasExpired();
  }

  /**
   * Verifica si la actividad ha expirado.
   * @returns {boolean} verdadero en caso la fecha fin de la actividad es mayor a la fecha actual.
   */
  private hasExpired(): boolean {
    const today = new Date();
    return this.endDate ? this.endDate >= today : false;
  }

  /**
   * Verifica si la fecha actual está próxima a expirar según la fecha de finalización proporcionada.
   * @returns {boolean} Devuelve verdadero si la fecha actual está próxima a expirar, de lo contrario devuelve falso.
   */
  private soonToExpire(): boolean {
    const today = new Date();
    return this.endDate
      ? this.endDate > new Date(today.setDate(today.getDate() - SOON_TO_EXPIRE))
      : false;
  }

  public verDetalle(): void {
    const dialogRef = this.dialog.open(DialogoActividadComponent, {
      data: {
        actividad: this.actividad,
      },
    });

    dialogRef.afterClosed().subscribe((result: OpcionActividad) => {
      if (result === OpcionActividad.Editar) {
        this.taskUpdateModal.emit(this.actividad);
      } else {
        const updateTask = {
          actividad: this.actividad,
          // columnName: dialogRef.componentInstance.activeStatus.name,
        };

        this.taskUpdate.emit(updateTask);
      }
    });
  }
}
