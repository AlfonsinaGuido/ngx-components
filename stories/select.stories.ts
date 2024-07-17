import { SelectComponent } from '@aseinfo/ngx-evolution-components/public-api';
import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

const meta: Meta<SelectComponent> = {
  title: 'Evolution Components/Select',
  component: SelectComponent,
  decorators: [
    applicationConfig({
      providers: [provideAnimations()],
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
});

const formControlDefaultSelect = form.controls['defaultFieldSelect'];

const formControlMultipleSelect = form.controls['multipleFieldSelect'];

const formControlRequiredSelect = form.controls['requiredFieldSelect'];

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

export const Default: Story = {
  args: {
    label: 'Select',
    items: [
      {
        key: 1,
        value: 'Option 1',
      },
      {
        key: 2,
        value: 'Option 2',
      },
      {
        key: 3,
        value: 'Option 3',
      },
    ],
    control: formControlDefaultSelect,
    detail: '',
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
    errorMessage: 'Este campo es requerido',
  },
};
