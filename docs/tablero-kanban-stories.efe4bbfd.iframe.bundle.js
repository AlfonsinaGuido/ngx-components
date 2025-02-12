(self.webpackChunk_aseinfo_evolution_web_components =
  self.webpackChunk_aseinfo_evolution_web_components || []).push([
  [1840],
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
    "./projects/ngx-evolution-components/tablero-kanban/tablero-kanban.component.scss?ngResource":
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
    "./stories/tablero-kanban.stories.ts": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => tablero_kanban_stories,
        });
      var tslib_es6 = __webpack_require__("./node_modules/tslib/tslib.es6.mjs");
      var tablero_kanban_componentngResource = __webpack_require__(
          "./projects/ngx-evolution-components/tablero-kanban/tablero-kanban.component.scss?ngResource",
        ),
        tablero_kanban_componentngResource_default = __webpack_require__.n(
          tablero_kanban_componentngResource,
        ),
        outputngResource = __webpack_require__(
          "./projects/ngx-evolution-components/styles/output.scss?ngResource",
        ),
        outputngResource_default = __webpack_require__.n(outputngResource),
        core = __webpack_require__(
          "./node_modules/@angular/core/fesm2022/core.mjs",
        ),
        columna_tablero_component = __webpack_require__(
          "./projects/ngx-evolution-components/columna-tablero/columna-tablero.component.ts",
        ),
        header_columna_component = __webpack_require__(
          "./projects/ngx-evolution-components/header-columna/header-columna.component.ts",
        ),
        drag_drop = __webpack_require__(
          "./node_modules/@angular/cdk/fesm2022/drag-drop.mjs",
        ),
        collections = __webpack_require__(
          "./node_modules/@angular/cdk/fesm2022/collections.mjs",
        ),
        Subject = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/Subject.js",
        ),
        Subscription = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/Subscription.js",
        );
      let nextId$1 = 0;
      const CDK_ACCORDION = new core.InjectionToken("CdkAccordion");
      class CdkAccordion {
        constructor() {
          (this._stateChanges = new Subject.B()),
            (this._openCloseAllActions = new Subject.B()),
            (this.id = "cdk-accordion-" + nextId$1++),
            (this.multi = !1);
        }
        openAll() {
          this.multi && this._openCloseAllActions.next(!0);
        }
        closeAll() {
          this._openCloseAllActions.next(!1);
        }
        ngOnChanges(changes) {
          this._stateChanges.next(changes);
        }
        ngOnDestroy() {
          this._stateChanges.complete(), this._openCloseAllActions.complete();
        }
        static #_ = (this.ɵfac = function CdkAccordion_Factory(t) {
          return new (t || CdkAccordion)();
        });
        static #_2 = (this.ɵdir = core["ɵɵdefineDirective"]({
          type: CdkAccordion,
          selectors: [["cdk-accordion"], ["", "cdkAccordion", ""]],
          inputs: {
            multi: [
              core["ɵɵInputFlags"].HasDecoratorInputTransform,
              "multi",
              "multi",
              core.booleanAttribute,
            ],
          },
          exportAs: ["cdkAccordion"],
          standalone: !0,
          features: [
            core["ɵɵProvidersFeature"]([
              { provide: CDK_ACCORDION, useExisting: CdkAccordion },
            ]),
            core["ɵɵInputTransformsFeature"],
            core["ɵɵNgOnChangesFeature"],
          ],
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          CdkAccordion,
          [
            {
              type: core.Directive,
              args: [
                {
                  selector: "cdk-accordion, [cdkAccordion]",
                  exportAs: "cdkAccordion",
                  providers: [
                    { provide: CDK_ACCORDION, useExisting: CdkAccordion },
                  ],
                  standalone: !0,
                },
              ],
            },
          ],
          null,
          {
            multi: [
              {
                type: core.Input,
                args: [{ transform: core.booleanAttribute }],
              },
            ],
          },
        );
      let nextId = 0;
      class CdkAccordionItem {
        get expanded() {
          return this._expanded;
        }
        set expanded(expanded) {
          if (this._expanded !== expanded) {
            if (
              ((this._expanded = expanded),
              this.expandedChange.emit(expanded),
              expanded)
            ) {
              this.opened.emit();
              const accordionId = this.accordion ? this.accordion.id : this.id;
              this._expansionDispatcher.notify(this.id, accordionId);
            } else this.closed.emit();
            this._changeDetectorRef.markForCheck();
          }
        }
        constructor(accordion, _changeDetectorRef, _expansionDispatcher) {
          (this.accordion = accordion),
            (this._changeDetectorRef = _changeDetectorRef),
            (this._expansionDispatcher = _expansionDispatcher),
            (this._openCloseAllSubscription = Subscription.yU.EMPTY),
            (this.closed = new core.EventEmitter()),
            (this.opened = new core.EventEmitter()),
            (this.destroyed = new core.EventEmitter()),
            (this.expandedChange = new core.EventEmitter()),
            (this.id = "cdk-accordion-child-" + nextId++),
            (this._expanded = !1),
            (this.disabled = !1),
            (this._removeUniqueSelectionListener = () => {}),
            (this._removeUniqueSelectionListener = _expansionDispatcher.listen(
              (id, accordionId) => {
                this.accordion &&
                  !this.accordion.multi &&
                  this.accordion.id === accordionId &&
                  this.id !== id &&
                  (this.expanded = !1);
              },
            )),
            this.accordion &&
              (this._openCloseAllSubscription =
                this._subscribeToOpenCloseAllActions());
        }
        ngOnDestroy() {
          this.opened.complete(),
            this.closed.complete(),
            this.destroyed.emit(),
            this.destroyed.complete(),
            this._removeUniqueSelectionListener(),
            this._openCloseAllSubscription.unsubscribe();
        }
        toggle() {
          this.disabled || (this.expanded = !this.expanded);
        }
        close() {
          this.disabled || (this.expanded = !1);
        }
        open() {
          this.disabled || (this.expanded = !0);
        }
        _subscribeToOpenCloseAllActions() {
          return this.accordion._openCloseAllActions.subscribe((expanded) => {
            this.disabled || (this.expanded = expanded);
          });
        }
        static #_ = (this.ɵfac = function CdkAccordionItem_Factory(t) {
          return new (t || CdkAccordionItem)(
            core["ɵɵdirectiveInject"](CDK_ACCORDION, 12),
            core["ɵɵdirectiveInject"](core.ChangeDetectorRef),
            core["ɵɵdirectiveInject"](collections.zP),
          );
        });
        static #_2 = (this.ɵdir = core["ɵɵdefineDirective"]({
          type: CdkAccordionItem,
          selectors: [["cdk-accordion-item"], ["", "cdkAccordionItem", ""]],
          inputs: {
            expanded: [
              core["ɵɵInputFlags"].HasDecoratorInputTransform,
              "expanded",
              "expanded",
              core.booleanAttribute,
            ],
            disabled: [
              core["ɵɵInputFlags"].HasDecoratorInputTransform,
              "disabled",
              "disabled",
              core.booleanAttribute,
            ],
          },
          outputs: {
            closed: "closed",
            opened: "opened",
            destroyed: "destroyed",
            expandedChange: "expandedChange",
          },
          exportAs: ["cdkAccordionItem"],
          standalone: !0,
          features: [
            core["ɵɵProvidersFeature"]([
              { provide: CDK_ACCORDION, useValue: void 0 },
            ]),
            core["ɵɵInputTransformsFeature"],
          ],
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          CdkAccordionItem,
          [
            {
              type: core.Directive,
              args: [
                {
                  selector: "cdk-accordion-item, [cdkAccordionItem]",
                  exportAs: "cdkAccordionItem",
                  providers: [{ provide: CDK_ACCORDION, useValue: void 0 }],
                  standalone: !0,
                },
              ],
            },
          ],
          () => [
            {
              type: CdkAccordion,
              decorators: [
                { type: core.Optional },
                { type: core.Inject, args: [CDK_ACCORDION] },
                { type: core.SkipSelf },
              ],
            },
            { type: core.ChangeDetectorRef },
            { type: collections.zP },
          ],
          {
            closed: [{ type: core.Output }],
            opened: [{ type: core.Output }],
            destroyed: [{ type: core.Output }],
            expandedChange: [{ type: core.Output }],
            expanded: [
              {
                type: core.Input,
                args: [{ transform: core.booleanAttribute }],
              },
            ],
            disabled: [
              {
                type: core.Input,
                args: [{ transform: core.booleanAttribute }],
              },
            ],
          },
        );
      class CdkAccordionModule {
        static #_ = (this.ɵfac = function CdkAccordionModule_Factory(t) {
          return new (t || CdkAccordionModule)();
        });
        static #_2 = (this.ɵmod = core["ɵɵdefineNgModule"]({
          type: CdkAccordionModule,
          imports: [CdkAccordion, CdkAccordionItem],
          exports: [CdkAccordion, CdkAccordionItem],
        }));
        static #_3 = (this.ɵinj = core["ɵɵdefineInjector"]({}));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          CdkAccordionModule,
          [
            {
              type: core.NgModule,
              args: [
                {
                  imports: [CdkAccordion, CdkAccordionItem],
                  exports: [CdkAccordion, CdkAccordionItem],
                },
              ],
            },
          ],
          null,
          null,
        );
      var common = __webpack_require__(
          "./node_modules/@angular/common/fesm2022/common.mjs",
        ),
        icon = __webpack_require__(
          "./node_modules/@angular/material/fesm2022/icon.mjs",
        );
      let TableroKanbanComponent = class TableroKanbanComponent {
        constructor() {
          (this.activityModified = new core.EventEmitter()),
            (this.actividadesMock = []),
            (this.actividadesEmpleos = []),
            (this.isSingle = !0);
        }
        changeActivityStatus(event) {
          this.activityModified.emit(event);
        }
        static #_ = (this.propDecorators = {
          columns: [{ type: core.Input }],
          twClass: [{ type: core.Input }],
          activityModified: [{ type: core.Output, args: ["activityModified"] }],
        });
      };
      TableroKanbanComponent = (0, tslib_es6.Cg)(
        [
          (0, core.Component)({
            selector: "evo-tablero-kanban",
            standalone: !0,
            imports: [
              columna_tablero_component.E,
              drag_drop.RK,
              common.CommonModule,
              header_columna_component.A,
              CdkAccordionModule,
              icon.An,
            ],
            template:
              '<div\n  class="flex flex-col flex-nowrap px-4 py-6 sm:mt-8 sm:px-2 snap-x snap-proximity overflow-x-auto overflow-y-hidden"\n  [class]="twClass"\n  id="board"\n>\n  <div class="flex gap-3" cdkDropListGroup>\n    @for (columna of columns; track $index) {\n      <div\n        class="inline-block min-w-72 max-w-72 whitespace-normal snap-center"\n        id="board-column"\n      >\n        <evo-header-columna\n          [name]="columna.nombre"\n          [count]="columna.actividades.length"\n          [index]="$index"\n          [withCount]="isSingle"\n        ></evo-header-columna>\n        @if (isSingle) {\n          <evo-columna-tablero\n            [activities]="columna.actividades"\n            [validation]="columna.validacion"\n            (updateActivity)="changeActivityStatus($event)"\n          >\n          </evo-columna-tablero>\n        }\n      </div>\n    }\n  </div>\n  @if (!isSingle) {\n    <cdk-accordion #accordion="cdkAccordion" [multi]="true">\n      @for (empleo of actividadesEmpleos; track empleo; let index = $index) {\n        <cdk-accordion-item\n          #accordionItem="cdkAccordionItem"\n          tabindex="0"\n          [expanded]="true"\n        >\n          <div\n            class="w-full flex items-center overflow-hidden line-clamp-1 text-nowrap rounded-md p-1.5 mb-0.5 cursor-pointer bg-gray-100 hover:bg-gray-200 transition-colors"\n            (click)="accordionItem.toggle()"\n          >\n            <mat-icon\n              class="flex items-center justify-center text-xl"\n              fontSet="material-symbols-outlined"\n              aria-hidden="false"\n              aria-label="icon"\n            >\n              {{ accordionItem.expanded ? "chevron_right" : "expand_more" }}\n            </mat-icon>\n            <p class="text-sm">\n              {{ empleo.nombreEmpleado }}\n              <span class="text-tiny font-bold text-gray-400">\n                - {{ empleo.count }} actividades\n              </span>\n            </p>\n          </div>\n          <div\n            role="region"\n            [class]="accordionItem.expanded ? \'flex gap-3 my-2\' : \'hidden\'"\n            cdkDropListGroup\n          >\n            <div\n              class="inline-block min-w-72 max-w-72 whitespace-normal snap-center"\n            >\n              <evo-columna-tablero\n                [activities]="empleo.actividades.actividades"\n                (updateActivity)="changeActivityStatus($event)"\n              >\n              </evo-columna-tablero>\n            </div>\n          </div>\n        </cdk-accordion-item>\n      }\n    </cdk-accordion>\n  }\n</div>\n',
            styles: [
              tablero_kanban_componentngResource_default(),
              outputngResource_default(),
            ],
          }),
        ],
        TableroKanbanComponent,
      );
      var estado_enum = __webpack_require__(
          "./projects/ngx-evolution-components/shared/enums/estado.enum.ts",
        ),
        actividades_data = __webpack_require__(
          "./projects/ngx-evolution-components/shared/data/kanban/actividades.data.ts",
        );
      const tablero_kanban_stories = {
          component: TableroKanbanComponent,
          title: "Evolution Components/Kanban/Tablero",
          tags: ["autodocs"],
          argTypes: {},
          args: {},
        },
        validarEstado = (item, tipoColumna) => {
          const estado = item.EstadoDb;
          let resultado;
          switch (tipoColumna) {
            case estado_enum.u.EnProceso:
              resultado = estado === estado_enum.u.Pendiente;
              break;
            case estado_enum.u.Finalizada:
              resultado = estado === estado_enum.u.EnProceso;
              break;
            default:
              resultado = !1;
          }
          return resultado;
        },
        estadosMap = {
          [estado_enum.u.Pendiente]: {
            id: 1,
            nombre: "abiertas",
            validacion: {
              action: validarEstado,
              estado: estado_enum.u.Pendiente,
            },
          },
          [estado_enum.u.EnProceso]: {
            id: 2,
            nombre: "en progreso",
            validacion: {
              action: validarEstado,
              estado: estado_enum.u.EnProceso,
            },
          },
          [estado_enum.u.Finalizada]: {
            id: 3,
            nombre: "finalizadas",
            validacion: {
              action: validarEstado,
              estado: estado_enum.u.Finalizada,
            },
          },
        },
        Default = {
          args: {
            columns: Object.values(
              actividades_data.yM.reduce((acc, act) => {
                const estadoConfig = estadosMap[act.EstadoDb];
                return estadoConfig
                  ? (acc[act.EstadoDb] ||
                      (acc[act.EstadoDb] = {
                        ...estadoConfig,
                        actividades: [],
                      }),
                    acc[act.EstadoDb].actividades.push(act),
                    acc)
                  : acc;
              }, {}),
            ),
          },
        };
      Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource: "{\n  args: {\n    columns\n  }\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      };
      const __namedExportsOrder = ["Default"];
    },
  },
]);
