export type IconType = 'svg' | 'class';
export type IconPosition = 'left' | 'right';

export interface IIcon {
  type: IconType;
  icon: string;
  position?: IconPosition;
  color?: string;
}
