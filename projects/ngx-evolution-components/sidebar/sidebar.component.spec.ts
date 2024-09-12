import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidebarComponent } from './sidebar.component';
import { Router, NavigationEnd } from '@angular/router';
import { Subject } from 'rxjs';
import { PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { IIcon } from '../public-api';

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
    component.commonProps = {
      icons: {
        appIcon: { icon: 'dashboard.svg', type: 'svg' },
        notificationIcon: { icon: 'bell.svg', type: 'svg' },
        closeMenuIcon: { icon: 'close.svg', type: 'svg' },
      },
      titles: {
        appTitle: 'Tus aplicaciones',
        notificationTitle: 'Notificaciones',
      },
      buttonItems: {
        appItems: [{ label: 'App 1' }, { label: 'App 2' }],
        notificationItems: [
          { label: 'Notification 1' },
          { label: 'Notification 2' },
        ],
        userDataItems: [{ label: 'Test' }],
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
        icon: { icon: 'dashboard.svg', type: 'svg' },
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
      icon: { icon: 'dashboard.svg', type: 'svg' } as IIcon,
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
});
