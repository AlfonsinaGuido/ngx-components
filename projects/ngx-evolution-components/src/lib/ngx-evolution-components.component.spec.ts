import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxEvolutionComponentsComponent } from './ngx-evolution-components.component';

describe('NgxEvolutionComponentsComponent', () => {
  let component: NgxEvolutionComponentsComponent;
  let fixture: ComponentFixture<NgxEvolutionComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxEvolutionComponentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxEvolutionComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
