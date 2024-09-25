import { IButtonAction, IPlaza } from '../../public-api';

export interface IUserData {
  fullName: string;
  imgUrl?: string;
  email: string;
  jobPositions: IJobPosition[];
}

interface IJobPosition extends IPlaza {
  onClick: IButtonAction;
}
