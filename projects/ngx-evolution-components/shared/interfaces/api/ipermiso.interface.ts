export type Action = 'Create' | 'Delete' | 'Edit' | 'Index';

export interface IPermiso {
  OpcionId: string;
  Acciones: Action[];
}
