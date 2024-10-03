import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './asign-card.component';
import { ICardConfig, ICardItem } from '../public-api';
import { By } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from '../public-api';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  const mockItems: ICardItem[] = [
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
    { id: '3', name: 'Item 3' },
  ];

  const mockConfig: ICardConfig = {
    titlep1: 'Total de',
    titlep2: 'elementos',
    items: mockItems,
    buttonText: 'Acción',
    emptyStateText: 'No hay elementos disponibles',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComponent, MatIconModule, ButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.config = mockConfig;
    fixture.detectChanges();
  });

  it('Debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Debe mostrar el estado vacío cuando no hay elementos', () => {
    component.config.items = [];
    fixture.detectChanges();

    const emptyStateText = fixture.debugElement.query(
      By.css('.empty-state'),
    ).nativeElement;
    expect(emptyStateText.textContent.trim()).toBe(
      'No hay elementos disponibles',
    );
  });

  it('Debe deshabilitar el botón de acción cuando no hay elementos', () => {
    component.config.items = [];
    fixture.detectChanges();

    const actionButton = fixture.debugElement.query(
      By.css('.action-button'),
    ).nativeElement;
    expect(actionButton.disabled).toBeTruthy();
  });

});
