import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'evo-header-columna',
  standalone: true,
  imports: [],
  templateUrl: './header-columna.component.html',
  styleUrls: ['./header-columna.component.scss', '../styles/output.scss'],
})
export class HeaderColumnaComponent implements OnInit {
  @Input() name!: string;
  @Input() count: number = 0;
  @Input() index: number = 0;
  @Input() color!: string;
  @Input() twClass?: string;
  private colorArray: string[];
  public textColor!: string;
  public bgColor!: string;

  constructor() {
    this.colorArray = ['teal', 'indigo', 'green', 'orange'];
  }

  ngOnInit(): void {
    if (this.count > 999) {
      this.count = 999;
    }
    this.color = this.colorArray[this.index % this.colorArray.length];
    this.textColor = this.getTextColor();
    this.bgColor = this.getbgColor();
  }

  getTextColor(): string {
    return `text-${this.color}-600`;
  }

  getbgColor(): string {
    return `bg-${this.color}-600`;
  }
}
