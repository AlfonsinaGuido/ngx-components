(self.webpackChunk_aseinfo_evolution_web_components =
  self.webpackChunk_aseinfo_evolution_web_components || []).push([
  [5679],
  {
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
    "./stories/search-bar.stories.ts": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/@storybook/angular/dist/index.mjs",
        ),
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./node_modules/@angular/common/fesm2022/http.mjs",
        );
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: "Evolution Components/Search Bar",
          component: __webpack_require__(
            "./projects/ngx-evolution-components/search-bar/search-bar.component.ts",
          ).L,
          decorators: [
            (0,
            _storybook_angular__WEBPACK_IMPORTED_MODULE_0__.applicationConfig)({
              providers: [
                (0, _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.$R)(),
              ],
            }),
          ],
          tags: ["autodocs"],
        },
        Default = {
          args: { placeholder: "Buscar personas...", twClass: "" },
          parameters: { actions: { handles: ["searchQuery"] } },
        };
      Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    placeholder: 'Buscar personas...',\n    twClass: ''\n  },\n  parameters: {\n    actions: {\n      handles: ['searchQuery']\n    }\n  }\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      };
      const __namedExportsOrder = ["Default"];
    },
  },
]);
