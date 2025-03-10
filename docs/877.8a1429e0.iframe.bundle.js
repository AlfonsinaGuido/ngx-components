"use strict";
(self.webpackChunk_aseinfo_evolution_web_components =
  self.webpackChunk_aseinfo_evolution_web_components || []).push([
  [877],
  {
    "./node_modules/@angular/cdk/fesm2022/drag-drop.mjs": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        RK: () => CdkDropListGroup,
        ad: () => DragDropModule,
        HD: () => moveItemInArray,
        eg: () => transferArrayItem,
      });
      var core = __webpack_require__(
          "./node_modules/@angular/core/fesm2022/core.mjs",
        ),
        common = __webpack_require__(
          "./node_modules/@angular/common/fesm2022/common.mjs",
        ),
        scrolling = __webpack_require__(
          "./node_modules/@angular/cdk/fesm2022/scrolling.mjs",
        ),
        platform = __webpack_require__(
          "./node_modules/@angular/cdk/fesm2022/platform.mjs",
        ),
        coercion = __webpack_require__(
          "./node_modules/@angular/cdk/fesm2022/coercion.mjs",
        ),
        a11y = __webpack_require__(
          "./node_modules/@angular/cdk/fesm2022/a11y.mjs",
        ),
        Subject = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/Subject.js",
        ),
        Subscription = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/Subscription.js",
        ),
        scheduler_async = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/scheduler/async.js",
        ),
        timer = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/observable/timer.js",
        );
      var animationFrame = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/scheduler/animationFrame.js",
        ),
        Observable = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/Observable.js",
        ),
        merge = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/observable/merge.js",
        ),
        BehaviorSubject = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/BehaviorSubject.js",
        ),
        takeUntil = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js",
        ),
        map = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/map.js",
        ),
        take = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/take.js",
        ),
        tap = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/tap.js",
        ),
        switchMap = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/switchMap.js",
        ),
        startWith = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/startWith.js",
        ),
        bidi = __webpack_require__(
          "./node_modules/@angular/cdk/fesm2022/bidi.mjs",
        );
      function extendStyles(dest, source, importantProperties) {
        for (let key in source)
          if (source.hasOwnProperty(key)) {
            const value = source[key];
            value
              ? dest.setProperty(
                  key,
                  value,
                  importantProperties?.has(key) ? "important" : "",
                )
              : dest.removeProperty(key);
          }
        return dest;
      }
      function toggleNativeDragInteractions(element, enable) {
        const userSelect = enable ? "" : "none";
        extendStyles(element.style, {
          "touch-action": enable ? "" : "none",
          "-webkit-user-drag": enable ? "" : "none",
          "-webkit-tap-highlight-color": enable ? "" : "transparent",
          "user-select": userSelect,
          "-ms-user-select": userSelect,
          "-webkit-user-select": userSelect,
          "-moz-user-select": userSelect,
        });
      }
      function toggleVisibility(element, enable, importantProperties) {
        extendStyles(
          element.style,
          {
            position: enable ? "" : "fixed",
            top: enable ? "" : "0",
            opacity: enable ? "" : "0",
            left: enable ? "" : "-999em",
          },
          importantProperties,
        );
      }
      function combineTransforms(transform, initialTransform) {
        return initialTransform && "none" != initialTransform
          ? transform + " " + initialTransform
          : transform;
      }
      function matchElementSize(target, sourceRect) {
        (target.style.width = `${sourceRect.width}px`),
          (target.style.height = `${sourceRect.height}px`),
          (target.style.transform = getTransform(
            sourceRect.left,
            sourceRect.top,
          ));
      }
      function getTransform(x, y) {
        return `translate3d(${Math.round(x)}px, ${Math.round(y)}px, 0)`;
      }
      function getMutableClientRect(element) {
        const rect = element.getBoundingClientRect();
        return {
          top: rect.top,
          right: rect.right,
          bottom: rect.bottom,
          left: rect.left,
          width: rect.width,
          height: rect.height,
          x: rect.x,
          y: rect.y,
        };
      }
      function isInsideClientRect(clientRect, x, y) {
        const { top, bottom, left, right } = clientRect;
        return y >= top && y <= bottom && x >= left && x <= right;
      }
      function adjustDomRect(domRect, top, left) {
        (domRect.top += top),
          (domRect.bottom = domRect.top + domRect.height),
          (domRect.left += left),
          (domRect.right = domRect.left + domRect.width);
      }
      function isPointerNearDomRect(rect, threshold, pointerX, pointerY) {
        const { top, right, bottom, left, width, height } = rect,
          xThreshold = width * threshold,
          yThreshold = height * threshold;
        return (
          pointerY > top - yThreshold &&
          pointerY < bottom + yThreshold &&
          pointerX > left - xThreshold &&
          pointerX < right + xThreshold
        );
      }
      class ParentPositionTracker {
        constructor(_document) {
          (this._document = _document), (this.positions = new Map());
        }
        clear() {
          this.positions.clear();
        }
        cache(elements) {
          this.clear(),
            this.positions.set(this._document, {
              scrollPosition: this.getViewportScrollPosition(),
            }),
            elements.forEach((element) => {
              this.positions.set(element, {
                scrollPosition: {
                  top: element.scrollTop,
                  left: element.scrollLeft,
                },
                clientRect: getMutableClientRect(element),
              });
            });
        }
        handleScroll(event) {
          const target = (0, platform.Fb)(event),
            cachedPosition = this.positions.get(target);
          if (!cachedPosition) return null;
          const scrollPosition = cachedPosition.scrollPosition;
          let newTop, newLeft;
          if (target === this._document) {
            const viewportScrollPosition = this.getViewportScrollPosition();
            (newTop = viewportScrollPosition.top),
              (newLeft = viewportScrollPosition.left);
          } else (newTop = target.scrollTop), (newLeft = target.scrollLeft);
          const topDifference = scrollPosition.top - newTop,
            leftDifference = scrollPosition.left - newLeft;
          return (
            this.positions.forEach((position, node) => {
              position.clientRect &&
                target !== node &&
                target.contains(node) &&
                adjustDomRect(
                  position.clientRect,
                  topDifference,
                  leftDifference,
                );
            }),
            (scrollPosition.top = newTop),
            (scrollPosition.left = newLeft),
            { top: topDifference, left: leftDifference }
          );
        }
        getViewportScrollPosition() {
          return { top: window.scrollY, left: window.scrollX };
        }
      }
      function deepCloneNode(node) {
        const clone = node.cloneNode(!0),
          descendantsWithId = clone.querySelectorAll("[id]"),
          nodeName = node.nodeName.toLowerCase();
        clone.removeAttribute("id");
        for (let i = 0; i < descendantsWithId.length; i++)
          descendantsWithId[i].removeAttribute("id");
        return (
          "canvas" === nodeName
            ? transferCanvasData(node, clone)
            : ("input" !== nodeName &&
                "select" !== nodeName &&
                "textarea" !== nodeName) ||
              transferInputData(node, clone),
          transferData("canvas", node, clone, transferCanvasData),
          transferData(
            "input, textarea, select",
            node,
            clone,
            transferInputData,
          ),
          clone
        );
      }
      function transferData(selector, node, clone, callback) {
        const descendantElements = node.querySelectorAll(selector);
        if (descendantElements.length) {
          const cloneElements = clone.querySelectorAll(selector);
          for (let i = 0; i < descendantElements.length; i++)
            callback(descendantElements[i], cloneElements[i]);
        }
      }
      let cloneUniqueId = 0;
      function transferInputData(source, clone) {
        "file" !== clone.type && (clone.value = source.value),
          "radio" === clone.type &&
            clone.name &&
            (clone.name = `mat-clone-${clone.name}-${cloneUniqueId++}`);
      }
      function transferCanvasData(source, clone) {
        const context = clone.getContext("2d");
        if (context)
          try {
            context.drawImage(source, 0, 0);
          } catch {}
      }
      function getRootNode(viewRef, _document) {
        const rootNodes = viewRef.rootNodes;
        if (
          1 === rootNodes.length &&
          rootNodes[0].nodeType === _document.ELEMENT_NODE
        )
          return rootNodes[0];
        const wrapper = _document.createElement("div");
        return rootNodes.forEach((node) => wrapper.appendChild(node)), wrapper;
      }
      function parseCssTimeUnitsToMs(value) {
        const multiplier = value.toLowerCase().indexOf("ms") > -1 ? 1 : 1e3;
        return parseFloat(value) * multiplier;
      }
      function parseCssPropertyValue(computedStyle, name) {
        return computedStyle
          .getPropertyValue(name)
          .split(",")
          .map((part) => part.trim());
      }
      const importantProperties = new Set(["position"]);
      class PreviewRef {
        constructor(
          _document,
          _rootElement,
          _direction,
          _initialDomRect,
          _previewTemplate,
          _previewClass,
          _pickupPositionOnPage,
          _initialTransform,
          _zIndex,
        ) {
          (this._document = _document),
            (this._rootElement = _rootElement),
            (this._direction = _direction),
            (this._initialDomRect = _initialDomRect),
            (this._previewTemplate = _previewTemplate),
            (this._previewClass = _previewClass),
            (this._pickupPositionOnPage = _pickupPositionOnPage),
            (this._initialTransform = _initialTransform),
            (this._zIndex = _zIndex);
        }
        attach(parent) {
          (this._preview = this._createPreview()),
            parent.appendChild(this._preview),
            "showPopover" in this._preview && this._preview.showPopover();
        }
        destroy() {
          this._preview.remove(),
            this._previewEmbeddedView?.destroy(),
            (this._preview = this._previewEmbeddedView = null);
        }
        setTransform(value) {
          this._preview.style.transform = value;
        }
        getBoundingClientRect() {
          return this._preview.getBoundingClientRect();
        }
        addClass(className) {
          this._preview.classList.add(className);
        }
        getTransitionDuration() {
          return (function getTransformTransitionDurationInMs(element) {
            const computedStyle = getComputedStyle(element),
              transitionedProperties = parseCssPropertyValue(
                computedStyle,
                "transition-property",
              ),
              property = transitionedProperties.find(
                (prop) => "transform" === prop || "all" === prop,
              );
            if (!property) return 0;
            const propertyIndex = transitionedProperties.indexOf(property),
              rawDurations = parseCssPropertyValue(
                computedStyle,
                "transition-duration",
              ),
              rawDelays = parseCssPropertyValue(
                computedStyle,
                "transition-delay",
              );
            return (
              parseCssTimeUnitsToMs(rawDurations[propertyIndex]) +
              parseCssTimeUnitsToMs(rawDelays[propertyIndex])
            );
          })(this._preview);
        }
        addEventListener(name, handler) {
          this._preview.addEventListener(name, handler);
        }
        removeEventListener(name, handler) {
          this._preview.removeEventListener(name, handler);
        }
        _createPreview() {
          const previewConfig = this._previewTemplate,
            previewClass = this._previewClass,
            previewTemplate = previewConfig ? previewConfig.template : null;
          let preview;
          if (previewTemplate && previewConfig) {
            const rootRect = previewConfig.matchSize
                ? this._initialDomRect
                : null,
              viewRef = previewConfig.viewContainer.createEmbeddedView(
                previewTemplate,
                previewConfig.context,
              );
            viewRef.detectChanges(),
              (preview = getRootNode(viewRef, this._document)),
              (this._previewEmbeddedView = viewRef),
              previewConfig.matchSize
                ? matchElementSize(preview, rootRect)
                : (preview.style.transform = getTransform(
                    this._pickupPositionOnPage.x,
                    this._pickupPositionOnPage.y,
                  ));
          } else
            (preview = deepCloneNode(this._rootElement)),
              matchElementSize(preview, this._initialDomRect),
              this._initialTransform &&
                (preview.style.transform = this._initialTransform);
          return (
            extendStyles(
              preview.style,
              {
                "pointer-events": "none",
                margin: "0",
                position: "fixed",
                top: "0",
                left: "0",
                "z-index": this._zIndex + "",
              },
              importantProperties,
            ),
            toggleNativeDragInteractions(preview, !1),
            preview.classList.add("cdk-drag-preview"),
            preview.setAttribute("popover", "manual"),
            preview.setAttribute("dir", this._direction),
            previewClass &&
              (Array.isArray(previewClass)
                ? previewClass.forEach((className) =>
                    preview.classList.add(className),
                  )
                : preview.classList.add(previewClass)),
            preview
          );
        }
      }
      const passiveEventListenerOptions = (0, platform.BQ)({ passive: !0 }),
        activeEventListenerOptions = (0, platform.BQ)({ passive: !1 }),
        activeCapturingEventOptions$1 = (0, platform.BQ)({
          passive: !1,
          capture: !0,
        }),
        dragImportantProperties = new Set(["position"]);
      class DragRef {
        get disabled() {
          return (
            this._disabled ||
            !(!this._dropContainer || !this._dropContainer.disabled)
          );
        }
        set disabled(value) {
          value !== this._disabled &&
            ((this._disabled = value),
            this._toggleNativeDragInteractions(),
            this._handles.forEach((handle) =>
              toggleNativeDragInteractions(handle, value),
            ));
        }
        constructor(
          element,
          _config,
          _document,
          _ngZone,
          _viewportRuler,
          _dragDropRegistry,
        ) {
          (this._config = _config),
            (this._document = _document),
            (this._ngZone = _ngZone),
            (this._viewportRuler = _viewportRuler),
            (this._dragDropRegistry = _dragDropRegistry),
            (this._passiveTransform = { x: 0, y: 0 }),
            (this._activeTransform = { x: 0, y: 0 }),
            (this._hasStartedDragging = !1),
            (this._moveEvents = new Subject.B()),
            (this._pointerMoveSubscription = Subscription.yU.EMPTY),
            (this._pointerUpSubscription = Subscription.yU.EMPTY),
            (this._scrollSubscription = Subscription.yU.EMPTY),
            (this._resizeSubscription = Subscription.yU.EMPTY),
            (this._boundaryElement = null),
            (this._nativeInteractionsEnabled = !0),
            (this._handles = []),
            (this._disabledHandles = new Set()),
            (this._direction = "ltr"),
            (this.dragStartDelay = 0),
            (this._disabled = !1),
            (this.beforeStarted = new Subject.B()),
            (this.started = new Subject.B()),
            (this.released = new Subject.B()),
            (this.ended = new Subject.B()),
            (this.entered = new Subject.B()),
            (this.exited = new Subject.B()),
            (this.dropped = new Subject.B()),
            (this.moved = this._moveEvents),
            (this._pointerDown = (event) => {
              if ((this.beforeStarted.next(), this._handles.length)) {
                const targetHandle = this._getTargetHandle(event);
                !targetHandle ||
                  this._disabledHandles.has(targetHandle) ||
                  this.disabled ||
                  this._initializeDragSequence(targetHandle, event);
              } else
                this.disabled ||
                  this._initializeDragSequence(this._rootElement, event);
            }),
            (this._pointerMove = (event) => {
              const pointerPosition = this._getPointerPositionOnPage(event);
              if (!this._hasStartedDragging) {
                if (
                  Math.abs(pointerPosition.x - this._pickupPositionOnPage.x) +
                    Math.abs(
                      pointerPosition.y - this._pickupPositionOnPage.y,
                    ) >=
                  this._config.dragStartThreshold
                ) {
                  const isDelayElapsed =
                      Date.now() >=
                      this._dragStartTime + this._getDragStartDelay(event),
                    container = this._dropContainer;
                  if (!isDelayElapsed) return void this._endDragSequence(event);
                  (container &&
                    (container.isDragging() || container.isReceiving())) ||
                    (event.cancelable && event.preventDefault(),
                    (this._hasStartedDragging = !0),
                    this._ngZone.run(() => this._startDragSequence(event)));
                }
                return;
              }
              event.cancelable && event.preventDefault();
              const constrainedPointerPosition =
                this._getConstrainedPointerPosition(pointerPosition);
              if (
                ((this._hasMoved = !0),
                (this._lastKnownPointerPosition = pointerPosition),
                this._updatePointerDirectionDelta(constrainedPointerPosition),
                this._dropContainer)
              )
                this._updateActiveDropContainer(
                  constrainedPointerPosition,
                  pointerPosition,
                );
              else {
                const offset = this.constrainPosition
                    ? this._initialDomRect
                    : this._pickupPositionOnPage,
                  activeTransform = this._activeTransform;
                (activeTransform.x =
                  constrainedPointerPosition.x -
                  offset.x +
                  this._passiveTransform.x),
                  (activeTransform.y =
                    constrainedPointerPosition.y -
                    offset.y +
                    this._passiveTransform.y),
                  this._applyRootElementTransform(
                    activeTransform.x,
                    activeTransform.y,
                  );
              }
              this._moveEvents.observers.length &&
                this._ngZone.run(() => {
                  this._moveEvents.next({
                    source: this,
                    pointerPosition: constrainedPointerPosition,
                    event,
                    distance: this._getDragDistance(constrainedPointerPosition),
                    delta: this._pointerDirectionDelta,
                  });
                });
            }),
            (this._pointerUp = (event) => {
              this._endDragSequence(event);
            }),
            (this._nativeDragStart = (event) => {
              if (this._handles.length) {
                const targetHandle = this._getTargetHandle(event);
                !targetHandle ||
                  this._disabledHandles.has(targetHandle) ||
                  this.disabled ||
                  event.preventDefault();
              } else this.disabled || event.preventDefault();
            }),
            this.withRootElement(element).withParent(
              _config.parentDragRef || null,
            ),
            (this._parentPositions = new ParentPositionTracker(_document)),
            _dragDropRegistry.registerDragItem(this);
        }
        getPlaceholderElement() {
          return this._placeholder;
        }
        getRootElement() {
          return this._rootElement;
        }
        getVisibleElement() {
          return this.isDragging()
            ? this.getPlaceholderElement()
            : this.getRootElement();
        }
        withHandles(handles) {
          (this._handles = handles.map((handle) => (0, coercion.i8)(handle))),
            this._handles.forEach((handle) =>
              toggleNativeDragInteractions(handle, this.disabled),
            ),
            this._toggleNativeDragInteractions();
          const disabledHandles = new Set();
          return (
            this._disabledHandles.forEach((handle) => {
              this._handles.indexOf(handle) > -1 && disabledHandles.add(handle);
            }),
            (this._disabledHandles = disabledHandles),
            this
          );
        }
        withPreviewTemplate(template) {
          return (this._previewTemplate = template), this;
        }
        withPlaceholderTemplate(template) {
          return (this._placeholderTemplate = template), this;
        }
        withRootElement(rootElement) {
          const element = (0, coercion.i8)(rootElement);
          return (
            element !== this._rootElement &&
              (this._rootElement &&
                this._removeRootElementListeners(this._rootElement),
              this._ngZone.runOutsideAngular(() => {
                element.addEventListener(
                  "mousedown",
                  this._pointerDown,
                  activeEventListenerOptions,
                ),
                  element.addEventListener(
                    "touchstart",
                    this._pointerDown,
                    passiveEventListenerOptions,
                  ),
                  element.addEventListener(
                    "dragstart",
                    this._nativeDragStart,
                    activeEventListenerOptions,
                  );
              }),
              (this._initialTransform = void 0),
              (this._rootElement = element)),
            "undefined" != typeof SVGElement &&
              this._rootElement instanceof SVGElement &&
              (this._ownerSVGElement = this._rootElement.ownerSVGElement),
            this
          );
        }
        withBoundaryElement(boundaryElement) {
          return (
            (this._boundaryElement = boundaryElement
              ? (0, coercion.i8)(boundaryElement)
              : null),
            this._resizeSubscription.unsubscribe(),
            boundaryElement &&
              (this._resizeSubscription = this._viewportRuler
                .change(10)
                .subscribe(() => this._containInsideBoundaryOnResize())),
            this
          );
        }
        withParent(parent) {
          return (this._parentDragRef = parent), this;
        }
        dispose() {
          this._removeRootElementListeners(this._rootElement),
            this.isDragging() && this._rootElement?.remove(),
            this._anchor?.remove(),
            this._destroyPreview(),
            this._destroyPlaceholder(),
            this._dragDropRegistry.removeDragItem(this),
            this._removeListeners(),
            this.beforeStarted.complete(),
            this.started.complete(),
            this.released.complete(),
            this.ended.complete(),
            this.entered.complete(),
            this.exited.complete(),
            this.dropped.complete(),
            this._moveEvents.complete(),
            (this._handles = []),
            this._disabledHandles.clear(),
            (this._dropContainer = void 0),
            this._resizeSubscription.unsubscribe(),
            this._parentPositions.clear(),
            (this._boundaryElement =
              this._rootElement =
              this._ownerSVGElement =
              this._placeholderTemplate =
              this._previewTemplate =
              this._anchor =
              this._parentDragRef =
                null);
        }
        isDragging() {
          return (
            this._hasStartedDragging && this._dragDropRegistry.isDragging(this)
          );
        }
        reset() {
          (this._rootElement.style.transform = this._initialTransform || ""),
            (this._activeTransform = { x: 0, y: 0 }),
            (this._passiveTransform = { x: 0, y: 0 });
        }
        disableHandle(handle) {
          !this._disabledHandles.has(handle) &&
            this._handles.indexOf(handle) > -1 &&
            (this._disabledHandles.add(handle),
            toggleNativeDragInteractions(handle, !0));
        }
        enableHandle(handle) {
          this._disabledHandles.has(handle) &&
            (this._disabledHandles.delete(handle),
            toggleNativeDragInteractions(handle, this.disabled));
        }
        withDirection(direction) {
          return (this._direction = direction), this;
        }
        _withDropContainer(container) {
          this._dropContainer = container;
        }
        getFreeDragPosition() {
          const position = this.isDragging()
            ? this._activeTransform
            : this._passiveTransform;
          return { x: position.x, y: position.y };
        }
        setFreeDragPosition(value) {
          return (
            (this._activeTransform = { x: 0, y: 0 }),
            (this._passiveTransform.x = value.x),
            (this._passiveTransform.y = value.y),
            this._dropContainer ||
              this._applyRootElementTransform(value.x, value.y),
            this
          );
        }
        withPreviewContainer(value) {
          return (this._previewContainer = value), this;
        }
        _sortFromLastPointerPosition() {
          const position = this._lastKnownPointerPosition;
          position &&
            this._dropContainer &&
            this._updateActiveDropContainer(
              this._getConstrainedPointerPosition(position),
              position,
            );
        }
        _removeListeners() {
          this._pointerMoveSubscription.unsubscribe(),
            this._pointerUpSubscription.unsubscribe(),
            this._scrollSubscription.unsubscribe(),
            this._getShadowRoot()?.removeEventListener(
              "selectstart",
              shadowDomSelectStart,
              activeCapturingEventOptions$1,
            );
        }
        _destroyPreview() {
          this._preview?.destroy(), (this._preview = null);
        }
        _destroyPlaceholder() {
          this._placeholder?.remove(),
            this._placeholderRef?.destroy(),
            (this._placeholder = this._placeholderRef = null);
        }
        _endDragSequence(event) {
          if (
            this._dragDropRegistry.isDragging(this) &&
            (this._removeListeners(),
            this._dragDropRegistry.stopDragging(this),
            this._toggleNativeDragInteractions(),
            this._handles &&
              (this._rootElement.style.webkitTapHighlightColor =
                this._rootElementTapHighlight),
            this._hasStartedDragging)
          )
            if (
              (this.released.next({ source: this, event }), this._dropContainer)
            )
              this._dropContainer._stopScrolling(),
                this._animatePreviewToPlaceholder().then(() => {
                  this._cleanupDragArtifacts(event),
                    this._cleanupCachedDimensions(),
                    this._dragDropRegistry.stopDragging(this);
                });
            else {
              this._passiveTransform.x = this._activeTransform.x;
              const pointerPosition = this._getPointerPositionOnPage(event);
              (this._passiveTransform.y = this._activeTransform.y),
                this._ngZone.run(() => {
                  this.ended.next({
                    source: this,
                    distance: this._getDragDistance(pointerPosition),
                    dropPoint: pointerPosition,
                    event,
                  });
                }),
                this._cleanupCachedDimensions(),
                this._dragDropRegistry.stopDragging(this);
            }
        }
        _startDragSequence(event) {
          isTouchEvent(event) && (this._lastTouchEventTime = Date.now()),
            this._toggleNativeDragInteractions();
          const shadowRoot = this._getShadowRoot(),
            dropContainer = this._dropContainer;
          if (
            (shadowRoot &&
              this._ngZone.runOutsideAngular(() => {
                shadowRoot.addEventListener(
                  "selectstart",
                  shadowDomSelectStart,
                  activeCapturingEventOptions$1,
                );
              }),
            dropContainer)
          ) {
            const element = this._rootElement,
              parent = element.parentNode,
              placeholder = (this._placeholder =
                this._createPlaceholderElement()),
              anchor = (this._anchor =
                this._anchor || this._document.createComment(""));
            parent.insertBefore(anchor, element),
              (this._initialTransform = element.style.transform || ""),
              (this._preview = new PreviewRef(
                this._document,
                this._rootElement,
                this._direction,
                this._initialDomRect,
                this._previewTemplate || null,
                this.previewClass || null,
                this._pickupPositionOnPage,
                this._initialTransform,
                this._config.zIndex || 1e3,
              )),
              this._preview.attach(
                this._getPreviewInsertionPoint(parent, shadowRoot),
              ),
              toggleVisibility(element, !1, dragImportantProperties),
              this._document.body.appendChild(
                parent.replaceChild(placeholder, element),
              ),
              this.started.next({ source: this, event }),
              dropContainer.start(),
              (this._initialContainer = dropContainer),
              (this._initialIndex = dropContainer.getItemIndex(this));
          } else
            this.started.next({ source: this, event }),
              (this._initialContainer = this._initialIndex = void 0);
          this._parentPositions.cache(
            dropContainer ? dropContainer.getScrollableParents() : [],
          );
        }
        _initializeDragSequence(referenceElement, event) {
          this._parentDragRef && event.stopPropagation();
          const isDragging = this.isDragging(),
            isTouchSequence = isTouchEvent(event),
            isAuxiliaryMouseButton = !isTouchSequence && 0 !== event.button,
            rootElement = this._rootElement,
            target = (0, platform.Fb)(event),
            isSyntheticEvent =
              !isTouchSequence &&
              this._lastTouchEventTime &&
              this._lastTouchEventTime + 800 > Date.now(),
            isFakeEvent = isTouchSequence
              ? (0, a11y.w6)(event)
              : (0, a11y._G)(event);
          if (
            (target &&
              target.draggable &&
              "mousedown" === event.type &&
              event.preventDefault(),
            isDragging ||
              isAuxiliaryMouseButton ||
              isSyntheticEvent ||
              isFakeEvent)
          )
            return;
          if (this._handles.length) {
            const rootStyles = rootElement.style;
            (this._rootElementTapHighlight =
              rootStyles.webkitTapHighlightColor || ""),
              (rootStyles.webkitTapHighlightColor = "transparent");
          }
          (this._hasStartedDragging = this._hasMoved = !1),
            this._removeListeners(),
            (this._initialDomRect = this._rootElement.getBoundingClientRect()),
            (this._pointerMoveSubscription =
              this._dragDropRegistry.pointerMove.subscribe(this._pointerMove)),
            (this._pointerUpSubscription =
              this._dragDropRegistry.pointerUp.subscribe(this._pointerUp)),
            (this._scrollSubscription = this._dragDropRegistry
              .scrolled(this._getShadowRoot())
              .subscribe((scrollEvent) => this._updateOnScroll(scrollEvent))),
            this._boundaryElement &&
              (this._boundaryRect = getMutableClientRect(
                this._boundaryElement,
              ));
          const previewTemplate = this._previewTemplate;
          this._pickupPositionInElement =
            previewTemplate &&
            previewTemplate.template &&
            !previewTemplate.matchSize
              ? { x: 0, y: 0 }
              : this._getPointerPositionInElement(
                  this._initialDomRect,
                  referenceElement,
                  event,
                );
          const pointerPosition =
            (this._pickupPositionOnPage =
            this._lastKnownPointerPosition =
              this._getPointerPositionOnPage(event));
          (this._pointerDirectionDelta = { x: 0, y: 0 }),
            (this._pointerPositionAtLastDirectionChange = {
              x: pointerPosition.x,
              y: pointerPosition.y,
            }),
            (this._dragStartTime = Date.now()),
            this._dragDropRegistry.startDragging(this, event);
        }
        _cleanupDragArtifacts(event) {
          toggleVisibility(this._rootElement, !0, dragImportantProperties),
            this._anchor.parentNode.replaceChild(
              this._rootElement,
              this._anchor,
            ),
            this._destroyPreview(),
            this._destroyPlaceholder(),
            (this._initialDomRect =
              this._boundaryRect =
              this._previewRect =
              this._initialTransform =
                void 0),
            this._ngZone.run(() => {
              const container = this._dropContainer,
                currentIndex = container.getItemIndex(this),
                pointerPosition = this._getPointerPositionOnPage(event),
                distance = this._getDragDistance(pointerPosition),
                isPointerOverContainer = container._isOverContainer(
                  pointerPosition.x,
                  pointerPosition.y,
                );
              this.ended.next({
                source: this,
                distance,
                dropPoint: pointerPosition,
                event,
              }),
                this.dropped.next({
                  item: this,
                  currentIndex,
                  previousIndex: this._initialIndex,
                  container,
                  previousContainer: this._initialContainer,
                  isPointerOverContainer,
                  distance,
                  dropPoint: pointerPosition,
                  event,
                }),
                container.drop(
                  this,
                  currentIndex,
                  this._initialIndex,
                  this._initialContainer,
                  isPointerOverContainer,
                  distance,
                  pointerPosition,
                  event,
                ),
                (this._dropContainer = this._initialContainer);
            });
        }
        _updateActiveDropContainer({ x, y }, { x: rawX, y: rawY }) {
          let newContainer =
            this._initialContainer._getSiblingContainerFromPosition(this, x, y);
          !newContainer &&
            this._dropContainer !== this._initialContainer &&
            this._initialContainer._isOverContainer(x, y) &&
            (newContainer = this._initialContainer),
            newContainer &&
              newContainer !== this._dropContainer &&
              this._ngZone.run(() => {
                this.exited.next({
                  item: this,
                  container: this._dropContainer,
                }),
                  this._dropContainer.exit(this),
                  (this._dropContainer = newContainer),
                  this._dropContainer.enter(
                    this,
                    x,
                    y,
                    newContainer === this._initialContainer &&
                      newContainer.sortingDisabled
                      ? this._initialIndex
                      : void 0,
                  ),
                  this.entered.next({
                    item: this,
                    container: newContainer,
                    currentIndex: newContainer.getItemIndex(this),
                  });
              }),
            this.isDragging() &&
              (this._dropContainer._startScrollingIfNecessary(rawX, rawY),
              this._dropContainer._sortItem(
                this,
                x,
                y,
                this._pointerDirectionDelta,
              ),
              this.constrainPosition
                ? this._applyPreviewTransform(x, y)
                : this._applyPreviewTransform(
                    x - this._pickupPositionInElement.x,
                    y - this._pickupPositionInElement.y,
                  ));
        }
        _animatePreviewToPlaceholder() {
          if (!this._hasMoved) return Promise.resolve();
          const placeholderRect = this._placeholder.getBoundingClientRect();
          this._preview.addClass("cdk-drag-animating"),
            this._applyPreviewTransform(
              placeholderRect.left,
              placeholderRect.top,
            );
          const duration = this._preview.getTransitionDuration();
          return 0 === duration
            ? Promise.resolve()
            : this._ngZone.runOutsideAngular(
                () =>
                  new Promise((resolve) => {
                    const handler = (event) => {
                        (!event ||
                          ((0, platform.Fb)(event) === this._preview &&
                            "transform" === event.propertyName)) &&
                          (this._preview?.removeEventListener(
                            "transitionend",
                            handler,
                          ),
                          resolve(),
                          clearTimeout(timeout));
                      },
                      timeout = setTimeout(handler, 1.5 * duration);
                    this._preview.addEventListener("transitionend", handler);
                  }),
              );
        }
        _createPlaceholderElement() {
          const placeholderConfig = this._placeholderTemplate,
            placeholderTemplate = placeholderConfig
              ? placeholderConfig.template
              : null;
          let placeholder;
          return (
            placeholderTemplate
              ? ((this._placeholderRef =
                  placeholderConfig.viewContainer.createEmbeddedView(
                    placeholderTemplate,
                    placeholderConfig.context,
                  )),
                this._placeholderRef.detectChanges(),
                (placeholder = getRootNode(
                  this._placeholderRef,
                  this._document,
                )))
              : (placeholder = deepCloneNode(this._rootElement)),
            (placeholder.style.pointerEvents = "none"),
            placeholder.classList.add("cdk-drag-placeholder"),
            placeholder
          );
        }
        _getPointerPositionInElement(elementRect, referenceElement, event) {
          const handleElement =
              referenceElement === this._rootElement ? null : referenceElement,
            referenceRect = handleElement
              ? handleElement.getBoundingClientRect()
              : elementRect,
            point = isTouchEvent(event) ? event.targetTouches[0] : event,
            scrollPosition = this._getViewportScrollPosition(),
            x = point.pageX - referenceRect.left - scrollPosition.left,
            y = point.pageY - referenceRect.top - scrollPosition.top;
          return {
            x: referenceRect.left - elementRect.left + x,
            y: referenceRect.top - elementRect.top + y,
          };
        }
        _getPointerPositionOnPage(event) {
          const scrollPosition = this._getViewportScrollPosition(),
            point = isTouchEvent(event)
              ? event.touches[0] ||
                event.changedTouches[0] || { pageX: 0, pageY: 0 }
              : event,
            x = point.pageX - scrollPosition.left,
            y = point.pageY - scrollPosition.top;
          if (this._ownerSVGElement) {
            const svgMatrix = this._ownerSVGElement.getScreenCTM();
            if (svgMatrix) {
              const svgPoint = this._ownerSVGElement.createSVGPoint();
              return (
                (svgPoint.x = x),
                (svgPoint.y = y),
                svgPoint.matrixTransform(svgMatrix.inverse())
              );
            }
          }
          return { x, y };
        }
        _getConstrainedPointerPosition(point) {
          const dropContainerLock = this._dropContainer
            ? this._dropContainer.lockAxis
            : null;
          let { x, y } = this.constrainPosition
            ? this.constrainPosition(
                point,
                this,
                this._initialDomRect,
                this._pickupPositionInElement,
              )
            : point;
          if (
            ("x" === this.lockAxis || "x" === dropContainerLock
              ? (y =
                  this._pickupPositionOnPage.y -
                  (this.constrainPosition
                    ? this._pickupPositionInElement.y
                    : 0))
              : ("y" !== this.lockAxis && "y" !== dropContainerLock) ||
                (x =
                  this._pickupPositionOnPage.x -
                  (this.constrainPosition
                    ? this._pickupPositionInElement.x
                    : 0)),
            this._boundaryRect)
          ) {
            const { x: pickupX, y: pickupY } = this.constrainPosition
                ? { x: 0, y: 0 }
                : this._pickupPositionInElement,
              boundaryRect = this._boundaryRect,
              { width: previewWidth, height: previewHeight } =
                this._getPreviewRect(),
              minY = boundaryRect.top + pickupY,
              maxY = boundaryRect.bottom - (previewHeight - pickupY);
            (x = clamp$1(
              x,
              boundaryRect.left + pickupX,
              boundaryRect.right - (previewWidth - pickupX),
            )),
              (y = clamp$1(y, minY, maxY));
          }
          return { x, y };
        }
        _updatePointerDirectionDelta(pointerPositionOnPage) {
          const { x, y } = pointerPositionOnPage,
            delta = this._pointerDirectionDelta,
            positionSinceLastChange =
              this._pointerPositionAtLastDirectionChange,
            changeX = Math.abs(x - positionSinceLastChange.x),
            changeY = Math.abs(y - positionSinceLastChange.y);
          return (
            changeX > this._config.pointerDirectionChangeThreshold &&
              ((delta.x = x > positionSinceLastChange.x ? 1 : -1),
              (positionSinceLastChange.x = x)),
            changeY > this._config.pointerDirectionChangeThreshold &&
              ((delta.y = y > positionSinceLastChange.y ? 1 : -1),
              (positionSinceLastChange.y = y)),
            delta
          );
        }
        _toggleNativeDragInteractions() {
          if (!this._rootElement || !this._handles) return;
          const shouldEnable = this._handles.length > 0 || !this.isDragging();
          shouldEnable !== this._nativeInteractionsEnabled &&
            ((this._nativeInteractionsEnabled = shouldEnable),
            toggleNativeDragInteractions(this._rootElement, shouldEnable));
        }
        _removeRootElementListeners(element) {
          element.removeEventListener(
            "mousedown",
            this._pointerDown,
            activeEventListenerOptions,
          ),
            element.removeEventListener(
              "touchstart",
              this._pointerDown,
              passiveEventListenerOptions,
            ),
            element.removeEventListener(
              "dragstart",
              this._nativeDragStart,
              activeEventListenerOptions,
            );
        }
        _applyRootElementTransform(x, y) {
          const transform = getTransform(x, y),
            styles = this._rootElement.style;
          null == this._initialTransform &&
            (this._initialTransform =
              styles.transform && "none" != styles.transform
                ? styles.transform
                : ""),
            (styles.transform = combineTransforms(
              transform,
              this._initialTransform,
            ));
        }
        _applyPreviewTransform(x, y) {
          const initialTransform = this._previewTemplate?.template
              ? void 0
              : this._initialTransform,
            transform = getTransform(x, y);
          this._preview.setTransform(
            combineTransforms(transform, initialTransform),
          );
        }
        _getDragDistance(currentPosition) {
          const pickupPosition = this._pickupPositionOnPage;
          return pickupPosition
            ? {
                x: currentPosition.x - pickupPosition.x,
                y: currentPosition.y - pickupPosition.y,
              }
            : { x: 0, y: 0 };
        }
        _cleanupCachedDimensions() {
          (this._boundaryRect = this._previewRect = void 0),
            this._parentPositions.clear();
        }
        _containInsideBoundaryOnResize() {
          let { x, y } = this._passiveTransform;
          if (
            (0 === x && 0 === y) ||
            this.isDragging() ||
            !this._boundaryElement
          )
            return;
          const elementRect = this._rootElement.getBoundingClientRect(),
            boundaryRect = this._boundaryElement.getBoundingClientRect();
          if (
            (0 === boundaryRect.width && 0 === boundaryRect.height) ||
            (0 === elementRect.width && 0 === elementRect.height)
          )
            return;
          const leftOverflow = boundaryRect.left - elementRect.left,
            rightOverflow = elementRect.right - boundaryRect.right,
            topOverflow = boundaryRect.top - elementRect.top,
            bottomOverflow = elementRect.bottom - boundaryRect.bottom;
          boundaryRect.width > elementRect.width
            ? (leftOverflow > 0 && (x += leftOverflow),
              rightOverflow > 0 && (x -= rightOverflow))
            : (x = 0),
            boundaryRect.height > elementRect.height
              ? (topOverflow > 0 && (y += topOverflow),
                bottomOverflow > 0 && (y -= bottomOverflow))
              : (y = 0),
            (x === this._passiveTransform.x &&
              y === this._passiveTransform.y) ||
              this.setFreeDragPosition({ y, x });
        }
        _getDragStartDelay(event) {
          const value = this.dragStartDelay;
          return "number" == typeof value
            ? value
            : isTouchEvent(event)
              ? value.touch
              : value
                ? value.mouse
                : 0;
        }
        _updateOnScroll(event) {
          const scrollDifference = this._parentPositions.handleScroll(event);
          if (scrollDifference) {
            const target = (0, platform.Fb)(event);
            this._boundaryRect &&
              target !== this._boundaryElement &&
              target.contains(this._boundaryElement) &&
              adjustDomRect(
                this._boundaryRect,
                scrollDifference.top,
                scrollDifference.left,
              ),
              (this._pickupPositionOnPage.x += scrollDifference.left),
              (this._pickupPositionOnPage.y += scrollDifference.top),
              this._dropContainer ||
                ((this._activeTransform.x -= scrollDifference.left),
                (this._activeTransform.y -= scrollDifference.top),
                this._applyRootElementTransform(
                  this._activeTransform.x,
                  this._activeTransform.y,
                ));
          }
        }
        _getViewportScrollPosition() {
          return (
            this._parentPositions.positions.get(this._document)
              ?.scrollPosition ||
            this._parentPositions.getViewportScrollPosition()
          );
        }
        _getShadowRoot() {
          return (
            void 0 === this._cachedShadowRoot &&
              (this._cachedShadowRoot = (0, platform.KT)(this._rootElement)),
            this._cachedShadowRoot
          );
        }
        _getPreviewInsertionPoint(initialParent, shadowRoot) {
          const previewContainer = this._previewContainer || "global";
          if ("parent" === previewContainer) return initialParent;
          if ("global" === previewContainer) {
            const documentRef = this._document;
            return (
              shadowRoot ||
              documentRef.fullscreenElement ||
              documentRef.webkitFullscreenElement ||
              documentRef.mozFullScreenElement ||
              documentRef.msFullscreenElement ||
              documentRef.body
            );
          }
          return (0, coercion.i8)(previewContainer);
        }
        _getPreviewRect() {
          return (
            (this._previewRect &&
              (this._previewRect.width || this._previewRect.height)) ||
              (this._previewRect = this._preview
                ? this._preview.getBoundingClientRect()
                : this._initialDomRect),
            this._previewRect
          );
        }
        _getTargetHandle(event) {
          return this._handles.find(
            (handle) =>
              event.target &&
              (event.target === handle || handle.contains(event.target)),
          );
        }
      }
      function clamp$1(value, min, max) {
        return Math.max(min, Math.min(max, value));
      }
      function isTouchEvent(event) {
        return "t" === event.type[0];
      }
      function shadowDomSelectStart(event) {
        event.preventDefault();
      }
      function moveItemInArray(array, fromIndex, toIndex) {
        const from = clamp(fromIndex, array.length - 1),
          to = clamp(toIndex, array.length - 1);
        if (from === to) return;
        const target = array[from],
          delta = to < from ? -1 : 1;
        for (let i = from; i !== to; i += delta) array[i] = array[i + delta];
        array[to] = target;
      }
      function transferArrayItem(
        currentArray,
        targetArray,
        currentIndex,
        targetIndex,
      ) {
        const from = clamp(currentIndex, currentArray.length - 1),
          to = clamp(targetIndex, targetArray.length);
        currentArray.length &&
          targetArray.splice(to, 0, currentArray.splice(from, 1)[0]);
      }
      function clamp(value, max) {
        return Math.max(0, Math.min(max, value));
      }
      class SingleAxisSortStrategy {
        constructor(_element, _dragDropRegistry) {
          (this._element = _element),
            (this._dragDropRegistry = _dragDropRegistry),
            (this._itemPositions = []),
            (this.orientation = "vertical"),
            (this._previousSwap = { drag: null, delta: 0, overlaps: !1 });
        }
        start(items) {
          this.withItems(items);
        }
        sort(item, pointerX, pointerY, pointerDelta) {
          const siblings = this._itemPositions,
            newIndex = this._getItemIndexFromPointerPosition(
              item,
              pointerX,
              pointerY,
              pointerDelta,
            );
          if (-1 === newIndex && siblings.length > 0) return null;
          const isHorizontal = "horizontal" === this.orientation,
            currentIndex = siblings.findIndex(
              (currentItem) => currentItem.drag === item,
            ),
            siblingAtNewPosition = siblings[newIndex],
            currentPosition = siblings[currentIndex].clientRect,
            newPosition = siblingAtNewPosition.clientRect,
            delta = currentIndex > newIndex ? 1 : -1,
            itemOffset = this._getItemOffsetPx(
              currentPosition,
              newPosition,
              delta,
            ),
            siblingOffset = this._getSiblingOffsetPx(
              currentIndex,
              siblings,
              delta,
            ),
            oldOrder = siblings.slice();
          return (
            moveItemInArray(siblings, currentIndex, newIndex),
            siblings.forEach((sibling, index) => {
              if (oldOrder[index] === sibling) return;
              const isDraggedItem = sibling.drag === item,
                offset = isDraggedItem ? itemOffset : siblingOffset,
                elementToOffset = isDraggedItem
                  ? item.getPlaceholderElement()
                  : sibling.drag.getRootElement();
              (sibling.offset += offset),
                isHorizontal
                  ? ((elementToOffset.style.transform = combineTransforms(
                      `translate3d(${Math.round(sibling.offset)}px, 0, 0)`,
                      sibling.initialTransform,
                    )),
                    adjustDomRect(sibling.clientRect, 0, offset))
                  : ((elementToOffset.style.transform = combineTransforms(
                      `translate3d(0, ${Math.round(sibling.offset)}px, 0)`,
                      sibling.initialTransform,
                    )),
                    adjustDomRect(sibling.clientRect, offset, 0));
            }),
            (this._previousSwap.overlaps = isInsideClientRect(
              newPosition,
              pointerX,
              pointerY,
            )),
            (this._previousSwap.drag = siblingAtNewPosition.drag),
            (this._previousSwap.delta = isHorizontal
              ? pointerDelta.x
              : pointerDelta.y),
            { previousIndex: currentIndex, currentIndex: newIndex }
          );
        }
        enter(item, pointerX, pointerY, index) {
          const newIndex =
              null == index || index < 0
                ? this._getItemIndexFromPointerPosition(
                    item,
                    pointerX,
                    pointerY,
                  )
                : index,
            activeDraggables = this._activeDraggables,
            currentIndex = activeDraggables.indexOf(item),
            placeholder = item.getPlaceholderElement();
          let newPositionReference = activeDraggables[newIndex];
          if (
            (newPositionReference === item &&
              (newPositionReference = activeDraggables[newIndex + 1]),
            !newPositionReference &&
              (null == newIndex ||
                -1 === newIndex ||
                newIndex < activeDraggables.length - 1) &&
              this._shouldEnterAsFirstChild(pointerX, pointerY) &&
              (newPositionReference = activeDraggables[0]),
            currentIndex > -1 && activeDraggables.splice(currentIndex, 1),
            newPositionReference &&
              !this._dragDropRegistry.isDragging(newPositionReference))
          ) {
            const element = newPositionReference.getRootElement();
            element.parentElement.insertBefore(placeholder, element),
              activeDraggables.splice(newIndex, 0, item);
          } else
            (0, coercion.i8)(this._element).appendChild(placeholder),
              activeDraggables.push(item);
          (placeholder.style.transform = ""), this._cacheItemPositions();
        }
        withItems(items) {
          (this._activeDraggables = items.slice()), this._cacheItemPositions();
        }
        withSortPredicate(predicate) {
          this._sortPredicate = predicate;
        }
        reset() {
          this._activeDraggables.forEach((item) => {
            const rootElement = item.getRootElement();
            if (rootElement) {
              const initialTransform = this._itemPositions.find(
                (p) => p.drag === item,
              )?.initialTransform;
              rootElement.style.transform = initialTransform || "";
            }
          }),
            (this._itemPositions = []),
            (this._activeDraggables = []),
            (this._previousSwap.drag = null),
            (this._previousSwap.delta = 0),
            (this._previousSwap.overlaps = !1);
        }
        getActiveItemsSnapshot() {
          return this._activeDraggables;
        }
        getItemIndex(item) {
          return (
            "horizontal" === this.orientation && "rtl" === this.direction
              ? this._itemPositions.slice().reverse()
              : this._itemPositions
          ).findIndex((currentItem) => currentItem.drag === item);
        }
        updateOnScroll(topDifference, leftDifference) {
          this._itemPositions.forEach(({ clientRect }) => {
            adjustDomRect(clientRect, topDifference, leftDifference);
          }),
            this._itemPositions.forEach(({ drag }) => {
              this._dragDropRegistry.isDragging(drag) &&
                drag._sortFromLastPointerPosition();
            });
        }
        _cacheItemPositions() {
          const isHorizontal = "horizontal" === this.orientation;
          this._itemPositions = this._activeDraggables
            .map((drag) => {
              const elementToMeasure = drag.getVisibleElement();
              return {
                drag,
                offset: 0,
                initialTransform: elementToMeasure.style.transform || "",
                clientRect: getMutableClientRect(elementToMeasure),
              };
            })
            .sort((a, b) =>
              isHorizontal
                ? a.clientRect.left - b.clientRect.left
                : a.clientRect.top - b.clientRect.top,
            );
        }
        _getItemOffsetPx(currentPosition, newPosition, delta) {
          const isHorizontal = "horizontal" === this.orientation;
          let itemOffset = isHorizontal
            ? newPosition.left - currentPosition.left
            : newPosition.top - currentPosition.top;
          return (
            -1 === delta &&
              (itemOffset += isHorizontal
                ? newPosition.width - currentPosition.width
                : newPosition.height - currentPosition.height),
            itemOffset
          );
        }
        _getSiblingOffsetPx(currentIndex, siblings, delta) {
          const isHorizontal = "horizontal" === this.orientation,
            currentPosition = siblings[currentIndex].clientRect,
            immediateSibling = siblings[currentIndex + -1 * delta];
          let siblingOffset =
            currentPosition[isHorizontal ? "width" : "height"] * delta;
          if (immediateSibling) {
            const start = isHorizontal ? "left" : "top",
              end = isHorizontal ? "right" : "bottom";
            -1 === delta
              ? (siblingOffset -=
                  immediateSibling.clientRect[start] - currentPosition[end])
              : (siblingOffset +=
                  currentPosition[start] - immediateSibling.clientRect[end]);
          }
          return siblingOffset;
        }
        _shouldEnterAsFirstChild(pointerX, pointerY) {
          if (!this._activeDraggables.length) return !1;
          const itemPositions = this._itemPositions,
            isHorizontal = "horizontal" === this.orientation;
          if (itemPositions[0].drag !== this._activeDraggables[0]) {
            const lastItemRect =
              itemPositions[itemPositions.length - 1].clientRect;
            return isHorizontal
              ? pointerX >= lastItemRect.right
              : pointerY >= lastItemRect.bottom;
          }
          {
            const firstItemRect = itemPositions[0].clientRect;
            return isHorizontal
              ? pointerX <= firstItemRect.left
              : pointerY <= firstItemRect.top;
          }
        }
        _getItemIndexFromPointerPosition(item, pointerX, pointerY, delta) {
          const isHorizontal = "horizontal" === this.orientation,
            index = this._itemPositions.findIndex(({ drag, clientRect }) => {
              if (drag === item) return !1;
              if (delta) {
                const direction = isHorizontal ? delta.x : delta.y;
                if (
                  drag === this._previousSwap.drag &&
                  this._previousSwap.overlaps &&
                  direction === this._previousSwap.delta
                )
                  return !1;
              }
              return isHorizontal
                ? pointerX >= Math.floor(clientRect.left) &&
                    pointerX < Math.floor(clientRect.right)
                : pointerY >= Math.floor(clientRect.top) &&
                    pointerY < Math.floor(clientRect.bottom);
            });
          return -1 !== index && this._sortPredicate(index, item) ? index : -1;
        }
      }
      const SCROLL_PROXIMITY_THRESHOLD = 0.05;
      var AutoScrollVerticalDirection, AutoScrollHorizontalDirection;
      !(function (AutoScrollVerticalDirection) {
        (AutoScrollVerticalDirection[(AutoScrollVerticalDirection.NONE = 0)] =
          "NONE"),
          (AutoScrollVerticalDirection[(AutoScrollVerticalDirection.UP = 1)] =
            "UP"),
          (AutoScrollVerticalDirection[(AutoScrollVerticalDirection.DOWN = 2)] =
            "DOWN");
      })(AutoScrollVerticalDirection || (AutoScrollVerticalDirection = {})),
        (function (AutoScrollHorizontalDirection) {
          (AutoScrollHorizontalDirection[
            (AutoScrollHorizontalDirection.NONE = 0)
          ] = "NONE"),
            (AutoScrollHorizontalDirection[
              (AutoScrollHorizontalDirection.LEFT = 1)
            ] = "LEFT"),
            (AutoScrollHorizontalDirection[
              (AutoScrollHorizontalDirection.RIGHT = 2)
            ] = "RIGHT");
        })(
          AutoScrollHorizontalDirection || (AutoScrollHorizontalDirection = {}),
        );
      class DropListRef {
        constructor(
          element,
          _dragDropRegistry,
          _document,
          _ngZone,
          _viewportRuler,
        ) {
          (this._dragDropRegistry = _dragDropRegistry),
            (this._ngZone = _ngZone),
            (this._viewportRuler = _viewportRuler),
            (this.disabled = !1),
            (this.sortingDisabled = !1),
            (this.autoScrollDisabled = !1),
            (this.autoScrollStep = 2),
            (this.enterPredicate = () => !0),
            (this.sortPredicate = () => !0),
            (this.beforeStarted = new Subject.B()),
            (this.entered = new Subject.B()),
            (this.exited = new Subject.B()),
            (this.dropped = new Subject.B()),
            (this.sorted = new Subject.B()),
            (this.receivingStarted = new Subject.B()),
            (this.receivingStopped = new Subject.B()),
            (this._isDragging = !1),
            (this._draggables = []),
            (this._siblings = []),
            (this._activeSiblings = new Set()),
            (this._viewportScrollSubscription = Subscription.yU.EMPTY),
            (this._verticalScrollDirection = AutoScrollVerticalDirection.NONE),
            (this._horizontalScrollDirection =
              AutoScrollHorizontalDirection.NONE),
            (this._stopScrollTimers = new Subject.B()),
            (this._cachedShadowRoot = null),
            (this._startScrollInterval = () => {
              this._stopScrolling(),
                (function interval(period, scheduler) {
                  return (
                    void 0 === period && (period = 0),
                    void 0 === scheduler && (scheduler = scheduler_async.E),
                    period < 0 && (period = 0),
                    (0, timer.O)(period, period, scheduler)
                  );
                })(0, animationFrame.X)
                  .pipe((0, takeUntil.Q)(this._stopScrollTimers))
                  .subscribe(() => {
                    const node = this._scrollNode,
                      scrollStep = this.autoScrollStep;
                    this._verticalScrollDirection ===
                    AutoScrollVerticalDirection.UP
                      ? node.scrollBy(0, -scrollStep)
                      : this._verticalScrollDirection ===
                          AutoScrollVerticalDirection.DOWN &&
                        node.scrollBy(0, scrollStep),
                      this._horizontalScrollDirection ===
                      AutoScrollHorizontalDirection.LEFT
                        ? node.scrollBy(-scrollStep, 0)
                        : this._horizontalScrollDirection ===
                            AutoScrollHorizontalDirection.RIGHT &&
                          node.scrollBy(scrollStep, 0);
                  });
            }),
            (this.element = (0, coercion.i8)(element)),
            (this._document = _document),
            this.withScrollableParents([this.element]),
            _dragDropRegistry.registerDropContainer(this),
            (this._parentPositions = new ParentPositionTracker(_document)),
            (this._sortStrategy = new SingleAxisSortStrategy(
              this.element,
              _dragDropRegistry,
            )),
            this._sortStrategy.withSortPredicate((index, item) =>
              this.sortPredicate(index, item, this),
            );
        }
        dispose() {
          this._stopScrolling(),
            this._stopScrollTimers.complete(),
            this._viewportScrollSubscription.unsubscribe(),
            this.beforeStarted.complete(),
            this.entered.complete(),
            this.exited.complete(),
            this.dropped.complete(),
            this.sorted.complete(),
            this.receivingStarted.complete(),
            this.receivingStopped.complete(),
            this._activeSiblings.clear(),
            (this._scrollNode = null),
            this._parentPositions.clear(),
            this._dragDropRegistry.removeDropContainer(this);
        }
        isDragging() {
          return this._isDragging;
        }
        start() {
          this._draggingStarted(), this._notifyReceivingSiblings();
        }
        enter(item, pointerX, pointerY, index) {
          this._draggingStarted(),
            null == index &&
              this.sortingDisabled &&
              (index = this._draggables.indexOf(item)),
            this._sortStrategy.enter(item, pointerX, pointerY, index),
            this._cacheParentPositions(),
            this._notifyReceivingSiblings(),
            this.entered.next({
              item,
              container: this,
              currentIndex: this.getItemIndex(item),
            });
        }
        exit(item) {
          this._reset(), this.exited.next({ item, container: this });
        }
        drop(
          item,
          currentIndex,
          previousIndex,
          previousContainer,
          isPointerOverContainer,
          distance,
          dropPoint,
          event = {},
        ) {
          this._reset(),
            this.dropped.next({
              item,
              currentIndex,
              previousIndex,
              container: this,
              previousContainer,
              isPointerOverContainer,
              distance,
              dropPoint,
              event,
            });
        }
        withItems(items) {
          const previousItems = this._draggables;
          if (
            ((this._draggables = items),
            items.forEach((item) => item._withDropContainer(this)),
            this.isDragging())
          ) {
            previousItems
              .filter((item) => item.isDragging())
              .every((item) => -1 === items.indexOf(item))
              ? this._reset()
              : this._sortStrategy.withItems(this._draggables);
          }
          return this;
        }
        withDirection(direction) {
          return (this._sortStrategy.direction = direction), this;
        }
        connectedTo(connectedTo) {
          return (this._siblings = connectedTo.slice()), this;
        }
        withOrientation(orientation) {
          return (this._sortStrategy.orientation = orientation), this;
        }
        withScrollableParents(elements) {
          const element = (0, coercion.i8)(this.element);
          return (
            (this._scrollableElements =
              -1 === elements.indexOf(element)
                ? [element, ...elements]
                : elements.slice()),
            this
          );
        }
        getScrollableParents() {
          return this._scrollableElements;
        }
        getItemIndex(item) {
          return this._isDragging
            ? this._sortStrategy.getItemIndex(item)
            : this._draggables.indexOf(item);
        }
        isReceiving() {
          return this._activeSiblings.size > 0;
        }
        _sortItem(item, pointerX, pointerY, pointerDelta) {
          if (
            this.sortingDisabled ||
            !this._domRect ||
            !isPointerNearDomRect(this._domRect, 0.05, pointerX, pointerY)
          )
            return;
          const result = this._sortStrategy.sort(
            item,
            pointerX,
            pointerY,
            pointerDelta,
          );
          result &&
            this.sorted.next({
              previousIndex: result.previousIndex,
              currentIndex: result.currentIndex,
              container: this,
              item,
            });
        }
        _startScrollingIfNecessary(pointerX, pointerY) {
          if (this.autoScrollDisabled) return;
          let scrollNode,
            verticalScrollDirection = AutoScrollVerticalDirection.NONE,
            horizontalScrollDirection = AutoScrollHorizontalDirection.NONE;
          if (
            (this._parentPositions.positions.forEach((position, element) => {
              element !== this._document &&
                position.clientRect &&
                !scrollNode &&
                isPointerNearDomRect(
                  position.clientRect,
                  0.05,
                  pointerX,
                  pointerY,
                ) &&
                (([verticalScrollDirection, horizontalScrollDirection] =
                  (function getElementScrollDirections(
                    element,
                    clientRect,
                    direction,
                    pointerX,
                    pointerY,
                  ) {
                    const computedVertical = getVerticalScrollDirection(
                        clientRect,
                        pointerY,
                      ),
                      computedHorizontal = getHorizontalScrollDirection(
                        clientRect,
                        pointerX,
                      );
                    let verticalScrollDirection =
                        AutoScrollVerticalDirection.NONE,
                      horizontalScrollDirection =
                        AutoScrollHorizontalDirection.NONE;
                    if (computedVertical) {
                      const scrollTop = element.scrollTop;
                      computedVertical === AutoScrollVerticalDirection.UP
                        ? scrollTop > 0 &&
                          (verticalScrollDirection =
                            AutoScrollVerticalDirection.UP)
                        : element.scrollHeight - scrollTop >
                            element.clientHeight &&
                          (verticalScrollDirection =
                            AutoScrollVerticalDirection.DOWN);
                    }
                    if (computedHorizontal) {
                      const scrollLeft = element.scrollLeft;
                      "rtl" === direction
                        ? computedHorizontal ===
                          AutoScrollHorizontalDirection.RIGHT
                          ? scrollLeft < 0 &&
                            (horizontalScrollDirection =
                              AutoScrollHorizontalDirection.RIGHT)
                          : element.scrollWidth + scrollLeft >
                              element.clientWidth &&
                            (horizontalScrollDirection =
                              AutoScrollHorizontalDirection.LEFT)
                        : computedHorizontal ===
                            AutoScrollHorizontalDirection.LEFT
                          ? scrollLeft > 0 &&
                            (horizontalScrollDirection =
                              AutoScrollHorizontalDirection.LEFT)
                          : element.scrollWidth - scrollLeft >
                              element.clientWidth &&
                            (horizontalScrollDirection =
                              AutoScrollHorizontalDirection.RIGHT);
                    }
                    return [verticalScrollDirection, horizontalScrollDirection];
                  })(
                    element,
                    position.clientRect,
                    this._sortStrategy.direction,
                    pointerX,
                    pointerY,
                  )),
                (verticalScrollDirection || horizontalScrollDirection) &&
                  (scrollNode = element));
            }),
            !verticalScrollDirection && !horizontalScrollDirection)
          ) {
            const { width, height } = this._viewportRuler.getViewportSize(),
              domRect = {
                width,
                height,
                top: 0,
                right: width,
                bottom: height,
                left: 0,
              };
            (verticalScrollDirection = getVerticalScrollDirection(
              domRect,
              pointerY,
            )),
              (horizontalScrollDirection = getHorizontalScrollDirection(
                domRect,
                pointerX,
              )),
              (scrollNode = window);
          }
          !scrollNode ||
            (verticalScrollDirection === this._verticalScrollDirection &&
              horizontalScrollDirection === this._horizontalScrollDirection &&
              scrollNode === this._scrollNode) ||
            ((this._verticalScrollDirection = verticalScrollDirection),
            (this._horizontalScrollDirection = horizontalScrollDirection),
            (this._scrollNode = scrollNode),
            (verticalScrollDirection || horizontalScrollDirection) && scrollNode
              ? this._ngZone.runOutsideAngular(this._startScrollInterval)
              : this._stopScrolling());
        }
        _stopScrolling() {
          this._stopScrollTimers.next();
        }
        _draggingStarted() {
          const styles = (0, coercion.i8)(this.element).style;
          this.beforeStarted.next(),
            (this._isDragging = !0),
            (this._initialScrollSnap =
              styles.msScrollSnapType || styles.scrollSnapType || ""),
            (styles.scrollSnapType = styles.msScrollSnapType = "none"),
            this._sortStrategy.start(this._draggables),
            this._cacheParentPositions(),
            this._viewportScrollSubscription.unsubscribe(),
            this._listenToScrollEvents();
        }
        _cacheParentPositions() {
          const element = (0, coercion.i8)(this.element);
          this._parentPositions.cache(this._scrollableElements),
            (this._domRect =
              this._parentPositions.positions.get(element).clientRect);
        }
        _reset() {
          this._isDragging = !1;
          const styles = (0, coercion.i8)(this.element).style;
          (styles.scrollSnapType = styles.msScrollSnapType =
            this._initialScrollSnap),
            this._siblings.forEach((sibling) => sibling._stopReceiving(this)),
            this._sortStrategy.reset(),
            this._stopScrolling(),
            this._viewportScrollSubscription.unsubscribe(),
            this._parentPositions.clear();
        }
        _isOverContainer(x, y) {
          return (
            null != this._domRect && isInsideClientRect(this._domRect, x, y)
          );
        }
        _getSiblingContainerFromPosition(item, x, y) {
          return this._siblings.find((sibling) =>
            sibling._canReceive(item, x, y),
          );
        }
        _canReceive(item, x, y) {
          if (
            !this._domRect ||
            !isInsideClientRect(this._domRect, x, y) ||
            !this.enterPredicate(item, this)
          )
            return !1;
          const elementFromPoint = this._getShadowRoot().elementFromPoint(x, y);
          if (!elementFromPoint) return !1;
          const nativeElement = (0, coercion.i8)(this.element);
          return (
            elementFromPoint === nativeElement ||
            nativeElement.contains(elementFromPoint)
          );
        }
        _startReceiving(sibling, items) {
          const activeSiblings = this._activeSiblings;
          !activeSiblings.has(sibling) &&
            items.every(
              (item) =>
                this.enterPredicate(item, this) ||
                this._draggables.indexOf(item) > -1,
            ) &&
            (activeSiblings.add(sibling),
            this._cacheParentPositions(),
            this._listenToScrollEvents(),
            this.receivingStarted.next({
              initiator: sibling,
              receiver: this,
              items,
            }));
        }
        _stopReceiving(sibling) {
          this._activeSiblings.delete(sibling),
            this._viewportScrollSubscription.unsubscribe(),
            this.receivingStopped.next({ initiator: sibling, receiver: this });
        }
        _listenToScrollEvents() {
          this._viewportScrollSubscription = this._dragDropRegistry
            .scrolled(this._getShadowRoot())
            .subscribe((event) => {
              if (this.isDragging()) {
                const scrollDifference =
                  this._parentPositions.handleScroll(event);
                scrollDifference &&
                  this._sortStrategy.updateOnScroll(
                    scrollDifference.top,
                    scrollDifference.left,
                  );
              } else this.isReceiving() && this._cacheParentPositions();
            });
        }
        _getShadowRoot() {
          if (!this._cachedShadowRoot) {
            const shadowRoot = (0, platform.KT)((0, coercion.i8)(this.element));
            this._cachedShadowRoot = shadowRoot || this._document;
          }
          return this._cachedShadowRoot;
        }
        _notifyReceivingSiblings() {
          const draggedItems = this._sortStrategy
            .getActiveItemsSnapshot()
            .filter((item) => item.isDragging());
          this._siblings.forEach((sibling) =>
            sibling._startReceiving(this, draggedItems),
          );
        }
      }
      function getVerticalScrollDirection(clientRect, pointerY) {
        const { top, bottom, height } = clientRect,
          yThreshold = height * SCROLL_PROXIMITY_THRESHOLD;
        return pointerY >= top - yThreshold && pointerY <= top + yThreshold
          ? AutoScrollVerticalDirection.UP
          : pointerY >= bottom - yThreshold && pointerY <= bottom + yThreshold
            ? AutoScrollVerticalDirection.DOWN
            : AutoScrollVerticalDirection.NONE;
      }
      function getHorizontalScrollDirection(clientRect, pointerX) {
        const { left, right, width } = clientRect,
          xThreshold = width * SCROLL_PROXIMITY_THRESHOLD;
        return pointerX >= left - xThreshold && pointerX <= left + xThreshold
          ? AutoScrollHorizontalDirection.LEFT
          : pointerX >= right - xThreshold && pointerX <= right + xThreshold
            ? AutoScrollHorizontalDirection.RIGHT
            : AutoScrollHorizontalDirection.NONE;
      }
      const activeCapturingEventOptions = (0, platform.BQ)({
          passive: !1,
          capture: !0,
        }),
        activeApps = new Set();
      class _ResetsLoader {
        static #_ = (this.ɵfac = function _ResetsLoader_Factory(t) {
          return new (t || _ResetsLoader)();
        });
        static #_2 = (this.ɵcmp = core["ɵɵdefineComponent"]({
          type: _ResetsLoader,
          selectors: [["ng-component"]],
          hostAttrs: ["cdk-drag-resets-container", ""],
          standalone: !0,
          features: [core["ɵɵStandaloneFeature"]],
          decls: 0,
          vars: 0,
          template: function _ResetsLoader_Template(rf, ctx) {},
          styles: [
            "@layer cdk-resets{.cdk-drag-preview{background:none;border:none;padding:0;color:inherit}}",
          ],
          encapsulation: 2,
          changeDetection: 0,
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          _ResetsLoader,
          [
            {
              type: core.Component,
              args: [
                {
                  standalone: !0,
                  encapsulation: core.ViewEncapsulation.None,
                  template: "",
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  host: { "cdk-drag-resets-container": "" },
                  styles: [
                    "@layer cdk-resets{.cdk-drag-preview{background:none;border:none;padding:0;color:inherit}}",
                  ],
                },
              ],
            },
          ],
          null,
          null,
        );
      class DragDropRegistry {
        constructor(_ngZone, _document) {
          (this._ngZone = _ngZone),
            (this._appRef = (0, core.inject)(core.ApplicationRef)),
            (this._environmentInjector = (0, core.inject)(
              core.EnvironmentInjector,
            )),
            (this._dropInstances = new Set()),
            (this._dragInstances = new Set()),
            (this._activeDragInstances = []),
            (this._globalListeners = new Map()),
            (this._draggingPredicate = (item) => item.isDragging()),
            (this.pointerMove = new Subject.B()),
            (this.pointerUp = new Subject.B()),
            (this.scroll = new Subject.B()),
            (this._preventDefaultWhileDragging = (event) => {
              this._activeDragInstances.length > 0 && event.preventDefault();
            }),
            (this._persistentTouchmoveListener = (event) => {
              this._activeDragInstances.length > 0 &&
                (this._activeDragInstances.some(this._draggingPredicate) &&
                  event.preventDefault(),
                this.pointerMove.next(event));
            }),
            (this._document = _document);
        }
        registerDropContainer(drop) {
          this._dropInstances.has(drop) || this._dropInstances.add(drop);
        }
        registerDragItem(drag) {
          this._dragInstances.add(drag),
            1 === this._dragInstances.size &&
              this._ngZone.runOutsideAngular(() => {
                this._document.addEventListener(
                  "touchmove",
                  this._persistentTouchmoveListener,
                  activeCapturingEventOptions,
                );
              });
        }
        removeDropContainer(drop) {
          this._dropInstances.delete(drop);
        }
        removeDragItem(drag) {
          this._dragInstances.delete(drag),
            this.stopDragging(drag),
            0 === this._dragInstances.size &&
              this._document.removeEventListener(
                "touchmove",
                this._persistentTouchmoveListener,
                activeCapturingEventOptions,
              );
        }
        startDragging(drag, event) {
          if (
            !(this._activeDragInstances.indexOf(drag) > -1) &&
            (this._loadResets(),
            this._activeDragInstances.push(drag),
            1 === this._activeDragInstances.length)
          ) {
            const isTouchEvent = event.type.startsWith("touch");
            this._globalListeners
              .set(isTouchEvent ? "touchend" : "mouseup", {
                handler: (e) => this.pointerUp.next(e),
                options: !0,
              })
              .set("scroll", {
                handler: (e) => this.scroll.next(e),
                options: !0,
              })
              .set("selectstart", {
                handler: this._preventDefaultWhileDragging,
                options: activeCapturingEventOptions,
              }),
              isTouchEvent ||
                this._globalListeners.set("mousemove", {
                  handler: (e) => this.pointerMove.next(e),
                  options: activeCapturingEventOptions,
                }),
              this._ngZone.runOutsideAngular(() => {
                this._globalListeners.forEach((config, name) => {
                  this._document.addEventListener(
                    name,
                    config.handler,
                    config.options,
                  );
                });
              });
          }
        }
        stopDragging(drag) {
          const index = this._activeDragInstances.indexOf(drag);
          index > -1 &&
            (this._activeDragInstances.splice(index, 1),
            0 === this._activeDragInstances.length &&
              this._clearGlobalListeners());
        }
        isDragging(drag) {
          return this._activeDragInstances.indexOf(drag) > -1;
        }
        scrolled(shadowRoot) {
          const streams = [this.scroll];
          return (
            shadowRoot &&
              shadowRoot !== this._document &&
              streams.push(
                new Observable.c((observer) =>
                  this._ngZone.runOutsideAngular(() => {
                    const callback = (event) => {
                      this._activeDragInstances.length && observer.next(event);
                    };
                    return (
                      shadowRoot.addEventListener("scroll", callback, true),
                      () => {
                        shadowRoot.removeEventListener(
                          "scroll",
                          callback,
                          true,
                        );
                      }
                    );
                  }),
                ),
              ),
            (0, merge.h)(...streams)
          );
        }
        ngOnDestroy() {
          this._dragInstances.forEach((instance) =>
            this.removeDragItem(instance),
          ),
            this._dropInstances.forEach((instance) =>
              this.removeDropContainer(instance),
            ),
            this._clearGlobalListeners(),
            this.pointerMove.complete(),
            this.pointerUp.complete();
        }
        _clearGlobalListeners() {
          this._globalListeners.forEach((config, name) => {
            this._document.removeEventListener(
              name,
              config.handler,
              config.options,
            );
          }),
            this._globalListeners.clear();
        }
        _loadResets() {
          if (!activeApps.has(this._appRef)) {
            activeApps.add(this._appRef);
            const componentRef = (0, core.createComponent)(_ResetsLoader, {
              environmentInjector: this._environmentInjector,
            });
            this._appRef.onDestroy(() => {
              activeApps.delete(this._appRef),
                0 === activeApps.size && componentRef.destroy();
            });
          }
        }
        static #_ = (this.ɵfac = function DragDropRegistry_Factory(t) {
          return new (t || DragDropRegistry)(
            core["ɵɵinject"](core.NgZone),
            core["ɵɵinject"](common.DOCUMENT),
          );
        });
        static #_2 = (this.ɵprov = core["ɵɵdefineInjectable"]({
          token: DragDropRegistry,
          factory: DragDropRegistry.ɵfac,
          providedIn: "root",
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          DragDropRegistry,
          [{ type: core.Injectable, args: [{ providedIn: "root" }] }],
          () => [
            { type: core.NgZone },
            {
              type: void 0,
              decorators: [{ type: core.Inject, args: [common.DOCUMENT] }],
            },
          ],
          null,
        );
      const DEFAULT_CONFIG = {
        dragStartThreshold: 5,
        pointerDirectionChangeThreshold: 5,
      };
      class DragDrop {
        constructor(_document, _ngZone, _viewportRuler, _dragDropRegistry) {
          (this._document = _document),
            (this._ngZone = _ngZone),
            (this._viewportRuler = _viewportRuler),
            (this._dragDropRegistry = _dragDropRegistry);
        }
        createDrag(element, config = DEFAULT_CONFIG) {
          return new DragRef(
            element,
            config,
            this._document,
            this._ngZone,
            this._viewportRuler,
            this._dragDropRegistry,
          );
        }
        createDropList(element) {
          return new DropListRef(
            element,
            this._dragDropRegistry,
            this._document,
            this._ngZone,
            this._viewportRuler,
          );
        }
        static #_ = (this.ɵfac = function DragDrop_Factory(t) {
          return new (t || DragDrop)(
            core["ɵɵinject"](common.DOCUMENT),
            core["ɵɵinject"](core.NgZone),
            core["ɵɵinject"](scrolling.Xj),
            core["ɵɵinject"](DragDropRegistry),
          );
        });
        static #_2 = (this.ɵprov = core["ɵɵdefineInjectable"]({
          token: DragDrop,
          factory: DragDrop.ɵfac,
          providedIn: "root",
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          DragDrop,
          [{ type: core.Injectable, args: [{ providedIn: "root" }] }],
          () => [
            {
              type: void 0,
              decorators: [{ type: core.Inject, args: [common.DOCUMENT] }],
            },
            { type: core.NgZone },
            { type: scrolling.Xj },
            { type: DragDropRegistry },
          ],
          null,
        );
      const CDK_DRAG_PARENT = new core.InjectionToken("CDK_DRAG_PARENT");
      function assertElementNode(node, name) {
        if (1 !== node.nodeType)
          throw Error(
            `${name} must be attached to an element node. Currently attached to "${node.nodeName}".`,
          );
      }
      const CDK_DRAG_HANDLE = new core.InjectionToken("CdkDragHandle");
      class CdkDragHandle {
        get disabled() {
          return this._disabled;
        }
        set disabled(value) {
          (this._disabled = value), this._stateChanges.next(this);
        }
        constructor(element, _parentDrag) {
          (this.element = element),
            (this._parentDrag = _parentDrag),
            (this._stateChanges = new Subject.B()),
            (this._disabled = !1),
            ("undefined" == typeof ngDevMode || ngDevMode) &&
              assertElementNode(element.nativeElement, "cdkDragHandle"),
            _parentDrag?._addHandle(this);
        }
        ngOnDestroy() {
          this._parentDrag?._removeHandle(this), this._stateChanges.complete();
        }
        static #_ = (this.ɵfac = function CdkDragHandle_Factory(t) {
          return new (t || CdkDragHandle)(
            core["ɵɵdirectiveInject"](core.ElementRef),
            core["ɵɵdirectiveInject"](CDK_DRAG_PARENT, 12),
          );
        });
        static #_2 = (this.ɵdir = core["ɵɵdefineDirective"]({
          type: CdkDragHandle,
          selectors: [["", "cdkDragHandle", ""]],
          hostAttrs: [1, "cdk-drag-handle"],
          inputs: {
            disabled: [
              core["ɵɵInputFlags"].HasDecoratorInputTransform,
              "cdkDragHandleDisabled",
              "disabled",
              core.booleanAttribute,
            ],
          },
          standalone: !0,
          features: [
            core["ɵɵProvidersFeature"]([
              { provide: CDK_DRAG_HANDLE, useExisting: CdkDragHandle },
            ]),
            core["ɵɵInputTransformsFeature"],
          ],
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          CdkDragHandle,
          [
            {
              type: core.Directive,
              args: [
                {
                  selector: "[cdkDragHandle]",
                  standalone: !0,
                  host: { class: "cdk-drag-handle" },
                  providers: [
                    { provide: CDK_DRAG_HANDLE, useExisting: CdkDragHandle },
                  ],
                },
              ],
            },
          ],
          () => [
            { type: core.ElementRef },
            {
              type: void 0,
              decorators: [
                { type: core.Inject, args: [CDK_DRAG_PARENT] },
                { type: core.Optional },
                { type: core.SkipSelf },
              ],
            },
          ],
          {
            disabled: [
              {
                type: core.Input,
                args: [
                  {
                    alias: "cdkDragHandleDisabled",
                    transform: core.booleanAttribute,
                  },
                ],
              },
            ],
          },
        );
      const CDK_DRAG_CONFIG = new core.InjectionToken("CDK_DRAG_CONFIG"),
        CDK_DROP_LIST = new core.InjectionToken("CdkDropList");
      class CdkDrag {
        static #_ = (this._dragInstances = []);
        get disabled() {
          return (
            this._disabled ||
            (this.dropContainer && this.dropContainer.disabled)
          );
        }
        set disabled(value) {
          (this._disabled = value), (this._dragRef.disabled = this._disabled);
        }
        constructor(
          element,
          dropContainer,
          _document,
          _ngZone,
          _viewContainerRef,
          config,
          _dir,
          dragDrop,
          _changeDetectorRef,
          _selfHandle,
          _parentDrag,
        ) {
          (this.element = element),
            (this.dropContainer = dropContainer),
            (this._ngZone = _ngZone),
            (this._viewContainerRef = _viewContainerRef),
            (this._dir = _dir),
            (this._changeDetectorRef = _changeDetectorRef),
            (this._selfHandle = _selfHandle),
            (this._parentDrag = _parentDrag),
            (this._destroyed = new Subject.B()),
            (this._handles = new BehaviorSubject.t([])),
            (this.started = new core.EventEmitter()),
            (this.released = new core.EventEmitter()),
            (this.ended = new core.EventEmitter()),
            (this.entered = new core.EventEmitter()),
            (this.exited = new core.EventEmitter()),
            (this.dropped = new core.EventEmitter()),
            (this.moved = new Observable.c((observer) => {
              const subscription = this._dragRef.moved
                .pipe(
                  (0, map.T)((movedEvent) => ({
                    source: this,
                    pointerPosition: movedEvent.pointerPosition,
                    event: movedEvent.event,
                    delta: movedEvent.delta,
                    distance: movedEvent.distance,
                  })),
                )
                .subscribe(observer);
              return () => {
                subscription.unsubscribe();
              };
            })),
            (this._dragRef = dragDrop.createDrag(element, {
              dragStartThreshold:
                config && null != config.dragStartThreshold
                  ? config.dragStartThreshold
                  : 5,
              pointerDirectionChangeThreshold:
                config && null != config.pointerDirectionChangeThreshold
                  ? config.pointerDirectionChangeThreshold
                  : 5,
              zIndex: config?.zIndex,
            })),
            (this._dragRef.data = this),
            CdkDrag._dragInstances.push(this),
            config && this._assignDefaults(config),
            dropContainer &&
              (this._dragRef._withDropContainer(dropContainer._dropListRef),
              dropContainer.addItem(this)),
            this._syncInputs(this._dragRef),
            this._handleEvents(this._dragRef);
        }
        getPlaceholderElement() {
          return this._dragRef.getPlaceholderElement();
        }
        getRootElement() {
          return this._dragRef.getRootElement();
        }
        reset() {
          this._dragRef.reset();
        }
        getFreeDragPosition() {
          return this._dragRef.getFreeDragPosition();
        }
        setFreeDragPosition(value) {
          this._dragRef.setFreeDragPosition(value);
        }
        ngAfterViewInit() {
          this._ngZone.runOutsideAngular(() => {
            this._ngZone.onStable
              .pipe((0, take.s)(1), (0, takeUntil.Q)(this._destroyed))
              .subscribe(() => {
                this._updateRootElement(),
                  this._setupHandlesListener(),
                  this.freeDragPosition &&
                    this._dragRef.setFreeDragPosition(this.freeDragPosition);
              });
          });
        }
        ngOnChanges(changes) {
          const rootSelectorChange = changes.rootElementSelector,
            positionChange = changes.freeDragPosition;
          rootSelectorChange &&
            !rootSelectorChange.firstChange &&
            this._updateRootElement(),
            positionChange &&
              !positionChange.firstChange &&
              this.freeDragPosition &&
              this._dragRef.setFreeDragPosition(this.freeDragPosition);
        }
        ngOnDestroy() {
          this.dropContainer && this.dropContainer.removeItem(this);
          const index = CdkDrag._dragInstances.indexOf(this);
          index > -1 && CdkDrag._dragInstances.splice(index, 1),
            this._ngZone.runOutsideAngular(() => {
              this._handles.complete(),
                this._destroyed.next(),
                this._destroyed.complete(),
                this._dragRef.dispose();
            });
        }
        _addHandle(handle) {
          const handles = this._handles.getValue();
          handles.push(handle), this._handles.next(handles);
        }
        _removeHandle(handle) {
          const handles = this._handles.getValue(),
            index = handles.indexOf(handle);
          index > -1 && (handles.splice(index, 1), this._handles.next(handles));
        }
        _setPreviewTemplate(preview) {
          this._previewTemplate = preview;
        }
        _resetPreviewTemplate(preview) {
          preview === this._previewTemplate && (this._previewTemplate = null);
        }
        _setPlaceholderTemplate(placeholder) {
          this._placeholderTemplate = placeholder;
        }
        _resetPlaceholderTemplate(placeholder) {
          placeholder === this._placeholderTemplate &&
            (this._placeholderTemplate = null);
        }
        _updateRootElement() {
          const element = this.element.nativeElement;
          let rootElement = element;
          this.rootElementSelector &&
            (rootElement =
              void 0 !== element.closest
                ? element.closest(this.rootElementSelector)
                : element.parentElement?.closest(this.rootElementSelector)),
            rootElement &&
              ("undefined" == typeof ngDevMode || ngDevMode) &&
              assertElementNode(rootElement, "cdkDrag"),
            this._dragRef.withRootElement(rootElement || element);
        }
        _getBoundaryElement() {
          const boundary = this.boundaryElement;
          return boundary
            ? "string" == typeof boundary
              ? this.element.nativeElement.closest(boundary)
              : (0, coercion.i8)(boundary)
            : null;
        }
        _syncInputs(ref) {
          ref.beforeStarted.subscribe(() => {
            if (!ref.isDragging()) {
              const dir = this._dir,
                dragStartDelay = this.dragStartDelay,
                placeholder = this._placeholderTemplate
                  ? {
                      template: this._placeholderTemplate.templateRef,
                      context: this._placeholderTemplate.data,
                      viewContainer: this._viewContainerRef,
                    }
                  : null,
                preview = this._previewTemplate
                  ? {
                      template: this._previewTemplate.templateRef,
                      context: this._previewTemplate.data,
                      matchSize: this._previewTemplate.matchSize,
                      viewContainer: this._viewContainerRef,
                    }
                  : null;
              (ref.disabled = this.disabled),
                (ref.lockAxis = this.lockAxis),
                (ref.dragStartDelay =
                  "object" == typeof dragStartDelay && dragStartDelay
                    ? dragStartDelay
                    : (0, coercion.OE)(dragStartDelay)),
                (ref.constrainPosition = this.constrainPosition),
                (ref.previewClass = this.previewClass),
                ref
                  .withBoundaryElement(this._getBoundaryElement())
                  .withPlaceholderTemplate(placeholder)
                  .withPreviewTemplate(preview)
                  .withPreviewContainer(this.previewContainer || "global"),
                dir && ref.withDirection(dir.value);
            }
          }),
            ref.beforeStarted.pipe((0, take.s)(1)).subscribe(() => {
              if (this._parentDrag)
                return void ref.withParent(this._parentDrag._dragRef);
              let parent = this.element.nativeElement.parentElement;
              for (; parent; ) {
                if (parent.classList.contains("cdk-drag")) {
                  ref.withParent(
                    CdkDrag._dragInstances.find(
                      (drag) => drag.element.nativeElement === parent,
                    )?._dragRef || null,
                  );
                  break;
                }
                parent = parent.parentElement;
              }
            });
        }
        _handleEvents(ref) {
          ref.started.subscribe((startEvent) => {
            this.started.emit({ source: this, event: startEvent.event }),
              this._changeDetectorRef.markForCheck();
          }),
            ref.released.subscribe((releaseEvent) => {
              this.released.emit({ source: this, event: releaseEvent.event });
            }),
            ref.ended.subscribe((endEvent) => {
              this.ended.emit({
                source: this,
                distance: endEvent.distance,
                dropPoint: endEvent.dropPoint,
                event: endEvent.event,
              }),
                this._changeDetectorRef.markForCheck();
            }),
            ref.entered.subscribe((enterEvent) => {
              this.entered.emit({
                container: enterEvent.container.data,
                item: this,
                currentIndex: enterEvent.currentIndex,
              });
            }),
            ref.exited.subscribe((exitEvent) => {
              this.exited.emit({
                container: exitEvent.container.data,
                item: this,
              });
            }),
            ref.dropped.subscribe((dropEvent) => {
              this.dropped.emit({
                previousIndex: dropEvent.previousIndex,
                currentIndex: dropEvent.currentIndex,
                previousContainer: dropEvent.previousContainer.data,
                container: dropEvent.container.data,
                isPointerOverContainer: dropEvent.isPointerOverContainer,
                item: this,
                distance: dropEvent.distance,
                dropPoint: dropEvent.dropPoint,
                event: dropEvent.event,
              });
            });
        }
        _assignDefaults(config) {
          const {
            lockAxis,
            dragStartDelay,
            constrainPosition,
            previewClass,
            boundaryElement,
            draggingDisabled,
            rootElementSelector,
            previewContainer,
          } = config;
          (this.disabled = null != draggingDisabled && draggingDisabled),
            (this.dragStartDelay = dragStartDelay || 0),
            lockAxis && (this.lockAxis = lockAxis),
            constrainPosition && (this.constrainPosition = constrainPosition),
            previewClass && (this.previewClass = previewClass),
            boundaryElement && (this.boundaryElement = boundaryElement),
            rootElementSelector &&
              (this.rootElementSelector = rootElementSelector),
            previewContainer && (this.previewContainer = previewContainer);
        }
        _setupHandlesListener() {
          this._handles
            .pipe(
              (0, tap.M)((handles) => {
                const handleElements = handles.map((handle) => handle.element);
                this._selfHandle &&
                  this.rootElementSelector &&
                  handleElements.push(this.element),
                  this._dragRef.withHandles(handleElements);
              }),
              (0, switchMap.n)((handles) =>
                (0, merge.h)(
                  ...handles.map((item) =>
                    item._stateChanges.pipe((0, startWith.Z)(item)),
                  ),
                ),
              ),
              (0, takeUntil.Q)(this._destroyed),
            )
            .subscribe((handleInstance) => {
              const dragRef = this._dragRef,
                handle = handleInstance.element.nativeElement;
              handleInstance.disabled
                ? dragRef.disableHandle(handle)
                : dragRef.enableHandle(handle);
            });
        }
        static #_2 = (this.ɵfac = function CdkDrag_Factory(t) {
          return new (t || CdkDrag)(
            core["ɵɵdirectiveInject"](core.ElementRef),
            core["ɵɵdirectiveInject"](CDK_DROP_LIST, 12),
            core["ɵɵdirectiveInject"](common.DOCUMENT),
            core["ɵɵdirectiveInject"](core.NgZone),
            core["ɵɵdirectiveInject"](core.ViewContainerRef),
            core["ɵɵdirectiveInject"](CDK_DRAG_CONFIG, 8),
            core["ɵɵdirectiveInject"](bidi.dS, 8),
            core["ɵɵdirectiveInject"](DragDrop),
            core["ɵɵdirectiveInject"](core.ChangeDetectorRef),
            core["ɵɵdirectiveInject"](CDK_DRAG_HANDLE, 10),
            core["ɵɵdirectiveInject"](CDK_DRAG_PARENT, 12),
          );
        });
        static #_3 = (this.ɵdir = core["ɵɵdefineDirective"]({
          type: CdkDrag,
          selectors: [["", "cdkDrag", ""]],
          hostAttrs: [1, "cdk-drag"],
          hostVars: 4,
          hostBindings: function CdkDrag_HostBindings(rf, ctx) {
            2 & rf &&
              core["ɵɵclassProp"]("cdk-drag-disabled", ctx.disabled)(
                "cdk-drag-dragging",
                ctx._dragRef.isDragging(),
              );
          },
          inputs: {
            data: [core["ɵɵInputFlags"].None, "cdkDragData", "data"],
            lockAxis: [
              core["ɵɵInputFlags"].None,
              "cdkDragLockAxis",
              "lockAxis",
            ],
            rootElementSelector: [
              core["ɵɵInputFlags"].None,
              "cdkDragRootElement",
              "rootElementSelector",
            ],
            boundaryElement: [
              core["ɵɵInputFlags"].None,
              "cdkDragBoundary",
              "boundaryElement",
            ],
            dragStartDelay: [
              core["ɵɵInputFlags"].None,
              "cdkDragStartDelay",
              "dragStartDelay",
            ],
            freeDragPosition: [
              core["ɵɵInputFlags"].None,
              "cdkDragFreeDragPosition",
              "freeDragPosition",
            ],
            disabled: [
              core["ɵɵInputFlags"].HasDecoratorInputTransform,
              "cdkDragDisabled",
              "disabled",
              core.booleanAttribute,
            ],
            constrainPosition: [
              core["ɵɵInputFlags"].None,
              "cdkDragConstrainPosition",
              "constrainPosition",
            ],
            previewClass: [
              core["ɵɵInputFlags"].None,
              "cdkDragPreviewClass",
              "previewClass",
            ],
            previewContainer: [
              core["ɵɵInputFlags"].None,
              "cdkDragPreviewContainer",
              "previewContainer",
            ],
          },
          outputs: {
            started: "cdkDragStarted",
            released: "cdkDragReleased",
            ended: "cdkDragEnded",
            entered: "cdkDragEntered",
            exited: "cdkDragExited",
            dropped: "cdkDragDropped",
            moved: "cdkDragMoved",
          },
          exportAs: ["cdkDrag"],
          standalone: !0,
          features: [
            core["ɵɵProvidersFeature"]([
              { provide: CDK_DRAG_PARENT, useExisting: CdkDrag },
            ]),
            core["ɵɵInputTransformsFeature"],
            core["ɵɵNgOnChangesFeature"],
          ],
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          CdkDrag,
          [
            {
              type: core.Directive,
              args: [
                {
                  selector: "[cdkDrag]",
                  exportAs: "cdkDrag",
                  standalone: !0,
                  host: {
                    class: "cdk-drag",
                    "[class.cdk-drag-disabled]": "disabled",
                    "[class.cdk-drag-dragging]": "_dragRef.isDragging()",
                  },
                  providers: [
                    { provide: CDK_DRAG_PARENT, useExisting: CdkDrag },
                  ],
                },
              ],
            },
          ],
          () => [
            { type: core.ElementRef },
            {
              type: void 0,
              decorators: [
                { type: core.Inject, args: [CDK_DROP_LIST] },
                { type: core.Optional },
                { type: core.SkipSelf },
              ],
            },
            {
              type: void 0,
              decorators: [{ type: core.Inject, args: [common.DOCUMENT] }],
            },
            { type: core.NgZone },
            { type: core.ViewContainerRef },
            {
              type: void 0,
              decorators: [
                { type: core.Optional },
                { type: core.Inject, args: [CDK_DRAG_CONFIG] },
              ],
            },
            { type: bidi.dS, decorators: [{ type: core.Optional }] },
            { type: DragDrop },
            { type: core.ChangeDetectorRef },
            {
              type: CdkDragHandle,
              decorators: [
                { type: core.Optional },
                { type: core.Self },
                { type: core.Inject, args: [CDK_DRAG_HANDLE] },
              ],
            },
            {
              type: CdkDrag,
              decorators: [
                { type: core.Optional },
                { type: core.SkipSelf },
                { type: core.Inject, args: [CDK_DRAG_PARENT] },
              ],
            },
          ],
          {
            data: [{ type: core.Input, args: ["cdkDragData"] }],
            lockAxis: [{ type: core.Input, args: ["cdkDragLockAxis"] }],
            rootElementSelector: [
              { type: core.Input, args: ["cdkDragRootElement"] },
            ],
            boundaryElement: [{ type: core.Input, args: ["cdkDragBoundary"] }],
            dragStartDelay: [{ type: core.Input, args: ["cdkDragStartDelay"] }],
            freeDragPosition: [
              { type: core.Input, args: ["cdkDragFreeDragPosition"] },
            ],
            disabled: [
              {
                type: core.Input,
                args: [
                  {
                    alias: "cdkDragDisabled",
                    transform: core.booleanAttribute,
                  },
                ],
              },
            ],
            constrainPosition: [
              { type: core.Input, args: ["cdkDragConstrainPosition"] },
            ],
            previewClass: [{ type: core.Input, args: ["cdkDragPreviewClass"] }],
            previewContainer: [
              { type: core.Input, args: ["cdkDragPreviewContainer"] },
            ],
            started: [{ type: core.Output, args: ["cdkDragStarted"] }],
            released: [{ type: core.Output, args: ["cdkDragReleased"] }],
            ended: [{ type: core.Output, args: ["cdkDragEnded"] }],
            entered: [{ type: core.Output, args: ["cdkDragEntered"] }],
            exited: [{ type: core.Output, args: ["cdkDragExited"] }],
            dropped: [{ type: core.Output, args: ["cdkDragDropped"] }],
            moved: [{ type: core.Output, args: ["cdkDragMoved"] }],
          },
        );
      const CDK_DROP_LIST_GROUP = new core.InjectionToken("CdkDropListGroup");
      class CdkDropListGroup {
        constructor() {
          (this._items = new Set()), (this.disabled = !1);
        }
        ngOnDestroy() {
          this._items.clear();
        }
        static #_ = (this.ɵfac = function CdkDropListGroup_Factory(t) {
          return new (t || CdkDropListGroup)();
        });
        static #_2 = (this.ɵdir = core["ɵɵdefineDirective"]({
          type: CdkDropListGroup,
          selectors: [["", "cdkDropListGroup", ""]],
          inputs: {
            disabled: [
              core["ɵɵInputFlags"].HasDecoratorInputTransform,
              "cdkDropListGroupDisabled",
              "disabled",
              core.booleanAttribute,
            ],
          },
          exportAs: ["cdkDropListGroup"],
          standalone: !0,
          features: [
            core["ɵɵProvidersFeature"]([
              { provide: CDK_DROP_LIST_GROUP, useExisting: CdkDropListGroup },
            ]),
            core["ɵɵInputTransformsFeature"],
          ],
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          CdkDropListGroup,
          [
            {
              type: core.Directive,
              args: [
                {
                  selector: "[cdkDropListGroup]",
                  exportAs: "cdkDropListGroup",
                  standalone: !0,
                  providers: [
                    {
                      provide: CDK_DROP_LIST_GROUP,
                      useExisting: CdkDropListGroup,
                    },
                  ],
                },
              ],
            },
          ],
          null,
          {
            disabled: [
              {
                type: core.Input,
                args: [
                  {
                    alias: "cdkDropListGroupDisabled",
                    transform: core.booleanAttribute,
                  },
                ],
              },
            ],
          },
        );
      let _uniqueIdCounter = 0;
      class CdkDropList {
        static #_ = (this._dropLists = []);
        get disabled() {
          return this._disabled || (!!this._group && this._group.disabled);
        }
        set disabled(value) {
          this._dropListRef.disabled = this._disabled = value;
        }
        constructor(
          element,
          dragDrop,
          _changeDetectorRef,
          _scrollDispatcher,
          _dir,
          _group,
          config,
        ) {
          (this.element = element),
            (this._changeDetectorRef = _changeDetectorRef),
            (this._scrollDispatcher = _scrollDispatcher),
            (this._dir = _dir),
            (this._group = _group),
            (this._destroyed = new Subject.B()),
            (this.connectedTo = []),
            (this.id = "cdk-drop-list-" + _uniqueIdCounter++),
            (this.enterPredicate = () => !0),
            (this.sortPredicate = () => !0),
            (this.dropped = new core.EventEmitter()),
            (this.entered = new core.EventEmitter()),
            (this.exited = new core.EventEmitter()),
            (this.sorted = new core.EventEmitter()),
            (this._unsortedItems = new Set()),
            ("undefined" == typeof ngDevMode || ngDevMode) &&
              assertElementNode(element.nativeElement, "cdkDropList"),
            (this._dropListRef = dragDrop.createDropList(element)),
            (this._dropListRef.data = this),
            config && this._assignDefaults(config),
            (this._dropListRef.enterPredicate = (drag, drop) =>
              this.enterPredicate(drag.data, drop.data)),
            (this._dropListRef.sortPredicate = (index, drag, drop) =>
              this.sortPredicate(index, drag.data, drop.data)),
            this._setupInputSyncSubscription(this._dropListRef),
            this._handleEvents(this._dropListRef),
            CdkDropList._dropLists.push(this),
            _group && _group._items.add(this);
        }
        addItem(item) {
          this._unsortedItems.add(item),
            this._dropListRef.isDragging() && this._syncItemsWithRef();
        }
        removeItem(item) {
          this._unsortedItems.delete(item),
            this._dropListRef.isDragging() && this._syncItemsWithRef();
        }
        getSortedItems() {
          return Array.from(this._unsortedItems).sort((a, b) =>
            a._dragRef
              .getVisibleElement()
              .compareDocumentPosition(b._dragRef.getVisibleElement()) &
            Node.DOCUMENT_POSITION_FOLLOWING
              ? -1
              : 1,
          );
        }
        ngOnDestroy() {
          const index = CdkDropList._dropLists.indexOf(this);
          index > -1 && CdkDropList._dropLists.splice(index, 1),
            this._group && this._group._items.delete(this),
            this._unsortedItems.clear(),
            this._dropListRef.dispose(),
            this._destroyed.next(),
            this._destroyed.complete();
        }
        _setupInputSyncSubscription(ref) {
          this._dir &&
            this._dir.change
              .pipe(
                (0, startWith.Z)(this._dir.value),
                (0, takeUntil.Q)(this._destroyed),
              )
              .subscribe((value) => ref.withDirection(value)),
            ref.beforeStarted.subscribe(() => {
              const siblings = (0, coercion.FG)(this.connectedTo).map(
                (drop) => {
                  if ("string" == typeof drop) {
                    const correspondingDropList = CdkDropList._dropLists.find(
                      (list) => list.id === drop,
                    );
                    return (
                      correspondingDropList ||
                        ("undefined" != typeof ngDevMode && !ngDevMode) ||
                        console.warn(
                          `CdkDropList could not find connected drop list with id "${drop}"`,
                        ),
                      correspondingDropList
                    );
                  }
                  return drop;
                },
              );
              if (
                (this._group &&
                  this._group._items.forEach((drop) => {
                    -1 === siblings.indexOf(drop) && siblings.push(drop);
                  }),
                !this._scrollableParentsResolved)
              ) {
                const scrollableParents = this._scrollDispatcher
                  .getAncestorScrollContainers(this.element)
                  .map(
                    (scrollable) => scrollable.getElementRef().nativeElement,
                  );
                this._dropListRef.withScrollableParents(scrollableParents),
                  (this._scrollableParentsResolved = !0);
              }
              (ref.disabled = this.disabled),
                (ref.lockAxis = this.lockAxis),
                (ref.sortingDisabled = this.sortingDisabled),
                (ref.autoScrollDisabled = this.autoScrollDisabled),
                (ref.autoScrollStep = (0, coercion.OE)(this.autoScrollStep, 2)),
                ref
                  .connectedTo(
                    siblings
                      .filter((drop) => drop && drop !== this)
                      .map((list) => list._dropListRef),
                  )
                  .withOrientation(this.orientation);
            });
        }
        _handleEvents(ref) {
          ref.beforeStarted.subscribe(() => {
            this._syncItemsWithRef(), this._changeDetectorRef.markForCheck();
          }),
            ref.entered.subscribe((event) => {
              this.entered.emit({
                container: this,
                item: event.item.data,
                currentIndex: event.currentIndex,
              });
            }),
            ref.exited.subscribe((event) => {
              this.exited.emit({ container: this, item: event.item.data }),
                this._changeDetectorRef.markForCheck();
            }),
            ref.sorted.subscribe((event) => {
              this.sorted.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                container: this,
                item: event.item.data,
              });
            }),
            ref.dropped.subscribe((dropEvent) => {
              this.dropped.emit({
                previousIndex: dropEvent.previousIndex,
                currentIndex: dropEvent.currentIndex,
                previousContainer: dropEvent.previousContainer.data,
                container: dropEvent.container.data,
                item: dropEvent.item.data,
                isPointerOverContainer: dropEvent.isPointerOverContainer,
                distance: dropEvent.distance,
                dropPoint: dropEvent.dropPoint,
                event: dropEvent.event,
              }),
                this._changeDetectorRef.markForCheck();
            }),
            (0, merge.h)(ref.receivingStarted, ref.receivingStopped).subscribe(
              () => this._changeDetectorRef.markForCheck(),
            );
        }
        _assignDefaults(config) {
          const {
            lockAxis,
            draggingDisabled,
            sortingDisabled,
            listAutoScrollDisabled,
            listOrientation,
          } = config;
          (this.disabled = null != draggingDisabled && draggingDisabled),
            (this.sortingDisabled = null != sortingDisabled && sortingDisabled),
            (this.autoScrollDisabled =
              null != listAutoScrollDisabled && listAutoScrollDisabled),
            (this.orientation = listOrientation || "vertical"),
            lockAxis && (this.lockAxis = lockAxis);
        }
        _syncItemsWithRef() {
          this._dropListRef.withItems(
            this.getSortedItems().map((item) => item._dragRef),
          );
        }
        static #_2 = (this.ɵfac = function CdkDropList_Factory(t) {
          return new (t || CdkDropList)(
            core["ɵɵdirectiveInject"](core.ElementRef),
            core["ɵɵdirectiveInject"](DragDrop),
            core["ɵɵdirectiveInject"](core.ChangeDetectorRef),
            core["ɵɵdirectiveInject"](scrolling.R),
            core["ɵɵdirectiveInject"](bidi.dS, 8),
            core["ɵɵdirectiveInject"](CDK_DROP_LIST_GROUP, 12),
            core["ɵɵdirectiveInject"](CDK_DRAG_CONFIG, 8),
          );
        });
        static #_3 = (this.ɵdir = core["ɵɵdefineDirective"]({
          type: CdkDropList,
          selectors: [["", "cdkDropList", ""], ["cdk-drop-list"]],
          hostAttrs: [1, "cdk-drop-list"],
          hostVars: 7,
          hostBindings: function CdkDropList_HostBindings(rf, ctx) {
            2 & rf &&
              (core["ɵɵattribute"]("id", ctx.id),
              core["ɵɵclassProp"]("cdk-drop-list-disabled", ctx.disabled)(
                "cdk-drop-list-dragging",
                ctx._dropListRef.isDragging(),
              )("cdk-drop-list-receiving", ctx._dropListRef.isReceiving()));
          },
          inputs: {
            connectedTo: [
              core["ɵɵInputFlags"].None,
              "cdkDropListConnectedTo",
              "connectedTo",
            ],
            data: [core["ɵɵInputFlags"].None, "cdkDropListData", "data"],
            orientation: [
              core["ɵɵInputFlags"].None,
              "cdkDropListOrientation",
              "orientation",
            ],
            id: "id",
            lockAxis: [
              core["ɵɵInputFlags"].None,
              "cdkDropListLockAxis",
              "lockAxis",
            ],
            disabled: [
              core["ɵɵInputFlags"].HasDecoratorInputTransform,
              "cdkDropListDisabled",
              "disabled",
              core.booleanAttribute,
            ],
            sortingDisabled: [
              core["ɵɵInputFlags"].HasDecoratorInputTransform,
              "cdkDropListSortingDisabled",
              "sortingDisabled",
              core.booleanAttribute,
            ],
            enterPredicate: [
              core["ɵɵInputFlags"].None,
              "cdkDropListEnterPredicate",
              "enterPredicate",
            ],
            sortPredicate: [
              core["ɵɵInputFlags"].None,
              "cdkDropListSortPredicate",
              "sortPredicate",
            ],
            autoScrollDisabled: [
              core["ɵɵInputFlags"].HasDecoratorInputTransform,
              "cdkDropListAutoScrollDisabled",
              "autoScrollDisabled",
              core.booleanAttribute,
            ],
            autoScrollStep: [
              core["ɵɵInputFlags"].None,
              "cdkDropListAutoScrollStep",
              "autoScrollStep",
            ],
          },
          outputs: {
            dropped: "cdkDropListDropped",
            entered: "cdkDropListEntered",
            exited: "cdkDropListExited",
            sorted: "cdkDropListSorted",
          },
          exportAs: ["cdkDropList"],
          standalone: !0,
          features: [
            core["ɵɵProvidersFeature"]([
              { provide: CDK_DROP_LIST_GROUP, useValue: void 0 },
              { provide: CDK_DROP_LIST, useExisting: CdkDropList },
            ]),
            core["ɵɵInputTransformsFeature"],
          ],
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          CdkDropList,
          [
            {
              type: core.Directive,
              args: [
                {
                  selector: "[cdkDropList], cdk-drop-list",
                  exportAs: "cdkDropList",
                  standalone: !0,
                  providers: [
                    { provide: CDK_DROP_LIST_GROUP, useValue: void 0 },
                    { provide: CDK_DROP_LIST, useExisting: CdkDropList },
                  ],
                  host: {
                    class: "cdk-drop-list",
                    "[attr.id]": "id",
                    "[class.cdk-drop-list-disabled]": "disabled",
                    "[class.cdk-drop-list-dragging]":
                      "_dropListRef.isDragging()",
                    "[class.cdk-drop-list-receiving]":
                      "_dropListRef.isReceiving()",
                  },
                },
              ],
            },
          ],
          () => [
            { type: core.ElementRef },
            { type: DragDrop },
            { type: core.ChangeDetectorRef },
            { type: scrolling.R },
            { type: bidi.dS, decorators: [{ type: core.Optional }] },
            {
              type: CdkDropListGroup,
              decorators: [
                { type: core.Optional },
                { type: core.Inject, args: [CDK_DROP_LIST_GROUP] },
                { type: core.SkipSelf },
              ],
            },
            {
              type: void 0,
              decorators: [
                { type: core.Optional },
                { type: core.Inject, args: [CDK_DRAG_CONFIG] },
              ],
            },
          ],
          {
            connectedTo: [
              { type: core.Input, args: ["cdkDropListConnectedTo"] },
            ],
            data: [{ type: core.Input, args: ["cdkDropListData"] }],
            orientation: [
              { type: core.Input, args: ["cdkDropListOrientation"] },
            ],
            id: [{ type: core.Input }],
            lockAxis: [{ type: core.Input, args: ["cdkDropListLockAxis"] }],
            disabled: [
              {
                type: core.Input,
                args: [
                  {
                    alias: "cdkDropListDisabled",
                    transform: core.booleanAttribute,
                  },
                ],
              },
            ],
            sortingDisabled: [
              {
                type: core.Input,
                args: [
                  {
                    alias: "cdkDropListSortingDisabled",
                    transform: core.booleanAttribute,
                  },
                ],
              },
            ],
            enterPredicate: [
              { type: core.Input, args: ["cdkDropListEnterPredicate"] },
            ],
            sortPredicate: [
              { type: core.Input, args: ["cdkDropListSortPredicate"] },
            ],
            autoScrollDisabled: [
              {
                type: core.Input,
                args: [
                  {
                    alias: "cdkDropListAutoScrollDisabled",
                    transform: core.booleanAttribute,
                  },
                ],
              },
            ],
            autoScrollStep: [
              { type: core.Input, args: ["cdkDropListAutoScrollStep"] },
            ],
            dropped: [{ type: core.Output, args: ["cdkDropListDropped"] }],
            entered: [{ type: core.Output, args: ["cdkDropListEntered"] }],
            exited: [{ type: core.Output, args: ["cdkDropListExited"] }],
            sorted: [{ type: core.Output, args: ["cdkDropListSorted"] }],
          },
        );
      const CDK_DRAG_PREVIEW = new core.InjectionToken("CdkDragPreview");
      class CdkDragPreview {
        constructor(templateRef) {
          (this.templateRef = templateRef),
            (this._drag = (0, core.inject)(CDK_DRAG_PARENT, { optional: !0 })),
            (this.matchSize = !1),
            this._drag?._setPreviewTemplate(this);
        }
        ngOnDestroy() {
          this._drag?._resetPreviewTemplate(this);
        }
        static #_ = (this.ɵfac = function CdkDragPreview_Factory(t) {
          return new (t || CdkDragPreview)(
            core["ɵɵdirectiveInject"](core.TemplateRef),
          );
        });
        static #_2 = (this.ɵdir = core["ɵɵdefineDirective"]({
          type: CdkDragPreview,
          selectors: [["ng-template", "cdkDragPreview", ""]],
          inputs: {
            data: "data",
            matchSize: [
              core["ɵɵInputFlags"].HasDecoratorInputTransform,
              "matchSize",
              "matchSize",
              core.booleanAttribute,
            ],
          },
          standalone: !0,
          features: [
            core["ɵɵProvidersFeature"]([
              { provide: CDK_DRAG_PREVIEW, useExisting: CdkDragPreview },
            ]),
            core["ɵɵInputTransformsFeature"],
          ],
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          CdkDragPreview,
          [
            {
              type: core.Directive,
              args: [
                {
                  selector: "ng-template[cdkDragPreview]",
                  standalone: !0,
                  providers: [
                    { provide: CDK_DRAG_PREVIEW, useExisting: CdkDragPreview },
                  ],
                },
              ],
            },
          ],
          () => [{ type: core.TemplateRef }],
          {
            data: [{ type: core.Input }],
            matchSize: [
              {
                type: core.Input,
                args: [{ transform: core.booleanAttribute }],
              },
            ],
          },
        );
      const CDK_DRAG_PLACEHOLDER = new core.InjectionToken(
        "CdkDragPlaceholder",
      );
      class CdkDragPlaceholder {
        constructor(templateRef) {
          (this.templateRef = templateRef),
            (this._drag = (0, core.inject)(CDK_DRAG_PARENT, { optional: !0 })),
            this._drag?._setPlaceholderTemplate(this);
        }
        ngOnDestroy() {
          this._drag?._resetPlaceholderTemplate(this);
        }
        static #_ = (this.ɵfac = function CdkDragPlaceholder_Factory(t) {
          return new (t || CdkDragPlaceholder)(
            core["ɵɵdirectiveInject"](core.TemplateRef),
          );
        });
        static #_2 = (this.ɵdir = core["ɵɵdefineDirective"]({
          type: CdkDragPlaceholder,
          selectors: [["ng-template", "cdkDragPlaceholder", ""]],
          inputs: { data: "data" },
          standalone: !0,
          features: [
            core["ɵɵProvidersFeature"]([
              {
                provide: CDK_DRAG_PLACEHOLDER,
                useExisting: CdkDragPlaceholder,
              },
            ]),
          ],
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          CdkDragPlaceholder,
          [
            {
              type: core.Directive,
              args: [
                {
                  selector: "ng-template[cdkDragPlaceholder]",
                  standalone: !0,
                  providers: [
                    {
                      provide: CDK_DRAG_PLACEHOLDER,
                      useExisting: CdkDragPlaceholder,
                    },
                  ],
                },
              ],
            },
          ],
          () => [{ type: core.TemplateRef }],
          { data: [{ type: core.Input }] },
        );
      const DRAG_DROP_DIRECTIVES = [
        CdkDropList,
        CdkDropListGroup,
        CdkDrag,
        CdkDragHandle,
        CdkDragPreview,
        CdkDragPlaceholder,
      ];
      class DragDropModule {
        static #_ = (this.ɵfac = function DragDropModule_Factory(t) {
          return new (t || DragDropModule)();
        });
        static #_2 = (this.ɵmod = core["ɵɵdefineNgModule"]({
          type: DragDropModule,
          imports: [
            CdkDropList,
            CdkDropListGroup,
            CdkDrag,
            CdkDragHandle,
            CdkDragPreview,
            CdkDragPlaceholder,
          ],
          exports: [
            scrolling.Gj,
            CdkDropList,
            CdkDropListGroup,
            CdkDrag,
            CdkDragHandle,
            CdkDragPreview,
            CdkDragPlaceholder,
          ],
        }));
        static #_3 = (this.ɵinj = core["ɵɵdefineInjector"]({
          providers: [DragDrop],
          imports: [scrolling.Gj],
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          DragDropModule,
          [
            {
              type: core.NgModule,
              args: [
                {
                  imports: DRAG_DROP_DIRECTIVES,
                  exports: [scrolling.Gj, ...DRAG_DROP_DIRECTIVES],
                  providers: [DragDrop],
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
