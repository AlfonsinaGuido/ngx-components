import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerComponent } from './banner.component';
import { SimpleChange } from '@angular/core';
import { By } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerComponent],
      providers: [provideAnimationsAsync()],
    }).compileComponents();

    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set isHidden to false and call hideBanner after duration', (done) => {
    component.duration = 100;
    component.ngOnChanges({
      message: new SimpleChange(null, 'New message', false),
    });

    expect(component.isHidden).toBeFalse();

    setTimeout(() => {
      expect(component.isHidden).toBeTrue();
      done();
    }, 150);
  });

  it('should not call hideBanner if duration is null', () => {
    spyOn(component, 'hideBanner');
    component.duration = null;
    component.ngOnChanges({
      message: new SimpleChange(null, 'New message', false),
    });

    expect(component.isHidden).toBeFalse();
    expect(component.hideBanner).not.toHaveBeenCalled();
  });

  it('should hide the banner when hideBanner is called', () => {
    component.hideBanner();
    expect(component.isHidden).toBeTrue();
  });

  it('should display the banner when isHidden is false, and title and message are set', () => {
    component.isHidden = false;
    component.title = 'Success';
    component.message = 'Operation completed successfully';
    fixture.detectChanges();

    const bannerElement = fixture.debugElement.query(By.css('div'));
    expect(bannerElement).toBeTruthy();
  });

  it('should not display the banner if isHidden is true', () => {
    component.isHidden = true;
    component.title = 'Success';
    component.message = 'Operation completed successfully';
    fixture.detectChanges();

    const bannerElement = fixture.debugElement.query(By.css('div'));
    expect(bannerElement).toBeFalsy();
  });

  it('should apply error styles if isError is true', () => {
    component.isError = true;
    component.title = 'Error';
    component.message = 'An error occurred';
    fixture.detectChanges();

    const bannerElement = fixture.debugElement.query(
      By.css('div.bg-light-warn'),
    );
    const iconElement = fixture.debugElement.query(
      By.css('mat-icon.text-warn'),
    );

    expect(bannerElement).toBeTruthy();
    expect(iconElement).toBeTruthy();
  });

  it('should apply success styles if isError is false', () => {
    component.isError = false;
    component.title = 'Success';
    component.message = 'Operation completed successfully';
    fixture.detectChanges();

    const bannerElement = fixture.debugElement.query(
      By.css('div.bg-light-success'),
    );
    const iconElement = fixture.debugElement.query(
      By.css('mat-icon.text-success'),
    );

    expect(bannerElement).toBeTruthy();
    expect(iconElement).toBeTruthy();
  });

  it('should display the correct title and message', () => {
    component.title = 'Info';
    component.message = 'Here is some information';
    fixture.detectChanges();

    const titleElement = fixture.debugElement.query(
      By.css('div.mb-1'),
    ).nativeElement;
    const messageElement = fixture.debugElement.query(
      By.css('p'),
    ).nativeElement;

    expect(titleElement.textContent).toContain('Info');
    expect(messageElement.textContent).toContain('Here is some information');
  });

  it('should call hideBanner when the close icon is clicked', () => {
    spyOn(component, 'hideBanner');
    component.isHidden = false;
    component.title = 'Alert';
    component.message = 'This is an alert';
    fixture.detectChanges();

    const closeIcon = fixture.debugElement.query(
      By.css('mat-icon[aria-label="Close icon"]'),
    );
    closeIcon.triggerEventHandler('click', null);

    expect(component.hideBanner).toHaveBeenCalled();
  });
});
