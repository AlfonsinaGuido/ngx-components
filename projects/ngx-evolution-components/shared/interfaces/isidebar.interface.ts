import { IHeader, IIcon } from '../../public-api';

// Propiedades específicas del Sidebar que reutilizan el header
export interface ISidebarHeaderProps extends IHeader {}

// Opción del sidebar basada en rutas
export interface ISidebarOptionRoute {
  icon: IIcon;
  route: string;
  title: string;
}

// Opción del sidebar basada en acciones
export interface ISidebarOptionAction {
  icon: IIcon;
  action: () => void;
  title: string;
}

// Opciones del Sidebar (pueden tener ruta o acción)
export interface ISidebarOption {
  icon: IIcon;
  action?: () => void;
  route?: string;
  title: string;
}

// Configuración del Sidebar que incluye props comunes y opciones
export interface ISidebarConfig {
  commonProps: ISidebarHeaderProps;
  options: ISidebarOption[] | [];
  additionalOptions?: ISidebarOption[];
  footerOptions?: ISidebarOption[];
  accordion?: {
    settingOptions: ISidebarOption[];
    appOptions: ISidebarOption[];
  };
}
