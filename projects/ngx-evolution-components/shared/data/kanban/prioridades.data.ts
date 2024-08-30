import { IPrioridad } from '../../../public-api';

export const prioridadHighest: IPrioridad = {
  codigo: 10,
  nombre: 'Highest',
  color: '#8B0000',
  icono: 'arrow_upward',
  orden: 10,
};

export const prioridadHigh: IPrioridad = {
  codigo: 0,
  nombre: 'High',
  color: 'red',
  icono: 'arrow_upward',
  orden: 5,
};

export const prioridadMedium: IPrioridad = {
  codigo: 2,
  nombre: 'Medium',
  color: '#EAB308',
  icono: 'arrow_forward',
  orden: 3,
};

export const prioridadLow: IPrioridad = {
  codigo: 1,
  nombre: 'Low',
  color: 'green',
  icono: 'arrow_downward',
  orden: 1,
};

export const prioridadLowest: IPrioridad = {
  codigo: 5,
  nombre: 'Lowest',
  color: 'blue',
  icono: 'arrow_downward',
  orden: 0,
};
