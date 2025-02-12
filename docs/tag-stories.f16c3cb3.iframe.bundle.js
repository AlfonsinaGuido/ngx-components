(self.webpackChunk_aseinfo_evolution_web_components =
  self.webpackChunk_aseinfo_evolution_web_components || []).push([
  [597],
  {
    "./projects/ngx-evolution-components/tag/tag.component.scss?ngResource": (
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
        ".tag__Alta {\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(254 242 242 / var(--tw-bg-opacity));\n\n    --tw-text-opacity: 1;\n\n    color: rgb(239 68 68 / var(--tw-text-opacity))\n}\n\n.tag__Media {\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(254 252 232 / var(--tw-bg-opacity));\n\n    --tw-text-opacity: 1;\n\n    color: rgb(234 179 8 / var(--tw-text-opacity))\n}\n\n.tag__Baja {\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(238 242 255 / var(--tw-bg-opacity));\n\n    --tw-text-opacity: 1;\n\n    color: rgb(99 102 241 / var(--tw-text-opacity))\n}\n\n.tag__size-sm {\n\n    padding-left: 5px;\n\n    padding-right: 5px;\n\n    font-size: 0.65rem;\n\n    font-weight: 700\n}\n\n.tag__size-md {\n\n    padding: 5px;\n\n    font-size: 0.875rem;\n\n    line-height: 1.25rem\n}\n\n.tag__size-lg {\n\n    padding-top: 5px;\n\n    padding-bottom: 5px;\n\n    padding-left: 10px;\n\n    padding-right: 10px;\n\n    font-size: 1.125rem;\n\n    line-height: 1.75rem\n}",
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
    "./projects/ngx-evolution-components/shared/data/kanban/prioridades.data.ts":
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
          BT: () => prioridadHigh,
          MN: () => prioridadMedium,
          Ti: () => prioridadLow,
          tY: () => prioridadHighest,
          vz: () => prioridadLowest,
        });
        const prioridadHighest = {
            Codigo: 10,
            Nombre: "Highest",
            Color: "#8B0000",
            Orden: 10,
          },
          prioridadHigh = { Codigo: 0, Nombre: "High", Color: "red", Orden: 5 },
          prioridadMedium = {
            Codigo: 2,
            Nombre: "Medium",
            Color: "#EAB308",
            Orden: 3,
          },
          prioridadLow = { Codigo: 1, Nombre: "Low", Color: "green", Orden: 1 },
          prioridadLowest = {
            Codigo: 5,
            Nombre: "Lowest",
            Color: "blue",
            Orden: 0,
          };
      },
    "./projects/ngx-evolution-components/tag/tag.component.ts": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      "use strict";
      __webpack_require__.d(__webpack_exports__, { e: () => TagComponent });
      var tslib_es6 = __webpack_require__("./node_modules/tslib/tslib.es6.mjs");
      var tag_componentngResource = __webpack_require__(
          "./projects/ngx-evolution-components/tag/tag.component.scss?ngResource",
        ),
        tag_componentngResource_default = __webpack_require__.n(
          tag_componentngResource,
        ),
        outputngResource = __webpack_require__(
          "./projects/ngx-evolution-components/styles/output.scss?ngResource",
        ),
        outputngResource_default = __webpack_require__.n(outputngResource),
        core = __webpack_require__(
          "./node_modules/@angular/core/fesm2022/core.mjs",
        );
      let TagComponent = class TagComponent {
        constructor() {
          this.size = "sm";
        }
        getTextColorBasedOnBackground(backgroundColor) {
          const color = backgroundColor.replace("#", "");
          return (299 * parseInt(color.substring(0, 2), 16) +
            587 * parseInt(color.substring(2, 4), 16) +
            114 * parseInt(color.substring(4, 6), 16)) /
            1e3 >
            128
            ? "#000000"
            : "#FFFFFF";
        }
        static #_ = (this.propDecorators = {
          prioridad: [{ type: core.Input }],
          label: [{ type: core.Input }],
          size: [{ type: core.Input }],
          twClass: [{ type: core.Input }],
        });
      };
      TagComponent = (0, tslib_es6.Cg)(
        [
          (0, core.Component)({
            selector: "evo-tag",
            standalone: !0,
            imports: [],
            template:
              "<p\n  [class]=\"[twClass, 'tag__size-' + size].join(' ')\"\n  class=\"w-fit rounded-lg uppercase text-white\"\n  [style]=\"{\n    'background-color': prioridad?.Color,\n    color: getTextColorBasedOnBackground(prioridad?.Color || '#FFFFFF'),\n  }\"\n>\n  {{ !!prioridad?.Nombre ? prioridad?.Nombre : label }}\n</p>\n",
            styles: [
              tag_componentngResource_default(),
              outputngResource_default(),
            ],
          }),
        ],
        TagComponent,
      );
    },
    "./stories/tag.stories.ts": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          conClasePersonalizada: () => conClasePersonalizada,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
          prioridadAlta: () => prioridadAlta,
          prioridadMasBaja: () => prioridadMasBaja,
          prioridadMedia: () => prioridadMedia,
        });
      var _aseinfo_ngx_evolution_components_public_api__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            "./projects/ngx-evolution-components/tag/tag.component.ts",
          ),
        _aseinfo_ngx_evolution_components_shared_data_kanban_prioridades_data__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            "./projects/ngx-evolution-components/shared/data/kanban/prioridades.data.ts",
          );
      const __WEBPACK_DEFAULT_EXPORT__ = {
          component:
            _aseinfo_ngx_evolution_components_public_api__WEBPACK_IMPORTED_MODULE_0__.e,
          title: "Evolution Components/Tag Prioridad",
          tags: ["autodocs"],
          argTypes: {
            size: { control: "inline-radio", options: ["sm", "md", "lg"] },
          },
        },
        Default = {
          args: {
            label: "Tag",
            size: "sm",
            twClass: "",
            prioridad: {
              Nombre: "Alta",
              Color: "#FF0000",
              Codigo: 0,
              Orden: 0,
            },
          },
        },
        prioridadMasBaja = {
          args: {
            label: "Baja",
            size: "sm",
            prioridad:
              _aseinfo_ngx_evolution_components_shared_data_kanban_prioridades_data__WEBPACK_IMPORTED_MODULE_1__.vz,
          },
        },
        prioridadMedia = {
          args: { label: "Media", size: "md", twClass: "bg-gray-300" },
        },
        prioridadAlta = {
          args: { label: "Alta", size: "lg", twClass: "bg-gray-300" },
        },
        conClasePersonalizada = {
          args: {
            label: "Custom",
            size: "md",
            twClass:
              "bg-slate-600 text-white border-slate-700 font-bold cursor-pointer rounded-xl p-2",
          },
        };
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    label: 'Tag',\n    size: 'sm',\n    twClass: '',\n    prioridad: {\n      Nombre: 'Alta',\n      Color: '#FF0000',\n      Codigo: 0,\n      Orden: 0\n    }\n  }\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (prioridadMasBaja.parameters = {
          ...prioridadMasBaja.parameters,
          docs: {
            ...prioridadMasBaja.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    label: 'Baja',\n    size: 'sm',\n    prioridad: prioridadLowest\n  }\n}",
              ...prioridadMasBaja.parameters?.docs?.source,
            },
          },
        }),
        (prioridadMedia.parameters = {
          ...prioridadMedia.parameters,
          docs: {
            ...prioridadMedia.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    label: 'Media',\n    size: 'md',\n    twClass: 'bg-gray-300'\n  }\n}",
              ...prioridadMedia.parameters?.docs?.source,
            },
          },
        }),
        (prioridadAlta.parameters = {
          ...prioridadAlta.parameters,
          docs: {
            ...prioridadAlta.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    label: 'Alta',\n    size: 'lg',\n    twClass: 'bg-gray-300'\n  }\n}",
              ...prioridadAlta.parameters?.docs?.source,
            },
          },
        }),
        (conClasePersonalizada.parameters = {
          ...conClasePersonalizada.parameters,
          docs: {
            ...conClasePersonalizada.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    label: 'Custom',\n    size: 'md',\n    twClass: 'bg-slate-600 text-white border-slate-700 font-bold cursor-pointer rounded-xl p-2'\n  }\n}",
              ...conClasePersonalizada.parameters?.docs?.source,
            },
          },
        });
      const __namedExportsOrder = [
        "Default",
        "prioridadMasBaja",
        "prioridadMedia",
        "prioridadAlta",
        "conClasePersonalizada",
      ];
    },
  },
]);
