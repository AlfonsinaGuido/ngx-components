export type IconType = 'svg' | 'class';
export type IconPosition = 'left' | 'right';

export interface IconInterface {
  type: IconType;
  icon: string;
  position?: IconPosition;
}
