"use strict";
(self.webpackChunk_aseinfo_evolution_web_components =
  self.webpackChunk_aseinfo_evolution_web_components || []).push([
  [1086],
  {
    "./node_modules/@angular/material/fesm2022/divider.mjs": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        q: () => MatDivider,
        w: () => MatDividerModule,
      });
      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./node_modules/@angular/core/fesm2022/core.mjs",
        ),
        _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            "./node_modules/@angular/cdk/fesm2022/coercion.mjs",
          ),
        _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            "./node_modules/@angular/material/fesm2022/core.mjs",
          );
      class MatDivider {
        constructor() {
          (this._vertical = !1), (this._inset = !1);
        }
        get vertical() {
          return this._vertical;
        }
        set vertical(value) {
          this._vertical = (0,
          _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__.he)(value);
        }
        get inset() {
          return this._inset;
        }
        set inset(value) {
          this._inset = (0,
          _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__.he)(value);
        }
        static #_ = (this.ɵfac = function MatDivider_Factory(t) {
          return new (t || MatDivider)();
        });
        static #_2 = (this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__[
          "ɵɵdefineComponent"
        ]({
          type: MatDivider,
          selectors: [["mat-divider"]],
          hostAttrs: ["role", "separator", 1, "mat-divider"],
          hostVars: 7,
          hostBindings: function MatDivider_HostBindings(rf, ctx) {
            2 & rf &&
              (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"](
                "aria-orientation",
                ctx.vertical ? "vertical" : "horizontal",
              ),
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"](
                "mat-divider-vertical",
                ctx.vertical,
              )("mat-divider-horizontal", !ctx.vertical)(
                "mat-divider-inset",
                ctx.inset,
              ));
          },
          inputs: { vertical: "vertical", inset: "inset" },
          standalone: !0,
          features: [
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"],
          ],
          decls: 0,
          vars: 0,
          template: function MatDivider_Template(rf, ctx) {},
          styles: [
            ".mat-divider{display:block;margin:0;border-top-style:solid;border-top-color:var(--mat-divider-color);border-top-width:var(--mat-divider-width)}.mat-divider.mat-divider-vertical{border-top:0;border-right-style:solid;border-right-color:var(--mat-divider-color);border-right-width:var(--mat-divider-width)}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}",
          ],
          encapsulation: 2,
          changeDetection: 0,
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](
          MatDivider,
          [
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
              args: [
                {
                  selector: "mat-divider",
                  host: {
                    role: "separator",
                    "[attr.aria-orientation]":
                      'vertical ? "vertical" : "horizontal"',
                    "[class.mat-divider-vertical]": "vertical",
                    "[class.mat-divider-horizontal]": "!vertical",
                    "[class.mat-divider-inset]": "inset",
                    class: "mat-divider",
                  },
                  template: "",
                  encapsulation:
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation
                      .None,
                  changeDetection:
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__
                      .ChangeDetectionStrategy.OnPush,
                  standalone: !0,
                  styles: [
                    ".mat-divider{display:block;margin:0;border-top-style:solid;border-top-color:var(--mat-divider-color);border-top-width:var(--mat-divider-width)}.mat-divider.mat-divider-vertical{border-top:0;border-right-style:solid;border-right-color:var(--mat-divider-color);border-right-width:var(--mat-divider-width)}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}",
                  ],
                },
              ],
            },
          ],
          null,
          {
            vertical: [
              { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input },
            ],
            inset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
          },
        );
      class MatDividerModule {
        static #_ = (this.ɵfac = function MatDividerModule_Factory(t) {
          return new (t || MatDividerModule)();
        });
        static #_2 = (this.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__[
          "ɵɵdefineNgModule"
        ]({
          type: MatDividerModule,
          imports: [
            _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.yE,
            MatDivider,
          ],
          exports: [
            MatDivider,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.yE,
          ],
        }));
        static #_3 = (this.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__[
          "ɵɵdefineInjector"
        ]({
          imports: [
            _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.yE,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.yE,
          ],
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](
          MatDividerModule,
          [
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
              args: [
                {
                  imports: [
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.yE,
                    MatDivider,
                  ],
                  exports: [
                    MatDivider,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.yE,
                  ],
                },
              ],
            },
          ],
          null,
          null,
        );
    },
    "./node_modules/@angular/material/fesm2022/slide-toggle.mjs": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        mV: () => MatSlideToggleModule,
        sG: () => MatSlideToggle,
      });
      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/@angular/core/fesm2022/core.mjs",
        ),
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./node_modules/@angular/forms/fesm2022/forms.mjs",
        ),
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./node_modules/@angular/cdk/fesm2022/a11y.mjs",
        ),
        _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            "./node_modules/@angular/material/fesm2022/core.mjs",
          );
      const _c0 = ["switch"],
        _c1 = ["*"];
      function MatSlideToggle_Conditional_10_Template(rf, ctx) {
        1 & rf &&
          (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
            0,
            "div",
            10,
          ),
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"](),
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
            1,
            "svg",
            12,
          ),
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
            2,
            "path",
            13,
          ),
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"](),
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
            3,
            "svg",
            14,
          ),
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
            4,
            "path",
            15,
          ),
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()());
      }
      const MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS =
          new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken(
            "mat-slide-toggle-default-options",
            {
              providedIn: "root",
              factory: () => ({ disableToggleValue: !1, hideIcon: !1 }),
            },
          ),
        MAT_SLIDE_TOGGLE_VALUE_ACCESSOR = {
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.kq,
          useExisting: (0,
          _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
            () => MatSlideToggle,
          ),
          multi: !0,
        };
      class MatSlideToggleChange {
        constructor(source, checked) {
          (this.source = source), (this.checked = checked);
        }
      }
      let nextUniqueId = 0;
      class MatSlideToggle {
        _createChangeEvent(isChecked) {
          return new MatSlideToggleChange(this, isChecked);
        }
        get buttonId() {
          return `${this.id || this._uniqueId}-button`;
        }
        focus() {
          this._switchElement.nativeElement.focus();
        }
        get checked() {
          return this._checked;
        }
        set checked(value) {
          (this._checked = value), this._changeDetectorRef.markForCheck();
        }
        get inputId() {
          return `${this.id || this._uniqueId}-input`;
        }
        constructor(
          _elementRef,
          _focusMonitor,
          _changeDetectorRef,
          tabIndex,
          defaults,
          animationMode,
        ) {
          (this._elementRef = _elementRef),
            (this._focusMonitor = _focusMonitor),
            (this._changeDetectorRef = _changeDetectorRef),
            (this.defaults = defaults),
            (this._onChange = (_) => {}),
            (this._onTouched = () => {}),
            (this._validatorOnChange = () => {}),
            (this._checked = !1),
            (this.name = null),
            (this.labelPosition = "after"),
            (this.ariaLabel = null),
            (this.ariaLabelledby = null),
            (this.disabled = !1),
            (this.disableRipple = !1),
            (this.tabIndex = 0),
            (this.change =
              new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter()),
            (this.toggleChange =
              new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter()),
            (this.tabIndex = parseInt(tabIndex) || 0),
            (this.color = defaults.color || "accent"),
            (this._noopAnimations = "NoopAnimations" === animationMode),
            (this.id = this._uniqueId =
              "mat-mdc-slide-toggle-" + ++nextUniqueId),
            (this.hideIcon = defaults.hideIcon ?? !1),
            (this._labelId = this._uniqueId + "-label");
        }
        ngAfterContentInit() {
          this._focusMonitor
            .monitor(this._elementRef, !0)
            .subscribe((focusOrigin) => {
              "keyboard" === focusOrigin || "program" === focusOrigin
                ? ((this._focused = !0), this._changeDetectorRef.markForCheck())
                : focusOrigin ||
                  Promise.resolve().then(() => {
                    (this._focused = !1),
                      this._onTouched(),
                      this._changeDetectorRef.markForCheck();
                  });
            });
        }
        ngOnChanges(changes) {
          changes.required && this._validatorOnChange();
        }
        ngOnDestroy() {
          this._focusMonitor.stopMonitoring(this._elementRef);
        }
        writeValue(value) {
          this.checked = !!value;
        }
        registerOnChange(fn) {
          this._onChange = fn;
        }
        registerOnTouched(fn) {
          this._onTouched = fn;
        }
        validate(control) {
          return this.required && !0 !== control.value
            ? { required: !0 }
            : null;
        }
        registerOnValidatorChange(fn) {
          this._validatorOnChange = fn;
        }
        setDisabledState(isDisabled) {
          (this.disabled = isDisabled), this._changeDetectorRef.markForCheck();
        }
        toggle() {
          (this.checked = !this.checked), this._onChange(this.checked);
        }
        _emitChangeEvent() {
          this._onChange(this.checked),
            this.change.emit(this._createChangeEvent(this.checked));
        }
        _handleClick() {
          this.toggleChange.emit(),
            this.defaults.disableToggleValue ||
              ((this.checked = !this.checked),
              this._onChange(this.checked),
              this.change.emit(new MatSlideToggleChange(this, this.checked)));
        }
        _getAriaLabelledBy() {
          return this.ariaLabelledby
            ? this.ariaLabelledby
            : this.ariaLabel
              ? null
              : this._labelId;
        }
        static #_ = (this.ɵfac = function MatSlideToggle_Factory(t) {
          return new (t || MatSlideToggle)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef,
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.FN,
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef,
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"](
              "tabindex",
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS,
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE,
              8,
            ),
          );
        });
        static #_2 = (this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: MatSlideToggle,
          selectors: [["mat-slide-toggle"]],
          viewQuery: function MatSlideToggle_Query(rf, ctx) {
            if (
              (1 & rf &&
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](
                  _c0,
                  5,
                ),
              2 & rf)
            ) {
              let _t;
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](
                (_t =
                  _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()),
              ) && (ctx._switchElement = _t.first);
            }
          },
          hostAttrs: [1, "mat-mdc-slide-toggle"],
          hostVars: 13,
          hostBindings: function MatSlideToggle_HostBindings(rf, ctx) {
            2 & rf &&
              (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"](
                "id",
                ctx.id,
              ),
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"](
                "tabindex",
                null,
              )("aria-label", null)("name", null)("aria-labelledby", null),
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](
                ctx.color ? "mat-" + ctx.color : "",
              ),
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"](
                "mat-mdc-slide-toggle-focused",
                ctx._focused,
              )("mat-mdc-slide-toggle-checked", ctx.checked)(
                "_mat-animation-noopable",
                ctx._noopAnimations,
              ));
          },
          inputs: {
            name: "name",
            id: "id",
            labelPosition: "labelPosition",
            ariaLabel: [
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None,
              "aria-label",
              "ariaLabel",
            ],
            ariaLabelledby: [
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None,
              "aria-labelledby",
              "ariaLabelledby",
            ],
            ariaDescribedby: [
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None,
              "aria-describedby",
              "ariaDescribedby",
            ],
            required: [
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"]
                .HasDecoratorInputTransform,
              "required",
              "required",
              _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute,
            ],
            color: "color",
            disabled: [
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"]
                .HasDecoratorInputTransform,
              "disabled",
              "disabled",
              _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute,
            ],
            disableRipple: [
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"]
                .HasDecoratorInputTransform,
              "disableRipple",
              "disableRipple",
              _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute,
            ],
            tabIndex: [
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"]
                .HasDecoratorInputTransform,
              "tabIndex",
              "tabIndex",
              (value) =>
                null == value
                  ? 0
                  : (0,
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute)(
                      value,
                    ),
            ],
            checked: [
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"]
                .HasDecoratorInputTransform,
              "checked",
              "checked",
              _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute,
            ],
            hideIcon: [
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"]
                .HasDecoratorInputTransform,
              "hideIcon",
              "hideIcon",
              _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute,
            ],
          },
          outputs: { change: "change", toggleChange: "toggleChange" },
          exportAs: ["matSlideToggle"],
          standalone: !0,
          features: [
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
              MAT_SLIDE_TOGGLE_VALUE_ACCESSOR,
              {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.cz,
                useExisting: MatSlideToggle,
                multi: !0,
              },
            ]),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵInputTransformsFeature"
            ],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"],
          ],
          ngContentSelectors: _c1,
          decls: 13,
          vars: 24,
          consts: [
            ["switch", ""],
            ["mat-internal-form-field", "", 3, "labelPosition"],
            [
              "role",
              "switch",
              "type",
              "button",
              1,
              "mdc-switch",
              3,
              "click",
              "tabIndex",
              "disabled",
            ],
            [1, "mdc-switch__track"],
            [1, "mdc-switch__handle-track"],
            [1, "mdc-switch__handle"],
            [1, "mdc-switch__shadow"],
            [1, "mdc-elevation-overlay"],
            [1, "mdc-switch__ripple"],
            [
              "mat-ripple",
              "",
              1,
              "mat-mdc-slide-toggle-ripple",
              "mat-mdc-focus-indicator",
              3,
              "matRippleTrigger",
              "matRippleDisabled",
              "matRippleCentered",
            ],
            [1, "mdc-switch__icons"],
            [1, "mdc-label", 3, "click", "for"],
            [
              "viewBox",
              "0 0 24 24",
              "aria-hidden",
              "true",
              1,
              "mdc-switch__icon",
              "mdc-switch__icon--on",
            ],
            [
              "d",
              "M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z",
            ],
            [
              "viewBox",
              "0 0 24 24",
              "aria-hidden",
              "true",
              1,
              "mdc-switch__icon",
              "mdc-switch__icon--off",
            ],
            ["d", "M20 13H4v-2h16v2z"],
          ],
          template: function MatSlideToggle_Template(rf, ctx) {
            if (1 & rf) {
              const _r1 =
                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵgetCurrentView"
                ]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](),
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                  0,
                  "div",
                  1,
                )(1, "button", 2, 0),
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
                  "click",
                  function MatSlideToggle_Template_button_click_1_listener() {
                    return (
                      _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                        "ɵɵrestoreView"
                      ](_r1),
                      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](
                        ctx._handleClick(),
                      )
                    );
                  },
                ),
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                  3,
                  "div",
                  3,
                ),
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                  4,
                  "div",
                  4,
                )(5, "div", 5)(6, "div", 6),
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                  7,
                  "div",
                  7,
                ),
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"](),
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                  8,
                  "div",
                  8,
                ),
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                  9,
                  "div",
                  9,
                ),
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"](),
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                  10,
                  MatSlideToggle_Conditional_10_Template,
                  5,
                  0,
                  "div",
                  10,
                ),
                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵelementEnd"
                ]()()(),
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                  11,
                  "label",
                  11,
                ),
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
                  "click",
                  function MatSlideToggle_Template_label_click_11_listener(
                    $event,
                  ) {
                    return (
                      _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                        "ɵɵrestoreView"
                      ](_r1),
                      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](
                        $event.stopPropagation(),
                      )
                    );
                  },
                ),
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](12),
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            }
            if (2 & rf) {
              const switch_r2 =
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "labelPosition",
                ctx.labelPosition,
              ),
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](),
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"](
                  "mdc-switch--selected",
                  ctx.checked,
                )("mdc-switch--unselected", !ctx.checked)(
                  "mdc-switch--checked",
                  ctx.checked,
                )("mdc-switch--disabled", ctx.disabled),
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                  "tabIndex",
                  ctx.disabled ? -1 : ctx.tabIndex,
                )("disabled", ctx.disabled),
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"](
                  "id",
                  ctx.buttonId,
                )("name", ctx.name)("aria-label", ctx.ariaLabel)(
                  "aria-labelledby",
                  ctx._getAriaLabelledBy(),
                )("aria-describedby", ctx.ariaDescribedby)(
                  "aria-required",
                  ctx.required || null,
                )("aria-checked", ctx.checked),
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8),
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                  "matRippleTrigger",
                  switch_r2,
                )("matRippleDisabled", ctx.disableRipple || ctx.disabled)(
                  "matRippleCentered",
                  !0,
                ),
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](),
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](
                  10,
                  ctx.hideIcon ? -1 : 10,
                ),
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](),
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                  "for",
                  ctx.buttonId,
                ),
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"](
                  "id",
                  ctx._labelId,
                );
            }
          },
          dependencies: [
            _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.r6,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.tO,
          ],
          styles: [
            '.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:var(--mdc-elevation-overlay-opacity);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:var(--mdc-elevation-overlay-color)}.mdc-switch{align-items:center;background:none;border:none;cursor:pointer;display:inline-flex;flex-shrink:0;margin:0;outline:none;overflow:visible;padding:0;position:relative}.mdc-switch[hidden]{display:none}.mdc-switch:disabled{cursor:default;pointer-events:none}.mdc-switch__track{overflow:hidden;position:relative;width:100%}.mdc-switch__track::before,.mdc-switch__track::after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:"";height:100%;left:0;position:absolute;width:100%}@media screen and (forced-colors: active){.mdc-switch__track::before,.mdc-switch__track::after{border-color:currentColor}}.mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:translateX(0)}.mdc-switch__track::after{transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transform:translateX(-100%)}[dir=rtl] .mdc-switch__track::after,.mdc-switch__track[dir=rtl]::after{transform:translateX(100%)}.mdc-switch--selected .mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch__track::before,.mdc-switch--selected .mdc-switch__track[dir=rtl]::before{transform:translateX(-100%)}.mdc-switch--selected .mdc-switch__track::after{transition:transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:translateX(0)}.mdc-switch__handle-track{height:100%;pointer-events:none;position:absolute;top:0;transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);left:0;right:auto;transform:translateX(0)}[dir=rtl] .mdc-switch__handle-track,.mdc-switch__handle-track[dir=rtl]{left:auto;right:0}.mdc-switch--selected .mdc-switch__handle-track{transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track,.mdc-switch--selected .mdc-switch__handle-track[dir=rtl]{transform:translateX(-100%)}.mdc-switch__handle{display:flex;pointer-events:auto;position:absolute;top:50%;transform:translateY(-50%);left:0;right:auto}[dir=rtl] .mdc-switch__handle,.mdc-switch__handle[dir=rtl]{left:auto;right:0}.mdc-switch__handle::before,.mdc-switch__handle::after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:"";width:100%;height:100%;left:0;position:absolute;top:0;transition:background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1),border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);z-index:-1}@media screen and (forced-colors: active){.mdc-switch__handle::before,.mdc-switch__handle::after{border-color:currentColor}}.mdc-switch__shadow{border-radius:inherit;bottom:0;left:0;position:absolute;right:0;top:0}.mdc-elevation-overlay{bottom:0;left:0;right:0;top:0}.mdc-switch__ripple{left:50%;position:absolute;top:50%;transform:translate(-50%, -50%);z-index:-1}.mdc-switch:disabled .mdc-switch__ripple{display:none}.mdc-switch__icons{height:100%;position:relative;width:100%;z-index:1}.mdc-switch__icon{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;opacity:0;transition:opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-switch--selected .mdc-switch__icon--on,.mdc-switch--unselected .mdc-switch__icon--off{opacity:1;transition:opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-slide-toggle .mdc-switch--disabled+label{color:var(--mdc-switch-disabled-label-text-color)}.mdc-switch{width:var(--mdc-switch-track-width)}.mdc-switch.mdc-switch--selected:enabled .mdc-switch__handle::after{background:var(--mdc-switch-selected-handle-color)}.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-selected-hover-handle-color)}.mdc-switch.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-selected-focus-handle-color)}.mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__handle::after{background:var(--mdc-switch-selected-pressed-handle-color)}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__handle::after{background:var(--mdc-switch-disabled-selected-handle-color)}.mdc-switch.mdc-switch--unselected:enabled .mdc-switch__handle::after{background:var(--mdc-switch-unselected-handle-color)}.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-unselected-hover-handle-color)}.mdc-switch.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-unselected-focus-handle-color)}.mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__handle::after{background:var(--mdc-switch-unselected-pressed-handle-color)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__handle::after{background:var(--mdc-switch-disabled-unselected-handle-color)}.mdc-switch .mdc-switch__handle::before{background:var(--mdc-switch-handle-surface-color)}.mdc-switch:enabled .mdc-switch__shadow{box-shadow:var(--mdc-switch-handle-elevation)}.mdc-switch:disabled .mdc-switch__shadow{box-shadow:var(--mdc-switch-disabled-handle-elevation)}.mdc-switch .mdc-switch__focus-ring-wrapper,.mdc-switch .mdc-switch__handle{height:var(--mdc-switch-handle-height)}.mdc-switch .mdc-switch__handle{border-radius:var(--mdc-switch-handle-shape)}.mdc-switch .mdc-switch__handle{width:var(--mdc-switch-handle-width)}.mdc-switch .mdc-switch__handle-track{width:calc(100% - var(--mdc-switch-handle-width))}.mdc-switch.mdc-switch--selected:enabled .mdc-switch__icon{fill:var(--mdc-switch-selected-icon-color)}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__icon{fill:var(--mdc-switch-disabled-selected-icon-color)}.mdc-switch.mdc-switch--unselected:enabled .mdc-switch__icon{fill:var(--mdc-switch-unselected-icon-color)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icon{fill:var(--mdc-switch-disabled-unselected-icon-color)}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__icons{opacity:var(--mdc-switch-disabled-selected-icon-opacity)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icons{opacity:var(--mdc-switch-disabled-unselected-icon-opacity)}.mdc-switch.mdc-switch--selected .mdc-switch__icon{width:var(--mdc-switch-selected-icon-size);height:var(--mdc-switch-selected-icon-size)}.mdc-switch.mdc-switch--unselected .mdc-switch__icon{width:var(--mdc-switch-unselected-icon-size);height:var(--mdc-switch-unselected-icon-size)}.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::before,.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background-color:var(--mdc-switch-selected-hover-state-layer-color)}.mdc-switch.mdc-switch--selected:enabled:focus .mdc-switch__ripple::before,.mdc-switch.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after{background-color:var(--mdc-switch-selected-focus-state-layer-color)}.mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__ripple::before,.mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__ripple::after{background-color:var(--mdc-switch-selected-pressed-state-layer-color)}.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::before,.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background-color:var(--mdc-switch-unselected-hover-state-layer-color)}.mdc-switch.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::before,.mdc-switch.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after{background-color:var(--mdc-switch-unselected-focus-state-layer-color)}.mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__ripple::before,.mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after{background-color:var(--mdc-switch-unselected-pressed-state-layer-color)}.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus):hover .mdc-switch__ripple::before,.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus).mdc-ripple-surface--hover .mdc-switch__ripple::before{opacity:var(--mdc-switch-selected-hover-state-layer-opacity)}.mdc-switch.mdc-switch--selected:enabled:focus.mdc-ripple-upgraded--background-focused .mdc-switch__ripple::before,.mdc-switch.mdc-switch--selected:enabled:focus:not(.mdc-ripple-upgraded):focus .mdc-switch__ripple::before{transition-duration:75ms;opacity:var(--mdc-switch-selected-focus-state-layer-opacity)}.mdc-switch.mdc-switch--selected:enabled:active:not(.mdc-ripple-upgraded) .mdc-switch__ripple::after{transition:opacity 150ms linear}.mdc-switch.mdc-switch--selected:enabled:active:not(.mdc-ripple-upgraded):active .mdc-switch__ripple::after{transition-duration:75ms;opacity:var(--mdc-switch-selected-pressed-state-layer-opacity)}.mdc-switch.mdc-switch--selected:enabled:active.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-switch-selected-pressed-state-layer-opacity)}.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus):hover .mdc-switch__ripple::before,.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus).mdc-ripple-surface--hover .mdc-switch__ripple::before{opacity:var(--mdc-switch-unselected-hover-state-layer-opacity)}.mdc-switch.mdc-switch--unselected:enabled:focus.mdc-ripple-upgraded--background-focused .mdc-switch__ripple::before,.mdc-switch.mdc-switch--unselected:enabled:focus:not(.mdc-ripple-upgraded):focus .mdc-switch__ripple::before{transition-duration:75ms;opacity:var(--mdc-switch-unselected-focus-state-layer-opacity)}.mdc-switch.mdc-switch--unselected:enabled:active:not(.mdc-ripple-upgraded) .mdc-switch__ripple::after{transition:opacity 150ms linear}.mdc-switch.mdc-switch--unselected:enabled:active:not(.mdc-ripple-upgraded):active .mdc-switch__ripple::after{transition-duration:75ms;opacity:var(--mdc-switch-unselected-pressed-state-layer-opacity)}.mdc-switch.mdc-switch--unselected:enabled:active.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-switch-unselected-pressed-state-layer-opacity)}.mdc-switch .mdc-switch__ripple{height:var(--mdc-switch-state-layer-size);width:var(--mdc-switch-state-layer-size)}.mdc-switch .mdc-switch__track{height:var(--mdc-switch-track-height)}.mdc-switch:disabled .mdc-switch__track{opacity:var(--mdc-switch-disabled-track-opacity)}.mdc-switch:enabled .mdc-switch__track::after{background:var(--mdc-switch-selected-track-color)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after{background:var(--mdc-switch-selected-hover-track-color)}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after{background:var(--mdc-switch-selected-focus-track-color)}.mdc-switch:enabled:active .mdc-switch__track::after{background:var(--mdc-switch-selected-pressed-track-color)}.mdc-switch:disabled .mdc-switch__track::after{background:var(--mdc-switch-disabled-selected-track-color)}.mdc-switch:enabled .mdc-switch__track::before{background:var(--mdc-switch-unselected-track-color)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before{background:var(--mdc-switch-unselected-hover-track-color)}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before{background:var(--mdc-switch-unselected-focus-track-color)}.mdc-switch:enabled:active .mdc-switch__track::before{background:var(--mdc-switch-unselected-pressed-track-color)}.mdc-switch:disabled .mdc-switch__track::before{background:var(--mdc-switch-disabled-unselected-track-color)}.mdc-switch .mdc-switch__track{border-radius:var(--mdc-switch-track-shape)}.mdc-switch:enabled .mdc-switch__shadow{box-shadow:var(--mdc-switch-handle-elevation-shadow)}.mdc-switch:disabled .mdc-switch__shadow{box-shadow:var(--mdc-switch-disabled-handle-elevation-shadow)}.mat-mdc-slide-toggle{display:inline-block;-webkit-tap-highlight-color:rgba(0,0,0,0);outline:0}.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,.mat-mdc-slide-toggle .mdc-switch__ripple::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty){transform:translateZ(0)}.mat-mdc-slide-toggle .mdc-switch__ripple::after{content:"";opacity:0}.mat-mdc-slide-toggle .mdc-switch:hover .mdc-switch__ripple::after{opacity:.04;transition:opacity 75ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mdc-switch .mdc-switch__ripple::after{opacity:.12}.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-mdc-focus-indicator::before{content:""}.mat-mdc-slide-toggle .mat-ripple-element{opacity:.12}.mat-mdc-slide-toggle .mat-mdc-focus-indicator::before{border-radius:50%}.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-elevation-overlay,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after{transition:none}.mat-mdc-slide-toggle .mdc-switch:enabled+.mdc-label{cursor:pointer}.mdc-switch__handle{transition:width 75ms cubic-bezier(0.4, 0, 0.2, 1),height 75ms cubic-bezier(0.4, 0, 0.2, 1),margin 75ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-switch--selected .mdc-switch__track::before{opacity:var(--mat-switch-hidden-track-opacity);transition:var(--mat-switch-hidden-track-transition)}.mdc-switch--selected .mdc-switch__track::after{opacity:var(--mat-switch-visible-track-opacity);transition:var(--mat-switch-visible-track-transition)}.mdc-switch--unselected .mdc-switch__track::before{opacity:var(--mat-switch-visible-track-opacity);transition:var(--mat-switch-visible-track-transition)}.mdc-switch--unselected .mdc-switch__track::after{opacity:var(--mat-switch-hidden-track-opacity);transition:var(--mat-switch-hidden-track-transition)}.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle{width:var(--mat-switch-unselected-handle-size);height:var(--mat-switch-unselected-handle-size)}.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle{width:var(--mat-switch-selected-handle-size);height:var(--mat-switch-selected-handle-size)}.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons){width:var(--mat-switch-with-icon-handle-size);height:var(--mat-switch-with-icon-handle-size)}.mat-mdc-slide-toggle:active .mdc-switch:not(.mdc-switch--disabled) .mdc-switch__handle{width:var(--mat-switch-pressed-handle-size);height:var(--mat-switch-pressed-handle-size)}.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle{margin:var(--mat-switch-selected-handle-horizontal-margin)}.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons){margin:var(--mat-switch-selected-with-icon-handle-horizontal-margin)}.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle{margin:var(--mat-switch-unselected-handle-horizontal-margin)}.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons){margin:var(--mat-switch-unselected-with-icon-handle-horizontal-margin)}.mat-mdc-slide-toggle:active .mdc-switch--selected:not(.mdc-switch--disabled) .mdc-switch__handle{margin:var(--mat-switch-selected-pressed-handle-horizontal-margin)}.mat-mdc-slide-toggle:active .mdc-switch--unselected:not(.mdc-switch--disabled) .mdc-switch__handle{margin:var(--mat-switch-unselected-pressed-handle-horizontal-margin)}.mdc-switch__track::after,.mdc-switch__track::before{border-width:var(--mat-switch-track-outline-width);border-color:var(--mat-switch-track-outline-color)}.mdc-switch--selected .mdc-switch__track::after,.mdc-switch--selected .mdc-switch__track::before{border-width:var(--mat-switch-selected-track-outline-width)}.mdc-switch--disabled .mdc-switch__track::after,.mdc-switch--disabled .mdc-switch__track::before{border-width:var(--mat-switch-disabled-unselected-track-outline-width);border-color:var(--mat-switch-disabled-unselected-track-outline-color)}.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after{opacity:var(--mat-switch-disabled-selected-handle-opacity)}.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after{opacity:var(--mat-switch-disabled-unselected-handle-opacity)}',
          ],
          encapsulation: 2,
          changeDetection: 0,
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
          MatSlideToggle,
          [
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
              args: [
                {
                  selector: "mat-slide-toggle",
                  host: {
                    class: "mat-mdc-slide-toggle",
                    "[id]": "id",
                    "[attr.tabindex]": "null",
                    "[attr.aria-label]": "null",
                    "[attr.name]": "null",
                    "[attr.aria-labelledby]": "null",
                    "[class.mat-mdc-slide-toggle-focused]": "_focused",
                    "[class.mat-mdc-slide-toggle-checked]": "checked",
                    "[class._mat-animation-noopable]": "_noopAnimations",
                    "[class]": 'color ? "mat-" + color : ""',
                  },
                  exportAs: "matSlideToggle",
                  encapsulation:
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation
                      .None,
                  changeDetection:
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__
                      .ChangeDetectionStrategy.OnPush,
                  providers: [
                    MAT_SLIDE_TOGGLE_VALUE_ACCESSOR,
                    {
                      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.cz,
                      useExisting: MatSlideToggle,
                      multi: !0,
                    },
                  ],
                  standalone: !0,
                  imports: [
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.r6,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.tO,
                  ],
                  template:
                    '<div mat-internal-form-field [labelPosition]="labelPosition">\n  <button\n    class="mdc-switch"\n    role="switch"\n    type="button"\n    [class.mdc-switch--selected]="checked"\n    [class.mdc-switch--unselected]="!checked"\n    [class.mdc-switch--checked]="checked"\n    [class.mdc-switch--disabled]="disabled"\n    [tabIndex]="disabled ? -1 : tabIndex"\n    [disabled]="disabled"\n    [attr.id]="buttonId"\n    [attr.name]="name"\n    [attr.aria-label]="ariaLabel"\n    [attr.aria-labelledby]="_getAriaLabelledBy()"\n    [attr.aria-describedby]="ariaDescribedby"\n    [attr.aria-required]="required || null"\n    [attr.aria-checked]="checked"\n    (click)="_handleClick()"\n    #switch>\n    <div class="mdc-switch__track"></div>\n    <div class="mdc-switch__handle-track">\n      <div class="mdc-switch__handle">\n        <div class="mdc-switch__shadow">\n          <div class="mdc-elevation-overlay"></div>\n        </div>\n        <div class="mdc-switch__ripple">\n          <div class="mat-mdc-slide-toggle-ripple mat-mdc-focus-indicator" mat-ripple\n            [matRippleTrigger]="switch"\n            [matRippleDisabled]="disableRipple || disabled"\n            [matRippleCentered]="true"></div>\n        </div>\n        @if (!hideIcon) {\n          <div class="mdc-switch__icons">\n            <svg\n              class="mdc-switch__icon mdc-switch__icon--on"\n              viewBox="0 0 24 24"\n              aria-hidden="true">\n              <path d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z" />\n            </svg>\n            <svg\n              class="mdc-switch__icon mdc-switch__icon--off"\n              viewBox="0 0 24 24"\n              aria-hidden="true">\n              <path d="M20 13H4v-2h16v2z" />\n            </svg>\n          </div>\n        }\n      </div>\n    </div>\n  </button>\n\n  \x3c!--\n    Clicking on the label will trigger another click event from the button.\n    Stop propagation here so other listeners further up in the DOM don\'t execute twice.\n  --\x3e\n  <label class="mdc-label" [for]="buttonId" [attr.id]="_labelId" (click)="$event.stopPropagation()">\n    <ng-content></ng-content>\n  </label>\n</div>\n',
                  styles: [
                    '.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:var(--mdc-elevation-overlay-opacity);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:var(--mdc-elevation-overlay-color)}.mdc-switch{align-items:center;background:none;border:none;cursor:pointer;display:inline-flex;flex-shrink:0;margin:0;outline:none;overflow:visible;padding:0;position:relative}.mdc-switch[hidden]{display:none}.mdc-switch:disabled{cursor:default;pointer-events:none}.mdc-switch__track{overflow:hidden;position:relative;width:100%}.mdc-switch__track::before,.mdc-switch__track::after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:"";height:100%;left:0;position:absolute;width:100%}@media screen and (forced-colors: active){.mdc-switch__track::before,.mdc-switch__track::after{border-color:currentColor}}.mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:translateX(0)}.mdc-switch__track::after{transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transform:translateX(-100%)}[dir=rtl] .mdc-switch__track::after,.mdc-switch__track[dir=rtl]::after{transform:translateX(100%)}.mdc-switch--selected .mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch__track::before,.mdc-switch--selected .mdc-switch__track[dir=rtl]::before{transform:translateX(-100%)}.mdc-switch--selected .mdc-switch__track::after{transition:transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:translateX(0)}.mdc-switch__handle-track{height:100%;pointer-events:none;position:absolute;top:0;transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);left:0;right:auto;transform:translateX(0)}[dir=rtl] .mdc-switch__handle-track,.mdc-switch__handle-track[dir=rtl]{left:auto;right:0}.mdc-switch--selected .mdc-switch__handle-track{transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track,.mdc-switch--selected .mdc-switch__handle-track[dir=rtl]{transform:translateX(-100%)}.mdc-switch__handle{display:flex;pointer-events:auto;position:absolute;top:50%;transform:translateY(-50%);left:0;right:auto}[dir=rtl] .mdc-switch__handle,.mdc-switch__handle[dir=rtl]{left:auto;right:0}.mdc-switch__handle::before,.mdc-switch__handle::after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:"";width:100%;height:100%;left:0;position:absolute;top:0;transition:background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1),border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);z-index:-1}@media screen and (forced-colors: active){.mdc-switch__handle::before,.mdc-switch__handle::after{border-color:currentColor}}.mdc-switch__shadow{border-radius:inherit;bottom:0;left:0;position:absolute;right:0;top:0}.mdc-elevation-overlay{bottom:0;left:0;right:0;top:0}.mdc-switch__ripple{left:50%;position:absolute;top:50%;transform:translate(-50%, -50%);z-index:-1}.mdc-switch:disabled .mdc-switch__ripple{display:none}.mdc-switch__icons{height:100%;position:relative;width:100%;z-index:1}.mdc-switch__icon{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;opacity:0;transition:opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-switch--selected .mdc-switch__icon--on,.mdc-switch--unselected .mdc-switch__icon--off{opacity:1;transition:opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-slide-toggle .mdc-switch--disabled+label{color:var(--mdc-switch-disabled-label-text-color)}.mdc-switch{width:var(--mdc-switch-track-width)}.mdc-switch.mdc-switch--selected:enabled .mdc-switch__handle::after{background:var(--mdc-switch-selected-handle-color)}.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-selected-hover-handle-color)}.mdc-switch.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-selected-focus-handle-color)}.mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__handle::after{background:var(--mdc-switch-selected-pressed-handle-color)}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__handle::after{background:var(--mdc-switch-disabled-selected-handle-color)}.mdc-switch.mdc-switch--unselected:enabled .mdc-switch__handle::after{background:var(--mdc-switch-unselected-handle-color)}.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-unselected-hover-handle-color)}.mdc-switch.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-unselected-focus-handle-color)}.mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__handle::after{background:var(--mdc-switch-unselected-pressed-handle-color)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__handle::after{background:var(--mdc-switch-disabled-unselected-handle-color)}.mdc-switch .mdc-switch__handle::before{background:var(--mdc-switch-handle-surface-color)}.mdc-switch:enabled .mdc-switch__shadow{box-shadow:var(--mdc-switch-handle-elevation)}.mdc-switch:disabled .mdc-switch__shadow{box-shadow:var(--mdc-switch-disabled-handle-elevation)}.mdc-switch .mdc-switch__focus-ring-wrapper,.mdc-switch .mdc-switch__handle{height:var(--mdc-switch-handle-height)}.mdc-switch .mdc-switch__handle{border-radius:var(--mdc-switch-handle-shape)}.mdc-switch .mdc-switch__handle{width:var(--mdc-switch-handle-width)}.mdc-switch .mdc-switch__handle-track{width:calc(100% - var(--mdc-switch-handle-width))}.mdc-switch.mdc-switch--selected:enabled .mdc-switch__icon{fill:var(--mdc-switch-selected-icon-color)}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__icon{fill:var(--mdc-switch-disabled-selected-icon-color)}.mdc-switch.mdc-switch--unselected:enabled .mdc-switch__icon{fill:var(--mdc-switch-unselected-icon-color)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icon{fill:var(--mdc-switch-disabled-unselected-icon-color)}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__icons{opacity:var(--mdc-switch-disabled-selected-icon-opacity)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icons{opacity:var(--mdc-switch-disabled-unselected-icon-opacity)}.mdc-switch.mdc-switch--selected .mdc-switch__icon{width:var(--mdc-switch-selected-icon-size);height:var(--mdc-switch-selected-icon-size)}.mdc-switch.mdc-switch--unselected .mdc-switch__icon{width:var(--mdc-switch-unselected-icon-size);height:var(--mdc-switch-unselected-icon-size)}.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::before,.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background-color:var(--mdc-switch-selected-hover-state-layer-color)}.mdc-switch.mdc-switch--selected:enabled:focus .mdc-switch__ripple::before,.mdc-switch.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after{background-color:var(--mdc-switch-selected-focus-state-layer-color)}.mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__ripple::before,.mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__ripple::after{background-color:var(--mdc-switch-selected-pressed-state-layer-color)}.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::before,.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background-color:var(--mdc-switch-unselected-hover-state-layer-color)}.mdc-switch.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::before,.mdc-switch.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after{background-color:var(--mdc-switch-unselected-focus-state-layer-color)}.mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__ripple::before,.mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after{background-color:var(--mdc-switch-unselected-pressed-state-layer-color)}.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus):hover .mdc-switch__ripple::before,.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus).mdc-ripple-surface--hover .mdc-switch__ripple::before{opacity:var(--mdc-switch-selected-hover-state-layer-opacity)}.mdc-switch.mdc-switch--selected:enabled:focus.mdc-ripple-upgraded--background-focused .mdc-switch__ripple::before,.mdc-switch.mdc-switch--selected:enabled:focus:not(.mdc-ripple-upgraded):focus .mdc-switch__ripple::before{transition-duration:75ms;opacity:var(--mdc-switch-selected-focus-state-layer-opacity)}.mdc-switch.mdc-switch--selected:enabled:active:not(.mdc-ripple-upgraded) .mdc-switch__ripple::after{transition:opacity 150ms linear}.mdc-switch.mdc-switch--selected:enabled:active:not(.mdc-ripple-upgraded):active .mdc-switch__ripple::after{transition-duration:75ms;opacity:var(--mdc-switch-selected-pressed-state-layer-opacity)}.mdc-switch.mdc-switch--selected:enabled:active.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-switch-selected-pressed-state-layer-opacity)}.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus):hover .mdc-switch__ripple::before,.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus).mdc-ripple-surface--hover .mdc-switch__ripple::before{opacity:var(--mdc-switch-unselected-hover-state-layer-opacity)}.mdc-switch.mdc-switch--unselected:enabled:focus.mdc-ripple-upgraded--background-focused .mdc-switch__ripple::before,.mdc-switch.mdc-switch--unselected:enabled:focus:not(.mdc-ripple-upgraded):focus .mdc-switch__ripple::before{transition-duration:75ms;opacity:var(--mdc-switch-unselected-focus-state-layer-opacity)}.mdc-switch.mdc-switch--unselected:enabled:active:not(.mdc-ripple-upgraded) .mdc-switch__ripple::after{transition:opacity 150ms linear}.mdc-switch.mdc-switch--unselected:enabled:active:not(.mdc-ripple-upgraded):active .mdc-switch__ripple::after{transition-duration:75ms;opacity:var(--mdc-switch-unselected-pressed-state-layer-opacity)}.mdc-switch.mdc-switch--unselected:enabled:active.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-switch-unselected-pressed-state-layer-opacity)}.mdc-switch .mdc-switch__ripple{height:var(--mdc-switch-state-layer-size);width:var(--mdc-switch-state-layer-size)}.mdc-switch .mdc-switch__track{height:var(--mdc-switch-track-height)}.mdc-switch:disabled .mdc-switch__track{opacity:var(--mdc-switch-disabled-track-opacity)}.mdc-switch:enabled .mdc-switch__track::after{background:var(--mdc-switch-selected-track-color)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after{background:var(--mdc-switch-selected-hover-track-color)}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after{background:var(--mdc-switch-selected-focus-track-color)}.mdc-switch:enabled:active .mdc-switch__track::after{background:var(--mdc-switch-selected-pressed-track-color)}.mdc-switch:disabled .mdc-switch__track::after{background:var(--mdc-switch-disabled-selected-track-color)}.mdc-switch:enabled .mdc-switch__track::before{background:var(--mdc-switch-unselected-track-color)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before{background:var(--mdc-switch-unselected-hover-track-color)}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before{background:var(--mdc-switch-unselected-focus-track-color)}.mdc-switch:enabled:active .mdc-switch__track::before{background:var(--mdc-switch-unselected-pressed-track-color)}.mdc-switch:disabled .mdc-switch__track::before{background:var(--mdc-switch-disabled-unselected-track-color)}.mdc-switch .mdc-switch__track{border-radius:var(--mdc-switch-track-shape)}.mdc-switch:enabled .mdc-switch__shadow{box-shadow:var(--mdc-switch-handle-elevation-shadow)}.mdc-switch:disabled .mdc-switch__shadow{box-shadow:var(--mdc-switch-disabled-handle-elevation-shadow)}.mat-mdc-slide-toggle{display:inline-block;-webkit-tap-highlight-color:rgba(0,0,0,0);outline:0}.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,.mat-mdc-slide-toggle .mdc-switch__ripple::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty){transform:translateZ(0)}.mat-mdc-slide-toggle .mdc-switch__ripple::after{content:"";opacity:0}.mat-mdc-slide-toggle .mdc-switch:hover .mdc-switch__ripple::after{opacity:.04;transition:opacity 75ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mdc-switch .mdc-switch__ripple::after{opacity:.12}.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-mdc-focus-indicator::before{content:""}.mat-mdc-slide-toggle .mat-ripple-element{opacity:.12}.mat-mdc-slide-toggle .mat-mdc-focus-indicator::before{border-radius:50%}.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-elevation-overlay,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after{transition:none}.mat-mdc-slide-toggle .mdc-switch:enabled+.mdc-label{cursor:pointer}.mdc-switch__handle{transition:width 75ms cubic-bezier(0.4, 0, 0.2, 1),height 75ms cubic-bezier(0.4, 0, 0.2, 1),margin 75ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-switch--selected .mdc-switch__track::before{opacity:var(--mat-switch-hidden-track-opacity);transition:var(--mat-switch-hidden-track-transition)}.mdc-switch--selected .mdc-switch__track::after{opacity:var(--mat-switch-visible-track-opacity);transition:var(--mat-switch-visible-track-transition)}.mdc-switch--unselected .mdc-switch__track::before{opacity:var(--mat-switch-visible-track-opacity);transition:var(--mat-switch-visible-track-transition)}.mdc-switch--unselected .mdc-switch__track::after{opacity:var(--mat-switch-hidden-track-opacity);transition:var(--mat-switch-hidden-track-transition)}.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle{width:var(--mat-switch-unselected-handle-size);height:var(--mat-switch-unselected-handle-size)}.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle{width:var(--mat-switch-selected-handle-size);height:var(--mat-switch-selected-handle-size)}.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons){width:var(--mat-switch-with-icon-handle-size);height:var(--mat-switch-with-icon-handle-size)}.mat-mdc-slide-toggle:active .mdc-switch:not(.mdc-switch--disabled) .mdc-switch__handle{width:var(--mat-switch-pressed-handle-size);height:var(--mat-switch-pressed-handle-size)}.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle{margin:var(--mat-switch-selected-handle-horizontal-margin)}.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons){margin:var(--mat-switch-selected-with-icon-handle-horizontal-margin)}.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle{margin:var(--mat-switch-unselected-handle-horizontal-margin)}.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons){margin:var(--mat-switch-unselected-with-icon-handle-horizontal-margin)}.mat-mdc-slide-toggle:active .mdc-switch--selected:not(.mdc-switch--disabled) .mdc-switch__handle{margin:var(--mat-switch-selected-pressed-handle-horizontal-margin)}.mat-mdc-slide-toggle:active .mdc-switch--unselected:not(.mdc-switch--disabled) .mdc-switch__handle{margin:var(--mat-switch-unselected-pressed-handle-horizontal-margin)}.mdc-switch__track::after,.mdc-switch__track::before{border-width:var(--mat-switch-track-outline-width);border-color:var(--mat-switch-track-outline-color)}.mdc-switch--selected .mdc-switch__track::after,.mdc-switch--selected .mdc-switch__track::before{border-width:var(--mat-switch-selected-track-outline-width)}.mdc-switch--disabled .mdc-switch__track::after,.mdc-switch--disabled .mdc-switch__track::before{border-width:var(--mat-switch-disabled-unselected-track-outline-width);border-color:var(--mat-switch-disabled-unselected-track-outline-color)}.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after{opacity:var(--mat-switch-disabled-selected-handle-opacity)}.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after{opacity:var(--mat-switch-disabled-unselected-handle-opacity)}',
                  ],
                },
              ],
            },
          ],
          () => [
            { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
            { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.FN },
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef,
            },
            {
              type: void 0,
              decorators: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
                  args: ["tabindex"],
                },
              ],
            },
            {
              type: void 0,
              decorators: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                  args: [MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS],
                },
              ],
            },
            {
              type: void 0,
              decorators: [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional },
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                  args: [
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE,
                  ],
                },
              ],
            },
          ],
          {
            _switchElement: [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
                args: ["switch"],
              },
            ],
            name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
            id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
            labelPosition: [
              { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input },
            ],
            ariaLabel: [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
                args: ["aria-label"],
              },
            ],
            ariaLabelledby: [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
                args: ["aria-labelledby"],
              },
            ],
            ariaDescribedby: [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
                args: ["aria-describedby"],
              },
            ],
            required: [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
                args: [
                  {
                    transform:
                      _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute,
                  },
                ],
              },
            ],
            color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
            disabled: [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
                args: [
                  {
                    transform:
                      _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute,
                  },
                ],
              },
            ],
            disableRipple: [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
                args: [
                  {
                    transform:
                      _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute,
                  },
                ],
              },
            ],
            tabIndex: [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
                args: [
                  {
                    transform: (value) =>
                      null == value
                        ? 0
                        : (0,
                          _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute)(
                            value,
                          ),
                  },
                ],
              },
            ],
            checked: [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
                args: [
                  {
                    transform:
                      _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute,
                  },
                ],
              },
            ],
            hideIcon: [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
                args: [
                  {
                    transform:
                      _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute,
                  },
                ],
              },
            ],
            change: [
              { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output },
            ],
            toggleChange: [
              { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output },
            ],
          },
        );
      const MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.cz,
        useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
          () => MatSlideToggleRequiredValidator,
        ),
        multi: !0,
      };
      class MatSlideToggleRequiredValidator extends _angular_forms__WEBPACK_IMPORTED_MODULE_1__.xq {
        static #_ = (this.ɵfac = (() => {
          let ɵMatSlideToggleRequiredValidator_BaseFactory;
          return function MatSlideToggleRequiredValidator_Factory(t) {
            return (
              ɵMatSlideToggleRequiredValidator_BaseFactory ||
              (ɵMatSlideToggleRequiredValidator_BaseFactory =
                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵgetInheritedFactory"
                ](MatSlideToggleRequiredValidator))
            )(t || MatSlideToggleRequiredValidator);
          };
        })());
        static #_2 = (this.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineDirective"
        ]({
          type: MatSlideToggleRequiredValidator,
          selectors: [
            ["mat-slide-toggle", "required", "", "formControlName", ""],
            ["mat-slide-toggle", "required", "", "formControl", ""],
            ["mat-slide-toggle", "required", "", "ngModel", ""],
          ],
          standalone: !0,
          features: [
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
              MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR,
            ]),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵInheritDefinitionFeature"
            ],
          ],
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
          MatSlideToggleRequiredValidator,
          [
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
              args: [
                {
                  selector:
                    "mat-slide-toggle[required][formControlName],\n             mat-slide-toggle[required][formControl], mat-slide-toggle[required][ngModel]",
                  providers: [MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR],
                  standalone: !0,
                },
              ],
            },
          ],
          null,
          null,
        );
      class _MatSlideToggleRequiredValidatorModule {
        static #_ = (this.ɵfac =
          function _MatSlideToggleRequiredValidatorModule_Factory(t) {
            return new (t || _MatSlideToggleRequiredValidatorModule)();
          });
        static #_2 = (this.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineNgModule"
        ]({
          type: _MatSlideToggleRequiredValidatorModule,
          imports: [MatSlideToggleRequiredValidator],
          exports: [MatSlideToggleRequiredValidator],
        }));
        static #_3 = (this.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineInjector"
        ]({}));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
          _MatSlideToggleRequiredValidatorModule,
          [
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
              args: [
                {
                  imports: [MatSlideToggleRequiredValidator],
                  exports: [MatSlideToggleRequiredValidator],
                },
              ],
            },
          ],
          null,
          null,
        );
      class MatSlideToggleModule {
        static #_ = (this.ɵfac = function MatSlideToggleModule_Factory(t) {
          return new (t || MatSlideToggleModule)();
        });
        static #_2 = (this.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineNgModule"
        ]({
          type: MatSlideToggleModule,
          imports: [
            MatSlideToggle,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.yE,
          ],
          exports: [
            MatSlideToggle,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.yE,
          ],
        }));
        static #_3 = (this.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineInjector"
        ]({
          imports: [
            MatSlideToggle,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.yE,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.yE,
          ],
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
          MatSlideToggleModule,
          [
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
              args: [
                {
                  imports: [
                    MatSlideToggle,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.yE,
                  ],
                  exports: [
                    MatSlideToggle,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.yE,
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
