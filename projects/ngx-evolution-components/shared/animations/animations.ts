import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';

export const slideDown = trigger('slideDown', [
  // State para cuando no se quiere animación
  state('false', style({})),
  state('true', style({})), // Estado final animado

  // Transición para mostrar el elemento con animación
  transition('void => true', [
    style({ transform: 'translateY(-100%)', opacity: 0 }),
    animate(
      '500ms ease-out',
      style({ transform: 'translateY(0)', opacity: 1 }),
    ),
  ]),

  // Transición para ocultar el elemento con animación
  transition('true => void', [
    animate(
      '500ms ease-in',
      style({ transform: 'translateY(-100%)', opacity: 0 }),
    ),
  ]),
]);
