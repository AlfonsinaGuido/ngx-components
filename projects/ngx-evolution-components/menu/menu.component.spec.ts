import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import { ButtonComponent, ButtonInterface } from '../public-api';
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
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should display the title', async () => {
    component.appTitle = 'Test Title';
    fixture.detectChanges();

    const buttonDebugElement = fixture.debugElement.query(By.css('evo-button'));
    const buttonElement = buttonDebugElement.nativeElement as HTMLElement;
    buttonElement.click();

    const titleElement = fixture.debugElement.query(By.css('h5'));
    expect(titleElement).toBeTruthy();
    expect(titleElement.nativeElement.textContent).toContain('Test Title');
  });

  it('should display the correct number of items', async () => {
    const items: ButtonInterface[] = [{ label: 'Item 1' }, { label: 'Item 2' }];
    component.items = items;
    fixture.detectChanges();

    const buttonDebugElement = fixture.debugElement.query(By.css('evo-button'));
    const buttonElement = buttonDebugElement.nativeElement as HTMLElement;
    buttonElement.click();

    const menuItems = fixture.debugElement.queryAll(By.css('evo-button'));
    expect(menuItems.length).toBe(items.length + 2);
  });
});
