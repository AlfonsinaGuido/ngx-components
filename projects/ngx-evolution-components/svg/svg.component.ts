import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'evo-svg',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.scss', '../styles/output.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SvgComponent implements OnInit {
  @Input() svgPath!: string;
  svgContent: SafeHtml | null = null;

  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer,
  ) {}

  ngOnInit() {
    this.loadSvg();
  }

  private loadSvg() {
    if (this.svgPath) {
      this.http.get(this.svgPath, { responseType: 'text' }).subscribe({
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
