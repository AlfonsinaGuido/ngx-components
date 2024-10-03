import { ICardItem } from '../../public-api';

export interface ICardConfig {
  titlep1: string;
  titlep2: string;
  items: ICardItem[];
  buttonText: string;
  emptyStateText: string;
  twClass?: string;
}
