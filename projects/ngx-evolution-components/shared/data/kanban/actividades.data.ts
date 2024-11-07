import {
  Duracion,
  EstadoActividad,
  EtapaPrograma,
  IActividad,
} from '../../../public-api';
import {
  prioridadHigh,
  prioridadHighest,
  prioridadLow,
  prioridadLowest,
  prioridadMedium,
} from './prioridades.data';

export const actividad1: IActividad = {
  Codigo: 1,
  Nombre: 'Inducción a la empresa',
  Tipo: {
    Codigo: 3,
    Nombre: 'Revisión de Políticas',
    Descripcion:
      'Revisión de las políticas internas de la empresa y cumplimiento normativo.',
  },
  Etapa: {
    Codigo: 1,
    Nombre: 'Período de prueba',
    Descripcion: 'Actividades del periodo de prueba',
  },
  Descripcion:
    'Día de inducción a la empresa. Es necesario asistir presencialmente a las oficinas.',
  Objetivo:
    'Procurar que el empleado pueda asociarse con los valores de la empresa',
  EmpleoResponsable: {
    Codigo: 1,
    NombresApellidos: 'Hugo Maldonado',
  },
  Duracion: 8,
  UnidadDuracionDb: Duracion.Horas,
  RealizaEvaluacion: false,
  EstadoDb: EstadoActividad.Pendiente,
  FechaFin: new Date(2024, 7, 20),
  Prioridad: prioridadHigh,
};

export const actividad2: IActividad = {
  Codigo: 2,
  Nombre: 'Taller de Liderazgo Regional',
  Tipo: {
    Codigo: 11,
    Nombre: 'Desarrollo de Habilidades de Liderazgo',
    Descripcion:
      'Programa orientado a preparar al empleado para roles de liderazgo, mediante talleres, simulaciones y proyectos reales de gestión de equipos.',
  },
  Etapa: {
    Codigo: 3,
    Nombre: 'Primera Semana de Trabajo',
    Descripcion:
      'Actividades durante la primera semana, como la capacitación inicial, integración con el equipo y asignación de tareas iniciales.',
  },
  Descripcion:
    'Capacitación en liderazgo para la gestión de equipos regionales y manejo de la diversidad cultural.',
  Objetivo:
    'Desarrollar habilidades de liderazgo y comunicación efectiva en un contexto regional.',
  EmpleoResponsable: {
    Codigo: 172,
    NombresApellidos: 'Maria Teresa Granados Fuentes',
  },
  Duracion: 1,
  UnidadDuracionDb: Duracion['Dias'],
  RealizaEvaluacion: true,
  EstadoDb: EstadoActividad['Pendiente'],
  FechaFin: new Date(2024, 7, 20),
  Prioridad: prioridadMedium,
};

export const actividad3: IActividad = {
  Codigo: 3,
  Nombre: 'Visita Guiada',
  Tipo: {
    Codigo: 3,
    Nombre: 'Revisión de Políticas',
    Descripcion:
      'Revisión de las políticas internas de la empresa y cumplimiento normativo.',
  },
  Etapa: {
    Codigo: 2,
    Nombre: 'Antes del primer día',
    Descripcion: 'Actividades antes del primer día',
  },
  Descripcion: 'Realizar una visita guiada sobre las instalaciones.',
  Objetivo: 'Asignar parqueo y conocer el edificio.',
  EmpleoResponsable: {
    Codigo: 1,
    NombresApellidos: 'Hugo Maldonado',
  },
  Duracion: 2,
  UnidadDuracionDb: Duracion.Horas,
  RealizaEvaluacion: false,
  EstadoDb: EstadoActividad.Pendiente,
  FechaFin: new Date(),
  Prioridad: prioridadLow,
};

export const actividad4: IActividad = {
  Codigo: 4,
  Nombre: 'Revisión de documentos',
  Tipo: {
    Codigo: 3,
    Nombre: 'Revisión de Políticas',
    Descripcion:
      'Revisión de las políticas internas de la empresa y cumplimiento normativo.',
  },
  Etapa: {
    Codigo: 3,
    Nombre: 'Primer día',
    Descripcion: 'Actividades del Primer día',
  },
  Descripcion: 'Revisión de documentos y firma de contrato.',
  Objetivo: 'Asegurar que todos los documentos estén en orden.',
  EmpleoResponsable: {
    Codigo: 3,
    NombresApellidos: 'Javier Pineda',
  },
  Duracion: 2,
  UnidadDuracionDb: Duracion.Horas,
  RealizaEvaluacion: false,
  EstadoDb: EstadoActividad.Pendiente,
  FechaFin: new Date(2024, 7, 20),
  Prioridad: prioridadMedium,
};

export const actividad5: IActividad = {
  Codigo: 5,
  Nombre: 'Envío de Email de Bienvenida',
  Tipo: {
    Codigo: 1,
    Nombre: 'Inducción General a la Empresa',
    Descripcion:
      'Introducción a la empresa, su cultura, misión, visión y valores.',
  },
  Etapa: {
    Codigo: 2,
    Nombre: 'Antes del primer día',
    Descripcion: 'Actividades antes del primer día',
  },
  Descripcion: 'Enviar email de bienvenida al email creado para el empleado.',
  Objetivo: '',
  EmpleoResponsable: {
    Codigo: 4,
    NombresApellidos: 'Javier Herrera',
  },
  Duracion: 1,
  UnidadDuracionDb: Duracion.Horas,
  RealizaEvaluacion: false,
  EstadoDb: EstadoActividad.Pendiente,
  FechaFin: new Date(2024, 7, 20),
  Prioridad: prioridadLowest,
};

export const actividad6: IActividad = {
  Codigo: 6,
  Nombre: 'Evaluación de Desempeño',
  Tipo: {
    Codigo: 5,
    Nombre: 'Evaluación a la Empresa',
    Descripcion:
      'Evaluación a la empresa, su cultura, misión, visión y valores.',
  },
  Etapa: {
    Codigo: 1,
    Nombre: 'Período de prueba',
    Descripcion: 'Actividades del periodo de prueba',
  },
  Descripcion: 'Realizar evaluación de desempeño del primer trimestre.',
  Objetivo: '',
  EmpleoResponsable: {
    Codigo: 4,
    NombresApellidos: 'Javier Herrera',
  },
  Duracion: 1,
  UnidadDuracionDb: Duracion.Horas,
  RealizaEvaluacion: false,
  EstadoDb: EstadoActividad.EnProceso,
  FechaFin: new Date(2024, 7, 20),
  Prioridad: prioridadLowest,
};

export const actividad7: IActividad = {
  Codigo: 7,
  Nombre: 'Mentoría',
  Tipo: {
    Codigo: 1,
    Nombre: 'Inducción General a la Empresa',
    Descripcion:
      'Introducción a la empresa, su cultura, misión, visión y valores.',
  },
  Etapa: {
    Codigo: 1,
    Nombre: 'Período de prueba',
    Descripcion: 'Actividades del periodo de prueba',
  },
  Descripcion:
    'Programar mentoría con el empleado para guiarlo en su proceso de adaptación a la empresa.',
  Objetivo: '',
  EmpleoResponsable: {
    Codigo: 4,
    NombresApellidos: 'Javier Herrera',
  },
  Duracion: 1,
  UnidadDuracionDb: Duracion.Semanas,
  RealizaEvaluacion: false,
  EstadoDb: EstadoActividad.Finalizada,
  FechaFin: new Date(2024, 7, 20),
  Prioridad: prioridadHighest,
};

export const actividades = [
  actividad1,
  actividad2,
  actividad4,
  actividad3,
  actividad5,
  actividad6,
  actividad7,
];
