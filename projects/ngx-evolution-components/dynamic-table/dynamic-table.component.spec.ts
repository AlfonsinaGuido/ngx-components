import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DynamicTableComponent } from './dynamic-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from '../button/button.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { FormsModule } from '@angular/forms';
import {
  IDynamicTableColumn,
  IPaginationConfig,
  ITableRow,
  IColorMatchRule,
} from '../public-api';

describe('DynamicTableComponent', () => {
  let component: DynamicTableComponent;
  let fixture: ComponentFixture<DynamicTableComponent>;

  const mockColumns: IDynamicTableColumn[] = [
    { header: 'ID', field: 'id' },
    { header: 'Name', field: 'name' },
    { header: 'Status', field: 'status' },
  ];

  const mockData: ITableRow[] = [
    { id: 1, name: 'Alice', status: 'Active', selected: false },
    { id: 2, name: 'Bob', status: 'Pending', selected: false },
    { id: 3, name: 'Charlie', status: 'Active', selected: false },
  ];

  const mockPaginationConfig: IPaginationConfig = {
    isManualPaginate: false,
    currentPage: 1,
    totalPages: 1,
    pageSize: 2,
    totalItems: 0,
    titles: {
      showing: 'Mostrando',
      results: 'resultados',
      page: 'Página',
      of: 'de',
    },
    page: 0,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        ButtonComponent,
        PaginationComponent,
        DynamicTableComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicTableComponent);
    component = fixture.componentInstance;
    component.columns = [...mockColumns];
    component.data = [...mockData];
    component.paginationConfig = { ...mockPaginationConfig };

    fixture.detectChanges();
  });

  function setPaginationData(size: number, total?: number) {
    component.paginationConfig.pageSize = size;
    if (total !== undefined) {
      component.paginationConfig.totalItems = total;
    } else {
      component.paginationConfig.totalItems = component.data.length;
    }
    component.paginationConfig.totalPages = Math.ceil(
      component.paginationConfig.totalItems / size,
    );

    component.ngOnChanges({
      paginationConfig: {
        currentValue: component.paginationConfig,
        previousValue: null,
        firstChange: false,
        isFirstChange: () => false,
      },
    });
  }

  it('should create the DynamicTableComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the component on ngOnInit', () => {
    // Llamamos manualmente
    spyOn<any>(component, 'initializeTable').and.callThrough();
    component.ngOnInit();
    expect(component['initializeTable']).toHaveBeenCalled();
  });

  it('should re-initialize table when relevant inputs change', () => {
    spyOn<any>(component, 'initializeTable').and.callThrough();
    component.ngOnChanges({
      data: {
        currentValue: [],
        previousValue: mockData,
        firstChange: false,
        isFirstChange: () => false,
      },
    });
    expect(component['initializeTable']).toHaveBeenCalled();
  });

  it('should not crash on ngOnDestroy (no subscriptions in the mock)', () => {
    expect(() => component.ngOnDestroy()).not.toThrow();
  });

  it('should set up pagination in initializeTable indirectly via ngOnInit', () => {
    component.data = [...mockData];
    spyOn<any>(component, 'adjustPagination').and.callThrough();

    component.ngOnInit();
    expect(component.paginatedItems.length).toBeGreaterThan(0);
    expect(component['adjustPagination']).toHaveBeenCalled();
  });

  it('should adjust pagination automatically when not manual', () => {
    component.paginationConfig.isManualPaginate = false;
    component.paginationConfig.pageSize = 2;
    component.data = [...mockData];
    component['adjustPagination']();

    expect(component.paginatedItems.length).toBe(2);
    expect(component.paginationConfig.totalPages).toBe(2);
  });

  it('should go to a valid page number', () => {
    setPaginationData(2);
    expect(component.paginationConfig.currentPage).toBe(1);
    component.goToPage(2);
    expect(component.paginationConfig.currentPage).toBe(2);
  });

  it('should not go to an invalid page number', () => {
    setPaginationData(2);
    component.goToPage(-1);
    expect(component.paginationConfig.currentPage).toBe(1);

    component.goToPage(999);
    expect(component.paginationConfig.currentPage).toBe(1);
  });

  it('should move to previous page if possible', () => {
    setPaginationData(1);
    component.goToPage(3);
    expect(component.paginationConfig.currentPage).toBe(3);
    component.previousPage();
    expect(component.paginationConfig.currentPage).toBe(2);
  });

  it('should not move to previous page if already at page 1', () => {
    setPaginationData(1);
    component.goToPage(1);
    component.previousPage();
    expect(component.paginationConfig.currentPage).toBe(1);
  });

  it('should move to next page if possible', () => {
    setPaginationData(1);
    expect(component.paginationConfig.currentPage).toBe(1);
    component.nextPage();
    expect(component.paginationConfig.currentPage).toBe(2);
  });

  it('should not move beyond the last page', () => {
    setPaginationData(1);
    component.goToPage(3);
    component.nextPage();
    expect(component.paginationConfig.currentPage).toBe(3);
  });

  it('should return true if all items in current page are selected', () => {
    setPaginationData(2);
    component.paginatedItems[0].selected = true;
    component.paginatedItems[1].selected = true;
    expect(component.areAllSelected()).toBeTrue();
  });

  it('should return false if not all items are selected', () => {
    setPaginationData(2);
    component.paginatedItems[0].selected = true;
    component.paginatedItems[1].selected = false;
    expect(component.areAllSelected()).toBeFalse();
  });

  it('should select all if none are selected, and deselect if all are selected', () => {
    setPaginationData(2);
    expect(component.areAllSelected()).toBeFalse();

    component.toggleSelectAll();
    expect(component.paginatedItems.every((x) => x.selected)).toBeTrue();

    component.toggleSelectAll();
    expect(component.paginatedItems.every((x) => !x.selected)).toBeTrue();
  });

  it('should return true if column index is in hiddenColumns', () => {
    component.hiddenColumns = [1];
    expect(component.isColumnHidden(1)).toBeTrue();
    expect(component.isColumnHidden(0)).toBeFalse();
  });

  it('should return true if column index is in tagsColumns', () => {
    component.tagsColumns = [2];
    expect(component.isTagColumn(2)).toBeTrue();
    expect(component.isTagColumn(1)).toBeFalse();
  });

  it('should toggle sort states among asc -> desc -> null for a sortable column', () => {
    component.sortableColumns = [1];
    component.toggleSort(1);
    expect(component.sortState[1]).toBe('asc');

    component.toggleSort(1);
    expect(component.sortState[1]).toBe('desc');

    component.toggleSort(1);
    expect(component.sortState[1]).toBeNull();
  });

  it('should not affect state if column is not sortable', () => {
    spyOn(component.columnSort, 'emit');
    component.sortableColumns = [0];
    component.toggleSort(1);
    expect(component.sortState[1]).toBeUndefined();
    expect(component.columnSort.emit).not.toHaveBeenCalled();
  });

  it('should return arrow_upward if sorted asc, arrow_downward if desc, sort if null', () => {
    component.sortableColumns = [0];
    component.toggleSort(0);
    expect(component.getSortIcon(0)).toBe('arrow_upward');
    component.toggleSort(0);
    expect(component.getSortIcon(0)).toBe('arrow_downward');
    component.toggleSort(0);
    expect(component.getSortIcon(0)).toBe('sort');
  });

  it('should return style if cell matches a color rule', () => {
    component.colorRules = {
      2: [
        {
          matchValue: 'Active',
          bgColor: '#eee',
          textColor: '#111',
        } as IColorMatchRule,
      ],
    };
    const styleObj = component.getColorStyle({ status: 'Active' }, 2);
    expect(styleObj).toEqual({ 'background-color': '#eee', color: '#111' });
  });

  it('should return empty object if no rule matches', () => {
    component.colorRules = {
      2: [{ matchValue: 'Xxx', bgColor: '#eee', textColor: '#111' }],
    };
    const styleObj = component.getColorStyle({ status: 'Active' }, 2);
    expect(styleObj).toEqual({});
  });

  it('should return true if getMatchedColorRule returns a rule', () => {
    component.colorRules = {
      2: [{ matchValue: 'Active', bgColor: '#0f0', textColor: '#fff' }],
    };
    const result = component.shouldRenderColorTag({ status: 'Active' }, 2);
    expect(result).toBeTrue();
  });

  it('should return false if no color rule is matched', () => {
    component.colorRules = {};
    const result = component.shouldRenderColorTag({ status: 'Active' }, 2);
    expect(result).toBeFalse();
  });

  it('should emit tagClick event with row and colIndex', () => {
    spyOn(component.tagClick, 'emit');
    const row = { id: 999, status: 'Active' };
    component.onTagClick(row, 2);
    expect(component.tagClick.emit).toHaveBeenCalledWith({
      row: row,
      columnIndex: 2,
    });
  });

  it('should return item id if present, otherwise the index', () => {
    const itemA = { id: 10 };
    const indexA = 0;
    expect(component.trackByRow(indexA, itemA)).toBe(10);

    const itemB = { somethingElse: 123 };
    const indexB = 5;
    expect(component.trackByRow(indexB, itemB)).toBe(5);
  });

  it('should return column.field if present, else index', () => {
    const col = { header: 'Test', field: 'testField' };
    expect(component.trackByColumn(2, col)).toBe('testField');

    const col2 = { header: 'NoField' } as any;
    expect(component.trackByColumn(2, col2)).toBe(2);
  });
});
