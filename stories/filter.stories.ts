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
  defaultFieldInputTel: new FormControl('', []),
  defaultFieldInputDate: new FormControl('', []),
  defaultFieldAutocomplete: new FormControl('', []),
  defaultFieldSelect: new FormControl('', []),
});

const formControlDefaultInput = form.controls['defaultFieldInput'];
const formControlDefaultInputTel = form.controls['defaultFieldInputDate'];
const formControlDefaultInputDate = form.controls['defaultFieldInputTel'];

const formControlDefaultInputAutocomplete =
  form.controls['defaultFieldAutocomplete'];

const formControlDefaultInputSelect = form.controls['defaultFieldSelect'];

function addCircularSafeProperties(formControl: FormControl) {
  Object.defineProperty(formControl, 'toJSON', {
    value: () => null,
    writable: true,
    configurable: true,
  });
}

addCircularSafeProperties(formControlDefaultInput);
addCircularSafeProperties(formControlDefaultInputDate);
addCircularSafeProperties(formControlDefaultInputTel);
addCircularSafeProperties(formControlDefaultInputAutocomplete);
addCircularSafeProperties(formControlDefaultInputSelect);

const fields: IFilter = {
  fields: [
    {
      id: 'empleado',
      fieldType: 'searchBar',
      inputPlaceholder: 'Empleados',
      twClass: 'h-12 !w-full',
      control: formControlDefaultInput,
    },
    {
      id: 'fechaNacimiento',
      fieldType: 'date',
      inputType: 'date',
      label: 'Fecha Nacimiento',
      twClass: 'max-w-max !w-full',
      requiredErrorMessage: '',
      control: formControlDefaultInputDate,
    },
    {
      id: 'tel',
      fieldType: 'tel',
      inputType: 'tel',
      label: 'Telefono',
      twClass: 'max-w-max !w-full',
      requiredErrorMessage: 'Ninguna',
      control: formControlDefaultInputTel,
    },
    {
      id: 'autocomplete',
      fieldType: 'autocomplete',
      control: formControlDefaultInputAutocomplete,
      label: 'Autocomplete Empleados',
      twClass: 'max-w-max !w-full',
      items: valuelistTest,
    },
    {
      id: 'select',
      fieldType: 'select',
      control: formControlDefaultInputSelect,
      label: 'Empleados select',
      twClass: '!w-full',
      items: valuelistTest,
    },
  ],
};

export const Default: Story = {
  args: {
    fields: fields,
  },
};
