import {
  ButtonInterface,
  IconInterface,
  UserDataInterface,
} from '../../public-api';

export interface HeaderInterface {
  icons: HeaderIconsInterface;
  titles: HeaderTitlesInterface;
  buttonItems: HeaderButtonItemsInterface;
  companyData: HeaderCompanyDataInterface;
  box?: HeaderBoxButtonsInterface[];
  userData: UserDataInterface;
  classes?: string;
}

export interface HeaderBoxButtonsInterface {
  label: string;
  action: (param?: any) => any | void | {};
}

export interface HeaderIconsInterface {
  appIcon: IconInterface;
  notificationIcon: IconInterface;
  closeMenuIcon?: IconInterface;
}

export interface HeaderTitlesInterface {
  appTitle: string;
  notificationTitle: string;
}

export interface HeaderButtonItemsInterface {
  appItems: ButtonInterface[];
  notificationItems: ButtonInterface[];
  userDataItems: ButtonInterface[];
}

export interface HeaderCompanyDataInterface {
  companyImage?: string;
  companyName?: string;
}
