(self.webpackChunk_aseinfo_evolution_web_components =
  self.webpackChunk_aseinfo_evolution_web_components || []).push([
  [5439],
  {
    "./projects/ngx-evolution-components/action-menu/action-menu.component.scss?ngResource":
      (module, __unused_webpack_exports, __webpack_require__) => {
        var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(
            "./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/noSourceMaps.js",
          ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__(
            "./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/api.js",
          )(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          '@charset "UTF-8";\n.evo-actions-menu-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: transparent;\n  z-index: 999;\n}\n\n.evo-actions-menu {\n  position: absolute;\n  top: 80%;\n  right: 0;\n  background: white;\n  border: 1px solid #ddd;\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n  border-radius: 10px;\n  z-index: 999;\n  min-width: 180px;\n  /* Estilo inicial para la transición */\n  opacity: 0;\n  transform: translateY(-20px);\n  visibility: hidden;\n  transition: opacity 0.3s ease, transform 0.3s ease;\n}\n.evo-actions-menu.open {\n  opacity: 1;\n  transform: translateY(0);\n  visibility: visible;\n}\n.evo-actions-menu ul li {\n  margin: 0;\n}\n.evo-actions-menu ul li evo-button button.evo-button {\n  width: 100%;\n  border: none;\n  box-shadow: none;\n  border-radius: 0;\n  padding: 0;\n  height: 40px;\n  display: flex;\n  align-items: center;\n}\n.evo-actions-menu ul li evo-button button.evo-button div.evo-button__content {\n  justify-content: start;\n  width: 100%;\n  height: 100%;\n}\n.evo-actions-menu ul li evo-button button.evo-button div.evo-button__content div.icon {\n  margin-left: 10px;\n}\n.evo-actions-menu ul li evo-button button.evo-button:hover {\n  border: none;\n  background-color: var(--light-gray);\n}\n.evo-actions-menu ul li evo-button button.evo-button .label {\n  text-align: left;\n  font-size: 13px;\n  font-weight: 600;\n  height: auto;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin: 0 10px;\n}\n.evo-actions-menu ul li:first-child evo-button button.evo-button {\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n.evo-actions-menu ul li:last-child evo-button button.evo-button {\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}',
          "",
        ]),
          (module.exports = ___CSS_LOADER_EXPORT___.toString());
      },
    "./projects/ngx-evolution-components/pagination/pagination.component.scss?ngResource":
      (module, __unused_webpack_exports, __webpack_require__) => {
        var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(
            "./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/noSourceMaps.js",
          ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__(
            "./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/api.js",
          )(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ".evo-pagination {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  margin-top: 1rem;\n}\n.evo-pagination span {\n  font-size: 0.875rem;\n}\n.evo-pagination evo-button .evo-button.pagination__evo-button.without-border.theme-secondary {\n  background-color: transparent;\n  box-shadow: none;\n}",
          "",
        ]),
          (module.exports = ___CSS_LOADER_EXPORT___.toString());
      },
    "./projects/ngx-evolution-components/smart-list/smart-list.component.scss?ngResource":
      (module, __unused_webpack_exports, __webpack_require__) => {
        var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(
            "./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/noSourceMaps.js",
          ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__(
            "./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/api.js",
          )(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ".evo-table-container {\n  --scrollbar-track-color: #f1f1f1;\n  --scrollbar-thumb-color: #c1c1c1;\n  --scrollbar-size: 5px;\n}\n.evo-table-container .evo-table {\n  width: 100%;\n  border-collapse: collapse;\n  margin: 1rem 0;\n  font-size: 14px;\n  margin: 0;\n}\n.evo-table-container .evo-table th,\n.evo-table-container .evo-table td {\n  padding: 0.75rem;\n  text-align: left;\n  border-bottom: 1px solid #ddd;\n}\n.evo-table-container .evo-table th {\n  text-align: left;\n  padding: 8px;\n  border-bottom: 1px solid #ddd;\n  background-color: #f8fafc;\n  font-weight: 500;\n  color: #64748b;\n}\n.evo-table-container .evo-table td input[type=checkbox] {\n  transform: scale(1.2);\n  padding: 8px;\n  text-align: left;\n  border-radius: 100%;\n}\n.evo-table-container .evo-table .profile {\n  display: flex;\n  align-items: center;\n}\n.evo-table-container .evo-table .profile .profile-info {\n  margin-left: 0.75rem;\n}\n.evo-table-container .evo-table .profile .profile-info .name {\n  font-weight: bold;\n}\n.evo-table-container .evo-table .pt-35 {\n  padding-top: 35px;\n}\n.evo-table-container .evo-table .smart-list-selector {\n  bottom: 80px;\n  height: 60px;\n}\n.evo-table-container .evo-table .smart-list-selector .mat-mdc-form-field-infix {\n  bottom: 8px;\n}\n.evo-table-container .evo-table .smart-list-selector .mat-mdc-form-field-focus-overlay {\n  height: 42px;\n}\n.evo-table-container .evo-table .smart-list-selector label {\n  font-size: 12px;\n}\n.evo-table-container .evo-table .smart-list-selector span {\n  font-size: 12px;\n}\n.evo-table-container .modal-backdrop {\n  display: none;\n}\n.evo-table-container .card-actions {\n  display: flex;\n  justify-content: flex-end;\n  position: absolute;\n}\n.evo-table-container .center-content {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.evo-table-container .custom-scroll::-webkit-scrollbar {\n  width: var(--scrollbar-size);\n}\n.evo-table-container .custom-scroll::-webkit-scrollbar-track {\n  background: var(--scrollbar-track-color);\n  border-radius: 5px;\n}\n.evo-table-container .custom-scroll::-webkit-scrollbar-thumb {\n  background: var(--scrollbar-thumb-color);\n  border-radius: 5px;\n}\n@supports not selector(::-webkit-scrollbar) {\n  .evo-table-container .custom-scroll {\n    scrollbar-width: thin;\n    scrollbar-color: var(--scrollbar-thumb-color) var(--scrollbar-track-color);\n  }\n}\n\n.evo-card-container {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.evo-card-container .card {\n  border: 1px solid #ddd;\n  padding: 30px;\n  padding-top: 5px;\n  padding-bottom: 8px;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.evo-card-container .evo-table {\n  width: 100%;\n  border-collapse: collapse;\n  margin: 1rem 0;\n  font-size: 14px;\n}\n.evo-card-container .evo-table th,\n.evo-card-container .evo-table td {\n  padding: 0.75rem;\n  text-align: left;\n  border-bottom: 1px solid #ddd;\n}\n.evo-card-container .evo-table th {\n  text-align: left;\n  padding: 8px;\n  border-bottom: 1px solid #ddd;\n  background-color: #f8fafc;\n  font-weight: 500;\n  color: #64748b;\n}\n.evo-card-container .evo-table td input[type=checkbox] {\n  transform: scale(1.2);\n  padding: 8px;\n  text-align: left;\n  border-radius: 100%;\n}\n.evo-card-container .evo-table .profile {\n  display: flex;\n  align-items: center;\n}\n.evo-card-container .evo-table .profile .profile-info {\n  margin-left: 0.75rem;\n}\n.evo-card-container .evo-table .profile .profile-info .name {\n  font-weight: bold;\n}\n.evo-card-container .card-row {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 0.5rem;\n}\n.evo-card-container .card-actions {\n  display: flex;\n  justify-content: flex-end;\n  position: absolute;\n}\n.evo-card-container .center-content {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nevo-button .evo-button.smart-list-button {\n  border-radius: 20px;\n  width: 80px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n}\nevo-button .evo-button.smart-list-button div.label {\n  font-size: 12px;\n  font-weight: 500;\n}\nevo-button .evo-button.smart-list-button__assigned {\n  pointer-events: none;\n  border: none;\n  background-color: var(--light-caution);\n  color: var(--caution);\n}\nevo-button .evo-button.smart-list-button__assigned:hover {\n  pointer-events: none;\n  border: none;\n  background-color: var(--light-caution);\n  color: var(--caution);\n}\nevo-button .evo-button.smart-list-button__add {\n  border: 1.5px solid var(--success);\n  color: var(--success);\n}\nevo-button .evo-button.smart-list-button__add:hover {\n  border: 1.5px solid var(--light-success);\n  color: var(--light-success);\n}\nevo-button .evo-button.smart-list-button__delete {\n  border: 1.5px solid var(--warn);\n  color: var(--warn);\n}\nevo-button .evo-button.smart-list-button__delete:hover {\n  border: 1.5px solid var(--light-warn);\n  color: var(--light-warn);\n}\n\n.table-container evo-button .evo-button.card__evo-button.without-border.theme-secondary,\n.card-container evo-button .evo-button.card__evo-button.without-border.theme-secondary {\n  background-color: transparent;\n  box-shadow: none;\n  border: none;\n}\n.table-container evo-button .evo-button.card__evo-button.without-border.theme-secondary:hover,\n.card-container evo-button .evo-button.card__evo-button.without-border.theme-secondary:hover {\n  background-color: transparent;\n  box-shadow: none;\n  border: none;\n}\n.table-container evo-button .evo-button.card__evo-button.without-border.theme-secondary mat-icon:hover,\n.card-container evo-button .evo-button.card__evo-button.without-border.theme-secondary mat-icon:hover {\n  color: var(--light-gray) !important;\n}",
          "",
        ]),
          (module.exports = ___CSS_LOADER_EXPORT___.toString());
      },
    "./node_modules/@angular/platform-browser/fesm2022/animations/async.mjs": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      "use strict";
      __webpack_require__.d(__webpack_exports__, {
        h: () => provideAnimationsAsync,
      });
      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./node_modules/@angular/common/fesm2022/common.mjs",
        ),
        _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/@angular/core/fesm2022/core.mjs",
        ),
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            "./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs",
          );
      class AsyncAnimationRendererFactory {
        constructor(doc, delegate, zone, animationType, moduleImpl) {
          (this.doc = doc),
            (this.delegate = delegate),
            (this.zone = zone),
            (this.animationType = animationType),
            (this.moduleImpl = moduleImpl),
            (this._rendererFactoryPromise = null),
            (this.scheduler = (0,
            _angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(
              _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                "ɵChangeDetectionScheduler"
              ],
              { optional: !0 },
            ));
        }
        ngOnDestroy() {
          this._engine?.flush();
        }
        loadImpl() {
          return (
            this.moduleImpl ??
            Promise.resolve().then(
              __webpack_require__.bind(
                __webpack_require__,
                "./node_modules/@angular/animations/fesm2022/browser.mjs",
              ),
            )
          )
            .catch((e) => {
              throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                "ɵRuntimeError"
              ](
                5300,
                ("undefined" == typeof ngDevMode || ngDevMode) &&
                  "Async loading for animations package was enabled, but loading failed. Angular falls back to using regular rendering. No animations will be displayed and their styles won't be applied.",
              );
            })
            .then(({ ɵcreateEngine, ɵAnimationRendererFactory }) => {
              this._engine = ɵcreateEngine(
                this.animationType,
                this.doc,
                this.scheduler,
              );
              const rendererFactory = new ɵAnimationRendererFactory(
                this.delegate,
                this._engine,
                this.zone,
              );
              return (this.delegate = rendererFactory), rendererFactory;
            });
        }
        createRenderer(hostElement, rendererType) {
          const renderer = this.delegate.createRenderer(
            hostElement,
            rendererType,
          );
          if (0 === renderer.ɵtype) return renderer;
          "boolean" == typeof renderer.throwOnSyntheticProps &&
            (renderer.throwOnSyntheticProps = !1);
          const dynamicRenderer = new DynamicDelegationRenderer(renderer);
          return (
            rendererType?.data?.animation &&
              !this._rendererFactoryPromise &&
              (this._rendererFactoryPromise = this.loadImpl()),
            this._rendererFactoryPromise
              ?.then((animationRendererFactory) => {
                const animationRenderer =
                  animationRendererFactory.createRenderer(
                    hostElement,
                    rendererType,
                  );
                dynamicRenderer.use(animationRenderer);
              })
              .catch((e) => {
                dynamicRenderer.use(renderer);
              }),
            dynamicRenderer
          );
        }
        begin() {
          this.delegate.begin?.();
        }
        end() {
          this.delegate.end?.();
        }
        whenRenderingDone() {
          return this.delegate.whenRenderingDone?.() ?? Promise.resolve();
        }
        static #_ = (this.ɵfac = function AsyncAnimationRendererFactory_Factory(
          t,
        ) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinvalidFactory"]();
        });
        static #_2 = (this.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineInjectable"
        ]({
          token: AsyncAnimationRendererFactory,
          factory: AsyncAnimationRendererFactory.ɵfac,
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
          AsyncAnimationRendererFactory,
          [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable }],
          () => [
            { type: Document },
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererFactory2,
            },
            { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone },
            { type: void 0 },
            { type: Promise },
          ],
          null,
        );
      class DynamicDelegationRenderer {
        constructor(delegate) {
          (this.delegate = delegate), (this.replay = []), (this.ɵtype = 1);
        }
        use(impl) {
          if (((this.delegate = impl), null !== this.replay)) {
            for (const fn of this.replay) fn(impl);
            this.replay = null;
          }
        }
        get data() {
          return this.delegate.data;
        }
        destroy() {
          (this.replay = null), this.delegate.destroy();
        }
        createElement(name, namespace) {
          return this.delegate.createElement(name, namespace);
        }
        createComment(value) {
          return this.delegate.createComment(value);
        }
        createText(value) {
          return this.delegate.createText(value);
        }
        get destroyNode() {
          return this.delegate.destroyNode;
        }
        appendChild(parent, newChild) {
          this.delegate.appendChild(parent, newChild);
        }
        insertBefore(parent, newChild, refChild, isMove) {
          this.delegate.insertBefore(parent, newChild, refChild, isMove);
        }
        removeChild(parent, oldChild, isHostElement) {
          this.delegate.removeChild(parent, oldChild, isHostElement);
        }
        selectRootElement(selectorOrNode, preserveContent) {
          return this.delegate.selectRootElement(
            selectorOrNode,
            preserveContent,
          );
        }
        parentNode(node) {
          return this.delegate.parentNode(node);
        }
        nextSibling(node) {
          return this.delegate.nextSibling(node);
        }
        setAttribute(el, name, value, namespace) {
          this.delegate.setAttribute(el, name, value, namespace);
        }
        removeAttribute(el, name, namespace) {
          this.delegate.removeAttribute(el, name, namespace);
        }
        addClass(el, name) {
          this.delegate.addClass(el, name);
        }
        removeClass(el, name) {
          this.delegate.removeClass(el, name);
        }
        setStyle(el, style, value, flags) {
          this.delegate.setStyle(el, style, value, flags);
        }
        removeStyle(el, style, flags) {
          this.delegate.removeStyle(el, style, flags);
        }
        setProperty(el, name, value) {
          this.shouldReplay(name) &&
            this.replay.push((renderer) =>
              renderer.setProperty(el, name, value),
            ),
            this.delegate.setProperty(el, name, value);
        }
        setValue(node, value) {
          this.delegate.setValue(node, value);
        }
        listen(target, eventName, callback) {
          return (
            this.shouldReplay(eventName) &&
              this.replay.push((renderer) =>
                renderer.listen(target, eventName, callback),
              ),
            this.delegate.listen(target, eventName, callback)
          );
        }
        shouldReplay(propOrEventName) {
          return null !== this.replay && propOrEventName.startsWith("@");
        }
      }
      function provideAnimationsAsync(type = "animations") {
        return (
          (0,
          _angular_core__WEBPACK_IMPORTED_MODULE_0__[
            "ɵperformanceMarkFeature"
          ])("NgAsyncAnimations"),
          (0,
          _angular_core__WEBPACK_IMPORTED_MODULE_0__.makeEnvironmentProviders)([
            {
              provide:
                _angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererFactory2,
              useFactory: (doc, renderer, zone) =>
                new AsyncAnimationRendererFactory(doc, renderer, zone, type),
              deps: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT,
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__[
                  "ɵDomRendererFactory2"
                ],
                _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone,
              ],
            },
            {
              provide:
                _angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE,
              useValue:
                "noop" === type ? "NoopAnimations" : "BrowserAnimations",
            },
          ])
        );
      }
    },
    "./projects/ngx-evolution-components/action-menu/action-menu.component.ts":
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
          F: () => ActionMenuComponent,
        });
        var tslib_es6 = __webpack_require__(
          "./node_modules/tslib/tslib.es6.mjs",
        );
        var action_menu_componentngResource = __webpack_require__(
            "./projects/ngx-evolution-components/action-menu/action-menu.component.scss?ngResource",
          ),
          action_menu_componentngResource_default = __webpack_require__.n(
            action_menu_componentngResource,
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
          ),
          class_utility_service = __webpack_require__(
            "./projects/ngx-evolution-components/shared/services/class-utility.service.ts",
          ),
          button_component = __webpack_require__(
            "./projects/ngx-evolution-components/button/button.component.ts",
          );
        let ActionMenuComponent = class ActionMenuComponent {
          constructor(classUtility) {
            (this.classUtility = classUtility),
              (this.config = {
                actions: [],
                isOpen: !1,
                icons: [],
                twClass: "",
              }),
              (this.actionSelected = new core.EventEmitter()),
              (this.menuClosed = new core.EventEmitter());
          }
          getClasses() {
            return this.classUtility.getCombinedClasses(
              this.config.isOpen ? "evo-actions-menu open" : "evo-actions-menu",
              this.config.twClass,
            );
          }
          onActionClick(action) {
            this.actionSelected.emit(action.Code), this.closeActionsMenu();
          }
          closeActionsMenu() {
            this.menuClosed.emit();
          }
          getActionIcon(index) {
            return this.config.icons &&
              index >= 0 &&
              index < this.config.icons.length
              ? this.config.icons[index]
              : { type: "class", icon: "" };
          }
          shouldShowTooltip(text) {
            return text.length > 30;
          }
          static #_ = (this.ctorParameters = () => [
            { type: class_utility_service.Y },
          ]);
          static #_2 = (this.propDecorators = {
            config: [{ type: core.Input }],
            actionSelected: [{ type: core.Output }],
            menuClosed: [{ type: core.Output }],
          });
        };
        ActionMenuComponent = (0, tslib_es6.Cg)(
          [
            (0, core.Component)({
              selector: "action-menu",
              standalone: !0,
              imports: [common.CommonModule, button_component.Q],
              template:
                '\x3c!-- Overlay para cerrar menú dando click fuera del menú --\x3e\n@if (config.isOpen) {\n  <div class="evo-actions-menu-overlay" (click)="closeActionsMenu()"></div>\n}\n\x3c!-- Modal de opciones --\x3e\n<div [ngClass]="getClasses()">\n  <ul>\n    @for (action of config.actions; track action.Code) {\n      \x3c!-- Opciones --\x3e\n      <li>\n        <evo-button\n          [label]="action.Text"\n          [icon]="getActionIcon(config.actions.indexOf(action))"\n          [attr.title]="shouldShowTooltip(action.Text) ? action.Text : \'\'"\n          (click)="onActionClick(action)"\n          size="sm"\n        ></evo-button>\n      </li>\n    }\n  </ul>\n</div>\n',
              encapsulation: core.ViewEncapsulation.None,
              styles: [
                action_menu_componentngResource_default(),
                outputngResource_default(),
              ],
            }),
          ],
          ActionMenuComponent,
        );
      },
    "./projects/ngx-evolution-components/pagination/pagination.component.ts": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      "use strict";
      __webpack_require__.d(__webpack_exports__, {
        e: () => PaginationComponent,
      });
      var tslib_es6 = __webpack_require__("./node_modules/tslib/tslib.es6.mjs");
      var pagination_componentngResource = __webpack_require__(
          "./projects/ngx-evolution-components/pagination/pagination.component.scss?ngResource",
        ),
        pagination_componentngResource_default = __webpack_require__.n(
          pagination_componentngResource,
        ),
        outputngResource = __webpack_require__(
          "./projects/ngx-evolution-components/styles/output.scss?ngResource",
        ),
        outputngResource_default = __webpack_require__.n(outputngResource),
        core = __webpack_require__(
          "./node_modules/@angular/core/fesm2022/core.mjs",
        ),
        class_utility_service = __webpack_require__(
          "./projects/ngx-evolution-components/shared/services/class-utility.service.ts",
        ),
        button_component = __webpack_require__(
          "./projects/ngx-evolution-components/button/button.component.ts",
        ),
        common = __webpack_require__(
          "./node_modules/@angular/common/fesm2022/common.mjs",
        );
      let PaginationComponent = class PaginationComponent {
        constructor(classUtility) {
          (this.classUtility = classUtility),
            (this.config = {
              isManualPaginate: !1,
              currentPage: 1,
              totalPages: 1,
              pageSize: 10,
              totalItems: 0,
              titles: {
                showing: "Mostrando",
                results: "resultados",
                page: "Página",
                of: "de",
              },
              twClass: "",
              simplePageIndicator: !1,
              nextPage: !1,
            }),
            (this.pageSelected = new core.EventEmitter()),
            (this.nextPageClicked = new core.EventEmitter()),
            (this.previousPageClicked = new core.EventEmitter());
        }
        previousPage() {
          this.config.currentPage > 1 && this.previousPageClicked.emit();
        }
        nextPage() {
          this.config.simplePageIndicator
            ? this.config.nextPage && this.nextPageClicked.emit()
            : this.config.currentPage < this.config.totalPages &&
              this.nextPageClicked.emit();
        }
        getMinValue(value1, value2) {
          return Math.min(value1, value2);
        }
        getClasses() {
          return this.classUtility.getCombinedClasses(
            "evo-pagination",
            this.config.twClass,
          );
        }
        getPageIndicatorText() {
          return this.config.simplePageIndicator
            ? `${this.config.titles.page} ${this.config.currentPage}`
            : `${this.config.titles.page} ${this.config.currentPage} ${this.config.titles.of} ${this.config.totalPages}`;
        }
        getItemsRangeText() {
          if (this.config.hideItemsRange) return "";
          let startItem = this.config.currentPage * this.config.pageSize,
            endItem = this.config.totalItems;
          return (
            startItem > endItem && (startItem = endItem),
            `${this.config.titles.showing} ${startItem} - ${endItem} ${this.config.titles.results}`
          );
        }
        static #_ = (this.ctorParameters = () => [
          { type: class_utility_service.Y },
        ]);
        static #_2 = (this.propDecorators = {
          config: [{ type: core.Input }],
          pageSelected: [{ type: core.Output }],
          nextPageClicked: [{ type: core.Output }],
          previousPageClicked: [{ type: core.Output }],
        });
      };
      PaginationComponent = (0, tslib_es6.Cg)(
        [
          (0, core.Component)({
            selector: "pagination",
            standalone: !0,
            imports: [common.CommonModule, button_component.Q],
            template:
              '\x3c!-- Contenedor de paginación --\x3e\n<div [ngClass]="getClasses()">\n  \x3c!-- Botón para ir a la página anterior --\x3e\n  <evo-button\n    (click)="previousPage()"\n    [disabled]="config.currentPage <= 1"\n    [icon]="{ type: \'class\', icon: \'chevron_left\' }"\n    [twClass]="\'pagination__evo-button\'"\n    [withoutBorder]="true"\n    [theme]="\'secondary\'"\n  ></evo-button>\n\n  \x3c!-- Indicador de la página actual y el total de páginas --\x3e\n  <span>{{ getPageIndicatorText() }}</span>\n\n  \x3c!-- Botón para ir a la página siguiente --\x3e\n  <evo-button\n    (click)="nextPage()"\n    [disabled]="\n      config.simplePageIndicator\n        ? !config.nextPage\n        : config.currentPage >= config.totalPages\n    "\n    [icon]="{ type: \'class\', icon: \'chevron_right\' }"\n    [withoutBorder]="true"\n    [twClass]="\'pagination__evo-button\'"\n    [theme]="\'secondary\'"\n  ></evo-button>\n\n  \x3c!-- Información sobre el rango de ítems mostrados y el total de resultados --\x3e\n  <span>{{ getItemsRangeText() }}</span>\n</div>\n',
            encapsulation: core.ViewEncapsulation.None,
            styles: [
              pagination_componentngResource_default(),
              outputngResource_default(),
            ],
          }),
        ],
        PaginationComponent,
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
    "./projects/ngx-evolution-components/shared/services/viewport.service.ts": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      "use strict";
      __webpack_require__.d(__webpack_exports__, { K: () => ViewportService });
      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          "./node_modules/tslib/tslib.es6.mjs",
        ),
        _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          "./node_modules/@angular/core/fesm2022/core.mjs",
        ),
        _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./node_modules/@angular/common/fesm2022/common.mjs",
        ),
        rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/BehaviorSubject.js",
        ),
        rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js",
        ),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/debounceTime.js",
        ),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/startWith.js",
        );
      let ViewportService = class ViewportService {
        constructor(platformId) {
          (this.platformId = platformId),
            (this.isMobileSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.t(
              !1,
            )),
            (0, _angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(
              this.platformId,
            ) &&
              (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.R)(window, "resize")
                .pipe(
                  (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.B)(200),
                  (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.Z)(
                    this.checkViewport(),
                  ),
                )
                .subscribe(() => this.checkViewport());
        }
        checkViewport() {
          const isMobile = window.innerWidth <= 640;
          this.isMobileSubject.next(isMobile);
        }
        getIsMobile() {
          return this.isMobileSubject.asObservable();
        }
        static #_ = (this.ctorParameters = () => [
          {
            type: Object,
            decorators: [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Inject,
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_5__.PLATFORM_ID],
              },
            ],
          },
        ]);
      };
      ViewportService = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.Cg)(
        [
          (0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
            providedIn: "root",
          }),
        ],
        ViewportService,
      );
    },
    "./stories/smart-list.stories.ts": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          ConBotonesDeEstado: () => ConBotonesDeEstado,
          ConScroll: () => ConScroll,
          ConSelector: () => ConSelector,
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => smart_list_stories,
        });
      var http = __webpack_require__(
          "./node_modules/@angular/common/fesm2022/http.mjs",
        ),
        dist = __webpack_require__(
          "./node_modules/@storybook/angular/dist/index.mjs",
        ),
        tslib_es6 = __webpack_require__("./node_modules/tslib/tslib.es6.mjs");
      var smart_list_componentngResource = __webpack_require__(
          "./projects/ngx-evolution-components/smart-list/smart-list.component.scss?ngResource",
        ),
        smart_list_componentngResource_default = __webpack_require__.n(
          smart_list_componentngResource,
        ),
        outputngResource = __webpack_require__(
          "./projects/ngx-evolution-components/styles/output.scss?ngResource",
        ),
        outputngResource_default = __webpack_require__.n(outputngResource),
        core = __webpack_require__(
          "./node_modules/@angular/core/fesm2022/core.mjs",
        ),
        viewport_service = __webpack_require__(
          "./projects/ngx-evolution-components/shared/services/viewport.service.ts",
        ),
        class_utility_service = __webpack_require__(
          "./projects/ngx-evolution-components/shared/services/class-utility.service.ts",
        ),
        button_component = __webpack_require__(
          "./projects/ngx-evolution-components/button/button.component.ts",
        ),
        action_menu_component = __webpack_require__(
          "./projects/ngx-evolution-components/action-menu/action-menu.component.ts",
        ),
        pagination_component = __webpack_require__(
          "./projects/ngx-evolution-components/pagination/pagination.component.ts",
        ),
        select_component = __webpack_require__(
          "./projects/ngx-evolution-components/select/select.component.ts",
        ),
        common = __webpack_require__(
          "./node_modules/@angular/common/fesm2022/common.mjs",
        ),
        fesm2022_forms = __webpack_require__(
          "./node_modules/@angular/forms/fesm2022/forms.mjs",
        );
      let SmartListComponent = class SmartListComponent {
        constructor(cdr, eRef, viewportService, classUtility) {
          (this.cdr = cdr),
            (this.eRef = eRef),
            (this.viewportService = viewportService),
            (this.classUtility = classUtility),
            (this.smartlistConfig = null),
            (this.data = []),
            (this.tableConfig = {
              hiddenColumns: [],
              sortableColumns: [],
              actionIcons: [],
              emptyStateText: "No hay datos para mostrar",
              twClass: "",
              showActions: !0,
              showStateButtons: !1,
              noPagination: !0,
              maxHeight: "10px",
            }),
            (this.paginationConfig = {
              isManualPaginate: !1,
              currentPage: 1,
              totalPages: 1,
              pageSize: 10,
              totalItems: 0,
              page: 1,
              titles: {
                showing: "Mostrando",
                results: "resultados",
                page: "Pag",
                of: "de",
              },
            }),
            (this.paginationEvents = {
              onPageChange: (page) => this.goToPage(page),
              onPreviousPage: () => this.previousPage(),
              onNextPage: () => this.nextPage(),
            }),
            (this.columnSort = new core.EventEmitter()),
            (this.rowAction = new core.EventEmitter()),
            (this.selectedUsers = new core.EventEmitter()),
            (this.pageSelected = new core.EventEmitter()),
            (this.pageSizeChanged = new core.EventEmitter()),
            (this.allEncargadosSelected = new core.EventEmitter()),
            (this.isMobile = !1),
            (this.isActionsModalOpen = !1),
            (this.paginatedItems = []),
            (this.selectedItems = []),
            (this.selectedItem = null),
            (this.metadata = null),
            (this.currentItemActions = []),
            (this.sortState = {}),
            (this.initialPageSize = 5),
            (this.selectControls = new WeakMap());
        }
        ngOnInit() {
          (this.initialPageSize = this.paginationConfig.pageSize),
            (this.viewportSubscription = this.viewportService
              .getIsMobile()
              .subscribe((isMobile) => {
                (this.isMobile = isMobile),
                  this.adjustPagination(),
                  this.adjustPageSize();
              })),
            this.initializeTable();
        }
        ngOnDestroy() {
          this.viewportSubscription && this.viewportSubscription.unsubscribe();
        }
        transformSelectorOptions(options) {
          return options.map((option) => ({ ...option, Bag: {} }));
        }
        handleSelectorChange(item, fieldName, value) {
          item &&
            ((item[fieldName] = value),
            this.rowAction.emit({
              actionType: "selector",
              action: "update",
              item,
            }));
        }
        getTableData() {
          return [...this.data];
        }
        getOrCreateSelectControl(item, column) {
          let controlsForItem = this.selectControls.get(item);
          return (
            controlsForItem ||
              ((controlsForItem = {}),
              this.selectControls.set(item, controlsForItem)),
            controlsForItem[column.FieldName] ||
              (controlsForItem[column.FieldName] = new fesm2022_forms.MJ(
                item[column.FieldName] || this.createDefaultControl(column),
              )),
            controlsForItem[column.FieldName]
          );
        }
        createDefaultControl(column) {
          return column.MultiSelect ?? [];
        }
        onSelectorValueChange(value, item, column) {
          this.getOrCreateSelectControl(item, column).setValue(value),
            (item[column.FieldName] = value),
            this.rowAction.emit({
              actionType: "selector",
              action: "update",
              item,
            });
          const selectorColumns =
              this.metadata?.Columns.filter((c) => "selector" === c.Format) ||
              [],
            allAssignedForSelectors = this.data.every((row) =>
              selectorColumns.every((col) => !!row[col.FieldName]),
            );
          this.allEncargadosSelected.emit(allAssignedForSelectors);
        }
        getAllData() {
          return this.data;
        }
        updateSelectorValues(updates) {
          for (const update of updates) {
            const primaryKeyField =
              this.metadata?.Columns.find((c) => c.IsPrimaryKey)?.FieldName ||
              "";
            for (const code of update.codes) {
              const item = this.data.find((d) => d[primaryKeyField] === code);
              if (item) {
                item[update.fieldName] = update.value;
                const column = this.metadata?.Columns.find(
                  (c) => c.FieldName === update.fieldName,
                );
                if (column) {
                  this.getOrCreateSelectControl(item, column).setValue(
                    update.value,
                  );
                }
              }
            }
          }
        }
        adjustPageSize() {
          this.isMobile && 1 !== this.paginationConfig.pageSize
            ? ((this.paginationConfig.pageSize = 1),
              this.pageSizeChanged.emit(this.paginationConfig.pageSize),
              this.paginate())
            : this.isMobile ||
              this.paginationConfig.pageSize === this.initialPageSize ||
              ((this.paginationConfig.pageSize = this.initialPageSize),
              this.pageSizeChanged.emit(this.paginationConfig.pageSize),
              this.paginate());
        }
        toggleActionsMenu(item) {
          this.selectedItem === item && this.isActionsModalOpen
            ? this.closeActionsModal()
            : this.openActionsModal(item);
        }
        openActionsModal(item) {
          (this.selectedItem = item),
            (this.currentItemActions = this.metadata?.Buttons || []),
            (this.isActionsModalOpen = !0);
        }
        closeActionsModal() {
          (this.isActionsModalOpen = !1), (this.selectedItem = null);
        }
        ngOnChanges(changes) {
          (changes.data || changes.smartlistConfig) && this.initializeTable();
        }
        initializeTable() {
          (this.metadata = this.smartlistConfig?.Metadata || null),
            this.paginate(),
            this.cdr.markForCheck();
        }
        getVisibleActions() {
          return this.metadata?.Buttons?.filter((btn) => btn.Visible) || [];
        }
        paginate() {
          if (this.paginationConfig.isManualPaginate)
            this.paginatedItems = [...this.data];
          else {
            (this.paginationConfig.totalItems = this.data.length),
              (this.paginationConfig.totalPages = Math.ceil(
                this.paginationConfig.totalItems /
                  this.paginationConfig.pageSize,
              ));
            const startIndex =
              (this.paginationConfig.page - 1) * this.paginationConfig.pageSize;
            this.paginatedItems = this.data.slice(
              startIndex,
              startIndex + this.paginationConfig.pageSize,
            );
          }
        }
        adjustPagination() {
          this.isMobile
            ? (this.paginationConfig.pageSize = 1)
            : (this.paginationConfig.pageSize = 10),
            this.paginate(),
            this.cdr.markForCheck();
        }
        getMinValue(value1, value2) {
          return Math.min(value1, value2);
        }
        getVisibleColumns() {
          return this.metadata && this.metadata.Columns
            ? this.metadata.Columns.filter(
                (col, index) =>
                  col.Visible &&
                  !this.tableConfig.hiddenColumns.includes(index),
              )
            : [];
        }
        handleAction(item, actionCode) {
          if (!item || "asignado" === item.estado || "assigned" === item.estado)
            return;
          const action = this.metadata?.Buttons?.find(
            (btn) => btn.Code === actionCode,
          );
          action?.ConfirmationMessage
            ? confirm(action.ConfirmationMessage) &&
              this.rowAction.emit({
                actionType: "button",
                action: actionCode,
                item,
              })
            : this.rowAction.emit({
                actionType: "button",
                action: actionCode,
                item,
              });
        }
        areAllSelected() {
          return (
            this.tableConfig.noPagination ? this.data : this.paginatedItems
          ).every((item) => item.selected);
        }
        selectAllResults() {
          const allSelected = this.data.every((item) => item.selected);
          this.data.forEach((item) => (item.selected = !allSelected)),
            (this.selectedItems = this.data.filter((item) => item.selected)),
            this.selectedUsers.emit(this.selectedItems),
            this.paginate();
        }
        selectAll() {
          const targetItems = this.tableConfig.noPagination
              ? this.data
              : this.paginatedItems,
            allSelected = targetItems.every((item) => item.selected);
          targetItems.forEach((item) => (item.selected = !allSelected)),
            (this.selectedItems = this.data.filter((item) => item.selected)),
            this.selectedUsers.emit(this.selectedItems),
            this.cdr.markForCheck();
        }
        toggleSelect(item) {
          (item.selected = !item.selected),
            (this.selectedItems = this.paginatedItems.filter(
              (i) => i.selected,
            )),
            this.selectedUsers.emit(this.selectedItems),
            this.cdr.markForCheck();
        }
        goToPage(page) {
          page >= 1 &&
            page <= this.paginationConfig.totalPages &&
            ((this.paginationConfig.page = page),
            this.pageSelected.emit(page),
            this.paginate());
        }
        trackByItem(index, item) {
          return item.key || index;
        }
        previousPage() {
          this.paginationConfig.page > 1 &&
            this.goToPage(this.paginationConfig.page - 1);
        }
        nextPage() {
          this.paginationConfig.page < this.paginationConfig.totalPages &&
            this.goToPage(this.paginationConfig.page + 1);
        }
        getTitleFromCode(code) {
          if (!code) return "";
          return code
            .replace(/^.*\./, "")
            .replace(/([A-Z])/g, " $1")
            .trim();
        }
        getButtonLabel(item) {
          switch (item.estado) {
            case "asignado":
            case "assigned":
              return "Asignado";
            case "agregar":
            case "add":
              return "Agregar";
            case "quitar":
            case "remove":
              return "Quitar";
            default:
              return "";
          }
        }
        getButtonTheme(action) {
          switch (action.estado) {
            case "asignado":
            case "assigned":
              return "smart-list-button smart-list-button__assigned";
            case "agregar":
            case "add":
              return "smart-list-button smart-list-button__add";
            case "quitar":
            case "remove":
              return "smart-list-button smart-list-button__delete";
            default:
              return "smart-list-button smart-list-button__default";
          }
        }
        toggleSort(columnName) {
          const columnIndex = this.getVisibleColumns().findIndex(
            (col) => col.FieldName === columnName,
          );
          if (
            -1 === columnIndex ||
            !this.tableConfig.sortableColumns.includes(columnIndex)
          )
            return;
          this.sortState[columnName] =
            "asc" === this.sortState[columnName]
              ? "desc"
              : "desc" === this.sortState[columnName]
                ? null
                : "asc";
          const orderByClause = Object.entries(this.sortState)
            .filter(([_, order]) => null !== order)
            .map(([column, order]) =>
              "asc" === order ? column : `${column} ${order}`,
            )
            .join(",");
          this.columnSort.emit(orderByClause);
        }
        getSortIcon(columnName) {
          const columnIndex = this.getVisibleColumns().findIndex(
            (col) => col.FieldName === columnName,
          );
          if (
            -1 !== columnIndex &&
            this.tableConfig.sortableColumns.includes(columnIndex)
          )
            switch (this.sortState[columnName]) {
              case "asc":
                return "arrow_upward";
              case "desc":
                return "arrow_downward";
              default:
                return "sort";
            }
          return "sort";
        }
        getClasses(context) {
          const baseClasses = this.classUtility.getCombinedClasses(
            context,
            this.tableConfig.twClass,
          );
          return "evo-table-container" === context
            ? `${baseClasses} evo-table-container-class`
            : "evo-card-container" === context
              ? `${baseClasses} evo-card-container-class`
              : baseClasses;
        }
        closeActionsMenu() {
          (this.isActionsModalOpen = !1), (this.selectedItem = null);
        }
        detectColumnType(columnName) {
          const firstValidValue = this.data.find(
            (item) => null !== item[columnName] && void 0 !== item[columnName],
          )?.[columnName];
          return "string" == typeof firstValidValue &&
            /^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(.\d{3}Z)?)?$/.test(
              firstValidValue,
            )
            ? "date"
            : "text";
        }
        trackByColumnCode(index, column) {
          return column?.Code || index;
        }
        getSortIconClass(columnName) {
          return `sort-icon ${this.getSortIcon(columnName)}`;
        }
        static #_ = (this.ctorParameters = () => [
          { type: core.ChangeDetectorRef },
          { type: core.ElementRef },
          { type: viewport_service.K },
          { type: class_utility_service.Y },
        ]);
        static #_2 = (this.propDecorators = {
          smartlistConfig: [{ type: core.Input }],
          data: [{ type: core.Input }],
          tableConfig: [{ type: core.Input }],
          paginationConfig: [{ type: core.Input }],
          paginationEvents: [{ type: core.Output }],
          columnSort: [{ type: core.Output }],
          rowAction: [{ type: core.Output }],
          selectedUsers: [{ type: core.Output }],
          pageSelected: [{ type: core.Output }],
          pageSizeChanged: [{ type: core.Output }],
          allEncargadosSelected: [{ type: core.Output }],
        });
      };
      SmartListComponent = (0, tslib_es6.Cg)(
        [
          (0, core.Component)({
            selector: "smart-list",
            template:
              '\x3c!-- Vista de tabla para escritorio --\x3e\n@if (!isMobile) {\n  <div [ngClass]="getClasses(\'evo-table-container\')" class="relative">\n    \x3c!-- Contenedor de la tabla con scroll --\x3e\n    <div class="bg-white shadow-md">\n      <div\n        class="overflow-y-auto custom-scroll"\n        [ngStyle]="\n          tableConfig.noPagination\n            ? { \'max-height\': tableConfig.maxHeight }\n            : {}\n        "\n      >\n        <table class="evo-table w-full border-collapse">\n          <thead class="sticky top-0 bg-white shadow-md z-10">\n            <tr>\n              \x3c!-- Checkbox para selección múltiple --\x3e\n              @if (metadata?.MultiSelect) {\n                <th>\n                  <input\n                    type="checkbox"\n                    [checked]="areAllSelected()"\n                    (change)="selectAll()"\n                  />\n                </th>\n              }\n              \x3c!-- Encabezados de columnas --\x3e\n              @for (column of getVisibleColumns(); track trackByColumnCode) {\n                <th class="text-left px-2 py-1">\n                  @if (\n                    column.Code !== "estado" &&\n                    (column.Code !== "encargado" ||\n                      (tableConfig.showSelect && tableConfig.selectorOptions))\n                  ) {\n                    <div class="flex align-center items-center">\n                      <span class="">{{ column.Header }}</span>\n                      @if (\n                        tableConfig.sortableColumns.includes(\n                          getVisibleColumns().indexOf(column)\n                        )\n                      ) {\n                        <evo-button\n                          class="pl-2"\n                          [icon]="{\n                            type: \'class\',\n                            icon: getSortIcon(column.FieldName),\n                          }"\n                          size="sm"\n                          [withoutBorder]="true"\n                          [twClass]="\'sort-button card__evo-button\'"\n                          (click)="toggleSort(column.Code)"\n                          [theme]="\'secondary\'"\n                        ></evo-button>\n                      }\n                    </div>\n                  }\n                </th>\n              }\n              \x3c!-- Encabezado para acciones --\x3e\n              @if (metadata?.Buttons?.length && tableConfig.showActions) {\n                <th class="text-left px-2 py-1">Acciones</th>\n              }\n            </tr>\n          </thead>\n          <tbody>\n            @for (\n              item of tableConfig.noPagination ? data : paginatedItems;\n              track trackByItem\n            ) {\n              <tr class="border-b border-gray-300 hover:bg-gray-100">\n                @if (metadata?.MultiSelect) {\n                  <td>\n                    <input\n                      type="checkbox"\n                      [checked]="item.selected"\n                      (change)="toggleSelect(item)"\n                    />\n                  </td>\n                }\n                \x3c!-- Celdas de datos --\x3e\n                @for (column of getVisibleColumns(); track trackByColumnCode) {\n                  <td\n                    class="px-2 py-1 text-left"\n                    [ngClass]="{ \'pt-35\': column.Format === \'selector\' }"\n                  >\n                    @if (column.Code === "estado") {\n                      @if (tableConfig.showStateButtons) {\n                        <evo-button\n                          [label]="getButtonLabel(item)"\n                          [twClass]="getButtonTheme(item)"\n                          (click)="handleAction(item, \'customAction\')"\n                          [isFlat]="true"\n                          size="sm"\n                        ></evo-button>\n                      }\n                    } @else if (\n                      column.Format === "selector" &&\n                      tableConfig.showSelect &&\n                      tableConfig.selectorOptions\n                    ) {\n                      <evo-select\n                        [buttonIcon]="{ icon: \'clean.svg\', type: \'svg\' }"\n                        [control]="getOrCreateSelectControl(item, column)"\n                        [items]="\n                          transformSelectorOptions(\n                            tableConfig.selectorOptions || []\n                          )\n                        "\n                        (valueChange)="\n                          onSelectorValueChange($event, item, column)\n                        "\n                        [label]="column.Header"\n                        (valueChange)="\n                          handleSelectorChange(item, column.Code, $event)\n                        "\n                        [isMultiple]="column.MultiSelect"\n                        [twClass]="\'smart-list-selector\'"\n                      ></evo-select>\n                    } @else if (column.Code !== "encargado") {\n                      {{ item[column.Code] || "N/A" }}\n                    }\n                  </td>\n                }\n\n                \x3c!-- Acciones --\x3e\n                @if (\n                  getVisibleActions().length > 0 && tableConfig.showActions\n                ) {\n                  <td class="px-2 py-1 text-left relative">\n                    <div class="absolute center-content">\n                      <evo-button\n                        [icon]="{\n                          type: \'class\',\n                          icon: \'more_vert\',\n                        }"\n                        [withoutBorder]="true"\n                        (click)="toggleActionsMenu(item)"\n                        [twClass]="\'card__evo-button\'"\n                        [theme]="\'secondary\'"\n                        size="sm"\n                      ></evo-button>\n                      <action-menu\n                        [config]="{\n                          actions: currentItemActions,\n                          isOpen: isActionsModalOpen && selectedItem === item,\n                          icons: tableConfig.actionIcons,\n                        }"\n                        (actionSelected)="handleAction(selectedItem!, $event)"\n                        (menuClosed)="closeActionsMenu()"\n                      ></action-menu>\n                    </div>\n                  </td>\n                }\n              </tr>\n            }\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n}\n\n\x3c!-- Vista de card para móvil --\x3e\n@if (isMobile) {\n  <div [ngClass]="getClasses(\'evo-card-container\')">\n    @for (item of paginatedItems; track trackByItem) {\n      <div class="card relative">\n        \x3c!-- Botón de acciones ubicado en la parte superior derecha --\x3e\n        @if (tableConfig.showActions) {\n          <div class="absolute top-2 right-2 card-actions">\n            <evo-button\n              [icon]="{ type: \'class\', icon: \'more_horiz\' }"\n              [withoutBorder]="true"\n              (click)="toggleActionsMenu(item)"\n              [twClass]="\'card__evo-button\'"\n              [theme]="\'secondary\'"\n              size="sm"\n            ></evo-button>\n\n            \x3c!-- Reutilización del action-menu --\x3e\n            <action-menu\n              [config]="{\n                actions: currentItemActions,\n                isOpen: isActionsModalOpen && selectedItem === item,\n                icons: tableConfig.actionIcons,\n              }"\n              (actionSelected)="handleAction(selectedItem!, $event)"\n              (menuClosed)="closeActionsMenu()"\n            ></action-menu>\n          </div>\n        }\n        \x3c!-- Título general basado en \'smartlistConfig.Code\' --\x3e\n        <div class="my-4">\n          <h3 class="font-bold">\n            {{ getTitleFromCode(smartlistConfig?.Code || "") }}\n          </h3>\n        </div>\n\n        \x3c!-- Datos de la tarjeta --\x3e\n        @for (column of getVisibleColumns(); track trackByColumnCode) {\n          @if (column.Code === "estado") {\n            @if (tableConfig.showStateButtons) {\n              <div>\n                <evo-button\n                  [label]="getButtonLabel(item)"\n                  [twClass]="getButtonTheme(item)"\n                  (click)="handleAction(item, \'customAction\')"\n                  [isFlat]="true"\n                  size="sm"\n                ></evo-button>\n              </div>\n            }\n          } @else if (\n            column.Format === "selector" &&\n            tableConfig.showSelect &&\n            tableConfig.selectorOptions\n          ) {\n            <div>\n              <evo-select\n                [buttonIcon]="{ icon: \'clean.svg\', type: \'svg\' }"\n                [control]="getOrCreateSelectControl(item, column)"\n                [items]="\n                  transformSelectorOptions(tableConfig.selectorOptions || [])\n                "\n                (valueChange)="onSelectorValueChange($event, item, column)"\n                [label]="column.Header"\n                (valueChange)="handleSelectorChange(item, column.Code, $event)"\n                [isMultiple]="column.MultiSelect"\n                [twClass]="\'text-sm\'"\n              ></evo-select>\n            </div>\n          } @else if (column.Code !== "encargado") {\n            <p class="text-medium-gray">{{ column.Header }}</p>\n            <p>{{ item[column.Code] || "N/A" }}</p>\n          }\n          \x3c!-- Margen entre cada conjunto de dato --\x3e\n          <div class="mt-4"></div>\n        }\n      </div>\n    }\n  </div>\n}\n\n\x3c!-- Mensaje cuando no hay datos --\x3e\n@if (data.length === 0) {\n  <div class="text-center py-4">\n    {{ tableConfig.emptyStateText }}\n  </div>\n}\n\n\x3c!-- Controles de paginación --\x3e\n@if (!tableConfig.noPagination && paginationConfig.totalPages >= 1) {\n  <pagination\n    [config]="{\n      isManualPaginate: paginationConfig.isManualPaginate,\n      currentPage: paginationConfig.page!,\n      totalPages: paginationConfig.totalPages,\n      pageSize: paginationConfig.pageSize,\n      totalItems: paginationConfig.totalItems,\n      titles: paginationConfig.titles,\n    }"\n    (nextPageClicked)="nextPage()"\n    (previousPageClicked)="previousPage()"\n    (pageSelected)="goToPage($event.page)"\n  ></pagination>\n}\n',
            standalone: !0,
            imports: [
              common.CommonModule,
              button_component.Q,
              action_menu_component.F,
              pagination_component.e,
              select_component.w,
            ],
            encapsulation: core.ViewEncapsulation.None,
            styles: [
              smart_list_componentngResource_default(),
              outputngResource_default(),
            ],
          }),
        ],
        SmartListComponent,
      );
      var animations_async = __webpack_require__(
        "./node_modules/@angular/platform-browser/fesm2022/animations/async.mjs",
      );
      const data = [
          {
            amo_codigo: 6,
            amo_fecha_infraccion: "2024-09-18T06:00:00",
            cau_descripcion:
              "Falta sin causa justificada dos días completos y consecutivos",
            cia_descripcion: "ASEINFO Guatemala.",
            exp_apellidos_nombres1: "Abrego Labbe, Rene Armando",
            exp_apellidos_nombres2: "Delgado de García, María del Rosario",
            estado: "asignado",
            encargado: "1",
            g_record_number: "1",
            g_total_recs: 1,
            tam_descripcion: "Oral",
          },
          {
            amo_codigo: 7,
            amo_fecha_infraccion: "2024-09-19T06:00:00",
            cau_descripcion:
              "Falta sin causa justificada dos días completos y consecutivos",
            cia_descripcion: "ASEINFO Salvador.",
            exp_apellidos_nombres1: "Abrego Labbe, Rene Armando",
            exp_apellidos_nombres2: "Delgado de García, María del Rosario",
            estado: "quitar",
            encargado: "2",
            g_record_number: "2",
            g_total_recs: 1,
            tam_descripcion: "Oral",
          },
        ],
        baseMetaData = {
          Code: "evowave.SolicitudAmonestaciones",
          MultiSelect: !0,
          AutogenerateColumns: !1,
          NewRecordButtonCode: "new",
          EditRecordButtonCode: "edit",
          DeleteRecordButtonCode: "delete",
          NewRecordButton: {
            Code: "new",
            ActionURL: "/Create",
            Text: "Nuevo",
            AlternateText: "Nueva Solicitud de Amonestación",
            ExecuteLinkAction: !0,
            ConfirmationMessage: "",
            CompleteMessage: "",
            ShowText: !0,
            ShowImage: !0,
            ImageURL: "/Content/Images/Toolbar/add.png",
            VisibleIndex: 10,
            Visible: !0,
            Visibility: "Visible",
            TextVisibility: "Visible",
            ImageVisibility: "Visible",
            IsExportToExcelButton: !1,
            CheckForSelectedRecords: !1,
            IsRouteUrl: !1,
            ControllerArea: "",
            ControllerName: "",
            ControllerAction: "Create",
          },
          EditRecordButton: {
            Code: "edit",
            ActionURL: "/Edit",
            Text: "Editar",
            AlternateText: "Editar la Solicitud de Amonestación",
            ExecuteLinkAction: !0,
            ConfirmationMessage: "",
            CompleteMessage: "",
            ShowText: !0,
            ShowImage: !0,
            ImageURL: "/Content/Images/Toolbar/edit.png",
            VisibleIndex: 20,
            Visible: !0,
            Visibility: "Visible",
            TextVisibility: "Visible",
            ImageVisibility: "Visible",
            IsExportToExcelButton: !1,
            CheckForSelectedRecords: !0,
            IsRouteUrl: !1,
            ControllerArea: "",
            ControllerName: "",
            ControllerAction: "Edit",
          },
          DeleteRecordButton: {
            Code: "delete",
            ActionURL: "/Delete",
            Text: "Eliminar",
            AlternateText: "Eliminar la Solicitud de Amonestación",
            ExecuteLinkAction: !1,
            ConfirmationMessage:
              "¿Está seguro que desea eliminar la solicitud de Amonestación?",
            CompleteMessage: "",
            ShowText: !0,
            ShowImage: !0,
            ImageURL: "/Content/Images/Toolbar/delete.png",
            VisibleIndex: 30,
            Visible: !0,
            Visibility: "Visible",
            TextVisibility: "Visible",
            ImageVisibility: "Visible",
            IsExportToExcelButton: !1,
            CheckForSelectedRecords: !0,
            IsRouteUrl: !1,
            ControllerArea: "",
            ControllerName: "",
            ControllerAction: "Delete",
          },
          AutomaticBinding: !0,
          Height: "Auto",
          ShowFilter: !0,
          ShowGroupPanel: !0,
          ShowLargeDatasetWarning: !1,
          Buttons: [
            {
              Code: "new",
              ActionURL: "/Create",
              Text: "Nuevo",
              AlternateText: "Nueva Solicitud de Amonestación",
              ExecuteLinkAction: !0,
              ConfirmationMessage: "",
              CompleteMessage: "",
              ShowText: !0,
              ShowImage: !0,
              ImageURL: "/Content/Images/Toolbar/add.png",
              VisibleIndex: 10,
              Visible: !0,
              Visibility: "Visible",
              TextVisibility: "Visible",
              ImageVisibility: "Visible",
              IsExportToExcelButton: !1,
              CheckForSelectedRecords: !1,
              IsRouteUrl: !1,
              ControllerArea: "",
              ControllerName: "",
              ControllerAction: "Create",
            },
            {
              Code: "edit",
              ActionURL: "/Edit",
              Text: "Editar",
              AlternateText: "Editar la Solicitud de Amonestación",
              ExecuteLinkAction: !0,
              ConfirmationMessage: "",
              CompleteMessage: "",
              ShowText: !0,
              ShowImage: !0,
              ImageURL: "/Content/Images/Toolbar/edit.png",
              VisibleIndex: 20,
              Visible: !0,
              Visibility: "Visible",
              TextVisibility: "Visible",
              ImageVisibility: "Visible",
              IsExportToExcelButton: !1,
              CheckForSelectedRecords: !0,
              IsRouteUrl: !1,
              ControllerArea: "",
              ControllerName: "",
              ControllerAction: "Edit",
            },
            {
              Code: "delete",
              ActionURL: "/Delete",
              Text: "Eliminar",
              AlternateText: "Eliminar la Solicitud de Amonestación",
              ExecuteLinkAction: !1,
              ConfirmationMessage:
                "¿Está seguro que desea eliminar la solicitud de Amonestación?",
              CompleteMessage: "",
              ShowText: !0,
              ShowImage: !0,
              ImageURL: "/Content/Images/Toolbar/delete.png",
              VisibleIndex: 30,
              Visible: !0,
              Visibility: "Visible",
              TextVisibility: "Visible",
              ImageVisibility: "Visible",
              IsExportToExcelButton: !1,
              CheckForSelectedRecords: !0,
              IsRouteUrl: !1,
              ControllerArea: "",
              ControllerName: "",
              ControllerAction: "Delete",
            },
            {
              Code: "initflujo",
              ActionURL: "/InicializaFlujoAutorizacion",
              Text: "Enviar a Autorización",
              AlternateText: "",
              ExecuteLinkAction: !1,
              ConfirmationMessage:
                "¿Está seguro que desea enviar a autorización la solicitud de amonestación?",
              CompleteMessage: "",
              ShowText: !0,
              ShowImage: !0,
              ImageURL: "/Content/Images/Toolbar/send_authorize.png",
              VisibleIndex: 40,
              Visible: !0,
              Visibility: "Visible",
              TextVisibility: "Visible",
              ImageVisibility: "Visible",
              IsExportToExcelButton: !1,
              CheckForSelectedRecords: !0,
              IsRouteUrl: !1,
              ControllerArea: "",
              ControllerName: "",
              ControllerAction: "InicializaFlujoAutorizacion",
            },
          ],
          Columns: [
            {
              Code: "amo_codigo",
              FieldName: "amo_codigo",
              PropertyName: "amo_codigo",
              Header: "amo_codigo",
              IsPrimaryKey: !0,
              FieldDescriptor: "int",
              Visible: !1,
              AlternateText: "",
              HorizontalAlign: "Left",
              VerticalAlign: "Automatic",
              VisibleIndex: 10,
              Width: "Auto",
              Wrap: !1,
              Format: "N0",
            },
            {
              Code: "cia_descripcion",
              FieldName: "cia_descripcion",
              PropertyName: "cia_descripcion",
              Header: "Compañia",
              IsPrimaryKey: !1,
              FieldDescriptor: "string",
              Visible: !0,
              AlternateText: "",
              HorizontalAlign: "Left",
              VerticalAlign: "Automatic",
              VisibleIndex: 20,
              Width: "Auto",
              Wrap: !1,
            },
            {
              Code: "exp_apellidos_nombres1",
              FieldName: "exp_apellidos_nombres1",
              PropertyName: "exp_apellidos_nombres1",
              Header: "Empleado",
              IsPrimaryKey: !1,
              FieldDescriptor: "string",
              Visible: !0,
              AlternateText: "",
              HorizontalAlign: "Left",
              VerticalAlign: "Automatic",
              VisibleIndex: 30,
              Width: "Auto",
              Wrap: !1,
            },
            {
              Code: "amo_fecha_infraccion",
              FieldName: "amo_fecha_infraccion",
              PropertyName: "amo_fecha_infraccion",
              Header: "Fecha Infracción",
              IsPrimaryKey: !1,
              FieldDescriptor: "date",
              Visible: !0,
              AlternateText: "",
              HorizontalAlign: "Left",
              VerticalAlign: "Automatic",
              VisibleIndex: 40,
              Width: "Auto",
              Wrap: !1,
              Format: "g",
            },
            {
              Code: "tam_descripcion",
              FieldName: "tam_descripcion",
              PropertyName: "tam_descripcion",
              Header: "Tipo",
              IsPrimaryKey: !1,
              FieldDescriptor: "string",
              Visible: !0,
              AlternateText: "",
              HorizontalAlign: "Left",
              VerticalAlign: "Automatic",
              VisibleIndex: 50,
              Width: "Auto",
              Wrap: !1,
            },
            {
              Code: "cau_descripcion",
              FieldName: "cau_descripcion",
              PropertyName: "cau_descripcion",
              Header: "Causa",
              IsPrimaryKey: !1,
              FieldDescriptor: "string",
              Visible: !0,
              AlternateText: "",
              HorizontalAlign: "Left",
              VerticalAlign: "Automatic",
              VisibleIndex: 60,
              Width: "Auto",
              Wrap: !1,
            },
            {
              Code: "exp_apellidos_nombres2",
              FieldName: "exp_apellidos_nombres2",
              PropertyName: "exp_apellidos_nombres2",
              Header: "Solicitante",
              IsPrimaryKey: !1,
              FieldDescriptor: "string",
              Visible: !0,
              AlternateText: "",
              HorizontalAlign: "Left",
              VerticalAlign: "Automatic",
              VisibleIndex: 70,
              Width: "Auto",
              Wrap: !1,
            },
          ],
          LocalizedStrings: [
            {
              Key: "{EmptyDataSetMessage}",
              Translation:
                "No existen registros que mostrar de acuerdo al criterio de búsqueda especificado.",
            },
            {
              Key: "{EliminarCriterioBusqueda}",
              Translation: "Eliminar criterio de búsqueda especificado",
            },
            { Key: "{Buscar}", Translation: "Buscar" },
            {
              Key: "{NoRecordsSelectedMessage}",
              Translation:
                "Debe seleccionar al menos un registro para ejecutar la acción",
            },
            {
              Key: "{ExportaAExcelTooltip}",
              Translation: "Exportar a Microsoft Excel",
            },
            {
              Key: "{AdvancedSearchLocalizationKey}",
              Translation: "Búsqueda Avanzada",
            },
            {
              Key: "{QueryBuilderShowErrorsLocalizationKey}",
              Translation:
                "Existen errores en la especificación de los criterios de búsqueda",
            },
            { Key: "{Si}", Translation: "Sí" },
            { Key: "{No}", Translation: "No" },
          ],
          ShowExportToExcelButton: !0,
          AlmacenaInformacionPersonalizacion: !1,
        },
        smart_list_stories = {
          title: "Evolution Components/Smart List",
          component: SmartListComponent,
          decorators: [
            (0, dist.applicationConfig)({
              providers: [(0, http.$R)(), (0, animations_async.h)()],
            }),
          ],
          tags: ["autodocs"],
        },
        paginationConfig = {
          isManualPaginate: !1,
          currentPage: 1,
          totalPages: 2,
          pageSize: 5,
          totalItems: 10,
          page: 1,
          titles: {
            showing: "Mostrando",
            results: "resultados",
            page: "Pag",
            of: "de",
          },
        },
        titlesConfig = {
          showing: "Mostrando",
          results: "resultados",
          page: "Pag",
          of: "de",
        },
        tableConfig = {
          hiddenColumns: [],
          sortableColumns: [1],
          actionIcons: [
            { type: "class", icon: "add" },
            { type: "class", icon: "edit" },
            { type: "class", icon: "delete" },
            { type: "class", icon: "verified_user" },
          ],
          showActions: !0,
          showSelect: !1,
          showStateButtons: !1,
          noPagination: !1,
          maxHeight: "120px",
          emptyStateText: "No hay datos para mostrar",
          twClass: "",
        },
        smartlistConfigDefault = {
          Code: "evowave.SolicitudAmonestaciones",
          ClientControlID: "evowave.SolicitudAmonestaciones",
          Parameters: {},
          DatabaseDialect: "Microsoft.Data.SqlClient",
          UrlMetadata:
            "/api/configuracion/SmartList/evowave.SolicitudAmonestaciones",
          FormTagId: "evowave_SolicitudAmonestaciones_form",
          AlmacenaInformacionPersonalizacion: !1,
          Height: "Auto",
          Metadata: { ...baseMetaData, MultiSelect: !1 },
          HasQueryBuilder: !1,
          UrlData:
            "/api/configuracion/SmartList/evowave.SolicitudAmonestaciones/Data",
          FormatoEntero: "{0:n0}",
          Checksum:
            "c3c0d2dfa2ca6048dd03942e9132c668d215ebb03e1eb0bee496f8eb857da3b7",
          Rows: 1,
        },
        Default = {
          args: {
            smartlistConfig: smartlistConfigDefault,
            paginationConfig: { ...paginationConfig, titles: titlesConfig },
            tableConfig,
            data,
          },
          argTypes: {
            smartlistConfig: {
              description: "Configuración completa del Smart List.",
            },
            paginationConfig: {
              description: "Configuración completa de paginación.",
            },
          },
        },
        metaDataEncargadoSinEstado = { ...baseMetaData },
        tableConfigEncargadoSinEstado = { ...tableConfig },
        ConSelector = {
          args: {
            smartlistConfig: {
              ...{
                ...smartlistConfigDefault,
                Metadata: metaDataEncargadoSinEstado,
              },
            },
            paginationConfig: { ...paginationConfig, titles: titlesConfig },
            tableConfig: {
              ...tableConfigEncargadoSinEstado,
              showSelect: !0,
              showActions: !1,
              selectorOptions: [
                { Id: "z", Description: "aaa z", Bag: {} },
                { Id: "a", Description: "aaa a", Bag: {} },
                { Id: "b", Description: "aaa b", Bag: {} },
              ],
            },
            data,
          },
        },
        metaDataEstadoSinEncargado = { ...baseMetaData, MultiSelect: !1 },
        tableConfigEstadoSinEncargado = {
          ...tableConfig,
          noPagination: !1,
          showStateButtons: !0,
          showActions: !1,
        },
        ConBotonesDeEstado = {
          args: {
            smartlistConfig: {
              ...smartlistConfigDefault,
              Metadata: metaDataEstadoSinEncargado,
            },
            paginationConfig: { ...paginationConfig, titles: titlesConfig },
            tableConfig: {
              ...tableConfigEstadoSinEncargado,
              showActions: !1,
              showSelect: !1,
            },
            data,
          },
        },
        tableConfigConScroll = {
          ...tableConfig,
          noPagination: !0,
          showActions: !1,
        },
        ConScroll = {
          args: {
            smartlistConfig: smartlistConfigDefault,
            paginationConfig: { ...paginationConfig, titles: titlesConfig },
            tableConfig: tableConfigConScroll,
            data,
          },
        };
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    smartlistConfig: smartlistConfigDefault,\n    paginationConfig: {\n      ...paginationConfig,\n      titles: titlesConfig\n    },\n    tableConfig,\n    data\n  },\n  argTypes: {\n    smartlistConfig: {\n      description: 'Configuración completa del Smart List.'\n    },\n    paginationConfig: {\n      description: 'Configuración completa de paginación.'\n    }\n  }\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (ConSelector.parameters = {
          ...ConSelector.parameters,
          docs: {
            ...ConSelector.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    smartlistConfig: {\n      ...smartlistConfigEncargadoSinEstado\n    },\n    paginationConfig: {\n      ...paginationConfig,\n      titles: titlesConfig\n    },\n    tableConfig: {\n      ...tableConfigEncargadoSinEstado,\n      showSelect: true,\n      showActions: false,\n      selectorOptions: [{\n        Id: 'z',\n        Description: 'aaa z',\n        Bag: {}\n      }, {\n        Id: 'a',\n        Description: 'aaa a',\n        Bag: {}\n      }, {\n        Id: 'b',\n        Description: 'aaa b',\n        Bag: {}\n      }]\n    },\n    data\n  }\n}",
              ...ConSelector.parameters?.docs?.source,
            },
          },
        }),
        (ConBotonesDeEstado.parameters = {
          ...ConBotonesDeEstado.parameters,
          docs: {
            ...ConBotonesDeEstado.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    smartlistConfig: smartlistConfigEstadoSinEncargado,\n    paginationConfig: {\n      ...paginationConfig,\n      titles: titlesConfig\n    },\n    tableConfig: {\n      ...tableConfigEstadoSinEncargado,\n      showActions: false,\n      showSelect: false\n    },\n    data\n  }\n}",
              ...ConBotonesDeEstado.parameters?.docs?.source,
            },
          },
        }),
        (ConScroll.parameters = {
          ...ConScroll.parameters,
          docs: {
            ...ConScroll.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    smartlistConfig: smartlistConfigDefault,\n    paginationConfig: {\n      ...paginationConfig,\n      titles: titlesConfig\n    },\n    tableConfig: tableConfigConScroll,\n    data\n  }\n}",
              ...ConScroll.parameters?.docs?.source,
            },
          },
        });
      const __namedExportsOrder = [
        "Default",
        "ConSelector",
        "ConBotonesDeEstado",
        "ConScroll",
      ];
    },
  },
]);
