import { ButtonInterface } from '../../public-api';

export interface DialogInterface {
    title: string;
    scrollableContent?: string;
    simpleContent?: string;
    buttonsItems?: ButtonInterface[];
    buttonsFunctions?: {action: (param?: any) => any | void | {}}[];
    closeButton?: boolean;
}