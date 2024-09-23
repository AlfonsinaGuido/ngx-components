export interface IEmpleado {
  Nombre: string;
  Email: string;
  Empleos: IEmpleo[];
}

interface IEmpleo {
  Expediente: IExpediente;
  Plaza: IPlaza;
}

interface IExpediente {
  Fotografia: IFotografia;
}

interface IFotografia {
  CodigoArchivo: string;
}

interface IPlaza {
  Puesto: IPuesto;
  Unidad: IUnidad;
  Compania: ICompania;
  CentroTrabajo: ICentroTrabajo;
}

export interface IPuesto {
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
