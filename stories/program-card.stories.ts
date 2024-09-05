import { provideHttpClient } from '@angular/common/http';
import { ProgramCardComponent } from '@aseinfo/ngx-evolution-components/public-api';
import { applicationConfig, Meta, StoryObj } from '@storybook/angular';

type Story = StoryObj<ProgramCardComponent>;

export default {
  component: ProgramCardComponent,
  title: 'Evolution Components/Program Card',
  decorators: [
    applicationConfig({
      providers: [provideHttpClient()],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    cardData: {
      control: false,
    },
    'cardData.title': {
      control: 'text',
      name: 'Title',
      description: 'The title of the program card',
      defaultValue: 'Program Title',
    },
    'cardData.subtitle': {
      control: 'text',
      name: 'Subtitle',
      description: 'The subtitle of the program card',
      defaultValue: 'Ejemplo de descripción',
    },
    'cardData.isFluid': {
      control: 'boolean',
      name: 'Is Fluid',
      description: 'Defines whether the card should be fluid or fixed size',
      defaultValue: false,
    },
    'cardData.size': {
      control: 'select',
      name: 'Size',
      description: 'Defines the size of the card (sm, md, lg)',
      options: ['sm', 'md', 'lg'],
      defaultValue: 'md',
    },
    'cardData.activitiesCount': {
      control: 'number',
      name: 'Activities Count',
      description: 'The number of activities displayed',
      defaultValue: 5,
    },
    'cardData.activitiesText': {
      control: 'text',
      name: 'Activities Text',
      description: 'The text label for activities',
      defaultValue: 'Actividades',
    },
    'cardData.weeksCount': {
      control: 'number',
      name: 'Weeks Count',
      description: 'The number of weeks displayed',
      defaultValue: 3,
    },
    'cardData.weeksText': {
      control: 'text',
      name: 'Weeks Text',
      description: 'The text label for weeks',
      defaultValue: 'Semanas',
    },
    'cardData.buttonLabel': {
      control: 'text',
      name: 'Button Label',
      description: 'The label for the action button',
      defaultValue: 'Asignar',
    },
    'cardData.buttonClasses': {
      control: 'text',
      name: 'Button Classes',
      description: 'CSS classes for the button',
      defaultValue: 'theme-primary',
    },
  },
} as Meta<ProgramCardComponent>;

export const Default: Story = {
  args: {
    cardData: {
      title: 'Program Title',
      subtitle: 'Ejemplo de descripción',
      activitiesCount: 5,
      activitiesText: 'Actividades',
      weeksCount: 3,
      weeksText: 'Semanas',
      buttonLabel: 'Asignar',
      buttonIcon: 'add-user.svg',
      buttonClasses: 'theme-primary',
      onButtonClick: {
        action: () => {
          console.log('Button clicked!');
        },
      },
      twClass: 'custom-class',
      isFluid: true,
      size: 'lg',
    },
  },
};

export const Small: Story = {
  args: {
    cardData: {
      ...Default!.args!.cardData,
      isFluid: false,
      size: 'sm',
      title: 'Small Program Title',
      subtitle:
        'Se permite texto hasta dos líneas. Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    },
  },
};

export const Medium: Story = {
  args: {
    cardData: {
      ...Default!.args!.cardData,
      isFluid: false,
      size: 'md',
      title: 'Medium Program Title',
    },
  },
};

export const Large: Story = {
  args: {
    cardData: {
      ...Default!.args!.cardData,
      isFluid: false,
      size: 'lg',
      title: 'Large Program Title',
    },
  },
};
