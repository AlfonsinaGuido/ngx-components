(self.webpackChunk_aseinfo_evolution_web_components =
  self.webpackChunk_aseinfo_evolution_web_components || []).push([
  [6324],
  {
    "./projects/ngx-evolution-components/breadcrumb/breadcrumb.component.scss?ngResource":
      (module, __unused_webpack_exports, __webpack_require__) => {
        var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(
            "./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/noSourceMaps.js",
          ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__(
            "./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/api.js",
          )(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          '@charset "UTF-8";\n.breadcrumb li evo-svg {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 30px;\n  width: 30px;\n  background-color: var(--primary-50);\n  border-radius: 50%;\n  margin-right: 5px;\n  cursor: pointer;\n}\n.breadcrumb li evo-svg .mat-icon {\n  height: 18px;\n  width: 18px;\n  color: var(--primary-500);\n}\n.breadcrumb li::after {\n  content: " /  ";\n}\n.breadcrumb li:last-child::after {\n  content: "";\n}',
          "",
        ]),
          (module.exports = ___CSS_LOADER_EXPORT___.toString());
      },
    "./projects/ngx-evolution-components/svg/svg.component.scss?ngResource": (
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
        "evo-svg {\n  display: flex;\n}",
        "",
      ]),
        (module.exports = ___CSS_LOADER_EXPORT___.toString());
    },
    "./projects/ngx-evolution-components/svg/svg.component.ts": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      "use strict";
      __webpack_require__.d(__webpack_exports__, { k: () => SvgComponent });
      var tslib_es6 = __webpack_require__("./node_modules/tslib/tslib.es6.mjs");
      var svg_componentngResource = __webpack_require__(
          "./projects/ngx-evolution-components/svg/svg.component.scss?ngResource",
        ),
        svg_componentngResource_default = __webpack_require__.n(
          svg_componentngResource,
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
        platform_browser = __webpack_require__(
          "./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs",
        );
      let SvgComponent = class SvgComponent {
        constructor(matIconRegistry, domSanitizer) {
          (this.matIconRegistry = matIconRegistry),
            (this.domSanitizer = domSanitizer);
        }
        ngOnInit() {
          this.svgPath
            ? this.matIconRegistry.addSvgIcon(
                "custom_icon",
                this.domSanitizer.bypassSecurityTrustResourceUrl(this.svgPath),
              )
            : console.error("Error loading SVG, undefined path");
        }
        static #_ = (this.ctorParameters = () => [
          { type: icon.tp },
          { type: platform_browser.DomSanitizer },
        ]);
        static #_2 = (this.propDecorators = {
          svgPath: [{ type: core.Input }],
          twClass: [{ type: core.Input }],
        });
      };
      SvgComponent = (0, tslib_es6.Cg)(
        [
          (0, core.Component)({
            selector: "evo-svg",
            standalone: !0,
            imports: [icon.m_],
            template:
              '@if (svgPath) {\n  <mat-icon [class]="twClass" svgIcon="custom_icon"></mat-icon>\n}\n',
            encapsulation: core.ViewEncapsulation.None,
            styles: [
              svg_componentngResource_default(),
              outputngResource_default(),
            ],
          }),
        ],
        SvgComponent,
      );
    },
    "./node_modules/rxjs/dist/esm5/internal/observable/ConnectableObservable.js":
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
          G: () => ConnectableObservable,
        });
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            "./node_modules/tslib/tslib.es6.mjs",
          ),
          _Observable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
            "./node_modules/rxjs/dist/esm5/internal/Observable.js",
          ),
          _Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            "./node_modules/rxjs/dist/esm5/internal/Subscription.js",
          ),
          _operators_refCount__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              "./node_modules/rxjs/dist/esm5/internal/operators/refCount.js",
            ),
          _operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              "./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js",
            ),
          _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            "./node_modules/rxjs/dist/esm5/internal/util/lift.js",
          ),
          ConnectableObservable = (function (_super) {
            function ConnectableObservable(source, subjectFactory) {
              var _this = _super.call(this) || this;
              return (
                (_this.source = source),
                (_this.subjectFactory = subjectFactory),
                (_this._subject = null),
                (_this._refCount = 0),
                (_this._connection = null),
                (0, _util_lift__WEBPACK_IMPORTED_MODULE_1__.S)(source) &&
                  (_this.lift = source.lift),
                _this
              );
            }
            return (
              (0, tslib__WEBPACK_IMPORTED_MODULE_0__.C6)(
                ConnectableObservable,
                _super,
              ),
              (ConnectableObservable.prototype._subscribe = function (
                subscriber,
              ) {
                return this.getSubject().subscribe(subscriber);
              }),
              (ConnectableObservable.prototype.getSubject = function () {
                var subject = this._subject;
                return (
                  (subject && !subject.isStopped) ||
                    (this._subject = this.subjectFactory()),
                  this._subject
                );
              }),
              (ConnectableObservable.prototype._teardown = function () {
                this._refCount = 0;
                var _connection = this._connection;
                (this._subject = this._connection = null),
                  null == _connection || _connection.unsubscribe();
              }),
              (ConnectableObservable.prototype.connect = function () {
                var _this = this,
                  connection = this._connection;
                if (!connection) {
                  connection = this._connection =
                    new _Subscription__WEBPACK_IMPORTED_MODULE_2__.yU();
                  var subject_1 = this.getSubject();
                  connection.add(
                    this.source.subscribe(
                      (0,
                      _operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_3__._)(
                        subject_1,
                        void 0,
                        function () {
                          _this._teardown(), subject_1.complete();
                        },
                        function (err) {
                          _this._teardown(), subject_1.error(err);
                        },
                        function () {
                          return _this._teardown();
                        },
                      ),
                    ),
                  ),
                    connection.closed &&
                      ((this._connection = null),
                      (connection =
                        _Subscription__WEBPACK_IMPORTED_MODULE_2__.yU.EMPTY));
                }
                return connection;
              }),
              (ConnectableObservable.prototype.refCount = function () {
                return (0,
                _operators_refCount__WEBPACK_IMPORTED_MODULE_4__.B)()(this);
              }),
              ConnectableObservable
            );
          })(_Observable__WEBPACK_IMPORTED_MODULE_5__.c);
      },
    "./node_modules/rxjs/dist/esm5/internal/operators/mapTo.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      "use strict";
      __webpack_require__.d(__webpack_exports__, { u: () => mapTo });
      var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "./node_modules/rxjs/dist/esm5/internal/operators/map.js",
      );
      function mapTo(value) {
        return (0, _map__WEBPACK_IMPORTED_MODULE_0__.T)(function () {
          return value;
        });
      }
    },
    "./node_modules/rxjs/dist/esm5/internal/operators/refCount.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      "use strict";
      __webpack_require__.d(__webpack_exports__, { B: () => refCount });
      var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/util/lift.js",
        ),
        _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js",
        );
      function refCount() {
        return (0, _util_lift__WEBPACK_IMPORTED_MODULE_0__.N)(
          function (source, subscriber) {
            var connection = null;
            source._refCount++;
            var refCounter = (0,
            _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__._)(
              subscriber,
              void 0,
              void 0,
              void 0,
              function () {
                if (!source || source._refCount <= 0 || 0 < --source._refCount)
                  connection = null;
                else {
                  var sharedConnection = source._connection,
                    conn = connection;
                  (connection = null),
                    !sharedConnection ||
                      (conn && sharedConnection !== conn) ||
                      sharedConnection.unsubscribe(),
                    subscriber.unsubscribe();
                }
              },
            );
            source.subscribe(refCounter),
              refCounter.closed || (connection = source.connect());
          },
        );
      }
    },
    "./node_modules/rxjs/dist/esm5/internal/util/isObservable.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      "use strict";
      __webpack_require__.d(__webpack_exports__, { A: () => isObservable });
      var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/Observable.js",
        ),
        _isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/util/isFunction.js",
        );
      function isObservable(obj) {
        return (
          !!obj &&
          (obj instanceof _Observable__WEBPACK_IMPORTED_MODULE_0__.c ||
            ((0, _isFunction__WEBPACK_IMPORTED_MODULE_1__.T)(obj.lift) &&
              (0, _isFunction__WEBPACK_IMPORTED_MODULE_1__.T)(obj.subscribe)))
        );
      }
    },
    "./stories/breadcrumb.stories.ts": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          Hidden: () => Hidden,
          WithoutHomePath: () => WithoutHomePath,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => breadcrumb_stories,
        });
      var tslib_es6 = __webpack_require__("./node_modules/tslib/tslib.es6.mjs");
      var breadcrumb_componentngResource = __webpack_require__(
          "./projects/ngx-evolution-components/breadcrumb/breadcrumb.component.scss?ngResource",
        ),
        breadcrumb_componentngResource_default = __webpack_require__.n(
          breadcrumb_componentngResource,
        ),
        outputngResource = __webpack_require__(
          "./projects/ngx-evolution-components/styles/output.scss?ngResource",
        ),
        outputngResource_default = __webpack_require__.n(outputngResource),
        core = __webpack_require__(
          "./node_modules/@angular/core/fesm2022/core.mjs",
        ),
        svg_component = __webpack_require__(
          "./projects/ngx-evolution-components/svg/svg.component.ts",
        ),
        router = __webpack_require__(
          "./node_modules/@angular/router/fesm2022/router.mjs",
        ),
        filter = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/filter.js",
        ),
        distinctUntilChanged = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/distinctUntilChanged.js",
        );
      let BreadcrumbComponent = class BreadcrumbComponent {
        constructor(router, activatedRoute) {
          (this.router = router),
            (this.activatedRoute = activatedRoute),
            (this.breadcrumbs = []),
            (this.breadcrumbs = this.buildBreadcrumb(this.activatedRoute.root));
        }
        ngOnInit() {
          this.routerEventsSubscription = this.router.events
            .pipe(
              (0, filter.p)((event) => event instanceof router.wF),
              (0, distinctUntilChanged.F)(),
            )
            .subscribe(() => {
              this.breadcrumbs = this.buildBreadcrumb(this.activatedRoute.root);
            });
        }
        ngOnDestroy() {
          this.routerEventsSubscription &&
            this.routerEventsSubscription.unsubscribe();
        }
        buildBreadcrumb(route, url = "", breadcrumbs = []) {
          const label = route.routeConfig?.data
              ? route.routeConfig.data.breadcrumb
              : "",
            path = route.routeConfig?.data ? route.routeConfig.path : "",
            nextURL = path ? `${url}/${path}` : url,
            breadcrumb = { label, url: nextURL },
            newBreadcrumb = breadcrumb.label
              ? [...breadcrumbs, breadcrumb]
              : [...breadcrumbs];
          return route.firstChild
            ? this.buildBreadcrumb(route.firstChild, nextURL, newBreadcrumb)
            : newBreadcrumb;
        }
        static #_ = (this.ctorParameters = () => [
          { type: router.Ix },
          { type: router.nX },
        ]);
        static #_2 = (this.propDecorators = {
          twClass: [{ type: core.Input }],
          homeElement: [{ type: core.Input }],
        });
      };
      BreadcrumbComponent = (0, tslib_es6.Cg)(
        [
          (0, core.Component)({
            selector: "evo-breadcrumb",
            standalone: !0,
            imports: [router.iI, svg_component.k],
            template:
              '@if (breadcrumbs.length > 1) {\n  <nav>\n    <ol\n      class="breadcrumb text-medium-gray font-semibold text-sm flex items-center"\n      [class]="twClass"\n    >\n      @if (homeElement) {\n        <li class="float-left flex items-center">\n          <evo-svg\n            [routerLink]="homeElement.path"\n            [svgPath]="homeElement.icon"\n          ></evo-svg>\n        </li>\n      }\n      @for (breadcrumb of breadcrumbs; track $index) {\n        <li class="float-left">\n          @if ($index < breadcrumbs.length - 1) {\n            <span\n              [routerLink]="breadcrumb.url"\n              class="cursor-pointer capitalize"\n            >\n              {{ breadcrumb.label }}\n            </span>\n          } @else {\n            <span class="text-primary capitalize">\n              {{ breadcrumb.label }}\n            </span>\n          }\n        </li>\n      }\n    </ol>\n  </nav>\n}\n',
            encapsulation: core.ViewEncapsulation.None,
            styles: [
              breadcrumb_componentngResource_default(),
              outputngResource_default(),
            ],
          }),
        ],
        BreadcrumbComponent,
      );
      var dist = __webpack_require__(
          "./node_modules/@storybook/angular/dist/index.mjs",
        ),
        http = __webpack_require__(
          "./node_modules/@angular/common/fesm2022/http.mjs",
        );
      const breadcrumb_stories = {
          title: "Evolution Components/Breadcrumb",
          component: BreadcrumbComponent,
          decorators: [
            (0, dist.applicationConfig)({
              providers: [(0, router.lh)([], (0, router.H3)()), (0, http.$R)()],
            }),
          ],
          tags: ["autodocs"],
        },
        Default = {
          args: {
            twClass: "",
            homeElement: { path: "/dashboard", icon: "home.svg" },
            breadcrumbs: [
              { label: "notificaciones", url: "/notificaciones" },
              { label: "ver-detalles", url: "/ver-detalles" },
            ],
          },
        },
        WithoutHomePath = { args: { ...Default.args, homeElement: void 0 } },
        Hidden = {
          args: {
            breadcrumbs: [{ label: "notificaciones", url: "/notificaciones" }],
          },
        };
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    twClass: '',\n    homeElement: {\n      path: '/dashboard',\n      icon: 'home.svg'\n    },\n    breadcrumbs: [{\n      label: 'notificaciones',\n      url: '/notificaciones'\n    }, {\n      label: 'ver-detalles',\n      url: '/ver-detalles'\n    }]\n  }\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (WithoutHomePath.parameters = {
          ...WithoutHomePath.parameters,
          docs: {
            ...WithoutHomePath.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    ...Default.args,\n    homeElement: undefined\n  }\n}",
              ...WithoutHomePath.parameters?.docs?.source,
            },
          },
        }),
        (Hidden.parameters = {
          ...Hidden.parameters,
          docs: {
            ...Hidden.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    breadcrumbs: [{\n      label: 'notificaciones',\n      url: '/notificaciones'\n    }]\n  }\n}",
              ...Hidden.parameters?.docs?.source,
            },
          },
        });
      const __namedExportsOrder = ["Default", "WithoutHomePath", "Hidden"];
    },
  },
]);
