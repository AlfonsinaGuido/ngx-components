import {
  IButton,
  IButtonAction,
  IMenuIcons,
  ISettingMenu,
  IUserData,
} from '../../public-api';

export interface IHeader {
  icons: IHeaderIcons;
  titles: IHeaderTitles;
  items: IHeaderItems;
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
  settingMenuIcons: IMenuIcons;
  userMenuIcons?: IMenuIcons;
}

export interface IHeaderTitles {
  appTitle: string;
  authorizationTitle?: string;
  notificationTitle: string;
  settingTitle: string;
}

export interface IHeaderItems {
  appItems: IButton[];
  authorizationItems?: IButton[];
  notificationItems: IButton[];
  settingMenu: ISettingMenu;
  userDataItems: IButton[];
}

export interface IHeaderCompanyData {
  companyImage?: string;
  companyName?: string;
}
