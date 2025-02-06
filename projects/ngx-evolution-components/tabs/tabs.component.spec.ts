import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsComponent } from './tabs.component';
import { By } from '@angular/platform-browser';
import { TemplateRef } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

describe('TabComponent', () => {
  let component: TabsComponent;
  let fixture: ComponentFixture<TabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsComponent],
      providers: [provideAnimationsAsync()],
    }).compileComponents();

    fixture = TestBed.createComponent(TabsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render tabs', () => {
    component.tabs = [
      { label: 'Tab 1', badgeValue: 1, content: '' as any as TemplateRef<any> },
      { label: 'Tab 2', badgeValue: 0, content: '' as any as TemplateRef<any> },
    ];
    fixture.detectChanges();
    const tabHeaders = fixture.debugElement.queryAll(By.css('.mdc-tab'));
    expect(tabHeaders.length).toBe(2);
  });

  it('should emit selectedIndexChange when tab is changed', () => {
    spyOn(component.selectedIndexChange, 'emit');
    fixture.debugElement
      .query(By.css('mat-tab-group'))
      .triggerEventHandler('selectedIndexChange', 1);
    expect(component.selectedIndexChange.emit).toHaveBeenCalledWith(1);
  });

  it('should apply custom class from twClass input', () => {
    component.twClass = 'custom-class';
    fixture.detectChanges();
    const tabGroup = fixture.debugElement.query(By.css('mat-tab-group'));
    expect(tabGroup.nativeElement.classList).toContain('custom-class');
  });
});
