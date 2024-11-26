import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import {
  FilterComponent,
  IFilter,
  IValueList,
} from '@aseinfo/ngx-evolution-components/public-api';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

const meta: Meta<FilterComponent> = {
  title: 'Evolution Components/Filter',
  component: FilterComponent,
  decorators: [
    applicationConfig({
      providers: [provideAnimationsAsync()],
    }),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<FilterComponent>;

const valuelistTest: IValueList[] = [
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
];

const form = new FormBuilder().group({
  defaultFieldInput: new FormControl('', []),
  requiredFieldInput: new FormControl('', [Validators.required]),
  unlabeledFieldInput: new FormControl('', [Validators.required]),
  emailFieldInput: new FormControl('', [Validators.required, Validators.email]),
  patternFieldInput: new FormControl('', [
    Validators.required,
    Validators.pattern(/^\(\d{3}\) \d{3}-\d{4}$/),
  ]),
});

const formControlDefaultInput = form.controls['defaultFieldInput'];

const formControlRequiredInput = form.controls['requiredFieldInput'];

const formControlUnlabeledInput = form.controls['unlabeledFieldInput'];

const formControlEmailInput = form.controls['emailFieldInput'];

const formControlPatternInput = form.controls['patternFieldInput'];

function addCircularSafeProperties(formControl: FormControl) {
  Object.defineProperty(formControl, 'toJSON', {
    value: () => null,
    writable: true,
    configurable: true,
  });
}

addCircularSafeProperties(formControlDefaultInput);
addCircularSafeProperties(formControlRequiredInput);
addCircularSafeProperties(formControlUnlabeledInput);
addCircularSafeProperties(formControlEmailInput);
addCircularSafeProperties(formControlPatternInput);

const fields: IFilter = {
  fields: [
    {
      id: 'empleado',
      fieldType: 'searchBar',
      inputPlaceholder: 'Empleados',
      twClass: 'h-12',
      control: formControlDefaultInput,
    },
    {
      id: 'fecha',
      fieldType: 'date',
      inputType: 'date',
      label: 'Fecha',
      detail: '',
      twClass: 'max-w-max',
      control: formControlDefaultInput,
    },
    {
      id: 'tel',
      fieldType: 'tel',
      inputType: 'tel',
      label: 'Telefono',
      twClass: 'max-w-max',
      requiredErrorMessage: 'Ninguna',
      control: formControlPatternInput,
    },
    {
      id: 'autocomplete',
      fieldType: 'autocomplete',
      control: formControlDefaultInput,
      label: 'Autocomplete Empleados',
      twClass: 'max-w-max',
      items: valuelistTest,
    },
  ],
};

export const Default: Story = {
  args: {
    fields: fields,
  },
};
