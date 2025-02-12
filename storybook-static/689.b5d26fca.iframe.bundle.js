"use strict";
(self.webpackChunk_aseinfo_evolution_web_components =
  self.webpackChunk_aseinfo_evolution_web_components || []).push([
  [689],
  {
    "./node_modules/@angular/material/fesm2022/stepper.mjs": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        M6: () => MatStepper,
        aP: () => MatStepperModule,
      });
      var portal = __webpack_require__(
          "./node_modules/@angular/cdk/fesm2022/portal.mjs",
        ),
        a11y = __webpack_require__(
          "./node_modules/@angular/cdk/fesm2022/a11y.mjs",
        ),
        bidi = __webpack_require__(
          "./node_modules/@angular/cdk/fesm2022/bidi.mjs",
        ),
        keycodes = __webpack_require__(
          "./node_modules/@angular/cdk/fesm2022/keycodes.mjs",
        ),
        core = __webpack_require__(
          "./node_modules/@angular/core/fesm2022/core.mjs",
        ),
        platform = __webpack_require__(
          "./node_modules/@angular/cdk/fesm2022/platform.mjs",
        ),
        Subject = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/Subject.js",
        ),
        of = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/observable/of.js",
        ),
        startWith = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/startWith.js",
        ),
        takeUntil = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js",
        );
      const _c0 = ["*"];
      function CdkStep_ng_template_0_Template(rf, ctx) {
        1 & rf && core["ɵɵprojection"](0);
      }
      class CdkStepHeader {
        constructor(_elementRef) {
          this._elementRef = _elementRef;
        }
        focus() {
          this._elementRef.nativeElement.focus();
        }
        static #_ = (this.ɵfac = function CdkStepHeader_Factory(t) {
          return new (t || CdkStepHeader)(
            core["ɵɵdirectiveInject"](core.ElementRef),
          );
        });
        static #_2 = (this.ɵdir = core["ɵɵdefineDirective"]({
          type: CdkStepHeader,
          selectors: [["", "cdkStepHeader", ""]],
          hostAttrs: ["role", "tab"],
          standalone: !0,
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          CdkStepHeader,
          [
            {
              type: core.Directive,
              args: [
                {
                  selector: "[cdkStepHeader]",
                  host: { role: "tab" },
                  standalone: !0,
                },
              ],
            },
          ],
          () => [{ type: core.ElementRef }],
          null,
        );
      class CdkStepLabel {
        constructor(template) {
          this.template = template;
        }
        static #_ = (this.ɵfac = function CdkStepLabel_Factory(t) {
          return new (t || CdkStepLabel)(
            core["ɵɵdirectiveInject"](core.TemplateRef),
          );
        });
        static #_2 = (this.ɵdir = core["ɵɵdefineDirective"]({
          type: CdkStepLabel,
          selectors: [["", "cdkStepLabel", ""]],
          standalone: !0,
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          CdkStepLabel,
          [
            {
              type: core.Directive,
              args: [{ selector: "[cdkStepLabel]", standalone: !0 }],
            },
          ],
          () => [{ type: core.TemplateRef }],
          null,
        );
      let nextId = 0;
      const STEP_STATE_NUMBER = "number",
        STEP_STATE_EDIT = "edit",
        STEP_STATE_DONE = "done",
        STEP_STATE_ERROR = "error",
        STEPPER_GLOBAL_OPTIONS = new core.InjectionToken(
          "STEPPER_GLOBAL_OPTIONS",
        );
      class CdkStep {
        get completed() {
          return null == this._completedOverride
            ? this._getDefaultCompleted()
            : this._completedOverride;
        }
        set completed(value) {
          this._completedOverride = value;
        }
        _getDefaultCompleted() {
          return this.stepControl
            ? this.stepControl.valid && this.interacted
            : this.interacted;
        }
        get hasError() {
          return null == this._customError
            ? this._getDefaultError()
            : this._customError;
        }
        set hasError(value) {
          this._customError = value;
        }
        _getDefaultError() {
          return (
            this.stepControl && this.stepControl.invalid && this.interacted
          );
        }
        constructor(_stepper, stepperOptions) {
          (this._stepper = _stepper),
            (this.interacted = !1),
            (this.interactedStream = new core.EventEmitter()),
            (this.editable = !0),
            (this.optional = !1),
            (this._completedOverride = null),
            (this._customError = null),
            (this._stepperOptions = stepperOptions || {}),
            (this._displayDefaultIndicatorType =
              !1 !== this._stepperOptions.displayDefaultIndicatorType);
        }
        select() {
          this._stepper.selected = this;
        }
        reset() {
          (this.interacted = !1),
            null != this._completedOverride && (this._completedOverride = !1),
            null != this._customError && (this._customError = !1),
            this.stepControl && this.stepControl.reset();
        }
        ngOnChanges() {
          this._stepper._stateChanged();
        }
        _markAsInteracted() {
          this.interacted ||
            ((this.interacted = !0), this.interactedStream.emit(this));
        }
        _showError() {
          return this._stepperOptions.showError ?? null != this._customError;
        }
        static #_ = (this.ɵfac = function CdkStep_Factory(t) {
          return new (t || CdkStep)(
            core["ɵɵdirectiveInject"]((0, core.forwardRef)(() => CdkStepper)),
            core["ɵɵdirectiveInject"](STEPPER_GLOBAL_OPTIONS, 8),
          );
        });
        static #_2 = (this.ɵcmp = core["ɵɵdefineComponent"]({
          type: CdkStep,
          selectors: [["cdk-step"]],
          contentQueries: function CdkStep_ContentQueries(rf, ctx, dirIndex) {
            if (
              (1 & rf && core["ɵɵcontentQuery"](dirIndex, CdkStepLabel, 5),
              2 & rf)
            ) {
              let _t;
              core["ɵɵqueryRefresh"]((_t = core["ɵɵloadQuery"]())) &&
                (ctx.stepLabel = _t.first);
            }
          },
          viewQuery: function CdkStep_Query(rf, ctx) {
            if ((1 & rf && core["ɵɵviewQuery"](core.TemplateRef, 7), 2 & rf)) {
              let _t;
              core["ɵɵqueryRefresh"]((_t = core["ɵɵloadQuery"]())) &&
                (ctx.content = _t.first);
            }
          },
          inputs: {
            stepControl: "stepControl",
            label: "label",
            errorMessage: "errorMessage",
            ariaLabel: [core["ɵɵInputFlags"].None, "aria-label", "ariaLabel"],
            ariaLabelledby: [
              core["ɵɵInputFlags"].None,
              "aria-labelledby",
              "ariaLabelledby",
            ],
            state: "state",
            editable: [
              core["ɵɵInputFlags"].HasDecoratorInputTransform,
              "editable",
              "editable",
              core.booleanAttribute,
            ],
            optional: [
              core["ɵɵInputFlags"].HasDecoratorInputTransform,
              "optional",
              "optional",
              core.booleanAttribute,
            ],
            completed: [
              core["ɵɵInputFlags"].HasDecoratorInputTransform,
              "completed",
              "completed",
              core.booleanAttribute,
            ],
            hasError: [
              core["ɵɵInputFlags"].HasDecoratorInputTransform,
              "hasError",
              "hasError",
              core.booleanAttribute,
            ],
          },
          outputs: { interactedStream: "interacted" },
          exportAs: ["cdkStep"],
          standalone: !0,
          features: [
            core["ɵɵInputTransformsFeature"],
            core["ɵɵNgOnChangesFeature"],
            core["ɵɵStandaloneFeature"],
          ],
          ngContentSelectors: _c0,
          decls: 1,
          vars: 0,
          template: function CdkStep_Template(rf, ctx) {
            1 & rf &&
              (core["ɵɵprojectionDef"](),
              core["ɵɵtemplate"](
                0,
                CdkStep_ng_template_0_Template,
                1,
                0,
                "ng-template",
              ));
          },
          encapsulation: 2,
          changeDetection: 0,
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          CdkStep,
          [
            {
              type: core.Component,
              args: [
                {
                  selector: "cdk-step",
                  exportAs: "cdkStep",
                  template:
                    "<ng-template><ng-content></ng-content></ng-template>",
                  encapsulation: core.ViewEncapsulation.None,
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  standalone: !0,
                },
              ],
            },
          ],
          () => [
            {
              type: CdkStepper,
              decorators: [
                {
                  type: core.Inject,
                  args: [(0, core.forwardRef)(() => CdkStepper)],
                },
              ],
            },
            {
              type: void 0,
              decorators: [
                { type: core.Optional },
                { type: core.Inject, args: [STEPPER_GLOBAL_OPTIONS] },
              ],
            },
          ],
          {
            stepLabel: [{ type: core.ContentChild, args: [CdkStepLabel] }],
            content: [
              {
                type: core.ViewChild,
                args: [core.TemplateRef, { static: !0 }],
              },
            ],
            stepControl: [{ type: core.Input }],
            interactedStream: [{ type: core.Output, args: ["interacted"] }],
            label: [{ type: core.Input }],
            errorMessage: [{ type: core.Input }],
            ariaLabel: [{ type: core.Input, args: ["aria-label"] }],
            ariaLabelledby: [{ type: core.Input, args: ["aria-labelledby"] }],
            state: [{ type: core.Input }],
            editable: [
              {
                type: core.Input,
                args: [{ transform: core.booleanAttribute }],
              },
            ],
            optional: [
              {
                type: core.Input,
                args: [{ transform: core.booleanAttribute }],
              },
            ],
            completed: [
              {
                type: core.Input,
                args: [{ transform: core.booleanAttribute }],
              },
            ],
            hasError: [
              {
                type: core.Input,
                args: [{ transform: core.booleanAttribute }],
              },
            ],
          },
        );
      class CdkStepper {
        get selectedIndex() {
          return this._selectedIndex;
        }
        set selectedIndex(index) {
          if (this.steps && this._steps) {
            if (
              !this._isValidIndex(index) &&
              ("undefined" == typeof ngDevMode || ngDevMode)
            )
              throw Error(
                "cdkStepper: Cannot assign out-of-bounds value to `selectedIndex`.",
              );
            this.selected?._markAsInteracted(),
              this._selectedIndex !== index &&
                !this._anyControlsInvalidOrPending(index) &&
                (index >= this._selectedIndex ||
                  this.steps.toArray()[index].editable) &&
                this._updateSelectedItemIndex(index);
          } else this._selectedIndex = index;
        }
        get selected() {
          return this.steps ? this.steps.toArray()[this.selectedIndex] : void 0;
        }
        set selected(step) {
          this.selectedIndex =
            step && this.steps ? this.steps.toArray().indexOf(step) : -1;
        }
        get orientation() {
          return this._orientation;
        }
        set orientation(value) {
          (this._orientation = value),
            this._keyManager &&
              this._keyManager.withVerticalOrientation("vertical" === value);
        }
        constructor(_dir, _changeDetectorRef, _elementRef) {
          (this._dir = _dir),
            (this._changeDetectorRef = _changeDetectorRef),
            (this._elementRef = _elementRef),
            (this._destroyed = new Subject.B()),
            (this.steps = new core.QueryList()),
            (this._sortedHeaders = new core.QueryList()),
            (this.linear = !1),
            (this._selectedIndex = 0),
            (this.selectionChange = new core.EventEmitter()),
            (this.selectedIndexChange = new core.EventEmitter()),
            (this._orientation = "horizontal"),
            (this._groupId = nextId++);
        }
        ngAfterContentInit() {
          this._steps.changes
            .pipe(
              (0, startWith.Z)(this._steps),
              (0, takeUntil.Q)(this._destroyed),
            )
            .subscribe((steps) => {
              this.steps.reset(steps.filter((step) => step._stepper === this)),
                this.steps.notifyOnChanges();
            });
        }
        ngAfterViewInit() {
          this._stepHeader.changes
            .pipe(
              (0, startWith.Z)(this._stepHeader),
              (0, takeUntil.Q)(this._destroyed),
            )
            .subscribe((headers) => {
              this._sortedHeaders.reset(
                headers
                  .toArray()
                  .sort((a, b) =>
                    a._elementRef.nativeElement.compareDocumentPosition(
                      b._elementRef.nativeElement,
                    ) & Node.DOCUMENT_POSITION_FOLLOWING
                      ? -1
                      : 1,
                  ),
              ),
                this._sortedHeaders.notifyOnChanges();
            }),
            (this._keyManager = new a11y.Bu(this._sortedHeaders)
              .withWrap()
              .withHomeAndEnd()
              .withVerticalOrientation("vertical" === this._orientation)),
            (this._dir ? this._dir.change : (0, of.of)())
              .pipe(
                (0, startWith.Z)(this._layoutDirection()),
                (0, takeUntil.Q)(this._destroyed),
              )
              .subscribe((direction) =>
                this._keyManager.withHorizontalOrientation(direction),
              ),
            this._keyManager.updateActiveItem(this._selectedIndex),
            this.steps.changes.subscribe(() => {
              this.selected ||
                (this._selectedIndex = Math.max(this._selectedIndex - 1, 0));
            }),
            this._isValidIndex(this._selectedIndex) ||
              (this._selectedIndex = 0);
        }
        ngOnDestroy() {
          this._keyManager?.destroy(),
            this.steps.destroy(),
            this._sortedHeaders.destroy(),
            this._destroyed.next(),
            this._destroyed.complete();
        }
        next() {
          this.selectedIndex = Math.min(
            this._selectedIndex + 1,
            this.steps.length - 1,
          );
        }
        previous() {
          this.selectedIndex = Math.max(this._selectedIndex - 1, 0);
        }
        reset() {
          this._updateSelectedItemIndex(0),
            this.steps.forEach((step) => step.reset()),
            this._stateChanged();
        }
        _getStepLabelId(i) {
          return `cdk-step-label-${this._groupId}-${i}`;
        }
        _getStepContentId(i) {
          return `cdk-step-content-${this._groupId}-${i}`;
        }
        _stateChanged() {
          this._changeDetectorRef.markForCheck();
        }
        _getAnimationDirection(index) {
          const position = index - this._selectedIndex;
          return position < 0
            ? "rtl" === this._layoutDirection()
              ? "next"
              : "previous"
            : position > 0
              ? "rtl" === this._layoutDirection()
                ? "previous"
                : "next"
              : "current";
        }
        _getIndicatorType(index, state = STEP_STATE_NUMBER) {
          const step = this.steps.toArray()[index],
            isCurrentStep = this._isCurrentStep(index);
          return step._displayDefaultIndicatorType
            ? this._getDefaultIndicatorLogic(step, isCurrentStep)
            : this._getGuidelineLogic(step, isCurrentStep, state);
        }
        _getDefaultIndicatorLogic(step, isCurrentStep) {
          return step._showError() && step.hasError && !isCurrentStep
            ? STEP_STATE_ERROR
            : !step.completed || isCurrentStep
              ? STEP_STATE_NUMBER
              : step.editable
                ? STEP_STATE_EDIT
                : STEP_STATE_DONE;
        }
        _getGuidelineLogic(step, isCurrentStep, state = STEP_STATE_NUMBER) {
          return step._showError() && step.hasError && !isCurrentStep
            ? STEP_STATE_ERROR
            : step.completed && !isCurrentStep
              ? STEP_STATE_DONE
              : step.completed && isCurrentStep
                ? state
                : step.editable && isCurrentStep
                  ? STEP_STATE_EDIT
                  : state;
        }
        _isCurrentStep(index) {
          return this._selectedIndex === index;
        }
        _getFocusIndex() {
          return this._keyManager
            ? this._keyManager.activeItemIndex
            : this._selectedIndex;
        }
        _updateSelectedItemIndex(newIndex) {
          const stepsArray = this.steps.toArray();
          this.selectionChange.emit({
            selectedIndex: newIndex,
            previouslySelectedIndex: this._selectedIndex,
            selectedStep: stepsArray[newIndex],
            previouslySelectedStep: stepsArray[this._selectedIndex],
          }),
            this._containsFocus()
              ? this._keyManager.setActiveItem(newIndex)
              : this._keyManager.updateActiveItem(newIndex),
            (this._selectedIndex = newIndex),
            this.selectedIndexChange.emit(this._selectedIndex),
            this._stateChanged();
        }
        _onKeydown(event) {
          const hasModifier = (0, keycodes.rp)(event),
            keyCode = event.keyCode,
            manager = this._keyManager;
          null == manager.activeItemIndex ||
          hasModifier ||
          (keyCode !== keycodes.t6 && keyCode !== keycodes.Fm)
            ? manager.setFocusOrigin("keyboard").onKeydown(event)
            : ((this.selectedIndex = manager.activeItemIndex),
              event.preventDefault());
        }
        _anyControlsInvalidOrPending(index) {
          return (
            !!(this.linear && index >= 0) &&
            this.steps
              .toArray()
              .slice(0, index)
              .some((step) => {
                const control = step.stepControl;
                return (
                  (control
                    ? control.invalid || control.pending || !step.interacted
                    : !step.completed) &&
                  !step.optional &&
                  !step._completedOverride
                );
              })
          );
        }
        _layoutDirection() {
          return this._dir && "rtl" === this._dir.value ? "rtl" : "ltr";
        }
        _containsFocus() {
          const stepperElement = this._elementRef.nativeElement,
            focusedElement = (0, platform.vc)();
          return (
            stepperElement === focusedElement ||
            stepperElement.contains(focusedElement)
          );
        }
        _isValidIndex(index) {
          return index > -1 && (!this.steps || index < this.steps.length);
        }
        static #_ = (this.ɵfac = function CdkStepper_Factory(t) {
          return new (t || CdkStepper)(
            core["ɵɵdirectiveInject"](bidi.dS, 8),
            core["ɵɵdirectiveInject"](core.ChangeDetectorRef),
            core["ɵɵdirectiveInject"](core.ElementRef),
          );
        });
        static #_2 = (this.ɵdir = core["ɵɵdefineDirective"]({
          type: CdkStepper,
          selectors: [["", "cdkStepper", ""]],
          contentQueries: function CdkStepper_ContentQueries(
            rf,
            ctx,
            dirIndex,
          ) {
            if (
              (1 & rf &&
                (core["ɵɵcontentQuery"](dirIndex, CdkStep, 5),
                core["ɵɵcontentQuery"](dirIndex, CdkStepHeader, 5)),
              2 & rf)
            ) {
              let _t;
              core["ɵɵqueryRefresh"]((_t = core["ɵɵloadQuery"]())) &&
                (ctx._steps = _t),
                core["ɵɵqueryRefresh"]((_t = core["ɵɵloadQuery"]())) &&
                  (ctx._stepHeader = _t);
            }
          },
          inputs: {
            linear: [
              core["ɵɵInputFlags"].HasDecoratorInputTransform,
              "linear",
              "linear",
              core.booleanAttribute,
            ],
            selectedIndex: [
              core["ɵɵInputFlags"].HasDecoratorInputTransform,
              "selectedIndex",
              "selectedIndex",
              core.numberAttribute,
            ],
            selected: "selected",
            orientation: "orientation",
          },
          outputs: {
            selectionChange: "selectionChange",
            selectedIndexChange: "selectedIndexChange",
          },
          exportAs: ["cdkStepper"],
          standalone: !0,
          features: [core["ɵɵInputTransformsFeature"]],
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          CdkStepper,
          [
            {
              type: core.Directive,
              args: [
                {
                  selector: "[cdkStepper]",
                  exportAs: "cdkStepper",
                  standalone: !0,
                },
              ],
            },
          ],
          () => [
            { type: bidi.dS, decorators: [{ type: core.Optional }] },
            { type: core.ChangeDetectorRef },
            { type: core.ElementRef },
          ],
          {
            _steps: [
              {
                type: core.ContentChildren,
                args: [CdkStep, { descendants: !0 }],
              },
            ],
            _stepHeader: [
              {
                type: core.ContentChildren,
                args: [CdkStepHeader, { descendants: !0 }],
              },
            ],
            linear: [
              {
                type: core.Input,
                args: [{ transform: core.booleanAttribute }],
              },
            ],
            selectedIndex: [
              { type: core.Input, args: [{ transform: core.numberAttribute }] },
            ],
            selected: [{ type: core.Input }],
            selectionChange: [{ type: core.Output }],
            selectedIndexChange: [{ type: core.Output }],
            orientation: [{ type: core.Input }],
          },
        );
      class CdkStepperNext {
        constructor(_stepper) {
          (this._stepper = _stepper), (this.type = "submit");
        }
        static #_ = (this.ɵfac = function CdkStepperNext_Factory(t) {
          return new (t || CdkStepperNext)(
            core["ɵɵdirectiveInject"](CdkStepper),
          );
        });
        static #_2 = (this.ɵdir = core["ɵɵdefineDirective"]({
          type: CdkStepperNext,
          selectors: [["button", "cdkStepperNext", ""]],
          hostVars: 1,
          hostBindings: function CdkStepperNext_HostBindings(rf, ctx) {
            1 & rf &&
              core["ɵɵlistener"](
                "click",
                function CdkStepperNext_click_HostBindingHandler() {
                  return ctx._stepper.next();
                },
              ),
              2 & rf && core["ɵɵhostProperty"]("type", ctx.type);
          },
          inputs: { type: "type" },
          standalone: !0,
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          CdkStepperNext,
          [
            {
              type: core.Directive,
              args: [
                {
                  selector: "button[cdkStepperNext]",
                  host: { "[type]": "type", "(click)": "_stepper.next()" },
                  standalone: !0,
                },
              ],
            },
          ],
          () => [{ type: CdkStepper }],
          { type: [{ type: core.Input }] },
        );
      class CdkStepperPrevious {
        constructor(_stepper) {
          (this._stepper = _stepper), (this.type = "button");
        }
        static #_ = (this.ɵfac = function CdkStepperPrevious_Factory(t) {
          return new (t || CdkStepperPrevious)(
            core["ɵɵdirectiveInject"](CdkStepper),
          );
        });
        static #_2 = (this.ɵdir = core["ɵɵdefineDirective"]({
          type: CdkStepperPrevious,
          selectors: [["button", "cdkStepperPrevious", ""]],
          hostVars: 1,
          hostBindings: function CdkStepperPrevious_HostBindings(rf, ctx) {
            1 & rf &&
              core["ɵɵlistener"](
                "click",
                function CdkStepperPrevious_click_HostBindingHandler() {
                  return ctx._stepper.previous();
                },
              ),
              2 & rf && core["ɵɵhostProperty"]("type", ctx.type);
          },
          inputs: { type: "type" },
          standalone: !0,
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          CdkStepperPrevious,
          [
            {
              type: core.Directive,
              args: [
                {
                  selector: "button[cdkStepperPrevious]",
                  host: { "[type]": "type", "(click)": "_stepper.previous()" },
                  standalone: !0,
                },
              ],
            },
          ],
          () => [{ type: CdkStepper }],
          { type: [{ type: core.Input }] },
        );
      class CdkStepperModule {
        static #_ = (this.ɵfac = function CdkStepperModule_Factory(t) {
          return new (t || CdkStepperModule)();
        });
        static #_2 = (this.ɵmod = core["ɵɵdefineNgModule"]({
          type: CdkStepperModule,
          imports: [
            bidi.jI,
            CdkStep,
            CdkStepper,
            CdkStepHeader,
            CdkStepLabel,
            CdkStepperNext,
            CdkStepperPrevious,
          ],
          exports: [
            CdkStep,
            CdkStepper,
            CdkStepHeader,
            CdkStepLabel,
            CdkStepperNext,
            CdkStepperPrevious,
          ],
        }));
        static #_3 = (this.ɵinj = core["ɵɵdefineInjector"]({
          imports: [bidi.jI],
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          CdkStepperModule,
          [
            {
              type: core.NgModule,
              args: [
                {
                  imports: [
                    bidi.jI,
                    CdkStep,
                    CdkStepper,
                    CdkStepHeader,
                    CdkStepLabel,
                    CdkStepperNext,
                    CdkStepperPrevious,
                  ],
                  exports: [
                    CdkStep,
                    CdkStepper,
                    CdkStepHeader,
                    CdkStepLabel,
                    CdkStepperNext,
                    CdkStepperPrevious,
                  ],
                },
              ],
            },
          ],
          null,
          null,
        );
      var common = __webpack_require__(
          "./node_modules/@angular/common/fesm2022/common.mjs",
        ),
        fesm2022_core = __webpack_require__(
          "./node_modules/@angular/material/fesm2022/core.mjs",
        ),
        icon = __webpack_require__(
          "./node_modules/@angular/material/fesm2022/icon.mjs",
        ),
        Subscription = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/Subscription.js",
        ),
        switchMap = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/switchMap.js",
        ),
        map = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/map.js",
        ),
        distinctUntilChanged = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/distinctUntilChanged.js",
        ),
        animations = __webpack_require__(
          "./node_modules/@angular/animations/fesm2022/animations.mjs",
        );
      function MatStepHeader_Conditional_3_Template(rf, ctx) {
        if ((1 & rf && core["ɵɵelementContainer"](0, 2), 2 & rf)) {
          const ctx_r0 = core["ɵɵnextContext"]();
          core["ɵɵproperty"](
            "ngTemplateOutlet",
            ctx_r0.iconOverrides[ctx_r0.state],
          )("ngTemplateOutletContext", ctx_r0._getIconContext());
        }
      }
      function MatStepHeader_Conditional_4_Case_0_Template(rf, ctx) {
        if (
          (1 & rf &&
            (core["ɵɵelementStart"](0, "span", 7),
            core["ɵɵtext"](1),
            core["ɵɵelementEnd"]()),
          2 & rf)
        ) {
          const ctx_r0 = core["ɵɵnextContext"](2);
          core["ɵɵadvance"](),
            core["ɵɵtextInterpolate"](
              ctx_r0._getDefaultTextForState(ctx_r0.state),
            );
        }
      }
      function MatStepHeader_Conditional_4_Case_1_Conditional_0_Template(
        rf,
        ctx,
      ) {
        if (
          (1 & rf &&
            (core["ɵɵelementStart"](0, "span", 8),
            core["ɵɵtext"](1),
            core["ɵɵelementEnd"]()),
          2 & rf)
        ) {
          const ctx_r0 = core["ɵɵnextContext"](3);
          core["ɵɵadvance"](),
            core["ɵɵtextInterpolate"](ctx_r0._intl.completedLabel);
        }
      }
      function MatStepHeader_Conditional_4_Case_1_Conditional_1_Template(
        rf,
        ctx,
      ) {
        if (
          (1 & rf &&
            (core["ɵɵelementStart"](0, "span", 8),
            core["ɵɵtext"](1),
            core["ɵɵelementEnd"]()),
          2 & rf)
        ) {
          const ctx_r0 = core["ɵɵnextContext"](3);
          core["ɵɵadvance"](),
            core["ɵɵtextInterpolate"](ctx_r0._intl.editableLabel);
        }
      }
      function MatStepHeader_Conditional_4_Case_1_Template(rf, ctx) {
        if (
          (1 & rf &&
            (core["ɵɵtemplate"](
              0,
              MatStepHeader_Conditional_4_Case_1_Conditional_0_Template,
              2,
              1,
              "span",
              8,
            )(
              1,
              MatStepHeader_Conditional_4_Case_1_Conditional_1_Template,
              2,
              1,
            ),
            core["ɵɵelementStart"](2, "mat-icon", 7),
            core["ɵɵtext"](3),
            core["ɵɵelementEnd"]()),
          2 & rf)
        ) {
          const ctx_r0 = core["ɵɵnextContext"](2);
          core["ɵɵconditional"](
            0,
            "done" === ctx_r0.state ? 0 : "edit" === ctx_r0.state ? 1 : -1,
          ),
            core["ɵɵadvance"](3),
            core["ɵɵtextInterpolate"](
              ctx_r0._getDefaultTextForState(ctx_r0.state),
            );
        }
      }
      function MatStepHeader_Conditional_4_Template(rf, ctx) {
        if (
          (1 & rf &&
            core["ɵɵtemplate"](
              0,
              MatStepHeader_Conditional_4_Case_0_Template,
              2,
              1,
            )(1, MatStepHeader_Conditional_4_Case_1_Template, 4, 2),
          2 & rf)
        ) {
          let tmp_1_0;
          const ctx_r0 = core["ɵɵnextContext"]();
          core["ɵɵconditional"](
            0,
            "number" === (tmp_1_0 = ctx_r0.state) ? 0 : 1,
          );
        }
      }
      function MatStepHeader_Conditional_6_Template(rf, ctx) {
        1 & rf &&
          (core["ɵɵelementStart"](0, "div", 4),
          core["ɵɵelementContainer"](1, 9),
          core["ɵɵelementEnd"]()),
          2 & rf &&
            (core["ɵɵadvance"](),
            core["ɵɵproperty"]("ngTemplateOutlet", ctx.template));
      }
      function MatStepHeader_Conditional_7_Template(rf, ctx) {
        if (
          (1 & rf &&
            (core["ɵɵelementStart"](0, "div", 4),
            core["ɵɵtext"](1),
            core["ɵɵelementEnd"]()),
          2 & rf)
        ) {
          const ctx_r0 = core["ɵɵnextContext"]();
          core["ɵɵadvance"](), core["ɵɵtextInterpolate"](ctx_r0.label);
        }
      }
      function MatStepHeader_Conditional_8_Template(rf, ctx) {
        if (
          (1 & rf &&
            (core["ɵɵelementStart"](0, "div", 5),
            core["ɵɵtext"](1),
            core["ɵɵelementEnd"]()),
          2 & rf)
        ) {
          const ctx_r0 = core["ɵɵnextContext"]();
          core["ɵɵadvance"](),
            core["ɵɵtextInterpolate"](ctx_r0._intl.optionalLabel);
        }
      }
      function MatStepHeader_Conditional_9_Template(rf, ctx) {
        if (
          (1 & rf &&
            (core["ɵɵelementStart"](0, "div", 6),
            core["ɵɵtext"](1),
            core["ɵɵelementEnd"]()),
          2 & rf)
        ) {
          const ctx_r0 = core["ɵɵnextContext"]();
          core["ɵɵadvance"](), core["ɵɵtextInterpolate"](ctx_r0.errorMessage);
        }
      }
      const stepper_c0 = ["*"];
      function MatStep_ng_template_0_ng_template_1_Template(rf, ctx) {}
      function MatStep_ng_template_0_Template(rf, ctx) {
        if (
          (1 & rf &&
            (core["ɵɵprojection"](0),
            core["ɵɵtemplate"](
              1,
              MatStep_ng_template_0_ng_template_1_Template,
              0,
              0,
              "ng-template",
              0,
            )),
          2 & rf)
        ) {
          const ctx_r0 = core["ɵɵnextContext"]();
          core["ɵɵadvance"](),
            core["ɵɵproperty"]("cdkPortalOutlet", ctx_r0._portal);
        }
      }
      const _c1 = (a0, a1) => ({ step: a0, i: a1 }),
        _c2 = (a0) => ({ animationDuration: a0 }),
        _c3 = (a0, a1) => ({ value: a0, params: a1 });
      function MatStepper_Conditional_0_Template(rf, ctx) {
        1 & rf && core["ɵɵprojection"](0);
      }
      function MatStepper_Case_1_For_3_Conditional_1_Template(rf, ctx) {
        1 & rf && core["ɵɵelement"](0, "div", 6);
      }
      function MatStepper_Case_1_For_3_Template(rf, ctx) {
        if (
          (1 & rf &&
            (core["ɵɵelementContainer"](0, 5),
            core["ɵɵtemplate"](
              1,
              MatStepper_Case_1_For_3_Conditional_1_Template,
              1,
              0,
              "div",
              6,
            )),
          2 & rf)
        ) {
          const step_r1 = ctx.$implicit,
            i_r2 = ctx.$index,
            ɵi_8_r3 = ctx.$index,
            ɵ$count_8_r4 = ctx.$count;
          core["ɵɵnextContext"](2);
          const stepTemplate_r5 = core["ɵɵreference"](4);
          core["ɵɵproperty"]("ngTemplateOutlet", stepTemplate_r5)(
            "ngTemplateOutletContext",
            core["ɵɵpureFunction2"](3, _c1, step_r1, i_r2),
          ),
            core["ɵɵadvance"](),
            core["ɵɵconditional"](1, ɵi_8_r3 !== ɵ$count_8_r4 - 1 ? 1 : -1);
        }
      }
      function MatStepper_Case_1_For_6_Template(rf, ctx) {
        if (1 & rf) {
          const _r6 = core["ɵɵgetCurrentView"]();
          core["ɵɵelementStart"](0, "div", 7),
            core["ɵɵlistener"](
              "@horizontalStepTransition.done",
              function MatStepper_Case_1_For_6_Template_div_animation_horizontalStepTransition_done_0_listener(
                $event,
              ) {
                core["ɵɵrestoreView"](_r6);
                const ctx_r6 = core["ɵɵnextContext"](2);
                return core["ɵɵresetView"](ctx_r6._animationDone.next($event));
              },
            ),
            core["ɵɵelementContainer"](1, 8),
            core["ɵɵelementEnd"]();
        }
        if (2 & rf) {
          const step_r8 = ctx.$implicit,
            i_r9 = ctx.$index,
            ctx_r6 = core["ɵɵnextContext"](2);
          core["ɵɵclassProp"](
            "mat-horizontal-stepper-content-inactive",
            ctx_r6.selectedIndex !== i_r9,
          ),
            core["ɵɵproperty"](
              "@horizontalStepTransition",
              core["ɵɵpureFunction2"](
                8,
                _c3,
                ctx_r6._getAnimationDirection(i_r9),
                core["ɵɵpureFunction1"](6, _c2, ctx_r6._getAnimationDuration()),
              ),
            )("id", ctx_r6._getStepContentId(i_r9)),
            core["ɵɵattribute"](
              "aria-labelledby",
              ctx_r6._getStepLabelId(i_r9),
            ),
            core["ɵɵadvance"](),
            core["ɵɵproperty"]("ngTemplateOutlet", step_r8.content);
        }
      }
      function MatStepper_Case_1_Template(rf, ctx) {
        if (
          (1 & rf &&
            (core["ɵɵelementStart"](0, "div", 1)(1, "div", 2),
            core["ɵɵrepeaterCreate"](
              2,
              MatStepper_Case_1_For_3_Template,
              2,
              6,
              null,
              null,
              core["ɵɵrepeaterTrackByIdentity"],
            ),
            core["ɵɵelementEnd"](),
            core["ɵɵelementStart"](4, "div", 3),
            core["ɵɵrepeaterCreate"](
              5,
              MatStepper_Case_1_For_6_Template,
              2,
              11,
              "div",
              4,
              core["ɵɵrepeaterTrackByIdentity"],
            ),
            core["ɵɵelementEnd"]()()),
          2 & rf)
        ) {
          const ctx_r6 = core["ɵɵnextContext"]();
          core["ɵɵadvance"](2),
            core["ɵɵrepeater"](ctx_r6.steps),
            core["ɵɵadvance"](3),
            core["ɵɵrepeater"](ctx_r6.steps);
        }
      }
      function MatStepper_Case_2_For_1_Template(rf, ctx) {
        if (1 & rf) {
          const _r10 = core["ɵɵgetCurrentView"]();
          core["ɵɵelementStart"](0, "div", 9),
            core["ɵɵelementContainer"](1, 5),
            core["ɵɵelementStart"](2, "div", 10)(3, "div", 11),
            core["ɵɵlistener"](
              "@verticalStepTransition.done",
              function MatStepper_Case_2_For_1_Template_div_animation_verticalStepTransition_done_3_listener(
                $event,
              ) {
                core["ɵɵrestoreView"](_r10);
                const ctx_r6 = core["ɵɵnextContext"](2);
                return core["ɵɵresetView"](ctx_r6._animationDone.next($event));
              },
            ),
            core["ɵɵelementStart"](4, "div", 12),
            core["ɵɵelementContainer"](5, 8),
            core["ɵɵelementEnd"]()()()();
        }
        if (2 & rf) {
          const step_r11 = ctx.$implicit,
            i_r12 = ctx.$index,
            ɵi_22_r13 = ctx.$index,
            ɵ$count_22_r14 = ctx.$count,
            ctx_r6 = core["ɵɵnextContext"](2),
            stepTemplate_r5 = core["ɵɵreference"](4);
          core["ɵɵadvance"](),
            core["ɵɵproperty"]("ngTemplateOutlet", stepTemplate_r5)(
              "ngTemplateOutletContext",
              core["ɵɵpureFunction2"](10, _c1, step_r11, i_r12),
            ),
            core["ɵɵadvance"](),
            core["ɵɵclassProp"](
              "mat-stepper-vertical-line",
              !(ɵi_22_r13 === ɵ$count_22_r14 - 1),
            ),
            core["ɵɵadvance"](),
            core["ɵɵclassProp"](
              "mat-vertical-stepper-content-inactive",
              ctx_r6.selectedIndex !== i_r12,
            ),
            core["ɵɵproperty"](
              "@verticalStepTransition",
              core["ɵɵpureFunction2"](
                15,
                _c3,
                ctx_r6._getAnimationDirection(i_r12),
                core["ɵɵpureFunction1"](
                  13,
                  _c2,
                  ctx_r6._getAnimationDuration(),
                ),
              ),
            )("id", ctx_r6._getStepContentId(i_r12)),
            core["ɵɵattribute"](
              "aria-labelledby",
              ctx_r6._getStepLabelId(i_r12),
            ),
            core["ɵɵadvance"](2),
            core["ɵɵproperty"]("ngTemplateOutlet", step_r11.content);
        }
      }
      function MatStepper_Case_2_Template(rf, ctx) {
        if (
          (1 & rf &&
            core["ɵɵrepeaterCreate"](
              0,
              MatStepper_Case_2_For_1_Template,
              6,
              18,
              "div",
              9,
              core["ɵɵrepeaterTrackByIdentity"],
            ),
          2 & rf)
        ) {
          const ctx_r6 = core["ɵɵnextContext"]();
          core["ɵɵrepeater"](ctx_r6.steps);
        }
      }
      function MatStepper_ng_template_3_Template(rf, ctx) {
        if (1 & rf) {
          const _r15 = core["ɵɵgetCurrentView"]();
          core["ɵɵelementStart"](0, "mat-step-header", 13),
            core["ɵɵlistener"](
              "click",
              function MatStepper_ng_template_3_Template_mat_step_header_click_0_listener() {
                const step_r16 = core["ɵɵrestoreView"](_r15).step;
                return core["ɵɵresetView"](step_r16.select());
              },
            )(
              "keydown",
              function MatStepper_ng_template_3_Template_mat_step_header_keydown_0_listener(
                $event,
              ) {
                core["ɵɵrestoreView"](_r15);
                const ctx_r6 = core["ɵɵnextContext"]();
                return core["ɵɵresetView"](ctx_r6._onKeydown($event));
              },
            ),
            core["ɵɵelementEnd"]();
        }
        if (2 & rf) {
          const step_r16 = ctx.step,
            i_r17 = ctx.i,
            ctx_r6 = core["ɵɵnextContext"]();
          core["ɵɵclassProp"](
            "mat-horizontal-stepper-header",
            "horizontal" === ctx_r6.orientation,
          )("mat-vertical-stepper-header", "vertical" === ctx_r6.orientation),
            core["ɵɵproperty"](
              "tabIndex",
              ctx_r6._getFocusIndex() === i_r17 ? 0 : -1,
            )("id", ctx_r6._getStepLabelId(i_r17))("index", i_r17)(
              "state",
              ctx_r6._getIndicatorType(i_r17, step_r16.state),
            )("label", step_r16.stepLabel || step_r16.label)(
              "selected",
              ctx_r6.selectedIndex === i_r17,
            )("active", ctx_r6._stepIsNavigable(i_r17, step_r16))(
              "optional",
              step_r16.optional,
            )("errorMessage", step_r16.errorMessage)(
              "iconOverrides",
              ctx_r6._iconOverrides,
            )(
              "disableRipple",
              ctx_r6.disableRipple || !ctx_r6._stepIsNavigable(i_r17, step_r16),
            )("color", step_r16.color || ctx_r6.color),
            core["ɵɵattribute"]("aria-posinset", i_r17 + 1)(
              "aria-setsize",
              ctx_r6.steps.length,
            )("aria-controls", ctx_r6._getStepContentId(i_r17))(
              "aria-selected",
              ctx_r6.selectedIndex == i_r17,
            )("aria-label", step_r16.ariaLabel || null)(
              "aria-labelledby",
              !step_r16.ariaLabel && step_r16.ariaLabelledby
                ? step_r16.ariaLabelledby
                : null,
            )(
              "aria-disabled",
              !ctx_r6._stepIsNavigable(i_r17, step_r16) || null,
            );
        }
      }
      class MatStepLabel extends CdkStepLabel {
        static #_ = (this.ɵfac = (() => {
          let ɵMatStepLabel_BaseFactory;
          return function MatStepLabel_Factory(t) {
            return (
              ɵMatStepLabel_BaseFactory ||
              (ɵMatStepLabel_BaseFactory =
                core["ɵɵgetInheritedFactory"](MatStepLabel))
            )(t || MatStepLabel);
          };
        })());
        static #_2 = (this.ɵdir = core["ɵɵdefineDirective"]({
          type: MatStepLabel,
          selectors: [["", "matStepLabel", ""]],
          standalone: !0,
          features: [core["ɵɵInheritDefinitionFeature"]],
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          MatStepLabel,
          [
            {
              type: core.Directive,
              args: [{ selector: "[matStepLabel]", standalone: !0 }],
            },
          ],
          null,
          null,
        );
      class MatStepperIntl {
        constructor() {
          (this.changes = new Subject.B()),
            (this.optionalLabel = "Optional"),
            (this.completedLabel = "Completed"),
            (this.editableLabel = "Editable");
        }
        static #_ = (this.ɵfac = function MatStepperIntl_Factory(t) {
          return new (t || MatStepperIntl)();
        });
        static #_2 = (this.ɵprov = core["ɵɵdefineInjectable"]({
          token: MatStepperIntl,
          factory: MatStepperIntl.ɵfac,
          providedIn: "root",
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          MatStepperIntl,
          [{ type: core.Injectable, args: [{ providedIn: "root" }] }],
          null,
          null,
        );
      const MAT_STEPPER_INTL_PROVIDER = {
        provide: MatStepperIntl,
        deps: [[new core.Optional(), new core.SkipSelf(), MatStepperIntl]],
        useFactory: function MAT_STEPPER_INTL_PROVIDER_FACTORY(parentIntl) {
          return parentIntl || new MatStepperIntl();
        },
      };
      class MatStepHeader extends CdkStepHeader {
        constructor(_intl, _focusMonitor, _elementRef, changeDetectorRef) {
          super(_elementRef),
            (this._intl = _intl),
            (this._focusMonitor = _focusMonitor),
            (this._intlSubscription = _intl.changes.subscribe(() =>
              changeDetectorRef.markForCheck(),
            ));
        }
        ngAfterViewInit() {
          this._focusMonitor.monitor(this._elementRef, !0);
        }
        ngOnDestroy() {
          this._intlSubscription.unsubscribe(),
            this._focusMonitor.stopMonitoring(this._elementRef);
        }
        focus(origin, options) {
          origin
            ? this._focusMonitor.focusVia(this._elementRef, origin, options)
            : this._elementRef.nativeElement.focus(options);
        }
        _stringLabel() {
          return this.label instanceof MatStepLabel ? null : this.label;
        }
        _templateLabel() {
          return this.label instanceof MatStepLabel ? this.label : null;
        }
        _getHostElement() {
          return this._elementRef.nativeElement;
        }
        _getIconContext() {
          return {
            index: this.index,
            active: this.active,
            optional: this.optional,
          };
        }
        _getDefaultTextForState(state) {
          return "number" == state
            ? `${this.index + 1}`
            : "edit" == state
              ? "create"
              : "error" == state
                ? "warning"
                : state;
        }
        static #_ = (this.ɵfac = function MatStepHeader_Factory(t) {
          return new (t || MatStepHeader)(
            core["ɵɵdirectiveInject"](MatStepperIntl),
            core["ɵɵdirectiveInject"](a11y.FN),
            core["ɵɵdirectiveInject"](core.ElementRef),
            core["ɵɵdirectiveInject"](core.ChangeDetectorRef),
          );
        });
        static #_2 = (this.ɵcmp = core["ɵɵdefineComponent"]({
          type: MatStepHeader,
          selectors: [["mat-step-header"]],
          hostAttrs: ["role", "tab", 1, "mat-step-header"],
          hostVars: 2,
          hostBindings: function MatStepHeader_HostBindings(rf, ctx) {
            2 & rf && core["ɵɵclassMap"]("mat-" + (ctx.color || "primary"));
          },
          inputs: {
            state: "state",
            label: "label",
            errorMessage: "errorMessage",
            iconOverrides: "iconOverrides",
            index: "index",
            selected: "selected",
            active: "active",
            optional: "optional",
            disableRipple: "disableRipple",
            color: "color",
          },
          standalone: !0,
          features: [
            core["ɵɵInheritDefinitionFeature"],
            core["ɵɵStandaloneFeature"],
          ],
          decls: 10,
          vars: 17,
          consts: [
            [
              "matRipple",
              "",
              1,
              "mat-step-header-ripple",
              "mat-focus-indicator",
              3,
              "matRippleTrigger",
              "matRippleDisabled",
            ],
            [1, "mat-step-icon-content"],
            [3, "ngTemplateOutlet", "ngTemplateOutletContext"],
            [1, "mat-step-label"],
            [1, "mat-step-text-label"],
            [1, "mat-step-optional"],
            [1, "mat-step-sub-label-error"],
            ["aria-hidden", "true"],
            [1, "cdk-visually-hidden"],
            [3, "ngTemplateOutlet"],
          ],
          template: function MatStepHeader_Template(rf, ctx) {
            if (
              (1 & rf &&
                (core["ɵɵelement"](0, "div", 0),
                core["ɵɵelementStart"](1, "div")(2, "div", 1),
                core["ɵɵtemplate"](
                  3,
                  MatStepHeader_Conditional_3_Template,
                  1,
                  2,
                  "ng-container",
                  2,
                )(4, MatStepHeader_Conditional_4_Template, 2, 1),
                core["ɵɵelementEnd"]()(),
                core["ɵɵelementStart"](5, "div", 3),
                core["ɵɵtemplate"](
                  6,
                  MatStepHeader_Conditional_6_Template,
                  2,
                  1,
                  "div",
                  4,
                )(7, MatStepHeader_Conditional_7_Template, 2, 1)(
                  8,
                  MatStepHeader_Conditional_8_Template,
                  2,
                  1,
                  "div",
                  5,
                )(9, MatStepHeader_Conditional_9_Template, 2, 1, "div", 6),
                core["ɵɵelementEnd"]()),
              2 & rf)
            ) {
              let tmp_8_0;
              core["ɵɵproperty"]("matRippleTrigger", ctx._getHostElement())(
                "matRippleDisabled",
                ctx.disableRipple,
              ),
                core["ɵɵadvance"](),
                core["ɵɵclassMapInterpolate1"](
                  "mat-step-icon-state-",
                  ctx.state,
                  " mat-step-icon",
                ),
                core["ɵɵclassProp"]("mat-step-icon-selected", ctx.selected),
                core["ɵɵadvance"](2),
                core["ɵɵconditional"](
                  3,
                  ctx.iconOverrides && ctx.iconOverrides[ctx.state] ? 3 : 4,
                ),
                core["ɵɵadvance"](2),
                core["ɵɵclassProp"]("mat-step-label-active", ctx.active)(
                  "mat-step-label-selected",
                  ctx.selected,
                )("mat-step-label-error", "error" == ctx.state),
                core["ɵɵadvance"](),
                core["ɵɵconditional"](
                  6,
                  (tmp_8_0 = ctx._templateLabel())
                    ? 6
                    : ctx._stringLabel()
                      ? 7
                      : -1,
                  tmp_8_0,
                ),
                core["ɵɵadvance"](2),
                core["ɵɵconditional"](
                  8,
                  ctx.optional && "error" != ctx.state ? 8 : -1,
                ),
                core["ɵɵadvance"](),
                core["ɵɵconditional"](9, "error" === ctx.state ? 9 : -1);
            }
          },
          dependencies: [fesm2022_core.r6, common.NgTemplateOutlet, icon.An],
          styles: [
            '.mat-step-header{overflow:hidden;outline:none;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-step-header:focus .mat-focus-indicator::before{content:""}.mat-step-header:hover[aria-disabled=true]{cursor:default}.mat-step-header:hover:not([aria-disabled]),.mat-step-header:hover[aria-disabled=false]{background-color:var(--mat-stepper-header-hover-state-layer-color);border-radius:var(--mat-stepper-header-hover-state-layer-shape)}.mat-step-header.cdk-keyboard-focused,.mat-step-header.cdk-program-focused{background-color:var(--mat-stepper-header-focus-state-layer-color);border-radius:var(--mat-stepper-header-focus-state-layer-shape)}@media(hover: none){.mat-step-header:hover{background:none}}.cdk-high-contrast-active .mat-step-header{outline:solid 1px}.cdk-high-contrast-active .mat-step-header[aria-selected=true] .mat-step-label{text-decoration:underline}.cdk-high-contrast-active .mat-step-header[aria-disabled=true]{outline-color:GrayText}.cdk-high-contrast-active .mat-step-header[aria-disabled=true] .mat-step-label,.cdk-high-contrast-active .mat-step-header[aria-disabled=true] .mat-step-icon,.cdk-high-contrast-active .mat-step-header[aria-disabled=true] .mat-step-optional{color:GrayText}.mat-step-optional{font-size:12px;color:var(--mat-stepper-header-optional-label-text-color)}.mat-step-sub-label-error{font-size:12px;font-weight:normal}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative;color:var(--mat-stepper-header-icon-foreground-color);background-color:var(--mat-stepper-header-icon-background-color)}.mat-step-icon-content{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);display:flex}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error{background-color:var(--mat-stepper-header-error-state-icon-background-color);color:var(--mat-stepper-header-error-state-icon-foreground-color)}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle;font-family:var(--mat-stepper-header-label-text-font);font-size:var(--mat-stepper-header-label-text-size);font-weight:var(--mat-stepper-header-label-text-weight);color:var(--mat-stepper-header-label-text-color)}.mat-step-label.mat-step-label-active{color:var(--mat-stepper-header-selected-state-label-text-color)}.mat-step-label.mat-step-label-error{color:var(--mat-stepper-header-error-state-label-text-color);font-size:var(--mat-stepper-header-error-state-label-text-size)}.mat-step-label.mat-step-label-selected{font-size:var(--mat-stepper-header-selected-state-label-text-size);font-weight:var(--mat-stepper-header-selected-state-label-text-weight)}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-step-icon-selected{background-color:var(--mat-stepper-header-selected-state-icon-background-color);color:var(--mat-stepper-header-selected-state-icon-foreground-color)}.mat-step-icon-state-done{background-color:var(--mat-stepper-header-done-state-icon-background-color);color:var(--mat-stepper-header-done-state-icon-foreground-color)}.mat-step-icon-state-edit{background-color:var(--mat-stepper-header-edit-state-icon-background-color);color:var(--mat-stepper-header-edit-state-icon-foreground-color)}',
          ],
          encapsulation: 2,
          changeDetection: 0,
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          MatStepHeader,
          [
            {
              type: core.Component,
              args: [
                {
                  selector: "mat-step-header",
                  host: {
                    class: "mat-step-header",
                    "[class]": '"mat-" + (color || "primary")',
                    role: "tab",
                  },
                  encapsulation: core.ViewEncapsulation.None,
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  standalone: !0,
                  imports: [fesm2022_core.r6, common.NgTemplateOutlet, icon.An],
                  template:
                    '<div class="mat-step-header-ripple mat-focus-indicator" matRipple\n     [matRippleTrigger]="_getHostElement()"\n     [matRippleDisabled]="disableRipple"></div>\n\n<div class="mat-step-icon-state-{{state}} mat-step-icon" [class.mat-step-icon-selected]="selected">\n  <div class="mat-step-icon-content">\n    @if (iconOverrides && iconOverrides[state]) {\n      <ng-container\n        [ngTemplateOutlet]="iconOverrides[state]"\n        [ngTemplateOutletContext]="_getIconContext()"></ng-container>\n    } @else {\n      @switch (state) {\n        @case (\'number\') {\n          <span aria-hidden="true">{{_getDefaultTextForState(state)}}</span>\n        }\n\n        @default {\n          @if (state === \'done\') {\n            <span class="cdk-visually-hidden">{{_intl.completedLabel}}</span>\n          } @else if (state === \'edit\') {\n            <span class="cdk-visually-hidden">{{_intl.editableLabel}}</span>\n          }\n\n          <mat-icon aria-hidden="true">{{_getDefaultTextForState(state)}}</mat-icon>\n        }\n      }\n    }\n  </div>\n</div>\n<div class="mat-step-label"\n     [class.mat-step-label-active]="active"\n     [class.mat-step-label-selected]="selected"\n     [class.mat-step-label-error]="state == \'error\'">\n  @if (_templateLabel(); as templateLabel) {\n    \x3c!-- If there is a label template, use it. --\x3e\n    <div class="mat-step-text-label">\n      <ng-container [ngTemplateOutlet]="templateLabel.template"></ng-container>\n    </div>\n  } @else if (_stringLabel()) {\n    \x3c!-- If there is no label template, fall back to the text label. --\x3e\n    <div class="mat-step-text-label">{{label}}</div>\n  }\n\n  @if (optional && state != \'error\') {\n    <div class="mat-step-optional">{{_intl.optionalLabel}}</div>\n  }\n\n  @if (state === \'error\') {\n    <div class="mat-step-sub-label-error">{{errorMessage}}</div>\n  }\n</div>\n\n',
                  styles: [
                    '.mat-step-header{overflow:hidden;outline:none;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-step-header:focus .mat-focus-indicator::before{content:""}.mat-step-header:hover[aria-disabled=true]{cursor:default}.mat-step-header:hover:not([aria-disabled]),.mat-step-header:hover[aria-disabled=false]{background-color:var(--mat-stepper-header-hover-state-layer-color);border-radius:var(--mat-stepper-header-hover-state-layer-shape)}.mat-step-header.cdk-keyboard-focused,.mat-step-header.cdk-program-focused{background-color:var(--mat-stepper-header-focus-state-layer-color);border-radius:var(--mat-stepper-header-focus-state-layer-shape)}@media(hover: none){.mat-step-header:hover{background:none}}.cdk-high-contrast-active .mat-step-header{outline:solid 1px}.cdk-high-contrast-active .mat-step-header[aria-selected=true] .mat-step-label{text-decoration:underline}.cdk-high-contrast-active .mat-step-header[aria-disabled=true]{outline-color:GrayText}.cdk-high-contrast-active .mat-step-header[aria-disabled=true] .mat-step-label,.cdk-high-contrast-active .mat-step-header[aria-disabled=true] .mat-step-icon,.cdk-high-contrast-active .mat-step-header[aria-disabled=true] .mat-step-optional{color:GrayText}.mat-step-optional{font-size:12px;color:var(--mat-stepper-header-optional-label-text-color)}.mat-step-sub-label-error{font-size:12px;font-weight:normal}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative;color:var(--mat-stepper-header-icon-foreground-color);background-color:var(--mat-stepper-header-icon-background-color)}.mat-step-icon-content{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);display:flex}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error{background-color:var(--mat-stepper-header-error-state-icon-background-color);color:var(--mat-stepper-header-error-state-icon-foreground-color)}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle;font-family:var(--mat-stepper-header-label-text-font);font-size:var(--mat-stepper-header-label-text-size);font-weight:var(--mat-stepper-header-label-text-weight);color:var(--mat-stepper-header-label-text-color)}.mat-step-label.mat-step-label-active{color:var(--mat-stepper-header-selected-state-label-text-color)}.mat-step-label.mat-step-label-error{color:var(--mat-stepper-header-error-state-label-text-color);font-size:var(--mat-stepper-header-error-state-label-text-size)}.mat-step-label.mat-step-label-selected{font-size:var(--mat-stepper-header-selected-state-label-text-size);font-weight:var(--mat-stepper-header-selected-state-label-text-weight)}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-step-icon-selected{background-color:var(--mat-stepper-header-selected-state-icon-background-color);color:var(--mat-stepper-header-selected-state-icon-foreground-color)}.mat-step-icon-state-done{background-color:var(--mat-stepper-header-done-state-icon-background-color);color:var(--mat-stepper-header-done-state-icon-foreground-color)}.mat-step-icon-state-edit{background-color:var(--mat-stepper-header-edit-state-icon-background-color);color:var(--mat-stepper-header-edit-state-icon-foreground-color)}',
                  ],
                },
              ],
            },
          ],
          () => [
            { type: MatStepperIntl },
            { type: a11y.FN },
            { type: core.ElementRef },
            { type: core.ChangeDetectorRef },
          ],
          {
            state: [{ type: core.Input }],
            label: [{ type: core.Input }],
            errorMessage: [{ type: core.Input }],
            iconOverrides: [{ type: core.Input }],
            index: [{ type: core.Input }],
            selected: [{ type: core.Input }],
            active: [{ type: core.Input }],
            optional: [{ type: core.Input }],
            disableRipple: [{ type: core.Input }],
            color: [{ type: core.Input }],
          },
        );
      const matStepperAnimations = {
        horizontalStepTransition: (0, animations.hZ)(
          "horizontalStepTransition",
          [
            (0, animations.wk)(
              "previous",
              (0, animations.iF)({
                transform: "translate3d(-100%, 0, 0)",
                visibility: "hidden",
              }),
            ),
            (0, animations.wk)(
              "current",
              (0, animations.iF)({ transform: "none", visibility: "inherit" }),
            ),
            (0, animations.wk)(
              "next",
              (0, animations.iF)({
                transform: "translate3d(100%, 0, 0)",
                visibility: "hidden",
              }),
            ),
            (0, animations.kY)(
              "* => *",
              (0, animations.Os)([
                (0, animations.i0)(
                  "{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)",
                ),
                (0, animations.P)("@*", (0, animations.MA)(), { optional: !0 }),
              ]),
              { params: { animationDuration: "500ms" } },
            ),
          ],
        ),
        verticalStepTransition: (0, animations.hZ)("verticalStepTransition", [
          (0, animations.wk)(
            "previous",
            (0, animations.iF)({ height: "0px", visibility: "hidden" }),
          ),
          (0, animations.wk)(
            "next",
            (0, animations.iF)({ height: "0px", visibility: "hidden" }),
          ),
          (0, animations.wk)(
            "current",
            (0, animations.iF)({ height: "*", visibility: "inherit" }),
          ),
          (0, animations.kY)(
            "* <=> current",
            (0, animations.Os)([
              (0, animations.i0)(
                "{{animationDuration}} cubic-bezier(0.4, 0.0, 0.2, 1)",
              ),
              (0, animations.P)("@*", (0, animations.MA)(), { optional: !0 }),
            ]),
            { params: { animationDuration: "225ms" } },
          ),
        ]),
      };
      class MatStepperIcon {
        constructor(templateRef) {
          this.templateRef = templateRef;
        }
        static #_ = (this.ɵfac = function MatStepperIcon_Factory(t) {
          return new (t || MatStepperIcon)(
            core["ɵɵdirectiveInject"](core.TemplateRef),
          );
        });
        static #_2 = (this.ɵdir = core["ɵɵdefineDirective"]({
          type: MatStepperIcon,
          selectors: [["ng-template", "matStepperIcon", ""]],
          inputs: {
            name: [core["ɵɵInputFlags"].None, "matStepperIcon", "name"],
          },
          standalone: !0,
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          MatStepperIcon,
          [
            {
              type: core.Directive,
              args: [
                { selector: "ng-template[matStepperIcon]", standalone: !0 },
              ],
            },
          ],
          () => [{ type: core.TemplateRef }],
          { name: [{ type: core.Input, args: ["matStepperIcon"] }] },
        );
      class MatStepContent {
        constructor(_template) {
          this._template = _template;
        }
        static #_ = (this.ɵfac = function MatStepContent_Factory(t) {
          return new (t || MatStepContent)(
            core["ɵɵdirectiveInject"](core.TemplateRef),
          );
        });
        static #_2 = (this.ɵdir = core["ɵɵdefineDirective"]({
          type: MatStepContent,
          selectors: [["ng-template", "matStepContent", ""]],
          standalone: !0,
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          MatStepContent,
          [
            {
              type: core.Directive,
              args: [
                { selector: "ng-template[matStepContent]", standalone: !0 },
              ],
            },
          ],
          () => [{ type: core.TemplateRef }],
          null,
        );
      class MatStep extends CdkStep {
        constructor(
          stepper,
          _errorStateMatcher,
          _viewContainerRef,
          stepperOptions,
        ) {
          super(stepper, stepperOptions),
            (this._errorStateMatcher = _errorStateMatcher),
            (this._viewContainerRef = _viewContainerRef),
            (this._isSelected = Subscription.yU.EMPTY),
            (this.stepLabel = void 0);
        }
        ngAfterContentInit() {
          this._isSelected = this._stepper.steps.changes
            .pipe(
              (0, switchMap.n)(() =>
                this._stepper.selectionChange.pipe(
                  (0, map.T)((event) => event.selectedStep === this),
                  (0, startWith.Z)(this._stepper.selected === this),
                ),
              ),
            )
            .subscribe((isSelected) => {
              isSelected &&
                this._lazyContent &&
                !this._portal &&
                (this._portal = new portal.VA(
                  this._lazyContent._template,
                  this._viewContainerRef,
                ));
            });
        }
        ngOnDestroy() {
          this._isSelected.unsubscribe();
        }
        isErrorState(control, form) {
          const originalErrorState = this._errorStateMatcher.isErrorState(
              control,
              form,
            ),
            customErrorState = !!(
              control &&
              control.invalid &&
              this.interacted
            );
          return originalErrorState || customErrorState;
        }
        static #_ = (this.ɵfac = function MatStep_Factory(t) {
          return new (t || MatStep)(
            core["ɵɵdirectiveInject"]((0, core.forwardRef)(() => MatStepper)),
            core["ɵɵdirectiveInject"](fesm2022_core.es, 4),
            core["ɵɵdirectiveInject"](core.ViewContainerRef),
            core["ɵɵdirectiveInject"](STEPPER_GLOBAL_OPTIONS, 8),
          );
        });
        static #_2 = (this.ɵcmp = core["ɵɵdefineComponent"]({
          type: MatStep,
          selectors: [["mat-step"]],
          contentQueries: function MatStep_ContentQueries(rf, ctx, dirIndex) {
            if (
              (1 & rf &&
                (core["ɵɵcontentQuery"](dirIndex, MatStepLabel, 5),
                core["ɵɵcontentQuery"](dirIndex, MatStepContent, 5)),
              2 & rf)
            ) {
              let _t;
              core["ɵɵqueryRefresh"]((_t = core["ɵɵloadQuery"]())) &&
                (ctx.stepLabel = _t.first),
                core["ɵɵqueryRefresh"]((_t = core["ɵɵloadQuery"]())) &&
                  (ctx._lazyContent = _t.first);
            }
          },
          hostAttrs: ["hidden", ""],
          inputs: { color: "color" },
          exportAs: ["matStep"],
          standalone: !0,
          features: [
            core["ɵɵProvidersFeature"]([
              { provide: fesm2022_core.es, useExisting: MatStep },
              { provide: CdkStep, useExisting: MatStep },
            ]),
            core["ɵɵInheritDefinitionFeature"],
            core["ɵɵStandaloneFeature"],
          ],
          ngContentSelectors: stepper_c0,
          decls: 1,
          vars: 0,
          consts: [[3, "cdkPortalOutlet"]],
          template: function MatStep_Template(rf, ctx) {
            1 & rf &&
              (core["ɵɵprojectionDef"](),
              core["ɵɵtemplate"](
                0,
                MatStep_ng_template_0_Template,
                2,
                1,
                "ng-template",
              ));
          },
          dependencies: [portal.I3],
          encapsulation: 2,
          changeDetection: 0,
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          MatStep,
          [
            {
              type: core.Component,
              args: [
                {
                  selector: "mat-step",
                  providers: [
                    { provide: fesm2022_core.es, useExisting: MatStep },
                    { provide: CdkStep, useExisting: MatStep },
                  ],
                  encapsulation: core.ViewEncapsulation.None,
                  exportAs: "matStep",
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  standalone: !0,
                  imports: [portal.I3],
                  host: { hidden: "" },
                  template:
                    '<ng-template>\n  <ng-content></ng-content>\n  <ng-template [cdkPortalOutlet]="_portal"></ng-template>\n</ng-template>\n',
                },
              ],
            },
          ],
          () => [
            {
              type: MatStepper,
              decorators: [
                {
                  type: core.Inject,
                  args: [(0, core.forwardRef)(() => MatStepper)],
                },
              ],
            },
            { type: fesm2022_core.es, decorators: [{ type: core.SkipSelf }] },
            { type: core.ViewContainerRef },
            {
              type: void 0,
              decorators: [
                { type: core.Optional },
                { type: core.Inject, args: [STEPPER_GLOBAL_OPTIONS] },
              ],
            },
          ],
          {
            stepLabel: [{ type: core.ContentChild, args: [MatStepLabel] }],
            color: [{ type: core.Input }],
            _lazyContent: [
              {
                type: core.ContentChild,
                args: [MatStepContent, { static: !1 }],
              },
            ],
          },
        );
      class MatStepper extends CdkStepper {
        get animationDuration() {
          return this._animationDuration;
        }
        set animationDuration(value) {
          this._animationDuration = /^\d+$/.test(value) ? value + "ms" : value;
        }
        constructor(dir, changeDetectorRef, elementRef) {
          super(dir, changeDetectorRef, elementRef),
            (this._stepHeader = void 0),
            (this._steps = void 0),
            (this.steps = new core.QueryList()),
            (this.animationDone = new core.EventEmitter()),
            (this.labelPosition = "end"),
            (this.headerPosition = "top"),
            (this._iconOverrides = {}),
            (this._animationDone = new Subject.B()),
            (this._animationDuration = ""),
            (this._isServer = !(0, core.inject)(platform.OD).isBrowser);
          const nodeName = elementRef.nativeElement.nodeName.toLowerCase();
          this.orientation =
            "mat-vertical-stepper" === nodeName ? "vertical" : "horizontal";
        }
        ngAfterContentInit() {
          super.ngAfterContentInit(),
            this._icons.forEach(
              ({ name, templateRef }) =>
                (this._iconOverrides[name] = templateRef),
            ),
            this.steps.changes
              .pipe((0, takeUntil.Q)(this._destroyed))
              .subscribe(() => {
                this._stateChanged();
              }),
            this._animationDone
              .pipe(
                (0, distinctUntilChanged.F)(
                  (x, y) =>
                    x.fromState === y.fromState && x.toState === y.toState,
                ),
                (0, takeUntil.Q)(this._destroyed),
              )
              .subscribe((event) => {
                "current" === event.toState && this.animationDone.emit();
              });
        }
        _stepIsNavigable(index, step) {
          return step.completed || this.selectedIndex === index || !this.linear;
        }
        _getAnimationDuration() {
          return this.animationDuration
            ? this.animationDuration
            : "horizontal" === this.orientation
              ? "500ms"
              : "225ms";
        }
        static #_ = (this.ɵfac = function MatStepper_Factory(t) {
          return new (t || MatStepper)(
            core["ɵɵdirectiveInject"](bidi.dS, 8),
            core["ɵɵdirectiveInject"](core.ChangeDetectorRef),
            core["ɵɵdirectiveInject"](core.ElementRef),
          );
        });
        static #_2 = (this.ɵcmp = core["ɵɵdefineComponent"]({
          type: MatStepper,
          selectors: [
            ["mat-stepper"],
            ["mat-vertical-stepper"],
            ["mat-horizontal-stepper"],
            ["", "matStepper", ""],
          ],
          contentQueries: function MatStepper_ContentQueries(
            rf,
            ctx,
            dirIndex,
          ) {
            if (
              (1 & rf &&
                (core["ɵɵcontentQuery"](dirIndex, MatStep, 5),
                core["ɵɵcontentQuery"](dirIndex, MatStepperIcon, 5)),
              2 & rf)
            ) {
              let _t;
              core["ɵɵqueryRefresh"]((_t = core["ɵɵloadQuery"]())) &&
                (ctx._steps = _t),
                core["ɵɵqueryRefresh"]((_t = core["ɵɵloadQuery"]())) &&
                  (ctx._icons = _t);
            }
          },
          viewQuery: function MatStepper_Query(rf, ctx) {
            if ((1 & rf && core["ɵɵviewQuery"](MatStepHeader, 5), 2 & rf)) {
              let _t;
              core["ɵɵqueryRefresh"]((_t = core["ɵɵloadQuery"]())) &&
                (ctx._stepHeader = _t);
            }
          },
          hostAttrs: ["role", "tablist"],
          hostVars: 11,
          hostBindings: function MatStepper_HostBindings(rf, ctx) {
            2 & rf &&
              (core["ɵɵattribute"]("aria-orientation", ctx.orientation),
              core["ɵɵclassProp"](
                "mat-stepper-horizontal",
                "horizontal" === ctx.orientation,
              )("mat-stepper-vertical", "vertical" === ctx.orientation)(
                "mat-stepper-label-position-end",
                "horizontal" === ctx.orientation && "end" == ctx.labelPosition,
              )(
                "mat-stepper-label-position-bottom",
                "horizontal" === ctx.orientation &&
                  "bottom" == ctx.labelPosition,
              )(
                "mat-stepper-header-position-bottom",
                "bottom" === ctx.headerPosition,
              ));
          },
          inputs: {
            disableRipple: "disableRipple",
            color: "color",
            labelPosition: "labelPosition",
            headerPosition: "headerPosition",
            animationDuration: "animationDuration",
          },
          outputs: { animationDone: "animationDone" },
          exportAs: [
            "matStepper",
            "matVerticalStepper",
            "matHorizontalStepper",
          ],
          standalone: !0,
          features: [
            core["ɵɵProvidersFeature"]([
              { provide: CdkStepper, useExisting: MatStepper },
            ]),
            core["ɵɵInheritDefinitionFeature"],
            core["ɵɵStandaloneFeature"],
          ],
          ngContentSelectors: stepper_c0,
          decls: 5,
          vars: 2,
          consts: [
            ["stepTemplate", ""],
            [1, "mat-horizontal-stepper-wrapper"],
            [1, "mat-horizontal-stepper-header-container"],
            [1, "mat-horizontal-content-container"],
            [
              "role",
              "tabpanel",
              1,
              "mat-horizontal-stepper-content",
              3,
              "id",
              "mat-horizontal-stepper-content-inactive",
            ],
            [3, "ngTemplateOutlet", "ngTemplateOutletContext"],
            [1, "mat-stepper-horizontal-line"],
            ["role", "tabpanel", 1, "mat-horizontal-stepper-content", 3, "id"],
            [3, "ngTemplateOutlet"],
            [1, "mat-step"],
            [1, "mat-vertical-content-container"],
            ["role", "tabpanel", 1, "mat-vertical-stepper-content", 3, "id"],
            [1, "mat-vertical-content"],
            [
              3,
              "click",
              "keydown",
              "tabIndex",
              "id",
              "index",
              "state",
              "label",
              "selected",
              "active",
              "optional",
              "errorMessage",
              "iconOverrides",
              "disableRipple",
              "color",
            ],
          ],
          template: function MatStepper_Template(rf, ctx) {
            if (
              (1 & rf &&
                (core["ɵɵprojectionDef"](),
                core["ɵɵtemplate"](0, MatStepper_Conditional_0_Template, 1, 0)(
                  1,
                  MatStepper_Case_1_Template,
                  7,
                  0,
                )(2, MatStepper_Case_2_Template, 2, 0)(
                  3,
                  MatStepper_ng_template_3_Template,
                  1,
                  23,
                  "ng-template",
                  null,
                  0,
                  core["ɵɵtemplateRefExtractor"],
                )),
              2 & rf)
            ) {
              let tmp_2_0;
              core["ɵɵconditional"](0, ctx._isServer ? 0 : -1),
                core["ɵɵadvance"](),
                core["ɵɵconditional"](
                  1,
                  "horizontal" === (tmp_2_0 = ctx.orientation)
                    ? 1
                    : "vertical" === tmp_2_0
                      ? 2
                      : -1,
                );
            }
          },
          dependencies: [common.NgTemplateOutlet, MatStepHeader],
          styles: [
            '.mat-stepper-vertical,.mat-stepper-horizontal{display:block;font-family:var(--mat-stepper-container-text-font);background:var(--mat-stepper-container-color)}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-header-position-bottom .mat-horizontal-stepper-header-container{order:1}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px;border-top-color:var(--mat-stepper-line-color)}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative;top:calc(calc((var(--mat-stepper-header-height) - 24px) / 2) + 12px)}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:"";display:inline-block;height:0;position:absolute;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px;height:var(--mat-stepper-header-height)}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-horizontal-stepper-header::before,.mat-horizontal-stepper-header::after{border-top-color:var(--mat-stepper-line-color)}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{padding:calc((var(--mat-stepper-header-height) - 24px) / 2) 24px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::after{top:calc(calc((var(--mat-stepper-header-height) - 24px) / 2) + 12px)}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;height:24px;padding:calc((var(--mat-stepper-header-height) - 24px) / 2) 24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-wrapper{display:flex;flex-direction:column}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content.mat-horizontal-stepper-content-inactive{height:0;overflow:hidden}.mat-horizontal-stepper-content:not(.mat-horizontal-stepper-content-inactive){visibility:inherit !important}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.cdk-high-contrast-active .mat-horizontal-content-container{outline:solid 1px}.mat-stepper-header-position-bottom .mat-horizontal-content-container{padding:24px 24px 0 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}.cdk-high-contrast-active .mat-vertical-content-container{outline:solid 1px}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:"";position:absolute;left:0;border-left-width:1px;border-left-style:solid;border-left-color:var(--mat-stepper-line-color);top:calc(8px - calc((var(--mat-stepper-header-height) - 24px) / 2));bottom:calc(8px - calc((var(--mat-stepper-header-height) - 24px) / 2))}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-stepper-content:not(.mat-vertical-stepper-content-inactive){visibility:inherit !important}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}',
          ],
          encapsulation: 2,
          data: {
            animation: [
              matStepperAnimations.horizontalStepTransition,
              matStepperAnimations.verticalStepTransition,
            ],
          },
          changeDetection: 0,
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          MatStepper,
          [
            {
              type: core.Component,
              args: [
                {
                  selector:
                    "mat-stepper, mat-vertical-stepper, mat-horizontal-stepper, [matStepper]",
                  exportAs:
                    "matStepper, matVerticalStepper, matHorizontalStepper",
                  host: {
                    "[class.mat-stepper-horizontal]":
                      'orientation === "horizontal"',
                    "[class.mat-stepper-vertical]":
                      'orientation === "vertical"',
                    "[class.mat-stepper-label-position-end]":
                      'orientation === "horizontal" && labelPosition == "end"',
                    "[class.mat-stepper-label-position-bottom]":
                      'orientation === "horizontal" && labelPosition == "bottom"',
                    "[class.mat-stepper-header-position-bottom]":
                      'headerPosition === "bottom"',
                    "[attr.aria-orientation]": "orientation",
                    role: "tablist",
                  },
                  animations: [
                    matStepperAnimations.horizontalStepTransition,
                    matStepperAnimations.verticalStepTransition,
                  ],
                  providers: [{ provide: CdkStepper, useExisting: MatStepper }],
                  encapsulation: core.ViewEncapsulation.None,
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  standalone: !0,
                  imports: [common.NgTemplateOutlet, MatStepHeader],
                  template:
                    '\x3c!--\n  We need to project the content somewhere to avoid hydration errors. Some observations:\n  1. This is only necessary on the server.\n  2. We get a hydration error if there aren\'t any nodes after the `ng-content`.\n  3. We get a hydration error if `ng-content` is wrapped in another element.\n--\x3e\n@if (_isServer) {\n  <ng-content/>\n}\n\n@switch (orientation) {\n  @case (\'horizontal\') {\n    <div class="mat-horizontal-stepper-wrapper">\n      <div class="mat-horizontal-stepper-header-container">\n        @for (step of steps; track step; let i = $index, isLast = $last) {\n          <ng-container\n            [ngTemplateOutlet]="stepTemplate"\n            [ngTemplateOutletContext]="{step: step, i: i}"></ng-container>\n          @if (!isLast) {\n            <div class="mat-stepper-horizontal-line"></div>\n          }\n        }\n      </div>\n\n      <div class="mat-horizontal-content-container">\n        @for (step of steps; track step; let i = $index) {\n          <div class="mat-horizontal-stepper-content" role="tabpanel"\n               [@horizontalStepTransition]="{\n                  \'value\': _getAnimationDirection(i),\n                  \'params\': {\'animationDuration\': _getAnimationDuration()}\n                }"\n               (@horizontalStepTransition.done)="_animationDone.next($event)"\n               [id]="_getStepContentId(i)"\n               [attr.aria-labelledby]="_getStepLabelId(i)"\n               [class.mat-horizontal-stepper-content-inactive]="selectedIndex !== i">\n            <ng-container [ngTemplateOutlet]="step.content"></ng-container>\n          </div>\n        }\n      </div>\n    </div>\n  }\n\n  @case (\'vertical\') {\n    @for (step of steps; track step; let i = $index, isLast = $last) {\n      <div class="mat-step">\n        <ng-container\n          [ngTemplateOutlet]="stepTemplate"\n          [ngTemplateOutletContext]="{step: step, i: i}"></ng-container>\n        <div class="mat-vertical-content-container" [class.mat-stepper-vertical-line]="!isLast">\n          <div class="mat-vertical-stepper-content" role="tabpanel"\n               [@verticalStepTransition]="{\n                  \'value\': _getAnimationDirection(i),\n                  \'params\': {\'animationDuration\': _getAnimationDuration()}\n                }"\n               (@verticalStepTransition.done)="_animationDone.next($event)"\n               [id]="_getStepContentId(i)"\n               [attr.aria-labelledby]="_getStepLabelId(i)"\n               [class.mat-vertical-stepper-content-inactive]="selectedIndex !== i">\n            <div class="mat-vertical-content">\n              <ng-container [ngTemplateOutlet]="step.content"></ng-container>\n            </div>\n          </div>\n        </div>\n      </div>\n    }\n  }\n}\n\n\x3c!-- Common step templating --\x3e\n<ng-template let-step="step" let-i="i" #stepTemplate>\n  <mat-step-header\n    [class.mat-horizontal-stepper-header]="orientation === \'horizontal\'"\n    [class.mat-vertical-stepper-header]="orientation === \'vertical\'"\n    (click)="step.select()"\n    (keydown)="_onKeydown($event)"\n    [tabIndex]="_getFocusIndex() === i ? 0 : -1"\n    [id]="_getStepLabelId(i)"\n    [attr.aria-posinset]="i + 1"\n    [attr.aria-setsize]="steps.length"\n    [attr.aria-controls]="_getStepContentId(i)"\n    [attr.aria-selected]="selectedIndex == i"\n    [attr.aria-label]="step.ariaLabel || null"\n    [attr.aria-labelledby]="(!step.ariaLabel && step.ariaLabelledby) ? step.ariaLabelledby : null"\n    [attr.aria-disabled]="_stepIsNavigable(i, step) ? null : true"\n    [index]="i"\n    [state]="_getIndicatorType(i, step.state)"\n    [label]="step.stepLabel || step.label"\n    [selected]="selectedIndex === i"\n    [active]="_stepIsNavigable(i, step)"\n    [optional]="step.optional"\n    [errorMessage]="step.errorMessage"\n    [iconOverrides]="_iconOverrides"\n    [disableRipple]="disableRipple || !_stepIsNavigable(i, step)"\n    [color]="step.color || color"></mat-step-header>\n</ng-template>\n',
                  styles: [
                    '.mat-stepper-vertical,.mat-stepper-horizontal{display:block;font-family:var(--mat-stepper-container-text-font);background:var(--mat-stepper-container-color)}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-header-position-bottom .mat-horizontal-stepper-header-container{order:1}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px;border-top-color:var(--mat-stepper-line-color)}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative;top:calc(calc((var(--mat-stepper-header-height) - 24px) / 2) + 12px)}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:"";display:inline-block;height:0;position:absolute;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px;height:var(--mat-stepper-header-height)}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-horizontal-stepper-header::before,.mat-horizontal-stepper-header::after{border-top-color:var(--mat-stepper-line-color)}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{padding:calc((var(--mat-stepper-header-height) - 24px) / 2) 24px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::after{top:calc(calc((var(--mat-stepper-header-height) - 24px) / 2) + 12px)}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;height:24px;padding:calc((var(--mat-stepper-header-height) - 24px) / 2) 24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-wrapper{display:flex;flex-direction:column}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content.mat-horizontal-stepper-content-inactive{height:0;overflow:hidden}.mat-horizontal-stepper-content:not(.mat-horizontal-stepper-content-inactive){visibility:inherit !important}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.cdk-high-contrast-active .mat-horizontal-content-container{outline:solid 1px}.mat-stepper-header-position-bottom .mat-horizontal-content-container{padding:24px 24px 0 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}.cdk-high-contrast-active .mat-vertical-content-container{outline:solid 1px}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:"";position:absolute;left:0;border-left-width:1px;border-left-style:solid;border-left-color:var(--mat-stepper-line-color);top:calc(8px - calc((var(--mat-stepper-header-height) - 24px) / 2));bottom:calc(8px - calc((var(--mat-stepper-header-height) - 24px) / 2))}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-stepper-content:not(.mat-vertical-stepper-content-inactive){visibility:inherit !important}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}',
                  ],
                },
              ],
            },
          ],
          () => [
            { type: bidi.dS, decorators: [{ type: core.Optional }] },
            { type: core.ChangeDetectorRef },
            { type: core.ElementRef },
          ],
          {
            _stepHeader: [{ type: core.ViewChildren, args: [MatStepHeader] }],
            _steps: [
              {
                type: core.ContentChildren,
                args: [MatStep, { descendants: !0 }],
              },
            ],
            _icons: [
              {
                type: core.ContentChildren,
                args: [MatStepperIcon, { descendants: !0 }],
              },
            ],
            animationDone: [{ type: core.Output }],
            disableRipple: [{ type: core.Input }],
            color: [{ type: core.Input }],
            labelPosition: [{ type: core.Input }],
            headerPosition: [{ type: core.Input }],
            animationDuration: [{ type: core.Input }],
          },
        );
      class MatStepperNext extends CdkStepperNext {
        static #_ = (this.ɵfac = (() => {
          let ɵMatStepperNext_BaseFactory;
          return function MatStepperNext_Factory(t) {
            return (
              ɵMatStepperNext_BaseFactory ||
              (ɵMatStepperNext_BaseFactory =
                core["ɵɵgetInheritedFactory"](MatStepperNext))
            )(t || MatStepperNext);
          };
        })());
        static #_2 = (this.ɵdir = core["ɵɵdefineDirective"]({
          type: MatStepperNext,
          selectors: [["button", "matStepperNext", ""]],
          hostAttrs: [1, "mat-stepper-next"],
          hostVars: 1,
          hostBindings: function MatStepperNext_HostBindings(rf, ctx) {
            2 & rf && core["ɵɵhostProperty"]("type", ctx.type);
          },
          standalone: !0,
          features: [core["ɵɵInheritDefinitionFeature"]],
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          MatStepperNext,
          [
            {
              type: core.Directive,
              args: [
                {
                  selector: "button[matStepperNext]",
                  host: { class: "mat-stepper-next", "[type]": "type" },
                  standalone: !0,
                },
              ],
            },
          ],
          null,
          null,
        );
      class MatStepperPrevious extends CdkStepperPrevious {
        static #_ = (this.ɵfac = (() => {
          let ɵMatStepperPrevious_BaseFactory;
          return function MatStepperPrevious_Factory(t) {
            return (
              ɵMatStepperPrevious_BaseFactory ||
              (ɵMatStepperPrevious_BaseFactory =
                core["ɵɵgetInheritedFactory"](MatStepperPrevious))
            )(t || MatStepperPrevious);
          };
        })());
        static #_2 = (this.ɵdir = core["ɵɵdefineDirective"]({
          type: MatStepperPrevious,
          selectors: [["button", "matStepperPrevious", ""]],
          hostAttrs: [1, "mat-stepper-previous"],
          hostVars: 1,
          hostBindings: function MatStepperPrevious_HostBindings(rf, ctx) {
            2 & rf && core["ɵɵhostProperty"]("type", ctx.type);
          },
          standalone: !0,
          features: [core["ɵɵInheritDefinitionFeature"]],
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          MatStepperPrevious,
          [
            {
              type: core.Directive,
              args: [
                {
                  selector: "button[matStepperPrevious]",
                  host: { class: "mat-stepper-previous", "[type]": "type" },
                  standalone: !0,
                },
              ],
            },
          ],
          null,
          null,
        );
      class MatStepperModule {
        static #_ = (this.ɵfac = function MatStepperModule_Factory(t) {
          return new (t || MatStepperModule)();
        });
        static #_2 = (this.ɵmod = core["ɵɵdefineNgModule"]({
          type: MatStepperModule,
          imports: [
            fesm2022_core.yE,
            common.CommonModule,
            portal.jc,
            CdkStepperModule,
            icon.m_,
            fesm2022_core.pZ,
            MatStep,
            MatStepLabel,
            MatStepper,
            MatStepperNext,
            MatStepperPrevious,
            MatStepHeader,
            MatStepperIcon,
            MatStepContent,
          ],
          exports: [
            fesm2022_core.yE,
            MatStep,
            MatStepLabel,
            MatStepper,
            MatStepperNext,
            MatStepperPrevious,
            MatStepHeader,
            MatStepperIcon,
            MatStepContent,
          ],
        }));
        static #_3 = (this.ɵinj = core["ɵɵdefineInjector"]({
          providers: [MAT_STEPPER_INTL_PROVIDER, fesm2022_core.es],
          imports: [
            fesm2022_core.yE,
            common.CommonModule,
            portal.jc,
            CdkStepperModule,
            icon.m_,
            fesm2022_core.pZ,
            MatStepper,
            MatStepHeader,
            fesm2022_core.yE,
          ],
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          MatStepperModule,
          [
            {
              type: core.NgModule,
              args: [
                {
                  imports: [
                    fesm2022_core.yE,
                    common.CommonModule,
                    portal.jc,
                    CdkStepperModule,
                    icon.m_,
                    fesm2022_core.pZ,
                    MatStep,
                    MatStepLabel,
                    MatStepper,
                    MatStepperNext,
                    MatStepperPrevious,
                    MatStepHeader,
                    MatStepperIcon,
                    MatStepContent,
                  ],
                  exports: [
                    fesm2022_core.yE,
                    MatStep,
                    MatStepLabel,
                    MatStepper,
                    MatStepperNext,
                    MatStepperPrevious,
                    MatStepHeader,
                    MatStepperIcon,
                    MatStepContent,
                  ],
                  providers: [MAT_STEPPER_INTL_PROVIDER, fesm2022_core.es],
                },
              ],
            },
          ],
          null,
          null,
        );
    },
    "./node_modules/@angular/platform-browser/fesm2022/animations/async.mjs": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        h: () => provideAnimationsAsync,
      });
      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./node_modules/@angular/common/fesm2022/common.mjs",
        ),
        _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/@angular/core/fesm2022/core.mjs",
        ),
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            "./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs",
          );
      class AsyncAnimationRendererFactory {
        constructor(doc, delegate, zone, animationType, moduleImpl) {
          (this.doc = doc),
            (this.delegate = delegate),
            (this.zone = zone),
            (this.animationType = animationType),
            (this.moduleImpl = moduleImpl),
            (this._rendererFactoryPromise = null),
            (this.scheduler = (0,
            _angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(
              _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                "ɵChangeDetectionScheduler"
              ],
              { optional: !0 },
            ));
        }
        ngOnDestroy() {
          this._engine?.flush();
        }
        loadImpl() {
          return (
            this.moduleImpl ??
            Promise.resolve().then(
              __webpack_require__.bind(
                __webpack_require__,
                "./node_modules/@angular/animations/fesm2022/browser.mjs",
              ),
            )
          )
            .catch((e) => {
              throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                "ɵRuntimeError"
              ](
                5300,
                ("undefined" == typeof ngDevMode || ngDevMode) &&
                  "Async loading for animations package was enabled, but loading failed. Angular falls back to using regular rendering. No animations will be displayed and their styles won't be applied.",
              );
            })
            .then(({ ɵcreateEngine, ɵAnimationRendererFactory }) => {
              this._engine = ɵcreateEngine(
                this.animationType,
                this.doc,
                this.scheduler,
              );
              const rendererFactory = new ɵAnimationRendererFactory(
                this.delegate,
                this._engine,
                this.zone,
              );
              return (this.delegate = rendererFactory), rendererFactory;
            });
        }
        createRenderer(hostElement, rendererType) {
          const renderer = this.delegate.createRenderer(
            hostElement,
            rendererType,
          );
          if (0 === renderer.ɵtype) return renderer;
          "boolean" == typeof renderer.throwOnSyntheticProps &&
            (renderer.throwOnSyntheticProps = !1);
          const dynamicRenderer = new DynamicDelegationRenderer(renderer);
          return (
            rendererType?.data?.animation &&
              !this._rendererFactoryPromise &&
              (this._rendererFactoryPromise = this.loadImpl()),
            this._rendererFactoryPromise
              ?.then((animationRendererFactory) => {
                const animationRenderer =
                  animationRendererFactory.createRenderer(
                    hostElement,
                    rendererType,
                  );
                dynamicRenderer.use(animationRenderer);
              })
              .catch((e) => {
                dynamicRenderer.use(renderer);
              }),
            dynamicRenderer
          );
        }
        begin() {
          this.delegate.begin?.();
        }
        end() {
          this.delegate.end?.();
        }
        whenRenderingDone() {
          return this.delegate.whenRenderingDone?.() ?? Promise.resolve();
        }
        static #_ = (this.ɵfac = function AsyncAnimationRendererFactory_Factory(
          t,
        ) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinvalidFactory"]();
        });
        static #_2 = (this.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineInjectable"
        ]({
          token: AsyncAnimationRendererFactory,
          factory: AsyncAnimationRendererFactory.ɵfac,
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
          AsyncAnimationRendererFactory,
          [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable }],
          () => [
            { type: Document },
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererFactory2,
            },
            { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone },
            { type: void 0 },
            { type: Promise },
          ],
          null,
        );
      class DynamicDelegationRenderer {
        constructor(delegate) {
          (this.delegate = delegate), (this.replay = []), (this.ɵtype = 1);
        }
        use(impl) {
          if (((this.delegate = impl), null !== this.replay)) {
            for (const fn of this.replay) fn(impl);
            this.replay = null;
          }
        }
        get data() {
          return this.delegate.data;
        }
        destroy() {
          (this.replay = null), this.delegate.destroy();
        }
        createElement(name, namespace) {
          return this.delegate.createElement(name, namespace);
        }
        createComment(value) {
          return this.delegate.createComment(value);
        }
        createText(value) {
          return this.delegate.createText(value);
        }
        get destroyNode() {
          return this.delegate.destroyNode;
        }
        appendChild(parent, newChild) {
          this.delegate.appendChild(parent, newChild);
        }
        insertBefore(parent, newChild, refChild, isMove) {
          this.delegate.insertBefore(parent, newChild, refChild, isMove);
        }
        removeChild(parent, oldChild, isHostElement) {
          this.delegate.removeChild(parent, oldChild, isHostElement);
        }
        selectRootElement(selectorOrNode, preserveContent) {
          return this.delegate.selectRootElement(
            selectorOrNode,
            preserveContent,
          );
        }
        parentNode(node) {
          return this.delegate.parentNode(node);
        }
        nextSibling(node) {
          return this.delegate.nextSibling(node);
        }
        setAttribute(el, name, value, namespace) {
          this.delegate.setAttribute(el, name, value, namespace);
        }
        removeAttribute(el, name, namespace) {
          this.delegate.removeAttribute(el, name, namespace);
        }
        addClass(el, name) {
          this.delegate.addClass(el, name);
        }
        removeClass(el, name) {
          this.delegate.removeClass(el, name);
        }
        setStyle(el, style, value, flags) {
          this.delegate.setStyle(el, style, value, flags);
        }
        removeStyle(el, style, flags) {
          this.delegate.removeStyle(el, style, flags);
        }
        setProperty(el, name, value) {
          this.shouldReplay(name) &&
            this.replay.push((renderer) =>
              renderer.setProperty(el, name, value),
            ),
            this.delegate.setProperty(el, name, value);
        }
        setValue(node, value) {
          this.delegate.setValue(node, value);
        }
        listen(target, eventName, callback) {
          return (
            this.shouldReplay(eventName) &&
              this.replay.push((renderer) =>
                renderer.listen(target, eventName, callback),
              ),
            this.delegate.listen(target, eventName, callback)
          );
        }
        shouldReplay(propOrEventName) {
          return null !== this.replay && propOrEventName.startsWith("@");
        }
      }
      function provideAnimationsAsync(type = "animations") {
        return (
          (0,
          _angular_core__WEBPACK_IMPORTED_MODULE_0__[
            "ɵperformanceMarkFeature"
          ])("NgAsyncAnimations"),
          (0,
          _angular_core__WEBPACK_IMPORTED_MODULE_0__.makeEnvironmentProviders)([
            {
              provide:
                _angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererFactory2,
              useFactory: (doc, renderer, zone) =>
                new AsyncAnimationRendererFactory(doc, renderer, zone, type),
              deps: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT,
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__[
                  "ɵDomRendererFactory2"
                ],
                _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone,
              ],
            },
            {
              provide:
                _angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE,
              useValue:
                "noop" === type ? "NoopAnimations" : "BrowserAnimations",
            },
          ])
        );
      }
    },
  },
]);
