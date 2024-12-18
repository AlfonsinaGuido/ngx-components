import { Orientation } from '../enums/orientation.enum';

export interface IStep {
  title: string;
  text: string;
}

export interface IStepperConfig {
  steps: IStep[];
  selectedStepIndex: number;
  canContinue: boolean;
  continueButtonText: string;
  backButtonText: string;
  twClass?: string;
  orientation: Orientation;
  highestCompletedIndex: number;
}
