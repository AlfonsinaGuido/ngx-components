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
  emailFieldInput: new FormControl('', [Validators.required, Validators.email]),
  patternFieldInput: new FormControl('', [
    Validators.required,
    Validators.pattern(/^\(\d{3}\) \d{3}-\d{4}$/),
  ]),
});

const formControlDefaultInput = form.controls['defaultFieldInput'];

const formControlRequiredInput = form.controls['requiredFieldInput'];

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
addCircularSafeProperties(formControlEmailInput);
addCircularSafeProperties(formControlPatternInput);

export const Default: Story = {
  args: {
    control: formControlDefaultInput,
    label: 'Input',
    inputType: 'text',
    detail: '',
    twClass: '',
  },
};

export const Required: Story = {
  args: {
    ...Default.args,
    control: formControlRequiredInput,
    requiredErrorMessage: 'Este campo es requerido',
  },
};

export const ErrorEmail: Story = {
  args: {
    ...Default.args,
    inputType: 'email',
    control: formControlEmailInput,
    requiredErrorMessage: 'Este campo es requerido',
    emailErrorMessage:
      'Por favor, introduce una dirección de correo electrónico válida',
  },
};

export const ErrorPattern: Story = {
  args: {
    ...Default.args,
    inputType: 'tel',
    control: formControlPatternInput,
    requiredErrorMessage: 'Este campo es requerido',
    patternErrorMessage: 'Formato requerido (123) 456-7890',
  },
};
