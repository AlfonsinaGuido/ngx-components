import { IButtonAction, IPlaza } from '../../public-api';

export interface IUserData {
  fullName: string;
  imgUrl?: string;
  email: string;
  jobPositions: IJobPosition[];
}

export interface IUserCodes {
  codcia: number;
  codemp: number;
  codexp: number;
}

interface IJobPosition extends IPlaza {
  onClick: IButtonAction;
}
