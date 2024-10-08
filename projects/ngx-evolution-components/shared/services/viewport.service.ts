import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, fromEvent, Observable } from 'rxjs';
import { debounceTime, startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ViewportService {
  private isMobileSubject: BehaviorSubject<boolean> = new BehaviorSubject(
    false,
  );

  /**
   * Constructor del servicio ViewportService.
   * Se encarga de suscribirse al evento de redimensionamiento de la ventana
   * y de verificar si la aplicación está siendo ejecutada en un navegador.
   *
   * @param platformId - Identificador de la plataforma donde se está ejecutando (navegador o servidor).
   */
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      fromEvent(window, 'resize')
        .pipe(debounceTime(200), startWith(this.checkViewport()))
        .subscribe(() => this.checkViewport());
    }
  }

  /**
   * Método que verifica si el ancho de la ventana corresponde a un dispositivo móvil.
   * Actualiza el estado de `isMobileSubject` con `true` si la ventana es menor o igual a 768px.
   * De lo contrario, lo actualiza con `false`.
   */
  private checkViewport(): void {
    const isMobile = window.innerWidth <= 640;
    this.isMobileSubject.next(isMobile);
  }

  /**
   * Método que retorna un observable con el estado de si la vista es móvil o no.
   * Los componentes pueden suscribirse a este observable para obtener los cambios en tiempo real.
   *
   * @returns Observable<boolean> - Un observable que emite `true` si la vista es móvil, `false` en caso contrario.
   */
  getIsMobile(): Observable<boolean> {
    return this.isMobileSubject.asObservable();
  }
}
