import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnaTableroComponent } from './columna-tablero.component';

describe('ColumnaTableroComponent', () => {
  let component: ColumnaTableroComponent;
  let fixture: ComponentFixture<ColumnaTableroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColumnaTableroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColumnaTableroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
