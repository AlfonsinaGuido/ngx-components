import { trigger, transition, style, animate } from '@angular/animations';

export const slideDown = trigger('slideDown', [
  transition(':enter', [
    style({ height: '0', opacity: 0 }),
    animate('500ms ease-out', style({ height: '*', opacity: 1 })),
  ]),
  transition(':leave', [
    animate('500ms ease-in', style({ height: '0', opacity: 0 })),
  ]),
]);
