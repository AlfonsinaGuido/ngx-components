(self.webpackChunk_aseinfo_evolution_web_components =
  self.webpackChunk_aseinfo_evolution_web_components || []).push([
  [3815],
  {
    "./projects/ngx-evolution-components/svg/svg.component.scss?ngResource": (
      module,
      __unused_webpack_exports,
      __webpack_require__,
    ) => {
      var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(
          "./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/noSourceMaps.js",
        ),
        ___CSS_LOADER_EXPORT___ = __webpack_require__(
          "./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/api.js",
        )(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
      ___CSS_LOADER_EXPORT___.push([
        module.id,
        "evo-svg {\n  display: flex;\n}",
        "",
      ]),
        (module.exports = ___CSS_LOADER_EXPORT___.toString());
    },
    "./projects/ngx-evolution-components/svg/svg.component.ts": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      "use strict";
      __webpack_require__.d(__webpack_exports__, { k: () => SvgComponent });
      var tslib_es6 = __webpack_require__("./node_modules/tslib/tslib.es6.mjs");
      var svg_componentngResource = __webpack_require__(
          "./projects/ngx-evolution-components/svg/svg.component.scss?ngResource",
        ),
        svg_componentngResource_default = __webpack_require__.n(
          svg_componentngResource,
        ),
        outputngResource = __webpack_require__(
          "./projects/ngx-evolution-components/styles/output.scss?ngResource",
        ),
        outputngResource_default = __webpack_require__.n(outputngResource),
        core = __webpack_require__(
          "./node_modules/@angular/core/fesm2022/core.mjs",
        ),
        icon = __webpack_require__(
          "./node_modules/@angular/material/fesm2022/icon.mjs",
        ),
        platform_browser = __webpack_require__(
          "./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs",
        );
      let SvgComponent = class SvgComponent {
        constructor(matIconRegistry, domSanitizer) {
          (this.matIconRegistry = matIconRegistry),
            (this.domSanitizer = domSanitizer);
        }
        ngOnInit() {
          this.svgPath
            ? this.matIconRegistry.addSvgIcon(
                "custom_icon",
                this.domSanitizer.bypassSecurityTrustResourceUrl(this.svgPath),
              )
            : console.error("Error loading SVG, undefined path");
        }
        static #_ = (this.ctorParameters = () => [
          { type: icon.tp },
          { type: platform_browser.DomSanitizer },
        ]);
        static #_2 = (this.propDecorators = {
          svgPath: [{ type: core.Input }],
          twClass: [{ type: core.Input }],
        });
      };
      SvgComponent = (0, tslib_es6.Cg)(
        [
          (0, core.Component)({
            selector: "evo-svg",
            standalone: !0,
            imports: [icon.m_],
            template:
              '@if (svgPath) {\n  <mat-icon [class]="twClass" svgIcon="custom_icon"></mat-icon>\n}\n',
            encapsulation: core.ViewEncapsulation.None,
            styles: [
              svg_componentngResource_default(),
              outputngResource_default(),
            ],
          }),
        ],
        SvgComponent,
      );
    },
    "./stories/svg.stories.ts": (
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
      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            "./node_modules/@angular/common/fesm2022/http.mjs",
          ),
        _aseinfo_ngx_evolution_components_public_api__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            "./projects/ngx-evolution-components/svg/svg.component.ts",
          ),
        _storybook_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/@storybook/angular/dist/index.mjs",
        );
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: "Evolution Components/Svg",
          component:
            _aseinfo_ngx_evolution_components_public_api__WEBPACK_IMPORTED_MODULE_1__.k,
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
        Default = { args: { svgPath: "bell.svg", twClass: "" } };
      Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    svgPath: 'bell.svg',\n    twClass: ''\n  }\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      };
      const __namedExportsOrder = ["Default"];
    },
  },
]);
