import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { DialogButtonComponent } from '@aseinfo/ngx-evolution-components/shared/components/dialog-button/dialog-button.component';
import { provideHttpClient } from '@angular/common/http';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<DialogButtonComponent> = {
  title: 'Evolution Components/Dialog',
  component: DialogButtonComponent,
  decorators: [
    applicationConfig({
      providers: [provideAnimationsAsync(), provideHttpClient()],
    }),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<DialogButtonComponent>;

const Testing1 = (): void => {
  console.log('Funcion 1');
};

const Testing2 = (): void => {
  console.log('Funcion 2');
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    title: 'Dialogo de testing',
  },
};

export const ScrollableContent: Story = {
  args: {
    title: 'Dialogo de testing',
    scrollableContent: `
        <h3>Develop across all platforms</h3>
  <p>Learn one way to build applications with Angular and reuse your code and abilities to build
    apps for any deployment target. For web, mobile web, native mobile and native desktop.</p>

  <h3>Speed &amp; Performance</h3>
  <p>Achieve the maximum speed possible on the Web Platform today, and take it further, via Web
    Workers and server-side rendering. Angular puts you in control over scalability. Meet huge
    data requirements by building data models on RxJS, Immutable.js or another push-model.</p>

  <h3>Incredible tooling</h3>
  <p>Build features quickly with simple, declarative templates. Extend the template language with
    your own components and use a wide array of existing components. Get immediate Angular-specific
    help and feedback with nearly every IDE and editor. All this comes together so you can focus
    on building amazing apps rather than trying to make the code work.</p>

  <h3>Loved by millions</h3>
  <p>From prototype through global deployment, Angular delivers the productivity and scalable
    infrastructure that supports Google's largest applications.</p>

  <h3>What is Angular?</h3>

  <p>Angular is a platform that makes it easy to build applications with the web. Angular
    combines declarative templates, dependency injection, end to end tooling, and integrated
    best practices to solve development challenges. Angular empowers developers to build
    applications that live on the web, mobile, or the desktop</p>

  <h3>Architecture overview</h3>
        `,
  },
};

export const simpleContent: Story = {
  args: {
    title: 'Dialogo de testing',
    simpleContent: 'Testing de prueba para dialogo',
  },
};

export const buttonsItemsSimple: Story = {
  args: {
    title: 'Dialogo de testing',
    simpleContent: 'Testing de prueba para dialogo',
    buttonsItems: [
      {
        label: 'Item 1',
        theme: 'warning',
        onClick: {
          action: Testing1,
        },
      },
      {
        label: 'Item 2',
        theme: 'primary',
        onClick: {
          action: Testing2,
        },
      },
    ],
  },
};

export const buttonsItemsScrollable: Story = {
  args: {
    title: 'Dialogo de testing',
    scrollableContent: `
        <h3>Develop across all platforms</h3>
  <p>Learn one way to build applications with Angular and reuse your code and abilities to build
    apps for any deployment target. For web, mobile web, native mobile and native desktop.</p>

  <h3>Speed &amp; Performance</h3>
  <p>Achieve the maximum speed possible on the Web Platform today, and take it further, via Web
    Workers and server-side rendering. Angular puts you in control over scalability. Meet huge
    data requirements by building data models on RxJS, Immutable.js or another push-model.</p>

  <h3>Incredible tooling</h3>
  <p>Build features quickly with simple, declarative templates. Extend the template language with
    your own components and use a wide array of existing components. Get immediate Angular-specific
    help and feedback with nearly every IDE and editor. All this comes together so you can focus
    on building amazing apps rather than trying to make the code work.</p>

  <h3>Loved by millions</h3>
  <p>From prototype through global deployment, Angular delivers the productivity and scalable
    infrastructure that supports Google's largest applications.</p>

  <h3>What is Angular?</h3>

  <p>Angular is a platform that makes it easy to build applications with the web. Angular
    combines declarative templates, dependency injection, end to end tooling, and integrated
    best practices to solve development challenges. Angular empowers developers to build
    applications that live on the web, mobile, or the desktop</p>

  <h3>Architecture overview</h3>
        `,
    buttonsItems: [
      {
        label: 'Item 1',
        theme: 'warning',
        onClick: {
          action: Testing1,
        },
      },
      {
        label: 'Item 2',
        theme: 'primary',
        onClick: {
          action: Testing2,
        },
      },
    ],
  },
};

export const closeButton: Story = {
  args: {
    title: 'Dialogo de testing',
    simpleContent:
      'Testing de prueba para dialogo para comprobar que tanto se puede expandir el texto el dialogo',
    buttonsItems: [
      {
        label: 'Item 1',
        theme: 'secondary',
        onClick: {
          action: Testing1,
        },
      },
      {
        label: 'Item 2',
        theme: 'primary',
        onClick: {
          action: Testing2,
        },
      },
    ],
    disableClosing: true,
    closeButton: true,
  },
};

export const iconDialog: Story = {
  args: {
    title: 'Dialogo de testing',
    icon: {
      icon: 'warning',
      type: 'class',
      color: '#c91711',
    },
    buttonsItems: [
      {
        label: 'Item 1',
        theme: 'secondary',
        onClick: {
          action: Testing1,
        },
      },
      {
        label: 'Item 2',
        theme: 'primary',
        onClick: {
          action: Testing2,
        },
      },
    ],
    simpleContent: 'Testing de prueba para dialogo',
  },
};

export const svgDialog: Story = {
  args: {
    title: 'Dialogo de testing',
    icon: {
      icon: 'company-logo.svg',
      type: 'svg',
      position: 'right',
    },
    buttonsItems: [
      {
        label: 'Item 1',
        theme: 'secondary',
        onClick: {
          action: Testing1,
        },
      },
      {
        label: 'Item 2',
        theme: 'primary',
        onClick: {
          action: Testing2,
        },
      },
    ],
    simpleContent: 'Testing de prueba para dialogo',
  },
};
