import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import {
  ButtonInterface,
  HeaderBoxButtonInterface,
  HeaderButtonItemsInterface,
  HeaderCompanyDataInterface,
  HeaderIconsInterface,
  HeaderTitlesInterface,
  UserDataInterface,
} from '../public-api';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let icons: HeaderIconsInterface;
  let userData: UserDataInterface;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;

    const companyData: HeaderCompanyDataInterface = {};
    component.companyData = companyData;

    icons = {
      appIcon: { icon: 'home', type: 'class' },
      notificationIcon: { icon: 'test', type: 'class' },
    };
    component.icons = icons;

    const titles: HeaderTitlesInterface = {
      appTitle: 'title 1',
      notificationTitle: 'title 2',
    };
    component.titles = titles;

    const buttonItems: HeaderButtonItemsInterface = {
      appItems: [{ label: 'App 1' }, { label: 'App 2' }],
      notificationItems: [
        { label: 'Notification 1' },
        { label: 'Notification 2' },
      ],
      userDataItems: [{ label: 'Test' }],
    };
    component.buttonItems = buttonItems;

    userData = {
      fullName: 'test',
      email: 'test',
      position: 'test',
    };
    component.userData = userData;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should pass the correct inputs to the first evo-menu component', () => {
    const appTitle = 'App Menu';
    const appItems: ButtonInterface[] = [{ label: 'Item 1' }];

    component.titles.appTitle = appTitle;
    component.buttonItems.appItems = appItems;

    fixture.detectChanges();

    const menuDebugElement = fixture.debugElement.query(By.css('evo-menu'));

    expect(menuDebugElement.componentInstance.icons.buttonIcon).toEqual(
      icons.appIcon,
    );
    expect(menuDebugElement.componentInstance.icons.closeIcon).toEqual(
      icons.closeMenuIcon,
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

    expect(
      notificationMenuDebugElement.componentInstance.notificationsNumber,
    ).toBe(2);
  });

  it('should handle box buttons correctly', () => {
    const boxButtons: HeaderBoxButtonInterface[] = [
      { label: 'Button 1', action: jasmine.createSpy('button1') },
      { label: 'Button 2', action: jasmine.createSpy('button2') },
    ];
    component.box = boxButtons;

    fixture.detectChanges();
    const buttons = fixture.debugElement.queryAll(By.css('.test-box-button'));

    expect(buttons.length).toBe(2);
    buttons[0].nativeElement.click();
    buttons[1].nativeElement.click();

    expect(boxButtons[0].action).toHaveBeenCalled();
    expect(boxButtons[1].action).toHaveBeenCalled();
  });
});
