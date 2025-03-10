"use strict";
(self.webpackChunk_aseinfo_evolution_web_components =
  self.webpackChunk_aseinfo_evolution_web_components || []).push([
  [5859],
  {
    "./node_modules/@angular/material/fesm2022/dialog.mjs": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        Vh: () => MAT_DIALOG_DATA,
        bZ: () => MatDialog,
        E7: () => MatDialogActions,
        tx: () => MatDialogClose,
        Yi: () => MatDialogContent,
        hM: () => MatDialogModule,
        CP: () => MatDialogRef,
        BI: () => MatDialogTitle,
      });
      var fesm2022_overlay = __webpack_require__(
          "./node_modules/@angular/cdk/fesm2022/overlay.mjs",
        ),
        common = __webpack_require__(
          "./node_modules/@angular/common/fesm2022/common.mjs",
        ),
        core = __webpack_require__(
          "./node_modules/@angular/core/fesm2022/core.mjs",
        ),
        a11y = __webpack_require__(
          "./node_modules/@angular/cdk/fesm2022/a11y.mjs",
        ),
        platform = __webpack_require__(
          "./node_modules/@angular/cdk/fesm2022/platform.mjs",
        ),
        portal = __webpack_require__(
          "./node_modules/@angular/cdk/fesm2022/portal.mjs",
        ),
        keycodes = __webpack_require__(
          "./node_modules/@angular/cdk/fesm2022/keycodes.mjs",
        ),
        Subject = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/Subject.js",
        ),
        defer = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/observable/defer.js",
        ),
        of = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/observable/of.js",
        ),
        bidi = __webpack_require__(
          "./node_modules/@angular/cdk/fesm2022/bidi.mjs",
        ),
        startWith = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/startWith.js",
        );
      function CdkDialogContainer_ng_template_0_Template(rf, ctx) {}
      class DialogConfig {
        constructor() {
          (this.role = "dialog"),
            (this.panelClass = ""),
            (this.hasBackdrop = !0),
            (this.backdropClass = ""),
            (this.disableClose = !1),
            (this.width = ""),
            (this.height = ""),
            (this.data = null),
            (this.ariaDescribedBy = null),
            (this.ariaLabelledBy = null),
            (this.ariaLabel = null),
            (this.ariaModal = !0),
            (this.autoFocus = "first-tabbable"),
            (this.restoreFocus = !0),
            (this.closeOnNavigation = !0),
            (this.closeOnDestroy = !0),
            (this.closeOnOverlayDetachments = !0);
        }
      }
      function throwDialogContentAlreadyAttachedError() {
        throw Error(
          "Attempting to attach dialog content after content is already attached",
        );
      }
      class CdkDialogContainer extends portal.lb {
        constructor(
          _elementRef,
          _focusTrapFactory,
          _document,
          _config,
          _interactivityChecker,
          _ngZone,
          _overlayRef,
          _focusMonitor,
        ) {
          super(),
            (this._elementRef = _elementRef),
            (this._focusTrapFactory = _focusTrapFactory),
            (this._config = _config),
            (this._interactivityChecker = _interactivityChecker),
            (this._ngZone = _ngZone),
            (this._overlayRef = _overlayRef),
            (this._focusMonitor = _focusMonitor),
            (this._platform = (0, core.inject)(platform.OD)),
            (this._focusTrap = null),
            (this._elementFocusedBeforeDialogWasOpened = null),
            (this._closeInteractionType = null),
            (this._ariaLabelledByQueue = []),
            (this._changeDetectorRef = (0, core.inject)(
              core.ChangeDetectorRef,
            )),
            (this.attachDomPortal = (portal) => {
              this._portalOutlet.hasAttached() &&
                ("undefined" == typeof ngDevMode || ngDevMode) &&
                throwDialogContentAlreadyAttachedError();
              const result = this._portalOutlet.attachDomPortal(portal);
              return this._contentAttached(), result;
            }),
            (this._document = _document),
            this._config.ariaLabelledBy &&
              this._ariaLabelledByQueue.push(this._config.ariaLabelledBy);
        }
        _addAriaLabelledBy(id) {
          this._ariaLabelledByQueue.push(id),
            this._changeDetectorRef.markForCheck();
        }
        _removeAriaLabelledBy(id) {
          const index = this._ariaLabelledByQueue.indexOf(id);
          index > -1 &&
            (this._ariaLabelledByQueue.splice(index, 1),
            this._changeDetectorRef.markForCheck());
        }
        _contentAttached() {
          this._initializeFocusTrap(),
            this._handleBackdropClicks(),
            this._captureInitialFocus();
        }
        _captureInitialFocus() {
          this._trapFocus();
        }
        ngOnDestroy() {
          this._restoreFocus();
        }
        attachComponentPortal(portal) {
          this._portalOutlet.hasAttached() &&
            ("undefined" == typeof ngDevMode || ngDevMode) &&
            throwDialogContentAlreadyAttachedError();
          const result = this._portalOutlet.attachComponentPortal(portal);
          return this._contentAttached(), result;
        }
        attachTemplatePortal(portal) {
          this._portalOutlet.hasAttached() &&
            ("undefined" == typeof ngDevMode || ngDevMode) &&
            throwDialogContentAlreadyAttachedError();
          const result = this._portalOutlet.attachTemplatePortal(portal);
          return this._contentAttached(), result;
        }
        _recaptureFocus() {
          this._containsFocus() || this._trapFocus();
        }
        _forceFocus(element, options) {
          this._interactivityChecker.isFocusable(element) ||
            ((element.tabIndex = -1),
            this._ngZone.runOutsideAngular(() => {
              const callback = () => {
                element.removeEventListener("blur", callback),
                  element.removeEventListener("mousedown", callback),
                  element.removeAttribute("tabindex");
              };
              element.addEventListener("blur", callback),
                element.addEventListener("mousedown", callback);
            })),
            element.focus(options);
        }
        _focusByCssSelector(selector, options) {
          let elementToFocus =
            this._elementRef.nativeElement.querySelector(selector);
          elementToFocus && this._forceFocus(elementToFocus, options);
        }
        _trapFocus() {
          const element = this._elementRef.nativeElement;
          switch (this._config.autoFocus) {
            case !1:
            case "dialog":
              this._containsFocus() || element.focus();
              break;
            case !0:
            case "first-tabbable":
              this._focusTrap
                ?.focusInitialElementWhenReady()
                .then((focusedSuccessfully) => {
                  focusedSuccessfully || this._focusDialogContainer();
                });
              break;
            case "first-heading":
              this._focusByCssSelector(
                'h1, h2, h3, h4, h5, h6, [role="heading"]',
              );
              break;
            default:
              this._focusByCssSelector(this._config.autoFocus);
          }
        }
        _restoreFocus() {
          const focusConfig = this._config.restoreFocus;
          let focusTargetElement = null;
          if (
            ("string" == typeof focusConfig
              ? (focusTargetElement = this._document.querySelector(focusConfig))
              : "boolean" == typeof focusConfig
                ? (focusTargetElement = focusConfig
                    ? this._elementFocusedBeforeDialogWasOpened
                    : null)
                : focusConfig && (focusTargetElement = focusConfig),
            this._config.restoreFocus &&
              focusTargetElement &&
              "function" == typeof focusTargetElement.focus)
          ) {
            const activeElement = (0, platform.vc)(),
              element = this._elementRef.nativeElement;
            (activeElement &&
              activeElement !== this._document.body &&
              activeElement !== element &&
              !element.contains(activeElement)) ||
              (this._focusMonitor
                ? (this._focusMonitor.focusVia(
                    focusTargetElement,
                    this._closeInteractionType,
                  ),
                  (this._closeInteractionType = null))
                : focusTargetElement.focus());
          }
          this._focusTrap && this._focusTrap.destroy();
        }
        _focusDialogContainer() {
          this._elementRef.nativeElement.focus &&
            this._elementRef.nativeElement.focus();
        }
        _containsFocus() {
          const element = this._elementRef.nativeElement,
            activeElement = (0, platform.vc)();
          return element === activeElement || element.contains(activeElement);
        }
        _initializeFocusTrap() {
          this._platform.isBrowser &&
            ((this._focusTrap = this._focusTrapFactory.create(
              this._elementRef.nativeElement,
            )),
            this._document &&
              (this._elementFocusedBeforeDialogWasOpened = (0, platform.vc)()));
        }
        _handleBackdropClicks() {
          this._overlayRef.backdropClick().subscribe(() => {
            this._config.disableClose && this._recaptureFocus();
          });
        }
        static #_ = (this.ɵfac = function CdkDialogContainer_Factory(t) {
          return new (t || CdkDialogContainer)(
            core["ɵɵdirectiveInject"](core.ElementRef),
            core["ɵɵdirectiveInject"](a11y.GX),
            core["ɵɵdirectiveInject"](common.DOCUMENT, 8),
            core["ɵɵdirectiveInject"](DialogConfig),
            core["ɵɵdirectiveInject"](a11y.Z7),
            core["ɵɵdirectiveInject"](core.NgZone),
            core["ɵɵdirectiveInject"](fesm2022_overlay.yY),
            core["ɵɵdirectiveInject"](a11y.FN),
          );
        });
        static #_2 = (this.ɵcmp = core["ɵɵdefineComponent"]({
          type: CdkDialogContainer,
          selectors: [["cdk-dialog-container"]],
          viewQuery: function CdkDialogContainer_Query(rf, ctx) {
            if ((1 & rf && core["ɵɵviewQuery"](portal.I3, 7), 2 & rf)) {
              let _t;
              core["ɵɵqueryRefresh"]((_t = core["ɵɵloadQuery"]())) &&
                (ctx._portalOutlet = _t.first);
            }
          },
          hostAttrs: ["tabindex", "-1", 1, "cdk-dialog-container"],
          hostVars: 6,
          hostBindings: function CdkDialogContainer_HostBindings(rf, ctx) {
            2 & rf &&
              core["ɵɵattribute"]("id", ctx._config.id || null)(
                "role",
                ctx._config.role,
              )("aria-modal", ctx._config.ariaModal)(
                "aria-labelledby",
                ctx._config.ariaLabel ? null : ctx._ariaLabelledByQueue[0],
              )("aria-label", ctx._config.ariaLabel)(
                "aria-describedby",
                ctx._config.ariaDescribedBy || null,
              );
          },
          standalone: !0,
          features: [
            core["ɵɵInheritDefinitionFeature"],
            core["ɵɵStandaloneFeature"],
          ],
          decls: 1,
          vars: 0,
          consts: [["cdkPortalOutlet", ""]],
          template: function CdkDialogContainer_Template(rf, ctx) {
            1 & rf &&
              core["ɵɵtemplate"](
                0,
                CdkDialogContainer_ng_template_0_Template,
                0,
                0,
                "ng-template",
                0,
              );
          },
          dependencies: [portal.I3],
          styles: [
            ".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}",
          ],
          encapsulation: 2,
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          CdkDialogContainer,
          [
            {
              type: core.Component,
              args: [
                {
                  selector: "cdk-dialog-container",
                  encapsulation: core.ViewEncapsulation.None,
                  changeDetection: core.ChangeDetectionStrategy.Default,
                  standalone: !0,
                  imports: [portal.I3],
                  host: {
                    class: "cdk-dialog-container",
                    tabindex: "-1",
                    "[attr.id]": "_config.id || null",
                    "[attr.role]": "_config.role",
                    "[attr.aria-modal]": "_config.ariaModal",
                    "[attr.aria-labelledby]":
                      "_config.ariaLabel ? null : _ariaLabelledByQueue[0]",
                    "[attr.aria-label]": "_config.ariaLabel",
                    "[attr.aria-describedby]":
                      "_config.ariaDescribedBy || null",
                  },
                  template: "<ng-template cdkPortalOutlet />\n",
                  styles: [
                    ".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}",
                  ],
                },
              ],
            },
          ],
          () => [
            { type: core.ElementRef },
            { type: a11y.GX },
            {
              type: void 0,
              decorators: [
                { type: core.Optional },
                { type: core.Inject, args: [common.DOCUMENT] },
              ],
            },
            {
              type: void 0,
              decorators: [{ type: core.Inject, args: [DialogConfig] }],
            },
            { type: a11y.Z7 },
            { type: core.NgZone },
            { type: fesm2022_overlay.yY },
            { type: a11y.FN },
          ],
          {
            _portalOutlet: [
              { type: core.ViewChild, args: [portal.I3, { static: !0 }] },
            ],
          },
        );
      class DialogRef {
        constructor(overlayRef, config) {
          (this.overlayRef = overlayRef),
            (this.config = config),
            (this.closed = new Subject.B()),
            (this.disableClose = config.disableClose),
            (this.backdropClick = overlayRef.backdropClick()),
            (this.keydownEvents = overlayRef.keydownEvents()),
            (this.outsidePointerEvents = overlayRef.outsidePointerEvents()),
            (this.id = config.id),
            this.keydownEvents.subscribe((event) => {
              event.keyCode !== keycodes._f ||
                this.disableClose ||
                (0, keycodes.rp)(event) ||
                (event.preventDefault(),
                this.close(void 0, { focusOrigin: "keyboard" }));
            }),
            this.backdropClick.subscribe(() => {
              this.disableClose || this.close(void 0, { focusOrigin: "mouse" });
            }),
            (this._detachSubscription = overlayRef
              .detachments()
              .subscribe(() => {
                !1 !== config.closeOnOverlayDetachments && this.close();
              }));
        }
        close(result, options) {
          if (this.containerInstance) {
            const closedSubject = this.closed;
            (this.containerInstance._closeInteractionType =
              options?.focusOrigin || "program"),
              this._detachSubscription.unsubscribe(),
              this.overlayRef.dispose(),
              closedSubject.next(result),
              closedSubject.complete(),
              (this.componentInstance = this.containerInstance = null);
          }
        }
        updatePosition() {
          return this.overlayRef.updatePosition(), this;
        }
        updateSize(width = "", height = "") {
          return this.overlayRef.updateSize({ width, height }), this;
        }
        addPanelClass(classes) {
          return this.overlayRef.addPanelClass(classes), this;
        }
        removePanelClass(classes) {
          return this.overlayRef.removePanelClass(classes), this;
        }
      }
      const DIALOG_SCROLL_STRATEGY = new core.InjectionToken(
          "DialogScrollStrategy",
          {
            providedIn: "root",
            factory: () => {
              const overlay = (0, core.inject)(fesm2022_overlay.hJ);
              return () => overlay.scrollStrategies.block();
            },
          },
        ),
        DIALOG_DATA = new core.InjectionToken("DialogData"),
        DEFAULT_DIALOG_CONFIG = new core.InjectionToken("DefaultDialogConfig");
      fesm2022_overlay.hJ;
      let uniqueId = 0;
      class Dialog {
        get openDialogs() {
          return this._parentDialog
            ? this._parentDialog.openDialogs
            : this._openDialogsAtThisLevel;
        }
        get afterOpened() {
          return this._parentDialog
            ? this._parentDialog.afterOpened
            : this._afterOpenedAtThisLevel;
        }
        constructor(
          _overlay,
          _injector,
          _defaultOptions,
          _parentDialog,
          _overlayContainer,
          scrollStrategy,
        ) {
          (this._overlay = _overlay),
            (this._injector = _injector),
            (this._defaultOptions = _defaultOptions),
            (this._parentDialog = _parentDialog),
            (this._overlayContainer = _overlayContainer),
            (this._openDialogsAtThisLevel = []),
            (this._afterAllClosedAtThisLevel = new Subject.B()),
            (this._afterOpenedAtThisLevel = new Subject.B()),
            (this._ariaHiddenElements = new Map()),
            (this.afterAllClosed = (0, defer.v)(() =>
              this.openDialogs.length
                ? this._getAfterAllClosed()
                : this._getAfterAllClosed().pipe((0, startWith.Z)(void 0)),
            )),
            (this._scrollStrategy = scrollStrategy);
        }
        open(componentOrTemplateRef, config) {
          if (
            (((config = {
              ...(this._defaultOptions || new DialogConfig()),
              ...config,
            }).id = config.id || "cdk-dialog-" + uniqueId++),
            config.id &&
              this.getDialogById(config.id) &&
              ("undefined" == typeof ngDevMode || ngDevMode))
          )
            throw Error(
              `Dialog with id "${config.id}" exists already. The dialog id must be unique.`,
            );
          const overlayConfig = this._getOverlayConfig(config),
            overlayRef = this._overlay.create(overlayConfig),
            dialogRef = new DialogRef(overlayRef, config),
            dialogContainer = this._attachContainer(
              overlayRef,
              dialogRef,
              config,
            );
          return (
            (dialogRef.containerInstance = dialogContainer),
            this._attachDialogContent(
              componentOrTemplateRef,
              dialogRef,
              dialogContainer,
              config,
            ),
            this.openDialogs.length ||
              this._hideNonDialogContentFromAssistiveTechnology(),
            this.openDialogs.push(dialogRef),
            dialogRef.closed.subscribe(() =>
              this._removeOpenDialog(dialogRef, !0),
            ),
            this.afterOpened.next(dialogRef),
            dialogRef
          );
        }
        closeAll() {
          reverseForEach(this.openDialogs, (dialog) => dialog.close());
        }
        getDialogById(id) {
          return this.openDialogs.find((dialog) => dialog.id === id);
        }
        ngOnDestroy() {
          reverseForEach(this._openDialogsAtThisLevel, (dialog) => {
            !1 === dialog.config.closeOnDestroy &&
              this._removeOpenDialog(dialog, !1);
          }),
            reverseForEach(this._openDialogsAtThisLevel, (dialog) =>
              dialog.close(),
            ),
            this._afterAllClosedAtThisLevel.complete(),
            this._afterOpenedAtThisLevel.complete(),
            (this._openDialogsAtThisLevel = []);
        }
        _getOverlayConfig(config) {
          const state = new fesm2022_overlay.rR({
            positionStrategy:
              config.positionStrategy ||
              this._overlay
                .position()
                .global()
                .centerHorizontally()
                .centerVertically(),
            scrollStrategy: config.scrollStrategy || this._scrollStrategy(),
            panelClass: config.panelClass,
            hasBackdrop: config.hasBackdrop,
            direction: config.direction,
            minWidth: config.minWidth,
            minHeight: config.minHeight,
            maxWidth: config.maxWidth,
            maxHeight: config.maxHeight,
            width: config.width,
            height: config.height,
            disposeOnNavigation: config.closeOnNavigation,
          });
          return (
            config.backdropClass &&
              (state.backdropClass = config.backdropClass),
            state
          );
        }
        _attachContainer(overlay, dialogRef, config) {
          const userInjector =
              config.injector || config.viewContainerRef?.injector,
            providers = [
              { provide: DialogConfig, useValue: config },
              { provide: DialogRef, useValue: dialogRef },
              { provide: fesm2022_overlay.yY, useValue: overlay },
            ];
          let containerType;
          config.container
            ? "function" == typeof config.container
              ? (containerType = config.container)
              : ((containerType = config.container.type),
                providers.push(...config.container.providers(config)))
            : (containerType = CdkDialogContainer);
          const containerPortal = new portal.A8(
            containerType,
            config.viewContainerRef,
            core.Injector.create({
              parent: userInjector || this._injector,
              providers,
            }),
            config.componentFactoryResolver,
          );
          return overlay.attach(containerPortal).instance;
        }
        _attachDialogContent(
          componentOrTemplateRef,
          dialogRef,
          dialogContainer,
          config,
        ) {
          if (componentOrTemplateRef instanceof core.TemplateRef) {
            const injector = this._createInjector(
              config,
              dialogRef,
              dialogContainer,
              void 0,
            );
            let context = { $implicit: config.data, dialogRef };
            config.templateContext &&
              (context = {
                ...context,
                ...("function" == typeof config.templateContext
                  ? config.templateContext()
                  : config.templateContext),
              }),
              dialogContainer.attachTemplatePortal(
                new portal.VA(componentOrTemplateRef, null, context, injector),
              );
          } else {
            const injector = this._createInjector(
                config,
                dialogRef,
                dialogContainer,
                this._injector,
              ),
              contentRef = dialogContainer.attachComponentPortal(
                new portal.A8(
                  componentOrTemplateRef,
                  config.viewContainerRef,
                  injector,
                  config.componentFactoryResolver,
                ),
              );
            (dialogRef.componentRef = contentRef),
              (dialogRef.componentInstance = contentRef.instance);
          }
        }
        _createInjector(config, dialogRef, dialogContainer, fallbackInjector) {
          const userInjector =
              config.injector || config.viewContainerRef?.injector,
            providers = [
              { provide: DIALOG_DATA, useValue: config.data },
              { provide: DialogRef, useValue: dialogRef },
            ];
          return (
            config.providers &&
              ("function" == typeof config.providers
                ? providers.push(
                    ...config.providers(dialogRef, config, dialogContainer),
                  )
                : providers.push(...config.providers)),
            !config.direction ||
              (userInjector &&
                userInjector.get(bidi.dS, null, { optional: !0 })) ||
              providers.push({
                provide: bidi.dS,
                useValue: { value: config.direction, change: (0, of.of)() },
              }),
            core.Injector.create({
              parent: userInjector || fallbackInjector,
              providers,
            })
          );
        }
        _removeOpenDialog(dialogRef, emitEvent) {
          const index = this.openDialogs.indexOf(dialogRef);
          index > -1 &&
            (this.openDialogs.splice(index, 1),
            this.openDialogs.length ||
              (this._ariaHiddenElements.forEach((previousValue, element) => {
                previousValue
                  ? element.setAttribute("aria-hidden", previousValue)
                  : element.removeAttribute("aria-hidden");
              }),
              this._ariaHiddenElements.clear(),
              emitEvent && this._getAfterAllClosed().next()));
        }
        _hideNonDialogContentFromAssistiveTechnology() {
          const overlayContainer = this._overlayContainer.getContainerElement();
          if (overlayContainer.parentElement) {
            const siblings = overlayContainer.parentElement.children;
            for (let i = siblings.length - 1; i > -1; i--) {
              const sibling = siblings[i];
              sibling === overlayContainer ||
                "SCRIPT" === sibling.nodeName ||
                "STYLE" === sibling.nodeName ||
                sibling.hasAttribute("aria-live") ||
                (this._ariaHiddenElements.set(
                  sibling,
                  sibling.getAttribute("aria-hidden"),
                ),
                sibling.setAttribute("aria-hidden", "true"));
            }
          }
        }
        _getAfterAllClosed() {
          const parent = this._parentDialog;
          return parent
            ? parent._getAfterAllClosed()
            : this._afterAllClosedAtThisLevel;
        }
        static #_ = (this.ɵfac = function Dialog_Factory(t) {
          return new (t || Dialog)(
            core["ɵɵinject"](fesm2022_overlay.hJ),
            core["ɵɵinject"](core.Injector),
            core["ɵɵinject"](DEFAULT_DIALOG_CONFIG, 8),
            core["ɵɵinject"](Dialog, 12),
            core["ɵɵinject"](fesm2022_overlay.Sf),
            core["ɵɵinject"](DIALOG_SCROLL_STRATEGY),
          );
        });
        static #_2 = (this.ɵprov = core["ɵɵdefineInjectable"]({
          token: Dialog,
          factory: Dialog.ɵfac,
          providedIn: "root",
        }));
      }
      function reverseForEach(items, callback) {
        let i = items.length;
        for (; i--; ) callback(items[i]);
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          Dialog,
          [{ type: core.Injectable, args: [{ providedIn: "root" }] }],
          () => [
            { type: fesm2022_overlay.hJ },
            { type: core.Injector },
            {
              type: DialogConfig,
              decorators: [
                { type: core.Optional },
                { type: core.Inject, args: [DEFAULT_DIALOG_CONFIG] },
              ],
            },
            {
              type: Dialog,
              decorators: [{ type: core.Optional }, { type: core.SkipSelf }],
            },
            { type: fesm2022_overlay.Sf },
            {
              type: void 0,
              decorators: [
                { type: core.Inject, args: [DIALOG_SCROLL_STRATEGY] },
              ],
            },
          ],
          null,
        );
      class DialogModule {
        static #_ = (this.ɵfac = function DialogModule_Factory(t) {
          return new (t || DialogModule)();
        });
        static #_2 = (this.ɵmod = core["ɵɵdefineNgModule"]({
          type: DialogModule,
          imports: [
            fesm2022_overlay.z_,
            portal.jc,
            a11y.Pd,
            CdkDialogContainer,
          ],
          exports: [portal.jc, CdkDialogContainer],
        }));
        static #_3 = (this.ɵinj = core["ɵɵdefineInjector"]({
          providers: [Dialog],
          imports: [fesm2022_overlay.z_, portal.jc, a11y.Pd, portal.jc],
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          DialogModule,
          [
            {
              type: core.NgModule,
              args: [
                {
                  imports: [
                    fesm2022_overlay.z_,
                    portal.jc,
                    a11y.Pd,
                    CdkDialogContainer,
                  ],
                  exports: [portal.jc, CdkDialogContainer],
                  providers: [Dialog],
                },
              ],
            },
          ],
          null,
          null,
        );
      var coercion = __webpack_require__(
          "./node_modules/@angular/cdk/fesm2022/coercion.mjs",
        ),
        merge = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/observable/merge.js",
        ),
        filter = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/filter.js",
        ),
        take = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/take.js",
        ),
        fesm2022_core = __webpack_require__(
          "./node_modules/@angular/material/fesm2022/core.mjs",
        ),
        animations = __webpack_require__(
          "./node_modules/@angular/animations/fesm2022/animations.mjs",
        );
      function MatDialogContainer_ng_template_2_Template(rf, ctx) {}
      class MatDialogConfig {
        constructor() {
          (this.role = "dialog"),
            (this.panelClass = ""),
            (this.hasBackdrop = !0),
            (this.backdropClass = ""),
            (this.disableClose = !1),
            (this.width = ""),
            (this.height = ""),
            (this.data = null),
            (this.ariaDescribedBy = null),
            (this.ariaLabelledBy = null),
            (this.ariaLabel = null),
            (this.ariaModal = !0),
            (this.autoFocus = "first-tabbable"),
            (this.restoreFocus = !0),
            (this.delayFocusTrap = !0),
            (this.closeOnNavigation = !0);
        }
      }
      class MatDialogContainer extends CdkDialogContainer {
        constructor(
          elementRef,
          focusTrapFactory,
          _document,
          dialogConfig,
          interactivityChecker,
          ngZone,
          overlayRef,
          _animationMode,
          focusMonitor,
        ) {
          super(
            elementRef,
            focusTrapFactory,
            _document,
            dialogConfig,
            interactivityChecker,
            ngZone,
            overlayRef,
            focusMonitor,
          ),
            (this._animationMode = _animationMode),
            (this._animationStateChanged = new core.EventEmitter()),
            (this._animationsEnabled =
              "NoopAnimations" !== this._animationMode),
            (this._actionSectionCount = 0),
            (this._hostElement = this._elementRef.nativeElement),
            (this._enterAnimationDuration = this._animationsEnabled
              ? (parseCssTime(this._config.enterAnimationDuration) ?? 150)
              : 0),
            (this._exitAnimationDuration = this._animationsEnabled
              ? (parseCssTime(this._config.exitAnimationDuration) ?? 75)
              : 0),
            (this._animationTimer = null),
            (this._finishDialogOpen = () => {
              this._clearAnimationClasses(),
                this._openAnimationDone(this._enterAnimationDuration);
            }),
            (this._finishDialogClose = () => {
              this._clearAnimationClasses(),
                this._animationStateChanged.emit({
                  state: "closed",
                  totalTime: this._exitAnimationDuration,
                });
            });
        }
        _contentAttached() {
          super._contentAttached(), this._startOpenAnimation();
        }
        _startOpenAnimation() {
          this._animationStateChanged.emit({
            state: "opening",
            totalTime: this._enterAnimationDuration,
          }),
            this._animationsEnabled
              ? (this._hostElement.style.setProperty(
                  TRANSITION_DURATION_PROPERTY,
                  `${this._enterAnimationDuration}ms`,
                ),
                this._requestAnimationFrame(() =>
                  this._hostElement.classList.add(
                    "mdc-dialog--opening",
                    "mdc-dialog--open",
                  ),
                ),
                this._waitForAnimationToComplete(
                  this._enterAnimationDuration,
                  this._finishDialogOpen,
                ))
              : (this._hostElement.classList.add("mdc-dialog--open"),
                Promise.resolve().then(() => this._finishDialogOpen()));
        }
        _startExitAnimation() {
          this._animationStateChanged.emit({
            state: "closing",
            totalTime: this._exitAnimationDuration,
          }),
            this._hostElement.classList.remove("mdc-dialog--open"),
            this._animationsEnabled
              ? (this._hostElement.style.setProperty(
                  TRANSITION_DURATION_PROPERTY,
                  `${this._exitAnimationDuration}ms`,
                ),
                this._requestAnimationFrame(() =>
                  this._hostElement.classList.add("mdc-dialog--closing"),
                ),
                this._waitForAnimationToComplete(
                  this._exitAnimationDuration,
                  this._finishDialogClose,
                ))
              : Promise.resolve().then(() => this._finishDialogClose());
        }
        _updateActionSectionCount(delta) {
          (this._actionSectionCount += delta),
            this._changeDetectorRef.markForCheck();
        }
        _clearAnimationClasses() {
          this._hostElement.classList.remove(
            "mdc-dialog--opening",
            "mdc-dialog--closing",
          );
        }
        _waitForAnimationToComplete(duration, callback) {
          null !== this._animationTimer && clearTimeout(this._animationTimer),
            (this._animationTimer = setTimeout(callback, duration));
        }
        _requestAnimationFrame(callback) {
          this._ngZone.runOutsideAngular(() => {
            "function" == typeof requestAnimationFrame
              ? requestAnimationFrame(callback)
              : callback();
          });
        }
        _captureInitialFocus() {
          this._config.delayFocusTrap || this._trapFocus();
        }
        _openAnimationDone(totalTime) {
          this._config.delayFocusTrap && this._trapFocus(),
            this._animationStateChanged.next({ state: "opened", totalTime });
        }
        ngOnDestroy() {
          super.ngOnDestroy(),
            null !== this._animationTimer && clearTimeout(this._animationTimer);
        }
        attachComponentPortal(portal) {
          const ref = super.attachComponentPortal(portal);
          return (
            ref.location.nativeElement.classList.add(
              "mat-mdc-dialog-component-host",
            ),
            ref
          );
        }
        static #_ = (this.ɵfac = function MatDialogContainer_Factory(t) {
          return new (t || MatDialogContainer)(
            core["ɵɵdirectiveInject"](core.ElementRef),
            core["ɵɵdirectiveInject"](a11y.GX),
            core["ɵɵdirectiveInject"](common.DOCUMENT, 8),
            core["ɵɵdirectiveInject"](MatDialogConfig),
            core["ɵɵdirectiveInject"](a11y.Z7),
            core["ɵɵdirectiveInject"](core.NgZone),
            core["ɵɵdirectiveInject"](fesm2022_overlay.yY),
            core["ɵɵdirectiveInject"](core.ANIMATION_MODULE_TYPE, 8),
            core["ɵɵdirectiveInject"](a11y.FN),
          );
        });
        static #_2 = (this.ɵcmp = core["ɵɵdefineComponent"]({
          type: MatDialogContainer,
          selectors: [["mat-dialog-container"]],
          hostAttrs: [
            "tabindex",
            "-1",
            1,
            "mat-mdc-dialog-container",
            "mdc-dialog",
          ],
          hostVars: 10,
          hostBindings: function MatDialogContainer_HostBindings(rf, ctx) {
            2 & rf &&
              (core["ɵɵhostProperty"]("id", ctx._config.id),
              core["ɵɵattribute"]("aria-modal", ctx._config.ariaModal)(
                "role",
                ctx._config.role,
              )(
                "aria-labelledby",
                ctx._config.ariaLabel ? null : ctx._ariaLabelledByQueue[0],
              )("aria-label", ctx._config.ariaLabel)(
                "aria-describedby",
                ctx._config.ariaDescribedBy || null,
              ),
              core["ɵɵclassProp"](
                "_mat-animation-noopable",
                !ctx._animationsEnabled,
              )(
                "mat-mdc-dialog-container-with-actions",
                ctx._actionSectionCount > 0,
              ));
          },
          standalone: !0,
          features: [
            core["ɵɵInheritDefinitionFeature"],
            core["ɵɵStandaloneFeature"],
          ],
          decls: 3,
          vars: 0,
          consts: [
            [1, "mdc-dialog__container"],
            [1, "mat-mdc-dialog-surface", "mdc-dialog__surface"],
            ["cdkPortalOutlet", ""],
          ],
          template: function MatDialogContainer_Template(rf, ctx) {
            1 & rf &&
              (core["ɵɵelementStart"](0, "div", 0)(1, "div", 1),
              core["ɵɵtemplate"](
                2,
                MatDialogContainer_ng_template_2_Template,
                0,
                0,
                "ng-template",
                2,
              ),
              core["ɵɵelementEnd"]()());
          },
          dependencies: [portal.I3],
          styles: [
            '.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-dialog,.mdc-dialog__scrim{position:fixed;top:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;width:100%;height:100%}.mdc-dialog{display:none;z-index:var(--mdc-dialog-z-index, 7)}.mdc-dialog .mdc-dialog__content{padding:20px 24px 20px 24px}.mdc-dialog .mdc-dialog__surface{min-width:280px}@media(max-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:calc(100vw - 32px)}}@media(min-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:560px}}.mdc-dialog .mdc-dialog__surface{max-height:calc(100% - 32px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-width:none}@media(max-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px;width:560px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 112px)}}@media(max-width: 720px)and (min-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:560px}}@media(max-width: 720px)and (max-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:calc(100vh - 160px)}}@media(max-width: 720px)and (min-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px}}@media(max-width: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-height: 400px),(max-width: 600px),(min-width: 720px)and (max-height: 400px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100vw;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:calc(16px - 2 * 12px)}}@media(min-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 400px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}.mdc-dialog.mdc-dialog__scrim--hidden .mdc-dialog__scrim{opacity:0}.mdc-dialog__scrim{opacity:0;z-index:-1}.mdc-dialog__container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;opacity:0;pointer-events:none}.mdc-dialog__surface{position:relative;display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;max-width:100%;max-height:100%;pointer-events:auto;overflow-y:auto;outline:0;transform:scale(0.8)}.mdc-dialog__surface .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}[dir=rtl] .mdc-dialog__surface,.mdc-dialog__surface[dir=rtl]{text-align:right}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-dialog__surface{outline:2px solid windowText}}.mdc-dialog__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-dialog__surface::before{border-color:CanvasText}}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.mdc-dialog__surface::before{content:none}}.mdc-dialog__title{display:block;margin-top:0;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:0 24px 9px}.mdc-dialog__title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mdc-dialog__title,.mdc-dialog__title[dir=rtl]{text-align:right}.mdc-dialog--scrollable .mdc-dialog__title{margin-bottom:1px;padding-bottom:15px}.mdc-dialog--fullscreen .mdc-dialog__header{align-items:baseline;border-bottom:1px solid rgba(0,0,0,0);display:inline-flex;justify-content:space-between;padding:0 24px 9px;z-index:1}@media screen and (forced-colors: active){.mdc-dialog--fullscreen .mdc-dialog__header{border-bottom-color:CanvasText}}.mdc-dialog--fullscreen .mdc-dialog__header .mdc-dialog__close{right:-12px}.mdc-dialog--fullscreen .mdc-dialog__title{margin-bottom:0;padding:0;border-bottom:0}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:0;margin-bottom:0}.mdc-dialog--fullscreen .mdc-dialog__close{top:5px}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top:1px solid rgba(0,0,0,0)}@media screen and (forced-colors: active){.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog--fullscreen--titleless .mdc-dialog__close{margin-top:4px}.mdc-dialog--fullscreen--titleless.mdc-dialog--scrollable .mdc-dialog__close{margin-top:0}.mdc-dialog__content{flex-grow:1;box-sizing:border-box;margin:0;overflow:auto}.mdc-dialog__content>:first-child{margin-top:0}.mdc-dialog__content>:last-child{margin-bottom:0}.mdc-dialog__title+.mdc-dialog__content,.mdc-dialog__header+.mdc-dialog__content{padding-top:0}.mdc-dialog--scrollable .mdc-dialog__title+.mdc-dialog__content{padding-top:8px;padding-bottom:8px}.mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:6px 0 0}.mdc-dialog--scrollable .mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:0}.mdc-dialog__actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid rgba(0,0,0,0)}@media screen and (forced-colors: active){.mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog--stacked .mdc-dialog__actions{flex-direction:column;align-items:flex-end}.mdc-dialog__button{margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{margin-left:0;margin-right:8px}.mdc-dialog__button:first-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button:first-child,.mdc-dialog__button:first-child[dir=rtl]{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{text-align:left}.mdc-dialog--stacked .mdc-dialog__button:not(:first-child){margin-top:12px}.mdc-dialog--open,.mdc-dialog--opening,.mdc-dialog--closing{display:flex}.mdc-dialog--opening .mdc-dialog__scrim{transition:opacity 150ms linear}.mdc-dialog--opening .mdc-dialog__container{transition:opacity 75ms linear,transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-dialog--closing .mdc-dialog__scrim,.mdc-dialog--closing .mdc-dialog__container{transition:opacity 75ms linear}.mdc-dialog--closing .mdc-dialog__container{transform:none}.mdc-dialog--closing .mdc-dialog__surface{transform:none}.mdc-dialog--open .mdc-dialog__scrim{opacity:1}.mdc-dialog--open .mdc-dialog__container{opacity:1}.mdc-dialog--open .mdc-dialog__surface{transform:none}.mdc-dialog--open.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim{opacity:1}.mdc-dialog--open.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{transition:opacity 75ms linear}.mdc-dialog--open.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim{transition:opacity 150ms linear}.mdc-dialog__surface-scrim{display:none;opacity:0;position:absolute;width:100%;height:100%;z-index:1}.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{display:block}.mdc-dialog-scroll-lock{overflow:hidden}.mdc-dialog--no-content-padding .mdc-dialog__content{padding:0}.mdc-dialog--sheet .mdc-dialog__container .mdc-dialog__close{right:12px;top:9px;position:absolute;z-index:1}.mdc-dialog__scrim--removed{pointer-events:none}.mdc-dialog__scrim--removed .mdc-dialog__scrim,.mdc-dialog__scrim--removed .mdc-dialog__surface-scrim{display:none}.mat-mdc-dialog-content{max-height:65vh}.mat-mdc-dialog-container{position:static;display:block}.mat-mdc-dialog-container,.mat-mdc-dialog-container .mdc-dialog__container,.mat-mdc-dialog-container .mdc-dialog__surface{max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mat-mdc-dialog-container .mdc-dialog__surface{width:100%;height:100%}.mat-mdc-dialog-component-host{display:contents}.mat-mdc-dialog-container{--mdc-dialog-container-elevation: var(--mdc-dialog-container-elevation-shadow);outline:0}.mat-mdc-dialog-container .mdc-dialog__surface{background-color:var(--mdc-dialog-container-color, white)}.mat-mdc-dialog-container .mdc-dialog__surface{box-shadow:var(--mdc-dialog-container-elevation, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12))}.mat-mdc-dialog-container .mdc-dialog__surface{border-radius:var(--mdc-dialog-container-shape, 4px)}.mat-mdc-dialog-container .mdc-dialog__title{font-family:var(--mdc-dialog-subhead-font, Roboto, sans-serif);line-height:var(--mdc-dialog-subhead-line-height, 1.5rem);font-size:var(--mdc-dialog-subhead-size, 1rem);font-weight:var(--mdc-dialog-subhead-weight, 400);letter-spacing:var(--mdc-dialog-subhead-tracking, 0.03125em)}.mat-mdc-dialog-container .mdc-dialog__title{color:var(--mdc-dialog-subhead-color, rgba(0, 0, 0, 0.87))}.mat-mdc-dialog-container .mdc-dialog__content{font-family:var(--mdc-dialog-supporting-text-font, Roboto, sans-serif);line-height:var(--mdc-dialog-supporting-text-line-height, 1.5rem);font-size:var(--mdc-dialog-supporting-text-size, 1rem);font-weight:var(--mdc-dialog-supporting-text-weight, 400);letter-spacing:var(--mdc-dialog-supporting-text-tracking, 0.03125em)}.mat-mdc-dialog-container .mdc-dialog__content{color:var(--mdc-dialog-supporting-text-color, rgba(0, 0, 0, 0.6))}.mat-mdc-dialog-container .mdc-dialog__container{transition:opacity linear var(--mat-dialog-transition-duration, 0ms)}.mat-mdc-dialog-container .mdc-dialog__surface{transition:transform var(--mat-dialog-transition-duration, 0ms) 0ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-dialog-container._mat-animation-noopable .mdc-dialog__container,.mat-mdc-dialog-container._mat-animation-noopable .mdc-dialog__surface{transition:none}.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-max-width, 80vw);min-width:var(--mat-dialog-container-min-width, 0)}@media(max-width: 599px){.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-small-max-width, 80vw)}}.mat-mdc-dialog-title{padding:var(--mat-dialog-headline-padding, 0 24px 9px)}.mat-mdc-dialog-content{display:block}.mat-mdc-dialog-container .mat-mdc-dialog-content{padding:var(--mat-dialog-content-padding, 20px 24px)}.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content{padding:var(--mat-dialog-with-actions-content-padding, 20px 24px)}.mat-mdc-dialog-container .mat-mdc-dialog-title+.mat-mdc-dialog-content{padding-top:0}.mat-mdc-dialog-actions{padding:var(--mat-dialog-actions-padding, 8px);justify-content:var(--mat-dialog-actions-alignment, start)}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start,.mat-mdc-dialog-actions[align=start]{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}',
          ],
          encapsulation: 2,
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          MatDialogContainer,
          [
            {
              type: core.Component,
              args: [
                {
                  selector: "mat-dialog-container",
                  encapsulation: core.ViewEncapsulation.None,
                  changeDetection: core.ChangeDetectionStrategy.Default,
                  standalone: !0,
                  imports: [portal.I3],
                  host: {
                    class: "mat-mdc-dialog-container mdc-dialog",
                    tabindex: "-1",
                    "[attr.aria-modal]": "_config.ariaModal",
                    "[id]": "_config.id",
                    "[attr.role]": "_config.role",
                    "[attr.aria-labelledby]":
                      "_config.ariaLabel ? null : _ariaLabelledByQueue[0]",
                    "[attr.aria-label]": "_config.ariaLabel",
                    "[attr.aria-describedby]":
                      "_config.ariaDescribedBy || null",
                    "[class._mat-animation-noopable]": "!_animationsEnabled",
                    "[class.mat-mdc-dialog-container-with-actions]":
                      "_actionSectionCount > 0",
                  },
                  template:
                    '<div class="mdc-dialog__container">\n  <div class="mat-mdc-dialog-surface mdc-dialog__surface">\n    <ng-template cdkPortalOutlet />\n  </div>\n</div>\n',
                  styles: [
                    '.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-dialog,.mdc-dialog__scrim{position:fixed;top:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;width:100%;height:100%}.mdc-dialog{display:none;z-index:var(--mdc-dialog-z-index, 7)}.mdc-dialog .mdc-dialog__content{padding:20px 24px 20px 24px}.mdc-dialog .mdc-dialog__surface{min-width:280px}@media(max-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:calc(100vw - 32px)}}@media(min-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:560px}}.mdc-dialog .mdc-dialog__surface{max-height:calc(100% - 32px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-width:none}@media(max-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px;width:560px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 112px)}}@media(max-width: 720px)and (min-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:560px}}@media(max-width: 720px)and (max-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:calc(100vh - 160px)}}@media(max-width: 720px)and (min-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px}}@media(max-width: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-height: 400px),(max-width: 600px),(min-width: 720px)and (max-height: 400px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100vw;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:calc(16px - 2 * 12px)}}@media(min-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 400px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}.mdc-dialog.mdc-dialog__scrim--hidden .mdc-dialog__scrim{opacity:0}.mdc-dialog__scrim{opacity:0;z-index:-1}.mdc-dialog__container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;opacity:0;pointer-events:none}.mdc-dialog__surface{position:relative;display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;max-width:100%;max-height:100%;pointer-events:auto;overflow-y:auto;outline:0;transform:scale(0.8)}.mdc-dialog__surface .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}[dir=rtl] .mdc-dialog__surface,.mdc-dialog__surface[dir=rtl]{text-align:right}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-dialog__surface{outline:2px solid windowText}}.mdc-dialog__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-dialog__surface::before{border-color:CanvasText}}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.mdc-dialog__surface::before{content:none}}.mdc-dialog__title{display:block;margin-top:0;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:0 24px 9px}.mdc-dialog__title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mdc-dialog__title,.mdc-dialog__title[dir=rtl]{text-align:right}.mdc-dialog--scrollable .mdc-dialog__title{margin-bottom:1px;padding-bottom:15px}.mdc-dialog--fullscreen .mdc-dialog__header{align-items:baseline;border-bottom:1px solid rgba(0,0,0,0);display:inline-flex;justify-content:space-between;padding:0 24px 9px;z-index:1}@media screen and (forced-colors: active){.mdc-dialog--fullscreen .mdc-dialog__header{border-bottom-color:CanvasText}}.mdc-dialog--fullscreen .mdc-dialog__header .mdc-dialog__close{right:-12px}.mdc-dialog--fullscreen .mdc-dialog__title{margin-bottom:0;padding:0;border-bottom:0}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:0;margin-bottom:0}.mdc-dialog--fullscreen .mdc-dialog__close{top:5px}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top:1px solid rgba(0,0,0,0)}@media screen and (forced-colors: active){.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog--fullscreen--titleless .mdc-dialog__close{margin-top:4px}.mdc-dialog--fullscreen--titleless.mdc-dialog--scrollable .mdc-dialog__close{margin-top:0}.mdc-dialog__content{flex-grow:1;box-sizing:border-box;margin:0;overflow:auto}.mdc-dialog__content>:first-child{margin-top:0}.mdc-dialog__content>:last-child{margin-bottom:0}.mdc-dialog__title+.mdc-dialog__content,.mdc-dialog__header+.mdc-dialog__content{padding-top:0}.mdc-dialog--scrollable .mdc-dialog__title+.mdc-dialog__content{padding-top:8px;padding-bottom:8px}.mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:6px 0 0}.mdc-dialog--scrollable .mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:0}.mdc-dialog__actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid rgba(0,0,0,0)}@media screen and (forced-colors: active){.mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog--stacked .mdc-dialog__actions{flex-direction:column;align-items:flex-end}.mdc-dialog__button{margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{margin-left:0;margin-right:8px}.mdc-dialog__button:first-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button:first-child,.mdc-dialog__button:first-child[dir=rtl]{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{text-align:left}.mdc-dialog--stacked .mdc-dialog__button:not(:first-child){margin-top:12px}.mdc-dialog--open,.mdc-dialog--opening,.mdc-dialog--closing{display:flex}.mdc-dialog--opening .mdc-dialog__scrim{transition:opacity 150ms linear}.mdc-dialog--opening .mdc-dialog__container{transition:opacity 75ms linear,transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-dialog--closing .mdc-dialog__scrim,.mdc-dialog--closing .mdc-dialog__container{transition:opacity 75ms linear}.mdc-dialog--closing .mdc-dialog__container{transform:none}.mdc-dialog--closing .mdc-dialog__surface{transform:none}.mdc-dialog--open .mdc-dialog__scrim{opacity:1}.mdc-dialog--open .mdc-dialog__container{opacity:1}.mdc-dialog--open .mdc-dialog__surface{transform:none}.mdc-dialog--open.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim{opacity:1}.mdc-dialog--open.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{transition:opacity 75ms linear}.mdc-dialog--open.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim{transition:opacity 150ms linear}.mdc-dialog__surface-scrim{display:none;opacity:0;position:absolute;width:100%;height:100%;z-index:1}.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{display:block}.mdc-dialog-scroll-lock{overflow:hidden}.mdc-dialog--no-content-padding .mdc-dialog__content{padding:0}.mdc-dialog--sheet .mdc-dialog__container .mdc-dialog__close{right:12px;top:9px;position:absolute;z-index:1}.mdc-dialog__scrim--removed{pointer-events:none}.mdc-dialog__scrim--removed .mdc-dialog__scrim,.mdc-dialog__scrim--removed .mdc-dialog__surface-scrim{display:none}.mat-mdc-dialog-content{max-height:65vh}.mat-mdc-dialog-container{position:static;display:block}.mat-mdc-dialog-container,.mat-mdc-dialog-container .mdc-dialog__container,.mat-mdc-dialog-container .mdc-dialog__surface{max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mat-mdc-dialog-container .mdc-dialog__surface{width:100%;height:100%}.mat-mdc-dialog-component-host{display:contents}.mat-mdc-dialog-container{--mdc-dialog-container-elevation: var(--mdc-dialog-container-elevation-shadow);outline:0}.mat-mdc-dialog-container .mdc-dialog__surface{background-color:var(--mdc-dialog-container-color, white)}.mat-mdc-dialog-container .mdc-dialog__surface{box-shadow:var(--mdc-dialog-container-elevation, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12))}.mat-mdc-dialog-container .mdc-dialog__surface{border-radius:var(--mdc-dialog-container-shape, 4px)}.mat-mdc-dialog-container .mdc-dialog__title{font-family:var(--mdc-dialog-subhead-font, Roboto, sans-serif);line-height:var(--mdc-dialog-subhead-line-height, 1.5rem);font-size:var(--mdc-dialog-subhead-size, 1rem);font-weight:var(--mdc-dialog-subhead-weight, 400);letter-spacing:var(--mdc-dialog-subhead-tracking, 0.03125em)}.mat-mdc-dialog-container .mdc-dialog__title{color:var(--mdc-dialog-subhead-color, rgba(0, 0, 0, 0.87))}.mat-mdc-dialog-container .mdc-dialog__content{font-family:var(--mdc-dialog-supporting-text-font, Roboto, sans-serif);line-height:var(--mdc-dialog-supporting-text-line-height, 1.5rem);font-size:var(--mdc-dialog-supporting-text-size, 1rem);font-weight:var(--mdc-dialog-supporting-text-weight, 400);letter-spacing:var(--mdc-dialog-supporting-text-tracking, 0.03125em)}.mat-mdc-dialog-container .mdc-dialog__content{color:var(--mdc-dialog-supporting-text-color, rgba(0, 0, 0, 0.6))}.mat-mdc-dialog-container .mdc-dialog__container{transition:opacity linear var(--mat-dialog-transition-duration, 0ms)}.mat-mdc-dialog-container .mdc-dialog__surface{transition:transform var(--mat-dialog-transition-duration, 0ms) 0ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-dialog-container._mat-animation-noopable .mdc-dialog__container,.mat-mdc-dialog-container._mat-animation-noopable .mdc-dialog__surface{transition:none}.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-max-width, 80vw);min-width:var(--mat-dialog-container-min-width, 0)}@media(max-width: 599px){.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-small-max-width, 80vw)}}.mat-mdc-dialog-title{padding:var(--mat-dialog-headline-padding, 0 24px 9px)}.mat-mdc-dialog-content{display:block}.mat-mdc-dialog-container .mat-mdc-dialog-content{padding:var(--mat-dialog-content-padding, 20px 24px)}.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content{padding:var(--mat-dialog-with-actions-content-padding, 20px 24px)}.mat-mdc-dialog-container .mat-mdc-dialog-title+.mat-mdc-dialog-content{padding-top:0}.mat-mdc-dialog-actions{padding:var(--mat-dialog-actions-padding, 8px);justify-content:var(--mat-dialog-actions-alignment, start)}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start,.mat-mdc-dialog-actions[align=start]{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}',
                  ],
                },
              ],
            },
          ],
          () => [
            { type: core.ElementRef },
            { type: a11y.GX },
            {
              type: void 0,
              decorators: [
                { type: core.Optional },
                { type: core.Inject, args: [common.DOCUMENT] },
              ],
            },
            { type: MatDialogConfig },
            { type: a11y.Z7 },
            { type: core.NgZone },
            { type: fesm2022_overlay.yY },
            {
              type: void 0,
              decorators: [
                { type: core.Optional },
                { type: core.Inject, args: [core.ANIMATION_MODULE_TYPE] },
              ],
            },
            { type: a11y.FN },
          ],
          null,
        );
      const TRANSITION_DURATION_PROPERTY = "--mat-dialog-transition-duration";
      function parseCssTime(time) {
        return null == time
          ? null
          : "number" == typeof time
            ? time
            : time.endsWith("ms")
              ? (0, coercion.OE)(time.substring(0, time.length - 2))
              : time.endsWith("s")
                ? 1e3 * (0, coercion.OE)(time.substring(0, time.length - 1))
                : "0" === time
                  ? 0
                  : null;
      }
      var MatDialogState;
      !(function (MatDialogState) {
        (MatDialogState[(MatDialogState.OPEN = 0)] = "OPEN"),
          (MatDialogState[(MatDialogState.CLOSING = 1)] = "CLOSING"),
          (MatDialogState[(MatDialogState.CLOSED = 2)] = "CLOSED");
      })(MatDialogState || (MatDialogState = {}));
      class MatDialogRef {
        constructor(_ref, config, _containerInstance) {
          (this._ref = _ref),
            (this._containerInstance = _containerInstance),
            (this._afterOpened = new Subject.B()),
            (this._beforeClosed = new Subject.B()),
            (this._state = MatDialogState.OPEN),
            (this.disableClose = config.disableClose),
            (this.id = _ref.id),
            _ref.addPanelClass("mat-mdc-dialog-panel"),
            _containerInstance._animationStateChanged
              .pipe(
                (0, filter.p)((event) => "opened" === event.state),
                (0, take.s)(1),
              )
              .subscribe(() => {
                this._afterOpened.next(), this._afterOpened.complete();
              }),
            _containerInstance._animationStateChanged
              .pipe(
                (0, filter.p)((event) => "closed" === event.state),
                (0, take.s)(1),
              )
              .subscribe(() => {
                clearTimeout(this._closeFallbackTimeout),
                  this._finishDialogClose();
              }),
            _ref.overlayRef.detachments().subscribe(() => {
              this._beforeClosed.next(this._result),
                this._beforeClosed.complete(),
                this._finishDialogClose();
            }),
            (0, merge.h)(
              this.backdropClick(),
              this.keydownEvents().pipe(
                (0, filter.p)(
                  (event) =>
                    event.keyCode === keycodes._f &&
                    !this.disableClose &&
                    !(0, keycodes.rp)(event),
                ),
              ),
            ).subscribe((event) => {
              this.disableClose ||
                (event.preventDefault(),
                _closeDialogVia(
                  this,
                  "keydown" === event.type ? "keyboard" : "mouse",
                ));
            });
        }
        close(dialogResult) {
          (this._result = dialogResult),
            this._containerInstance._animationStateChanged
              .pipe(
                (0, filter.p)((event) => "closing" === event.state),
                (0, take.s)(1),
              )
              .subscribe((event) => {
                this._beforeClosed.next(dialogResult),
                  this._beforeClosed.complete(),
                  this._ref.overlayRef.detachBackdrop(),
                  (this._closeFallbackTimeout = setTimeout(
                    () => this._finishDialogClose(),
                    event.totalTime + 100,
                  ));
              }),
            (this._state = MatDialogState.CLOSING),
            this._containerInstance._startExitAnimation();
        }
        afterOpened() {
          return this._afterOpened;
        }
        afterClosed() {
          return this._ref.closed;
        }
        beforeClosed() {
          return this._beforeClosed;
        }
        backdropClick() {
          return this._ref.backdropClick;
        }
        keydownEvents() {
          return this._ref.keydownEvents;
        }
        updatePosition(position) {
          let strategy = this._ref.config.positionStrategy;
          return (
            position && (position.left || position.right)
              ? position.left
                ? strategy.left(position.left)
                : strategy.right(position.right)
              : strategy.centerHorizontally(),
            position && (position.top || position.bottom)
              ? position.top
                ? strategy.top(position.top)
                : strategy.bottom(position.bottom)
              : strategy.centerVertically(),
            this._ref.updatePosition(),
            this
          );
        }
        updateSize(width = "", height = "") {
          return this._ref.updateSize(width, height), this;
        }
        addPanelClass(classes) {
          return this._ref.addPanelClass(classes), this;
        }
        removePanelClass(classes) {
          return this._ref.removePanelClass(classes), this;
        }
        getState() {
          return this._state;
        }
        _finishDialogClose() {
          (this._state = MatDialogState.CLOSED),
            this._ref.close(this._result, {
              focusOrigin: this._closeInteractionType,
            }),
            (this.componentInstance = null);
        }
      }
      function _closeDialogVia(ref, interactionType, result) {
        return (ref._closeInteractionType = interactionType), ref.close(result);
      }
      const MAT_DIALOG_DATA = new core.InjectionToken("MatMdcDialogData"),
        MAT_DIALOG_DEFAULT_OPTIONS = new core.InjectionToken(
          "mat-mdc-dialog-default-options",
        ),
        MAT_DIALOG_SCROLL_STRATEGY = new core.InjectionToken(
          "mat-mdc-dialog-scroll-strategy",
          {
            providedIn: "root",
            factory: () => {
              const overlay = (0, core.inject)(fesm2022_overlay.hJ);
              return () => overlay.scrollStrategies.block();
            },
          },
        );
      fesm2022_overlay.hJ;
      let dialog_uniqueId = 0;
      class MatDialog {
        get openDialogs() {
          return this._parentDialog
            ? this._parentDialog.openDialogs
            : this._openDialogsAtThisLevel;
        }
        get afterOpened() {
          return this._parentDialog
            ? this._parentDialog.afterOpened
            : this._afterOpenedAtThisLevel;
        }
        _getAfterAllClosed() {
          const parent = this._parentDialog;
          return parent
            ? parent._getAfterAllClosed()
            : this._afterAllClosedAtThisLevel;
        }
        constructor(
          _overlay,
          injector,
          location,
          _defaultOptions,
          _scrollStrategy,
          _parentDialog,
          _overlayContainer,
          _animationMode,
        ) {
          (this._overlay = _overlay),
            (this._defaultOptions = _defaultOptions),
            (this._scrollStrategy = _scrollStrategy),
            (this._parentDialog = _parentDialog),
            (this._openDialogsAtThisLevel = []),
            (this._afterAllClosedAtThisLevel = new Subject.B()),
            (this._afterOpenedAtThisLevel = new Subject.B()),
            (this.dialogConfigClass = MatDialogConfig),
            (this.afterAllClosed = (0, defer.v)(() =>
              this.openDialogs.length
                ? this._getAfterAllClosed()
                : this._getAfterAllClosed().pipe((0, startWith.Z)(void 0)),
            )),
            (this._dialog = injector.get(Dialog)),
            (this._dialogRefConstructor = MatDialogRef),
            (this._dialogContainerType = MatDialogContainer),
            (this._dialogDataToken = MAT_DIALOG_DATA);
        }
        open(componentOrTemplateRef, config) {
          let dialogRef;
          ((config = {
            ...(this._defaultOptions || new MatDialogConfig()),
            ...config,
          }).id = config.id || "mat-mdc-dialog-" + dialog_uniqueId++),
            (config.scrollStrategy =
              config.scrollStrategy || this._scrollStrategy());
          const cdkRef = this._dialog.open(componentOrTemplateRef, {
            ...config,
            positionStrategy: this._overlay
              .position()
              .global()
              .centerHorizontally()
              .centerVertically(),
            disableClose: !0,
            closeOnDestroy: !1,
            closeOnOverlayDetachments: !1,
            container: {
              type: this._dialogContainerType,
              providers: () => [
                { provide: this.dialogConfigClass, useValue: config },
                { provide: DialogConfig, useValue: config },
              ],
            },
            templateContext: () => ({ dialogRef }),
            providers: (ref, cdkConfig, dialogContainer) => (
              (dialogRef = new this._dialogRefConstructor(
                ref,
                config,
                dialogContainer,
              )),
              dialogRef.updatePosition(config?.position),
              [
                {
                  provide: this._dialogContainerType,
                  useValue: dialogContainer,
                },
                { provide: this._dialogDataToken, useValue: cdkConfig.data },
                { provide: this._dialogRefConstructor, useValue: dialogRef },
              ]
            ),
          });
          return (
            (dialogRef.componentRef = cdkRef.componentRef),
            (dialogRef.componentInstance = cdkRef.componentInstance),
            this.openDialogs.push(dialogRef),
            this.afterOpened.next(dialogRef),
            dialogRef.afterClosed().subscribe(() => {
              const index = this.openDialogs.indexOf(dialogRef);
              index > -1 &&
                (this.openDialogs.splice(index, 1),
                this.openDialogs.length || this._getAfterAllClosed().next());
            }),
            dialogRef
          );
        }
        closeAll() {
          this._closeDialogs(this.openDialogs);
        }
        getDialogById(id) {
          return this.openDialogs.find((dialog) => dialog.id === id);
        }
        ngOnDestroy() {
          this._closeDialogs(this._openDialogsAtThisLevel),
            this._afterAllClosedAtThisLevel.complete(),
            this._afterOpenedAtThisLevel.complete();
        }
        _closeDialogs(dialogs) {
          let i = dialogs.length;
          for (; i--; ) dialogs[i].close();
        }
        static #_ = (this.ɵfac = function MatDialog_Factory(t) {
          return new (t || MatDialog)(
            core["ɵɵinject"](fesm2022_overlay.hJ),
            core["ɵɵinject"](core.Injector),
            core["ɵɵinject"](common.Location, 8),
            core["ɵɵinject"](MAT_DIALOG_DEFAULT_OPTIONS, 8),
            core["ɵɵinject"](MAT_DIALOG_SCROLL_STRATEGY),
            core["ɵɵinject"](MatDialog, 12),
            core["ɵɵinject"](fesm2022_overlay.Sf),
            core["ɵɵinject"](core.ANIMATION_MODULE_TYPE, 8),
          );
        });
        static #_2 = (this.ɵprov = core["ɵɵdefineInjectable"]({
          token: MatDialog,
          factory: MatDialog.ɵfac,
          providedIn: "root",
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          MatDialog,
          [{ type: core.Injectable, args: [{ providedIn: "root" }] }],
          () => [
            { type: fesm2022_overlay.hJ },
            { type: core.Injector },
            { type: common.Location, decorators: [{ type: core.Optional }] },
            {
              type: MatDialogConfig,
              decorators: [
                { type: core.Optional },
                { type: core.Inject, args: [MAT_DIALOG_DEFAULT_OPTIONS] },
              ],
            },
            {
              type: void 0,
              decorators: [
                { type: core.Inject, args: [MAT_DIALOG_SCROLL_STRATEGY] },
              ],
            },
            {
              type: MatDialog,
              decorators: [{ type: core.Optional }, { type: core.SkipSelf }],
            },
            { type: fesm2022_overlay.Sf },
            {
              type: void 0,
              decorators: [
                { type: core.Optional },
                { type: core.Inject, args: [core.ANIMATION_MODULE_TYPE] },
              ],
            },
          ],
          null,
        );
      let dialogElementUid = 0;
      class MatDialogClose {
        constructor(dialogRef, _elementRef, _dialog) {
          (this.dialogRef = dialogRef),
            (this._elementRef = _elementRef),
            (this._dialog = _dialog),
            (this.type = "button");
        }
        ngOnInit() {
          this.dialogRef ||
            (this.dialogRef = getClosestDialog(
              this._elementRef,
              this._dialog.openDialogs,
            ));
        }
        ngOnChanges(changes) {
          const proxiedChange =
            changes._matDialogClose || changes._matDialogCloseResult;
          proxiedChange && (this.dialogResult = proxiedChange.currentValue);
        }
        _onButtonClick(event) {
          _closeDialogVia(
            this.dialogRef,
            0 === event.screenX && 0 === event.screenY ? "keyboard" : "mouse",
            this.dialogResult,
          );
        }
        static #_ = (this.ɵfac = function MatDialogClose_Factory(t) {
          return new (t || MatDialogClose)(
            core["ɵɵdirectiveInject"](MatDialogRef, 8),
            core["ɵɵdirectiveInject"](core.ElementRef),
            core["ɵɵdirectiveInject"](MatDialog),
          );
        });
        static #_2 = (this.ɵdir = core["ɵɵdefineDirective"]({
          type: MatDialogClose,
          selectors: [
            ["", "mat-dialog-close", ""],
            ["", "matDialogClose", ""],
          ],
          hostVars: 2,
          hostBindings: function MatDialogClose_HostBindings(rf, ctx) {
            1 & rf &&
              core["ɵɵlistener"](
                "click",
                function MatDialogClose_click_HostBindingHandler($event) {
                  return ctx._onButtonClick($event);
                },
              ),
              2 & rf &&
                core["ɵɵattribute"]("aria-label", ctx.ariaLabel || null)(
                  "type",
                  ctx.type,
                );
          },
          inputs: {
            ariaLabel: [core["ɵɵInputFlags"].None, "aria-label", "ariaLabel"],
            type: "type",
            dialogResult: [
              core["ɵɵInputFlags"].None,
              "mat-dialog-close",
              "dialogResult",
            ],
            _matDialogClose: [
              core["ɵɵInputFlags"].None,
              "matDialogClose",
              "_matDialogClose",
            ],
          },
          exportAs: ["matDialogClose"],
          standalone: !0,
          features: [core["ɵɵNgOnChangesFeature"]],
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          MatDialogClose,
          [
            {
              type: core.Directive,
              args: [
                {
                  selector: "[mat-dialog-close], [matDialogClose]",
                  exportAs: "matDialogClose",
                  standalone: !0,
                  host: {
                    "(click)": "_onButtonClick($event)",
                    "[attr.aria-label]": "ariaLabel || null",
                    "[attr.type]": "type",
                  },
                },
              ],
            },
          ],
          () => [
            { type: MatDialogRef, decorators: [{ type: core.Optional }] },
            { type: core.ElementRef },
            { type: MatDialog },
          ],
          {
            ariaLabel: [{ type: core.Input, args: ["aria-label"] }],
            type: [{ type: core.Input }],
            dialogResult: [{ type: core.Input, args: ["mat-dialog-close"] }],
            _matDialogClose: [{ type: core.Input, args: ["matDialogClose"] }],
          },
        );
      class MatDialogLayoutSection {
        constructor(_dialogRef, _elementRef, _dialog) {
          (this._dialogRef = _dialogRef),
            (this._elementRef = _elementRef),
            (this._dialog = _dialog);
        }
        ngOnInit() {
          this._dialogRef ||
            (this._dialogRef = getClosestDialog(
              this._elementRef,
              this._dialog.openDialogs,
            )),
            this._dialogRef &&
              Promise.resolve().then(() => {
                this._onAdd();
              });
        }
        ngOnDestroy() {
          const instance = this._dialogRef?._containerInstance;
          instance &&
            Promise.resolve().then(() => {
              this._onRemove();
            });
        }
        static #_ = (this.ɵfac = function MatDialogLayoutSection_Factory(t) {
          return new (t || MatDialogLayoutSection)(
            core["ɵɵdirectiveInject"](MatDialogRef, 8),
            core["ɵɵdirectiveInject"](core.ElementRef),
            core["ɵɵdirectiveInject"](MatDialog),
          );
        });
        static #_2 = (this.ɵdir = core["ɵɵdefineDirective"]({
          type: MatDialogLayoutSection,
          standalone: !0,
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          MatDialogLayoutSection,
          [{ type: core.Directive, args: [{ standalone: !0 }] }],
          () => [
            { type: MatDialogRef, decorators: [{ type: core.Optional }] },
            { type: core.ElementRef },
            { type: MatDialog },
          ],
          null,
        );
      class MatDialogTitle extends MatDialogLayoutSection {
        constructor() {
          super(...arguments),
            (this.id = "mat-mdc-dialog-title-" + dialogElementUid++);
        }
        _onAdd() {
          this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id);
        }
        _onRemove() {
          this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id);
        }
        static #_ = (this.ɵfac = (() => {
          let ɵMatDialogTitle_BaseFactory;
          return function MatDialogTitle_Factory(t) {
            return (
              ɵMatDialogTitle_BaseFactory ||
              (ɵMatDialogTitle_BaseFactory =
                core["ɵɵgetInheritedFactory"](MatDialogTitle))
            )(t || MatDialogTitle);
          };
        })());
        static #_2 = (this.ɵdir = core["ɵɵdefineDirective"]({
          type: MatDialogTitle,
          selectors: [
            ["", "mat-dialog-title", ""],
            ["", "matDialogTitle", ""],
          ],
          hostAttrs: [1, "mat-mdc-dialog-title", "mdc-dialog__title"],
          hostVars: 1,
          hostBindings: function MatDialogTitle_HostBindings(rf, ctx) {
            2 & rf && core["ɵɵhostProperty"]("id", ctx.id);
          },
          inputs: { id: "id" },
          exportAs: ["matDialogTitle"],
          standalone: !0,
          features: [core["ɵɵInheritDefinitionFeature"]],
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          MatDialogTitle,
          [
            {
              type: core.Directive,
              args: [
                {
                  selector: "[mat-dialog-title], [matDialogTitle]",
                  exportAs: "matDialogTitle",
                  standalone: !0,
                  host: {
                    class: "mat-mdc-dialog-title mdc-dialog__title",
                    "[id]": "id",
                  },
                },
              ],
            },
          ],
          null,
          { id: [{ type: core.Input }] },
        );
      class MatDialogContent {
        static #_ = (this.ɵfac = function MatDialogContent_Factory(t) {
          return new (t || MatDialogContent)();
        });
        static #_2 = (this.ɵdir = core["ɵɵdefineDirective"]({
          type: MatDialogContent,
          selectors: [
            ["", "mat-dialog-content", ""],
            ["mat-dialog-content"],
            ["", "matDialogContent", ""],
          ],
          hostAttrs: [1, "mat-mdc-dialog-content", "mdc-dialog__content"],
          standalone: !0,
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          MatDialogContent,
          [
            {
              type: core.Directive,
              args: [
                {
                  selector:
                    "[mat-dialog-content], mat-dialog-content, [matDialogContent]",
                  host: { class: "mat-mdc-dialog-content mdc-dialog__content" },
                  standalone: !0,
                },
              ],
            },
          ],
          null,
          null,
        );
      class MatDialogActions extends MatDialogLayoutSection {
        _onAdd() {
          this._dialogRef._containerInstance?._updateActionSectionCount?.(1);
        }
        _onRemove() {
          this._dialogRef._containerInstance?._updateActionSectionCount?.(-1);
        }
        static #_ = (this.ɵfac = (() => {
          let ɵMatDialogActions_BaseFactory;
          return function MatDialogActions_Factory(t) {
            return (
              ɵMatDialogActions_BaseFactory ||
              (ɵMatDialogActions_BaseFactory =
                core["ɵɵgetInheritedFactory"](MatDialogActions))
            )(t || MatDialogActions);
          };
        })());
        static #_2 = (this.ɵdir = core["ɵɵdefineDirective"]({
          type: MatDialogActions,
          selectors: [
            ["", "mat-dialog-actions", ""],
            ["mat-dialog-actions"],
            ["", "matDialogActions", ""],
          ],
          hostAttrs: [1, "mat-mdc-dialog-actions", "mdc-dialog__actions"],
          hostVars: 6,
          hostBindings: function MatDialogActions_HostBindings(rf, ctx) {
            2 & rf &&
              core["ɵɵclassProp"](
                "mat-mdc-dialog-actions-align-start",
                "start" === ctx.align,
              )("mat-mdc-dialog-actions-align-center", "center" === ctx.align)(
                "mat-mdc-dialog-actions-align-end",
                "end" === ctx.align,
              );
          },
          inputs: { align: "align" },
          standalone: !0,
          features: [core["ɵɵInheritDefinitionFeature"]],
        }));
      }
      function getClosestDialog(element, openDialogs) {
        let parent = element.nativeElement.parentElement;
        for (
          ;
          parent && !parent.classList.contains("mat-mdc-dialog-container");

        )
          parent = parent.parentElement;
        return parent
          ? openDialogs.find((dialog) => dialog.id === parent.id)
          : null;
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          MatDialogActions,
          [
            {
              type: core.Directive,
              args: [
                {
                  selector:
                    "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]",
                  standalone: !0,
                  host: {
                    class: "mat-mdc-dialog-actions mdc-dialog__actions",
                    "[class.mat-mdc-dialog-actions-align-start]":
                      'align === "start"',
                    "[class.mat-mdc-dialog-actions-align-center]":
                      'align === "center"',
                    "[class.mat-mdc-dialog-actions-align-end]":
                      'align === "end"',
                  },
                },
              ],
            },
          ],
          null,
          { align: [{ type: core.Input }] },
        );
      const DIRECTIVES = [
        MatDialogContainer,
        MatDialogClose,
        MatDialogTitle,
        MatDialogActions,
        MatDialogContent,
      ];
      class MatDialogModule {
        static #_ = (this.ɵfac = function MatDialogModule_Factory(t) {
          return new (t || MatDialogModule)();
        });
        static #_2 = (this.ɵmod = core["ɵɵdefineNgModule"]({
          type: MatDialogModule,
          imports: [
            DialogModule,
            fesm2022_overlay.z_,
            portal.jc,
            fesm2022_core.yE,
            MatDialogContainer,
            MatDialogClose,
            MatDialogTitle,
            MatDialogActions,
            MatDialogContent,
          ],
          exports: [
            fesm2022_core.yE,
            MatDialogContainer,
            MatDialogClose,
            MatDialogTitle,
            MatDialogActions,
            MatDialogContent,
          ],
        }));
        static #_3 = (this.ɵinj = core["ɵɵdefineInjector"]({
          providers: [MatDialog],
          imports: [
            DialogModule,
            fesm2022_overlay.z_,
            portal.jc,
            fesm2022_core.yE,
            fesm2022_core.yE,
          ],
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          MatDialogModule,
          [
            {
              type: core.NgModule,
              args: [
                {
                  imports: [
                    DialogModule,
                    fesm2022_overlay.z_,
                    portal.jc,
                    fesm2022_core.yE,
                    ...DIRECTIVES,
                  ],
                  exports: [fesm2022_core.yE, ...DIRECTIVES],
                  providers: [MatDialog],
                },
              ],
            },
          ],
          null,
          null,
        );
      const _defaultParams = {
        params: {
          enterAnimationDuration: "150ms",
          exitAnimationDuration: "75ms",
        },
      };
      (0, animations.hZ)("dialogContainer", [
        (0, animations.wk)(
          "void, exit",
          (0, animations.iF)({ opacity: 0, transform: "scale(0.7)" }),
        ),
        (0, animations.wk)("enter", (0, animations.iF)({ transform: "none" })),
        (0, animations.kY)(
          "* => enter",
          (0, animations.Os)([
            (0, animations.i0)(
              "{{enterAnimationDuration}} cubic-bezier(0, 0, 0.2, 1)",
              (0, animations.iF)({ transform: "none", opacity: 1 }),
            ),
            (0, animations.P)("@*", (0, animations.MA)(), { optional: !0 }),
          ]),
          _defaultParams,
        ),
        (0, animations.kY)(
          "* => void, * => exit",
          (0, animations.Os)([
            (0, animations.i0)(
              "{{exitAnimationDuration}} cubic-bezier(0.4, 0.0, 0.2, 1)",
              (0, animations.iF)({ opacity: 0 }),
            ),
            (0, animations.P)("@*", (0, animations.MA)(), { optional: !0 }),
          ]),
          _defaultParams,
        ),
      ]);
    },
    "./node_modules/rxjs/dist/esm5/internal/observable/defer.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { v: () => defer });
      var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/Observable.js",
        ),
        _innerFrom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js",
        );
      function defer(observableFactory) {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__.c(function (
          subscriber,
        ) {
          (0, _innerFrom__WEBPACK_IMPORTED_MODULE_1__.Tg)(
            observableFactory(),
          ).subscribe(subscriber);
        });
      }
    },
  },
]);
