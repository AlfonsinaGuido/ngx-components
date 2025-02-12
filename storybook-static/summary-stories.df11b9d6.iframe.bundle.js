(self.webpackChunk_aseinfo_evolution_web_components =
  self.webpackChunk_aseinfo_evolution_web_components || []).push([
  [1685],
  {
    "./projects/ngx-evolution-components/summary/summary.component.scss?ngResource":
      (module, __unused_webpack_exports, __webpack_require__) => {
        var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(
            "./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/noSourceMaps.js",
          ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__(
            "./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/api.js",
          )(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
        ___CSS_LOADER_EXPORT___.push([module.id, "", ""]),
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
    "./stories/summary.stories.ts": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => summary_stories,
        });
      var tslib_es6 = __webpack_require__("./node_modules/tslib/tslib.es6.mjs");
      var summary_componentngResource = __webpack_require__(
          "./projects/ngx-evolution-components/summary/summary.component.scss?ngResource",
        ),
        summary_componentngResource_default = __webpack_require__.n(
          summary_componentngResource,
        ),
        outputngResource = __webpack_require__(
          "./projects/ngx-evolution-components/styles/output.scss?ngResource",
        ),
        outputngResource_default = __webpack_require__.n(outputngResource),
        core = __webpack_require__(
          "./node_modules/@angular/core/fesm2022/core.mjs",
        );
      let SummaryComponent = class SummaryComponent {
        static #_ = (this.propDecorators = {
          title: [{ type: core.Input }],
          elements: [{ type: core.Input }],
          twClass: [{ type: core.Input }],
        });
      };
      SummaryComponent = (0, tslib_es6.Cg)(
        [
          (0, core.Component)({
            selector: "evo-summary",
            standalone: !0,
            imports: [],
            template:
              '<div\n  class="p-7 rounded-3xl border border-light-gray text-dark-gray {{ twClass }}"\n>\n  <div class="text-xl font-bold mb-3">\n    {{ title }}\n  </div>\n  <div class="flex flex-wrap gap-6">\n    @for (element of elements; track $index) {\n      <div class="text-sm w-52">\n        <div class="test-element-title text-medium-gray">\n          {{ element.title }}\n        </div>\n        <div class="test-element-description font-bold">\n          {{ element.description }}\n        </div>\n      </div>\n    }\n  </div>\n</div>\n',
            encapsulation: core.ViewEncapsulation.None,
            styles: [
              summary_componentngResource_default(),
              outputngResource_default(),
            ],
          }),
        ],
        SummaryComponent,
      );
      const summary_stories = {
          title: "Evolution Components/Summary",
          component: SummaryComponent,
          tags: ["autodocs"],
        },
        Default = {
          args: {
            title: "Resumen",
            elements: [
              { title: "Empleados Asignados", description: "20" },
              { title: "Programa", description: "Programa Desarrolladores" },
              {
                title: "Fecha de Asignación",
                description: "18 Noviembre 2024",
              },
              { title: "Programa", description: "Programa Desarrolladores" },
              {
                title: "Fecha de Asignación",
                description: "18 Noviembre 2024",
              },
              { title: "Empleados Asignados", description: "20" },
            ],
            twClass: "",
          },
        };
      Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    title: 'Resumen',\n    elements: [{\n      title: 'Empleados Asignados',\n      description: '20'\n    }, {\n      title: 'Programa',\n      description: 'Programa Desarrolladores'\n    }, {\n      title: 'Fecha de Asignación',\n      description: '18 Noviembre 2024'\n    }, {\n      title: 'Programa',\n      description: 'Programa Desarrolladores'\n    }, {\n      title: 'Fecha de Asignación',\n      description: '18 Noviembre 2024'\n    }, {\n      title: 'Empleados Asignados',\n      description: '20'\n    }],\n    twClass: ''\n  }\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      };
      const __namedExportsOrder = ["Default"];
    },
  },
]);
