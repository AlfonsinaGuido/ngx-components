(self.webpackChunk_aseinfo_evolution_web_components =
  self.webpackChunk_aseinfo_evolution_web_components || []).push([
  [2745],
  {
    "./projects/ngx-evolution-components/banner/banner.component.scss?ngResource":
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
    "./stories/banner.stories.ts": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          ControlledError: () => ControlledError,
          Success: () => Success,
          UncontrolledError: () => UncontrolledError,
          Warning: () => Warning,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => banner_stories,
        });
      var animations_async = __webpack_require__(
          "./node_modules/@angular/platform-browser/fesm2022/animations/async.mjs",
        ),
        tslib_es6 = __webpack_require__("./node_modules/tslib/tslib.es6.mjs");
      var banner_componentngResource = __webpack_require__(
          "./projects/ngx-evolution-components/banner/banner.component.scss?ngResource",
        ),
        banner_componentngResource_default = __webpack_require__.n(
          banner_componentngResource,
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
        animations = __webpack_require__(
          "./node_modules/@angular/animations/fesm2022/animations.mjs",
        );
      const slideDown = (0, animations.hZ)("slideDown", [
        (0, animations.wk)("false", (0, animations.iF)({})),
        (0, animations.wk)("true", (0, animations.iF)({})),
        (0, animations.kY)("void => true", [
          (0, animations.iF)({ transform: "translateY(-100%)", opacity: 0 }),
          (0, animations.i0)(
            "500ms ease-out",
            (0, animations.iF)({ transform: "translateY(0)", opacity: 1 }),
          ),
        ]),
        (0, animations.kY)("true => void", [
          (0, animations.i0)(
            "500ms ease-in",
            (0, animations.iF)({ transform: "translateY(-100%)", opacity: 0 }),
          ),
        ]),
      ]);
      let BannerComponent = class BannerComponent {
        constructor() {
          (this.type = "success"),
            (this.title = ""),
            (this.message = ""),
            (this.duration = null),
            (this.useAnimation = !0),
            (this.closed = new core.EventEmitter()),
            (this.isHidden = !1);
        }
        ngOnChanges(changes) {
          (changes.type || changes.title || changes.message) &&
            ((this.isHidden = !1),
            this.duration &&
              setTimeout(() => {
                this.hideBanner();
              }, this.duration));
        }
        hideBanner() {
          (this.isHidden = !0), this.closed.emit();
        }
        static #_ = (this.propDecorators = {
          type: [{ type: core.Input }],
          title: [{ type: core.Input }],
          message: [{ type: core.Input }],
          duration: [{ type: core.Input }],
          twClass: [{ type: core.Input }],
          useAnimation: [{ type: core.Input }],
          closed: [{ type: core.Output }],
        });
      };
      BannerComponent = (0, tslib_es6.Cg)(
        [
          (0, core.Component)({
            selector: "evo-banner",
            standalone: !0,
            imports: [icon.m_],
            template:
              '@if (!isHidden && title && message) {\n  <div\n    [class]="\n      (type === \'error\' ? \'bg-light-warn\' : \'bg-light-\' + type) + \' \' + twClass\n    "\n    class="flex items-center justify-between p-3 rounded-xl relative"\n    [@slideDown]="useAnimation"\n  >\n    <div class="flex gap-2">\n      <div class="min-w-4">\n        <mat-icon\n          [class]="type === \'error\' ? \'text-warn\' : \'text-\' + type"\n          class="min-w-min absolute top-[12px] left-3 text-xl"\n          aria-hidden="false"\n          [attr.aria-label]="type + \' icon\'"\n          fontSet="material-symbols-outlined"\n          >{{\n            type === "success"\n              ? "check_circle"\n              : type === "caution"\n                ? "info"\n                : "error"\n          }}</mat-icon\n        >\n      </div>\n      <div>\n        <div class="mb-1 font-extrabold text-dark-gray text-base">\n          {{ title }}\n        </div>\n        <p class="text-medium-gray text-sm font-semibold break-all inline">\n          {{ message }}\n        </p>\n        <ng-content></ng-content>\n      </div>\n    </div>\n    <mat-icon\n      (click)="hideBanner()"\n      class="text-medium-gray min-w-min cursor-pointer"\n      aria-hidden="false"\n      aria-label="Close icon"\n      fontSet="material-symbols-outlined"\n      >close</mat-icon\n    >\n  </div>\n}\n',
            animations: [slideDown],
            encapsulation: core.ViewEncapsulation.None,
            styles: [
              banner_componentngResource_default(),
              outputngResource_default(),
            ],
          }),
        ],
        BannerComponent,
      );
      const banner_stories = {
          title: "Evolution Components/Banner",
          component: BannerComponent,
          decorators: [
            (0,
            __webpack_require__(
              "./node_modules/@storybook/angular/dist/index.mjs",
            ).applicationConfig)({ providers: [(0, animations_async.h)()] }),
          ],
          tags: ["autodocs"],
        },
        Success = {
          args: {
            title: "Éxito",
            message: "Se asignaron correctamente las personas al programa.",
            duration: 1e4,
            twClass: "",
          },
        },
        Warning = {
          render: (args) => ({
            props: {
              title: args.title,
              message: args.message,
              type: args.type,
              twClass: args.twClass,
              onRedirect: () => {
                alert(
                  "Se redirige a la ruta de Gestionar filtrando por actividad.",
                );
              },
            },
            template:
              '\n        <evo-banner [title]="title" [message]="message" [type]="type" [twClass]="twClass">\n          <a class="!text-sm !text-caution !underline hover:!underline font-bold ms-1 cursor-pointer" (click)="onRedirect()" >Resolver ahora</a>\n        </evo-banner>\n      ',
          }),
          args: {
            title: "Asignación de Encargado de Actividad Pendiente",
            message:
              "Existen inconsistencias en la asignación del Encargado de Actividad que deben ser resueltas.",
            type: "caution",
            twClass: "",
          },
        },
        ControlledError = {
          args: {
            title: "Error",
            message: "No se puede eliminar un programa con personas asignadas.",
            type: "error",
            duration: 1e4,
            twClass: "",
          },
        },
        UncontrolledError = {
          args: {
            title: "Error",
            message: "No se pudo establecer conexión con el Identity Server.",
            type: "error",
            useAnimation: !1,
            twClass: "",
          },
        };
      (Success.parameters = {
        ...Success.parameters,
        docs: {
          ...Success.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    title: 'Éxito',\n    message: 'Se asignaron correctamente las personas al programa.',\n    duration: 10000,\n    twClass: ''\n  }\n}",
            ...Success.parameters?.docs?.source,
          },
        },
      }),
        (Warning.parameters = {
          ...Warning.parameters,
          docs: {
            ...Warning.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: args => ({\n    props: {\n      title: args.title,\n      message: args.message,\n      type: args.type,\n      twClass: args.twClass,\n      onRedirect: () => {\n        alert(\'Se redirige a la ruta de Gestionar filtrando por actividad.\');\n      }\n    },\n    template: `\n        <evo-banner [title]="title" [message]="message" [type]="type" [twClass]="twClass">\n          <a class="!text-sm !text-caution !underline hover:!underline font-bold ms-1 cursor-pointer" (click)="onRedirect()" >Resolver ahora</a>\n        </evo-banner>\n      `\n  }),\n  args: {\n    title: \'Asignación de Encargado de Actividad Pendiente\',\n    message: \'Existen inconsistencias en la asignación del Encargado de Actividad que deben ser resueltas.\',\n    type: \'caution\',\n    twClass: \'\'\n  }\n}',
              ...Warning.parameters?.docs?.source,
            },
          },
        }),
        (ControlledError.parameters = {
          ...ControlledError.parameters,
          docs: {
            ...ControlledError.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    title: 'Error',\n    message: 'No se puede eliminar un programa con personas asignadas.',\n    type: 'error',\n    duration: 10000,\n    twClass: ''\n  }\n}",
              ...ControlledError.parameters?.docs?.source,
            },
          },
        }),
        (UncontrolledError.parameters = {
          ...UncontrolledError.parameters,
          docs: {
            ...UncontrolledError.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    title: 'Error',\n    message: 'No se pudo establecer conexión con el Identity Server.',\n    type: 'error',\n    useAnimation: false,\n    twClass: ''\n  }\n}",
              ...UncontrolledError.parameters?.docs?.source,
            },
          },
        });
      const __namedExportsOrder = [
        "Success",
        "Warning",
        "ControlledError",
        "UncontrolledError",
      ];
    },
  },
]);
