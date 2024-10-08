import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SmartListComponent } from './smart-list.component';
import { ChangeDetectorRef, ElementRef, SimpleChanges } from '@angular/core';
import { ISmartlistFullConfig, ViewportService } from '../public-api';
import { ClassUtilityService } from '../shared/services/class-utility.service';
import { of } from 'rxjs';
import { ISmartListItem } from '../public-api';

describe('SmartListComponent', () => {
  let component: SmartListComponent;
  let fixture: ComponentFixture<SmartListComponent>;
  let viewportServiceMock: jasmine.SpyObj<ViewportService>;
  let classUtilityServiceMock: jasmine.SpyObj<ClassUtilityService>;
  let cdrMock: jasmine.SpyObj<ChangeDetectorRef>;
  let elementRefMock: ElementRef;

  const mockData: ISmartListItem[] = [
    { id: 1, name: 'Item 1', estado: 'asignado', selected: false },
    { id: 2, name: 'Item 2', estado: 'agregar', selected: true },
  ];

  const mockConfig: ISmartlistFullConfig = {
    Metadata: {
      Columns: [
        {
          Code: 'id',
          FieldName: 'id',
          Header: 'ID',
          Visible: true,
          PropertyName: '',
        },
        {
          Code: 'name',
          FieldName: 'name',
          Header: 'Name',
          Visible: true,
          PropertyName: '',
        },
        {
          Code: 'estado',
          FieldName: 'estado',
          Header: 'Estado',
          Visible: true,
          PropertyName: '',
        },
      ],
      Buttons: [
        {
          Code: 'edit',
          ConfirmationMessage: 'Are you sure to edit?',
          Text: '',
          Visible: false,
        },
        {
          Code: 'delete',
          ConfirmationMessage: 'Are you sure to delete?',
          Text: '',
          Visible: false,
        },
      ],
      Code: '',
      MultiSelect: false,
      AutogenerateColumns: false,
      Height: '',
    },
    Code: '',
    ClientControlID: '',
    Parameters: {},
    DatabaseDialect: '',
    UrlMetadata: '',
    FormTagId: '',
    AlmacenaInformacionPersonalizacion: false,
    Height: '',
    HasQueryBuilder: false,
    UrlData: '',
    FormatoEntero: '',
    Checksum: '',
    Rows: 0,
  };

  beforeEach(async () => {
    // Inicialización de los mocks y espías para servicios
    viewportServiceMock = jasmine.createSpyObj('ViewportService', [
      'getIsMobile',
    ]);
    classUtilityServiceMock = jasmine.createSpyObj('ClassUtilityService', [
      'getCombinedClasses',
    ]);
    cdrMock = jasmine.createSpyObj('ChangeDetectorRef', ['detectChanges']);
    elementRefMock = new ElementRef(document.createElement('div'));

    // Configuración del TestBed antes de crear el componente
    await TestBed.configureTestingModule({
      imports: [SmartListComponent], // Importa el componente standalone aquí
      providers: [
        { provide: ViewportService, useValue: viewportServiceMock },
        { provide: ClassUtilityService, useValue: classUtilityServiceMock },
        { provide: ChangeDetectorRef, useValue: cdrMock },
        { provide: ElementRef, useValue: elementRefMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    // Creación del componente y asignación de mocks después de la configuración de TestBed
    fixture = TestBed.createComponent(SmartListComponent);
    component = fixture.componentInstance;
    viewportServiceMock.getIsMobile.and.returnValue(of(false));

    fixture.detectChanges();
    component.data = [...mockData];
  });

  it('should create the SmartListComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct number of items based on pagination', () => {
    component.data = mockData; // Ensure data is populated before pagination
    component.pageSize = 1;
    component.paginate();
    fixture.detectChanges();
    expect(component.paginatedItems.length).toBe(1); // Verify correct pagination
  });

  it('should toggle the actions menu for a specific item', () => {
    const item = mockData[0];
    component.toggleActionsMenu(item);
    expect(component.isActionsModalOpen).toBe(true);
    expect(component.selectedItem).toBe(item);

    component.toggleActionsMenu(item);
    expect(component.isActionsModalOpen).toBe(false);
    expect(component.selectedItem).toBeNull();
  });

  it('should emit a row action when handleAction is called with confirmation', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    spyOn(component.rowAction, 'emit');

    const item = mockData[0];
    component.handleAction(item, 'edit');
    expect(component.rowAction.emit).toHaveBeenCalledWith({
      actionType: 'button',
      action: 'edit',
      item: item,
    });
  });

  it('should emit columnSort event when a column is sorted', () => {
    spyOn(component.columnSort, 'emit');
    component.metadata = mockConfig.Metadata; // Asegúrate de que las columnas estén configuradas
    component.sortableColumns = [0]; // Marca la primera columna como ordenable
    component.toggleSort('id'); // Llama al método para activar la ordenación
    expect(component.columnSort.emit).toHaveBeenCalledWith({
      column: 'id',
      order: 'asc',
      dataType: 'text',
    });
  });

  it('should update the page when goToPage is called with a valid page number', () => {
    spyOn(component.pageSelected, 'emit');
    component.totalPages = 3;

    component.goToPage(2);
    expect(component.page).toBe(2);
    expect(component.pageSelected.emit).toHaveBeenCalledWith(2);
  });

  it('should correctly detect the column data type as text', () => {
    const dataType = component.detectColumnType('name');
    expect(dataType).toBe('text');
  });

  it('should correctly detect the column data type as date', () => {
    component.data = [{ id: 1, date: '2023-09-23T00:00:00.000Z' }];
    const dataType = component.detectColumnType('date');
    expect(dataType).toBe('date');
  });

  it('should close the actions modal when closeActionsMenu is called', () => {
    component.isActionsModalOpen = true;
    component.selectedItem = mockData[0];
    component.closeActionsMenu();

    expect(component.isActionsModalOpen).toBe(false);
    expect(component.selectedItem).toBeNull();
  });

  it('should return the correct button label based on item state', () => {
    expect(component.getButtonLabel({ estado: 'asignado' } as any)).toBe(
      'Asignado',
    );
    expect(component.getButtonLabel({ estado: 'agregar' } as any)).toBe(
      'Agregar',
    );
    expect(component.getButtonLabel({ estado: 'quitar' } as any)).toBe(
      'Quitar',
    );
    expect(component.getButtonLabel({ estado: 'otro' } as any)).toBe('');
  });

  it('should return the correct button theme based on action code', () => {
    expect(component.getButtonTheme({ Code: 'edit' } as any)).toBe(
      'smart-list-button__update',
    );
    expect(component.getButtonTheme({ Code: 'new' } as any)).toBe(
      'smart-list-button__add',
    );
    expect(component.getButtonTheme({ Code: 'delete' } as any)).toBe(
      'smart-list-button__delete',
    );
    expect(component.getButtonTheme({ Code: 'unknown' } as any)).toBe(
      'smart-list-button__default',
    );
  });

  it('should select or deselect all items correctly', () => {
    component.data = [{ selected: false } as any, { selected: false } as any];
    component.selectAllResults();
    expect(component.data.every((item) => item.selected)).toBeTrue();

    component.selectAllResults();
    expect(component.data.every((item) => item.selected)).toBeFalse();
  });

  it('should toggle the selection of an individual item', () => {
    const item = { selected: false } as any;
    component.toggleSelect(item);
    expect(item.selected).toBeTrue();

    component.toggleSelect(item);
    expect(item.selected).toBeFalse();
  });

  it('should initialize the table correctly with metadata and data', () => {
    component.smartlistConfig = { Metadata: { Columns: [] } } as any;
    component.data = [{}, {}, {}];
    component.initializeTable();
    expect(component.totalItems).toBe(3);
  });

  it('should return the correct formatted title from code', () => {
    const formattedTitle = component.getTitleFromCode(
      'evowave.SolicitudAmonestaciones',
    );
    expect(formattedTitle).toBe('Solicitud Amonestaciones');
  });

  it('should adjust page size based on mobile state', () => {
    component.pageSize = 10;
    component.isMobile = true;
    component.adjustPageSize();
    expect(component.pageSize).toBe(1);

    component.isMobile = false;
    component.adjustPageSize();
    expect(component.pageSize).toBe(component.initialPageSize);
  });

  it('should return only visible columns', () => {
    component.metadata = mockConfig.Metadata;
    const visibleColumns = component.getVisibleColumns();
    expect(visibleColumns.length).toBe(3);
  });

  it('should return the minimum value between two numbers', () => {
    expect(component.getMinValue(5, 10)).toBe(5);
    expect(component.getMinValue(20, 15)).toBe(15);
  });

  it('should correctly determine if all items are selected', () => {
    component.data = [{ selected: true } as any, { selected: true } as any];
    component.paginate();
    expect(component.areAllSelected()).toBeTrue();

    component.data[0].selected = false;
    component.paginate();
    expect(component.areAllSelected()).toBeFalse();
  });

  it('should navigate to the previous page', () => {
    component.page = 2;
    component.totalPages = 3;
    component.previousPage();
    expect(component.page).toBe(1);
  });

  it('should navigate to the next page', () => {
    component.page = 1;
    component.totalPages = 3;
    component.nextPage();
    expect(component.page).toBe(2);
  });

  it('should display empty state text when there are no items', () => {
    component.data = [];
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain('No hay datos para mostrar');
  });
  
  it('should update the metadata and reinitialize the table when smartlistConfig changes', () => {
    const newConfig: ISmartlistFullConfig = {
      ...mockConfig,
      Metadata: {
        ...mockConfig.Metadata,
        Columns: [{
            Code: 'newColumn', FieldName: 'newField', Header: 'New Column', Visible: true,
            PropertyName: ''
        }],
      },
    };
    component.smartlistConfig = newConfig;
    component.ngOnChanges({ smartlistConfig: { currentValue: newConfig, previousValue: null, firstChange: true, isFirstChange: () => true } });
    expect(component.metadata).toEqual(newConfig.Metadata);
    expect(component.totalItems).toBe(component.data.length);
  });
  
  it('should return correct CSS classes based on context', () => {
    classUtilityServiceMock.getCombinedClasses.and.returnValue('base-classes');
  
    const tableClasses = component.getClasses('table-container');
    expect(tableClasses).toContain('base-classes table-container-class');
  
    const cardClasses = component.getClasses('card-container');
    expect(cardClasses).toContain('base-classes card-container-class');
  
    const defaultClasses = component.getClasses('unknown-context');
    expect(defaultClasses).toContain('base-classes');
  });
  
  
  it('should not navigate beyond the first or last page', () => {
    component.page = 1;
    component.previousPage();
    expect(component.page).toBe(1); // No debe cambiar porque ya estamos en la primera página
  
    component.page = component.totalPages;
    component.nextPage();
    expect(component.page).toBe(component.totalPages); // No debe cambiar porque ya estamos en la última página
  });
  
  it('should adjust page size when viewport state changes to mobile', () => {
    viewportServiceMock.getIsMobile.and.returnValue(of(true));
    component.ngOnInit(); // Forzar a que se ejecute la suscripción y ajuste el tamaño de página
    expect(component.pageSize).toBe(1);
  
    viewportServiceMock.getIsMobile.and.returnValue(of(false));
    component.ngOnInit(); // Forzar el cambio a no móvil
    expect(component.pageSize).toBe(component.initialPageSize);
  });
  
});
