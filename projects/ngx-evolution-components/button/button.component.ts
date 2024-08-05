import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ButtonTheme, IconInterface } from '../public-api';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'evo-button',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss', '../styles/output.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent implements OnInit {
  @Input() label!: string;
  @Input() icon?: IconInterface;
  @Input() theme: ButtonTheme = 'default';
  @Input() disabled?: boolean;
  @Input() classes?: string;
  @Input() isFlat: boolean = false;
  @Input() isFluid: boolean = false;
  @Input() withoutBorder: boolean = false;
  svgContent: SafeHtml | null = null;

  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer,
  ) {}

  ngOnInit() {
    this.loadSvg();
  }

  private loadSvg() {
    if (this.icon && this.icon.type === 'svg') {
      this.http.get(this.icon.icon, { responseType: 'text' }).subscribe({
        next: (svg) => {
          this.svgContent = this.sanitizer.bypassSecurityTrustHtml(svg);
        },
        error: (err) => {
          console.error('Error loading SVG', err);
        },
      });
    }
  }

  get getClasses() {
    return {
      [this.classes as string]: !!this.classes,
      ['theme-' + this.theme]: true,
      disabled: this.disabled === true,
      'is-flat': this.isFlat,
      'is-fluid': this.isFluid,
      'only-icon': !this.label,
      'without-border': this.withoutBorder,
    };
  }
}
