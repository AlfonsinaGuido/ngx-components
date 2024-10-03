import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgramTableComponent } from './program-table.component';
import { ISmartlistFullConfig, ITableItem, ITableTitles } from '../public-api';
import { By } from '@angular/platform-browser';

describe('ProgramTableComponent', () => {
  let component: ProgramTableComponent;
  let fixture: ComponentFixture<ProgramTableComponent>;

  const mockData: ITableItem[] = [
    { nombre: 'John Doe', edad: 30 },
    { nombre: 'Jane Smith', edad: 25 },
  ];

  const mockConfig: ISmartlistFullConfig = {
    Code: 'test-code',
    ClientControlID: 'test-control-id',
    Parameters: {},
    DatabaseDialect: 'MySql',
    UrlMetadata: '/api/test',
    FormTagId: 'test-form-id',
    AlmacenaInformacionPersonalizacion: false,
    Height: 'Auto',
    Metadata: {
      Code: 'test-code',
      MultiSelect: true,
      AutogenerateColumns: false,
      Columns: [
        {
          Code: 'nombreCol',
          FieldName: 'nombre',
          PropertyName: 'nombre',
          Header: 'Nombre',
          Visible: true,
        },
        {
          Code: 'edadCol',
          FieldName: 'edad',
          PropertyName: 'edad',
          Header: 'Edad',
          Visible: true,
        },
      ],
      Buttons: [],
      Height: '',
    },
    HasQueryBuilder: false,
    UrlData: '/api/test/data',
    FormatoEntero: '',
    Checksum: '',
    Rows: 0,
  };

  const mockTitles: ITableTitles = {
    mostrando: 'Mostrando',
    resultados: 'resultados',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramTableComponent);
    component = fixture.componentInstance;

    component.smartlistConfig = mockConfig;
    component.data = mockData;
    component.titles = mockTitles;
    component.page = 1;
    component.pageSize = 2;
    component.totalPages = 1;

    fixture.detectChanges();
  });

  it('Debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Debe alternar el orden de las columnas correctamente', () => {
    spyOn(component.columnSort, 'emit');

    component.toggleSort('nombre');

    expect(component.columnSort.emit).toHaveBeenCalledWith({
      column: 'nombre',
      order: 'asc',
      dataType: 'text',
    });

    component.toggleSort('nombre');
    expect(component.columnSort.emit).toHaveBeenCalledWith({
      column: 'nombre',
      order: 'desc',
      dataType: 'text',
    });
  });

  it('Debe manejar la selección de todos los elementos', () => {
    spyOn(component.selectedUsers, 'emit');

    component.selectAllResults();

    expect(component.selectedUsers.emit).toHaveBeenCalled();
    expect(component.selectedItems.length).toBe(2);
  });
});
