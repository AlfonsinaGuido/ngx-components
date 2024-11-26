import { AutocompleteComponent } from '@aseinfo/ngx-evolution-components/public-api';
import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

const meta: Meta<AutocompleteComponent> = {
  title: 'Evolution Components/Autocomplete',
  component: AutocompleteComponent,
  decorators: [
    applicationConfig({
      providers: [provideAnimationsAsync()],
    }),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<AutocompleteComponent>;

const form = new FormBuilder().group({
  defaultFieldAutocomplete: new FormControl('', []),
  requiredFieldAutocomplete: new FormControl('', [Validators.required]),
  unlabeledFieldAutocomplete: new FormControl('', [Validators.required]),
});

const formControlDefaultAutocomplete =
  form.controls['defaultFieldAutocomplete'];

const formControlRequiredAutocomplete =
  form.controls['requiredFieldAutocomplete'];

const formControlUnlabeledAutocomplete =
  form.controls['unlabeledFieldAutocomplete'];

function addCircularSafeProperties(formControl: FormControl) {
  Object.defineProperty(formControl, 'toJSON', {
    value: () => null,
    writable: true,
    configurable: true,
  });
}

addCircularSafeProperties(formControlDefaultAutocomplete);
addCircularSafeProperties(formControlRequiredAutocomplete);
addCircularSafeProperties(formControlUnlabeledAutocomplete);

export const Default: Story = {
  args: {
    inputConfiguration: {
      control: formControlDefaultAutocomplete,
      label: 'Autocomplete',
      inputPlaceholder: '',
      detail: '',
      twClass: '',
    },
    items: [
      {
        Id: '7',
        Description: 'Penado Guzmán, Ana María',
        Bag: {},
      },
      {
        Id: '178',
        Description: 'Guatemala Melara, Victor Hugo',
        Bag: {},
      },
      {
        Id: '8',
        Description: 'Sanchez, Carlos',
        Bag: {},
      },
      {
        Id: '9',
        Description: 'Lopez, Samuel',
        Bag: {},
      },
      {
        Id: '10',
        Description: 'Fernandez, Ignacio',
        Bag: {},
      },
      {
        Id: '11',
        Description: 'Perez, Mercedes',
        Bag: {},
      },
    ],
  },
};

export const Required: Story = {
  args: {
    ...Default.args,
    inputConfiguration: {
      control: formControlRequiredAutocomplete,
      label: 'Autocomplete',
      inputPlaceholder: '',
      requiredErrorMessage: 'Este campo es requerido',
      detail: '',
      twClass: '',
    },
  },
};

export const Unlabeled: Story = {
  args: {
    ...Default.args,
    inputConfiguration: {
      control: formControlUnlabeledAutocomplete,
      inputPlaceholder: '',
      requiredErrorMessage: 'Este campo es requerido',
      detail: '',
      twClass: '',
    },
  },
};
