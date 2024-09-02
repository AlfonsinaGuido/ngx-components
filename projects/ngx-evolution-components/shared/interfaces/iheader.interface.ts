import { IButton, IIcon, IUserData } from '../../public-api';

export interface IHeader {
  icons: IHeaderIcons;
  titles: IHeaderTitles;
  buttonItems: IHeaderButtonItems;
  companyData: IHeaderCompanyData;
  box?: IHeaderBoxButton[];
  userData: IUserData;
  twClass?: string;
}

export interface IHeaderBoxButton {
  label: string;
  action: (param?: any) => any | void | {};
}

export interface IHeaderIcons {
  appIcon: IIcon;
  notificationIcon: IIcon;
  closeMenuIcon?: IIcon;
}

export interface IHeaderTitles {
  appTitle: string;
  notificationTitle: string;
}

export interface IHeaderButtonItems {
  appItems: IButton[];
  notificationItems: IButton[];
  userDataItems: IButton[];
}

export interface IHeaderCompanyData {
  companyImage?: string;
  companyName?: string;
}
