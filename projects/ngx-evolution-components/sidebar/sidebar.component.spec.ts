import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidebarComponent } from './sidebar.component';
import { Router, NavigationEnd } from '@angular/router';
import { Subject } from 'rxjs';
import { PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { IIcon } from '../public-api';
import { ClassUtilityService } from '../shared/services/class-utility.service';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockClassUtilityService: jasmine.SpyObj<ClassUtilityService>;
  const mockPlatformId = 'browser';
  const routerEventsSubject = new Subject<any>();

  beforeEach(async () => {
    mockClassUtilityService = jasmine.createSpyObj('ClassUtilityService', ['getCombinedClasses']);

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
        { provide: ClassUtilityService, useValue: mockClassUtilityService }
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;

    // Proveer todos los inputs necesarios para SidebarComponent y sus componentes hijos
    component.commonProps = {
      icons: {
        appMenuIcons: {},
        notificationMenuIcons: {},
        settingMenuIcons: {},
      },
      titles: {
        appTitle: 'Tus aplicaciones',
        notificationTitle: 'Notificaciones',
        settingTitle: 'Ajustes',
      },
      items: {
        appItems: [{ label: 'App 1' }, { label: 'App 2' }],
        notificationItems: [
          { label: 'Notification 1' },
          { label: 'Notification 2' },
        ],
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
      },
      companyData: {
        companyImage: '',
        companyName: '',
      },
      box: [],
      userData: {
        fullName: 'User',
        email: 'user@example.com',
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

  it('should navigate to the selected route when the route is defined', () => {
    const mockOption = {
      icon: { icon: 'dashboard.svg', type: 'svg' } as IIcon,
      route: '/dashboard',
      title: 'dashboard',
    };
  
    component.selectOption(mockOption);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/dashboard']);
  });
  
  it('should execute the action when no route is defined', () => {
    const mockOption = {
      icon: { icon: 'dashboard.svg', type: 'svg' } as IIcon,
      action: jasmine.createSpy('action'),
      title: 'dashboard',
    };
  
    component.selectOption(mockOption);
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

  it('should call getCombinedClasses on the ClassUtilityService with correct parameters', () => {
    const mockTwClass = 'custom-class';
    component.twClass = mockTwClass;
    mockClassUtilityService.getCombinedClasses.and.returnValue('layout custom-class');
    fixture.detectChanges();

    const classes = component.getClasses();
    expect(mockClassUtilityService.getCombinedClasses).toHaveBeenCalledWith('layout', mockTwClass);
    expect(classes).toBe('layout custom-class');
  });
});
