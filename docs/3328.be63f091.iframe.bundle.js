/*! For license information please see 3328.be63f091.iframe.bundle.js.LICENSE.txt */
"use strict";
(self.webpackChunk_aseinfo_evolution_web_components =
  self.webpackChunk_aseinfo_evolution_web_components || []).push([
  [3328],
  {
    "./node_modules/@angular/router/fesm2022/router.mjs": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        nX: () => ActivatedRoute,
        wF: () => NavigationEnd,
        Ix: () => Router,
        iI: () => RouterModule,
        lh: () => provideRouter,
        H3: () => withDisabledInitialNavigation,
      });
      var asyncToGenerator = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js",
        ),
        core = __webpack_require__(
          "./node_modules/@angular/core/fesm2022/core.mjs",
        ),
        isObservable = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/util/isObservable.js",
        ),
        from = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/observable/from.js",
        ),
        of = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/observable/of.js",
        ),
        BehaviorSubject = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/BehaviorSubject.js",
        ),
        combineLatest = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/observable/combineLatest.js",
        ),
        EmptyError = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/util/EmptyError.js",
        ),
        concat = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/observable/concat.js",
        ),
        defer = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/observable/defer.js",
        ),
        pipe = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/util/pipe.js",
        ),
        observable_throwError = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/observable/throwError.js",
        ),
        empty = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/observable/empty.js",
        ),
        ConnectableObservable = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/observable/ConnectableObservable.js",
        ),
        Subject = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/Subject.js",
        ),
        Subscription = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/Subscription.js",
        ),
        common = __webpack_require__(
          "./node_modules/@angular/common/fesm2022/common.mjs",
        ),
        map = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/map.js",
        ),
        switchMap = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/switchMap.js",
        ),
        take = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/take.js",
        ),
        startWith = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/startWith.js",
        ),
        filter = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/filter.js",
        ),
        mergeMap = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js",
        ),
        first = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/first.js",
        ),
        concatMap = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/concatMap.js",
        ),
        tap = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/tap.js",
        ),
        catchError = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/catchError.js",
        ),
        lift = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/util/lift.js",
        ),
        OperatorSubscriber = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js",
        );
      function scan(accumulator, seed) {
        return (0, lift.N)(
          (function scanInternals(
            accumulator,
            seed,
            hasSeed,
            emitOnNext,
            emitBeforeComplete,
          ) {
            return function (source, subscriber) {
              var hasState = hasSeed,
                state = seed,
                index = 0;
              source.subscribe(
                (0, OperatorSubscriber._)(
                  subscriber,
                  function (value) {
                    var i = index++;
                    (state = hasState
                      ? accumulator(state, value, i)
                      : ((hasState = !0), value)),
                      emitOnNext && subscriber.next(state);
                  },
                  emitBeforeComplete &&
                    function () {
                      hasState && subscriber.next(state), subscriber.complete();
                    },
                ),
              );
            };
          })(accumulator, seed, arguments.length >= 2, !0),
        );
      }
      var defaultIfEmpty = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/defaultIfEmpty.js",
        ),
        tslib_es6 = __webpack_require__("./node_modules/tslib/tslib.es6.mjs");
      function takeLast(count) {
        return count <= 0
          ? function () {
              return empty.w;
            }
          : (0, lift.N)(function (source, subscriber) {
              var buffer = [];
              source.subscribe(
                (0, OperatorSubscriber._)(
                  subscriber,
                  function (value) {
                    buffer.push(value), count < buffer.length && buffer.shift();
                  },
                  function () {
                    var e_1, _a;
                    try {
                      for (
                        var buffer_1 = (0, tslib_es6.Ju)(buffer),
                          buffer_1_1 = buffer_1.next();
                        !buffer_1_1.done;
                        buffer_1_1 = buffer_1.next()
                      ) {
                        var value = buffer_1_1.value;
                        subscriber.next(value);
                      }
                    } catch (e_1_1) {
                      e_1 = { error: e_1_1 };
                    } finally {
                      try {
                        buffer_1_1 &&
                          !buffer_1_1.done &&
                          (_a = buffer_1.return) &&
                          _a.call(buffer_1);
                      } finally {
                        if (e_1) throw e_1.error;
                      }
                    }
                    subscriber.complete();
                  },
                  void 0,
                  function () {
                    buffer = null;
                  },
                ),
              );
            });
      }
      var throwIfEmpty = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/throwIfEmpty.js",
        ),
        identity = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/util/identity.js",
        );
      var mapTo = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/mapTo.js",
        ),
        finalize = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/finalize.js",
        ),
        refCount = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/refCount.js",
        ),
        takeUntil = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js",
        ),
        mergeAll = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js",
        ),
        platform_browser = __webpack_require__(
          "./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs",
        );
      const PRIMARY_OUTLET = "primary",
        RouteTitleKey = Symbol("RouteTitle");
      class ParamsAsMap {
        constructor(params) {
          this.params = params || {};
        }
        has(name) {
          return Object.prototype.hasOwnProperty.call(this.params, name);
        }
        get(name) {
          if (this.has(name)) {
            const v = this.params[name];
            return Array.isArray(v) ? v[0] : v;
          }
          return null;
        }
        getAll(name) {
          if (this.has(name)) {
            const v = this.params[name];
            return Array.isArray(v) ? v : [v];
          }
          return [];
        }
        get keys() {
          return Object.keys(this.params);
        }
      }
      function convertToParamMap(params) {
        return new ParamsAsMap(params);
      }
      function defaultUrlMatcher(segments, segmentGroup, route) {
        const parts = route.path.split("/");
        if (parts.length > segments.length) return null;
        if (
          "full" === route.pathMatch &&
          (segmentGroup.hasChildren() || parts.length < segments.length)
        )
          return null;
        const posParams = {};
        for (let index = 0; index < parts.length; index++) {
          const part = parts[index],
            segment = segments[index];
          if (part.startsWith(":")) posParams[part.substring(1)] = segment;
          else if (part !== segment.path) return null;
        }
        return { consumed: segments.slice(0, parts.length), posParams };
      }
      function shallowEqual(a, b) {
        const k1 = a ? getDataKeys(a) : void 0,
          k2 = b ? getDataKeys(b) : void 0;
        if (!k1 || !k2 || k1.length != k2.length) return !1;
        let key;
        for (let i = 0; i < k1.length; i++)
          if (((key = k1[i]), !equalArraysOrString(a[key], b[key]))) return !1;
        return !0;
      }
      function getDataKeys(obj) {
        return [...Object.keys(obj), ...Object.getOwnPropertySymbols(obj)];
      }
      function equalArraysOrString(a, b) {
        if (Array.isArray(a) && Array.isArray(b)) {
          if (a.length !== b.length) return !1;
          const aSorted = [...a].sort(),
            bSorted = [...b].sort();
          return aSorted.every((val, index) => bSorted[index] === val);
        }
        return a === b;
      }
      function router_last(a) {
        return a.length > 0 ? a[a.length - 1] : null;
      }
      function wrapIntoObservable(value) {
        return (0, isObservable.A)(value)
          ? value
          : (0, core["ɵisPromise"])(value)
            ? (0, from.H)(Promise.resolve(value))
            : (0, of.of)(value);
      }
      const pathCompareMap = {
          exact: function equalSegmentGroups(
            container,
            containee,
            matrixParams,
          ) {
            if (!equalPath(container.segments, containee.segments)) return !1;
            if (
              !matrixParamsMatch(
                container.segments,
                containee.segments,
                matrixParams,
              )
            )
              return !1;
            if (container.numberOfChildren !== containee.numberOfChildren)
              return !1;
            for (const c in containee.children) {
              if (!container.children[c]) return !1;
              if (
                !equalSegmentGroups(
                  container.children[c],
                  containee.children[c],
                  matrixParams,
                )
              )
                return !1;
            }
            return !0;
          },
          subset: containsSegmentGroup,
        },
        paramCompareMap = {
          exact: function equalParams(container, containee) {
            return shallowEqual(container, containee);
          },
          subset: function containsParams(container, containee) {
            return (
              Object.keys(containee).length <= Object.keys(container).length &&
              Object.keys(containee).every((key) =>
                equalArraysOrString(container[key], containee[key]),
              )
            );
          },
          ignored: () => !0,
        };
      function containsTree(container, containee, options) {
        return (
          pathCompareMap[options.paths](
            container.root,
            containee.root,
            options.matrixParams,
          ) &&
          paramCompareMap[options.queryParams](
            container.queryParams,
            containee.queryParams,
          ) &&
          !(
            "exact" === options.fragment &&
            container.fragment !== containee.fragment
          )
        );
      }
      function containsSegmentGroup(container, containee, matrixParams) {
        return containsSegmentGroupHelper(
          container,
          containee,
          containee.segments,
          matrixParams,
        );
      }
      function containsSegmentGroupHelper(
        container,
        containee,
        containeePaths,
        matrixParams,
      ) {
        if (container.segments.length > containeePaths.length) {
          const current = container.segments.slice(0, containeePaths.length);
          return (
            !!equalPath(current, containeePaths) &&
            !containee.hasChildren() &&
            !!matrixParamsMatch(current, containeePaths, matrixParams)
          );
        }
        if (container.segments.length === containeePaths.length) {
          if (!equalPath(container.segments, containeePaths)) return !1;
          if (
            !matrixParamsMatch(container.segments, containeePaths, matrixParams)
          )
            return !1;
          for (const c in containee.children) {
            if (!container.children[c]) return !1;
            if (
              !containsSegmentGroup(
                container.children[c],
                containee.children[c],
                matrixParams,
              )
            )
              return !1;
          }
          return !0;
        }
        {
          const current = containeePaths.slice(0, container.segments.length),
            next = containeePaths.slice(container.segments.length);
          return (
            !!equalPath(container.segments, current) &&
            !!matrixParamsMatch(container.segments, current, matrixParams) &&
            !!container.children[PRIMARY_OUTLET] &&
            containsSegmentGroupHelper(
              container.children[PRIMARY_OUTLET],
              containee,
              next,
              matrixParams,
            )
          );
        }
      }
      function matrixParamsMatch(containerPaths, containeePaths, options) {
        return containeePaths.every((containeeSegment, i) =>
          paramCompareMap[options](
            containerPaths[i].parameters,
            containeeSegment.parameters,
          ),
        );
      }
      class UrlTree {
        constructor(
          root = new UrlSegmentGroup([], {}),
          queryParams = {},
          fragment = null,
        ) {
          if (
            ((this.root = root),
            (this.queryParams = queryParams),
            (this.fragment = fragment),
            ("undefined" == typeof ngDevMode || ngDevMode) &&
              root.segments.length > 0)
          )
            throw new core["ɵRuntimeError"](
              4015,
              "The root `UrlSegmentGroup` should not contain `segments`. Instead, these segments belong in the `children` so they can be associated with a named outlet.",
            );
        }
        get queryParamMap() {
          return (
            (this._queryParamMap ??= convertToParamMap(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return DEFAULT_SERIALIZER.serialize(this);
        }
      }
      class UrlSegmentGroup {
        constructor(segments, children) {
          (this.segments = segments),
            (this.children = children),
            (this.parent = null),
            Object.values(children).forEach((v) => (v.parent = this));
        }
        hasChildren() {
          return this.numberOfChildren > 0;
        }
        get numberOfChildren() {
          return Object.keys(this.children).length;
        }
        toString() {
          return serializePaths(this);
        }
      }
      class UrlSegment {
        constructor(path, parameters) {
          (this.path = path), (this.parameters = parameters);
        }
        get parameterMap() {
          return (
            (this._parameterMap ??= convertToParamMap(this.parameters)),
            this._parameterMap
          );
        }
        toString() {
          return serializePath(this);
        }
      }
      function equalPath(as, bs) {
        return (
          as.length === bs.length && as.every((a, i) => a.path === bs[i].path)
        );
      }
      class UrlSerializer {
        static #_ = (this.ɵfac = function UrlSerializer_Factory(t) {
          return new (t || UrlSerializer)();
        });
        static #_2 = (this.ɵprov = core["ɵɵdefineInjectable"]({
          token: UrlSerializer,
          factory: () => new DefaultUrlSerializer(),
          providedIn: "root",
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          UrlSerializer,
          [
            {
              type: core.Injectable,
              args: [
                {
                  providedIn: "root",
                  useFactory: () => new DefaultUrlSerializer(),
                },
              ],
            },
          ],
          null,
          null,
        );
      class DefaultUrlSerializer {
        parse(url) {
          const p = new UrlParser(url);
          return new UrlTree(
            p.parseRootSegment(),
            p.parseQueryParams(),
            p.parseFragment(),
          );
        }
        serialize(tree) {
          return `${`/${serializeSegment(tree.root, !0)}`}${(function serializeQueryParams(
            params,
          ) {
            const strParams = Object.entries(params)
              .map(([name, value]) =>
                Array.isArray(value)
                  ? value
                      .map(
                        (v) => `${encodeUriQuery(name)}=${encodeUriQuery(v)}`,
                      )
                      .join("&")
                  : `${encodeUriQuery(name)}=${encodeUriQuery(value)}`,
              )
              .filter((s) => s);
            return strParams.length ? `?${strParams.join("&")}` : "";
          })(tree.queryParams)}${
            "string" == typeof tree.fragment
              ? `#${(function encodeUriFragment(s) {
                  return encodeURI(s);
                })(tree.fragment)}`
              : ""
          }`;
        }
      }
      const DEFAULT_SERIALIZER = new DefaultUrlSerializer();
      function serializePaths(segment) {
        return segment.segments.map((p) => serializePath(p)).join("/");
      }
      function serializeSegment(segment, root) {
        if (!segment.hasChildren()) return serializePaths(segment);
        if (root) {
          const primary = segment.children[PRIMARY_OUTLET]
              ? serializeSegment(segment.children[PRIMARY_OUTLET], !1)
              : "",
            children = [];
          return (
            Object.entries(segment.children).forEach(([k, v]) => {
              k !== PRIMARY_OUTLET &&
                children.push(`${k}:${serializeSegment(v, !1)}`);
            }),
            children.length > 0 ? `${primary}(${children.join("//")})` : primary
          );
        }
        {
          const children = (function mapChildrenIntoArray(segment, fn) {
            let res = [];
            return (
              Object.entries(segment.children).forEach(
                ([childOutlet, child]) => {
                  childOutlet === PRIMARY_OUTLET &&
                    (res = res.concat(fn(child, childOutlet)));
                },
              ),
              Object.entries(segment.children).forEach(
                ([childOutlet, child]) => {
                  childOutlet !== PRIMARY_OUTLET &&
                    (res = res.concat(fn(child, childOutlet)));
                },
              ),
              res
            );
          })(segment, (v, k) =>
            k === PRIMARY_OUTLET
              ? [serializeSegment(segment.children[PRIMARY_OUTLET], !1)]
              : [`${k}:${serializeSegment(v, !1)}`],
          );
          return 1 === Object.keys(segment.children).length &&
            null != segment.children[PRIMARY_OUTLET]
            ? `${serializePaths(segment)}/${children[0]}`
            : `${serializePaths(segment)}/(${children.join("//")})`;
        }
      }
      function encodeUriString(s) {
        return encodeURIComponent(s)
          .replace(/%40/g, "@")
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",");
      }
      function encodeUriQuery(s) {
        return encodeUriString(s).replace(/%3B/gi, ";");
      }
      function encodeUriSegment(s) {
        return encodeUriString(s)
          .replace(/\(/g, "%28")
          .replace(/\)/g, "%29")
          .replace(/%26/gi, "&");
      }
      function decode(s) {
        return decodeURIComponent(s);
      }
      function decodeQuery(s) {
        return decode(s.replace(/\+/g, "%20"));
      }
      function serializePath(path) {
        return `${encodeUriSegment(path.path)}${(function serializeMatrixParams(
          params,
        ) {
          return Object.entries(params)
            .map(
              ([key, value]) =>
                `;${encodeUriSegment(key)}=${encodeUriSegment(value)}`,
            )
            .join("");
        })(path.parameters)}`;
      }
      const SEGMENT_RE = /^[^\/()?;#]+/;
      function matchSegments(str) {
        const match = str.match(SEGMENT_RE);
        return match ? match[0] : "";
      }
      const MATRIX_PARAM_SEGMENT_RE = /^[^\/()?;=#]+/;
      const QUERY_PARAM_RE = /^[^=?&#]+/;
      const QUERY_PARAM_VALUE_RE = /^[^&#]+/;
      class UrlParser {
        constructor(url) {
          (this.url = url), (this.remaining = url);
        }
        parseRootSegment() {
          return (
            this.consumeOptional("/"),
            "" === this.remaining ||
            this.peekStartsWith("?") ||
            this.peekStartsWith("#")
              ? new UrlSegmentGroup([], {})
              : new UrlSegmentGroup([], this.parseChildren())
          );
        }
        parseQueryParams() {
          const params = {};
          if (this.consumeOptional("?"))
            do {
              this.parseQueryParam(params);
            } while (this.consumeOptional("&"));
          return params;
        }
        parseFragment() {
          return this.consumeOptional("#")
            ? decodeURIComponent(this.remaining)
            : null;
        }
        parseChildren() {
          if ("" === this.remaining) return {};
          this.consumeOptional("/");
          const segments = [];
          for (
            this.peekStartsWith("(") || segments.push(this.parseSegment());
            this.peekStartsWith("/") &&
            !this.peekStartsWith("//") &&
            !this.peekStartsWith("/(");

          )
            this.capture("/"), segments.push(this.parseSegment());
          let children = {};
          this.peekStartsWith("/(") &&
            (this.capture("/"), (children = this.parseParens(!0)));
          let res = {};
          return (
            this.peekStartsWith("(") && (res = this.parseParens(!1)),
            (segments.length > 0 || Object.keys(children).length > 0) &&
              (res[PRIMARY_OUTLET] = new UrlSegmentGroup(segments, children)),
            res
          );
        }
        parseSegment() {
          const path = matchSegments(this.remaining);
          if ("" === path && this.peekStartsWith(";"))
            throw new core["ɵRuntimeError"](
              4009,
              ("undefined" == typeof ngDevMode || ngDevMode) &&
                `Empty path url segment cannot have parameters: '${this.remaining}'.`,
            );
          return (
            this.capture(path),
            new UrlSegment(decode(path), this.parseMatrixParams())
          );
        }
        parseMatrixParams() {
          const params = {};
          for (; this.consumeOptional(";"); ) this.parseParam(params);
          return params;
        }
        parseParam(params) {
          const key = (function matchMatrixKeySegments(str) {
            const match = str.match(MATRIX_PARAM_SEGMENT_RE);
            return match ? match[0] : "";
          })(this.remaining);
          if (!key) return;
          this.capture(key);
          let value = "";
          if (this.consumeOptional("=")) {
            const valueMatch = matchSegments(this.remaining);
            valueMatch && ((value = valueMatch), this.capture(value));
          }
          params[decode(key)] = decode(value);
        }
        parseQueryParam(params) {
          const key = (function matchQueryParams(str) {
            const match = str.match(QUERY_PARAM_RE);
            return match ? match[0] : "";
          })(this.remaining);
          if (!key) return;
          this.capture(key);
          let value = "";
          if (this.consumeOptional("=")) {
            const valueMatch = (function matchUrlQueryParamValue(str) {
              const match = str.match(QUERY_PARAM_VALUE_RE);
              return match ? match[0] : "";
            })(this.remaining);
            valueMatch && ((value = valueMatch), this.capture(value));
          }
          const decodedKey = decodeQuery(key),
            decodedVal = decodeQuery(value);
          if (params.hasOwnProperty(decodedKey)) {
            let currentVal = params[decodedKey];
            Array.isArray(currentVal) ||
              ((currentVal = [currentVal]), (params[decodedKey] = currentVal)),
              currentVal.push(decodedVal);
          } else params[decodedKey] = decodedVal;
        }
        parseParens(allowPrimary) {
          const segments = {};
          for (
            this.capture("(");
            !this.consumeOptional(")") && this.remaining.length > 0;

          ) {
            const path = matchSegments(this.remaining),
              next = this.remaining[path.length];
            if ("/" !== next && ")" !== next && ";" !== next)
              throw new core["ɵRuntimeError"](
                4010,
                ("undefined" == typeof ngDevMode || ngDevMode) &&
                  `Cannot parse url '${this.url}'`,
              );
            let outletName;
            path.indexOf(":") > -1
              ? ((outletName = path.slice(0, path.indexOf(":"))),
                this.capture(outletName),
                this.capture(":"))
              : allowPrimary && (outletName = PRIMARY_OUTLET);
            const children = this.parseChildren();
            (segments[outletName] =
              1 === Object.keys(children).length
                ? children[PRIMARY_OUTLET]
                : new UrlSegmentGroup([], children)),
              this.consumeOptional("//");
          }
          return segments;
        }
        peekStartsWith(str) {
          return this.remaining.startsWith(str);
        }
        consumeOptional(str) {
          return (
            !!this.peekStartsWith(str) &&
            ((this.remaining = this.remaining.substring(str.length)), !0)
          );
        }
        capture(str) {
          if (!this.consumeOptional(str))
            throw new core["ɵRuntimeError"](
              4011,
              ("undefined" == typeof ngDevMode || ngDevMode) &&
                `Expected "${str}".`,
            );
        }
      }
      function createRoot(rootCandidate) {
        return rootCandidate.segments.length > 0
          ? new UrlSegmentGroup([], { [PRIMARY_OUTLET]: rootCandidate })
          : rootCandidate;
      }
      function squashSegmentGroup(segmentGroup) {
        const newChildren = {};
        for (const [childOutlet, child] of Object.entries(
          segmentGroup.children,
        )) {
          const childCandidate = squashSegmentGroup(child);
          if (
            childOutlet === PRIMARY_OUTLET &&
            0 === childCandidate.segments.length &&
            childCandidate.hasChildren()
          )
            for (const [grandChildOutlet, grandChild] of Object.entries(
              childCandidate.children,
            ))
              newChildren[grandChildOutlet] = grandChild;
          else
            (childCandidate.segments.length > 0 ||
              childCandidate.hasChildren()) &&
              (newChildren[childOutlet] = childCandidate);
        }
        return (function mergeTrivialChildren(s) {
          if (1 === s.numberOfChildren && s.children[PRIMARY_OUTLET]) {
            const c = s.children[PRIMARY_OUTLET];
            return new UrlSegmentGroup(
              s.segments.concat(c.segments),
              c.children,
            );
          }
          return s;
        })(new UrlSegmentGroup(segmentGroup.segments, newChildren));
      }
      function isUrlTree(v) {
        return v instanceof UrlTree;
      }
      function createSegmentGroupFromRoute(route) {
        let targetGroup;
        const rootCandidate = (function createSegmentGroupFromRouteRecursive(
            currentRoute,
          ) {
            const childOutlets = {};
            for (const childSnapshot of currentRoute.children) {
              const root = createSegmentGroupFromRouteRecursive(childSnapshot);
              childOutlets[childSnapshot.outlet] = root;
            }
            const segmentGroup = new UrlSegmentGroup(
              currentRoute.url,
              childOutlets,
            );
            return (
              currentRoute === route && (targetGroup = segmentGroup),
              segmentGroup
            );
          })(route.root),
          rootSegmentGroup = createRoot(rootCandidate);
        return targetGroup ?? rootSegmentGroup;
      }
      function createUrlTreeFromSegmentGroup(
        relativeTo,
        commands,
        queryParams,
        fragment,
      ) {
        let root = relativeTo;
        for (; root.parent; ) root = root.parent;
        if (0 === commands.length)
          return tree(root, root, root, queryParams, fragment);
        const nav = (function computeNavigation(commands) {
          if (
            "string" == typeof commands[0] &&
            1 === commands.length &&
            "/" === commands[0]
          )
            return new Navigation(!0, 0, commands);
          let numberOfDoubleDots = 0,
            isAbsolute = !1;
          const res = commands.reduce((res, cmd, cmdIdx) => {
            if ("object" == typeof cmd && null != cmd) {
              if (cmd.outlets) {
                const outlets = {};
                return (
                  Object.entries(cmd.outlets).forEach(([name, commands]) => {
                    outlets[name] =
                      "string" == typeof commands
                        ? commands.split("/")
                        : commands;
                  }),
                  [...res, { outlets }]
                );
              }
              if (cmd.segmentPath) return [...res, cmd.segmentPath];
            }
            return "string" != typeof cmd
              ? [...res, cmd]
              : 0 === cmdIdx
                ? (cmd.split("/").forEach((urlPart, partIndex) => {
                    (0 == partIndex && "." === urlPart) ||
                      (0 == partIndex && "" === urlPart
                        ? (isAbsolute = !0)
                        : ".." === urlPart
                          ? numberOfDoubleDots++
                          : "" != urlPart && res.push(urlPart));
                  }),
                  res)
                : [...res, cmd];
          }, []);
          return new Navigation(isAbsolute, numberOfDoubleDots, res);
        })(commands);
        if (nav.toRoot())
          return tree(
            root,
            root,
            new UrlSegmentGroup([], {}),
            queryParams,
            fragment,
          );
        const position = (function findStartingPositionForTargetGroup(
            nav,
            root,
            target,
          ) {
            if (nav.isAbsolute) return new Position(root, !0, 0);
            if (!target) return new Position(root, !1, NaN);
            if (null === target.parent) return new Position(target, !0, 0);
            const modifier = isMatrixParams(nav.commands[0]) ? 0 : 1,
              index = target.segments.length - 1 + modifier;
            return (function createPositionApplyingDoubleDots(
              group,
              index,
              numberOfDoubleDots,
            ) {
              let g = group,
                ci = index,
                dd = numberOfDoubleDots;
              for (; dd > ci; ) {
                if (((dd -= ci), (g = g.parent), !g))
                  throw new core["ɵRuntimeError"](
                    4005,
                    ("undefined" == typeof ngDevMode || ngDevMode) &&
                      "Invalid number of '../'",
                  );
                ci = g.segments.length;
              }
              return new Position(g, !1, ci - dd);
            })(target, index, nav.numberOfDoubleDots);
          })(nav, root, relativeTo),
          newSegmentGroup = position.processChildren
            ? updateSegmentGroupChildren(
                position.segmentGroup,
                position.index,
                nav.commands,
              )
            : updateSegmentGroup(
                position.segmentGroup,
                position.index,
                nav.commands,
              );
        return tree(
          root,
          position.segmentGroup,
          newSegmentGroup,
          queryParams,
          fragment,
        );
      }
      function isMatrixParams(command) {
        return (
          "object" == typeof command &&
          null != command &&
          !command.outlets &&
          !command.segmentPath
        );
      }
      function isCommandWithOutlets(command) {
        return "object" == typeof command && null != command && command.outlets;
      }
      function tree(
        oldRoot,
        oldSegmentGroup,
        newSegmentGroup,
        queryParams,
        fragment,
      ) {
        let rootCandidate,
          qp = {};
        queryParams &&
          Object.entries(queryParams).forEach(([name, value]) => {
            qp[name] = Array.isArray(value)
              ? value.map((v) => `${v}`)
              : `${value}`;
          }),
          (rootCandidate =
            oldRoot === oldSegmentGroup
              ? newSegmentGroup
              : replaceSegment(oldRoot, oldSegmentGroup, newSegmentGroup));
        const newRoot = createRoot(squashSegmentGroup(rootCandidate));
        return new UrlTree(newRoot, qp, fragment);
      }
      function replaceSegment(current, oldSegment, newSegment) {
        const children = {};
        return (
          Object.entries(current.children).forEach(([outletName, c]) => {
            children[outletName] =
              c === oldSegment
                ? newSegment
                : replaceSegment(c, oldSegment, newSegment);
          }),
          new UrlSegmentGroup(current.segments, children)
        );
      }
      class Navigation {
        constructor(isAbsolute, numberOfDoubleDots, commands) {
          if (
            ((this.isAbsolute = isAbsolute),
            (this.numberOfDoubleDots = numberOfDoubleDots),
            (this.commands = commands),
            isAbsolute && commands.length > 0 && isMatrixParams(commands[0]))
          )
            throw new core["ɵRuntimeError"](
              4003,
              ("undefined" == typeof ngDevMode || ngDevMode) &&
                "Root segment cannot have matrix parameters",
            );
          const cmdWithOutlet = commands.find(isCommandWithOutlets);
          if (cmdWithOutlet && cmdWithOutlet !== router_last(commands))
            throw new core["ɵRuntimeError"](
              4004,
              ("undefined" == typeof ngDevMode || ngDevMode) &&
                "{outlets:{}} has to be the last command",
            );
        }
        toRoot() {
          return (
            this.isAbsolute &&
            1 === this.commands.length &&
            "/" == this.commands[0]
          );
        }
      }
      class Position {
        constructor(segmentGroup, processChildren, index) {
          (this.segmentGroup = segmentGroup),
            (this.processChildren = processChildren),
            (this.index = index);
        }
      }
      function updateSegmentGroup(segmentGroup, startIndex, commands) {
        if (
          ((segmentGroup ??= new UrlSegmentGroup([], {})),
          0 === segmentGroup.segments.length && segmentGroup.hasChildren())
        )
          return updateSegmentGroupChildren(segmentGroup, startIndex, commands);
        const m = (function prefixedWith(segmentGroup, startIndex, commands) {
            let currentCommandIndex = 0,
              currentPathIndex = startIndex;
            const noMatch = { match: !1, pathIndex: 0, commandIndex: 0 };
            for (; currentPathIndex < segmentGroup.segments.length; ) {
              if (currentCommandIndex >= commands.length) return noMatch;
              const path = segmentGroup.segments[currentPathIndex],
                command = commands[currentCommandIndex];
              if (isCommandWithOutlets(command)) break;
              const curr = `${command}`,
                next =
                  currentCommandIndex < commands.length - 1
                    ? commands[currentCommandIndex + 1]
                    : null;
              if (currentPathIndex > 0 && void 0 === curr) break;
              if (
                curr &&
                next &&
                "object" == typeof next &&
                void 0 === next.outlets
              ) {
                if (!compare(curr, next, path)) return noMatch;
                currentCommandIndex += 2;
              } else {
                if (!compare(curr, {}, path)) return noMatch;
                currentCommandIndex++;
              }
              currentPathIndex++;
            }
            return {
              match: !0,
              pathIndex: currentPathIndex,
              commandIndex: currentCommandIndex,
            };
          })(segmentGroup, startIndex, commands),
          slicedCommands = commands.slice(m.commandIndex);
        if (m.match && m.pathIndex < segmentGroup.segments.length) {
          const g = new UrlSegmentGroup(
            segmentGroup.segments.slice(0, m.pathIndex),
            {},
          );
          return (
            (g.children[PRIMARY_OUTLET] = new UrlSegmentGroup(
              segmentGroup.segments.slice(m.pathIndex),
              segmentGroup.children,
            )),
            updateSegmentGroupChildren(g, 0, slicedCommands)
          );
        }
        return m.match && 0 === slicedCommands.length
          ? new UrlSegmentGroup(segmentGroup.segments, {})
          : m.match && !segmentGroup.hasChildren()
            ? createNewSegmentGroup(segmentGroup, startIndex, commands)
            : m.match
              ? updateSegmentGroupChildren(segmentGroup, 0, slicedCommands)
              : createNewSegmentGroup(segmentGroup, startIndex, commands);
      }
      function updateSegmentGroupChildren(segmentGroup, startIndex, commands) {
        if (0 === commands.length)
          return new UrlSegmentGroup(segmentGroup.segments, {});
        {
          const outlets = (function getOutlets(commands) {
              return isCommandWithOutlets(commands[0])
                ? commands[0].outlets
                : { [PRIMARY_OUTLET]: commands };
            })(commands),
            children = {};
          if (
            Object.keys(outlets).some((o) => o !== PRIMARY_OUTLET) &&
            segmentGroup.children[PRIMARY_OUTLET] &&
            1 === segmentGroup.numberOfChildren &&
            0 === segmentGroup.children[PRIMARY_OUTLET].segments.length
          ) {
            const childrenOfEmptyChild = updateSegmentGroupChildren(
              segmentGroup.children[PRIMARY_OUTLET],
              startIndex,
              commands,
            );
            return new UrlSegmentGroup(
              segmentGroup.segments,
              childrenOfEmptyChild.children,
            );
          }
          return (
            Object.entries(outlets).forEach(([outlet, commands]) => {
              "string" == typeof commands && (commands = [commands]),
                null !== commands &&
                  (children[outlet] = updateSegmentGroup(
                    segmentGroup.children[outlet],
                    startIndex,
                    commands,
                  ));
            }),
            Object.entries(segmentGroup.children).forEach(
              ([childOutlet, child]) => {
                void 0 === outlets[childOutlet] &&
                  (children[childOutlet] = child);
              },
            ),
            new UrlSegmentGroup(segmentGroup.segments, children)
          );
        }
      }
      function createNewSegmentGroup(segmentGroup, startIndex, commands) {
        const paths = segmentGroup.segments.slice(0, startIndex);
        let i = 0;
        for (; i < commands.length; ) {
          const command = commands[i];
          if (isCommandWithOutlets(command)) {
            const children = createNewSegmentChildren(command.outlets);
            return new UrlSegmentGroup(paths, children);
          }
          if (0 === i && isMatrixParams(commands[0])) {
            const p = segmentGroup.segments[startIndex];
            paths.push(new UrlSegment(p.path, stringify(commands[0]))), i++;
            continue;
          }
          const curr = isCommandWithOutlets(command)
              ? command.outlets[PRIMARY_OUTLET]
              : `${command}`,
            next = i < commands.length - 1 ? commands[i + 1] : null;
          curr && next && isMatrixParams(next)
            ? (paths.push(new UrlSegment(curr, stringify(next))), (i += 2))
            : (paths.push(new UrlSegment(curr, {})), i++);
        }
        return new UrlSegmentGroup(paths, {});
      }
      function createNewSegmentChildren(outlets) {
        const children = {};
        return (
          Object.entries(outlets).forEach(([outlet, commands]) => {
            "string" == typeof commands && (commands = [commands]),
              null !== commands &&
                (children[outlet] = createNewSegmentGroup(
                  new UrlSegmentGroup([], {}),
                  0,
                  commands,
                ));
          }),
          children
        );
      }
      function stringify(params) {
        const res = {};
        return (
          Object.entries(params).forEach(([k, v]) => (res[k] = `${v}`)), res
        );
      }
      function compare(path, params, segment) {
        return path == segment.path && shallowEqual(params, segment.parameters);
      }
      var EventType, NavigationCancellationCode, NavigationSkippedCode;
      !(function (EventType) {
        (EventType[(EventType.NavigationStart = 0)] = "NavigationStart"),
          (EventType[(EventType.NavigationEnd = 1)] = "NavigationEnd"),
          (EventType[(EventType.NavigationCancel = 2)] = "NavigationCancel"),
          (EventType[(EventType.NavigationError = 3)] = "NavigationError"),
          (EventType[(EventType.RoutesRecognized = 4)] = "RoutesRecognized"),
          (EventType[(EventType.ResolveStart = 5)] = "ResolveStart"),
          (EventType[(EventType.ResolveEnd = 6)] = "ResolveEnd"),
          (EventType[(EventType.GuardsCheckStart = 7)] = "GuardsCheckStart"),
          (EventType[(EventType.GuardsCheckEnd = 8)] = "GuardsCheckEnd"),
          (EventType[(EventType.RouteConfigLoadStart = 9)] =
            "RouteConfigLoadStart"),
          (EventType[(EventType.RouteConfigLoadEnd = 10)] =
            "RouteConfigLoadEnd"),
          (EventType[(EventType.ChildActivationStart = 11)] =
            "ChildActivationStart"),
          (EventType[(EventType.ChildActivationEnd = 12)] =
            "ChildActivationEnd"),
          (EventType[(EventType.ActivationStart = 13)] = "ActivationStart"),
          (EventType[(EventType.ActivationEnd = 14)] = "ActivationEnd"),
          (EventType[(EventType.Scroll = 15)] = "Scroll"),
          (EventType[(EventType.NavigationSkipped = 16)] = "NavigationSkipped");
      })(EventType || (EventType = {}));
      class RouterEvent {
        constructor(id, url) {
          (this.id = id), (this.url = url);
        }
      }
      class NavigationStart extends RouterEvent {
        constructor(
          id,
          url,
          navigationTrigger = "imperative",
          restoredState = null,
        ) {
          super(id, url),
            (this.type = EventType.NavigationStart),
            (this.navigationTrigger = navigationTrigger),
            (this.restoredState = restoredState);
        }
        toString() {
          return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class NavigationEnd extends RouterEvent {
        constructor(id, url, urlAfterRedirects) {
          super(id, url),
            (this.urlAfterRedirects = urlAfterRedirects),
            (this.type = EventType.NavigationEnd);
        }
        toString() {
          return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
        }
      }
      !(function (NavigationCancellationCode) {
        (NavigationCancellationCode[(NavigationCancellationCode.Redirect = 0)] =
          "Redirect"),
          (NavigationCancellationCode[
            (NavigationCancellationCode.SupersededByNewNavigation = 1)
          ] = "SupersededByNewNavigation"),
          (NavigationCancellationCode[
            (NavigationCancellationCode.NoDataFromResolver = 2)
          ] = "NoDataFromResolver"),
          (NavigationCancellationCode[
            (NavigationCancellationCode.GuardRejected = 3)
          ] = "GuardRejected");
      })(NavigationCancellationCode || (NavigationCancellationCode = {})),
        (function (NavigationSkippedCode) {
          (NavigationSkippedCode[
            (NavigationSkippedCode.IgnoredSameUrlNavigation = 0)
          ] = "IgnoredSameUrlNavigation"),
            (NavigationSkippedCode[
              (NavigationSkippedCode.IgnoredByUrlHandlingStrategy = 1)
            ] = "IgnoredByUrlHandlingStrategy");
        })(NavigationSkippedCode || (NavigationSkippedCode = {}));
      class NavigationCancel extends RouterEvent {
        constructor(id, url, reason, code) {
          super(id, url),
            (this.reason = reason),
            (this.code = code),
            (this.type = EventType.NavigationCancel);
        }
        toString() {
          return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class NavigationSkipped extends RouterEvent {
        constructor(id, url, reason, code) {
          super(id, url),
            (this.reason = reason),
            (this.code = code),
            (this.type = EventType.NavigationSkipped);
        }
      }
      class NavigationError extends RouterEvent {
        constructor(id, url, error, target) {
          super(id, url),
            (this.error = error),
            (this.target = target),
            (this.type = EventType.NavigationError);
        }
        toString() {
          return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
        }
      }
      class RoutesRecognized extends RouterEvent {
        constructor(id, url, urlAfterRedirects, state) {
          super(id, url),
            (this.urlAfterRedirects = urlAfterRedirects),
            (this.state = state),
            (this.type = EventType.RoutesRecognized);
        }
        toString() {
          return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class GuardsCheckStart extends RouterEvent {
        constructor(id, url, urlAfterRedirects, state) {
          super(id, url),
            (this.urlAfterRedirects = urlAfterRedirects),
            (this.state = state),
            (this.type = EventType.GuardsCheckStart);
        }
        toString() {
          return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class GuardsCheckEnd extends RouterEvent {
        constructor(id, url, urlAfterRedirects, state, shouldActivate) {
          super(id, url),
            (this.urlAfterRedirects = urlAfterRedirects),
            (this.state = state),
            (this.shouldActivate = shouldActivate),
            (this.type = EventType.GuardsCheckEnd);
        }
        toString() {
          return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
        }
      }
      class ResolveStart extends RouterEvent {
        constructor(id, url, urlAfterRedirects, state) {
          super(id, url),
            (this.urlAfterRedirects = urlAfterRedirects),
            (this.state = state),
            (this.type = EventType.ResolveStart);
        }
        toString() {
          return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class ResolveEnd extends RouterEvent {
        constructor(id, url, urlAfterRedirects, state) {
          super(id, url),
            (this.urlAfterRedirects = urlAfterRedirects),
            (this.state = state),
            (this.type = EventType.ResolveEnd);
        }
        toString() {
          return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class RouteConfigLoadStart {
        constructor(route) {
          (this.route = route), (this.type = EventType.RouteConfigLoadStart);
        }
        toString() {
          return `RouteConfigLoadStart(path: ${this.route.path})`;
        }
      }
      class RouteConfigLoadEnd {
        constructor(route) {
          (this.route = route), (this.type = EventType.RouteConfigLoadEnd);
        }
        toString() {
          return `RouteConfigLoadEnd(path: ${this.route.path})`;
        }
      }
      class ChildActivationStart {
        constructor(snapshot) {
          (this.snapshot = snapshot),
            (this.type = EventType.ChildActivationStart);
        }
        toString() {
          return `ChildActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""}')`;
        }
      }
      class ChildActivationEnd {
        constructor(snapshot) {
          (this.snapshot = snapshot),
            (this.type = EventType.ChildActivationEnd);
        }
        toString() {
          return `ChildActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""}')`;
        }
      }
      class ActivationStart {
        constructor(snapshot) {
          (this.snapshot = snapshot), (this.type = EventType.ActivationStart);
        }
        toString() {
          return `ActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""}')`;
        }
      }
      class ActivationEnd {
        constructor(snapshot) {
          (this.snapshot = snapshot), (this.type = EventType.ActivationEnd);
        }
        toString() {
          return `ActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""}')`;
        }
      }
      class Scroll {
        constructor(routerEvent, position, anchor) {
          (this.routerEvent = routerEvent),
            (this.position = position),
            (this.anchor = anchor),
            (this.type = EventType.Scroll);
        }
        toString() {
          const pos = this.position
            ? `${this.position[0]}, ${this.position[1]}`
            : null;
          return `Scroll(anchor: '${this.anchor}', position: '${pos}')`;
        }
      }
      class BeforeActivateRoutes {}
      class RedirectRequest {
        constructor(url) {
          this.url = url;
        }
      }
      class OutletContext {
        constructor() {
          (this.outlet = null),
            (this.route = null),
            (this.injector = null),
            (this.children = new ChildrenOutletContexts()),
            (this.attachRef = null);
        }
      }
      class ChildrenOutletContexts {
        constructor() {
          this.contexts = new Map();
        }
        onChildOutletCreated(childName, outlet) {
          const context = this.getOrCreateContext(childName);
          (context.outlet = outlet), this.contexts.set(childName, context);
        }
        onChildOutletDestroyed(childName) {
          const context = this.getContext(childName);
          context && ((context.outlet = null), (context.attachRef = null));
        }
        onOutletDeactivated() {
          const contexts = this.contexts;
          return (this.contexts = new Map()), contexts;
        }
        onOutletReAttached(contexts) {
          this.contexts = contexts;
        }
        getOrCreateContext(childName) {
          let context = this.getContext(childName);
          return (
            context ||
              ((context = new OutletContext()),
              this.contexts.set(childName, context)),
            context
          );
        }
        getContext(childName) {
          return this.contexts.get(childName) || null;
        }
        static #_ = (this.ɵfac = function ChildrenOutletContexts_Factory(t) {
          return new (t || ChildrenOutletContexts)();
        });
        static #_2 = (this.ɵprov = core["ɵɵdefineInjectable"]({
          token: ChildrenOutletContexts,
          factory: ChildrenOutletContexts.ɵfac,
          providedIn: "root",
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          ChildrenOutletContexts,
          [{ type: core.Injectable, args: [{ providedIn: "root" }] }],
          null,
          null,
        );
      class Tree {
        constructor(root) {
          this._root = root;
        }
        get root() {
          return this._root.value;
        }
        parent(t) {
          const p = this.pathFromRoot(t);
          return p.length > 1 ? p[p.length - 2] : null;
        }
        children(t) {
          const n = findNode(t, this._root);
          return n ? n.children.map((t) => t.value) : [];
        }
        firstChild(t) {
          const n = findNode(t, this._root);
          return n && n.children.length > 0 ? n.children[0].value : null;
        }
        siblings(t) {
          const p = findPath(t, this._root);
          if (p.length < 2) return [];
          return p[p.length - 2].children
            .map((c) => c.value)
            .filter((cc) => cc !== t);
        }
        pathFromRoot(t) {
          return findPath(t, this._root).map((s) => s.value);
        }
      }
      function findNode(value, node) {
        if (value === node.value) return node;
        for (const child of node.children) {
          const node = findNode(value, child);
          if (node) return node;
        }
        return null;
      }
      function findPath(value, node) {
        if (value === node.value) return [node];
        for (const child of node.children) {
          const path = findPath(value, child);
          if (path.length) return path.unshift(node), path;
        }
        return [];
      }
      class TreeNode {
        constructor(value, children) {
          (this.value = value), (this.children = children);
        }
        toString() {
          return `TreeNode(${this.value})`;
        }
      }
      function nodeChildrenAsMap(node) {
        const map = {};
        return (
          node &&
            node.children.forEach((child) => (map[child.value.outlet] = child)),
          map
        );
      }
      class RouterState extends Tree {
        constructor(root, snapshot) {
          super(root), (this.snapshot = snapshot), setRouterState(this, root);
        }
        toString() {
          return this.snapshot.toString();
        }
      }
      function createEmptyState(rootComponent) {
        const snapshot = (function createEmptyStateSnapshot(rootComponent) {
            const emptyParams = {},
              emptyData = {},
              emptyQueryParams = {},
              fragment = "",
              activated = new ActivatedRouteSnapshot(
                [],
                emptyParams,
                emptyQueryParams,
                fragment,
                emptyData,
                PRIMARY_OUTLET,
                rootComponent,
                null,
                {},
              );
            return new RouterStateSnapshot("", new TreeNode(activated, []));
          })(rootComponent),
          emptyUrl = new BehaviorSubject.t([new UrlSegment("", {})]),
          emptyParams = new BehaviorSubject.t({}),
          emptyData = new BehaviorSubject.t({}),
          emptyQueryParams = new BehaviorSubject.t({}),
          fragment = new BehaviorSubject.t(""),
          activated = new ActivatedRoute(
            emptyUrl,
            emptyParams,
            emptyQueryParams,
            fragment,
            emptyData,
            PRIMARY_OUTLET,
            rootComponent,
            snapshot.root,
          );
        return (
          (activated.snapshot = snapshot.root),
          new RouterState(new TreeNode(activated, []), snapshot)
        );
      }
      class ActivatedRoute {
        constructor(
          urlSubject,
          paramsSubject,
          queryParamsSubject,
          fragmentSubject,
          dataSubject,
          outlet,
          component,
          futureSnapshot,
        ) {
          (this.urlSubject = urlSubject),
            (this.paramsSubject = paramsSubject),
            (this.queryParamsSubject = queryParamsSubject),
            (this.fragmentSubject = fragmentSubject),
            (this.dataSubject = dataSubject),
            (this.outlet = outlet),
            (this.component = component),
            (this._futureSnapshot = futureSnapshot),
            (this.title =
              this.dataSubject?.pipe((0, map.T)((d) => d[RouteTitleKey])) ??
              (0, of.of)(void 0)),
            (this.url = urlSubject),
            (this.params = paramsSubject),
            (this.queryParams = queryParamsSubject),
            (this.fragment = fragmentSubject),
            (this.data = dataSubject);
        }
        get routeConfig() {
          return this._futureSnapshot.routeConfig;
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            (this._paramMap ??= this.params.pipe(
              (0, map.T)((p) => convertToParamMap(p)),
            )),
            this._paramMap
          );
        }
        get queryParamMap() {
          return (
            (this._queryParamMap ??= this.queryParams.pipe(
              (0, map.T)((p) => convertToParamMap(p)),
            )),
            this._queryParamMap
          );
        }
        toString() {
          return this.snapshot
            ? this.snapshot.toString()
            : `Future(${this._futureSnapshot})`;
        }
      }
      function getInherited(
        route,
        parent,
        paramsInheritanceStrategy = "emptyOnly",
      ) {
        let inherited;
        const { routeConfig } = route;
        return (
          (inherited =
            null === parent ||
            ("always" !== paramsInheritanceStrategy &&
              "" !== routeConfig?.path &&
              (parent.component || parent.routeConfig?.loadComponent))
              ? {
                  params: { ...route.params },
                  data: { ...route.data },
                  resolve: { ...route.data, ...(route._resolvedData ?? {}) },
                }
              : {
                  params: { ...parent.params, ...route.params },
                  data: { ...parent.data, ...route.data },
                  resolve: {
                    ...route.data,
                    ...parent.data,
                    ...routeConfig?.data,
                    ...route._resolvedData,
                  },
                }),
          routeConfig &&
            hasStaticTitle(routeConfig) &&
            (inherited.resolve[RouteTitleKey] = routeConfig.title),
          inherited
        );
      }
      class ActivatedRouteSnapshot {
        get title() {
          return this.data?.[RouteTitleKey];
        }
        constructor(
          url,
          params,
          queryParams,
          fragment,
          data,
          outlet,
          component,
          routeConfig,
          resolve,
        ) {
          (this.url = url),
            (this.params = params),
            (this.queryParams = queryParams),
            (this.fragment = fragment),
            (this.data = data),
            (this.outlet = outlet),
            (this.component = component),
            (this.routeConfig = routeConfig),
            (this._resolve = resolve);
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            (this._paramMap ??= convertToParamMap(this.params)), this._paramMap
          );
        }
        get queryParamMap() {
          return (
            (this._queryParamMap ??= convertToParamMap(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return `Route(url:'${this.url.map((segment) => segment.toString()).join("/")}', path:'${this.routeConfig ? this.routeConfig.path : ""}')`;
        }
      }
      class RouterStateSnapshot extends Tree {
        constructor(url, root) {
          super(root), (this.url = url), setRouterState(this, root);
        }
        toString() {
          return serializeNode(this._root);
        }
      }
      function setRouterState(state, node) {
        (node.value._routerState = state),
          node.children.forEach((c) => setRouterState(state, c));
      }
      function serializeNode(node) {
        const c =
          node.children.length > 0
            ? ` { ${node.children.map(serializeNode).join(", ")} } `
            : "";
        return `${node.value}${c}`;
      }
      function advanceActivatedRoute(route) {
        if (route.snapshot) {
          const currentSnapshot = route.snapshot,
            nextSnapshot = route._futureSnapshot;
          (route.snapshot = nextSnapshot),
            shallowEqual(
              currentSnapshot.queryParams,
              nextSnapshot.queryParams,
            ) || route.queryParamsSubject.next(nextSnapshot.queryParams),
            currentSnapshot.fragment !== nextSnapshot.fragment &&
              route.fragmentSubject.next(nextSnapshot.fragment),
            shallowEqual(currentSnapshot.params, nextSnapshot.params) ||
              route.paramsSubject.next(nextSnapshot.params),
            (function shallowEqualArrays(a, b) {
              if (a.length !== b.length) return !1;
              for (let i = 0; i < a.length; ++i)
                if (!shallowEqual(a[i], b[i])) return !1;
              return !0;
            })(currentSnapshot.url, nextSnapshot.url) ||
              route.urlSubject.next(nextSnapshot.url),
            shallowEqual(currentSnapshot.data, nextSnapshot.data) ||
              route.dataSubject.next(nextSnapshot.data);
        } else
          (route.snapshot = route._futureSnapshot),
            route.dataSubject.next(route._futureSnapshot.data);
      }
      function equalParamsAndUrlSegments(a, b) {
        const equalUrlParams =
            shallowEqual(a.params, b.params) &&
            (function equalSegments(as, bs) {
              return (
                equalPath(as, bs) &&
                as.every((a, i) => shallowEqual(a.parameters, bs[i].parameters))
              );
            })(a.url, b.url),
          parentsMismatch = !a.parent != !b.parent;
        return (
          equalUrlParams &&
          !parentsMismatch &&
          (!a.parent || equalParamsAndUrlSegments(a.parent, b.parent))
        );
      }
      function hasStaticTitle(config) {
        return "string" == typeof config.title || null === config.title;
      }
      class RouterOutlet {
        constructor() {
          (this.activated = null),
            (this._activatedRoute = null),
            (this.name = PRIMARY_OUTLET),
            (this.activateEvents = new core.EventEmitter()),
            (this.deactivateEvents = new core.EventEmitter()),
            (this.attachEvents = new core.EventEmitter()),
            (this.detachEvents = new core.EventEmitter()),
            (this.parentContexts = (0, core.inject)(ChildrenOutletContexts)),
            (this.location = (0, core.inject)(core.ViewContainerRef)),
            (this.changeDetector = (0, core.inject)(core.ChangeDetectorRef)),
            (this.environmentInjector = (0, core.inject)(
              core.EnvironmentInjector,
            )),
            (this.inputBinder = (0, core.inject)(INPUT_BINDER, {
              optional: !0,
            })),
            (this.supportsBindingToComponentInputs = !0);
        }
        get activatedComponentRef() {
          return this.activated;
        }
        ngOnChanges(changes) {
          if (changes.name) {
            const { firstChange, previousValue } = changes.name;
            if (firstChange) return;
            this.isTrackedInParentContexts(previousValue) &&
              (this.deactivate(),
              this.parentContexts.onChildOutletDestroyed(previousValue)),
              this.initializeOutletWithName();
          }
        }
        ngOnDestroy() {
          this.isTrackedInParentContexts(this.name) &&
            this.parentContexts.onChildOutletDestroyed(this.name),
            this.inputBinder?.unsubscribeFromRouteData(this);
        }
        isTrackedInParentContexts(outletName) {
          return this.parentContexts.getContext(outletName)?.outlet === this;
        }
        ngOnInit() {
          this.initializeOutletWithName();
        }
        initializeOutletWithName() {
          if (
            (this.parentContexts.onChildOutletCreated(this.name, this),
            this.activated)
          )
            return;
          const context = this.parentContexts.getContext(this.name);
          context?.route &&
            (context.attachRef
              ? this.attach(context.attachRef, context.route)
              : this.activateWith(context.route, context.injector));
        }
        get isActivated() {
          return !!this.activated;
        }
        get component() {
          if (!this.activated)
            throw new core["ɵRuntimeError"](
              4012,
              ("undefined" == typeof ngDevMode || ngDevMode) &&
                "Outlet is not activated",
            );
          return this.activated.instance;
        }
        get activatedRoute() {
          if (!this.activated)
            throw new core["ɵRuntimeError"](
              4012,
              ("undefined" == typeof ngDevMode || ngDevMode) &&
                "Outlet is not activated",
            );
          return this._activatedRoute;
        }
        get activatedRouteData() {
          return this._activatedRoute ? this._activatedRoute.snapshot.data : {};
        }
        detach() {
          if (!this.activated)
            throw new core["ɵRuntimeError"](
              4012,
              ("undefined" == typeof ngDevMode || ngDevMode) &&
                "Outlet is not activated",
            );
          this.location.detach();
          const cmp = this.activated;
          return (
            (this.activated = null),
            (this._activatedRoute = null),
            this.detachEvents.emit(cmp.instance),
            cmp
          );
        }
        attach(ref, activatedRoute) {
          (this.activated = ref),
            (this._activatedRoute = activatedRoute),
            this.location.insert(ref.hostView),
            this.inputBinder?.bindActivatedRouteToOutletComponent(this),
            this.attachEvents.emit(ref.instance);
        }
        deactivate() {
          if (this.activated) {
            const c = this.component;
            this.activated.destroy(),
              (this.activated = null),
              (this._activatedRoute = null),
              this.deactivateEvents.emit(c);
          }
        }
        activateWith(activatedRoute, environmentInjector) {
          if (this.isActivated)
            throw new core["ɵRuntimeError"](
              4013,
              ("undefined" == typeof ngDevMode || ngDevMode) &&
                "Cannot activate an already activated outlet",
            );
          this._activatedRoute = activatedRoute;
          const location = this.location,
            component = activatedRoute.snapshot.component,
            childContexts = this.parentContexts.getOrCreateContext(
              this.name,
            ).children,
            injector = new OutletInjector(
              activatedRoute,
              childContexts,
              location.injector,
            );
          (this.activated = location.createComponent(component, {
            index: location.length,
            injector,
            environmentInjector:
              environmentInjector ?? this.environmentInjector,
          })),
            this.changeDetector.markForCheck(),
            this.inputBinder?.bindActivatedRouteToOutletComponent(this),
            this.activateEvents.emit(this.activated.instance);
        }
        static #_ = (this.ɵfac = function RouterOutlet_Factory(t) {
          return new (t || RouterOutlet)();
        });
        static #_2 = (this.ɵdir = core["ɵɵdefineDirective"]({
          type: RouterOutlet,
          selectors: [["router-outlet"]],
          inputs: { name: "name" },
          outputs: {
            activateEvents: "activate",
            deactivateEvents: "deactivate",
            attachEvents: "attach",
            detachEvents: "detach",
          },
          exportAs: ["outlet"],
          standalone: !0,
          features: [core["ɵɵNgOnChangesFeature"]],
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          RouterOutlet,
          [
            {
              type: core.Directive,
              args: [
                {
                  selector: "router-outlet",
                  exportAs: "outlet",
                  standalone: !0,
                },
              ],
            },
          ],
          null,
          {
            name: [{ type: core.Input }],
            activateEvents: [{ type: core.Output, args: ["activate"] }],
            deactivateEvents: [{ type: core.Output, args: ["deactivate"] }],
            attachEvents: [{ type: core.Output, args: ["attach"] }],
            detachEvents: [{ type: core.Output, args: ["detach"] }],
          },
        );
      class OutletInjector {
        __ngOutletInjector(parentInjector) {
          return new OutletInjector(
            this.route,
            this.childContexts,
            parentInjector,
          );
        }
        constructor(route, childContexts, parent) {
          (this.route = route),
            (this.childContexts = childContexts),
            (this.parent = parent);
        }
        get(token, notFoundValue) {
          return token === ActivatedRoute
            ? this.route
            : token === ChildrenOutletContexts
              ? this.childContexts
              : this.parent.get(token, notFoundValue);
        }
      }
      const INPUT_BINDER = new core.InjectionToken("");
      class RoutedComponentInputBinder {
        constructor() {
          this.outletDataSubscriptions = new Map();
        }
        bindActivatedRouteToOutletComponent(outlet) {
          this.unsubscribeFromRouteData(outlet),
            this.subscribeToRouteData(outlet);
        }
        unsubscribeFromRouteData(outlet) {
          this.outletDataSubscriptions.get(outlet)?.unsubscribe(),
            this.outletDataSubscriptions.delete(outlet);
        }
        subscribeToRouteData(outlet) {
          const { activatedRoute } = outlet,
            dataSubscription = (0, combineLatest.z)([
              activatedRoute.queryParams,
              activatedRoute.params,
              activatedRoute.data,
            ])
              .pipe(
                (0, switchMap.n)(
                  ([queryParams, params, data], index) => (
                    (data = { ...queryParams, ...params, ...data }),
                    0 === index ? (0, of.of)(data) : Promise.resolve(data)
                  ),
                ),
              )
              .subscribe((data) => {
                if (
                  !outlet.isActivated ||
                  !outlet.activatedComponentRef ||
                  outlet.activatedRoute !== activatedRoute ||
                  null === activatedRoute.component
                )
                  return void this.unsubscribeFromRouteData(outlet);
                const mirror = (0, core.reflectComponentType)(
                  activatedRoute.component,
                );
                if (mirror)
                  for (const { templateName } of mirror.inputs)
                    outlet.activatedComponentRef.setInput(
                      templateName,
                      data[templateName],
                    );
                else this.unsubscribeFromRouteData(outlet);
              });
          this.outletDataSubscriptions.set(outlet, dataSubscription);
        }
        static #_ = (this.ɵfac = function RoutedComponentInputBinder_Factory(
          t,
        ) {
          return new (t || RoutedComponentInputBinder)();
        });
        static #_2 = (this.ɵprov = core["ɵɵdefineInjectable"]({
          token: RoutedComponentInputBinder,
          factory: RoutedComponentInputBinder.ɵfac,
        }));
      }
      function createNode(routeReuseStrategy, curr, prevState) {
        if (
          prevState &&
          routeReuseStrategy.shouldReuseRoute(
            curr.value,
            prevState.value.snapshot,
          )
        ) {
          const value = prevState.value;
          value._futureSnapshot = curr.value;
          const children = (function createOrReuseChildren(
            routeReuseStrategy,
            curr,
            prevState,
          ) {
            return curr.children.map((child) => {
              for (const p of prevState.children)
                if (
                  routeReuseStrategy.shouldReuseRoute(
                    child.value,
                    p.value.snapshot,
                  )
                )
                  return createNode(routeReuseStrategy, child, p);
              return createNode(routeReuseStrategy, child);
            });
          })(routeReuseStrategy, curr, prevState);
          return new TreeNode(value, children);
        }
        {
          if (routeReuseStrategy.shouldAttach(curr.value)) {
            const detachedRouteHandle = routeReuseStrategy.retrieve(curr.value);
            if (null !== detachedRouteHandle) {
              const tree = detachedRouteHandle.route;
              return (
                (tree.value._futureSnapshot = curr.value),
                (tree.children = curr.children.map((c) =>
                  createNode(routeReuseStrategy, c),
                )),
                tree
              );
            }
          }
          const value = (function createActivatedRoute(c) {
              return new ActivatedRoute(
                new BehaviorSubject.t(c.url),
                new BehaviorSubject.t(c.params),
                new BehaviorSubject.t(c.queryParams),
                new BehaviorSubject.t(c.fragment),
                new BehaviorSubject.t(c.data),
                c.outlet,
                c.component,
                c,
              );
            })(curr.value),
            children = curr.children.map((c) =>
              createNode(routeReuseStrategy, c),
            );
          return new TreeNode(value, children);
        }
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          RoutedComponentInputBinder,
          [{ type: core.Injectable }],
          null,
          null,
        );
      const NAVIGATION_CANCELING_ERROR = "ngNavigationCancelingError";
      function redirectingNavigationError(urlSerializer, redirect) {
        const { redirectTo, navigationBehaviorOptions } = isUrlTree(redirect)
            ? { redirectTo: redirect, navigationBehaviorOptions: void 0 }
            : redirect,
          error = navigationCancelingError(
            ngDevMode &&
              `Redirecting to "${urlSerializer.serialize(redirectTo)}"`,
            NavigationCancellationCode.Redirect,
          );
        return (
          (error.url = redirectTo),
          (error.navigationBehaviorOptions = navigationBehaviorOptions),
          error
        );
      }
      function navigationCancelingError(message, code) {
        const error = new Error(`NavigationCancelingError: ${message || ""}`);
        return (
          (error[NAVIGATION_CANCELING_ERROR] = !0),
          (error.cancellationCode = code),
          error
        );
      }
      function isNavigationCancelingError(error) {
        return !!error && error[NAVIGATION_CANCELING_ERROR];
      }
      class ɵEmptyOutletComponent {
        static #_ = (this.ɵfac = function ɵEmptyOutletComponent_Factory(t) {
          return new (t || ɵEmptyOutletComponent)();
        });
        static #_2 = (this.ɵcmp = core["ɵɵdefineComponent"]({
          type: ɵEmptyOutletComponent,
          selectors: [["ng-component"]],
          standalone: !0,
          features: [core["ɵɵStandaloneFeature"]],
          decls: 1,
          vars: 0,
          template: function _EmptyOutletComponent_Template(rf, ctx) {
            1 & rf && core["ɵɵelement"](0, "router-outlet");
          },
          dependencies: [RouterOutlet],
          encapsulation: 2,
        }));
      }
      function validateConfig(
        config,
        parentPath = "",
        requireStandaloneComponents = !1,
      ) {
        for (let i = 0; i < config.length; i++) {
          const route = config[i];
          validateNode(
            route,
            getFullPath(parentPath, route),
            requireStandaloneComponents,
          );
        }
      }
      function assertStandalone(fullPath, component) {
        if (component && (0, core["ɵisNgModule"])(component))
          throw new core["ɵRuntimeError"](
            4014,
            `Invalid configuration of route '${fullPath}'. You are using 'loadComponent' with a module, but it must be used with standalone components. Use 'loadChildren' instead.`,
          );
        if (component && !(0, core.isStandalone)(component))
          throw new core["ɵRuntimeError"](
            4014,
            `Invalid configuration of route '${fullPath}'. The component must be standalone.`,
          );
      }
      function validateNode(route, fullPath, requireStandaloneComponents) {
        if ("undefined" == typeof ngDevMode || ngDevMode) {
          if (!route)
            throw new core["ɵRuntimeError"](
              4014,
              `\n      Invalid configuration of route '${fullPath}': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    `,
            );
          if (Array.isArray(route))
            throw new core["ɵRuntimeError"](
              4014,
              `Invalid configuration of route '${fullPath}': Array cannot be specified`,
            );
          if (
            !route.redirectTo &&
            !route.component &&
            !route.loadComponent &&
            !route.children &&
            !route.loadChildren &&
            route.outlet &&
            route.outlet !== PRIMARY_OUTLET
          )
            throw new core["ɵRuntimeError"](
              4014,
              `Invalid configuration of route '${fullPath}': a componentless route without children or loadChildren cannot have a named outlet set`,
            );
          if (route.redirectTo && route.children)
            throw new core["ɵRuntimeError"](
              4014,
              `Invalid configuration of route '${fullPath}': redirectTo and children cannot be used together`,
            );
          if (route.redirectTo && route.loadChildren)
            throw new core["ɵRuntimeError"](
              4014,
              `Invalid configuration of route '${fullPath}': redirectTo and loadChildren cannot be used together`,
            );
          if (route.children && route.loadChildren)
            throw new core["ɵRuntimeError"](
              4014,
              `Invalid configuration of route '${fullPath}': children and loadChildren cannot be used together`,
            );
          if (route.redirectTo && (route.component || route.loadComponent))
            throw new core["ɵRuntimeError"](
              4014,
              `Invalid configuration of route '${fullPath}': redirectTo and component/loadComponent cannot be used together`,
            );
          if (route.component && route.loadComponent)
            throw new core["ɵRuntimeError"](
              4014,
              `Invalid configuration of route '${fullPath}': component and loadComponent cannot be used together`,
            );
          if (route.redirectTo && route.canActivate)
            throw new core["ɵRuntimeError"](
              4014,
              `Invalid configuration of route '${fullPath}': redirectTo and canActivate cannot be used together. Redirects happen before activation so canActivate will never be executed.`,
            );
          if (route.path && route.matcher)
            throw new core["ɵRuntimeError"](
              4014,
              `Invalid configuration of route '${fullPath}': path and matcher cannot be used together`,
            );
          if (
            !(
              void 0 !== route.redirectTo ||
              route.component ||
              route.loadComponent ||
              route.children ||
              route.loadChildren
            )
          )
            throw new core["ɵRuntimeError"](
              4014,
              `Invalid configuration of route '${fullPath}'. One of the following must be provided: component, loadComponent, redirectTo, children or loadChildren`,
            );
          if (void 0 === route.path && void 0 === route.matcher)
            throw new core["ɵRuntimeError"](
              4014,
              `Invalid configuration of route '${fullPath}': routes must have either a path or a matcher specified`,
            );
          if ("string" == typeof route.path && "/" === route.path.charAt(0))
            throw new core["ɵRuntimeError"](
              4014,
              `Invalid configuration of route '${fullPath}': path cannot start with a slash`,
            );
          if (
            "" === route.path &&
            void 0 !== route.redirectTo &&
            void 0 === route.pathMatch
          ) {
            const exp =
              "The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.";
            throw new core["ɵRuntimeError"](
              4014,
              `Invalid configuration of route '{path: "${fullPath}", redirectTo: "${route.redirectTo}"}': please provide 'pathMatch'. ${exp}`,
            );
          }
          requireStandaloneComponents &&
            assertStandalone(fullPath, route.component);
        }
        route.children &&
          validateConfig(route.children, fullPath, requireStandaloneComponents);
      }
      function getFullPath(parentPath, currentRoute) {
        return currentRoute
          ? parentPath || currentRoute.path
            ? parentPath && !currentRoute.path
              ? `${parentPath}/`
              : !parentPath && currentRoute.path
                ? currentRoute.path
                : `${parentPath}/${currentRoute.path}`
            : ""
          : parentPath;
      }
      function standardizeConfig(r) {
        const children = r.children && r.children.map(standardizeConfig),
          c = children ? { ...r, children } : { ...r };
        return (
          c.component ||
            c.loadComponent ||
            (!children && !c.loadChildren) ||
            !c.outlet ||
            c.outlet === PRIMARY_OUTLET ||
            (c.component = ɵEmptyOutletComponent),
          c
        );
      }
      function getOutlet(route) {
        return route.outlet || PRIMARY_OUTLET;
      }
      function getClosestRouteInjector(snapshot) {
        if (!snapshot) return null;
        if (snapshot.routeConfig?._injector)
          return snapshot.routeConfig._injector;
        for (let s = snapshot.parent; s; s = s.parent) {
          const route = s.routeConfig;
          if (route?._loadedInjector) return route._loadedInjector;
          if (route?._injector) return route._injector;
        }
        return null;
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          ɵEmptyOutletComponent,
          [
            {
              type: core.Component,
              args: [
                {
                  template: "<router-outlet></router-outlet>",
                  imports: [RouterOutlet],
                  standalone: !0,
                },
              ],
            },
          ],
          null,
          null,
        );
      let warnedAboutUnsupportedInputBinding = !1;
      class ActivateRoutes {
        constructor(
          routeReuseStrategy,
          futureState,
          currState,
          forwardEvent,
          inputBindingEnabled,
        ) {
          (this.routeReuseStrategy = routeReuseStrategy),
            (this.futureState = futureState),
            (this.currState = currState),
            (this.forwardEvent = forwardEvent),
            (this.inputBindingEnabled = inputBindingEnabled);
        }
        activate(parentContexts) {
          const futureRoot = this.futureState._root,
            currRoot = this.currState ? this.currState._root : null;
          this.deactivateChildRoutes(futureRoot, currRoot, parentContexts),
            advanceActivatedRoute(this.futureState.root),
            this.activateChildRoutes(futureRoot, currRoot, parentContexts);
        }
        deactivateChildRoutes(futureNode, currNode, contexts) {
          const children = nodeChildrenAsMap(currNode);
          futureNode.children.forEach((futureChild) => {
            const childOutletName = futureChild.value.outlet;
            this.deactivateRoutes(
              futureChild,
              children[childOutletName],
              contexts,
            ),
              delete children[childOutletName];
          }),
            Object.values(children).forEach((v) => {
              this.deactivateRouteAndItsChildren(v, contexts);
            });
        }
        deactivateRoutes(futureNode, currNode, parentContext) {
          const future = futureNode.value,
            curr = currNode ? currNode.value : null;
          if (future === curr)
            if (future.component) {
              const context = parentContext.getContext(future.outlet);
              context &&
                this.deactivateChildRoutes(
                  futureNode,
                  currNode,
                  context.children,
                );
            } else
              this.deactivateChildRoutes(futureNode, currNode, parentContext);
          else
            curr && this.deactivateRouteAndItsChildren(currNode, parentContext);
        }
        deactivateRouteAndItsChildren(route, parentContexts) {
          route.value.component &&
          this.routeReuseStrategy.shouldDetach(route.value.snapshot)
            ? this.detachAndStoreRouteSubtree(route, parentContexts)
            : this.deactivateRouteAndOutlet(route, parentContexts);
        }
        detachAndStoreRouteSubtree(route, parentContexts) {
          const context = parentContexts.getContext(route.value.outlet),
            contexts =
              context && route.value.component
                ? context.children
                : parentContexts,
            children = nodeChildrenAsMap(route);
          for (const treeNode of Object.values(children))
            this.deactivateRouteAndItsChildren(treeNode, contexts);
          if (context && context.outlet) {
            const componentRef = context.outlet.detach(),
              contexts = context.children.onOutletDeactivated();
            this.routeReuseStrategy.store(route.value.snapshot, {
              componentRef,
              route,
              contexts,
            });
          }
        }
        deactivateRouteAndOutlet(route, parentContexts) {
          const context = parentContexts.getContext(route.value.outlet),
            contexts =
              context && route.value.component
                ? context.children
                : parentContexts,
            children = nodeChildrenAsMap(route);
          for (const treeNode of Object.values(children))
            this.deactivateRouteAndItsChildren(treeNode, contexts);
          context &&
            (context.outlet &&
              (context.outlet.deactivate(),
              context.children.onOutletDeactivated()),
            (context.attachRef = null),
            (context.route = null));
        }
        activateChildRoutes(futureNode, currNode, contexts) {
          const children = nodeChildrenAsMap(currNode);
          futureNode.children.forEach((c) => {
            this.activateRoutes(c, children[c.value.outlet], contexts),
              this.forwardEvent(new ActivationEnd(c.value.snapshot));
          }),
            futureNode.children.length &&
              this.forwardEvent(
                new ChildActivationEnd(futureNode.value.snapshot),
              );
        }
        activateRoutes(futureNode, currNode, parentContexts) {
          const future = futureNode.value,
            curr = currNode ? currNode.value : null;
          if ((advanceActivatedRoute(future), future === curr))
            if (future.component) {
              const context = parentContexts.getOrCreateContext(future.outlet);
              this.activateChildRoutes(futureNode, currNode, context.children);
            } else
              this.activateChildRoutes(futureNode, currNode, parentContexts);
          else if (future.component) {
            const context = parentContexts.getOrCreateContext(future.outlet);
            if (this.routeReuseStrategy.shouldAttach(future.snapshot)) {
              const stored = this.routeReuseStrategy.retrieve(future.snapshot);
              this.routeReuseStrategy.store(future.snapshot, null),
                context.children.onOutletReAttached(stored.contexts),
                (context.attachRef = stored.componentRef),
                (context.route = stored.route.value),
                context.outlet &&
                  context.outlet.attach(
                    stored.componentRef,
                    stored.route.value,
                  ),
                advanceActivatedRoute(stored.route.value),
                this.activateChildRoutes(futureNode, null, context.children);
            } else {
              const injector = getClosestRouteInjector(future.snapshot);
              (context.attachRef = null),
                (context.route = future),
                (context.injector = injector),
                context.outlet &&
                  context.outlet.activateWith(future, context.injector),
                this.activateChildRoutes(futureNode, null, context.children);
            }
          } else this.activateChildRoutes(futureNode, null, parentContexts);
          if ("undefined" == typeof ngDevMode || ngDevMode) {
            const outlet = parentContexts.getOrCreateContext(
              future.outlet,
            ).outlet;
            outlet &&
              this.inputBindingEnabled &&
              !outlet.supportsBindingToComponentInputs &&
              !warnedAboutUnsupportedInputBinding &&
              (console.warn(
                "'withComponentInputBinding' feature is enabled but this application is using an outlet that may not support binding to component inputs.",
              ),
              (warnedAboutUnsupportedInputBinding = !0));
          }
        }
      }
      class CanActivate {
        constructor(path) {
          (this.path = path), (this.route = this.path[this.path.length - 1]);
        }
      }
      class CanDeactivate {
        constructor(component, route) {
          (this.component = component), (this.route = route);
        }
      }
      function getAllRouteGuards(future, curr, parentContexts) {
        const futureRoot = future._root;
        return getChildRouteGuards(
          futureRoot,
          curr ? curr._root : null,
          parentContexts,
          [futureRoot.value],
        );
      }
      function getTokenOrFunctionIdentity(tokenOrFunction, injector) {
        const NOT_FOUND = Symbol(),
          result = injector.get(tokenOrFunction, NOT_FOUND);
        return result === NOT_FOUND
          ? "function" != typeof tokenOrFunction ||
            (0, core["ɵisInjectable"])(tokenOrFunction)
            ? injector.get(tokenOrFunction)
            : tokenOrFunction
          : result;
      }
      function getChildRouteGuards(
        futureNode,
        currNode,
        contexts,
        futurePath,
        checks = { canDeactivateChecks: [], canActivateChecks: [] },
      ) {
        const prevChildren = nodeChildrenAsMap(currNode);
        return (
          futureNode.children.forEach((c) => {
            !(function getRouteGuards(
              futureNode,
              currNode,
              parentContexts,
              futurePath,
              checks = { canDeactivateChecks: [], canActivateChecks: [] },
            ) {
              const future = futureNode.value,
                curr = currNode ? currNode.value : null,
                context = parentContexts
                  ? parentContexts.getContext(futureNode.value.outlet)
                  : null;
              if (curr && future.routeConfig === curr.routeConfig) {
                const shouldRun = (function shouldRunGuardsAndResolvers(
                  curr,
                  future,
                  mode,
                ) {
                  if ("function" == typeof mode) return mode(curr, future);
                  switch (mode) {
                    case "pathParamsChange":
                      return !equalPath(curr.url, future.url);
                    case "pathParamsOrQueryParamsChange":
                      return (
                        !equalPath(curr.url, future.url) ||
                        !shallowEqual(curr.queryParams, future.queryParams)
                      );
                    case "always":
                      return !0;
                    case "paramsOrQueryParamsChange":
                      return (
                        !equalParamsAndUrlSegments(curr, future) ||
                        !shallowEqual(curr.queryParams, future.queryParams)
                      );
                    default:
                      return !equalParamsAndUrlSegments(curr, future);
                  }
                })(curr, future, future.routeConfig.runGuardsAndResolvers);
                shouldRun
                  ? checks.canActivateChecks.push(new CanActivate(futurePath))
                  : ((future.data = curr.data),
                    (future._resolvedData = curr._resolvedData)),
                  future.component
                    ? getChildRouteGuards(
                        futureNode,
                        currNode,
                        context ? context.children : null,
                        futurePath,
                        checks,
                      )
                    : getChildRouteGuards(
                        futureNode,
                        currNode,
                        parentContexts,
                        futurePath,
                        checks,
                      ),
                  shouldRun &&
                    context &&
                    context.outlet &&
                    context.outlet.isActivated &&
                    checks.canDeactivateChecks.push(
                      new CanDeactivate(context.outlet.component, curr),
                    );
              } else
                curr &&
                  deactivateRouteAndItsChildren(currNode, context, checks),
                  checks.canActivateChecks.push(new CanActivate(futurePath)),
                  future.component
                    ? getChildRouteGuards(
                        futureNode,
                        null,
                        context ? context.children : null,
                        futurePath,
                        checks,
                      )
                    : getChildRouteGuards(
                        futureNode,
                        null,
                        parentContexts,
                        futurePath,
                        checks,
                      );
              return checks;
            })(
              c,
              prevChildren[c.value.outlet],
              contexts,
              futurePath.concat([c.value]),
              checks,
            ),
              delete prevChildren[c.value.outlet];
          }),
          Object.entries(prevChildren).forEach(([k, v]) =>
            deactivateRouteAndItsChildren(v, contexts.getContext(k), checks),
          ),
          checks
        );
      }
      function deactivateRouteAndItsChildren(route, context, checks) {
        const children = nodeChildrenAsMap(route),
          r = route.value;
        Object.entries(children).forEach(([childName, node]) => {
          r.component
            ? deactivateRouteAndItsChildren(
                node,
                context ? context.children.getContext(childName) : null,
                checks,
              )
            : deactivateRouteAndItsChildren(node, context, checks);
        }),
          r.component && context && context.outlet && context.outlet.isActivated
            ? checks.canDeactivateChecks.push(
                new CanDeactivate(context.outlet.component, r),
              )
            : checks.canDeactivateChecks.push(new CanDeactivate(null, r));
      }
      function isFunction(v) {
        return "function" == typeof v;
      }
      function isEmptyError(e) {
        return e instanceof EmptyError.G || "EmptyError" === e?.name;
      }
      const INITIAL_VALUE = Symbol("INITIAL_VALUE");
      function prioritizedGuardValue() {
        return (0, switchMap.n)((obs) =>
          (0, combineLatest.z)(
            obs.map((o) =>
              o.pipe((0, take.s)(1), (0, startWith.Z)(INITIAL_VALUE)),
            ),
          ).pipe(
            (0, map.T)((results) => {
              for (const result of results)
                if (!0 !== result) {
                  if (result === INITIAL_VALUE) return INITIAL_VALUE;
                  if (!1 === result || result instanceof UrlTree) return result;
                }
              return !0;
            }),
            (0, filter.p)((item) => item !== INITIAL_VALUE),
            (0, take.s)(1),
          ),
        );
      }
      function checkGuards(injector, forwardEvent) {
        return (0, mergeMap.Z)((t) => {
          const {
            targetSnapshot,
            currentSnapshot,
            guards: { canActivateChecks, canDeactivateChecks },
          } = t;
          return 0 === canDeactivateChecks.length &&
            0 === canActivateChecks.length
            ? (0, of.of)({ ...t, guardsResult: !0 })
            : (function runCanDeactivateChecks(
                checks,
                futureRSS,
                currRSS,
                injector,
              ) {
                return (0, from.H)(checks).pipe(
                  (0, mergeMap.Z)((check) =>
                    (function runCanDeactivate(
                      component,
                      currARS,
                      currRSS,
                      futureRSS,
                      injector,
                    ) {
                      const canDeactivate =
                        currARS && currARS.routeConfig
                          ? currARS.routeConfig.canDeactivate
                          : null;
                      if (!canDeactivate || 0 === canDeactivate.length)
                        return (0, of.of)(!0);
                      const canDeactivateObservables = canDeactivate.map(
                        (c) => {
                          const closestInjector =
                              getClosestRouteInjector(currARS) ?? injector,
                            guard = getTokenOrFunctionIdentity(
                              c,
                              closestInjector,
                            );
                          return wrapIntoObservable(
                            (function isCanDeactivate(guard) {
                              return guard && isFunction(guard.canDeactivate);
                            })(guard)
                              ? guard.canDeactivate(
                                  component,
                                  currARS,
                                  currRSS,
                                  futureRSS,
                                )
                              : (0, core.runInInjectionContext)(
                                  closestInjector,
                                  () =>
                                    guard(
                                      component,
                                      currARS,
                                      currRSS,
                                      futureRSS,
                                    ),
                                ),
                          ).pipe((0, first.$)());
                        },
                      );
                      return (0, of.of)(canDeactivateObservables).pipe(
                        prioritizedGuardValue(),
                      );
                    })(
                      check.component,
                      check.route,
                      currRSS,
                      futureRSS,
                      injector,
                    ),
                  ),
                  (0, first.$)((result) => !0 !== result, !0),
                );
              })(
                canDeactivateChecks,
                targetSnapshot,
                currentSnapshot,
                injector,
              ).pipe(
                (0, mergeMap.Z)((canDeactivate) =>
                  canDeactivate &&
                  (function isBoolean(v) {
                    return "boolean" == typeof v;
                  })(canDeactivate)
                    ? (function runCanActivateChecks(
                        futureSnapshot,
                        checks,
                        injector,
                        forwardEvent,
                      ) {
                        return (0, from.H)(checks).pipe(
                          (0, concatMap.H)((check) =>
                            (0, concat.x)(
                              (function fireChildActivationStart(
                                snapshot,
                                forwardEvent,
                              ) {
                                null !== snapshot &&
                                  forwardEvent &&
                                  forwardEvent(
                                    new ChildActivationStart(snapshot),
                                  );
                                return (0, of.of)(!0);
                              })(check.route.parent, forwardEvent),
                              (function fireActivationStart(
                                snapshot,
                                forwardEvent,
                              ) {
                                null !== snapshot &&
                                  forwardEvent &&
                                  forwardEvent(new ActivationStart(snapshot));
                                return (0, of.of)(!0);
                              })(check.route, forwardEvent),
                              (function runCanActivateChild(
                                futureRSS,
                                path,
                                injector,
                              ) {
                                const futureARS = path[path.length - 1],
                                  canActivateChildGuardsMapped = path
                                    .slice(0, path.length - 1)
                                    .reverse()
                                    .map((p) =>
                                      (function getCanActivateChild(p) {
                                        const canActivateChild = p.routeConfig
                                          ? p.routeConfig.canActivateChild
                                          : null;
                                        return canActivateChild &&
                                          0 !== canActivateChild.length
                                          ? {
                                              node: p,
                                              guards: canActivateChild,
                                            }
                                          : null;
                                      })(p),
                                    )
                                    .filter((_) => null !== _)
                                    .map((d) =>
                                      (0, defer.v)(() => {
                                        const guardsMapped = d.guards.map(
                                          (canActivateChild) => {
                                            const closestInjector =
                                                getClosestRouteInjector(
                                                  d.node,
                                                ) ?? injector,
                                              guard =
                                                getTokenOrFunctionIdentity(
                                                  canActivateChild,
                                                  closestInjector,
                                                );
                                            return wrapIntoObservable(
                                              (function isCanActivateChild(
                                                guard,
                                              ) {
                                                return (
                                                  guard &&
                                                  isFunction(
                                                    guard.canActivateChild,
                                                  )
                                                );
                                              })(guard)
                                                ? guard.canActivateChild(
                                                    futureARS,
                                                    futureRSS,
                                                  )
                                                : (0,
                                                  core.runInInjectionContext)(
                                                    closestInjector,
                                                    () =>
                                                      guard(
                                                        futureARS,
                                                        futureRSS,
                                                      ),
                                                  ),
                                            ).pipe((0, first.$)());
                                          },
                                        );
                                        return (0, of.of)(guardsMapped).pipe(
                                          prioritizedGuardValue(),
                                        );
                                      }),
                                    );
                                return (0, of.of)(
                                  canActivateChildGuardsMapped,
                                ).pipe(prioritizedGuardValue());
                              })(futureSnapshot, check.path, injector),
                              (function runCanActivate(
                                futureRSS,
                                futureARS,
                                injector,
                              ) {
                                const canActivate = futureARS.routeConfig
                                  ? futureARS.routeConfig.canActivate
                                  : null;
                                if (!canActivate || 0 === canActivate.length)
                                  return (0, of.of)(!0);
                                const canActivateObservables = canActivate.map(
                                  (canActivate) =>
                                    (0, defer.v)(() => {
                                      const closestInjector =
                                          getClosestRouteInjector(futureARS) ??
                                          injector,
                                        guard = getTokenOrFunctionIdentity(
                                          canActivate,
                                          closestInjector,
                                        );
                                      return wrapIntoObservable(
                                        (function isCanActivate(guard) {
                                          return (
                                            guard &&
                                            isFunction(guard.canActivate)
                                          );
                                        })(guard)
                                          ? guard.canActivate(
                                              futureARS,
                                              futureRSS,
                                            )
                                          : (0, core.runInInjectionContext)(
                                              closestInjector,
                                              () => guard(futureARS, futureRSS),
                                            ),
                                      ).pipe((0, first.$)());
                                    }),
                                );
                                return (0, of.of)(canActivateObservables).pipe(
                                  prioritizedGuardValue(),
                                );
                              })(futureSnapshot, check.route, injector),
                            ),
                          ),
                          (0, first.$)((result) => !0 !== result, !0),
                        );
                      })(
                        targetSnapshot,
                        canActivateChecks,
                        injector,
                        forwardEvent,
                      )
                    : (0, of.of)(canDeactivate),
                ),
                (0, map.T)((guardsResult) => ({ ...t, guardsResult })),
              );
        });
      }
      function runCanLoadGuards(injector, route, segments, urlSerializer) {
        const canLoad = route.canLoad;
        if (void 0 === canLoad || 0 === canLoad.length) return (0, of.of)(!0);
        const canLoadObservables = canLoad.map((injectionToken) => {
          const guard = getTokenOrFunctionIdentity(injectionToken, injector);
          return wrapIntoObservable(
            (function isCanLoad(guard) {
              return guard && isFunction(guard.canLoad);
            })(guard)
              ? guard.canLoad(route, segments)
              : (0, core.runInInjectionContext)(injector, () =>
                  guard(route, segments),
                ),
          );
        });
        return (0, of.of)(canLoadObservables).pipe(
          prioritizedGuardValue(),
          redirectIfUrlTree(urlSerializer),
        );
      }
      function redirectIfUrlTree(urlSerializer) {
        return (0, pipe.F)(
          (0, tap.M)((result) => {
            if (isUrlTree(result))
              throw redirectingNavigationError(urlSerializer, result);
          }),
          (0, map.T)((result) => !0 === result),
        );
      }
      function runCanMatchGuards(injector, route, segments, urlSerializer) {
        const canMatch = route.canMatch;
        if (!canMatch || 0 === canMatch.length) return (0, of.of)(!0);
        const canMatchObservables = canMatch.map((injectionToken) => {
          const guard = getTokenOrFunctionIdentity(injectionToken, injector);
          return wrapIntoObservable(
            (function isCanMatch(guard) {
              return guard && isFunction(guard.canMatch);
            })(guard)
              ? guard.canMatch(route, segments)
              : (0, core.runInInjectionContext)(injector, () =>
                  guard(route, segments),
                ),
          );
        });
        return (0, of.of)(canMatchObservables).pipe(
          prioritizedGuardValue(),
          redirectIfUrlTree(urlSerializer),
        );
      }
      class NoMatch {
        constructor(segmentGroup) {
          this.segmentGroup = segmentGroup || null;
        }
      }
      class AbsoluteRedirect extends Error {
        constructor(urlTree) {
          super(), (this.urlTree = urlTree);
        }
      }
      function noMatch$1(segmentGroup) {
        return (0, observable_throwError.$)(new NoMatch(segmentGroup));
      }
      class ApplyRedirects {
        constructor(urlSerializer, urlTree) {
          (this.urlSerializer = urlSerializer), (this.urlTree = urlTree);
        }
        lineralizeSegments(route, urlTree) {
          let res = [],
            c = urlTree.root;
          for (;;) {
            if (((res = res.concat(c.segments)), 0 === c.numberOfChildren))
              return (0, of.of)(res);
            if (c.numberOfChildren > 1 || !c.children[PRIMARY_OUTLET])
              return (
                (redirectTo = route.redirectTo),
                (0, observable_throwError.$)(
                  new core["ɵRuntimeError"](
                    4e3,
                    ("undefined" == typeof ngDevMode || ngDevMode) &&
                      `Only absolute redirects can have named outlets. redirectTo: '${redirectTo}'`,
                  ),
                )
              );
            c = c.children[PRIMARY_OUTLET];
          }
          var redirectTo;
        }
        applyRedirectCommands(segments, redirectTo, posParams) {
          const newTree = this.applyRedirectCreateUrlTree(
            redirectTo,
            this.urlSerializer.parse(redirectTo),
            segments,
            posParams,
          );
          if (redirectTo.startsWith("/")) throw new AbsoluteRedirect(newTree);
          return newTree;
        }
        applyRedirectCreateUrlTree(redirectTo, urlTree, segments, posParams) {
          const newRoot = this.createSegmentGroup(
            redirectTo,
            urlTree.root,
            segments,
            posParams,
          );
          return new UrlTree(
            newRoot,
            this.createQueryParams(
              urlTree.queryParams,
              this.urlTree.queryParams,
            ),
            urlTree.fragment,
          );
        }
        createQueryParams(redirectToParams, actualParams) {
          const res = {};
          return (
            Object.entries(redirectToParams).forEach(([k, v]) => {
              if ("string" == typeof v && v.startsWith(":")) {
                const sourceName = v.substring(1);
                res[k] = actualParams[sourceName];
              } else res[k] = v;
            }),
            res
          );
        }
        createSegmentGroup(redirectTo, group, segments, posParams) {
          const updatedSegments = this.createSegments(
            redirectTo,
            group.segments,
            segments,
            posParams,
          );
          let children = {};
          return (
            Object.entries(group.children).forEach(([name, child]) => {
              children[name] = this.createSegmentGroup(
                redirectTo,
                child,
                segments,
                posParams,
              );
            }),
            new UrlSegmentGroup(updatedSegments, children)
          );
        }
        createSegments(
          redirectTo,
          redirectToSegments,
          actualSegments,
          posParams,
        ) {
          return redirectToSegments.map((s) =>
            s.path.startsWith(":")
              ? this.findPosParam(redirectTo, s, posParams)
              : this.findOrReturn(s, actualSegments),
          );
        }
        findPosParam(redirectTo, redirectToUrlSegment, posParams) {
          const pos = posParams[redirectToUrlSegment.path.substring(1)];
          if (!pos)
            throw new core["ɵRuntimeError"](
              4001,
              ("undefined" == typeof ngDevMode || ngDevMode) &&
                `Cannot redirect to '${redirectTo}'. Cannot find '${redirectToUrlSegment.path}'.`,
            );
          return pos;
        }
        findOrReturn(redirectToUrlSegment, actualSegments) {
          let idx = 0;
          for (const s of actualSegments) {
            if (s.path === redirectToUrlSegment.path)
              return actualSegments.splice(idx), s;
            idx++;
          }
          return redirectToUrlSegment;
        }
      }
      const noMatch = {
        matched: !1,
        consumedSegments: [],
        remainingSegments: [],
        parameters: {},
        positionalParamSegments: {},
      };
      function matchWithChecks(
        segmentGroup,
        route,
        segments,
        injector,
        urlSerializer,
      ) {
        const result = match(segmentGroup, route, segments);
        return result.matched
          ? ((injector = (function getOrCreateRouteInjectorIfNeeded(
              route,
              currentInjector,
            ) {
              return (
                route.providers &&
                  !route._injector &&
                  (route._injector = (0, core.createEnvironmentInjector)(
                    route.providers,
                    currentInjector,
                    `Route: ${route.path}`,
                  )),
                route._injector ?? currentInjector
              );
            })(route, injector)),
            runCanMatchGuards(injector, route, segments, urlSerializer).pipe(
              (0, map.T)((v) => (!0 === v ? result : { ...noMatch })),
            ))
          : (0, of.of)(result);
      }
      function match(segmentGroup, route, segments) {
        if ("**" === route.path)
          return (function createWildcardMatchResult(segments) {
            return {
              matched: !0,
              parameters:
                segments.length > 0 ? router_last(segments).parameters : {},
              consumedSegments: segments,
              remainingSegments: [],
              positionalParamSegments: {},
            };
          })(segments);
        if ("" === route.path)
          return "full" === route.pathMatch &&
            (segmentGroup.hasChildren() || segments.length > 0)
            ? { ...noMatch }
            : {
                matched: !0,
                consumedSegments: [],
                remainingSegments: segments,
                parameters: {},
                positionalParamSegments: {},
              };
        const res = (route.matcher || defaultUrlMatcher)(
          segments,
          segmentGroup,
          route,
        );
        if (!res) return { ...noMatch };
        const posParams = {};
        Object.entries(res.posParams ?? {}).forEach(([k, v]) => {
          posParams[k] = v.path;
        });
        const parameters =
          res.consumed.length > 0
            ? {
                ...posParams,
                ...res.consumed[res.consumed.length - 1].parameters,
              }
            : posParams;
        return {
          matched: !0,
          consumedSegments: res.consumed,
          remainingSegments: segments.slice(res.consumed.length),
          parameters,
          positionalParamSegments: res.posParams ?? {},
        };
      }
      function split(segmentGroup, consumedSegments, slicedSegments, config) {
        if (
          slicedSegments.length > 0 &&
          (function containsEmptyPathMatchesWithNamedOutlets(
            segmentGroup,
            slicedSegments,
            routes,
          ) {
            return routes.some(
              (r) =>
                emptyPathMatch(segmentGroup, slicedSegments, r) &&
                getOutlet(r) !== PRIMARY_OUTLET,
            );
          })(segmentGroup, slicedSegments, config)
        ) {
          return {
            segmentGroup: new UrlSegmentGroup(
              consumedSegments,
              (function createChildrenForEmptyPaths(routes, primarySegment) {
                const res = {};
                res[PRIMARY_OUTLET] = primarySegment;
                for (const r of routes)
                  if ("" === r.path && getOutlet(r) !== PRIMARY_OUTLET) {
                    const s = new UrlSegmentGroup([], {});
                    res[getOutlet(r)] = s;
                  }
                return res;
              })(
                config,
                new UrlSegmentGroup(slicedSegments, segmentGroup.children),
              ),
            ),
            slicedSegments: [],
          };
        }
        if (
          0 === slicedSegments.length &&
          (function containsEmptyPathMatches(
            segmentGroup,
            slicedSegments,
            routes,
          ) {
            return routes.some((r) =>
              emptyPathMatch(segmentGroup, slicedSegments, r),
            );
          })(segmentGroup, slicedSegments, config)
        ) {
          const s = new UrlSegmentGroup(
            segmentGroup.segments,
            (function addEmptyPathsToChildrenIfNeeded(
              segmentGroup,
              slicedSegments,
              routes,
              children,
            ) {
              const res = {};
              for (const r of routes)
                if (
                  emptyPathMatch(segmentGroup, slicedSegments, r) &&
                  !children[getOutlet(r)]
                ) {
                  const s = new UrlSegmentGroup([], {});
                  res[getOutlet(r)] = s;
                }
              return { ...children, ...res };
            })(segmentGroup, slicedSegments, config, segmentGroup.children),
          );
          return { segmentGroup: s, slicedSegments };
        }
        return {
          segmentGroup: new UrlSegmentGroup(
            segmentGroup.segments,
            segmentGroup.children,
          ),
          slicedSegments,
        };
      }
      function emptyPathMatch(segmentGroup, slicedSegments, r) {
        return (
          (!(segmentGroup.hasChildren() || slicedSegments.length > 0) ||
            "full" !== r.pathMatch) &&
          "" === r.path
        );
      }
      class NoLeftoversInUrl {}
      class Recognizer {
        constructor(
          injector,
          configLoader,
          rootComponentType,
          config,
          urlTree,
          paramsInheritanceStrategy,
          urlSerializer,
        ) {
          (this.injector = injector),
            (this.configLoader = configLoader),
            (this.rootComponentType = rootComponentType),
            (this.config = config),
            (this.urlTree = urlTree),
            (this.paramsInheritanceStrategy = paramsInheritanceStrategy),
            (this.urlSerializer = urlSerializer),
            (this.applyRedirects = new ApplyRedirects(
              this.urlSerializer,
              this.urlTree,
            )),
            (this.absoluteRedirectCount = 0),
            (this.allowRedirects = !0);
        }
        noMatchError(e) {
          return new core["ɵRuntimeError"](
            4002,
            "undefined" == typeof ngDevMode || ngDevMode
              ? `Cannot match any routes. URL Segment: '${e.segmentGroup}'`
              : `'${e.segmentGroup}'`,
          );
        }
        recognize() {
          const rootSegmentGroup = split(
            this.urlTree.root,
            [],
            [],
            this.config,
          ).segmentGroup;
          return this.match(rootSegmentGroup).pipe(
            (0, map.T)((children) => {
              const root = new ActivatedRouteSnapshot(
                  [],
                  Object.freeze({}),
                  Object.freeze({ ...this.urlTree.queryParams }),
                  this.urlTree.fragment,
                  {},
                  PRIMARY_OUTLET,
                  this.rootComponentType,
                  null,
                  {},
                ),
                rootNode = new TreeNode(root, children),
                routeState = new RouterStateSnapshot("", rootNode),
                tree = (function createUrlTreeFromSnapshot(
                  relativeTo,
                  commands,
                  queryParams = null,
                  fragment = null,
                ) {
                  return createUrlTreeFromSegmentGroup(
                    createSegmentGroupFromRoute(relativeTo),
                    commands,
                    queryParams,
                    fragment,
                  );
                })(root, [], this.urlTree.queryParams, this.urlTree.fragment);
              return (
                (tree.queryParams = this.urlTree.queryParams),
                (routeState.url = this.urlSerializer.serialize(tree)),
                this.inheritParamsAndData(routeState._root, null),
                { state: routeState, tree }
              );
            }),
          );
        }
        match(rootSegmentGroup) {
          return this.processSegmentGroup(
            this.injector,
            this.config,
            rootSegmentGroup,
            PRIMARY_OUTLET,
          ).pipe(
            (0, catchError.W)((e) => {
              if (e instanceof AbsoluteRedirect)
                return (this.urlTree = e.urlTree), this.match(e.urlTree.root);
              if (e instanceof NoMatch) throw this.noMatchError(e);
              throw e;
            }),
          );
        }
        inheritParamsAndData(routeNode, parent) {
          const route = routeNode.value,
            i = getInherited(route, parent, this.paramsInheritanceStrategy);
          (route.params = Object.freeze(i.params)),
            (route.data = Object.freeze(i.data)),
            routeNode.children.forEach((n) =>
              this.inheritParamsAndData(n, route),
            );
        }
        processSegmentGroup(injector, config, segmentGroup, outlet) {
          return 0 === segmentGroup.segments.length &&
            segmentGroup.hasChildren()
            ? this.processChildren(injector, config, segmentGroup)
            : this.processSegment(
                injector,
                config,
                segmentGroup,
                segmentGroup.segments,
                outlet,
                !0,
              ).pipe(
                (0, map.T)((child) =>
                  child instanceof TreeNode ? [child] : [],
                ),
              );
        }
        processChildren(injector, config, segmentGroup) {
          const childOutlets = [];
          for (const child of Object.keys(segmentGroup.children))
            "primary" === child
              ? childOutlets.unshift(child)
              : childOutlets.push(child);
          return (0, from.H)(childOutlets).pipe(
            (0, concatMap.H)((childOutlet) => {
              const child = segmentGroup.children[childOutlet],
                sortedConfig = (function sortByMatchingOutlets(
                  routes,
                  outletName,
                ) {
                  const sortedConfig = routes.filter(
                    (r) => getOutlet(r) === outletName,
                  );
                  return (
                    sortedConfig.push(
                      ...routes.filter((r) => getOutlet(r) !== outletName),
                    ),
                    sortedConfig
                  );
                })(config, childOutlet);
              return this.processSegmentGroup(
                injector,
                sortedConfig,
                child,
                childOutlet,
              );
            }),
            scan(
              (children, outletChildren) => (
                children.push(...outletChildren), children
              ),
            ),
            (0, defaultIfEmpty.U)(null),
            (function last(predicate, defaultValue) {
              var hasDefaultValue = arguments.length >= 2;
              return function (source) {
                return source.pipe(
                  predicate
                    ? (0, filter.p)(function (v, i) {
                        return predicate(v, i, source);
                      })
                    : identity.D,
                  takeLast(1),
                  hasDefaultValue
                    ? (0, defaultIfEmpty.U)(defaultValue)
                    : (0, throwIfEmpty.v)(function () {
                        return new EmptyError.G();
                      }),
                );
              };
            })(),
            (0, mergeMap.Z)((children) => {
              if (null === children) return noMatch$1(segmentGroup);
              const mergedChildren = mergeEmptyPathMatches(children);
              return (
                ("undefined" == typeof ngDevMode || ngDevMode) &&
                  (function checkOutletNameUniqueness(nodes) {
                    const names = {};
                    nodes.forEach((n) => {
                      const routeWithSameOutletName = names[n.value.outlet];
                      if (routeWithSameOutletName) {
                        const p = routeWithSameOutletName.url
                            .map((s) => s.toString())
                            .join("/"),
                          c = n.value.url.map((s) => s.toString()).join("/");
                        throw new core["ɵRuntimeError"](
                          4006,
                          ("undefined" == typeof ngDevMode || ngDevMode) &&
                            `Two segments cannot have the same outlet name: '${p}' and '${c}'.`,
                        );
                      }
                      names[n.value.outlet] = n.value;
                    });
                  })(mergedChildren),
                (function sortActivatedRouteSnapshots(nodes) {
                  nodes.sort((a, b) =>
                    a.value.outlet === PRIMARY_OUTLET
                      ? -1
                      : b.value.outlet === PRIMARY_OUTLET
                        ? 1
                        : a.value.outlet.localeCompare(b.value.outlet),
                  );
                })(mergedChildren),
                (0, of.of)(mergedChildren)
              );
            }),
          );
        }
        processSegment(
          injector,
          routes,
          segmentGroup,
          segments,
          outlet,
          allowRedirects,
        ) {
          return (0, from.H)(routes).pipe(
            (0, concatMap.H)((r) =>
              this.processSegmentAgainstRoute(
                r._injector ?? injector,
                routes,
                r,
                segmentGroup,
                segments,
                outlet,
                allowRedirects,
              ).pipe(
                (0, catchError.W)((e) => {
                  if (e instanceof NoMatch) return (0, of.of)(null);
                  throw e;
                }),
              ),
            ),
            (0, first.$)((x) => !!x),
            (0, catchError.W)((e) => {
              if (isEmptyError(e))
                return (function noLeftoversInUrl(
                  segmentGroup,
                  segments,
                  outlet,
                ) {
                  return (
                    0 === segments.length && !segmentGroup.children[outlet]
                  );
                })(segmentGroup, segments, outlet)
                  ? (0, of.of)(new NoLeftoversInUrl())
                  : noMatch$1(segmentGroup);
              throw e;
            }),
          );
        }
        processSegmentAgainstRoute(
          injector,
          routes,
          route,
          rawSegment,
          segments,
          outlet,
          allowRedirects,
        ) {
          return (function isImmediateMatch(
            route,
            rawSegment,
            segments,
            outlet,
          ) {
            return (
              !!(
                getOutlet(route) === outlet ||
                (outlet !== PRIMARY_OUTLET &&
                  emptyPathMatch(rawSegment, segments, route))
              ) && match(rawSegment, route, segments).matched
            );
          })(route, rawSegment, segments, outlet)
            ? void 0 === route.redirectTo
              ? this.matchSegmentAgainstRoute(
                  injector,
                  rawSegment,
                  route,
                  segments,
                  outlet,
                )
              : this.allowRedirects && allowRedirects
                ? this.expandSegmentAgainstRouteUsingRedirect(
                    injector,
                    rawSegment,
                    routes,
                    route,
                    segments,
                    outlet,
                  )
                : noMatch$1(rawSegment)
            : noMatch$1(rawSegment);
        }
        expandSegmentAgainstRouteUsingRedirect(
          injector,
          segmentGroup,
          routes,
          route,
          segments,
          outlet,
        ) {
          const {
            matched,
            consumedSegments,
            positionalParamSegments,
            remainingSegments,
          } = match(segmentGroup, route, segments);
          if (!matched) return noMatch$1(segmentGroup);
          if (
            route.redirectTo.startsWith("/") &&
            (this.absoluteRedirectCount++, this.absoluteRedirectCount > 31)
          ) {
            if (ngDevMode)
              throw new core["ɵRuntimeError"](
                4016,
                `Detected possible infinite redirect when redirecting from '${this.urlTree}' to '${route.redirectTo}'.\nThis is currently a dev mode only error but will become a call stack size exceeded error in production in a future major version.`,
              );
            this.allowRedirects = !1;
          }
          const newTree = this.applyRedirects.applyRedirectCommands(
            consumedSegments,
            route.redirectTo,
            positionalParamSegments,
          );
          return this.applyRedirects
            .lineralizeSegments(route, newTree)
            .pipe(
              (0, mergeMap.Z)((newSegments) =>
                this.processSegment(
                  injector,
                  routes,
                  segmentGroup,
                  newSegments.concat(remainingSegments),
                  outlet,
                  !1,
                ),
              ),
            );
        }
        matchSegmentAgainstRoute(
          injector,
          rawSegment,
          route,
          segments,
          outlet,
        ) {
          const matchResult = matchWithChecks(
            rawSegment,
            route,
            segments,
            injector,
            this.urlSerializer,
          );
          return (
            "**" === route.path && (rawSegment.children = {}),
            matchResult.pipe(
              (0, switchMap.n)((result) =>
                result.matched
                  ? ((injector = route._injector ?? injector),
                    this.getChildConfig(injector, route, segments).pipe(
                      (0, switchMap.n)(({ routes: childConfig }) => {
                        const childInjector = route._loadedInjector ?? injector,
                          { consumedSegments, remainingSegments, parameters } =
                            result,
                          snapshot = new ActivatedRouteSnapshot(
                            consumedSegments,
                            parameters,
                            Object.freeze({ ...this.urlTree.queryParams }),
                            this.urlTree.fragment,
                            (function getData(route) {
                              return route.data || {};
                            })(route),
                            getOutlet(route),
                            route.component ?? route._loadedComponent ?? null,
                            route,
                            (function getResolve(route) {
                              return route.resolve || {};
                            })(route),
                          ),
                          { segmentGroup, slicedSegments } = split(
                            rawSegment,
                            consumedSegments,
                            remainingSegments,
                            childConfig,
                          );
                        if (
                          0 === slicedSegments.length &&
                          segmentGroup.hasChildren()
                        )
                          return this.processChildren(
                            childInjector,
                            childConfig,
                            segmentGroup,
                          ).pipe(
                            (0, map.T)((children) =>
                              null === children
                                ? null
                                : new TreeNode(snapshot, children),
                            ),
                          );
                        if (
                          0 === childConfig.length &&
                          0 === slicedSegments.length
                        )
                          return (0, of.of)(new TreeNode(snapshot, []));
                        const matchedOnOutlet = getOutlet(route) === outlet;
                        return this.processSegment(
                          childInjector,
                          childConfig,
                          segmentGroup,
                          slicedSegments,
                          matchedOnOutlet ? PRIMARY_OUTLET : outlet,
                          !0,
                        ).pipe(
                          (0, map.T)(
                            (child) =>
                              new TreeNode(
                                snapshot,
                                child instanceof TreeNode ? [child] : [],
                              ),
                          ),
                        );
                      }),
                    ))
                  : noMatch$1(rawSegment),
              ),
            )
          );
        }
        getChildConfig(injector, route, segments) {
          return route.children
            ? (0, of.of)({ routes: route.children, injector })
            : route.loadChildren
              ? void 0 !== route._loadedRoutes
                ? (0, of.of)({
                    routes: route._loadedRoutes,
                    injector: route._loadedInjector,
                  })
                : runCanLoadGuards(
                    injector,
                    route,
                    segments,
                    this.urlSerializer,
                  ).pipe(
                    (0, mergeMap.Z)((shouldLoadResult) =>
                      shouldLoadResult
                        ? this.configLoader.loadChildren(injector, route).pipe(
                            (0, tap.M)((cfg) => {
                              (route._loadedRoutes = cfg.routes),
                                (route._loadedInjector = cfg.injector);
                            }),
                          )
                        : (function canLoadFails(route) {
                            return (0, observable_throwError.$)(
                              navigationCancelingError(
                                ("undefined" == typeof ngDevMode ||
                                  ngDevMode) &&
                                  `Cannot load children because the guard of the route "path: '${route.path}'" returned false`,
                                NavigationCancellationCode.GuardRejected,
                              ),
                            );
                          })(route),
                    ),
                  )
              : (0, of.of)({ routes: [], injector });
        }
      }
      function hasEmptyPathConfig(node) {
        const config = node.value.routeConfig;
        return config && "" === config.path;
      }
      function mergeEmptyPathMatches(nodes) {
        const result = [],
          mergedNodes = new Set();
        for (const node of nodes) {
          if (!hasEmptyPathConfig(node)) {
            result.push(node);
            continue;
          }
          const duplicateEmptyPathNode = result.find(
            (resultNode) =>
              node.value.routeConfig === resultNode.value.routeConfig,
          );
          void 0 !== duplicateEmptyPathNode
            ? (duplicateEmptyPathNode.children.push(...node.children),
              mergedNodes.add(duplicateEmptyPathNode))
            : result.push(node);
        }
        for (const mergedNode of mergedNodes) {
          const mergedChildren = mergeEmptyPathMatches(mergedNode.children);
          result.push(new TreeNode(mergedNode.value, mergedChildren));
        }
        return result.filter((n) => !mergedNodes.has(n));
      }
      function recognize(
        injector,
        configLoader,
        rootComponentType,
        config,
        serializer,
        paramsInheritanceStrategy,
      ) {
        return (0, mergeMap.Z)((t) =>
          (function recognize$1(
            injector,
            configLoader,
            rootComponentType,
            config,
            urlTree,
            urlSerializer,
            paramsInheritanceStrategy = "emptyOnly",
          ) {
            return new Recognizer(
              injector,
              configLoader,
              rootComponentType,
              config,
              urlTree,
              paramsInheritanceStrategy,
              urlSerializer,
            ).recognize();
          })(
            injector,
            configLoader,
            rootComponentType,
            config,
            t.extractedUrl,
            serializer,
            paramsInheritanceStrategy,
          ).pipe(
            (0, map.T)(
              ({ state: targetSnapshot, tree: urlAfterRedirects }) => ({
                ...t,
                targetSnapshot,
                urlAfterRedirects,
              }),
            ),
          ),
        );
      }
      function resolveData(paramsInheritanceStrategy, injector) {
        return (0, mergeMap.Z)((t) => {
          const {
            targetSnapshot,
            guards: { canActivateChecks },
          } = t;
          if (!canActivateChecks.length) return (0, of.of)(t);
          const routesWithResolversToRun = new Set(
              canActivateChecks.map((check) => check.route),
            ),
            routesNeedingDataUpdates = new Set();
          for (const route of routesWithResolversToRun)
            if (!routesNeedingDataUpdates.has(route))
              for (const newRoute of flattenRouteTree(route))
                routesNeedingDataUpdates.add(newRoute);
          let routesProcessed = 0;
          return (0, from.H)(routesNeedingDataUpdates).pipe(
            (0, concatMap.H)((route) =>
              routesWithResolversToRun.has(route)
                ? (function runResolve(
                    futureARS,
                    futureRSS,
                    paramsInheritanceStrategy,
                    injector,
                  ) {
                    const config = futureARS.routeConfig,
                      resolve = futureARS._resolve;
                    void 0 === config?.title ||
                      hasStaticTitle(config) ||
                      (resolve[RouteTitleKey] = config.title);
                    return (function resolveNode(
                      resolve,
                      futureARS,
                      futureRSS,
                      injector,
                    ) {
                      const keys = getDataKeys(resolve);
                      if (0 === keys.length) return (0, of.of)({});
                      const data = {};
                      return (0, from.H)(keys).pipe(
                        (0, mergeMap.Z)((key) =>
                          (function getResolver(
                            injectionToken,
                            futureARS,
                            futureRSS,
                            injector,
                          ) {
                            const closestInjector =
                                getClosestRouteInjector(futureARS) ?? injector,
                              resolver = getTokenOrFunctionIdentity(
                                injectionToken,
                                closestInjector,
                              ),
                              resolverValue = resolver.resolve
                                ? resolver.resolve(futureARS, futureRSS)
                                : (0, core.runInInjectionContext)(
                                    closestInjector,
                                    () => resolver(futureARS, futureRSS),
                                  );
                            return wrapIntoObservable(resolverValue);
                          })(resolve[key], futureARS, futureRSS, injector).pipe(
                            (0, first.$)(),
                            (0, tap.M)((value) => {
                              data[key] = value;
                            }),
                          ),
                        ),
                        takeLast(1),
                        (0, mapTo.u)(data),
                        (0, catchError.W)((e) =>
                          isEmptyError(e)
                            ? empty.w
                            : (0, observable_throwError.$)(e),
                        ),
                      );
                    })(resolve, futureARS, futureRSS, injector).pipe(
                      (0, map.T)(
                        (resolvedData) => (
                          (futureARS._resolvedData = resolvedData),
                          (futureARS.data = getInherited(
                            futureARS,
                            futureARS.parent,
                            paramsInheritanceStrategy,
                          ).resolve),
                          null
                        ),
                      ),
                    );
                  })(route, targetSnapshot, paramsInheritanceStrategy, injector)
                : ((route.data = getInherited(
                    route,
                    route.parent,
                    paramsInheritanceStrategy,
                  ).resolve),
                  (0, of.of)(void 0)),
            ),
            (0, tap.M)(() => routesProcessed++),
            takeLast(1),
            (0, mergeMap.Z)((_) =>
              routesProcessed === routesNeedingDataUpdates.size
                ? (0, of.of)(t)
                : empty.w,
            ),
          );
        });
      }
      function flattenRouteTree(route) {
        const descendants = route.children
          .map((child) => flattenRouteTree(child))
          .flat();
        return [route, ...descendants];
      }
      function switchTap(next) {
        return (0, switchMap.n)((v) => {
          const nextResult = next(v);
          return nextResult
            ? (0, from.H)(nextResult).pipe((0, map.T)(() => v))
            : (0, of.of)(v);
        });
      }
      class TitleStrategy {
        buildTitle(snapshot) {
          let pageTitle,
            route = snapshot.root;
          for (; void 0 !== route; )
            (pageTitle = this.getResolvedTitleForRoute(route) ?? pageTitle),
              (route = route.children.find(
                (child) => child.outlet === PRIMARY_OUTLET,
              ));
          return pageTitle;
        }
        getResolvedTitleForRoute(snapshot) {
          return snapshot.data[RouteTitleKey];
        }
        static #_ = (this.ɵfac = function TitleStrategy_Factory(t) {
          return new (t || TitleStrategy)();
        });
        static #_2 = (this.ɵprov = core["ɵɵdefineInjectable"]({
          token: TitleStrategy,
          factory: () => (0, core.inject)(DefaultTitleStrategy),
          providedIn: "root",
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          TitleStrategy,
          [
            {
              type: core.Injectable,
              args: [
                {
                  providedIn: "root",
                  useFactory: () => (0, core.inject)(DefaultTitleStrategy),
                },
              ],
            },
          ],
          null,
          null,
        );
      class DefaultTitleStrategy extends TitleStrategy {
        constructor(title) {
          super(), (this.title = title);
        }
        updateTitle(snapshot) {
          const title = this.buildTitle(snapshot);
          void 0 !== title && this.title.setTitle(title);
        }
        static #_ = (this.ɵfac = function DefaultTitleStrategy_Factory(t) {
          return new (t || DefaultTitleStrategy)(
            core["ɵɵinject"](platform_browser.Title),
          );
        });
        static #_2 = (this.ɵprov = core["ɵɵdefineInjectable"]({
          token: DefaultTitleStrategy,
          factory: DefaultTitleStrategy.ɵfac,
          providedIn: "root",
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          DefaultTitleStrategy,
          [{ type: core.Injectable, args: [{ providedIn: "root" }] }],
          () => [{ type: platform_browser.Title }],
          null,
        );
      const ROUTER_CONFIGURATION = new core.InjectionToken(
          "undefined" == typeof ngDevMode || ngDevMode ? "router config" : "",
          { providedIn: "root", factory: () => ({}) },
        ),
        ROUTES = new core.InjectionToken(ngDevMode ? "ROUTES" : "");
      class RouterConfigLoader {
        constructor() {
          (this.componentLoaders = new WeakMap()),
            (this.childrenLoaders = new WeakMap()),
            (this.compiler = (0, core.inject)(core.Compiler));
        }
        loadComponent(route) {
          if (this.componentLoaders.get(route))
            return this.componentLoaders.get(route);
          if (route._loadedComponent) return (0, of.of)(route._loadedComponent);
          this.onLoadStartListener && this.onLoadStartListener(route);
          const loadRunner = wrapIntoObservable(route.loadComponent()).pipe(
              (0, map.T)(maybeUnwrapDefaultExport),
              (0, tap.M)((component) => {
                this.onLoadEndListener && this.onLoadEndListener(route),
                  ("undefined" == typeof ngDevMode || ngDevMode) &&
                    assertStandalone(route.path ?? "", component),
                  (route._loadedComponent = component);
              }),
              (0, finalize.j)(() => {
                this.componentLoaders.delete(route);
              }),
            ),
            loader = new ConnectableObservable.G(
              loadRunner,
              () => new Subject.B(),
            ).pipe((0, refCount.B)());
          return this.componentLoaders.set(route, loader), loader;
        }
        loadChildren(parentInjector, route) {
          if (this.childrenLoaders.get(route))
            return this.childrenLoaders.get(route);
          if (route._loadedRoutes)
            return (0, of.of)({
              routes: route._loadedRoutes,
              injector: route._loadedInjector,
            });
          this.onLoadStartListener && this.onLoadStartListener(route);
          const moduleFactoryOrRoutes$ = (function loadChildren(
              route,
              compiler,
              parentInjector,
              onLoadEndListener,
            ) {
              return wrapIntoObservable(route.loadChildren()).pipe(
                (0, map.T)(maybeUnwrapDefaultExport),
                (0, mergeMap.Z)((t) =>
                  t instanceof core.NgModuleFactory || Array.isArray(t)
                    ? (0, of.of)(t)
                    : (0, from.H)(compiler.compileModuleAsync(t)),
                ),
                (0, map.T)((factoryOrRoutes) => {
                  let injector, rawRoutes;
                  onLoadEndListener && onLoadEndListener(route);
                  let requireStandaloneComponents = !1;
                  Array.isArray(factoryOrRoutes)
                    ? ((rawRoutes = factoryOrRoutes),
                      (requireStandaloneComponents = !0))
                    : ((injector =
                        factoryOrRoutes.create(parentInjector).injector),
                      (rawRoutes = injector
                        .get(ROUTES, [], { optional: !0, self: !0 })
                        .flat()));
                  const routes = rawRoutes.map(standardizeConfig);
                  return (
                    ("undefined" == typeof ngDevMode || ngDevMode) &&
                      validateConfig(
                        routes,
                        route.path,
                        requireStandaloneComponents,
                      ),
                    { routes, injector }
                  );
                }),
              );
            })(route, this.compiler, parentInjector, this.onLoadEndListener),
            loadRunner = moduleFactoryOrRoutes$.pipe(
              (0, finalize.j)(() => {
                this.childrenLoaders.delete(route);
              }),
            ),
            loader = new ConnectableObservable.G(
              loadRunner,
              () => new Subject.B(),
            ).pipe((0, refCount.B)());
          return this.childrenLoaders.set(route, loader), loader;
        }
        static #_ = (this.ɵfac = function RouterConfigLoader_Factory(t) {
          return new (t || RouterConfigLoader)();
        });
        static #_2 = (this.ɵprov = core["ɵɵdefineInjectable"]({
          token: RouterConfigLoader,
          factory: RouterConfigLoader.ɵfac,
          providedIn: "root",
        }));
      }
      function maybeUnwrapDefaultExport(input) {
        return (function isWrappedDefaultExport(value) {
          return value && "object" == typeof value && "default" in value;
        })(input)
          ? input.default
          : input;
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          RouterConfigLoader,
          [{ type: core.Injectable, args: [{ providedIn: "root" }] }],
          null,
          null,
        );
      class UrlHandlingStrategy {
        static #_ = (this.ɵfac = function UrlHandlingStrategy_Factory(t) {
          return new (t || UrlHandlingStrategy)();
        });
        static #_2 = (this.ɵprov = core["ɵɵdefineInjectable"]({
          token: UrlHandlingStrategy,
          factory: () => (0, core.inject)(DefaultUrlHandlingStrategy),
          providedIn: "root",
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          UrlHandlingStrategy,
          [
            {
              type: core.Injectable,
              args: [
                {
                  providedIn: "root",
                  useFactory: () =>
                    (0, core.inject)(DefaultUrlHandlingStrategy),
                },
              ],
            },
          ],
          null,
          null,
        );
      class DefaultUrlHandlingStrategy {
        shouldProcessUrl(url) {
          return !0;
        }
        extract(url) {
          return url;
        }
        merge(newUrlPart, wholeUrl) {
          return newUrlPart;
        }
        static #_ = (this.ɵfac = function DefaultUrlHandlingStrategy_Factory(
          t,
        ) {
          return new (t || DefaultUrlHandlingStrategy)();
        });
        static #_2 = (this.ɵprov = core["ɵɵdefineInjectable"]({
          token: DefaultUrlHandlingStrategy,
          factory: DefaultUrlHandlingStrategy.ɵfac,
          providedIn: "root",
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          DefaultUrlHandlingStrategy,
          [{ type: core.Injectable, args: [{ providedIn: "root" }] }],
          null,
          null,
        );
      const CREATE_VIEW_TRANSITION = new core.InjectionToken(
          ngDevMode ? "view transition helper" : "",
        ),
        VIEW_TRANSITION_OPTIONS = new core.InjectionToken(
          ngDevMode ? "view transition options" : "",
        );
      function createViewTransition(injector, from, to) {
        const transitionOptions = injector.get(VIEW_TRANSITION_OPTIONS),
          document = injector.get(common.DOCUMENT);
        return injector.get(core.NgZone).runOutsideAngular(() => {
          if (
            !document.startViewTransition ||
            transitionOptions.skipNextTransition
          )
            return (
              (transitionOptions.skipNextTransition = !1),
              new Promise((resolve) => setTimeout(resolve))
            );
          let resolveViewTransitionStarted;
          const viewTransitionStarted = new Promise((resolve) => {
              resolveViewTransitionStarted = resolve;
            }),
            transition = document.startViewTransition(
              () => (
                resolveViewTransitionStarted(),
                (function createRenderPromise(injector) {
                  return new Promise((resolve) => {
                    (0, core.afterNextRender)(resolve, { injector });
                  });
                })(injector)
              ),
            ),
            { onViewTransitionCreated } = transitionOptions;
          return (
            onViewTransitionCreated &&
              (0, core.runInInjectionContext)(injector, () =>
                onViewTransitionCreated({ transition, from, to }),
              ),
            viewTransitionStarted
          );
        });
      }
      class NavigationTransitions {
        get hasRequestedNavigation() {
          return 0 !== this.navigationId;
        }
        constructor() {
          (this.currentNavigation = null),
            (this.currentTransition = null),
            (this.lastSuccessfulNavigation = null),
            (this.events = new Subject.B()),
            (this.transitionAbortSubject = new Subject.B()),
            (this.configLoader = (0, core.inject)(RouterConfigLoader)),
            (this.environmentInjector = (0, core.inject)(
              core.EnvironmentInjector,
            )),
            (this.urlSerializer = (0, core.inject)(UrlSerializer)),
            (this.rootContexts = (0, core.inject)(ChildrenOutletContexts)),
            (this.location = (0, core.inject)(common.Location)),
            (this.inputBindingEnabled =
              null !== (0, core.inject)(INPUT_BINDER, { optional: !0 })),
            (this.titleStrategy = (0, core.inject)(TitleStrategy)),
            (this.options =
              (0, core.inject)(ROUTER_CONFIGURATION, { optional: !0 }) || {}),
            (this.paramsInheritanceStrategy =
              this.options.paramsInheritanceStrategy || "emptyOnly"),
            (this.urlHandlingStrategy = (0, core.inject)(UrlHandlingStrategy)),
            (this.createViewTransition = (0, core.inject)(
              CREATE_VIEW_TRANSITION,
              { optional: !0 },
            )),
            (this.navigationId = 0),
            (this.afterPreactivation = () => (0, of.of)(void 0)),
            (this.rootComponentType = null);
          (this.configLoader.onLoadEndListener = (r) =>
            this.events.next(new RouteConfigLoadEnd(r))),
            (this.configLoader.onLoadStartListener = (r) =>
              this.events.next(new RouteConfigLoadStart(r)));
        }
        complete() {
          this.transitions?.complete();
        }
        handleNavigationRequest(request) {
          const id = ++this.navigationId;
          this.transitions?.next({ ...this.transitions.value, ...request, id });
        }
        setupNavigations(router, initialUrlTree, initialRouterState) {
          return (
            (this.transitions = new BehaviorSubject.t({
              id: 0,
              currentUrlTree: initialUrlTree,
              currentRawUrl: initialUrlTree,
              extractedUrl: this.urlHandlingStrategy.extract(initialUrlTree),
              urlAfterRedirects:
                this.urlHandlingStrategy.extract(initialUrlTree),
              rawUrl: initialUrlTree,
              extras: {},
              resolve: null,
              reject: null,
              promise: Promise.resolve(!0),
              source: "imperative",
              restoredState: null,
              currentSnapshot: initialRouterState.snapshot,
              targetSnapshot: null,
              currentRouterState: initialRouterState,
              targetRouterState: null,
              guards: { canActivateChecks: [], canDeactivateChecks: [] },
              guardsResult: null,
            })),
            this.transitions.pipe(
              (0, filter.p)((t) => 0 !== t.id),
              (0, map.T)((t) => ({
                ...t,
                extractedUrl: this.urlHandlingStrategy.extract(t.rawUrl),
              })),
              (0, switchMap.n)((overallTransitionState) => {
                let completed = !1,
                  errored = !1;
                return (0, of.of)(overallTransitionState).pipe(
                  (0, switchMap.n)((t) => {
                    if (this.navigationId > overallTransitionState.id) {
                      const cancellationReason =
                        "undefined" == typeof ngDevMode || ngDevMode
                          ? `Navigation ID ${overallTransitionState.id} is not equal to the current navigation id ${this.navigationId}`
                          : "";
                      return (
                        this.cancelNavigationTransition(
                          overallTransitionState,
                          cancellationReason,
                          NavigationCancellationCode.SupersededByNewNavigation,
                        ),
                        empty.w
                      );
                    }
                    (this.currentTransition = overallTransitionState),
                      (this.currentNavigation = {
                        id: t.id,
                        initialUrl: t.rawUrl,
                        extractedUrl: t.extractedUrl,
                        trigger: t.source,
                        extras: t.extras,
                        previousNavigation: this.lastSuccessfulNavigation
                          ? {
                              ...this.lastSuccessfulNavigation,
                              previousNavigation: null,
                            }
                          : null,
                      });
                    const urlTransition =
                        !router.navigated ||
                        this.isUpdatingInternalState() ||
                        this.isUpdatedBrowserUrl(),
                      onSameUrlNavigation =
                        t.extras.onSameUrlNavigation ??
                        router.onSameUrlNavigation;
                    if (!urlTransition && "reload" !== onSameUrlNavigation) {
                      const reason =
                        "undefined" == typeof ngDevMode || ngDevMode
                          ? `Navigation to ${t.rawUrl} was ignored because it is the same as the current Router URL.`
                          : "";
                      return (
                        this.events.next(
                          new NavigationSkipped(
                            t.id,
                            this.urlSerializer.serialize(t.rawUrl),
                            reason,
                            NavigationSkippedCode.IgnoredSameUrlNavigation,
                          ),
                        ),
                        t.resolve(null),
                        empty.w
                      );
                    }
                    if (this.urlHandlingStrategy.shouldProcessUrl(t.rawUrl))
                      return (0, of.of)(t).pipe(
                        (0, switchMap.n)((t) => {
                          const transition = this.transitions?.getValue();
                          return (
                            this.events.next(
                              new NavigationStart(
                                t.id,
                                this.urlSerializer.serialize(t.extractedUrl),
                                t.source,
                                t.restoredState,
                              ),
                            ),
                            transition !== this.transitions?.getValue()
                              ? empty.w
                              : Promise.resolve(t)
                          );
                        }),
                        recognize(
                          this.environmentInjector,
                          this.configLoader,
                          this.rootComponentType,
                          router.config,
                          this.urlSerializer,
                          this.paramsInheritanceStrategy,
                        ),
                        (0, tap.M)((t) => {
                          (overallTransitionState.targetSnapshot =
                            t.targetSnapshot),
                            (overallTransitionState.urlAfterRedirects =
                              t.urlAfterRedirects),
                            (this.currentNavigation = {
                              ...this.currentNavigation,
                              finalUrl: t.urlAfterRedirects,
                            });
                          const routesRecognized = new RoutesRecognized(
                            t.id,
                            this.urlSerializer.serialize(t.extractedUrl),
                            this.urlSerializer.serialize(t.urlAfterRedirects),
                            t.targetSnapshot,
                          );
                          this.events.next(routesRecognized);
                        }),
                      );
                    if (
                      urlTransition &&
                      this.urlHandlingStrategy.shouldProcessUrl(t.currentRawUrl)
                    ) {
                      const {
                          id,
                          extractedUrl,
                          source,
                          restoredState,
                          extras,
                        } = t,
                        navStart = new NavigationStart(
                          id,
                          this.urlSerializer.serialize(extractedUrl),
                          source,
                          restoredState,
                        );
                      this.events.next(navStart);
                      const targetSnapshot = createEmptyState(
                        this.rootComponentType,
                      ).snapshot;
                      return (
                        (this.currentTransition = overallTransitionState =
                          {
                            ...t,
                            targetSnapshot,
                            urlAfterRedirects: extractedUrl,
                            extras: {
                              ...extras,
                              skipLocationChange: !1,
                              replaceUrl: !1,
                            },
                          }),
                        (this.currentNavigation.finalUrl = extractedUrl),
                        (0, of.of)(overallTransitionState)
                      );
                    }
                    {
                      const reason =
                        "undefined" == typeof ngDevMode || ngDevMode
                          ? `Navigation was ignored because the UrlHandlingStrategy indicated neither the current URL ${t.currentRawUrl} nor target URL ${t.rawUrl} should be processed.`
                          : "";
                      return (
                        this.events.next(
                          new NavigationSkipped(
                            t.id,
                            this.urlSerializer.serialize(t.extractedUrl),
                            reason,
                            NavigationSkippedCode.IgnoredByUrlHandlingStrategy,
                          ),
                        ),
                        t.resolve(null),
                        empty.w
                      );
                    }
                  }),
                  (0, tap.M)((t) => {
                    const guardsStart = new GuardsCheckStart(
                      t.id,
                      this.urlSerializer.serialize(t.extractedUrl),
                      this.urlSerializer.serialize(t.urlAfterRedirects),
                      t.targetSnapshot,
                    );
                    this.events.next(guardsStart);
                  }),
                  (0, map.T)(
                    (t) => (
                      (this.currentTransition = overallTransitionState =
                        {
                          ...t,
                          guards: getAllRouteGuards(
                            t.targetSnapshot,
                            t.currentSnapshot,
                            this.rootContexts,
                          ),
                        }),
                      overallTransitionState
                    ),
                  ),
                  checkGuards(this.environmentInjector, (evt) =>
                    this.events.next(evt),
                  ),
                  (0, tap.M)((t) => {
                    if (
                      ((overallTransitionState.guardsResult = t.guardsResult),
                      isUrlTree(t.guardsResult))
                    )
                      throw redirectingNavigationError(
                        this.urlSerializer,
                        t.guardsResult,
                      );
                    const guardsEnd = new GuardsCheckEnd(
                      t.id,
                      this.urlSerializer.serialize(t.extractedUrl),
                      this.urlSerializer.serialize(t.urlAfterRedirects),
                      t.targetSnapshot,
                      !!t.guardsResult,
                    );
                    this.events.next(guardsEnd);
                  }),
                  (0, filter.p)(
                    (t) =>
                      !!t.guardsResult ||
                      (this.cancelNavigationTransition(
                        t,
                        "",
                        NavigationCancellationCode.GuardRejected,
                      ),
                      !1),
                  ),
                  switchTap((t) => {
                    if (t.guards.canActivateChecks.length)
                      return (0, of.of)(t).pipe(
                        (0, tap.M)((t) => {
                          const resolveStart = new ResolveStart(
                            t.id,
                            this.urlSerializer.serialize(t.extractedUrl),
                            this.urlSerializer.serialize(t.urlAfterRedirects),
                            t.targetSnapshot,
                          );
                          this.events.next(resolveStart);
                        }),
                        (0, switchMap.n)((t) => {
                          let dataResolved = !1;
                          return (0, of.of)(t).pipe(
                            resolveData(
                              this.paramsInheritanceStrategy,
                              this.environmentInjector,
                            ),
                            (0, tap.M)({
                              next: () => (dataResolved = !0),
                              complete: () => {
                                dataResolved ||
                                  this.cancelNavigationTransition(
                                    t,
                                    "undefined" == typeof ngDevMode || ngDevMode
                                      ? "At least one route resolver didn't emit any value."
                                      : "",
                                    NavigationCancellationCode.NoDataFromResolver,
                                  );
                              },
                            }),
                          );
                        }),
                        (0, tap.M)((t) => {
                          const resolveEnd = new ResolveEnd(
                            t.id,
                            this.urlSerializer.serialize(t.extractedUrl),
                            this.urlSerializer.serialize(t.urlAfterRedirects),
                            t.targetSnapshot,
                          );
                          this.events.next(resolveEnd);
                        }),
                      );
                  }),
                  switchTap((t) => {
                    const loadComponents = (route) => {
                      const loaders = [];
                      route.routeConfig?.loadComponent &&
                        !route.routeConfig._loadedComponent &&
                        loaders.push(
                          this.configLoader
                            .loadComponent(route.routeConfig)
                            .pipe(
                              (0, tap.M)((loadedComponent) => {
                                route.component = loadedComponent;
                              }),
                              (0, map.T)(() => {}),
                            ),
                        );
                      for (const child of route.children)
                        loaders.push(...loadComponents(child));
                      return loaders;
                    };
                    return (0, combineLatest.z)(
                      loadComponents(t.targetSnapshot.root),
                    ).pipe((0, defaultIfEmpty.U)(null), (0, take.s)(1));
                  }),
                  switchTap(() => this.afterPreactivation()),
                  (0, switchMap.n)(() => {
                    const { currentSnapshot, targetSnapshot } =
                        overallTransitionState,
                      viewTransitionStarted = this.createViewTransition?.(
                        this.environmentInjector,
                        currentSnapshot.root,
                        targetSnapshot.root,
                      );
                    return viewTransitionStarted
                      ? (0, from.H)(viewTransitionStarted).pipe(
                          (0, map.T)(() => overallTransitionState),
                        )
                      : (0, of.of)(overallTransitionState);
                  }),
                  (0, map.T)((t) => {
                    const targetRouterState = (function createRouterState(
                      routeReuseStrategy,
                      curr,
                      prevState,
                    ) {
                      const root = createNode(
                        routeReuseStrategy,
                        curr._root,
                        prevState ? prevState._root : void 0,
                      );
                      return new RouterState(root, curr);
                    })(
                      router.routeReuseStrategy,
                      t.targetSnapshot,
                      t.currentRouterState,
                    );
                    return (
                      (this.currentTransition = overallTransitionState =
                        { ...t, targetRouterState }),
                      (this.currentNavigation.targetRouterState =
                        targetRouterState),
                      overallTransitionState
                    );
                  }),
                  (0, tap.M)(() => {
                    this.events.next(new BeforeActivateRoutes());
                  }),
                  ((rootContexts = this.rootContexts),
                  (routeReuseStrategy = router.routeReuseStrategy),
                  (forwardEvent = (evt) => this.events.next(evt)),
                  (inputBindingEnabled = this.inputBindingEnabled),
                  (0, map.T)(
                    (t) => (
                      new ActivateRoutes(
                        routeReuseStrategy,
                        t.targetRouterState,
                        t.currentRouterState,
                        forwardEvent,
                        inputBindingEnabled,
                      ).activate(rootContexts),
                      t
                    ),
                  )),
                  (0, take.s)(1),
                  (0, tap.M)({
                    next: (t) => {
                      (completed = !0),
                        (this.lastSuccessfulNavigation =
                          this.currentNavigation),
                        this.events.next(
                          new NavigationEnd(
                            t.id,
                            this.urlSerializer.serialize(t.extractedUrl),
                            this.urlSerializer.serialize(t.urlAfterRedirects),
                          ),
                        ),
                        this.titleStrategy?.updateTitle(
                          t.targetRouterState.snapshot,
                        ),
                        t.resolve(!0);
                    },
                    complete: () => {
                      completed = !0;
                    },
                  }),
                  (0, takeUntil.Q)(
                    this.transitionAbortSubject.pipe(
                      (0, tap.M)((err) => {
                        throw err;
                      }),
                    ),
                  ),
                  (0, finalize.j)(() => {
                    if (!completed && !errored) {
                      const cancelationReason =
                        "undefined" == typeof ngDevMode || ngDevMode
                          ? `Navigation ID ${overallTransitionState.id} is not equal to the current navigation id ${this.navigationId}`
                          : "";
                      this.cancelNavigationTransition(
                        overallTransitionState,
                        cancelationReason,
                        NavigationCancellationCode.SupersededByNewNavigation,
                      );
                    }
                    this.currentTransition?.id === overallTransitionState.id &&
                      ((this.currentNavigation = null),
                      (this.currentTransition = null));
                  }),
                  (0, catchError.W)((e) => {
                    if (((errored = !0), isNavigationCancelingError(e)))
                      this.events.next(
                        new NavigationCancel(
                          overallTransitionState.id,
                          this.urlSerializer.serialize(
                            overallTransitionState.extractedUrl,
                          ),
                          e.message,
                          e.cancellationCode,
                        ),
                      ),
                        !(function isRedirectingNavigationCancelingError(
                          error,
                        ) {
                          return (
                            isNavigationCancelingError(error) &&
                            isUrlTree(error.url)
                          );
                        })(e)
                          ? overallTransitionState.resolve(!1)
                          : this.events.next(new RedirectRequest(e.url));
                    else {
                      this.events.next(
                        new NavigationError(
                          overallTransitionState.id,
                          this.urlSerializer.serialize(
                            overallTransitionState.extractedUrl,
                          ),
                          e,
                          overallTransitionState.targetSnapshot ?? void 0,
                        ),
                      );
                      try {
                        overallTransitionState.resolve(router.errorHandler(e));
                      } catch (ee) {
                        this.options.resolveNavigationPromiseOnError
                          ? overallTransitionState.resolve(!1)
                          : overallTransitionState.reject(ee);
                      }
                    }
                    return empty.w;
                  }),
                );
                var rootContexts,
                  routeReuseStrategy,
                  forwardEvent,
                  inputBindingEnabled;
              }),
            )
          );
        }
        cancelNavigationTransition(t, reason, code) {
          const navCancel = new NavigationCancel(
            t.id,
            this.urlSerializer.serialize(t.extractedUrl),
            reason,
            code,
          );
          this.events.next(navCancel), t.resolve(!1);
        }
        isUpdatingInternalState() {
          return (
            this.currentTransition?.extractedUrl.toString() !==
            this.currentTransition?.currentUrlTree.toString()
          );
        }
        isUpdatedBrowserUrl() {
          return (
            this.urlHandlingStrategy
              .extract(this.urlSerializer.parse(this.location.path(!0)))
              .toString() !== this.currentTransition?.extractedUrl.toString() &&
            !this.currentTransition?.extras.skipLocationChange
          );
        }
        static #_ = (this.ɵfac = function NavigationTransitions_Factory(t) {
          return new (t || NavigationTransitions)();
        });
        static #_2 = (this.ɵprov = core["ɵɵdefineInjectable"]({
          token: NavigationTransitions,
          factory: NavigationTransitions.ɵfac,
          providedIn: "root",
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          NavigationTransitions,
          [{ type: core.Injectable, args: [{ providedIn: "root" }] }],
          () => [],
          null,
        );
      class RouteReuseStrategy {
        static #_ = (this.ɵfac = function RouteReuseStrategy_Factory(t) {
          return new (t || RouteReuseStrategy)();
        });
        static #_2 = (this.ɵprov = core["ɵɵdefineInjectable"]({
          token: RouteReuseStrategy,
          factory: () => (0, core.inject)(DefaultRouteReuseStrategy),
          providedIn: "root",
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          RouteReuseStrategy,
          [
            {
              type: core.Injectable,
              args: [
                {
                  providedIn: "root",
                  useFactory: () => (0, core.inject)(DefaultRouteReuseStrategy),
                },
              ],
            },
          ],
          null,
          null,
        );
      class BaseRouteReuseStrategy {
        shouldDetach(route) {
          return !1;
        }
        store(route, detachedTree) {}
        shouldAttach(route) {
          return !1;
        }
        retrieve(route) {
          return null;
        }
        shouldReuseRoute(future, curr) {
          return future.routeConfig === curr.routeConfig;
        }
      }
      class DefaultRouteReuseStrategy extends BaseRouteReuseStrategy {
        static #_ = (this.ɵfac = (() => {
          let ɵDefaultRouteReuseStrategy_BaseFactory;
          return function DefaultRouteReuseStrategy_Factory(t) {
            return (
              ɵDefaultRouteReuseStrategy_BaseFactory ||
              (ɵDefaultRouteReuseStrategy_BaseFactory = core[
                "ɵɵgetInheritedFactory"
              ](DefaultRouteReuseStrategy))
            )(t || DefaultRouteReuseStrategy);
          };
        })());
        static #_2 = (this.ɵprov = core["ɵɵdefineInjectable"]({
          token: DefaultRouteReuseStrategy,
          factory: DefaultRouteReuseStrategy.ɵfac,
          providedIn: "root",
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          DefaultRouteReuseStrategy,
          [{ type: core.Injectable, args: [{ providedIn: "root" }] }],
          null,
          null,
        );
      class StateManager {
        static #_ = (this.ɵfac = function StateManager_Factory(t) {
          return new (t || StateManager)();
        });
        static #_2 = (this.ɵprov = core["ɵɵdefineInjectable"]({
          token: StateManager,
          factory: () => (0, core.inject)(HistoryStateManager),
          providedIn: "root",
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          StateManager,
          [
            {
              type: core.Injectable,
              args: [
                {
                  providedIn: "root",
                  useFactory: () => (0, core.inject)(HistoryStateManager),
                },
              ],
            },
          ],
          null,
          null,
        );
      class HistoryStateManager extends StateManager {
        constructor() {
          super(...arguments),
            (this.location = (0, core.inject)(common.Location)),
            (this.urlSerializer = (0, core.inject)(UrlSerializer)),
            (this.options =
              (0, core.inject)(ROUTER_CONFIGURATION, { optional: !0 }) || {}),
            (this.canceledNavigationResolution =
              this.options.canceledNavigationResolution || "replace"),
            (this.urlHandlingStrategy = (0, core.inject)(UrlHandlingStrategy)),
            (this.urlUpdateStrategy =
              this.options.urlUpdateStrategy || "deferred"),
            (this.currentUrlTree = new UrlTree()),
            (this.rawUrlTree = this.currentUrlTree),
            (this.currentPageId = 0),
            (this.lastSuccessfulId = -1),
            (this.routerState = createEmptyState(null)),
            (this.stateMemento = this.createStateMemento());
        }
        getCurrentUrlTree() {
          return this.currentUrlTree;
        }
        getRawUrlTree() {
          return this.rawUrlTree;
        }
        restoredState() {
          return this.location.getState();
        }
        get browserPageId() {
          return "computed" !== this.canceledNavigationResolution
            ? this.currentPageId
            : (this.restoredState()?.ɵrouterPageId ?? this.currentPageId);
        }
        getRouterState() {
          return this.routerState;
        }
        createStateMemento() {
          return {
            rawUrlTree: this.rawUrlTree,
            currentUrlTree: this.currentUrlTree,
            routerState: this.routerState,
          };
        }
        registerNonRouterCurrentEntryChangeListener(listener) {
          return this.location.subscribe((event) => {
            "popstate" === event.type && listener(event.url, event.state);
          });
        }
        handleRouterEvent(e, currentTransition) {
          if (e instanceof NavigationStart)
            this.stateMemento = this.createStateMemento();
          else if (e instanceof NavigationSkipped)
            this.rawUrlTree = currentTransition.initialUrl;
          else if (e instanceof RoutesRecognized) {
            if (
              "eager" === this.urlUpdateStrategy &&
              !currentTransition.extras.skipLocationChange
            ) {
              const rawUrl = this.urlHandlingStrategy.merge(
                currentTransition.finalUrl,
                currentTransition.initialUrl,
              );
              this.setBrowserUrl(rawUrl, currentTransition);
            }
          } else
            e instanceof BeforeActivateRoutes
              ? ((this.currentUrlTree = currentTransition.finalUrl),
                (this.rawUrlTree = this.urlHandlingStrategy.merge(
                  currentTransition.finalUrl,
                  currentTransition.initialUrl,
                )),
                (this.routerState = currentTransition.targetRouterState),
                "deferred" === this.urlUpdateStrategy &&
                  (currentTransition.extras.skipLocationChange ||
                    this.setBrowserUrl(this.rawUrlTree, currentTransition)))
              : e instanceof NavigationCancel &&
                  (e.code === NavigationCancellationCode.GuardRejected ||
                    e.code === NavigationCancellationCode.NoDataFromResolver)
                ? this.restoreHistory(currentTransition)
                : e instanceof NavigationError
                  ? this.restoreHistory(currentTransition, !0)
                  : e instanceof NavigationEnd &&
                    ((this.lastSuccessfulId = e.id),
                    (this.currentPageId = this.browserPageId));
        }
        setBrowserUrl(url, transition) {
          const path = this.urlSerializer.serialize(url);
          if (
            this.location.isCurrentPathEqualTo(path) ||
            transition.extras.replaceUrl
          ) {
            const currentBrowserPageId = this.browserPageId,
              state = {
                ...transition.extras.state,
                ...this.generateNgRouterState(
                  transition.id,
                  currentBrowserPageId,
                ),
              };
            this.location.replaceState(path, "", state);
          } else {
            const state = {
              ...transition.extras.state,
              ...this.generateNgRouterState(
                transition.id,
                this.browserPageId + 1,
              ),
            };
            this.location.go(path, "", state);
          }
        }
        restoreHistory(navigation, restoringFromCaughtError = !1) {
          if ("computed" === this.canceledNavigationResolution) {
            const currentBrowserPageId = this.browserPageId,
              targetPagePosition = this.currentPageId - currentBrowserPageId;
            0 !== targetPagePosition
              ? this.location.historyGo(targetPagePosition)
              : this.currentUrlTree === navigation.finalUrl &&
                0 === targetPagePosition &&
                (this.resetState(navigation), this.resetUrlToCurrentUrlTree());
          } else
            "replace" === this.canceledNavigationResolution &&
              (restoringFromCaughtError && this.resetState(navigation),
              this.resetUrlToCurrentUrlTree());
        }
        resetState(navigation) {
          (this.routerState = this.stateMemento.routerState),
            (this.currentUrlTree = this.stateMemento.currentUrlTree),
            (this.rawUrlTree = this.urlHandlingStrategy.merge(
              this.currentUrlTree,
              navigation.finalUrl ?? this.rawUrlTree,
            ));
        }
        resetUrlToCurrentUrlTree() {
          this.location.replaceState(
            this.urlSerializer.serialize(this.rawUrlTree),
            "",
            this.generateNgRouterState(
              this.lastSuccessfulId,
              this.currentPageId,
            ),
          );
        }
        generateNgRouterState(navigationId, routerPageId) {
          return "computed" === this.canceledNavigationResolution
            ? { navigationId, ɵrouterPageId: routerPageId }
            : { navigationId };
        }
        static #_ = (this.ɵfac = (() => {
          let ɵHistoryStateManager_BaseFactory;
          return function HistoryStateManager_Factory(t) {
            return (
              ɵHistoryStateManager_BaseFactory ||
              (ɵHistoryStateManager_BaseFactory =
                core["ɵɵgetInheritedFactory"](HistoryStateManager))
            )(t || HistoryStateManager);
          };
        })());
        static #_2 = (this.ɵprov = core["ɵɵdefineInjectable"]({
          token: HistoryStateManager,
          factory: HistoryStateManager.ɵfac,
          providedIn: "root",
        }));
      }
      var NavigationResult;
      function afterNextNavigation(router, action) {
        router.events
          .pipe(
            (0, filter.p)(
              (e) =>
                e instanceof NavigationEnd ||
                e instanceof NavigationCancel ||
                e instanceof NavigationError ||
                e instanceof NavigationSkipped,
            ),
            (0, map.T)((e) => {
              if (e instanceof NavigationEnd || e instanceof NavigationSkipped)
                return NavigationResult.COMPLETE;
              return e instanceof NavigationCancel &&
                (e.code === NavigationCancellationCode.Redirect ||
                  e.code ===
                    NavigationCancellationCode.SupersededByNewNavigation)
                ? NavigationResult.REDIRECTING
                : NavigationResult.FAILED;
            }),
            (0, filter.p)((result) => result !== NavigationResult.REDIRECTING),
            (0, take.s)(1),
          )
          .subscribe(() => {
            action();
          });
      }
      function defaultErrorHandler(error) {
        throw error;
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          HistoryStateManager,
          [{ type: core.Injectable, args: [{ providedIn: "root" }] }],
          null,
          null,
        ),
        (function (NavigationResult) {
          (NavigationResult[(NavigationResult.COMPLETE = 0)] = "COMPLETE"),
            (NavigationResult[(NavigationResult.FAILED = 1)] = "FAILED"),
            (NavigationResult[(NavigationResult.REDIRECTING = 2)] =
              "REDIRECTING");
        })(NavigationResult || (NavigationResult = {}));
      const exactMatchOptions = {
          paths: "exact",
          fragment: "ignored",
          matrixParams: "ignored",
          queryParams: "exact",
        },
        subsetMatchOptions = {
          paths: "subset",
          fragment: "ignored",
          matrixParams: "ignored",
          queryParams: "subset",
        };
      class Router {
        get currentUrlTree() {
          return this.stateManager.getCurrentUrlTree();
        }
        get rawUrlTree() {
          return this.stateManager.getRawUrlTree();
        }
        get events() {
          return this._events;
        }
        get routerState() {
          return this.stateManager.getRouterState();
        }
        constructor() {
          (this.disposed = !1),
            (this.isNgZoneEnabled = !1),
            (this.console = (0, core.inject)(core["ɵConsole"])),
            (this.stateManager = (0, core.inject)(StateManager)),
            (this.options =
              (0, core.inject)(ROUTER_CONFIGURATION, { optional: !0 }) || {}),
            (this.pendingTasks = (0, core.inject)(core["ɵPendingTasks"])),
            (this.urlUpdateStrategy =
              this.options.urlUpdateStrategy || "deferred"),
            (this.navigationTransitions = (0, core.inject)(
              NavigationTransitions,
            )),
            (this.urlSerializer = (0, core.inject)(UrlSerializer)),
            (this.location = (0, core.inject)(common.Location)),
            (this.urlHandlingStrategy = (0, core.inject)(UrlHandlingStrategy)),
            (this._events = new Subject.B()),
            (this.errorHandler =
              this.options.errorHandler || defaultErrorHandler),
            (this.navigated = !1),
            (this.routeReuseStrategy = (0, core.inject)(RouteReuseStrategy)),
            (this.onSameUrlNavigation =
              this.options.onSameUrlNavigation || "ignore"),
            (this.config =
              (0, core.inject)(ROUTES, { optional: !0 })?.flat() ?? []),
            (this.componentInputBindingEnabled = !!(0, core.inject)(
              INPUT_BINDER,
              { optional: !0 },
            )),
            (this.eventsSubscription = new Subscription.yU()),
            (this.isNgZoneEnabled =
              (0, core.inject)(core.NgZone) instanceof core.NgZone &&
              core.NgZone.isInAngularZone()),
            this.resetConfig(this.config),
            this.navigationTransitions
              .setupNavigations(this, this.currentUrlTree, this.routerState)
              .subscribe({
                error: (e) => {
                  this.console.warn(
                    ngDevMode ? `Unhandled Navigation Error: ${e}` : e,
                  );
                },
              }),
            this.subscribeToNavigationEvents();
        }
        subscribeToNavigationEvents() {
          const subscription = this.navigationTransitions.events.subscribe(
            (e) => {
              try {
                const currentTransition =
                    this.navigationTransitions.currentTransition,
                  currentNavigation =
                    this.navigationTransitions.currentNavigation;
                if (null !== currentTransition && null !== currentNavigation)
                  if (
                    (this.stateManager.handleRouterEvent(e, currentNavigation),
                    e instanceof NavigationCancel &&
                      e.code !== NavigationCancellationCode.Redirect &&
                      e.code !==
                        NavigationCancellationCode.SupersededByNewNavigation)
                  )
                    this.navigated = !0;
                  else if (e instanceof NavigationEnd) this.navigated = !0;
                  else if (e instanceof RedirectRequest) {
                    const mergedTree = this.urlHandlingStrategy.merge(
                        e.url,
                        currentTransition.currentRawUrl,
                      ),
                      extras = {
                        info: currentTransition.extras.info,
                        skipLocationChange:
                          currentTransition.extras.skipLocationChange,
                        replaceUrl:
                          "eager" === this.urlUpdateStrategy ||
                          ((source = currentTransition.source),
                          "imperative" !== source),
                      };
                    this.scheduleNavigation(
                      mergedTree,
                      "imperative",
                      null,
                      extras,
                      {
                        resolve: currentTransition.resolve,
                        reject: currentTransition.reject,
                        promise: currentTransition.promise,
                      },
                    );
                  }
                (function isPublicRouterEvent(e) {
                  return !(
                    e instanceof BeforeActivateRoutes ||
                    e instanceof RedirectRequest
                  );
                })(e) && this._events.next(e);
              } catch (e) {
                this.navigationTransitions.transitionAbortSubject.next(e);
              }
              var source;
            },
          );
          this.eventsSubscription.add(subscription);
        }
        resetRootComponentType(rootComponentType) {
          (this.routerState.root.component = rootComponentType),
            (this.navigationTransitions.rootComponentType = rootComponentType);
        }
        initialNavigation() {
          this.setUpLocationChangeListener(),
            this.navigationTransitions.hasRequestedNavigation ||
              this.navigateToSyncWithBrowser(
                this.location.path(!0),
                "imperative",
                this.stateManager.restoredState(),
              );
        }
        setUpLocationChangeListener() {
          this.nonRouterCurrentEntryChangeSubscription ??=
            this.stateManager.registerNonRouterCurrentEntryChangeListener(
              (url, state) => {
                setTimeout(() => {
                  this.navigateToSyncWithBrowser(url, "popstate", state);
                }, 0);
              },
            );
        }
        navigateToSyncWithBrowser(url, source, state) {
          const extras = { replaceUrl: !0 },
            restoredState = state?.navigationId ? state : null;
          if (state) {
            const stateCopy = { ...state };
            delete stateCopy.navigationId,
              delete stateCopy.ɵrouterPageId,
              0 !== Object.keys(stateCopy).length && (extras.state = stateCopy);
          }
          const urlTree = this.parseUrl(url);
          this.scheduleNavigation(urlTree, source, restoredState, extras);
        }
        get url() {
          return this.serializeUrl(this.currentUrlTree);
        }
        getCurrentNavigation() {
          return this.navigationTransitions.currentNavigation;
        }
        get lastSuccessfulNavigation() {
          return this.navigationTransitions.lastSuccessfulNavigation;
        }
        resetConfig(config) {
          ("undefined" == typeof ngDevMode || ngDevMode) &&
            validateConfig(config),
            (this.config = config.map(standardizeConfig)),
            (this.navigated = !1);
        }
        ngOnDestroy() {
          this.dispose();
        }
        dispose() {
          this.navigationTransitions.complete(),
            this.nonRouterCurrentEntryChangeSubscription &&
              (this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),
              (this.nonRouterCurrentEntryChangeSubscription = void 0)),
            (this.disposed = !0),
            this.eventsSubscription.unsubscribe();
        }
        createUrlTree(commands, navigationExtras = {}) {
          const {
              relativeTo,
              queryParams,
              fragment,
              queryParamsHandling,
              preserveFragment,
            } = navigationExtras,
            f = preserveFragment ? this.currentUrlTree.fragment : fragment;
          let relativeToUrlSegmentGroup,
            q = null;
          switch (queryParamsHandling) {
            case "merge":
              q = { ...this.currentUrlTree.queryParams, ...queryParams };
              break;
            case "preserve":
              q = this.currentUrlTree.queryParams;
              break;
            default:
              q = queryParams || null;
          }
          null !== q && (q = this.removeEmptyProps(q));
          try {
            relativeToUrlSegmentGroup = createSegmentGroupFromRoute(
              relativeTo ? relativeTo.snapshot : this.routerState.snapshot.root,
            );
          } catch (e) {
            ("string" == typeof commands[0] && commands[0].startsWith("/")) ||
              (commands = []),
              (relativeToUrlSegmentGroup = this.currentUrlTree.root);
          }
          return createUrlTreeFromSegmentGroup(
            relativeToUrlSegmentGroup,
            commands,
            q,
            f ?? null,
          );
        }
        navigateByUrl(url, extras = { skipLocationChange: !1 }) {
          ("undefined" == typeof ngDevMode || ngDevMode) &&
            this.isNgZoneEnabled &&
            !core.NgZone.isInAngularZone() &&
            this.console.warn(
              "Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?",
            );
          const urlTree = isUrlTree(url) ? url : this.parseUrl(url),
            mergedTree = this.urlHandlingStrategy.merge(
              urlTree,
              this.rawUrlTree,
            );
          return this.scheduleNavigation(
            mergedTree,
            "imperative",
            null,
            extras,
          );
        }
        navigate(commands, extras = { skipLocationChange: !1 }) {
          return (
            (function validateCommands(commands) {
              for (let i = 0; i < commands.length; i++) {
                const cmd = commands[i];
                if (null == cmd)
                  throw new core["ɵRuntimeError"](
                    4008,
                    ("undefined" == typeof ngDevMode || ngDevMode) &&
                      `The requested path contains ${cmd} segment at index ${i}`,
                  );
              }
            })(commands),
            this.navigateByUrl(this.createUrlTree(commands, extras), extras)
          );
        }
        serializeUrl(url) {
          return this.urlSerializer.serialize(url);
        }
        parseUrl(url) {
          try {
            return this.urlSerializer.parse(url);
          } catch {
            return this.urlSerializer.parse("/");
          }
        }
        isActive(url, matchOptions) {
          let options;
          if (
            ((options =
              !0 === matchOptions
                ? { ...exactMatchOptions }
                : !1 === matchOptions
                  ? { ...subsetMatchOptions }
                  : matchOptions),
            isUrlTree(url))
          )
            return containsTree(this.currentUrlTree, url, options);
          const urlTree = this.parseUrl(url);
          return containsTree(this.currentUrlTree, urlTree, options);
        }
        removeEmptyProps(params) {
          return Object.entries(params).reduce(
            (result, [key, value]) => (
              null != value && (result[key] = value), result
            ),
            {},
          );
        }
        scheduleNavigation(
          rawUrl,
          source,
          restoredState,
          extras,
          priorPromise,
        ) {
          if (this.disposed) return Promise.resolve(!1);
          let resolve, reject, promise;
          priorPromise
            ? ((resolve = priorPromise.resolve),
              (reject = priorPromise.reject),
              (promise = priorPromise.promise))
            : (promise = new Promise((res, rej) => {
                (resolve = res), (reject = rej);
              }));
          const taskId = this.pendingTasks.add();
          return (
            afterNextNavigation(this, () => {
              queueMicrotask(() => this.pendingTasks.remove(taskId));
            }),
            this.navigationTransitions.handleNavigationRequest({
              source,
              restoredState,
              currentUrlTree: this.currentUrlTree,
              currentRawUrl: this.currentUrlTree,
              rawUrl,
              extras,
              resolve,
              reject,
              promise,
              currentSnapshot: this.routerState.snapshot,
              currentRouterState: this.routerState,
            }),
            promise.catch((e) => Promise.reject(e))
          );
        }
        static #_ = (this.ɵfac = function Router_Factory(t) {
          return new (t || Router)();
        });
        static #_2 = (this.ɵprov = core["ɵɵdefineInjectable"]({
          token: Router,
          factory: Router.ɵfac,
          providedIn: "root",
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          Router,
          [{ type: core.Injectable, args: [{ providedIn: "root" }] }],
          () => [],
          null,
        );
      class RouterLink {
        constructor(
          router,
          route,
          tabIndexAttribute,
          renderer,
          el,
          locationStrategy,
        ) {
          (this.router = router),
            (this.route = route),
            (this.tabIndexAttribute = tabIndexAttribute),
            (this.renderer = renderer),
            (this.el = el),
            (this.locationStrategy = locationStrategy),
            (this.href = null),
            (this.commands = null),
            (this.onChanges = new Subject.B()),
            (this.preserveFragment = !1),
            (this.skipLocationChange = !1),
            (this.replaceUrl = !1);
          const tagName = el.nativeElement.tagName?.toLowerCase();
          (this.isAnchorElement = "a" === tagName || "area" === tagName),
            this.isAnchorElement
              ? (this.subscription = router.events.subscribe((s) => {
                  s instanceof NavigationEnd && this.updateHref();
                }))
              : this.setTabIndexIfNotOnNativeEl("0");
        }
        setTabIndexIfNotOnNativeEl(newTabIndex) {
          null != this.tabIndexAttribute ||
            this.isAnchorElement ||
            this.applyAttributeValue("tabindex", newTabIndex);
        }
        ngOnChanges(changes) {
          this.isAnchorElement && this.updateHref(), this.onChanges.next(this);
        }
        set routerLink(commands) {
          null != commands
            ? ((this.commands = Array.isArray(commands)
                ? commands
                : [commands]),
              this.setTabIndexIfNotOnNativeEl("0"))
            : ((this.commands = null), this.setTabIndexIfNotOnNativeEl(null));
        }
        onClick(button, ctrlKey, shiftKey, altKey, metaKey) {
          const urlTree = this.urlTree;
          if (null === urlTree) return !0;
          if (this.isAnchorElement) {
            if (0 !== button || ctrlKey || shiftKey || altKey || metaKey)
              return !0;
            if ("string" == typeof this.target && "_self" != this.target)
              return !0;
          }
          const extras = {
            skipLocationChange: this.skipLocationChange,
            replaceUrl: this.replaceUrl,
            state: this.state,
            info: this.info,
          };
          return (
            this.router.navigateByUrl(urlTree, extras), !this.isAnchorElement
          );
        }
        ngOnDestroy() {
          this.subscription?.unsubscribe();
        }
        updateHref() {
          const urlTree = this.urlTree;
          this.href =
            null !== urlTree && this.locationStrategy
              ? this.locationStrategy?.prepareExternalUrl(
                  this.router.serializeUrl(urlTree),
                )
              : null;
          const sanitizedValue =
            null === this.href
              ? null
              : (0, core["ɵɵsanitizeUrlOrResourceUrl"])(
                  this.href,
                  this.el.nativeElement.tagName.toLowerCase(),
                  "href",
                );
          this.applyAttributeValue("href", sanitizedValue);
        }
        applyAttributeValue(attrName, attrValue) {
          const renderer = this.renderer,
            nativeElement = this.el.nativeElement;
          null !== attrValue
            ? renderer.setAttribute(nativeElement, attrName, attrValue)
            : renderer.removeAttribute(nativeElement, attrName);
        }
        get urlTree() {
          return null === this.commands
            ? null
            : this.router.createUrlTree(this.commands, {
                relativeTo:
                  void 0 !== this.relativeTo ? this.relativeTo : this.route,
                queryParams: this.queryParams,
                fragment: this.fragment,
                queryParamsHandling: this.queryParamsHandling,
                preserveFragment: this.preserveFragment,
              });
        }
        static #_ = (this.ɵfac = function RouterLink_Factory(t) {
          return new (t || RouterLink)(
            core["ɵɵdirectiveInject"](Router),
            core["ɵɵdirectiveInject"](ActivatedRoute),
            core["ɵɵinjectAttribute"]("tabindex"),
            core["ɵɵdirectiveInject"](core.Renderer2),
            core["ɵɵdirectiveInject"](core.ElementRef),
            core["ɵɵdirectiveInject"](common.LocationStrategy),
          );
        });
        static #_2 = (this.ɵdir = core["ɵɵdefineDirective"]({
          type: RouterLink,
          selectors: [["", "routerLink", ""]],
          hostVars: 1,
          hostBindings: function RouterLink_HostBindings(rf, ctx) {
            1 & rf &&
              core["ɵɵlistener"](
                "click",
                function RouterLink_click_HostBindingHandler($event) {
                  return ctx.onClick(
                    $event.button,
                    $event.ctrlKey,
                    $event.shiftKey,
                    $event.altKey,
                    $event.metaKey,
                  );
                },
              ),
              2 & rf && core["ɵɵattribute"]("target", ctx.target);
          },
          inputs: {
            target: "target",
            queryParams: "queryParams",
            fragment: "fragment",
            queryParamsHandling: "queryParamsHandling",
            state: "state",
            info: "info",
            relativeTo: "relativeTo",
            preserveFragment: [
              core["ɵɵInputFlags"].HasDecoratorInputTransform,
              "preserveFragment",
              "preserveFragment",
              core.booleanAttribute,
            ],
            skipLocationChange: [
              core["ɵɵInputFlags"].HasDecoratorInputTransform,
              "skipLocationChange",
              "skipLocationChange",
              core.booleanAttribute,
            ],
            replaceUrl: [
              core["ɵɵInputFlags"].HasDecoratorInputTransform,
              "replaceUrl",
              "replaceUrl",
              core.booleanAttribute,
            ],
            routerLink: "routerLink",
          },
          standalone: !0,
          features: [
            core["ɵɵInputTransformsFeature"],
            core["ɵɵNgOnChangesFeature"],
          ],
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          RouterLink,
          [
            {
              type: core.Directive,
              args: [{ selector: "[routerLink]", standalone: !0 }],
            },
          ],
          () => [
            { type: Router },
            { type: ActivatedRoute },
            {
              type: void 0,
              decorators: [{ type: core.Attribute, args: ["tabindex"] }],
            },
            { type: core.Renderer2 },
            { type: core.ElementRef },
            { type: common.LocationStrategy },
          ],
          {
            target: [
              { type: core.HostBinding, args: ["attr.target"] },
              { type: core.Input },
            ],
            queryParams: [{ type: core.Input }],
            fragment: [{ type: core.Input }],
            queryParamsHandling: [{ type: core.Input }],
            state: [{ type: core.Input }],
            info: [{ type: core.Input }],
            relativeTo: [{ type: core.Input }],
            preserveFragment: [
              {
                type: core.Input,
                args: [{ transform: core.booleanAttribute }],
              },
            ],
            skipLocationChange: [
              {
                type: core.Input,
                args: [{ transform: core.booleanAttribute }],
              },
            ],
            replaceUrl: [
              {
                type: core.Input,
                args: [{ transform: core.booleanAttribute }],
              },
            ],
            routerLink: [{ type: core.Input }],
            onClick: [
              {
                type: core.HostListener,
                args: [
                  "click",
                  [
                    "$event.button",
                    "$event.ctrlKey",
                    "$event.shiftKey",
                    "$event.altKey",
                    "$event.metaKey",
                  ],
                ],
              },
            ],
          },
        );
      class RouterLinkActive {
        get isActive() {
          return this._isActive;
        }
        constructor(router, element, renderer, cdr, link) {
          (this.router = router),
            (this.element = element),
            (this.renderer = renderer),
            (this.cdr = cdr),
            (this.link = link),
            (this.classes = []),
            (this._isActive = !1),
            (this.routerLinkActiveOptions = { exact: !1 }),
            (this.isActiveChange = new core.EventEmitter()),
            (this.routerEventsSubscription = router.events.subscribe((s) => {
              s instanceof NavigationEnd && this.update();
            }));
        }
        ngAfterContentInit() {
          (0, of.of)(this.links.changes, (0, of.of)(null))
            .pipe((0, mergeAll.U)())
            .subscribe((_) => {
              this.update(), this.subscribeToEachLinkOnChanges();
            });
        }
        subscribeToEachLinkOnChanges() {
          this.linkInputChangesSubscription?.unsubscribe();
          const allLinkChanges = [...this.links.toArray(), this.link]
            .filter((link) => !!link)
            .map((link) => link.onChanges);
          this.linkInputChangesSubscription = (0, from.H)(allLinkChanges)
            .pipe((0, mergeAll.U)())
            .subscribe((link) => {
              this._isActive !== this.isLinkActive(this.router)(link) &&
                this.update();
            });
        }
        set routerLinkActive(data) {
          const classes = Array.isArray(data) ? data : data.split(" ");
          this.classes = classes.filter((c) => !!c);
        }
        ngOnChanges(changes) {
          this.update();
        }
        ngOnDestroy() {
          this.routerEventsSubscription.unsubscribe(),
            this.linkInputChangesSubscription?.unsubscribe();
        }
        update() {
          this.links &&
            this.router.navigated &&
            queueMicrotask(() => {
              const hasActiveLinks = this.hasActiveLinks();
              this.classes.forEach((c) => {
                hasActiveLinks
                  ? this.renderer.addClass(this.element.nativeElement, c)
                  : this.renderer.removeClass(this.element.nativeElement, c);
              }),
                hasActiveLinks && void 0 !== this.ariaCurrentWhenActive
                  ? this.renderer.setAttribute(
                      this.element.nativeElement,
                      "aria-current",
                      this.ariaCurrentWhenActive.toString(),
                    )
                  : this.renderer.removeAttribute(
                      this.element.nativeElement,
                      "aria-current",
                    ),
                this._isActive !== hasActiveLinks &&
                  ((this._isActive = hasActiveLinks),
                  this.cdr.markForCheck(),
                  this.isActiveChange.emit(hasActiveLinks));
            });
        }
        isLinkActive(router) {
          const options = (function isActiveMatchOptions(options) {
            return !!options.paths;
          })(this.routerLinkActiveOptions)
            ? this.routerLinkActiveOptions
            : this.routerLinkActiveOptions.exact || !1;
          return (link) => {
            const urlTree = link.urlTree;
            return !!urlTree && router.isActive(urlTree, options);
          };
        }
        hasActiveLinks() {
          const isActiveCheckFn = this.isLinkActive(this.router);
          return (
            (this.link && isActiveCheckFn(this.link)) ||
            this.links.some(isActiveCheckFn)
          );
        }
        static #_ = (this.ɵfac = function RouterLinkActive_Factory(t) {
          return new (t || RouterLinkActive)(
            core["ɵɵdirectiveInject"](Router),
            core["ɵɵdirectiveInject"](core.ElementRef),
            core["ɵɵdirectiveInject"](core.Renderer2),
            core["ɵɵdirectiveInject"](core.ChangeDetectorRef),
            core["ɵɵdirectiveInject"](RouterLink, 8),
          );
        });
        static #_2 = (this.ɵdir = core["ɵɵdefineDirective"]({
          type: RouterLinkActive,
          selectors: [["", "routerLinkActive", ""]],
          contentQueries: function RouterLinkActive_ContentQueries(
            rf,
            ctx,
            dirIndex,
          ) {
            if (
              (1 & rf && core["ɵɵcontentQuery"](dirIndex, RouterLink, 5),
              2 & rf)
            ) {
              let _t;
              core["ɵɵqueryRefresh"]((_t = core["ɵɵloadQuery"]())) &&
                (ctx.links = _t);
            }
          },
          inputs: {
            routerLinkActiveOptions: "routerLinkActiveOptions",
            ariaCurrentWhenActive: "ariaCurrentWhenActive",
            routerLinkActive: "routerLinkActive",
          },
          outputs: { isActiveChange: "isActiveChange" },
          exportAs: ["routerLinkActive"],
          standalone: !0,
          features: [core["ɵɵNgOnChangesFeature"]],
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          RouterLinkActive,
          [
            {
              type: core.Directive,
              args: [
                {
                  selector: "[routerLinkActive]",
                  exportAs: "routerLinkActive",
                  standalone: !0,
                },
              ],
            },
          ],
          () => [
            { type: Router },
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: core.ChangeDetectorRef },
            { type: RouterLink, decorators: [{ type: core.Optional }] },
          ],
          {
            links: [
              {
                type: core.ContentChildren,
                args: [RouterLink, { descendants: !0 }],
              },
            ],
            routerLinkActiveOptions: [{ type: core.Input }],
            ariaCurrentWhenActive: [{ type: core.Input }],
            isActiveChange: [{ type: core.Output }],
            routerLinkActive: [{ type: core.Input }],
          },
        );
      class PreloadingStrategy {}
      class PreloadAllModules {
        preload(route, fn) {
          return fn().pipe((0, catchError.W)(() => (0, of.of)(null)));
        }
        static #_ = (this.ɵfac = function PreloadAllModules_Factory(t) {
          return new (t || PreloadAllModules)();
        });
        static #_2 = (this.ɵprov = core["ɵɵdefineInjectable"]({
          token: PreloadAllModules,
          factory: PreloadAllModules.ɵfac,
          providedIn: "root",
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          PreloadAllModules,
          [{ type: core.Injectable, args: [{ providedIn: "root" }] }],
          null,
          null,
        );
      class NoPreloading {
        preload(route, fn) {
          return (0, of.of)(null);
        }
        static #_ = (this.ɵfac = function NoPreloading_Factory(t) {
          return new (t || NoPreloading)();
        });
        static #_2 = (this.ɵprov = core["ɵɵdefineInjectable"]({
          token: NoPreloading,
          factory: NoPreloading.ɵfac,
          providedIn: "root",
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          NoPreloading,
          [{ type: core.Injectable, args: [{ providedIn: "root" }] }],
          null,
          null,
        );
      class RouterPreloader {
        constructor(router, compiler, injector, preloadingStrategy, loader) {
          (this.router = router),
            (this.injector = injector),
            (this.preloadingStrategy = preloadingStrategy),
            (this.loader = loader);
        }
        setUpPreloading() {
          this.subscription = this.router.events
            .pipe(
              (0, filter.p)((e) => e instanceof NavigationEnd),
              (0, concatMap.H)(() => this.preload()),
            )
            .subscribe(() => {});
        }
        preload() {
          return this.processRoutes(this.injector, this.router.config);
        }
        ngOnDestroy() {
          this.subscription && this.subscription.unsubscribe();
        }
        processRoutes(injector, routes) {
          const res = [];
          for (const route of routes) {
            route.providers &&
              !route._injector &&
              (route._injector = (0, core.createEnvironmentInjector)(
                route.providers,
                injector,
                `Route: ${route.path}`,
              ));
            const injectorForCurrentRoute = route._injector ?? injector,
              injectorForChildren =
                route._loadedInjector ?? injectorForCurrentRoute;
            ((route.loadChildren &&
              !route._loadedRoutes &&
              void 0 === route.canLoad) ||
              (route.loadComponent && !route._loadedComponent)) &&
              res.push(this.preloadConfig(injectorForCurrentRoute, route)),
              (route.children || route._loadedRoutes) &&
                res.push(
                  this.processRoutes(
                    injectorForChildren,
                    route.children ?? route._loadedRoutes,
                  ),
                );
          }
          return (0, from.H)(res).pipe((0, mergeAll.U)());
        }
        preloadConfig(injector, route) {
          return this.preloadingStrategy.preload(route, () => {
            let loadedChildren$;
            loadedChildren$ =
              route.loadChildren && void 0 === route.canLoad
                ? this.loader.loadChildren(injector, route)
                : (0, of.of)(null);
            const recursiveLoadChildren$ = loadedChildren$.pipe(
              (0, mergeMap.Z)((config) =>
                null === config
                  ? (0, of.of)(void 0)
                  : ((route._loadedRoutes = config.routes),
                    (route._loadedInjector = config.injector),
                    this.processRoutes(
                      config.injector ?? injector,
                      config.routes,
                    )),
              ),
            );
            if (route.loadComponent && !route._loadedComponent) {
              const loadComponent$ = this.loader.loadComponent(route);
              return (0, from.H)([recursiveLoadChildren$, loadComponent$]).pipe(
                (0, mergeAll.U)(),
              );
            }
            return recursiveLoadChildren$;
          });
        }
        static #_ = (this.ɵfac = function RouterPreloader_Factory(t) {
          return new (t || RouterPreloader)(
            core["ɵɵinject"](Router),
            core["ɵɵinject"](core.Compiler),
            core["ɵɵinject"](core.EnvironmentInjector),
            core["ɵɵinject"](PreloadingStrategy),
            core["ɵɵinject"](RouterConfigLoader),
          );
        });
        static #_2 = (this.ɵprov = core["ɵɵdefineInjectable"]({
          token: RouterPreloader,
          factory: RouterPreloader.ɵfac,
          providedIn: "root",
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          RouterPreloader,
          [{ type: core.Injectable, args: [{ providedIn: "root" }] }],
          () => [
            { type: Router },
            { type: core.Compiler },
            { type: core.EnvironmentInjector },
            { type: PreloadingStrategy },
            { type: RouterConfigLoader },
          ],
          null,
        );
      const ROUTER_SCROLLER = new core.InjectionToken("");
      class RouterScroller {
        constructor(
          urlSerializer,
          transitions,
          viewportScroller,
          zone,
          options = {},
        ) {
          (this.urlSerializer = urlSerializer),
            (this.transitions = transitions),
            (this.viewportScroller = viewportScroller),
            (this.zone = zone),
            (this.options = options),
            (this.lastId = 0),
            (this.lastSource = "imperative"),
            (this.restoredId = 0),
            (this.store = {}),
            (this.environmentInjector = (0, core.inject)(
              core.EnvironmentInjector,
            )),
            (options.scrollPositionRestoration ||= "disabled"),
            (options.anchorScrolling ||= "disabled");
        }
        init() {
          "disabled" !== this.options.scrollPositionRestoration &&
            this.viewportScroller.setHistoryScrollRestoration("manual"),
            (this.routerEventsSubscription = this.createScrollEvents()),
            (this.scrollEventsSubscription = this.consumeScrollEvents());
        }
        createScrollEvents() {
          return this.transitions.events.subscribe((e) => {
            e instanceof NavigationStart
              ? ((this.store[this.lastId] =
                  this.viewportScroller.getScrollPosition()),
                (this.lastSource = e.navigationTrigger),
                (this.restoredId = e.restoredState
                  ? e.restoredState.navigationId
                  : 0))
              : e instanceof NavigationEnd
                ? ((this.lastId = e.id),
                  this.scheduleScrollEvent(
                    e,
                    this.urlSerializer.parse(e.urlAfterRedirects).fragment,
                  ))
                : e instanceof NavigationSkipped &&
                  e.code === NavigationSkippedCode.IgnoredSameUrlNavigation &&
                  ((this.lastSource = void 0),
                  (this.restoredId = 0),
                  this.scheduleScrollEvent(
                    e,
                    this.urlSerializer.parse(e.url).fragment,
                  ));
          });
        }
        consumeScrollEvents() {
          return this.transitions.events.subscribe((e) => {
            e instanceof Scroll &&
              (e.position
                ? "top" === this.options.scrollPositionRestoration
                  ? this.viewportScroller.scrollToPosition([0, 0])
                  : "enabled" === this.options.scrollPositionRestoration &&
                    this.viewportScroller.scrollToPosition(e.position)
                : e.anchor && "enabled" === this.options.anchorScrolling
                  ? this.viewportScroller.scrollToAnchor(e.anchor)
                  : "disabled" !== this.options.scrollPositionRestoration &&
                    this.viewportScroller.scrollToPosition([0, 0]));
          });
        }
        scheduleScrollEvent(routerEvent, anchor) {
          var _this = this;
          this.zone.runOutsideAngular(
            (0, asyncToGenerator.A)(function* () {
              yield new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                }),
                  (0, core.afterNextRender)(
                    () => {
                      resolve();
                    },
                    { injector: _this.environmentInjector },
                  );
              }),
                _this.zone.run(() => {
                  _this.transitions.events.next(
                    new Scroll(
                      routerEvent,
                      "popstate" === _this.lastSource
                        ? _this.store[_this.restoredId]
                        : null,
                      anchor,
                    ),
                  );
                });
            }),
          );
        }
        ngOnDestroy() {
          this.routerEventsSubscription?.unsubscribe(),
            this.scrollEventsSubscription?.unsubscribe();
        }
        static #_ = (this.ɵfac = function RouterScroller_Factory(t) {
          core["ɵɵinvalidFactory"]();
        });
        static #_2 = (this.ɵprov = core["ɵɵdefineInjectable"]({
          token: RouterScroller,
          factory: RouterScroller.ɵfac,
        }));
      }
      function provideRouter(routes, ...features) {
        return (0, core.makeEnvironmentProviders)([
          { provide: ROUTES, multi: !0, useValue: routes },
          "undefined" == typeof ngDevMode || ngDevMode
            ? { provide: ROUTER_IS_PROVIDED, useValue: !0 }
            : [],
          { provide: ActivatedRoute, useFactory: rootRoute, deps: [Router] },
          {
            provide: core.APP_BOOTSTRAP_LISTENER,
            multi: !0,
            useFactory: getBootstrapListener,
          },
          features.map((feature) => feature.ɵproviders),
        ]);
      }
      function rootRoute(router) {
        return router.routerState.root;
      }
      function routerFeature(kind, providers) {
        return { ɵkind: kind, ɵproviders: providers };
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          RouterScroller,
          [{ type: core.Injectable }],
          () => [
            { type: UrlSerializer },
            { type: NavigationTransitions },
            { type: common.ViewportScroller },
            { type: core.NgZone },
            { type: void 0 },
          ],
          null,
        );
      const ROUTER_IS_PROVIDED = new core.InjectionToken("", {
        providedIn: "root",
        factory: () => !1,
      });
      core.ENVIRONMENT_INITIALIZER;
      function getBootstrapListener() {
        const injector = (0, core.inject)(core.Injector);
        return (bootstrappedComponentRef) => {
          const ref = injector.get(core.ApplicationRef);
          if (bootstrappedComponentRef !== ref.components[0]) return;
          const router = injector.get(Router),
            bootstrapDone = injector.get(BOOTSTRAP_DONE);
          1 === injector.get(INITIAL_NAVIGATION) && router.initialNavigation(),
            injector
              .get(ROUTER_PRELOADER, null, core.InjectFlags.Optional)
              ?.setUpPreloading(),
            injector
              .get(ROUTER_SCROLLER, null, core.InjectFlags.Optional)
              ?.init(),
            router.resetRootComponentType(ref.componentTypes[0]),
            bootstrapDone.closed ||
              (bootstrapDone.next(),
              bootstrapDone.complete(),
              bootstrapDone.unsubscribe());
        };
      }
      const BOOTSTRAP_DONE = new core.InjectionToken(
          "undefined" == typeof ngDevMode || ngDevMode
            ? "bootstrap done indicator"
            : "",
          { factory: () => new Subject.B() },
        ),
        INITIAL_NAVIGATION = new core.InjectionToken(
          "undefined" == typeof ngDevMode || ngDevMode
            ? "initial navigation"
            : "",
          { providedIn: "root", factory: () => 1 },
        );
      function withDisabledInitialNavigation() {
        return routerFeature(3, [
          {
            provide: core.APP_INITIALIZER,
            multi: !0,
            useFactory: () => {
              const router = (0, core.inject)(Router);
              return () => {
                router.setUpLocationChangeListener();
              };
            },
          },
          { provide: INITIAL_NAVIGATION, useValue: 2 },
        ]);
      }
      function withDebugTracing() {
        let providers = [];
        return (
          (providers =
            "undefined" == typeof ngDevMode || ngDevMode
              ? [
                  {
                    provide: core.ENVIRONMENT_INITIALIZER,
                    multi: !0,
                    useFactory: () => {
                      const router = (0, core.inject)(Router);
                      return () =>
                        router.events.subscribe((e) => {
                          console.group?.(
                            `Router Event: ${e.constructor.name}`,
                          ),
                            console.log(
                              (function stringifyEvent(routerEvent) {
                                switch (routerEvent.type) {
                                  case EventType.ActivationEnd:
                                    return `ActivationEnd(path: '${routerEvent.snapshot.routeConfig?.path || ""}')`;
                                  case EventType.ActivationStart:
                                    return `ActivationStart(path: '${routerEvent.snapshot.routeConfig?.path || ""}')`;
                                  case EventType.ChildActivationEnd:
                                    return `ChildActivationEnd(path: '${routerEvent.snapshot.routeConfig?.path || ""}')`;
                                  case EventType.ChildActivationStart:
                                    return `ChildActivationStart(path: '${routerEvent.snapshot.routeConfig?.path || ""}')`;
                                  case EventType.GuardsCheckEnd:
                                    return `GuardsCheckEnd(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}', state: ${routerEvent.state}, shouldActivate: ${routerEvent.shouldActivate})`;
                                  case EventType.GuardsCheckStart:
                                    return `GuardsCheckStart(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}', state: ${routerEvent.state})`;
                                  case EventType.NavigationCancel:
                                    return `NavigationCancel(id: ${routerEvent.id}, url: '${routerEvent.url}')`;
                                  case EventType.NavigationSkipped:
                                    return `NavigationSkipped(id: ${routerEvent.id}, url: '${routerEvent.url}')`;
                                  case EventType.NavigationEnd:
                                    return `NavigationEnd(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}')`;
                                  case EventType.NavigationError:
                                    return `NavigationError(id: ${routerEvent.id}, url: '${routerEvent.url}', error: ${routerEvent.error})`;
                                  case EventType.NavigationStart:
                                    return `NavigationStart(id: ${routerEvent.id}, url: '${routerEvent.url}')`;
                                  case EventType.ResolveEnd:
                                    return `ResolveEnd(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}', state: ${routerEvent.state})`;
                                  case EventType.ResolveStart:
                                    return `ResolveStart(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}', state: ${routerEvent.state})`;
                                  case EventType.RouteConfigLoadEnd:
                                    return `RouteConfigLoadEnd(path: ${routerEvent.route.path})`;
                                  case EventType.RouteConfigLoadStart:
                                    return `RouteConfigLoadStart(path: ${routerEvent.route.path})`;
                                  case EventType.RoutesRecognized:
                                    return `RoutesRecognized(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}', state: ${routerEvent.state})`;
                                  case EventType.Scroll:
                                    const pos = routerEvent.position
                                      ? `${routerEvent.position[0]}, ${routerEvent.position[1]}`
                                      : null;
                                    return `Scroll(anchor: '${routerEvent.anchor}', position: '${pos}')`;
                                }
                              })(e),
                            ),
                            console.log(e),
                            console.groupEnd?.();
                        });
                    },
                  },
                ]
              : []),
          routerFeature(1, providers)
        );
      }
      const ROUTER_PRELOADER = new core.InjectionToken(
        "undefined" == typeof ngDevMode || ngDevMode ? "router preloader" : "",
      );
      const ROUTER_DIRECTIVES = [
          RouterOutlet,
          RouterLink,
          RouterLinkActive,
          ɵEmptyOutletComponent,
        ],
        ROUTER_FORROOT_GUARD = new core.InjectionToken(
          "undefined" == typeof ngDevMode || ngDevMode
            ? "router duplicate forRoot guard"
            : "ROUTER_FORROOT_GUARD",
        ),
        ROUTER_PROVIDERS = [
          common.Location,
          { provide: UrlSerializer, useClass: DefaultUrlSerializer },
          Router,
          ChildrenOutletContexts,
          { provide: ActivatedRoute, useFactory: rootRoute, deps: [Router] },
          RouterConfigLoader,
          "undefined" == typeof ngDevMode || ngDevMode
            ? { provide: ROUTER_IS_PROVIDED, useValue: !0 }
            : [],
        ];
      class RouterModule {
        constructor(guard) {}
        static forRoot(routes, config) {
          return {
            ngModule: RouterModule,
            providers: [
              ROUTER_PROVIDERS,
              ("undefined" == typeof ngDevMode || ngDevMode) &&
              config?.enableTracing
                ? withDebugTracing().ɵproviders
                : [],
              { provide: ROUTES, multi: !0, useValue: routes },
              {
                provide: ROUTER_FORROOT_GUARD,
                useFactory: provideForRootGuard,
                deps: [[Router, new core.Optional(), new core.SkipSelf()]],
              },
              { provide: ROUTER_CONFIGURATION, useValue: config || {} },
              config?.useHash
                ? {
                    provide: common.LocationStrategy,
                    useClass: common.HashLocationStrategy,
                  }
                : {
                    provide: common.LocationStrategy,
                    useClass: common.PathLocationStrategy,
                  },
              {
                provide: ROUTER_SCROLLER,
                useFactory: () => {
                  const viewportScroller = (0, core.inject)(
                      common.ViewportScroller,
                    ),
                    zone = (0, core.inject)(core.NgZone),
                    config = (0, core.inject)(ROUTER_CONFIGURATION),
                    transitions = (0, core.inject)(NavigationTransitions),
                    urlSerializer = (0, core.inject)(UrlSerializer);
                  return (
                    config.scrollOffset &&
                      viewportScroller.setOffset(config.scrollOffset),
                    new RouterScroller(
                      urlSerializer,
                      transitions,
                      viewportScroller,
                      zone,
                      config,
                    )
                  );
                },
              },
              config?.preloadingStrategy
                ? ((preloadingStrategy = config.preloadingStrategy),
                  routerFeature(0, [
                    { provide: ROUTER_PRELOADER, useExisting: RouterPreloader },
                    {
                      provide: PreloadingStrategy,
                      useExisting: preloadingStrategy,
                    },
                  ])).ɵproviders
                : [],
              config?.initialNavigation ? provideInitialNavigation(config) : [],
              config?.bindToComponentInputs
                ? routerFeature(8, [
                    RoutedComponentInputBinder,
                    {
                      provide: INPUT_BINDER,
                      useExisting: RoutedComponentInputBinder,
                    },
                  ]).ɵproviders
                : [],
              config?.enableViewTransitions
                ? routerFeature(9, [
                    {
                      provide: CREATE_VIEW_TRANSITION,
                      useValue: createViewTransition,
                    },
                    {
                      provide: VIEW_TRANSITION_OPTIONS,
                      useValue: {
                        skipNextTransition: !!options?.skipInitialTransition,
                        ...options,
                      },
                    },
                  ]).ɵproviders
                : [],
              [
                {
                  provide: ROUTER_INITIALIZER,
                  useFactory: getBootstrapListener,
                },
                {
                  provide: core.APP_BOOTSTRAP_LISTENER,
                  multi: !0,
                  useExisting: ROUTER_INITIALIZER,
                },
              ],
            ],
          };
          var options, preloadingStrategy;
        }
        static forChild(routes) {
          return {
            ngModule: RouterModule,
            providers: [{ provide: ROUTES, multi: !0, useValue: routes }],
          };
        }
        static #_ = (this.ɵfac = function RouterModule_Factory(t) {
          return new (t || RouterModule)(
            core["ɵɵinject"](ROUTER_FORROOT_GUARD, 8),
          );
        });
        static #_2 = (this.ɵmod = core["ɵɵdefineNgModule"]({
          type: RouterModule,
          imports: [
            RouterOutlet,
            RouterLink,
            RouterLinkActive,
            ɵEmptyOutletComponent,
          ],
          exports: [
            RouterOutlet,
            RouterLink,
            RouterLinkActive,
            ɵEmptyOutletComponent,
          ],
        }));
        static #_3 = (this.ɵinj = core["ɵɵdefineInjector"]({}));
      }
      function provideForRootGuard(router) {
        if (("undefined" == typeof ngDevMode || ngDevMode) && router)
          throw new core["ɵRuntimeError"](
            4007,
            "The Router was provided more than once. This can happen if 'forRoot' is used outside of the root injector. Lazy loaded modules should use RouterModule.forChild() instead.",
          );
        return "guarded";
      }
      function provideInitialNavigation(config) {
        return [
          "disabled" === config.initialNavigation
            ? withDisabledInitialNavigation().ɵproviders
            : [],
          "enabledBlocking" === config.initialNavigation
            ? routerFeature(2, [
                { provide: INITIAL_NAVIGATION, useValue: 0 },
                {
                  provide: core.APP_INITIALIZER,
                  multi: !0,
                  deps: [core.Injector],
                  useFactory: (injector) => {
                    const locationInitialized = injector.get(
                      common.LOCATION_INITIALIZED,
                      Promise.resolve(),
                    );
                    return () =>
                      locationInitialized.then(
                        () =>
                          new Promise((resolve) => {
                            const router = injector.get(Router),
                              bootstrapDone = injector.get(BOOTSTRAP_DONE);
                            afterNextNavigation(router, () => {
                              resolve(!0);
                            }),
                              (injector.get(
                                NavigationTransitions,
                              ).afterPreactivation = () => (
                                resolve(!0),
                                bootstrapDone.closed
                                  ? (0, of.of)(void 0)
                                  : bootstrapDone
                              )),
                              router.initialNavigation();
                          }),
                      );
                  },
                },
              ]).ɵproviders
            : [],
        ];
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          RouterModule,
          [
            {
              type: core.NgModule,
              args: [
                { imports: ROUTER_DIRECTIVES, exports: ROUTER_DIRECTIVES },
              ],
            },
          ],
          () => [
            {
              type: void 0,
              decorators: [
                { type: core.Optional },
                { type: core.Inject, args: [ROUTER_FORROOT_GUARD] },
              ],
            },
          ],
          null,
        );
      const ROUTER_INITIALIZER = new core.InjectionToken(
        "undefined" == typeof ngDevMode || ngDevMode
          ? "Router Initializer"
          : "",
      );
      new core.Version("17.3.11");
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
