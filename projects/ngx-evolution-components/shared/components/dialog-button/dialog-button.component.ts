import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  ButtonInterface,
  DialogComponent,
  IconInterface,
} from '@aseinfo/ngx-evolution-components/public-api';
import { closeButton } from 'stories/dialog.stories';

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
  @Input() buttonsItems?: ButtonInterface[] = [];
  @Input() buttonsFunctions?: any[] = [];
  @Input() closeButton?: boolean;
  @Input() disableClosing?: boolean;

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
      },
    });
  }
}
