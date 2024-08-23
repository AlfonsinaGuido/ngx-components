import {
  Component,
  Input,
  HostListener,
  OnInit,
  Inject,
  PLATFORM_ID,
  AfterViewInit,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  AvatarComponent,
  ButtonComponent,
  HeaderInterface,
  HeaderComponent,
  IconInterface,
  SidebarOptionInterface,
  SvgComponent,
} from '../public-api';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'evo-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    HeaderComponent,
    AvatarComponent,
    SvgComponent,
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss', '../styles/output.scss'],
})
export class SidebarComponent implements OnInit, AfterViewInit {
  @Input() commonProps!: HeaderInterface;
  @Input() options!: SidebarOptionInterface[];
  @Input() additionalOptions!: SidebarOptionInterface[];
  @Input() avatarName!: string;
  @Input() avatarImgUrl?: string;
  @Input() avatarIsPriority?: boolean = false;

  isMobile: boolean = false;
  isSidebarOpen: boolean = false;
  activeRoute: string = '';

  private routerSubscription!: Subscription;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef,
  ) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.checkViewport();
      this.cdr.detectChanges();
    }
  }

  /**
   * Método que se ejecuta al inicializar el componente.
   * Verifica el viewport y se suscribe a cambios de ruta.
   */
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.subscribeToRouteChanges();
    }
  }

  /**
   * Alterna el estado de apertura del sidebar
   */
  toggleSidebar() {
    if (isPlatformBrowser(this.platformId)) {
      this.isSidebarOpen = !this.isSidebarOpen;
      this.cdr.detectChanges();
    }
  }

  /**
   * Cierra el sidebar si está en vista móvil
   */
  closeSidebar() {
    if (this.isMobile && isPlatformBrowser(this.platformId)) {
      this.isSidebarOpen = false;
      this.cdr.detectChanges();
    }
  }

  /**
   * Navega a la ruta seleccionada y ejecuta la acción asociada
   * si estamos del lado del cliente.
   * @param option Opción seleccionada
   */
  selectOption(option: {
    icon: IconInterface;
    action: () => void;
    route: string;
  }) {
    if (isPlatformBrowser(this.platformId)) {
      this.router.navigate([option.route]);
      option.action();
      this.cdr.detectChanges();
    }
  }

  /**
   * Listener para el evento de redimensionamiento de la ventana
   * Verifica si estamos del lado del cliente antes de checar el viewport.
   * @param event Evento de redimensionamiento
   */
  @HostListener('window:resize', ['$event'])
  onResize() {
    if (isPlatformBrowser(this.platformId)) {
      this.checkViewport();
    }
  }

  /**
   * Verifica el tamaño de la ventana para determinar si es móvil
   * y ajusta la visibilidad del sidebar.
   */
  checkViewport() {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth < 640;
      this.isSidebarOpen = !this.isMobile;
      this.cdr.detectChanges();
    }
  }

  /**
   * Se suscribe a los cambios de ruta para actualizar la opción activa
   * solo si estamos del lado del cliente.
   */
  subscribeToRouteChanges() {
    if (isPlatformBrowser(this.platformId)) {
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.activeRoute = event.urlAfterRedirects;
        }
      });
      // Actualiza la ruta activa inicial
      this.activeRoute = this.router.url;
      this.cdr.detectChanges();
    }
  }

  /**
   * Verifica si la ruta dada corresponde a la ruta activa
   * @param optionRoute Ruta de la opción
   * @returns true si la ruta es activa, false en caso contrario
   */
  isActive(optionRoute: string): boolean {
    return this.activeRoute === optionRoute;
  }

  /**
   * Método placeholder para el logout
   */
  logout() {
    // TODO: Añadir funcionalidad
    console.log('logout');
  }
}
