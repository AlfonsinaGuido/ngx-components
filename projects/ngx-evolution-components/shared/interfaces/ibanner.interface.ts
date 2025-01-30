export type BannerType = 'success' | 'caution' | 'error';

export interface IBanner {
  type?: BannerType;
  title: string;
  message: string;
  duration?: number;
  twClass?: string;
  useAnimation?: boolean;
}
