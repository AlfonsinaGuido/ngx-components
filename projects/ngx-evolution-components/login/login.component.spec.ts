import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { IButton, IIcon } from '../public-api';
import { MatIconTestingModule } from '@angular/material/icon/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  const LoginFunction = (): void => {
    console.log('Logueado');
  };
  const title: string = 'Iniciar Sesión';
  const subtitle: string = 'Ingresa a tu cuenta para acceder a la aplicación';
  const svgicon: IIcon = {
    icon: 'company-logo.svg',
    type: 'svg',
    position: 'right',
  };
  const buttonAction: IButton = {
    label: 'Ingresar',
    theme: 'primary',
    onClick: {
      action: LoginFunction,
    },
    icon: {
      icon: 'login.svg',
      type: 'svg',
      position: 'right',
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent, MatIconTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the svg attribute if it is in the parameters ', () => {
    component.title = title;
    component.subtitle = subtitle;
    component.svg = svgicon;
    component.button = buttonAction;
    fixture.detectChanges();

    const render: HTMLElement = fixture.nativeElement.querySelector('svg');

    expect(render).toBeTruthy();
  });

  it('should`t show  the svg', () => {
    component.title = title;
    component.subtitle = subtitle;
    component.button = buttonAction;
    fixture.detectChanges();

    const render: HTMLElement = fixture.nativeElement;
    let icon = render.querySelector('svg');
    let button = render.querySelector('button');
    let title_render = render.querySelector('h1');

    expect(icon).toBeFalsy();
    expect(button).toBeTruthy();
    expect(title_render).toBeTruthy();
  });

  it('should show every element when there is all parameters', () => {
    component.title = title;
    component.subtitle = subtitle;
    component.button = buttonAction;
    component.svg = svgicon;
    fixture.detectChanges();

    const render: HTMLElement = fixture.nativeElement;
    let icon = render.querySelector('svg');
    let button = render.querySelector('button');
    let subtitle_render = render.querySelector('p');
    let title_render = render.querySelector('h1');

    expect(icon).toBeTruthy();
    expect(button).toBeTruthy();
    expect(subtitle_render).toBeTruthy();
    expect(title_render).toBeTruthy();
  });
});
