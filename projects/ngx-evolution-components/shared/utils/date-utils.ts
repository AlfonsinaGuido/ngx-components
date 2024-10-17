export class DateUtils {
  /**
   * Obtiene la fecha actual.
   * @returns {Date} La fecha actual.
   */
  static get todayDate(): Date {
    return new Date();
  }

  /**
   * Convierte una cadena de texto en un objeto Date.
   * @param {string} dateString - La cadena de fecha a convertir.
   * @returns {Date} Un objeto Date correspondiente a la cadena ingresada.
   */
  static parseDate(dateString: string): Date {
    return new Date(dateString);
  }

  /**
   * Verifica si la fecha proporcionada corresponde a la fecha de hoy.
   * @param {string} dateString - La cadena de fecha a comparar.
   * @returns {boolean} Verdadero si la fecha es hoy, de lo contrario falso.
   */
  static isToday(dateString: string): boolean {
    return (
      this.parseDate(dateString).getFullYear() ===
        this.todayDate.getFullYear() &&
      this.parseDate(dateString).getMonth() === this.todayDate.getMonth() &&
      this.parseDate(dateString).getDate() === this.todayDate.getDate()
    );
  }

  /**
   * Verifica si la fecha proporcionada corresponde a algún día de la semana actual, excluyendo hoy.
   * Calcula el lunes de la semana actual restando el índice del día de la semana (donde 0 es domingo)
   * y ajusta si hoy es domingo para retroceder hasta el lunes anterior.
   * @param {string} dateString - La cadena de fecha a comparar.
   * @returns {boolean} Verdadero si la fecha es de esta semana, de lo contrario falso.
   */
  static isThisWeek(dateString: string): boolean {
    if (this.isToday(dateString)) {
      return false;
    }
    const dayOfWeekIndex = this.todayDate.getDay();
    const calculatedMondayDate =
      this.todayDate.getDate() -
      dayOfWeekIndex +
      (dayOfWeekIndex === 0 ? -6 : 1);
    const mondayOfCurrentWeek = new Date(
      this.todayDate.setDate(calculatedMondayDate),
    );
    return this.parseDate(dateString) >= mondayOfCurrentWeek;
  }

  /**
   * Verifica si la fecha proporcionada corresponde a días anteriores, excluyendo hoy y la semana actual.
   * @param {string} dateString - La cadena de fecha a comparar.
   * @returns {boolean} Verdadero si la fecha es anterior, de lo contrario falso.
   */
  static isPrevious(dateString: string): boolean {
    if (this.isToday(dateString)) {
      return false;
    }
    if (this.isThisWeek(dateString)) {
      return false;
    }
    return true;
  }
}
