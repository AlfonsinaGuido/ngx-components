import {
  ComponentFixture,
  DeferBlockBehavior,
  TestBed,
} from '@angular/core/testing';
import { TableroKanbanComponent } from './tablero-kanban.component';
import { EstadoActividad, IColumna } from '../public-api';
import { actividades } from '../shared/data/kanban/actividades.data';

const columnas: IColumna[] = [
  {
    id: 1,
    nombre: 'abiertas',
    actividades: actividades.filter(
      (act) => act.EstadoDb === EstadoActividad.Pendiente,
    ),
  },
  {
    id: 2,
    nombre: 'en progreso',
    actividades: actividades.filter(
      (act) => act.EstadoDb === EstadoActividad.EnProceso,
    ),
  },
  {
    id: 3,
    nombre: 'finalizadas',
    actividades: actividades.filter(
      (act) => act.EstadoDb === EstadoActividad.Finalizada,
    ),
  },
];

describe('TableroKanbanComponent', () => {
  let component: TableroKanbanComponent;
  let fixture: ComponentFixture<TableroKanbanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableroKanbanComponent],
      deferBlockBehavior: DeferBlockBehavior.Manual,
    }).compileComponents();

    fixture = TestBed.createComponent(TableroKanbanComponent);
    component = fixture.componentInstance;
    component.columnas = columnas;
    component.isSingle = true;
    fixture.detectChanges();
  });

  it('should render the title of each column', () => {
    const colEl: HTMLElement = fixture.nativeElement;
    const columnHeader = colEl.querySelectorAll('#column-header');

    columnHeader.forEach((columna, index) => {
      const header = columna.querySelector('p');
      expect(header?.textContent?.trim()).toEqual(columnas[index].nombre);
    });
  });

  it('should render the amount of columns in the array', () => {
    const colEl: HTMLElement = fixture.nativeElement;
    const columnasEl = colEl.querySelectorAll('#board-column');
    expect(columnasEl.length).toEqual(columnas.length);
  });

  it('should render the activities with title and description in each column', () => {
    const colEl: HTMLElement = fixture.nativeElement;
    const columnasEl = colEl.querySelectorAll('#board-column');

    columnasEl.forEach((columna, index) => {
      const activitiesEl = columna.querySelectorAll('evo-carta-actividad');
      expect(activitiesEl.length).toEqual(columnas[index].actividades.length);

      columnas[index].actividades.forEach((actividad, actividadIndex) => {
        const activityEl = activitiesEl[actividadIndex];
        const titleEl = activityEl.querySelector('#activity-title');
        const descriptionEl = activityEl.querySelector('#activity-description');

        expect(titleEl?.textContent?.trim()).toEqual(actividad.Nombre);
        expect(descriptionEl?.textContent?.trim()).toEqual(
          actividad.Descripcion,
        );
      });
    });
  });
});
