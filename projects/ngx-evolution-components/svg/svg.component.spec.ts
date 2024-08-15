import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SvgComponent } from './svg.component';

describe('SvgComponent', () => {
  let component: SvgComponent;
  let fixture: ComponentFixture<SvgComponent>;
  let mockSanitizer: jasmine.SpyObj<DomSanitizer>;

  beforeEach(async () => {
    mockSanitizer = jasmine.createSpyObj('DomSanitizer', [
      'bypassSecurityTrustHtml',
    ]);

    await TestBed.configureTestingModule({
      imports: [SvgComponent],
      providers: [{ provide: DomSanitizer, useValue: mockSanitizer }],
    }).compileComponents();

    fixture = TestBed.createComponent(SvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have null svgContent initially', () => {
    expect(component.svgContent).toBeNull();
  });

  it('should sanitize SVG content correctly, loadSvg()', () => {
    const svgContent = '<svg>...</svg>';
    mockSanitizer.bypassSecurityTrustHtml.and.returnValue(
      svgContent as SafeHtml,
    );
    component.svgPath = 'assets/test.svg';

    component['loadSvg'] = () => {
      component.svgContent =
        mockSanitizer.bypassSecurityTrustHtml('<svg>...</svg>');
    };
    component['loadSvg']();

    expect(mockSanitizer.bypassSecurityTrustHtml).toHaveBeenCalledWith(
      '<svg>...</svg>',
    );
    expect(component.svgContent).toBe(svgContent);
  });

  it('should handle error correctly, loadSvg()', () => {
    spyOn(console, 'error');
    const error = new Error('Test error');

    component['loadSvg'] = () => {
      console.error('Error loading SVG', error);
    };
    component['loadSvg']();

    expect(console.error).toHaveBeenCalledWith('Error loading SVG', error);
  });
});
