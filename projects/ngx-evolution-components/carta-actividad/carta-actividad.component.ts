import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AvatarComponent, Prioridad, TagComponent } from '../public-api';
import { DatePipe, NgIf } from '@angular/common';

const SOON_TO_EXPIRE = 2;

@Component({
  selector: 'evo-carta-actividad',
  standalone: true,
  imports: [TagComponent, AvatarComponent, MatIconModule, DatePipe, NgIf],
  templateUrl: './carta-actividad.component.html',
  styleUrls: ['./carta-actividad.component.scss', '../styles/output.scss'],
})
export class CartaActividadComponent implements OnInit {
  @Input() description!: string;
  @Input() title!: string;
  @Input() id!: string | number;
  @Input() responsible?: string;
  @Input() priority!: Prioridad;
  @Input() endDate?: Date;
  @Input() twClass?: string;
  public isSoonToExpire: boolean = false;
  public expired: boolean = false;

  ngOnInit() {
    this.isSoonToExpire = this.soonToExpire();
    this.expired = this.hasExpired();
  }

  private hasExpired(): boolean {
    const today = new Date();
    return this.endDate ? this.endDate >= today : false;
  }

  private soonToExpire(): boolean {
    const today = new Date();
    return this.endDate
      ? this.endDate > new Date(today.setDate(today.getDate() - SOON_TO_EXPIRE))
      : false;
  }
}
