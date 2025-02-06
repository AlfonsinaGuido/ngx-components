import { Component, TemplateRef, ViewChild } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TabsComponent } from '@aseinfo/ngx-evolution-components/public-api';
import {
  applicationConfig,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';

// Componente que contiene las plantillas de pestañas
@Component({
  selector: 'app-tab-content',
  template: `
    <ng-template #tabContent1 matTabContent><div>Programas</div></ng-template>
    <ng-template #tabContent2 matTabContent><div>Tabla</div></ng-template>
  `,
})
class TabContentComponent {
  @ViewChild('tabContent1', { static: true }) tabContent1!: TemplateRef<any>;
  @ViewChild('tabContent2', { static: true }) tabContent2!: TemplateRef<any>;
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<TabsComponent> = {
  title: 'Evolution Components/Tabs',
  component: TabsComponent,
  decorators: [
    applicationConfig({
      providers: [provideAnimationsAsync()],
    }),
    moduleMetadata({
      declarations: [TabContentComponent],
    }),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<TabsComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `
      <app-tab-content #tabContent></app-tab-content>
      <evo-tabs
        [tabs]="[
          { label: tabs[0]?.label, badgeValue: tabs[0]?.badgeValue, content: tabContent.tabContent1 },
          { label: tabs[1]?.label, badgeValue: tabs[1]?.badgeValue, content: tabContent.tabContent2 },
        ]"
        [selectedIndex]="selectedIndex"
        [twClass]="twClass"
      >
      </evo-tabs>
    `,
  }),
  args: {
    selectedIndex: 0,
    tabs: [
      {
        label: 'Asignar',
        badgeValue: 0,
        content: '' as any as TemplateRef<any>,
      },
      {
        label: 'Gestionar',
        badgeValue: 4,
        content: '' as any as TemplateRef<any>,
      },
    ],
    twClass: '',
  },
};
