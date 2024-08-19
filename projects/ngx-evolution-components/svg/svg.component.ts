import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'evo-svg',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.scss', '../styles/output.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SvgComponent implements OnInit {
  @Input() svgPath!: string;
  @Input() classes?: string;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {}

  ngOnInit(): void {
    if (this.svgPath) {
      this.matIconRegistry.addSvgIcon(
        'custom_icon',
        this.domSanitizer.bypassSecurityTrustResourceUrl(this.svgPath),
      );
    } else {
      console.error('Error loading SVG, undefined path');
    }
  }
}
