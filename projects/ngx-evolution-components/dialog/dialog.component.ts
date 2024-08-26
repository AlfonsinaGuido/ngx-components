import { Component, Inject, ViewEncapsulation } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {
  ButtonComponent,
  ButtonInterface,
  DialogInterface,
  IconInterface,
  SvgComponent
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
    SvgComponent
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
  public disableClosing: boolean;
  public icon: IconInterface;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogInterface,
  ) {
    this.title = this.data?.title || '';
    this.scrollableContent = this.data?.scrollableContent || '';
    this.simpleContent = this.data?.simpleContent || '';
    this.buttonsItems = this.data?.buttonsItems?.map((x) => x) || [];
    this.closeButton = this.data?.closeButton || false;
    this.disableClosing = this.data?.disableClosing || false;
    this.icon = this.data?.icon || 
        {icon: '', type:'svg', position:'left'};
    dialogRef.disableClose = this.disableClosing;
    console.log('dialog icon ', this.data);
  }

  closeDialog = {
    action: () => {
      this.dialogRef.close();
    },
  };
}
