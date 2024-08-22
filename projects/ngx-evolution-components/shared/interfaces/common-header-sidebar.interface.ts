import {
  IconInterface,
  ButtonInterface,
  UserDataInterface,
  HeaderIconsInterface,
  HeaderTitlesInterface,
  HeaderButtonItemsInterface,
  HeaderCompanyDataInterface,
  HeaderBoxButtonInterface,
} from '../../public-api';

export interface CommonHeaderSidebarInterface {
  icons: HeaderIconsInterface;
  titles: HeaderTitlesInterface;
  buttonItems: HeaderButtonItemsInterface;
  companyData: HeaderCompanyDataInterface;
  box?: HeaderBoxButtonInterface[];
  userData: UserDataInterface;
  classes?: string;
}

export interface SidebarOptionInterface {
  icon: IconInterface;
  action: () => void;
  route: string;
  title: string;
}
