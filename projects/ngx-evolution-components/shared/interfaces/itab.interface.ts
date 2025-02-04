import { TemplateRef } from '@angular/core';

export interface ITab {
  label: string;
  badgeValue?: number;
  content: TemplateRef<any>;
}
