(self.webpackChunk_aseinfo_evolution_web_components =
  self.webpackChunk_aseinfo_evolution_web_components || []).push([
  [1876],
  {
    "./projects/ngx-evolution-components/header-columna/header-columna.component.scss?ngResource":
      (module, __unused_webpack_exports, __webpack_require__) => {
        var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(
            "./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/noSourceMaps.js",
          ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__(
            "./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/api.js",
          )(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ".header-column__green-column {\n  --tw-bg-opacity: 1;\n  background-color: rgb(22 163 74 / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: rgb(22 163 74 / var(--tw-text-opacity));\n}\n\n.header-column__teal-column {\n  --tw-bg-opacity: 1;\n  background-color: rgb(13 148 136 / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: rgb(13 148 136 / var(--tw-text-opacity));\n}\n\n.header-column__orange-column {\n  --tw-bg-opacity: 1;\n  background-color: rgb(234 88 12 / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: rgb(234 88 12 / var(--tw-text-opacity));\n}\n\n.header-column__indigo-column {\n  --tw-bg-opacity: 1;\n  background-color: rgb(79 70 229 / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: rgb(79 70 229 / var(--tw-text-opacity));\n}\n\n.column-name {\n  margin-left: 10px;\n}",
          "",
        ]),
          (module.exports = ___CSS_LOADER_EXPORT___.toString());
      },
    "./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/api.js":
      (module) => {
        "use strict";
        module.exports = function (cssWithMappingToString) {
          var list = [];
          return (
            (list.toString = function toString() {
              return this.map(function (item) {
                var content = "",
                  needLayer = void 0 !== item[5];
                return (
                  item[4] && (content += "@supports (".concat(item[4], ") {")),
                  item[2] && (content += "@media ".concat(item[2], " {")),
                  needLayer &&
                    (content += "@layer".concat(
                      item[5].length > 0 ? " ".concat(item[5]) : "",
                      " {",
                    )),
                  (content += cssWithMappingToString(item)),
                  needLayer && (content += "}"),
                  item[2] && (content += "}"),
                  item[4] && (content += "}"),
                  content
                );
              }).join("");
            }),
            (list.i = function i(modules, media, dedupe, supports, layer) {
              "string" == typeof modules &&
                (modules = [[null, modules, void 0]]);
              var alreadyImportedModules = {};
              if (dedupe)
                for (var k = 0; k < this.length; k++) {
                  var id = this[k][0];
                  null != id && (alreadyImportedModules[id] = !0);
                }
              for (var _k = 0; _k < modules.length; _k++) {
                var item = [].concat(modules[_k]);
                (dedupe && alreadyImportedModules[item[0]]) ||
                  (void 0 !== layer &&
                    (void 0 === item[5] ||
                      (item[1] = "@layer"
                        .concat(
                          item[5].length > 0 ? " ".concat(item[5]) : "",
                          " {",
                        )
                        .concat(item[1], "}")),
                    (item[5] = layer)),
                  media &&
                    (item[2]
                      ? ((item[1] = "@media "
                          .concat(item[2], " {")
                          .concat(item[1], "}")),
                        (item[2] = media))
                      : (item[2] = media)),
                  supports &&
                    (item[4]
                      ? ((item[1] = "@supports ("
                          .concat(item[4], ") {")
                          .concat(item[1], "}")),
                        (item[4] = supports))
                      : (item[4] = "".concat(supports))),
                  list.push(item));
              }
            }),
            list
          );
        };
      },
    "./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/noSourceMaps.js":
      (module) => {
        "use strict";
        module.exports = function (i) {
          return i[1];
        };
      },
    "./projects/ngx-evolution-components/header-columna/header-columna.component.ts":
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
          A: () => HeaderColumnaComponent,
        });
        var tslib_es6 = __webpack_require__(
          "./node_modules/tslib/tslib.es6.mjs",
        );
        var header_columna_componentngResource = __webpack_require__(
            "./projects/ngx-evolution-components/header-columna/header-columna.component.scss?ngResource",
          ),
          header_columna_componentngResource_default = __webpack_require__.n(
            header_columna_componentngResource,
          ),
          outputngResource = __webpack_require__(
            "./projects/ngx-evolution-components/styles/output.scss?ngResource",
          ),
          outputngResource_default = __webpack_require__.n(outputngResource),
          common = __webpack_require__(
            "./node_modules/@angular/common/fesm2022/common.mjs",
          ),
          core = __webpack_require__(
            "./node_modules/@angular/core/fesm2022/core.mjs",
          );
        let HeaderColumnaComponent = class HeaderColumnaComponent {
          constructor() {
            (this.count = 0),
              (this.index = 0),
              (this.withCount = !0),
              (this.colorArray = ["teal", "indigo", "green", "orange"]);
          }
          ngOnInit() {
            (this.color = this.colorArray[this.index % this.colorArray.length]),
              (this.classColor = `header-column__${this.color}-column`);
          }
          ngOnChanges(changes) {
            changes.count &&
              (this.count > 999
                ? (this.count = 999)
                : this.count < 0 && (this.count = 0));
          }
          static #_ = (this.ctorParameters = () => []);
          static #_2 = (this.propDecorators = {
            name: [{ type: core.Input }],
            count: [{ type: core.Input }],
            index: [{ type: core.Input }],
            withCount: [{ type: core.Input }],
            color: [{ type: core.Input }],
            twClass: [{ type: core.Input }],
          });
        };
        HeaderColumnaComponent = (0, tslib_es6.Cg)(
          [
            (0, core.Component)({
              selector: "evo-header-columna",
              standalone: !0,
              imports: [common.NgIf, common.NgClass],
              template:
                '<div\n  id="column-header"\n  class="flex rounded-3xl p-1.5 min-w-fit h-10 text-white items-center mb-2 hover:scale-105 transition-transform"\n  [class]="[classColor, twClass]"\n>\n  @if (withCount) {\n    <span\n      class="flex items-center justify-center font-bold text-sm rounded-full bg-white {{\n        classColor\n      }}"\n      [ngClass]="count === 999 ? \'size-8\' : \'size-6 sm:size-7\'"\n    >\n      {{ count === 999 ? count + "+" : count }}\n    </span>\n  }\n  <div class="column-name">\n    <p\n      class="text-white capitalize font-semibold tracking-wide text-sm overflow-hidden text-ellipsis line-clamp-1"\n    >\n      {{ name }}\n    </p>\n  </div>\n</div>\n',
              styles: [
                header_columna_componentngResource_default(),
                outputngResource_default(),
              ],
            }),
          ],
          HeaderColumnaComponent,
        );
      },
    "./stories/header-columna.stories.ts": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          customTailwindClass: () => customTailwindClass,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
          muchasActividades: () => muchasActividades,
          nombreColumnaLargo: () => nombreColumnaLargo,
          withoutCount: () => withoutCount,
        });
      const __WEBPACK_DEFAULT_EXPORT__ = {
          component: __webpack_require__(
            "./projects/ngx-evolution-components/header-columna/header-columna.component.ts",
          ).A,
          title: "Evolution Components/Kanban/Header Columna",
          tags: ["autodocs"],
          argTypes: {},
          args: {},
        },
        Default = { args: { name: "Abiertas", count: 3, index: 0 } },
        muchasActividades = {
          args: { name: "En Progreso", count: 1e4, index: 1 },
        },
        nombreColumnaLargo = {
          args: {
            name: "Las actividades que aún no hemos empezado pero tenemos que empezar muy pronto de lo contrario nos quedaremos sin tiempo",
            count: 25,
            index: 2,
          },
        },
        customTailwindClass = {
          args: {
            name: "Canceladas",
            count: 2,
            index: 4,
            twClass: "bg-red-500 text-red-500",
          },
        },
        withoutCount = {
          args: { name: "Desasignadas", count: 0, index: 1, withCount: !1 },
        };
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    name: 'Abiertas',\n    count: 3,\n    index: 0\n  }\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (muchasActividades.parameters = {
          ...muchasActividades.parameters,
          docs: {
            ...muchasActividades.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    name: 'En Progreso',\n    count: 10000,\n    index: 1\n  }\n}",
              ...muchasActividades.parameters?.docs?.source,
            },
          },
        }),
        (nombreColumnaLargo.parameters = {
          ...nombreColumnaLargo.parameters,
          docs: {
            ...nombreColumnaLargo.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    name: 'Las actividades que aún no hemos empezado pero tenemos que empezar muy pronto de lo contrario nos quedaremos sin tiempo',\n    count: 25,\n    index: 2\n  }\n}",
              ...nombreColumnaLargo.parameters?.docs?.source,
            },
          },
        }),
        (customTailwindClass.parameters = {
          ...customTailwindClass.parameters,
          docs: {
            ...customTailwindClass.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    name: 'Canceladas',\n    count: 2,\n    index: 4,\n    twClass: 'bg-red-500 text-red-500'\n  }\n}",
              ...customTailwindClass.parameters?.docs?.source,
            },
          },
        }),
        (withoutCount.parameters = {
          ...withoutCount.parameters,
          docs: {
            ...withoutCount.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    name: 'Desasignadas',\n    count: 0,\n    index: 1,\n    withCount: false\n  }\n}",
              ...withoutCount.parameters?.docs?.source,
            },
          },
        });
      const __namedExportsOrder = [
        "Default",
        "muchasActividades",
        "nombreColumnaLargo",
        "customTailwindClass",
        "withoutCount",
      ];
    },
  },
]);
