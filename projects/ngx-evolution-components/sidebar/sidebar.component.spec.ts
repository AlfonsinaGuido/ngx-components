import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidebarComponent } from './sidebar.component';
import { Router, NavigationEnd } from '@angular/router';
import { of, Subject } from 'rxjs';
import { PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { IconInterface, IconPosition } from '../public-api';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;
  let mockRouter: jasmine.SpyObj<Router>;
  const mockPlatformId = 'browser';
  const routerEventsSubject = new Subject<any>();

  beforeEach(async () => {
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    Object.defineProperty(mockRouter, 'events', {
      value: routerEventsSubject.asObservable(),
    });
    Object.defineProperty(mockRouter, 'url', { value: '/test' });

    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        SidebarComponent,
        HttpClientModule,
        MatIconModule,
      ],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: PLATFORM_ID, useValue: mockPlatformId },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;

    // Proveer todos los inputs necesarios para SidebarComponent y sus componentes hijos
    component.avatarName = 'User';
    component.avatarImgUrl = 'path/to/avatar.png';
    component.commonProps = {
      icons: {
        appIcon: { icon: 'dashboard.svg', type: 'svg' as 'svg' },
        notificationIcon: { icon: 'bell.svg', type: 'svg' as 'svg' },
        closeMenuIcon: { icon: 'close.svg', type: 'svg' as 'svg' },
      },
      titles: {
        appTitle: 'Tus aplicaciones',
        notificationTitle: 'Notificaciones',
      },
      buttonItems: {
        appItems: [],
        notificationItems: [],
        userDataItems: [],
      },
      companyData: {
        companyImage: '',
        companyName: '',
      },
      box: [],
      userData: {
        fullName: 'User',
        email: 'user@example.com',
        position: 'position',
      },
    };
    component.options = [
      {
        icon: { icon: 'dashboard.svg', type: 'svg' as 'svg' },
        action: () => {},
        route: '/dashboard',
        title: 'Dashboard',
      },
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with correct default values', () => {
    expect(component.isMobile).toBe(false);
    expect(component.isSidebarOpen).toBe(true);
    expect(component.activeRoute).toBe('/test');
  });

  it('should set isMobile and isSidebarOpen based on viewport size', () => {
    spyOnProperty(window, 'innerWidth').and.returnValue(500);
    component.checkViewport();
    expect(component.isMobile).toBe(true);
    expect(component.isSidebarOpen).toBe(false);
  });

  it('should toggle sidebar state', () => {
    component.isSidebarOpen = false;
    component.toggleSidebar();
    expect(component.isSidebarOpen).toBe(true);
    component.toggleSidebar();
    expect(component.isSidebarOpen).toBe(false);
  });

  it('should close sidebar if mobile', () => {
    component.isMobile = true;
    component.isSidebarOpen = true;
    component.closeSidebar();
    expect(component.isSidebarOpen).toBe(false);
  });

  it('should navigate to the selected route and execute action', () => {
    const mockOption = {
      icon: { icon: 'dashboard.svg', type: 'svg' as 'svg' },
      action: jasmine.createSpy('action'),
      route: '/dashboard',
      title: 'dashboard',
    };

    component.selectOption(mockOption);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/dashboard']);
    expect(mockOption.action).toHaveBeenCalled();
  });

  it('should update activeRoute on navigation end', () => {
    routerEventsSubject.next(new NavigationEnd(1, '/test', '/test'));
    expect(component.activeRoute).toBe('/test');
  });

  it('should return true for isActive if route matches activeRoute', () => {
    component.activeRoute = '/test';
    expect(component.isActive('/test')).toBe(true);
  });

  it('should return false for isActive if route does not match activeRoute', () => {
    component.activeRoute = '/test';
    expect(component.isActive('/not-test')).toBe(false);
  });

  it('should return an icon object with position set to left', () => {
    const inputIcon: IconInterface = { icon: 'dashboard.svg', type: 'svg' };
    const expectedIcon: IconInterface = {
      ...inputIcon,
      position: 'left' as IconPosition,
    };

    const result = component.getIconWithLeftPosition(inputIcon);

    expect(result).toEqual(expectedIcon);
    expect(result.position).toBe('left');
  });
});
