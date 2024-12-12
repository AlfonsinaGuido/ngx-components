import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SmartListComponent } from './smart-list.component';
import { ChangeDetectorRef, ElementRef, SimpleChanges } from '@angular/core';
import {
  IColumnConfig,
  ISmartlistFullConfig,
  ViewportService,
} from '../public-api';
import { ClassUtilityService } from '../shared/services/class-utility.service';
import { of } from 'rxjs';
import { ISmartListItem } from '../public-api';
import { FormControl } from '@angular/forms';

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

    spyOn(window, 'confirm').and.returnValue(true);
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
    component.paginationConfig.pageSize = 1;
    component.data = mockData;
    component.paginationConfig.totalItems = component.data.length;
    component.paginate();

    expect(component.paginatedItems.length).toBe(1);
    expect(component.paginatedItems[0]).toEqual(mockData[0]);

    component.goToPage(2);
    fixture.detectChanges();

    expect(component.paginatedItems.length).toBe(1);
  });

  it('should update the page and paginate items when goToPage is called with a valid page number', () => {
    spyOn(component.pageSelected, 'emit');
    component.paginationConfig.totalPages = 3;

    component.goToPage(2);
    expect(component.paginationConfig.page).toBe(2);
    expect(component.paginatedItems.length).toBeLessThanOrEqual(
      component.paginationConfig.pageSize,
    );
    expect(component.pageSelected.emit).toHaveBeenCalledWith(2);
  });

  it('should not change the page or call paginate if an invalid page number is provided', () => {
    spyOn(component.pageSelected, 'emit');
    spyOn(component, 'paginate').and.callThrough();
    component.paginationConfig.totalPages = 3;

    component.goToPage(0);
    expect(component.paginationConfig.page).toBe(1);
    expect(component.paginate).not.toHaveBeenCalled();
    expect(component.pageSelected.emit).not.toHaveBeenCalled();

    component.goToPage(4);
    expect(component.paginationConfig.page).toBe(1);
    expect(component.paginate).not.toHaveBeenCalled();
    expect(component.pageSelected.emit).not.toHaveBeenCalled();
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
    spyOn(component.rowAction, 'emit');

    const mockItem = {
      id: 3,
      name: 'Item 3',
      estado: 'editable',
      selected: false,
    };

    component.handleAction(mockItem, 'edit');

    expect(component.rowAction.emit).toHaveBeenCalledWith({
      actionType: 'button',
      action: 'edit',
      item: mockItem,
    });
  });

  it('should emit columnSort event when a column is sorted', () => {
    spyOn(component.columnSort, 'emit');

    component.metadata = mockConfig.Metadata;
    component.tableConfig.sortableColumns = [0, 1];
    component.toggleSort('id');

    expect(component.columnSort.emit).toHaveBeenCalledWith('id');

    component.toggleSort('name');

    expect(component.columnSort.emit).toHaveBeenCalledWith('id,name');

    component.toggleSort('id');

    expect(component.columnSort.emit).toHaveBeenCalledWith('id desc,name');
  });

  it('should update the page when goToPage is called with a valid page number', () => {
    spyOn(component.pageSelected, 'emit');
    component.paginationConfig.totalPages = 3;

    component.goToPage(2);
    expect(component.paginationConfig.page).toBe(2);
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

  it('should toggle the actions menu correctly', () => {
    const item1 = mockData[0];
    const item2 = mockData[1];

    component.openActionsModal(item1);
    expect(component.selectedItem).toBe(item1);
    expect(component.isActionsModalOpen).toBeTrue();

    component.openActionsModal(item2);
    expect(component.selectedItem).toBe(item2);
    expect(component.isActionsModalOpen).toBeTrue();

    component.closeActionsMenu();
    expect(component.isActionsModalOpen).toBeFalse();
    expect(component.selectedItem).toBeNull();
  });

  it('should return column code or index when trackByColumnCode is called', () => {
    const column = { Code: 'testColumn' } as IColumnConfig;
    const index = 3;

    expect(component.trackByColumnCode(index, column)).toBe('testColumn');
    expect(component.trackByColumnCode(index, {} as any)).toBe(index);
  });

  it('should return the correct sort icon class for a column', () => {
    spyOn(component, 'getSortIcon').and.returnValue('arrow_upward');
    const columnName = 'id';
    const iconClass = component.getSortIconClass(columnName);

    expect(iconClass).toBe('sort-icon arrow_upward');
  });

  it('should return the correct sort icon for a column', () => {
    component.metadata = mockConfig.Metadata;
    component.tableConfig.sortableColumns = [0];

    component.toggleSort('id');
    expect(component.getSortIcon('id')).toBe('arrow_upward');

    component.toggleSort('id');
    expect(component.getSortIcon('id')).toBe('arrow_downward');

    component.toggleSort('id');
    expect(component.getSortIcon('id')).toBe('sort');
  });

  it('should adjust pagination based on mobile state', () => {
    component.isMobile = true;
    component.adjustPagination();

    expect(component.paginationConfig.pageSize).toBe(1);

    component.isMobile = false;
    component.adjustPagination();

    expect(component.paginationConfig.pageSize).toBe(10);
  });

  it('should return combined CSS classes based on context', () => {
    classUtilityServiceMock.getCombinedClasses.and.callFake(
      (context, twClass) => {
        return `${context}-class ${twClass}`.trim();
      },
    );

    const classes = component.getClasses('evo-table-container');
    expect(classes).toContain('evo-table-container-class');
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
    const testCases = [
      {
        estado: 'asignado',
        expected: 'smart-list-button smart-list-button__update',
      },
      {
        estado: 'assigned',
        expected: 'smart-list-button smart-list-button__update',
      },
      {
        estado: 'agregar',
        expected: 'smart-list-button smart-list-button__add',
      },
      { estado: 'add', expected: 'smart-list-button smart-list-button__add' },
      {
        estado: 'quitar',
        expected: 'smart-list-button smart-list-button__delete',
      },
      {
        estado: 'remove',
        expected: 'smart-list-button smart-list-button__delete',
      },
      {
        estado: 'unknown',
        expected: 'smart-list-button smart-list-button__default',
      },
    ];

    testCases.forEach(({ estado, expected }) => {
      const action = { estado };
      const result = component.getButtonTheme(action);
      expect(result).toBe(expected, `Failed for estado: ${estado}`);
    });
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
    expect(component.paginationConfig.totalItems).toBe(3);
  });

  it('should return the correct formatted title from code', () => {
    const formattedTitle = component.getTitleFromCode(
      'evowave.SolicitudAmonestaciones',
    );
    expect(formattedTitle).toBe('Solicitud Amonestaciones');
  });

  it('should adjust page size based on mobile state', () => {
    component.paginationConfig.pageSize = 10;
    component.isMobile = true;
    component.adjustPageSize();
    expect(component.paginationConfig.pageSize).toBe(1);

    component.isMobile = false;
    component.adjustPageSize();
    expect(component.paginationConfig.pageSize).toBe(component.initialPageSize);
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
    component.paginationConfig.page = 2;
    component.paginationConfig.totalPages = 3;
    component.previousPage();
    expect(component.paginationConfig.page).toBe(1);
  });

  it('should navigate to the next page', () => {
    component.paginationConfig.page = 1;
    component.paginationConfig.totalPages = 3;
    component.nextPage();
    expect(component.paginationConfig.page).toBe(2);
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
    expect(component.paginationConfig.totalItems).toBe(component.data.length);
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
    component.paginationConfig.page = 1;
    component.previousPage();
    expect(component.paginationConfig.page).toBe(1);

    component.paginationConfig.page = component.paginationConfig.totalPages;
    component.nextPage();
    expect(component.paginationConfig.page).toBe(
      component.paginationConfig.totalPages,
    );
  });

  it('should adjust page size when viewport state changes to mobile', () => {
    viewportServiceMock.getIsMobile.and.returnValue(of(true));
    component.ngOnInit();
    expect(component.paginationConfig.pageSize).toBe(1);

    viewportServiceMock.getIsMobile.and.returnValue(of(false));
    component.ngOnInit();
    expect(component.paginationConfig.pageSize).toBe(component.initialPageSize);
  });

  it('should update page size and repaginate when pageSize is manually changed', () => {
    component.paginationConfig.pageSize = 5;
    component.paginate();
    expect(component.paginatedItems.length).toBeLessThanOrEqual(5);

    component.paginationConfig.pageSize = 2;
    component.paginate();
    expect(component.paginatedItems.length).toBeLessThanOrEqual(2);
  });

  it('should correctly handle viewport service subscription on mobile state change', () => {
    viewportServiceMock.getIsMobile.and.returnValue(of(true));
    component.ngOnInit();
    expect(component.isMobile).toBeTrue();
    expect(component.paginationConfig.pageSize).toBe(1);

    viewportServiceMock.getIsMobile.and.returnValue(of(false));
    component.ngOnInit();
    expect(component.isMobile).toBeFalse();
    expect(component.paginationConfig.pageSize).toBe(component.initialPageSize);
  });

  it('should reset sort state when toggling sort on a column', () => {
    component.metadata = mockConfig.Metadata;
    component.tableConfig.sortableColumns = [0];

    component.toggleSort('id');
    expect(component.sortState['id']).toBe('asc');

    component.toggleSort('id');
    expect(component.sortState['id']).toBe('desc');

    component.toggleSort('id');
    expect(component.sortState['id']).toBeNull();
  });

  it('should not display action button if there are no actions configured or showActions is false', () => {
    // Case 1: No actions configured
    component.metadata = { ...mockConfig.Metadata, Buttons: [] };
    component.tableConfig = { ...component.tableConfig, showActions: false };
    fixture.detectChanges();
    let compiled = fixture.nativeElement;
    expect(compiled.querySelector('card__evo-button')).toBeNull();
  });

  it('should correctly handle visibility of columns based on hiddenColumns input', () => {
    component.metadata = mockConfig.Metadata;
    component.tableConfig.hiddenColumns = [1];
    fixture.detectChanges();

    const visibleColumns = component.getVisibleColumns();
    expect(visibleColumns.some((col) => col.Code === 'name')).toBeFalse();
  });
  it('should not sort columns if no sortableColumns are defined', () => {
    component.metadata = mockConfig.Metadata;
    component.tableConfig.sortableColumns = [];
    component.toggleSort('id');
    expect(component.sortState['id']).toBeUndefined();
  });

  it('should not change the page if an invalid page number is provided', () => {
    spyOn(component.pageSelected, 'emit');
    component.paginationConfig.totalPages = 3;

    component.goToPage(0);
    expect(component.paginationConfig.page).toBe(1);

    component.goToPage(4);
    expect(component.paginationConfig.page).toBe(1);
    expect(component.pageSelected.emit).not.toHaveBeenCalled();
  });

  it('should update visible columns dynamically when hiddenColumns changes', () => {
    component.metadata = mockConfig.Metadata;
    component.tableConfig.hiddenColumns = [1];
    const visibleColumns = component.getVisibleColumns();
    expect(visibleColumns.length).toBe(2);

    component.tableConfig.hiddenColumns = [];
    const updatedVisibleColumns = component.getVisibleColumns();
    expect(updatedVisibleColumns.length).toBe(3);
  });

  it('should adjust layout when switching from mobile to desktop view', () => {
    viewportServiceMock.getIsMobile.and.returnValue(of(true));
    component.ngOnInit();
    expect(component.isMobile).toBeTrue();
    expect(component.paginationConfig.pageSize).toBe(1);

    viewportServiceMock.getIsMobile.and.returnValue(of(false));
    component.ngOnInit();
    expect(component.isMobile).toBeFalse();
    expect(component.paginationConfig.pageSize).toBe(component.initialPageSize);
  });

  it('should handle initialization when metadata is missing', () => {
    component.smartlistConfig = null;
    component.data = mockData;
    component.initializeTable();
    expect(component.metadata).toBeNull();
    expect(component.paginationConfig.totalItems).toBe(mockData.length);
  });

  it('should maintain selected items across pagination', () => {
    component.data = mockData;
    component.paginationConfig.pageSize = 1;
    component.paginate();

    const firstItem = component.paginatedItems[0];
    component.toggleSelect(firstItem);
    expect(firstItem.selected).toBeTrue();
    expect(component.selectedItems.length).toBe(1);

    component.goToPage(2);
    expect(component.selectedItems.length).toBe(1);
  });

  it('should adjust total pages when data length changes', () => {
    component.data = [...mockData];
    component.paginationConfig.pageSize = 1;
    component.initializeTable();
    expect(component.paginationConfig.totalPages).toBe(2);
    component.data.push({
      id: 3,
      name: 'Item 3',
      estado: 'agregar',
      selected: false,
    } as ISmartListItem);
    component.paginate();
    expect(component.paginationConfig.totalPages).toBe(3);
  });

  it('should transform selector options to IValueList format', () => {
    const options = [
      { Id: '1', Description: 'Option 1' },
      { Id: '2', Description: 'Option 2' },
    ];
    const result = component.transformSelectorOptions(options);

    expect(result).toEqual([
      { Id: '1', Description: 'Option 1', Bag: {} },
      { Id: '2', Description: 'Option 2', Bag: {} },
    ]);
  });

  it('should handle selector value change and emit row action', () => {
    spyOn(component.rowAction, 'emit');
    const item = { id: 1, name: 'Item 1' } as ISmartListItem;
    component.handleSelectorChange(item, 'name', 'Updated Item');

    expect(item['name']).toBe('Updated Item');
    expect(component.rowAction.emit).toHaveBeenCalledWith({
      actionType: 'selector',
      action: 'update',
      item,
    });
  });

  it('should get all table data', () => {
    component.data = mockData;
    const result = component.getTableData();

    expect(result).toEqual(mockData);
  });

  it('should create a default control value based on column configuration', () => {
    const multiSelectColumn = { MultiSelect: true } as IColumnConfig;
    const singleSelectColumn = { MultiSelect: false } as IColumnConfig;

    expect(component.createDefaultControl(multiSelectColumn)).toEqual([]);
    expect(component.createDefaultControl(singleSelectColumn)).toBeNull();
  });

  it('should update selector value and emit row action on value change', () => {
    spyOn(component.rowAction, 'emit');
    const item = { id: 1, name: 'Item 1' } as ISmartListItem;
    const column = { FieldName: 'name', MultiSelect: false } as IColumnConfig;

    component.onSelectorValueChange('Updated Value', item, column);

    expect(item['name']).toBe('Updated Value');
    expect(component.rowAction.emit).toHaveBeenCalledWith({
      actionType: 'selector',
      action: 'update',
      item,
    });
  });

  it('should return all table data with updated values', () => {
    component.data = mockData;
    const result = component.getAllData();

    expect(result).toEqual(mockData);
  });

  it('should return default value for createDefaultControl for unrecognized column types', () => {
    const column = { MultiSelect: undefined } as IColumnConfig;
    expect(component.createDefaultControl(column)).toBeNull();
  });

  it('should correctly toggle actions menu when called repeatedly', () => {
    const item = mockData[0];
    component.toggleActionsMenu(item);
    expect(component.isActionsModalOpen).toBeTrue();

    component.toggleActionsMenu(item);
    expect(component.isActionsModalOpen).toBeFalse();

    component.toggleActionsMenu(item);
    expect(component.isActionsModalOpen).toBeTrue();
  });

  it('should handle invalid columnName gracefully in toggleSort', () => {
    spyOn(component.columnSort, 'emit');
    component.toggleSort('nonexistentColumn');
    expect(component.columnSort.emit).not.toHaveBeenCalled();
  });

  it('should not throw error when getSortIcon is called with invalid columnName', () => {
    expect(() => component.getSortIcon('nonexistentColumn')).not.toThrow();
    expect(component.getSortIcon('nonexistentColumn')).toBe('sort');
  });

  it('should reset pagination when data changes', () => {
    spyOn(component, 'paginate');
    component.ngOnChanges({
      data: {
        currentValue: [],
        previousValue: mockData,
        firstChange: false,
        isFirstChange: function (): boolean {
          throw new Error('Function not implemented.');
        },
      },
    });
    expect(component.paginate).toHaveBeenCalled();
    expect(component.paginationConfig.page).toBe(1);
  });

  it('should correctly determine if a selector control exists', () => {
    const column = mockConfig.Metadata.Columns[0];
    const item = mockData[0];
    const control = component.getOrCreateSelectControl(item, column);
    expect(control).toBeDefined();
    expect(control.value).toBe(item[column.FieldName]);
  });

  it('should return correct pageSize based on isMobile state', () => {
    component.isMobile = true;
    component.adjustPageSize();
    expect(component.paginationConfig.pageSize).toBe(1);

    component.isMobile = false;
    component.adjustPageSize();
    expect(component.paginationConfig.pageSize).toBe(component.initialPageSize);
  });

  it('should not fail when initializing table with empty config', () => {
    component.smartlistConfig = null;
    expect(() => component.initializeTable()).not.toThrow();
    expect(component.metadata).toBeNull();
  });

  it('should handle invalid action gracefully in handleAction', () => {
    const invalidAction = 'nonexistentAction';
    const item = mockData[0];
    spyOn(component.rowAction, 'emit');
    component.handleAction(item, invalidAction);
    expect(component.rowAction.emit).not.toHaveBeenCalled();
  });

  it('should adjust layout correctly when isMobile toggles', () => {
    spyOn(component, 'adjustPageSize');
    spyOn(component, 'adjustPagination');

    component.isMobile = true;
    component.ngOnInit();
    expect(component.adjustPageSize).toHaveBeenCalled();
    expect(component.adjustPagination).toHaveBeenCalled();
  });
});
