import {
  IButton,
  IButtonAction,
  IMenuIcons,
  ISettingMenu,
  IUserData,
  IIcon,
} from '../../public-api';

export interface IHeader {
  icons: IHeaderIcons;
  titles: IHeaderTitles;
  items: IHeaderItems;
  companyData: IHeaderCompanyData;
  box?: IHeaderBoxButton[];
  userData: IUserData;
  twClass?: string;
  moreOptions?: IMoreOptions;
}

export interface IHeaderBoxButton {
  label: string;
  onClick: IButtonAction;
}

export interface IHeaderIcons {
  appMenuIcons: IMenuIcons;
  authorizationMenuIcons?: IMenuIcons;
  notificationMenuIcons?: IMenuIcons;
  settingMenuIcons: IMenuIcons;
  userMenuIcons?: IMenuIcons;
}

export interface IHeaderTitles {
  appTitle: string;
  authorizationTitle?: string;
  notificationTitle: string;
  settingTitle?: string;
}

export interface IHeaderItems {
  appItems: IButton[];
  authorizationItems: IButton[];
  notificationItems: IButton[];
  seeAllButton: ISeeAllButton;
  settingMenu: ISettingMenu;
  userDataItems: IButton[];
}

interface ISeeAllButton {
  seeAllAuthorizations?: IButton;
  seeAllNotifications?: IButton;
}

export interface IHeaderCompanyData {
  companyImage?: string;
  companyName?: string;
}

export interface IMoreOptions {
  label: string;
  insideLabel: string;
  icon: IIcon;
  options: IMoreOptionItem[];
}

export interface IMoreOptionItem {
  label: string;
  icon: IIcon;
  route: string;
  action?: () => void;
}
