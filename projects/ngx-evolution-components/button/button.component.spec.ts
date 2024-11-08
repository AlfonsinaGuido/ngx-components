import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';
import { MatIconTestingModule } from '@angular/material/icon/testing';
import { MarkdownModule } from 'ngx-markdown';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ButtonComponent,
        MatIconTestingModule,
        MarkdownModule.forRoot(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default properties set correctly', () => {
    expect(component.theme).toBe('default');
    expect(component.isFlat).toBe(false);
    expect(component.isFluid).toBe(false);
    expect(component.withoutBorder).toBe(false);
    expect(component.isMarkdown).toBe(false);
  });

  it('should calculate classes correctly, get getClasses()', () => {
    component.label = '';
    component.icon = { icon: 'test-icon.svg', type: 'svg' };
    component.theme = 'primary';
    component.disabled = true;
    component.twClass = 'extra-class';
    component.isFlat = true;
    component.isFluid = false;
    component.withoutBorder = true;

    fixture.detectChanges();

    const expectedClasses = {
      'extra-class': true,
      'theme-primary': true,
      disabled: true,
      'is-flat': true,
      'is-fluid': false,
      'only-icon': true,
      'without-border': true,
    };

    expect(component.getClasses).toEqual(expectedClasses);
  });

  it('should show <markdown> if isMarkdown is true', () => {
    component.label = 'Texto con **Markdown**';
    component.isMarkdown = true;
    fixture.detectChanges();

    const markdownElement = fixture.nativeElement.querySelector('markdown');
    const divElement = fixture.nativeElement.querySelector('div.label');

    expect(markdownElement).toBeTruthy();
    expect(divElement).toBeFalsy();
    expect(markdownElement.textContent).toContain('Texto con **Markdown**');
  });

  it('should show <div> if isMarkdown is false', () => {
    component.label = 'Texto plano';
    component.isMarkdown = false;
    fixture.detectChanges();

    const markdownElement = fixture.nativeElement.querySelector('markdown');
    const divElement = fixture.nativeElement.querySelector('div.label');

    expect(markdownElement).toBeFalsy();
    expect(divElement).toBeTruthy();
    expect(divElement.textContent).toContain('Texto plano');
  });

  it('should not be displayed label if it is not defined', () => {
    component.label = undefined;
    fixture.detectChanges();

    const markdownElement = fixture.nativeElement.querySelector('markdown');
    const divElement = fixture.nativeElement.querySelector('div.label');

    expect(markdownElement).toBeFalsy();
    expect(divElement).toBeFalsy();
  });
});
