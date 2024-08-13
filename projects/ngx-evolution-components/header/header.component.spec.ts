import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import {
  ButtonInterface,
  HeaderButtonInterface,
  IconInterface,
  UserDataInterface,
} from '../public-api';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let userData: UserDataInterface;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;

    const notificationItems: ButtonInterface[] = [
      { label: 'Notification 1' },
      { label: 'Notification 2' },
    ];
    component.notificationItems = notificationItems;

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
    const appIcon: IconInterface = { icon: 'home', type: 'class' };
    const closeMenuIcon: IconInterface = { icon: 'close', type: 'class' };
    const appTitle = 'App Menu';
    const appItems: ButtonInterface[] = [{ label: 'Item 1' }];

    component.appIcon = appIcon;
    component.closeMenuIcon = closeMenuIcon;
    component.appTitle = appTitle;
    component.appItems = appItems;

    fixture.detectChanges();

    const menuDebugElement = fixture.debugElement.query(By.css('evo-menu'));

    expect(menuDebugElement.componentInstance.buttonIcon).toEqual(appIcon);
    expect(menuDebugElement.componentInstance.closeIcon).toEqual(closeMenuIcon);
    expect(menuDebugElement.componentInstance.title).toBe(appTitle);
    expect(menuDebugElement.componentInstance.items).toBe(appItems);
  });

  it('should display companyName when defined', () => {
    component.companyName = 'Test Company';

    fixture.detectChanges();
    const companyNameElement = fixture.debugElement.query(By.css('.test-company-name'));

    expect(companyNameElement.nativeElement.textContent).toContain(
      'Test Company',
    );
  });

  it('should not display companyName when not defined', () => {
    component.companyName = undefined;

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
    const boxButtons: HeaderButtonInterface[] = [
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
