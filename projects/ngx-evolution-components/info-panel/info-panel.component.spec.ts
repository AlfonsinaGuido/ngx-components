import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { InfoPanelComponent } from './info-panel.component';
import { MarkdownModule } from 'ngx-markdown';

describe('InfoPanelComponent', () => {
  let component: InfoPanelComponent;
  let fixture: ComponentFixture<InfoPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoPanelComponent, MarkdownModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(InfoPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title when input is provided', waitForAsync(() => {
    component.title = 'Test Title';
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const titleElement =
        fixture.nativeElement.querySelector('.container-title');
      expect(titleElement).toBeTruthy();
      expect(titleElement.textContent).toContain('Test Title');
    });
  }));

  it('should display the subtitle when input is provided', waitForAsync(() => {
    component.subtitle = 'Test Subtitle';
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const subtitleElement = fixture.nativeElement.querySelector(
        '.container-subtitle',
      );
      expect(subtitleElement).toBeTruthy();
      expect(subtitleElement.textContent).toContain('Test Subtitle');
    });
  }));

  it('should display the info when input is provided', waitForAsync(() => {
    component.info = 'Test Information';
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const infoElement =
        fixture.nativeElement.querySelector('.container-info');
      expect(infoElement).toBeTruthy();
      expect(infoElement.textContent).toContain('Test Information');
    });
  }));

  it('should not display title, subtitle, or info if not provided', () => {
    fixture.detectChanges();

    const titleElement =
      fixture.nativeElement.querySelector('.container-title');
    const subtitleElement = fixture.nativeElement.querySelector(
      '.container-subtitle',
    );
    const infoElement = fixture.nativeElement.querySelector('.container-info');

    expect(titleElement).toBeFalsy();
    expect(subtitleElement).toBeFalsy();
    expect(infoElement).toBeFalsy();
  });

  it('should apply the twClass to the container', () => {
    component.twClass = 'bg-red-500';
    fixture.detectChanges();

    const container = fixture.nativeElement.querySelector('.flex');
    expect(container.classList).toContain('bg-red-500');
  });
});
