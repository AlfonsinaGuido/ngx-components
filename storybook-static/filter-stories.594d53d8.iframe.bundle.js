(self.webpackChunk_aseinfo_evolution_web_components =
  self.webpackChunk_aseinfo_evolution_web_components || []).push([
  [2801],
  {
    "./projects/ngx-evolution-components/autocomplete/autocomplete.component.scss?ngResource":
      (module, __unused_webpack_exports, __webpack_require__) => {
        var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(
            "./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/noSourceMaps.js",
          ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__(
            "./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/api.js",
          )(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ".form-autocomplete .mdc-text-field--filled:not(.mdc-text-field--disabled) {\n  background-color: white;\n}\n.form-autocomplete .mdc-text-field--filled {\n  border: 1px solid var(--light-gray);\n  border-radius: 123px;\n}\n.form-autocomplete .mdc-text-field--filled .mdc-floating-label {\n  max-width: calc(100% - 18px);\n}\n.form-autocomplete .mdc-text-field--filled .mdc-floating-label--float-above {\n  max-width: calc(133.3333333333% - 24px);\n}\n.form-autocomplete .mdc-text-field--invalid {\n  border: 1px solid var(--warn);\n}\n.form-autocomplete .mdc-line-ripple {\n  display: none;\n}",
          "",
        ]),
          (module.exports = ___CSS_LOADER_EXPORT___.toString());
      },
    "./projects/ngx-evolution-components/filter/filter.component.scss?ngResource":
      (module, __unused_webpack_exports, __webpack_require__) => {
        var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(
            "./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/noSourceMaps.js",
          ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__(
            "./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/api.js",
          )(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ".mat-mdc-menu-item-text {\n  width: 100%;\n}",
          "",
        ]),
          (module.exports = ___CSS_LOADER_EXPORT___.toString());
      },
    "./projects/ngx-evolution-components/input/input.component.scss?ngResource":
      (module, __unused_webpack_exports, __webpack_require__) => {
        var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(
            "./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/noSourceMaps.js",
          ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__(
            "./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/api.js",
          )(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ".form-input .mdc-text-field--filled:not(.mdc-text-field--disabled) {\n  background-color: white;\n}\n.form-input .mdc-text-field--filled {\n  border: 1px solid var(--light-gray);\n  border-radius: 123px;\n}\n.form-input .mdc-text-field--filled .mdc-floating-label {\n  max-width: calc(100% - 18px);\n}\n.form-input .mdc-text-field--filled .mdc-floating-label--float-above {\n  max-width: calc(133.3333333333% - 24px);\n}\n.form-input .mdc-text-field--invalid {\n  border: 1px solid var(--warn);\n}\n.form-input .mdc-line-ripple {\n  display: none;\n}",
          "",
        ]),
          (module.exports = ___CSS_LOADER_EXPORT___.toString());
      },
    "./projects/ngx-evolution-components/search-bar/search-bar.component.scss?ngResource":
      (module, __unused_webpack_exports, __webpack_require__) => {
        var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(
            "./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/noSourceMaps.js",
          ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__(
            "./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/api.js",
          )(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ".evo-search-bar {\n  border: 1px solid #ddd;\n  background-color: #fff;\n  display: flex;\n  align-items: center;\n  padding: 8px;\n  padding-left: 16px;\n  padding-right: 16px;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n  border-radius: 30px;\n}\n.evo-search-bar mat-icon {\n  color: #555;\n  cursor: pointer;\n}\n.evo-search-bar input {\n  border: none;\n  outline: none;\n  font-size: 1rem;\n  padding: 8px;\n  flex: 1;\n}\n.evo-search-bar .clear-icon {\n  color: #888;\n  cursor: pointer;\n}",
          "",
        ]),
          (module.exports = ___CSS_LOADER_EXPORT___.toString());
      },
    "./projects/ngx-evolution-components/autocomplete/autocomplete.component.ts":
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
          s: () => AutocompleteComponent,
        });
        var tslib_es6 = __webpack_require__(
          "./node_modules/tslib/tslib.es6.mjs",
        );
        var autocomplete_componentngResource = __webpack_require__(
            "./projects/ngx-evolution-components/autocomplete/autocomplete.component.scss?ngResource",
          ),
          autocomplete_componentngResource_default = __webpack_require__.n(
            autocomplete_componentngResource,
          ),
          outputngResource = __webpack_require__(
            "./projects/ngx-evolution-components/styles/output.scss?ngResource",
          ),
          outputngResource_default = __webpack_require__.n(outputngResource),
          core = __webpack_require__(
            "./node_modules/@angular/core/fesm2022/core.mjs",
          ),
          autocomplete = __webpack_require__(
            "./node_modules/@angular/material/fesm2022/autocomplete.mjs",
          ),
          fesm2022_forms = __webpack_require__(
            "./node_modules/@angular/forms/fesm2022/forms.mjs",
          ),
          form_field = __webpack_require__(
            "./node_modules/@angular/material/fesm2022/form-field.mjs",
          ),
          input = __webpack_require__(
            "./node_modules/@angular/material/fesm2022/input.mjs",
          ),
          custom_error_state_matcher = __webpack_require__(
            "./projects/ngx-evolution-components/shared/validators/custom-error-state-matcher.ts",
          ),
          button_component = __webpack_require__(
            "./projects/ngx-evolution-components/button/button.component.ts",
          ),
          Subscription = __webpack_require__(
            "./node_modules/rxjs/dist/esm5/internal/Subscription.js",
          );
        let AutocompleteComponent = class AutocompleteComponent {
          constructor() {
            (this.items = []),
              (this.valueChange = new core.EventEmitter()),
              (this.valueChangesSubscription = new Subscription.yU()),
              (this.matcher = new custom_error_state_matcher.F()),
              (this.filteredOptions = this.items.slice());
          }
          ngOnInit() {
            this.valueChangesSubscription =
              this.inputConfiguration.control.valueChanges.subscribe(
                (value) => {
                  value && this.valueChange.emit(value.Id);
                },
              );
          }
          ngOnDestroy() {
            this.valueChangesSubscription &&
              this.valueChangesSubscription.unsubscribe();
          }
          displayFn(option) {
            return option?.Description ?? "";
          }
          filter() {
            const filterValue = this.input.nativeElement.value.toLowerCase();
            this.filteredOptions = this.items.filter((o) =>
              o.Description.toLowerCase().includes(filterValue),
            );
          }
          clean() {
            this.inputConfiguration.control.reset(),
              this.valueChange.emit(null);
          }
          static #_ = (this.ctorParameters = () => []);
          static #_2 = (this.propDecorators = {
            inputConfiguration: [{ type: core.Input }],
            items: [{ type: core.Input }],
            valueChange: [{ type: core.Output }],
            input: [{ type: core.ViewChild, args: ["input"] }],
          });
        };
        AutocompleteComponent = (0, tslib_es6.Cg)(
          [
            (0, core.Component)({
              selector: "evo-autocomplete",
              standalone: !0,
              imports: [
                fesm2022_forms.YN,
                form_field.RG,
                input.fS,
                autocomplete.jL,
                fesm2022_forms.X1,
                button_component.Q,
              ],
              template:
                '<form\n  class="form-autocomplete min-w-36 max-w-lg w-full {{\n    inputConfiguration.twClass\n  }}"\n>\n  <mat-form-field class="w-full">\n    @if (inputConfiguration.label) {\n      <mat-label class="text-medium-gray">{{\n        inputConfiguration.label\n      }}</mat-label>\n    }\n    <input\n      #input\n      matInput\n      type="text"\n      placeholder="{{ inputConfiguration.inputPlaceholder }}"\n      [errorStateMatcher]="matcher"\n      [formControl]="inputConfiguration.control"\n      [matAutocomplete]="auto"\n      (input)="filter()"\n      (focus)="filter()"\n    />\n    @if (inputConfiguration.control.value) {\n      <evo-button\n        class="absolute right-0 bottom-[13px]"\n        twClass="!shadow-none !bg-white"\n        [icon]="{\n          icon: \'close\',\n          type: \'class\',\n        }"\n        [withoutBorder]="true"\n        (click)="clean()"\n      ></evo-button>\n    }\n    <mat-autocomplete\n      requireSelection\n      #auto="matAutocomplete"\n      [displayWith]="displayFn"\n    >\n      @for (option of filteredOptions; track option.Id) {\n        <mat-option [value]="option">{{ option.Description }}</mat-option>\n      }\n    </mat-autocomplete>\n    @if (inputConfiguration.detail) {\n      <mat-hint class="whitespace-pre-wrap">{{\n        inputConfiguration.detail\n      }}</mat-hint>\n    }\n    @if (\n      inputConfiguration.control.hasError("required") &&\n      inputConfiguration.requiredErrorMessage\n    ) {\n      <mat-error>{{ inputConfiguration.requiredErrorMessage }}</mat-error>\n    }\n  </mat-form-field>\n</form>\n',
              encapsulation: core.ViewEncapsulation.None,
              styles: [
                autocomplete_componentngResource_default(),
                outputngResource_default(),
              ],
            }),
          ],
          AutocompleteComponent,
        );
      },
    "./projects/ngx-evolution-components/input/input.component.ts": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      "use strict";
      __webpack_require__.d(__webpack_exports__, { S: () => InputComponent });
      var tslib_es6 = __webpack_require__("./node_modules/tslib/tslib.es6.mjs");
      var input_componentngResource = __webpack_require__(
          "./projects/ngx-evolution-components/input/input.component.scss?ngResource",
        ),
        input_componentngResource_default = __webpack_require__.n(
          input_componentngResource,
        ),
        outputngResource = __webpack_require__(
          "./projects/ngx-evolution-components/styles/output.scss?ngResource",
        ),
        outputngResource_default = __webpack_require__.n(outputngResource),
        core = __webpack_require__(
          "./node_modules/@angular/core/fesm2022/core.mjs",
        ),
        fesm2022_forms = __webpack_require__(
          "./node_modules/@angular/forms/fesm2022/forms.mjs",
        ),
        form_field = __webpack_require__(
          "./node_modules/@angular/material/fesm2022/form-field.mjs",
        ),
        input = __webpack_require__(
          "./node_modules/@angular/material/fesm2022/input.mjs",
        ),
        custom_error_state_matcher = __webpack_require__(
          "./projects/ngx-evolution-components/shared/validators/custom-error-state-matcher.ts",
        ),
        button_component = __webpack_require__(
          "./projects/ngx-evolution-components/button/button.component.ts",
        ),
        Subscription = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/Subscription.js",
        );
      let InputComponent = class InputComponent {
        constructor() {
          (this.valueChange = new core.EventEmitter()),
            (this.valueChangesSubscription = new Subscription.yU()),
            (this.matcher = new custom_error_state_matcher.F());
        }
        ngOnInit() {
          this.inputConfiguration.inputType ||
            (this.inputConfiguration.inputType = "text"),
            (this.valueChangesSubscription =
              this.inputConfiguration.control.valueChanges.subscribe(
                (value) => {
                  this.valueChange.emit(value);
                },
              ));
        }
        ngOnDestroy() {
          this.valueChangesSubscription &&
            this.valueChangesSubscription.unsubscribe();
        }
        clean(event) {
          this.inputConfiguration.control.reset(),
            this.valueChange.emit(event.target.value);
        }
        static #_ = (this.propDecorators = {
          inputConfiguration: [{ type: core.Input }],
          valueChange: [{ type: core.Output }],
        });
      };
      InputComponent = (0, tslib_es6.Cg)(
        [
          (0, core.Component)({
            selector: "evo-input",
            standalone: !0,
            imports: [
              fesm2022_forms.YN,
              form_field.RG,
              input.fS,
              fesm2022_forms.X1,
              button_component.Q,
            ],
            template:
              '<form\n  class="form-input min-w-36 max-w-lg w-full {{ inputConfiguration.twClass }}"\n>\n  <mat-form-field class="w-full">\n    @if (inputConfiguration.label) {\n      <mat-label class="text-medium-gray">{{\n        inputConfiguration.label\n      }}</mat-label>\n    }\n    <input\n      type="{{ inputConfiguration.inputType }}"\n      matInput\n      [formControl]="inputConfiguration.control"\n      [errorStateMatcher]="matcher"\n      placeholder="{{ inputConfiguration.inputPlaceholder }}"\n    />\n    @if (inputConfiguration.control.value) {\n      <evo-button\n        class="absolute right-0 bottom-[13px]"\n        twClass="!shadow-none !bg-white"\n        [icon]="{\n          icon: \'close\',\n          type: \'class\',\n        }"\n        [withoutBorder]="true"\n        (click)="clean($event)"\n      ></evo-button>\n    }\n    @if (inputConfiguration.detail) {\n      <mat-hint>{{ inputConfiguration.detail }}</mat-hint>\n    }\n    @if (\n      inputConfiguration.control.hasError("required") &&\n      inputConfiguration.requiredErrorMessage\n    ) {\n      <mat-error>{{ inputConfiguration.requiredErrorMessage }}</mat-error>\n    }\n    @if (\n      !inputConfiguration.control.hasError("required") &&\n      inputConfiguration.control.hasError("email") &&\n      inputConfiguration.emailErrorMessage\n    ) {\n      <mat-error>{{ inputConfiguration.emailErrorMessage }}</mat-error>\n    }\n    @if (\n      !inputConfiguration.control.hasError("required") &&\n      inputConfiguration.control.hasError("pattern") &&\n      inputConfiguration.patternErrorMessage\n    ) {\n      <mat-error>{{ inputConfiguration.patternErrorMessage }}</mat-error>\n    }\n    @if (\n      !inputConfiguration.control.hasError("required") &&\n      inputConfiguration.anotherErrorMessage\n    ) {\n      <mat-error>{{ inputConfiguration.anotherErrorMessage }}</mat-error>\n    }\n  </mat-form-field>\n</form>\n',
            encapsulation: core.ViewEncapsulation.None,
            styles: [
              input_componentngResource_default(),
              outputngResource_default(),
            ],
          }),
        ],
        InputComponent,
      );
    },
    "./projects/ngx-evolution-components/search-bar/search-bar.component.ts": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      "use strict";
      __webpack_require__.d(__webpack_exports__, {
        L: () => SearchBarComponent,
      });
      var tslib_es6 = __webpack_require__("./node_modules/tslib/tslib.es6.mjs");
      var search_bar_componentngResource = __webpack_require__(
          "./projects/ngx-evolution-components/search-bar/search-bar.component.scss?ngResource",
        ),
        search_bar_componentngResource_default = __webpack_require__.n(
          search_bar_componentngResource,
        ),
        outputngResource = __webpack_require__(
          "./projects/ngx-evolution-components/styles/output.scss?ngResource",
        ),
        outputngResource_default = __webpack_require__.n(outputngResource),
        core = __webpack_require__(
          "./node_modules/@angular/core/fesm2022/core.mjs",
        ),
        common = __webpack_require__(
          "./node_modules/@angular/common/fesm2022/common.mjs",
        ),
        icon = __webpack_require__(
          "./node_modules/@angular/material/fesm2022/icon.mjs",
        ),
        fesm2022_forms = __webpack_require__(
          "./node_modules/@angular/forms/fesm2022/forms.mjs",
        ),
        class_utility_service = __webpack_require__(
          "./projects/ngx-evolution-components/shared/services/class-utility.service.ts",
        );
      let SearchBarComponent = class SearchBarComponent {
        constructor(classUtility) {
          (this.classUtility = classUtility),
            (this.placeholder = "Buscar..."),
            (this.twClass = ""),
            (this.searchQuery = new core.EventEmitter()),
            (this.inputValue = "");
        }
        ngOnChanges(changes) {
          changes.placeholder &&
            !changes.placeholder.isFirstChange() &&
            this.clearInput();
        }
        onInput(event) {
          const target = event.target;
          (this.inputValue = target.value),
            clearTimeout(this.typingTimeout),
            (this.typingTimeout = setTimeout(() => {
              this.emitSearch();
            }, 400));
        }
        emitSearch() {
          this.searchQuery.emit(this.inputValue);
        }
        clearInput() {
          (this.inputValue = ""), this.emitSearch();
        }
        getClasses() {
          return this.classUtility.getCombinedClasses(
            "evo-search-bar",
            this.twClass,
          );
        }
        static #_ = (this.ctorParameters = () => [
          { type: class_utility_service.Y },
        ]);
        static #_2 = (this.propDecorators = {
          placeholder: [{ type: core.Input }],
          twClass: [{ type: core.Input }],
          searchQuery: [{ type: core.Output }],
        });
      };
      SearchBarComponent = (0, tslib_es6.Cg)(
        [
          (0, core.Component)({
            selector: "evo-search-bar",
            standalone: !0,
            imports: [common.CommonModule, icon.m_, fesm2022_forms.YN],
            template:
              '\x3c!-- Contenedor principal del componente de barra de búsqueda --\x3e\n<div [class]="getClasses()">\n  \x3c!-- Icono de búsqueda --\x3e\n  <mat-icon\n    class="mr-2"\n    aria-hidden="false"\n    [attr.aria-label]="\'search\'"\n    fontSet="material-symbols-outlined"\n  >\n    search\n  </mat-icon>\n\n  \x3c!-- Campo de entrada de texto para la búsqueda --\x3e\n  <input\n    class="w-full p-2 outline-none"\n    type="text"\n    [placeholder]="placeholder"\n    [(ngModel)]="inputValue"\n    (input)="onInput($event)"\n  />\n\n  \x3c!-- Icono para limpiar el campo de entrada, visible solo si hay un valor en el input --\x3e\n  @if (inputValue) {\n    <mat-icon\n      class="ml-2 clear-icon"\n      aria-hidden="false"\n      [attr.aria-label]="\'clear\'"\n      fontSet="material-symbols-outlined"\n      (click)="clearInput()"\n    >\n      clear\n    </mat-icon>\n  }\n</div>\n',
            encapsulation: core.ViewEncapsulation.None,
            styles: [
              search_bar_componentngResource_default(),
              outputngResource_default(),
            ],
          }),
        ],
        SearchBarComponent,
      );
    },
    "./projects/ngx-evolution-components/shared/services/class-utility.service.ts":
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
          Y: () => ClassUtilityService,
        });
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            "./node_modules/tslib/tslib.es6.mjs",
          ),
          _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            "./node_modules/@angular/core/fesm2022/core.mjs",
          );
        let ClassUtilityService = class ClassUtilityService {
          getCombinedClasses(baseClasses = "", twClass = "") {
            return `${baseClasses} ${twClass}`.trim();
          }
        };
        ClassUtilityService = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.Cg)(
          [
            (0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
              providedIn: "root",
            }),
          ],
          ClassUtilityService,
        );
      },
    "./projects/ngx-evolution-components/shared/validators/custom-error-state-matcher.ts":
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
          F: () => CustomErrorStateMatcher,
        });
        class CustomErrorStateMatcher {
          isErrorState(control, form) {
            const isSubmitted = form?.submitted;
            return !!(
              control &&
              control.invalid &&
              (control.dirty || control.touched || isSubmitted)
            );
          }
        }
      },
    "./stories/filter.stories.ts": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => filter_stories,
        });
      var animations_async = __webpack_require__(
          "./node_modules/@angular/platform-browser/fesm2022/animations/async.mjs",
        ),
        dist = __webpack_require__(
          "./node_modules/@storybook/angular/dist/index.mjs",
        ),
        tslib_es6 = __webpack_require__("./node_modules/tslib/tslib.es6.mjs");
      var filter_componentngResource = __webpack_require__(
          "./projects/ngx-evolution-components/filter/filter.component.scss?ngResource",
        ),
        filter_componentngResource_default = __webpack_require__.n(
          filter_componentngResource,
        ),
        core = __webpack_require__(
          "./node_modules/@angular/core/fesm2022/core.mjs",
        ),
        input_component = __webpack_require__(
          "./projects/ngx-evolution-components/input/input.component.ts",
        ),
        button_component = __webpack_require__(
          "./projects/ngx-evolution-components/button/button.component.ts",
        ),
        search_bar_component = __webpack_require__(
          "./projects/ngx-evolution-components/search-bar/search-bar.component.ts",
        ),
        autocomplete_component = __webpack_require__(
          "./projects/ngx-evolution-components/autocomplete/autocomplete.component.ts",
        ),
        select_component = __webpack_require__(
          "./projects/ngx-evolution-components/select/select.component.ts",
        ),
        fesm2022_forms = __webpack_require__(
          "./node_modules/@angular/forms/fesm2022/forms.mjs",
        ),
        common = __webpack_require__(
          "./node_modules/@angular/common/fesm2022/common.mjs",
        ),
        menu = __webpack_require__(
          "./node_modules/@angular/material/fesm2022/menu.mjs",
        ),
        icon = __webpack_require__(
          "./node_modules/@angular/material/fesm2022/icon.mjs",
        ),
        fesm2022_button = __webpack_require__(
          "./node_modules/@angular/material/fesm2022/button.mjs",
        );
      let FilterComponent = class FilterComponent {
        constructor(formBuilder) {
          (this.formBuilder = formBuilder),
            (this.fields = { fields: [] }),
            (this.filterResponse = new core.EventEmitter()),
            (this.response = []);
        }
        ngOnInit() {
          this.initForm();
        }
        initForm() {
          this.form = this.formBuilder.group({
            defaultFieldSelect: new fesm2022_forms.MJ("", []),
            multipleFieldSelect: new fesm2022_forms.MJ([], []),
            requiredFieldSelect: new fesm2022_forms.MJ("", []),
            emailFieldInput: new fesm2022_forms.MJ("", [
              fesm2022_forms.k0.required,
              fesm2022_forms.k0.email,
            ]),
            patternFieldInput: new fesm2022_forms.MJ("", [
              fesm2022_forms.k0.required,
              fesm2022_forms.k0.pattern(/^\+502 \d{4} \d{4}$/),
            ]),
            requiredFieldAutocomplete: new fesm2022_forms.MJ("", [
              fesm2022_forms.k0.required,
            ]),
          });
        }
        applyFilter() {
          this.filterResponse.emit(this.response);
        }
        getInputValue(event, id) {
          const index = this.response.findIndex((obj) => obj.id === id);
          -1 !== index
            ? (this.response[index] = { id, content: event })
            : this.response.push({ id, content: event });
        }
        cleanFields() {
          this.fields.fields.forEach((value) => {
            value.control.reset();
          }),
            this.response.forEach((value) => {
              value.content = "";
            }),
            this.filterResponse.emit(this.response);
        }
        getFormControl(fieldName) {
          return this.form.controls[fieldName];
        }
        static #_ = (this.ctorParameters = () => [{ type: fesm2022_forms.ok }]);
        static #_2 = (this.propDecorators = {
          fields: [{ type: core.Input }],
          filterResponse: [{ type: core.Output }],
        });
      };
      FilterComponent = (0, tslib_es6.Cg)(
        [
          (0, core.Component)({
            selector: "evo-filter",
            standalone: !0,
            imports: [
              input_component.S,
              button_component.Q,
              search_bar_component.L,
              common.CommonModule,
              autocomplete_component.s,
              select_component.w,
              menu.Cn,
              icon.m_,
              fesm2022_button.Hl,
            ],
            template:
              '<ng-template #dynamicFilter>\n  <div class="flex flex-col px-4 py-2">\n    <div class="flex-1 space-y-2">\n      @for (field of fields.fields; track field; let index = $index) {\n        <div mat-menu-item (click)="$event.stopPropagation()" class="w-full">\n          @switch (field.fieldType) {\n            @case ("searchBar") {\n              <div class="mb-5">\n                <evo-search-bar\n                  [twClass]="\'min-w-36 max-w-lg\'"\n                  [placeholder]="\'empleados\'"\n                  (searchQuery)="getInputValue($event, field.id)"\n                >\n                </evo-search-bar>\n              </div>\n            }\n            @case ("autocomplete") {\n              <evo-autocomplete\n                [inputConfiguration]="{\n                  inputType: field.inputType,\n                  control: field.control,\n                  label: field.label,\n                  inputPlaceholder: field.inputPlaceholder,\n                  requiredErrorMessage: field.requiredErrorMessage,\n                  emailErrorMessage: field.emailErrorMessage,\n                  twClass: field.twClass,\n                }"\n                [items]="field.items || []"\n                (valueChange)="getInputValue($event, field.id)"\n              ></evo-autocomplete>\n            }\n            @case ("select") {\n              <evo-select\n                [label]="field.label"\n                [items]="field.items || []"\n                [control]="field.control"\n                [isRequired]="false"\n                (valueChange)="getInputValue($event, field.id)"\n              ></evo-select>\n            }\n            @default {\n              <evo-input\n                class="flex-grow"\n                [inputConfiguration]="{\n                  inputType: field.inputType,\n                  control: field.control,\n                  label: field.label,\n                  inputPlaceholder: field.inputPlaceholder,\n                  requiredErrorMessage: field.requiredErrorMessage,\n                  emailErrorMessage: field.emailErrorMessage,\n                  twClass: field.twClass,\n                }"\n                (valueChange)="getInputValue($event, field.id)"\n              ></evo-input>\n            }\n          }\n        </div>\n      }\n    </div>\n    <div class="mt-auto flex justify-evenly">\n      <div>\n        <evo-button\n          [label]="\'limpiar\'"\n          [theme]="\'secondary\'"\n          (click)="$event.stopPropagation(); cleanFields()"\n        ></evo-button>\n      </div>\n      <div>\n        <evo-button\n          [label]="\'filtrar\'"\n          [theme]="\'primary\'"\n          (click)="applyFilter()"\n        ></evo-button>\n      </div>\n    </div>\n  </div>\n</ng-template>\n<div class="hidden sm:block">\n  <div class="flex flex-col h-5/6 px-4 py-6 shadow-md">\n    <ng-container *ngTemplateOutlet="dynamicFilter"></ng-container>\n  </div>\n</div>\n<div class="block sm:hidden">\n  <button\n    mat-stroked-button\n    [matMenuTriggerFor]="menu"\n    [matMenuTriggerRestoreFocus]="false"\n    class="flex items-center"\n  >\n    <mat-icon class="mr-2" fontSet="material-symbols-outlined"\n      >filter_list</mat-icon\n    >\n    Filtro\n  </button>\n  <mat-menu #menu="matMenu">\n    <ng-container *ngTemplateOutlet="dynamicFilter"></ng-container>\n  </mat-menu>\n</div>\n',
            encapsulation: core.ViewEncapsulation.None,
            styles: [filter_componentngResource_default()],
          }),
        ],
        FilterComponent,
      );
      const filter_stories = {
          title: "Evolution Components/Filter",
          component: FilterComponent,
          decorators: [
            (0, dist.applicationConfig)({
              providers: [(0, animations_async.h)()],
            }),
          ],
          tags: ["autodocs"],
        },
        valuelistTest = [
          { Id: "7", Description: "Penado Guzmán, Ana María", Bag: {} },
          { Id: "178", Description: "Guatemala Melara, Victor Hugo", Bag: {} },
          { Id: "8", Description: "Sanchez, Carlos", Bag: {} },
          { Id: "9", Description: "Lopez, Samuel", Bag: {} },
          { Id: "10", Description: "Fernandez, Ignacio", Bag: {} },
          { Id: "11", Description: "Perez, Mercedes", Bag: {} },
        ],
        filter_stories_form = new fesm2022_forms.ok().group({
          defaultFieldInput: new fesm2022_forms.MJ("", []),
          defaultFieldInputTel: new fesm2022_forms.MJ("", []),
          defaultFieldInputDate: new fesm2022_forms.MJ("", []),
          defaultFieldAutocomplete: new fesm2022_forms.MJ("", []),
          defaultFieldSelect: new fesm2022_forms.MJ("", []),
        }),
        formControlDefaultInput =
          filter_stories_form.controls.defaultFieldInput,
        formControlDefaultInputTel =
          filter_stories_form.controls.defaultFieldInputDate,
        formControlDefaultInputDate =
          filter_stories_form.controls.defaultFieldInputTel,
        formControlDefaultInputAutocomplete =
          filter_stories_form.controls.defaultFieldAutocomplete,
        formControlDefaultInputSelect =
          filter_stories_form.controls.defaultFieldSelect;
      function addCircularSafeProperties(formControl) {
        Object.defineProperty(formControl, "toJSON", {
          value: () => null,
          writable: !0,
          configurable: !0,
        });
      }
      addCircularSafeProperties(formControlDefaultInput),
        addCircularSafeProperties(formControlDefaultInputDate),
        addCircularSafeProperties(formControlDefaultInputTel),
        addCircularSafeProperties(formControlDefaultInputAutocomplete),
        addCircularSafeProperties(formControlDefaultInputSelect);
      const Default = {
        args: {
          fields: {
            fields: [
              {
                id: "empleado",
                fieldType: "searchBar",
                inputPlaceholder: "Empleados",
                twClass: "h-12 !w-full",
                control: formControlDefaultInput,
              },
              {
                id: "fechaNacimiento",
                fieldType: "date",
                inputType: "date",
                label: "Fecha Nacimiento",
                twClass: "max-w-max !w-full",
                requiredErrorMessage: "",
                control: formControlDefaultInputDate,
              },
              {
                id: "tel",
                fieldType: "tel",
                inputType: "tel",
                label: "Telefono",
                twClass: "max-w-max !w-full",
                requiredErrorMessage: "Ninguna",
                control: formControlDefaultInputTel,
              },
              {
                id: "autocomplete",
                fieldType: "autocomplete",
                control: formControlDefaultInputAutocomplete,
                label: "Autocomplete Empleados",
                twClass: "max-w-max !w-full",
                items: valuelistTest,
              },
              {
                id: "select",
                fieldType: "select",
                control: formControlDefaultInputSelect,
                label: "Empleados select",
                twClass: "!w-full",
                items: valuelistTest,
              },
            ],
          },
        },
      };
      Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource: "{\n  args: {\n    fields: fields\n  }\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      };
      const __namedExportsOrder = ["Default"];
    },
  },
]);
