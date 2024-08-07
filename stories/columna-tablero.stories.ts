import { Meta, StoryObj } from '@storybook/angular';
import { ColumnaTableroComponent } from '@aseinfo/ngx-evolution-components/public-api';
import { IActividad } from '@aseinfo/ngx-evolution-components/shared/interfaces/actividad.interface';
import { Prioridad } from '@aseinfo/ngx-evolution-components/enums/prioridad.enum';
import { Duracion } from '@aseinfo/ngx-evolution-components/enums/duracion.enum';
import { EstadoActividad } from '@aseinfo/ngx-evolution-components/enums/estado.enum';

type Story = StoryObj<ColumnaTableroComponent>;
export default {
  component: ColumnaTableroComponent,
  title: 'Evolution Components/Kanban/Columna Tablero',
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} as Meta<ColumnaTableroComponent>;

const actividades: IActividad[] = [
  {
    id: 1,
    titulo: 'Inducción a la empresa',
    tipo: 'Reunión',
    fase: 'Antes del primer día',
    descripcion:
      'Día de inducción a la empresa. Es necesario asistir presencialmente a las oficinas.',
    objetivos:
      'Procurar que el empleado pueda asociarse con los valores de la empresa',
    prioridad: Prioridad.High,
    responsable: 'Miguel Perez',
    duracion: 8,
    tipoDuracion: Duracion.Horas,
    realizaEvaluacion: false,
    status: EstadoActividad.Abierta,
    fechaFin: new Date(2024, 7, 20),
  },
  {
    id: 2,
    titulo: 'Curso de Evolution',
    tipo: 'Capacitación',
    fase: 'La primera semana',
    descripcion:
      'Curso de una semana para el aprendizaje básico del sistema Evolution.',
    objetivos:
      'El participante debe llegar a familiarizarse con todos los módulos de Evolution.',
    prioridad: Prioridad.Low,
    responsable: 'Andres Urizar',
    duracion: 5,
    tipoDuracion: Duracion.Dias,
    realizaEvaluacion: true,
    status: EstadoActividad.EnProgreso,
    fechaFin: new Date(2024, 7, 20),
  },
];

export const fotoDePerfil: Story = {
  args: {
    actividades: actividades,
  },
};
