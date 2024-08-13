import { Component, Inject, ViewEncapsulation } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {
  ButtonComponent,
  ButtonInterface,
  DialogInterface,
} from '../public-api';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'evo-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    ButtonComponent,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
    MatIconModule,
  ],
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss', '../styles/output.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DialogComponent {
  public title: string;
  public scrollableContent: string;
  public simpleContent: string;
  public buttonsItems: ButtonInterface[];
  public closeButton: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogInterface) {
    this.title = this.data?.title || '';
    this.scrollableContent = this.data?.scrollableContent || '';
    this.simpleContent = this.data?.simpleContent || '';
    this.buttonsItems = this.data?.buttonsItems?.map((x) => x) || [];
    this.closeButton = this.data?.closeButton || false;
  }
}
