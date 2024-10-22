import { Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { provideHttpClient } from '@angular/common/http';
import {
  ActionMenuComponent,
  IActionMenuConfig,
} from '@aseinfo/ngx-evolution-components/public-api';

const meta: Meta<ActionMenuComponent> = {
  title: 'Evolution Components/Action Menu',
  component: ActionMenuComponent,
  decorators: [
    applicationConfig({
      providers: [provideHttpClient()],
    }),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<ActionMenuComponent>;

const defaultConfig: IActionMenuConfig = {
  actions: [
    {
      Code: 'new',
      Text: 'Esto es un texto un poco largo ',
      Visible: true,
      ShowText: true,
      ShowImage: false,
      ImageURL: '',
      VisibleIndex: 2,
      ActionURL: '/new',
      ExecuteLinkAction: false,
    },
    {
      Code: 'edit',
      Text: 'Editar',
      Visible: true,
      ShowText: true,
      ShowImage: false,
      ImageURL: '',
      VisibleIndex: 1,
      ActionURL: '/edit',
      ExecuteLinkAction: false,
    },
    {
      Code: 'delete',
      Text: 'Eliminar',
      Visible: true,
      ShowText: true,
      ShowImage: false,
      ImageURL: '',
      VisibleIndex: 3,
      ActionURL: '/delete',
      ExecuteLinkAction: false,
    },
  ],
  isOpen: true,
  twClass: '',
  icons: [
    { type: 'class', icon: 'add' },
    { type: 'class', icon: 'edit' },
    { type: 'class', icon: 'delete' },
  ],
};

export const Default: Story = {
  render: (args) => {
    const handleActionSelected = (actionCode: string) => {
      console.log('Acción seleccionada:', actionCode);
    };

    const handleMenuClosed = () => {
      console.log('Menú cerrado');
    };

    return {
      template: `
        <div class="w-full h-48 bg-gray-100 p-4 flex justify-center items-center">
          <div class="relative">
            <h3 class="text-lg font-bold mb-2">Botón</h3>
            <action-menu
            [icons]="icons"
              [config]="config"
              (actionSelected)="actionSelected($event)"
              (menuClosed)="menuClosed()"
              [twClass]="twClass"
            ></action-menu>
          </div>
        </div>
      `,
      props: {
        ...args,
        actionSelected: handleActionSelected,
        menuClosed: handleMenuClosed,
      },
    };
  },
  args: {
    config: { ...defaultConfig },
  },
};
