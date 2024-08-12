import { Component, Inject, Input, ViewEncapsulation } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog,  MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogTitle} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ButtonActionInterface, ButtonComponent, ButtonInterface, DialogInterface, IconInterface } from '../public-api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'evo-dialog',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogModule, ButtonComponent, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss', '../styles/output.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DialogComponent {
  public title: string;
  public scrollableContent: string;
  public simpleContent: string;
  public buttonsItems: ButtonInterface[];
  public buttonsFunctions: ButtonActionInterface[] = [];
  public closeIcon: IconInterface | null;
  public disableClosing: boolean;
  
  constructor(
  public dialogRef: MatDialogRef<DialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data: DialogInterface,
) {
    this.title = this.data?.title || '';
    this.scrollableContent = this.data?.scrollableContent || '';
    this.simpleContent = this.data?.simpleContent || '';
    this.buttonsItems = this.data?.buttonsItems?.map(x => x) || [];
    this.buttonsFunctions = this.data?.buttonsFunctions?.map(x => x) || [];
    this.closeIcon = this.data?.closeIcon || null;
    this.disableClosing = this.data.disableClosing || false;
    dialogRef.disableClose = this.disableClosing;
  }

  closeDialog = {
    action: () => {
      this.dialogRef.close();
    }
  } 
}
