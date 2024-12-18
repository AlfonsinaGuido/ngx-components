import {
  Component,
  Input,
  OnInit,
  Inject,
  PLATFORM_ID,
  ViewEncapsulation,
  ChangeDetectorRef,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  AvatarComponent,
  ButtonComponent,
  HeaderComponent,
  ISidebarOption,
  SvgComponent,
  ISidebarConfig,
  IMoreOptionItem,
  ViewportService,
  AccordionComponent,
  ClassUtilityService,
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
    AccordionComponent,
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SidebarComponent implements OnInit, OnChanges {
  @Input() commonProps!: ISidebarConfig['commonProps'];
  @Input() options!: ISidebarConfig['options'];
  @Input() additionalOptions?: ISidebarConfig['additionalOptions'];
  @Input() footerOptions?: ISidebarConfig['footerOptions'];
  @Input() twClass?: string;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef,
    private viewportService: ViewportService,
    private classUtility: ClassUtilityService,
  ) {}

  isMobile: boolean = false;
  isSidebarOpen: boolean = false;
  activeRoute: string = '';
  showMoreOptionsModal: boolean = false;
  accordionOpen: boolean = false;
  appAccordionOpen: boolean = false;

  public sessionJobPositionName!: string;

  private viewportSubscription!: Subscription;

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
   * Método que se ejecuta al inicializar el componente.
   * Verifica el viewport y se suscribe a cambios de ruta.
   */
  ngOnInit() {
    this.viewportSubscription = this.viewportService
      .getIsMobile()
      .subscribe((isMobile) => {
        this.isMobile = isMobile;
        this.adjustSidebar();
      });

    if (isPlatformBrowser(this.platformId)) {
      this.subscribeToRouteChanges();
    }
  }

  ngOnDestroy(): void {
    if (this.viewportSubscription) {
      this.viewportSubscription.unsubscribe();
    }
  }

  adjustSidebar() {
    this.isSidebarOpen = !this.isMobile;
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
  selectOption(option: ISidebarOption | IMoreOptionItem) {
    if (isPlatformBrowser(this.platformId)) {
      if (option.action) {
        option.action();
      } else if (option.route) {
        this.router.navigate([option.route]);
      }
      this.closeSidebar();
      this.cdr.detectChanges();
    }
  }

  /**
   * Devuelve las clases CSS que se aplicarán al componente usando el servicio.
   * @returns {string} Clases CSS aplicadas al componente.
   */
  getClasses(): string {
    return this.classUtility.getCombinedClasses('evo-side-bar', this.twClass);
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
