"use strict";
(self.webpackChunk_aseinfo_evolution_web_components =
  self.webpackChunk_aseinfo_evolution_web_components || []).push([
  [3134],
  {
    "./node_modules/@angular/cdk/fesm2022/collections.mjs": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        CB: () => SelectionModel,
        DQ: () => _RecycleViewRepeaterStrategy,
        hx: () => ArrayDataSource,
        sL: () => _VIEW_REPEATER_STRATEGY,
        y4: () => isDataSource,
        zP: () => UniqueSelectionDispatcher,
      });
      var _ViewRepeaterOperation,
        rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/observable/ConnectableObservable.js",
        ),
        rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/util/isObservable.js",
        ),
        rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/observable/of.js",
        ),
        rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/Subject.js",
        ),
        _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          "./node_modules/@angular/core/fesm2022/core.mjs",
        );
      class DataSource {}
      function isDataSource(value) {
        return (
          value &&
          "function" == typeof value.connect &&
          !(value instanceof rxjs__WEBPACK_IMPORTED_MODULE_0__.G)
        );
      }
      class ArrayDataSource extends DataSource {
        constructor(_data) {
          super(), (this._data = _data);
        }
        connect() {
          return (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.A)(this._data)
            ? this._data
            : (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(this._data);
        }
        disconnect() {}
      }
      !(function (_ViewRepeaterOperation) {
        (_ViewRepeaterOperation[(_ViewRepeaterOperation.REPLACED = 0)] =
          "REPLACED"),
          (_ViewRepeaterOperation[(_ViewRepeaterOperation.INSERTED = 1)] =
            "INSERTED"),
          (_ViewRepeaterOperation[(_ViewRepeaterOperation.MOVED = 2)] =
            "MOVED"),
          (_ViewRepeaterOperation[(_ViewRepeaterOperation.REMOVED = 3)] =
            "REMOVED");
      })(_ViewRepeaterOperation || (_ViewRepeaterOperation = {}));
      const _VIEW_REPEATER_STRATEGY =
        new _angular_core__WEBPACK_IMPORTED_MODULE_3__.InjectionToken(
          "_ViewRepeater",
        );
      class _RecycleViewRepeaterStrategy {
        constructor() {
          (this.viewCacheSize = 20), (this._viewCache = []);
        }
        applyChanges(
          changes,
          viewContainerRef,
          itemContextFactory,
          itemValueResolver,
          itemViewChanged,
        ) {
          changes.forEachOperation(
            (record, adjustedPreviousIndex, currentIndex) => {
              let view, operation;
              if (null == record.previousIndex) {
                const viewArgsFactory = () =>
                  itemContextFactory(
                    record,
                    adjustedPreviousIndex,
                    currentIndex,
                  );
                (view = this._insertView(
                  viewArgsFactory,
                  currentIndex,
                  viewContainerRef,
                  itemValueResolver(record),
                )),
                  (operation = view
                    ? _ViewRepeaterOperation.INSERTED
                    : _ViewRepeaterOperation.REPLACED);
              } else
                null == currentIndex
                  ? (this._detachAndCacheView(
                      adjustedPreviousIndex,
                      viewContainerRef,
                    ),
                    (operation = _ViewRepeaterOperation.REMOVED))
                  : ((view = this._moveView(
                      adjustedPreviousIndex,
                      currentIndex,
                      viewContainerRef,
                      itemValueResolver(record),
                    )),
                    (operation = _ViewRepeaterOperation.MOVED));
              itemViewChanged &&
                itemViewChanged({ context: view?.context, operation, record });
            },
          );
        }
        detach() {
          for (const view of this._viewCache) view.destroy();
          this._viewCache = [];
        }
        _insertView(viewArgsFactory, currentIndex, viewContainerRef, value) {
          const cachedView = this._insertViewFromCache(
            currentIndex,
            viewContainerRef,
          );
          if (cachedView) return void (cachedView.context.$implicit = value);
          const viewArgs = viewArgsFactory();
          return viewContainerRef.createEmbeddedView(
            viewArgs.templateRef,
            viewArgs.context,
            viewArgs.index,
          );
        }
        _detachAndCacheView(index, viewContainerRef) {
          const detachedView = viewContainerRef.detach(index);
          this._maybeCacheView(detachedView, viewContainerRef);
        }
        _moveView(
          adjustedPreviousIndex,
          currentIndex,
          viewContainerRef,
          value,
        ) {
          const view = viewContainerRef.get(adjustedPreviousIndex);
          return (
            viewContainerRef.move(view, currentIndex),
            (view.context.$implicit = value),
            view
          );
        }
        _maybeCacheView(view, viewContainerRef) {
          if (this._viewCache.length < this.viewCacheSize)
            this._viewCache.push(view);
          else {
            const index = viewContainerRef.indexOf(view);
            -1 === index ? view.destroy() : viewContainerRef.remove(index);
          }
        }
        _insertViewFromCache(index, viewContainerRef) {
          const cachedView = this._viewCache.pop();
          return (
            cachedView && viewContainerRef.insert(cachedView, index),
            cachedView || null
          );
        }
      }
      class SelectionModel {
        get selected() {
          return (
            this._selected ||
              (this._selected = Array.from(this._selection.values())),
            this._selected
          );
        }
        constructor(
          _multiple = !1,
          initiallySelectedValues,
          _emitChanges = !0,
          compareWith,
        ) {
          (this._multiple = _multiple),
            (this._emitChanges = _emitChanges),
            (this.compareWith = compareWith),
            (this._selection = new Set()),
            (this._deselectedToEmit = []),
            (this._selectedToEmit = []),
            (this.changed = new rxjs__WEBPACK_IMPORTED_MODULE_4__.B()),
            initiallySelectedValues &&
              initiallySelectedValues.length &&
              (_multiple
                ? initiallySelectedValues.forEach((value) =>
                    this._markSelected(value),
                  )
                : this._markSelected(initiallySelectedValues[0]),
              (this._selectedToEmit.length = 0));
        }
        select(...values) {
          this._verifyValueAssignment(values),
            values.forEach((value) => this._markSelected(value));
          const changed = this._hasQueuedChanges();
          return this._emitChangeEvent(), changed;
        }
        deselect(...values) {
          this._verifyValueAssignment(values),
            values.forEach((value) => this._unmarkSelected(value));
          const changed = this._hasQueuedChanges();
          return this._emitChangeEvent(), changed;
        }
        setSelection(...values) {
          this._verifyValueAssignment(values);
          const oldValues = this.selected,
            newSelectedSet = new Set(values);
          values.forEach((value) => this._markSelected(value)),
            oldValues
              .filter(
                (value) =>
                  !newSelectedSet.has(
                    this._getConcreteValue(value, newSelectedSet),
                  ),
              )
              .forEach((value) => this._unmarkSelected(value));
          const changed = this._hasQueuedChanges();
          return this._emitChangeEvent(), changed;
        }
        toggle(value) {
          return this.isSelected(value)
            ? this.deselect(value)
            : this.select(value);
        }
        clear(flushEvent = !0) {
          this._unmarkAll();
          const changed = this._hasQueuedChanges();
          return flushEvent && this._emitChangeEvent(), changed;
        }
        isSelected(value) {
          return this._selection.has(this._getConcreteValue(value));
        }
        isEmpty() {
          return 0 === this._selection.size;
        }
        hasValue() {
          return !this.isEmpty();
        }
        sort(predicate) {
          this._multiple && this.selected && this._selected.sort(predicate);
        }
        isMultipleSelection() {
          return this._multiple;
        }
        _emitChangeEvent() {
          (this._selected = null),
            (this._selectedToEmit.length || this._deselectedToEmit.length) &&
              (this.changed.next({
                source: this,
                added: this._selectedToEmit,
                removed: this._deselectedToEmit,
              }),
              (this._deselectedToEmit = []),
              (this._selectedToEmit = []));
        }
        _markSelected(value) {
          (value = this._getConcreteValue(value)),
            this.isSelected(value) ||
              (this._multiple || this._unmarkAll(),
              this.isSelected(value) || this._selection.add(value),
              this._emitChanges && this._selectedToEmit.push(value));
        }
        _unmarkSelected(value) {
          (value = this._getConcreteValue(value)),
            this.isSelected(value) &&
              (this._selection.delete(value),
              this._emitChanges && this._deselectedToEmit.push(value));
        }
        _unmarkAll() {
          this.isEmpty() ||
            this._selection.forEach((value) => this._unmarkSelected(value));
        }
        _verifyValueAssignment(values) {
          if (
            values.length > 1 &&
            !this._multiple &&
            ("undefined" == typeof ngDevMode || ngDevMode)
          )
            throw (function getMultipleValuesInSingleSelectionError() {
              return Error(
                "Cannot pass multiple values into SelectionModel with single-value mode.",
              );
            })();
        }
        _hasQueuedChanges() {
          return !(
            !this._deselectedToEmit.length && !this._selectedToEmit.length
          );
        }
        _getConcreteValue(inputValue, selection) {
          if (this.compareWith) {
            selection = selection ?? this._selection;
            for (let selectedValue of selection)
              if (this.compareWith(inputValue, selectedValue))
                return selectedValue;
            return inputValue;
          }
          return inputValue;
        }
      }
      class UniqueSelectionDispatcher {
        constructor() {
          this._listeners = [];
        }
        notify(id, name) {
          for (let listener of this._listeners) listener(id, name);
        }
        listen(listener) {
          return (
            this._listeners.push(listener),
            () => {
              this._listeners = this._listeners.filter(
                (registered) => listener !== registered,
              );
            }
          );
        }
        ngOnDestroy() {
          this._listeners = [];
        }
        static #_ = (this.ɵfac = function UniqueSelectionDispatcher_Factory(t) {
          return new (t || UniqueSelectionDispatcher)();
        });
        static #_2 = (this.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__[
          "ɵɵdefineInjectable"
        ]({
          token: UniqueSelectionDispatcher,
          factory: UniqueSelectionDispatcher.ɵfac,
          providedIn: "root",
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](
          UniqueSelectionDispatcher,
          [
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable,
              args: [{ providedIn: "root" }],
            },
          ],
          null,
          null,
        );
    },
    "./node_modules/@angular/cdk/fesm2022/portal.mjs": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        A8: () => ComponentPortal,
        I3: () => CdkPortalOutlet,
        VA: () => TemplatePortal,
        aI: () => DomPortalOutlet,
        bV: () => CdkPortal,
        jc: () => PortalModule,
        lb: () => BasePortalOutlet,
      });
      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/@angular/core/fesm2022/core.mjs",
        ),
        _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./node_modules/@angular/common/fesm2022/common.mjs",
        );
      function throwPortalAlreadyAttachedError() {
        throw Error("Host already has a portal attached");
      }
      class Portal {
        attach(host) {
          return (
            ("undefined" == typeof ngDevMode || ngDevMode) &&
              (null == host &&
                (function throwNullPortalOutletError() {
                  throw Error(
                    "Attempting to attach a portal to a null PortalOutlet",
                  );
                })(),
              host.hasAttached() && throwPortalAlreadyAttachedError()),
            (this._attachedHost = host),
            host.attach(this)
          );
        }
        detach() {
          let host = this._attachedHost;
          null != host
            ? ((this._attachedHost = null), host.detach())
            : ("undefined" == typeof ngDevMode || ngDevMode) &&
              (function throwNoPortalAttachedError() {
                throw Error(
                  "Attempting to detach a portal that is not attached to a host",
                );
              })();
        }
        get isAttached() {
          return null != this._attachedHost;
        }
        setAttachedHost(host) {
          this._attachedHost = host;
        }
      }
      class ComponentPortal extends Portal {
        constructor(
          component,
          viewContainerRef,
          injector,
          componentFactoryResolver,
          projectableNodes,
        ) {
          super(),
            (this.component = component),
            (this.viewContainerRef = viewContainerRef),
            (this.injector = injector),
            (this.componentFactoryResolver = componentFactoryResolver),
            (this.projectableNodes = projectableNodes);
        }
      }
      class TemplatePortal extends Portal {
        constructor(templateRef, viewContainerRef, context, injector) {
          super(),
            (this.templateRef = templateRef),
            (this.viewContainerRef = viewContainerRef),
            (this.context = context),
            (this.injector = injector);
        }
        get origin() {
          return this.templateRef.elementRef;
        }
        attach(host, context = this.context) {
          return (this.context = context), super.attach(host);
        }
        detach() {
          return (this.context = void 0), super.detach();
        }
      }
      class DomPortal extends Portal {
        constructor(element) {
          super(),
            (this.element =
              element instanceof
              _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
                ? element.nativeElement
                : element);
        }
      }
      class BasePortalOutlet {
        constructor() {
          (this._isDisposed = !1), (this.attachDomPortal = null);
        }
        hasAttached() {
          return !!this._attachedPortal;
        }
        attach(portal) {
          return (
            ("undefined" == typeof ngDevMode || ngDevMode) &&
              (portal ||
                (function throwNullPortalError() {
                  throw Error("Must provide a portal to attach");
                })(),
              this.hasAttached() && throwPortalAlreadyAttachedError(),
              this._isDisposed &&
                (function throwPortalOutletAlreadyDisposedError() {
                  throw Error("This PortalOutlet has already been disposed");
                })()),
            portal instanceof ComponentPortal
              ? ((this._attachedPortal = portal),
                this.attachComponentPortal(portal))
              : portal instanceof TemplatePortal
                ? ((this._attachedPortal = portal),
                  this.attachTemplatePortal(portal))
                : this.attachDomPortal && portal instanceof DomPortal
                  ? ((this._attachedPortal = portal),
                    this.attachDomPortal(portal))
                  : void (
                      ("undefined" == typeof ngDevMode || ngDevMode) &&
                      (function throwUnknownPortalTypeError() {
                        throw Error(
                          "Attempting to attach an unknown Portal type. BasePortalOutlet accepts either a ComponentPortal or a TemplatePortal.",
                        );
                      })()
                    )
          );
        }
        detach() {
          this._attachedPortal &&
            (this._attachedPortal.setAttachedHost(null),
            (this._attachedPortal = null)),
            this._invokeDisposeFn();
        }
        dispose() {
          this.hasAttached() && this.detach(),
            this._invokeDisposeFn(),
            (this._isDisposed = !0);
        }
        setDisposeFn(fn) {
          this._disposeFn = fn;
        }
        _invokeDisposeFn() {
          this._disposeFn && (this._disposeFn(), (this._disposeFn = null));
        }
      }
      class DomPortalOutlet extends BasePortalOutlet {
        constructor(
          outletElement,
          _componentFactoryResolver,
          _appRef,
          _defaultInjector,
          _document,
        ) {
          super(),
            (this.outletElement = outletElement),
            (this._componentFactoryResolver = _componentFactoryResolver),
            (this._appRef = _appRef),
            (this._defaultInjector = _defaultInjector),
            (this.attachDomPortal = (portal) => {
              if (
                !this._document &&
                ("undefined" == typeof ngDevMode || ngDevMode)
              )
                throw Error(
                  "Cannot attach DOM portal without _document constructor parameter",
                );
              const element = portal.element;
              if (
                !element.parentNode &&
                ("undefined" == typeof ngDevMode || ngDevMode)
              )
                throw Error(
                  "DOM portal content must be attached to a parent node.",
                );
              const anchorNode = this._document.createComment("dom-portal");
              element.parentNode.insertBefore(anchorNode, element),
                this.outletElement.appendChild(element),
                (this._attachedPortal = portal),
                super.setDisposeFn(() => {
                  anchorNode.parentNode &&
                    anchorNode.parentNode.replaceChild(element, anchorNode);
                });
            }),
            (this._document = _document);
        }
        attachComponentPortal(portal) {
          const resolver =
            portal.componentFactoryResolver || this._componentFactoryResolver;
          if (("undefined" == typeof ngDevMode || ngDevMode) && !resolver)
            throw Error(
              "Cannot attach component portal to outlet without a ComponentFactoryResolver.",
            );
          const componentFactory = resolver.resolveComponentFactory(
            portal.component,
          );
          let componentRef;
          if (portal.viewContainerRef)
            (componentRef = portal.viewContainerRef.createComponent(
              componentFactory,
              portal.viewContainerRef.length,
              portal.injector || portal.viewContainerRef.injector,
              portal.projectableNodes || void 0,
            )),
              this.setDisposeFn(() => componentRef.destroy());
          else {
            if (("undefined" == typeof ngDevMode || ngDevMode) && !this._appRef)
              throw Error(
                "Cannot attach component portal to outlet without an ApplicationRef.",
              );
            (componentRef = componentFactory.create(
              portal.injector ||
                this._defaultInjector ||
                _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector.NULL,
            )),
              this._appRef.attachView(componentRef.hostView),
              this.setDisposeFn(() => {
                this._appRef.viewCount > 0 &&
                  this._appRef.detachView(componentRef.hostView),
                  componentRef.destroy();
              });
          }
          return (
            this.outletElement.appendChild(
              this._getComponentRootNode(componentRef),
            ),
            (this._attachedPortal = portal),
            componentRef
          );
        }
        attachTemplatePortal(portal) {
          let viewContainer = portal.viewContainerRef,
            viewRef = viewContainer.createEmbeddedView(
              portal.templateRef,
              portal.context,
              { injector: portal.injector },
            );
          return (
            viewRef.rootNodes.forEach((rootNode) =>
              this.outletElement.appendChild(rootNode),
            ),
            viewRef.detectChanges(),
            this.setDisposeFn(() => {
              let index = viewContainer.indexOf(viewRef);
              -1 !== index && viewContainer.remove(index);
            }),
            (this._attachedPortal = portal),
            viewRef
          );
        }
        dispose() {
          super.dispose(), this.outletElement.remove();
        }
        _getComponentRootNode(componentRef) {
          return componentRef.hostView.rootNodes[0];
        }
      }
      class CdkPortal extends TemplatePortal {
        constructor(templateRef, viewContainerRef) {
          super(templateRef, viewContainerRef);
        }
        static #_ = (this.ɵfac = function CdkPortal_Factory(t) {
          return new (t || CdkPortal)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef,
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef,
            ),
          );
        });
        static #_2 = (this.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineDirective"
        ]({
          type: CdkPortal,
          selectors: [["", "cdkPortal", ""]],
          exportAs: ["cdkPortal"],
          standalone: !0,
          features: [
            _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵInheritDefinitionFeature"
            ],
          ],
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
          CdkPortal,
          [
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
              args: [
                {
                  selector: "[cdkPortal]",
                  exportAs: "cdkPortal",
                  standalone: !0,
                },
              ],
            },
          ],
          () => [
            { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef },
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef,
            },
          ],
          null,
        );
      class TemplatePortalDirective extends CdkPortal {
        static #_ = (this.ɵfac = (() => {
          let ɵTemplatePortalDirective_BaseFactory;
          return function TemplatePortalDirective_Factory(t) {
            return (
              ɵTemplatePortalDirective_BaseFactory ||
              (ɵTemplatePortalDirective_BaseFactory =
                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵgetInheritedFactory"
                ](TemplatePortalDirective))
            )(t || TemplatePortalDirective);
          };
        })());
        static #_2 = (this.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineDirective"
        ]({
          type: TemplatePortalDirective,
          selectors: [
            ["", "cdk-portal", ""],
            ["", "portal", ""],
          ],
          exportAs: ["cdkPortal"],
          standalone: !0,
          features: [
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
              { provide: CdkPortal, useExisting: TemplatePortalDirective },
            ]),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵInheritDefinitionFeature"
            ],
          ],
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
          TemplatePortalDirective,
          [
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
              args: [
                {
                  selector: "[cdk-portal], [portal]",
                  exportAs: "cdkPortal",
                  providers: [
                    {
                      provide: CdkPortal,
                      useExisting: TemplatePortalDirective,
                    },
                  ],
                  standalone: !0,
                },
              ],
            },
          ],
          null,
          null,
        );
      class CdkPortalOutlet extends BasePortalOutlet {
        constructor(_componentFactoryResolver, _viewContainerRef, _document) {
          super(),
            (this._componentFactoryResolver = _componentFactoryResolver),
            (this._viewContainerRef = _viewContainerRef),
            (this._isInitialized = !1),
            (this.attached =
              new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter()),
            (this.attachDomPortal = (portal) => {
              if (
                !this._document &&
                ("undefined" == typeof ngDevMode || ngDevMode)
              )
                throw Error(
                  "Cannot attach DOM portal without _document constructor parameter",
                );
              const element = portal.element;
              if (
                !element.parentNode &&
                ("undefined" == typeof ngDevMode || ngDevMode)
              )
                throw Error(
                  "DOM portal content must be attached to a parent node.",
                );
              const anchorNode = this._document.createComment("dom-portal");
              portal.setAttachedHost(this),
                element.parentNode.insertBefore(anchorNode, element),
                this._getRootNode().appendChild(element),
                (this._attachedPortal = portal),
                super.setDisposeFn(() => {
                  anchorNode.parentNode &&
                    anchorNode.parentNode.replaceChild(element, anchorNode);
                });
            }),
            (this._document = _document);
        }
        get portal() {
          return this._attachedPortal;
        }
        set portal(portal) {
          (!this.hasAttached() || portal || this._isInitialized) &&
            (this.hasAttached() && super.detach(),
            portal && super.attach(portal),
            (this._attachedPortal = portal || null));
        }
        get attachedRef() {
          return this._attachedRef;
        }
        ngOnInit() {
          this._isInitialized = !0;
        }
        ngOnDestroy() {
          super.dispose(), (this._attachedRef = this._attachedPortal = null);
        }
        attachComponentPortal(portal) {
          portal.setAttachedHost(this);
          const viewContainerRef =
              null != portal.viewContainerRef
                ? portal.viewContainerRef
                : this._viewContainerRef,
            componentFactory = (
              portal.componentFactoryResolver || this._componentFactoryResolver
            ).resolveComponentFactory(portal.component),
            ref = viewContainerRef.createComponent(
              componentFactory,
              viewContainerRef.length,
              portal.injector || viewContainerRef.injector,
              portal.projectableNodes || void 0,
            );
          return (
            viewContainerRef !== this._viewContainerRef &&
              this._getRootNode().appendChild(ref.hostView.rootNodes[0]),
            super.setDisposeFn(() => ref.destroy()),
            (this._attachedPortal = portal),
            (this._attachedRef = ref),
            this.attached.emit(ref),
            ref
          );
        }
        attachTemplatePortal(portal) {
          portal.setAttachedHost(this);
          const viewRef = this._viewContainerRef.createEmbeddedView(
            portal.templateRef,
            portal.context,
            { injector: portal.injector },
          );
          return (
            super.setDisposeFn(() => this._viewContainerRef.clear()),
            (this._attachedPortal = portal),
            (this._attachedRef = viewRef),
            this.attached.emit(viewRef),
            viewRef
          );
        }
        _getRootNode() {
          const nativeElement = this._viewContainerRef.element.nativeElement;
          return nativeElement.nodeType === nativeElement.ELEMENT_NODE
            ? nativeElement
            : nativeElement.parentNode;
        }
        static #_ = (this.ɵfac = function CdkPortalOutlet_Factory(t) {
          return new (t || CdkPortalOutlet)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver,
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef,
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT,
            ),
          );
        });
        static #_2 = (this.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineDirective"
        ]({
          type: CdkPortalOutlet,
          selectors: [["", "cdkPortalOutlet", ""]],
          inputs: {
            portal: [
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None,
              "cdkPortalOutlet",
              "portal",
            ],
          },
          outputs: { attached: "attached" },
          exportAs: ["cdkPortalOutlet"],
          standalone: !0,
          features: [
            _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵInheritDefinitionFeature"
            ],
          ],
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
          CdkPortalOutlet,
          [
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
              args: [
                {
                  selector: "[cdkPortalOutlet]",
                  exportAs: "cdkPortalOutlet",
                  standalone: !0,
                },
              ],
            },
          ],
          () => [
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver,
            },
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef,
            },
            {
              type: void 0,
              decorators: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                  args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT],
                },
              ],
            },
          ],
          {
            portal: [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
                args: ["cdkPortalOutlet"],
              },
            ],
            attached: [
              { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output },
            ],
          },
        );
      class PortalHostDirective extends CdkPortalOutlet {
        static #_ = (this.ɵfac = (() => {
          let ɵPortalHostDirective_BaseFactory;
          return function PortalHostDirective_Factory(t) {
            return (
              ɵPortalHostDirective_BaseFactory ||
              (ɵPortalHostDirective_BaseFactory =
                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵgetInheritedFactory"
                ](PortalHostDirective))
            )(t || PortalHostDirective);
          };
        })());
        static #_2 = (this.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineDirective"
        ]({
          type: PortalHostDirective,
          selectors: [
            ["", "cdkPortalHost", ""],
            ["", "portalHost", ""],
          ],
          inputs: {
            portal: [
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None,
              "cdkPortalHost",
              "portal",
            ],
          },
          exportAs: ["cdkPortalHost"],
          standalone: !0,
          features: [
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
              { provide: CdkPortalOutlet, useExisting: PortalHostDirective },
            ]),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵInheritDefinitionFeature"
            ],
          ],
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
          PortalHostDirective,
          [
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
              args: [
                {
                  selector: "[cdkPortalHost], [portalHost]",
                  exportAs: "cdkPortalHost",
                  inputs: [{ name: "portal", alias: "cdkPortalHost" }],
                  providers: [
                    {
                      provide: CdkPortalOutlet,
                      useExisting: PortalHostDirective,
                    },
                  ],
                  standalone: !0,
                },
              ],
            },
          ],
          null,
          null,
        );
      class PortalModule {
        static #_ = (this.ɵfac = function PortalModule_Factory(t) {
          return new (t || PortalModule)();
        });
        static #_2 = (this.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineNgModule"
        ]({
          type: PortalModule,
          imports: [
            CdkPortal,
            CdkPortalOutlet,
            TemplatePortalDirective,
            PortalHostDirective,
          ],
          exports: [
            CdkPortal,
            CdkPortalOutlet,
            TemplatePortalDirective,
            PortalHostDirective,
          ],
        }));
        static #_3 = (this.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineInjector"
        ]({}));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
          PortalModule,
          [
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
              args: [
                {
                  imports: [
                    CdkPortal,
                    CdkPortalOutlet,
                    TemplatePortalDirective,
                    PortalHostDirective,
                  ],
                  exports: [
                    CdkPortal,
                    CdkPortalOutlet,
                    TemplatePortalDirective,
                    PortalHostDirective,
                  ],
                },
              ],
            },
          ],
          null,
          null,
        );
    },
    "./node_modules/@angular/cdk/fesm2022/scrolling.mjs": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        uv: () => CdkScrollable,
        Gj: () => CdkScrollableModule,
        R: () => ScrollDispatcher,
        E9: () => ScrollingModule,
        Xj: () => ViewportRuler,
      });
      var coercion = __webpack_require__(
          "./node_modules/@angular/cdk/fesm2022/coercion.mjs",
        ),
        core = __webpack_require__(
          "./node_modules/@angular/core/fesm2022/core.mjs",
        ),
        Subject = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/Subject.js",
        ),
        of = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/observable/of.js",
        ),
        Observable = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/Observable.js",
        ),
        fromEvent = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js",
        ),
        animationFrame = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/scheduler/animationFrame.js",
        ),
        asap = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/scheduler/asap.js",
        ),
        Subscription = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/Subscription.js",
        ),
        isObservable = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/util/isObservable.js",
        ),
        distinctUntilChanged = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/distinctUntilChanged.js",
        ),
        auditTime = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/auditTime.js",
        ),
        filter = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/filter.js",
        ),
        takeUntil = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js",
        ),
        startWith = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/startWith.js",
        ),
        lift = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/util/lift.js",
        ),
        OperatorSubscriber = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js",
        );
      var switchMap = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/switchMap.js",
        ),
        shareReplay = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/shareReplay.js",
        ),
        platform = __webpack_require__(
          "./node_modules/@angular/cdk/fesm2022/platform.mjs",
        ),
        common = __webpack_require__(
          "./node_modules/@angular/common/fesm2022/common.mjs",
        ),
        bidi = __webpack_require__(
          "./node_modules/@angular/cdk/fesm2022/bidi.mjs",
        ),
        collections = __webpack_require__(
          "./node_modules/@angular/cdk/fesm2022/collections.mjs",
        );
      const _c0 = ["contentWrapper"],
        _c1 = ["*"],
        VIRTUAL_SCROLL_STRATEGY = new core.InjectionToken(
          "VIRTUAL_SCROLL_STRATEGY",
        );
      class FixedSizeVirtualScrollStrategy {
        constructor(itemSize, minBufferPx, maxBufferPx) {
          (this._scrolledIndexChange = new Subject.B()),
            (this.scrolledIndexChange = this._scrolledIndexChange.pipe(
              (0, distinctUntilChanged.F)(),
            )),
            (this._viewport = null),
            (this._itemSize = itemSize),
            (this._minBufferPx = minBufferPx),
            (this._maxBufferPx = maxBufferPx);
        }
        attach(viewport) {
          (this._viewport = viewport),
            this._updateTotalContentSize(),
            this._updateRenderedRange();
        }
        detach() {
          this._scrolledIndexChange.complete(), (this._viewport = null);
        }
        updateItemAndBufferSize(itemSize, minBufferPx, maxBufferPx) {
          if (
            maxBufferPx < minBufferPx &&
            ("undefined" == typeof ngDevMode || ngDevMode)
          )
            throw Error(
              "CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx",
            );
          (this._itemSize = itemSize),
            (this._minBufferPx = minBufferPx),
            (this._maxBufferPx = maxBufferPx),
            this._updateTotalContentSize(),
            this._updateRenderedRange();
        }
        onContentScrolled() {
          this._updateRenderedRange();
        }
        onDataLengthChanged() {
          this._updateTotalContentSize(), this._updateRenderedRange();
        }
        onContentRendered() {}
        onRenderedOffsetChanged() {}
        scrollToIndex(index, behavior) {
          this._viewport &&
            this._viewport.scrollToOffset(index * this._itemSize, behavior);
        }
        _updateTotalContentSize() {
          this._viewport &&
            this._viewport.setTotalContentSize(
              this._viewport.getDataLength() * this._itemSize,
            );
        }
        _updateRenderedRange() {
          if (!this._viewport) return;
          const renderedRange = this._viewport.getRenderedRange(),
            newRange = { start: renderedRange.start, end: renderedRange.end },
            viewportSize = this._viewport.getViewportSize(),
            dataLength = this._viewport.getDataLength();
          let scrollOffset = this._viewport.measureScrollOffset(),
            firstVisibleIndex =
              this._itemSize > 0 ? scrollOffset / this._itemSize : 0;
          if (newRange.end > dataLength) {
            const maxVisibleItems = Math.ceil(viewportSize / this._itemSize),
              newVisibleIndex = Math.max(
                0,
                Math.min(firstVisibleIndex, dataLength - maxVisibleItems),
              );
            firstVisibleIndex != newVisibleIndex &&
              ((firstVisibleIndex = newVisibleIndex),
              (scrollOffset = newVisibleIndex * this._itemSize),
              (newRange.start = Math.floor(firstVisibleIndex))),
              (newRange.end = Math.max(
                0,
                Math.min(dataLength, newRange.start + maxVisibleItems),
              ));
          }
          const startBuffer = scrollOffset - newRange.start * this._itemSize;
          if (startBuffer < this._minBufferPx && 0 != newRange.start) {
            const expandStart = Math.ceil(
              (this._maxBufferPx - startBuffer) / this._itemSize,
            );
            (newRange.start = Math.max(0, newRange.start - expandStart)),
              (newRange.end = Math.min(
                dataLength,
                Math.ceil(
                  firstVisibleIndex +
                    (viewportSize + this._minBufferPx) / this._itemSize,
                ),
              ));
          } else {
            const endBuffer =
              newRange.end * this._itemSize - (scrollOffset + viewportSize);
            if (endBuffer < this._minBufferPx && newRange.end != dataLength) {
              const expandEnd = Math.ceil(
                (this._maxBufferPx - endBuffer) / this._itemSize,
              );
              expandEnd > 0 &&
                ((newRange.end = Math.min(
                  dataLength,
                  newRange.end + expandEnd,
                )),
                (newRange.start = Math.max(
                  0,
                  Math.floor(
                    firstVisibleIndex - this._minBufferPx / this._itemSize,
                  ),
                )));
            }
          }
          this._viewport.setRenderedRange(newRange),
            this._viewport.setRenderedContentOffset(
              this._itemSize * newRange.start,
            ),
            this._scrolledIndexChange.next(Math.floor(firstVisibleIndex));
        }
      }
      function _fixedSizeVirtualScrollStrategyFactory(fixedSizeDir) {
        return fixedSizeDir._scrollStrategy;
      }
      class CdkFixedSizeVirtualScroll {
        constructor() {
          (this._itemSize = 20),
            (this._minBufferPx = 100),
            (this._maxBufferPx = 200),
            (this._scrollStrategy = new FixedSizeVirtualScrollStrategy(
              this.itemSize,
              this.minBufferPx,
              this.maxBufferPx,
            ));
        }
        get itemSize() {
          return this._itemSize;
        }
        set itemSize(value) {
          this._itemSize = (0, coercion.OE)(value);
        }
        get minBufferPx() {
          return this._minBufferPx;
        }
        set minBufferPx(value) {
          this._minBufferPx = (0, coercion.OE)(value);
        }
        get maxBufferPx() {
          return this._maxBufferPx;
        }
        set maxBufferPx(value) {
          this._maxBufferPx = (0, coercion.OE)(value);
        }
        ngOnChanges() {
          this._scrollStrategy.updateItemAndBufferSize(
            this.itemSize,
            this.minBufferPx,
            this.maxBufferPx,
          );
        }
        static #_ = (this.ɵfac = function CdkFixedSizeVirtualScroll_Factory(t) {
          return new (t || CdkFixedSizeVirtualScroll)();
        });
        static #_2 = (this.ɵdir = core["ɵɵdefineDirective"]({
          type: CdkFixedSizeVirtualScroll,
          selectors: [["cdk-virtual-scroll-viewport", "itemSize", ""]],
          inputs: {
            itemSize: "itemSize",
            minBufferPx: "minBufferPx",
            maxBufferPx: "maxBufferPx",
          },
          standalone: !0,
          features: [
            core["ɵɵProvidersFeature"]([
              {
                provide: VIRTUAL_SCROLL_STRATEGY,
                useFactory: _fixedSizeVirtualScrollStrategyFactory,
                deps: [(0, core.forwardRef)(() => CdkFixedSizeVirtualScroll)],
              },
            ]),
            core["ɵɵNgOnChangesFeature"],
          ],
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          CdkFixedSizeVirtualScroll,
          [
            {
              type: core.Directive,
              args: [
                {
                  selector: "cdk-virtual-scroll-viewport[itemSize]",
                  standalone: !0,
                  providers: [
                    {
                      provide: VIRTUAL_SCROLL_STRATEGY,
                      useFactory: _fixedSizeVirtualScrollStrategyFactory,
                      deps: [
                        (0, core.forwardRef)(() => CdkFixedSizeVirtualScroll),
                      ],
                    },
                  ],
                },
              ],
            },
          ],
          null,
          {
            itemSize: [{ type: core.Input }],
            minBufferPx: [{ type: core.Input }],
            maxBufferPx: [{ type: core.Input }],
          },
        );
      class ScrollDispatcher {
        constructor(_ngZone, _platform, document) {
          (this._ngZone = _ngZone),
            (this._platform = _platform),
            (this._scrolled = new Subject.B()),
            (this._globalSubscription = null),
            (this._scrolledCount = 0),
            (this.scrollContainers = new Map()),
            (this._document = document);
        }
        register(scrollable) {
          this.scrollContainers.has(scrollable) ||
            this.scrollContainers.set(
              scrollable,
              scrollable
                .elementScrolled()
                .subscribe(() => this._scrolled.next(scrollable)),
            );
        }
        deregister(scrollable) {
          const scrollableReference = this.scrollContainers.get(scrollable);
          scrollableReference &&
            (scrollableReference.unsubscribe(),
            this.scrollContainers.delete(scrollable));
        }
        scrolled(auditTimeInMs = 20) {
          return this._platform.isBrowser
            ? new Observable.c((observer) => {
                this._globalSubscription || this._addGlobalListener();
                const subscription =
                  auditTimeInMs > 0
                    ? this._scrolled
                        .pipe((0, auditTime.Z)(auditTimeInMs))
                        .subscribe(observer)
                    : this._scrolled.subscribe(observer);
                return (
                  this._scrolledCount++,
                  () => {
                    subscription.unsubscribe(),
                      this._scrolledCount--,
                      this._scrolledCount || this._removeGlobalListener();
                  }
                );
              })
            : (0, of.of)();
        }
        ngOnDestroy() {
          this._removeGlobalListener(),
            this.scrollContainers.forEach((_, container) =>
              this.deregister(container),
            ),
            this._scrolled.complete();
        }
        ancestorScrolled(elementOrElementRef, auditTimeInMs) {
          const ancestors =
            this.getAncestorScrollContainers(elementOrElementRef);
          return this.scrolled(auditTimeInMs).pipe(
            (0, filter.p)(
              (target) => !target || ancestors.indexOf(target) > -1,
            ),
          );
        }
        getAncestorScrollContainers(elementOrElementRef) {
          const scrollingContainers = [];
          return (
            this.scrollContainers.forEach((_subscription, scrollable) => {
              this._scrollableContainsElement(
                scrollable,
                elementOrElementRef,
              ) && scrollingContainers.push(scrollable);
            }),
            scrollingContainers
          );
        }
        _getWindow() {
          return this._document.defaultView || window;
        }
        _scrollableContainsElement(scrollable, elementOrElementRef) {
          let element = (0, coercion.i8)(elementOrElementRef),
            scrollableElement = scrollable.getElementRef().nativeElement;
          do {
            if (element == scrollableElement) return !0;
          } while ((element = element.parentElement));
          return !1;
        }
        _addGlobalListener() {
          this._globalSubscription = this._ngZone.runOutsideAngular(() => {
            const window = this._getWindow();
            return (0, fromEvent.R)(window.document, "scroll").subscribe(() =>
              this._scrolled.next(),
            );
          });
        }
        _removeGlobalListener() {
          this._globalSubscription &&
            (this._globalSubscription.unsubscribe(),
            (this._globalSubscription = null));
        }
        static #_ = (this.ɵfac = function ScrollDispatcher_Factory(t) {
          return new (t || ScrollDispatcher)(
            core["ɵɵinject"](core.NgZone),
            core["ɵɵinject"](platform.OD),
            core["ɵɵinject"](common.DOCUMENT, 8),
          );
        });
        static #_2 = (this.ɵprov = core["ɵɵdefineInjectable"]({
          token: ScrollDispatcher,
          factory: ScrollDispatcher.ɵfac,
          providedIn: "root",
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          ScrollDispatcher,
          [{ type: core.Injectable, args: [{ providedIn: "root" }] }],
          () => [
            { type: core.NgZone },
            { type: platform.OD },
            {
              type: void 0,
              decorators: [
                { type: core.Optional },
                { type: core.Inject, args: [common.DOCUMENT] },
              ],
            },
          ],
          null,
        );
      class CdkScrollable {
        constructor(elementRef, scrollDispatcher, ngZone, dir) {
          (this.elementRef = elementRef),
            (this.scrollDispatcher = scrollDispatcher),
            (this.ngZone = ngZone),
            (this.dir = dir),
            (this._destroyed = new Subject.B()),
            (this._elementScrolled = new Observable.c((observer) =>
              this.ngZone.runOutsideAngular(() =>
                (0, fromEvent.R)(this.elementRef.nativeElement, "scroll")
                  .pipe((0, takeUntil.Q)(this._destroyed))
                  .subscribe(observer),
              ),
            ));
        }
        ngOnInit() {
          this.scrollDispatcher.register(this);
        }
        ngOnDestroy() {
          this.scrollDispatcher.deregister(this),
            this._destroyed.next(),
            this._destroyed.complete();
        }
        elementScrolled() {
          return this._elementScrolled;
        }
        getElementRef() {
          return this.elementRef;
        }
        scrollTo(options) {
          const el = this.elementRef.nativeElement,
            isRtl = this.dir && "rtl" == this.dir.value;
          null == options.left &&
            (options.left = isRtl ? options.end : options.start),
            null == options.right &&
              (options.right = isRtl ? options.start : options.end),
            null != options.bottom &&
              (options.top =
                el.scrollHeight - el.clientHeight - options.bottom),
            isRtl && (0, platform.BD)() != platform.r5.NORMAL
              ? (null != options.left &&
                  (options.right =
                    el.scrollWidth - el.clientWidth - options.left),
                (0, platform.BD)() == platform.r5.INVERTED
                  ? (options.left = options.right)
                  : (0, platform.BD)() == platform.r5.NEGATED &&
                    (options.left = options.right
                      ? -options.right
                      : options.right))
              : null != options.right &&
                (options.left =
                  el.scrollWidth - el.clientWidth - options.right),
            this._applyScrollToOptions(options);
        }
        _applyScrollToOptions(options) {
          const el = this.elementRef.nativeElement;
          (0, platform.CZ)()
            ? el.scrollTo(options)
            : (null != options.top && (el.scrollTop = options.top),
              null != options.left && (el.scrollLeft = options.left));
        }
        measureScrollOffset(from) {
          const el = this.elementRef.nativeElement;
          if ("top" == from) return el.scrollTop;
          if ("bottom" == from)
            return el.scrollHeight - el.clientHeight - el.scrollTop;
          const isRtl = this.dir && "rtl" == this.dir.value;
          return (
            "start" == from
              ? (from = isRtl ? "right" : "left")
              : "end" == from && (from = isRtl ? "left" : "right"),
            isRtl && (0, platform.BD)() == platform.r5.INVERTED
              ? "left" == from
                ? el.scrollWidth - el.clientWidth - el.scrollLeft
                : el.scrollLeft
              : isRtl && (0, platform.BD)() == platform.r5.NEGATED
                ? "left" == from
                  ? el.scrollLeft + el.scrollWidth - el.clientWidth
                  : -el.scrollLeft
                : "left" == from
                  ? el.scrollLeft
                  : el.scrollWidth - el.clientWidth - el.scrollLeft
          );
        }
        static #_ = (this.ɵfac = function CdkScrollable_Factory(t) {
          return new (t || CdkScrollable)(
            core["ɵɵdirectiveInject"](core.ElementRef),
            core["ɵɵdirectiveInject"](ScrollDispatcher),
            core["ɵɵdirectiveInject"](core.NgZone),
            core["ɵɵdirectiveInject"](bidi.dS, 8),
          );
        });
        static #_2 = (this.ɵdir = core["ɵɵdefineDirective"]({
          type: CdkScrollable,
          selectors: [
            ["", "cdk-scrollable", ""],
            ["", "cdkScrollable", ""],
          ],
          standalone: !0,
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          CdkScrollable,
          [
            {
              type: core.Directive,
              args: [
                {
                  selector: "[cdk-scrollable], [cdkScrollable]",
                  standalone: !0,
                },
              ],
            },
          ],
          () => [
            { type: core.ElementRef },
            { type: ScrollDispatcher },
            { type: core.NgZone },
            { type: bidi.dS, decorators: [{ type: core.Optional }] },
          ],
          null,
        );
      class ViewportRuler {
        constructor(_platform, ngZone, document) {
          (this._platform = _platform),
            (this._change = new Subject.B()),
            (this._changeListener = (event) => {
              this._change.next(event);
            }),
            (this._document = document),
            ngZone.runOutsideAngular(() => {
              if (_platform.isBrowser) {
                const window = this._getWindow();
                window.addEventListener("resize", this._changeListener),
                  window.addEventListener(
                    "orientationchange",
                    this._changeListener,
                  );
              }
              this.change().subscribe(() => (this._viewportSize = null));
            });
        }
        ngOnDestroy() {
          if (this._platform.isBrowser) {
            const window = this._getWindow();
            window.removeEventListener("resize", this._changeListener),
              window.removeEventListener(
                "orientationchange",
                this._changeListener,
              );
          }
          this._change.complete();
        }
        getViewportSize() {
          this._viewportSize || this._updateViewportSize();
          const output = {
            width: this._viewportSize.width,
            height: this._viewportSize.height,
          };
          return (
            this._platform.isBrowser || (this._viewportSize = null), output
          );
        }
        getViewportRect() {
          const scrollPosition = this.getViewportScrollPosition(),
            { width, height } = this.getViewportSize();
          return {
            top: scrollPosition.top,
            left: scrollPosition.left,
            bottom: scrollPosition.top + height,
            right: scrollPosition.left + width,
            height,
            width,
          };
        }
        getViewportScrollPosition() {
          if (!this._platform.isBrowser) return { top: 0, left: 0 };
          const document = this._document,
            window = this._getWindow(),
            documentElement = document.documentElement,
            documentRect = documentElement.getBoundingClientRect();
          return {
            top:
              -documentRect.top ||
              document.body.scrollTop ||
              window.scrollY ||
              documentElement.scrollTop ||
              0,
            left:
              -documentRect.left ||
              document.body.scrollLeft ||
              window.scrollX ||
              documentElement.scrollLeft ||
              0,
          };
        }
        change(throttleTime = 20) {
          return throttleTime > 0
            ? this._change.pipe((0, auditTime.Z)(throttleTime))
            : this._change;
        }
        _getWindow() {
          return this._document.defaultView || window;
        }
        _updateViewportSize() {
          const window = this._getWindow();
          this._viewportSize = this._platform.isBrowser
            ? { width: window.innerWidth, height: window.innerHeight }
            : { width: 0, height: 0 };
        }
        static #_ = (this.ɵfac = function ViewportRuler_Factory(t) {
          return new (t || ViewportRuler)(
            core["ɵɵinject"](platform.OD),
            core["ɵɵinject"](core.NgZone),
            core["ɵɵinject"](common.DOCUMENT, 8),
          );
        });
        static #_2 = (this.ɵprov = core["ɵɵdefineInjectable"]({
          token: ViewportRuler,
          factory: ViewportRuler.ɵfac,
          providedIn: "root",
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          ViewportRuler,
          [{ type: core.Injectable, args: [{ providedIn: "root" }] }],
          () => [
            { type: platform.OD },
            { type: core.NgZone },
            {
              type: void 0,
              decorators: [
                { type: core.Optional },
                { type: core.Inject, args: [common.DOCUMENT] },
              ],
            },
          ],
          null,
        );
      const VIRTUAL_SCROLLABLE = new core.InjectionToken("VIRTUAL_SCROLLABLE");
      class CdkVirtualScrollable extends CdkScrollable {
        constructor(elementRef, scrollDispatcher, ngZone, dir) {
          super(elementRef, scrollDispatcher, ngZone, dir);
        }
        measureViewportSize(orientation) {
          const viewportEl = this.elementRef.nativeElement;
          return "horizontal" === orientation
            ? viewportEl.clientWidth
            : viewportEl.clientHeight;
        }
        static #_ = (this.ɵfac = function CdkVirtualScrollable_Factory(t) {
          return new (t || CdkVirtualScrollable)(
            core["ɵɵdirectiveInject"](core.ElementRef),
            core["ɵɵdirectiveInject"](ScrollDispatcher),
            core["ɵɵdirectiveInject"](core.NgZone),
            core["ɵɵdirectiveInject"](bidi.dS, 8),
          );
        });
        static #_2 = (this.ɵdir = core["ɵɵdefineDirective"]({
          type: CdkVirtualScrollable,
          features: [core["ɵɵInheritDefinitionFeature"]],
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          CdkVirtualScrollable,
          [{ type: core.Directive }],
          () => [
            { type: core.ElementRef },
            { type: ScrollDispatcher },
            { type: core.NgZone },
            { type: bidi.dS, decorators: [{ type: core.Optional }] },
          ],
          null,
        );
      const SCROLL_SCHEDULER =
        "undefined" != typeof requestAnimationFrame ? animationFrame.X : asap.$;
      class CdkVirtualScrollViewport extends CdkVirtualScrollable {
        get orientation() {
          return this._orientation;
        }
        set orientation(orientation) {
          this._orientation !== orientation &&
            ((this._orientation = orientation), this._calculateSpacerSize());
        }
        constructor(
          elementRef,
          _changeDetectorRef,
          ngZone,
          _scrollStrategy,
          dir,
          scrollDispatcher,
          viewportRuler,
          scrollable,
        ) {
          if (
            (super(elementRef, scrollDispatcher, ngZone, dir),
            (this.elementRef = elementRef),
            (this._changeDetectorRef = _changeDetectorRef),
            (this._scrollStrategy = _scrollStrategy),
            (this.scrollable = scrollable),
            (this._platform = (0, core.inject)(platform.OD)),
            (this._detachedSubject = new Subject.B()),
            (this._renderedRangeSubject = new Subject.B()),
            (this._orientation = "vertical"),
            (this.appendOnly = !1),
            (this.scrolledIndexChange = new Observable.c((observer) =>
              this._scrollStrategy.scrolledIndexChange.subscribe((index) =>
                Promise.resolve().then(() =>
                  this.ngZone.run(() => observer.next(index)),
                ),
              ),
            )),
            (this.renderedRangeStream = this._renderedRangeSubject),
            (this._totalContentSize = 0),
            (this._totalContentWidth = ""),
            (this._totalContentHeight = ""),
            (this._renderedRange = { start: 0, end: 0 }),
            (this._dataLength = 0),
            (this._viewportSize = 0),
            (this._renderedContentOffset = 0),
            (this._renderedContentOffsetNeedsRewrite = !1),
            (this._isChangeDetectionPending = !1),
            (this._runAfterChangeDetection = []),
            (this._viewportChanges = Subscription.yU.EMPTY),
            !_scrollStrategy && ("undefined" == typeof ngDevMode || ngDevMode))
          )
            throw Error(
              'Error: cdk-virtual-scroll-viewport requires the "itemSize" property to be set.',
            );
          (this._viewportChanges = viewportRuler.change().subscribe(() => {
            this.checkViewportSize();
          })),
            this.scrollable ||
              (this.elementRef.nativeElement.classList.add(
                "cdk-virtual-scrollable",
              ),
              (this.scrollable = this));
        }
        ngOnInit() {
          this._platform.isBrowser &&
            (this.scrollable === this && super.ngOnInit(),
            this.ngZone.runOutsideAngular(() =>
              Promise.resolve().then(() => {
                this._measureViewportSize(),
                  this._scrollStrategy.attach(this),
                  this.scrollable
                    .elementScrolled()
                    .pipe(
                      (0, startWith.Z)(null),
                      (0, auditTime.Z)(0, SCROLL_SCHEDULER),
                      (0, takeUntil.Q)(this._destroyed),
                    )
                    .subscribe(() => this._scrollStrategy.onContentScrolled()),
                  this._markChangeDetectionNeeded();
              }),
            ));
        }
        ngOnDestroy() {
          this.detach(),
            this._scrollStrategy.detach(),
            this._renderedRangeSubject.complete(),
            this._detachedSubject.complete(),
            this._viewportChanges.unsubscribe(),
            super.ngOnDestroy();
        }
        attach(forOf) {
          if (this._forOf && ("undefined" == typeof ngDevMode || ngDevMode))
            throw Error("CdkVirtualScrollViewport is already attached.");
          this.ngZone.runOutsideAngular(() => {
            (this._forOf = forOf),
              this._forOf.dataStream
                .pipe((0, takeUntil.Q)(this._detachedSubject))
                .subscribe((data) => {
                  const newLength = data.length;
                  newLength !== this._dataLength &&
                    ((this._dataLength = newLength),
                    this._scrollStrategy.onDataLengthChanged()),
                    this._doChangeDetection();
                });
          });
        }
        detach() {
          (this._forOf = null), this._detachedSubject.next();
        }
        getDataLength() {
          return this._dataLength;
        }
        getViewportSize() {
          return this._viewportSize;
        }
        getRenderedRange() {
          return this._renderedRange;
        }
        measureBoundingClientRectWithScrollOffset(from) {
          return this.getElementRef().nativeElement.getBoundingClientRect()[
            from
          ];
        }
        setTotalContentSize(size) {
          this._totalContentSize !== size &&
            ((this._totalContentSize = size),
            this._calculateSpacerSize(),
            this._markChangeDetectionNeeded());
        }
        setRenderedRange(range) {
          (function rangesEqual(r1, r2) {
            return r1.start == r2.start && r1.end == r2.end;
          })(this._renderedRange, range) ||
            (this.appendOnly &&
              (range = {
                start: 0,
                end: Math.max(this._renderedRange.end, range.end),
              }),
            this._renderedRangeSubject.next((this._renderedRange = range)),
            this._markChangeDetectionNeeded(() =>
              this._scrollStrategy.onContentRendered(),
            ));
        }
        getOffsetToRenderedContentStart() {
          return this._renderedContentOffsetNeedsRewrite
            ? null
            : this._renderedContentOffset;
        }
        setRenderedContentOffset(offset, to = "to-start") {
          offset = this.appendOnly && "to-start" === to ? 0 : offset;
          const isRtl = this.dir && "rtl" == this.dir.value,
            isHorizontal = "horizontal" == this.orientation,
            axis = isHorizontal ? "X" : "Y";
          let transform = `translate${axis}(${Number((isHorizontal && isRtl ? -1 : 1) * offset)}px)`;
          (this._renderedContentOffset = offset),
            "to-end" === to &&
              ((transform += ` translate${axis}(-100%)`),
              (this._renderedContentOffsetNeedsRewrite = !0)),
            this._renderedContentTransform != transform &&
              ((this._renderedContentTransform = transform),
              this._markChangeDetectionNeeded(() => {
                this._renderedContentOffsetNeedsRewrite
                  ? ((this._renderedContentOffset -=
                      this.measureRenderedContentSize()),
                    (this._renderedContentOffsetNeedsRewrite = !1),
                    this.setRenderedContentOffset(this._renderedContentOffset))
                  : this._scrollStrategy.onRenderedOffsetChanged();
              }));
        }
        scrollToOffset(offset, behavior = "auto") {
          const options = { behavior };
          "horizontal" === this.orientation
            ? (options.start = offset)
            : (options.top = offset),
            this.scrollable.scrollTo(options);
        }
        scrollToIndex(index, behavior = "auto") {
          this._scrollStrategy.scrollToIndex(index, behavior);
        }
        measureScrollOffset(from) {
          let measureScrollOffset;
          return (
            (measureScrollOffset =
              this.scrollable == this
                ? (_from) => super.measureScrollOffset(_from)
                : (_from) => this.scrollable.measureScrollOffset(_from)),
            Math.max(
              0,
              measureScrollOffset(
                from ?? ("horizontal" === this.orientation ? "start" : "top"),
              ) - this.measureViewportOffset(),
            )
          );
        }
        measureViewportOffset(from) {
          let fromRect;
          const isRtl = "rtl" == this.dir?.value;
          fromRect =
            "start" == from
              ? isRtl
                ? "right"
                : "left"
              : "end" == from
                ? isRtl
                  ? "left"
                  : "right"
                : from || ("horizontal" === this.orientation ? "left" : "top");
          const scrollerClientRect =
            this.scrollable.measureBoundingClientRectWithScrollOffset(fromRect);
          return (
            this.elementRef.nativeElement.getBoundingClientRect()[fromRect] -
            scrollerClientRect
          );
        }
        measureRenderedContentSize() {
          const contentEl = this._contentWrapper.nativeElement;
          return "horizontal" === this.orientation
            ? contentEl.offsetWidth
            : contentEl.offsetHeight;
        }
        measureRangeSize(range) {
          return this._forOf
            ? this._forOf.measureRangeSize(range, this.orientation)
            : 0;
        }
        checkViewportSize() {
          this._measureViewportSize(),
            this._scrollStrategy.onDataLengthChanged();
        }
        _measureViewportSize() {
          this._viewportSize = this.scrollable.measureViewportSize(
            this.orientation,
          );
        }
        _markChangeDetectionNeeded(runAfter) {
          runAfter && this._runAfterChangeDetection.push(runAfter),
            this._isChangeDetectionPending ||
              ((this._isChangeDetectionPending = !0),
              this.ngZone.runOutsideAngular(() =>
                Promise.resolve().then(() => {
                  this._doChangeDetection();
                }),
              ));
        }
        _doChangeDetection() {
          (this._isChangeDetectionPending = !1),
            (this._contentWrapper.nativeElement.style.transform =
              this._renderedContentTransform),
            this.ngZone.run(() => this._changeDetectorRef.markForCheck());
          const runAfterChangeDetection = this._runAfterChangeDetection;
          this._runAfterChangeDetection = [];
          for (const fn of runAfterChangeDetection) fn();
        }
        _calculateSpacerSize() {
          (this._totalContentHeight =
            "horizontal" === this.orientation
              ? ""
              : `${this._totalContentSize}px`),
            (this._totalContentWidth =
              "horizontal" === this.orientation
                ? `${this._totalContentSize}px`
                : "");
        }
        static #_ = (this.ɵfac = function CdkVirtualScrollViewport_Factory(t) {
          return new (t || CdkVirtualScrollViewport)(
            core["ɵɵdirectiveInject"](core.ElementRef),
            core["ɵɵdirectiveInject"](core.ChangeDetectorRef),
            core["ɵɵdirectiveInject"](core.NgZone),
            core["ɵɵdirectiveInject"](VIRTUAL_SCROLL_STRATEGY, 8),
            core["ɵɵdirectiveInject"](bidi.dS, 8),
            core["ɵɵdirectiveInject"](ScrollDispatcher),
            core["ɵɵdirectiveInject"](ViewportRuler),
            core["ɵɵdirectiveInject"](VIRTUAL_SCROLLABLE, 8),
          );
        });
        static #_2 = (this.ɵcmp = core["ɵɵdefineComponent"]({
          type: CdkVirtualScrollViewport,
          selectors: [["cdk-virtual-scroll-viewport"]],
          viewQuery: function CdkVirtualScrollViewport_Query(rf, ctx) {
            if ((1 & rf && core["ɵɵviewQuery"](_c0, 7), 2 & rf)) {
              let _t;
              core["ɵɵqueryRefresh"]((_t = core["ɵɵloadQuery"]())) &&
                (ctx._contentWrapper = _t.first);
            }
          },
          hostAttrs: [1, "cdk-virtual-scroll-viewport"],
          hostVars: 4,
          hostBindings: function CdkVirtualScrollViewport_HostBindings(
            rf,
            ctx,
          ) {
            2 & rf &&
              core["ɵɵclassProp"](
                "cdk-virtual-scroll-orientation-horizontal",
                "horizontal" === ctx.orientation,
              )(
                "cdk-virtual-scroll-orientation-vertical",
                "horizontal" !== ctx.orientation,
              );
          },
          inputs: {
            orientation: "orientation",
            appendOnly: [
              core["ɵɵInputFlags"].HasDecoratorInputTransform,
              "appendOnly",
              "appendOnly",
              core.booleanAttribute,
            ],
          },
          outputs: { scrolledIndexChange: "scrolledIndexChange" },
          standalone: !0,
          features: [
            core["ɵɵProvidersFeature"]([
              {
                provide: CdkScrollable,
                useFactory: (virtualScrollable, viewport) =>
                  virtualScrollable || viewport,
                deps: [
                  [new core.Optional(), new core.Inject(VIRTUAL_SCROLLABLE)],
                  CdkVirtualScrollViewport,
                ],
              },
            ]),
            core["ɵɵInputTransformsFeature"],
            core["ɵɵInheritDefinitionFeature"],
            core["ɵɵStandaloneFeature"],
          ],
          ngContentSelectors: _c1,
          decls: 4,
          vars: 4,
          consts: [
            ["contentWrapper", ""],
            [1, "cdk-virtual-scroll-content-wrapper"],
            [1, "cdk-virtual-scroll-spacer"],
          ],
          template: function CdkVirtualScrollViewport_Template(rf, ctx) {
            1 & rf &&
              (core["ɵɵprojectionDef"](),
              core["ɵɵelementStart"](0, "div", 1, 0),
              core["ɵɵprojection"](2),
              core["ɵɵelementEnd"](),
              core["ɵɵelement"](3, "div", 2)),
              2 & rf &&
                (core["ɵɵadvance"](3),
                core["ɵɵstyleProp"]("width", ctx._totalContentWidth)(
                  "height",
                  ctx._totalContentHeight,
                ));
          },
          styles: [
            "cdk-virtual-scroll-viewport{display:block;position:relative;transform:translateZ(0)}.cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{height:1px;transform-origin:0 0;flex:0 0 auto}[dir=rtl] .cdk-virtual-scroll-spacer{transform-origin:100% 0}",
          ],
          encapsulation: 2,
          changeDetection: 0,
        }));
      }
      function getOffset(orientation, direction, node) {
        const el = node;
        if (!el.getBoundingClientRect) return 0;
        const rect = el.getBoundingClientRect();
        return "horizontal" === orientation
          ? "start" === direction
            ? rect.left
            : rect.right
          : "start" === direction
            ? rect.top
            : rect.bottom;
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          CdkVirtualScrollViewport,
          [
            {
              type: core.Component,
              args: [
                {
                  selector: "cdk-virtual-scroll-viewport",
                  host: {
                    class: "cdk-virtual-scroll-viewport",
                    "[class.cdk-virtual-scroll-orientation-horizontal]":
                      'orientation === "horizontal"',
                    "[class.cdk-virtual-scroll-orientation-vertical]":
                      'orientation !== "horizontal"',
                  },
                  encapsulation: core.ViewEncapsulation.None,
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  standalone: !0,
                  providers: [
                    {
                      provide: CdkScrollable,
                      useFactory: (virtualScrollable, viewport) =>
                        virtualScrollable || viewport,
                      deps: [
                        [
                          new core.Optional(),
                          new core.Inject(VIRTUAL_SCROLLABLE),
                        ],
                        CdkVirtualScrollViewport,
                      ],
                    },
                  ],
                  template:
                    '\x3c!--\n  Wrap the rendered content in an element that will be used to offset it based on the scroll\n  position.\n--\x3e\n<div #contentWrapper class="cdk-virtual-scroll-content-wrapper">\n  <ng-content></ng-content>\n</div>\n\x3c!--\n  Spacer used to force the scrolling container to the correct size for the *total* number of items\n  so that the scrollbar captures the size of the entire data set.\n--\x3e\n<div class="cdk-virtual-scroll-spacer"\n     [style.width]="_totalContentWidth" [style.height]="_totalContentHeight"></div>\n',
                  styles: [
                    "cdk-virtual-scroll-viewport{display:block;position:relative;transform:translateZ(0)}.cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{height:1px;transform-origin:0 0;flex:0 0 auto}[dir=rtl] .cdk-virtual-scroll-spacer{transform-origin:100% 0}",
                  ],
                },
              ],
            },
          ],
          () => [
            { type: core.ElementRef },
            { type: core.ChangeDetectorRef },
            { type: core.NgZone },
            {
              type: void 0,
              decorators: [
                { type: core.Optional },
                { type: core.Inject, args: [VIRTUAL_SCROLL_STRATEGY] },
              ],
            },
            { type: bidi.dS, decorators: [{ type: core.Optional }] },
            { type: ScrollDispatcher },
            { type: ViewportRuler },
            {
              type: CdkVirtualScrollable,
              decorators: [
                { type: core.Optional },
                { type: core.Inject, args: [VIRTUAL_SCROLLABLE] },
              ],
            },
          ],
          {
            orientation: [{ type: core.Input }],
            appendOnly: [
              {
                type: core.Input,
                args: [{ transform: core.booleanAttribute }],
              },
            ],
            scrolledIndexChange: [{ type: core.Output }],
            _contentWrapper: [
              {
                type: core.ViewChild,
                args: ["contentWrapper", { static: !0 }],
              },
            ],
          },
        );
      class CdkVirtualForOf {
        get cdkVirtualForOf() {
          return this._cdkVirtualForOf;
        }
        set cdkVirtualForOf(value) {
          (this._cdkVirtualForOf = value),
            (0, collections.y4)(value)
              ? this._dataSourceChanges.next(value)
              : this._dataSourceChanges.next(
                  new collections.hx(
                    (0, isObservable.A)(value)
                      ? value
                      : Array.from(value || []),
                  ),
                );
        }
        get cdkVirtualForTrackBy() {
          return this._cdkVirtualForTrackBy;
        }
        set cdkVirtualForTrackBy(fn) {
          (this._needsUpdate = !0),
            (this._cdkVirtualForTrackBy = fn
              ? (index, item) =>
                  fn(
                    index +
                      (this._renderedRange ? this._renderedRange.start : 0),
                    item,
                  )
              : void 0);
        }
        set cdkVirtualForTemplate(value) {
          value && ((this._needsUpdate = !0), (this._template = value));
        }
        get cdkVirtualForTemplateCacheSize() {
          return this._viewRepeater.viewCacheSize;
        }
        set cdkVirtualForTemplateCacheSize(size) {
          this._viewRepeater.viewCacheSize = (0, coercion.OE)(size);
        }
        constructor(
          _viewContainerRef,
          _template,
          _differs,
          _viewRepeater,
          _viewport,
          ngZone,
        ) {
          (this._viewContainerRef = _viewContainerRef),
            (this._template = _template),
            (this._differs = _differs),
            (this._viewRepeater = _viewRepeater),
            (this._viewport = _viewport),
            (this.viewChange = new Subject.B()),
            (this._dataSourceChanges = new Subject.B()),
            (this.dataStream = this._dataSourceChanges.pipe(
              (0, startWith.Z)(null),
              (function pairwise() {
                return (0, lift.N)(function (source, subscriber) {
                  var prev,
                    hasPrev = !1;
                  source.subscribe(
                    (0, OperatorSubscriber._)(subscriber, function (value) {
                      var p = prev;
                      (prev = value),
                        hasPrev && subscriber.next([p, value]),
                        (hasPrev = !0);
                    }),
                  );
                });
              })(),
              (0, switchMap.n)(([prev, cur]) =>
                this._changeDataSource(prev, cur),
              ),
              (0, shareReplay.t)(1),
            )),
            (this._differ = null),
            (this._needsUpdate = !1),
            (this._destroyed = new Subject.B()),
            this.dataStream.subscribe((data) => {
              (this._data = data), this._onRenderedDataChange();
            }),
            this._viewport.renderedRangeStream
              .pipe((0, takeUntil.Q)(this._destroyed))
              .subscribe((range) => {
                (this._renderedRange = range),
                  this.viewChange.observers.length &&
                    ngZone.run(() => this.viewChange.next(this._renderedRange)),
                  this._onRenderedDataChange();
              }),
            this._viewport.attach(this);
        }
        measureRangeSize(range, orientation) {
          if (range.start >= range.end) return 0;
          if (
            (range.start < this._renderedRange.start ||
              range.end > this._renderedRange.end) &&
            ("undefined" == typeof ngDevMode || ngDevMode)
          )
            throw Error(
              "Error: attempted to measure an item that isn't rendered.",
            );
          const renderedStartIndex = range.start - this._renderedRange.start,
            rangeLen = range.end - range.start;
          let firstNode, lastNode;
          for (let i = 0; i < rangeLen; i++) {
            const view = this._viewContainerRef.get(i + renderedStartIndex);
            if (view && view.rootNodes.length) {
              firstNode = lastNode = view.rootNodes[0];
              break;
            }
          }
          for (let i = rangeLen - 1; i > -1; i--) {
            const view = this._viewContainerRef.get(i + renderedStartIndex);
            if (view && view.rootNodes.length) {
              lastNode = view.rootNodes[view.rootNodes.length - 1];
              break;
            }
          }
          return firstNode && lastNode
            ? getOffset(orientation, "end", lastNode) -
                getOffset(orientation, "start", firstNode)
            : 0;
        }
        ngDoCheck() {
          if (this._differ && this._needsUpdate) {
            const changes = this._differ.diff(this._renderedItems);
            changes ? this._applyChanges(changes) : this._updateContext(),
              (this._needsUpdate = !1);
          }
        }
        ngOnDestroy() {
          this._viewport.detach(),
            this._dataSourceChanges.next(void 0),
            this._dataSourceChanges.complete(),
            this.viewChange.complete(),
            this._destroyed.next(),
            this._destroyed.complete(),
            this._viewRepeater.detach();
        }
        _onRenderedDataChange() {
          this._renderedRange &&
            ((this._renderedItems = this._data.slice(
              this._renderedRange.start,
              this._renderedRange.end,
            )),
            this._differ ||
              (this._differ = this._differs
                .find(this._renderedItems)
                .create((index, item) =>
                  this.cdkVirtualForTrackBy
                    ? this.cdkVirtualForTrackBy(index, item)
                    : item,
                )),
            (this._needsUpdate = !0));
        }
        _changeDataSource(oldDs, newDs) {
          return (
            oldDs && oldDs.disconnect(this),
            (this._needsUpdate = !0),
            newDs ? newDs.connect(this) : (0, of.of)()
          );
        }
        _updateContext() {
          const count = this._data.length;
          let i = this._viewContainerRef.length;
          for (; i--; ) {
            const view = this._viewContainerRef.get(i);
            (view.context.index = this._renderedRange.start + i),
              (view.context.count = count),
              this._updateComputedContextProperties(view.context),
              view.detectChanges();
          }
        }
        _applyChanges(changes) {
          this._viewRepeater.applyChanges(
            changes,
            this._viewContainerRef,
            (record, _adjustedPreviousIndex, currentIndex) =>
              this._getEmbeddedViewArgs(record, currentIndex),
            (record) => record.item,
          ),
            changes.forEachIdentityChange((record) => {
              this._viewContainerRef.get(
                record.currentIndex,
              ).context.$implicit = record.item;
            });
          const count = this._data.length;
          let i = this._viewContainerRef.length;
          for (; i--; ) {
            const view = this._viewContainerRef.get(i);
            (view.context.index = this._renderedRange.start + i),
              (view.context.count = count),
              this._updateComputedContextProperties(view.context);
          }
        }
        _updateComputedContextProperties(context) {
          (context.first = 0 === context.index),
            (context.last = context.index === context.count - 1),
            (context.even = context.index % 2 == 0),
            (context.odd = !context.even);
        }
        _getEmbeddedViewArgs(record, index) {
          return {
            templateRef: this._template,
            context: {
              $implicit: record.item,
              cdkVirtualForOf: this._cdkVirtualForOf,
              index: -1,
              count: -1,
              first: !1,
              last: !1,
              odd: !1,
              even: !1,
            },
            index,
          };
        }
        static #_ = (this.ɵfac = function CdkVirtualForOf_Factory(t) {
          return new (t || CdkVirtualForOf)(
            core["ɵɵdirectiveInject"](core.ViewContainerRef),
            core["ɵɵdirectiveInject"](core.TemplateRef),
            core["ɵɵdirectiveInject"](core.IterableDiffers),
            core["ɵɵdirectiveInject"](collections.sL),
            core["ɵɵdirectiveInject"](CdkVirtualScrollViewport, 4),
            core["ɵɵdirectiveInject"](core.NgZone),
          );
        });
        static #_2 = (this.ɵdir = core["ɵɵdefineDirective"]({
          type: CdkVirtualForOf,
          selectors: [["", "cdkVirtualFor", "", "cdkVirtualForOf", ""]],
          inputs: {
            cdkVirtualForOf: "cdkVirtualForOf",
            cdkVirtualForTrackBy: "cdkVirtualForTrackBy",
            cdkVirtualForTemplate: "cdkVirtualForTemplate",
            cdkVirtualForTemplateCacheSize: "cdkVirtualForTemplateCacheSize",
          },
          standalone: !0,
          features: [
            core["ɵɵProvidersFeature"]([
              { provide: collections.sL, useClass: collections.DQ },
            ]),
          ],
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          CdkVirtualForOf,
          [
            {
              type: core.Directive,
              args: [
                {
                  selector: "[cdkVirtualFor][cdkVirtualForOf]",
                  providers: [
                    { provide: collections.sL, useClass: collections.DQ },
                  ],
                  standalone: !0,
                },
              ],
            },
          ],
          () => [
            { type: core.ViewContainerRef },
            { type: core.TemplateRef },
            { type: core.IterableDiffers },
            {
              type: collections.DQ,
              decorators: [{ type: core.Inject, args: [collections.sL] }],
            },
            {
              type: CdkVirtualScrollViewport,
              decorators: [{ type: core.SkipSelf }],
            },
            { type: core.NgZone },
          ],
          {
            cdkVirtualForOf: [{ type: core.Input }],
            cdkVirtualForTrackBy: [{ type: core.Input }],
            cdkVirtualForTemplate: [{ type: core.Input }],
            cdkVirtualForTemplateCacheSize: [{ type: core.Input }],
          },
        );
      class CdkVirtualScrollableElement extends CdkVirtualScrollable {
        constructor(elementRef, scrollDispatcher, ngZone, dir) {
          super(elementRef, scrollDispatcher, ngZone, dir);
        }
        measureBoundingClientRectWithScrollOffset(from) {
          return (
            this.getElementRef().nativeElement.getBoundingClientRect()[from] -
            this.measureScrollOffset(from)
          );
        }
        static #_ = (this.ɵfac = function CdkVirtualScrollableElement_Factory(
          t,
        ) {
          return new (t || CdkVirtualScrollableElement)(
            core["ɵɵdirectiveInject"](core.ElementRef),
            core["ɵɵdirectiveInject"](ScrollDispatcher),
            core["ɵɵdirectiveInject"](core.NgZone),
            core["ɵɵdirectiveInject"](bidi.dS, 8),
          );
        });
        static #_2 = (this.ɵdir = core["ɵɵdefineDirective"]({
          type: CdkVirtualScrollableElement,
          selectors: [["", "cdkVirtualScrollingElement", ""]],
          hostAttrs: [1, "cdk-virtual-scrollable"],
          standalone: !0,
          features: [
            core["ɵɵProvidersFeature"]([
              {
                provide: VIRTUAL_SCROLLABLE,
                useExisting: CdkVirtualScrollableElement,
              },
            ]),
            core["ɵɵInheritDefinitionFeature"],
          ],
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          CdkVirtualScrollableElement,
          [
            {
              type: core.Directive,
              args: [
                {
                  selector: "[cdkVirtualScrollingElement]",
                  providers: [
                    {
                      provide: VIRTUAL_SCROLLABLE,
                      useExisting: CdkVirtualScrollableElement,
                    },
                  ],
                  standalone: !0,
                  host: { class: "cdk-virtual-scrollable" },
                },
              ],
            },
          ],
          () => [
            { type: core.ElementRef },
            { type: ScrollDispatcher },
            { type: core.NgZone },
            { type: bidi.dS, decorators: [{ type: core.Optional }] },
          ],
          null,
        );
      class CdkVirtualScrollableWindow extends CdkVirtualScrollable {
        constructor(scrollDispatcher, ngZone, dir) {
          super(
            new core.ElementRef(document.documentElement),
            scrollDispatcher,
            ngZone,
            dir,
          ),
            (this._elementScrolled = new Observable.c((observer) =>
              this.ngZone.runOutsideAngular(() =>
                (0, fromEvent.R)(document, "scroll")
                  .pipe((0, takeUntil.Q)(this._destroyed))
                  .subscribe(observer),
              ),
            ));
        }
        measureBoundingClientRectWithScrollOffset(from) {
          return this.getElementRef().nativeElement.getBoundingClientRect()[
            from
          ];
        }
        static #_ = (this.ɵfac = function CdkVirtualScrollableWindow_Factory(
          t,
        ) {
          return new (t || CdkVirtualScrollableWindow)(
            core["ɵɵdirectiveInject"](ScrollDispatcher),
            core["ɵɵdirectiveInject"](core.NgZone),
            core["ɵɵdirectiveInject"](bidi.dS, 8),
          );
        });
        static #_2 = (this.ɵdir = core["ɵɵdefineDirective"]({
          type: CdkVirtualScrollableWindow,
          selectors: [["cdk-virtual-scroll-viewport", "scrollWindow", ""]],
          standalone: !0,
          features: [
            core["ɵɵProvidersFeature"]([
              {
                provide: VIRTUAL_SCROLLABLE,
                useExisting: CdkVirtualScrollableWindow,
              },
            ]),
            core["ɵɵInheritDefinitionFeature"],
          ],
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          CdkVirtualScrollableWindow,
          [
            {
              type: core.Directive,
              args: [
                {
                  selector: "cdk-virtual-scroll-viewport[scrollWindow]",
                  providers: [
                    {
                      provide: VIRTUAL_SCROLLABLE,
                      useExisting: CdkVirtualScrollableWindow,
                    },
                  ],
                  standalone: !0,
                },
              ],
            },
          ],
          () => [
            { type: ScrollDispatcher },
            { type: core.NgZone },
            { type: bidi.dS, decorators: [{ type: core.Optional }] },
          ],
          null,
        );
      class CdkScrollableModule {
        static #_ = (this.ɵfac = function CdkScrollableModule_Factory(t) {
          return new (t || CdkScrollableModule)();
        });
        static #_2 = (this.ɵmod = core["ɵɵdefineNgModule"]({
          type: CdkScrollableModule,
          imports: [CdkScrollable],
          exports: [CdkScrollable],
        }));
        static #_3 = (this.ɵinj = core["ɵɵdefineInjector"]({}));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          CdkScrollableModule,
          [
            {
              type: core.NgModule,
              args: [{ exports: [CdkScrollable], imports: [CdkScrollable] }],
            },
          ],
          null,
          null,
        );
      class ScrollingModule {
        static #_ = (this.ɵfac = function ScrollingModule_Factory(t) {
          return new (t || ScrollingModule)();
        });
        static #_2 = (this.ɵmod = core["ɵɵdefineNgModule"]({
          type: ScrollingModule,
          imports: [
            bidi.jI,
            CdkScrollableModule,
            CdkVirtualScrollViewport,
            CdkFixedSizeVirtualScroll,
            CdkVirtualForOf,
            CdkVirtualScrollableWindow,
            CdkVirtualScrollableElement,
          ],
          exports: [
            bidi.jI,
            CdkScrollableModule,
            CdkFixedSizeVirtualScroll,
            CdkVirtualForOf,
            CdkVirtualScrollViewport,
            CdkVirtualScrollableWindow,
            CdkVirtualScrollableElement,
          ],
        }));
        static #_3 = (this.ɵinj = core["ɵɵdefineInjector"]({
          imports: [bidi.jI, CdkScrollableModule, bidi.jI, CdkScrollableModule],
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          ScrollingModule,
          [
            {
              type: core.NgModule,
              args: [
                {
                  imports: [
                    bidi.jI,
                    CdkScrollableModule,
                    CdkVirtualScrollViewport,
                    CdkFixedSizeVirtualScroll,
                    CdkVirtualForOf,
                    CdkVirtualScrollableWindow,
                    CdkVirtualScrollableElement,
                  ],
                  exports: [
                    bidi.jI,
                    CdkScrollableModule,
                    CdkFixedSizeVirtualScroll,
                    CdkVirtualForOf,
                    CdkVirtualScrollViewport,
                    CdkVirtualScrollableWindow,
                    CdkVirtualScrollableElement,
                  ],
                },
              ],
            },
          ],
          null,
          null,
        );
    },
    "./node_modules/rxjs/dist/esm5/internal/observable/ConnectableObservable.js":
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
    "./node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { R: () => fromEvent });
      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./node_modules/tslib/tslib.es6.mjs",
        ),
        _observable_innerFrom__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            "./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js",
          ),
        _Observable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/Observable.js",
        ),
        _operators_mergeMap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js",
        ),
        _util_isArrayLike__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js",
        ),
        _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/util/isFunction.js",
        ),
        _util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            "./node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js",
          ),
        nodeEventEmitterMethods = ["addListener", "removeListener"],
        eventTargetMethods = ["addEventListener", "removeEventListener"],
        jqueryMethods = ["on", "off"];
      function fromEvent(target, eventName, options, resultSelector) {
        if (
          ((0, _util_isFunction__WEBPACK_IMPORTED_MODULE_0__.T)(options) &&
            ((resultSelector = options), (options = void 0)),
          resultSelector)
        )
          return fromEvent(target, eventName, options).pipe(
            (0, _util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_1__.I)(
              resultSelector,
            ),
          );
        var _a = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.zs)(
            (function isEventTarget(target) {
              return (
                (0, _util_isFunction__WEBPACK_IMPORTED_MODULE_0__.T)(
                  target.addEventListener,
                ) &&
                (0, _util_isFunction__WEBPACK_IMPORTED_MODULE_0__.T)(
                  target.removeEventListener,
                )
              );
            })(target)
              ? eventTargetMethods.map(function (methodName) {
                  return function (handler) {
                    return target[methodName](eventName, handler, options);
                  };
                })
              : (function isNodeStyleEventEmitter(target) {
                    return (
                      (0, _util_isFunction__WEBPACK_IMPORTED_MODULE_0__.T)(
                        target.addListener,
                      ) &&
                      (0, _util_isFunction__WEBPACK_IMPORTED_MODULE_0__.T)(
                        target.removeListener,
                      )
                    );
                  })(target)
                ? nodeEventEmitterMethods.map(
                    toCommonHandlerRegistry(target, eventName),
                  )
                : (function isJQueryStyleEventEmitter(target) {
                      return (
                        (0, _util_isFunction__WEBPACK_IMPORTED_MODULE_0__.T)(
                          target.on,
                        ) &&
                        (0, _util_isFunction__WEBPACK_IMPORTED_MODULE_0__.T)(
                          target.off,
                        )
                      );
                    })(target)
                  ? jqueryMethods.map(
                      toCommonHandlerRegistry(target, eventName),
                    )
                  : [],
            2,
          ),
          add = _a[0],
          remove = _a[1];
        if (
          !add &&
          (0, _util_isArrayLike__WEBPACK_IMPORTED_MODULE_3__.X)(target)
        )
          return (0, _operators_mergeMap__WEBPACK_IMPORTED_MODULE_4__.Z)(
            function (subTarget) {
              return fromEvent(subTarget, eventName, options);
            },
          )((0, _observable_innerFrom__WEBPACK_IMPORTED_MODULE_5__.Tg)(target));
        if (!add) throw new TypeError("Invalid event target");
        return new _Observable__WEBPACK_IMPORTED_MODULE_6__.c(function (
          subscriber,
        ) {
          var handler = function () {
            for (var args = [], _i = 0; _i < arguments.length; _i++)
              args[_i] = arguments[_i];
            return subscriber.next(1 < args.length ? args : args[0]);
          };
          return (
            add(handler),
            function () {
              return remove(handler);
            }
          );
        });
      }
      function toCommonHandlerRegistry(target, eventName) {
        return function (methodName) {
          return function (handler) {
            return target[methodName](eventName, handler);
          };
        };
      }
    },
    "./node_modules/rxjs/dist/esm5/internal/observable/merge.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { h: () => merge });
      var _operators_mergeAll__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            "./node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js",
          ),
        _innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js",
        ),
        _empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/observable/empty.js",
        ),
        _util_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/util/args.js",
        ),
        _from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/observable/from.js",
        );
      function merge() {
        for (var args = [], _i = 0; _i < arguments.length; _i++)
          args[_i] = arguments[_i];
        var scheduler = (0, _util_args__WEBPACK_IMPORTED_MODULE_0__.lI)(args),
          concurrent = (0, _util_args__WEBPACK_IMPORTED_MODULE_0__.R0)(
            args,
            1 / 0,
          ),
          sources = args;
        return sources.length
          ? 1 === sources.length
            ? (0, _innerFrom__WEBPACK_IMPORTED_MODULE_2__.Tg)(sources[0])
            : (0, _operators_mergeAll__WEBPACK_IMPORTED_MODULE_3__.U)(
                concurrent,
              )((0, _from__WEBPACK_IMPORTED_MODULE_4__.H)(sources, scheduler))
          : _empty__WEBPACK_IMPORTED_MODULE_1__.w;
      }
    },
    "./node_modules/rxjs/dist/esm5/internal/observable/timer.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { O: () => timer });
      var Observable = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/Observable.js",
        ),
        scheduler_async = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/scheduler/async.js",
        ),
        isScheduler = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/util/isScheduler.js",
        );
      function timer(dueTime, intervalOrScheduler, scheduler) {
        void 0 === dueTime && (dueTime = 0),
          void 0 === scheduler && (scheduler = scheduler_async.b);
        var intervalDuration = -1;
        return (
          null != intervalOrScheduler &&
            ((0, isScheduler.m)(intervalOrScheduler)
              ? (scheduler = intervalOrScheduler)
              : (intervalDuration = intervalOrScheduler)),
          new Observable.c(function (subscriber) {
            var due = (function isValidDate(value) {
              return value instanceof Date && !isNaN(value);
            })(dueTime)
              ? +dueTime - scheduler.now()
              : dueTime;
            due < 0 && (due = 0);
            var n = 0;
            return scheduler.schedule(function () {
              subscriber.closed ||
                (subscriber.next(n++),
                0 <= intervalDuration
                  ? this.schedule(void 0, intervalDuration)
                  : subscriber.complete());
            }, due);
          })
        );
      }
    },
    "./node_modules/rxjs/dist/esm5/internal/operators/auditTime.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { Z: () => auditTime });
      var scheduler_async = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/scheduler/async.js",
        ),
        lift = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/util/lift.js",
        ),
        innerFrom = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js",
        ),
        OperatorSubscriber = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js",
        );
      var timer = __webpack_require__(
        "./node_modules/rxjs/dist/esm5/internal/observable/timer.js",
      );
      function auditTime(duration, scheduler) {
        return (
          void 0 === scheduler && (scheduler = scheduler_async.E),
          (function audit(durationSelector) {
            return (0, lift.N)(function (source, subscriber) {
              var hasValue = !1,
                lastValue = null,
                durationSubscriber = null,
                isComplete = !1,
                endDuration = function () {
                  if (
                    (null == durationSubscriber ||
                      durationSubscriber.unsubscribe(),
                    (durationSubscriber = null),
                    hasValue)
                  ) {
                    hasValue = !1;
                    var value = lastValue;
                    (lastValue = null), subscriber.next(value);
                  }
                  isComplete && subscriber.complete();
                },
                cleanupDuration = function () {
                  (durationSubscriber = null),
                    isComplete && subscriber.complete();
                };
              source.subscribe(
                (0, OperatorSubscriber._)(
                  subscriber,
                  function (value) {
                    (hasValue = !0),
                      (lastValue = value),
                      durationSubscriber ||
                        (0, innerFrom.Tg)(durationSelector(value)).subscribe(
                          (durationSubscriber = (0, OperatorSubscriber._)(
                            subscriber,
                            endDuration,
                            cleanupDuration,
                          )),
                        );
                  },
                  function () {
                    (isComplete = !0),
                      (!hasValue ||
                        !durationSubscriber ||
                        durationSubscriber.closed) &&
                        subscriber.complete();
                  },
                ),
              );
            });
          })(function () {
            return (0, timer.O)(duration, scheduler);
          })
        );
      }
    },
    "./node_modules/rxjs/dist/esm5/internal/operators/refCount.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
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
    "./node_modules/rxjs/dist/esm5/internal/operators/shareReplay.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { t: () => shareReplay });
      var tslib_es6 = __webpack_require__("./node_modules/tslib/tslib.es6.mjs"),
        Subject = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/Subject.js",
        ),
        dateTimestampProvider = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/scheduler/dateTimestampProvider.js",
        ),
        ReplaySubject = (function (_super) {
          function ReplaySubject(_bufferSize, _windowTime, _timestampProvider) {
            void 0 === _bufferSize && (_bufferSize = 1 / 0),
              void 0 === _windowTime && (_windowTime = 1 / 0),
              void 0 === _timestampProvider &&
                (_timestampProvider = dateTimestampProvider.U);
            var _this = _super.call(this) || this;
            return (
              (_this._bufferSize = _bufferSize),
              (_this._windowTime = _windowTime),
              (_this._timestampProvider = _timestampProvider),
              (_this._buffer = []),
              (_this._infiniteTimeWindow = !0),
              (_this._infiniteTimeWindow = _windowTime === 1 / 0),
              (_this._bufferSize = Math.max(1, _bufferSize)),
              (_this._windowTime = Math.max(1, _windowTime)),
              _this
            );
          }
          return (
            (0, tslib_es6.C6)(ReplaySubject, _super),
            (ReplaySubject.prototype.next = function (value) {
              var _a = this,
                isStopped = _a.isStopped,
                _buffer = _a._buffer,
                _infiniteTimeWindow = _a._infiniteTimeWindow,
                _timestampProvider = _a._timestampProvider,
                _windowTime = _a._windowTime;
              isStopped ||
                (_buffer.push(value),
                !_infiniteTimeWindow &&
                  _buffer.push(_timestampProvider.now() + _windowTime)),
                this._trimBuffer(),
                _super.prototype.next.call(this, value);
            }),
            (ReplaySubject.prototype._subscribe = function (subscriber) {
              this._throwIfClosed(), this._trimBuffer();
              for (
                var subscription = this._innerSubscribe(subscriber),
                  _infiniteTimeWindow = this._infiniteTimeWindow,
                  copy = this._buffer.slice(),
                  i = 0;
                i < copy.length && !subscriber.closed;
                i += _infiniteTimeWindow ? 1 : 2
              )
                subscriber.next(copy[i]);
              return this._checkFinalizedStatuses(subscriber), subscription;
            }),
            (ReplaySubject.prototype._trimBuffer = function () {
              var _bufferSize = this._bufferSize,
                _timestampProvider = this._timestampProvider,
                _buffer = this._buffer,
                _infiniteTimeWindow = this._infiniteTimeWindow,
                adjustedBufferSize =
                  (_infiniteTimeWindow ? 1 : 2) * _bufferSize;
              if (
                (_bufferSize < 1 / 0 &&
                  adjustedBufferSize < _buffer.length &&
                  _buffer.splice(0, _buffer.length - adjustedBufferSize),
                !_infiniteTimeWindow)
              ) {
                for (
                  var now = _timestampProvider.now(), last = 0, i = 1;
                  i < _buffer.length && _buffer[i] <= now;
                  i += 2
                )
                  last = i;
                last && _buffer.splice(0, last + 1);
              }
            }),
            ReplaySubject
          );
        })(Subject.B),
        share = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/share.js",
        );
      function shareReplay(configOrBufferSize, windowTime, scheduler) {
        var _a,
          _b,
          _c,
          bufferSize,
          refCount = !1;
        return (
          configOrBufferSize && "object" == typeof configOrBufferSize
            ? ((_a = configOrBufferSize.bufferSize),
              (bufferSize = void 0 === _a ? 1 / 0 : _a),
              (_b = configOrBufferSize.windowTime),
              (windowTime = void 0 === _b ? 1 / 0 : _b),
              (refCount = void 0 !== (_c = configOrBufferSize.refCount) && _c),
              (scheduler = configOrBufferSize.scheduler))
            : (bufferSize =
                null != configOrBufferSize ? configOrBufferSize : 1 / 0),
          (0, share.u)({
            connector: function () {
              return new ReplaySubject(bufferSize, windowTime, scheduler);
            },
            resetOnError: !0,
            resetOnComplete: !1,
            resetOnRefCountZero: refCount,
          })
        );
      }
    },
    "./node_modules/rxjs/dist/esm5/internal/scheduler/animationFrame.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        X: () => animationFrameScheduler,
      });
      var tslib_es6 = __webpack_require__("./node_modules/tslib/tslib.es6.mjs"),
        AsyncAction = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/scheduler/AsyncAction.js",
        ),
        Subscription = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/Subscription.js",
        ),
        animationFrameProvider = {
          schedule: function (callback) {
            var request = requestAnimationFrame,
              cancel = cancelAnimationFrame,
              delegate = animationFrameProvider.delegate;
            delegate &&
              ((request = delegate.requestAnimationFrame),
              (cancel = delegate.cancelAnimationFrame));
            var handle = request(function (timestamp) {
              (cancel = void 0), callback(timestamp);
            });
            return new Subscription.yU(function () {
              return null == cancel ? void 0 : cancel(handle);
            });
          },
          requestAnimationFrame: function () {
            for (var args = [], _i = 0; _i < arguments.length; _i++)
              args[_i] = arguments[_i];
            var delegate = animationFrameProvider.delegate;
            return (
              (null == delegate ? void 0 : delegate.requestAnimationFrame) ||
              requestAnimationFrame
            ).apply(void 0, (0, tslib_es6.fX)([], (0, tslib_es6.zs)(args)));
          },
          cancelAnimationFrame: function () {
            for (var args = [], _i = 0; _i < arguments.length; _i++)
              args[_i] = arguments[_i];
            var delegate = animationFrameProvider.delegate;
            return (
              (null == delegate ? void 0 : delegate.cancelAnimationFrame) ||
              cancelAnimationFrame
            ).apply(void 0, (0, tslib_es6.fX)([], (0, tslib_es6.zs)(args)));
          },
          delegate: void 0,
        },
        AnimationFrameAction = (function (_super) {
          function AnimationFrameAction(scheduler, work) {
            var _this = _super.call(this, scheduler, work) || this;
            return (_this.scheduler = scheduler), (_this.work = work), _this;
          }
          return (
            (0, tslib_es6.C6)(AnimationFrameAction, _super),
            (AnimationFrameAction.prototype.requestAsyncId = function (
              scheduler,
              id,
              delay,
            ) {
              return (
                void 0 === delay && (delay = 0),
                null !== delay && delay > 0
                  ? _super.prototype.requestAsyncId.call(
                      this,
                      scheduler,
                      id,
                      delay,
                    )
                  : (scheduler.actions.push(this),
                    scheduler._scheduled ||
                      (scheduler._scheduled =
                        animationFrameProvider.requestAnimationFrame(
                          function () {
                            return scheduler.flush(void 0);
                          },
                        )))
              );
            }),
            (AnimationFrameAction.prototype.recycleAsyncId = function (
              scheduler,
              id,
              delay,
            ) {
              var _a;
              if (
                (void 0 === delay && (delay = 0),
                null != delay ? delay > 0 : this.delay > 0)
              )
                return _super.prototype.recycleAsyncId.call(
                  this,
                  scheduler,
                  id,
                  delay,
                );
              var actions = scheduler.actions;
              null != id &&
                (null === (_a = actions[actions.length - 1]) || void 0 === _a
                  ? void 0
                  : _a.id) !== id &&
                (animationFrameProvider.cancelAnimationFrame(id),
                (scheduler._scheduled = void 0));
            }),
            AnimationFrameAction
          );
        })(AsyncAction.R),
        animationFrameScheduler = new ((function (_super) {
          function AnimationFrameScheduler() {
            return (null !== _super && _super.apply(this, arguments)) || this;
          }
          return (
            (0, tslib_es6.C6)(AnimationFrameScheduler, _super),
            (AnimationFrameScheduler.prototype.flush = function (action) {
              this._active = !0;
              var flushId = this._scheduled;
              this._scheduled = void 0;
              var error,
                actions = this.actions;
              action = action || actions.shift();
              do {
                if ((error = action.execute(action.state, action.delay))) break;
              } while (
                (action = actions[0]) &&
                action.id === flushId &&
                actions.shift()
              );
              if (((this._active = !1), error)) {
                for (
                  ;
                  (action = actions[0]) &&
                  action.id === flushId &&
                  actions.shift();

                )
                  action.unsubscribe();
                throw error;
              }
            }),
            AnimationFrameScheduler
          );
        })(
          __webpack_require__(
            "./node_modules/rxjs/dist/esm5/internal/scheduler/AsyncScheduler.js",
          ).q,
        ))(AnimationFrameAction);
    },
    "./node_modules/rxjs/dist/esm5/internal/scheduler/asap.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { $: () => asapScheduler });
      var resolved,
        tslib_es6 = __webpack_require__("./node_modules/tslib/tslib.es6.mjs"),
        AsyncAction = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/scheduler/AsyncAction.js",
        ),
        nextHandle = 1,
        activeHandles = {};
      function findAndClearHandle(handle) {
        return handle in activeHandles && (delete activeHandles[handle], !0);
      }
      var setImmediate = function (cb) {
          var handle = nextHandle++;
          return (
            (activeHandles[handle] = !0),
            resolved || (resolved = Promise.resolve()),
            resolved.then(function () {
              return findAndClearHandle(handle) && cb();
            }),
            handle
          );
        },
        clearImmediate = function (handle) {
          findAndClearHandle(handle);
        },
        immediateProvider = {
          setImmediate: function () {
            for (var args = [], _i = 0; _i < arguments.length; _i++)
              args[_i] = arguments[_i];
            var delegate = immediateProvider.delegate;
            return (
              (null == delegate ? void 0 : delegate.setImmediate) ||
              setImmediate
            ).apply(void 0, (0, tslib_es6.fX)([], (0, tslib_es6.zs)(args)));
          },
          clearImmediate: function (handle) {
            var delegate = immediateProvider.delegate;
            return (
              (null == delegate ? void 0 : delegate.clearImmediate) ||
              clearImmediate
            )(handle);
          },
          delegate: void 0,
        },
        AsapAction = (function (_super) {
          function AsapAction(scheduler, work) {
            var _this = _super.call(this, scheduler, work) || this;
            return (_this.scheduler = scheduler), (_this.work = work), _this;
          }
          return (
            (0, tslib_es6.C6)(AsapAction, _super),
            (AsapAction.prototype.requestAsyncId = function (
              scheduler,
              id,
              delay,
            ) {
              return (
                void 0 === delay && (delay = 0),
                null !== delay && delay > 0
                  ? _super.prototype.requestAsyncId.call(
                      this,
                      scheduler,
                      id,
                      delay,
                    )
                  : (scheduler.actions.push(this),
                    scheduler._scheduled ||
                      (scheduler._scheduled = immediateProvider.setImmediate(
                        scheduler.flush.bind(scheduler, void 0),
                      )))
              );
            }),
            (AsapAction.prototype.recycleAsyncId = function (
              scheduler,
              id,
              delay,
            ) {
              var _a;
              if (
                (void 0 === delay && (delay = 0),
                null != delay ? delay > 0 : this.delay > 0)
              )
                return _super.prototype.recycleAsyncId.call(
                  this,
                  scheduler,
                  id,
                  delay,
                );
              var actions = scheduler.actions;
              null != id &&
                (null === (_a = actions[actions.length - 1]) || void 0 === _a
                  ? void 0
                  : _a.id) !== id &&
                (immediateProvider.clearImmediate(id),
                scheduler._scheduled === id && (scheduler._scheduled = void 0));
            }),
            AsapAction
          );
        })(AsyncAction.R),
        asapScheduler = new ((function (_super) {
          function AsapScheduler() {
            return (null !== _super && _super.apply(this, arguments)) || this;
          }
          return (
            (0, tslib_es6.C6)(AsapScheduler, _super),
            (AsapScheduler.prototype.flush = function (action) {
              this._active = !0;
              var flushId = this._scheduled;
              this._scheduled = void 0;
              var error,
                actions = this.actions;
              action = action || actions.shift();
              do {
                if ((error = action.execute(action.state, action.delay))) break;
              } while (
                (action = actions[0]) &&
                action.id === flushId &&
                actions.shift()
              );
              if (((this._active = !1), error)) {
                for (
                  ;
                  (action = actions[0]) &&
                  action.id === flushId &&
                  actions.shift();

                )
                  action.unsubscribe();
                throw error;
              }
            }),
            AsapScheduler
          );
        })(
          __webpack_require__(
            "./node_modules/rxjs/dist/esm5/internal/scheduler/AsyncScheduler.js",
          ).q,
        ))(AsapAction);
    },
    "./node_modules/rxjs/dist/esm5/internal/util/isObservable.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
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
  },
]);
