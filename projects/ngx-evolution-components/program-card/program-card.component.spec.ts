import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgramCardComponent } from './program-card.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {
  ButtonComponent,
  SvgComponent,
  IProgramCardInterface,
} from '../public-api';

describe('ProgramCardComponent', () => {
  let component: ProgramCardComponent;
  let fixture: ComponentFixture<ProgramCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ProgramCardComponent,
        CommonModule,
        MatIconModule,
        ButtonComponent,
        SvgComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProgramCardComponent);
    component = fixture.componentInstance;

    const mockCardData: IProgramCardInterface = {
      twClass: 'test-class',
      isFluid: true,
      size: 'lg',
      title: 'test',
      onButtonClick: { action: jasmine.createSpy('onButtonClickSpy') },
    };

    component.cardData = mockCardData;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should apply correct classes based on cardData', () => {
    const classes = component.getClasses;
    expect(classes['test-class']).toBeTrue();
    expect(classes['is-fluid']).toBeTrue();
    expect(classes['size-lg']).toBeTrue();
    expect(classes['fixed-size']).toBeFalse();
  });

  it('should call onButtonClick action when onButtonClickHandler is triggered', () => {
    component.onButtonClickHandler();
    expect(component.cardData.onButtonClick?.action).toHaveBeenCalled();
  });
});
