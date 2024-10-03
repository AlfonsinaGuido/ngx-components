import {
  Component,
  Input,
  HostListener,
  OnInit,
  Inject,
  PLATFORM_ID,
  AfterViewInit,
  ViewEncapsulation,
  ChangeDetectorRef,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  AvatarComponent,
  ButtonComponent,
  IHeader,
  HeaderComponent,
  IIcon,
  ISidebarOption,
  SvgComponent,
} from '../public-api';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatDivider } from '@angular/material/divider';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@Component({
  selector: 'evo-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    HeaderComponent,
    AvatarComponent,
    SvgComponent,
    MatDivider,
    MatSlideToggle,
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss',],
  encapsulation: ViewEncapsulation.None,
})
export class SidebarComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() commonProps!: IHeader;
  @Input() options!: ISidebarOption[];
  @Input() additionalOptions?: ISidebarOption[];
  @Input() footerOptions?: ISidebarOption[];

  isMobile: boolean = false;
  isSidebarOpen: boolean = false;
  activeRoute: string = '';
  showMoreOptionsModal: boolean = false;
  accordionOpen: boolean = false;
  appAccordionOpen: boolean = false;

  private routerSubscription!: Subscription;
  public sessionJobPositionName!: string;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef,
  ) {}

  /**
   * Alterna el estado del acordeón de ajustes.
   */
  toggleAccordion() {
    this.accordionOpen = !this.accordionOpen;
  }

  /**
   * Alterna el estado del acordeón de más aplicaciones.
   */
  toggleAppAccordion() {
    this.appAccordionOpen = !this.appAccordionOpen;
  }

  /**
   * Método que se ejecuta después de la inicialización de la vista.
   * Verifica si estamos en un navegador antes de realizar ajustes.
   */
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
   * Método que se ejecuta cuando los inputs del componente cambian.
   * Actualiza el nombre del puesto de trabajo en el encabezado si hay cambios en `commonProps`.
   * @param changes Cambios detectados en los inputs
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['commonProps'] &&
      this.commonProps?.userData?.jobPositions?.length
    ) {
      this.sessionJobPositionName =
        this.commonProps.userData.jobPositions[0].Puesto.Nombre;
    }
  }

  /**
   * Alterna el estado de apertura del sidebar.
   * Solo se ejecuta si estamos en el lado del cliente (navegador).
   */
  toggleSidebar() {
    if (isPlatformBrowser(this.platformId)) {
      this.isSidebarOpen = !this.isSidebarOpen;
      this.cdr.detectChanges();
    }
  }

  /**
   * Cierra el sidebar si está en vista móvil.
   * Verifica que estamos en un navegador antes de cerrar el sidebar.
   */
  closeSidebar() {
    if (this.isMobile && isPlatformBrowser(this.platformId)) {
      this.isSidebarOpen = false;
      this.cdr.detectChanges();
    }
  }

  /**
   * Navega a la ruta seleccionada y ejecuta la acción asociada.
   * Si estamos en el lado del cliente, ejecuta la acción o navega a la ruta.
   * @param option Opción seleccionada con acción o ruta
   */
  selectOption(option: { icon: IIcon; action?: () => void; route?: string }) {
    if (isPlatformBrowser(this.platformId)) {
      if (option.route) {
        this.router.navigate([option.route]);
      }
      if (option.action) {
        option.action();
      }
      this.closeMoreOptionsModal(); // Cierra el modal al seleccionar una opción
      this.cdr.detectChanges();
    }
  }

  /**
   * Listener para el evento de redimensionamiento de la ventana.
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
   * Verifica si la ruta dada corresponde a la ruta activa.
   * @param optionRoute Ruta de la opción
   * @returns true si la ruta es activa, false en caso contrario
   */
  isActive(optionRoute: string): boolean {
    return this.activeRoute === optionRoute;
  }

  /**
   * Abre el modal de más opciones.
   */
  openMoreOptionsModal() {
    this.showMoreOptionsModal = true;
  }

  /**
   * Cierra el modal de más opciones.
   */
  closeMoreOptionsModal() {
    this.showMoreOptionsModal = false;
  }
}
