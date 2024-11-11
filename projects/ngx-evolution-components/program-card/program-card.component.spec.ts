import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ProgramCardComponent } from '../public-api';
import {
  ButtonComponent,
  SvgComponent,
  IProgramCardConfigInterface,
} from '../public-api';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ClassUtilityService } from '../shared/services/class-utility.service';

describe('ProgramCardComponent', () => {
  let component: ProgramCardComponent;
  let fixture: ComponentFixture<ProgramCardComponent>;
  let mockClassUtilityService: jasmine.SpyObj<ClassUtilityService>;

  const mockCardData: IProgramCardConfigInterface = {
    codigo: '1',
    nombre: 'Test Program',
    descripcion: 'Test Subtitle',
    totalActividades: 5,
    activitiesText: 'Activities',
    duracion: 3,
    unidadDuracionDb: 'Weeks',
    buttonLabel: 'Add Person',
    buttonClasses: 'btn-primary',
    onButtonClick: { action: jasmine.createSpy('buttonClickAction') },
    twClass: 'custom-class',
    isFluid: true,
    size: 'md',
  };

  beforeEach(async () => {
    mockClassUtilityService = jasmine.createSpyObj('ClassUtilityService', [
      'getCombinedClasses',
    ]);

    await TestBed.configureTestingModule({
      imports: [
        ProgramCardComponent,
        CommonModule,
        ButtonComponent,
        SvgComponent,
        MatIconModule,
      ],
      providers: [
        { provide: ClassUtilityService, useValue: mockClassUtilityService }, // Proveer el servicio mockeado
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramCardComponent);
    component = fixture.componentInstance;
    component.config = mockCardData;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the card Nombre and Descripcion', () => {
    const titleElement = fixture.debugElement.query(By.css('h3'));
    const subtitleElement = fixture.debugElement.query(By.css('p'));

    expect(titleElement.nativeElement.textContent).toContain(
      mockCardData.nombre,
    );
    expect(subtitleElement.nativeElement.textContent).toContain(
      mockCardData.descripcion,
    );
  });

  it('should display the correct activities and weeks count', () => {
    const activitiesElement = fixture.debugElement.query(
      By.css('.flex .small-icon + span'),
    );
    const weeksElement = fixture.debugElement.queryAll(
      By.css('.flex .small-icon + span'),
    )[1];

    expect(activitiesElement.nativeElement.textContent).toContain(
      mockCardData.totalActividades,
    );
    expect(weeksElement.nativeElement.textContent).toContain(
      mockCardData.duracion,
    );
  });

  it('should trigger the button click action when the button is clicked', () => {
    const buttonElement = fixture.debugElement.query(By.css('evo-button'));
    expect(buttonElement).toBeTruthy();

    buttonElement.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.config.onButtonClick?.action).toHaveBeenCalled();
  });

  it('should call getCombinedClasses on the ClassUtilityService with correct parameters', () => {
    const mockTwClass = 'custom-class';
    component.config = {
      ...component.config,
      isFluid: true,
      size: 'md',
      twClass: mockTwClass,
    };

    mockClassUtilityService.getCombinedClasses.and.returnValue(
      'evo-program-card is-fluid size-md custom-class',
    );
    fixture.detectChanges();

    const classes = component.getClasses();
    expect(mockClassUtilityService.getCombinedClasses).toHaveBeenCalledWith(
      'evo-program-card is-fluid size-md',
      mockTwClass,
    );
    expect(classes).toBe('evo-program-card is-fluid size-md custom-class');
  });
});
