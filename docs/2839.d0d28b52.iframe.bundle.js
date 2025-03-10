"use strict";
(self.webpackChunk_aseinfo_evolution_web_components =
  self.webpackChunk_aseinfo_evolution_web_components || []).push([
  [2839],
  {
    "./node_modules/@angular/cdk/fesm2022/overlay.mjs": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        WB: () => CdkConnectedOverlay,
        $Q: () => CdkOverlayOrigin,
        hJ: () => Overlay,
        rR: () => OverlayConfig,
        Sf: () => OverlayContainer,
        z_: () => OverlayModule,
        yY: () => OverlayRef,
      });
      var scrolling = __webpack_require__(
          "./node_modules/@angular/cdk/fesm2022/scrolling.mjs",
        ),
        common = __webpack_require__(
          "./node_modules/@angular/common/fesm2022/common.mjs",
        ),
        core = __webpack_require__(
          "./node_modules/@angular/core/fesm2022/core.mjs",
        ),
        coercion = __webpack_require__(
          "./node_modules/@angular/cdk/fesm2022/coercion.mjs",
        ),
        platform = __webpack_require__(
          "./node_modules/@angular/cdk/fesm2022/platform.mjs",
        ),
        filter = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/filter.js",
        ),
        take = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/take.js",
        ),
        takeUntil = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js",
        ),
        lift = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/util/lift.js",
        ),
        OperatorSubscriber = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js",
        );
      var bidi = __webpack_require__(
          "./node_modules/@angular/cdk/fesm2022/bidi.mjs",
        ),
        portal = __webpack_require__(
          "./node_modules/@angular/cdk/fesm2022/portal.mjs",
        ),
        Subject = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/Subject.js",
        ),
        Subscription = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/Subscription.js",
        ),
        merge = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/observable/merge.js",
        ),
        keycodes = __webpack_require__(
          "./node_modules/@angular/cdk/fesm2022/keycodes.mjs",
        );
      const scrollBehaviorSupported = (0, platform.CZ)();
      class BlockScrollStrategy {
        constructor(_viewportRuler, document) {
          (this._viewportRuler = _viewportRuler),
            (this._previousHTMLStyles = { top: "", left: "" }),
            (this._isEnabled = !1),
            (this._document = document);
        }
        attach() {}
        enable() {
          if (this._canBeEnabled()) {
            const root = this._document.documentElement;
            (this._previousScrollPosition =
              this._viewportRuler.getViewportScrollPosition()),
              (this._previousHTMLStyles.left = root.style.left || ""),
              (this._previousHTMLStyles.top = root.style.top || ""),
              (root.style.left = (0, coercion.a1)(
                -this._previousScrollPosition.left,
              )),
              (root.style.top = (0, coercion.a1)(
                -this._previousScrollPosition.top,
              )),
              root.classList.add("cdk-global-scrollblock"),
              (this._isEnabled = !0);
          }
        }
        disable() {
          if (this._isEnabled) {
            const html = this._document.documentElement,
              body = this._document.body,
              htmlStyle = html.style,
              bodyStyle = body.style,
              previousHtmlScrollBehavior = htmlStyle.scrollBehavior || "",
              previousBodyScrollBehavior = bodyStyle.scrollBehavior || "";
            (this._isEnabled = !1),
              (htmlStyle.left = this._previousHTMLStyles.left),
              (htmlStyle.top = this._previousHTMLStyles.top),
              html.classList.remove("cdk-global-scrollblock"),
              scrollBehaviorSupported &&
                (htmlStyle.scrollBehavior = bodyStyle.scrollBehavior = "auto"),
              window.scroll(
                this._previousScrollPosition.left,
                this._previousScrollPosition.top,
              ),
              scrollBehaviorSupported &&
                ((htmlStyle.scrollBehavior = previousHtmlScrollBehavior),
                (bodyStyle.scrollBehavior = previousBodyScrollBehavior));
          }
        }
        _canBeEnabled() {
          if (
            this._document.documentElement.classList.contains(
              "cdk-global-scrollblock",
            ) ||
            this._isEnabled
          )
            return !1;
          const body = this._document.body,
            viewport = this._viewportRuler.getViewportSize();
          return (
            body.scrollHeight > viewport.height ||
            body.scrollWidth > viewport.width
          );
        }
      }
      function getMatScrollStrategyAlreadyAttachedError() {
        return Error("Scroll strategy has already been attached.");
      }
      class CloseScrollStrategy {
        constructor(_scrollDispatcher, _ngZone, _viewportRuler, _config) {
          (this._scrollDispatcher = _scrollDispatcher),
            (this._ngZone = _ngZone),
            (this._viewportRuler = _viewportRuler),
            (this._config = _config),
            (this._scrollSubscription = null),
            (this._detach = () => {
              this.disable(),
                this._overlayRef.hasAttached() &&
                  this._ngZone.run(() => this._overlayRef.detach());
            });
        }
        attach(overlayRef) {
          if (
            this._overlayRef &&
            ("undefined" == typeof ngDevMode || ngDevMode)
          )
            throw getMatScrollStrategyAlreadyAttachedError();
          this._overlayRef = overlayRef;
        }
        enable() {
          if (this._scrollSubscription) return;
          const stream = this._scrollDispatcher
            .scrolled(0)
            .pipe(
              (0, filter.p)(
                (scrollable) =>
                  !scrollable ||
                  !this._overlayRef.overlayElement.contains(
                    scrollable.getElementRef().nativeElement,
                  ),
              ),
            );
          this._config && this._config.threshold && this._config.threshold > 1
            ? ((this._initialScrollPosition =
                this._viewportRuler.getViewportScrollPosition().top),
              (this._scrollSubscription = stream.subscribe(() => {
                const scrollPosition =
                  this._viewportRuler.getViewportScrollPosition().top;
                Math.abs(scrollPosition - this._initialScrollPosition) >
                this._config.threshold
                  ? this._detach()
                  : this._overlayRef.updatePosition();
              })))
            : (this._scrollSubscription = stream.subscribe(this._detach));
        }
        disable() {
          this._scrollSubscription &&
            (this._scrollSubscription.unsubscribe(),
            (this._scrollSubscription = null));
        }
        detach() {
          this.disable(), (this._overlayRef = null);
        }
      }
      class NoopScrollStrategy {
        enable() {}
        disable() {}
        attach() {}
      }
      function isElementScrolledOutsideView(element, scrollContainers) {
        return scrollContainers.some((containerBounds) => {
          const outsideAbove = element.bottom < containerBounds.top,
            outsideBelow = element.top > containerBounds.bottom,
            outsideLeft = element.right < containerBounds.left,
            outsideRight = element.left > containerBounds.right;
          return outsideAbove || outsideBelow || outsideLeft || outsideRight;
        });
      }
      function isElementClippedByScrolling(element, scrollContainers) {
        return scrollContainers.some((scrollContainerRect) => {
          const clippedAbove = element.top < scrollContainerRect.top,
            clippedBelow = element.bottom > scrollContainerRect.bottom,
            clippedLeft = element.left < scrollContainerRect.left,
            clippedRight = element.right > scrollContainerRect.right;
          return clippedAbove || clippedBelow || clippedLeft || clippedRight;
        });
      }
      class RepositionScrollStrategy {
        constructor(_scrollDispatcher, _viewportRuler, _ngZone, _config) {
          (this._scrollDispatcher = _scrollDispatcher),
            (this._viewportRuler = _viewportRuler),
            (this._ngZone = _ngZone),
            (this._config = _config),
            (this._scrollSubscription = null);
        }
        attach(overlayRef) {
          if (
            this._overlayRef &&
            ("undefined" == typeof ngDevMode || ngDevMode)
          )
            throw getMatScrollStrategyAlreadyAttachedError();
          this._overlayRef = overlayRef;
        }
        enable() {
          if (!this._scrollSubscription) {
            const throttle = this._config ? this._config.scrollThrottle : 0;
            this._scrollSubscription = this._scrollDispatcher
              .scrolled(throttle)
              .subscribe(() => {
                if (
                  (this._overlayRef.updatePosition(),
                  this._config && this._config.autoClose)
                ) {
                  const overlayRect =
                      this._overlayRef.overlayElement.getBoundingClientRect(),
                    { width, height } = this._viewportRuler.getViewportSize();
                  isElementScrolledOutsideView(overlayRect, [
                    {
                      width,
                      height,
                      bottom: height,
                      right: width,
                      top: 0,
                      left: 0,
                    },
                  ]) &&
                    (this.disable(),
                    this._ngZone.run(() => this._overlayRef.detach()));
                }
              });
          }
        }
        disable() {
          this._scrollSubscription &&
            (this._scrollSubscription.unsubscribe(),
            (this._scrollSubscription = null));
        }
        detach() {
          this.disable(), (this._overlayRef = null);
        }
      }
      class ScrollStrategyOptions {
        constructor(_scrollDispatcher, _viewportRuler, _ngZone, document) {
          (this._scrollDispatcher = _scrollDispatcher),
            (this._viewportRuler = _viewportRuler),
            (this._ngZone = _ngZone),
            (this.noop = () => new NoopScrollStrategy()),
            (this.close = (config) =>
              new CloseScrollStrategy(
                this._scrollDispatcher,
                this._ngZone,
                this._viewportRuler,
                config,
              )),
            (this.block = () =>
              new BlockScrollStrategy(this._viewportRuler, this._document)),
            (this.reposition = (config) =>
              new RepositionScrollStrategy(
                this._scrollDispatcher,
                this._viewportRuler,
                this._ngZone,
                config,
              )),
            (this._document = document);
        }
        static #_ = (this.ɵfac = function ScrollStrategyOptions_Factory(t) {
          return new (t || ScrollStrategyOptions)(
            core["ɵɵinject"](scrolling.R),
            core["ɵɵinject"](scrolling.Xj),
            core["ɵɵinject"](core.NgZone),
            core["ɵɵinject"](common.DOCUMENT),
          );
        });
        static #_2 = (this.ɵprov = core["ɵɵdefineInjectable"]({
          token: ScrollStrategyOptions,
          factory: ScrollStrategyOptions.ɵfac,
          providedIn: "root",
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          ScrollStrategyOptions,
          [{ type: core.Injectable, args: [{ providedIn: "root" }] }],
          () => [
            { type: scrolling.R },
            { type: scrolling.Xj },
            { type: core.NgZone },
            {
              type: void 0,
              decorators: [{ type: core.Inject, args: [common.DOCUMENT] }],
            },
          ],
          null,
        );
      class OverlayConfig {
        constructor(config) {
          if (
            ((this.scrollStrategy = new NoopScrollStrategy()),
            (this.panelClass = ""),
            (this.hasBackdrop = !1),
            (this.backdropClass = "cdk-overlay-dark-backdrop"),
            (this.disposeOnNavigation = !1),
            config)
          ) {
            const configKeys = Object.keys(config);
            for (const key of configKeys)
              void 0 !== config[key] && (this[key] = config[key]);
          }
        }
      }
      class ConnectedOverlayPositionChange {
        constructor(connectionPair, scrollableViewProperties) {
          (this.connectionPair = connectionPair),
            (this.scrollableViewProperties = scrollableViewProperties);
        }
      }
      function validateVerticalPosition(property, value) {
        if ("top" !== value && "bottom" !== value && "center" !== value)
          throw Error(
            `ConnectedPosition: Invalid ${property} "${value}". Expected "top", "bottom" or "center".`,
          );
      }
      function validateHorizontalPosition(property, value) {
        if ("start" !== value && "end" !== value && "center" !== value)
          throw Error(
            `ConnectedPosition: Invalid ${property} "${value}". Expected "start", "end" or "center".`,
          );
      }
      class BaseOverlayDispatcher {
        constructor(document) {
          (this._attachedOverlays = []), (this._document = document);
        }
        ngOnDestroy() {
          this.detach();
        }
        add(overlayRef) {
          this.remove(overlayRef), this._attachedOverlays.push(overlayRef);
        }
        remove(overlayRef) {
          const index = this._attachedOverlays.indexOf(overlayRef);
          index > -1 && this._attachedOverlays.splice(index, 1),
            0 === this._attachedOverlays.length && this.detach();
        }
        static #_ = (this.ɵfac = function BaseOverlayDispatcher_Factory(t) {
          return new (t || BaseOverlayDispatcher)(
            core["ɵɵinject"](common.DOCUMENT),
          );
        });
        static #_2 = (this.ɵprov = core["ɵɵdefineInjectable"]({
          token: BaseOverlayDispatcher,
          factory: BaseOverlayDispatcher.ɵfac,
          providedIn: "root",
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          BaseOverlayDispatcher,
          [{ type: core.Injectable, args: [{ providedIn: "root" }] }],
          () => [
            {
              type: void 0,
              decorators: [{ type: core.Inject, args: [common.DOCUMENT] }],
            },
          ],
          null,
        );
      class OverlayKeyboardDispatcher extends BaseOverlayDispatcher {
        constructor(document, _ngZone) {
          super(document),
            (this._ngZone = _ngZone),
            (this._keydownListener = (event) => {
              const overlays = this._attachedOverlays;
              for (let i = overlays.length - 1; i > -1; i--)
                if (overlays[i]._keydownEvents.observers.length > 0) {
                  const keydownEvents = overlays[i]._keydownEvents;
                  this._ngZone
                    ? this._ngZone.run(() => keydownEvents.next(event))
                    : keydownEvents.next(event);
                  break;
                }
            });
        }
        add(overlayRef) {
          super.add(overlayRef),
            this._isAttached ||
              (this._ngZone
                ? this._ngZone.runOutsideAngular(() =>
                    this._document.body.addEventListener(
                      "keydown",
                      this._keydownListener,
                    ),
                  )
                : this._document.body.addEventListener(
                    "keydown",
                    this._keydownListener,
                  ),
              (this._isAttached = !0));
        }
        detach() {
          this._isAttached &&
            (this._document.body.removeEventListener(
              "keydown",
              this._keydownListener,
            ),
            (this._isAttached = !1));
        }
        static #_ = (this.ɵfac = function OverlayKeyboardDispatcher_Factory(t) {
          return new (t || OverlayKeyboardDispatcher)(
            core["ɵɵinject"](common.DOCUMENT),
            core["ɵɵinject"](core.NgZone, 8),
          );
        });
        static #_2 = (this.ɵprov = core["ɵɵdefineInjectable"]({
          token: OverlayKeyboardDispatcher,
          factory: OverlayKeyboardDispatcher.ɵfac,
          providedIn: "root",
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          OverlayKeyboardDispatcher,
          [{ type: core.Injectable, args: [{ providedIn: "root" }] }],
          () => [
            {
              type: void 0,
              decorators: [{ type: core.Inject, args: [common.DOCUMENT] }],
            },
            { type: core.NgZone, decorators: [{ type: core.Optional }] },
          ],
          null,
        );
      class OverlayOutsideClickDispatcher extends BaseOverlayDispatcher {
        constructor(document, _platform, _ngZone) {
          super(document),
            (this._platform = _platform),
            (this._ngZone = _ngZone),
            (this._cursorStyleIsSet = !1),
            (this._pointerDownListener = (event) => {
              this._pointerDownEventTarget = (0, platform.Fb)(event);
            }),
            (this._clickListener = (event) => {
              const target = (0, platform.Fb)(event),
                origin =
                  "click" === event.type && this._pointerDownEventTarget
                    ? this._pointerDownEventTarget
                    : target;
              this._pointerDownEventTarget = null;
              const overlays = this._attachedOverlays.slice();
              for (let i = overlays.length - 1; i > -1; i--) {
                const overlayRef = overlays[i];
                if (
                  overlayRef._outsidePointerEvents.observers.length < 1 ||
                  !overlayRef.hasAttached()
                )
                  continue;
                if (
                  overlayRef.overlayElement.contains(target) ||
                  overlayRef.overlayElement.contains(origin)
                )
                  break;
                const outsidePointerEvents = overlayRef._outsidePointerEvents;
                this._ngZone
                  ? this._ngZone.run(() => outsidePointerEvents.next(event))
                  : outsidePointerEvents.next(event);
              }
            });
        }
        add(overlayRef) {
          if ((super.add(overlayRef), !this._isAttached)) {
            const body = this._document.body;
            this._ngZone
              ? this._ngZone.runOutsideAngular(() =>
                  this._addEventListeners(body),
                )
              : this._addEventListeners(body),
              this._platform.IOS &&
                !this._cursorStyleIsSet &&
                ((this._cursorOriginalValue = body.style.cursor),
                (body.style.cursor = "pointer"),
                (this._cursorStyleIsSet = !0)),
              (this._isAttached = !0);
          }
        }
        detach() {
          if (this._isAttached) {
            const body = this._document.body;
            body.removeEventListener(
              "pointerdown",
              this._pointerDownListener,
              !0,
            ),
              body.removeEventListener("click", this._clickListener, !0),
              body.removeEventListener("auxclick", this._clickListener, !0),
              body.removeEventListener("contextmenu", this._clickListener, !0),
              this._platform.IOS &&
                this._cursorStyleIsSet &&
                ((body.style.cursor = this._cursorOriginalValue),
                (this._cursorStyleIsSet = !1)),
              (this._isAttached = !1);
          }
        }
        _addEventListeners(body) {
          body.addEventListener("pointerdown", this._pointerDownListener, !0),
            body.addEventListener("click", this._clickListener, !0),
            body.addEventListener("auxclick", this._clickListener, !0),
            body.addEventListener("contextmenu", this._clickListener, !0);
        }
        static #_ = (this.ɵfac = function OverlayOutsideClickDispatcher_Factory(
          t,
        ) {
          return new (t || OverlayOutsideClickDispatcher)(
            core["ɵɵinject"](common.DOCUMENT),
            core["ɵɵinject"](platform.OD),
            core["ɵɵinject"](core.NgZone, 8),
          );
        });
        static #_2 = (this.ɵprov = core["ɵɵdefineInjectable"]({
          token: OverlayOutsideClickDispatcher,
          factory: OverlayOutsideClickDispatcher.ɵfac,
          providedIn: "root",
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          OverlayOutsideClickDispatcher,
          [{ type: core.Injectable, args: [{ providedIn: "root" }] }],
          () => [
            {
              type: void 0,
              decorators: [{ type: core.Inject, args: [common.DOCUMENT] }],
            },
            { type: platform.OD },
            { type: core.NgZone, decorators: [{ type: core.Optional }] },
          ],
          null,
        );
      class OverlayContainer {
        constructor(document, _platform) {
          (this._platform = _platform), (this._document = document);
        }
        ngOnDestroy() {
          this._containerElement?.remove();
        }
        getContainerElement() {
          return (
            this._containerElement || this._createContainer(),
            this._containerElement
          );
        }
        _createContainer() {
          if (this._platform.isBrowser || (0, platform.v8)()) {
            const oppositePlatformContainers = this._document.querySelectorAll(
              '.cdk-overlay-container[platform="server"], .cdk-overlay-container[platform="test"]',
            );
            for (let i = 0; i < oppositePlatformContainers.length; i++)
              oppositePlatformContainers[i].remove();
          }
          const container = this._document.createElement("div");
          container.classList.add("cdk-overlay-container"),
            (0, platform.v8)()
              ? container.setAttribute("platform", "test")
              : this._platform.isBrowser ||
                container.setAttribute("platform", "server"),
            this._document.body.appendChild(container),
            (this._containerElement = container);
        }
        static #_ = (this.ɵfac = function OverlayContainer_Factory(t) {
          return new (t || OverlayContainer)(
            core["ɵɵinject"](common.DOCUMENT),
            core["ɵɵinject"](platform.OD),
          );
        });
        static #_2 = (this.ɵprov = core["ɵɵdefineInjectable"]({
          token: OverlayContainer,
          factory: OverlayContainer.ɵfac,
          providedIn: "root",
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          OverlayContainer,
          [{ type: core.Injectable, args: [{ providedIn: "root" }] }],
          () => [
            {
              type: void 0,
              decorators: [{ type: core.Inject, args: [common.DOCUMENT] }],
            },
            { type: platform.OD },
          ],
          null,
        );
      class OverlayRef {
        constructor(
          _portalOutlet,
          _host,
          _pane,
          _config,
          _ngZone,
          _keyboardDispatcher,
          _document,
          _location,
          _outsideClickDispatcher,
          _animationsDisabled = !1,
        ) {
          (this._portalOutlet = _portalOutlet),
            (this._host = _host),
            (this._pane = _pane),
            (this._config = _config),
            (this._ngZone = _ngZone),
            (this._keyboardDispatcher = _keyboardDispatcher),
            (this._document = _document),
            (this._location = _location),
            (this._outsideClickDispatcher = _outsideClickDispatcher),
            (this._animationsDisabled = _animationsDisabled),
            (this._backdropElement = null),
            (this._backdropClick = new Subject.B()),
            (this._attachments = new Subject.B()),
            (this._detachments = new Subject.B()),
            (this._locationChanges = Subscription.yU.EMPTY),
            (this._backdropClickHandler = (event) =>
              this._backdropClick.next(event)),
            (this._backdropTransitionendHandler = (event) => {
              this._disposeBackdrop(event.target);
            }),
            (this._keydownEvents = new Subject.B()),
            (this._outsidePointerEvents = new Subject.B()),
            _config.scrollStrategy &&
              ((this._scrollStrategy = _config.scrollStrategy),
              this._scrollStrategy.attach(this)),
            (this._positionStrategy = _config.positionStrategy);
        }
        get overlayElement() {
          return this._pane;
        }
        get backdropElement() {
          return this._backdropElement;
        }
        get hostElement() {
          return this._host;
        }
        attach(portal) {
          !this._host.parentElement &&
            this._previousHostParent &&
            this._previousHostParent.appendChild(this._host);
          const attachResult = this._portalOutlet.attach(portal);
          return (
            this._positionStrategy && this._positionStrategy.attach(this),
            this._updateStackingOrder(),
            this._updateElementSize(),
            this._updateElementDirection(),
            this._scrollStrategy && this._scrollStrategy.enable(),
            this._ngZone.onStable.pipe((0, take.s)(1)).subscribe(() => {
              this.hasAttached() && this.updatePosition();
            }),
            this._togglePointerEvents(!0),
            this._config.hasBackdrop && this._attachBackdrop(),
            this._config.panelClass &&
              this._toggleClasses(this._pane, this._config.panelClass, !0),
            this._attachments.next(),
            this._keyboardDispatcher.add(this),
            this._config.disposeOnNavigation &&
              (this._locationChanges = this._location.subscribe(() =>
                this.dispose(),
              )),
            this._outsideClickDispatcher.add(this),
            "function" == typeof attachResult?.onDestroy &&
              attachResult.onDestroy(() => {
                this.hasAttached() &&
                  this._ngZone.runOutsideAngular(() =>
                    Promise.resolve().then(() => this.detach()),
                  );
              }),
            attachResult
          );
        }
        detach() {
          if (!this.hasAttached()) return;
          this.detachBackdrop(),
            this._togglePointerEvents(!1),
            this._positionStrategy &&
              this._positionStrategy.detach &&
              this._positionStrategy.detach(),
            this._scrollStrategy && this._scrollStrategy.disable();
          const detachmentResult = this._portalOutlet.detach();
          return (
            this._detachments.next(),
            this._keyboardDispatcher.remove(this),
            this._detachContentWhenStable(),
            this._locationChanges.unsubscribe(),
            this._outsideClickDispatcher.remove(this),
            detachmentResult
          );
        }
        dispose() {
          const isAttached = this.hasAttached();
          this._positionStrategy && this._positionStrategy.dispose(),
            this._disposeScrollStrategy(),
            this._disposeBackdrop(this._backdropElement),
            this._locationChanges.unsubscribe(),
            this._keyboardDispatcher.remove(this),
            this._portalOutlet.dispose(),
            this._attachments.complete(),
            this._backdropClick.complete(),
            this._keydownEvents.complete(),
            this._outsidePointerEvents.complete(),
            this._outsideClickDispatcher.remove(this),
            this._host?.remove(),
            (this._previousHostParent = this._pane = this._host = null),
            isAttached && this._detachments.next(),
            this._detachments.complete();
        }
        hasAttached() {
          return this._portalOutlet.hasAttached();
        }
        backdropClick() {
          return this._backdropClick;
        }
        attachments() {
          return this._attachments;
        }
        detachments() {
          return this._detachments;
        }
        keydownEvents() {
          return this._keydownEvents;
        }
        outsidePointerEvents() {
          return this._outsidePointerEvents;
        }
        getConfig() {
          return this._config;
        }
        updatePosition() {
          this._positionStrategy && this._positionStrategy.apply();
        }
        updatePositionStrategy(strategy) {
          strategy !== this._positionStrategy &&
            (this._positionStrategy && this._positionStrategy.dispose(),
            (this._positionStrategy = strategy),
            this.hasAttached() &&
              (strategy.attach(this), this.updatePosition()));
        }
        updateSize(sizeConfig) {
          (this._config = { ...this._config, ...sizeConfig }),
            this._updateElementSize();
        }
        setDirection(dir) {
          (this._config = { ...this._config, direction: dir }),
            this._updateElementDirection();
        }
        addPanelClass(classes) {
          this._pane && this._toggleClasses(this._pane, classes, !0);
        }
        removePanelClass(classes) {
          this._pane && this._toggleClasses(this._pane, classes, !1);
        }
        getDirection() {
          const direction = this._config.direction;
          return direction
            ? "string" == typeof direction
              ? direction
              : direction.value
            : "ltr";
        }
        updateScrollStrategy(strategy) {
          strategy !== this._scrollStrategy &&
            (this._disposeScrollStrategy(),
            (this._scrollStrategy = strategy),
            this.hasAttached() && (strategy.attach(this), strategy.enable()));
        }
        _updateElementDirection() {
          this._host.setAttribute("dir", this.getDirection());
        }
        _updateElementSize() {
          if (!this._pane) return;
          const style = this._pane.style;
          (style.width = (0, coercion.a1)(this._config.width)),
            (style.height = (0, coercion.a1)(this._config.height)),
            (style.minWidth = (0, coercion.a1)(this._config.minWidth)),
            (style.minHeight = (0, coercion.a1)(this._config.minHeight)),
            (style.maxWidth = (0, coercion.a1)(this._config.maxWidth)),
            (style.maxHeight = (0, coercion.a1)(this._config.maxHeight));
        }
        _togglePointerEvents(enablePointer) {
          this._pane.style.pointerEvents = enablePointer ? "" : "none";
        }
        _attachBackdrop() {
          (this._backdropElement = this._document.createElement("div")),
            this._backdropElement.classList.add("cdk-overlay-backdrop"),
            this._animationsDisabled &&
              this._backdropElement.classList.add(
                "cdk-overlay-backdrop-noop-animation",
              ),
            this._config.backdropClass &&
              this._toggleClasses(
                this._backdropElement,
                this._config.backdropClass,
                !0,
              ),
            this._host.parentElement.insertBefore(
              this._backdropElement,
              this._host,
            ),
            this._backdropElement.addEventListener(
              "click",
              this._backdropClickHandler,
            ),
            this._animationsDisabled ||
            "undefined" == typeof requestAnimationFrame
              ? this._backdropElement.classList.add(
                  "cdk-overlay-backdrop-showing",
                )
              : this._ngZone.runOutsideAngular(() => {
                  requestAnimationFrame(() => {
                    this._backdropElement &&
                      this._backdropElement.classList.add(
                        "cdk-overlay-backdrop-showing",
                      );
                  });
                });
        }
        _updateStackingOrder() {
          this._host.nextSibling &&
            this._host.parentNode.appendChild(this._host);
        }
        detachBackdrop() {
          const backdropToDetach = this._backdropElement;
          backdropToDetach &&
            (this._animationsDisabled
              ? this._disposeBackdrop(backdropToDetach)
              : (backdropToDetach.classList.remove(
                  "cdk-overlay-backdrop-showing",
                ),
                this._ngZone.runOutsideAngular(() => {
                  backdropToDetach.addEventListener(
                    "transitionend",
                    this._backdropTransitionendHandler,
                  );
                }),
                (backdropToDetach.style.pointerEvents = "none"),
                (this._backdropTimeout = this._ngZone.runOutsideAngular(() =>
                  setTimeout(() => {
                    this._disposeBackdrop(backdropToDetach);
                  }, 500),
                ))));
        }
        _toggleClasses(element, cssClasses, isAdd) {
          const classes = (0, coercion.FG)(cssClasses || []).filter((c) => !!c);
          classes.length &&
            (isAdd
              ? element.classList.add(...classes)
              : element.classList.remove(...classes));
        }
        _detachContentWhenStable() {
          this._ngZone.runOutsideAngular(() => {
            const subscription = this._ngZone.onStable
              .pipe(
                (0, takeUntil.Q)(
                  (0, merge.h)(this._attachments, this._detachments),
                ),
              )
              .subscribe(() => {
                (this._pane &&
                  this._host &&
                  0 !== this._pane.children.length) ||
                  (this._pane &&
                    this._config.panelClass &&
                    this._toggleClasses(
                      this._pane,
                      this._config.panelClass,
                      !1,
                    ),
                  this._host &&
                    this._host.parentElement &&
                    ((this._previousHostParent = this._host.parentElement),
                    this._host.remove()),
                  subscription.unsubscribe());
              });
          });
        }
        _disposeScrollStrategy() {
          const scrollStrategy = this._scrollStrategy;
          scrollStrategy &&
            (scrollStrategy.disable(),
            scrollStrategy.detach && scrollStrategy.detach());
        }
        _disposeBackdrop(backdrop) {
          backdrop &&
            (backdrop.removeEventListener("click", this._backdropClickHandler),
            backdrop.removeEventListener(
              "transitionend",
              this._backdropTransitionendHandler,
            ),
            backdrop.remove(),
            this._backdropElement === backdrop &&
              (this._backdropElement = null)),
            this._backdropTimeout &&
              (clearTimeout(this._backdropTimeout),
              (this._backdropTimeout = void 0));
        }
      }
      const cssUnitPattern = /([A-Za-z%]+)$/;
      class FlexibleConnectedPositionStrategy {
        get positions() {
          return this._preferredPositions;
        }
        constructor(
          connectedTo,
          _viewportRuler,
          _document,
          _platform,
          _overlayContainer,
        ) {
          (this._viewportRuler = _viewportRuler),
            (this._document = _document),
            (this._platform = _platform),
            (this._overlayContainer = _overlayContainer),
            (this._lastBoundingBoxSize = { width: 0, height: 0 }),
            (this._isPushed = !1),
            (this._canPush = !0),
            (this._growAfterOpen = !1),
            (this._hasFlexibleDimensions = !0),
            (this._positionLocked = !1),
            (this._viewportMargin = 0),
            (this._scrollables = []),
            (this._preferredPositions = []),
            (this._positionChanges = new Subject.B()),
            (this._resizeSubscription = Subscription.yU.EMPTY),
            (this._offsetX = 0),
            (this._offsetY = 0),
            (this._appliedPanelClasses = []),
            (this.positionChanges = this._positionChanges),
            this.setOrigin(connectedTo);
        }
        attach(overlayRef) {
          if (
            this._overlayRef &&
            overlayRef !== this._overlayRef &&
            ("undefined" == typeof ngDevMode || ngDevMode)
          )
            throw Error(
              "This position strategy is already attached to an overlay",
            );
          this._validatePositions(),
            overlayRef.hostElement.classList.add(
              "cdk-overlay-connected-position-bounding-box",
            ),
            (this._overlayRef = overlayRef),
            (this._boundingBox = overlayRef.hostElement),
            (this._pane = overlayRef.overlayElement),
            (this._isDisposed = !1),
            (this._isInitialRender = !0),
            (this._lastPosition = null),
            this._resizeSubscription.unsubscribe(),
            (this._resizeSubscription = this._viewportRuler
              .change()
              .subscribe(() => {
                (this._isInitialRender = !0), this.apply();
              }));
        }
        apply() {
          if (this._isDisposed || !this._platform.isBrowser) return;
          if (
            !this._isInitialRender &&
            this._positionLocked &&
            this._lastPosition
          )
            return void this.reapplyLastPosition();
          this._clearPanelClasses(),
            this._resetOverlayElementStyles(),
            this._resetBoundingBoxStyles(),
            (this._viewportRect = this._getNarrowedViewportRect()),
            (this._originRect = this._getOriginRect()),
            (this._overlayRect = this._pane.getBoundingClientRect()),
            (this._containerRect = this._overlayContainer
              .getContainerElement()
              .getBoundingClientRect());
          const originRect = this._originRect,
            overlayRect = this._overlayRect,
            viewportRect = this._viewportRect,
            containerRect = this._containerRect,
            flexibleFits = [];
          let fallback;
          for (let pos of this._preferredPositions) {
            let originPoint = this._getOriginPoint(
                originRect,
                containerRect,
                pos,
              ),
              overlayPoint = this._getOverlayPoint(
                originPoint,
                overlayRect,
                pos,
              ),
              overlayFit = this._getOverlayFit(
                overlayPoint,
                overlayRect,
                viewportRect,
                pos,
              );
            if (overlayFit.isCompletelyWithinViewport)
              return (
                (this._isPushed = !1),
                void this._applyPosition(pos, originPoint)
              );
            this._canFitWithFlexibleDimensions(
              overlayFit,
              overlayPoint,
              viewportRect,
            )
              ? flexibleFits.push({
                  position: pos,
                  origin: originPoint,
                  overlayRect,
                  boundingBoxRect: this._calculateBoundingBoxRect(
                    originPoint,
                    pos,
                  ),
                })
              : (!fallback ||
                  fallback.overlayFit.visibleArea < overlayFit.visibleArea) &&
                (fallback = {
                  overlayFit,
                  overlayPoint,
                  originPoint,
                  position: pos,
                  overlayRect,
                });
          }
          if (flexibleFits.length) {
            let bestFit = null,
              bestScore = -1;
            for (const fit of flexibleFits) {
              const score =
                fit.boundingBoxRect.width *
                fit.boundingBoxRect.height *
                (fit.position.weight || 1);
              score > bestScore && ((bestScore = score), (bestFit = fit));
            }
            return (
              (this._isPushed = !1),
              void this._applyPosition(bestFit.position, bestFit.origin)
            );
          }
          if (this._canPush)
            return (
              (this._isPushed = !0),
              void this._applyPosition(fallback.position, fallback.originPoint)
            );
          this._applyPosition(fallback.position, fallback.originPoint);
        }
        detach() {
          this._clearPanelClasses(),
            (this._lastPosition = null),
            (this._previousPushAmount = null),
            this._resizeSubscription.unsubscribe();
        }
        dispose() {
          this._isDisposed ||
            (this._boundingBox &&
              extendStyles(this._boundingBox.style, {
                top: "",
                left: "",
                right: "",
                bottom: "",
                height: "",
                width: "",
                alignItems: "",
                justifyContent: "",
              }),
            this._pane && this._resetOverlayElementStyles(),
            this._overlayRef &&
              this._overlayRef.hostElement.classList.remove(
                "cdk-overlay-connected-position-bounding-box",
              ),
            this.detach(),
            this._positionChanges.complete(),
            (this._overlayRef = this._boundingBox = null),
            (this._isDisposed = !0));
        }
        reapplyLastPosition() {
          if (this._isDisposed || !this._platform.isBrowser) return;
          const lastPosition = this._lastPosition;
          if (lastPosition) {
            (this._originRect = this._getOriginRect()),
              (this._overlayRect = this._pane.getBoundingClientRect()),
              (this._viewportRect = this._getNarrowedViewportRect()),
              (this._containerRect = this._overlayContainer
                .getContainerElement()
                .getBoundingClientRect());
            const originPoint = this._getOriginPoint(
              this._originRect,
              this._containerRect,
              lastPosition,
            );
            this._applyPosition(lastPosition, originPoint);
          } else this.apply();
        }
        withScrollableContainers(scrollables) {
          return (this._scrollables = scrollables), this;
        }
        withPositions(positions) {
          return (
            (this._preferredPositions = positions),
            -1 === positions.indexOf(this._lastPosition) &&
              (this._lastPosition = null),
            this._validatePositions(),
            this
          );
        }
        withViewportMargin(margin) {
          return (this._viewportMargin = margin), this;
        }
        withFlexibleDimensions(flexibleDimensions = !0) {
          return (this._hasFlexibleDimensions = flexibleDimensions), this;
        }
        withGrowAfterOpen(growAfterOpen = !0) {
          return (this._growAfterOpen = growAfterOpen), this;
        }
        withPush(canPush = !0) {
          return (this._canPush = canPush), this;
        }
        withLockedPosition(isLocked = !0) {
          return (this._positionLocked = isLocked), this;
        }
        setOrigin(origin) {
          return (this._origin = origin), this;
        }
        withDefaultOffsetX(offset) {
          return (this._offsetX = offset), this;
        }
        withDefaultOffsetY(offset) {
          return (this._offsetY = offset), this;
        }
        withTransformOriginOn(selector) {
          return (this._transformOriginSelector = selector), this;
        }
        _getOriginPoint(originRect, containerRect, pos) {
          let x, y;
          if ("center" == pos.originX)
            x = originRect.left + originRect.width / 2;
          else {
            const startX = this._isRtl() ? originRect.right : originRect.left,
              endX = this._isRtl() ? originRect.left : originRect.right;
            x = "start" == pos.originX ? startX : endX;
          }
          return (
            containerRect.left < 0 && (x -= containerRect.left),
            (y =
              "center" == pos.originY
                ? originRect.top + originRect.height / 2
                : "top" == pos.originY
                  ? originRect.top
                  : originRect.bottom),
            containerRect.top < 0 && (y -= containerRect.top),
            { x, y }
          );
        }
        _getOverlayPoint(originPoint, overlayRect, pos) {
          let overlayStartX, overlayStartY;
          return (
            (overlayStartX =
              "center" == pos.overlayX
                ? -overlayRect.width / 2
                : "start" === pos.overlayX
                  ? this._isRtl()
                    ? -overlayRect.width
                    : 0
                  : this._isRtl()
                    ? 0
                    : -overlayRect.width),
            (overlayStartY =
              "center" == pos.overlayY
                ? -overlayRect.height / 2
                : "top" == pos.overlayY
                  ? 0
                  : -overlayRect.height),
            {
              x: originPoint.x + overlayStartX,
              y: originPoint.y + overlayStartY,
            }
          );
        }
        _getOverlayFit(point, rawOverlayRect, viewport, position) {
          const overlay = getRoundedBoundingClientRect(rawOverlayRect);
          let { x, y } = point,
            offsetX = this._getOffset(position, "x"),
            offsetY = this._getOffset(position, "y");
          offsetX && (x += offsetX), offsetY && (y += offsetY);
          let leftOverflow = 0 - x,
            rightOverflow = x + overlay.width - viewport.width,
            topOverflow = 0 - y,
            bottomOverflow = y + overlay.height - viewport.height,
            visibleWidth = this._subtractOverflows(
              overlay.width,
              leftOverflow,
              rightOverflow,
            ),
            visibleHeight = this._subtractOverflows(
              overlay.height,
              topOverflow,
              bottomOverflow,
            ),
            visibleArea = visibleWidth * visibleHeight;
          return {
            visibleArea,
            isCompletelyWithinViewport:
              overlay.width * overlay.height === visibleArea,
            fitsInViewportVertically: visibleHeight === overlay.height,
            fitsInViewportHorizontally: visibleWidth == overlay.width,
          };
        }
        _canFitWithFlexibleDimensions(fit, point, viewport) {
          if (this._hasFlexibleDimensions) {
            const availableHeight = viewport.bottom - point.y,
              availableWidth = viewport.right - point.x,
              minHeight = getPixelValue(this._overlayRef.getConfig().minHeight),
              minWidth = getPixelValue(this._overlayRef.getConfig().minWidth),
              verticalFit =
                fit.fitsInViewportVertically ||
                (null != minHeight && minHeight <= availableHeight),
              horizontalFit =
                fit.fitsInViewportHorizontally ||
                (null != minWidth && minWidth <= availableWidth);
            return verticalFit && horizontalFit;
          }
          return !1;
        }
        _pushOverlayOnScreen(start, rawOverlayRect, scrollPosition) {
          if (this._previousPushAmount && this._positionLocked)
            return {
              x: start.x + this._previousPushAmount.x,
              y: start.y + this._previousPushAmount.y,
            };
          const overlay = getRoundedBoundingClientRect(rawOverlayRect),
            viewport = this._viewportRect,
            overflowRight = Math.max(
              start.x + overlay.width - viewport.width,
              0,
            ),
            overflowBottom = Math.max(
              start.y + overlay.height - viewport.height,
              0,
            ),
            overflowTop = Math.max(
              viewport.top - scrollPosition.top - start.y,
              0,
            ),
            overflowLeft = Math.max(
              viewport.left - scrollPosition.left - start.x,
              0,
            );
          let pushX = 0,
            pushY = 0;
          return (
            (pushX =
              overlay.width <= viewport.width
                ? overflowLeft || -overflowRight
                : start.x < this._viewportMargin
                  ? viewport.left - scrollPosition.left - start.x
                  : 0),
            (pushY =
              overlay.height <= viewport.height
                ? overflowTop || -overflowBottom
                : start.y < this._viewportMargin
                  ? viewport.top - scrollPosition.top - start.y
                  : 0),
            (this._previousPushAmount = { x: pushX, y: pushY }),
            { x: start.x + pushX, y: start.y + pushY }
          );
        }
        _applyPosition(position, originPoint) {
          if (
            (this._setTransformOrigin(position),
            this._setOverlayElementStyles(originPoint, position),
            this._setBoundingBoxStyles(originPoint, position),
            position.panelClass && this._addPanelClasses(position.panelClass),
            this._positionChanges.observers.length)
          ) {
            const scrollVisibility = this._getScrollVisibility();
            if (
              position !== this._lastPosition ||
              !this._lastScrollVisibility ||
              !(function compareScrollVisibility(a, b) {
                if (a === b) return !0;
                return (
                  a.isOriginClipped === b.isOriginClipped &&
                  a.isOriginOutsideView === b.isOriginOutsideView &&
                  a.isOverlayClipped === b.isOverlayClipped &&
                  a.isOverlayOutsideView === b.isOverlayOutsideView
                );
              })(this._lastScrollVisibility, scrollVisibility)
            ) {
              const changeEvent = new ConnectedOverlayPositionChange(
                position,
                scrollVisibility,
              );
              this._positionChanges.next(changeEvent);
            }
            this._lastScrollVisibility = scrollVisibility;
          }
          (this._lastPosition = position), (this._isInitialRender = !1);
        }
        _setTransformOrigin(position) {
          if (!this._transformOriginSelector) return;
          const elements = this._boundingBox.querySelectorAll(
            this._transformOriginSelector,
          );
          let xOrigin,
            yOrigin = position.overlayY;
          xOrigin =
            "center" === position.overlayX
              ? "center"
              : this._isRtl()
                ? "start" === position.overlayX
                  ? "right"
                  : "left"
                : "start" === position.overlayX
                  ? "left"
                  : "right";
          for (let i = 0; i < elements.length; i++)
            elements[i].style.transformOrigin = `${xOrigin} ${yOrigin}`;
        }
        _calculateBoundingBoxRect(origin, position) {
          const viewport = this._viewportRect,
            isRtl = this._isRtl();
          let height, top, bottom;
          if ("top" === position.overlayY)
            (top = origin.y),
              (height = viewport.height - top + this._viewportMargin);
          else if ("bottom" === position.overlayY)
            (bottom = viewport.height - origin.y + 2 * this._viewportMargin),
              (height = viewport.height - bottom + this._viewportMargin);
          else {
            const smallestDistanceToViewportEdge = Math.min(
                viewport.bottom - origin.y + viewport.top,
                origin.y,
              ),
              previousHeight = this._lastBoundingBoxSize.height;
            (height = 2 * smallestDistanceToViewportEdge),
              (top = origin.y - smallestDistanceToViewportEdge),
              height > previousHeight &&
                !this._isInitialRender &&
                !this._growAfterOpen &&
                (top = origin.y - previousHeight / 2);
          }
          const isBoundedByRightViewportEdge =
            ("start" === position.overlayX && !isRtl) ||
            ("end" === position.overlayX && isRtl);
          let width, left, right;
          if (
            ("end" === position.overlayX && !isRtl) ||
            ("start" === position.overlayX && isRtl)
          )
            (right = viewport.width - origin.x + 2 * this._viewportMargin),
              (width = origin.x - this._viewportMargin);
          else if (isBoundedByRightViewportEdge)
            (left = origin.x), (width = viewport.right - origin.x);
          else {
            const smallestDistanceToViewportEdge = Math.min(
                viewport.right - origin.x + viewport.left,
                origin.x,
              ),
              previousWidth = this._lastBoundingBoxSize.width;
            (width = 2 * smallestDistanceToViewportEdge),
              (left = origin.x - smallestDistanceToViewportEdge),
              width > previousWidth &&
                !this._isInitialRender &&
                !this._growAfterOpen &&
                (left = origin.x - previousWidth / 2);
          }
          return { top, left, bottom, right, width, height };
        }
        _setBoundingBoxStyles(origin, position) {
          const boundingBoxRect = this._calculateBoundingBoxRect(
            origin,
            position,
          );
          this._isInitialRender ||
            this._growAfterOpen ||
            ((boundingBoxRect.height = Math.min(
              boundingBoxRect.height,
              this._lastBoundingBoxSize.height,
            )),
            (boundingBoxRect.width = Math.min(
              boundingBoxRect.width,
              this._lastBoundingBoxSize.width,
            )));
          const styles = {};
          if (this._hasExactPosition())
            (styles.top = styles.left = "0"),
              (styles.bottom =
                styles.right =
                styles.maxHeight =
                styles.maxWidth =
                  ""),
              (styles.width = styles.height = "100%");
          else {
            const maxHeight = this._overlayRef.getConfig().maxHeight,
              maxWidth = this._overlayRef.getConfig().maxWidth;
            (styles.height = (0, coercion.a1)(boundingBoxRect.height)),
              (styles.top = (0, coercion.a1)(boundingBoxRect.top)),
              (styles.bottom = (0, coercion.a1)(boundingBoxRect.bottom)),
              (styles.width = (0, coercion.a1)(boundingBoxRect.width)),
              (styles.left = (0, coercion.a1)(boundingBoxRect.left)),
              (styles.right = (0, coercion.a1)(boundingBoxRect.right)),
              "center" === position.overlayX
                ? (styles.alignItems = "center")
                : (styles.alignItems =
                    "end" === position.overlayX ? "flex-end" : "flex-start"),
              "center" === position.overlayY
                ? (styles.justifyContent = "center")
                : (styles.justifyContent =
                    "bottom" === position.overlayY ? "flex-end" : "flex-start"),
              maxHeight && (styles.maxHeight = (0, coercion.a1)(maxHeight)),
              maxWidth && (styles.maxWidth = (0, coercion.a1)(maxWidth));
          }
          (this._lastBoundingBoxSize = boundingBoxRect),
            extendStyles(this._boundingBox.style, styles);
        }
        _resetBoundingBoxStyles() {
          extendStyles(this._boundingBox.style, {
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            height: "",
            width: "",
            alignItems: "",
            justifyContent: "",
          });
        }
        _resetOverlayElementStyles() {
          extendStyles(this._pane.style, {
            top: "",
            left: "",
            bottom: "",
            right: "",
            position: "",
            transform: "",
          });
        }
        _setOverlayElementStyles(originPoint, position) {
          const styles = {},
            hasExactPosition = this._hasExactPosition(),
            hasFlexibleDimensions = this._hasFlexibleDimensions,
            config = this._overlayRef.getConfig();
          if (hasExactPosition) {
            const scrollPosition =
              this._viewportRuler.getViewportScrollPosition();
            extendStyles(
              styles,
              this._getExactOverlayY(position, originPoint, scrollPosition),
            ),
              extendStyles(
                styles,
                this._getExactOverlayX(position, originPoint, scrollPosition),
              );
          } else styles.position = "static";
          let transformString = "",
            offsetX = this._getOffset(position, "x"),
            offsetY = this._getOffset(position, "y");
          offsetX && (transformString += `translateX(${offsetX}px) `),
            offsetY && (transformString += `translateY(${offsetY}px)`),
            (styles.transform = transformString.trim()),
            config.maxHeight &&
              (hasExactPosition
                ? (styles.maxHeight = (0, coercion.a1)(config.maxHeight))
                : hasFlexibleDimensions && (styles.maxHeight = "")),
            config.maxWidth &&
              (hasExactPosition
                ? (styles.maxWidth = (0, coercion.a1)(config.maxWidth))
                : hasFlexibleDimensions && (styles.maxWidth = "")),
            extendStyles(this._pane.style, styles);
        }
        _getExactOverlayY(position, originPoint, scrollPosition) {
          let styles = { top: "", bottom: "" },
            overlayPoint = this._getOverlayPoint(
              originPoint,
              this._overlayRect,
              position,
            );
          if (
            (this._isPushed &&
              (overlayPoint = this._pushOverlayOnScreen(
                overlayPoint,
                this._overlayRect,
                scrollPosition,
              )),
            "bottom" === position.overlayY)
          ) {
            const documentHeight = this._document.documentElement.clientHeight;
            styles.bottom =
              documentHeight -
              (overlayPoint.y + this._overlayRect.height) +
              "px";
          } else styles.top = (0, coercion.a1)(overlayPoint.y);
          return styles;
        }
        _getExactOverlayX(position, originPoint, scrollPosition) {
          let horizontalStyleProperty,
            styles = { left: "", right: "" },
            overlayPoint = this._getOverlayPoint(
              originPoint,
              this._overlayRect,
              position,
            );
          if (
            (this._isPushed &&
              (overlayPoint = this._pushOverlayOnScreen(
                overlayPoint,
                this._overlayRect,
                scrollPosition,
              )),
            (horizontalStyleProperty = this._isRtl()
              ? "end" === position.overlayX
                ? "left"
                : "right"
              : "end" === position.overlayX
                ? "right"
                : "left"),
            "right" === horizontalStyleProperty)
          ) {
            const documentWidth = this._document.documentElement.clientWidth;
            styles.right =
              documentWidth - (overlayPoint.x + this._overlayRect.width) + "px";
          } else styles.left = (0, coercion.a1)(overlayPoint.x);
          return styles;
        }
        _getScrollVisibility() {
          const originBounds = this._getOriginRect(),
            overlayBounds = this._pane.getBoundingClientRect(),
            scrollContainerBounds = this._scrollables.map((scrollable) =>
              scrollable.getElementRef().nativeElement.getBoundingClientRect(),
            );
          return {
            isOriginClipped: isElementClippedByScrolling(
              originBounds,
              scrollContainerBounds,
            ),
            isOriginOutsideView: isElementScrolledOutsideView(
              originBounds,
              scrollContainerBounds,
            ),
            isOverlayClipped: isElementClippedByScrolling(
              overlayBounds,
              scrollContainerBounds,
            ),
            isOverlayOutsideView: isElementScrolledOutsideView(
              overlayBounds,
              scrollContainerBounds,
            ),
          };
        }
        _subtractOverflows(length, ...overflows) {
          return overflows.reduce(
            (currentValue, currentOverflow) =>
              currentValue - Math.max(currentOverflow, 0),
            length,
          );
        }
        _getNarrowedViewportRect() {
          const width = this._document.documentElement.clientWidth,
            height = this._document.documentElement.clientHeight,
            scrollPosition = this._viewportRuler.getViewportScrollPosition();
          return {
            top: scrollPosition.top + this._viewportMargin,
            left: scrollPosition.left + this._viewportMargin,
            right: scrollPosition.left + width - this._viewportMargin,
            bottom: scrollPosition.top + height - this._viewportMargin,
            width: width - 2 * this._viewportMargin,
            height: height - 2 * this._viewportMargin,
          };
        }
        _isRtl() {
          return "rtl" === this._overlayRef.getDirection();
        }
        _hasExactPosition() {
          return !this._hasFlexibleDimensions || this._isPushed;
        }
        _getOffset(position, axis) {
          return "x" === axis
            ? null == position.offsetX
              ? this._offsetX
              : position.offsetX
            : null == position.offsetY
              ? this._offsetY
              : position.offsetY;
        }
        _validatePositions() {
          if ("undefined" == typeof ngDevMode || ngDevMode) {
            if (!this._preferredPositions.length)
              throw Error(
                "FlexibleConnectedPositionStrategy: At least one position is required.",
              );
            this._preferredPositions.forEach((pair) => {
              validateHorizontalPosition("originX", pair.originX),
                validateVerticalPosition("originY", pair.originY),
                validateHorizontalPosition("overlayX", pair.overlayX),
                validateVerticalPosition("overlayY", pair.overlayY);
            });
          }
        }
        _addPanelClasses(cssClasses) {
          this._pane &&
            (0, coercion.FG)(cssClasses).forEach((cssClass) => {
              "" !== cssClass &&
                -1 === this._appliedPanelClasses.indexOf(cssClass) &&
                (this._appliedPanelClasses.push(cssClass),
                this._pane.classList.add(cssClass));
            });
        }
        _clearPanelClasses() {
          this._pane &&
            (this._appliedPanelClasses.forEach((cssClass) => {
              this._pane.classList.remove(cssClass);
            }),
            (this._appliedPanelClasses = []));
        }
        _getOriginRect() {
          const origin = this._origin;
          if (origin instanceof core.ElementRef)
            return origin.nativeElement.getBoundingClientRect();
          if (origin instanceof Element) return origin.getBoundingClientRect();
          const width = origin.width || 0,
            height = origin.height || 0;
          return {
            top: origin.y,
            bottom: origin.y + height,
            left: origin.x,
            right: origin.x + width,
            height,
            width,
          };
        }
      }
      function extendStyles(destination, source) {
        for (let key in source)
          source.hasOwnProperty(key) && (destination[key] = source[key]);
        return destination;
      }
      function getPixelValue(input) {
        if ("number" != typeof input && null != input) {
          const [value, units] = input.split(cssUnitPattern);
          return units && "px" !== units ? null : parseFloat(value);
        }
        return input || null;
      }
      function getRoundedBoundingClientRect(clientRect) {
        return {
          top: Math.floor(clientRect.top),
          right: Math.floor(clientRect.right),
          bottom: Math.floor(clientRect.bottom),
          left: Math.floor(clientRect.left),
          width: Math.floor(clientRect.width),
          height: Math.floor(clientRect.height),
        };
      }
      class GlobalPositionStrategy {
        constructor() {
          (this._cssPosition = "static"),
            (this._topOffset = ""),
            (this._bottomOffset = ""),
            (this._alignItems = ""),
            (this._xPosition = ""),
            (this._xOffset = ""),
            (this._width = ""),
            (this._height = ""),
            (this._isDisposed = !1);
        }
        attach(overlayRef) {
          const config = overlayRef.getConfig();
          (this._overlayRef = overlayRef),
            this._width &&
              !config.width &&
              overlayRef.updateSize({ width: this._width }),
            this._height &&
              !config.height &&
              overlayRef.updateSize({ height: this._height }),
            overlayRef.hostElement.classList.add("cdk-global-overlay-wrapper"),
            (this._isDisposed = !1);
        }
        top(value = "") {
          return (
            (this._bottomOffset = ""),
            (this._topOffset = value),
            (this._alignItems = "flex-start"),
            this
          );
        }
        left(value = "") {
          return (this._xOffset = value), (this._xPosition = "left"), this;
        }
        bottom(value = "") {
          return (
            (this._topOffset = ""),
            (this._bottomOffset = value),
            (this._alignItems = "flex-end"),
            this
          );
        }
        right(value = "") {
          return (this._xOffset = value), (this._xPosition = "right"), this;
        }
        start(value = "") {
          return (this._xOffset = value), (this._xPosition = "start"), this;
        }
        end(value = "") {
          return (this._xOffset = value), (this._xPosition = "end"), this;
        }
        width(value = "") {
          return (
            this._overlayRef
              ? this._overlayRef.updateSize({ width: value })
              : (this._width = value),
            this
          );
        }
        height(value = "") {
          return (
            this._overlayRef
              ? this._overlayRef.updateSize({ height: value })
              : (this._height = value),
            this
          );
        }
        centerHorizontally(offset = "") {
          return this.left(offset), (this._xPosition = "center"), this;
        }
        centerVertically(offset = "") {
          return this.top(offset), (this._alignItems = "center"), this;
        }
        apply() {
          if (!this._overlayRef || !this._overlayRef.hasAttached()) return;
          const styles = this._overlayRef.overlayElement.style,
            parentStyles = this._overlayRef.hostElement.style,
            config = this._overlayRef.getConfig(),
            { width, height, maxWidth, maxHeight } = config,
            shouldBeFlushHorizontally = !(
              ("100%" !== width && "100vw" !== width) ||
              (maxWidth && "100%" !== maxWidth && "100vw" !== maxWidth)
            ),
            shouldBeFlushVertically = !(
              ("100%" !== height && "100vh" !== height) ||
              (maxHeight && "100%" !== maxHeight && "100vh" !== maxHeight)
            ),
            xPosition = this._xPosition,
            xOffset = this._xOffset,
            isRtl = "rtl" === this._overlayRef.getConfig().direction;
          let marginLeft = "",
            marginRight = "",
            justifyContent = "";
          shouldBeFlushHorizontally
            ? (justifyContent = "flex-start")
            : "center" === xPosition
              ? ((justifyContent = "center"),
                isRtl ? (marginRight = xOffset) : (marginLeft = xOffset))
              : isRtl
                ? "left" === xPosition || "end" === xPosition
                  ? ((justifyContent = "flex-end"), (marginLeft = xOffset))
                  : ("right" !== xPosition && "start" !== xPosition) ||
                    ((justifyContent = "flex-start"), (marginRight = xOffset))
                : "left" === xPosition || "start" === xPosition
                  ? ((justifyContent = "flex-start"), (marginLeft = xOffset))
                  : ("right" !== xPosition && "end" !== xPosition) ||
                    ((justifyContent = "flex-end"), (marginRight = xOffset)),
            (styles.position = this._cssPosition),
            (styles.marginLeft = shouldBeFlushHorizontally ? "0" : marginLeft),
            (styles.marginTop = shouldBeFlushVertically
              ? "0"
              : this._topOffset),
            (styles.marginBottom = this._bottomOffset),
            (styles.marginRight = shouldBeFlushHorizontally
              ? "0"
              : marginRight),
            (parentStyles.justifyContent = justifyContent),
            (parentStyles.alignItems = shouldBeFlushVertically
              ? "flex-start"
              : this._alignItems);
        }
        dispose() {
          if (this._isDisposed || !this._overlayRef) return;
          const styles = this._overlayRef.overlayElement.style,
            parent = this._overlayRef.hostElement,
            parentStyles = parent.style;
          parent.classList.remove("cdk-global-overlay-wrapper"),
            (parentStyles.justifyContent =
              parentStyles.alignItems =
              styles.marginTop =
              styles.marginBottom =
              styles.marginLeft =
              styles.marginRight =
              styles.position =
                ""),
            (this._overlayRef = null),
            (this._isDisposed = !0);
        }
      }
      class OverlayPositionBuilder {
        constructor(_viewportRuler, _document, _platform, _overlayContainer) {
          (this._viewportRuler = _viewportRuler),
            (this._document = _document),
            (this._platform = _platform),
            (this._overlayContainer = _overlayContainer);
        }
        global() {
          return new GlobalPositionStrategy();
        }
        flexibleConnectedTo(origin) {
          return new FlexibleConnectedPositionStrategy(
            origin,
            this._viewportRuler,
            this._document,
            this._platform,
            this._overlayContainer,
          );
        }
        static #_ = (this.ɵfac = function OverlayPositionBuilder_Factory(t) {
          return new (t || OverlayPositionBuilder)(
            core["ɵɵinject"](scrolling.Xj),
            core["ɵɵinject"](common.DOCUMENT),
            core["ɵɵinject"](platform.OD),
            core["ɵɵinject"](OverlayContainer),
          );
        });
        static #_2 = (this.ɵprov = core["ɵɵdefineInjectable"]({
          token: OverlayPositionBuilder,
          factory: OverlayPositionBuilder.ɵfac,
          providedIn: "root",
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          OverlayPositionBuilder,
          [{ type: core.Injectable, args: [{ providedIn: "root" }] }],
          () => [
            { type: scrolling.Xj },
            {
              type: void 0,
              decorators: [{ type: core.Inject, args: [common.DOCUMENT] }],
            },
            { type: platform.OD },
            { type: OverlayContainer },
          ],
          null,
        );
      let nextUniqueId = 0;
      class Overlay {
        constructor(
          scrollStrategies,
          _overlayContainer,
          _componentFactoryResolver,
          _positionBuilder,
          _keyboardDispatcher,
          _injector,
          _ngZone,
          _document,
          _directionality,
          _location,
          _outsideClickDispatcher,
          _animationsModuleType,
        ) {
          (this.scrollStrategies = scrollStrategies),
            (this._overlayContainer = _overlayContainer),
            (this._componentFactoryResolver = _componentFactoryResolver),
            (this._positionBuilder = _positionBuilder),
            (this._keyboardDispatcher = _keyboardDispatcher),
            (this._injector = _injector),
            (this._ngZone = _ngZone),
            (this._document = _document),
            (this._directionality = _directionality),
            (this._location = _location),
            (this._outsideClickDispatcher = _outsideClickDispatcher),
            (this._animationsModuleType = _animationsModuleType);
        }
        create(config) {
          const host = this._createHostElement(),
            pane = this._createPaneElement(host),
            portalOutlet = this._createPortalOutlet(pane),
            overlayConfig = new OverlayConfig(config);
          return (
            (overlayConfig.direction =
              overlayConfig.direction || this._directionality.value),
            new OverlayRef(
              portalOutlet,
              host,
              pane,
              overlayConfig,
              this._ngZone,
              this._keyboardDispatcher,
              this._document,
              this._location,
              this._outsideClickDispatcher,
              "NoopAnimations" === this._animationsModuleType,
            )
          );
        }
        position() {
          return this._positionBuilder;
        }
        _createPaneElement(host) {
          const pane = this._document.createElement("div");
          return (
            (pane.id = "cdk-overlay-" + nextUniqueId++),
            pane.classList.add("cdk-overlay-pane"),
            host.appendChild(pane),
            pane
          );
        }
        _createHostElement() {
          const host = this._document.createElement("div");
          return (
            this._overlayContainer.getContainerElement().appendChild(host), host
          );
        }
        _createPortalOutlet(pane) {
          return (
            this._appRef ||
              (this._appRef = this._injector.get(core.ApplicationRef)),
            new portal.aI(
              pane,
              this._componentFactoryResolver,
              this._appRef,
              this._injector,
              this._document,
            )
          );
        }
        static #_ = (this.ɵfac = function Overlay_Factory(t) {
          return new (t || Overlay)(
            core["ɵɵinject"](ScrollStrategyOptions),
            core["ɵɵinject"](OverlayContainer),
            core["ɵɵinject"](core.ComponentFactoryResolver),
            core["ɵɵinject"](OverlayPositionBuilder),
            core["ɵɵinject"](OverlayKeyboardDispatcher),
            core["ɵɵinject"](core.Injector),
            core["ɵɵinject"](core.NgZone),
            core["ɵɵinject"](common.DOCUMENT),
            core["ɵɵinject"](bidi.dS),
            core["ɵɵinject"](common.Location),
            core["ɵɵinject"](OverlayOutsideClickDispatcher),
            core["ɵɵinject"](core.ANIMATION_MODULE_TYPE, 8),
          );
        });
        static #_2 = (this.ɵprov = core["ɵɵdefineInjectable"]({
          token: Overlay,
          factory: Overlay.ɵfac,
          providedIn: "root",
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          Overlay,
          [{ type: core.Injectable, args: [{ providedIn: "root" }] }],
          () => [
            { type: ScrollStrategyOptions },
            { type: OverlayContainer },
            { type: core.ComponentFactoryResolver },
            { type: OverlayPositionBuilder },
            { type: OverlayKeyboardDispatcher },
            { type: core.Injector },
            { type: core.NgZone },
            {
              type: void 0,
              decorators: [{ type: core.Inject, args: [common.DOCUMENT] }],
            },
            { type: bidi.dS },
            { type: common.Location },
            { type: OverlayOutsideClickDispatcher },
            {
              type: void 0,
              decorators: [
                { type: core.Inject, args: [core.ANIMATION_MODULE_TYPE] },
                { type: core.Optional },
              ],
            },
          ],
          null,
        );
      const defaultPositionList = [
          {
            originX: "start",
            originY: "bottom",
            overlayX: "start",
            overlayY: "top",
          },
          {
            originX: "start",
            originY: "top",
            overlayX: "start",
            overlayY: "bottom",
          },
          {
            originX: "end",
            originY: "top",
            overlayX: "end",
            overlayY: "bottom",
          },
          {
            originX: "end",
            originY: "bottom",
            overlayX: "end",
            overlayY: "top",
          },
        ],
        CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY = new core.InjectionToken(
          "cdk-connected-overlay-scroll-strategy",
          {
            providedIn: "root",
            factory: () => {
              const overlay = (0, core.inject)(Overlay);
              return () => overlay.scrollStrategies.reposition();
            },
          },
        );
      class CdkOverlayOrigin {
        constructor(elementRef) {
          this.elementRef = elementRef;
        }
        static #_ = (this.ɵfac = function CdkOverlayOrigin_Factory(t) {
          return new (t || CdkOverlayOrigin)(
            core["ɵɵdirectiveInject"](core.ElementRef),
          );
        });
        static #_2 = (this.ɵdir = core["ɵɵdefineDirective"]({
          type: CdkOverlayOrigin,
          selectors: [
            ["", "cdk-overlay-origin", ""],
            ["", "overlay-origin", ""],
            ["", "cdkOverlayOrigin", ""],
          ],
          exportAs: ["cdkOverlayOrigin"],
          standalone: !0,
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          CdkOverlayOrigin,
          [
            {
              type: core.Directive,
              args: [
                {
                  selector:
                    "[cdk-overlay-origin], [overlay-origin], [cdkOverlayOrigin]",
                  exportAs: "cdkOverlayOrigin",
                  standalone: !0,
                },
              ],
            },
          ],
          () => [{ type: core.ElementRef }],
          null,
        );
      class CdkConnectedOverlay {
        get offsetX() {
          return this._offsetX;
        }
        set offsetX(offsetX) {
          (this._offsetX = offsetX),
            this._position && this._updatePositionStrategy(this._position);
        }
        get offsetY() {
          return this._offsetY;
        }
        set offsetY(offsetY) {
          (this._offsetY = offsetY),
            this._position && this._updatePositionStrategy(this._position);
        }
        get disposeOnNavigation() {
          return this._disposeOnNavigation;
        }
        set disposeOnNavigation(value) {
          this._disposeOnNavigation = value;
        }
        constructor(
          _overlay,
          templateRef,
          viewContainerRef,
          scrollStrategyFactory,
          _dir,
        ) {
          (this._overlay = _overlay),
            (this._dir = _dir),
            (this._backdropSubscription = Subscription.yU.EMPTY),
            (this._attachSubscription = Subscription.yU.EMPTY),
            (this._detachSubscription = Subscription.yU.EMPTY),
            (this._positionSubscription = Subscription.yU.EMPTY),
            (this._disposeOnNavigation = !1),
            (this._ngZone = (0, core.inject)(core.NgZone)),
            (this.viewportMargin = 0),
            (this.open = !1),
            (this.disableClose = !1),
            (this.hasBackdrop = !1),
            (this.lockPosition = !1),
            (this.flexibleDimensions = !1),
            (this.growAfterOpen = !1),
            (this.push = !1),
            (this.backdropClick = new core.EventEmitter()),
            (this.positionChange = new core.EventEmitter()),
            (this.attach = new core.EventEmitter()),
            (this.detach = new core.EventEmitter()),
            (this.overlayKeydown = new core.EventEmitter()),
            (this.overlayOutsideClick = new core.EventEmitter()),
            (this._templatePortal = new portal.VA(
              templateRef,
              viewContainerRef,
            )),
            (this._scrollStrategyFactory = scrollStrategyFactory),
            (this.scrollStrategy = this._scrollStrategyFactory());
        }
        get overlayRef() {
          return this._overlayRef;
        }
        get dir() {
          return this._dir ? this._dir.value : "ltr";
        }
        ngOnDestroy() {
          this._attachSubscription.unsubscribe(),
            this._detachSubscription.unsubscribe(),
            this._backdropSubscription.unsubscribe(),
            this._positionSubscription.unsubscribe(),
            this._overlayRef && this._overlayRef.dispose();
        }
        ngOnChanges(changes) {
          this._position &&
            (this._updatePositionStrategy(this._position),
            this._overlayRef.updateSize({
              width: this.width,
              minWidth: this.minWidth,
              height: this.height,
              minHeight: this.minHeight,
            }),
            changes.origin && this.open && this._position.apply()),
            changes.open &&
              (this.open ? this._attachOverlay() : this._detachOverlay());
        }
        _createOverlay() {
          (this.positions && this.positions.length) ||
            (this.positions = defaultPositionList);
          const overlayRef = (this._overlayRef = this._overlay.create(
            this._buildConfig(),
          ));
          (this._attachSubscription = overlayRef
            .attachments()
            .subscribe(() => this.attach.emit())),
            (this._detachSubscription = overlayRef
              .detachments()
              .subscribe(() => this.detach.emit())),
            overlayRef.keydownEvents().subscribe((event) => {
              this.overlayKeydown.next(event),
                event.keyCode !== keycodes._f ||
                  this.disableClose ||
                  (0, keycodes.rp)(event) ||
                  (event.preventDefault(), this._detachOverlay());
            }),
            this._overlayRef.outsidePointerEvents().subscribe((event) => {
              const origin = this._getOriginElement(),
                target = (0, platform.Fb)(event);
              (origin && (origin === target || origin.contains(target))) ||
                this.overlayOutsideClick.next(event);
            });
        }
        _buildConfig() {
          const positionStrategy = (this._position =
              this.positionStrategy || this._createPositionStrategy()),
            overlayConfig = new OverlayConfig({
              direction: this._dir,
              positionStrategy,
              scrollStrategy: this.scrollStrategy,
              hasBackdrop: this.hasBackdrop,
              disposeOnNavigation: this.disposeOnNavigation,
            });
          return (
            (this.width || 0 === this.width) &&
              (overlayConfig.width = this.width),
            (this.height || 0 === this.height) &&
              (overlayConfig.height = this.height),
            (this.minWidth || 0 === this.minWidth) &&
              (overlayConfig.minWidth = this.minWidth),
            (this.minHeight || 0 === this.minHeight) &&
              (overlayConfig.minHeight = this.minHeight),
            this.backdropClass &&
              (overlayConfig.backdropClass = this.backdropClass),
            this.panelClass && (overlayConfig.panelClass = this.panelClass),
            overlayConfig
          );
        }
        _updatePositionStrategy(positionStrategy) {
          const positions = this.positions.map((currentPosition) => ({
            originX: currentPosition.originX,
            originY: currentPosition.originY,
            overlayX: currentPosition.overlayX,
            overlayY: currentPosition.overlayY,
            offsetX: currentPosition.offsetX || this.offsetX,
            offsetY: currentPosition.offsetY || this.offsetY,
            panelClass: currentPosition.panelClass || void 0,
          }));
          return positionStrategy
            .setOrigin(this._getOrigin())
            .withPositions(positions)
            .withFlexibleDimensions(this.flexibleDimensions)
            .withPush(this.push)
            .withGrowAfterOpen(this.growAfterOpen)
            .withViewportMargin(this.viewportMargin)
            .withLockedPosition(this.lockPosition)
            .withTransformOriginOn(this.transformOriginSelector);
        }
        _createPositionStrategy() {
          const strategy = this._overlay
            .position()
            .flexibleConnectedTo(this._getOrigin());
          return this._updatePositionStrategy(strategy), strategy;
        }
        _getOrigin() {
          return this.origin instanceof CdkOverlayOrigin
            ? this.origin.elementRef
            : this.origin;
        }
        _getOriginElement() {
          return this.origin instanceof CdkOverlayOrigin
            ? this.origin.elementRef.nativeElement
            : this.origin instanceof core.ElementRef
              ? this.origin.nativeElement
              : "undefined" != typeof Element && this.origin instanceof Element
                ? this.origin
                : null;
        }
        _attachOverlay() {
          this._overlayRef
            ? (this._overlayRef.getConfig().hasBackdrop = this.hasBackdrop)
            : this._createOverlay(),
            this._overlayRef.hasAttached() ||
              this._overlayRef.attach(this._templatePortal),
            this.hasBackdrop
              ? (this._backdropSubscription = this._overlayRef
                  .backdropClick()
                  .subscribe((event) => {
                    this.backdropClick.emit(event);
                  }))
              : this._backdropSubscription.unsubscribe(),
            this._positionSubscription.unsubscribe(),
            this.positionChange.observers.length > 0 &&
              (this._positionSubscription = this._position.positionChanges
                .pipe(
                  (function takeWhile(predicate, inclusive) {
                    return (
                      void 0 === inclusive && (inclusive = !1),
                      (0, lift.N)(function (source, subscriber) {
                        var index = 0;
                        source.subscribe(
                          (0, OperatorSubscriber._)(
                            subscriber,
                            function (value) {
                              var result = predicate(value, index++);
                              (result || inclusive) && subscriber.next(value),
                                !result && subscriber.complete();
                            },
                          ),
                        );
                      })
                    );
                  })(() => this.positionChange.observers.length > 0),
                )
                .subscribe((position) => {
                  this._ngZone.run(() => this.positionChange.emit(position)),
                    0 === this.positionChange.observers.length &&
                      this._positionSubscription.unsubscribe();
                }));
        }
        _detachOverlay() {
          this._overlayRef && this._overlayRef.detach(),
            this._backdropSubscription.unsubscribe(),
            this._positionSubscription.unsubscribe();
        }
        static #_ = (this.ɵfac = function CdkConnectedOverlay_Factory(t) {
          return new (t || CdkConnectedOverlay)(
            core["ɵɵdirectiveInject"](Overlay),
            core["ɵɵdirectiveInject"](core.TemplateRef),
            core["ɵɵdirectiveInject"](core.ViewContainerRef),
            core["ɵɵdirectiveInject"](CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY),
            core["ɵɵdirectiveInject"](bidi.dS, 8),
          );
        });
        static #_2 = (this.ɵdir = core["ɵɵdefineDirective"]({
          type: CdkConnectedOverlay,
          selectors: [
            ["", "cdk-connected-overlay", ""],
            ["", "connected-overlay", ""],
            ["", "cdkConnectedOverlay", ""],
          ],
          inputs: {
            origin: [
              core["ɵɵInputFlags"].None,
              "cdkConnectedOverlayOrigin",
              "origin",
            ],
            positions: [
              core["ɵɵInputFlags"].None,
              "cdkConnectedOverlayPositions",
              "positions",
            ],
            positionStrategy: [
              core["ɵɵInputFlags"].None,
              "cdkConnectedOverlayPositionStrategy",
              "positionStrategy",
            ],
            offsetX: [
              core["ɵɵInputFlags"].None,
              "cdkConnectedOverlayOffsetX",
              "offsetX",
            ],
            offsetY: [
              core["ɵɵInputFlags"].None,
              "cdkConnectedOverlayOffsetY",
              "offsetY",
            ],
            width: [
              core["ɵɵInputFlags"].None,
              "cdkConnectedOverlayWidth",
              "width",
            ],
            height: [
              core["ɵɵInputFlags"].None,
              "cdkConnectedOverlayHeight",
              "height",
            ],
            minWidth: [
              core["ɵɵInputFlags"].None,
              "cdkConnectedOverlayMinWidth",
              "minWidth",
            ],
            minHeight: [
              core["ɵɵInputFlags"].None,
              "cdkConnectedOverlayMinHeight",
              "minHeight",
            ],
            backdropClass: [
              core["ɵɵInputFlags"].None,
              "cdkConnectedOverlayBackdropClass",
              "backdropClass",
            ],
            panelClass: [
              core["ɵɵInputFlags"].None,
              "cdkConnectedOverlayPanelClass",
              "panelClass",
            ],
            viewportMargin: [
              core["ɵɵInputFlags"].None,
              "cdkConnectedOverlayViewportMargin",
              "viewportMargin",
            ],
            scrollStrategy: [
              core["ɵɵInputFlags"].None,
              "cdkConnectedOverlayScrollStrategy",
              "scrollStrategy",
            ],
            open: [
              core["ɵɵInputFlags"].None,
              "cdkConnectedOverlayOpen",
              "open",
            ],
            disableClose: [
              core["ɵɵInputFlags"].None,
              "cdkConnectedOverlayDisableClose",
              "disableClose",
            ],
            transformOriginSelector: [
              core["ɵɵInputFlags"].None,
              "cdkConnectedOverlayTransformOriginOn",
              "transformOriginSelector",
            ],
            hasBackdrop: [
              core["ɵɵInputFlags"].HasDecoratorInputTransform,
              "cdkConnectedOverlayHasBackdrop",
              "hasBackdrop",
              core.booleanAttribute,
            ],
            lockPosition: [
              core["ɵɵInputFlags"].HasDecoratorInputTransform,
              "cdkConnectedOverlayLockPosition",
              "lockPosition",
              core.booleanAttribute,
            ],
            flexibleDimensions: [
              core["ɵɵInputFlags"].HasDecoratorInputTransform,
              "cdkConnectedOverlayFlexibleDimensions",
              "flexibleDimensions",
              core.booleanAttribute,
            ],
            growAfterOpen: [
              core["ɵɵInputFlags"].HasDecoratorInputTransform,
              "cdkConnectedOverlayGrowAfterOpen",
              "growAfterOpen",
              core.booleanAttribute,
            ],
            push: [
              core["ɵɵInputFlags"].HasDecoratorInputTransform,
              "cdkConnectedOverlayPush",
              "push",
              core.booleanAttribute,
            ],
            disposeOnNavigation: [
              core["ɵɵInputFlags"].HasDecoratorInputTransform,
              "cdkConnectedOverlayDisposeOnNavigation",
              "disposeOnNavigation",
              core.booleanAttribute,
            ],
          },
          outputs: {
            backdropClick: "backdropClick",
            positionChange: "positionChange",
            attach: "attach",
            detach: "detach",
            overlayKeydown: "overlayKeydown",
            overlayOutsideClick: "overlayOutsideClick",
          },
          exportAs: ["cdkConnectedOverlay"],
          standalone: !0,
          features: [
            core["ɵɵInputTransformsFeature"],
            core["ɵɵNgOnChangesFeature"],
          ],
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          CdkConnectedOverlay,
          [
            {
              type: core.Directive,
              args: [
                {
                  selector:
                    "[cdk-connected-overlay], [connected-overlay], [cdkConnectedOverlay]",
                  exportAs: "cdkConnectedOverlay",
                  standalone: !0,
                },
              ],
            },
          ],
          () => [
            { type: Overlay },
            { type: core.TemplateRef },
            { type: core.ViewContainerRef },
            {
              type: void 0,
              decorators: [
                {
                  type: core.Inject,
                  args: [CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY],
                },
              ],
            },
            { type: bidi.dS, decorators: [{ type: core.Optional }] },
          ],
          {
            origin: [{ type: core.Input, args: ["cdkConnectedOverlayOrigin"] }],
            positions: [
              { type: core.Input, args: ["cdkConnectedOverlayPositions"] },
            ],
            positionStrategy: [
              {
                type: core.Input,
                args: ["cdkConnectedOverlayPositionStrategy"],
              },
            ],
            offsetX: [
              { type: core.Input, args: ["cdkConnectedOverlayOffsetX"] },
            ],
            offsetY: [
              { type: core.Input, args: ["cdkConnectedOverlayOffsetY"] },
            ],
            width: [{ type: core.Input, args: ["cdkConnectedOverlayWidth"] }],
            height: [{ type: core.Input, args: ["cdkConnectedOverlayHeight"] }],
            minWidth: [
              { type: core.Input, args: ["cdkConnectedOverlayMinWidth"] },
            ],
            minHeight: [
              { type: core.Input, args: ["cdkConnectedOverlayMinHeight"] },
            ],
            backdropClass: [
              { type: core.Input, args: ["cdkConnectedOverlayBackdropClass"] },
            ],
            panelClass: [
              { type: core.Input, args: ["cdkConnectedOverlayPanelClass"] },
            ],
            viewportMargin: [
              { type: core.Input, args: ["cdkConnectedOverlayViewportMargin"] },
            ],
            scrollStrategy: [
              { type: core.Input, args: ["cdkConnectedOverlayScrollStrategy"] },
            ],
            open: [{ type: core.Input, args: ["cdkConnectedOverlayOpen"] }],
            disableClose: [
              { type: core.Input, args: ["cdkConnectedOverlayDisableClose"] },
            ],
            transformOriginSelector: [
              {
                type: core.Input,
                args: ["cdkConnectedOverlayTransformOriginOn"],
              },
            ],
            hasBackdrop: [
              {
                type: core.Input,
                args: [
                  {
                    alias: "cdkConnectedOverlayHasBackdrop",
                    transform: core.booleanAttribute,
                  },
                ],
              },
            ],
            lockPosition: [
              {
                type: core.Input,
                args: [
                  {
                    alias: "cdkConnectedOverlayLockPosition",
                    transform: core.booleanAttribute,
                  },
                ],
              },
            ],
            flexibleDimensions: [
              {
                type: core.Input,
                args: [
                  {
                    alias: "cdkConnectedOverlayFlexibleDimensions",
                    transform: core.booleanAttribute,
                  },
                ],
              },
            ],
            growAfterOpen: [
              {
                type: core.Input,
                args: [
                  {
                    alias: "cdkConnectedOverlayGrowAfterOpen",
                    transform: core.booleanAttribute,
                  },
                ],
              },
            ],
            push: [
              {
                type: core.Input,
                args: [
                  {
                    alias: "cdkConnectedOverlayPush",
                    transform: core.booleanAttribute,
                  },
                ],
              },
            ],
            disposeOnNavigation: [
              {
                type: core.Input,
                args: [
                  {
                    alias: "cdkConnectedOverlayDisposeOnNavigation",
                    transform: core.booleanAttribute,
                  },
                ],
              },
            ],
            backdropClick: [{ type: core.Output }],
            positionChange: [{ type: core.Output }],
            attach: [{ type: core.Output }],
            detach: [{ type: core.Output }],
            overlayKeydown: [{ type: core.Output }],
            overlayOutsideClick: [{ type: core.Output }],
          },
        );
      const CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER = {
        provide: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY,
        deps: [Overlay],
        useFactory:
          function CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY(
            overlay,
          ) {
            return () => overlay.scrollStrategies.reposition();
          },
      };
      class OverlayModule {
        static #_ = (this.ɵfac = function OverlayModule_Factory(t) {
          return new (t || OverlayModule)();
        });
        static #_2 = (this.ɵmod = core["ɵɵdefineNgModule"]({
          type: OverlayModule,
          imports: [
            bidi.jI,
            portal.jc,
            scrolling.E9,
            CdkConnectedOverlay,
            CdkOverlayOrigin,
          ],
          exports: [CdkConnectedOverlay, CdkOverlayOrigin, scrolling.E9],
        }));
        static #_3 = (this.ɵinj = core["ɵɵdefineInjector"]({
          providers: [Overlay, CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER],
          imports: [bidi.jI, portal.jc, scrolling.E9, scrolling.E9],
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          OverlayModule,
          [
            {
              type: core.NgModule,
              args: [
                {
                  imports: [
                    bidi.jI,
                    portal.jc,
                    scrolling.E9,
                    CdkConnectedOverlay,
                    CdkOverlayOrigin,
                  ],
                  exports: [
                    CdkConnectedOverlay,
                    CdkOverlayOrigin,
                    scrolling.E9,
                  ],
                  providers: [
                    Overlay,
                    CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER,
                  ],
                },
              ],
            },
          ],
          null,
          null,
        );
      class FullscreenOverlayContainer extends OverlayContainer {
        constructor(_document, platform) {
          super(_document, platform);
        }
        ngOnDestroy() {
          super.ngOnDestroy(),
            this._fullScreenEventName &&
              this._fullScreenListener &&
              this._document.removeEventListener(
                this._fullScreenEventName,
                this._fullScreenListener,
              );
        }
        _createContainer() {
          super._createContainer(),
            this._adjustParentForFullscreenChange(),
            this._addFullscreenChangeListener(() =>
              this._adjustParentForFullscreenChange(),
            );
        }
        _adjustParentForFullscreenChange() {
          if (!this._containerElement) return;
          (this.getFullscreenElement() || this._document.body).appendChild(
            this._containerElement,
          );
        }
        _addFullscreenChangeListener(fn) {
          const eventName = this._getEventName();
          eventName &&
            (this._fullScreenListener &&
              this._document.removeEventListener(
                eventName,
                this._fullScreenListener,
              ),
            this._document.addEventListener(eventName, fn),
            (this._fullScreenListener = fn));
        }
        _getEventName() {
          if (!this._fullScreenEventName) {
            const _document = this._document;
            _document.fullscreenEnabled
              ? (this._fullScreenEventName = "fullscreenchange")
              : _document.webkitFullscreenEnabled
                ? (this._fullScreenEventName = "webkitfullscreenchange")
                : _document.mozFullScreenEnabled
                  ? (this._fullScreenEventName = "mozfullscreenchange")
                  : _document.msFullscreenEnabled &&
                    (this._fullScreenEventName = "MSFullscreenChange");
          }
          return this._fullScreenEventName;
        }
        getFullscreenElement() {
          const _document = this._document;
          return (
            _document.fullscreenElement ||
            _document.webkitFullscreenElement ||
            _document.mozFullScreenElement ||
            _document.msFullscreenElement ||
            null
          );
        }
        static #_ = (this.ɵfac = function FullscreenOverlayContainer_Factory(
          t,
        ) {
          return new (t || FullscreenOverlayContainer)(
            core["ɵɵinject"](common.DOCUMENT),
            core["ɵɵinject"](platform.OD),
          );
        });
        static #_2 = (this.ɵprov = core["ɵɵdefineInjectable"]({
          token: FullscreenOverlayContainer,
          factory: FullscreenOverlayContainer.ɵfac,
          providedIn: "root",
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          FullscreenOverlayContainer,
          [{ type: core.Injectable, args: [{ providedIn: "root" }] }],
          () => [
            {
              type: void 0,
              decorators: [{ type: core.Inject, args: [common.DOCUMENT] }],
            },
            { type: platform.OD },
          ],
          null,
        );
    },
    "./node_modules/@angular/material/fesm2022/tooltip.mjs": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        uc: () => MatTooltipModule,
      });
      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js",
        ),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/take.js",
        ),
        _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            "./node_modules/@angular/cdk/fesm2022/coercion.mjs",
          ),
        _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            "./node_modules/@angular/cdk/fesm2022/keycodes.mjs",
          ),
        _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/@angular/core/fesm2022/core.mjs",
        ),
        _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          "./node_modules/@angular/common/fesm2022/common.mjs",
        ),
        _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            "./node_modules/@angular/cdk/fesm2022/platform.mjs",
          ),
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          "./node_modules/@angular/cdk/fesm2022/a11y.mjs",
        ),
        _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          "./node_modules/@angular/cdk/fesm2022/bidi.mjs",
        ),
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./node_modules/@angular/cdk/fesm2022/overlay.mjs",
        ),
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          "./node_modules/@angular/cdk/fesm2022/scrolling.mjs",
        ),
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          "./node_modules/@angular/cdk/fesm2022/portal.mjs",
        ),
        rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/Subject.js",
        ),
        _angular_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          "./node_modules/@angular/animations/fesm2022/animations.mjs",
        ),
        _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ =
          __webpack_require__(
            "./node_modules/@angular/material/fesm2022/core.mjs",
          );
      const _c0 = ["tooltip"];
      function getMatTooltipInvalidPositionError(position) {
        return Error(`Tooltip position "${position}" is invalid.`);
      }
      const MAT_TOOLTIP_SCROLL_STRATEGY =
        new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken(
          "mat-tooltip-scroll-strategy",
          {
            providedIn: "root",
            factory: () => {
              const overlay = (0,
              _angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(
                _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__.hJ,
              );
              return () =>
                overlay.scrollStrategies.reposition({ scrollThrottle: 20 });
            },
          },
        );
      const MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER = {
        provide: MAT_TOOLTIP_SCROLL_STRATEGY,
        deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__.hJ],
        useFactory: function MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY(overlay) {
          return () =>
            overlay.scrollStrategies.reposition({ scrollThrottle: 20 });
        },
      };
      const MAT_TOOLTIP_DEFAULT_OPTIONS =
          new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken(
            "mat-tooltip-default-options",
            {
              providedIn: "root",
              factory: function MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY() {
                return { showDelay: 0, hideDelay: 0, touchendHideDelay: 1500 };
              },
            },
          ),
        passiveListenerOptions = (0,
        _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.BQ)({ passive: !0 });
      class MatTooltip {
        get position() {
          return this._position;
        }
        set position(value) {
          value !== this._position &&
            ((this._position = value),
            this._overlayRef &&
              (this._updatePosition(this._overlayRef),
              this._tooltipInstance?.show(0),
              this._overlayRef.updatePosition()));
        }
        get positionAtOrigin() {
          return this._positionAtOrigin;
        }
        set positionAtOrigin(value) {
          (this._positionAtOrigin = (0,
          _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.he)(value)),
            this._detach(),
            (this._overlayRef = null);
        }
        get disabled() {
          return this._disabled;
        }
        set disabled(value) {
          (this._disabled = (0,
          _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.he)(value)),
            this._disabled
              ? this.hide(0)
              : this._setupPointerEnterEventsIfNeeded();
        }
        get showDelay() {
          return this._showDelay;
        }
        set showDelay(value) {
          this._showDelay = (0,
          _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.OE)(value);
        }
        get hideDelay() {
          return this._hideDelay;
        }
        set hideDelay(value) {
          (this._hideDelay = (0,
          _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.OE)(value)),
            this._tooltipInstance &&
              (this._tooltipInstance._mouseLeaveHideDelay = this._hideDelay);
        }
        get message() {
          return this._message;
        }
        set message(value) {
          this._ariaDescriber.removeDescription(
            this._elementRef.nativeElement,
            this._message,
            "tooltip",
          ),
            (this._message = null != value ? String(value).trim() : ""),
            !this._message && this._isTooltipVisible()
              ? this.hide(0)
              : (this._setupPointerEnterEventsIfNeeded(),
                this._updateTooltipMessage(),
                this._ngZone.runOutsideAngular(() => {
                  Promise.resolve().then(() => {
                    this._ariaDescriber.describe(
                      this._elementRef.nativeElement,
                      this.message,
                      "tooltip",
                    );
                  });
                }));
        }
        get tooltipClass() {
          return this._tooltipClass;
        }
        set tooltipClass(value) {
          (this._tooltipClass = value),
            this._tooltipInstance && this._setTooltipClass(this._tooltipClass);
        }
        constructor(
          _overlay,
          _elementRef,
          _scrollDispatcher,
          _viewContainerRef,
          _ngZone,
          _platform,
          _ariaDescriber,
          _focusMonitor,
          scrollStrategy,
          _dir,
          _defaultOptions,
          _document,
        ) {
          (this._overlay = _overlay),
            (this._elementRef = _elementRef),
            (this._scrollDispatcher = _scrollDispatcher),
            (this._viewContainerRef = _viewContainerRef),
            (this._ngZone = _ngZone),
            (this._platform = _platform),
            (this._ariaDescriber = _ariaDescriber),
            (this._focusMonitor = _focusMonitor),
            (this._dir = _dir),
            (this._defaultOptions = _defaultOptions),
            (this._position = "below"),
            (this._positionAtOrigin = !1),
            (this._disabled = !1),
            (this._viewInitialized = !1),
            (this._pointerExitEventsInitialized = !1),
            (this._tooltipComponent = TooltipComponent),
            (this._viewportMargin = 8),
            (this._cssClassPrefix = "mat-mdc"),
            (this.touchGestures = "auto"),
            (this._message = ""),
            (this._passiveListeners = []),
            (this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_4__.B()),
            (this._scrollStrategy = scrollStrategy),
            (this._document = _document),
            _defaultOptions &&
              ((this._showDelay = _defaultOptions.showDelay),
              (this._hideDelay = _defaultOptions.hideDelay),
              _defaultOptions.position &&
                (this.position = _defaultOptions.position),
              _defaultOptions.positionAtOrigin &&
                (this.positionAtOrigin = _defaultOptions.positionAtOrigin),
              _defaultOptions.touchGestures &&
                (this.touchGestures = _defaultOptions.touchGestures)),
            _dir.change
              .pipe(
                (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.Q)(
                  this._destroyed,
                ),
              )
              .subscribe(() => {
                this._overlayRef && this._updatePosition(this._overlayRef);
              }),
            (this._viewportMargin = 8);
        }
        ngAfterViewInit() {
          (this._viewInitialized = !0),
            this._setupPointerEnterEventsIfNeeded(),
            this._focusMonitor
              .monitor(this._elementRef)
              .pipe(
                (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.Q)(
                  this._destroyed,
                ),
              )
              .subscribe((origin) => {
                origin
                  ? "keyboard" === origin && this._ngZone.run(() => this.show())
                  : this._ngZone.run(() => this.hide(0));
              });
        }
        ngOnDestroy() {
          const nativeElement = this._elementRef.nativeElement;
          clearTimeout(this._touchstartTimeout),
            this._overlayRef &&
              (this._overlayRef.dispose(), (this._tooltipInstance = null)),
            this._passiveListeners.forEach(([event, listener]) => {
              nativeElement.removeEventListener(
                event,
                listener,
                passiveListenerOptions,
              );
            }),
            (this._passiveListeners.length = 0),
            this._destroyed.next(),
            this._destroyed.complete(),
            this._ariaDescriber.removeDescription(
              nativeElement,
              this.message,
              "tooltip",
            ),
            this._focusMonitor.stopMonitoring(nativeElement);
        }
        show(delay = this.showDelay, origin) {
          if (this.disabled || !this.message || this._isTooltipVisible())
            return void this._tooltipInstance?._cancelPendingAnimations();
          const overlayRef = this._createOverlay(origin);
          this._detach(),
            (this._portal =
              this._portal ||
              new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__.A8(
                this._tooltipComponent,
                this._viewContainerRef,
              ));
          const instance = (this._tooltipInstance = overlayRef.attach(
            this._portal,
          ).instance);
          (instance._triggerElement = this._elementRef.nativeElement),
            (instance._mouseLeaveHideDelay = this._hideDelay),
            instance
              .afterHidden()
              .pipe(
                (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.Q)(
                  this._destroyed,
                ),
              )
              .subscribe(() => this._detach()),
            this._setTooltipClass(this._tooltipClass),
            this._updateTooltipMessage(),
            instance.show(delay);
        }
        hide(delay = this.hideDelay) {
          const instance = this._tooltipInstance;
          instance &&
            (instance.isVisible()
              ? instance.hide(delay)
              : (instance._cancelPendingAnimations(), this._detach()));
        }
        toggle(origin) {
          this._isTooltipVisible() ? this.hide() : this.show(void 0, origin);
        }
        _isTooltipVisible() {
          return !!this._tooltipInstance && this._tooltipInstance.isVisible();
        }
        _createOverlay(origin) {
          if (this._overlayRef) {
            const existingStrategy =
              this._overlayRef.getConfig().positionStrategy;
            if (
              (!this.positionAtOrigin || !origin) &&
              existingStrategy._origin instanceof
                _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
            )
              return this._overlayRef;
            this._detach();
          }
          const scrollableAncestors =
              this._scrollDispatcher.getAncestorScrollContainers(
                this._elementRef,
              ),
            strategy = this._overlay
              .position()
              .flexibleConnectedTo(
                (this.positionAtOrigin && origin) || this._elementRef,
              )
              .withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`)
              .withFlexibleDimensions(!1)
              .withViewportMargin(this._viewportMargin)
              .withScrollableContainers(scrollableAncestors);
          return (
            strategy.positionChanges
              .pipe(
                (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.Q)(
                  this._destroyed,
                ),
              )
              .subscribe((change) => {
                this._updateCurrentPositionClass(change.connectionPair),
                  this._tooltipInstance &&
                    change.scrollableViewProperties.isOverlayClipped &&
                    this._tooltipInstance.isVisible() &&
                    this._ngZone.run(() => this.hide(0));
              }),
            (this._overlayRef = this._overlay.create({
              direction: this._dir,
              positionStrategy: strategy,
              panelClass: `${this._cssClassPrefix}-tooltip-panel`,
              scrollStrategy: this._scrollStrategy(),
            })),
            this._updatePosition(this._overlayRef),
            this._overlayRef
              .detachments()
              .pipe(
                (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.Q)(
                  this._destroyed,
                ),
              )
              .subscribe(() => this._detach()),
            this._overlayRef
              .outsidePointerEvents()
              .pipe(
                (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.Q)(
                  this._destroyed,
                ),
              )
              .subscribe(() => this._tooltipInstance?._handleBodyInteraction()),
            this._overlayRef
              .keydownEvents()
              .pipe(
                (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.Q)(
                  this._destroyed,
                ),
              )
              .subscribe((event) => {
                this._isTooltipVisible() &&
                  event.keyCode ===
                    _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__._f &&
                  !(0, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.rp)(
                    event,
                  ) &&
                  (event.preventDefault(),
                  event.stopPropagation(),
                  this._ngZone.run(() => this.hide(0)));
              }),
            this._defaultOptions?.disableTooltipInteractivity &&
              this._overlayRef.addPanelClass(
                `${this._cssClassPrefix}-tooltip-panel-non-interactive`,
              ),
            this._overlayRef
          );
        }
        _detach() {
          this._overlayRef &&
            this._overlayRef.hasAttached() &&
            this._overlayRef.detach(),
            (this._tooltipInstance = null);
        }
        _updatePosition(overlayRef) {
          const position = overlayRef.getConfig().positionStrategy,
            origin = this._getOrigin(),
            overlay = this._getOverlayPosition();
          position.withPositions([
            this._addOffset({ ...origin.main, ...overlay.main }),
            this._addOffset({ ...origin.fallback, ...overlay.fallback }),
          ]);
        }
        _addOffset(position) {
          const isLtr = !this._dir || "ltr" == this._dir.value;
          return (
            "top" === position.originY
              ? (position.offsetY = -8)
              : "bottom" === position.originY
                ? (position.offsetY = 8)
                : "start" === position.originX
                  ? (position.offsetX = isLtr ? -8 : 8)
                  : "end" === position.originX &&
                    (position.offsetX = isLtr ? 8 : -8),
            position
          );
        }
        _getOrigin() {
          const isLtr = !this._dir || "ltr" == this._dir.value,
            position = this.position;
          let originPosition;
          if ("above" == position || "below" == position)
            originPosition = {
              originX: "center",
              originY: "above" == position ? "top" : "bottom",
            };
          else if (
            "before" == position ||
            ("left" == position && isLtr) ||
            ("right" == position && !isLtr)
          )
            originPosition = { originX: "start", originY: "center" };
          else if (
            "after" == position ||
            ("right" == position && isLtr) ||
            ("left" == position && !isLtr)
          )
            originPosition = { originX: "end", originY: "center" };
          else if ("undefined" == typeof ngDevMode || ngDevMode)
            throw getMatTooltipInvalidPositionError(position);
          const { x, y } = this._invertPosition(
            originPosition.originX,
            originPosition.originY,
          );
          return { main: originPosition, fallback: { originX: x, originY: y } };
        }
        _getOverlayPosition() {
          const isLtr = !this._dir || "ltr" == this._dir.value,
            position = this.position;
          let overlayPosition;
          if ("above" == position)
            overlayPosition = { overlayX: "center", overlayY: "bottom" };
          else if ("below" == position)
            overlayPosition = { overlayX: "center", overlayY: "top" };
          else if (
            "before" == position ||
            ("left" == position && isLtr) ||
            ("right" == position && !isLtr)
          )
            overlayPosition = { overlayX: "end", overlayY: "center" };
          else if (
            "after" == position ||
            ("right" == position && isLtr) ||
            ("left" == position && !isLtr)
          )
            overlayPosition = { overlayX: "start", overlayY: "center" };
          else if ("undefined" == typeof ngDevMode || ngDevMode)
            throw getMatTooltipInvalidPositionError(position);
          const { x, y } = this._invertPosition(
            overlayPosition.overlayX,
            overlayPosition.overlayY,
          );
          return {
            main: overlayPosition,
            fallback: { overlayX: x, overlayY: y },
          };
        }
        _updateTooltipMessage() {
          this._tooltipInstance &&
            ((this._tooltipInstance.message = this.message),
            this._tooltipInstance._markForCheck(),
            this._ngZone.onMicrotaskEmpty
              .pipe(
                (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.s)(1),
                (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.Q)(
                  this._destroyed,
                ),
              )
              .subscribe(() => {
                this._tooltipInstance && this._overlayRef.updatePosition();
              }));
        }
        _setTooltipClass(tooltipClass) {
          this._tooltipInstance &&
            ((this._tooltipInstance.tooltipClass = tooltipClass),
            this._tooltipInstance._markForCheck());
        }
        _invertPosition(x, y) {
          return (
            "above" === this.position || "below" === this.position
              ? "top" === y
                ? (y = "bottom")
                : "bottom" === y && (y = "top")
              : "end" === x
                ? (x = "start")
                : "start" === x && (x = "end"),
            { x, y }
          );
        }
        _updateCurrentPositionClass(connectionPair) {
          const { overlayY, originX, originY } = connectionPair;
          let newPosition;
          if (
            ((newPosition =
              "center" === overlayY
                ? this._dir && "rtl" === this._dir.value
                  ? "end" === originX
                    ? "left"
                    : "right"
                  : "start" === originX
                    ? "left"
                    : "right"
                : "bottom" === overlayY && "top" === originY
                  ? "above"
                  : "below"),
            newPosition !== this._currentPosition)
          ) {
            const overlayRef = this._overlayRef;
            if (overlayRef) {
              const classPrefix = `${this._cssClassPrefix}-tooltip-panel-`;
              overlayRef.removePanelClass(classPrefix + this._currentPosition),
                overlayRef.addPanelClass(classPrefix + newPosition);
            }
            this._currentPosition = newPosition;
          }
        }
        _setupPointerEnterEventsIfNeeded() {
          !this._disabled &&
            this.message &&
            this._viewInitialized &&
            !this._passiveListeners.length &&
            (this._platformSupportsMouseEvents()
              ? this._passiveListeners.push([
                  "mouseenter",
                  (event) => {
                    let point;
                    this._setupPointerExitEventsIfNeeded(),
                      void 0 !== event.x &&
                        void 0 !== event.y &&
                        (point = event),
                      this.show(void 0, point);
                  },
                ])
              : "off" !== this.touchGestures &&
                (this._disableNativeGesturesIfNecessary(),
                this._passiveListeners.push([
                  "touchstart",
                  (event) => {
                    const touch = event.targetTouches?.[0],
                      origin = touch
                        ? { x: touch.clientX, y: touch.clientY }
                        : void 0;
                    this._setupPointerExitEventsIfNeeded(),
                      clearTimeout(this._touchstartTimeout);
                    this._touchstartTimeout = setTimeout(
                      () => this.show(void 0, origin),
                      this._defaultOptions.touchLongPressShowDelay ?? 500,
                    );
                  },
                ])),
            this._addListeners(this._passiveListeners));
        }
        _setupPointerExitEventsIfNeeded() {
          if (this._pointerExitEventsInitialized) return;
          this._pointerExitEventsInitialized = !0;
          const exitListeners = [];
          if (this._platformSupportsMouseEvents())
            exitListeners.push(
              [
                "mouseleave",
                (event) => {
                  const newTarget = event.relatedTarget;
                  (newTarget &&
                    this._overlayRef?.overlayElement.contains(newTarget)) ||
                    this.hide();
                },
              ],
              ["wheel", (event) => this._wheelListener(event)],
            );
          else if ("off" !== this.touchGestures) {
            this._disableNativeGesturesIfNecessary();
            const touchendListener = () => {
              clearTimeout(this._touchstartTimeout),
                this.hide(this._defaultOptions.touchendHideDelay);
            };
            exitListeners.push(
              ["touchend", touchendListener],
              ["touchcancel", touchendListener],
            );
          }
          this._addListeners(exitListeners),
            this._passiveListeners.push(...exitListeners);
        }
        _addListeners(listeners) {
          listeners.forEach(([event, listener]) => {
            this._elementRef.nativeElement.addEventListener(
              event,
              listener,
              passiveListenerOptions,
            );
          });
        }
        _platformSupportsMouseEvents() {
          return !this._platform.IOS && !this._platform.ANDROID;
        }
        _wheelListener(event) {
          if (this._isTooltipVisible()) {
            const elementUnderPointer = this._document.elementFromPoint(
                event.clientX,
                event.clientY,
              ),
              element = this._elementRef.nativeElement;
            elementUnderPointer === element ||
              element.contains(elementUnderPointer) ||
              this.hide();
          }
        }
        _disableNativeGesturesIfNecessary() {
          const gestures = this.touchGestures;
          if ("off" !== gestures) {
            const element = this._elementRef.nativeElement,
              style = element.style;
            ("on" === gestures ||
              ("INPUT" !== element.nodeName &&
                "TEXTAREA" !== element.nodeName)) &&
              (style.userSelect =
                style.msUserSelect =
                style.webkitUserSelect =
                style.MozUserSelect =
                  "none"),
              ("on" !== gestures && element.draggable) ||
                (style.webkitUserDrag = "none"),
              (style.touchAction = "none"),
              (style.webkitTapHighlightColor = "transparent");
          }
        }
        static #_ = (this.ɵfac = function MatTooltip_Factory(t) {
          return new (t || MatTooltip)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__.hJ,
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef,
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__.R,
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef,
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone,
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.OD,
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__.vr,
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__.FN,
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              MAT_TOOLTIP_SCROLL_STRATEGY,
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__.dS,
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              MAT_TOOLTIP_DEFAULT_OPTIONS,
              8,
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT,
            ),
          );
        });
        static #_2 = (this.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineDirective"
        ]({
          type: MatTooltip,
          selectors: [["", "matTooltip", ""]],
          hostAttrs: [1, "mat-mdc-tooltip-trigger"],
          hostVars: 2,
          hostBindings: function MatTooltip_HostBindings(rf, ctx) {
            2 & rf &&
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"](
                "mat-mdc-tooltip-disabled",
                ctx.disabled,
              );
          },
          inputs: {
            position: [
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None,
              "matTooltipPosition",
              "position",
            ],
            positionAtOrigin: [
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None,
              "matTooltipPositionAtOrigin",
              "positionAtOrigin",
            ],
            disabled: [
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None,
              "matTooltipDisabled",
              "disabled",
            ],
            showDelay: [
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None,
              "matTooltipShowDelay",
              "showDelay",
            ],
            hideDelay: [
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None,
              "matTooltipHideDelay",
              "hideDelay",
            ],
            touchGestures: [
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None,
              "matTooltipTouchGestures",
              "touchGestures",
            ],
            message: [
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None,
              "matTooltip",
              "message",
            ],
            tooltipClass: [
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None,
              "matTooltipClass",
              "tooltipClass",
            ],
          },
          exportAs: ["matTooltip"],
          standalone: !0,
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
          MatTooltip,
          [
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
              args: [
                {
                  selector: "[matTooltip]",
                  exportAs: "matTooltip",
                  host: {
                    class: "mat-mdc-tooltip-trigger",
                    "[class.mat-mdc-tooltip-disabled]": "disabled",
                  },
                  standalone: !0,
                },
              ],
            },
          ],
          () => [
            { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__.hJ },
            { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
            { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__.R },
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef,
            },
            { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone },
            { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.OD },
            { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__.vr },
            { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__.FN },
            {
              type: void 0,
              decorators: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                  args: [MAT_TOOLTIP_SCROLL_STRATEGY],
                },
              ],
            },
            { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__.dS },
            {
              type: void 0,
              decorators: [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional },
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                  args: [MAT_TOOLTIP_DEFAULT_OPTIONS],
                },
              ],
            },
            {
              type: void 0,
              decorators: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                  args: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT,
                  ],
                },
              ],
            },
          ],
          {
            position: [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
                args: ["matTooltipPosition"],
              },
            ],
            positionAtOrigin: [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
                args: ["matTooltipPositionAtOrigin"],
              },
            ],
            disabled: [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
                args: ["matTooltipDisabled"],
              },
            ],
            showDelay: [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
                args: ["matTooltipShowDelay"],
              },
            ],
            hideDelay: [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
                args: ["matTooltipHideDelay"],
              },
            ],
            touchGestures: [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
                args: ["matTooltipTouchGestures"],
              },
            ],
            message: [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
                args: ["matTooltip"],
              },
            ],
            tooltipClass: [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
                args: ["matTooltipClass"],
              },
            ],
          },
        );
      class TooltipComponent {
        constructor(_changeDetectorRef, _elementRef, animationMode) {
          (this._changeDetectorRef = _changeDetectorRef),
            (this._elementRef = _elementRef),
            (this._isMultiline = !1),
            (this._closeOnInteraction = !1),
            (this._isVisible = !1),
            (this._onHide = new rxjs__WEBPACK_IMPORTED_MODULE_4__.B()),
            (this._showAnimation = "mat-mdc-tooltip-show"),
            (this._hideAnimation = "mat-mdc-tooltip-hide"),
            (this._animationsDisabled = "NoopAnimations" === animationMode);
        }
        show(delay) {
          null != this._hideTimeoutId && clearTimeout(this._hideTimeoutId),
            (this._showTimeoutId = setTimeout(() => {
              this._toggleVisibility(!0), (this._showTimeoutId = void 0);
            }, delay));
        }
        hide(delay) {
          null != this._showTimeoutId && clearTimeout(this._showTimeoutId),
            (this._hideTimeoutId = setTimeout(() => {
              this._toggleVisibility(!1), (this._hideTimeoutId = void 0);
            }, delay));
        }
        afterHidden() {
          return this._onHide;
        }
        isVisible() {
          return this._isVisible;
        }
        ngOnDestroy() {
          this._cancelPendingAnimations(),
            this._onHide.complete(),
            (this._triggerElement = null);
        }
        _handleBodyInteraction() {
          this._closeOnInteraction && this.hide(0);
        }
        _markForCheck() {
          this._changeDetectorRef.markForCheck();
        }
        _handleMouseLeave({ relatedTarget }) {
          (relatedTarget && this._triggerElement.contains(relatedTarget)) ||
            (this.isVisible()
              ? this.hide(this._mouseLeaveHideDelay)
              : this._finalizeAnimation(!1));
        }
        _onShow() {
          (this._isMultiline = this._isTooltipMultiline()),
            this._markForCheck();
        }
        _isTooltipMultiline() {
          const rect = this._elementRef.nativeElement.getBoundingClientRect();
          return rect.height > 24 && rect.width >= 200;
        }
        _handleAnimationEnd({ animationName }) {
          (animationName !== this._showAnimation &&
            animationName !== this._hideAnimation) ||
            this._finalizeAnimation(animationName === this._showAnimation);
        }
        _cancelPendingAnimations() {
          null != this._showTimeoutId && clearTimeout(this._showTimeoutId),
            null != this._hideTimeoutId && clearTimeout(this._hideTimeoutId),
            (this._showTimeoutId = this._hideTimeoutId = void 0);
        }
        _finalizeAnimation(toVisible) {
          toVisible
            ? (this._closeOnInteraction = !0)
            : this.isVisible() || this._onHide.next();
        }
        _toggleVisibility(isVisible) {
          const tooltip = this._tooltip.nativeElement,
            showClass = this._showAnimation,
            hideClass = this._hideAnimation;
          if (
            (tooltip.classList.remove(isVisible ? hideClass : showClass),
            tooltip.classList.add(isVisible ? showClass : hideClass),
            this._isVisible !== isVisible &&
              ((this._isVisible = isVisible),
              this._changeDetectorRef.markForCheck()),
            isVisible &&
              !this._animationsDisabled &&
              "function" == typeof getComputedStyle)
          ) {
            const styles = getComputedStyle(tooltip);
            ("0s" !== styles.getPropertyValue("animation-duration") &&
              "none" !== styles.getPropertyValue("animation-name")) ||
              (this._animationsDisabled = !0);
          }
          isVisible && this._onShow(),
            this._animationsDisabled &&
              (tooltip.classList.add("_mat-animation-noopable"),
              this._finalizeAnimation(isVisible));
        }
        static #_ = (this.ɵfac = function TooltipComponent_Factory(t) {
          return new (t || TooltipComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef,
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef,
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE,
              8,
            ),
          );
        });
        static #_2 = (this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: TooltipComponent,
          selectors: [["mat-tooltip-component"]],
          viewQuery: function TooltipComponent_Query(rf, ctx) {
            if (
              (1 & rf &&
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](
                  _c0,
                  7,
                ),
              2 & rf)
            ) {
              let _t;
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](
                (_t =
                  _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()),
              ) && (ctx._tooltip = _t.first);
            }
          },
          hostAttrs: ["aria-hidden", "true"],
          hostVars: 2,
          hostBindings: function TooltipComponent_HostBindings(rf, ctx) {
            1 & rf &&
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
                "mouseleave",
                function TooltipComponent_mouseleave_HostBindingHandler(
                  $event,
                ) {
                  return ctx._handleMouseLeave($event);
                },
              ),
              2 & rf &&
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"](
                  "zoom",
                  ctx.isVisible() ? 1 : null,
                );
          },
          standalone: !0,
          features: [
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"],
          ],
          decls: 4,
          vars: 4,
          consts: [
            ["tooltip", ""],
            [
              1,
              "mdc-tooltip",
              "mdc-tooltip--shown",
              "mat-mdc-tooltip",
              3,
              "animationend",
              "ngClass",
            ],
            [1, "mdc-tooltip__surface", "mdc-tooltip__surface-animation"],
          ],
          template: function TooltipComponent_Template(rf, ctx) {
            if (1 & rf) {
              const _r1 =
                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵgetCurrentView"
                ]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                0,
                "div",
                1,
                0,
              ),
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
                  "animationend",
                  function TooltipComponent_Template_div_animationend_0_listener(
                    $event,
                  ) {
                    return (
                      _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                        "ɵɵrestoreView"
                      ](_r1),
                      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](
                        ctx._handleAnimationEnd($event),
                      )
                    );
                  },
                ),
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                  2,
                  "div",
                  2,
                ),
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3),
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            }
            2 & rf &&
              (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"](
                "mdc-tooltip--multiline",
                ctx._isMultiline,
              ),
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "ngClass",
                ctx.tooltipClass,
              ),
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3),
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](
                ctx.message,
              ));
          },
          dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass],
          styles: [
            '.mdc-tooltip__surface{word-break:break-all;word-break:var(--mdc-tooltip-word-break, normal);overflow-wrap:anywhere}.mdc-tooltip--showing-transition .mdc-tooltip__surface-animation{transition:opacity 150ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-tooltip--hide-transition .mdc-tooltip__surface-animation{transition:opacity 75ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-tooltip{position:fixed;display:none;z-index:9}.mdc-tooltip-wrapper--rich{position:relative}.mdc-tooltip--shown,.mdc-tooltip--showing,.mdc-tooltip--hide{display:inline-flex}.mdc-tooltip--shown.mdc-tooltip--rich,.mdc-tooltip--showing.mdc-tooltip--rich,.mdc-tooltip--hide.mdc-tooltip--rich{display:inline-block;left:-320px;position:absolute}.mdc-tooltip__surface{line-height:16px;padding:4px 8px;min-width:40px;max-width:200px;min-height:24px;max-height:40vh;box-sizing:border-box;overflow:hidden;text-align:center}.mdc-tooltip__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-tooltip__surface::before{border-color:CanvasText}}.mdc-tooltip--rich .mdc-tooltip__surface{align-items:flex-start;display:flex;flex-direction:column;min-height:24px;min-width:40px;max-width:320px;position:relative}.mdc-tooltip--multiline .mdc-tooltip__surface{text-align:left}[dir=rtl] .mdc-tooltip--multiline .mdc-tooltip__surface,.mdc-tooltip--multiline .mdc-tooltip__surface[dir=rtl]{text-align:right}.mdc-tooltip__surface .mdc-tooltip__title{margin:0 8px}.mdc-tooltip__surface .mdc-tooltip__content{max-width:calc(200px - 2*8px);margin:8px;text-align:left}[dir=rtl] .mdc-tooltip__surface .mdc-tooltip__content,.mdc-tooltip__surface .mdc-tooltip__content[dir=rtl]{text-align:right}.mdc-tooltip--rich .mdc-tooltip__surface .mdc-tooltip__content{max-width:calc(320px - 2*8px);align-self:stretch}.mdc-tooltip__surface .mdc-tooltip__content-link{text-decoration:none}.mdc-tooltip--rich-actions,.mdc-tooltip__content,.mdc-tooltip__title{z-index:1}.mdc-tooltip__surface-animation{opacity:0;transform:scale(0.8);will-change:transform,opacity}.mdc-tooltip--shown .mdc-tooltip__surface-animation{transform:scale(1);opacity:1}.mdc-tooltip--hide .mdc-tooltip__surface-animation{transform:scale(1)}.mdc-tooltip__caret-surface-top,.mdc-tooltip__caret-surface-bottom{position:absolute;height:24px;width:24px;transform:rotate(35deg) skewY(20deg) scaleX(0.9396926208)}.mdc-tooltip__caret-surface-top .mdc-elevation-overlay,.mdc-tooltip__caret-surface-bottom .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-tooltip__caret-surface-bottom{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);outline:1px solid rgba(0,0,0,0);z-index:-1}@media screen and (forced-colors: active){.mdc-tooltip__caret-surface-bottom{outline-color:CanvasText}}.mat-mdc-tooltip .mdc-tooltip__surface{background-color:var(--mdc-plain-tooltip-container-color)}.mat-mdc-tooltip .mdc-tooltip__surface{border-radius:var(--mdc-plain-tooltip-container-shape)}.mat-mdc-tooltip .mdc-tooltip__caret-surface-top,.mat-mdc-tooltip .mdc-tooltip__caret-surface-bottom{border-radius:var(--mdc-plain-tooltip-container-shape)}.mat-mdc-tooltip .mdc-tooltip__surface{color:var(--mdc-plain-tooltip-supporting-text-color)}.mat-mdc-tooltip .mdc-tooltip__surface{font-family:var(--mdc-plain-tooltip-supporting-text-font);line-height:var(--mdc-plain-tooltip-supporting-text-line-height);font-size:var(--mdc-plain-tooltip-supporting-text-size);font-weight:var(--mdc-plain-tooltip-supporting-text-weight);letter-spacing:var(--mdc-plain-tooltip-supporting-text-tracking)}.mat-mdc-tooltip{position:relative;transform:scale(0)}.mat-mdc-tooltip::before{content:"";top:0;right:0;bottom:0;left:0;z-index:-1;position:absolute}.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before{top:-8px}.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before{bottom:-8px}.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before{left:-8px}.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before{right:-8px}.mat-mdc-tooltip._mat-animation-noopable{animation:none;transform:scale(1)}.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive{pointer-events:none}@keyframes mat-mdc-tooltip-show{0%{opacity:0;transform:scale(0.8)}100%{opacity:1;transform:scale(1)}}@keyframes mat-mdc-tooltip-hide{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(0.8)}}.mat-mdc-tooltip-show{animation:mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-mdc-tooltip-hide{animation:mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards}',
          ],
          encapsulation: 2,
          changeDetection: 0,
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
          TooltipComponent,
          [
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
              args: [
                {
                  selector: "mat-tooltip-component",
                  encapsulation:
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation
                      .None,
                  changeDetection:
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__
                      .ChangeDetectionStrategy.OnPush,
                  host: {
                    "[style.zoom]": "isVisible() ? 1 : null",
                    "(mouseleave)": "_handleMouseLeave($event)",
                    "aria-hidden": "true",
                  },
                  standalone: !0,
                  imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass,
                  ],
                  template:
                    '<div\n  #tooltip\n  class="mdc-tooltip mdc-tooltip--shown mat-mdc-tooltip"\n  [ngClass]="tooltipClass"\n  (animationend)="_handleAnimationEnd($event)"\n  [class.mdc-tooltip--multiline]="_isMultiline">\n  <div class="mdc-tooltip__surface mdc-tooltip__surface-animation">{{message}}</div>\n</div>\n',
                  styles: [
                    '.mdc-tooltip__surface{word-break:break-all;word-break:var(--mdc-tooltip-word-break, normal);overflow-wrap:anywhere}.mdc-tooltip--showing-transition .mdc-tooltip__surface-animation{transition:opacity 150ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-tooltip--hide-transition .mdc-tooltip__surface-animation{transition:opacity 75ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-tooltip{position:fixed;display:none;z-index:9}.mdc-tooltip-wrapper--rich{position:relative}.mdc-tooltip--shown,.mdc-tooltip--showing,.mdc-tooltip--hide{display:inline-flex}.mdc-tooltip--shown.mdc-tooltip--rich,.mdc-tooltip--showing.mdc-tooltip--rich,.mdc-tooltip--hide.mdc-tooltip--rich{display:inline-block;left:-320px;position:absolute}.mdc-tooltip__surface{line-height:16px;padding:4px 8px;min-width:40px;max-width:200px;min-height:24px;max-height:40vh;box-sizing:border-box;overflow:hidden;text-align:center}.mdc-tooltip__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-tooltip__surface::before{border-color:CanvasText}}.mdc-tooltip--rich .mdc-tooltip__surface{align-items:flex-start;display:flex;flex-direction:column;min-height:24px;min-width:40px;max-width:320px;position:relative}.mdc-tooltip--multiline .mdc-tooltip__surface{text-align:left}[dir=rtl] .mdc-tooltip--multiline .mdc-tooltip__surface,.mdc-tooltip--multiline .mdc-tooltip__surface[dir=rtl]{text-align:right}.mdc-tooltip__surface .mdc-tooltip__title{margin:0 8px}.mdc-tooltip__surface .mdc-tooltip__content{max-width:calc(200px - 2*8px);margin:8px;text-align:left}[dir=rtl] .mdc-tooltip__surface .mdc-tooltip__content,.mdc-tooltip__surface .mdc-tooltip__content[dir=rtl]{text-align:right}.mdc-tooltip--rich .mdc-tooltip__surface .mdc-tooltip__content{max-width:calc(320px - 2*8px);align-self:stretch}.mdc-tooltip__surface .mdc-tooltip__content-link{text-decoration:none}.mdc-tooltip--rich-actions,.mdc-tooltip__content,.mdc-tooltip__title{z-index:1}.mdc-tooltip__surface-animation{opacity:0;transform:scale(0.8);will-change:transform,opacity}.mdc-tooltip--shown .mdc-tooltip__surface-animation{transform:scale(1);opacity:1}.mdc-tooltip--hide .mdc-tooltip__surface-animation{transform:scale(1)}.mdc-tooltip__caret-surface-top,.mdc-tooltip__caret-surface-bottom{position:absolute;height:24px;width:24px;transform:rotate(35deg) skewY(20deg) scaleX(0.9396926208)}.mdc-tooltip__caret-surface-top .mdc-elevation-overlay,.mdc-tooltip__caret-surface-bottom .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-tooltip__caret-surface-bottom{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);outline:1px solid rgba(0,0,0,0);z-index:-1}@media screen and (forced-colors: active){.mdc-tooltip__caret-surface-bottom{outline-color:CanvasText}}.mat-mdc-tooltip .mdc-tooltip__surface{background-color:var(--mdc-plain-tooltip-container-color)}.mat-mdc-tooltip .mdc-tooltip__surface{border-radius:var(--mdc-plain-tooltip-container-shape)}.mat-mdc-tooltip .mdc-tooltip__caret-surface-top,.mat-mdc-tooltip .mdc-tooltip__caret-surface-bottom{border-radius:var(--mdc-plain-tooltip-container-shape)}.mat-mdc-tooltip .mdc-tooltip__surface{color:var(--mdc-plain-tooltip-supporting-text-color)}.mat-mdc-tooltip .mdc-tooltip__surface{font-family:var(--mdc-plain-tooltip-supporting-text-font);line-height:var(--mdc-plain-tooltip-supporting-text-line-height);font-size:var(--mdc-plain-tooltip-supporting-text-size);font-weight:var(--mdc-plain-tooltip-supporting-text-weight);letter-spacing:var(--mdc-plain-tooltip-supporting-text-tracking)}.mat-mdc-tooltip{position:relative;transform:scale(0)}.mat-mdc-tooltip::before{content:"";top:0;right:0;bottom:0;left:0;z-index:-1;position:absolute}.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before{top:-8px}.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before{bottom:-8px}.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before{left:-8px}.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before{right:-8px}.mat-mdc-tooltip._mat-animation-noopable{animation:none;transform:scale(1)}.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive{pointer-events:none}@keyframes mat-mdc-tooltip-show{0%{opacity:0;transform:scale(0.8)}100%{opacity:1;transform:scale(1)}}@keyframes mat-mdc-tooltip-hide{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(0.8)}}.mat-mdc-tooltip-show{animation:mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-mdc-tooltip-hide{animation:mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards}',
                  ],
                },
              ],
            },
          ],
          () => [
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef,
            },
            { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
            {
              type: void 0,
              decorators: [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional },
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                  args: [
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE,
                  ],
                },
              ],
            },
          ],
          {
            _tooltip: [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
                args: ["tooltip", { static: !0 }],
              },
            ],
          },
        );
      (0, _angular_animations__WEBPACK_IMPORTED_MODULE_13__.hZ)("state", [
        (0, _angular_animations__WEBPACK_IMPORTED_MODULE_13__.wk)(
          "initial, void, hidden",
          (0, _angular_animations__WEBPACK_IMPORTED_MODULE_13__.iF)({
            opacity: 0,
            transform: "scale(0.8)",
          }),
        ),
        (0, _angular_animations__WEBPACK_IMPORTED_MODULE_13__.wk)(
          "visible",
          (0, _angular_animations__WEBPACK_IMPORTED_MODULE_13__.iF)({
            transform: "scale(1)",
          }),
        ),
        (0, _angular_animations__WEBPACK_IMPORTED_MODULE_13__.kY)(
          "* => visible",
          (0, _angular_animations__WEBPACK_IMPORTED_MODULE_13__.i0)(
            "150ms cubic-bezier(0, 0, 0.2, 1)",
          ),
        ),
        (0, _angular_animations__WEBPACK_IMPORTED_MODULE_13__.kY)(
          "* => hidden",
          (0, _angular_animations__WEBPACK_IMPORTED_MODULE_13__.i0)(
            "75ms cubic-bezier(0.4, 0, 1, 1)",
          ),
        ),
      ]);
      class MatTooltipModule {
        static #_ = (this.ɵfac = function MatTooltipModule_Factory(t) {
          return new (t || MatTooltipModule)();
        });
        static #_2 = (this.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineNgModule"
        ]({
          type: MatTooltipModule,
          imports: [
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__.Pd,
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__.z_,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.yE,
            MatTooltip,
            TooltipComponent,
          ],
          exports: [
            MatTooltip,
            TooltipComponent,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.yE,
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__.Gj,
          ],
        }));
        static #_3 = (this.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineInjector"
        ]({
          providers: [MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER],
          imports: [
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__.Pd,
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__.z_,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.yE,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.yE,
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__.Gj,
          ],
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
          MatTooltipModule,
          [
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
              args: [
                {
                  imports: [
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__.Pd,
                    _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__.z_,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.yE,
                    MatTooltip,
                    TooltipComponent,
                  ],
                  exports: [
                    MatTooltip,
                    TooltipComponent,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.yE,
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__.Gj,
                  ],
                  providers: [MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER],
                },
              ],
            },
          ],
          null,
          null,
        );
    },
  },
]);
