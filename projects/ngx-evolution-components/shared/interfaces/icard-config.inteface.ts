import { ICardItem } from '../../public-api';

export interface ICardConfig {
  assignActionText: string;
  assignTargetText: string;
  items: ICardItem[];
  buttonText: string;
  emptyStateText: string;
  twClass?: string;
}
