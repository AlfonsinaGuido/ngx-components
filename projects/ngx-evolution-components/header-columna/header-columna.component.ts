import { NgClass, NgIf } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'evo-header-columna',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './header-columna.component.html',
  styleUrls: ['./header-columna.component.scss', '../styles/output.scss'],
})
export class HeaderColumnaComponent implements OnInit, OnChanges {
  @Input() name!: string;
  @Input() count: number = 0;
  @Input() index: number = 0;
  @Input() withCount: boolean = true;
  @Input() color!: string;
  @Input() twClass?: string;
  private colorArray: string[];
  public textColor!: string;
  public bgColor!: string;
  public classColor!: string;

  constructor() {
    this.colorArray = ['teal', 'indigo', 'green', 'orange'];
  }

  ngOnInit(): void {
    this.color = this.colorArray[this.index % this.colorArray.length];
    this.classColor = `header-column__${this.color}-column`;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['count']) {
      if (this.count > 999) {
        this.count = 999;
      } else if (this.count < 0) {
        this.count = 0;
      }
    }
  }
}
