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
    const parsedDate = this.parseDate(dateString);
    const today = this.todayDate;
    return (
      parsedDate.getFullYear() === today.getFullYear() &&
      parsedDate.getMonth() === today.getMonth() &&
      parsedDate.getDate() === today.getDate()
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
    const today = this.todayDate;
    today.setHours(0, 0, 0, 0);
    const dayOfWeekIndex = today.getDay();
    const calculatedMondayDate =
      today.getDate() - dayOfWeekIndex + (dayOfWeekIndex === 0 ? -6 : 1);
    const mondayOfCurrentWeek = new Date(today);
    mondayOfCurrentWeek.setDate(calculatedMondayDate);
    mondayOfCurrentWeek.setHours(0, 0, 0, 0);
    const parsedDate = this.parseDate(dateString);
    parsedDate.setHours(0, 0, 0, 0);
    return parsedDate >= mondayOfCurrentWeek;
  }

  /**
   * Verifica si la fecha proporcionada corresponde a días anteriores, excluyendo hoy y la semana actual.
   * @param {string} dateString - La cadena de fecha a comparar.
   * @returns {boolean} Verdadero si la fecha es anterior, de lo contrario falso.
   */
  static isPrevious(dateString: string): boolean {
    return !this.isToday(dateString) && !this.isThisWeek(dateString);
  }
}
