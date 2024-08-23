import { NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'evo-header-columna',
  standalone: true,
  imports: [NgIf],
  templateUrl: './header-columna.component.html',
  styleUrls: ['./header-columna.component.scss', '../styles/output.scss'],
})
export class HeaderColumnaComponent implements OnInit {
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
    if (this.count > 999) {
      this.count = 999;
    }
    this.color = this.colorArray[this.index % this.colorArray.length];
    this.classColor = `header-column__${this.color}-column`;
  }
}
