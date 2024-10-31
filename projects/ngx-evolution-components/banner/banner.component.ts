import { NgClass } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { slideDown } from '../shared/animations/animations';

@Component({
  selector: 'evo-banner',
  standalone: true,
  imports: [NgClass, MatIconModule],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss', '../styles/output.scss'],
  animations: [slideDown],
  encapsulation: ViewEncapsulation.None,
})
export class BannerComponent implements OnChanges {
  @Input() isError?: boolean = false;
  @Input() title: string = '';
  @Input() message: string = '';
  @Input() duration: number | null = null;
  @Input() twClass?: string;
  public isHidden: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['message']) {
      this.isHidden = false;
      if (this.duration) {
        setTimeout(() => {
          this.hideBanner();
        }, this.duration);
      }
    }
  }

  public hideBanner(): void {
    this.isHidden = true;
  }
}
