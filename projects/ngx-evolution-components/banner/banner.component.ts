import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { slideDown } from '../shared/animations/animations';
import { BannerType } from '../public-api';

@Component({
  selector: 'evo-banner',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss', '../styles/output.scss'],
  animations: [slideDown],
  encapsulation: ViewEncapsulation.None,
})
export class BannerComponent implements OnChanges {
  @Input() type: BannerType = 'success';
  @Input() title: string = '';
  @Input() message: string = '';
  @Input() duration: number | null = null;
  @Input() twClass?: string;
  @Input() useAnimation: boolean = true;
  @Output() closed = new EventEmitter<void>();
  public isHidden: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['type'] || changes['title'] || changes['message']) {
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
    this.closed.emit();
  }
}
