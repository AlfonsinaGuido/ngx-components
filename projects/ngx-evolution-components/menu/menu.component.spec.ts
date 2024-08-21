import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import {
  ButtonComponent,
  ButtonInterface,
  MenuIconsInterface,
} from '../public-api';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { By } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuComponent, ButtonComponent, MatButtonModule, MatMenuModule],
      providers: [provideAnimationsAsync()],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;

    const icons: MenuIconsInterface = {
      buttonIcon: { icon: 'test', type: 'class' },
    };
    component.icons = icons;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title', () => {
    component.title = 'Test Title';
    fixture.detectChanges();

    const buttonDebugElement = fixture.debugElement.query(By.css('evo-button'));
    const buttonElement = buttonDebugElement.nativeElement as HTMLElement;
    buttonElement.click();

    const titleElement = fixture.debugElement.query(By.css('.test-title'));
    expect(titleElement).toBeTruthy();
    expect(titleElement.nativeElement.textContent).toContain('Test Title');
  });

  it('should display the correct number of items', () => {
    const items: ButtonInterface[] = [{ label: 'Item 1' }, { label: 'Item 2' }];
    component.items = items;
    fixture.detectChanges();

    const buttonDebugElement = fixture.debugElement.query(By.css('evo-button'));
    const buttonElement = buttonDebugElement.nativeElement as HTMLElement;
    buttonElement.click();

    const menuItems = fixture.debugElement.queryAll(By.css('.buttons-in-menu'));
    expect(menuItems.length).toBe(items.length);
  });

  it('should not change buttonIcon on menu open if userData is undefined, onMenuOpen()', () => {
    component.userData = undefined;
    const initialIcon = component.icons.buttonIcon;
    component.onMenuOpen();

    expect(component.icons.buttonIcon).toEqual(initialIcon);
  });

  it('should set buttonIcon to expand_less on menu open if userData is defined, onMenuOpen()', () => {
    component.userData = {
      fullName: 'test',
      email: 'test',
      position: 'test',
    };
    component.onMenuOpen();

    expect(component.icons.buttonIcon).toEqual({
      icon: 'expand_less',
      type: 'class',
    });
  });

  it('should set buttonIcon to expand_more on menu close if userData is defined, onMenuClose()', () => {
    component.userData = {
      fullName: 'test',
      email: 'test',
      position: 'test',
    };
    component.onMenuClose();

    expect(component.icons.buttonIcon).toEqual({
      icon: 'expand_more',
      type: 'class',
    });
  });
});
