import { IPrioridad } from '../../../public-api';

export const prioridadHighest: IPrioridad = {
  Codigo: 10,
  Nombre: 'Highest',
  Color: '#8B0000',
  Orden: 10,
};

export const prioridadHigh: IPrioridad = {
  Codigo: 0,
  Nombre: 'High',
  Color: 'red',
  Orden: 5,
};

export const prioridadMedium: IPrioridad = {
  Codigo: 2,
  Nombre: 'Medium',
  Color: '#EAB308',
  Orden: 3,
};

export const prioridadLow: IPrioridad = {
  Codigo: 1,
  Nombre: 'Low',
  Color: 'green',
  Orden: 1,
};

export const prioridadLowest: IPrioridad = {
  Codigo: 5,
  Nombre: 'Lowest',
  Color: 'blue',
  Orden: 0,
};
