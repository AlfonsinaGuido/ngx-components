"use strict";
(self.webpackChunk_aseinfo_evolution_web_components =
  self.webpackChunk_aseinfo_evolution_web_components || []).push([
  [787],
  {
    "./node_modules/@storybook/addon-docs/dist/DocsRenderer-K4EAMTCU.mjs": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          DocsRenderer: () => DocsRenderer,
          defaultComponents: () => defaultComponents,
        });
      var asyncToGenerator = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js",
        ),
        react = __webpack_require__("./node_modules/react/index.js"),
        client = __webpack_require__("./node_modules/react-dom/client.js"),
        nodes = new Map(),
        WithCallback = ({ callback, children }) => {
          let once = (0, react.useRef)();
          return (
            (0, react.useLayoutEffect)(() => {
              once.current !== callback &&
                ((once.current = callback), callback());
            }, [callback]),
            children
          );
        },
        renderElement = (function () {
          var _ref = (0, asyncToGenerator.A)(function* (node, el, rootOptions) {
            let root = yield getReactRoot(el, rootOptions);
            return new Promise((resolve) => {
              root.render(
                react.createElement(
                  WithCallback,
                  { callback: () => resolve(null) },
                  node,
                ),
              );
            });
          });
          return function renderElement(_x, _x2, _x3) {
            return _ref.apply(this, arguments);
          };
        })(),
        getReactRoot = (function () {
          var _ref2 = (0, asyncToGenerator.A)(function* (el, rootOptions) {
            let root = nodes.get(el);
            return (
              root ||
                ((root = client.createRoot(el, rootOptions)),
                nodes.set(el, root)),
              root
            );
          });
          return function getReactRoot(_x4, _x5) {
            return _ref2.apply(this, arguments);
          };
        })(),
        dist = __webpack_require__(
          "./node_modules/@storybook/blocks/dist/index.mjs",
        ),
        defaultComponents = { code: dist.XA, a: dist.zE, ...dist.Sw },
        ErrorBoundary = class extends react.Component {
          constructor() {
            super(...arguments), (this.state = { hasError: !1 });
          }
          static getDerivedStateFromError() {
            return { hasError: !0 };
          }
          componentDidCatch(err) {
            let { showException } = this.props;
            showException(err);
          }
          render() {
            let { hasError } = this.state,
              { children } = this.props;
            return hasError
              ? null
              : react.createElement(react.Fragment, null, children);
          }
        },
        DocsRenderer = class {
          constructor() {
            (this.render = (function () {
              var _ref = (0, asyncToGenerator.A)(
                function* (context, docsParameter, element) {
                  let components = {
                      ...defaultComponents,
                      ...docsParameter?.components,
                    },
                    TDocs = dist.kQ;
                  return new Promise((resolve, reject) => {
                    __webpack_require__
                      .e(5944)
                      .then(
                        __webpack_require__.bind(
                          __webpack_require__,
                          "./node_modules/@mdx-js/react/index.js",
                        ),
                      )
                      .then(({ MDXProvider }) =>
                        renderElement(
                          react.createElement(
                            ErrorBoundary,
                            { showException: reject, key: Math.random() },
                            react.createElement(
                              MDXProvider,
                              { components },
                              react.createElement(TDocs, {
                                context,
                                docsParameter,
                              }),
                            ),
                          ),
                          element,
                        ),
                      )
                      .then(() => resolve());
                  });
                },
              );
              return function (_x, _x2, _x3) {
                return _ref.apply(this, arguments);
              };
            })()),
              (this.unmount = (element) => {
                ((el, shouldUseNewRootApi) => {
                  let root = nodes.get(el);
                  root && (root.unmount(), nodes.delete(el));
                })(element);
              });
          }
        };
      __webpack_require__(
        "./node_modules/@storybook/addon-docs/dist/chunk-GN5PWX3D.mjs",
      );
    },
    "./node_modules/react-dom/client.js": (
      __unused_webpack_module,
      exports,
      __webpack_require__,
    ) => {
      var m = __webpack_require__("./node_modules/react-dom/index.js");
      (exports.createRoot = m.createRoot),
        (exports.hydrateRoot = m.hydrateRoot);
    },
  },
]);
