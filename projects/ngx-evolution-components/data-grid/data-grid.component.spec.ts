import { ComponentFixture, TestBed } from '@angular/core/testing';
import { actividad1 as actividadMockData } from '../shared/data/kanban/actividades.data';

import { DataGridComponent } from './data-grid.component';
import { IDataGridItem } from '../public-api';

const dataGridMockData: IDataGridItem[] = [
  {
    propertyTitle: 'Responsable',
    propertyValue: actividadMockData.EmpleoResponsable?.NombresApellidos,
    valueType: 'single',
    icon: 'person',
  },
  {
    propertyTitle: 'Fecha fin',
    propertyValue: actividadMockData.FechaFin.toLocaleDateString(),
    valueType: 'single',
    icon: 'calendar_today',
  },
  {
    propertyTitle: 'Etapa',
    propertyValue: actividadMockData.Etapa.Nombre,
    valueType: 'single',
    icon: 'timeline',
  },
  {
    propertyTitle: 'Estado',
    propertyValue: actividadMockData.EstadoDb,
    valueType: 'single',
    icon: 'fiber_manual_record',
  },
  {
    propertyTitle: 'Prioridad',
    propertyValue: actividadMockData.Prioridad?.Nombre,
    valueType: 'tag',
    icon: 'label',
    prioridad: actividadMockData.Prioridad,
  },
  {
    propertyTitle: 'Descripción',
    propertyValue: actividadMockData.Descripcion,
    valueType: 'descriptive',
    icon: 'subtitles',
  },
  {
    propertyTitle: 'Objetivos',
    propertyValue: actividadMockData.Objetivo,
    valueType: 'descriptive',
    icon: 'playlist_add_check',
  },
];

describe('DataGridComponent', () => {
  let component: DataGridComponent;
  let fixture: ComponentFixture<DataGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataGridComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DataGridComponent);
    component = fixture.componentInstance;
    component.data = dataGridMockData;
    fixture.detectChanges();
  });

  it('should render all data grid items', () => {
    const dataGridEl: HTMLElement = fixture.nativeElement;
    const dataGridItems = dataGridEl.querySelectorAll('#data-grid-property');
    expect(dataGridItems.length).toBe(dataGridMockData.length);
  });

  it('should assign the correct class to the data grid value', () => {
    const dataGridEl: HTMLElement = fixture.nativeElement;
    const dataGridItems = dataGridEl.querySelectorAll('#data-grid-value');
    const singleItems = dataGridMockData.filter(
      (item) => item.valueType === 'single',
    );
    const descriptiveItems = dataGridMockData.filter(
      (item) => item.valueType === 'descriptive',
    );
    const tagItems = dataGridMockData.filter(
      (item) => item.valueType === 'tag',
    );

    expect(dataGridItems.length).toBe(
      singleItems.length + descriptiveItems.length + tagItems.length,
    );
  });

  it('should render tag component when valueType is tag', () => {
    const dataGridEl: HTMLElement = fixture.nativeElement;
    const tagItems = dataGridEl.querySelectorAll('evo-tag');
    const tagItemsMock = dataGridMockData.filter(
      (item) => item.valueType === 'tag',
    );

    expect(tagItems.length).toBe(tagItemsMock.length);
  });
});
