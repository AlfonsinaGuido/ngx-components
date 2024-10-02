import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { IButton, IIcon } from '../public-api';
import { MatIconTestingModule } from '@angular/material/icon/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  const loginFunction = (): void => {
    console.log('Logueado');
  };
  const title: string = 'Iniciar Sesión';
  const subtitle: string = 'Ingresa a tu cuenta para acceder a la aplicación';
  const svgicon: IIcon = {
    icon: 'company-logo.svg',
    type: 'svg',
  };
  const buttonAction: IButton = {
    label: 'Ingresar',
    theme: 'primary',
    onClick: {
      action: loginFunction,
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent, MatIconTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;

    component.title = title;
    component.subtitle = subtitle;
    component.svg = svgicon;
    component.button = buttonAction;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the svg attribute if it is in the parameters ', () => {
    const render: HTMLElement = fixture.nativeElement.querySelector('svg');

    expect(render).toBeTruthy();
  });

  it('should`t show  the svg', () => {
    const render: HTMLElement = fixture.nativeElement;
    let icon = render.querySelector('evo-svg');
    let button = render.querySelector('button');
    let title_render = render.querySelector('.test-title');

    expect(icon).toBeTruthy();
    expect(button).toBeTruthy();
    expect(title_render).toBeTruthy();
  });

  it('should show every element when there is all parameters', () => {
    const render: HTMLElement = fixture.nativeElement;
    let icon = render.querySelector('svg');
    let button = render.querySelector('button');
    let subtitle_render = render.querySelector('p');
    let title_render = render.querySelector('.test-title');

    expect(icon).toBeTruthy();
    expect(button).toBeTruthy();
    expect(subtitle_render).toBeTruthy();
    expect(title_render).toBeTruthy();
  });
});
