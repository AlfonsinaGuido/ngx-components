(self.webpackChunk_aseinfo_evolution_web_components =
  self.webpackChunk_aseinfo_evolution_web_components || []).push([
  [6616],
  {
    "./projects/ngx-evolution-components/tablero-skeleton/tablero-skeleton.component.scss?ngResource":
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
    "./stories/tablero-skeleton.stories.ts": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => tablero_skeleton_stories,
          masColumnas: () => masColumnas,
        });
      var tslib_es6 = __webpack_require__("./node_modules/tslib/tslib.es6.mjs");
      var tablero_skeleton_componentngResource = __webpack_require__(
          "./projects/ngx-evolution-components/tablero-skeleton/tablero-skeleton.component.scss?ngResource",
        ),
        tablero_skeleton_componentngResource_default = __webpack_require__.n(
          tablero_skeleton_componentngResource,
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
      let TableroSkeletonComponent = class TableroSkeletonComponent {
        constructor() {
          this.columns = 3;
        }
        ngOnInit() {
          this.updateColumnsArray();
        }
        ngOnChanges(changes) {
          changes.columns && this.updateColumnsArray();
        }
        updateColumnsArray() {
          this.columnArray = Array(this.columns).fill(0);
        }
        static #_ = (this.propDecorators = { columns: [{ type: core.Input }] });
      };
      TableroSkeletonComponent = (0, tslib_es6.Cg)(
        [
          (0, core.Component)({
            selector: "evo-tablero-skeleton",
            standalone: !0,
            imports: [common.NgForOf],
            template:
              '<div\n  class="flex flex-nowrap gap-4 h-screen mt-4 overflow-auto px-4 py-6 sm:mt-8 animate-pulse"\n  id="loading-board"\n>\n  @for (i of columnArray; track $index) {\n    <div class="flex flex-col gap-4" id="loading-board-column">\n      <div class="rounded-3xl bg-gray-200 h-10 w-full"></div>\n      <div\n        class="flex flex-col justify-between gap-2 rounded-xl bg-gray-50 p-2 shadow-md h-36 w-72"\n        id="loading-card"\n      >\n        <div class="rounded-md bg-gray-200 h-3 w-10"></div>\n        <div>\n          <div class="rounded-md bg-gray-200 mb-2 h-4 w-full"></div>\n          <div class="rounded-md bg-gray-200 mb-1 h-2 w-full"></div>\n          <div class="rounded-md bg-gray-200 h-2 w-9/12"></div>\n        </div>\n        <div class="flex flex-row justify-between items-center">\n          <div class="rounded-full size-8 bg-gray-200"></div>\n          <div class="rounded-md bg-gray-200 h-4 w-24"></div>\n        </div>\n      </div>\n    </div>\n  }\n</div>\n',
            styles: [
              tablero_skeleton_componentngResource_default(),
              outputngResource_default(),
            ],
          }),
        ],
        TableroSkeletonComponent,
      );
      const tablero_skeleton_stories = {
          component: TableroSkeletonComponent,
          title: "Evolution Components/Kanban/Tablero Skeleton",
          tags: ["autodocs"],
          argTypes: {},
          args: {},
        },
        Default = { args: { columns: 3 } },
        masColumnas = { args: { columns: 5 } };
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource: "{\n  args: {\n    columns: 3\n  }\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (masColumnas.parameters = {
          ...masColumnas.parameters,
          docs: {
            ...masColumnas.parameters?.docs,
            source: {
              originalSource: "{\n  args: {\n    columns: 5\n  }\n}",
              ...masColumnas.parameters?.docs?.source,
            },
          },
        });
      const __namedExportsOrder = ["Default", "masColumnas"];
    },
  },
]);
