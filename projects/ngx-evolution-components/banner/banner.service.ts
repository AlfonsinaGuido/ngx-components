import {
  Injectable,
  ComponentRef,
  ApplicationRef,
  Injector,
  createComponent,
  PLATFORM_ID,
  Inject,
  EmbeddedViewRef,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Subscription } from 'rxjs';
import { BannerComponent, IBanner } from '../public-api';

@Injectable({
  providedIn: 'root',
})
export class BannerService {
  private messages: { title: string; message: string; isError?: boolean }[] =
    [];
  private currentBanner: ComponentRef<BannerComponent> | null = null;
  private isBrowser: boolean;
  private isClosed: boolean = false;
  private timeoutId!: ReturnType<typeof setTimeout>;
  private closedSubscription: Subscription | null = null;

  /**
   * Constructor del servicio BannerService.
   * @param {object} platformId - El identificador de la plataforma.
   * @param {ApplicationRef} appRef - Referencia a la aplicación.
   * @param {Injector} injector - Inyector de dependencias.
   */
  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private appRef: ApplicationRef,
    private injector: Injector,
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  /**
   * Muestra un mensaje en un componente Banner.
   * @param {string} title - El título a mostrar.
   * @param {string} message - El mensaje a mostrar.
   * @param {boolean} isError - Opcional. Indica si es mensaje de error, sino será de éxito.
   */
  showMessage(title: string, message: string, isError?: boolean): void {
    this.messages.push({ title, message, isError });
    if (!isPlatformBrowser(this.platformId)) return;
    this.displayNextMessage();
  }

  /**
   * Muestra el siguiente mensaje en la cola.
   * @private
   */
  private displayNextMessage(): void {
    if (this.currentBanner || this.messages.length === 0) return;

    const BANNER_DURATION = 10000;

    const { title, message, isError } = this.messages.shift()!;

    this.currentBanner = createComponent(BannerComponent, {
      environmentInjector: this.injector.get(ApplicationRef).injector,
    });

    this.appRef.attachView(this.currentBanner.hostView);

    const domElem = (this.currentBanner.hostView as EmbeddedViewRef<unknown>)
      .rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    const bannerData: IBanner = {
      title,
      message,
      isError,
      useAnimation: false,
      twClass:
        'max-sm:w-11/12 w-3/5 !absolute bottom-2 z-50 left-1/2 -translate-x-1/2',
    };

    Object.assign(this.currentBanner.instance, bannerData);

    this.isClosed = false;

    this.timeoutId = setTimeout(() => {
      this.removeBanner();
    }, BANNER_DURATION);

    this.closedSubscription = this.currentBanner.instance.closed.subscribe(
      () => {
        if (!this.isClosed) {
          clearTimeout(this.timeoutId);
          this.removeBanner();
        }
      },
    );
  }

  /**
   * Remueve el banner actual y muestra el siguiente en la cola.
   * @private
   */
  private removeBanner(): void {
    this.isClosed = true;
    if (this.currentBanner) {
      this.appRef.detachView(this.currentBanner.hostView);
      this.currentBanner.destroy();
      this.currentBanner = null;
    }
    if (this.closedSubscription) {
      this.closedSubscription.unsubscribe();
      this.closedSubscription = null;
    }
    setTimeout(() => {
      this.displayNextMessage();
    }, 100);
  }
}
