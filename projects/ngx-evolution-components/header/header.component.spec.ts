import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import {
  IButton,
  IHeaderBoxButton,
  IHeaderItems,
  IHeaderCompanyData,
  IHeaderIcons,
  IHeaderTitles,
  IUserData,
} from '../public-api';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let icons: IHeaderIcons;
  let userData: IUserData;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;

    const companyData: IHeaderCompanyData = {};
    component.companyData = companyData;

    icons = {
      appMenuIcons: {},
      notificationMenuIcons: {},
      settingMenuIcons: {},
    };
    component.icons = icons;

    const titles: IHeaderTitles = {
      appTitle: 'title 1',
      notificationTitle: 'title 2',
      settingTitle: 'title 3',
    };
    component.titles = titles;

    const items: IHeaderItems = {
      appItems: [{ label: 'App 1' }, { label: 'App 2' }],
      notificationItems: [
        { label: 'Notification 1' },
        { label: 'Notification 2' },
      ],
      authorizationItems: [],
      seeAllButton: {
        seeAllNotifications: {
          label: 'Test',
        },
      },
      settingMenu: {
        options: [
          {
            name: 'Test',
          },
        ],
      },
      userDataItems: [{ label: 'Test' }],
    };
    component.items = items;

    userData = {
      fullName: 'test',
      email: 'test',
      jobPositions: [
        {
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
    component.userData = userData;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should pass the correct inputs to the first evo-menu component', () => {
    const appTitle = 'App Menu';
    const appItems: IButton[] = [{ label: 'Item 1' }];

    component.titles.appTitle = appTitle;
    component.items.appItems = appItems;

    fixture.detectChanges();

    const menuDebugElement = fixture.debugElement.query(By.css('evo-menu'));

    expect(menuDebugElement.componentInstance.icons.buttonIcon).toEqual(
      icons.appMenuIcons.buttonIcon,
    );
    expect(menuDebugElement.componentInstance.title).toBe(appTitle);
    expect(menuDebugElement.componentInstance.items).toBe(appItems);
  });

  it('should display companyName when defined', () => {
    component.companyData.companyName = 'Test Company';

    fixture.detectChanges();
    const companyNameElement = fixture.debugElement.query(
      By.css('.test-company-name'),
    );

    expect(companyNameElement.nativeElement.textContent).toContain(
      'Test Company',
    );
  });

  it('should not display companyName when not defined', () => {
    component.companyData.companyName = undefined;

    fixture.detectChanges();
    const companyNameElement = fixture.debugElement.query(
      By.css('.test-company-name'),
    );

    expect(companyNameElement).toBeNull();
  });

  it('should pass the correct inputs to the evo-avatar component', () => {
    const avatarDebugElement = fixture.debugElement.query(By.css('evo-avatar'));

    expect(avatarDebugElement.componentInstance.name).toBe(userData.fullName);
    expect(avatarDebugElement.componentInstance.imgUrl).toBe(userData.imgUrl);
  });

  it('should render notification menu with correct notification number', () => {
    const notificationMenuDebugElement = fixture.debugElement.queryAll(
      By.css('evo-menu'),
    )[1];

    expect(notificationMenuDebugElement.componentInstance.lengthOfItems).toBe(
      2,
    );
  });

  it('should handle box buttons correctly', () => {
    const boxButtons: IHeaderBoxButton[] = [
      { label: 'Button 1', onClick: { action: jasmine.createSpy('button1') } },
      { label: 'Button 2', onClick: { action: jasmine.createSpy('button2') } },
    ];
    component.box = boxButtons;

    fixture.detectChanges();
    const buttons = fixture.debugElement.queryAll(By.css('.test-box-button'));

    expect(buttons.length).toBe(2);
    buttons[0].nativeElement.click();
    buttons[1].nativeElement.click();

    expect(boxButtons[0].onClick.action).toHaveBeenCalled();
    expect(boxButtons[1].onClick.action).toHaveBeenCalled();
  });
});
