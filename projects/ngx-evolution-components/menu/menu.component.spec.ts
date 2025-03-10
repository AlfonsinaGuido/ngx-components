import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import { ButtonComponent, IButton, IMenuIcons } from '../public-api';
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

    const icons: IMenuIcons = {
      closeIcon: { icon: 'test', type: 'class' },
    };
    component.icons = icons;
    component.defaultUserMenuIcons = {
      buttonIcon: {
        icon: 'expand_more',
        type: 'class',
      },
      ...icons,
    };
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
    const items: IButton[] = [{ label: 'Item 1' }, { label: 'Item 2' }];
    component.items = items;
    fixture.detectChanges();

    const buttonDebugElement = fixture.debugElement.query(By.css('evo-button'));
    const buttonElement = buttonDebugElement.nativeElement as HTMLElement;
    buttonElement.click();

    const menuItems = fixture.debugElement.queryAll(By.css('.button-in-menu'));
    expect(menuItems.length).toBe(items.length);
  });

  it('should not change buttonIcon on menu open if userData is undefined, onMenuOpen()', () => {
    component.userData = undefined;
    const initialIcon = component.icons.buttonIcon;
    component.onMenuOpen();

    expect(component.icons.buttonIcon).toEqual(initialIcon);
  });

  it('should set buttonIcon to expand_less on menu open if userData is defined and icons.buttonIcon is undefined, onMenuOpen()', () => {
    component.userData = {
      fullName: 'test',
      email: 'test',
      jobPositions: [
        {
          CompaniaCodigo: 178,
          Puesto: {
            Nombre: 'Test Nombre',
          },
          Unidad: {
            Descripcion: 'Test Descripción Unidad',
          },
          Compania: {
            Descripcion: 'Test Descripción Compañía',
          },
          CentroTrabajo: {
            Descripcion: 'Test Descripción Centro de Trabajo',
          },
          onClick: {
            action: () => {
              alert('Test');
            },
          },
        },
      ],
    };

    component.onMenuOpen();

    expect(component.defaultUserMenuIcons?.buttonIcon).toEqual({
      icon: 'expand_less',
      type: 'class',
    });
  });

  it('should set buttonIcon to expand_more on menu close if userData is defined and icons.buttonIcon is undefined, onMenuClose()', () => {
    component.userData = {
      fullName: 'test',
      email: 'test',
      jobPositions: [
        {
          CompaniaCodigo: 178,
          Puesto: {
            Nombre: 'Test Nombre',
          },
          Unidad: {
            Descripcion: 'Test Descripción Unidad',
          },
          Compania: {
            Descripcion: 'Test Descripción Compañía',
          },
          CentroTrabajo: {
            Descripcion: 'Test Descripción Centro de Trabajo',
          },
          onClick: {
            action: () => {
              alert('Test');
            },
          },
        },
      ],
    };

    component.onMenuClose();

    expect(component.defaultUserMenuIcons?.buttonIcon).toEqual({
      icon: 'expand_more',
      type: 'class',
    });
  });
});
