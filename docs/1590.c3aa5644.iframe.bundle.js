"use strict";
(self.webpackChunk_aseinfo_evolution_web_components =
  self.webpackChunk_aseinfo_evolution_web_components || []).push([
  [1590],
  {
    "./node_modules/@angular/material/fesm2022/form-field.mjs": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        xb: () => MAT_FORM_FIELD,
        rl: () => MatFormField,
        qT: () => MatFormFieldControl,
        RG: () => MatFormFieldModule,
      });
      var core = __webpack_require__(
          "./node_modules/@angular/core/fesm2022/core.mjs",
        ),
        bidi = __webpack_require__(
          "./node_modules/@angular/cdk/fesm2022/bidi.mjs",
        ),
        platform = __webpack_require__(
          "./node_modules/@angular/cdk/fesm2022/platform.mjs",
        ),
        Subscription = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/Subscription.js",
        ),
        Subject = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/Subject.js",
        ),
        merge = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/observable/merge.js",
        ),
        takeUntil = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js",
        ),
        Observable = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/Observable.js",
        ),
        filter = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/filter.js",
        ),
        shareReplay = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/shareReplay.js",
        );
      const loopLimitExceededErrorHandler = (e) => {
        e instanceof ErrorEvent &&
          "ResizeObserver loop limit exceeded" === e.message &&
          console.error(
            `${e.message}. This could indicate a performance issue with your app. See https://github.com/WICG/resize-observer/blob/master/explainer.md#error-handling`,
          );
      };
      class SingleBoxSharedResizeObserver {
        constructor(_box) {
          (this._box = _box),
            (this._destroyed = new Subject.B()),
            (this._resizeSubject = new Subject.B()),
            (this._elementObservables = new Map()),
            "undefined" != typeof ResizeObserver &&
              (this._resizeObserver = new ResizeObserver((entries) =>
                this._resizeSubject.next(entries),
              ));
        }
        observe(target) {
          return (
            this._elementObservables.has(target) ||
              this._elementObservables.set(
                target,
                new Observable.c((observer) => {
                  const subscription = this._resizeSubject.subscribe(observer);
                  return (
                    this._resizeObserver?.observe(target, { box: this._box }),
                    () => {
                      this._resizeObserver?.unobserve(target),
                        subscription.unsubscribe(),
                        this._elementObservables.delete(target);
                    }
                  );
                }).pipe(
                  (0, filter.p)((entries) =>
                    entries.some((entry) => entry.target === target),
                  ),
                  (0, shareReplay.t)({ bufferSize: 1, refCount: !0 }),
                  (0, takeUntil.Q)(this._destroyed),
                ),
              ),
            this._elementObservables.get(target)
          );
        }
        destroy() {
          this._destroyed.next(),
            this._destroyed.complete(),
            this._resizeSubject.complete(),
            this._elementObservables.clear();
        }
      }
      class SharedResizeObserver {
        constructor() {
          (this._observers = new Map()),
            (this._ngZone = (0, core.inject)(core.NgZone)),
            "undefined" == typeof ResizeObserver ||
              ("undefined" != typeof ngDevMode && !ngDevMode) ||
              this._ngZone.runOutsideAngular(() => {
                window.addEventListener("error", loopLimitExceededErrorHandler);
              });
        }
        ngOnDestroy() {
          for (const [, observer] of this._observers) observer.destroy();
          this._observers.clear(),
            "undefined" == typeof ResizeObserver ||
              ("undefined" != typeof ngDevMode && !ngDevMode) ||
              window.removeEventListener(
                "error",
                loopLimitExceededErrorHandler,
              );
        }
        observe(target, options) {
          const box = options?.box || "content-box";
          return (
            this._observers.has(box) ||
              this._observers.set(box, new SingleBoxSharedResizeObserver(box)),
            this._observers.get(box).observe(target)
          );
        }
        static #_ = (this.ɵfac = function SharedResizeObserver_Factory(t) {
          return new (t || SharedResizeObserver)();
        });
        static #_2 = (this.ɵprov = core["ɵɵdefineInjectable"]({
          token: SharedResizeObserver,
          factory: SharedResizeObserver.ɵfac,
          providedIn: "root",
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          SharedResizeObserver,
          [{ type: core.Injectable, args: [{ providedIn: "root" }] }],
          () => [],
          null,
        );
      var coercion = __webpack_require__(
          "./node_modules/@angular/cdk/fesm2022/coercion.mjs",
        ),
        animations = __webpack_require__(
          "./node_modules/@angular/animations/fesm2022/animations.mjs",
        ),
        common = __webpack_require__(
          "./node_modules/@angular/common/fesm2022/common.mjs",
        ),
        observers = __webpack_require__(
          "./node_modules/@angular/cdk/fesm2022/observers.mjs",
        ),
        fesm2022_core = __webpack_require__(
          "./node_modules/@angular/material/fesm2022/core.mjs",
        );
      const _c0 = ["notch"],
        _c1 = ["matFormFieldNotchedOutline", ""],
        _c2 = ["*"],
        _c3 = ["textField"],
        _c4 = ["iconPrefixContainer"],
        _c5 = ["textPrefixContainer"],
        _c6 = [
          "*",
          [["mat-label"]],
          [
            ["", "matPrefix", ""],
            ["", "matIconPrefix", ""],
          ],
          [["", "matTextPrefix", ""]],
          [["", "matTextSuffix", ""]],
          [
            ["", "matSuffix", ""],
            ["", "matIconSuffix", ""],
          ],
          [["mat-error"], ["", "matError", ""]],
          [["mat-hint", 3, "align", "end"]],
          [["mat-hint", "align", "end"]],
        ],
        _c7 = [
          "*",
          "mat-label",
          "[matPrefix], [matIconPrefix]",
          "[matTextPrefix]",
          "[matTextSuffix]",
          "[matSuffix], [matIconSuffix]",
          "mat-error, [matError]",
          "mat-hint:not([align='end'])",
          "mat-hint[align='end']",
        ];
      function MatFormField_ng_template_0_Conditional_0_Conditional_2_Template(
        rf,
        ctx,
      ) {
        1 & rf && core["ɵɵelement"](0, "span", 17);
      }
      function MatFormField_ng_template_0_Conditional_0_Template(rf, ctx) {
        if (
          (1 & rf &&
            (core["ɵɵelementStart"](0, "label", 16),
            core["ɵɵprojection"](1, 1),
            core["ɵɵtemplate"](
              2,
              MatFormField_ng_template_0_Conditional_0_Conditional_2_Template,
              1,
              0,
              "span",
              17,
            ),
            core["ɵɵelementEnd"]()),
          2 & rf)
        ) {
          const ctx_r1 = core["ɵɵnextContext"](2);
          core["ɵɵproperty"]("floating", ctx_r1._shouldLabelFloat())(
            "monitorResize",
            ctx_r1._hasOutline(),
          )("id", ctx_r1._labelId),
            core["ɵɵattribute"](
              "for",
              ctx_r1._control.disableAutomaticLabeling
                ? null
                : ctx_r1._control.id,
            ),
            core["ɵɵadvance"](2),
            core["ɵɵconditional"](
              2,
              !ctx_r1.hideRequiredMarker && ctx_r1._control.required ? 2 : -1,
            );
        }
      }
      function MatFormField_ng_template_0_Template(rf, ctx) {
        if (
          (1 & rf &&
            core["ɵɵtemplate"](
              0,
              MatFormField_ng_template_0_Conditional_0_Template,
              3,
              5,
              "label",
              16,
            ),
          2 & rf)
        ) {
          const ctx_r1 = core["ɵɵnextContext"]();
          core["ɵɵconditional"](0, ctx_r1._hasFloatingLabel() ? 0 : -1);
        }
      }
      function MatFormField_Conditional_4_Template(rf, ctx) {
        1 & rf && core["ɵɵelement"](0, "div", 5);
      }
      function MatFormField_Conditional_6_Conditional_1_ng_template_0_Template(
        rf,
        ctx,
      ) {}
      function MatFormField_Conditional_6_Conditional_1_Template(rf, ctx) {
        if (
          (1 & rf &&
            core["ɵɵtemplate"](
              0,
              MatFormField_Conditional_6_Conditional_1_ng_template_0_Template,
              0,
              0,
              "ng-template",
              11,
            ),
          2 & rf)
        ) {
          core["ɵɵnextContext"](2);
          const labelTemplate_r3 = core["ɵɵreference"](1);
          core["ɵɵproperty"]("ngTemplateOutlet", labelTemplate_r3);
        }
      }
      function MatFormField_Conditional_6_Template(rf, ctx) {
        if (
          (1 & rf &&
            (core["ɵɵelementStart"](0, "div", 7),
            core["ɵɵtemplate"](
              1,
              MatFormField_Conditional_6_Conditional_1_Template,
              1,
              1,
              null,
              11,
            ),
            core["ɵɵelementEnd"]()),
          2 & rf)
        ) {
          const ctx_r1 = core["ɵɵnextContext"]();
          core["ɵɵproperty"](
            "matFormFieldNotchedOutlineOpen",
            ctx_r1._shouldLabelFloat(),
          ),
            core["ɵɵadvance"](),
            core["ɵɵconditional"](1, ctx_r1._forceDisplayInfixLabel() ? -1 : 1);
        }
      }
      function MatFormField_Conditional_7_Template(rf, ctx) {
        1 & rf &&
          (core["ɵɵelementStart"](0, "div", 8, 2),
          core["ɵɵprojection"](2, 2),
          core["ɵɵelementEnd"]());
      }
      function MatFormField_Conditional_8_Template(rf, ctx) {
        1 & rf &&
          (core["ɵɵelementStart"](0, "div", 9, 3),
          core["ɵɵprojection"](2, 3),
          core["ɵɵelementEnd"]());
      }
      function MatFormField_Conditional_10_ng_template_0_Template(rf, ctx) {}
      function MatFormField_Conditional_10_Template(rf, ctx) {
        if (
          (1 & rf &&
            core["ɵɵtemplate"](
              0,
              MatFormField_Conditional_10_ng_template_0_Template,
              0,
              0,
              "ng-template",
              11,
            ),
          2 & rf)
        ) {
          core["ɵɵnextContext"]();
          const labelTemplate_r3 = core["ɵɵreference"](1);
          core["ɵɵproperty"]("ngTemplateOutlet", labelTemplate_r3);
        }
      }
      function MatFormField_Conditional_12_Template(rf, ctx) {
        1 & rf &&
          (core["ɵɵelementStart"](0, "div", 12),
          core["ɵɵprojection"](1, 4),
          core["ɵɵelementEnd"]());
      }
      function MatFormField_Conditional_13_Template(rf, ctx) {
        1 & rf &&
          (core["ɵɵelementStart"](0, "div", 13),
          core["ɵɵprojection"](1, 5),
          core["ɵɵelementEnd"]());
      }
      function MatFormField_Conditional_14_Template(rf, ctx) {
        1 & rf && core["ɵɵelement"](0, "div", 14);
      }
      function MatFormField_Case_16_Template(rf, ctx) {
        if (
          (1 & rf &&
            (core["ɵɵelementStart"](0, "div", 18),
            core["ɵɵprojection"](1, 6),
            core["ɵɵelementEnd"]()),
          2 & rf)
        ) {
          const ctx_r1 = core["ɵɵnextContext"]();
          core["ɵɵproperty"](
            "@transitionMessages",
            ctx_r1._subscriptAnimationState,
          );
        }
      }
      function MatFormField_Case_17_Conditional_1_Template(rf, ctx) {
        if (
          (1 & rf &&
            (core["ɵɵelementStart"](0, "mat-hint", 20),
            core["ɵɵtext"](1),
            core["ɵɵelementEnd"]()),
          2 & rf)
        ) {
          const ctx_r1 = core["ɵɵnextContext"](2);
          core["ɵɵproperty"]("id", ctx_r1._hintLabelId),
            core["ɵɵadvance"](),
            core["ɵɵtextInterpolate"](ctx_r1.hintLabel);
        }
      }
      function MatFormField_Case_17_Template(rf, ctx) {
        if (
          (1 & rf &&
            (core["ɵɵelementStart"](0, "div", 19),
            core["ɵɵtemplate"](
              1,
              MatFormField_Case_17_Conditional_1_Template,
              2,
              2,
              "mat-hint",
              20,
            ),
            core["ɵɵprojection"](2, 7),
            core["ɵɵelement"](3, "div", 21),
            core["ɵɵprojection"](4, 8),
            core["ɵɵelementEnd"]()),
          2 & rf)
        ) {
          const ctx_r1 = core["ɵɵnextContext"]();
          core["ɵɵproperty"](
            "@transitionMessages",
            ctx_r1._subscriptAnimationState,
          ),
            core["ɵɵadvance"](),
            core["ɵɵconditional"](1, ctx_r1.hintLabel ? 1 : -1);
        }
      }
      class MatLabel {
        static #_ = (this.ɵfac = function MatLabel_Factory(t) {
          return new (t || MatLabel)();
        });
        static #_2 = (this.ɵdir = core["ɵɵdefineDirective"]({
          type: MatLabel,
          selectors: [["mat-label"]],
          standalone: !0,
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          MatLabel,
          [
            {
              type: core.Directive,
              args: [{ selector: "mat-label", standalone: !0 }],
            },
          ],
          null,
          null,
        );
      let nextUniqueId$2 = 0;
      const MAT_ERROR = new core.InjectionToken("MatError");
      class MatError {
        constructor(ariaLive, elementRef) {
          (this.id = "mat-mdc-error-" + nextUniqueId$2++),
            ariaLive ||
              elementRef.nativeElement.setAttribute("aria-live", "polite");
        }
        static #_ = (this.ɵfac = function MatError_Factory(t) {
          return new (t || MatError)(
            core["ɵɵinjectAttribute"]("aria-live"),
            core["ɵɵdirectiveInject"](core.ElementRef),
          );
        });
        static #_2 = (this.ɵdir = core["ɵɵdefineDirective"]({
          type: MatError,
          selectors: [["mat-error"], ["", "matError", ""]],
          hostAttrs: [
            "aria-atomic",
            "true",
            1,
            "mat-mdc-form-field-error",
            "mat-mdc-form-field-bottom-align",
          ],
          hostVars: 1,
          hostBindings: function MatError_HostBindings(rf, ctx) {
            2 & rf && core["ɵɵhostProperty"]("id", ctx.id);
          },
          inputs: { id: "id" },
          standalone: !0,
          features: [
            core["ɵɵProvidersFeature"]([
              { provide: MAT_ERROR, useExisting: MatError },
            ]),
          ],
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          MatError,
          [
            {
              type: core.Directive,
              args: [
                {
                  selector: "mat-error, [matError]",
                  host: {
                    class:
                      "mat-mdc-form-field-error mat-mdc-form-field-bottom-align",
                    "aria-atomic": "true",
                    "[id]": "id",
                  },
                  providers: [{ provide: MAT_ERROR, useExisting: MatError }],
                  standalone: !0,
                },
              ],
            },
          ],
          () => [
            {
              type: void 0,
              decorators: [{ type: core.Attribute, args: ["aria-live"] }],
            },
            { type: core.ElementRef },
          ],
          { id: [{ type: core.Input }] },
        );
      let nextUniqueId$1 = 0;
      class MatHint {
        constructor() {
          (this.align = "start"),
            (this.id = "mat-mdc-hint-" + nextUniqueId$1++);
        }
        static #_ = (this.ɵfac = function MatHint_Factory(t) {
          return new (t || MatHint)();
        });
        static #_2 = (this.ɵdir = core["ɵɵdefineDirective"]({
          type: MatHint,
          selectors: [["mat-hint"]],
          hostAttrs: [
            1,
            "mat-mdc-form-field-hint",
            "mat-mdc-form-field-bottom-align",
          ],
          hostVars: 4,
          hostBindings: function MatHint_HostBindings(rf, ctx) {
            2 & rf &&
              (core["ɵɵhostProperty"]("id", ctx.id),
              core["ɵɵattribute"]("align", null),
              core["ɵɵclassProp"](
                "mat-mdc-form-field-hint-end",
                "end" === ctx.align,
              ));
          },
          inputs: { align: "align", id: "id" },
          standalone: !0,
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          MatHint,
          [
            {
              type: core.Directive,
              args: [
                {
                  selector: "mat-hint",
                  host: {
                    class:
                      "mat-mdc-form-field-hint mat-mdc-form-field-bottom-align",
                    "[class.mat-mdc-form-field-hint-end]": 'align === "end"',
                    "[id]": "id",
                    "[attr.align]": "null",
                  },
                  standalone: !0,
                },
              ],
            },
          ],
          null,
          { align: [{ type: core.Input }], id: [{ type: core.Input }] },
        );
      const MAT_PREFIX = new core.InjectionToken("MatPrefix");
      class MatPrefix {
        constructor() {
          this._isText = !1;
        }
        set _isTextSelector(value) {
          this._isText = !0;
        }
        static #_ = (this.ɵfac = function MatPrefix_Factory(t) {
          return new (t || MatPrefix)();
        });
        static #_2 = (this.ɵdir = core["ɵɵdefineDirective"]({
          type: MatPrefix,
          selectors: [
            ["", "matPrefix", ""],
            ["", "matIconPrefix", ""],
            ["", "matTextPrefix", ""],
          ],
          inputs: {
            _isTextSelector: [
              core["ɵɵInputFlags"].None,
              "matTextPrefix",
              "_isTextSelector",
            ],
          },
          standalone: !0,
          features: [
            core["ɵɵProvidersFeature"]([
              { provide: MAT_PREFIX, useExisting: MatPrefix },
            ]),
          ],
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          MatPrefix,
          [
            {
              type: core.Directive,
              args: [
                {
                  selector: "[matPrefix], [matIconPrefix], [matTextPrefix]",
                  providers: [{ provide: MAT_PREFIX, useExisting: MatPrefix }],
                  standalone: !0,
                },
              ],
            },
          ],
          null,
          { _isTextSelector: [{ type: core.Input, args: ["matTextPrefix"] }] },
        );
      const MAT_SUFFIX = new core.InjectionToken("MatSuffix");
      class MatSuffix {
        constructor() {
          this._isText = !1;
        }
        set _isTextSelector(value) {
          this._isText = !0;
        }
        static #_ = (this.ɵfac = function MatSuffix_Factory(t) {
          return new (t || MatSuffix)();
        });
        static #_2 = (this.ɵdir = core["ɵɵdefineDirective"]({
          type: MatSuffix,
          selectors: [
            ["", "matSuffix", ""],
            ["", "matIconSuffix", ""],
            ["", "matTextSuffix", ""],
          ],
          inputs: {
            _isTextSelector: [
              core["ɵɵInputFlags"].None,
              "matTextSuffix",
              "_isTextSelector",
            ],
          },
          standalone: !0,
          features: [
            core["ɵɵProvidersFeature"]([
              { provide: MAT_SUFFIX, useExisting: MatSuffix },
            ]),
          ],
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          MatSuffix,
          [
            {
              type: core.Directive,
              args: [
                {
                  selector: "[matSuffix], [matIconSuffix], [matTextSuffix]",
                  providers: [{ provide: MAT_SUFFIX, useExisting: MatSuffix }],
                  standalone: !0,
                },
              ],
            },
          ],
          null,
          { _isTextSelector: [{ type: core.Input, args: ["matTextSuffix"] }] },
        );
      const FLOATING_LABEL_PARENT = new core.InjectionToken(
        "FloatingLabelParent",
      );
      class MatFormFieldFloatingLabel {
        get floating() {
          return this._floating;
        }
        set floating(value) {
          (this._floating = value), this.monitorResize && this._handleResize();
        }
        get monitorResize() {
          return this._monitorResize;
        }
        set monitorResize(value) {
          (this._monitorResize = value),
            this._monitorResize
              ? this._subscribeToResize()
              : this._resizeSubscription.unsubscribe();
        }
        constructor(_elementRef) {
          (this._elementRef = _elementRef),
            (this._floating = !1),
            (this._monitorResize = !1),
            (this._resizeObserver = (0, core.inject)(SharedResizeObserver)),
            (this._ngZone = (0, core.inject)(core.NgZone)),
            (this._parent = (0, core.inject)(FLOATING_LABEL_PARENT)),
            (this._resizeSubscription = new Subscription.yU());
        }
        ngOnDestroy() {
          this._resizeSubscription.unsubscribe();
        }
        getWidth() {
          return (function estimateScrollWidth(element) {
            const htmlEl = element;
            if (null !== htmlEl.offsetParent) return htmlEl.scrollWidth;
            const clone = htmlEl.cloneNode(!0);
            clone.style.setProperty("position", "absolute"),
              clone.style.setProperty(
                "transform",
                "translate(-9999px, -9999px)",
              ),
              document.documentElement.appendChild(clone);
            const scrollWidth = clone.scrollWidth;
            return clone.remove(), scrollWidth;
          })(this._elementRef.nativeElement);
        }
        get element() {
          return this._elementRef.nativeElement;
        }
        _handleResize() {
          setTimeout(() => this._parent._handleLabelResized());
        }
        _subscribeToResize() {
          this._resizeSubscription.unsubscribe(),
            this._ngZone.runOutsideAngular(() => {
              this._resizeSubscription = this._resizeObserver
                .observe(this._elementRef.nativeElement, { box: "border-box" })
                .subscribe(() => this._handleResize());
            });
        }
        static #_ = (this.ɵfac = function MatFormFieldFloatingLabel_Factory(t) {
          return new (t || MatFormFieldFloatingLabel)(
            core["ɵɵdirectiveInject"](core.ElementRef),
          );
        });
        static #_2 = (this.ɵdir = core["ɵɵdefineDirective"]({
          type: MatFormFieldFloatingLabel,
          selectors: [["label", "matFormFieldFloatingLabel", ""]],
          hostAttrs: [1, "mdc-floating-label", "mat-mdc-floating-label"],
          hostVars: 2,
          hostBindings: function MatFormFieldFloatingLabel_HostBindings(
            rf,
            ctx,
          ) {
            2 & rf &&
              core["ɵɵclassProp"](
                "mdc-floating-label--float-above",
                ctx.floating,
              );
          },
          inputs: { floating: "floating", monitorResize: "monitorResize" },
          standalone: !0,
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          MatFormFieldFloatingLabel,
          [
            {
              type: core.Directive,
              args: [
                {
                  selector: "label[matFormFieldFloatingLabel]",
                  host: {
                    class: "mdc-floating-label mat-mdc-floating-label",
                    "[class.mdc-floating-label--float-above]": "floating",
                  },
                  standalone: !0,
                },
              ],
            },
          ],
          () => [{ type: core.ElementRef }],
          {
            floating: [{ type: core.Input }],
            monitorResize: [{ type: core.Input }],
          },
        );
      const DEACTIVATING_CLASS = "mdc-line-ripple--deactivating";
      class MatFormFieldLineRipple {
        constructor(_elementRef, ngZone) {
          (this._elementRef = _elementRef),
            (this._handleTransitionEnd = (event) => {
              const classList = this._elementRef.nativeElement.classList,
                isDeactivating = classList.contains(DEACTIVATING_CLASS);
              "opacity" === event.propertyName &&
                isDeactivating &&
                classList.remove("mdc-line-ripple--active", DEACTIVATING_CLASS);
            }),
            ngZone.runOutsideAngular(() => {
              _elementRef.nativeElement.addEventListener(
                "transitionend",
                this._handleTransitionEnd,
              );
            });
        }
        activate() {
          const classList = this._elementRef.nativeElement.classList;
          classList.remove(DEACTIVATING_CLASS),
            classList.add("mdc-line-ripple--active");
        }
        deactivate() {
          this._elementRef.nativeElement.classList.add(DEACTIVATING_CLASS);
        }
        ngOnDestroy() {
          this._elementRef.nativeElement.removeEventListener(
            "transitionend",
            this._handleTransitionEnd,
          );
        }
        static #_ = (this.ɵfac = function MatFormFieldLineRipple_Factory(t) {
          return new (t || MatFormFieldLineRipple)(
            core["ɵɵdirectiveInject"](core.ElementRef),
            core["ɵɵdirectiveInject"](core.NgZone),
          );
        });
        static #_2 = (this.ɵdir = core["ɵɵdefineDirective"]({
          type: MatFormFieldLineRipple,
          selectors: [["div", "matFormFieldLineRipple", ""]],
          hostAttrs: [1, "mdc-line-ripple"],
          standalone: !0,
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          MatFormFieldLineRipple,
          [
            {
              type: core.Directive,
              args: [
                {
                  selector: "div[matFormFieldLineRipple]",
                  host: { class: "mdc-line-ripple" },
                  standalone: !0,
                },
              ],
            },
          ],
          () => [{ type: core.ElementRef }, { type: core.NgZone }],
          null,
        );
      class MatFormFieldNotchedOutline {
        constructor(_elementRef, _ngZone) {
          (this._elementRef = _elementRef),
            (this._ngZone = _ngZone),
            (this.open = !1);
        }
        ngAfterViewInit() {
          const label = this._elementRef.nativeElement.querySelector(
            ".mdc-floating-label",
          );
          label
            ? (this._elementRef.nativeElement.classList.add(
                "mdc-notched-outline--upgraded",
              ),
              "function" == typeof requestAnimationFrame &&
                ((label.style.transitionDuration = "0s"),
                this._ngZone.runOutsideAngular(() => {
                  requestAnimationFrame(
                    () => (label.style.transitionDuration = ""),
                  );
                })))
            : this._elementRef.nativeElement.classList.add(
                "mdc-notched-outline--no-label",
              );
        }
        _setNotchWidth(labelWidth) {
          if (this.open && labelWidth) {
            const NOTCH_ELEMENT_PADDING = 8,
              NOTCH_ELEMENT_BORDER = 1;
            this._notch.nativeElement.style.width = `calc(${labelWidth}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + ${NOTCH_ELEMENT_PADDING + NOTCH_ELEMENT_BORDER}px)`;
          } else this._notch.nativeElement.style.width = "";
        }
        static #_ = (this.ɵfac = function MatFormFieldNotchedOutline_Factory(
          t,
        ) {
          return new (t || MatFormFieldNotchedOutline)(
            core["ɵɵdirectiveInject"](core.ElementRef),
            core["ɵɵdirectiveInject"](core.NgZone),
          );
        });
        static #_2 = (this.ɵcmp = core["ɵɵdefineComponent"]({
          type: MatFormFieldNotchedOutline,
          selectors: [["div", "matFormFieldNotchedOutline", ""]],
          viewQuery: function MatFormFieldNotchedOutline_Query(rf, ctx) {
            if ((1 & rf && core["ɵɵviewQuery"](_c0, 5), 2 & rf)) {
              let _t;
              core["ɵɵqueryRefresh"]((_t = core["ɵɵloadQuery"]())) &&
                (ctx._notch = _t.first);
            }
          },
          hostAttrs: [1, "mdc-notched-outline"],
          hostVars: 2,
          hostBindings: function MatFormFieldNotchedOutline_HostBindings(
            rf,
            ctx,
          ) {
            2 & rf &&
              core["ɵɵclassProp"]("mdc-notched-outline--notched", ctx.open);
          },
          inputs: {
            open: [
              core["ɵɵInputFlags"].None,
              "matFormFieldNotchedOutlineOpen",
              "open",
            ],
          },
          standalone: !0,
          features: [core["ɵɵStandaloneFeature"]],
          attrs: _c1,
          ngContentSelectors: _c2,
          decls: 5,
          vars: 0,
          consts: [
            ["notch", ""],
            [1, "mdc-notched-outline__leading"],
            [1, "mdc-notched-outline__notch"],
            [1, "mdc-notched-outline__trailing"],
          ],
          template: function MatFormFieldNotchedOutline_Template(rf, ctx) {
            1 & rf &&
              (core["ɵɵprojectionDef"](),
              core["ɵɵelement"](0, "div", 1),
              core["ɵɵelementStart"](1, "div", 2, 0),
              core["ɵɵprojection"](3),
              core["ɵɵelementEnd"](),
              core["ɵɵelement"](4, "div", 3));
          },
          encapsulation: 2,
          changeDetection: 0,
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          MatFormFieldNotchedOutline,
          [
            {
              type: core.Component,
              args: [
                {
                  selector: "div[matFormFieldNotchedOutline]",
                  host: {
                    class: "mdc-notched-outline",
                    "[class.mdc-notched-outline--notched]": "open",
                  },
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  encapsulation: core.ViewEncapsulation.None,
                  standalone: !0,
                  template:
                    '<div class="mdc-notched-outline__leading"></div>\n<div class="mdc-notched-outline__notch" #notch>\n  <ng-content></ng-content>\n</div>\n<div class="mdc-notched-outline__trailing"></div>\n',
                },
              ],
            },
          ],
          () => [{ type: core.ElementRef }, { type: core.NgZone }],
          {
            open: [
              { type: core.Input, args: ["matFormFieldNotchedOutlineOpen"] },
            ],
            _notch: [{ type: core.ViewChild, args: ["notch"] }],
          },
        );
      const matFormFieldAnimations = {
        transitionMessages: (0, animations.hZ)("transitionMessages", [
          (0, animations.wk)(
            "enter",
            (0, animations.iF)({ opacity: 1, transform: "translateY(0%)" }),
          ),
          (0, animations.kY)("void => enter", [
            (0, animations.iF)({ opacity: 0, transform: "translateY(-5px)" }),
            (0, animations.i0)("300ms cubic-bezier(0.55, 0, 0.55, 0.2)"),
          ]),
        ]),
      };
      class MatFormFieldControl {
        static #_ = (this.ɵfac = function MatFormFieldControl_Factory(t) {
          return new (t || MatFormFieldControl)();
        });
        static #_2 = (this.ɵdir = core["ɵɵdefineDirective"]({
          type: MatFormFieldControl,
        }));
      }
      function getMatFormFieldDuplicatedHintError(align) {
        return Error(`A hint was already declared for 'align="${align}"'.`);
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          MatFormFieldControl,
          [{ type: core.Directive }],
          null,
          null,
        );
      const MAT_FORM_FIELD = new core.InjectionToken("MatFormField"),
        MAT_FORM_FIELD_DEFAULT_OPTIONS = new core.InjectionToken(
          "MAT_FORM_FIELD_DEFAULT_OPTIONS",
        );
      let nextUniqueId = 0;
      class MatFormField {
        get hideRequiredMarker() {
          return this._hideRequiredMarker;
        }
        set hideRequiredMarker(value) {
          this._hideRequiredMarker = (0, coercion.he)(value);
        }
        get floatLabel() {
          return this._floatLabel || this._defaults?.floatLabel || "auto";
        }
        set floatLabel(value) {
          value !== this._floatLabel &&
            ((this._floatLabel = value),
            this._changeDetectorRef.markForCheck());
        }
        get appearance() {
          return this._appearance;
        }
        set appearance(value) {
          const oldValue = this._appearance,
            newAppearance = value || this._defaults?.appearance || "fill";
          if (
            ("undefined" == typeof ngDevMode || ngDevMode) &&
            "fill" !== newAppearance &&
            "outline" !== newAppearance
          )
            throw new Error(
              `MatFormField: Invalid appearance "${newAppearance}", valid values are "fill" or "outline".`,
            );
          (this._appearance = newAppearance),
            "outline" === this._appearance &&
              this._appearance !== oldValue &&
              (this._needsOutlineLabelOffsetUpdateOnStable = !0);
        }
        get subscriptSizing() {
          return (
            this._subscriptSizing || this._defaults?.subscriptSizing || "fixed"
          );
        }
        set subscriptSizing(value) {
          this._subscriptSizing =
            value || this._defaults?.subscriptSizing || "fixed";
        }
        get hintLabel() {
          return this._hintLabel;
        }
        set hintLabel(value) {
          (this._hintLabel = value), this._processHints();
        }
        get _control() {
          return this._explicitFormFieldControl || this._formFieldControl;
        }
        set _control(value) {
          this._explicitFormFieldControl = value;
        }
        constructor(
          _elementRef,
          _changeDetectorRef,
          _ngZone,
          _dir,
          _platform,
          _defaults,
          _animationMode,
          _unusedDocument,
        ) {
          (this._elementRef = _elementRef),
            (this._changeDetectorRef = _changeDetectorRef),
            (this._ngZone = _ngZone),
            (this._dir = _dir),
            (this._platform = _platform),
            (this._defaults = _defaults),
            (this._animationMode = _animationMode),
            (this._hideRequiredMarker = !1),
            (this.color = "primary"),
            (this._appearance = "fill"),
            (this._subscriptSizing = null),
            (this._hintLabel = ""),
            (this._hasIconPrefix = !1),
            (this._hasTextPrefix = !1),
            (this._hasIconSuffix = !1),
            (this._hasTextSuffix = !1),
            (this._labelId = "mat-mdc-form-field-label-" + nextUniqueId++),
            (this._hintLabelId = "mat-mdc-hint-" + nextUniqueId++),
            (this._subscriptAnimationState = ""),
            (this._destroyed = new Subject.B()),
            (this._isFocused = null),
            (this._needsOutlineLabelOffsetUpdateOnStable = !1),
            _defaults &&
              (_defaults.appearance && (this.appearance = _defaults.appearance),
              (this._hideRequiredMarker = Boolean(
                _defaults?.hideRequiredMarker,
              )),
              _defaults.color && (this.color = _defaults.color));
        }
        ngAfterViewInit() {
          this._updateFocusState(),
            (this._subscriptAnimationState = "enter"),
            this._changeDetectorRef.detectChanges();
        }
        ngAfterContentInit() {
          this._assertFormFieldControl(),
            this._initializeControl(),
            this._initializeSubscript(),
            this._initializePrefixAndSuffix(),
            this._initializeOutlineLabelOffsetSubscriptions();
        }
        ngAfterContentChecked() {
          this._assertFormFieldControl();
        }
        ngOnDestroy() {
          this._destroyed.next(), this._destroyed.complete();
        }
        getLabelId() {
          return this._hasFloatingLabel() ? this._labelId : null;
        }
        getConnectedOverlayOrigin() {
          return this._textField || this._elementRef;
        }
        _animateAndLockLabel() {
          this._hasFloatingLabel() && (this.floatLabel = "always");
        }
        _initializeControl() {
          const control = this._control;
          control.controlType &&
            this._elementRef.nativeElement.classList.add(
              `mat-mdc-form-field-type-${control.controlType}`,
            ),
            control.stateChanges.subscribe(() => {
              this._updateFocusState(),
                this._syncDescribedByIds(),
                this._changeDetectorRef.markForCheck();
            }),
            control.ngControl &&
              control.ngControl.valueChanges &&
              control.ngControl.valueChanges
                .pipe((0, takeUntil.Q)(this._destroyed))
                .subscribe(() => this._changeDetectorRef.markForCheck());
        }
        _checkPrefixAndSuffixTypes() {
          (this._hasIconPrefix = !!this._prefixChildren.find(
            (p) => !p._isText,
          )),
            (this._hasTextPrefix = !!this._prefixChildren.find(
              (p) => p._isText,
            )),
            (this._hasIconSuffix = !!this._suffixChildren.find(
              (s) => !s._isText,
            )),
            (this._hasTextSuffix = !!this._suffixChildren.find(
              (s) => s._isText,
            ));
        }
        _initializePrefixAndSuffix() {
          this._checkPrefixAndSuffixTypes(),
            (0, merge.h)(
              this._prefixChildren.changes,
              this._suffixChildren.changes,
            ).subscribe(() => {
              this._checkPrefixAndSuffixTypes(),
                this._changeDetectorRef.markForCheck();
            });
        }
        _initializeSubscript() {
          this._hintChildren.changes.subscribe(() => {
            this._processHints(), this._changeDetectorRef.markForCheck();
          }),
            this._errorChildren.changes.subscribe(() => {
              this._syncDescribedByIds(),
                this._changeDetectorRef.markForCheck();
            }),
            this._validateHints(),
            this._syncDescribedByIds();
        }
        _assertFormFieldControl() {
          if (!this._control && ("undefined" == typeof ngDevMode || ngDevMode))
            throw (function getMatFormFieldMissingControlError() {
              return Error(
                "mat-form-field must contain a MatFormFieldControl.",
              );
            })();
        }
        _updateFocusState() {
          this._control.focused && !this._isFocused
            ? ((this._isFocused = !0), this._lineRipple?.activate())
            : this._control.focused ||
              (!this._isFocused && null !== this._isFocused) ||
              ((this._isFocused = !1), this._lineRipple?.deactivate()),
            this._textField?.nativeElement.classList.toggle(
              "mdc-text-field--focused",
              this._control.focused,
            );
        }
        _initializeOutlineLabelOffsetSubscriptions() {
          this._prefixChildren.changes.subscribe(
            () => (this._needsOutlineLabelOffsetUpdateOnStable = !0),
          ),
            this._ngZone.runOutsideAngular(() => {
              this._ngZone.onStable
                .pipe((0, takeUntil.Q)(this._destroyed))
                .subscribe(() => {
                  this._needsOutlineLabelOffsetUpdateOnStable &&
                    ((this._needsOutlineLabelOffsetUpdateOnStable = !1),
                    this._updateOutlineLabelOffset());
                });
            }),
            this._dir.change
              .pipe((0, takeUntil.Q)(this._destroyed))
              .subscribe(
                () => (this._needsOutlineLabelOffsetUpdateOnStable = !0),
              );
        }
        _shouldAlwaysFloat() {
          return "always" === this.floatLabel;
        }
        _hasOutline() {
          return "outline" === this.appearance;
        }
        _forceDisplayInfixLabel() {
          return (
            !this._platform.isBrowser &&
            this._prefixChildren.length &&
            !this._shouldLabelFloat()
          );
        }
        _hasFloatingLabel() {
          return !!this._labelChildNonStatic || !!this._labelChildStatic;
        }
        _shouldLabelFloat() {
          return this._control.shouldLabelFloat || this._shouldAlwaysFloat();
        }
        _shouldForward(prop) {
          const control = this._control ? this._control.ngControl : null;
          return control && control[prop];
        }
        _getDisplayedMessages() {
          return this._errorChildren &&
            this._errorChildren.length > 0 &&
            this._control.errorState
            ? "error"
            : "hint";
        }
        _handleLabelResized() {
          this._refreshOutlineNotchWidth();
        }
        _refreshOutlineNotchWidth() {
          this._hasOutline() && this._floatingLabel && this._shouldLabelFloat()
            ? this._notchedOutline?._setNotchWidth(
                this._floatingLabel.getWidth(),
              )
            : this._notchedOutline?._setNotchWidth(0);
        }
        _processHints() {
          this._validateHints(), this._syncDescribedByIds();
        }
        _validateHints() {
          if (
            this._hintChildren &&
            ("undefined" == typeof ngDevMode || ngDevMode)
          ) {
            let startHint, endHint;
            this._hintChildren.forEach((hint) => {
              if ("start" === hint.align) {
                if (startHint || this.hintLabel)
                  throw getMatFormFieldDuplicatedHintError("start");
                startHint = hint;
              } else if ("end" === hint.align) {
                if (endHint) throw getMatFormFieldDuplicatedHintError("end");
                endHint = hint;
              }
            });
          }
        }
        _syncDescribedByIds() {
          if (this._control) {
            let ids = [];
            if (
              (this._control.userAriaDescribedBy &&
                "string" == typeof this._control.userAriaDescribedBy &&
                ids.push(...this._control.userAriaDescribedBy.split(" ")),
              "hint" === this._getDisplayedMessages())
            ) {
              const startHint = this._hintChildren
                  ? this._hintChildren.find((hint) => "start" === hint.align)
                  : null,
                endHint = this._hintChildren
                  ? this._hintChildren.find((hint) => "end" === hint.align)
                  : null;
              startHint
                ? ids.push(startHint.id)
                : this._hintLabel && ids.push(this._hintLabelId),
                endHint && ids.push(endHint.id);
            } else
              this._errorChildren &&
                ids.push(...this._errorChildren.map((error) => error.id));
            this._control.setDescribedByIds(ids);
          }
        }
        _updateOutlineLabelOffset() {
          if (
            !this._platform.isBrowser ||
            !this._hasOutline() ||
            !this._floatingLabel
          )
            return;
          const floatingLabel = this._floatingLabel.element;
          if (!this._iconPrefixContainer && !this._textPrefixContainer)
            return void (floatingLabel.style.transform = "");
          if (!this._isAttachedToDom())
            return void (this._needsOutlineLabelOffsetUpdateOnStable = !0);
          const iconPrefixContainer = this._iconPrefixContainer?.nativeElement,
            textPrefixContainer = this._textPrefixContainer?.nativeElement,
            iconPrefixContainerWidth =
              iconPrefixContainer?.getBoundingClientRect().width ?? 0,
            textPrefixContainerWidth =
              textPrefixContainer?.getBoundingClientRect().width ?? 0,
            labelHorizontalOffset = `calc(${"rtl" === this._dir.value ? "-1" : "1"} * (${`${iconPrefixContainerWidth + textPrefixContainerWidth}px`} + var(--mat-mdc-form-field-label-offset-x, 0px)))`;
          floatingLabel.style.transform = `var(\n        --mat-mdc-form-field-label-transform,\n        translateY(-50%) translateX(${labelHorizontalOffset})\n    )`;
        }
        _isAttachedToDom() {
          const element = this._elementRef.nativeElement;
          if (element.getRootNode) {
            const rootNode = element.getRootNode();
            return rootNode && rootNode !== element;
          }
          return document.documentElement.contains(element);
        }
        static #_ = (this.ɵfac = function MatFormField_Factory(t) {
          return new (t || MatFormField)(
            core["ɵɵdirectiveInject"](core.ElementRef),
            core["ɵɵdirectiveInject"](core.ChangeDetectorRef),
            core["ɵɵdirectiveInject"](core.NgZone),
            core["ɵɵdirectiveInject"](bidi.dS),
            core["ɵɵdirectiveInject"](platform.OD),
            core["ɵɵdirectiveInject"](MAT_FORM_FIELD_DEFAULT_OPTIONS, 8),
            core["ɵɵdirectiveInject"](core.ANIMATION_MODULE_TYPE, 8),
            core["ɵɵdirectiveInject"](common.DOCUMENT),
          );
        });
        static #_2 = (this.ɵcmp = core["ɵɵdefineComponent"]({
          type: MatFormField,
          selectors: [["mat-form-field"]],
          contentQueries: function MatFormField_ContentQueries(
            rf,
            ctx,
            dirIndex,
          ) {
            if (
              (1 & rf &&
                (core["ɵɵcontentQuery"](dirIndex, MatLabel, 5),
                core["ɵɵcontentQuery"](dirIndex, MatLabel, 7),
                core["ɵɵcontentQuery"](dirIndex, MatFormFieldControl, 5),
                core["ɵɵcontentQuery"](dirIndex, MAT_PREFIX, 5),
                core["ɵɵcontentQuery"](dirIndex, MAT_SUFFIX, 5),
                core["ɵɵcontentQuery"](dirIndex, MAT_ERROR, 5),
                core["ɵɵcontentQuery"](dirIndex, MatHint, 5)),
              2 & rf)
            ) {
              let _t;
              core["ɵɵqueryRefresh"]((_t = core["ɵɵloadQuery"]())) &&
                (ctx._labelChildNonStatic = _t.first),
                core["ɵɵqueryRefresh"]((_t = core["ɵɵloadQuery"]())) &&
                  (ctx._labelChildStatic = _t.first),
                core["ɵɵqueryRefresh"]((_t = core["ɵɵloadQuery"]())) &&
                  (ctx._formFieldControl = _t.first),
                core["ɵɵqueryRefresh"]((_t = core["ɵɵloadQuery"]())) &&
                  (ctx._prefixChildren = _t),
                core["ɵɵqueryRefresh"]((_t = core["ɵɵloadQuery"]())) &&
                  (ctx._suffixChildren = _t),
                core["ɵɵqueryRefresh"]((_t = core["ɵɵloadQuery"]())) &&
                  (ctx._errorChildren = _t),
                core["ɵɵqueryRefresh"]((_t = core["ɵɵloadQuery"]())) &&
                  (ctx._hintChildren = _t);
            }
          },
          viewQuery: function MatFormField_Query(rf, ctx) {
            if (
              (1 & rf &&
                (core["ɵɵviewQuery"](_c3, 5),
                core["ɵɵviewQuery"](_c4, 5),
                core["ɵɵviewQuery"](_c5, 5),
                core["ɵɵviewQuery"](MatFormFieldFloatingLabel, 5),
                core["ɵɵviewQuery"](MatFormFieldNotchedOutline, 5),
                core["ɵɵviewQuery"](MatFormFieldLineRipple, 5)),
              2 & rf)
            ) {
              let _t;
              core["ɵɵqueryRefresh"]((_t = core["ɵɵloadQuery"]())) &&
                (ctx._textField = _t.first),
                core["ɵɵqueryRefresh"]((_t = core["ɵɵloadQuery"]())) &&
                  (ctx._iconPrefixContainer = _t.first),
                core["ɵɵqueryRefresh"]((_t = core["ɵɵloadQuery"]())) &&
                  (ctx._textPrefixContainer = _t.first),
                core["ɵɵqueryRefresh"]((_t = core["ɵɵloadQuery"]())) &&
                  (ctx._floatingLabel = _t.first),
                core["ɵɵqueryRefresh"]((_t = core["ɵɵloadQuery"]())) &&
                  (ctx._notchedOutline = _t.first),
                core["ɵɵqueryRefresh"]((_t = core["ɵɵloadQuery"]())) &&
                  (ctx._lineRipple = _t.first);
            }
          },
          hostAttrs: [1, "mat-mdc-form-field"],
          hostVars: 42,
          hostBindings: function MatFormField_HostBindings(rf, ctx) {
            2 & rf &&
              core["ɵɵclassProp"](
                "mat-mdc-form-field-label-always-float",
                ctx._shouldAlwaysFloat(),
              )("mat-mdc-form-field-has-icon-prefix", ctx._hasIconPrefix)(
                "mat-mdc-form-field-has-icon-suffix",
                ctx._hasIconSuffix,
              )("mat-form-field-invalid", ctx._control.errorState)(
                "mat-form-field-disabled",
                ctx._control.disabled,
              )("mat-form-field-autofilled", ctx._control.autofilled)(
                "mat-form-field-no-animations",
                "NoopAnimations" === ctx._animationMode,
              )("mat-form-field-appearance-fill", "fill" == ctx.appearance)(
                "mat-form-field-appearance-outline",
                "outline" == ctx.appearance,
              )(
                "mat-form-field-hide-placeholder",
                ctx._hasFloatingLabel() && !ctx._shouldLabelFloat(),
              )("mat-focused", ctx._control.focused)(
                "mat-primary",
                "accent" !== ctx.color && "warn" !== ctx.color,
              )("mat-accent", "accent" === ctx.color)(
                "mat-warn",
                "warn" === ctx.color,
              )("ng-untouched", ctx._shouldForward("untouched"))(
                "ng-touched",
                ctx._shouldForward("touched"),
              )("ng-pristine", ctx._shouldForward("pristine"))(
                "ng-dirty",
                ctx._shouldForward("dirty"),
              )("ng-valid", ctx._shouldForward("valid"))(
                "ng-invalid",
                ctx._shouldForward("invalid"),
              )("ng-pending", ctx._shouldForward("pending"));
          },
          inputs: {
            hideRequiredMarker: "hideRequiredMarker",
            color: "color",
            floatLabel: "floatLabel",
            appearance: "appearance",
            subscriptSizing: "subscriptSizing",
            hintLabel: "hintLabel",
          },
          exportAs: ["matFormField"],
          standalone: !0,
          features: [
            core["ɵɵProvidersFeature"]([
              { provide: MAT_FORM_FIELD, useExisting: MatFormField },
              { provide: FLOATING_LABEL_PARENT, useExisting: MatFormField },
            ]),
            core["ɵɵStandaloneFeature"],
          ],
          ngContentSelectors: _c7,
          decls: 18,
          vars: 21,
          consts: [
            ["labelTemplate", ""],
            ["textField", ""],
            ["iconPrefixContainer", ""],
            ["textPrefixContainer", ""],
            [1, "mat-mdc-text-field-wrapper", "mdc-text-field", 3, "click"],
            [1, "mat-mdc-form-field-focus-overlay"],
            [1, "mat-mdc-form-field-flex"],
            [
              "matFormFieldNotchedOutline",
              "",
              3,
              "matFormFieldNotchedOutlineOpen",
            ],
            [1, "mat-mdc-form-field-icon-prefix"],
            [1, "mat-mdc-form-field-text-prefix"],
            [1, "mat-mdc-form-field-infix"],
            [3, "ngTemplateOutlet"],
            [1, "mat-mdc-form-field-text-suffix"],
            [1, "mat-mdc-form-field-icon-suffix"],
            ["matFormFieldLineRipple", ""],
            [
              1,
              "mat-mdc-form-field-subscript-wrapper",
              "mat-mdc-form-field-bottom-align",
            ],
            [
              "matFormFieldFloatingLabel",
              "",
              3,
              "floating",
              "monitorResize",
              "id",
            ],
            [
              "aria-hidden",
              "true",
              1,
              "mat-mdc-form-field-required-marker",
              "mdc-floating-label--required",
            ],
            [1, "mat-mdc-form-field-error-wrapper"],
            [1, "mat-mdc-form-field-hint-wrapper"],
            [3, "id"],
            [1, "mat-mdc-form-field-hint-spacer"],
          ],
          template: function MatFormField_Template(rf, ctx) {
            if (1 & rf) {
              const _r1 = core["ɵɵgetCurrentView"]();
              core["ɵɵprojectionDef"](_c6),
                core["ɵɵtemplate"](
                  0,
                  MatFormField_ng_template_0_Template,
                  1,
                  1,
                  "ng-template",
                  null,
                  0,
                  core["ɵɵtemplateRefExtractor"],
                ),
                core["ɵɵelementStart"](2, "div", 4, 1),
                core["ɵɵlistener"](
                  "click",
                  function MatFormField_Template_div_click_2_listener($event) {
                    return (
                      core["ɵɵrestoreView"](_r1),
                      core["ɵɵresetView"](ctx._control.onContainerClick($event))
                    );
                  },
                ),
                core["ɵɵtemplate"](
                  4,
                  MatFormField_Conditional_4_Template,
                  1,
                  0,
                  "div",
                  5,
                ),
                core["ɵɵelementStart"](5, "div", 6),
                core["ɵɵtemplate"](
                  6,
                  MatFormField_Conditional_6_Template,
                  2,
                  2,
                  "div",
                  7,
                )(7, MatFormField_Conditional_7_Template, 3, 0, "div", 8)(
                  8,
                  MatFormField_Conditional_8_Template,
                  3,
                  0,
                  "div",
                  9,
                ),
                core["ɵɵelementStart"](9, "div", 10),
                core["ɵɵtemplate"](
                  10,
                  MatFormField_Conditional_10_Template,
                  1,
                  1,
                  null,
                  11,
                ),
                core["ɵɵprojection"](11),
                core["ɵɵelementEnd"](),
                core["ɵɵtemplate"](
                  12,
                  MatFormField_Conditional_12_Template,
                  2,
                  0,
                  "div",
                  12,
                )(13, MatFormField_Conditional_13_Template, 2, 0, "div", 13),
                core["ɵɵelementEnd"](),
                core["ɵɵtemplate"](
                  14,
                  MatFormField_Conditional_14_Template,
                  1,
                  0,
                  "div",
                  14,
                ),
                core["ɵɵelementEnd"](),
                core["ɵɵelementStart"](15, "div", 15),
                core["ɵɵtemplate"](16, MatFormField_Case_16_Template, 2, 1)(
                  17,
                  MatFormField_Case_17_Template,
                  5,
                  2,
                ),
                core["ɵɵelementEnd"]();
            }
            if (2 & rf) {
              let tmp_16_0;
              core["ɵɵadvance"](2),
                core["ɵɵclassProp"](
                  "mdc-text-field--filled",
                  !ctx._hasOutline(),
                )("mdc-text-field--outlined", ctx._hasOutline())(
                  "mdc-text-field--no-label",
                  !ctx._hasFloatingLabel(),
                )("mdc-text-field--disabled", ctx._control.disabled)(
                  "mdc-text-field--invalid",
                  ctx._control.errorState,
                ),
                core["ɵɵadvance"](2),
                core["ɵɵconditional"](
                  4,
                  ctx._hasOutline() || ctx._control.disabled ? -1 : 4,
                ),
                core["ɵɵadvance"](2),
                core["ɵɵconditional"](6, ctx._hasOutline() ? 6 : -1),
                core["ɵɵadvance"](),
                core["ɵɵconditional"](7, ctx._hasIconPrefix ? 7 : -1),
                core["ɵɵadvance"](),
                core["ɵɵconditional"](8, ctx._hasTextPrefix ? 8 : -1),
                core["ɵɵadvance"](2),
                core["ɵɵconditional"](
                  10,
                  !ctx._hasOutline() || ctx._forceDisplayInfixLabel() ? 10 : -1,
                ),
                core["ɵɵadvance"](2),
                core["ɵɵconditional"](12, ctx._hasTextSuffix ? 12 : -1),
                core["ɵɵadvance"](),
                core["ɵɵconditional"](13, ctx._hasIconSuffix ? 13 : -1),
                core["ɵɵadvance"](),
                core["ɵɵconditional"](14, ctx._hasOutline() ? -1 : 14),
                core["ɵɵadvance"](),
                core["ɵɵclassProp"](
                  "mat-mdc-form-field-subscript-dynamic-size",
                  "dynamic" === ctx.subscriptSizing,
                ),
                core["ɵɵadvance"](),
                core["ɵɵconditional"](
                  16,
                  "error" === (tmp_16_0 = ctx._getDisplayedMessages())
                    ? 16
                    : "hint" === tmp_16_0
                      ? 17
                      : -1,
                );
            }
          },
          dependencies: [
            MatFormFieldFloatingLabel,
            MatFormFieldNotchedOutline,
            common.NgTemplateOutlet,
            MatFormFieldLineRipple,
            MatHint,
          ],
          styles: [
            '.mdc-text-field{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0;display:inline-flex;align-items:baseline;padding:0 16px;position:relative;box-sizing:border-box;overflow:hidden;will-change:opacity,transform,color}.mdc-text-field .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-text-field__input{height:28px;width:100%;min-width:0;border:none;border-radius:0;background:none;appearance:none;padding:0}.mdc-text-field__input::-ms-clear{display:none}.mdc-text-field__input::-webkit-calendar-picker-indicator{display:none}.mdc-text-field__input:focus{outline:none}.mdc-text-field__input:invalid{box-shadow:none}@media all{.mdc-text-field__input::placeholder{opacity:0}}@media all{.mdc-text-field__input:-ms-input-placeholder{opacity:0}}@media all{.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mdc-text-field--focused .mdc-text-field__input::placeholder{opacity:1}}@media all{.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{opacity:1}}.mdc-text-field__affix{height:28px;opacity:0;white-space:nowrap}.mdc-text-field--label-floating .mdc-text-field__affix,.mdc-text-field--no-label .mdc-text-field__affix{opacity:1}@supports(-webkit-hyphens: none){.mdc-text-field--outlined .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field__affix--prefix,.mdc-text-field__affix--prefix[dir=rtl]{padding-left:2px;padding-right:0}.mdc-text-field--end-aligned .mdc-text-field__affix--prefix{padding-left:0;padding-right:12px}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--end-aligned .mdc-text-field__affix--prefix[dir=rtl]{padding-left:12px;padding-right:0}.mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field__affix--suffix,.mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:12px}.mdc-text-field--end-aligned .mdc-text-field__affix--suffix{padding-left:2px;padding-right:0}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--end-aligned .mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:2px}.mdc-text-field--filled{height:56px}.mdc-text-field--filled::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-text-field--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-text-field--filled .mdc-floating-label,.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{height:100%}.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label{display:none}.mdc-text-field--filled.mdc-text-field--no-label::before{display:none}@supports(-webkit-hyphens: none){.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field--outlined{height:56px;overflow:visible}.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--outlined .mdc-text-field__input{height:100%}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px,var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px,var(--mdc-shape-small, 4px))*2)}}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports(top: max(0%)){.mdc-text-field--outlined{padding-left:max(16px,calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined{padding-right:max(16px,var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-left:max(16px,calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-right:max(16px,var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-left:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-right:max(16px,var(--mdc-shape-small, 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-right:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:max(16px,var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-right:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-left:max(16px,calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-right:max(16px,calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-text-field--outlined .mdc-floating-label{left:4px;right:initial}[dir=rtl] .mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-text-field--outlined .mdc-text-field__input{display:flex;border:none !important;background-color:rgba(0,0,0,0)}.mdc-text-field--outlined .mdc-notched-outline{z-index:1}.mdc-text-field--textarea{flex-direction:column;align-items:center;width:auto;height:auto;padding:0}.mdc-text-field--textarea .mdc-floating-label{top:19px}.mdc-text-field--textarea .mdc-floating-label:not(.mdc-floating-label--float-above){transform:none}.mdc-text-field--textarea .mdc-text-field__input{flex-grow:1;height:auto;min-height:1.5rem;overflow-x:hidden;overflow-y:auto;box-sizing:border-box;resize:none;padding:0 16px}.mdc-text-field--textarea.mdc-text-field--filled::before{display:none}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-10.25px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--filled .mdc-text-field__input{margin-top:23px;margin-bottom:9px}.mdc-text-field--textarea.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-27.25px) scale(1)}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-24.75px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label{top:18px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field__input{margin-bottom:2px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter{align-self:flex-end;padding:0 16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::after{display:inline-block;width:0;height:16px;content:"";vertical-align:-16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::before{display:none}.mdc-text-field__resizer{align-self:stretch;display:inline-flex;flex-direction:column;flex-grow:1;max-height:100%;max-width:100%;min-height:56px;min-width:fit-content;min-width:-moz-available;min-width:-webkit-fill-available;overflow:hidden;resize:both}.mdc-text-field--filled .mdc-text-field__resizer{transform:translateY(-1px)}.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateY(1px)}.mdc-text-field--outlined .mdc-text-field__resizer{transform:translateX(-1px) translateY(-1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer,.mdc-text-field--outlined .mdc-text-field__resizer[dir=rtl]{transform:translateX(1px) translateY(-1px)}.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateX(1px) translateY(1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input[dir=rtl],.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter[dir=rtl]{transform:translateX(-1px) translateY(1px)}.mdc-text-field--with-leading-icon{padding-left:0;padding-right:16px}[dir=rtl] .mdc-text-field--with-leading-icon,.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:16px;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 48px);left:48px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100%/0.75 - 64px/0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--with-trailing-icon{padding-left:16px;padding-right:0}[dir=rtl] .mdc-text-field--with-trailing-icon,.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100%/0.75 - 64px/0.75)}.mdc-text-field--with-trailing-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100%/0.75 - 96px/0.75)}.mdc-text-field-helper-line{display:flex;justify-content:space-between;box-sizing:border-box}.mdc-text-field+.mdc-text-field-helper-line{padding-right:16px;padding-left:16px}.mdc-form-field>.mdc-text-field+label{align-self:flex-start}.mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--focused .mdc-notched-outline__trailing{border-width:2px}.mdc-text-field--focused+.mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg){opacity:1}.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-text-field--focused.mdc-text-field--outlined.mdc-text-field--textarea .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{opacity:1}.mdc-text-field--disabled{pointer-events:none}@media screen and (forced-colors: active){.mdc-text-field--disabled .mdc-text-field__input{background-color:Window}.mdc-text-field--disabled .mdc-floating-label{z-index:1}}.mdc-text-field--disabled .mdc-floating-label{cursor:default}.mdc-text-field--disabled.mdc-text-field--filled .mdc-text-field__ripple{display:none}.mdc-text-field--disabled .mdc-text-field__input{pointer-events:auto}.mdc-text-field--end-aligned .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--end-aligned .mdc-text-field__input[dir=rtl]{text-align:left}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix{direction:ltr}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--leading,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--leading{order:1}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{order:2}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input{order:3}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{order:4}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--trailing,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--trailing{order:5}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--prefix{padding-right:12px}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--suffix{padding-left:2px}.mdc-floating-label{position:absolute;left:0;-webkit-transform-origin:left top;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;-webkit-transform-origin:right top;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after{margin-left:1px;margin-right:0px;content:"*"}[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after,.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;pointer-events:none}.mdc-notched-outline__trailing{flex-grow:1}.mdc-notched-outline__notch{flex:0 0 auto;width:auto}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:133.3333333333%}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{z-index:1}.mdc-line-ripple::after{transform:scaleX(0);opacity:0;z-index:2}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{border-top:1px solid;border-bottom:1px solid}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{max-width:calc(100% - 12px*2)}.mdc-line-ripple::before{border-bottom-width:1px}.mdc-line-ripple::after{border-bottom-width:2px}.mdc-text-field--filled{border-top-left-radius:var(--mdc-filled-text-field-container-shape);border-top-right-radius:var(--mdc-filled-text-field-container-shape);border-bottom-right-radius:0;border-bottom-left-radius:0}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input{caret-color:var(--mdc-filled-text-field-caret-color)}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input{caret-color:var(--mdc-filled-text-field-error-caret-color)}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input{color:var(--mdc-filled-text-field-input-text-color)}.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input{color:var(--mdc-filled-text-field-disabled-input-text-color)}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label,.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label--float-above{color:var(--mdc-filled-text-field-label-text-color)}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label,.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label--float-above{color:var(--mdc-filled-text-field-focus-label-text-color)}.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label,.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label--float-above{color:var(--mdc-filled-text-field-hover-label-text-color)}.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label,.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label--float-above{color:var(--mdc-filled-text-field-disabled-label-text-color)}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label,.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label--float-above{color:var(--mdc-filled-text-field-error-label-text-color)}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label,.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label--float-above{color:var(--mdc-filled-text-field-error-focus-label-text-color)}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label,.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label--float-above{color:var(--mdc-filled-text-field-error-hover-label-text-color)}.mdc-text-field--filled .mdc-floating-label{font-family:var(--mdc-filled-text-field-label-text-font);font-size:var(--mdc-filled-text-field-label-text-size);font-weight:var(--mdc-filled-text-field-label-text-weight);letter-spacing:var(--mdc-filled-text-field-label-text-tracking)}@media all{.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:var(--mdc-filled-text-field-input-text-placeholder-color)}}@media all{.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:var(--mdc-filled-text-field-input-text-placeholder-color)}}.mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:var(--mdc-filled-text-field-container-color)}.mdc-text-field--filled.mdc-text-field--disabled{background-color:var(--mdc-filled-text-field-disabled-container-color)}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-active-indicator-color)}.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-hover-active-indicator-color)}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:var(--mdc-filled-text-field-focus-active-indicator-color)}.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-disabled-active-indicator-color)}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-error-active-indicator-color)}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-error-hover-active-indicator-color)}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:var(--mdc-filled-text-field-error-focus-active-indicator-color)}.mdc-text-field--filled .mdc-line-ripple::before{border-bottom-width:var(--mdc-filled-text-field-active-indicator-height)}.mdc-text-field--filled .mdc-line-ripple::after{border-bottom-width:var(--mdc-filled-text-field-focus-active-indicator-height)}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input{caret-color:var(--mdc-outlined-text-field-caret-color)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input{caret-color:var(--mdc-outlined-text-field-error-caret-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input{color:var(--mdc-outlined-text-field-input-text-color)}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input{color:var(--mdc-outlined-text-field-disabled-input-text-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label--float-above{color:var(--mdc-outlined-text-field-label-text-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label--float-above{color:var(--mdc-outlined-text-field-focus-label-text-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label--float-above{color:var(--mdc-outlined-text-field-hover-label-text-color)}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label,.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label--float-above{color:var(--mdc-outlined-text-field-disabled-label-text-color)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label--float-above{color:var(--mdc-outlined-text-field-error-label-text-color)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label--float-above{color:var(--mdc-outlined-text-field-error-focus-label-text-color)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label--float-above{color:var(--mdc-outlined-text-field-error-hover-label-text-color)}.mdc-text-field--outlined .mdc-floating-label{font-family:var(--mdc-outlined-text-field-label-text-font);font-size:var(--mdc-outlined-text-field-label-text-size);font-weight:var(--mdc-outlined-text-field-label-text-weight);letter-spacing:var(--mdc-outlined-text-field-label-text-tracking)}@media all{.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:var(--mdc-outlined-text-field-input-text-placeholder-color)}}@media all{.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:var(--mdc-outlined-text-field-input-text-placeholder-color)}}.mdc-text-field--outlined.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:calc(.75*var(--mdc-outlined-text-field-label-text-size))}.mdc-text-field--outlined.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:var(--mdc-outlined-text-field-label-text-size)}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:var(--mdc-outlined-text-field-container-shape);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:var(--mdc-outlined-text-field-container-shape)}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:var(--mdc-outlined-text-field-container-shape);border-bottom-right-radius:var(--mdc-outlined-text-field-container-shape);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px,var(--mdc-outlined-text-field-container-shape))}}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px,var(--mdc-outlined-text-field-container-shape))*2)}}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:var(--mdc-outlined-text-field-container-shape);border-bottom-right-radius:var(--mdc-outlined-text-field-container-shape);border-bottom-left-radius:0}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:var(--mdc-outlined-text-field-container-shape);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:var(--mdc-outlined-text-field-container-shape)}@supports(top: max(0%)){.mdc-text-field--outlined{padding-left:max(16px,calc(var(--mdc-outlined-text-field-container-shape) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined{padding-right:max(16px,var(--mdc-outlined-text-field-container-shape))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-left:max(16px,calc(var(--mdc-outlined-text-field-container-shape) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-right:max(16px,var(--mdc-outlined-text-field-container-shape))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-left:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-right:max(16px,var(--mdc-outlined-text-field-container-shape))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-right:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:max(16px,var(--mdc-outlined-text-field-container-shape))}}.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-right:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-left:max(16px,calc(var(--mdc-outlined-text-field-container-shape) + 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-right:max(16px,calc(var(--mdc-outlined-text-field-container-shape) + 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:var(--mdc-outlined-text-field-outline-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:var(--mdc-outlined-text-field-hover-outline-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:var(--mdc-outlined-text-field-focus-outline-color)}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--outlined.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--outlined.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:var(--mdc-outlined-text-field-disabled-outline-color)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:var(--mdc-outlined-text-field-error-outline-color)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:var(--mdc-outlined-text-field-error-hover-outline-color)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:var(--mdc-outlined-text-field-error-focus-outline-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline .mdc-notched-outline__trailing{border-width:var(--mdc-outlined-text-field-outline-width)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:var(--mdc-outlined-text-field-focus-outline-width)}.mat-mdc-form-field-textarea-control{vertical-align:middle;resize:vertical;box-sizing:border-box;height:auto;margin:0;padding:0;border:none;overflow:auto}.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font:inherit;letter-spacing:inherit;text-decoration:inherit;text-transform:inherit;border:none}.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;line-height:normal;pointer-events:all;will-change:auto}.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label{cursor:inherit}.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control{height:auto}.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color]{height:23px}.mat-mdc-text-field-wrapper{height:auto;flex:auto;will-change:auto}.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper{padding-left:0;--mat-mdc-form-field-label-offset-x: -16px}.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper{padding-right:0}[dir=rtl] .mat-mdc-text-field-wrapper{padding-left:16px;padding-right:16px}[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper{padding-left:0}[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper{padding-right:0}.mat-form-field-disabled .mdc-text-field__input::placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color)}.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color)}.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color)}.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color)}.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label{left:auto;right:auto}.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input{display:inline-block}.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch{padding-top:0}.mat-mdc-text-field-wrapper::before{content:none}.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch{border-left:1px solid rgba(0,0,0,0)}[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch{border-left:none;border-right:1px solid rgba(0,0,0,0)}.mat-mdc-form-field-infix{min-height:var(--mat-form-field-container-height);padding-top:var(--mat-form-field-filled-with-label-container-padding-top);padding-bottom:var(--mat-form-field-filled-with-label-container-padding-bottom)}.mdc-text-field--outlined .mat-mdc-form-field-infix,.mdc-text-field--no-label .mat-mdc-form-field-infix{padding-top:var(--mat-form-field-container-vertical-padding);padding-bottom:var(--mat-form-field-container-vertical-padding)}.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label{top:calc(var(--mat-form-field-container-height)/2)}.mdc-text-field--filled .mat-mdc-floating-label{display:var(--mat-form-field-filled-label-display, block)}.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{--mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height) / 2) * -1)) scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));transform:var(--mat-mdc-form-field-label-transform)}.mat-mdc-form-field-subscript-wrapper{box-sizing:border-box;width:100%;position:relative}.mat-mdc-form-field-hint-wrapper,.mat-mdc-form-field-error-wrapper{position:absolute;top:0;left:0;right:0;padding:0 16px}.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper{position:static}.mat-mdc-form-field-bottom-align::before{content:"";display:inline-block;height:16px}.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before{content:unset}.mat-mdc-form-field-hint-end{order:1}.mat-mdc-form-field-hint-wrapper{display:flex}.mat-mdc-form-field-hint-spacer{flex:1 0 1em}.mat-mdc-form-field-error{display:block;color:var(--mat-form-field-error-text-color)}.mat-mdc-form-field-subscript-wrapper,.mat-mdc-form-field-bottom-align::before{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-form-field-subscript-text-font);line-height:var(--mat-form-field-subscript-text-line-height);font-size:var(--mat-form-field-subscript-text-size);letter-spacing:var(--mat-form-field-subscript-text-tracking);font-weight:var(--mat-form-field-subscript-text-weight)}.mat-mdc-form-field-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;opacity:0;pointer-events:none;background-color:var(--mat-form-field-state-layer-color)}.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay{opacity:var(--mat-form-field-hover-state-layer-opacity)}.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay{opacity:var(--mat-form-field-focus-state-layer-opacity)}select.mat-mdc-form-field-input-control{-moz-appearance:none;-webkit-appearance:none;background-color:rgba(0,0,0,0);display:inline-flex;box-sizing:border-box}select.mat-mdc-form-field-input-control:not(:disabled){cursor:pointer}select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option{color:var(--mat-form-field-select-option-text-color)}select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled{color:var(--mat-form-field-select-disabled-option-text-color)}.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after{content:"";width:0;height:0;border-left:5px solid rgba(0,0,0,0);border-right:5px solid rgba(0,0,0,0);border-top:5px solid;position:absolute;right:0;top:50%;margin-top:-2.5px;pointer-events:none;color:var(--mat-form-field-enabled-select-arrow-color)}[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after{right:auto;left:0}.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after{color:var(--mat-form-field-focus-select-arrow-color)}.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after{color:var(--mat-form-field-disabled-select-arrow-color)}.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control{padding-right:15px}[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control{padding-right:0;padding-left:15px}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper{outline:solid 1px}.cdk-high-contrast-active .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper{outline-color:GrayText}.cdk-high-contrast-active .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper{outline:dashed 3px}.cdk-high-contrast-active .mat-mdc-form-field.mat-focused .mdc-notched-outline{border:dashed 3px}.mat-mdc-form-field-input-control[type=date],.mat-mdc-form-field-input-control[type=datetime],.mat-mdc-form-field-input-control[type=datetime-local],.mat-mdc-form-field-input-control[type=month],.mat-mdc-form-field-input-control[type=week],.mat-mdc-form-field-input-control[type=time]{line-height:1}.mat-mdc-form-field-input-control::-webkit-datetime-edit{line-height:1;padding:0;margin-bottom:-2px}.mat-mdc-form-field{--mat-mdc-form-field-floating-label-scale: 0.75;display:inline-flex;flex-direction:column;min-width:0;text-align:left;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-form-field-container-text-font);line-height:var(--mat-form-field-container-text-line-height);font-size:var(--mat-form-field-container-text-size);letter-spacing:var(--mat-form-field-container-text-tracking);font-weight:var(--mat-form-field-container-text-weight)}[dir=rtl] .mat-mdc-form-field{text-align:right}.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above{font-size:calc(var(--mat-form-field-outlined-label-text-populated-size)*var(--mat-mdc-form-field-floating-label-scale))}.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:var(--mat-form-field-outlined-label-text-populated-size)}.mat-mdc-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-mdc-text-field-wrapper{width:100%;z-index:0}.mat-mdc-form-field-icon-prefix,.mat-mdc-form-field-icon-suffix{align-self:center;line-height:0;pointer-events:auto;position:relative;z-index:1}.mat-mdc-form-field-icon-prefix>.mat-icon,.mat-mdc-form-field-icon-suffix>.mat-icon{padding:0 12px;box-sizing:content-box}.mat-mdc-form-field-icon-prefix{color:var(--mat-form-field-leading-icon-color)}.mat-form-field-disabled .mat-mdc-form-field-icon-prefix{color:var(--mat-form-field-disabled-leading-icon-color)}.mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-trailing-icon-color)}.mat-form-field-disabled .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-disabled-trailing-icon-color)}.mat-form-field-invalid .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-trailing-icon-color)}.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-hover-trailing-icon-color)}.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-focus-trailing-icon-color)}.mat-mdc-form-field-icon-prefix,[dir=rtl] .mat-mdc-form-field-icon-suffix{padding:0 4px 0 0}.mat-mdc-form-field-icon-suffix,[dir=rtl] .mat-mdc-form-field-icon-prefix{padding:0 0 0 4px}.mat-mdc-form-field-subscript-wrapper .mat-icon,.mat-mdc-form-field label .mat-icon{width:1em;height:1em;font-size:inherit}.mat-mdc-form-field-infix{flex:auto;min-width:0;width:180px;position:relative;box-sizing:border-box}.mat-mdc-form-field .mdc-notched-outline__notch{margin-left:-1px;-webkit-clip-path:inset(-9em -999em -9em 1px);clip-path:inset(-9em -999em -9em 1px)}[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch{margin-left:0;margin-right:-1px;-webkit-clip-path:inset(-9em 1px -9em -999em);clip-path:inset(-9em 1px -9em -999em)}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input{transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}@media all{.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input::placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}}@media all{.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input:-ms-input-placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}}@media all{.mdc-text-field--no-label .mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input::placeholder,.mdc-text-field--focused .mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms}}@media all{.mdc-text-field--no-label .mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input:-ms-input-placeholder{transition-delay:40ms;transition-duration:110ms}}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__affix{transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--filled.mdc-ripple-upgraded--background-focused .mdc-text-field__ripple::before,.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before{transition-duration:75ms}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined{0%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 34.75px)) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(calc(0% - 34.75px)) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(calc(0% - 34.75px)) scale(0.75)}100%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 34.75px)) scale(0.75)}}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--textarea{transition:none}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-filled 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-filled{0%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 10.25px)) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(calc(0% - 10.25px)) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(calc(0% - 10.25px)) scale(0.75)}100%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 10.25px)) scale(0.75)}}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-outlined{0%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 24.75px)) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(calc(0% - 24.75px)) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(calc(0% - 24.75px)) scale(0.75)}100%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 24.75px)) scale(0.75)}}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon{0%{transform:translateX(calc(0% - 32px)) translateY(calc(0% - 34.75px)) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(calc(0% - 34.75px)) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(calc(0% - 34.75px)) scale(0.75)}100%{transform:translateX(calc(0% - 32px)) translateY(calc(0% - 34.75px)) scale(0.75)}}[dir=rtl] .mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake,.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--with-leading-icon.mdc-text-field--outlined[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl{0%{transform:translateX(calc(0% - -32px)) translateY(calc(0% - 34.75px)) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(calc(0% - 34.75px)) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(calc(0% - 34.75px)) scale(0.75)}100%{transform:translateX(calc(0% - -32px)) translateY(calc(0% - 34.75px)) scale(0.75)}}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-floating-label{transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 106%)) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(calc(0% - 106%)) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(calc(0% - 106%)) scale(0.75)}100%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 106%)) scale(0.75)}}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-notched-outline .mdc-floating-label{max-width:calc(100% + 1px)}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(133.3333333333% + 1px)}',
          ],
          encapsulation: 2,
          data: { animation: [matFormFieldAnimations.transitionMessages] },
          changeDetection: 0,
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          MatFormField,
          [
            {
              type: core.Component,
              args: [
                {
                  selector: "mat-form-field",
                  exportAs: "matFormField",
                  animations: [matFormFieldAnimations.transitionMessages],
                  host: {
                    class: "mat-mdc-form-field",
                    "[class.mat-mdc-form-field-label-always-float]":
                      "_shouldAlwaysFloat()",
                    "[class.mat-mdc-form-field-has-icon-prefix]":
                      "_hasIconPrefix",
                    "[class.mat-mdc-form-field-has-icon-suffix]":
                      "_hasIconSuffix",
                    "[class.mat-form-field-invalid]": "_control.errorState",
                    "[class.mat-form-field-disabled]": "_control.disabled",
                    "[class.mat-form-field-autofilled]": "_control.autofilled",
                    "[class.mat-form-field-no-animations]":
                      '_animationMode === "NoopAnimations"',
                    "[class.mat-form-field-appearance-fill]":
                      'appearance == "fill"',
                    "[class.mat-form-field-appearance-outline]":
                      'appearance == "outline"',
                    "[class.mat-form-field-hide-placeholder]":
                      "_hasFloatingLabel() && !_shouldLabelFloat()",
                    "[class.mat-focused]": "_control.focused",
                    "[class.mat-primary]":
                      'color !== "accent" && color !== "warn"',
                    "[class.mat-accent]": 'color === "accent"',
                    "[class.mat-warn]": 'color === "warn"',
                    "[class.ng-untouched]": '_shouldForward("untouched")',
                    "[class.ng-touched]": '_shouldForward("touched")',
                    "[class.ng-pristine]": '_shouldForward("pristine")',
                    "[class.ng-dirty]": '_shouldForward("dirty")',
                    "[class.ng-valid]": '_shouldForward("valid")',
                    "[class.ng-invalid]": '_shouldForward("invalid")',
                    "[class.ng-pending]": '_shouldForward("pending")',
                  },
                  encapsulation: core.ViewEncapsulation.None,
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  providers: [
                    { provide: MAT_FORM_FIELD, useExisting: MatFormField },
                    {
                      provide: FLOATING_LABEL_PARENT,
                      useExisting: MatFormField,
                    },
                  ],
                  standalone: !0,
                  imports: [
                    MatFormFieldFloatingLabel,
                    MatFormFieldNotchedOutline,
                    common.NgTemplateOutlet,
                    MatFormFieldLineRipple,
                    MatHint,
                  ],
                  template:
                    '<ng-template #labelTemplate>\n  \x3c!--\n    MDC recommends that the text-field is a `<label>` element. This rather complicates the\n    setup because it would require every form-field control to explicitly set `aria-labelledby`.\n    This is because the `<label>` itself contains more than the actual label (e.g. prefix, suffix\n    or other projected content), and screen readers could potentially read out undesired content.\n    Excluding elements from being printed out requires them to be marked with `aria-hidden`, or\n    the form control is set to a scoped element for the label (using `aria-labelledby`). Both of\n    these options seem to complicate the setup because we know exactly what content is rendered\n    as part of the label, and we don\'t want to spend resources on walking through projected content\n    to set `aria-hidden`. Nor do we want to set `aria-labelledby` on every form control if we could\n    simply link the label to the control using the label `for` attribute.\n  --\x3e\n  @if (_hasFloatingLabel()) {\n    <label matFormFieldFloatingLabel\n           [floating]="_shouldLabelFloat()"\n           [monitorResize]="_hasOutline()"\n           [id]="_labelId"\n           [attr.for]="_control.disableAutomaticLabeling ? null : _control.id">\n      <ng-content select="mat-label"></ng-content>\n      \x3c!--\n        We set the required marker as a separate element, in order to make it easier to target if\n        apps want to override it and to be able to set `aria-hidden` so that screen readers don\'t\n        pick it up.\n       --\x3e\n       @if (!hideRequiredMarker && _control.required) {\n         <span\n           aria-hidden="true"\n           class="mat-mdc-form-field-required-marker mdc-floating-label--required"></span>\n       }\n    </label>\n  }\n</ng-template>\n\n<div class="mat-mdc-text-field-wrapper mdc-text-field" #textField\n     [class.mdc-text-field--filled]="!_hasOutline()"\n     [class.mdc-text-field--outlined]="_hasOutline()"\n     [class.mdc-text-field--no-label]="!_hasFloatingLabel()"\n     [class.mdc-text-field--disabled]="_control.disabled"\n     [class.mdc-text-field--invalid]="_control.errorState"\n     (click)="_control.onContainerClick($event)">\n  @if (!_hasOutline() && !_control.disabled) {\n    <div class="mat-mdc-form-field-focus-overlay"></div>\n  }\n  <div class="mat-mdc-form-field-flex">\n    @if (_hasOutline()) {\n      <div matFormFieldNotchedOutline [matFormFieldNotchedOutlineOpen]="_shouldLabelFloat()">\n        @if (!_forceDisplayInfixLabel()) {\n          <ng-template [ngTemplateOutlet]="labelTemplate"></ng-template>\n        }\n      </div>\n    }\n\n    @if (_hasIconPrefix) {\n      <div class="mat-mdc-form-field-icon-prefix" #iconPrefixContainer>\n        <ng-content select="[matPrefix], [matIconPrefix]"></ng-content>\n      </div>\n    }\n\n    @if (_hasTextPrefix) {\n      <div class="mat-mdc-form-field-text-prefix" #textPrefixContainer>\n        <ng-content select="[matTextPrefix]"></ng-content>\n      </div>\n    }\n\n    <div class="mat-mdc-form-field-infix">\n      @if (!_hasOutline() || _forceDisplayInfixLabel()) {\n        <ng-template [ngTemplateOutlet]="labelTemplate"></ng-template>\n      }\n\n      <ng-content></ng-content>\n    </div>\n\n    @if (_hasTextSuffix) {\n      <div class="mat-mdc-form-field-text-suffix">\n        <ng-content select="[matTextSuffix]"></ng-content>\n      </div>\n    }\n\n    @if (_hasIconSuffix) {\n      <div class="mat-mdc-form-field-icon-suffix">\n        <ng-content select="[matSuffix], [matIconSuffix]"></ng-content>\n      </div>\n    }\n  </div>\n\n  @if (!_hasOutline()) {\n    <div matFormFieldLineRipple></div>\n  }\n</div>\n\n<div class="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align"\n     [class.mat-mdc-form-field-subscript-dynamic-size]="subscriptSizing === \'dynamic\'">\n\n  @switch (_getDisplayedMessages()) {\n    @case (\'error\') {\n      <div class="mat-mdc-form-field-error-wrapper"\n           [@transitionMessages]="_subscriptAnimationState">\n        <ng-content select="mat-error, [matError]"></ng-content>\n      </div>\n    }\n\n    @case (\'hint\') {\n      <div class="mat-mdc-form-field-hint-wrapper" [@transitionMessages]="_subscriptAnimationState">\n        @if (hintLabel) {\n          <mat-hint [id]="_hintLabelId">{{hintLabel}}</mat-hint>\n        }\n        <ng-content select="mat-hint:not([align=\'end\'])"></ng-content>\n        <div class="mat-mdc-form-field-hint-spacer"></div>\n        <ng-content select="mat-hint[align=\'end\']"></ng-content>\n      </div>\n    }\n  }\n</div>\n',
                  styles: [
                    '.mdc-text-field{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0;display:inline-flex;align-items:baseline;padding:0 16px;position:relative;box-sizing:border-box;overflow:hidden;will-change:opacity,transform,color}.mdc-text-field .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-text-field__input{height:28px;width:100%;min-width:0;border:none;border-radius:0;background:none;appearance:none;padding:0}.mdc-text-field__input::-ms-clear{display:none}.mdc-text-field__input::-webkit-calendar-picker-indicator{display:none}.mdc-text-field__input:focus{outline:none}.mdc-text-field__input:invalid{box-shadow:none}@media all{.mdc-text-field__input::placeholder{opacity:0}}@media all{.mdc-text-field__input:-ms-input-placeholder{opacity:0}}@media all{.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mdc-text-field--focused .mdc-text-field__input::placeholder{opacity:1}}@media all{.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{opacity:1}}.mdc-text-field__affix{height:28px;opacity:0;white-space:nowrap}.mdc-text-field--label-floating .mdc-text-field__affix,.mdc-text-field--no-label .mdc-text-field__affix{opacity:1}@supports(-webkit-hyphens: none){.mdc-text-field--outlined .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field__affix--prefix,.mdc-text-field__affix--prefix[dir=rtl]{padding-left:2px;padding-right:0}.mdc-text-field--end-aligned .mdc-text-field__affix--prefix{padding-left:0;padding-right:12px}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--end-aligned .mdc-text-field__affix--prefix[dir=rtl]{padding-left:12px;padding-right:0}.mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field__affix--suffix,.mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:12px}.mdc-text-field--end-aligned .mdc-text-field__affix--suffix{padding-left:2px;padding-right:0}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--end-aligned .mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:2px}.mdc-text-field--filled{height:56px}.mdc-text-field--filled::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-text-field--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-text-field--filled .mdc-floating-label,.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{height:100%}.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label{display:none}.mdc-text-field--filled.mdc-text-field--no-label::before{display:none}@supports(-webkit-hyphens: none){.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field--outlined{height:56px;overflow:visible}.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--outlined .mdc-text-field__input{height:100%}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px,var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px,var(--mdc-shape-small, 4px))*2)}}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports(top: max(0%)){.mdc-text-field--outlined{padding-left:max(16px,calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined{padding-right:max(16px,var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-left:max(16px,calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-right:max(16px,var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-left:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-right:max(16px,var(--mdc-shape-small, 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-right:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:max(16px,var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-right:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-left:max(16px,calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-right:max(16px,calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-text-field--outlined .mdc-floating-label{left:4px;right:initial}[dir=rtl] .mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-text-field--outlined .mdc-text-field__input{display:flex;border:none !important;background-color:rgba(0,0,0,0)}.mdc-text-field--outlined .mdc-notched-outline{z-index:1}.mdc-text-field--textarea{flex-direction:column;align-items:center;width:auto;height:auto;padding:0}.mdc-text-field--textarea .mdc-floating-label{top:19px}.mdc-text-field--textarea .mdc-floating-label:not(.mdc-floating-label--float-above){transform:none}.mdc-text-field--textarea .mdc-text-field__input{flex-grow:1;height:auto;min-height:1.5rem;overflow-x:hidden;overflow-y:auto;box-sizing:border-box;resize:none;padding:0 16px}.mdc-text-field--textarea.mdc-text-field--filled::before{display:none}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-10.25px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--filled .mdc-text-field__input{margin-top:23px;margin-bottom:9px}.mdc-text-field--textarea.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-27.25px) scale(1)}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-24.75px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label{top:18px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field__input{margin-bottom:2px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter{align-self:flex-end;padding:0 16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::after{display:inline-block;width:0;height:16px;content:"";vertical-align:-16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::before{display:none}.mdc-text-field__resizer{align-self:stretch;display:inline-flex;flex-direction:column;flex-grow:1;max-height:100%;max-width:100%;min-height:56px;min-width:fit-content;min-width:-moz-available;min-width:-webkit-fill-available;overflow:hidden;resize:both}.mdc-text-field--filled .mdc-text-field__resizer{transform:translateY(-1px)}.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateY(1px)}.mdc-text-field--outlined .mdc-text-field__resizer{transform:translateX(-1px) translateY(-1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer,.mdc-text-field--outlined .mdc-text-field__resizer[dir=rtl]{transform:translateX(1px) translateY(-1px)}.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateX(1px) translateY(1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input[dir=rtl],.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter[dir=rtl]{transform:translateX(-1px) translateY(1px)}.mdc-text-field--with-leading-icon{padding-left:0;padding-right:16px}[dir=rtl] .mdc-text-field--with-leading-icon,.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:16px;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 48px);left:48px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100%/0.75 - 64px/0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--with-trailing-icon{padding-left:16px;padding-right:0}[dir=rtl] .mdc-text-field--with-trailing-icon,.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100%/0.75 - 64px/0.75)}.mdc-text-field--with-trailing-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100%/0.75 - 96px/0.75)}.mdc-text-field-helper-line{display:flex;justify-content:space-between;box-sizing:border-box}.mdc-text-field+.mdc-text-field-helper-line{padding-right:16px;padding-left:16px}.mdc-form-field>.mdc-text-field+label{align-self:flex-start}.mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--focused .mdc-notched-outline__trailing{border-width:2px}.mdc-text-field--focused+.mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg){opacity:1}.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-text-field--focused.mdc-text-field--outlined.mdc-text-field--textarea .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{opacity:1}.mdc-text-field--disabled{pointer-events:none}@media screen and (forced-colors: active){.mdc-text-field--disabled .mdc-text-field__input{background-color:Window}.mdc-text-field--disabled .mdc-floating-label{z-index:1}}.mdc-text-field--disabled .mdc-floating-label{cursor:default}.mdc-text-field--disabled.mdc-text-field--filled .mdc-text-field__ripple{display:none}.mdc-text-field--disabled .mdc-text-field__input{pointer-events:auto}.mdc-text-field--end-aligned .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--end-aligned .mdc-text-field__input[dir=rtl]{text-align:left}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix{direction:ltr}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--leading,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--leading{order:1}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{order:2}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input{order:3}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{order:4}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--trailing,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--trailing{order:5}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--prefix{padding-right:12px}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--suffix{padding-left:2px}.mdc-floating-label{position:absolute;left:0;-webkit-transform-origin:left top;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;-webkit-transform-origin:right top;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after{margin-left:1px;margin-right:0px;content:"*"}[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after,.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;pointer-events:none}.mdc-notched-outline__trailing{flex-grow:1}.mdc-notched-outline__notch{flex:0 0 auto;width:auto}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:133.3333333333%}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{z-index:1}.mdc-line-ripple::after{transform:scaleX(0);opacity:0;z-index:2}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{border-top:1px solid;border-bottom:1px solid}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{max-width:calc(100% - 12px*2)}.mdc-line-ripple::before{border-bottom-width:1px}.mdc-line-ripple::after{border-bottom-width:2px}.mdc-text-field--filled{border-top-left-radius:var(--mdc-filled-text-field-container-shape);border-top-right-radius:var(--mdc-filled-text-field-container-shape);border-bottom-right-radius:0;border-bottom-left-radius:0}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input{caret-color:var(--mdc-filled-text-field-caret-color)}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input{caret-color:var(--mdc-filled-text-field-error-caret-color)}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input{color:var(--mdc-filled-text-field-input-text-color)}.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input{color:var(--mdc-filled-text-field-disabled-input-text-color)}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label,.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label--float-above{color:var(--mdc-filled-text-field-label-text-color)}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label,.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label--float-above{color:var(--mdc-filled-text-field-focus-label-text-color)}.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label,.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label--float-above{color:var(--mdc-filled-text-field-hover-label-text-color)}.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label,.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label--float-above{color:var(--mdc-filled-text-field-disabled-label-text-color)}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label,.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label--float-above{color:var(--mdc-filled-text-field-error-label-text-color)}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label,.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label--float-above{color:var(--mdc-filled-text-field-error-focus-label-text-color)}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label,.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label--float-above{color:var(--mdc-filled-text-field-error-hover-label-text-color)}.mdc-text-field--filled .mdc-floating-label{font-family:var(--mdc-filled-text-field-label-text-font);font-size:var(--mdc-filled-text-field-label-text-size);font-weight:var(--mdc-filled-text-field-label-text-weight);letter-spacing:var(--mdc-filled-text-field-label-text-tracking)}@media all{.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:var(--mdc-filled-text-field-input-text-placeholder-color)}}@media all{.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:var(--mdc-filled-text-field-input-text-placeholder-color)}}.mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:var(--mdc-filled-text-field-container-color)}.mdc-text-field--filled.mdc-text-field--disabled{background-color:var(--mdc-filled-text-field-disabled-container-color)}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-active-indicator-color)}.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-hover-active-indicator-color)}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:var(--mdc-filled-text-field-focus-active-indicator-color)}.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-disabled-active-indicator-color)}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-error-active-indicator-color)}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-error-hover-active-indicator-color)}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:var(--mdc-filled-text-field-error-focus-active-indicator-color)}.mdc-text-field--filled .mdc-line-ripple::before{border-bottom-width:var(--mdc-filled-text-field-active-indicator-height)}.mdc-text-field--filled .mdc-line-ripple::after{border-bottom-width:var(--mdc-filled-text-field-focus-active-indicator-height)}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input{caret-color:var(--mdc-outlined-text-field-caret-color)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input{caret-color:var(--mdc-outlined-text-field-error-caret-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input{color:var(--mdc-outlined-text-field-input-text-color)}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input{color:var(--mdc-outlined-text-field-disabled-input-text-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label--float-above{color:var(--mdc-outlined-text-field-label-text-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label--float-above{color:var(--mdc-outlined-text-field-focus-label-text-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label--float-above{color:var(--mdc-outlined-text-field-hover-label-text-color)}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label,.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label--float-above{color:var(--mdc-outlined-text-field-disabled-label-text-color)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label--float-above{color:var(--mdc-outlined-text-field-error-label-text-color)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label--float-above{color:var(--mdc-outlined-text-field-error-focus-label-text-color)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label--float-above{color:var(--mdc-outlined-text-field-error-hover-label-text-color)}.mdc-text-field--outlined .mdc-floating-label{font-family:var(--mdc-outlined-text-field-label-text-font);font-size:var(--mdc-outlined-text-field-label-text-size);font-weight:var(--mdc-outlined-text-field-label-text-weight);letter-spacing:var(--mdc-outlined-text-field-label-text-tracking)}@media all{.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:var(--mdc-outlined-text-field-input-text-placeholder-color)}}@media all{.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:var(--mdc-outlined-text-field-input-text-placeholder-color)}}.mdc-text-field--outlined.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:calc(.75*var(--mdc-outlined-text-field-label-text-size))}.mdc-text-field--outlined.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:var(--mdc-outlined-text-field-label-text-size)}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:var(--mdc-outlined-text-field-container-shape);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:var(--mdc-outlined-text-field-container-shape)}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:var(--mdc-outlined-text-field-container-shape);border-bottom-right-radius:var(--mdc-outlined-text-field-container-shape);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px,var(--mdc-outlined-text-field-container-shape))}}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px,var(--mdc-outlined-text-field-container-shape))*2)}}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:var(--mdc-outlined-text-field-container-shape);border-bottom-right-radius:var(--mdc-outlined-text-field-container-shape);border-bottom-left-radius:0}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:var(--mdc-outlined-text-field-container-shape);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:var(--mdc-outlined-text-field-container-shape)}@supports(top: max(0%)){.mdc-text-field--outlined{padding-left:max(16px,calc(var(--mdc-outlined-text-field-container-shape) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined{padding-right:max(16px,var(--mdc-outlined-text-field-container-shape))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-left:max(16px,calc(var(--mdc-outlined-text-field-container-shape) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-right:max(16px,var(--mdc-outlined-text-field-container-shape))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-left:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-right:max(16px,var(--mdc-outlined-text-field-container-shape))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-right:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:max(16px,var(--mdc-outlined-text-field-container-shape))}}.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-right:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-left:max(16px,calc(var(--mdc-outlined-text-field-container-shape) + 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-right:max(16px,calc(var(--mdc-outlined-text-field-container-shape) + 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:var(--mdc-outlined-text-field-outline-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:var(--mdc-outlined-text-field-hover-outline-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:var(--mdc-outlined-text-field-focus-outline-color)}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--outlined.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--outlined.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:var(--mdc-outlined-text-field-disabled-outline-color)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:var(--mdc-outlined-text-field-error-outline-color)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:var(--mdc-outlined-text-field-error-hover-outline-color)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:var(--mdc-outlined-text-field-error-focus-outline-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline .mdc-notched-outline__trailing{border-width:var(--mdc-outlined-text-field-outline-width)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:var(--mdc-outlined-text-field-focus-outline-width)}.mat-mdc-form-field-textarea-control{vertical-align:middle;resize:vertical;box-sizing:border-box;height:auto;margin:0;padding:0;border:none;overflow:auto}.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font:inherit;letter-spacing:inherit;text-decoration:inherit;text-transform:inherit;border:none}.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;line-height:normal;pointer-events:all;will-change:auto}.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label{cursor:inherit}.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control{height:auto}.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color]{height:23px}.mat-mdc-text-field-wrapper{height:auto;flex:auto;will-change:auto}.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper{padding-left:0;--mat-mdc-form-field-label-offset-x: -16px}.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper{padding-right:0}[dir=rtl] .mat-mdc-text-field-wrapper{padding-left:16px;padding-right:16px}[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper{padding-left:0}[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper{padding-right:0}.mat-form-field-disabled .mdc-text-field__input::placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color)}.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color)}.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color)}.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color)}.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label{left:auto;right:auto}.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input{display:inline-block}.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch{padding-top:0}.mat-mdc-text-field-wrapper::before{content:none}.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch{border-left:1px solid rgba(0,0,0,0)}[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch{border-left:none;border-right:1px solid rgba(0,0,0,0)}.mat-mdc-form-field-infix{min-height:var(--mat-form-field-container-height);padding-top:var(--mat-form-field-filled-with-label-container-padding-top);padding-bottom:var(--mat-form-field-filled-with-label-container-padding-bottom)}.mdc-text-field--outlined .mat-mdc-form-field-infix,.mdc-text-field--no-label .mat-mdc-form-field-infix{padding-top:var(--mat-form-field-container-vertical-padding);padding-bottom:var(--mat-form-field-container-vertical-padding)}.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label{top:calc(var(--mat-form-field-container-height)/2)}.mdc-text-field--filled .mat-mdc-floating-label{display:var(--mat-form-field-filled-label-display, block)}.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{--mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height) / 2) * -1)) scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));transform:var(--mat-mdc-form-field-label-transform)}.mat-mdc-form-field-subscript-wrapper{box-sizing:border-box;width:100%;position:relative}.mat-mdc-form-field-hint-wrapper,.mat-mdc-form-field-error-wrapper{position:absolute;top:0;left:0;right:0;padding:0 16px}.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper{position:static}.mat-mdc-form-field-bottom-align::before{content:"";display:inline-block;height:16px}.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before{content:unset}.mat-mdc-form-field-hint-end{order:1}.mat-mdc-form-field-hint-wrapper{display:flex}.mat-mdc-form-field-hint-spacer{flex:1 0 1em}.mat-mdc-form-field-error{display:block;color:var(--mat-form-field-error-text-color)}.mat-mdc-form-field-subscript-wrapper,.mat-mdc-form-field-bottom-align::before{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-form-field-subscript-text-font);line-height:var(--mat-form-field-subscript-text-line-height);font-size:var(--mat-form-field-subscript-text-size);letter-spacing:var(--mat-form-field-subscript-text-tracking);font-weight:var(--mat-form-field-subscript-text-weight)}.mat-mdc-form-field-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;opacity:0;pointer-events:none;background-color:var(--mat-form-field-state-layer-color)}.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay{opacity:var(--mat-form-field-hover-state-layer-opacity)}.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay{opacity:var(--mat-form-field-focus-state-layer-opacity)}select.mat-mdc-form-field-input-control{-moz-appearance:none;-webkit-appearance:none;background-color:rgba(0,0,0,0);display:inline-flex;box-sizing:border-box}select.mat-mdc-form-field-input-control:not(:disabled){cursor:pointer}select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option{color:var(--mat-form-field-select-option-text-color)}select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled{color:var(--mat-form-field-select-disabled-option-text-color)}.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after{content:"";width:0;height:0;border-left:5px solid rgba(0,0,0,0);border-right:5px solid rgba(0,0,0,0);border-top:5px solid;position:absolute;right:0;top:50%;margin-top:-2.5px;pointer-events:none;color:var(--mat-form-field-enabled-select-arrow-color)}[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after{right:auto;left:0}.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after{color:var(--mat-form-field-focus-select-arrow-color)}.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after{color:var(--mat-form-field-disabled-select-arrow-color)}.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control{padding-right:15px}[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control{padding-right:0;padding-left:15px}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper{outline:solid 1px}.cdk-high-contrast-active .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper{outline-color:GrayText}.cdk-high-contrast-active .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper{outline:dashed 3px}.cdk-high-contrast-active .mat-mdc-form-field.mat-focused .mdc-notched-outline{border:dashed 3px}.mat-mdc-form-field-input-control[type=date],.mat-mdc-form-field-input-control[type=datetime],.mat-mdc-form-field-input-control[type=datetime-local],.mat-mdc-form-field-input-control[type=month],.mat-mdc-form-field-input-control[type=week],.mat-mdc-form-field-input-control[type=time]{line-height:1}.mat-mdc-form-field-input-control::-webkit-datetime-edit{line-height:1;padding:0;margin-bottom:-2px}.mat-mdc-form-field{--mat-mdc-form-field-floating-label-scale: 0.75;display:inline-flex;flex-direction:column;min-width:0;text-align:left;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-form-field-container-text-font);line-height:var(--mat-form-field-container-text-line-height);font-size:var(--mat-form-field-container-text-size);letter-spacing:var(--mat-form-field-container-text-tracking);font-weight:var(--mat-form-field-container-text-weight)}[dir=rtl] .mat-mdc-form-field{text-align:right}.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above{font-size:calc(var(--mat-form-field-outlined-label-text-populated-size)*var(--mat-mdc-form-field-floating-label-scale))}.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:var(--mat-form-field-outlined-label-text-populated-size)}.mat-mdc-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-mdc-text-field-wrapper{width:100%;z-index:0}.mat-mdc-form-field-icon-prefix,.mat-mdc-form-field-icon-suffix{align-self:center;line-height:0;pointer-events:auto;position:relative;z-index:1}.mat-mdc-form-field-icon-prefix>.mat-icon,.mat-mdc-form-field-icon-suffix>.mat-icon{padding:0 12px;box-sizing:content-box}.mat-mdc-form-field-icon-prefix{color:var(--mat-form-field-leading-icon-color)}.mat-form-field-disabled .mat-mdc-form-field-icon-prefix{color:var(--mat-form-field-disabled-leading-icon-color)}.mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-trailing-icon-color)}.mat-form-field-disabled .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-disabled-trailing-icon-color)}.mat-form-field-invalid .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-trailing-icon-color)}.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-hover-trailing-icon-color)}.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-focus-trailing-icon-color)}.mat-mdc-form-field-icon-prefix,[dir=rtl] .mat-mdc-form-field-icon-suffix{padding:0 4px 0 0}.mat-mdc-form-field-icon-suffix,[dir=rtl] .mat-mdc-form-field-icon-prefix{padding:0 0 0 4px}.mat-mdc-form-field-subscript-wrapper .mat-icon,.mat-mdc-form-field label .mat-icon{width:1em;height:1em;font-size:inherit}.mat-mdc-form-field-infix{flex:auto;min-width:0;width:180px;position:relative;box-sizing:border-box}.mat-mdc-form-field .mdc-notched-outline__notch{margin-left:-1px;-webkit-clip-path:inset(-9em -999em -9em 1px);clip-path:inset(-9em -999em -9em 1px)}[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch{margin-left:0;margin-right:-1px;-webkit-clip-path:inset(-9em 1px -9em -999em);clip-path:inset(-9em 1px -9em -999em)}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input{transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}@media all{.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input::placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}}@media all{.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input:-ms-input-placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}}@media all{.mdc-text-field--no-label .mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input::placeholder,.mdc-text-field--focused .mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms}}@media all{.mdc-text-field--no-label .mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input:-ms-input-placeholder{transition-delay:40ms;transition-duration:110ms}}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__affix{transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--filled.mdc-ripple-upgraded--background-focused .mdc-text-field__ripple::before,.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before{transition-duration:75ms}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined{0%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 34.75px)) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(calc(0% - 34.75px)) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(calc(0% - 34.75px)) scale(0.75)}100%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 34.75px)) scale(0.75)}}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--textarea{transition:none}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-filled 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-filled{0%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 10.25px)) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(calc(0% - 10.25px)) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(calc(0% - 10.25px)) scale(0.75)}100%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 10.25px)) scale(0.75)}}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-outlined{0%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 24.75px)) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(calc(0% - 24.75px)) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(calc(0% - 24.75px)) scale(0.75)}100%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 24.75px)) scale(0.75)}}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon{0%{transform:translateX(calc(0% - 32px)) translateY(calc(0% - 34.75px)) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(calc(0% - 34.75px)) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(calc(0% - 34.75px)) scale(0.75)}100%{transform:translateX(calc(0% - 32px)) translateY(calc(0% - 34.75px)) scale(0.75)}}[dir=rtl] .mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake,.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--with-leading-icon.mdc-text-field--outlined[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl{0%{transform:translateX(calc(0% - -32px)) translateY(calc(0% - 34.75px)) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(calc(0% - 34.75px)) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(calc(0% - 34.75px)) scale(0.75)}100%{transform:translateX(calc(0% - -32px)) translateY(calc(0% - 34.75px)) scale(0.75)}}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-floating-label{transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 106%)) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(calc(0% - 106%)) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(calc(0% - 106%)) scale(0.75)}100%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 106%)) scale(0.75)}}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-notched-outline .mdc-floating-label{max-width:calc(100% + 1px)}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(133.3333333333% + 1px)}',
                  ],
                },
              ],
            },
          ],
          () => [
            { type: core.ElementRef },
            { type: core.ChangeDetectorRef },
            { type: core.NgZone },
            { type: bidi.dS },
            { type: platform.OD },
            {
              type: void 0,
              decorators: [
                { type: core.Optional },
                { type: core.Inject, args: [MAT_FORM_FIELD_DEFAULT_OPTIONS] },
              ],
            },
            {
              type: void 0,
              decorators: [
                { type: core.Optional },
                { type: core.Inject, args: [core.ANIMATION_MODULE_TYPE] },
              ],
            },
            {
              type: void 0,
              decorators: [{ type: core.Inject, args: [common.DOCUMENT] }],
            },
          ],
          {
            _textField: [{ type: core.ViewChild, args: ["textField"] }],
            _iconPrefixContainer: [
              { type: core.ViewChild, args: ["iconPrefixContainer"] },
            ],
            _textPrefixContainer: [
              { type: core.ViewChild, args: ["textPrefixContainer"] },
            ],
            _floatingLabel: [
              { type: core.ViewChild, args: [MatFormFieldFloatingLabel] },
            ],
            _notchedOutline: [
              { type: core.ViewChild, args: [MatFormFieldNotchedOutline] },
            ],
            _lineRipple: [
              { type: core.ViewChild, args: [MatFormFieldLineRipple] },
            ],
            _labelChildNonStatic: [
              { type: core.ContentChild, args: [MatLabel] },
            ],
            _labelChildStatic: [
              { type: core.ContentChild, args: [MatLabel, { static: !0 }] },
            ],
            _formFieldControl: [
              { type: core.ContentChild, args: [MatFormFieldControl] },
            ],
            _prefixChildren: [
              {
                type: core.ContentChildren,
                args: [MAT_PREFIX, { descendants: !0 }],
              },
            ],
            _suffixChildren: [
              {
                type: core.ContentChildren,
                args: [MAT_SUFFIX, { descendants: !0 }],
              },
            ],
            _errorChildren: [
              {
                type: core.ContentChildren,
                args: [MAT_ERROR, { descendants: !0 }],
              },
            ],
            _hintChildren: [
              {
                type: core.ContentChildren,
                args: [MatHint, { descendants: !0 }],
              },
            ],
            hideRequiredMarker: [{ type: core.Input }],
            color: [{ type: core.Input }],
            floatLabel: [{ type: core.Input }],
            appearance: [{ type: core.Input }],
            subscriptSizing: [{ type: core.Input }],
            hintLabel: [{ type: core.Input }],
          },
        );
      class MatFormFieldModule {
        static #_ = (this.ɵfac = function MatFormFieldModule_Factory(t) {
          return new (t || MatFormFieldModule)();
        });
        static #_2 = (this.ɵmod = core["ɵɵdefineNgModule"]({
          type: MatFormFieldModule,
          imports: [
            fesm2022_core.yE,
            common.CommonModule,
            observers.w5,
            MatFormField,
            MatLabel,
            MatError,
            MatHint,
            MatPrefix,
            MatSuffix,
          ],
          exports: [
            MatFormField,
            MatLabel,
            MatHint,
            MatError,
            MatPrefix,
            MatSuffix,
            fesm2022_core.yE,
          ],
        }));
        static #_3 = (this.ɵinj = core["ɵɵdefineInjector"]({
          imports: [
            fesm2022_core.yE,
            common.CommonModule,
            observers.w5,
            fesm2022_core.yE,
          ],
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          MatFormFieldModule,
          [
            {
              type: core.NgModule,
              args: [
                {
                  imports: [
                    fesm2022_core.yE,
                    common.CommonModule,
                    observers.w5,
                    MatFormField,
                    MatLabel,
                    MatError,
                    MatHint,
                    MatPrefix,
                    MatSuffix,
                  ],
                  exports: [
                    MatFormField,
                    MatLabel,
                    MatHint,
                    MatError,
                    MatPrefix,
                    MatSuffix,
                    fesm2022_core.yE,
                  ],
                },
              ],
            },
          ],
          null,
          null,
        );
    },
  },
]);
