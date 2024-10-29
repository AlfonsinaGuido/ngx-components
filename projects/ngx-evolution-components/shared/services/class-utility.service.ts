import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClassUtilityService {
  /**
   * Combina las clases base con las clases proporcionadas por el parámetro `twClass`.
   * @param baseClasses Clases base proporcionadas como una cadena de texto.
   * @param twClass Clases de Tailwind CSS proporcionadas como una cadena de texto opcional.
   * @returns {string} Clases CSS combinadas y aplicadas.
   */
  getCombinedClasses(baseClasses: string = '', twClass: string = ''): string {
    return `${baseClasses} ${twClass}`.trim();
  }
}
