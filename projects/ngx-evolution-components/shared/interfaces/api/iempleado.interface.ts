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
}

export interface IPuesto {
  Nombre: string;
}
