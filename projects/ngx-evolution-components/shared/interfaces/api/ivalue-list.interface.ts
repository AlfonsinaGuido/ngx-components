export interface IValueList {
  Id: string;
  Description: string;
  Bag: IBag;
}

interface IBag {
  emp_codigo?: string;
  exp_apellidos_nombres?: string;
}
