import { IconInterface } from "../../public-api";

export type ButtonType = 'xs'|'md'|'lg';
export type ButtonTheme = 'default'|'primary'|'secondary'|'terciary';

export interface ButtonInterface {
    theme: ButtonTheme;
    label: string;
    icon?: IconInterface;
    isFlat?: boolean;
    isFluid?: boolean;
}