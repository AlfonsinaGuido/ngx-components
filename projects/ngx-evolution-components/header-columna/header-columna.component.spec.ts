import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderColumnaComponent } from './header-columna.component';

describe('HeaderColumnaComponent', () => {
  let component: HeaderColumnaComponent;
  let fixture: ComponentFixture<HeaderColumnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderColumnaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderColumnaComponent);
    component = fixture.componentInstance;
    component.count = 10;
    component.name = 'En Progreso';
    component.index = 1;
    fixture.detectChanges();
  });

  it('should display the name of the column', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('En Progreso');
  });

  it('should display the count of activities in the column', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('span').textContent).toContain('10');
  });

  it('should have the color depending on the index', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('div').classList).toContain(
      'header-column__indigo-column',
    );
  });
});
