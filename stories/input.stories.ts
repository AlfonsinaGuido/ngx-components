import { InputComponent } from '@aseinfo/ngx-evolution-components/public-api';
import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

const meta: Meta<InputComponent> = {
  title: 'Evolution Components/Input',
  component: InputComponent,
  decorators: [
    applicationConfig({
      providers: [provideAnimationsAsync()],
    }),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<InputComponent>;

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

export const Default: Story = {
  args: {
    inputConfiguration: {
      control: formControlDefaultInput,
      label: 'Input',
      detail: '',
      twClass: '',
    },
  },
};

export const Required: Story = {
  args: {
    inputConfiguration: {
      control: formControlRequiredInput,
      label: 'Input',
      requiredErrorMessage: 'Este campo es requerido',
      detail: '',
      twClass: '',
    },
  },
};

export const Unlabeled: Story = {
  args: {
    inputConfiguration: {
      control: formControlUnlabeledInput,
      requiredErrorMessage: 'Este campo es requerido',
      detail: '',
      twClass: '',
    },
  },
};

export const ErrorEmail: Story = {
  args: {
    inputConfiguration: {
      control: formControlEmailInput,
      label: 'Input',
      inputType: 'email',
      requiredErrorMessage: 'Este campo es requerido',
      emailErrorMessage:
        'Por favor, introduce una dirección de correo electrónico válida',
      detail: '',
      twClass: '',
    },
  },
};

export const ErrorPattern: Story = {
  args: {
    inputConfiguration: {
      control: formControlPatternInput,
      label: 'Input',
      inputType: 'tel',
      requiredErrorMessage: 'Este campo es requerido',
      patternErrorMessage: 'Formato requerido (123) 456-7890',
      detail: '',
      twClass: '',
    },
  },
};
