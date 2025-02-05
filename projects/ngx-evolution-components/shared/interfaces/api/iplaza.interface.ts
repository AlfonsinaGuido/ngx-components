export interface IPlaza {
  CompaniaCodigo: number;
  Puesto: IPuesto;
  Unidad: IUnidad;
  Compania: ICompania;
  CentroTrabajo: ICentroTrabajo;
}

interface IPuesto {
  Nombre: string;
}

interface IUnidad {
  Descripcion: string;
}

interface ICompania {
  Descripcion: string;
}

interface ICentroTrabajo {
  Descripcion: string;
}
