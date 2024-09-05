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
  id: 1,
  nombre: 'Inducción a la empresa',
  tipo: 'Reunión',
  etapa: EtapaPrograma.PeriodoPrueba,
  descripcion:
    'Día de inducción a la empresa. Es necesario asistir presencialmente a las oficinas.',
  objetivos:
    'Procurar que el empleado pueda asociarse con los valores de la empresa',
  responsable: 'Hugo Maldonado',
  duracion: 8,
  tipoDuracion: Duracion.horas,
  realizaEvaluacion: false,
  status: EstadoActividad.abierta,
  fechaFin: new Date(2024, 7, 20),
  prioridad: prioridadHigh,
};

export const actividad2: IActividad = {
  id: 2,
  nombre: 'Curso de Evolution',
  tipo: 'Capacitación',
  etapa: EtapaPrograma.PeriodoPrueba,
  descripcion:
    'Curso de una semana para el aprendizaje básico del sistema Evolution.',
  objetivos:
    'El participante debe llegar a familiarizarse con todos los módulos de Evolution.',
  responsable: 'Unidad de Capacitación',
  duracion: 5,
  tipoDuracion: Duracion.dias,
  realizaEvaluacion: true,
  status: EstadoActividad.enProgreso,
  fechaFin: new Date(2024, 7, 20),
  prioridad: prioridadMedium,
};

export const actividad3: IActividad = {
  id: 3,
  nombre: 'Visita Guiada',
  tipo: 'Reunión',
  etapa: EtapaPrograma.AntesPrimerDia,
  descripcion: 'Realizar una visita guiada sobre las instalaciones.',
  objetivos: 'Asignar parqueo y conocer el edificio.',
  responsable: 'Hugo Maldonado',
  duracion: 2,
  tipoDuracion: Duracion.horas,
  realizaEvaluacion: false,
  status: EstadoActividad.abierta,
  fechaFin: new Date(),
  prioridad: prioridadLow,
};

export const actividad4: IActividad = {
  id: 4,
  nombre: 'Revisión de documentos',
  tipo: 'Revisión',
  etapa: EtapaPrograma.AntesPrimerDia,
  descripcion: 'Revisión de documentos y firma de contrato.',
  objetivos: 'Asegurar que todos los documentos estén en orden.',
  responsable: 'Javier Pineda',
  duracion: 2,
  tipoDuracion: Duracion.horas,
  realizaEvaluacion: false,
  status: EstadoActividad.abierta,
  fechaFin: new Date(2024, 7, 20),
  prioridad: prioridadMedium,
};

export const actividad5: IActividad = {
  id: 5,
  nombre: 'Envío de Email de Bienvenida',
  tipo: 'Correo',
  etapa: EtapaPrograma.AntesPrimerDia,
  descripcion: 'Enviar email de bienvenida al email creado para el empleado.',
  objetivos: '',
  responsable: 'Javier Herrera',
  duracion: 1,
  tipoDuracion: Duracion.horas,
  realizaEvaluacion: false,
  status: EstadoActividad.abierta,
  fechaFin: new Date(2024, 7, 20),
  prioridad: prioridadLowest,
};

export const actividad6: IActividad = {
  id: 6,
  nombre: 'Evaluación de Desempeño',
  tipo: 'Evaluación',
  etapa: EtapaPrograma.PeriodoPrueba,
  descripcion: 'Realizar evaluación de desempeño del primer trimestre.',
  objetivos: '',
  responsable: 'Javier Herrera',
  duracion: 1,
  tipoDuracion: Duracion.horas,
  realizaEvaluacion: false,
  status: EstadoActividad.enProgreso,
  fechaFin: new Date(2024, 7, 20),
  prioridad: prioridadLowest,
};

export const actividad7: IActividad = {
  id: 7,
  nombre: 'Mentoría',
  tipo: 'Evaluación',
  etapa: EtapaPrograma.PeriodoPrueba,
  descripcion:
    'Programar mentoría con el empleado para guiarlo en su proceso de adaptación a la empresa.',
  objetivos: '',
  responsable: 'Javier Herrera',
  duracion: 1,
  tipoDuracion: Duracion.semanas,
  realizaEvaluacion: false,
  status: EstadoActividad.cerrada,
  fechaFin: new Date(2024, 7, 20),
  prioridad: prioridadHighest,
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
