import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderColumnaComponent } from './header-columna.component';

describe('HeaderColumnaComponent', () => {
  let component: HeaderColumnaComponent;
  let fixture: ComponentFixture<HeaderColumnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderColumnaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderColumnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
