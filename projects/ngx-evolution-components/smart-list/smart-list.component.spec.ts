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
    viewportServiceMock = jasmine.createSpyObj('ViewportService', [
      'getIsMobile',
    ]);
    classUtilityServiceMock = jasmine.createSpyObj('ClassUtilityService', [
      'getCombinedClasses',
    ]);
    cdrMock = jasmine.createSpyObj('ChangeDetectorRef', ['detectChanges']);
    elementRefMock = new ElementRef(document.createElement('div'));

    await TestBed.configureTestingModule({
      imports: [SmartListComponent],
      providers: [
        { provide: ViewportService, useValue: viewportServiceMock },
        { provide: ClassUtilityService, useValue: classUtilityServiceMock },
        { provide: ChangeDetectorRef, useValue: cdrMock },
        { provide: ElementRef, useValue: elementRefMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
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
    component.data = mockData;
    component.pageSize = 1;
    component.paginate();
    fixture.detectChanges();
    expect(component.paginatedItems.length).toBe(1);
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
    component.metadata = mockConfig.Metadata;
    component.sortableColumns = [0];
    component.toggleSort('id');
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
        Columns: [
          {
            Code: 'newColumn',
            FieldName: 'newField',
            Header: 'New Column',
            Visible: true,
            PropertyName: '',
          },
        ],
      },
    };
    component.smartlistConfig = newConfig;
    component.ngOnChanges({
      smartlistConfig: {
        currentValue: newConfig,
        previousValue: null,
        firstChange: true,
        isFirstChange: () => true,
      },
    });
    expect(component.metadata).toEqual(newConfig.Metadata);
    expect(component.totalItems).toBe(component.data.length);
  });

  it('should return correct CSS classes based on context', () => {
    classUtilityServiceMock.getCombinedClasses.and.callFake(
      (baseClasses: string, twClass: string) => {
        return `${baseClasses} ${twClass}`.trim().replace(/\s+/g, ' ');
      },
    );

    const tableClasses = component.getClasses('evo-table-container');
    expect(tableClasses).toContain(
      'evo-table-container evo-table-container-class',
    );

    const cardClasses = component.getClasses('evo-card-container');
    expect(cardClasses).toContain(
      'evo-card-container evo-card-container-class',
    );

    const defaultClasses = component.getClasses('unknown-context');
    expect(defaultClasses).toContain('unknown-context');
  });

  it('should not navigate beyond the first or last page', () => {
    component.page = 1;
    component.previousPage();
    expect(component.page).toBe(1);

    component.page = component.totalPages;
    component.nextPage();
    expect(component.page).toBe(component.totalPages);
  });

  it('should adjust page size when viewport state changes to mobile', () => {
    viewportServiceMock.getIsMobile.and.returnValue(of(true));
    component.ngOnInit();
    expect(component.pageSize).toBe(1);

    viewportServiceMock.getIsMobile.and.returnValue(of(false));
    component.ngOnInit();
    expect(component.pageSize).toBe(component.initialPageSize);
  });

  it('should update page size and repaginate when pageSize is manually changed', () => {
    component.pageSize = 5;
    component.paginate();
    expect(component.paginatedItems.length).toBeLessThanOrEqual(5);

    component.pageSize = 2;
    component.paginate();
    expect(component.paginatedItems.length).toBeLessThanOrEqual(2);
  });

  it('should correctly handle viewport service subscription on mobile state change', () => {
    viewportServiceMock.getIsMobile.and.returnValue(of(true));
    component.ngOnInit();
    expect(component.isMobile).toBeTrue();
    expect(component.pageSize).toBe(1);

    viewportServiceMock.getIsMobile.and.returnValue(of(false));
    component.ngOnInit();
    expect(component.isMobile).toBeFalse();
    expect(component.pageSize).toBe(component.initialPageSize);
  });

  it('should reset sort state when toggling sort on a column', () => {
    component.metadata = mockConfig.Metadata;
    component.sortableColumns = [0];

    component.toggleSort('id');
    expect(component.sortState['id']).toBe('asc');

    component.toggleSort('id');
    expect(component.sortState['id']).toBe('desc');

    component.toggleSort('id');
    expect(component.sortState['id']).toBeNull();
  });

  it('should not display action button if there are no actions configured', () => {
    component.metadata = { ...mockConfig.Metadata, Buttons: [] };
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('evo-button')).toBeNull();
  });

  it('should correctly handle visibility of columns based on hiddenColumns input', () => {
    component.metadata = mockConfig.Metadata;
    component.hiddenColumns = [1];
    fixture.detectChanges();

    const visibleColumns = component.getVisibleColumns();
    expect(visibleColumns.some((col) => col.Code === 'name')).toBeFalse();
  });
  it('should not sort columns if no sortableColumns are defined', () => {
    component.metadata = mockConfig.Metadata;
    component.sortableColumns = [];
    component.toggleSort('id');
    expect(component.sortState['id']).toBeUndefined();
  });

  it('should not change the page if an invalid page number is provided', () => {
    spyOn(component.pageSelected, 'emit');
    component.totalPages = 3;

    component.goToPage(0);
    expect(component.page).toBe(1);

    component.goToPage(4);
    expect(component.page).toBe(1);
    expect(component.pageSelected.emit).not.toHaveBeenCalled();
  });

  it('should update visible columns dynamically when hiddenColumns changes', () => {
    component.metadata = mockConfig.Metadata;
    component.hiddenColumns = [1];
    const visibleColumns = component.getVisibleColumns();
    expect(visibleColumns.length).toBe(2);

    component.hiddenColumns = [];
    const updatedVisibleColumns = component.getVisibleColumns();
    expect(updatedVisibleColumns.length).toBe(3);
  });

  it('should close actions menu when a different item is selected', () => {
    const item1 = mockData[0];
    const item2 = mockData[1];

    component.openActionsModal(item1);
    expect(component.isActionsModalOpen).toBeTrue();
    expect(component.selectedItem).toBe(item1);

    component.openActionsModal(item2);
    expect(component.selectedItem).toBe(item2);
    expect(component.isActionsModalOpen).toBeTrue();
  });

  it('should adjust layout when switching from mobile to desktop view', () => {
    viewportServiceMock.getIsMobile.and.returnValue(of(true));
    component.ngOnInit();
    expect(component.isMobile).toBeTrue();
    expect(component.pageSize).toBe(1);

    viewportServiceMock.getIsMobile.and.returnValue(of(false));
    component.ngOnInit();
    expect(component.isMobile).toBeFalse();
    expect(component.pageSize).toBe(component.initialPageSize);
  });

  it('should handle initialization when metadata is missing', () => {
    component.smartlistConfig = null;
    component.data = mockData;
    component.initializeTable();
    expect(component.metadata).toBeNull();
    expect(component.totalItems).toBe(mockData.length);
  });

  it('should reset sort state when a different column is sorted', () => {
    component.metadata = mockConfig.Metadata;
    component.sortableColumns = [0, 1];

    component.toggleSort('id');
    expect(component.sortState['id']).toBe('asc');

    component.toggleSort('name');
    expect(component.sortState['id']).toBeNull();
    expect(component.sortState['name']).toBe('asc');
  });

  it('should maintain selected items across pagination', () => {
    component.data = mockData;
    component.pageSize = 1;
    component.paginate();

    const firstItem = component.paginatedItems[0];
    component.toggleSelect(firstItem);
    expect(firstItem.selected).toBeTrue();
    expect(component.selectedItems.length).toBe(1);

    component.goToPage(2);
    expect(component.selectedItems.length).toBe(1);
  });

  it('should close action menu when opening for a different item', () => {
    const item1 = mockData[0];
    const item2 = mockData[1];

    component.openActionsModal(item1);
    expect(component.selectedItem).toBe(item1);
    expect(component.isActionsModalOpen).toBeTrue();

    component.openActionsModal(item2);
    expect(component.selectedItem).toBe(item2);
    expect(component.isActionsModalOpen).toBeTrue();
  });

  it('should adjust total pages when data length changes', () => {
    component.data = [...mockData];
    component.pageSize = 1;
    component.initializeTable();

    expect(component.totalPages).toBe(2);

    component.data.push({
      id: 3,
      name: 'Item 3',
      estado: 'agregar',
      selected: false,
    } as ISmartListItem);
    component.initializeTable();

    expect(component.totalPages).toBe(3);
  });
});
