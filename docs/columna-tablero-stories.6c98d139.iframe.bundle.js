(self.webpackChunk_aseinfo_evolution_web_components =
  self.webpackChunk_aseinfo_evolution_web_components || []).push([
  [352],
  {
    "./projects/ngx-evolution-components/columna-tablero/columna-tablero.component.scss?ngResource":
      (module, __unused_webpack_exports, __webpack_require__) => {
        var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(
            "./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/noSourceMaps.js",
          ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__(
            "./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/api.js",
          )(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ".cdk-drag-placeholder {\n  outline: 2px;\n  outline-style: dashed;\n  outline-color: var(--primary-700);\n  border-radius: 0.75rem;\n  opacity: 0.5;\n}\n\n.cdk-drag-preview {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  border-radius: 0.75rem;\n}\n\n.cdk-drop-list-dragging .cdk-drag {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.cdk-drag-animating {\n  transition: transform 150ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.carta-actividad {\n  cursor: pointer;\n}\n\n.carta-actividad.cdk-drag-disabled {\n  -webkit-user-select: none;\n          user-select: none;\n}",
          "",
        ]),
          (module.exports = ___CSS_LOADER_EXPORT___.toString());
      },
    "./projects/ngx-evolution-components/columna-tablero/columna-tablero.component.ts":
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
          E: () => ColumnaTableroComponent,
        });
        var tslib_es6 = __webpack_require__(
          "./node_modules/tslib/tslib.es6.mjs",
        );
        var columna_tablero_componentngResource = __webpack_require__(
            "./projects/ngx-evolution-components/columna-tablero/columna-tablero.component.scss?ngResource",
          ),
          columna_tablero_componentngResource_default = __webpack_require__.n(
            columna_tablero_componentngResource,
          ),
          outputngResource = __webpack_require__(
            "./projects/ngx-evolution-components/styles/output.scss?ngResource",
          ),
          outputngResource_default = __webpack_require__.n(outputngResource),
          core = __webpack_require__(
            "./node_modules/@angular/core/fesm2022/core.mjs",
          ),
          estado_enum = __webpack_require__(
            "./projects/ngx-evolution-components/shared/enums/estado.enum.ts",
          ),
          duracion_enum = __webpack_require__(
            "./projects/ngx-evolution-components/shared/enums/duracion.enum.ts",
          ),
          carta_actividad_component = __webpack_require__(
            "./projects/ngx-evolution-components/carta-actividad/carta-actividad.component.ts",
          ),
          common = __webpack_require__(
            "./node_modules/@angular/common/fesm2022/common.mjs",
          ),
          drag_drop = __webpack_require__(
            "./node_modules/@angular/cdk/fesm2022/drag-drop.mjs",
          );
        let ColumnaTableroComponent = class ColumnaTableroComponent {
          constructor() {
            (this.actividadSelected = {
              Codigo: 0,
              Duracion: 0,
              Etapa: { Codigo: 0, Nombre: "", Descripcion: "" },
              EstadoDb: estado_enum.u.Pendiente,
              Tipo: { Codigo: 0, Nombre: "", Descripcion: "" },
              UnidadDuracionDb: duracion_enum.C.Horas,
              Nombre: "",
              FechaFin: new Date(),
            }),
              (this.orderActivity = new core.EventEmitter()),
              (this.updateActivity = new core.EventEmitter()),
              (this.validationCDK = (item) =>
                !!this.validation &&
                this.validation.action(item.data, this.validation.estado));
          }
          drop(event) {
            if (event.previousContainer === event.container) {
              (0, drag_drop.HD)(
                event.container.data,
                event.previousIndex,
                event.currentIndex,
              );
              const itemMoved = event.container.data[event.currentIndex];
              this.orderActivity.emit(itemMoved);
            } else {
              (0, drag_drop.eg)(
                event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex,
              );
              const itemMoved = event.container.data[event.currentIndex];
              this.updateActivity.emit(itemMoved);
            }
          }
          mostrar(event) {
            this.actividadSelected = event;
          }
          static #_ = (this.propDecorators = {
            activities: [{ type: core.Input }],
            validation: [{ type: core.Input }],
            orderActivity: [{ type: core.Output, args: ["orderActivity"] }],
            updateActivity: [{ type: core.Output, args: ["updateActivity"] }],
          });
        };
        ColumnaTableroComponent = (0, tslib_es6.Cg)(
          [
            (0, core.Component)({
              selector: "evo-columna-tablero",
              standalone: !0,
              imports: [
                carta_actividad_component.e,
                common.CommonModule,
                drag_drop.ad,
              ],
              template:
                '<div\n  cdkDropList\n  class="flex flex-col gap-2 !h-full p-2 rounded-lg"\n  [cdkDropListData]="activities"\n  (cdkDropListDropped)="drop($event)"\n  [cdkDropListEnterPredicate]="validationCDK"\n  id="board-activity-column"\n  [ngClass]="{\n    \'rounded-xl outline-dashed outline-gray-300 outline-2 h-full\':\n      activities.length === 0,\n  }"\n>\n  @for (actividad of activities; track actividad.Codigo) {\n    <evo-carta-actividad\n      class="carta-actividad"\n      cdkDrag\n      cdkDragHandle\n      [cdkDragData]="actividad"\n      [actividad]="actividad"\n      [endDate]="actividad.FechaFin"\n      [twClass]="\'h-36\'"\n      [id]="actividad.Codigo"\n      (taskUpdate)="mostrar($event.actividad)"\n    >\n    </evo-carta-actividad>\n  }\n</div>\n',
              styles: [
                columna_tablero_componentngResource_default(),
                outputngResource_default(),
              ],
            }),
          ],
          ColumnaTableroComponent,
        );
      },
    "./stories/columna-tablero.stories.ts": (
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
          sinActividadeds: () => sinActividadeds,
        });
      var _aseinfo_ngx_evolution_components_public_api__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            "./projects/ngx-evolution-components/columna-tablero/columna-tablero.component.ts",
          ),
        _aseinfo_ngx_evolution_components_shared_data_kanban_actividades_data__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            "./projects/ngx-evolution-components/shared/data/kanban/actividades.data.ts",
          );
      const __WEBPACK_DEFAULT_EXPORT__ = {
          component:
            _aseinfo_ngx_evolution_components_public_api__WEBPACK_IMPORTED_MODULE_0__.E,
          title: "Evolution Components/Kanban/Columna Tablero",
          tags: ["autodocs"],
        },
        Default = {
          args: {
            activities:
              _aseinfo_ngx_evolution_components_shared_data_kanban_actividades_data__WEBPACK_IMPORTED_MODULE_1__.yM,
          },
        },
        sinActividadeds = { args: { activities: [] } };
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource: "{\n  args: {\n    activities: actividades\n  }\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (sinActividadeds.parameters = {
          ...sinActividadeds.parameters,
          docs: {
            ...sinActividadeds.parameters?.docs,
            source: {
              originalSource: "{\n  args: {\n    activities: []\n  }\n}",
              ...sinActividadeds.parameters?.docs?.source,
            },
          },
        });
      const __namedExportsOrder = ["Default", "sinActividadeds"];
    },
  },
]);
