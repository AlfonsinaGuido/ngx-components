import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

@Component({
  selector: 'evo-svg',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.scss', '../styles/output.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SvgComponent implements OnInit, OnDestroy {
  @Input() svgPath!: string;
  svgContent: SafeHtml | null = null;
  private svgSubscription!: Subscription;

  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer,
  ) {}

  ngOnInit(): void {
    this.loadSvg();
  }

  ngOnDestroy(): void {
    if (this.svgSubscription) {
      this.svgSubscription.unsubscribe();
    }
  }

  private loadSvg(): void {
    if (this.svgPath) {
      this.svgSubscription = this.http
        .get(this.svgPath, { responseType: 'text' })
        .subscribe({
          next: (svg) => {
            this.svgContent = this.sanitizer.bypassSecurityTrustHtml(svg);
          },
          error: (err) => {
            console.error('Error loading SVG', err);
          },
        });
    }
  }
}
