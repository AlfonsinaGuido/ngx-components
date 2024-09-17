import {
  IButton,
  IButtonAction,
  IMenuIcons,
  IUserData,
} from '../../public-api';

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
  onClick: IButtonAction;
}

export interface IHeaderIcons {
  appMenuIcons: IMenuIcons;
  authorizationMenuIcons?: IMenuIcons;
  notificationMenuIcons: IMenuIcons;
  userMenuIcons?: IMenuIcons;
}

export interface IHeaderTitles {
  appTitle: string;
  authorizationTitle?: string;
  notificationTitle: string;
}

export interface IHeaderButtonItems {
  appItems: IButton[];
  authorizationItems?: IButton[];
  notificationItems: IButton[];
  userDataItems: IButton[];
}

export interface IHeaderCompanyData {
  companyImage?: string;
  companyName?: string;
}
