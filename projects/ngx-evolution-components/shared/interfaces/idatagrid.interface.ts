import { IPrioridad } from './iprioridad.interface';

export type DataGridValueType = 'single' | 'descriptive' | 'tag';

export interface IDataGrid {
  valueType: DataGridValueType;
  propertyTitle: string;
  propertyValue?: string;
  icon: string;
  prioridad?: IPrioridad;
}
