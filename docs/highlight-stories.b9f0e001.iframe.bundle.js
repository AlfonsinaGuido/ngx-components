(self.webpackChunk_aseinfo_evolution_web_components =
  self.webpackChunk_aseinfo_evolution_web_components || []).push([
  [2321],
  {
    "./projects/ngx-evolution-components/highlight/highlight.component.scss?ngResource":
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
    "./stories/highlight.stories.ts": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          CardText: () => CardText,
          Default: () => Default,
          Subtitle: () => Subtitle,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => highlight_stories,
        });
      var animations_async = __webpack_require__(
          "./node_modules/@angular/platform-browser/fesm2022/animations/async.mjs",
        ),
        dist = __webpack_require__(
          "./node_modules/@storybook/angular/dist/index.mjs",
        ),
        tslib_es6 = __webpack_require__("./node_modules/tslib/tslib.es6.mjs");
      var highlight_componentngResource = __webpack_require__(
          "./projects/ngx-evolution-components/highlight/highlight.component.scss?ngResource",
        ),
        highlight_componentngResource_default = __webpack_require__.n(
          highlight_componentngResource,
        ),
        outputngResource = __webpack_require__(
          "./projects/ngx-evolution-components/styles/output.scss?ngResource",
        ),
        outputngResource_default = __webpack_require__.n(outputngResource),
        core = __webpack_require__(
          "./node_modules/@angular/core/fesm2022/core.mjs",
        );
      let HighlightComponent = class HighlightComponent {
        constructor() {
          (this.title = ""),
            (this.subtitle = ""),
            (this.cardtext = ""),
            (this.twClassAside = ""),
            (this.twClassCard = "");
        }
        static #_ = (this.propDecorators = {
          title: [{ type: core.Input }],
          subtitle: [{ type: core.Input }],
          cardtext: [{ type: core.Input }],
          twClassAside: [{ type: core.Input }],
          twClassCard: [{ type: core.Input }],
        });
      };
      HighlightComponent = (0, tslib_es6.Cg)(
        [
          (0, core.Component)({
            selector: "evo-highlight",
            standalone: !0,
            imports: [],
            template:
              '<aside\n  [class]="twClassAside"\n  class="[grid-area:aside] h-full flex-row rounded-lg shadow-md p-6 max-lg:hidden"\n>\n  @if (title !== "") {\n    <p\n      class="aside-title pt-20 text-4xl text-dark-gray font-bold leading-normal z-10 relative"\n    >\n      <span>{{ title }}</span>\n    </p>\n  }\n  @if (subtitle !== "") {\n    <p class="aside-subtitle py-20 text-lg text-medium-gray z-10 relative">\n      <span>{{ subtitle }}</span>\n    </p>\n  }\n  @if (cardtext !== "") {\n    <div\n      [class]="twClassCard"\n      class="aside-cardtext font-medium w-full py-6 px-4 rounded-md text-xl z-10 relative"\n    >\n      <span>{{ cardtext }}</span>\n    </div>\n  }\n</aside>\n@if (cardtext !== "") {\n  <div\n    [class]="twClassCard"\n    class="aside-cardtext-mobile font-medium w-full py-6 px-4 rounded-md text-lg md:hidden"\n  >\n    <span>{{ cardtext }}</span>\n  </div>\n}\n',
            encapsulation: core.ViewEncapsulation.None,
            styles: [
              highlight_componentngResource_default(),
              outputngResource_default(),
            ],
          }),
        ],
        HighlightComponent,
      );
      const highlight_stories = {
          title: "Evolution Components/Highlight",
          component: HighlightComponent,
          decorators: [
            (0, dist.applicationConfig)({
              providers: [(0, animations_async.h)()],
            }),
          ],
          tags: ["autodocs"],
        },
        title = "Te apoyamos en cada paso hacia tu éxito profesional",
        subtitle =
          "Nuestra plataforma te permite llevar el control de tu progreso en las fases del onboarding de la manera más eficiente.",
        cardtext =
          "Inicia sesión para acceder a tu cuenta, revisa tu tablero con el resumen de actividades y su estado actual.",
        Default = {
          args: {
            title,
            subtitle,
            cardtext,
            twClassAside: "",
            twClassCard: "text-medium-gray",
          },
        },
        Subtitle = { args: { title, subtitle } },
        CardText = { args: { title, cardtext } };
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    title: title,\n    subtitle: subtitle,\n    cardtext: cardtext,\n    twClassAside: '',\n    twClassCard: 'text-medium-gray'\n  }\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (Subtitle.parameters = {
          ...Subtitle.parameters,
          docs: {
            ...Subtitle.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    title: title,\n    subtitle: subtitle\n  }\n}",
              ...Subtitle.parameters?.docs?.source,
            },
          },
        }),
        (CardText.parameters = {
          ...CardText.parameters,
          docs: {
            ...CardText.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    title: title,\n    cardtext: cardtext\n  }\n}",
              ...CardText.parameters?.docs?.source,
            },
          },
        });
      const __namedExportsOrder = ["Default", "Subtitle", "CardText"];
    },
  },
]);
