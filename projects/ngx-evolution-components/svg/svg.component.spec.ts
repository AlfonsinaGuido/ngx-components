import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';
import { SvgComponent } from './svg.component';
import { MatIconRegistry } from '@angular/material/icon';

describe('SvgComponent', () => {
  let component: SvgComponent;
  let fixture: ComponentFixture<SvgComponent>;
  let mockSanitizer: jasmine.SpyObj<DomSanitizer>;
  let mockIconRegistry: jasmine.SpyObj<MatIconRegistry>;

  beforeEach(async () => {
    mockSanitizer = jasmine.createSpyObj('DomSanitizer', [
      'bypassSecurityTrustResourceUrl',
    ]);
    mockIconRegistry = jasmine.createSpyObj('MatIconRegistry', ['addSvgIcon']);

    await TestBed.configureTestingModule({
      imports: [SvgComponent],
      providers: [
        { provide: DomSanitizer, useValue: mockSanitizer },
        { provide: MatIconRegistry, useValue: mockIconRegistry },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call addSvgIcon with sanitized URL if svgPath is provided', () => {
    const testPath = 'test-icon.svg';
    const sanitizedUrl = 'safe-url';

    component.svgPath = testPath;
    mockSanitizer.bypassSecurityTrustResourceUrl.and.returnValue(sanitizedUrl);

    component.ngOnInit();

    expect(mockIconRegistry.addSvgIcon).toHaveBeenCalledWith(
      'custom_icon',
      sanitizedUrl,
    );
    expect(mockSanitizer.bypassSecurityTrustResourceUrl).toHaveBeenCalledWith(
      testPath,
    );
  });

  it('should log an error if svgPath is not provided', () => {
    spyOn(console, 'error');
    component.svgPath = '';

    component.ngOnInit();

    expect(console.error).toHaveBeenCalledWith(
      'Error loading SVG, undefined path',
    );
  });
});
