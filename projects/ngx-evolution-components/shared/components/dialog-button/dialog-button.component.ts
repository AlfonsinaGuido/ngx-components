import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IButton, DialogComponent, IIcon } from '../../../public-api';

@Component({
  selector: 'evo-dialog-button',
  standalone: true,
  imports: [DialogComponent],
  templateUrl: './dialog-button.component.html',
  styleUrl: './dialog-button.component.scss',
})
export class DialogButtonComponent {
  @Input() title: string = '';
  @Input() scrollableContent?: string = '';
  @Input() simpleContent?: string = '';
  @Input() buttonsItems?: IButton[] = [];
  @Input() buttonsFunctions?: any[] = [];
  @Input() closeButton?: boolean;
  @Input() disableClosing?: boolean;
  @Input() icon?: IIcon;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogComponent, {
      data: {
        title: this.title,
        scrollableContent: this.scrollableContent,
        simpleContent: this.simpleContent,
        buttonsItems: this.buttonsItems,
        buttonsFunctions: this.buttonsFunctions,
        closeButton: this.closeButton,
        disableClosing: this.disableClosing,
        icon: this.icon,
      },
      panelClass: 'custom-dialog-container',
    });
  }
}
