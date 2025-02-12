"use strict";
(self.webpackChunk_aseinfo_evolution_web_components =
  self.webpackChunk_aseinfo_evolution_web_components || []).push([
  [8683],
  {
    "./node_modules/@angular/platform-browser/fesm2022/animations/async.mjs": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
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
    "./stories/select.stories.ts": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          Multiple: () => Multiple,
          Required: () => Required,
          Unlabeled: () => Unlabeled,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _aseinfo_ngx_evolution_components_public_api__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            "./projects/ngx-evolution-components/select/select.component.ts",
          ),
        _storybook_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/@storybook/angular/dist/index.mjs",
        ),
        _angular_platform_browser_animations_async__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            "./node_modules/@angular/platform-browser/fesm2022/animations/async.mjs",
          ),
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          "./node_modules/@angular/forms/fesm2022/forms.mjs",
        ),
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          "./node_modules/@angular/common/fesm2022/http.mjs",
        );
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: "Evolution Components/Select",
          component:
            _aseinfo_ngx_evolution_components_public_api__WEBPACK_IMPORTED_MODULE_1__.w,
          decorators: [
            (0,
            _storybook_angular__WEBPACK_IMPORTED_MODULE_0__.applicationConfig)({
              providers: [
                (0,
                _angular_platform_browser_animations_async__WEBPACK_IMPORTED_MODULE_2__.h)(),
                (0, _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.$R)(),
              ],
            }),
          ],
          tags: ["autodocs"],
        },
        form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ok().group({
          defaultFieldSelect:
            new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MJ("", []),
          multipleFieldSelect:
            new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MJ([], []),
          requiredFieldSelect:
            new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MJ("", []),
          unlabeledFieldSelect:
            new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MJ("", []),
        }),
        formControlDefaultSelect = form.controls.defaultFieldSelect,
        formControlMultipleSelect = form.controls.multipleFieldSelect,
        formControlRequiredSelect = form.controls.requiredFieldSelect,
        formControlUnlabeledSelect = form.controls.unlabeledFieldSelect;
      function addCircularSafeProperties(formControl) {
        Object.defineProperty(formControl, "toJSON", {
          value: () => null,
          writable: !0,
          configurable: !0,
        });
      }
      addCircularSafeProperties(formControlDefaultSelect),
        addCircularSafeProperties(formControlMultipleSelect),
        addCircularSafeProperties(formControlRequiredSelect),
        addCircularSafeProperties(formControlUnlabeledSelect);
      const Default = {
          args: {
            label: "Select",
            items: [
              { Id: "1", Description: "Option 1", Bag: {} },
              { Id: "2", Description: "Option 2", Bag: {} },
              { Id: "3", Description: "Option 3", Bag: {} },
            ],
            control: formControlDefaultSelect,
            buttonIcon: { icon: "clean.svg", type: "svg" },
            detail: "",
            twClass: "",
          },
        },
        Multiple = {
          args: {
            ...Default.args,
            control: formControlMultipleSelect,
            isMultiple: !0,
          },
        },
        Required = {
          args: {
            ...Default.args,
            control: formControlRequiredSelect,
            isRequired: !0,
            isMultiple: !1,
            requiredErrorMessage: "Este campo es requerido",
          },
        },
        Unlabeled = {
          args: {
            ...Default.args,
            label: "",
            control: formControlUnlabeledSelect,
            isRequired: !0,
            isMultiple: !1,
            requiredErrorMessage: "Este campo es requerido",
          },
        };
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    label: 'Select',\n    items: [{\n      Id: '1',\n      Description: 'Option 1',\n      Bag: {}\n    }, {\n      Id: '2',\n      Description: 'Option 2',\n      Bag: {}\n    }, {\n      Id: '3',\n      Description: 'Option 3',\n      Bag: {}\n    }],\n    control: formControlDefaultSelect,\n    buttonIcon: {\n      icon: 'clean.svg',\n      type: 'svg'\n    },\n    detail: '',\n    twClass: ''\n  }\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (Multiple.parameters = {
          ...Multiple.parameters,
          docs: {
            ...Multiple.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    ...Default.args,\n    control: formControlMultipleSelect,\n    isMultiple: true\n  }\n}",
              ...Multiple.parameters?.docs?.source,
            },
          },
        }),
        (Required.parameters = {
          ...Required.parameters,
          docs: {
            ...Required.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    ...Default.args,\n    control: formControlRequiredSelect,\n    isRequired: true,\n    isMultiple: false,\n    requiredErrorMessage: 'Este campo es requerido'\n  }\n}",
              ...Required.parameters?.docs?.source,
            },
          },
        }),
        (Unlabeled.parameters = {
          ...Unlabeled.parameters,
          docs: {
            ...Unlabeled.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    ...Default.args,\n    label: '',\n    control: formControlUnlabeledSelect,\n    isRequired: true,\n    isMultiple: false,\n    requiredErrorMessage: 'Este campo es requerido'\n  }\n}",
              ...Unlabeled.parameters?.docs?.source,
            },
          },
        });
      const __namedExportsOrder = [
        "Default",
        "Multiple",
        "Required",
        "Unlabeled",
      ];
    },
  },
]);
