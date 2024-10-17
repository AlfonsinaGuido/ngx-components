import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeSegmentedListComponent } from './time-segmented-list.component';

describe('TimeSegmentedListComponent', () => {
  let component: TimeSegmentedListComponent;
  let fixture: ComponentFixture<TimeSegmentedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeSegmentedListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TimeSegmentedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
