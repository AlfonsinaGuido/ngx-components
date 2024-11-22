import { SelectComponent } from '@aseinfo/ngx-evolution-components/public-api';
import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormBuilder, FormControl } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

const meta: Meta<SelectComponent> = {
  title: 'Evolution Components/Select',
  component: SelectComponent,
  decorators: [
    applicationConfig({
      providers: [provideAnimationsAsync(), provideHttpClient()],
    }),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<SelectComponent>;

const form = new FormBuilder().group({
  defaultFieldSelect: new FormControl('', []),
  multipleFieldSelect: new FormControl([], []),
  requiredFieldSelect: new FormControl('', []),
  unlabeledFieldSelect: new FormControl('', []),
});

const formControlDefaultSelect = form.controls['defaultFieldSelect'];

const formControlMultipleSelect = form.controls['multipleFieldSelect'];

const formControlRequiredSelect = form.controls['requiredFieldSelect'];

const formControlUnlabeledSelect = form.controls['unlabeledFieldSelect'];

function addCircularSafeProperties(formControl: FormControl) {
  Object.defineProperty(formControl, 'toJSON', {
    value: () => null,
    writable: true,
    configurable: true,
  });
}

addCircularSafeProperties(formControlDefaultSelect);
addCircularSafeProperties(formControlMultipleSelect);
addCircularSafeProperties(formControlRequiredSelect);
addCircularSafeProperties(formControlUnlabeledSelect);

export const Default: Story = {
  args: {
    label: 'Select',
    items: [
      {
        Id: '1',
        Description: 'Option 1',
        Bag: {},
      },
      {
        Id: '2',
        Description: 'Option 2',
        Bag: {},
      },
      {
        Id: '3',
        Description: 'Option 3',
        Bag: {},
      },
    ],
    control: formControlDefaultSelect,
    buttonIcon: {
      icon: 'clean.svg',
      type: 'svg',
    },
    detail: '',
    twClass: '',
  },
};

export const Multiple: Story = {
  args: {
    ...Default.args,
    control: formControlMultipleSelect,
    isMultiple: true,
  },
};

export const Required: Story = {
  args: {
    ...Default.args,
    control: formControlRequiredSelect,
    isRequired: true,
    isMultiple: false,
    requiredErrorMessage: 'Este campo es requerido',
  },
};

export const Unlabeled: Story = {
  args: {
    ...Default.args,
    label: '',
    control: formControlUnlabeledSelect,
    isRequired: true,
    isMultiple: false,
    requiredErrorMessage: 'Este campo es requerido',
  },
};
