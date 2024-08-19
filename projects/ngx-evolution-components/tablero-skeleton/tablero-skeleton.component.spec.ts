import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableroSkeletonComponent } from './tablero-skeleton.component';

describe('TableroSkeletonComponent', () => {
  let component: TableroSkeletonComponent;
  let fixture: ComponentFixture<TableroSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableroSkeletonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TableroSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render skeleton loader with 3 columns by default', () => {
    const colEl: HTMLElement = fixture.nativeElement;
    const columnasEl = colEl.querySelectorAll('#loading-board-column');
    expect(columnasEl.length).toEqual(3);
  });

  it('should render skeleton loader acording to column parameter', () => {
    fixture = TestBed.createComponent(TableroSkeletonComponent);
    const component = fixture.componentInstance;
    component.columns = 5;
    fixture.detectChanges();

    const colEl: HTMLElement = fixture.nativeElement;
    const columnasEl = colEl.querySelectorAll('#loading-board-column');
    console.log(columnasEl);
    expect(columnasEl.length).toEqual(5);
  });

  it('should have a pulse animation with css class', () => {
    const colEl: HTMLElement = fixture.nativeElement;
    const columnasEl = colEl.querySelectorAll('.animate-pulse');
    expect(columnasEl).toBeTruthy();
  });
});
