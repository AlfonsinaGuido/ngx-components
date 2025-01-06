import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { ButtonComponent } from '../button/button.component';
import { MatIconModule } from '@angular/material/icon';
import { ClassUtilityService, IStepperConfig } from '../public-api';
import { StepperSelectionEvent } from '@angular/cdk/stepper';

@Component({
  selector: 'evo-stepper',
  standalone: true,
  imports: [CommonModule, MatStepperModule, ButtonComponent, MatIconModule],
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StepperComponent implements OnInit, AfterViewInit, OnChanges {
  @ViewChild(MatStepper) stepper!: MatStepper;

  @Input() stepperConfig!: IStepperConfig;
  @Input() animationDuration: number = 300;

  @Output() stepChanged = new EventEmitter<number>();
  @Output() continueClicked = new EventEmitter<void>();
  @Output() backClicked = new EventEmitter<void>();

  constructor(
    private elementRef: ElementRef,
    private _classUtility: ClassUtilityService,
  ) {}

  ngOnInit() {
    if (!this.stepperConfig?.steps || !this.stepperConfig.steps.length) {
      console.error(
        'La propiedad "steps" en config es obligatoria y no puede estar vacía.',
      );
      this.stepperConfig.steps = []; // Ensure steps is an array
    }

    if (this.stepperConfig.highestCompletedIndex < 0) {
      this.stepperConfig.highestCompletedIndex = 0;
    }

    if (
      this.stepperConfig.highestCompletedIndex >=
      this.stepperConfig.steps.length
    ) {
      this.stepperConfig.highestCompletedIndex =
        this.stepperConfig.steps.length - 1;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['config']) {
      this.applyStepAccessibility();
    }
  }

  ngAfterViewInit(): void {
    this.applyStepAccessibility();
  }

  /**
   * Recupera las clases combinadas para un contexto específico utilizando el servicio de utilidades.
   * @param context - Contexto para el cual se recuperan las clases.
   * @returns Cadena de clases CSS combinadas.
   */
  getClasses(context: string): string {
    const baseClasses = this._classUtility.getCombinedClasses(
      context,
      this.stepperConfig.twClass,
    );

    return baseClasses;
  }

  /**
   * Retrocede al paso anterior si es posible y actualiza la accesibilidad de los pasos.
   */
  onBack() {
    if (this.stepperConfig.selectedStepIndex > 0) {
      this.stepperConfig.selectedStepIndex--;
      this.emitStepChanged();
      this.applyStepAccessibility();
      this.backClicked.emit();
    }
  }

  /**
   * Avanza al siguiente paso si está permitido y actualiza el índice de completado más alto y la accesibilidad de los pasos.
   */
  onContinue() {
    if (this.canContinue()) {
      this.stepperConfig.selectedStepIndex++;
      if (
        this.stepperConfig.selectedStepIndex >
        this.stepperConfig.highestCompletedIndex
      ) {
        this.stepperConfig.highestCompletedIndex =
          this.stepperConfig.selectedStepIndex;
      }
      this.emitStepChanged();
      this.applyStepAccessibility();
      this.continueClicked.emit();
    }
  }

  /**
   * Determina si la acción "Continuar" está permitida según el paso actual y la configuración.
   * @returns True si el usuario puede avanzar al siguiente paso, de lo contrario False.
   */
  canContinue(): boolean {
    return (
      this.stepperConfig.canContinue &&
      this.stepperConfig.selectedStepIndex < this.stepperConfig.steps.length - 1
    );
  }

  /**
   * Emite el índice del paso seleccionado actualmente para notificar a los oyentes de un cambio de paso.
   */
  private emitStepChanged() {
    this.stepChanged.emit(this.stepperConfig.selectedStepIndex);
  }

  /**
   * Maneja los cambios en la selección de pasos y aplica reglas de validación para la navegación entre pasos.
   * @param event - Evento de cambio de selección emitido por el stepper.
   */
  onStepSelectionChange(event: StepperSelectionEvent) {
    const nextIndex = event.selectedIndex;

    // Validaciones:
    // 1. No se puede superar highestCompletedIndex+1
    if (nextIndex < 0 || nextIndex >= this.stepperConfig.steps.length) {
      this.stepper.selectedIndex = this.stepperConfig.selectedStepIndex;
      return;
    }

    // 2. Si canContinue es false, no se puede ir a más de selectedStepIndex
    if (nextIndex > this.stepperConfig.highestCompletedIndex + 1) {
      this.stepper.selectedIndex = this.stepperConfig.selectedStepIndex;
      return;
    }

    // Actualizar índices
    if (
      nextIndex > this.stepperConfig.selectedStepIndex &&
      !this.stepperConfig.canContinue
    ) {
      this.stepper.selectedIndex = this.stepperConfig.selectedStepIndex;
      return;
    }

    this.stepperConfig.selectedStepIndex = nextIndex;
    if (nextIndex > this.stepperConfig.highestCompletedIndex) {
      this.stepperConfig.highestCompletedIndex = nextIndex;
    }

    this.emitStepChanged();
    this.applyStepAccessibility();
  }

  /**
   * Determina si un paso específico es accesible para el usuario.
   * @param i - Índice del paso.
   * @returns True si el paso está permitido, de lo contrario False.
   */
  isStepAllowed(i: number): boolean {
    if (i <= this.stepperConfig.highestCompletedIndex) return true;

    if (
      i === this.stepperConfig.highestCompletedIndex + 1 &&
      this.canContinue()
    )
      return true;

    return false;
  }

  /**
   * Aplica atributos y estilos de accesibilidad a los encabezados de los pasos según la configuración actual.
   */
  private applyStepAccessibility() {
    const headers: NodeListOf<HTMLElement> =
      this.elementRef.nativeElement.querySelectorAll('.mat-step-header');
    headers.forEach((header, i) => {
      if (this.isStepAllowed(i)) {
        header.setAttribute('tabindex', '0');
        header.style.pointerEvents = 'auto';
        header.style.opacity = '1';
      } else {
        header.setAttribute('tabindex', '-1');
        header.style.pointerEvents = 'none';
        header.style.opacity = '0.5';
      }
    });
  }
}
