import { NgForOf } from '@angular/common';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'evo-tablero-skeleton',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './tablero-skeleton.component.html',
  styleUrls: ['./tablero-skeleton.component.scss', '../styles/output.scss'],
})
export class TableroSkeletonComponent implements OnInit {
  @Input() columns = 3;
  public columnArray!: number[];

  ngOnInit(): void {
    this.updateColumnsArray();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['columns']) {
      this.updateColumnsArray();
    }
  }

  private updateColumnsArray(): void {
    this.columnArray = Array(this.columns).fill(0);
  }
}
