import {
  ARGTYPES_INFO_REQUEST,
  ARGTYPES_INFO_RESPONSE,
  Addon_TypesEnum,
  AlertIcon,
  ArrowLeftIcon,
  Badge,
  BottomBarIcon,
  BottomBarToggleIcon,
  Button,
  CREATE_NEW_STORYFILE_REQUEST,
  CREATE_NEW_STORYFILE_RESPONSE,
  CheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CircleIcon,
  CloseAltIcon,
  CloseIcon,
  CogIcon,
  CollapseIcon,
  ComponentIcon,
  DocumentIcon,
  EmptyTabContent,
  ErrorFormatter,
  ExpandAltIcon,
  ExpandIcon,
  EyeCloseIcon,
  EyeIcon,
  FILE_COMPONENT_SEARCH_REQUEST,
  FILE_COMPONENT_SEARCH_RESPONSE,
  FORCE_REMOUNT,
  Form,
  GithubIcon,
  GlobeIcon,
  HeartIcon,
  IconButton,
  Icons,
  InfoIcon,
  LightningIcon,
  Link2,
  Link22,
  LinkIcon,
  Loader,
  Location,
  LocationProvider,
  LockIcon,
  ManagerConsumer,
  ManagerProvider,
  Match,
  MenuIcon,
  Modal,
  PRELOAD_ENTRIES,
  PREVIEW_BUILDER_PROGRESS,
  PlusIcon,
  ProviderDoesNotExtendBaseProviderError,
  Route2,
  SAVE_STORY_REQUEST,
  SAVE_STORY_RESPONSE,
  SET_CURRENT_STORY,
  STORIES_COLLAPSE_ALL,
  STORIES_EXPAND_ALL,
  SearchIcon,
  Separator,
  ShareAltIcon,
  SidebarAltIcon,
  Spaced,
  StorybookIcon,
  StorybookLogo,
  SyncIcon,
  TabBar,
  TabButton,
  Tabs,
  TimeIcon,
  TooltipLinkList,
  TooltipNote,
  TrashIcon,
  WandIcon,
  WithTooltip,
  Zoom,
  ZoomIcon,
  ZoomOutIcon,
  ZoomResetIcon,
  __assign,
  addons,
  eventToShortcut,
  experimental_requestResponse,
  getStoryHref,
  merge_default,
  require_isObject,
  require_isSymbol,
  require_lib,
  require_root,
  require_store2,
  shortcutMatchesShortcut,
  shortcutToHumanString,
  typesX,
  useNavigate2,
  useStorybookApi,
  useStorybookState,
} from "./chunk-2IOEGHGR.js";
import { ScrollArea, _extends } from "./chunk-GUVK2GTO.js";
import {
  Global,
  ThemeProvider,
  createGlobal,
  ensure,
  keyframes,
  logger,
  newStyled,
  require_react,
  require_react_dom,
  scope,
  useTheme,
  withTheme,
} from "./chunk-B3YDJJJH.js";
import { __commonJS, __toESM, require_memoizerific } from "./chunk-ZR5JZWHI.js";
var require_client = __commonJS({
  "../../node_modules/react-dom/client.js"(exports) {
    "use strict";
    var m2 = require_react_dom();
    (i2 = m2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED),
      (exports.createRoot = function (c2, o3) {
        i2.usingClientEntryPoint = !0;
        try {
          return m2.createRoot(c2, o3);
        } finally {
          i2.usingClientEntryPoint = !1;
        }
      }),
      (exports.hydrateRoot = function (c2, h2, o3) {
        i2.usingClientEntryPoint = !0;
        try {
          return m2.hydrateRoot(c2, h2, o3);
        } finally {
          i2.usingClientEntryPoint = !1;
        }
      });
    var i2;
  },
});
var require_react_is_development = __commonJS({
  "../../node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    (function () {
      "use strict";
      var hasSymbol = typeof Symbol == "function" && Symbol.for,
        REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103,
        REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106,
        REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107,
        REACT_STRICT_MODE_TYPE = hasSymbol
          ? Symbol.for("react.strict_mode")
          : 60108,
        REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114,
        REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109,
        REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110,
        REACT_ASYNC_MODE_TYPE = hasSymbol
          ? Symbol.for("react.async_mode")
          : 60111,
        REACT_CONCURRENT_MODE_TYPE = hasSymbol
          ? Symbol.for("react.concurrent_mode")
          : 60111,
        REACT_FORWARD_REF_TYPE = hasSymbol
          ? Symbol.for("react.forward_ref")
          : 60112,
        REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113,
        REACT_SUSPENSE_LIST_TYPE = hasSymbol
          ? Symbol.for("react.suspense_list")
          : 60120,
        REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115,
        REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116,
        REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121,
        REACT_FUNDAMENTAL_TYPE = hasSymbol
          ? Symbol.for("react.fundamental")
          : 60117,
        REACT_RESPONDER_TYPE = hasSymbol
          ? Symbol.for("react.responder")
          : 60118,
        REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
      function isValidElementType(type) {
        return (
          typeof type == "string" ||
          typeof type == "function" ||
          type === REACT_FRAGMENT_TYPE ||
          type === REACT_CONCURRENT_MODE_TYPE ||
          type === REACT_PROFILER_TYPE ||
          type === REACT_STRICT_MODE_TYPE ||
          type === REACT_SUSPENSE_TYPE ||
          type === REACT_SUSPENSE_LIST_TYPE ||
          (typeof type == "object" &&
            type !== null &&
            (type.$$typeof === REACT_LAZY_TYPE ||
              type.$$typeof === REACT_MEMO_TYPE ||
              type.$$typeof === REACT_PROVIDER_TYPE ||
              type.$$typeof === REACT_CONTEXT_TYPE ||
              type.$$typeof === REACT_FORWARD_REF_TYPE ||
              type.$$typeof === REACT_FUNDAMENTAL_TYPE ||
              type.$$typeof === REACT_RESPONDER_TYPE ||
              type.$$typeof === REACT_SCOPE_TYPE ||
              type.$$typeof === REACT_BLOCK_TYPE))
        );
      }
      function typeOf(object) {
        if (typeof object == "object" && object !== null) {
          var $$typeof = object.$$typeof;
          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type = object.type;
              switch (type) {
                case REACT_ASYNC_MODE_TYPE:
                case REACT_CONCURRENT_MODE_TYPE:
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                  return type;
                default:
                  var $$typeofType = type && type.$$typeof;
                  switch ($$typeofType) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_LAZY_TYPE:
                    case REACT_MEMO_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;
                    default:
                      return $$typeof;
                  }
              }
            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }
      }
      var AsyncMode = REACT_ASYNC_MODE_TYPE,
        ConcurrentMode = REACT_CONCURRENT_MODE_TYPE,
        ContextConsumer = REACT_CONTEXT_TYPE,
        ContextProvider = REACT_PROVIDER_TYPE,
        Element2 = REACT_ELEMENT_TYPE,
        ForwardRef = REACT_FORWARD_REF_TYPE,
        Fragment9 = REACT_FRAGMENT_TYPE,
        Lazy = REACT_LAZY_TYPE,
        Memo = REACT_MEMO_TYPE,
        Portal = REACT_PORTAL_TYPE,
        Profiler = REACT_PROFILER_TYPE,
        StrictMode = REACT_STRICT_MODE_TYPE,
        Suspense = REACT_SUSPENSE_TYPE,
        hasWarnedAboutDeprecatedIsAsyncMode = !1;
      function isAsyncMode(object) {
        return (
          hasWarnedAboutDeprecatedIsAsyncMode ||
            ((hasWarnedAboutDeprecatedIsAsyncMode = !0),
            console.warn(
              "The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.",
            )),
          isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE
        );
      }
      function isConcurrentMode(object) {
        return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
      }
      function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      }
      function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
      }
      function isElement(object) {
        return (
          typeof object == "object" &&
          object !== null &&
          object.$$typeof === REACT_ELEMENT_TYPE
        );
      }
      function isForwardRef2(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      }
      function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      }
      function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      }
      function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      }
      function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      }
      function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      }
      function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      }
      function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      }
      (exports.AsyncMode = AsyncMode),
        (exports.ConcurrentMode = ConcurrentMode),
        (exports.ContextConsumer = ContextConsumer),
        (exports.ContextProvider = ContextProvider),
        (exports.Element = Element2),
        (exports.ForwardRef = ForwardRef),
        (exports.Fragment = Fragment9),
        (exports.Lazy = Lazy),
        (exports.Memo = Memo),
        (exports.Portal = Portal),
        (exports.Profiler = Profiler),
        (exports.StrictMode = StrictMode),
        (exports.Suspense = Suspense),
        (exports.isAsyncMode = isAsyncMode),
        (exports.isConcurrentMode = isConcurrentMode),
        (exports.isContextConsumer = isContextConsumer),
        (exports.isContextProvider = isContextProvider),
        (exports.isElement = isElement),
        (exports.isForwardRef = isForwardRef2),
        (exports.isFragment = isFragment),
        (exports.isLazy = isLazy),
        (exports.isMemo = isMemo),
        (exports.isPortal = isPortal),
        (exports.isProfiler = isProfiler),
        (exports.isStrictMode = isStrictMode),
        (exports.isSuspense = isSuspense),
        (exports.isValidElementType = isValidElementType),
        (exports.typeOf = typeOf);
    })();
  },
});
var require_react_is = __commonJS({
  "../../node_modules/react-is/index.js"(exports, module) {
    "use strict";
    module.exports = require_react_is_development();
  },
});
var require_object_assign = __commonJS({
  "../../node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols,
      hasOwnProperty = Object.prototype.hasOwnProperty,
      propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val == null)
        throw new TypeError(
          "Object.assign cannot be called with null or undefined",
        );
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) return !1;
        var test1 = new String("abc");
        if (((test1[5] = "de"), Object.getOwnPropertyNames(test1)[0] === "5"))
          return !1;
        for (var test2 = {}, i2 = 0; i2 < 10; i2++)
          test2["_" + String.fromCharCode(i2)] = i2;
        var order2 = Object.getOwnPropertyNames(test2).map(function (n3) {
          return test2[n3];
        });
        if (order2.join("") !== "0123456789") return !1;
        var test3 = {};
        return (
          "abcdefghijklmnopqrst".split("").forEach(function (letter) {
            test3[letter] = letter;
          }),
          Object.keys(Object.assign({}, test3)).join("") ===
            "abcdefghijklmnopqrst"
        );
      } catch {
        return !1;
      }
    }
    module.exports = shouldUseNative()
      ? Object.assign
      : function (target, source) {
          for (
            var from, to = toObject(target), symbols, s2 = 1;
            s2 < arguments.length;
            s2++
          ) {
            from = Object(arguments[s2]);
            for (var key in from)
              hasOwnProperty.call(from, key) && (to[key] = from[key]);
            if (getOwnPropertySymbols) {
              symbols = getOwnPropertySymbols(from);
              for (var i2 = 0; i2 < symbols.length; i2++)
                propIsEnumerable.call(from, symbols[i2]) &&
                  (to[symbols[i2]] = from[symbols[i2]]);
            }
          }
          return to;
        };
  },
});
var require_ReactPropTypesSecret = __commonJS({
  "../../node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  },
});
var require_has = __commonJS({
  "../../node_modules/prop-types/lib/has.js"(exports, module) {
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  },
});
var require_checkPropTypes = __commonJS({
  "../../node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    var printWarning = function () {};
    (ReactPropTypesSecret = require_ReactPropTypesSecret()),
      (loggedTypeFailures = {}),
      (has = require_has()),
      (printWarning = function (text) {
        var message = "Warning: " + text;
        typeof console < "u" && console.error(message);
        try {
          throw new Error(message);
        } catch {}
      });
    var ReactPropTypesSecret, loggedTypeFailures, has;
    function checkPropTypes(
      typeSpecs,
      values,
      location,
      componentName,
      getStack,
    ) {
      for (var typeSpecName in typeSpecs)
        if (has(typeSpecs, typeSpecName)) {
          var error;
          try {
            if (typeof typeSpecs[typeSpecName] != "function") {
              var err = Error(
                (componentName || "React class") +
                  ": " +
                  location +
                  " type `" +
                  typeSpecName +
                  "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
                  typeof typeSpecs[typeSpecName] +
                  "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.",
              );
              throw ((err.name = "Invariant Violation"), err);
            }
            error = typeSpecs[typeSpecName](
              values,
              typeSpecName,
              componentName,
              location,
              null,
              ReactPropTypesSecret,
            );
          } catch (ex) {
            error = ex;
          }
          if (
            (error &&
              !(error instanceof Error) &&
              printWarning(
                (componentName || "React class") +
                  ": type specification of " +
                  location +
                  " `" +
                  typeSpecName +
                  "` is invalid; the type checker function must return `null` or an `Error` but returned a " +
                  typeof error +
                  ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",
              ),
            error instanceof Error && !(error.message in loggedTypeFailures))
          ) {
            loggedTypeFailures[error.message] = !0;
            var stack = getStack ? getStack() : "";
            printWarning(
              "Failed " + location + " type: " + error.message + (stack ?? ""),
            );
          }
        }
    }
    checkPropTypes.resetWarningCache = function () {
      loggedTypeFailures = {};
    };
    module.exports = checkPropTypes;
  },
});
var require_factoryWithTypeCheckers = __commonJS({
  "../../node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    var ReactIs = require_react_is(),
      assign = require_object_assign(),
      ReactPropTypesSecret = require_ReactPropTypesSecret(),
      has = require_has(),
      checkPropTypes = require_checkPropTypes(),
      printWarning = function () {};
    printWarning = function (text) {
      var message = "Warning: " + text;
      typeof console < "u" && console.error(message);
      try {
        throw new Error(message);
      } catch {}
    };
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function (isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol == "function" && Symbol.iterator,
        FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn =
          maybeIterable &&
          ((ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL]) ||
            maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn == "function") return iteratorFn;
      }
      var ANONYMOUS = "<<anonymous>>",
        ReactPropTypes = {
          array: createPrimitiveTypeChecker("array"),
          bigint: createPrimitiveTypeChecker("bigint"),
          bool: createPrimitiveTypeChecker("boolean"),
          func: createPrimitiveTypeChecker("function"),
          number: createPrimitiveTypeChecker("number"),
          object: createPrimitiveTypeChecker("object"),
          string: createPrimitiveTypeChecker("string"),
          symbol: createPrimitiveTypeChecker("symbol"),
          any: createAnyTypeChecker(),
          arrayOf: createArrayOfTypeChecker,
          element: createElementTypeChecker(),
          elementType: createElementTypeTypeChecker(),
          instanceOf: createInstanceTypeChecker,
          node: createNodeChecker(),
          objectOf: createObjectOfTypeChecker,
          oneOf: createEnumTypeChecker,
          oneOfType: createUnionTypeChecker,
          shape: createShapeTypeChecker,
          exact: createStrictShapeTypeChecker,
        };
      function is(x2, y2) {
        return x2 === y2
          ? x2 !== 0 || 1 / x2 === 1 / y2
          : x2 !== x2 && y2 !== y2;
      }
      function PropTypeError(message, data) {
        (this.message = message),
          (this.data = data && typeof data == "object" ? data : {}),
          (this.stack = "");
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        var manualPropTypeCallCache = {},
          manualPropTypeWarningCount = 0;
        function checkType(
          isRequired,
          props,
          propName,
          componentName,
          location,
          propFullName,
          secret,
        ) {
          if (
            ((componentName = componentName || ANONYMOUS),
            (propFullName = propFullName || propName),
            secret !== ReactPropTypesSecret)
          ) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types",
              );
              throw ((err.name = "Invariant Violation"), err);
            } else if (typeof console < "u") {
              var cacheKey = componentName + ":" + propName;
              !manualPropTypeCallCache[cacheKey] &&
                manualPropTypeWarningCount < 3 &&
                (printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" +
                    propFullName +
                    "` prop on `" +
                    componentName +
                    "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",
                ),
                (manualPropTypeCallCache[cacheKey] = !0),
                manualPropTypeWarningCount++);
            }
          }
          return props[propName] == null
            ? isRequired
              ? props[propName] === null
                ? new PropTypeError(
                    "The " +
                      location +
                      " `" +
                      propFullName +
                      "` is marked as required " +
                      ("in `" + componentName + "`, but its value is `null`."),
                  )
                : new PropTypeError(
                    "The " +
                      location +
                      " `" +
                      propFullName +
                      "` is marked as required in " +
                      ("`" +
                        componentName +
                        "`, but its value is `undefined`."),
                  )
              : null
            : validate(props, propName, componentName, location, propFullName);
        }
        var chainedCheckType = checkType.bind(null, !1);
        return (
          (chainedCheckType.isRequired = checkType.bind(null, !0)),
          chainedCheckType
        );
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(
          props,
          propName,
          componentName,
          location,
          propFullName,
          secret,
        ) {
          var propValue = props[propName],
            propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " +
                location +
                " `" +
                propFullName +
                "` of type " +
                ("`" +
                  preciseType +
                  "` supplied to `" +
                  componentName +
                  "`, expected ") +
                ("`" + expectedType + "`."),
              { expectedType },
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(
          props,
          propName,
          componentName,
          location,
          propFullName,
        ) {
          if (typeof typeChecker != "function")
            return new PropTypeError(
              "Property `" +
                propFullName +
                "` of component `" +
                componentName +
                "` has invalid PropType notation inside arrayOf.",
            );
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError(
              "Invalid " +
                location +
                " `" +
                propFullName +
                "` of type " +
                ("`" +
                  propType +
                  "` supplied to `" +
                  componentName +
                  "`, expected an array."),
            );
          }
          for (var i2 = 0; i2 < propValue.length; i2++) {
            var error = typeChecker(
              propValue,
              i2,
              componentName,
              location,
              propFullName + "[" + i2 + "]",
              ReactPropTypesSecret,
            );
            if (error instanceof Error) return error;
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(
          props,
          propName,
          componentName,
          location,
          propFullName,
        ) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError(
              "Invalid " +
                location +
                " `" +
                propFullName +
                "` of type " +
                ("`" +
                  propType +
                  "` supplied to `" +
                  componentName +
                  "`, expected a single ReactElement."),
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(
          props,
          propName,
          componentName,
          location,
          propFullName,
        ) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError(
              "Invalid " +
                location +
                " `" +
                propFullName +
                "` of type " +
                ("`" +
                  propType +
                  "` supplied to `" +
                  componentName +
                  "`, expected a single ReactElement type."),
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(
          props,
          propName,
          componentName,
          location,
          propFullName,
        ) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS,
              actualClassName = getClassName(props[propName]);
            return new PropTypeError(
              "Invalid " +
                location +
                " `" +
                propFullName +
                "` of type " +
                ("`" +
                  actualClassName +
                  "` supplied to `" +
                  componentName +
                  "`, expected ") +
                ("instance of `" + expectedClassName + "`."),
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues))
          return (
            arguments.length > 1
              ? printWarning(
                  "Invalid arguments supplied to oneOf, expected an array, got " +
                    arguments.length +
                    " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).",
                )
              : printWarning(
                  "Invalid argument supplied to oneOf, expected an array.",
                ),
            emptyFunctionThatReturnsNull
          );
        function validate(
          props,
          propName,
          componentName,
          location,
          propFullName,
        ) {
          for (
            var propValue = props[propName], i2 = 0;
            i2 < expectedValues.length;
            i2++
          )
            if (is(propValue, expectedValues[i2])) return null;
          var valuesString = JSON.stringify(
            expectedValues,
            function (key, value) {
              var type = getPreciseType(value);
              return type === "symbol" ? String(value) : value;
            },
          );
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` of value `" +
              String(propValue) +
              "` " +
              ("supplied to `" +
                componentName +
                "`, expected one of " +
                valuesString +
                "."),
          );
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(
          props,
          propName,
          componentName,
          location,
          propFullName,
        ) {
          if (typeof typeChecker != "function")
            return new PropTypeError(
              "Property `" +
                propFullName +
                "` of component `" +
                componentName +
                "` has invalid PropType notation inside objectOf.",
            );
          var propValue = props[propName],
            propType = getPropType(propValue);
          if (propType !== "object")
            return new PropTypeError(
              "Invalid " +
                location +
                " `" +
                propFullName +
                "` of type " +
                ("`" +
                  propType +
                  "` supplied to `" +
                  componentName +
                  "`, expected an object."),
            );
          for (var key in propValue)
            if (has(propValue, key)) {
              var error = typeChecker(
                propValue,
                key,
                componentName,
                location,
                propFullName + "." + key,
                ReactPropTypesSecret,
              );
              if (error instanceof Error) return error;
            }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers))
          return (
            printWarning(
              "Invalid argument supplied to oneOfType, expected an instance of array.",
            ),
            emptyFunctionThatReturnsNull
          );
        for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
          var checker = arrayOfTypeCheckers[i2];
          if (typeof checker != "function")
            return (
              printWarning(
                "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " +
                  getPostfixForTypeWarning(checker) +
                  " at index " +
                  i2 +
                  ".",
              ),
              emptyFunctionThatReturnsNull
            );
        }
        function validate(
          props,
          propName,
          componentName,
          location,
          propFullName,
        ) {
          for (
            var expectedTypes = [], i3 = 0;
            i3 < arrayOfTypeCheckers.length;
            i3++
          ) {
            var checker2 = arrayOfTypeCheckers[i3],
              checkerResult = checker2(
                props,
                propName,
                componentName,
                location,
                propFullName,
                ReactPropTypesSecret,
              );
            if (checkerResult == null) return null;
            checkerResult.data &&
              has(checkerResult.data, "expectedType") &&
              expectedTypes.push(checkerResult.data.expectedType);
          }
          var expectedTypesMessage =
            expectedTypes.length > 0
              ? ", expected one of type [" + expectedTypes.join(", ") + "]"
              : "";
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` supplied to " +
              ("`" + componentName + "`" + expectedTypesMessage + "."),
          );
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(
          props,
          propName,
          componentName,
          location,
          propFullName,
        ) {
          return isNode(props[propName])
            ? null
            : new PropTypeError(
                "Invalid " +
                  location +
                  " `" +
                  propFullName +
                  "` supplied to " +
                  ("`" + componentName + "`, expected a ReactNode."),
              );
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(
        componentName,
        location,
        propFullName,
        key,
        type,
      ) {
        return new PropTypeError(
          (componentName || "React class") +
            ": " +
            location +
            " type `" +
            propFullName +
            "." +
            key +
            "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
            type +
            "`.",
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(
          props,
          propName,
          componentName,
          location,
          propFullName,
        ) {
          var propValue = props[propName],
            propType = getPropType(propValue);
          if (propType !== "object")
            return new PropTypeError(
              "Invalid " +
                location +
                " `" +
                propFullName +
                "` of type `" +
                propType +
                "` " +
                ("supplied to `" + componentName + "`, expected `object`."),
            );
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker != "function")
              return invalidValidatorError(
                componentName,
                location,
                propFullName,
                key,
                getPreciseType(checker),
              );
            var error = checker(
              propValue,
              key,
              componentName,
              location,
              propFullName + "." + key,
              ReactPropTypesSecret,
            );
            if (error) return error;
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(
          props,
          propName,
          componentName,
          location,
          propFullName,
        ) {
          var propValue = props[propName],
            propType = getPropType(propValue);
          if (propType !== "object")
            return new PropTypeError(
              "Invalid " +
                location +
                " `" +
                propFullName +
                "` of type `" +
                propType +
                "` " +
                ("supplied to `" + componentName + "`, expected `object`."),
            );
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker != "function")
              return invalidValidatorError(
                componentName,
                location,
                propFullName,
                key,
                getPreciseType(checker),
              );
            if (!checker)
              return new PropTypeError(
                "Invalid " +
                  location +
                  " `" +
                  propFullName +
                  "` key `" +
                  key +
                  "` supplied to `" +
                  componentName +
                  "`.\nBad object: " +
                  JSON.stringify(props[propName], null, "  ") +
                  `
Valid keys: ` +
                  JSON.stringify(Object.keys(shapeTypes), null, "  "),
              );
            var error = checker(
              propValue,
              key,
              componentName,
              location,
              propFullName + "." + key,
              ReactPropTypesSecret,
            );
            if (error) return error;
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return !0;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) return propValue.every(isNode);
            if (propValue === null || isValidElement(propValue)) return !0;
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue),
                step;
              if (iteratorFn !== propValue.entries) {
                for (; !(step = iterator.next()).done; )
                  if (!isNode(step.value)) return !1;
              } else
                for (; !(step = iterator.next()).done; ) {
                  var entry = step.value;
                  if (entry && !isNode(entry[1])) return !1;
                }
            } else return !1;
            return !0;
          default:
            return !1;
        }
      }
      function isSymbol(propType, propValue) {
        return propType === "symbol"
          ? !0
          : propValue
            ? propValue["@@toStringTag"] === "Symbol" ||
              (typeof Symbol == "function" && propValue instanceof Symbol)
            : !1;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        return Array.isArray(propValue)
          ? "array"
          : propValue instanceof RegExp
            ? "object"
            : isSymbol(propType, propValue)
              ? "symbol"
              : propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue > "u" || propValue === null) return "" + propValue;
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) return "date";
          if (propValue instanceof RegExp) return "regexp";
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        return !propValue.constructor || !propValue.constructor.name
          ? ANONYMOUS
          : propValue.constructor.name;
      }
      return (
        (ReactPropTypes.checkPropTypes = checkPropTypes),
        (ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache),
        (ReactPropTypes.PropTypes = ReactPropTypes),
        ReactPropTypes
      );
    };
  },
});
var require_prop_types = __commonJS({
  "../../node_modules/prop-types/index.js"(exports, module) {
    (ReactIs = require_react_is()),
      (throwOnDirectAccess = !0),
      (module.exports = require_factoryWithTypeCheckers()(
        ReactIs.isElement,
        throwOnDirectAccess,
      ));
    var ReactIs, throwOnDirectAccess;
  },
});
var require_react_fast_compare = __commonJS({
  "../../node_modules/react-fast-compare/index.js"(exports, module) {
    var hasElementType = typeof Element < "u",
      hasMap = typeof Map == "function",
      hasSet = typeof Set == "function",
      hasArrayBuffer = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
    function equal(a2, b2) {
      if (a2 === b2) return !0;
      if (a2 && b2 && typeof a2 == "object" && typeof b2 == "object") {
        if (a2.constructor !== b2.constructor) return !1;
        var length, i2, keys;
        if (Array.isArray(a2)) {
          if (((length = a2.length), length != b2.length)) return !1;
          for (i2 = length; i2-- !== 0; ) if (!equal(a2[i2], b2[i2])) return !1;
          return !0;
        }
        var it;
        if (hasMap && a2 instanceof Map && b2 instanceof Map) {
          if (a2.size !== b2.size) return !1;
          for (it = a2.entries(); !(i2 = it.next()).done; )
            if (!b2.has(i2.value[0])) return !1;
          for (it = a2.entries(); !(i2 = it.next()).done; )
            if (!equal(i2.value[1], b2.get(i2.value[0]))) return !1;
          return !0;
        }
        if (hasSet && a2 instanceof Set && b2 instanceof Set) {
          if (a2.size !== b2.size) return !1;
          for (it = a2.entries(); !(i2 = it.next()).done; )
            if (!b2.has(i2.value[0])) return !1;
          return !0;
        }
        if (
          hasArrayBuffer &&
          ArrayBuffer.isView(a2) &&
          ArrayBuffer.isView(b2)
        ) {
          if (((length = a2.length), length != b2.length)) return !1;
          for (i2 = length; i2-- !== 0; ) if (a2[i2] !== b2[i2]) return !1;
          return !0;
        }
        if (a2.constructor === RegExp)
          return a2.source === b2.source && a2.flags === b2.flags;
        if (
          a2.valueOf !== Object.prototype.valueOf &&
          typeof a2.valueOf == "function" &&
          typeof b2.valueOf == "function"
        )
          return a2.valueOf() === b2.valueOf();
        if (
          a2.toString !== Object.prototype.toString &&
          typeof a2.toString == "function" &&
          typeof b2.toString == "function"
        )
          return a2.toString() === b2.toString();
        if (
          ((keys = Object.keys(a2)),
          (length = keys.length),
          length !== Object.keys(b2).length)
        )
          return !1;
        for (i2 = length; i2-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b2, keys[i2])) return !1;
        if (hasElementType && a2 instanceof Element) return !1;
        for (i2 = length; i2-- !== 0; )
          if (
            !(
              (keys[i2] === "_owner" ||
                keys[i2] === "__v" ||
                keys[i2] === "__o") &&
              a2.$$typeof
            ) &&
            !equal(a2[keys[i2]], b2[keys[i2]])
          )
            return !1;
        return !0;
      }
      return a2 !== a2 && b2 !== b2;
    }
    module.exports = function (a2, b2) {
      try {
        return equal(a2, b2);
      } catch (error) {
        if ((error.message || "").match(/stack|recursion/i))
          return (
            console.warn("react-fast-compare cannot handle circular refs"), !1
          );
        throw error;
      }
    };
  },
});
var require_browser = __commonJS({
  "../../node_modules/invariant/browser.js"(exports, module) {
    "use strict";
    var invariant = function (condition, format2, a2, b2, c2, d2, e3, f2) {
      if (format2 === void 0)
        throw new Error("invariant requires an error message argument");
      if (!condition) {
        var error;
        if (format2 === void 0)
          error = new Error(
            "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.",
          );
        else {
          var args = [a2, b2, c2, d2, e3, f2],
            argIndex = 0;
          (error = new Error(
            format2.replace(/%s/g, function () {
              return args[argIndex++];
            }),
          )),
            (error.name = "Invariant Violation");
        }
        throw ((error.framesToPop = 1), error);
      }
    };
    module.exports = invariant;
  },
});
var require_shallowequal = __commonJS({
  "../../node_modules/shallowequal/index.js"(exports, module) {
    module.exports = function (objA, objB, compare, compareContext) {
      var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
      if (ret !== void 0) return !!ret;
      if (objA === objB) return !0;
      if (typeof objA != "object" || !objA || typeof objB != "object" || !objB)
        return !1;
      var keysA = Object.keys(objA),
        keysB = Object.keys(objB);
      if (keysA.length !== keysB.length) return !1;
      for (
        var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB),
          idx = 0;
        idx < keysA.length;
        idx++
      ) {
        var key = keysA[idx];
        if (!bHasOwnProperty(key)) return !1;
        var valueA = objA[key],
          valueB = objB[key];
        if (
          ((ret = compare
            ? compare.call(compareContext, valueA, valueB, key)
            : void 0),
          ret === !1 || (ret === void 0 && valueA !== valueB))
        )
          return !1;
      }
      return !0;
    };
  },
});
var require_now = __commonJS({
  "../../node_modules/lodash/now.js"(exports, module) {
    var root = require_root(),
      now = function () {
        return root.Date.now();
      };
    module.exports = now;
  },
});
var require_trimmedEndIndex = __commonJS({
  "../../node_modules/lodash/_trimmedEndIndex.js"(exports, module) {
    var reWhitespace = /\s/;
    function trimmedEndIndex(string) {
      for (
        var index = string.length;
        index-- && reWhitespace.test(string.charAt(index));

      );
      return index;
    }
    module.exports = trimmedEndIndex;
  },
});
var require_baseTrim = __commonJS({
  "../../node_modules/lodash/_baseTrim.js"(exports, module) {
    var trimmedEndIndex = require_trimmedEndIndex(),
      reTrimStart = /^\s+/;
    function baseTrim(string) {
      return (
        string &&
        string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "")
      );
    }
    module.exports = baseTrim;
  },
});
var require_toNumber = __commonJS({
  "../../node_modules/lodash/toNumber.js"(exports, module) {
    var baseTrim = require_baseTrim(),
      isObject = require_isObject(),
      isSymbol = require_isSymbol(),
      NAN = NaN,
      reIsBadHex = /^[-+]0x[0-9a-f]+$/i,
      reIsBinary = /^0b[01]+$/i,
      reIsOctal = /^0o[0-7]+$/i,
      freeParseInt = parseInt;
    function toNumber(value) {
      if (typeof value == "number") return value;
      if (isSymbol(value)) return NAN;
      if (isObject(value)) {
        var other =
          typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
      }
      if (typeof value != "string") return value === 0 ? value : +value;
      value = baseTrim(value);
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value)
        ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
        : reIsBadHex.test(value)
          ? NAN
          : +value;
    }
    module.exports = toNumber;
  },
});
var require_debounce = __commonJS({
  "../../node_modules/lodash/debounce.js"(exports, module) {
    var isObject = require_isObject(),
      now = require_now(),
      toNumber = require_toNumber(),
      FUNC_ERROR_TEXT = "Expected a function",
      nativeMax = Math.max,
      nativeMin = Math.min;
    function debounce3(func, wait, options2) {
      var lastArgs,
        lastThis,
        maxWait,
        result,
        timerId,
        lastCallTime,
        lastInvokeTime = 0,
        leading = !1,
        maxing = !1,
        trailing = !0;
      if (typeof func != "function") throw new TypeError(FUNC_ERROR_TEXT);
      (wait = toNumber(wait) || 0),
        isObject(options2) &&
          ((leading = !!options2.leading),
          (maxing = "maxWait" in options2),
          (maxWait = maxing
            ? nativeMax(toNumber(options2.maxWait) || 0, wait)
            : maxWait),
          (trailing = "trailing" in options2 ? !!options2.trailing : trailing));
      function invokeFunc(time) {
        var args = lastArgs,
          thisArg = lastThis;
        return (
          (lastArgs = lastThis = void 0),
          (lastInvokeTime = time),
          (result = func.apply(thisArg, args)),
          result
        );
      }
      function leadingEdge(time) {
        return (
          (lastInvokeTime = time),
          (timerId = setTimeout(timerExpired, wait)),
          leading ? invokeFunc(time) : result
        );
      }
      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime,
          timeSinceLastInvoke = time - lastInvokeTime,
          timeWaiting = wait - timeSinceLastCall;
        return maxing
          ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
          : timeWaiting;
      }
      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime,
          timeSinceLastInvoke = time - lastInvokeTime;
        return (
          lastCallTime === void 0 ||
          timeSinceLastCall >= wait ||
          timeSinceLastCall < 0 ||
          (maxing && timeSinceLastInvoke >= maxWait)
        );
      }
      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) return trailingEdge(time);
        timerId = setTimeout(timerExpired, remainingWait(time));
      }
      function trailingEdge(time) {
        return (
          (timerId = void 0),
          trailing && lastArgs
            ? invokeFunc(time)
            : ((lastArgs = lastThis = void 0), result)
        );
      }
      function cancel() {
        timerId !== void 0 && clearTimeout(timerId),
          (lastInvokeTime = 0),
          (lastArgs = lastCallTime = lastThis = timerId = void 0);
      }
      function flush() {
        return timerId === void 0 ? result : trailingEdge(now());
      }
      function debounced() {
        var time = now(),
          isInvoking = shouldInvoke(time);
        if (
          ((lastArgs = arguments),
          (lastThis = this),
          (lastCallTime = time),
          isInvoking)
        ) {
          if (timerId === void 0) return leadingEdge(lastCallTime);
          if (maxing)
            return (
              clearTimeout(timerId),
              (timerId = setTimeout(timerExpired, wait)),
              invokeFunc(lastCallTime)
            );
        }
        return (
          timerId === void 0 && (timerId = setTimeout(timerExpired, wait)),
          result
        );
      }
      return (debounced.cancel = cancel), (debounced.flush = flush), debounced;
    }
    module.exports = debounce3;
  },
});
var require_throttle = __commonJS({
  "../../node_modules/lodash/throttle.js"(exports, module) {
    var debounce3 = require_debounce(),
      isObject = require_isObject(),
      FUNC_ERROR_TEXT = "Expected a function";
    function throttle2(func, wait, options2) {
      var leading = !0,
        trailing = !0;
      if (typeof func != "function") throw new TypeError(FUNC_ERROR_TEXT);
      return (
        isObject(options2) &&
          ((leading = "leading" in options2 ? !!options2.leading : leading),
          (trailing = "trailing" in options2 ? !!options2.trailing : trailing)),
        debounce3(func, wait, { leading, maxWait: wait, trailing })
      );
    }
    module.exports = throttle2;
  },
});
var require_react_is_development2 = __commonJS({
  "../../node_modules/downshift/node_modules/react-is/cjs/react-is.development.js"(
    exports,
  ) {
    "use strict";
    (function () {
      "use strict";
      var REACT_ELEMENT_TYPE = Symbol.for("react.element"),
        REACT_PORTAL_TYPE = Symbol.for("react.portal"),
        REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
        REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
        REACT_PROFILER_TYPE = Symbol.for("react.profiler"),
        REACT_PROVIDER_TYPE = Symbol.for("react.provider"),
        REACT_CONTEXT_TYPE = Symbol.for("react.context"),
        REACT_SERVER_CONTEXT_TYPE = Symbol.for("react.server_context"),
        REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
        REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
        REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"),
        REACT_MEMO_TYPE = Symbol.for("react.memo"),
        REACT_LAZY_TYPE = Symbol.for("react.lazy"),
        REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen"),
        enableScopeAPI = !1,
        enableCacheElement = !1,
        enableTransitionTracing = !1,
        enableLegacyHidden = !1,
        enableDebugTracing = !1,
        REACT_MODULE_REFERENCE;
      REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
      function isValidElementType(type) {
        return !!(
          typeof type == "string" ||
          typeof type == "function" ||
          type === REACT_FRAGMENT_TYPE ||
          type === REACT_PROFILER_TYPE ||
          enableDebugTracing ||
          type === REACT_STRICT_MODE_TYPE ||
          type === REACT_SUSPENSE_TYPE ||
          type === REACT_SUSPENSE_LIST_TYPE ||
          enableLegacyHidden ||
          type === REACT_OFFSCREEN_TYPE ||
          enableScopeAPI ||
          enableCacheElement ||
          enableTransitionTracing ||
          (typeof type == "object" &&
            type !== null &&
            (type.$$typeof === REACT_LAZY_TYPE ||
              type.$$typeof === REACT_MEMO_TYPE ||
              type.$$typeof === REACT_PROVIDER_TYPE ||
              type.$$typeof === REACT_CONTEXT_TYPE ||
              type.$$typeof === REACT_FORWARD_REF_TYPE ||
              type.$$typeof === REACT_MODULE_REFERENCE ||
              type.getModuleId !== void 0))
        );
      }
      function typeOf(object) {
        if (typeof object == "object" && object !== null) {
          var $$typeof = object.$$typeof;
          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type = object.type;
              switch (type) {
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                case REACT_SUSPENSE_LIST_TYPE:
                  return type;
                default:
                  var $$typeofType = type && type.$$typeof;
                  switch ($$typeofType) {
                    case REACT_SERVER_CONTEXT_TYPE:
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_LAZY_TYPE:
                    case REACT_MEMO_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;
                    default:
                      return $$typeof;
                  }
              }
            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }
      }
      var ContextConsumer = REACT_CONTEXT_TYPE,
        ContextProvider = REACT_PROVIDER_TYPE,
        Element2 = REACT_ELEMENT_TYPE,
        ForwardRef = REACT_FORWARD_REF_TYPE,
        Fragment9 = REACT_FRAGMENT_TYPE,
        Lazy = REACT_LAZY_TYPE,
        Memo = REACT_MEMO_TYPE,
        Portal = REACT_PORTAL_TYPE,
        Profiler = REACT_PROFILER_TYPE,
        StrictMode = REACT_STRICT_MODE_TYPE,
        Suspense = REACT_SUSPENSE_TYPE,
        SuspenseList = REACT_SUSPENSE_LIST_TYPE,
        hasWarnedAboutDeprecatedIsAsyncMode = !1,
        hasWarnedAboutDeprecatedIsConcurrentMode = !1;
      function isAsyncMode(object) {
        return (
          hasWarnedAboutDeprecatedIsAsyncMode ||
            ((hasWarnedAboutDeprecatedIsAsyncMode = !0),
            console.warn(
              "The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.",
            )),
          !1
        );
      }
      function isConcurrentMode(object) {
        return (
          hasWarnedAboutDeprecatedIsConcurrentMode ||
            ((hasWarnedAboutDeprecatedIsConcurrentMode = !0),
            console.warn(
              "The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.",
            )),
          !1
        );
      }
      function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      }
      function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
      }
      function isElement(object) {
        return (
          typeof object == "object" &&
          object !== null &&
          object.$$typeof === REACT_ELEMENT_TYPE
        );
      }
      function isForwardRef2(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      }
      function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      }
      function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      }
      function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      }
      function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      }
      function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      }
      function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      }
      function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      }
      function isSuspenseList(object) {
        return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
      }
      (exports.ContextConsumer = ContextConsumer),
        (exports.ContextProvider = ContextProvider),
        (exports.Element = Element2),
        (exports.ForwardRef = ForwardRef),
        (exports.Fragment = Fragment9),
        (exports.Lazy = Lazy),
        (exports.Memo = Memo),
        (exports.Portal = Portal),
        (exports.Profiler = Profiler),
        (exports.StrictMode = StrictMode),
        (exports.Suspense = Suspense),
        (exports.SuspenseList = SuspenseList),
        (exports.isAsyncMode = isAsyncMode),
        (exports.isConcurrentMode = isConcurrentMode),
        (exports.isContextConsumer = isContextConsumer),
        (exports.isContextProvider = isContextProvider),
        (exports.isElement = isElement),
        (exports.isForwardRef = isForwardRef2),
        (exports.isFragment = isFragment),
        (exports.isLazy = isLazy),
        (exports.isMemo = isMemo),
        (exports.isPortal = isPortal),
        (exports.isProfiler = isProfiler),
        (exports.isStrictMode = isStrictMode),
        (exports.isSuspense = isSuspense),
        (exports.isSuspenseList = isSuspenseList),
        (exports.isValidElementType = isValidElementType),
        (exports.typeOf = typeOf);
    })();
  },
});
var require_react_is2 = __commonJS({
  "../../node_modules/downshift/node_modules/react-is/index.js"(
    exports,
    module,
  ) {
    "use strict";
    module.exports = require_react_is_development2();
  },
});
var require_fuse = __commonJS({
  "../../node_modules/fuse.js/dist/fuse.js"(exports, module) {
    (function (e3, t3) {
      typeof exports == "object" && typeof module == "object"
        ? (module.exports = t3())
        : typeof define == "function" && define.amd
          ? define("Fuse", [], t3)
          : typeof exports == "object"
            ? (exports.Fuse = t3())
            : (e3.Fuse = t3());
    })(exports, function () {
      return (function (e3) {
        var t3 = {};
        function r3(n3) {
          if (t3[n3]) return t3[n3].exports;
          var o3 = (t3[n3] = { i: n3, l: !1, exports: {} });
          return (
            e3[n3].call(o3.exports, o3, o3.exports, r3), (o3.l = !0), o3.exports
          );
        }
        return (
          (r3.m = e3),
          (r3.c = t3),
          (r3.d = function (e4, t4, n3) {
            r3.o(e4, t4) ||
              Object.defineProperty(e4, t4, { enumerable: !0, get: n3 });
          }),
          (r3.r = function (e4) {
            typeof Symbol < "u" &&
              Symbol.toStringTag &&
              Object.defineProperty(e4, Symbol.toStringTag, {
                value: "Module",
              }),
              Object.defineProperty(e4, "__esModule", { value: !0 });
          }),
          (r3.t = function (e4, t4) {
            if (
              (1 & t4 && (e4 = r3(e4)),
              8 & t4 ||
                (4 & t4 && typeof e4 == "object" && e4 && e4.__esModule))
            )
              return e4;
            var n3 = Object.create(null);
            if (
              (r3.r(n3),
              Object.defineProperty(n3, "default", {
                enumerable: !0,
                value: e4,
              }),
              2 & t4 && typeof e4 != "string")
            )
              for (var o3 in e4)
                r3.d(
                  n3,
                  o3,
                  function (t5) {
                    return e4[t5];
                  }.bind(null, o3),
                );
            return n3;
          }),
          (r3.n = function (e4) {
            var t4 =
              e4 && e4.__esModule
                ? function () {
                    return e4.default;
                  }
                : function () {
                    return e4;
                  };
            return r3.d(t4, "a", t4), t4;
          }),
          (r3.o = function (e4, t4) {
            return Object.prototype.hasOwnProperty.call(e4, t4);
          }),
          (r3.p = ""),
          r3((r3.s = 0))
        );
      })([
        function (e3, t3, r3) {
          function n3(e4) {
            return (n3 =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (e5) {
                    return typeof e5;
                  }
                : function (e5) {
                    return e5 &&
                      typeof Symbol == "function" &&
                      e5.constructor === Symbol &&
                      e5 !== Symbol.prototype
                      ? "symbol"
                      : typeof e5;
                  })(e4);
          }
          function o3(e4, t4) {
            for (var r4 = 0; r4 < t4.length; r4++) {
              var n4 = t4[r4];
              (n4.enumerable = n4.enumerable || !1),
                (n4.configurable = !0),
                "value" in n4 && (n4.writable = !0),
                Object.defineProperty(e4, n4.key, n4);
            }
          }
          var i2 = r3(1),
            a2 = r3(7),
            s2 = a2.get,
            c2 = (a2.deepValue, a2.isArray),
            h2 = (function () {
              function e4(t5, r5) {
                var n4 = r5.location,
                  o4 = n4 === void 0 ? 0 : n4,
                  i3 = r5.distance,
                  a4 = i3 === void 0 ? 100 : i3,
                  c3 = r5.threshold,
                  h3 = c3 === void 0 ? 0.6 : c3,
                  l3 = r5.maxPatternLength,
                  u2 = l3 === void 0 ? 32 : l3,
                  f2 = r5.caseSensitive,
                  v2 = f2 !== void 0 && f2,
                  p2 = r5.tokenSeparator,
                  d2 = p2 === void 0 ? / +/g : p2,
                  g2 = r5.findAllMatches,
                  y2 = g2 !== void 0 && g2,
                  m2 = r5.minMatchCharLength,
                  k2 = m2 === void 0 ? 1 : m2,
                  b2 = r5.id,
                  S2 = b2 === void 0 ? null : b2,
                  x2 = r5.keys,
                  M2 = x2 === void 0 ? [] : x2,
                  _2 = r5.shouldSort,
                  w2 = _2 === void 0 || _2,
                  L2 = r5.getFn,
                  A2 = L2 === void 0 ? s2 : L2,
                  O2 = r5.sortFn,
                  C2 =
                    O2 === void 0
                      ? function (e5, t6) {
                          return e5.score - t6.score;
                        }
                      : O2,
                  j2 = r5.tokenize,
                  P2 = j2 !== void 0 && j2,
                  I2 = r5.matchAllTokens,
                  F2 = I2 !== void 0 && I2,
                  T2 = r5.includeMatches,
                  N2 = T2 !== void 0 && T2,
                  z2 = r5.includeScore,
                  E2 = z2 !== void 0 && z2,
                  W2 = r5.verbose,
                  K2 = W2 !== void 0 && W2;
                (function (e5, t6) {
                  if (!(e5 instanceof t6))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e4),
                  (this.options = {
                    location: o4,
                    distance: a4,
                    threshold: h3,
                    maxPatternLength: u2,
                    isCaseSensitive: v2,
                    tokenSeparator: d2,
                    findAllMatches: y2,
                    minMatchCharLength: k2,
                    id: S2,
                    keys: M2,
                    includeMatches: N2,
                    includeScore: E2,
                    shouldSort: w2,
                    getFn: A2,
                    sortFn: C2,
                    verbose: K2,
                    tokenize: P2,
                    matchAllTokens: F2,
                  }),
                  this.setCollection(t5),
                  this._processKeys(M2);
              }
              var t4, r4, a3;
              return (
                (t4 = e4),
                (r4 = [
                  {
                    key: "setCollection",
                    value: function (e5) {
                      return (this.list = e5), e5;
                    },
                  },
                  {
                    key: "_processKeys",
                    value: function (e5) {
                      if (
                        ((this._keyWeights = {}),
                        (this._keyNames = []),
                        e5.length && typeof e5[0] == "string")
                      )
                        for (var t5 = 0, r5 = e5.length; t5 < r5; t5 += 1) {
                          var n4 = e5[t5];
                          (this._keyWeights[n4] = 1), this._keyNames.push(n4);
                        }
                      else {
                        for (
                          var o4 = null,
                            i3 = null,
                            a4 = 0,
                            s3 = 0,
                            c3 = e5.length;
                          s3 < c3;
                          s3 += 1
                        ) {
                          var h3 = e5[s3];
                          if (!h3.hasOwnProperty("name"))
                            throw new Error(
                              'Missing "name" property in key object',
                            );
                          var l3 = h3.name;
                          if (
                            (this._keyNames.push(l3),
                            !h3.hasOwnProperty("weight"))
                          )
                            throw new Error(
                              'Missing "weight" property in key object',
                            );
                          var u2 = h3.weight;
                          if (u2 < 0 || u2 > 1)
                            throw new Error(
                              '"weight" property in key must bein the range of [0, 1)',
                            );
                          (i3 = i3 == null ? u2 : Math.max(i3, u2)),
                            (o4 = o4 == null ? u2 : Math.min(o4, u2)),
                            (this._keyWeights[l3] = u2),
                            (a4 += u2);
                        }
                        if (a4 > 1)
                          throw new Error("Total of weights cannot exceed 1");
                      }
                    },
                  },
                  {
                    key: "search",
                    value: function (e5) {
                      var t5 =
                        arguments.length > 1 && arguments[1] !== void 0
                          ? arguments[1]
                          : { limit: !1 };
                      this._log(
                        `---------
Search pattern: "`.concat(e5, '"'),
                      );
                      var r5 = this._prepareSearchers(e5),
                        n4 = r5.tokenSearchers,
                        o4 = r5.fullSearcher,
                        i3 = this._search(n4, o4);
                      return (
                        this._computeScore(i3),
                        this.options.shouldSort && this._sort(i3),
                        t5.limit &&
                          typeof t5.limit == "number" &&
                          (i3 = i3.slice(0, t5.limit)),
                        this._format(i3)
                      );
                    },
                  },
                  {
                    key: "_prepareSearchers",
                    value: function () {
                      var e5 =
                          arguments.length > 0 && arguments[0] !== void 0
                            ? arguments[0]
                            : "",
                        t5 = [];
                      if (this.options.tokenize)
                        for (
                          var r5 = e5.split(this.options.tokenSeparator),
                            n4 = 0,
                            o4 = r5.length;
                          n4 < o4;
                          n4 += 1
                        )
                          t5.push(new i2(r5[n4], this.options));
                      return {
                        tokenSearchers: t5,
                        fullSearcher: new i2(e5, this.options),
                      };
                    },
                  },
                  {
                    key: "_search",
                    value: function () {
                      var e5 =
                          arguments.length > 0 && arguments[0] !== void 0
                            ? arguments[0]
                            : [],
                        t5 = arguments.length > 1 ? arguments[1] : void 0,
                        r5 = this.list,
                        n4 = {},
                        o4 = [];
                      if (typeof r5[0] == "string") {
                        for (var i3 = 0, a4 = r5.length; i3 < a4; i3 += 1)
                          this._analyze(
                            { key: "", value: r5[i3], record: i3, index: i3 },
                            {
                              resultMap: n4,
                              results: o4,
                              tokenSearchers: e5,
                              fullSearcher: t5,
                            },
                          );
                        return o4;
                      }
                      for (var s3 = 0, c3 = r5.length; s3 < c3; s3 += 1)
                        for (
                          var h3 = r5[s3], l3 = 0, u2 = this._keyNames.length;
                          l3 < u2;
                          l3 += 1
                        ) {
                          var f2 = this._keyNames[l3];
                          this._analyze(
                            {
                              key: f2,
                              value: this.options.getFn(h3, f2),
                              record: h3,
                              index: s3,
                            },
                            {
                              resultMap: n4,
                              results: o4,
                              tokenSearchers: e5,
                              fullSearcher: t5,
                            },
                          );
                        }
                      return o4;
                    },
                  },
                  {
                    key: "_analyze",
                    value: function (e5, t5) {
                      var r5 = this,
                        n4 = e5.key,
                        o4 = e5.arrayIndex,
                        i3 = o4 === void 0 ? -1 : o4,
                        a4 = e5.value,
                        s3 = e5.record,
                        h3 = e5.index,
                        l3 = t5.tokenSearchers,
                        u2 = l3 === void 0 ? [] : l3,
                        f2 = t5.fullSearcher,
                        v2 = t5.resultMap,
                        p2 = v2 === void 0 ? {} : v2,
                        d2 = t5.results,
                        g2 = d2 === void 0 ? [] : d2;
                      (function e6(t6, o5, i4, a5) {
                        if (o5 != null) {
                          if (typeof o5 == "string") {
                            var s4 = !1,
                              h4 = -1,
                              l4 = 0;
                            r5._log(
                              `
Key: `.concat(n4 === "" ? "--" : n4),
                            );
                            var v3 = f2.search(o5);
                            if (
                              (r5._log(
                                'Full text: "'
                                  .concat(o5, '", score: ')
                                  .concat(v3.score),
                              ),
                              r5.options.tokenize)
                            ) {
                              for (
                                var d3 = o5.split(r5.options.tokenSeparator),
                                  y2 = d3.length,
                                  m2 = [],
                                  k2 = 0,
                                  b2 = u2.length;
                                k2 < b2;
                                k2 += 1
                              ) {
                                var S2 = u2[k2];
                                r5._log(
                                  `
Pattern: "`.concat(S2.pattern, '"'),
                                );
                                for (var x2 = !1, M2 = 0; M2 < y2; M2 += 1) {
                                  var _2 = d3[M2],
                                    w2 = S2.search(_2),
                                    L2 = {};
                                  w2.isMatch
                                    ? ((L2[_2] = w2.score),
                                      (s4 = !0),
                                      (x2 = !0),
                                      m2.push(w2.score))
                                    : ((L2[_2] = 1),
                                      r5.options.matchAllTokens || m2.push(1)),
                                    r5._log(
                                      'Token: "'
                                        .concat(_2, '", score: ')
                                        .concat(L2[_2]),
                                    );
                                }
                                x2 && (l4 += 1);
                              }
                              h4 = m2[0];
                              for (var A2 = m2.length, O2 = 1; O2 < A2; O2 += 1)
                                h4 += m2[O2];
                              (h4 /= A2), r5._log("Token score average:", h4);
                            }
                            var C2 = v3.score;
                            h4 > -1 && (C2 = (C2 + h4) / 2),
                              r5._log("Score average:", C2);
                            var j2 =
                              !r5.options.tokenize ||
                              !r5.options.matchAllTokens ||
                              l4 >= u2.length;
                            if (
                              (r5._log(
                                `
Check Matches: `.concat(j2),
                              ),
                              (s4 || v3.isMatch) && j2)
                            ) {
                              var P2 = {
                                key: n4,
                                arrayIndex: t6,
                                value: o5,
                                score: C2,
                              };
                              r5.options.includeMatches &&
                                (P2.matchedIndices = v3.matchedIndices);
                              var I2 = p2[a5];
                              I2
                                ? I2.output.push(P2)
                                : ((p2[a5] = { item: i4, output: [P2] }),
                                  g2.push(p2[a5]));
                            }
                          } else if (c2(o5))
                            for (var F2 = 0, T2 = o5.length; F2 < T2; F2 += 1)
                              e6(F2, o5[F2], i4, a5);
                        }
                      })(i3, a4, s3, h3);
                    },
                  },
                  {
                    key: "_computeScore",
                    value: function (e5) {
                      this._log(`

Computing score:
`);
                      for (
                        var t5 = this._keyWeights,
                          r5 = !!Object.keys(t5).length,
                          n4 = 0,
                          o4 = e5.length;
                        n4 < o4;
                        n4 += 1
                      ) {
                        for (
                          var i3 = e5[n4],
                            a4 = i3.output,
                            s3 = a4.length,
                            c3 = 1,
                            h3 = 0;
                          h3 < s3;
                          h3 += 1
                        ) {
                          var l3 = a4[h3],
                            u2 = l3.key,
                            f2 = r5 ? t5[u2] : 1,
                            v2 =
                              l3.score === 0 && t5 && t5[u2] > 0
                                ? Number.EPSILON
                                : l3.score;
                          c3 *= Math.pow(v2, f2);
                        }
                        (i3.score = c3), this._log(i3);
                      }
                    },
                  },
                  {
                    key: "_sort",
                    value: function (e5) {
                      this._log(`

Sorting....`),
                        e5.sort(this.options.sortFn);
                    },
                  },
                  {
                    key: "_format",
                    value: function (e5) {
                      var t5 = [];
                      if (this.options.verbose) {
                        var r5 = [];
                        this._log(
                          `

Output:

`,
                          JSON.stringify(
                            e5,
                            function (e6, t6) {
                              if (n3(t6) === "object" && t6 !== null) {
                                if (r5.indexOf(t6) !== -1) return;
                                r5.push(t6);
                              }
                              return t6;
                            },
                            2,
                          ),
                        ),
                          (r5 = null);
                      }
                      var o4 = [];
                      this.options.includeMatches &&
                        o4.push(function (e6, t6) {
                          var r6 = e6.output;
                          t6.matches = [];
                          for (var n4 = 0, o5 = r6.length; n4 < o5; n4 += 1) {
                            var i4 = r6[n4];
                            if (i4.matchedIndices.length !== 0) {
                              var a5 = {
                                indices: i4.matchedIndices,
                                value: i4.value,
                              };
                              i4.key && (a5.key = i4.key),
                                i4.hasOwnProperty("arrayIndex") &&
                                  i4.arrayIndex > -1 &&
                                  (a5.arrayIndex = i4.arrayIndex),
                                t6.matches.push(a5);
                            }
                          }
                        }),
                        this.options.includeScore &&
                          o4.push(function (e6, t6) {
                            t6.score = e6.score;
                          });
                      for (var i3 = 0, a4 = e5.length; i3 < a4; i3 += 1) {
                        var s3 = e5[i3];
                        if (
                          (this.options.id &&
                            (s3.item = this.options.getFn(
                              s3.item,
                              this.options.id,
                            )[0]),
                          o4.length)
                        ) {
                          for (
                            var c3 = { item: s3.item }, h3 = 0, l3 = o4.length;
                            h3 < l3;
                            h3 += 1
                          )
                            o4[h3](s3, c3);
                          t5.push(c3);
                        } else t5.push(s3.item);
                      }
                      return t5;
                    },
                  },
                  {
                    key: "_log",
                    value: function () {
                      var e5;
                      this.options.verbose &&
                        (e5 = console).log.apply(e5, arguments);
                    },
                  },
                ]) && o3(t4.prototype, r4),
                a3 && o3(t4, a3),
                e4
              );
            })();
          e3.exports = h2;
        },
        function (e3, t3, r3) {
          function n3(e4, t4) {
            for (var r4 = 0; r4 < t4.length; r4++) {
              var n4 = t4[r4];
              (n4.enumerable = n4.enumerable || !1),
                (n4.configurable = !0),
                "value" in n4 && (n4.writable = !0),
                Object.defineProperty(e4, n4.key, n4);
            }
          }
          var o3 = r3(2),
            i2 = r3(3),
            a2 = r3(6),
            s2 = (function () {
              function e4(t5, r5) {
                var n4 = r5.location,
                  o4 = n4 === void 0 ? 0 : n4,
                  i3 = r5.distance,
                  s4 = i3 === void 0 ? 100 : i3,
                  c2 = r5.threshold,
                  h2 = c2 === void 0 ? 0.6 : c2,
                  l3 = r5.maxPatternLength,
                  u2 = l3 === void 0 ? 32 : l3,
                  f2 = r5.isCaseSensitive,
                  v2 = f2 !== void 0 && f2,
                  p2 = r5.tokenSeparator,
                  d2 = p2 === void 0 ? / +/g : p2,
                  g2 = r5.findAllMatches,
                  y2 = g2 !== void 0 && g2,
                  m2 = r5.minMatchCharLength,
                  k2 = m2 === void 0 ? 1 : m2,
                  b2 = r5.includeMatches,
                  S2 = b2 !== void 0 && b2;
                (function (e5, t6) {
                  if (!(e5 instanceof t6))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e4),
                  (this.options = {
                    location: o4,
                    distance: s4,
                    threshold: h2,
                    maxPatternLength: u2,
                    isCaseSensitive: v2,
                    tokenSeparator: d2,
                    findAllMatches: y2,
                    includeMatches: S2,
                    minMatchCharLength: k2,
                  }),
                  (this.pattern = v2 ? t5 : t5.toLowerCase()),
                  this.pattern.length <= u2 &&
                    (this.patternAlphabet = a2(this.pattern));
              }
              var t4, r4, s3;
              return (
                (t4 = e4),
                (r4 = [
                  {
                    key: "search",
                    value: function (e5) {
                      var t5 = this.options,
                        r5 = t5.isCaseSensitive,
                        n4 = t5.includeMatches;
                      if (
                        (r5 || (e5 = e5.toLowerCase()), this.pattern === e5)
                      ) {
                        var a3 = { isMatch: !0, score: 0 };
                        return (
                          n4 && (a3.matchedIndices = [[0, e5.length - 1]]), a3
                        );
                      }
                      var s4 = this.options,
                        c2 = s4.maxPatternLength,
                        h2 = s4.tokenSeparator;
                      if (this.pattern.length > c2)
                        return o3(e5, this.pattern, h2);
                      var l3 = this.options,
                        u2 = l3.location,
                        f2 = l3.distance,
                        v2 = l3.threshold,
                        p2 = l3.findAllMatches,
                        d2 = l3.minMatchCharLength;
                      return i2(e5, this.pattern, this.patternAlphabet, {
                        location: u2,
                        distance: f2,
                        threshold: v2,
                        findAllMatches: p2,
                        minMatchCharLength: d2,
                        includeMatches: n4,
                      });
                    },
                  },
                ]) && n3(t4.prototype, r4),
                s3 && n3(t4, s3),
                e4
              );
            })();
          e3.exports = s2;
        },
        function (e3, t3) {
          var r3 = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;
          e3.exports = function (e4, t4) {
            var n3 =
                arguments.length > 2 && arguments[2] !== void 0
                  ? arguments[2]
                  : / +/g,
              o3 = new RegExp(t4.replace(r3, "\\$&").replace(n3, "|")),
              i2 = e4.match(o3),
              a2 = !!i2,
              s2 = [];
            if (a2)
              for (var c2 = 0, h2 = i2.length; c2 < h2; c2 += 1) {
                var l3 = i2[c2];
                s2.push([e4.indexOf(l3), l3.length - 1]);
              }
            return { score: a2 ? 0.5 : 1, isMatch: a2, matchedIndices: s2 };
          };
        },
        function (e3, t3, r3) {
          var n3 = r3(4),
            o3 = r3(5);
          e3.exports = function (e4, t4, r4, i2) {
            for (
              var a2 = i2.location,
                s2 = a2 === void 0 ? 0 : a2,
                c2 = i2.distance,
                h2 = c2 === void 0 ? 100 : c2,
                l3 = i2.threshold,
                u2 = l3 === void 0 ? 0.6 : l3,
                f2 = i2.findAllMatches,
                v2 = f2 !== void 0 && f2,
                p2 = i2.minMatchCharLength,
                d2 = p2 === void 0 ? 1 : p2,
                g2 = i2.includeMatches,
                y2 = g2 !== void 0 && g2,
                m2 = s2,
                k2 = e4.length,
                b2 = u2,
                S2 = e4.indexOf(t4, m2),
                x2 = t4.length,
                M2 = [],
                _2 = 0;
              _2 < k2;
              _2 += 1
            )
              M2[_2] = 0;
            if (S2 !== -1) {
              var w2 = n3(t4, {
                errors: 0,
                currentLocation: S2,
                expectedLocation: m2,
                distance: h2,
              });
              if (
                ((b2 = Math.min(w2, b2)),
                (S2 = e4.lastIndexOf(t4, m2 + x2)) !== -1)
              ) {
                var L2 = n3(t4, {
                  errors: 0,
                  currentLocation: S2,
                  expectedLocation: m2,
                  distance: h2,
                });
                b2 = Math.min(L2, b2);
              }
            }
            S2 = -1;
            for (
              var A2 = [],
                O2 = 1,
                C2 = x2 + k2,
                j2 = 1 << (x2 <= 31 ? x2 - 1 : 30),
                P2 = 0;
              P2 < x2;
              P2 += 1
            ) {
              for (var I2 = 0, F2 = C2; I2 < F2; )
                n3(t4, {
                  errors: P2,
                  currentLocation: m2 + F2,
                  expectedLocation: m2,
                  distance: h2,
                }) <= b2
                  ? (I2 = F2)
                  : (C2 = F2),
                  (F2 = Math.floor((C2 - I2) / 2 + I2));
              C2 = F2;
              var T2 = Math.max(1, m2 - F2 + 1),
                N2 = v2 ? k2 : Math.min(m2 + F2, k2) + x2,
                z2 = Array(N2 + 2);
              z2[N2 + 1] = (1 << P2) - 1;
              for (var E2 = N2; E2 >= T2; E2 -= 1) {
                var W2 = E2 - 1,
                  K2 = r4[e4.charAt(W2)];
                if (
                  (K2 && (M2[W2] = 1),
                  (z2[E2] = ((z2[E2 + 1] << 1) | 1) & K2),
                  P2 !== 0 &&
                    (z2[E2] |= ((A2[E2 + 1] | A2[E2]) << 1) | 1 | A2[E2 + 1]),
                  z2[E2] & j2 &&
                    (O2 = n3(t4, {
                      errors: P2,
                      currentLocation: W2,
                      expectedLocation: m2,
                      distance: h2,
                    })) <= b2)
                ) {
                  if (((b2 = O2), (S2 = W2) <= m2)) break;
                  T2 = Math.max(1, 2 * m2 - S2);
                }
              }
              if (
                n3(t4, {
                  errors: P2 + 1,
                  currentLocation: m2,
                  expectedLocation: m2,
                  distance: h2,
                }) > b2
              )
                break;
              A2 = z2;
            }
            var $ = { isMatch: S2 >= 0, score: O2 === 0 ? 0.001 : O2 };
            return y2 && ($.matchedIndices = o3(M2, d2)), $;
          };
        },
        function (e3, t3) {
          e3.exports = function (e4, t4) {
            var r3 = t4.errors,
              n3 = r3 === void 0 ? 0 : r3,
              o3 = t4.currentLocation,
              i2 = o3 === void 0 ? 0 : o3,
              a2 = t4.expectedLocation,
              s2 = a2 === void 0 ? 0 : a2,
              c2 = t4.distance,
              h2 = c2 === void 0 ? 100 : c2,
              l3 = n3 / e4.length,
              u2 = Math.abs(s2 - i2);
            return h2 ? l3 + u2 / h2 : u2 ? 1 : l3;
          };
        },
        function (e3, t3) {
          e3.exports = function () {
            for (
              var e4 =
                  arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : [],
                t4 =
                  arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : 1,
                r3 = [],
                n3 = -1,
                o3 = -1,
                i2 = 0,
                a2 = e4.length;
              i2 < a2;
              i2 += 1
            ) {
              var s2 = e4[i2];
              s2 && n3 === -1
                ? (n3 = i2)
                : s2 ||
                  n3 === -1 ||
                  ((o3 = i2 - 1) - n3 + 1 >= t4 && r3.push([n3, o3]),
                  (n3 = -1));
            }
            return e4[i2 - 1] && i2 - n3 >= t4 && r3.push([n3, i2 - 1]), r3;
          };
        },
        function (e3, t3) {
          e3.exports = function (e4) {
            for (var t4 = {}, r3 = e4.length, n3 = 0; n3 < r3; n3 += 1)
              t4[e4.charAt(n3)] = 0;
            for (var o3 = 0; o3 < r3; o3 += 1)
              t4[e4.charAt(o3)] |= 1 << (r3 - o3 - 1);
            return t4;
          };
        },
        function (e3, t3) {
          var r3 = function (e4) {
              return Array.isArray
                ? Array.isArray(e4)
                : Object.prototype.toString.call(e4) === "[object Array]";
            },
            n3 = function (e4) {
              return e4 == null
                ? ""
                : (function (e5) {
                    if (typeof e5 == "string") return e5;
                    var t4 = e5 + "";
                    return t4 == "0" && 1 / e5 == -1 / 0 ? "-0" : t4;
                  })(e4);
            },
            o3 = function (e4) {
              return typeof e4 == "string";
            },
            i2 = function (e4) {
              return typeof e4 == "number";
            };
          e3.exports = {
            get: function (e4, t4) {
              var a2 = [];
              return (
                (function e5(t5, s2) {
                  if (s2) {
                    var c2 = s2.indexOf("."),
                      h2 = s2,
                      l3 = null;
                    c2 !== -1 &&
                      ((h2 = s2.slice(0, c2)), (l3 = s2.slice(c2 + 1)));
                    var u2 = t5[h2];
                    if (u2 != null)
                      if (l3 || (!o3(u2) && !i2(u2)))
                        if (r3(u2))
                          for (var f2 = 0, v2 = u2.length; f2 < v2; f2 += 1)
                            e5(u2[f2], l3);
                        else l3 && e5(u2, l3);
                      else a2.push(n3(u2));
                  } else a2.push(t5);
                })(e4, t4),
                a2
              );
            },
            isArray: r3,
            isString: o3,
            isNum: i2,
            toString: n3,
          };
        },
      ]);
    });
  },
});
var require_toggle_selection = __commonJS({
  "../../node_modules/toggle-selection/index.js"(exports, module) {
    module.exports = function () {
      var selection = document.getSelection();
      if (!selection.rangeCount) return function () {};
      for (
        var active = document.activeElement, ranges = [], i2 = 0;
        i2 < selection.rangeCount;
        i2++
      )
        ranges.push(selection.getRangeAt(i2));
      switch (active.tagName.toUpperCase()) {
        case "INPUT":
        case "TEXTAREA":
          active.blur();
          break;
        default:
          active = null;
          break;
      }
      return (
        selection.removeAllRanges(),
        function () {
          selection.type === "Caret" && selection.removeAllRanges(),
            selection.rangeCount ||
              ranges.forEach(function (range) {
                selection.addRange(range);
              }),
            active && active.focus();
        }
      );
    };
  },
});
var require_copy_to_clipboard = __commonJS({
  "../../node_modules/copy-to-clipboard/index.js"(exports, module) {
    "use strict";
    var deselectCurrent = require_toggle_selection(),
      clipboardToIE11Formatting = {
        "text/plain": "Text",
        "text/html": "Url",
        default: "Text",
      },
      defaultMessage = "Copy to clipboard: #{key}, Enter";
    function format2(message) {
      var copyKey =
        (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") + "+C";
      return message.replace(/#{\s*key\s*}/g, copyKey);
    }
    function copy2(text, options2) {
      var debug,
        message,
        reselectPrevious,
        range,
        selection,
        mark,
        success = !1;
      options2 || (options2 = {}), (debug = options2.debug || !1);
      try {
        (reselectPrevious = deselectCurrent()),
          (range = document.createRange()),
          (selection = document.getSelection()),
          (mark = document.createElement("span")),
          (mark.textContent = text),
          (mark.ariaHidden = "true"),
          (mark.style.all = "unset"),
          (mark.style.position = "fixed"),
          (mark.style.top = 0),
          (mark.style.clip = "rect(0, 0, 0, 0)"),
          (mark.style.whiteSpace = "pre"),
          (mark.style.webkitUserSelect = "text"),
          (mark.style.MozUserSelect = "text"),
          (mark.style.msUserSelect = "text"),
          (mark.style.userSelect = "text"),
          mark.addEventListener("copy", function (e3) {
            if ((e3.stopPropagation(), options2.format))
              if ((e3.preventDefault(), typeof e3.clipboardData > "u")) {
                debug && console.warn("unable to use e.clipboardData"),
                  debug && console.warn("trying IE specific stuff"),
                  window.clipboardData.clearData();
                var format3 =
                  clipboardToIE11Formatting[options2.format] ||
                  clipboardToIE11Formatting.default;
                window.clipboardData.setData(format3, text);
              } else
                e3.clipboardData.clearData(),
                  e3.clipboardData.setData(options2.format, text);
            options2.onCopy &&
              (e3.preventDefault(), options2.onCopy(e3.clipboardData));
          }),
          document.body.appendChild(mark),
          range.selectNodeContents(mark),
          selection.addRange(range);
        var successful = document.execCommand("copy");
        if (!successful) throw new Error("copy command was unsuccessful");
        success = !0;
      } catch (err) {
        debug && console.error("unable to copy using execCommand: ", err),
          debug && console.warn("trying IE specific stuff");
        try {
          window.clipboardData.setData(options2.format || "text", text),
            options2.onCopy && options2.onCopy(window.clipboardData),
            (success = !0);
        } catch (err2) {
          debug && console.error("unable to copy using clipboardData: ", err2),
            debug && console.error("falling back to prompt"),
            (message = format2(
              "message" in options2 ? options2.message : defaultMessage,
            )),
            window.prompt(message, text);
        }
      } finally {
        selection &&
          (typeof selection.removeRange == "function"
            ? selection.removeRange(range)
            : selection.removeAllRanges()),
          mark && document.body.removeChild(mark),
          reselectPrevious();
      }
      return success;
    }
    module.exports = copy2;
  },
});
var import_client = __toESM(require_client()),
  import_react69 = __toESM(require_react());
var import_react = __toESM(require_react()),
  import_prop_types = __toESM(require_prop_types()),
  import_react_fast_compare = __toESM(require_react_fast_compare()),
  import_invariant = __toESM(require_browser()),
  import_shallowequal = __toESM(require_shallowequal());
function a() {
  return (
    (a =
      Object.assign ||
      function (t3) {
        for (var e3 = 1; e3 < arguments.length; e3++) {
          var r3 = arguments[e3];
          for (var n3 in r3)
            Object.prototype.hasOwnProperty.call(r3, n3) && (t3[n3] = r3[n3]);
        }
        return t3;
      }),
    a.apply(this, arguments)
  );
}
function s(t3, e3) {
  (t3.prototype = Object.create(e3.prototype)),
    (t3.prototype.constructor = t3),
    c(t3, e3);
}
function c(t3, e3) {
  return (
    (c =
      Object.setPrototypeOf ||
      function (t4, e4) {
        return (t4.__proto__ = e4), t4;
      }),
    c(t3, e3)
  );
}
function u(t3, e3) {
  if (t3 == null) return {};
  var r3,
    n3,
    i2 = {},
    o3 = Object.keys(t3);
  for (n3 = 0; n3 < o3.length; n3++)
    e3.indexOf((r3 = o3[n3])) >= 0 || (i2[r3] = t3[r3]);
  return i2;
}
var l = {
    BASE: "base",
    BODY: "body",
    HEAD: "head",
    HTML: "html",
    LINK: "link",
    META: "meta",
    NOSCRIPT: "noscript",
    SCRIPT: "script",
    STYLE: "style",
    TITLE: "title",
    FRAGMENT: "Symbol(react.fragment)",
  },
  p = { rel: ["amphtml", "canonical", "alternate"] },
  f = { type: ["application/ld+json"] },
  d = {
    charset: "",
    name: ["robots", "description"],
    property: [
      "og:type",
      "og:title",
      "og:url",
      "og:image",
      "og:image:alt",
      "og:description",
      "twitter:url",
      "twitter:title",
      "twitter:description",
      "twitter:image",
      "twitter:image:alt",
      "twitter:card",
      "twitter:site",
    ],
  },
  h = Object.keys(l).map(function (t3) {
    return l[t3];
  }),
  m = {
    accesskey: "accessKey",
    charset: "charSet",
    class: "className",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    "http-equiv": "httpEquiv",
    itemprop: "itemProp",
    tabindex: "tabIndex",
  },
  y = Object.keys(m).reduce(function (t3, e3) {
    return (t3[m[e3]] = e3), t3;
  }, {}),
  T = function (t3, e3) {
    for (var r3 = t3.length - 1; r3 >= 0; r3 -= 1) {
      var n3 = t3[r3];
      if (Object.prototype.hasOwnProperty.call(n3, e3)) return n3[e3];
    }
    return null;
  },
  g = function (t3) {
    var e3 = T(t3, l.TITLE),
      r3 = T(t3, "titleTemplate");
    if ((Array.isArray(e3) && (e3 = e3.join("")), r3 && e3))
      return r3.replace(/%s/g, function () {
        return e3;
      });
    var n3 = T(t3, "defaultTitle");
    return e3 || n3 || void 0;
  },
  b = function (t3) {
    return T(t3, "onChangeClientState") || function () {};
  },
  v = function (t3, e3) {
    return e3
      .filter(function (e4) {
        return e4[t3] !== void 0;
      })
      .map(function (e4) {
        return e4[t3];
      })
      .reduce(function (t4, e4) {
        return a({}, t4, e4);
      }, {});
  },
  A = function (t3, e3) {
    return e3
      .filter(function (t4) {
        return t4[l.BASE] !== void 0;
      })
      .map(function (t4) {
        return t4[l.BASE];
      })
      .reverse()
      .reduce(function (e4, r3) {
        if (!e4.length)
          for (var n3 = Object.keys(r3), i2 = 0; i2 < n3.length; i2 += 1) {
            var o3 = n3[i2].toLowerCase();
            if (t3.indexOf(o3) !== -1 && r3[o3]) return e4.concat(r3);
          }
        return e4;
      }, []);
  },
  C = function (t3, e3, r3) {
    var n3 = {};
    return r3
      .filter(function (e4) {
        return (
          !!Array.isArray(e4[t3]) ||
          (e4[t3] !== void 0 &&
            console &&
            typeof console.warn == "function" &&
            console.warn(
              "Helmet: " +
                t3 +
                ' should be of type "Array". Instead found type "' +
                typeof e4[t3] +
                '"',
            ),
          !1)
        );
      })
      .map(function (e4) {
        return e4[t3];
      })
      .reverse()
      .reduce(function (t4, r4) {
        var i2 = {};
        r4.filter(function (t5) {
          for (var r5, o4 = Object.keys(t5), a2 = 0; a2 < o4.length; a2 += 1) {
            var s3 = o4[a2],
              c3 = s3.toLowerCase();
            e3.indexOf(c3) === -1 ||
              (r5 === "rel" && t5[r5].toLowerCase() === "canonical") ||
              (c3 === "rel" && t5[c3].toLowerCase() === "stylesheet") ||
              (r5 = c3),
              e3.indexOf(s3) === -1 ||
                (s3 !== "innerHTML" && s3 !== "cssText" && s3 !== "itemprop") ||
                (r5 = s3);
          }
          if (!r5 || !t5[r5]) return !1;
          var u3 = t5[r5].toLowerCase();
          return (
            n3[r5] || (n3[r5] = {}),
            i2[r5] || (i2[r5] = {}),
            !n3[r5][u3] && ((i2[r5][u3] = !0), !0)
          );
        })
          .reverse()
          .forEach(function (e4) {
            return t4.push(e4);
          });
        for (var o3 = Object.keys(i2), s2 = 0; s2 < o3.length; s2 += 1) {
          var c2 = o3[s2],
            u2 = a({}, n3[c2], i2[c2]);
          n3[c2] = u2;
        }
        return t4;
      }, [])
      .reverse();
  },
  O = function (t3, e3) {
    if (Array.isArray(t3) && t3.length) {
      for (var r3 = 0; r3 < t3.length; r3 += 1) if (t3[r3][e3]) return !0;
    }
    return !1;
  },
  S = function (t3) {
    return Array.isArray(t3) ? t3.join("") : t3;
  },
  E = function (t3, e3) {
    return Array.isArray(t3)
      ? t3.reduce(
          function (t4, r3) {
            return (
              (function (t5, e4) {
                for (var r4 = Object.keys(t5), n3 = 0; n3 < r4.length; n3 += 1)
                  if (e4[r4[n3]] && e4[r4[n3]].includes(t5[r4[n3]])) return !0;
                return !1;
              })(r3, e3)
                ? t4.priority.push(r3)
                : t4.default.push(r3),
              t4
            );
          },
          { priority: [], default: [] },
        )
      : { default: t3 };
  },
  I = function (t3, e3) {
    var r3;
    return a({}, t3, (((r3 = {})[e3] = void 0), r3));
  },
  P = [l.NOSCRIPT, l.SCRIPT, l.STYLE],
  w = function (t3, e3) {
    return (
      e3 === void 0 && (e3 = !0),
      e3 === !1
        ? String(t3)
        : String(t3)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#x27;")
    );
  },
  x = function (t3) {
    return Object.keys(t3).reduce(function (e3, r3) {
      var n3 = t3[r3] !== void 0 ? r3 + '="' + t3[r3] + '"' : "" + r3;
      return e3 ? e3 + " " + n3 : n3;
    }, "");
  },
  L = function (t3, e3) {
    return (
      e3 === void 0 && (e3 = {}),
      Object.keys(t3).reduce(function (e4, r3) {
        return (e4[m[r3] || r3] = t3[r3]), e4;
      }, e3)
    );
  },
  j = function (e3, r3) {
    return r3.map(function (r4, n3) {
      var i2,
        o3 = (((i2 = { key: n3 })["data-rh"] = !0), i2);
      return (
        Object.keys(r4).forEach(function (t3) {
          var e4 = m[t3] || t3;
          e4 === "innerHTML" || e4 === "cssText"
            ? (o3.dangerouslySetInnerHTML = {
                __html: r4.innerHTML || r4.cssText,
              })
            : (o3[e4] = r4[t3]);
        }),
        import_react.default.createElement(e3, o3)
      );
    });
  },
  M = function (e3, r3, n3) {
    switch (e3) {
      case l.TITLE:
        return {
          toComponent: function () {
            return (
              (n4 = r3.titleAttributes),
              ((i2 = { key: (e4 = r3.title) })["data-rh"] = !0),
              (o3 = L(n4, i2)),
              [import_react.default.createElement(l.TITLE, o3, e4)]
            );
            var e4, n4, i2, o3;
          },
          toString: function () {
            return (function (t3, e4, r4, n4) {
              var i2 = x(r4),
                o3 = S(e4);
              return i2
                ? "<" +
                    t3 +
                    ' data-rh="true" ' +
                    i2 +
                    ">" +
                    w(o3, n4) +
                    "</" +
                    t3 +
                    ">"
                : "<" + t3 + ' data-rh="true">' + w(o3, n4) + "</" + t3 + ">";
            })(e3, r3.title, r3.titleAttributes, n3);
          },
        };
      case "bodyAttributes":
      case "htmlAttributes":
        return {
          toComponent: function () {
            return L(r3);
          },
          toString: function () {
            return x(r3);
          },
        };
      default:
        return {
          toComponent: function () {
            return j(e3, r3);
          },
          toString: function () {
            return (function (t3, e4, r4) {
              return e4.reduce(function (e5, n4) {
                var i2 = Object.keys(n4)
                    .filter(function (t4) {
                      return !(t4 === "innerHTML" || t4 === "cssText");
                    })
                    .reduce(function (t4, e6) {
                      var i3 =
                        n4[e6] === void 0
                          ? e6
                          : e6 + '="' + w(n4[e6], r4) + '"';
                      return t4 ? t4 + " " + i3 : i3;
                    }, ""),
                  o3 = n4.innerHTML || n4.cssText || "",
                  a2 = P.indexOf(t3) === -1;
                return (
                  e5 +
                  "<" +
                  t3 +
                  ' data-rh="true" ' +
                  i2 +
                  (a2 ? "/>" : ">" + o3 + "</" + t3 + ">")
                );
              }, "");
            })(e3, r3, n3);
          },
        };
    }
  },
  k = function (t3) {
    var e3 = t3.baseTag,
      r3 = t3.bodyAttributes,
      n3 = t3.encode,
      i2 = t3.htmlAttributes,
      o3 = t3.noscriptTags,
      a2 = t3.styleTags,
      s2 = t3.title,
      c2 = s2 === void 0 ? "" : s2,
      u2 = t3.titleAttributes,
      h2 = t3.linkTags,
      m2 = t3.metaTags,
      y2 = t3.scriptTags,
      T2 = {
        toComponent: function () {},
        toString: function () {
          return "";
        },
      };
    if (t3.prioritizeSeoTags) {
      var g2 = (function (t4) {
        var e4 = t4.linkTags,
          r4 = t4.scriptTags,
          n4 = t4.encode,
          i3 = E(t4.metaTags, d),
          o4 = E(e4, p),
          a3 = E(r4, f);
        return {
          priorityMethods: {
            toComponent: function () {
              return [].concat(
                j(l.META, i3.priority),
                j(l.LINK, o4.priority),
                j(l.SCRIPT, a3.priority),
              );
            },
            toString: function () {
              return (
                M(l.META, i3.priority, n4) +
                " " +
                M(l.LINK, o4.priority, n4) +
                " " +
                M(l.SCRIPT, a3.priority, n4)
              );
            },
          },
          metaTags: i3.default,
          linkTags: o4.default,
          scriptTags: a3.default,
        };
      })(t3);
      (T2 = g2.priorityMethods),
        (h2 = g2.linkTags),
        (m2 = g2.metaTags),
        (y2 = g2.scriptTags);
    }
    return {
      priority: T2,
      base: M(l.BASE, e3, n3),
      bodyAttributes: M("bodyAttributes", r3, n3),
      htmlAttributes: M("htmlAttributes", i2, n3),
      link: M(l.LINK, h2, n3),
      meta: M(l.META, m2, n3),
      noscript: M(l.NOSCRIPT, o3, n3),
      script: M(l.SCRIPT, y2, n3),
      style: M(l.STYLE, a2, n3),
      title: M(l.TITLE, { title: c2, titleAttributes: u2 }, n3),
    };
  },
  H = [],
  N = function (t3, e3) {
    var r3 = this;
    e3 === void 0 && (e3 = typeof document < "u"),
      (this.instances = []),
      (this.value = {
        setHelmet: function (t4) {
          r3.context.helmet = t4;
        },
        helmetInstances: {
          get: function () {
            return r3.canUseDOM ? H : r3.instances;
          },
          add: function (t4) {
            (r3.canUseDOM ? H : r3.instances).push(t4);
          },
          remove: function (t4) {
            var e4 = (r3.canUseDOM ? H : r3.instances).indexOf(t4);
            (r3.canUseDOM ? H : r3.instances).splice(e4, 1);
          },
        },
      }),
      (this.context = t3),
      (this.canUseDOM = e3),
      e3 ||
        (t3.helmet = k({
          baseTag: [],
          bodyAttributes: {},
          encodeSpecialCharacters: !0,
          htmlAttributes: {},
          linkTags: [],
          metaTags: [],
          noscriptTags: [],
          scriptTags: [],
          styleTags: [],
          title: "",
          titleAttributes: {},
        }));
  },
  R = import_react.default.createContext({}),
  D = import_prop_types.default.shape({
    setHelmet: import_prop_types.default.func,
    helmetInstances: import_prop_types.default.shape({
      get: import_prop_types.default.func,
      add: import_prop_types.default.func,
      remove: import_prop_types.default.func,
    }),
  }),
  U = typeof document < "u",
  q = (function (e3) {
    function r3(t3) {
      var n3;
      return (
        ((n3 = e3.call(this, t3) || this).helmetData = new N(
          n3.props.context,
          r3.canUseDOM,
        )),
        n3
      );
    }
    return (
      s(r3, e3),
      (r3.prototype.render = function () {
        return import_react.default.createElement(
          R.Provider,
          { value: this.helmetData.value },
          this.props.children,
        );
      }),
      r3
    );
  })(import_react.Component);
(q.canUseDOM = U),
  (q.propTypes = {
    context: import_prop_types.default.shape({
      helmet: import_prop_types.default.shape(),
    }),
    children: import_prop_types.default.node.isRequired,
  }),
  (q.defaultProps = { context: {} }),
  (q.displayName = "HelmetProvider");
var Y = function (t3, e3) {
    var r3,
      n3 = document.head || document.querySelector(l.HEAD),
      i2 = n3.querySelectorAll(t3 + "[data-rh]"),
      o3 = [].slice.call(i2),
      a2 = [];
    return (
      e3 &&
        e3.length &&
        e3.forEach(function (e4) {
          var n4 = document.createElement(t3);
          for (var i3 in e4)
            Object.prototype.hasOwnProperty.call(e4, i3) &&
              (i3 === "innerHTML"
                ? (n4.innerHTML = e4.innerHTML)
                : i3 === "cssText"
                  ? n4.styleSheet
                    ? (n4.styleSheet.cssText = e4.cssText)
                    : n4.appendChild(document.createTextNode(e4.cssText))
                  : n4.setAttribute(i3, e4[i3] === void 0 ? "" : e4[i3]));
          n4.setAttribute("data-rh", "true"),
            o3.some(function (t4, e5) {
              return (r3 = e5), n4.isEqualNode(t4);
            })
              ? o3.splice(r3, 1)
              : a2.push(n4);
        }),
      o3.forEach(function (t4) {
        return t4.parentNode.removeChild(t4);
      }),
      a2.forEach(function (t4) {
        return n3.appendChild(t4);
      }),
      { oldTags: o3, newTags: a2 }
    );
  },
  B = function (t3, e3) {
    var r3 = document.getElementsByTagName(t3)[0];
    if (r3) {
      for (
        var n3 = r3.getAttribute("data-rh"),
          i2 = n3 ? n3.split(",") : [],
          o3 = [].concat(i2),
          a2 = Object.keys(e3),
          s2 = 0;
        s2 < a2.length;
        s2 += 1
      ) {
        var c2 = a2[s2],
          u2 = e3[c2] || "";
        r3.getAttribute(c2) !== u2 && r3.setAttribute(c2, u2),
          i2.indexOf(c2) === -1 && i2.push(c2);
        var l3 = o3.indexOf(c2);
        l3 !== -1 && o3.splice(l3, 1);
      }
      for (var p2 = o3.length - 1; p2 >= 0; p2 -= 1) r3.removeAttribute(o3[p2]);
      i2.length === o3.length
        ? r3.removeAttribute("data-rh")
        : r3.getAttribute("data-rh") !== a2.join(",") &&
          r3.setAttribute("data-rh", a2.join(","));
    }
  },
  K = function (t3, e3) {
    var r3 = t3.baseTag,
      n3 = t3.htmlAttributes,
      i2 = t3.linkTags,
      o3 = t3.metaTags,
      a2 = t3.noscriptTags,
      s2 = t3.onChangeClientState,
      c2 = t3.scriptTags,
      u2 = t3.styleTags,
      p2 = t3.title,
      f2 = t3.titleAttributes;
    B(l.BODY, t3.bodyAttributes),
      B(l.HTML, n3),
      (function (t4, e4) {
        t4 !== void 0 && document.title !== t4 && (document.title = S(t4)),
          B(l.TITLE, e4);
      })(p2, f2);
    var d2 = {
        baseTag: Y(l.BASE, r3),
        linkTags: Y(l.LINK, i2),
        metaTags: Y(l.META, o3),
        noscriptTags: Y(l.NOSCRIPT, a2),
        scriptTags: Y(l.SCRIPT, c2),
        styleTags: Y(l.STYLE, u2),
      },
      h2 = {},
      m2 = {};
    Object.keys(d2).forEach(function (t4) {
      var e4 = d2[t4],
        r4 = e4.newTags,
        n4 = e4.oldTags;
      r4.length && (h2[t4] = r4), n4.length && (m2[t4] = d2[t4].oldTags);
    }),
      e3 && e3(),
      s2(t3, h2, m2);
  },
  _ = null,
  z = (function (t3) {
    function e3() {
      for (
        var e4, r4 = arguments.length, n3 = new Array(r4), i2 = 0;
        i2 < r4;
        i2++
      )
        n3[i2] = arguments[i2];
      return (
        ((e4 = t3.call.apply(t3, [this].concat(n3)) || this).rendered = !1), e4
      );
    }
    s(e3, t3);
    var r3 = e3.prototype;
    return (
      (r3.shouldComponentUpdate = function (t4) {
        return !(0, import_shallowequal.default)(t4, this.props);
      }),
      (r3.componentDidUpdate = function () {
        this.emitChange();
      }),
      (r3.componentWillUnmount = function () {
        this.props.context.helmetInstances.remove(this), this.emitChange();
      }),
      (r3.emitChange = function () {
        var t4,
          e4,
          r4 = this.props.context,
          n3 = r4.setHelmet,
          i2 = null,
          o3 =
            ((t4 = r4.helmetInstances.get().map(function (t5) {
              var e5 = a({}, t5.props);
              return delete e5.context, e5;
            })),
            {
              baseTag: A(["href"], t4),
              bodyAttributes: v("bodyAttributes", t4),
              defer: T(t4, "defer"),
              encode: T(t4, "encodeSpecialCharacters"),
              htmlAttributes: v("htmlAttributes", t4),
              linkTags: C(l.LINK, ["rel", "href"], t4),
              metaTags: C(
                l.META,
                ["name", "charset", "http-equiv", "property", "itemprop"],
                t4,
              ),
              noscriptTags: C(l.NOSCRIPT, ["innerHTML"], t4),
              onChangeClientState: b(t4),
              scriptTags: C(l.SCRIPT, ["src", "innerHTML"], t4),
              styleTags: C(l.STYLE, ["cssText"], t4),
              title: g(t4),
              titleAttributes: v("titleAttributes", t4),
              prioritizeSeoTags: O(t4, "prioritizeSeoTags"),
            });
        q.canUseDOM
          ? ((e4 = o3),
            _ && cancelAnimationFrame(_),
            e4.defer
              ? (_ = requestAnimationFrame(function () {
                  K(e4, function () {
                    _ = null;
                  });
                }))
              : (K(e4), (_ = null)))
          : k && (i2 = k(o3)),
          n3(i2);
      }),
      (r3.init = function () {
        this.rendered ||
          ((this.rendered = !0),
          this.props.context.helmetInstances.add(this),
          this.emitChange());
      }),
      (r3.render = function () {
        return this.init(), null;
      }),
      e3
    );
  })(import_react.Component);
(z.propTypes = { context: D.isRequired }), (z.displayName = "HelmetDispatcher");
var F = ["children"],
  G = ["children"],
  W = (function (e3) {
    function r3() {
      return e3.apply(this, arguments) || this;
    }
    s(r3, e3);
    var o3 = r3.prototype;
    return (
      (o3.shouldComponentUpdate = function (t3) {
        return !(0, import_react_fast_compare.default)(
          I(this.props, "helmetData"),
          I(t3, "helmetData"),
        );
      }),
      (o3.mapNestedChildrenToProps = function (t3, e4) {
        if (!e4) return null;
        switch (t3.type) {
          case l.SCRIPT:
          case l.NOSCRIPT:
            return { innerHTML: e4 };
          case l.STYLE:
            return { cssText: e4 };
          default:
            throw new Error(
              "<" +
                t3.type +
                " /> elements are self-closing and can not contain children. Refer to our API for more information.",
            );
        }
      }),
      (o3.flattenArrayTypeChildren = function (t3) {
        var e4,
          r4 = t3.child,
          n3 = t3.arrayTypeChildren;
        return a(
          {},
          n3,
          (((e4 = {})[r4.type] = [].concat(n3[r4.type] || [], [
            a(
              {},
              t3.newChildProps,
              this.mapNestedChildrenToProps(r4, t3.nestedChildren),
            ),
          ])),
          e4),
        );
      }),
      (o3.mapObjectTypeChildren = function (t3) {
        var e4,
          r4,
          n3 = t3.child,
          i2 = t3.newProps,
          o4 = t3.newChildProps,
          s2 = t3.nestedChildren;
        switch (n3.type) {
          case l.TITLE:
            return a(
              {},
              i2,
              (((e4 = {})[n3.type] = s2), (e4.titleAttributes = a({}, o4)), e4),
            );
          case l.BODY:
            return a({}, i2, { bodyAttributes: a({}, o4) });
          case l.HTML:
            return a({}, i2, { htmlAttributes: a({}, o4) });
          default:
            return a({}, i2, (((r4 = {})[n3.type] = a({}, o4)), r4));
        }
      }),
      (o3.mapArrayTypeChildrenToProps = function (t3, e4) {
        var r4 = a({}, e4);
        return (
          Object.keys(t3).forEach(function (e5) {
            var n3;
            r4 = a({}, r4, (((n3 = {})[e5] = t3[e5]), n3));
          }),
          r4
        );
      }),
      (o3.warnOnInvalidChildren = function (t3, e4) {
        return (
          (0, import_invariant.default)(
            h.some(function (e5) {
              return t3.type === e5;
            }),
            typeof t3.type == "function"
              ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information."
              : "Only elements types " +
                  h.join(", ") +
                  " are allowed. Helmet does not support rendering <" +
                  t3.type +
                  "> elements. Refer to our API for more information.",
          ),
          (0, import_invariant.default)(
            !e4 ||
              typeof e4 == "string" ||
              (Array.isArray(e4) &&
                !e4.some(function (t4) {
                  return typeof t4 != "string";
                })),
            "Helmet expects a string as a child of <" +
              t3.type +
              ">. Did you forget to wrap your children in braces? ( <" +
              t3.type +
              ">{``}</" +
              t3.type +
              "> ) Refer to our API for more information.",
          ),
          !0
        );
      }),
      (o3.mapChildrenToProps = function (e4, r4) {
        var n3 = this,
          i2 = {};
        return (
          import_react.default.Children.forEach(e4, function (t3) {
            if (t3 && t3.props) {
              var e5 = t3.props,
                o4 = e5.children,
                a2 = u(e5, F),
                s2 = Object.keys(a2).reduce(function (t4, e6) {
                  return (t4[y[e6] || e6] = a2[e6]), t4;
                }, {}),
                c2 = t3.type;
              switch (
                (typeof c2 == "symbol"
                  ? (c2 = c2.toString())
                  : n3.warnOnInvalidChildren(t3, o4),
                c2)
              ) {
                case l.FRAGMENT:
                  r4 = n3.mapChildrenToProps(o4, r4);
                  break;
                case l.LINK:
                case l.META:
                case l.NOSCRIPT:
                case l.SCRIPT:
                case l.STYLE:
                  i2 = n3.flattenArrayTypeChildren({
                    child: t3,
                    arrayTypeChildren: i2,
                    newChildProps: s2,
                    nestedChildren: o4,
                  });
                  break;
                default:
                  r4 = n3.mapObjectTypeChildren({
                    child: t3,
                    newProps: r4,
                    newChildProps: s2,
                    nestedChildren: o4,
                  });
              }
            }
          }),
          this.mapArrayTypeChildrenToProps(i2, r4)
        );
      }),
      (o3.render = function () {
        var e4 = this.props,
          r4 = e4.children,
          n3 = u(e4, G),
          i2 = a({}, n3),
          o4 = n3.helmetData;
        return (
          r4 && (i2 = this.mapChildrenToProps(r4, i2)),
          !o4 || o4 instanceof N || (o4 = new N(o4.context, o4.instances)),
          o4
            ? import_react.default.createElement(
                z,
                a({}, i2, { context: o4.value, helmetData: void 0 }),
              )
            : import_react.default.createElement(
                R.Consumer,
                null,
                function (e5) {
                  return import_react.default.createElement(
                    z,
                    a({}, i2, { context: e5 }),
                  );
                },
              )
        );
      }),
      r3
    );
  })(import_react.Component);
(W.propTypes = {
  base: import_prop_types.default.object,
  bodyAttributes: import_prop_types.default.object,
  children: import_prop_types.default.oneOfType([
    import_prop_types.default.arrayOf(import_prop_types.default.node),
    import_prop_types.default.node,
  ]),
  defaultTitle: import_prop_types.default.string,
  defer: import_prop_types.default.bool,
  encodeSpecialCharacters: import_prop_types.default.bool,
  htmlAttributes: import_prop_types.default.object,
  link: import_prop_types.default.arrayOf(import_prop_types.default.object),
  meta: import_prop_types.default.arrayOf(import_prop_types.default.object),
  noscript: import_prop_types.default.arrayOf(import_prop_types.default.object),
  onChangeClientState: import_prop_types.default.func,
  script: import_prop_types.default.arrayOf(import_prop_types.default.object),
  style: import_prop_types.default.arrayOf(import_prop_types.default.object),
  title: import_prop_types.default.string,
  titleAttributes: import_prop_types.default.object,
  titleTemplate: import_prop_types.default.string,
  prioritizeSeoTags: import_prop_types.default.bool,
  helmetData: import_prop_types.default.object,
}),
  (W.defaultProps = {
    defer: !0,
    encodeSpecialCharacters: !0,
    prioritizeSeoTags: !1,
  }),
  (W.displayName = "Helmet");
var import_react60 = __toESM(require_react());
var import_react33 = __toESM(require_react());
var import_react31 = __toESM(require_react());
var import_react6 = __toESM(require_react());
var import_react2 = __toESM(require_react());
var StorybookLogoStyled = newStyled(StorybookLogo)(({ theme }) => ({
    width: "auto",
    height: "22px !important",
    display: "block",
    color:
      theme.base === "light" ? theme.color.defaultText : theme.color.lightest,
  })),
  Img = newStyled.img({
    display: "block",
    maxWidth: "150px",
    maxHeight: "100px",
  }),
  LogoLink = newStyled.a(({ theme }) => ({
    display: "inline-block",
    height: "100%",
    margin: "-3px -4px",
    padding: "2px 3px",
    border: "1px solid transparent",
    borderRadius: 3,
    color: "inherit",
    textDecoration: "none",
    "&:focus": { outline: 0, borderColor: theme.color.secondary },
  })),
  Brand = withTheme(({ theme }) => {
    let { title = "Storybook", url = "./", image, target } = theme.brand,
      targetValue = target || (url === "./" ? "" : "_blank");
    if (image === null)
      return title === null
        ? null
        : url
          ? import_react2.default.createElement(LogoLink, {
              href: url,
              target: targetValue,
              dangerouslySetInnerHTML: { __html: title },
            })
          : import_react2.default.createElement("div", {
              dangerouslySetInnerHTML: { __html: title },
            });
    let logo = image
      ? import_react2.default.createElement(Img, { src: image, alt: title })
      : import_react2.default.createElement(StorybookLogoStyled, {
          alt: title,
        });
    return url
      ? import_react2.default.createElement(
          LogoLink,
          { title, href: url, target: targetValue },
          logo,
        )
      : import_react2.default.createElement("div", null, logo);
  });
var import_react5 = __toESM(require_react());
function _assertThisInitialized(self) {
  if (self === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return self;
}
function _setPrototypeOf(o3, p2) {
  return (
    (_setPrototypeOf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (o4, p3) {
          return (o4.__proto__ = p3), o4;
        }),
    _setPrototypeOf(o3, p2)
  );
}
function _inheritsLoose(subClass, superClass) {
  (subClass.prototype = Object.create(superClass.prototype)),
    (subClass.prototype.constructor = subClass),
    _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o3) {
  return (
    (_getPrototypeOf = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (o4) {
          return o4.__proto__ || Object.getPrototypeOf(o4);
        }),
    _getPrototypeOf(o3)
  );
}
function _isNativeFunction(fn) {
  try {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  } catch {
    return typeof fn == "function";
  }
}
function _isNativeReflectConstruct() {
  try {
    var t3 = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (_isNativeReflectConstruct = function () {
    return !!t3;
  })();
}
function _construct(t3, e3, r3) {
  if (_isNativeReflectConstruct())
    return Reflect.construct.apply(null, arguments);
  var o3 = [null];
  o3.push.apply(o3, e3);
  var p2 = new (t3.bind.apply(t3, o3))();
  return r3 && _setPrototypeOf(p2, r3.prototype), p2;
}
function _wrapNativeSuper(Class) {
  var _cache = typeof Map == "function" ? new Map() : void 0;
  return (
    (_wrapNativeSuper = function (Class2) {
      if (Class2 === null || !_isNativeFunction(Class2)) return Class2;
      if (typeof Class2 != "function")
        throw new TypeError(
          "Super expression must either be null or a function",
        );
      if (typeof _cache < "u") {
        if (_cache.has(Class2)) return _cache.get(Class2);
        _cache.set(Class2, Wrapper3);
      }
      function Wrapper3() {
        return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
      }
      return (
        (Wrapper3.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper3,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        _setPrototypeOf(Wrapper3, Class2)
      );
    }),
    _wrapNativeSuper(Class)
  );
}
var ERRORS = {
  1: `Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`,
  2: `Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`,
  3: `Passed an incorrect argument to a color function, please pass a string representation of a color.

`,
  4: `Couldn't generate valid rgb string from %s, it returned %s.

`,
  5: `Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`,
  6: `Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`,
  7: `Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`,
  8: `Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`,
  9: `Please provide a number of steps to the modularScale helper.

`,
  10: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,
  11: `Invalid value passed as base to modularScale, expected number or em string but got "%s"

`,
  12: `Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`,
  13: `Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`,
  14: `Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`,
  15: `Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`,
  16: `You must provide a template to this method.

`,
  17: `You passed an unsupported selector state to this method.

`,
  18: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`,
  19: `fromSize and toSize must be provided as stringified numbers with the same units.

`,
  20: `expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,
  21: "expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  22: "expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  23: `fontFace expects a name of a font-family.

`,
  24: `fontFace expects either the path to the font file(s) or a name of a local copy.

`,
  25: `fontFace expects localFonts to be an array.

`,
  26: `fontFace expects fileFormats to be an array.

`,
  27: `radialGradient requries at least 2 color-stops to properly render.

`,
  28: `Please supply a filename to retinaImage() as the first argument.

`,
  29: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,
  30: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  31: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`,
  32: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`,
  33: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`,
  34: `borderRadius expects a radius value as a string or number as the second argument.

`,
  35: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,
  36: `Property must be a string value.

`,
  37: `Syntax Error at %s.

`,
  38: `Formula contains a function that needs parentheses at %s.

`,
  39: `Formula is missing closing parenthesis at %s.

`,
  40: `Formula has too many closing parentheses at %s.

`,
  41: `All values in a formula must have the same unit or be unitless.

`,
  42: `Please provide a number of steps to the modularScale helper.

`,
  43: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,
  44: `Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`,
  45: `Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`,
  46: `Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`,
  47: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`,
  48: `fromSize and toSize must be provided as stringified numbers with the same units.

`,
  49: `Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,
  50: `Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`,
  51: `Expects the first argument object to have the properties prop, fromSize, and toSize.

`,
  52: `fontFace expects either the path to the font file(s) or a name of a local copy.

`,
  53: `fontFace expects localFonts to be an array.

`,
  54: `fontFace expects fileFormats to be an array.

`,
  55: `fontFace expects a name of a font-family.

`,
  56: `linearGradient requries at least 2 color-stops to properly render.

`,
  57: `radialGradient requries at least 2 color-stops to properly render.

`,
  58: `Please supply a filename to retinaImage() as the first argument.

`,
  59: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,
  60: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  61: `Property must be a string value.

`,
  62: `borderRadius expects a radius value as a string or number as the second argument.

`,
  63: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,
  64: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`,
  65: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`,
  66: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`,
  67: `You must provide a template to this method.

`,
  68: `You passed an unsupported selector state to this method.

`,
  69: `Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`,
  70: `Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`,
  71: `Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`,
  72: `Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`,
  73: `Please provide a valid CSS variable.

`,
  74: `CSS variable not found and no default was provided.

`,
  75: `important requires a valid style object, got a %s instead.

`,
  76: `fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`,
  77: `remToPx expects a value in "rem" but you provided it in "%s".

`,
  78: `base must be set in "px" or "%" but you set it in "%s".
`,
};
function format() {
  for (
    var _len = arguments.length, args = new Array(_len), _key = 0;
    _key < _len;
    _key++
  )
    args[_key] = arguments[_key];
  var a2 = args[0],
    b2 = [],
    c2;
  for (c2 = 1; c2 < args.length; c2 += 1) b2.push(args[c2]);
  return (
    b2.forEach(function (d2) {
      a2 = a2.replace(/%[a-z]/, d2);
    }),
    a2
  );
}
var PolishedError = (function (_Error) {
  _inheritsLoose(PolishedError2, _Error);
  function PolishedError2(code) {
    for (
      var _this,
        _len2 = arguments.length,
        args = new Array(_len2 > 1 ? _len2 - 1 : 0),
        _key2 = 1;
      _key2 < _len2;
      _key2++
    )
      args[_key2 - 1] = arguments[_key2];
    return (
      (_this =
        _Error.call(this, format.apply(void 0, [ERRORS[code]].concat(args))) ||
        this),
      _assertThisInitialized(_this)
    );
  }
  return PolishedError2;
})(_wrapNativeSuper(Error));
function colorToInt(color) {
  return Math.round(color * 255);
}
function convertToInt(red, green, blue) {
  return colorToInt(red) + "," + colorToInt(green) + "," + colorToInt(blue);
}
function hslToRgb(hue, saturation, lightness, convert) {
  if ((convert === void 0 && (convert = convertToInt), saturation === 0))
    return convert(lightness, lightness, lightness);
  var huePrime = (((hue % 360) + 360) % 360) / 60,
    chroma = (1 - Math.abs(2 * lightness - 1)) * saturation,
    secondComponent = chroma * (1 - Math.abs((huePrime % 2) - 1)),
    red = 0,
    green = 0,
    blue = 0;
  huePrime >= 0 && huePrime < 1
    ? ((red = chroma), (green = secondComponent))
    : huePrime >= 1 && huePrime < 2
      ? ((red = secondComponent), (green = chroma))
      : huePrime >= 2 && huePrime < 3
        ? ((green = chroma), (blue = secondComponent))
        : huePrime >= 3 && huePrime < 4
          ? ((green = secondComponent), (blue = chroma))
          : huePrime >= 4 && huePrime < 5
            ? ((red = secondComponent), (blue = chroma))
            : huePrime >= 5 &&
              huePrime < 6 &&
              ((red = chroma), (blue = secondComponent));
  var lightnessModification = lightness - chroma / 2,
    finalRed = red + lightnessModification,
    finalGreen = green + lightnessModification,
    finalBlue = blue + lightnessModification;
  return convert(finalRed, finalGreen, finalBlue);
}
var namedColorMap = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "00ffff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "0000ff",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "00ffff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "ff00ff",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "639",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32",
};
function nameToHex(color) {
  if (typeof color != "string") return color;
  var normalizedColorName = color.toLowerCase();
  return namedColorMap[normalizedColorName]
    ? "#" + namedColorMap[normalizedColorName]
    : color;
}
var hexRegex = /^#[a-fA-F0-9]{6}$/,
  hexRgbaRegex = /^#[a-fA-F0-9]{8}$/,
  reducedHexRegex = /^#[a-fA-F0-9]{3}$/,
  reducedRgbaHexRegex = /^#[a-fA-F0-9]{4}$/,
  rgbRegex =
    /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
  rgbaRegex =
    /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,
  hslRegex =
    /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
  hslaRegex =
    /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function parseToRgb(color) {
  if (typeof color != "string") throw new PolishedError(3);
  var normalizedColor = nameToHex(color);
  if (normalizedColor.match(hexRegex))
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16),
    };
  if (normalizedColor.match(hexRgbaRegex)) {
    var alpha = parseFloat(
      (
        parseInt("" + normalizedColor[7] + normalizedColor[8], 16) / 255
      ).toFixed(2),
    );
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16),
      alpha,
    };
  }
  if (normalizedColor.match(reducedHexRegex))
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16),
    };
  if (normalizedColor.match(reducedRgbaHexRegex)) {
    var _alpha = parseFloat(
      (
        parseInt("" + normalizedColor[4] + normalizedColor[4], 16) / 255
      ).toFixed(2),
    );
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16),
      alpha: _alpha,
    };
  }
  var rgbMatched = rgbRegex.exec(normalizedColor);
  if (rgbMatched)
    return {
      red: parseInt("" + rgbMatched[1], 10),
      green: parseInt("" + rgbMatched[2], 10),
      blue: parseInt("" + rgbMatched[3], 10),
    };
  var rgbaMatched = rgbaRegex.exec(normalizedColor.substring(0, 50));
  if (rgbaMatched)
    return {
      red: parseInt("" + rgbaMatched[1], 10),
      green: parseInt("" + rgbaMatched[2], 10),
      blue: parseInt("" + rgbaMatched[3], 10),
      alpha:
        parseFloat("" + rgbaMatched[4]) > 1
          ? parseFloat("" + rgbaMatched[4]) / 100
          : parseFloat("" + rgbaMatched[4]),
    };
  var hslMatched = hslRegex.exec(normalizedColor);
  if (hslMatched) {
    var hue = parseInt("" + hslMatched[1], 10),
      saturation = parseInt("" + hslMatched[2], 10) / 100,
      lightness = parseInt("" + hslMatched[3], 10) / 100,
      rgbColorString = "rgb(" + hslToRgb(hue, saturation, lightness) + ")",
      hslRgbMatched = rgbRegex.exec(rgbColorString);
    if (!hslRgbMatched)
      throw new PolishedError(4, normalizedColor, rgbColorString);
    return {
      red: parseInt("" + hslRgbMatched[1], 10),
      green: parseInt("" + hslRgbMatched[2], 10),
      blue: parseInt("" + hslRgbMatched[3], 10),
    };
  }
  var hslaMatched = hslaRegex.exec(normalizedColor.substring(0, 50));
  if (hslaMatched) {
    var _hue = parseInt("" + hslaMatched[1], 10),
      _saturation = parseInt("" + hslaMatched[2], 10) / 100,
      _lightness = parseInt("" + hslaMatched[3], 10) / 100,
      _rgbColorString = "rgb(" + hslToRgb(_hue, _saturation, _lightness) + ")",
      _hslRgbMatched = rgbRegex.exec(_rgbColorString);
    if (!_hslRgbMatched)
      throw new PolishedError(4, normalizedColor, _rgbColorString);
    return {
      red: parseInt("" + _hslRgbMatched[1], 10),
      green: parseInt("" + _hslRgbMatched[2], 10),
      blue: parseInt("" + _hslRgbMatched[3], 10),
      alpha:
        parseFloat("" + hslaMatched[4]) > 1
          ? parseFloat("" + hslaMatched[4]) / 100
          : parseFloat("" + hslaMatched[4]),
    };
  }
  throw new PolishedError(5);
}
var reduceHexValue = function (value) {
    return value.length === 7 &&
      value[1] === value[2] &&
      value[3] === value[4] &&
      value[5] === value[6]
      ? "#" + value[1] + value[3] + value[5]
      : value;
  },
  reduceHexValue$1 = reduceHexValue;
function numberToHex(value) {
  var hex = value.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}
function rgb(value, green, blue) {
  if (
    typeof value == "number" &&
    typeof green == "number" &&
    typeof blue == "number"
  )
    return reduceHexValue$1(
      "#" + numberToHex(value) + numberToHex(green) + numberToHex(blue),
    );
  if (typeof value == "object" && green === void 0 && blue === void 0)
    return reduceHexValue$1(
      "#" +
        numberToHex(value.red) +
        numberToHex(value.green) +
        numberToHex(value.blue),
    );
  throw new PolishedError(6);
}
function rgba(firstValue, secondValue, thirdValue, fourthValue) {
  if (typeof firstValue == "string" && typeof secondValue == "number") {
    var rgbValue = parseToRgb(firstValue);
    return (
      "rgba(" +
      rgbValue.red +
      "," +
      rgbValue.green +
      "," +
      rgbValue.blue +
      "," +
      secondValue +
      ")"
    );
  } else {
    if (
      typeof firstValue == "number" &&
      typeof secondValue == "number" &&
      typeof thirdValue == "number" &&
      typeof fourthValue == "number"
    )
      return fourthValue >= 1
        ? rgb(firstValue, secondValue, thirdValue)
        : "rgba(" +
            firstValue +
            "," +
            secondValue +
            "," +
            thirdValue +
            "," +
            fourthValue +
            ")";
    if (
      typeof firstValue == "object" &&
      secondValue === void 0 &&
      thirdValue === void 0 &&
      fourthValue === void 0
    )
      return firstValue.alpha >= 1
        ? rgb(firstValue.red, firstValue.green, firstValue.blue)
        : "rgba(" +
            firstValue.red +
            "," +
            firstValue.green +
            "," +
            firstValue.blue +
            "," +
            firstValue.alpha +
            ")";
  }
  throw new PolishedError(7);
}
function curried(f2, length, acc) {
  return function () {
    var combined = acc.concat(Array.prototype.slice.call(arguments));
    return combined.length >= length
      ? f2.apply(this, combined)
      : curried(f2, length, combined);
  };
}
function curry(f2) {
  return curried(f2, f2.length, []);
}
function guard(lowerBoundary, upperBoundary, value) {
  return Math.max(lowerBoundary, Math.min(upperBoundary, value));
}
function transparentize(amount, color) {
  if (color === "transparent") return color;
  var parsedColor = parseToRgb(color),
    alpha = typeof parsedColor.alpha == "number" ? parsedColor.alpha : 1,
    colorWithAlpha = _extends({}, parsedColor, {
      alpha: guard(
        0,
        1,
        +(alpha * 100 - parseFloat(amount) * 100).toFixed(2) / 100,
      ),
    });
  return rgba(colorWithAlpha);
}
var curriedTransparentize = curry(transparentize),
  curriedTransparentize$1 = curriedTransparentize;
var import_react4 = __toESM(require_react());
var import_react3 = __toESM(require_react());
function useMediaQuery(query) {
  let getMatches = (queryMatch) =>
      typeof window < "u" ? window.matchMedia(queryMatch).matches : !1,
    [matches, setMatches] = (0, import_react3.useState)(getMatches(query));
  function handleChange() {
    setMatches(getMatches(query));
  }
  return (
    (0, import_react3.useEffect)(() => {
      let matchMedia = window.matchMedia(query);
      return (
        handleChange(),
        matchMedia.addEventListener("change", handleChange),
        () => {
          matchMedia.removeEventListener("change", handleChange);
        }
      );
    }, [query]),
    matches
  );
}
var MEDIA_DESKTOP_BREAKPOINT = "@media (min-width: 600px)";
var LayoutContext = (0, import_react4.createContext)({
    isMobileMenuOpen: !1,
    setMobileMenuOpen: () => {},
    isMobileAboutOpen: !1,
    setMobileAboutOpen: () => {},
    isMobilePanelOpen: !1,
    setMobilePanelOpen: () => {},
    isDesktop: !1,
    isMobile: !1,
  }),
  LayoutProvider = ({ children }) => {
    let [isMobileMenuOpen, setMobileMenuOpen] = (0, import_react4.useState)(!1),
      [isMobileAboutOpen, setMobileAboutOpen] = (0, import_react4.useState)(!1),
      [isMobilePanelOpen, setMobilePanelOpen] = (0, import_react4.useState)(!1),
      isDesktop = useMediaQuery(`(min-width: ${600}px)`),
      isMobile = !isDesktop,
      contextValue = (0, import_react4.useMemo)(
        () => ({
          isMobileMenuOpen,
          setMobileMenuOpen,
          isMobileAboutOpen,
          setMobileAboutOpen,
          isMobilePanelOpen,
          setMobilePanelOpen,
          isDesktop,
          isMobile,
        }),
        [
          isMobileMenuOpen,
          setMobileMenuOpen,
          isMobileAboutOpen,
          setMobileAboutOpen,
          isMobilePanelOpen,
          setMobilePanelOpen,
          isDesktop,
          isMobile,
        ],
      );
    return import_react4.default.createElement(
      LayoutContext.Provider,
      { value: contextValue },
      children,
    );
  },
  useLayout = () => (0, import_react4.useContext)(LayoutContext);
var SidebarIconButton = newStyled(IconButton)(({ highlighted, theme }) => ({
    position: "relative",
    overflow: "visible",
    marginTop: 0,
    zIndex: 1,
    ...(highlighted && {
      "&:before, &:after": {
        content: '""',
        position: "absolute",
        top: 6,
        right: 6,
        width: 5,
        height: 5,
        zIndex: 2,
        borderRadius: "50%",
        background: theme.background.app,
        border: `1px solid ${theme.background.app}`,
        boxShadow: `0 0 0 2px ${theme.background.app}`,
      },
      "&:after": {
        background: theme.color.positive,
        border: "1px solid rgba(0, 0, 0, 0.1)",
        boxShadow: `0 0 0 2px ${theme.background.app}`,
      },
      "&:hover:after, &:focus-visible:after": {
        boxShadow: `0 0 0 2px ${curriedTransparentize$1(0.88, theme.color.secondary)}`,
      },
    }),
  })),
  MenuButtonGroup = newStyled.div({ display: "flex", gap: 4 }),
  SidebarMenuList = ({ menu, onHide }) => {
    let links = (0, import_react5.useMemo)(
      () =>
        menu.map(({ onClick, ...rest }) => ({
          ...rest,
          onClick: (event, item) => {
            onClick && onClick(event, item), onHide();
          },
        })),
      [menu, onHide],
    );
    return import_react5.default.createElement(TooltipLinkList, { links });
  },
  SidebarMenu = ({ menu, isHighlighted, onClick }) => {
    let [isTooltipVisible, setIsTooltipVisible] = (0, import_react5.useState)(
        !1,
      ),
      { isMobile, setMobileMenuOpen } = useLayout();
    return isMobile
      ? import_react5.default.createElement(
          MenuButtonGroup,
          null,
          import_react5.default.createElement(
            SidebarIconButton,
            {
              title: "About Storybook",
              "aria-label": "About Storybook",
              highlighted: isHighlighted,
              active: !1,
              onClick,
            },
            import_react5.default.createElement(CogIcon, null),
          ),
          import_react5.default.createElement(
            IconButton,
            {
              title: "Close menu",
              "aria-label": "Close menu",
              onClick: () => setMobileMenuOpen(!1),
            },
            import_react5.default.createElement(CloseIcon, null),
          ),
        )
      : import_react5.default.createElement(
          WithTooltip,
          {
            placement: "top",
            closeOnOutsideClick: !0,
            tooltip: ({ onHide }) =>
              import_react5.default.createElement(SidebarMenuList, {
                onHide,
                menu,
              }),
            onVisibleChange: setIsTooltipVisible,
          },
          import_react5.default.createElement(
            SidebarIconButton,
            {
              title: "Shortcuts",
              "aria-label": "Shortcuts",
              highlighted: isHighlighted,
              active: isTooltipVisible,
            },
            import_react5.default.createElement(CogIcon, null),
          ),
        );
  };
var BrandArea = newStyled.div(({ theme }) => ({
    fontSize: theme.typography.size.s2,
    fontWeight: theme.typography.weight.bold,
    color: theme.color.defaultText,
    marginRight: 20,
    display: "flex",
    width: "100%",
    alignItems: "center",
    minHeight: 22,
    "& > * > *": { maxWidth: "100%" },
    "& > *": {
      maxWidth: "100%",
      height: "auto",
      display: "block",
      flex: "1 1 auto",
    },
  })),
  HeadingWrapper = newStyled.div({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    minHeight: 42,
    paddingLeft: 8,
  }),
  SkipToCanvasLink = newStyled(Button)(({ theme }) => ({
    display: "none",
    "@media (min-width: 600px)": {
      display: "block",
      position: "absolute",
      fontSize: theme.typography.size.s1,
      zIndex: 3,
      border: 0,
      width: 1,
      height: 1,
      padding: 0,
      margin: -1,
      overflow: "hidden",
      clip: "rect(0, 0, 0, 0)",
      whiteSpace: "nowrap",
      wordWrap: "normal",
      opacity: 0,
      transition: "opacity 150ms ease-out",
      "&:focus": {
        width: "100%",
        height: "inherit",
        padding: "10px 15px",
        margin: 0,
        clip: "unset",
        overflow: "unset",
        opacity: 1,
      },
    },
  })),
  Heading = ({
    menuHighlighted = !1,
    menu,
    skipLinkHref,
    extra,
    isLoading,
    onMenuClick,
    ...props
  }) =>
    import_react6.default.createElement(
      HeadingWrapper,
      { ...props },
      skipLinkHref &&
        import_react6.default.createElement(
          SkipToCanvasLink,
          { asChild: !0 },
          import_react6.default.createElement(
            "a",
            { href: skipLinkHref, tabIndex: 0 },
            "Skip to canvas",
          ),
        ),
      import_react6.default.createElement(
        BrandArea,
        null,
        import_react6.default.createElement(Brand, null),
      ),
      isLoading
        ? null
        : extra.map(({ id, render: Render }) =>
            import_react6.default.createElement(Render, { key: id }),
          ),
      import_react6.default.createElement(SidebarMenu, {
        menu,
        isHighlighted: menuHighlighted,
        onClick: onMenuClick,
      }),
    );
var import_react19 = __toESM(require_react());
var import_react16 = __toESM(require_react());
var import_react8 = __toESM(require_react());
var import_react7 = __toESM(require_react());
var LOADER_SEQUENCE = [0, 0, 1, 1, 2, 3, 3, 3, 1, 1, 1, 2, 2, 2, 3],
  Loadingitem = newStyled.div(
    {
      cursor: "progress",
      fontSize: 13,
      height: "16px",
      marginTop: 4,
      marginBottom: 4,
      alignItems: "center",
      overflow: "hidden",
    },
    ({ depth = 0 }) => ({ marginLeft: depth * 15, maxWidth: 85 - depth * 5 }),
    ({ theme }) => theme.animation.inlineGlow,
    ({ theme }) => ({ background: theme.appBorderColor }),
  ),
  Contained = newStyled.div({
    display: "flex",
    flexDirection: "column",
    paddingLeft: 20,
    paddingRight: 20,
  }),
  Loader2 = ({ size }) => {
    let repeats = Math.ceil(size / LOADER_SEQUENCE.length),
      sequence = Array.from(Array(repeats))
        .fill(LOADER_SEQUENCE)
        .flat()
        .slice(0, size);
    return import_react7.default.createElement(
      import_react7.Fragment,
      null,
      sequence.map((depth, index) =>
        import_react7.default.createElement(Loadingitem, { depth, key: index }),
      ),
    );
  };
var { window: globalWindow } = scope,
  TextStyle = newStyled.div(({ theme }) => ({
    fontSize: theme.typography.size.s2,
    lineHeight: "20px",
    margin: 0,
  })),
  Text = newStyled.div(({ theme }) => ({
    fontSize: theme.typography.size.s2,
    lineHeight: "20px",
    margin: 0,
    code: { fontSize: theme.typography.size.s1 },
    ul: { paddingLeft: 20, marginTop: 8, marginBottom: 8 },
  })),
  ErrorDisplay = newStyled.pre(
    {
      width: 420,
      boxSizing: "border-box",
      borderRadius: 8,
      overflow: "auto",
      whiteSpace: "pre",
    },
    ({ theme }) => ({ color: theme.color.dark }),
  ),
  AuthBlock = ({ loginUrl, id }) => {
    let [isAuthAttempted, setAuthAttempted] = (0, import_react8.useState)(!1),
      refresh = (0, import_react8.useCallback)(() => {
        globalWindow.document.location.reload();
      }, []),
      open = (0, import_react8.useCallback)((e3) => {
        e3.preventDefault();
        let childWindow = globalWindow.open(
            loginUrl,
            `storybook_auth_${id}`,
            "resizable,scrollbars",
          ),
          timer = setInterval(() => {
            childWindow
              ? childWindow.closed &&
                (clearInterval(timer), setAuthAttempted(!0))
              : (logger.error("unable to access loginUrl window"),
                clearInterval(timer));
          }, 1e3);
      }, []);
    return import_react8.default.createElement(
      Contained,
      null,
      import_react8.default.createElement(
        Spaced,
        null,
        isAuthAttempted
          ? import_react8.default.createElement(
              import_react8.Fragment,
              null,
              import_react8.default.createElement(
                Text,
                null,
                "Authentication on ",
                import_react8.default.createElement("strong", null, loginUrl),
                " concluded. Refresh the page to fetch this Storybook.",
              ),
              import_react8.default.createElement(
                "div",
                null,
                import_react8.default.createElement(
                  Button,
                  { small: !0, gray: !0, onClick: refresh },
                  import_react8.default.createElement(SyncIcon, null),
                  "Refresh now",
                ),
              ),
            )
          : import_react8.default.createElement(
              import_react8.Fragment,
              null,
              import_react8.default.createElement(
                Text,
                null,
                "Sign in to browse this Storybook.",
              ),
              import_react8.default.createElement(
                "div",
                null,
                import_react8.default.createElement(
                  Button,
                  { small: !0, gray: !0, onClick: open },
                  import_react8.default.createElement(LockIcon, null),
                  "Sign in",
                ),
              ),
            ),
      ),
    );
  },
  ErrorBlock = ({ error }) =>
    import_react8.default.createElement(
      Contained,
      null,
      import_react8.default.createElement(
        Spaced,
        null,
        import_react8.default.createElement(
          TextStyle,
          null,
          "Oh no! Something went wrong loading this Storybook.",
          import_react8.default.createElement("br", null),
          import_react8.default.createElement(
            WithTooltip,
            {
              tooltip: import_react8.default.createElement(
                ErrorDisplay,
                null,
                import_react8.default.createElement(ErrorFormatter, { error }),
              ),
            },
            import_react8.default.createElement(
              Link22,
              { isButton: !0 },
              "View error ",
              import_react8.default.createElement(ChevronDownIcon, null),
            ),
          ),
          " ",
          import_react8.default.createElement(
            Link22,
            {
              withArrow: !0,
              href: "https://storybook.js.org/docs",
              cancel: !1,
              target: "_blank",
            },
            "View docs",
          ),
        ),
      ),
    ),
  FlexSpaced = newStyled(Spaced)({ display: "flex" }),
  WideSpaced = newStyled(Spaced)({ flex: 1 }),
  EmptyBlock = ({ isMain }) =>
    import_react8.default.createElement(
      Contained,
      null,
      import_react8.default.createElement(
        FlexSpaced,
        { col: 1 },
        import_react8.default.createElement(
          WideSpaced,
          null,
          import_react8.default.createElement(
            Text,
            null,
            isMain
              ? import_react8.default.createElement(
                  import_react8.default.Fragment,
                  null,
                  "Oh no! Your Storybook is empty. Possible reasons why:",
                  import_react8.default.createElement(
                    "ul",
                    null,
                    import_react8.default.createElement(
                      "li",
                      null,
                      "The glob specified in ",
                      import_react8.default.createElement(
                        "code",
                        null,
                        "main.js",
                      ),
                      " isn't correct.",
                    ),
                    import_react8.default.createElement(
                      "li",
                      null,
                      "No stories are defined in your story files.",
                    ),
                    import_react8.default.createElement(
                      "li",
                      null,
                      "You're using filter-functions, and all stories are filtered away.",
                    ),
                  ),
                  " ",
                )
              : import_react8.default.createElement(
                  import_react8.default.Fragment,
                  null,
                  "This composed storybook is empty, maybe you're using filter-functions, and all stories are filtered away.",
                ),
          ),
        ),
      ),
    ),
  LoaderBlock = ({ isMain }) =>
    import_react8.default.createElement(
      Contained,
      null,
      import_react8.default.createElement(Loader2, { size: isMain ? 17 : 5 }),
    );
var import_react9 = __toESM(require_react());
var { document: document2, window: globalWindow2 } = scope,
  IndicatorPlacement = newStyled.aside(({ theme }) => ({
    height: 16,
    display: "flex",
    alignItems: "center",
    "& > * + *": { marginLeft: theme.layoutMargin },
  })),
  IndicatorClickTarget = newStyled.button(({ theme }) => ({
    height: 20,
    width: 20,
    padding: 0,
    margin: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "transparent",
    outline: "none",
    border: "1px solid transparent",
    borderRadius: "100%",
    cursor: "pointer",
    color:
      theme.base === "light"
        ? curriedTransparentize$1(0.3, theme.color.defaultText)
        : curriedTransparentize$1(0.6, theme.color.defaultText),
    "&:hover": { color: theme.barSelectedColor },
    "&:focus": {
      color: theme.barSelectedColor,
      borderColor: theme.color.secondary,
    },
    svg: {
      height: 10,
      width: 10,
      transition: "all 150ms ease-out",
      color: "inherit",
    },
  })),
  MessageTitle = newStyled.span(({ theme }) => ({
    fontWeight: theme.typography.weight.bold,
  })),
  Message = newStyled.a(({ theme }) => ({
    textDecoration: "none",
    lineHeight: "16px",
    padding: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    color: theme.color.defaultText,
    "&:not(:last-child)": { borderBottom: `1px solid ${theme.appBorderColor}` },
    "&:hover": {
      background: theme.background.hoverable,
      color: theme.color.darker,
    },
    "&:link": { color: theme.color.darker },
    "&:active": { color: theme.color.darker },
    "&:focus": { color: theme.color.darker },
    "& > *": { flex: 1 },
    "& > svg": {
      marginTop: 3,
      width: 16,
      height: 16,
      marginRight: 10,
      flex: "unset",
    },
  })),
  MessageWrapper = newStyled.div({
    width: 280,
    boxSizing: "border-box",
    borderRadius: 8,
    overflow: "hidden",
  }),
  Version = newStyled.div(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    fontSize: theme.typography.size.s1,
    fontWeight: theme.typography.weight.regular,
    color:
      theme.base === "light"
        ? curriedTransparentize$1(0.3, theme.color.defaultText)
        : curriedTransparentize$1(0.6, theme.color.defaultText),
    "& > * + *": { marginLeft: 4 },
    svg: { height: 10, width: 10 },
  })),
  CurrentVersion = ({ url, versions }) => {
    let currentVersionId = (0, import_react9.useMemo)(() => {
      let c2 = Object.entries(versions).find(([k2, v2]) => v2 === url);
      return c2 && c2[0] ? c2[0] : "current";
    }, [url, versions]);
    return import_react9.default.createElement(
      Version,
      null,
      import_react9.default.createElement("span", null, currentVersionId),
      import_react9.default.createElement(ChevronDownIcon, null),
    );
  },
  RefIndicator = import_react9.default.memo(
    (0, import_react9.forwardRef)(({ state, ...ref }, forwardedRef) => {
      let api = useStorybookApi(),
        list = (0, import_react9.useMemo)(
          () => Object.values(ref.index || {}),
          [ref.index],
        ),
        componentCount = (0, import_react9.useMemo)(
          () => list.filter((v2) => v2.type === "component").length,
          [list],
        ),
        leafCount = (0, import_react9.useMemo)(
          () =>
            list.filter((v2) => v2.type === "docs" || v2.type === "story")
              .length,
          [list],
        );
      return import_react9.default.createElement(
        IndicatorPlacement,
        { ref: forwardedRef },
        import_react9.default.createElement(
          WithTooltip,
          {
            placement: "bottom-start",
            trigger: "click",
            closeOnOutsideClick: !0,
            tooltip: import_react9.default.createElement(
              MessageWrapper,
              null,
              import_react9.default.createElement(
                Spaced,
                { row: 0 },
                state === "loading" &&
                  import_react9.default.createElement(LoadingMessage, {
                    url: ref.url,
                  }),
                (state === "error" || state === "empty") &&
                  import_react9.default.createElement(ErrorOccurredMessage, {
                    url: ref.url,
                  }),
                state === "ready" &&
                  import_react9.default.createElement(ReadyMessage, {
                    url: ref.url,
                    componentCount,
                    leafCount,
                  }),
                state === "auth" &&
                  import_react9.default.createElement(LoginRequiredMessage, {
                    ...ref,
                  }),
                ref.type === "auto-inject" &&
                  state !== "error" &&
                  import_react9.default.createElement(
                    PerformanceDegradedMessage,
                    null,
                  ),
                state !== "loading" &&
                  import_react9.default.createElement(ReadDocsMessage, null),
              ),
            ),
          },
          import_react9.default.createElement(
            IndicatorClickTarget,
            {
              "data-action": "toggle-indicator",
              "aria-label": "toggle indicator",
            },
            import_react9.default.createElement(GlobeIcon, null),
          ),
        ),
        ref.versions && Object.keys(ref.versions).length
          ? import_react9.default.createElement(
              WithTooltip,
              {
                placement: "bottom-start",
                trigger: "click",
                closeOnOutsideClick: !0,
                tooltip: (tooltip) =>
                  import_react9.default.createElement(TooltipLinkList, {
                    links: Object.entries(ref.versions).map(([id, href]) => ({
                      icon: href === ref.url ? "check" : void 0,
                      id,
                      title: id,
                      href,
                      onClick: (event, item) => {
                        event.preventDefault(),
                          api.changeRefVersion(ref.id, item.href),
                          tooltip.onHide();
                      },
                    })),
                  }),
              },
              import_react9.default.createElement(CurrentVersion, {
                url: ref.url,
                versions: ref.versions,
              }),
            )
          : null,
      );
    }),
  ),
  ReadyMessage = ({ url, componentCount, leafCount }) => {
    let theme = useTheme();
    return import_react9.default.createElement(
      Message,
      { href: url.replace(/\/?$/, "/index.html"), target: "_blank" },
      import_react9.default.createElement(GlobeIcon, {
        color: theme.color.secondary,
      }),
      import_react9.default.createElement(
        "div",
        null,
        import_react9.default.createElement(
          MessageTitle,
          null,
          "View external Storybook",
        ),
        import_react9.default.createElement(
          "div",
          null,
          "Explore ",
          componentCount,
          " components and ",
          leafCount,
          " stories in a new browser tab.",
        ),
      ),
    );
  },
  LoginRequiredMessage = ({ loginUrl, id }) => {
    let theme = useTheme(),
      open = (0, import_react9.useCallback)((e3) => {
        e3.preventDefault();
        let childWindow = globalWindow2.open(
            loginUrl,
            `storybook_auth_${id}`,
            "resizable,scrollbars",
          ),
          timer = setInterval(() => {
            childWindow
              ? childWindow.closed &&
                (clearInterval(timer), document2.location.reload())
              : clearInterval(timer);
          }, 1e3);
      }, []);
    return import_react9.default.createElement(
      Message,
      { onClick: open },
      import_react9.default.createElement(LockIcon, {
        color: theme.color.gold,
      }),
      import_react9.default.createElement(
        "div",
        null,
        import_react9.default.createElement(
          MessageTitle,
          null,
          "Log in required",
        ),
        import_react9.default.createElement(
          "div",
          null,
          "You need to authenticate to view this Storybook's components.",
        ),
      ),
    );
  },
  ReadDocsMessage = () => {
    let theme = useTheme();
    return import_react9.default.createElement(
      Message,
      {
        href: "https://storybook.js.org/docs/react/sharing/storybook-composition",
        target: "_blank",
      },
      import_react9.default.createElement(DocumentIcon, {
        color: theme.color.green,
      }),
      import_react9.default.createElement(
        "div",
        null,
        import_react9.default.createElement(
          MessageTitle,
          null,
          "Read Composition docs",
        ),
        import_react9.default.createElement(
          "div",
          null,
          "Learn how to combine multiple Storybooks into one.",
        ),
      ),
    );
  },
  ErrorOccurredMessage = ({ url }) => {
    let theme = useTheme();
    return import_react9.default.createElement(
      Message,
      { href: url.replace(/\/?$/, "/index.html"), target: "_blank" },
      import_react9.default.createElement(AlertIcon, {
        color: theme.color.negative,
      }),
      import_react9.default.createElement(
        "div",
        null,
        import_react9.default.createElement(
          MessageTitle,
          null,
          "Something went wrong",
        ),
        import_react9.default.createElement(
          "div",
          null,
          "This external Storybook didn't load. Debug it in a new tab now.",
        ),
      ),
    );
  },
  LoadingMessage = ({ url }) => {
    let theme = useTheme();
    return import_react9.default.createElement(
      Message,
      { href: url.replace(/\/?$/, "/index.html"), target: "_blank" },
      import_react9.default.createElement(TimeIcon, {
        color: theme.color.secondary,
      }),
      import_react9.default.createElement(
        "div",
        null,
        import_react9.default.createElement(MessageTitle, null, "Please wait"),
        import_react9.default.createElement(
          "div",
          null,
          "This Storybook is loading.",
        ),
      ),
    );
  },
  PerformanceDegradedMessage = () => {
    let theme = useTheme();
    return import_react9.default.createElement(
      Message,
      {
        href: "https://storybook.js.org/docs/react/sharing/storybook-composition#improve-your-storybook-composition",
        target: "_blank",
      },
      import_react9.default.createElement(LightningIcon, {
        color: theme.color.gold,
      }),
      import_react9.default.createElement(
        "div",
        null,
        import_react9.default.createElement(MessageTitle, null, "Reduce lag"),
        import_react9.default.createElement(
          "div",
          null,
          "Learn how to speed up Composition performance.",
        ),
      ),
    );
  };
var import_react15 = __toESM(require_react());
var import_react12 = __toESM(require_react());
var import_react10 = __toESM(require_react()),
  Svg = newStyled.svg`
  position: absolute;
  width: 0;
  height: 0;
  display: inline-block;
  shape-rendering: inherit;
  vertical-align: middle;
`,
  GROUP_ID = "icon--group",
  COMPONENT_ID = "icon--component",
  DOCUMENT_ID = "icon--document",
  STORY_ID = "icon--story",
  IconSymbols = () =>
    import_react10.default.createElement(
      Svg,
      { "data-chromatic": "ignore" },
      import_react10.default.createElement(
        "symbol",
        { id: GROUP_ID },
        import_react10.default.createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M6.586 3.504l-1.5-1.5H1v9h12v-7.5H6.586zm.414-1L5.793 1.297a1 1 0 00-.707-.293H.5a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-8.5a.5.5 0 00-.5-.5H7z",
          fill: "currentColor",
        }),
      ),
      import_react10.default.createElement(
        "symbol",
        { id: COMPONENT_ID },
        import_react10.default.createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M3.5 1.004a2.5 2.5 0 00-2.5 2.5v7a2.5 2.5 0 002.5 2.5h7a2.5 2.5 0 002.5-2.5v-7a2.5 2.5 0 00-2.5-2.5h-7zm8.5 5.5H7.5v-4.5h3a1.5 1.5 0 011.5 1.5v3zm0 1v3a1.5 1.5 0 01-1.5 1.5h-3v-4.5H12zm-5.5 4.5v-4.5H2v3a1.5 1.5 0 001.5 1.5h3zM2 6.504h4.5v-4.5h-3a1.5 1.5 0 00-1.5 1.5v3z",
          fill: "currentColor",
        }),
      ),
      import_react10.default.createElement(
        "symbol",
        { id: DOCUMENT_ID },
        import_react10.default.createElement("path", {
          d: "M4 5.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zM4.5 7.5a.5.5 0 000 1h5a.5.5 0 000-1h-5zM4 10.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z",
          fill: "currentColor",
        }),
        import_react10.default.createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M1.5 0a.5.5 0 00-.5.5v13a.5.5 0 00.5.5h11a.5.5 0 00.5-.5V3.207a.5.5 0 00-.146-.353L10.146.146A.5.5 0 009.793 0H1.5zM2 1h7.5v2a.5.5 0 00.5.5h2V13H2V1z",
          fill: "currentColor",
        }),
      ),
      import_react10.default.createElement(
        "symbol",
        { id: STORY_ID },
        import_react10.default.createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M3.5 0h7a.5.5 0 01.5.5v13a.5.5 0 01-.454.498.462.462 0 01-.371-.118L7 11.159l-3.175 2.72a.46.46 0 01-.379.118A.5.5 0 013 13.5V.5a.5.5 0 01.5-.5zM4 12.413l2.664-2.284a.454.454 0 01.377-.128.498.498 0 01.284.12L10 12.412V1H4v11.413z",
          fill: "currentColor",
        }),
      ),
    ),
  UseSymbol = ({ type }) =>
    type === "group"
      ? import_react10.default.createElement("use", {
          xlinkHref: `#${GROUP_ID}`,
        })
      : type === "component"
        ? import_react10.default.createElement("use", {
            xlinkHref: `#${COMPONENT_ID}`,
          })
        : type === "document"
          ? import_react10.default.createElement("use", {
              xlinkHref: `#${DOCUMENT_ID}`,
            })
          : type === "story"
            ? import_react10.default.createElement("use", {
                xlinkHref: `#${STORY_ID}`,
              })
            : null;
var import_react11 = __toESM(require_react());
var CollapseIconWrapper = newStyled.div(({ theme, isExpanded }) => ({
    width: 8,
    height: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: curriedTransparentize$1(0.4, theme.textMutedColor),
    transform: isExpanded ? "rotateZ(90deg)" : "none",
    transition: "transform .1s ease-out",
  })),
  CollapseIcon2 = ({ isExpanded }) =>
    import_react11.default.createElement(
      CollapseIconWrapper,
      { isExpanded },
      import_react11.default.createElement(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: "8",
          height: "8",
          fill: "none",
        },
        import_react11.default.createElement("path", {
          fill: "#73828C",
          fillRule: "evenodd",
          d: "M1.896 7.146a.5.5 0 1 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 1 0-.708.708L5.043 4 1.896 7.146Z",
          clipRule: "evenodd",
        }),
      ),
    );
var TypeIcon = newStyled.svg(({ theme, type }) => ({
    width: 14,
    height: 14,
    flex: "0 0 auto",
    color:
      type === "group"
        ? theme.base === "dark"
          ? theme.color.primary
          : theme.color.ultraviolet
        : type === "component"
          ? theme.color.secondary
          : type === "document"
            ? theme.base === "dark"
              ? theme.color.gold
              : "#ff8300"
            : type === "story"
              ? theme.color.seafoam
              : "currentColor",
  })),
  BranchNode = newStyled.button(({ theme, depth = 0, isExpandable = !1 }) => ({
    width: "100%",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "start",
    textAlign: "left",
    paddingLeft: `${(isExpandable ? 8 : 22) + depth * 18}px`,
    color: "inherit",
    fontSize: `${theme.typography.size.s2}px`,
    background: "transparent",
    minHeight: 28,
    borderRadius: 4,
    gap: 6,
    paddingTop: 5,
    paddingBottom: 4,
    "&:hover, &:focus": {
      background: curriedTransparentize$1(0.93, theme.color.secondary),
      outline: "none",
    },
  })),
  LeafNode = newStyled.a(({ theme, depth = 0 }) => ({
    cursor: "pointer",
    color: "inherit",
    display: "flex",
    gap: 6,
    flex: 1,
    alignItems: "start",
    paddingLeft: `${22 + depth * 18}px`,
    paddingTop: 5,
    paddingBottom: 4,
    fontSize: `${theme.typography.size.s2}px`,
    textDecoration: "none",
    overflowWrap: "break-word",
    wordWrap: "break-word",
    wordBreak: "break-word",
  })),
  RootNode = newStyled.div(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 16,
    marginBottom: 4,
    fontSize: `${theme.typography.size.s1 - 1}px`,
    fontWeight: theme.typography.weight.bold,
    lineHeight: "16px",
    minHeight: 28,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: theme.textMutedColor,
  })),
  Wrapper = newStyled.div({
    display: "flex",
    alignItems: "center",
    gap: 6,
    marginTop: 2,
  }),
  GroupNode = import_react12.default.memo(function ({
    children,
    isExpanded = !1,
    isExpandable = !1,
    ...props
  }) {
    return import_react12.default.createElement(
      BranchNode,
      { isExpandable, tabIndex: -1, ...props },
      import_react12.default.createElement(
        Wrapper,
        null,
        isExpandable &&
          import_react12.default.createElement(CollapseIcon2, { isExpanded }),
        import_react12.default.createElement(
          TypeIcon,
          { viewBox: "0 0 14 14", width: "14", height: "14", type: "group" },
          import_react12.default.createElement(UseSymbol, { type: "group" }),
        ),
      ),
      children,
    );
  }),
  ComponentNode = import_react12.default.memo(function ({
    theme,
    children,
    isExpanded,
    isExpandable,
    isSelected,
    ...props
  }) {
    return import_react12.default.createElement(
      BranchNode,
      { isExpandable, tabIndex: -1, ...props },
      import_react12.default.createElement(
        Wrapper,
        null,
        isExpandable &&
          import_react12.default.createElement(CollapseIcon2, { isExpanded }),
        import_react12.default.createElement(
          TypeIcon,
          {
            viewBox: "0 0 14 14",
            width: "12",
            height: "12",
            type: "component",
          },
          import_react12.default.createElement(UseSymbol, {
            type: "component",
          }),
        ),
      ),
      children,
    );
  }),
  DocumentNode = import_react12.default.memo(function ({
    theme,
    children,
    docsMode,
    ...props
  }) {
    return import_react12.default.createElement(
      LeafNode,
      { tabIndex: -1, ...props },
      import_react12.default.createElement(
        Wrapper,
        null,
        import_react12.default.createElement(
          TypeIcon,
          { viewBox: "0 0 14 14", width: "12", height: "12", type: "document" },
          import_react12.default.createElement(UseSymbol, { type: "document" }),
        ),
      ),
      children,
    );
  }),
  StoryNode = import_react12.default.memo(function ({
    theme,
    children,
    ...props
  }) {
    return import_react12.default.createElement(
      LeafNode,
      { tabIndex: -1, ...props },
      import_react12.default.createElement(
        Wrapper,
        null,
        import_react12.default.createElement(
          TypeIcon,
          { viewBox: "0 0 14 14", width: "12", height: "12", type: "story" },
          import_react12.default.createElement(UseSymbol, { type: "story" }),
        ),
      ),
      children,
    );
  });
var import_throttle = __toESM(require_throttle()),
  import_react13 = __toESM(require_react());
var codeToKeyMap = {
    Space: " ",
    Slash: "/",
    ArrowLeft: "ArrowLeft",
    ArrowUp: "ArrowUp",
    ArrowRight: "ArrowRight",
    ArrowDown: "ArrowDown",
    Escape: "Escape",
    Enter: "Enter",
  },
  allFalse = { alt: !1, ctrl: !1, meta: !1, shift: !1 },
  matchesModifiers = (modifiers, event) => {
    let { alt, ctrl, meta, shift } = modifiers === !1 ? allFalse : modifiers;
    return !(
      (typeof alt == "boolean" && alt !== event.altKey) ||
      (typeof ctrl == "boolean" && ctrl !== event.ctrlKey) ||
      (typeof meta == "boolean" && meta !== event.metaKey) ||
      (typeof shift == "boolean" && shift !== event.shiftKey)
    );
  },
  matchesKeyCode = (code, event) =>
    event.code ? event.code === code : event.key === codeToKeyMap[code];
var import_memoizerific = __toESM(require_memoizerific());
var { document: document3, window: globalWindow3 } = scope,
  createId = (itemId, refId) =>
    !refId || refId === DEFAULT_REF_ID ? itemId : `${refId}_${itemId}`,
  getLink = (item, refId) =>
    `${document3.location.pathname}?path=/${item.type}/${createId(item.id, refId)}`;
var get = (0, import_memoizerific.default)(1e3)((id, dataset) => dataset[id]),
  getParent = (0, import_memoizerific.default)(1e3)((id, dataset) => {
    let item = get(id, dataset);
    return item && item.type !== "root" ? get(item.parent, dataset) : void 0;
  }),
  getParents = (0, import_memoizerific.default)(1e3)((id, dataset) => {
    let parent = getParent(id, dataset);
    return parent ? [parent, ...getParents(parent.id, dataset)] : [];
  }),
  getAncestorIds = (0, import_memoizerific.default)(1e3)((data, id) =>
    getParents(id, data).map((item) => item.id),
  ),
  getDescendantIds = (0, import_memoizerific.default)(1e3)(
    (data, id, skipLeafs) => {
      let entry = data[id];
      return (
        entry.type === "story" || entry.type === "docs" ? [] : entry.children
      ).reduce((acc, childId) => {
        let child = data[childId];
        return (
          !child ||
            (skipLeafs && (child.type === "story" || child.type === "docs")) ||
            acc.push(childId, ...getDescendantIds(data, childId, skipLeafs)),
          acc
        );
      }, []);
    },
  );
function getPath(item, ref) {
  let parent =
    item.type !== "root" && item.parent ? ref.index[item.parent] : null;
  return parent
    ? [...getPath(parent, ref), parent.name]
    : ref.id === DEFAULT_REF_ID
      ? []
      : [ref.title || ref.id];
}
var searchItem = (item, ref) => ({
  ...item,
  refId: ref.id,
  path: getPath(item, ref),
});
function cycle(array, index, delta) {
  let next = index + (delta % array.length);
  return (
    next < 0 && (next = array.length + next),
    next >= array.length && (next -= array.length),
    next
  );
}
var scrollIntoView = (element, center = !1) => {
    if (!element) return;
    let { top, bottom } = element.getBoundingClientRect();
    (top >= 0 &&
      bottom <=
        (globalWindow3.innerHeight ||
          document3.documentElement.clientHeight)) ||
      element.scrollIntoView({ block: center ? "center" : "nearest" });
  },
  getStateType = (isLoading, isAuthRequired, isError, isEmpty) => {
    switch (!0) {
      case isAuthRequired:
        return "auth";
      case isError:
        return "error";
      case isLoading:
        return "loading";
      case isEmpty:
        return "empty";
      default:
        return "ready";
    }
  },
  isAncestor = (element, maybeAncestor) =>
    !element || !maybeAncestor
      ? !1
      : element === maybeAncestor
        ? !0
        : isAncestor(element.parentElement, maybeAncestor),
  removeNoiseFromName = (storyName) => storyName.replaceAll(/(\s|-|_)/gi, ""),
  isStoryHoistable = (storyName, componentName) =>
    removeNoiseFromName(storyName) === removeNoiseFromName(componentName);
var { document: document4 } = scope,
  initializeExpanded = ({
    refId,
    data,
    initialExpanded,
    highlightedRef,
    rootIds,
  }) => {
    let highlightedAncestors =
      highlightedRef.current?.refId === refId
        ? getAncestorIds(data, highlightedRef.current?.itemId)
        : [];
    return [...rootIds, ...highlightedAncestors].reduce(
      (acc, id) =>
        Object.assign(acc, {
          [id]: id in initialExpanded ? initialExpanded[id] : !0,
        }),
      {},
    );
  },
  noop = () => {},
  useExpanded = ({
    containerRef,
    isBrowsing,
    refId,
    data,
    initialExpanded,
    rootIds,
    highlightedRef,
    setHighlightedItemId,
    selectedStoryId,
    onSelectStoryId,
  }) => {
    let api = useStorybookApi(),
      [expanded, setExpanded] = (0, import_react13.useReducer)(
        (state, { ids, value }) =>
          ids.reduce((acc, id) => Object.assign(acc, { [id]: value }), {
            ...state,
          }),
        { refId, data, highlightedRef, rootIds, initialExpanded },
        initializeExpanded,
      ),
      getElementByDataItemId = (0, import_react13.useCallback)(
        (id) => containerRef.current?.querySelector(`[data-item-id="${id}"]`),
        [containerRef],
      ),
      highlightElement = (0, import_react13.useCallback)(
        (element) => {
          setHighlightedItemId(element.getAttribute("data-item-id")),
            scrollIntoView(element);
        },
        [setHighlightedItemId],
      ),
      updateExpanded = (0, import_react13.useCallback)(
        ({ ids, value }) => {
          if ((setExpanded({ ids, value }), ids.length === 1)) {
            let element = containerRef.current?.querySelector(
              `[data-item-id="${ids[0]}"][data-ref-id="${refId}"]`,
            );
            element && highlightElement(element);
          }
        },
        [containerRef, highlightElement, refId],
      );
    (0, import_react13.useEffect)(() => {
      setExpanded({ ids: getAncestorIds(data, selectedStoryId), value: !0 });
    }, [data, selectedStoryId]);
    let collapseAll = (0, import_react13.useCallback)(() => {
        let ids = Object.keys(data).filter((id) => !rootIds.includes(id));
        setExpanded({ ids, value: !1 });
      }, [data, rootIds]),
      expandAll = (0, import_react13.useCallback)(() => {
        setExpanded({ ids: Object.keys(data), value: !0 });
      }, [data]);
    return (
      (0, import_react13.useEffect)(
        () =>
          api
            ? (api.on(STORIES_COLLAPSE_ALL, collapseAll),
              api.on(STORIES_EXPAND_ALL, expandAll),
              () => {
                api.off(STORIES_COLLAPSE_ALL, collapseAll),
                  api.off(STORIES_EXPAND_ALL, expandAll);
              })
            : noop,
        [api, collapseAll, expandAll],
      ),
      (0, import_react13.useEffect)(() => {
        let menuElement = document4.getElementById("storybook-explorer-menu"),
          navigateTree = (0, import_throttle.default)((event) => {
            let highlightedItemId =
              highlightedRef.current?.refId === refId &&
              highlightedRef.current?.itemId;
            if (
              !isBrowsing ||
              !containerRef.current ||
              !highlightedItemId ||
              event.repeat ||
              !matchesModifiers(!1, event)
            )
              return;
            let isEnter = matchesKeyCode("Enter", event),
              isSpace = matchesKeyCode("Space", event),
              isArrowLeft = matchesKeyCode("ArrowLeft", event),
              isArrowRight = matchesKeyCode("ArrowRight", event);
            if (!(isEnter || isSpace || isArrowLeft || isArrowRight)) return;
            let highlightedElement = getElementByDataItemId(highlightedItemId);
            if (
              !highlightedElement ||
              highlightedElement.getAttribute("data-ref-id") !== refId
            )
              return;
            let target = event.target;
            if (
              !isAncestor(menuElement, target) &&
              !isAncestor(target, menuElement)
            )
              return;
            if (target.hasAttribute("data-action")) {
              if (isEnter || isSpace) return;
              target.blur();
            }
            let type = highlightedElement.getAttribute("data-nodetype");
            (isEnter || isSpace) &&
              ["component", "story", "document"].includes(type) &&
              onSelectStoryId(highlightedItemId);
            let isExpanded = highlightedElement.getAttribute("aria-expanded");
            if (isArrowLeft) {
              if (isExpanded === "true") {
                setExpanded({ ids: [highlightedItemId], value: !1 });
                return;
              }
              let parentId = highlightedElement.getAttribute("data-parent-id"),
                parentElement = parentId && getElementByDataItemId(parentId);
              if (
                parentElement &&
                parentElement.getAttribute("data-highlightable") === "true"
              ) {
                highlightElement(parentElement);
                return;
              }
              setExpanded({
                ids: getDescendantIds(data, highlightedItemId, !0),
                value: !1,
              });
              return;
            }
            isArrowRight &&
              (isExpanded === "false"
                ? updateExpanded({ ids: [highlightedItemId], value: !0 })
                : isExpanded === "true" &&
                  updateExpanded({
                    ids: getDescendantIds(data, highlightedItemId, !0),
                    value: !0,
                  }));
          }, 60);
        return (
          document4.addEventListener("keydown", navigateTree),
          () => document4.removeEventListener("keydown", navigateTree)
        );
      }, [
        containerRef,
        isBrowsing,
        refId,
        data,
        highlightedRef,
        setHighlightedItemId,
        onSelectStoryId,
      ]),
      [expanded, updateExpanded]
    );
  };
var import_react14 = __toESM(require_react());
var SmallIcons = newStyled(CircleIcon)({ "&&&": { width: 6, height: 6 } }),
  LoadingIcons = newStyled(SmallIcons)(
    ({ theme: { animation, color, base } }) => ({
      animation: `${animation.glow} 1.5s ease-in-out infinite`,
      color: base === "light" ? color.mediumdark : color.darker,
    }),
  ),
  statusPriority = ["unknown", "pending", "success", "warn", "error"],
  statusMapping = {
    unknown: [null, null],
    pending: [
      import_react14.default.createElement(LoadingIcons, { key: "icon" }),
      "currentColor",
    ],
    success: [
      import_react14.default.createElement(SmallIcons, {
        key: "icon",
        style: { color: "green" },
      }),
      "currentColor",
    ],
    warn: [
      import_react14.default.createElement(SmallIcons, {
        key: "icon",
        style: { color: "orange" },
      }),
      "#A15C20",
    ],
    error: [
      import_react14.default.createElement(SmallIcons, {
        key: "icon",
        style: { color: "red" },
      }),
      "brown",
    ],
  },
  getHighestStatus = (statuses) =>
    statusPriority.reduce(
      (acc, status) => (statuses.includes(status) ? status : acc),
      "unknown",
    );
function getGroupStatus(collapsedData, status) {
  return Object.values(collapsedData).reduce((acc, item) => {
    if (item.type === "group" || item.type === "component") {
      let leafs = getDescendantIds(collapsedData, item.id, !1)
          .map((id) => collapsedData[id])
          .filter((i2) => i2.type === "story"),
        combinedStatus = getHighestStatus(
          leafs
            .flatMap((story) => Object.values(status?.[story.id] || {}))
            .map((s2) => s2.status),
        );
      combinedStatus && (acc[item.id] = combinedStatus);
    }
    return acc;
  }, {});
}
var Container = newStyled.div((props) => ({
    marginTop: props.hasOrphans ? 20 : 0,
    marginBottom: 20,
  })),
  Action = newStyled.button(({ theme, height, width }) => ({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: width || 20,
    height: height || 20,
    boxSizing: "border-box",
    margin: 0,
    marginLeft: "auto",
    padding: 0,
    outline: 0,
    lineHeight: "normal",
    background: "none",
    border: "1px solid transparent",
    borderRadius: "100%",
    cursor: "pointer",
    transition: "all 150ms ease-out",
    color:
      theme.base === "light"
        ? curriedTransparentize$1(0.3, theme.color.defaultText)
        : curriedTransparentize$1(0.6, theme.color.defaultText),
    "&:hover": { color: theme.color.secondary },
    "&:focus": {
      color: theme.color.secondary,
      borderColor: theme.color.secondary,
      "&:not(:focus-visible)": { borderColor: "transparent" },
    },
    svg: { width: 10, height: 10 },
  })),
  CollapseButton = newStyled.button(({ theme }) => ({
    all: "unset",
    display: "flex",
    padding: "0px 8px",
    borderRadius: 4,
    transition: "color 150ms, box-shadow 150ms",
    gap: 6,
    alignItems: "center",
    cursor: "pointer",
    height: 28,
    "&:hover, &:focus": {
      outline: "none",
      background: curriedTransparentize$1(0.93, theme.color.secondary),
    },
  })),
  LeafNodeStyleWrapper = newStyled.div(({ theme }) => ({
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 20,
    color: theme.color.defaultText,
    background: "transparent",
    minHeight: 28,
    borderRadius: 4,
    "&:hover, &:focus": {
      outline: "none",
      background: curriedTransparentize$1(0.93, theme.color.secondary),
    },
    '&[data-selected="true"]': {
      color: theme.color.lightest,
      background: theme.color.secondary,
      fontWeight: theme.typography.weight.bold,
      "&:hover, &:focus": { background: theme.color.secondary },
      svg: { color: theme.color.lightest },
    },
    a: { color: "currentColor" },
  })),
  SkipToContentLink = newStyled(Button)(({ theme }) => ({
    display: "none",
    "@media (min-width: 600px)": {
      display: "block",
      fontSize: "10px",
      overflow: "hidden",
      width: 1,
      height: "20px",
      boxSizing: "border-box",
      opacity: 0,
      padding: 0,
      "&:focus": {
        opacity: 1,
        padding: "5px 10px",
        background: "white",
        color: theme.color.secondary,
        width: "auto",
      },
    },
  })),
  Node2 = import_react15.default.memo(function ({
    item,
    status,
    refId,
    docsMode,
    isOrphan,
    isDisplayed,
    isSelected,
    isFullyExpanded,
    color,
    setFullyExpanded,
    isExpanded,
    setExpanded,
    onSelectStoryId,
    api,
  }) {
    let { isDesktop, isMobile, setMobileMenuOpen } = useLayout();
    if (!isDisplayed) return null;
    let id = createId(item.id, refId);
    if (item.type === "story" || item.type === "docs") {
      let LeafNode2 = item.type === "docs" ? DocumentNode : StoryNode,
        statusValue = getHighestStatus(
          Object.values(status || {}).map((s2) => s2.status),
        ),
        [icon, textColor] = statusMapping[statusValue];
      return import_react15.default.createElement(
        LeafNodeStyleWrapper,
        {
          "data-selected": isSelected,
          "data-ref-id": refId,
          "data-item-id": item.id,
          "data-parent-id": item.parent,
          "data-nodetype": item.type === "docs" ? "document" : "story",
          "data-highlightable": isDisplayed,
          className: "sidebar-item",
        },
        import_react15.default.createElement(
          LeafNode2,
          {
            style: isSelected ? {} : { color: textColor },
            key: id,
            href: getLink(item, refId),
            id,
            depth: isOrphan ? item.depth : item.depth - 1,
            onClick: (event) => {
              event.preventDefault(),
                onSelectStoryId(item.id),
                isMobile && setMobileMenuOpen(!1);
            },
            ...(item.type === "docs" && { docsMode }),
          },
          item.renderLabel?.(item, api) || item.name,
        ),
        isSelected &&
          import_react15.default.createElement(
            SkipToContentLink,
            { asChild: !0 },
            import_react15.default.createElement(
              "a",
              { href: "#storybook-preview-wrapper" },
              "Skip to canvas",
            ),
          ),
        icon
          ? import_react15.default.createElement(
              WithTooltip,
              {
                placement: "top",
                style: { display: "flex" },
                tooltip: () =>
                  import_react15.default.createElement(TooltipLinkList, {
                    links: Object.entries(status || {}).map(([k2, v2]) => ({
                      id: k2,
                      title: v2.title,
                      description: v2.description,
                      right: statusMapping[v2.status][0],
                    })),
                  }),
                closeOnOutsideClick: !0,
              },
              import_react15.default.createElement(
                Action,
                { type: "button", height: 22 },
                icon,
              ),
            )
          : null,
      );
    }
    if (item.type === "root")
      return import_react15.default.createElement(
        RootNode,
        {
          key: id,
          id,
          className: "sidebar-subheading",
          "data-ref-id": refId,
          "data-item-id": item.id,
          "data-nodetype": "root",
        },
        import_react15.default.createElement(
          CollapseButton,
          {
            type: "button",
            "data-action": "collapse-root",
            onClick: (event) => {
              event.preventDefault(),
                setExpanded({ ids: [item.id], value: !isExpanded });
            },
            "aria-expanded": isExpanded,
          },
          import_react15.default.createElement(CollapseIcon2, { isExpanded }),
          item.renderLabel?.(item, api) || item.name,
        ),
        isExpanded &&
          import_react15.default.createElement(
            IconButton,
            {
              className: "sidebar-subheading-action",
              "aria-label": isFullyExpanded ? "Expand" : "Collapse",
              "data-action": "expand-all",
              "data-expanded": isFullyExpanded,
              onClick: (event) => {
                event.preventDefault(), setFullyExpanded();
              },
            },
            isFullyExpanded
              ? import_react15.default.createElement(CollapseIcon, null)
              : import_react15.default.createElement(ExpandAltIcon, null),
          ),
      );
    if (item.type === "component" || item.type === "group") {
      let BranchNode2 = item.type === "component" ? ComponentNode : GroupNode;
      return import_react15.default.createElement(
        BranchNode2,
        {
          key: id,
          id,
          style: color ? { color } : {},
          className: "sidebar-item",
          "data-ref-id": refId,
          "data-item-id": item.id,
          "data-parent-id": item.parent,
          "data-nodetype": item.type === "component" ? "component" : "group",
          "data-highlightable": isDisplayed,
          "aria-controls": item.children && item.children[0],
          "aria-expanded": isExpanded,
          depth: isOrphan ? item.depth : item.depth - 1,
          isComponent: item.type === "component",
          isExpandable: item.children && item.children.length > 0,
          isExpanded,
          onClick: (event) => {
            event.preventDefault(),
              setExpanded({ ids: [item.id], value: !isExpanded }),
              item.type === "component" &&
                !isExpanded &&
                isDesktop &&
                onSelectStoryId(item.id);
          },
          onMouseEnter: () => {
            item.type === "component" &&
              api.emit(PRELOAD_ENTRIES, {
                ids: [item.children[0]],
                options: { target: refId },
              });
          },
        },
        item.renderLabel?.(item, api) || item.name,
      );
    }
    return null;
  }),
  Root = import_react15.default.memo(function ({
    setExpanded,
    isFullyExpanded,
    expandableDescendants,
    ...props
  }) {
    let setFullyExpanded = (0, import_react15.useCallback)(
      () =>
        setExpanded({ ids: expandableDescendants, value: !isFullyExpanded }),
      [setExpanded, isFullyExpanded, expandableDescendants],
    );
    return import_react15.default.createElement(Node2, {
      ...props,
      setExpanded,
      isFullyExpanded,
      setFullyExpanded,
    });
  }),
  Tree = import_react15.default.memo(function ({
    isBrowsing,
    isMain,
    refId,
    data,
    status,
    docsMode,
    highlightedRef,
    setHighlightedItemId,
    selectedStoryId,
    onSelectStoryId,
  }) {
    let containerRef = (0, import_react15.useRef)(null),
      api = useStorybookApi(),
      [rootIds, orphanIds, initialExpanded] = (0, import_react15.useMemo)(
        () =>
          Object.keys(data).reduce(
            (acc, id) => {
              let item = data[id];
              return (
                item.type === "root"
                  ? acc[0].push(id)
                  : item.parent || acc[1].push(id),
                item.type === "root" &&
                  item.startCollapsed &&
                  (acc[2][id] = !1),
                acc
              );
            },
            [[], [], {}],
          ),
        [data],
      ),
      { expandableDescendants } = (0, import_react15.useMemo)(
        () =>
          [...orphanIds, ...rootIds].reduce(
            (acc, nodeId) => (
              (acc.expandableDescendants[nodeId] = getDescendantIds(
                data,
                nodeId,
                !1,
              ).filter((d2) => !["story", "docs"].includes(data[d2].type))),
              acc
            ),
            { orphansFirst: [], expandableDescendants: {} },
          ),
        [data, rootIds, orphanIds],
      ),
      singleStoryComponentIds = (0, import_react15.useMemo)(
        () =>
          Object.keys(data).filter((id) => {
            let entry = data[id];
            if (entry.type !== "component") return !1;
            let { children = [], name } = entry;
            if (children.length !== 1) return !1;
            let onlyChild = data[children[0]];
            return onlyChild.type === "docs"
              ? !0
              : onlyChild.type === "story"
                ? isStoryHoistable(onlyChild.name, name)
                : !1;
          }),
        [data],
      ),
      collapsedItems = (0, import_react15.useMemo)(
        () =>
          Object.keys(data).filter(
            (id) => !singleStoryComponentIds.includes(id),
          ),
        [singleStoryComponentIds],
      ),
      collapsedData = (0, import_react15.useMemo)(
        () =>
          singleStoryComponentIds.reduce(
            (acc, id) => {
              let { children, parent, name } = data[id],
                [childId] = children;
              if (parent) {
                let siblings = [...data[parent].children];
                (siblings[siblings.indexOf(id)] = childId),
                  (acc[parent] = { ...data[parent], children: siblings });
              }
              return (
                (acc[childId] = {
                  ...data[childId],
                  name,
                  parent,
                  depth: data[childId].depth - 1,
                }),
                acc
              );
            },
            { ...data },
          ),
        [data],
      ),
      ancestry = (0, import_react15.useMemo)(
        () =>
          collapsedItems.reduce(
            (acc, id) =>
              Object.assign(acc, { [id]: getAncestorIds(collapsedData, id) }),
            {},
          ),
        [collapsedItems, collapsedData],
      ),
      [expanded, setExpanded] = useExpanded({
        containerRef,
        isBrowsing,
        refId,
        data: collapsedData,
        initialExpanded,
        rootIds,
        highlightedRef,
        setHighlightedItemId,
        selectedStoryId,
        onSelectStoryId,
      }),
      groupStatus = (0, import_react15.useMemo)(
        () => getGroupStatus(collapsedData, status),
        [collapsedData, status],
      ),
      treeItems = (0, import_react15.useMemo)(
        () =>
          collapsedItems.map((itemId) => {
            let item = collapsedData[itemId],
              id = createId(itemId, refId);
            if (item.type === "root") {
              let descendants = expandableDescendants[item.id],
                isFullyExpanded = descendants.every((d2) => expanded[d2]);
              return import_react15.default.createElement(Root, {
                key: id,
                item,
                refId,
                isOrphan: !1,
                isDisplayed: !0,
                isSelected: selectedStoryId === itemId,
                isExpanded: !!expanded[itemId],
                setExpanded,
                isFullyExpanded,
                expandableDescendants: descendants,
                onSelectStoryId,
              });
            }
            let isDisplayed =
                !item.parent || ancestry[itemId].every((a2) => expanded[a2]),
              color = groupStatus[itemId]
                ? statusMapping[groupStatus[itemId]][1]
                : null;
            return import_react15.default.createElement(Node2, {
              api,
              key: id,
              item,
              status: status?.[itemId],
              refId,
              color,
              docsMode,
              isOrphan: orphanIds.some(
                (oid) => itemId === oid || itemId.startsWith(`${oid}-`),
              ),
              isDisplayed,
              isSelected: selectedStoryId === itemId,
              isExpanded: !!expanded[itemId],
              setExpanded,
              onSelectStoryId,
            });
          }),
        [
          ancestry,
          api,
          collapsedData,
          collapsedItems,
          docsMode,
          expandableDescendants,
          expanded,
          groupStatus,
          onSelectStoryId,
          orphanIds,
          refId,
          selectedStoryId,
          setExpanded,
          status,
        ],
      );
    return import_react15.default.createElement(
      Container,
      { ref: containerRef, hasOrphans: isMain && orphanIds.length > 0 },
      import_react15.default.createElement(IconSymbols, null),
      treeItems,
    );
  });
var Wrapper2 = newStyled.div(({ isMain }) => ({
    position: "relative",
    marginTop: isMain ? void 0 : 0,
  })),
  RefHead = newStyled.div(({ theme }) => ({
    fontWeight: theme.typography.weight.bold,
    fontSize: theme.typography.size.s2,
    textDecoration: "none",
    lineHeight: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "transparent",
    width: "100%",
    marginTop: 20,
    paddingTop: 16,
    paddingBottom: 12,
    borderTop: `1px solid ${theme.appBorderColor}`,
    color:
      theme.base === "light"
        ? theme.color.defaultText
        : curriedTransparentize$1(0.2, theme.color.defaultText),
  })),
  RefTitle = newStyled.div({
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    flex: 1,
    overflow: "hidden",
    marginLeft: 2,
  }),
  CollapseButton2 = newStyled.button(({ theme }) => ({
    all: "unset",
    display: "flex",
    padding: "0px 8px",
    gap: 6,
    alignItems: "center",
    cursor: "pointer",
    overflow: "hidden",
    "&:focus": {
      borderColor: theme.color.secondary,
      "span:first-of-type": { borderLeftColor: theme.color.secondary },
    },
  })),
  Ref = import_react16.default.memo(function (props) {
    let { docsOptions } = useStorybookState(),
      api = useStorybookApi(),
      {
        index,
        id: refId,
        title = refId,
        isLoading: isLoadingMain,
        isBrowsing,
        selectedStoryId,
        highlightedRef,
        setHighlighted,
        loginUrl,
        type,
        expanded = !0,
        indexError,
        previewInitialized,
      } = props,
      length = (0, import_react16.useMemo)(
        () => (index ? Object.keys(index).length : 0),
        [index],
      ),
      indicatorRef = (0, import_react16.useRef)(null),
      isMain = refId === DEFAULT_REF_ID,
      isLoading =
        isLoadingMain ||
        (type === "auto-inject" && !previewInitialized) ||
        type === "server-checked" ||
        type === "unknown",
      state = getStateType(
        isLoading,
        !!loginUrl && length === 0,
        !!indexError,
        !isLoading && length === 0,
      ),
      [isExpanded, setExpanded] = (0, import_react16.useState)(expanded);
    (0, import_react16.useEffect)(() => {
      index && selectedStoryId && index[selectedStoryId] && setExpanded(!0);
    }, [setExpanded, index, selectedStoryId]);
    let handleClick = (0, import_react16.useCallback)(
        () => setExpanded((value) => !value),
        [setExpanded],
      ),
      setHighlightedItemId = (0, import_react16.useCallback)(
        (itemId) => setHighlighted({ itemId, refId }),
        [setHighlighted],
      ),
      onSelectStoryId = (0, import_react16.useCallback)(
        (storyId) =>
          api && api.selectStory(storyId, void 0, { ref: !isMain && refId }),
        [api, isMain, refId],
      );
    return import_react16.default.createElement(
      import_react16.default.Fragment,
      null,
      isMain ||
        import_react16.default.createElement(
          RefHead,
          {
            "aria-label": `${isExpanded ? "Hide" : "Show"} ${title} stories`,
            "aria-expanded": isExpanded,
          },
          import_react16.default.createElement(
            CollapseButton2,
            { "data-action": "collapse-ref", onClick: handleClick },
            import_react16.default.createElement(CollapseIcon2, { isExpanded }),
            import_react16.default.createElement(RefTitle, { title }, title),
          ),
          import_react16.default.createElement(RefIndicator, {
            ...props,
            state,
            ref: indicatorRef,
          }),
        ),
      isExpanded &&
        import_react16.default.createElement(
          Wrapper2,
          { "data-title": title, isMain },
          state === "auth" &&
            import_react16.default.createElement(AuthBlock, {
              id: refId,
              loginUrl,
            }),
          state === "error" &&
            import_react16.default.createElement(ErrorBlock, {
              error: indexError,
            }),
          state === "loading" &&
            import_react16.default.createElement(LoaderBlock, { isMain }),
          state === "empty" &&
            import_react16.default.createElement(EmptyBlock, { isMain }),
          state === "ready" &&
            import_react16.default.createElement(Tree, {
              status: props.status,
              isBrowsing,
              isMain,
              refId,
              data: index,
              docsMode: docsOptions.docsMode,
              selectedStoryId,
              onSelectStoryId,
              highlightedRef,
              setHighlightedItemId,
            }),
        ),
    );
  });
var import_react17 = __toESM(require_react());
var { document: document5, window: globalWindow4 } = scope,
  fromSelection = (selection) =>
    selection ? { itemId: selection.storyId, refId: selection.refId } : null,
  useHighlighted = ({
    containerRef,
    isLoading,
    isBrowsing,
    dataset,
    selected,
  }) => {
    let initialHighlight = fromSelection(selected),
      highlightedRef = (0, import_react17.useRef)(initialHighlight),
      [highlighted, setHighlighted] = (0, import_react17.useState)(
        initialHighlight,
      ),
      api = useStorybookApi(),
      updateHighlighted = (0, import_react17.useCallback)(
        (highlight) => {
          (highlightedRef.current = highlight), setHighlighted(highlight);
        },
        [highlightedRef],
      ),
      highlightElement = (0, import_react17.useCallback)(
        (element, center = !1) => {
          let itemId = element.getAttribute("data-item-id"),
            refId = element.getAttribute("data-ref-id");
          !itemId ||
            !refId ||
            (updateHighlighted({ itemId, refId }),
            scrollIntoView(element, center));
        },
        [updateHighlighted],
      );
    return (
      (0, import_react17.useEffect)(() => {
        let highlight = fromSelection(selected);
        if ((updateHighlighted(highlight), highlight)) {
          let { itemId, refId } = highlight;
          setTimeout(() => {
            scrollIntoView(
              containerRef.current?.querySelector(
                `[data-item-id="${itemId}"][data-ref-id="${refId}"]`,
              ),
              !0,
            );
          }, 0);
        }
      }, [dataset, highlightedRef, containerRef, selected]),
      (0, import_react17.useEffect)(() => {
        let menuElement = document5.getElementById("storybook-explorer-menu"),
          lastRequestId,
          navigateTree = (event) => {
            if (
              isLoading ||
              !isBrowsing ||
              !containerRef.current ||
              !matchesModifiers(!1, event)
            )
              return;
            let isArrowUp = matchesKeyCode("ArrowUp", event),
              isArrowDown = matchesKeyCode("ArrowDown", event);
            if (!(isArrowUp || isArrowDown)) return;
            let requestId = globalWindow4.requestAnimationFrame(() => {
              globalWindow4.cancelAnimationFrame(lastRequestId),
                (lastRequestId = requestId);
              let target = event.target;
              if (
                !isAncestor(menuElement, target) &&
                !isAncestor(target, menuElement)
              )
                return;
              target.hasAttribute("data-action") && target.blur();
              let highlightable = Array.from(
                  containerRef.current.querySelectorAll(
                    "[data-highlightable=true]",
                  ),
                ),
                currentIndex = highlightable.findIndex(
                  (el) =>
                    el.getAttribute("data-item-id") ===
                      highlightedRef.current?.itemId &&
                    el.getAttribute("data-ref-id") ===
                      highlightedRef.current?.refId,
                ),
                nextIndex = cycle(
                  highlightable,
                  currentIndex,
                  isArrowUp ? -1 : 1,
                ),
                didRunAround = isArrowUp
                  ? nextIndex === highlightable.length - 1
                  : nextIndex === 0;
              if (
                (highlightElement(highlightable[nextIndex], didRunAround),
                highlightable[nextIndex].getAttribute("data-nodetype") ===
                  "component")
              ) {
                let { itemId, refId } = highlightedRef.current,
                  item = api.resolveStory(
                    itemId,
                    refId === "storybook_internal" ? void 0 : refId,
                  );
                item.type === "component" &&
                  api.emit(PRELOAD_ENTRIES, {
                    ids: [item.children[0]],
                    options: { target: refId },
                  });
              }
            });
          };
        return (
          document5.addEventListener("keydown", navigateTree),
          () => document5.removeEventListener("keydown", navigateTree)
        );
      }, [isLoading, isBrowsing, highlightedRef, highlightElement]),
      [highlighted, updateHighlighted, highlightedRef]
    );
  };
var import_react18 = __toESM(require_react());
var HighlightStyles = ({ refId, itemId }) =>
  import_react18.default.createElement(Global, {
    styles: ({ color }) => {
      let background = curriedTransparentize$1(0.85, color.secondary);
      return {
        [`[data-ref-id="${refId}"][data-item-id="${itemId}"]:not([data-selected="true"])`]:
          {
            '&[data-nodetype="component"], &[data-nodetype="group"]': {
              background,
              "&:hover, &:focus": { background },
            },
            '&[data-nodetype="story"], &[data-nodetype="document"]': {
              color: color.defaultText,
              background,
              "&:hover, &:focus": { background },
            },
          },
      };
    },
  });
var Explorer = import_react19.default.memo(function ({
  isLoading,
  isBrowsing,
  dataset,
  selected,
}) {
  let containerRef = (0, import_react19.useRef)(null),
    [highlighted, setHighlighted, highlightedRef] = useHighlighted({
      containerRef,
      isLoading,
      isBrowsing,
      dataset,
      selected,
    });
  return import_react19.default.createElement(
    "div",
    {
      ref: containerRef,
      id: "storybook-explorer-tree",
      "data-highlighted-ref-id": highlighted?.refId,
      "data-highlighted-item-id": highlighted?.itemId,
    },
    highlighted &&
      import_react19.default.createElement(HighlightStyles, { ...highlighted }),
    dataset.entries.map(([refId, ref]) =>
      import_react19.default.createElement(Ref, {
        ...ref,
        key: refId,
        isLoading,
        isBrowsing,
        selectedStoryId: selected?.refId === ref.id ? selected.storyId : null,
        highlightedRef,
        setHighlighted,
      }),
    ),
  );
});
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {},
    sourceKeys = Object.keys(source),
    key,
    i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++)
    (key = sourceKeys[i2]),
      !(excluded.indexOf(key) >= 0) && (target[key] = source[key]);
  return target;
}
var import_prop_types2 = __toESM(require_prop_types()),
  import_react20 = __toESM(require_react()),
  import_react_is = __toESM(require_react_is2());
var t2 = (t3) => typeof t3 == "object" && t3 != null && t3.nodeType === 1,
  e2 = (t3, e3) =>
    (!e3 || t3 !== "hidden") && t3 !== "visible" && t3 !== "clip",
  n2 = (t3, n3) => {
    if (t3.clientHeight < t3.scrollHeight || t3.clientWidth < t3.scrollWidth) {
      let o3 = getComputedStyle(t3, null);
      return (
        e2(o3.overflowY, n3) ||
        e2(o3.overflowX, n3) ||
        ((t4) => {
          let e3 = ((t5) => {
            if (!t5.ownerDocument || !t5.ownerDocument.defaultView) return null;
            try {
              return t5.ownerDocument.defaultView.frameElement;
            } catch {
              return null;
            }
          })(t4);
          return (
            !!e3 &&
            (e3.clientHeight < t4.scrollHeight ||
              e3.clientWidth < t4.scrollWidth)
          );
        })(t3)
      );
    }
    return !1;
  },
  o2 = (t3, e3, n3, o3, l3, r3, i2, s2) =>
    (r3 < t3 && i2 > e3) || (r3 > t3 && i2 < e3)
      ? 0
      : (r3 <= t3 && s2 <= n3) || (i2 >= e3 && s2 >= n3)
        ? r3 - t3 - o3
        : (i2 > e3 && s2 < n3) || (r3 < t3 && s2 > n3)
          ? i2 - e3 + l3
          : 0,
  l2 = (t3) => {
    let e3 = t3.parentElement;
    return e3 ?? (t3.getRootNode().host || null);
  },
  r2 = (e3, r3) => {
    var i2, s2, d2, h2;
    if (typeof document > "u") return [];
    let {
        scrollMode: c2,
        block: f2,
        inline: u2,
        boundary: a2,
        skipOverflowHiddenElements: g2,
      } = r3,
      p2 = typeof a2 == "function" ? a2 : (t3) => t3 !== a2;
    if (!t2(e3)) throw new TypeError("Invalid target");
    let m2 = document.scrollingElement || document.documentElement,
      w2 = [],
      W2 = e3;
    for (; t2(W2) && p2(W2); ) {
      if (((W2 = l2(W2)), W2 === m2)) {
        w2.push(W2);
        break;
      }
      (W2 != null &&
        W2 === document.body &&
        n2(W2) &&
        !n2(document.documentElement)) ||
        (W2 != null && n2(W2, g2) && w2.push(W2));
    }
    let b2 =
        (s2 = (i2 = window.visualViewport) == null ? void 0 : i2.width) != null
          ? s2
          : innerWidth,
      H2 =
        (h2 = (d2 = window.visualViewport) == null ? void 0 : d2.height) != null
          ? h2
          : innerHeight,
      { scrollX: y2, scrollY: M2 } = window,
      {
        height: v2,
        width: E2,
        top: x2,
        right: C2,
        bottom: I2,
        left: R2,
      } = e3.getBoundingClientRect(),
      {
        top: T2,
        right: B2,
        bottom: F2,
        left: V,
      } = ((t3) => {
        let e4 = window.getComputedStyle(t3);
        return {
          top: parseFloat(e4.scrollMarginTop) || 0,
          right: parseFloat(e4.scrollMarginRight) || 0,
          bottom: parseFloat(e4.scrollMarginBottom) || 0,
          left: parseFloat(e4.scrollMarginLeft) || 0,
        };
      })(e3),
      k2 =
        f2 === "start" || f2 === "nearest"
          ? x2 - T2
          : f2 === "end"
            ? I2 + F2
            : x2 + v2 / 2 - T2 + F2,
      D2 =
        u2 === "center"
          ? R2 + E2 / 2 - V + B2
          : u2 === "end"
            ? C2 + B2
            : R2 - V,
      L2 = [];
    for (let t3 = 0; t3 < w2.length; t3++) {
      let e4 = w2[t3],
        {
          height: n3,
          width: l3,
          top: r4,
          right: i3,
          bottom: s3,
          left: d3,
        } = e4.getBoundingClientRect();
      if (
        c2 === "if-needed" &&
        x2 >= 0 &&
        R2 >= 0 &&
        I2 <= H2 &&
        C2 <= b2 &&
        x2 >= r4 &&
        I2 <= s3 &&
        R2 >= d3 &&
        C2 <= i3
      )
        return L2;
      let h3 = getComputedStyle(e4),
        a3 = parseInt(h3.borderLeftWidth, 10),
        g3 = parseInt(h3.borderTopWidth, 10),
        p3 = parseInt(h3.borderRightWidth, 10),
        W3 = parseInt(h3.borderBottomWidth, 10),
        T3 = 0,
        B3 = 0,
        F3 =
          "offsetWidth" in e4 ? e4.offsetWidth - e4.clientWidth - a3 - p3 : 0,
        V2 =
          "offsetHeight" in e4
            ? e4.offsetHeight - e4.clientHeight - g3 - W3
            : 0,
        S2 =
          "offsetWidth" in e4
            ? e4.offsetWidth === 0
              ? 0
              : l3 / e4.offsetWidth
            : 0,
        X =
          "offsetHeight" in e4
            ? e4.offsetHeight === 0
              ? 0
              : n3 / e4.offsetHeight
            : 0;
      if (m2 === e4)
        (T3 =
          f2 === "start"
            ? k2
            : f2 === "end"
              ? k2 - H2
              : f2 === "nearest"
                ? o2(M2, M2 + H2, H2, g3, W3, M2 + k2, M2 + k2 + v2, v2)
                : k2 - H2 / 2),
          (B3 =
            u2 === "start"
              ? D2
              : u2 === "center"
                ? D2 - b2 / 2
                : u2 === "end"
                  ? D2 - b2
                  : o2(y2, y2 + b2, b2, a3, p3, y2 + D2, y2 + D2 + E2, E2)),
          (T3 = Math.max(0, T3 + M2)),
          (B3 = Math.max(0, B3 + y2));
      else {
        (T3 =
          f2 === "start"
            ? k2 - r4 - g3
            : f2 === "end"
              ? k2 - s3 + W3 + V2
              : f2 === "nearest"
                ? o2(r4, s3, n3, g3, W3 + V2, k2, k2 + v2, v2)
                : k2 - (r4 + n3 / 2) + V2 / 2),
          (B3 =
            u2 === "start"
              ? D2 - d3 - a3
              : u2 === "center"
                ? D2 - (d3 + l3 / 2) + F3 / 2
                : u2 === "end"
                  ? D2 - i3 + p3 + F3
                  : o2(d3, i3, l3, a3, p3 + F3, D2, D2 + E2, E2));
        let { scrollLeft: t4, scrollTop: h4 } = e4;
        (T3 =
          X === 0
            ? 0
            : Math.max(
                0,
                Math.min(h4 + T3 / X, e4.scrollHeight - n3 / X + V2),
              )),
          (B3 =
            S2 === 0
              ? 0
              : Math.max(
                  0,
                  Math.min(t4 + B3 / S2, e4.scrollWidth - l3 / S2 + F3),
                )),
          (k2 += h4 - T3),
          (D2 += t4 - B3);
      }
      L2.push({ el: e4, top: T3, left: B3 });
    }
    return L2;
  };
var idCounter = 0;
function cbToCb(cb) {
  return typeof cb == "function" ? cb : noop2;
}
function noop2() {}
function scrollIntoView2(node, menuNode) {
  if (node) {
    var actions = r2(node, {
      boundary: menuNode,
      block: "nearest",
      scrollMode: "if-needed",
    });
    actions.forEach(function (_ref) {
      var el = _ref.el,
        top = _ref.top,
        left = _ref.left;
      (el.scrollTop = top), (el.scrollLeft = left);
    });
  }
}
function isOrContainsNode(parent, child, environment) {
  var result =
    parent === child ||
    (child instanceof environment.Node &&
      parent.contains &&
      parent.contains(child));
  return result;
}
function debounce(fn, time) {
  var timeoutId;
  function cancel() {
    timeoutId && clearTimeout(timeoutId);
  }
  function wrapper() {
    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    )
      args[_key] = arguments[_key];
    cancel(),
      (timeoutId = setTimeout(function () {
        (timeoutId = null), fn.apply(void 0, args);
      }, time));
  }
  return (wrapper.cancel = cancel), wrapper;
}
function callAllEventHandlers() {
  for (
    var _len2 = arguments.length, fns = new Array(_len2), _key2 = 0;
    _key2 < _len2;
    _key2++
  )
    fns[_key2] = arguments[_key2];
  return function (event) {
    for (
      var _len3 = arguments.length,
        args = new Array(_len3 > 1 ? _len3 - 1 : 0),
        _key3 = 1;
      _key3 < _len3;
      _key3++
    )
      args[_key3 - 1] = arguments[_key3];
    return fns.some(function (fn) {
      return (
        fn && fn.apply(void 0, [event].concat(args)),
        event.preventDownshiftDefault ||
          (event.hasOwnProperty("nativeEvent") &&
            event.nativeEvent.preventDownshiftDefault)
      );
    });
  };
}
function handleRefs() {
  for (
    var _len4 = arguments.length, refs = new Array(_len4), _key4 = 0;
    _key4 < _len4;
    _key4++
  )
    refs[_key4] = arguments[_key4];
  return function (node) {
    refs.forEach(function (ref) {
      typeof ref == "function" ? ref(node) : ref && (ref.current = node);
    });
  };
}
function generateId() {
  return String(idCounter++);
}
function getA11yStatusMessage(_ref2) {
  var isOpen = _ref2.isOpen,
    resultCount = _ref2.resultCount,
    previousResultCount = _ref2.previousResultCount;
  return isOpen
    ? resultCount
      ? resultCount !== previousResultCount
        ? resultCount +
          " result" +
          (resultCount === 1 ? " is" : "s are") +
          " available, use up and down arrow keys to navigate. Press Enter key to select."
        : ""
      : "No results are available."
    : "";
}
function unwrapArray(arg, defaultValue) {
  return (
    (arg = Array.isArray(arg) ? arg[0] : arg),
    !arg && defaultValue ? defaultValue : arg
  );
}
function isDOMElement(element) {
  return typeof element.type == "string";
}
function getElementProps(element) {
  return element.props;
}
function requiredProp(fnName, propName) {
  console.error(
    'The property "' + propName + '" is required in "' + fnName + '"',
  );
}
var stateKeys = [
  "highlightedIndex",
  "inputValue",
  "isOpen",
  "selectedItem",
  "type",
];
function pickState(state) {
  state === void 0 && (state = {});
  var result = {};
  return (
    stateKeys.forEach(function (k2) {
      state.hasOwnProperty(k2) && (result[k2] = state[k2]);
    }),
    result
  );
}
function getState(state, props) {
  return !state || !props
    ? state
    : Object.keys(state).reduce(function (prevState, key) {
        return (
          (prevState[key] = isControlledProp(props, key)
            ? props[key]
            : state[key]),
          prevState
        );
      }, {});
}
function isControlledProp(props, key) {
  return props[key] !== void 0;
}
function normalizeArrowKey(event) {
  var key = event.key,
    keyCode = event.keyCode;
  return keyCode >= 37 && keyCode <= 40 && key.indexOf("Arrow") !== 0
    ? "Arrow" + key
    : key;
}
function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}
function getHighlightedIndex(start, offset, items, isItemDisabled2, circular) {
  circular === void 0 && (circular = !1);
  var count = items.length;
  if (count === 0) return -1;
  var itemsLastIndex = count - 1;
  (typeof start != "number" || start < 0 || start > itemsLastIndex) &&
    (start = offset > 0 ? -1 : itemsLastIndex + 1);
  var current = start + offset;
  current < 0
    ? (current = circular ? itemsLastIndex : 0)
    : current > itemsLastIndex && (current = circular ? 0 : itemsLastIndex);
  var highlightedIndex = getNonDisabledIndex(
    current,
    offset < 0,
    items,
    isItemDisabled2,
    circular,
  );
  return highlightedIndex === -1
    ? start >= count
      ? -1
      : start
    : highlightedIndex;
}
function getNonDisabledIndex(
  start,
  backwards,
  items,
  isItemDisabled2,
  circular,
) {
  circular === void 0 && (circular = !1);
  var count = items.length;
  if (backwards) {
    for (var index = start; index >= 0; index--)
      if (!isItemDisabled2(items[index], index)) return index;
  } else
    for (var _index = start; _index < count; _index++)
      if (!isItemDisabled2(items[_index], _index)) return _index;
  return circular
    ? getNonDisabledIndex(
        backwards ? count - 1 : 0,
        backwards,
        items,
        isItemDisabled2,
      )
    : -1;
}
function targetWithinDownshift(
  target,
  downshiftElements,
  environment,
  checkActiveElement,
) {
  return (
    checkActiveElement === void 0 && (checkActiveElement = !0),
    environment &&
      downshiftElements.some(function (contextNode) {
        return (
          contextNode &&
          (isOrContainsNode(contextNode, target, environment) ||
            (checkActiveElement &&
              isOrContainsNode(
                contextNode,
                environment.document.activeElement,
                environment,
              )))
        );
      })
  );
}
var validateControlledUnchanged = noop2;
validateControlledUnchanged = function (state, prevProps, nextProps) {
  var warningDescription =
    "This prop should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled Downshift element for the lifetime of the component. More info: https://github.com/downshift-js/downshift#control-props";
  Object.keys(state).forEach(function (propKey) {
    prevProps[propKey] !== void 0 && nextProps[propKey] === void 0
      ? console.error(
          'downshift: A component has changed the controlled prop "' +
            propKey +
            '" to be uncontrolled. ' +
            warningDescription,
        )
      : prevProps[propKey] === void 0 &&
        nextProps[propKey] !== void 0 &&
        console.error(
          'downshift: A component has changed the uncontrolled prop "' +
            propKey +
            '" to be controlled. ' +
            warningDescription,
        );
  });
};
var cleanupStatus = debounce(function (documentProp) {
  getStatusDiv(documentProp).textContent = "";
}, 500);
function getStatusDiv(documentProp) {
  var statusDiv = documentProp.getElementById("a11y-status-message");
  return (
    statusDiv ||
    ((statusDiv = documentProp.createElement("div")),
    statusDiv.setAttribute("id", "a11y-status-message"),
    statusDiv.setAttribute("role", "status"),
    statusDiv.setAttribute("aria-live", "polite"),
    statusDiv.setAttribute("aria-relevant", "additions text"),
    Object.assign(statusDiv.style, {
      border: "0",
      clip: "rect(0 0 0 0)",
      height: "1px",
      margin: "-1px",
      overflow: "hidden",
      padding: "0",
      position: "absolute",
      width: "1px",
    }),
    documentProp.body.appendChild(statusDiv),
    statusDiv)
  );
}
function setStatus(status, documentProp) {
  if (!(!status || !documentProp)) {
    var div = getStatusDiv(documentProp);
    (div.textContent = status), cleanupStatus(documentProp);
  }
}
function cleanupStatusDiv(documentProp) {
  var statusDiv = documentProp?.getElementById("a11y-status-message");
  statusDiv && statusDiv.remove();
}
var unknown = "__autocomplete_unknown__",
  mouseUp = "__autocomplete_mouseup__",
  itemMouseEnter = "__autocomplete_item_mouseenter__",
  keyDownArrowUp = "__autocomplete_keydown_arrow_up__",
  keyDownArrowDown = "__autocomplete_keydown_arrow_down__",
  keyDownEscape = "__autocomplete_keydown_escape__",
  keyDownEnter = "__autocomplete_keydown_enter__",
  keyDownHome = "__autocomplete_keydown_home__",
  keyDownEnd = "__autocomplete_keydown_end__",
  clickItem = "__autocomplete_click_item__",
  blurInput = "__autocomplete_blur_input__",
  changeInput = "__autocomplete_change_input__",
  keyDownSpaceButton = "__autocomplete_keydown_space_button__",
  clickButton = "__autocomplete_click_button__",
  blurButton = "__autocomplete_blur_button__",
  controlledPropUpdatedSelectedItem =
    "__autocomplete_controlled_prop_updated_selected_item__",
  touchEnd = "__autocomplete_touchend__",
  stateChangeTypes$3 = Object.freeze({
    __proto__: null,
    unknown,
    mouseUp,
    itemMouseEnter,
    keyDownArrowUp,
    keyDownArrowDown,
    keyDownEscape,
    keyDownEnter,
    keyDownHome,
    keyDownEnd,
    clickItem,
    blurInput,
    changeInput,
    keyDownSpaceButton,
    clickButton,
    blurButton,
    controlledPropUpdatedSelectedItem,
    touchEnd,
  }),
  _excluded$3 = ["refKey", "ref"],
  _excluded2$3 = ["onClick", "onPress", "onKeyDown", "onKeyUp", "onBlur"],
  _excluded3$2 = ["onKeyDown", "onBlur", "onChange", "onInput", "onChangeText"],
  _excluded4$2 = ["refKey", "ref"],
  _excluded5 = [
    "onMouseMove",
    "onMouseDown",
    "onClick",
    "onPress",
    "index",
    "item",
  ],
  Downshift = (function () {
    var Downshift2 = (function (_Component) {
      function Downshift3(_props) {
        var _this;
        (_this = _Component.call(this, _props) || this),
          (_this.id = _this.props.id || "downshift-" + generateId()),
          (_this.menuId = _this.props.menuId || _this.id + "-menu"),
          (_this.labelId = _this.props.labelId || _this.id + "-label"),
          (_this.inputId = _this.props.inputId || _this.id + "-input"),
          (_this.getItemId =
            _this.props.getItemId ||
            function (index) {
              return _this.id + "-item-" + index;
            }),
          (_this.items = []),
          (_this.itemCount = null),
          (_this.previousResultCount = 0),
          (_this.timeoutIds = []),
          (_this.internalSetTimeout = function (fn, time) {
            var id = setTimeout(function () {
              (_this.timeoutIds = _this.timeoutIds.filter(function (i2) {
                return i2 !== id;
              })),
                fn();
            }, time);
            _this.timeoutIds.push(id);
          }),
          (_this.setItemCount = function (count) {
            _this.itemCount = count;
          }),
          (_this.unsetItemCount = function () {
            _this.itemCount = null;
          }),
          (_this.isItemDisabled = function (_item, index) {
            var currentElementNode = _this.getItemNodeFromIndex(index);
            return (
              currentElementNode && currentElementNode.hasAttribute("disabled")
            );
          }),
          (_this.setHighlightedIndex = function (
            highlightedIndex,
            otherStateToSet,
          ) {
            highlightedIndex === void 0 &&
              (highlightedIndex = _this.props.defaultHighlightedIndex),
              otherStateToSet === void 0 && (otherStateToSet = {}),
              (otherStateToSet = pickState(otherStateToSet)),
              _this.internalSetState(
                _extends({ highlightedIndex }, otherStateToSet),
              );
          }),
          (_this.clearSelection = function (cb) {
            _this.internalSetState(
              {
                selectedItem: null,
                inputValue: "",
                highlightedIndex: _this.props.defaultHighlightedIndex,
                isOpen: _this.props.defaultIsOpen,
              },
              cb,
            );
          }),
          (_this.selectItem = function (item, otherStateToSet, cb) {
            (otherStateToSet = pickState(otherStateToSet)),
              _this.internalSetState(
                _extends(
                  {
                    isOpen: _this.props.defaultIsOpen,
                    highlightedIndex: _this.props.defaultHighlightedIndex,
                    selectedItem: item,
                    inputValue: _this.props.itemToString(item),
                  },
                  otherStateToSet,
                ),
                cb,
              );
          }),
          (_this.selectItemAtIndex = function (itemIndex, otherStateToSet, cb) {
            var item = _this.items[itemIndex];
            item != null && _this.selectItem(item, otherStateToSet, cb);
          }),
          (_this.selectHighlightedItem = function (otherStateToSet, cb) {
            return _this.selectItemAtIndex(
              _this.getState().highlightedIndex,
              otherStateToSet,
              cb,
            );
          }),
          (_this.internalSetState = function (stateToSet, cb) {
            var isItemSelected,
              onChangeArg,
              onStateChangeArg = {},
              isStateToSetFunction = typeof stateToSet == "function";
            return (
              !isStateToSetFunction &&
                stateToSet.hasOwnProperty("inputValue") &&
                _this.props.onInputValueChange(
                  stateToSet.inputValue,
                  _extends({}, _this.getStateAndHelpers(), stateToSet),
                ),
              _this.setState(
                function (state) {
                  var _newStateToSet;
                  state = _this.getState(state);
                  var newStateToSet = isStateToSetFunction
                    ? stateToSet(state)
                    : stateToSet;
                  (newStateToSet = _this.props.stateReducer(
                    state,
                    newStateToSet,
                  )),
                    (isItemSelected =
                      newStateToSet.hasOwnProperty("selectedItem"));
                  var nextState = {};
                  return (
                    isItemSelected &&
                      newStateToSet.selectedItem !== state.selectedItem &&
                      (onChangeArg = newStateToSet.selectedItem),
                    (_newStateToSet = newStateToSet).type ||
                      (_newStateToSet.type = unknown),
                    Object.keys(newStateToSet).forEach(function (key) {
                      state[key] !== newStateToSet[key] &&
                        (onStateChangeArg[key] = newStateToSet[key]),
                        key !== "type" &&
                          (newStateToSet[key],
                          isControlledProp(_this.props, key) ||
                            (nextState[key] = newStateToSet[key]));
                    }),
                    isStateToSetFunction &&
                      newStateToSet.hasOwnProperty("inputValue") &&
                      _this.props.onInputValueChange(
                        newStateToSet.inputValue,
                        _extends({}, _this.getStateAndHelpers(), newStateToSet),
                      ),
                    nextState
                  );
                },
                function () {
                  cbToCb(cb)();
                  var hasMoreStateThanType =
                    Object.keys(onStateChangeArg).length > 1;
                  hasMoreStateThanType &&
                    _this.props.onStateChange(
                      onStateChangeArg,
                      _this.getStateAndHelpers(),
                    ),
                    isItemSelected &&
                      _this.props.onSelect(
                        stateToSet.selectedItem,
                        _this.getStateAndHelpers(),
                      ),
                    onChangeArg !== void 0 &&
                      _this.props.onChange(
                        onChangeArg,
                        _this.getStateAndHelpers(),
                      ),
                    _this.props.onUserAction(
                      onStateChangeArg,
                      _this.getStateAndHelpers(),
                    );
                },
              )
            );
          }),
          (_this.rootRef = function (node) {
            return (_this._rootNode = node);
          }),
          (_this.getRootProps = function (_temp, _temp2) {
            var _extends2,
              _ref = _temp === void 0 ? {} : _temp,
              _ref$refKey = _ref.refKey,
              refKey = _ref$refKey === void 0 ? "ref" : _ref$refKey,
              ref = _ref.ref,
              rest = _objectWithoutPropertiesLoose(_ref, _excluded$3),
              _ref2 = _temp2 === void 0 ? {} : _temp2,
              _ref2$suppressRefErro = _ref2.suppressRefError,
              suppressRefError =
                _ref2$suppressRefErro === void 0 ? !1 : _ref2$suppressRefErro;
            (_this.getRootProps.called = !0),
              (_this.getRootProps.refKey = refKey),
              (_this.getRootProps.suppressRefError = suppressRefError);
            var _this$getState = _this.getState(),
              isOpen = _this$getState.isOpen;
            return _extends(
              ((_extends2 = {}),
              (_extends2[refKey] = handleRefs(ref, _this.rootRef)),
              (_extends2.role = "combobox"),
              (_extends2["aria-expanded"] = isOpen),
              (_extends2["aria-haspopup"] = "listbox"),
              (_extends2["aria-owns"] = isOpen ? _this.menuId : void 0),
              (_extends2["aria-labelledby"] = _this.labelId),
              _extends2),
              rest,
            );
          }),
          (_this.keyDownHandlers = {
            ArrowDown: function (event) {
              var _this2 = this;
              if ((event.preventDefault(), this.getState().isOpen)) {
                var amount = event.shiftKey ? 5 : 1;
                this.moveHighlightedIndex(amount, { type: keyDownArrowDown });
              } else
                this.internalSetState(
                  { isOpen: !0, type: keyDownArrowDown },
                  function () {
                    var itemCount = _this2.getItemCount();
                    if (itemCount > 0) {
                      var _this2$getState = _this2.getState(),
                        highlightedIndex = _this2$getState.highlightedIndex,
                        nextHighlightedIndex = getHighlightedIndex(
                          highlightedIndex,
                          1,
                          { length: itemCount },
                          _this2.isItemDisabled,
                          !0,
                        );
                      _this2.setHighlightedIndex(nextHighlightedIndex, {
                        type: keyDownArrowDown,
                      });
                    }
                  },
                );
            },
            ArrowUp: function (event) {
              var _this3 = this;
              if ((event.preventDefault(), this.getState().isOpen)) {
                var amount = event.shiftKey ? -5 : -1;
                this.moveHighlightedIndex(amount, { type: keyDownArrowUp });
              } else
                this.internalSetState(
                  { isOpen: !0, type: keyDownArrowUp },
                  function () {
                    var itemCount = _this3.getItemCount();
                    if (itemCount > 0) {
                      var _this3$getState = _this3.getState(),
                        highlightedIndex = _this3$getState.highlightedIndex,
                        nextHighlightedIndex = getHighlightedIndex(
                          highlightedIndex,
                          -1,
                          { length: itemCount },
                          _this3.isItemDisabled,
                          !0,
                        );
                      _this3.setHighlightedIndex(nextHighlightedIndex, {
                        type: keyDownArrowUp,
                      });
                    }
                  },
                );
            },
            Enter: function (event) {
              if (event.which !== 229) {
                var _this$getState2 = this.getState(),
                  isOpen = _this$getState2.isOpen,
                  highlightedIndex = _this$getState2.highlightedIndex;
                if (isOpen && highlightedIndex != null) {
                  event.preventDefault();
                  var item = this.items[highlightedIndex],
                    itemNode = this.getItemNodeFromIndex(highlightedIndex);
                  if (
                    item == null ||
                    (itemNode && itemNode.hasAttribute("disabled"))
                  )
                    return;
                  this.selectHighlightedItem({ type: keyDownEnter });
                }
              }
            },
            Escape: function (event) {
              event.preventDefault(),
                this.reset(
                  _extends(
                    { type: keyDownEscape },
                    !this.state.isOpen && {
                      selectedItem: null,
                      inputValue: "",
                    },
                  ),
                );
            },
          }),
          (_this.buttonKeyDownHandlers = _extends({}, _this.keyDownHandlers, {
            " ": function (event) {
              event.preventDefault(),
                this.toggleMenu({ type: keyDownSpaceButton });
            },
          })),
          (_this.inputKeyDownHandlers = _extends({}, _this.keyDownHandlers, {
            Home: function (event) {
              var _this$getState3 = this.getState(),
                isOpen = _this$getState3.isOpen;
              if (isOpen) {
                event.preventDefault();
                var itemCount = this.getItemCount();
                if (!(itemCount <= 0 || !isOpen)) {
                  var newHighlightedIndex = getNonDisabledIndex(
                    0,
                    !1,
                    { length: itemCount },
                    this.isItemDisabled,
                  );
                  this.setHighlightedIndex(newHighlightedIndex, {
                    type: keyDownHome,
                  });
                }
              }
            },
            End: function (event) {
              var _this$getState4 = this.getState(),
                isOpen = _this$getState4.isOpen;
              if (isOpen) {
                event.preventDefault();
                var itemCount = this.getItemCount();
                if (!(itemCount <= 0 || !isOpen)) {
                  var newHighlightedIndex = getNonDisabledIndex(
                    itemCount - 1,
                    !0,
                    { length: itemCount },
                    this.isItemDisabled,
                  );
                  this.setHighlightedIndex(newHighlightedIndex, {
                    type: keyDownEnd,
                  });
                }
              }
            },
          })),
          (_this.getToggleButtonProps = function (_temp3) {
            var _ref3 = _temp3 === void 0 ? {} : _temp3,
              onClick = _ref3.onClick;
            _ref3.onPress;
            var onKeyDown = _ref3.onKeyDown,
              onKeyUp = _ref3.onKeyUp,
              onBlur = _ref3.onBlur,
              rest = _objectWithoutPropertiesLoose(_ref3, _excluded2$3),
              _this$getState5 = _this.getState(),
              isOpen = _this$getState5.isOpen,
              enabledEventHandlers = {
                onClick: callAllEventHandlers(onClick, _this.buttonHandleClick),
                onKeyDown: callAllEventHandlers(
                  onKeyDown,
                  _this.buttonHandleKeyDown,
                ),
                onKeyUp: callAllEventHandlers(onKeyUp, _this.buttonHandleKeyUp),
                onBlur: callAllEventHandlers(onBlur, _this.buttonHandleBlur),
              },
              eventHandlers = rest.disabled ? {} : enabledEventHandlers;
            return _extends(
              {
                type: "button",
                role: "button",
                "aria-label": isOpen ? "close menu" : "open menu",
                "aria-haspopup": !0,
                "data-toggle": !0,
              },
              eventHandlers,
              rest,
            );
          }),
          (_this.buttonHandleKeyUp = function (event) {
            event.preventDefault();
          }),
          (_this.buttonHandleKeyDown = function (event) {
            var key = normalizeArrowKey(event);
            _this.buttonKeyDownHandlers[key] &&
              _this.buttonKeyDownHandlers[key].call(_this, event);
          }),
          (_this.buttonHandleClick = function (event) {
            if ((event.preventDefault(), _this.props.environment)) {
              var _this$props$environme = _this.props.environment.document,
                body = _this$props$environme.body,
                activeElement = _this$props$environme.activeElement;
              body && body === activeElement && event.target.focus();
            }
            _this.internalSetTimeout(function () {
              return _this.toggleMenu({ type: clickButton });
            });
          }),
          (_this.buttonHandleBlur = function (event) {
            var blurTarget = event.target;
            _this.internalSetTimeout(function () {
              if (!(_this.isMouseDown || !_this.props.environment)) {
                var activeElement =
                  _this.props.environment.document.activeElement;
                (activeElement == null || activeElement.id !== _this.inputId) &&
                  activeElement !== blurTarget &&
                  _this.reset({ type: blurButton });
              }
            });
          }),
          (_this.getLabelProps = function (props) {
            return _extends(
              { htmlFor: _this.inputId, id: _this.labelId },
              props,
            );
          }),
          (_this.getInputProps = function (_temp4) {
            var _ref4 = _temp4 === void 0 ? {} : _temp4,
              onKeyDown = _ref4.onKeyDown,
              onBlur = _ref4.onBlur,
              onChange = _ref4.onChange,
              onInput = _ref4.onInput;
            _ref4.onChangeText;
            var rest = _objectWithoutPropertiesLoose(_ref4, _excluded3$2),
              onChangeKey,
              eventHandlers = {};
            onChangeKey = "onChange";
            var _this$getState6 = _this.getState(),
              inputValue = _this$getState6.inputValue,
              isOpen = _this$getState6.isOpen,
              highlightedIndex = _this$getState6.highlightedIndex;
            if (!rest.disabled) {
              var _eventHandlers;
              eventHandlers =
                ((_eventHandlers = {}),
                (_eventHandlers[onChangeKey] = callAllEventHandlers(
                  onChange,
                  onInput,
                  _this.inputHandleChange,
                )),
                (_eventHandlers.onKeyDown = callAllEventHandlers(
                  onKeyDown,
                  _this.inputHandleKeyDown,
                )),
                (_eventHandlers.onBlur = callAllEventHandlers(
                  onBlur,
                  _this.inputHandleBlur,
                )),
                _eventHandlers);
            }
            return _extends(
              {
                "aria-autocomplete": "list",
                "aria-activedescendant":
                  isOpen &&
                  typeof highlightedIndex == "number" &&
                  highlightedIndex >= 0
                    ? _this.getItemId(highlightedIndex)
                    : void 0,
                "aria-controls": isOpen ? _this.menuId : void 0,
                "aria-labelledby":
                  rest && rest["aria-label"] ? void 0 : _this.labelId,
                autoComplete: "off",
                value: inputValue,
                id: _this.inputId,
              },
              eventHandlers,
              rest,
            );
          }),
          (_this.inputHandleKeyDown = function (event) {
            var key = normalizeArrowKey(event);
            key &&
              _this.inputKeyDownHandlers[key] &&
              _this.inputKeyDownHandlers[key].call(_this, event);
          }),
          (_this.inputHandleChange = function (event) {
            _this.internalSetState({
              type: changeInput,
              isOpen: !0,
              inputValue: event.target.value,
              highlightedIndex: _this.props.defaultHighlightedIndex,
            });
          }),
          (_this.inputHandleBlur = function () {
            _this.internalSetTimeout(function () {
              var _activeElement$datase;
              if (!(_this.isMouseDown || !_this.props.environment)) {
                var activeElement =
                    _this.props.environment.document.activeElement,
                  downshiftButtonIsActive =
                    (activeElement == null ||
                    (_activeElement$datase = activeElement.dataset) == null
                      ? void 0
                      : _activeElement$datase.toggle) &&
                    _this._rootNode &&
                    _this._rootNode.contains(activeElement);
                downshiftButtonIsActive || _this.reset({ type: blurInput });
              }
            });
          }),
          (_this.menuRef = function (node) {
            _this._menuNode = node;
          }),
          (_this.getMenuProps = function (_temp5, _temp6) {
            var _extends3,
              _ref5 = _temp5 === void 0 ? {} : _temp5,
              _ref5$refKey = _ref5.refKey,
              refKey = _ref5$refKey === void 0 ? "ref" : _ref5$refKey,
              ref = _ref5.ref,
              props = _objectWithoutPropertiesLoose(_ref5, _excluded4$2),
              _ref6 = _temp6 === void 0 ? {} : _temp6,
              _ref6$suppressRefErro = _ref6.suppressRefError,
              suppressRefError =
                _ref6$suppressRefErro === void 0 ? !1 : _ref6$suppressRefErro;
            return (
              (_this.getMenuProps.called = !0),
              (_this.getMenuProps.refKey = refKey),
              (_this.getMenuProps.suppressRefError = suppressRefError),
              _extends(
                ((_extends3 = {}),
                (_extends3[refKey] = handleRefs(ref, _this.menuRef)),
                (_extends3.role = "listbox"),
                (_extends3["aria-labelledby"] =
                  props && props["aria-label"] ? void 0 : _this.labelId),
                (_extends3.id = _this.menuId),
                _extends3),
                props,
              )
            );
          }),
          (_this.getItemProps = function (_temp7) {
            var _enabledEventHandlers,
              _ref7 = _temp7 === void 0 ? {} : _temp7,
              onMouseMove = _ref7.onMouseMove,
              onMouseDown = _ref7.onMouseDown,
              onClick = _ref7.onClick;
            _ref7.onPress;
            var index = _ref7.index,
              _ref7$item = _ref7.item,
              item =
                _ref7$item === void 0
                  ? requiredProp("getItemProps", "item")
                  : _ref7$item,
              rest = _objectWithoutPropertiesLoose(_ref7, _excluded5);
            index === void 0
              ? (_this.items.push(item), (index = _this.items.indexOf(item)))
              : (_this.items[index] = item);
            var onSelectKey = "onClick",
              customClickHandler = onClick,
              enabledEventHandlers =
                ((_enabledEventHandlers = {
                  onMouseMove: callAllEventHandlers(onMouseMove, function () {
                    index !== _this.getState().highlightedIndex &&
                      (_this.setHighlightedIndex(index, {
                        type: itemMouseEnter,
                      }),
                      (_this.avoidScrolling = !0),
                      _this.internalSetTimeout(function () {
                        return (_this.avoidScrolling = !1);
                      }, 250));
                  }),
                  onMouseDown: callAllEventHandlers(
                    onMouseDown,
                    function (event) {
                      event.preventDefault();
                    },
                  ),
                }),
                (_enabledEventHandlers[onSelectKey] = callAllEventHandlers(
                  customClickHandler,
                  function () {
                    _this.selectItemAtIndex(index, { type: clickItem });
                  },
                )),
                _enabledEventHandlers),
              eventHandlers = rest.disabled
                ? { onMouseDown: enabledEventHandlers.onMouseDown }
                : enabledEventHandlers;
            return _extends(
              {
                id: _this.getItemId(index),
                role: "option",
                "aria-selected": _this.getState().highlightedIndex === index,
              },
              eventHandlers,
              rest,
            );
          }),
          (_this.clearItems = function () {
            _this.items = [];
          }),
          (_this.reset = function (otherStateToSet, cb) {
            otherStateToSet === void 0 && (otherStateToSet = {}),
              (otherStateToSet = pickState(otherStateToSet)),
              _this.internalSetState(function (_ref8) {
                var selectedItem = _ref8.selectedItem;
                return _extends(
                  {
                    isOpen: _this.props.defaultIsOpen,
                    highlightedIndex: _this.props.defaultHighlightedIndex,
                    inputValue: _this.props.itemToString(selectedItem),
                  },
                  otherStateToSet,
                );
              }, cb);
          }),
          (_this.toggleMenu = function (otherStateToSet, cb) {
            otherStateToSet === void 0 && (otherStateToSet = {}),
              (otherStateToSet = pickState(otherStateToSet)),
              _this.internalSetState(
                function (_ref9) {
                  var isOpen = _ref9.isOpen;
                  return _extends(
                    { isOpen: !isOpen },
                    isOpen && {
                      highlightedIndex: _this.props.defaultHighlightedIndex,
                    },
                    otherStateToSet,
                  );
                },
                function () {
                  var _this$getState7 = _this.getState(),
                    isOpen = _this$getState7.isOpen,
                    highlightedIndex = _this$getState7.highlightedIndex;
                  isOpen &&
                    _this.getItemCount() > 0 &&
                    typeof highlightedIndex == "number" &&
                    _this.setHighlightedIndex(
                      highlightedIndex,
                      otherStateToSet,
                    ),
                    cbToCb(cb)();
                },
              );
          }),
          (_this.openMenu = function (cb) {
            _this.internalSetState({ isOpen: !0 }, cb);
          }),
          (_this.closeMenu = function (cb) {
            _this.internalSetState({ isOpen: !1 }, cb);
          }),
          (_this.updateStatus = debounce(function () {
            var _this$props;
            if (
              (_this$props = _this.props) != null &&
              (_this$props = _this$props.environment) != null &&
              _this$props.document
            ) {
              var state = _this.getState(),
                item = _this.items[state.highlightedIndex],
                resultCount = _this.getItemCount(),
                status = _this.props.getA11yStatusMessage(
                  _extends(
                    {
                      itemToString: _this.props.itemToString,
                      previousResultCount: _this.previousResultCount,
                      resultCount,
                      highlightedItem: item,
                    },
                    state,
                  ),
                );
              (_this.previousResultCount = resultCount),
                setStatus(status, _this.props.environment.document);
            }
          }, 200));
        var _this$props2 = _this.props,
          defaultHighlightedIndex = _this$props2.defaultHighlightedIndex,
          _this$props2$initialH = _this$props2.initialHighlightedIndex,
          _highlightedIndex =
            _this$props2$initialH === void 0
              ? defaultHighlightedIndex
              : _this$props2$initialH,
          defaultIsOpen = _this$props2.defaultIsOpen,
          _this$props2$initialI = _this$props2.initialIsOpen,
          _isOpen =
            _this$props2$initialI === void 0
              ? defaultIsOpen
              : _this$props2$initialI,
          _this$props2$initialI2 = _this$props2.initialInputValue,
          _inputValue =
            _this$props2$initialI2 === void 0 ? "" : _this$props2$initialI2,
          _this$props2$initialS = _this$props2.initialSelectedItem,
          _selectedItem =
            _this$props2$initialS === void 0 ? null : _this$props2$initialS,
          _state = _this.getState({
            highlightedIndex: _highlightedIndex,
            isOpen: _isOpen,
            inputValue: _inputValue,
            selectedItem: _selectedItem,
          });
        return (
          _state.selectedItem != null &&
            _this.props.initialInputValue === void 0 &&
            (_state.inputValue = _this.props.itemToString(_state.selectedItem)),
          (_this.state = _state),
          _this
        );
      }
      _inheritsLoose(Downshift3, _Component);
      var _proto = Downshift3.prototype;
      return (
        (_proto.internalClearTimeouts = function () {
          this.timeoutIds.forEach(function (id) {
            clearTimeout(id);
          }),
            (this.timeoutIds = []);
        }),
        (_proto.getState = function (stateToMerge) {
          return (
            stateToMerge === void 0 && (stateToMerge = this.state),
            getState(stateToMerge, this.props)
          );
        }),
        (_proto.getItemCount = function () {
          var itemCount = this.items.length;
          return (
            this.itemCount != null
              ? (itemCount = this.itemCount)
              : this.props.itemCount !== void 0 &&
                (itemCount = this.props.itemCount),
            itemCount
          );
        }),
        (_proto.getItemNodeFromIndex = function (index) {
          return this.props.environment
            ? this.props.environment.document.getElementById(
                this.getItemId(index),
              )
            : null;
        }),
        (_proto.scrollHighlightedItemIntoView = function () {
          {
            var node = this.getItemNodeFromIndex(
              this.getState().highlightedIndex,
            );
            this.props.scrollIntoView(node, this._menuNode);
          }
        }),
        (_proto.moveHighlightedIndex = function (amount, otherStateToSet) {
          var itemCount = this.getItemCount(),
            _this$getState8 = this.getState(),
            highlightedIndex = _this$getState8.highlightedIndex;
          if (itemCount > 0) {
            var nextHighlightedIndex = getHighlightedIndex(
              highlightedIndex,
              amount,
              { length: itemCount },
              this.isItemDisabled,
              !0,
            );
            this.setHighlightedIndex(nextHighlightedIndex, otherStateToSet);
          }
        }),
        (_proto.getStateAndHelpers = function () {
          var _this$getState9 = this.getState(),
            highlightedIndex = _this$getState9.highlightedIndex,
            inputValue = _this$getState9.inputValue,
            selectedItem = _this$getState9.selectedItem,
            isOpen = _this$getState9.isOpen,
            itemToString2 = this.props.itemToString,
            id = this.id,
            getRootProps = this.getRootProps,
            getToggleButtonProps = this.getToggleButtonProps,
            getLabelProps = this.getLabelProps,
            getMenuProps = this.getMenuProps,
            getInputProps = this.getInputProps,
            getItemProps = this.getItemProps,
            openMenu = this.openMenu,
            closeMenu = this.closeMenu,
            toggleMenu = this.toggleMenu,
            selectItem = this.selectItem,
            selectItemAtIndex = this.selectItemAtIndex,
            selectHighlightedItem = this.selectHighlightedItem,
            setHighlightedIndex = this.setHighlightedIndex,
            clearSelection = this.clearSelection,
            clearItems = this.clearItems,
            reset = this.reset,
            setItemCount = this.setItemCount,
            unsetItemCount = this.unsetItemCount,
            setState = this.internalSetState;
          return {
            getRootProps,
            getToggleButtonProps,
            getLabelProps,
            getMenuProps,
            getInputProps,
            getItemProps,
            reset,
            openMenu,
            closeMenu,
            toggleMenu,
            selectItem,
            selectItemAtIndex,
            selectHighlightedItem,
            setHighlightedIndex,
            clearSelection,
            clearItems,
            setItemCount,
            unsetItemCount,
            setState,
            itemToString: itemToString2,
            id,
            highlightedIndex,
            inputValue,
            isOpen,
            selectedItem,
          };
        }),
        (_proto.componentDidMount = function () {
          var _this4 = this;
          if (
            (this.getMenuProps.called &&
              !this.getMenuProps.suppressRefError &&
              validateGetMenuPropsCalledCorrectly(
                this._menuNode,
                this.getMenuProps,
              ),
            !this.props.environment)
          )
            this.cleanup = function () {
              _this4.internalClearTimeouts();
            };
          else {
            var onMouseDown = function () {
                _this4.isMouseDown = !0;
              },
              onMouseUp = function (event) {
                _this4.isMouseDown = !1;
                var contextWithinDownshift = targetWithinDownshift(
                  event.target,
                  [_this4._rootNode, _this4._menuNode],
                  _this4.props.environment,
                );
                !contextWithinDownshift &&
                  _this4.getState().isOpen &&
                  _this4.reset({ type: mouseUp }, function () {
                    return _this4.props.onOuterClick(
                      _this4.getStateAndHelpers(),
                    );
                  });
              },
              onTouchStart = function () {
                _this4.isTouchMove = !1;
              },
              onTouchMove = function () {
                _this4.isTouchMove = !0;
              },
              onTouchEnd = function (event) {
                var contextWithinDownshift = targetWithinDownshift(
                  event.target,
                  [_this4._rootNode, _this4._menuNode],
                  _this4.props.environment,
                  !1,
                );
                !_this4.isTouchMove &&
                  !contextWithinDownshift &&
                  _this4.getState().isOpen &&
                  _this4.reset({ type: touchEnd }, function () {
                    return _this4.props.onOuterClick(
                      _this4.getStateAndHelpers(),
                    );
                  });
              },
              environment = this.props.environment;
            environment.addEventListener("mousedown", onMouseDown),
              environment.addEventListener("mouseup", onMouseUp),
              environment.addEventListener("touchstart", onTouchStart),
              environment.addEventListener("touchmove", onTouchMove),
              environment.addEventListener("touchend", onTouchEnd),
              (this.cleanup = function () {
                _this4.internalClearTimeouts(),
                  _this4.updateStatus.cancel(),
                  environment.removeEventListener("mousedown", onMouseDown),
                  environment.removeEventListener("mouseup", onMouseUp),
                  environment.removeEventListener("touchstart", onTouchStart),
                  environment.removeEventListener("touchmove", onTouchMove),
                  environment.removeEventListener("touchend", onTouchEnd);
              });
          }
        }),
        (_proto.shouldScroll = function (prevState, prevProps) {
          var _ref10 =
              this.props.highlightedIndex === void 0
                ? this.getState()
                : this.props,
            currentHighlightedIndex = _ref10.highlightedIndex,
            _ref11 =
              prevProps.highlightedIndex === void 0 ? prevState : prevProps,
            prevHighlightedIndex = _ref11.highlightedIndex,
            scrollWhenOpen =
              currentHighlightedIndex &&
              this.getState().isOpen &&
              !prevState.isOpen,
            scrollWhenNavigating =
              currentHighlightedIndex !== prevHighlightedIndex;
          return scrollWhenOpen || scrollWhenNavigating;
        }),
        (_proto.componentDidUpdate = function (prevProps, prevState) {
          validateControlledUnchanged(this.state, prevProps, this.props),
            this.getMenuProps.called &&
              !this.getMenuProps.suppressRefError &&
              validateGetMenuPropsCalledCorrectly(
                this._menuNode,
                this.getMenuProps,
              ),
            isControlledProp(this.props, "selectedItem") &&
              this.props.selectedItemChanged(
                prevProps.selectedItem,
                this.props.selectedItem,
              ) &&
              this.internalSetState({
                type: controlledPropUpdatedSelectedItem,
                inputValue: this.props.itemToString(this.props.selectedItem),
              }),
            !this.avoidScrolling &&
              this.shouldScroll(prevState, prevProps) &&
              this.scrollHighlightedItemIntoView(),
            this.updateStatus();
        }),
        (_proto.componentWillUnmount = function () {
          this.cleanup();
        }),
        (_proto.render = function () {
          var children = unwrapArray(this.props.children, noop2);
          this.clearItems(),
            (this.getRootProps.called = !1),
            (this.getRootProps.refKey = void 0),
            (this.getRootProps.suppressRefError = void 0),
            (this.getMenuProps.called = !1),
            (this.getMenuProps.refKey = void 0),
            (this.getMenuProps.suppressRefError = void 0),
            (this.getLabelProps.called = !1),
            (this.getInputProps.called = !1);
          var element = unwrapArray(children(this.getStateAndHelpers()));
          if (!element) return null;
          if (this.getRootProps.called || this.props.suppressRefError)
            return (
              !this.getRootProps.suppressRefError &&
                !this.props.suppressRefError &&
                validateGetRootPropsCalledCorrectly(element, this.getRootProps),
              element
            );
          if (isDOMElement(element))
            return (0, import_react20.cloneElement)(
              element,
              this.getRootProps(getElementProps(element)),
            );
          throw new Error(
            "downshift: If you return a non-DOM element, you must apply the getRootProps function",
          );
        }),
        Downshift3
      );
    })(import_react20.Component);
    return (
      (Downshift2.defaultProps = {
        defaultHighlightedIndex: null,
        defaultIsOpen: !1,
        getA11yStatusMessage,
        itemToString: function (i2) {
          return i2 == null
            ? ""
            : (isPlainObject(i2) &&
                !i2.hasOwnProperty("toString") &&
                console.warn(
                  "downshift: An object was passed to the default implementation of `itemToString`. You should probably provide your own `itemToString` implementation. Please refer to the `itemToString` API documentation.",
                  "The object that was passed:",
                  i2,
                ),
              String(i2));
        },
        onStateChange: noop2,
        onInputValueChange: noop2,
        onUserAction: noop2,
        onChange: noop2,
        onSelect: noop2,
        onOuterClick: noop2,
        selectedItemChanged: function (prevItem, item) {
          return prevItem !== item;
        },
        environment: typeof window > "u" ? void 0 : window,
        stateReducer: function (state, stateToSet) {
          return stateToSet;
        },
        suppressRefError: !1,
        scrollIntoView: scrollIntoView2,
      }),
      (Downshift2.stateChangeTypes = stateChangeTypes$3),
      Downshift2
    );
  })();
Downshift.propTypes = {
  children: import_prop_types2.default.func,
  defaultHighlightedIndex: import_prop_types2.default.number,
  defaultIsOpen: import_prop_types2.default.bool,
  initialHighlightedIndex: import_prop_types2.default.number,
  initialSelectedItem: import_prop_types2.default.any,
  initialInputValue: import_prop_types2.default.string,
  initialIsOpen: import_prop_types2.default.bool,
  getA11yStatusMessage: import_prop_types2.default.func,
  itemToString: import_prop_types2.default.func,
  onChange: import_prop_types2.default.func,
  onSelect: import_prop_types2.default.func,
  onStateChange: import_prop_types2.default.func,
  onInputValueChange: import_prop_types2.default.func,
  onUserAction: import_prop_types2.default.func,
  onOuterClick: import_prop_types2.default.func,
  selectedItemChanged: import_prop_types2.default.func,
  stateReducer: import_prop_types2.default.func,
  itemCount: import_prop_types2.default.number,
  id: import_prop_types2.default.string,
  environment: import_prop_types2.default.shape({
    addEventListener: import_prop_types2.default.func.isRequired,
    removeEventListener: import_prop_types2.default.func.isRequired,
    document: import_prop_types2.default.shape({
      createElement: import_prop_types2.default.func.isRequired,
      getElementById: import_prop_types2.default.func.isRequired,
      activeElement: import_prop_types2.default.any.isRequired,
      body: import_prop_types2.default.any.isRequired,
    }).isRequired,
    Node: import_prop_types2.default.func.isRequired,
  }),
  suppressRefError: import_prop_types2.default.bool,
  scrollIntoView: import_prop_types2.default.func,
  selectedItem: import_prop_types2.default.any,
  isOpen: import_prop_types2.default.bool,
  inputValue: import_prop_types2.default.string,
  highlightedIndex: import_prop_types2.default.number,
  labelId: import_prop_types2.default.string,
  inputId: import_prop_types2.default.string,
  menuId: import_prop_types2.default.string,
  getItemId: import_prop_types2.default.func,
};
var Downshift$1 = Downshift;
function validateGetMenuPropsCalledCorrectly(node, _ref12) {
  var refKey = _ref12.refKey;
  node ||
    console.error(
      'downshift: The ref prop "' +
        refKey +
        '" from getMenuProps was not applied correctly on your menu element.',
    );
}
function validateGetRootPropsCalledCorrectly(element, _ref13) {
  var refKey = _ref13.refKey,
    refKeySpecified = refKey !== "ref",
    isComposite = !isDOMElement(element);
  isComposite && !refKeySpecified && !(0, import_react_is.isForwardRef)(element)
    ? console.error(
        "downshift: You returned a non-DOM element. You must specify a refKey in getRootProps",
      )
    : !isComposite &&
      refKeySpecified &&
      console.error(
        'downshift: You returned a DOM element. You should not specify a refKey in getRootProps. You specified "' +
          refKey +
          '"',
      ),
    !(0, import_react_is.isForwardRef)(element) &&
      !getElementProps(element)[refKey] &&
      console.error(
        'downshift: You must apply the ref prop "' +
          refKey +
          '" from getRootProps onto your root element.',
      );
}
var dropdownDefaultStateValues = {
  highlightedIndex: -1,
  isOpen: !1,
  selectedItem: null,
  inputValue: "",
};
function callOnChangeProps(action, state, newState) {
  var props = action.props,
    type = action.type,
    changes = {};
  Object.keys(state).forEach(function (key) {
    invokeOnChangeHandler(key, action, state, newState),
      newState[key] !== state[key] && (changes[key] = newState[key]);
  }),
    props.onStateChange &&
      Object.keys(changes).length &&
      props.onStateChange(_extends({ type }, changes));
}
function invokeOnChangeHandler(key, action, state, newState) {
  var props = action.props,
    type = action.type,
    handler = "on" + capitalizeString(key) + "Change";
  props[handler] &&
    newState[key] !== void 0 &&
    newState[key] !== state[key] &&
    props[handler](_extends({ type }, newState));
}
function stateReducer(s2, a2) {
  return a2.changes;
}
var updateA11yStatus = debounce(function (status, document10) {
    setStatus(status, document10);
  }, 200),
  useIsomorphicLayoutEffect =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u"
      ? import_react20.useLayoutEffect
      : import_react20.useEffect,
  useElementIds =
    "useId" in import_react20.default
      ? function (_ref) {
          var id = _ref.id,
            labelId = _ref.labelId,
            menuId = _ref.menuId,
            getItemId = _ref.getItemId,
            toggleButtonId = _ref.toggleButtonId,
            inputId = _ref.inputId,
            reactId = "downshift-" + import_react20.default.useId();
          id || (id = reactId);
          var elementIdsRef = (0, import_react20.useRef)({
            labelId: labelId || id + "-label",
            menuId: menuId || id + "-menu",
            getItemId:
              getItemId ||
              function (index) {
                return id + "-item-" + index;
              },
            toggleButtonId: toggleButtonId || id + "-toggle-button",
            inputId: inputId || id + "-input",
          });
          return elementIdsRef.current;
        }
      : function (_ref2) {
          var _ref2$id = _ref2.id,
            id = _ref2$id === void 0 ? "downshift-" + generateId() : _ref2$id,
            labelId = _ref2.labelId,
            menuId = _ref2.menuId,
            getItemId = _ref2.getItemId,
            toggleButtonId = _ref2.toggleButtonId,
            inputId = _ref2.inputId,
            elementIdsRef = (0, import_react20.useRef)({
              labelId: labelId || id + "-label",
              menuId: menuId || id + "-menu",
              getItemId:
                getItemId ||
                function (index) {
                  return id + "-item-" + index;
                },
              toggleButtonId: toggleButtonId || id + "-toggle-button",
              inputId: inputId || id + "-input",
            });
          return elementIdsRef.current;
        };
function getItemAndIndex(itemProp, indexProp, items, errorMessage) {
  var item, index;
  if (itemProp === void 0) {
    if (indexProp === void 0) throw new Error(errorMessage);
    (item = items[indexProp]), (index = indexProp);
  } else
    (index = indexProp === void 0 ? items.indexOf(itemProp) : indexProp),
      (item = itemProp);
  return [item, index];
}
function isAcceptedCharacterKey(key) {
  return /^\S{1}$/.test(key);
}
function capitalizeString(string) {
  return "" + string.slice(0, 1).toUpperCase() + string.slice(1);
}
function useLatestRef(val) {
  var ref = (0, import_react20.useRef)(val);
  return (ref.current = val), ref;
}
function useEnhancedReducer(reducer, props, createInitialState, isStateEqual2) {
  var prevStateRef = (0, import_react20.useRef)(),
    actionRef = (0, import_react20.useRef)(),
    enhancedReducer = (0, import_react20.useCallback)(
      function (state2, action2) {
        (actionRef.current = action2),
          (state2 = getState(state2, action2.props));
        var changes = reducer(state2, action2),
          newState = action2.props.stateReducer(
            state2,
            _extends({}, action2, { changes }),
          );
        return newState;
      },
      [reducer],
    ),
    _useReducer = (0, import_react20.useReducer)(
      enhancedReducer,
      props,
      createInitialState,
    ),
    state = _useReducer[0],
    dispatch = _useReducer[1],
    propsRef = useLatestRef(props),
    dispatchWithProps = (0, import_react20.useCallback)(
      function (action2) {
        return dispatch(_extends({ props: propsRef.current }, action2));
      },
      [propsRef],
    ),
    action = actionRef.current;
  return (
    (0, import_react20.useEffect)(
      function () {
        var prevState = getState(prevStateRef.current, action?.props),
          shouldCallOnChangeProps =
            action && prevStateRef.current && !isStateEqual2(prevState, state);
        shouldCallOnChangeProps && callOnChangeProps(action, prevState, state),
          (prevStateRef.current = state);
      },
      [state, action, isStateEqual2],
    ),
    [state, dispatchWithProps]
  );
}
function useControlledReducer$1(
  reducer,
  props,
  createInitialState,
  isStateEqual2,
) {
  var _useEnhancedReducer = useEnhancedReducer(
      reducer,
      props,
      createInitialState,
      isStateEqual2,
    ),
    state = _useEnhancedReducer[0],
    dispatch = _useEnhancedReducer[1];
  return [getState(state, props), dispatch];
}
var defaultProps$3 = {
  itemToString: function (item) {
    return item ? String(item) : "";
  },
  itemToKey: function (item) {
    return item;
  },
  stateReducer,
  scrollIntoView: scrollIntoView2,
  environment: typeof window > "u" ? void 0 : window,
};
function getDefaultValue$1(props, propKey, defaultStateValues2) {
  defaultStateValues2 === void 0 &&
    (defaultStateValues2 = dropdownDefaultStateValues);
  var defaultValue = props["default" + capitalizeString(propKey)];
  return defaultValue !== void 0 ? defaultValue : defaultStateValues2[propKey];
}
function getInitialValue$1(props, propKey, defaultStateValues2) {
  defaultStateValues2 === void 0 &&
    (defaultStateValues2 = dropdownDefaultStateValues);
  var value = props[propKey];
  if (value !== void 0) return value;
  var initialValue = props["initial" + capitalizeString(propKey)];
  return initialValue !== void 0
    ? initialValue
    : getDefaultValue$1(props, propKey, defaultStateValues2);
}
function getInitialState$2(props) {
  var selectedItem = getInitialValue$1(props, "selectedItem"),
    isOpen = getInitialValue$1(props, "isOpen"),
    highlightedIndex = getInitialValue$1(props, "highlightedIndex"),
    inputValue = getInitialValue$1(props, "inputValue");
  return {
    highlightedIndex:
      highlightedIndex < 0 && selectedItem && isOpen
        ? props.items.findIndex(function (item) {
            return props.itemToKey(item) === props.itemToKey(selectedItem);
          })
        : highlightedIndex,
    isOpen,
    selectedItem,
    inputValue,
  };
}
function getHighlightedIndexOnOpen(props, state, offset) {
  var items = props.items,
    initialHighlightedIndex = props.initialHighlightedIndex,
    defaultHighlightedIndex = props.defaultHighlightedIndex,
    isItemDisabled2 = props.isItemDisabled,
    itemToKey2 = props.itemToKey,
    selectedItem = state.selectedItem,
    highlightedIndex = state.highlightedIndex;
  return items.length === 0
    ? -1
    : initialHighlightedIndex !== void 0 &&
        highlightedIndex === initialHighlightedIndex &&
        !isItemDisabled2(items[initialHighlightedIndex])
      ? initialHighlightedIndex
      : defaultHighlightedIndex !== void 0 &&
          !isItemDisabled2(items[defaultHighlightedIndex])
        ? defaultHighlightedIndex
        : selectedItem
          ? items.findIndex(function (item) {
              return itemToKey2(selectedItem) === itemToKey2(item);
            })
          : offset < 0 && !isItemDisabled2(items[items.length - 1])
            ? items.length - 1
            : offset > 0 && !isItemDisabled2(items[0])
              ? 0
              : -1;
}
function useMouseAndTouchTracker(
  environment,
  downshiftElementRefs,
  handleBlur,
) {
  var mouseAndTouchTrackersRef = (0, import_react20.useRef)({
    isMouseDown: !1,
    isTouchMove: !1,
    isTouchEnd: !1,
  });
  return (
    (0, import_react20.useEffect)(
      function () {
        if (!environment) return noop2;
        var downshiftElements = downshiftElementRefs.map(function (ref) {
          return ref.current;
        });
        function onMouseDown() {
          (mouseAndTouchTrackersRef.current.isTouchEnd = !1),
            (mouseAndTouchTrackersRef.current.isMouseDown = !0);
        }
        function onMouseUp(event) {
          (mouseAndTouchTrackersRef.current.isMouseDown = !1),
            targetWithinDownshift(
              event.target,
              downshiftElements,
              environment,
            ) || handleBlur();
        }
        function onTouchStart() {
          (mouseAndTouchTrackersRef.current.isTouchEnd = !1),
            (mouseAndTouchTrackersRef.current.isTouchMove = !1);
        }
        function onTouchMove() {
          mouseAndTouchTrackersRef.current.isTouchMove = !0;
        }
        function onTouchEnd(event) {
          (mouseAndTouchTrackersRef.current.isTouchEnd = !0),
            !mouseAndTouchTrackersRef.current.isTouchMove &&
              !targetWithinDownshift(
                event.target,
                downshiftElements,
                environment,
                !1,
              ) &&
              handleBlur();
        }
        return (
          environment.addEventListener("mousedown", onMouseDown),
          environment.addEventListener("mouseup", onMouseUp),
          environment.addEventListener("touchstart", onTouchStart),
          environment.addEventListener("touchmove", onTouchMove),
          environment.addEventListener("touchend", onTouchEnd),
          function () {
            environment.removeEventListener("mousedown", onMouseDown),
              environment.removeEventListener("mouseup", onMouseUp),
              environment.removeEventListener("touchstart", onTouchStart),
              environment.removeEventListener("touchmove", onTouchMove),
              environment.removeEventListener("touchend", onTouchEnd);
          }
        );
      },
      [environment, handleBlur],
    ),
    mouseAndTouchTrackersRef.current
  );
}
var useGetterPropsCalledChecker = function () {
  return noop2;
};
useGetterPropsCalledChecker = function () {
  for (
    var isInitialMountRef = (0, import_react20.useRef)(!0),
      _len = arguments.length,
      propKeys = new Array(_len),
      _key = 0;
    _key < _len;
    _key++
  )
    propKeys[_key] = arguments[_key];
  var getterPropsCalledRef = (0, import_react20.useRef)(
    propKeys.reduce(function (acc, propKey) {
      return (acc[propKey] = {}), acc;
    }, {}),
  );
  (0, import_react20.useEffect)(function () {
    Object.keys(getterPropsCalledRef.current).forEach(function (propKey) {
      var propCallInfo = getterPropsCalledRef.current[propKey];
      if (isInitialMountRef.current && !Object.keys(propCallInfo).length) {
        console.error(
          "downshift: You forgot to call the " +
            propKey +
            " getter function on your component / element.",
        );
        return;
      }
      var suppressRefError = propCallInfo.suppressRefError,
        refKey = propCallInfo.refKey,
        elementRef = propCallInfo.elementRef;
      (!elementRef || !elementRef.current) &&
        !suppressRefError &&
        console.error(
          'downshift: The ref prop "' +
            refKey +
            '" from ' +
            propKey +
            " was not applied correctly on your element.",
        );
    }),
      (isInitialMountRef.current = !1);
  });
  var setGetterPropCallInfo = (0, import_react20.useCallback)(function (
    propKey,
    suppressRefError,
    refKey,
    elementRef,
  ) {
    getterPropsCalledRef.current[propKey] = {
      suppressRefError,
      refKey,
      elementRef,
    };
  }, []);
  return setGetterPropCallInfo;
};
function useA11yMessageStatus(
  getA11yStatusMessage2,
  options2,
  dependencyArray,
  environment,
) {
  environment === void 0 && (environment = {});
  var document10 = environment.document,
    isInitialMount = useIsInitialMount();
  (0, import_react20.useEffect)(function () {
    if (!(!getA11yStatusMessage2 || isInitialMount || !document10)) {
      var status = getA11yStatusMessage2(options2);
      updateA11yStatus(status, document10);
    }
  }, dependencyArray),
    (0, import_react20.useEffect)(
      function () {
        return function () {
          updateA11yStatus.cancel(), cleanupStatusDiv(document10);
        };
      },
      [document10],
    );
}
function useScrollIntoView(_ref3) {
  var highlightedIndex = _ref3.highlightedIndex,
    isOpen = _ref3.isOpen,
    itemRefs = _ref3.itemRefs,
    getItemNodeFromIndex = _ref3.getItemNodeFromIndex,
    menuElement = _ref3.menuElement,
    scrollIntoViewProp = _ref3.scrollIntoView,
    shouldScrollRef = (0, import_react20.useRef)(!0);
  return (
    useIsomorphicLayoutEffect(
      function () {
        highlightedIndex < 0 ||
          !isOpen ||
          !Object.keys(itemRefs.current).length ||
          (shouldScrollRef.current === !1
            ? (shouldScrollRef.current = !0)
            : scrollIntoViewProp(
                getItemNodeFromIndex(highlightedIndex),
                menuElement,
              ));
      },
      [highlightedIndex],
    ),
    shouldScrollRef
  );
}
var useControlPropsValidator = noop2;
useControlPropsValidator = function (_ref4) {
  var props = _ref4.props,
    state = _ref4.state,
    prevPropsRef = (0, import_react20.useRef)(props),
    isInitialMount = useIsInitialMount();
  (0, import_react20.useEffect)(
    function () {
      isInitialMount ||
        (validateControlledUnchanged(state, prevPropsRef.current, props),
        (prevPropsRef.current = props));
    },
    [state, props, isInitialMount],
  );
};
function getChangesOnSelection(props, highlightedIndex, inputValue) {
  var _props$items;
  inputValue === void 0 && (inputValue = !0);
  var shouldSelect =
    ((_props$items = props.items) == null ? void 0 : _props$items.length) &&
    highlightedIndex >= 0;
  return _extends(
    { isOpen: !1, highlightedIndex: -1 },
    shouldSelect &&
      _extends(
        {
          selectedItem: props.items[highlightedIndex],
          isOpen: getDefaultValue$1(props, "isOpen"),
          highlightedIndex: getDefaultValue$1(props, "highlightedIndex"),
        },
        inputValue && {
          inputValue: props.itemToString(props.items[highlightedIndex]),
        },
      ),
  );
}
function isDropdownsStateEqual(prevState, newState) {
  return (
    prevState.isOpen === newState.isOpen &&
    prevState.inputValue === newState.inputValue &&
    prevState.highlightedIndex === newState.highlightedIndex &&
    prevState.selectedItem === newState.selectedItem
  );
}
function useIsInitialMount() {
  var isInitialMountRef = import_react20.default.useRef(!0);
  return (
    import_react20.default.useEffect(function () {
      return (
        (isInitialMountRef.current = !1),
        function () {
          isInitialMountRef.current = !0;
        }
      );
    }, []),
    isInitialMountRef.current
  );
}
var commonPropTypes = {
    environment: import_prop_types2.default.shape({
      addEventListener: import_prop_types2.default.func.isRequired,
      removeEventListener: import_prop_types2.default.func.isRequired,
      document: import_prop_types2.default.shape({
        createElement: import_prop_types2.default.func.isRequired,
        getElementById: import_prop_types2.default.func.isRequired,
        activeElement: import_prop_types2.default.any.isRequired,
        body: import_prop_types2.default.any.isRequired,
      }).isRequired,
      Node: import_prop_types2.default.func.isRequired,
    }),
    itemToString: import_prop_types2.default.func,
    itemToKey: import_prop_types2.default.func,
    stateReducer: import_prop_types2.default.func,
  },
  commonDropdownPropTypes = _extends({}, commonPropTypes, {
    getA11yStatusMessage: import_prop_types2.default.func,
    highlightedIndex: import_prop_types2.default.number,
    defaultHighlightedIndex: import_prop_types2.default.number,
    initialHighlightedIndex: import_prop_types2.default.number,
    isOpen: import_prop_types2.default.bool,
    defaultIsOpen: import_prop_types2.default.bool,
    initialIsOpen: import_prop_types2.default.bool,
    selectedItem: import_prop_types2.default.any,
    initialSelectedItem: import_prop_types2.default.any,
    defaultSelectedItem: import_prop_types2.default.any,
    id: import_prop_types2.default.string,
    labelId: import_prop_types2.default.string,
    menuId: import_prop_types2.default.string,
    getItemId: import_prop_types2.default.func,
    toggleButtonId: import_prop_types2.default.string,
    onSelectedItemChange: import_prop_types2.default.func,
    onHighlightedIndexChange: import_prop_types2.default.func,
    onStateChange: import_prop_types2.default.func,
    onIsOpenChange: import_prop_types2.default.func,
    scrollIntoView: import_prop_types2.default.func,
  });
function downshiftCommonReducer(state, action, stateChangeTypes2) {
  var type = action.type,
    props = action.props,
    changes;
  switch (type) {
    case stateChangeTypes2.ItemMouseMove:
      changes = { highlightedIndex: action.disabled ? -1 : action.index };
      break;
    case stateChangeTypes2.MenuMouseLeave:
      changes = { highlightedIndex: -1 };
      break;
    case stateChangeTypes2.ToggleButtonClick:
    case stateChangeTypes2.FunctionToggleMenu:
      changes = {
        isOpen: !state.isOpen,
        highlightedIndex: state.isOpen
          ? -1
          : getHighlightedIndexOnOpen(props, state, 0),
      };
      break;
    case stateChangeTypes2.FunctionOpenMenu:
      changes = {
        isOpen: !0,
        highlightedIndex: getHighlightedIndexOnOpen(props, state, 0),
      };
      break;
    case stateChangeTypes2.FunctionCloseMenu:
      changes = { isOpen: !1 };
      break;
    case stateChangeTypes2.FunctionSetHighlightedIndex:
      changes = { highlightedIndex: action.highlightedIndex };
      break;
    case stateChangeTypes2.FunctionSetInputValue:
      changes = { inputValue: action.inputValue };
      break;
    case stateChangeTypes2.FunctionReset:
      changes = {
        highlightedIndex: getDefaultValue$1(props, "highlightedIndex"),
        isOpen: getDefaultValue$1(props, "isOpen"),
        selectedItem: getDefaultValue$1(props, "selectedItem"),
        inputValue: getDefaultValue$1(props, "inputValue"),
      };
      break;
    default:
      throw new Error("Reducer called without proper action type.");
  }
  return _extends({}, state, changes);
}
function getItemIndexByCharacterKey(_a) {
  for (
    var keysSoFar = _a.keysSoFar,
      highlightedIndex = _a.highlightedIndex,
      items = _a.items,
      itemToString2 = _a.itemToString,
      isItemDisabled2 = _a.isItemDisabled,
      lowerCasedKeysSoFar = keysSoFar.toLowerCase(),
      index = 0;
    index < items.length;
    index++
  ) {
    var offsetIndex =
        (index + highlightedIndex + (keysSoFar.length < 2 ? 1 : 0)) %
        items.length,
      item = items[offsetIndex];
    if (
      item !== void 0 &&
      itemToString2(item).toLowerCase().startsWith(lowerCasedKeysSoFar) &&
      !isItemDisabled2(item, offsetIndex)
    )
      return offsetIndex;
  }
  return highlightedIndex;
}
var propTypes$2 = __assign(__assign({}, commonDropdownPropTypes), {
    items: import_prop_types2.default.array.isRequired,
    isItemDisabled: import_prop_types2.default.func,
  }),
  defaultProps$2 = __assign(__assign({}, defaultProps$3), {
    isItemDisabled: function () {
      return !1;
    },
  }),
  validatePropTypes$2 = noop2;
validatePropTypes$2 = function (options2, caller) {
  import_prop_types2.default.checkPropTypes(
    propTypes$2,
    options2,
    "prop",
    caller.name,
  );
};
var ToggleButtonClick$1 = "__togglebutton_click__",
  ToggleButtonKeyDownArrowDown = "__togglebutton_keydown_arrow_down__",
  ToggleButtonKeyDownArrowUp = "__togglebutton_keydown_arrow_up__",
  ToggleButtonKeyDownCharacter = "__togglebutton_keydown_character__",
  ToggleButtonKeyDownEscape = "__togglebutton_keydown_escape__",
  ToggleButtonKeyDownHome = "__togglebutton_keydown_home__",
  ToggleButtonKeyDownEnd = "__togglebutton_keydown_end__",
  ToggleButtonKeyDownEnter = "__togglebutton_keydown_enter__",
  ToggleButtonKeyDownSpaceButton = "__togglebutton_keydown_space_button__",
  ToggleButtonKeyDownPageUp = "__togglebutton_keydown_page_up__",
  ToggleButtonKeyDownPageDown = "__togglebutton_keydown_page_down__",
  ToggleButtonBlur = "__togglebutton_blur__",
  MenuMouseLeave$1 = "__menu_mouse_leave__",
  ItemMouseMove$1 = "__item_mouse_move__",
  ItemClick$1 = "__item_click__",
  FunctionToggleMenu$1 = "__function_toggle_menu__",
  FunctionOpenMenu$1 = "__function_open_menu__",
  FunctionCloseMenu$1 = "__function_close_menu__",
  FunctionSetHighlightedIndex$1 = "__function_set_highlighted_index__",
  FunctionSelectItem$1 = "__function_select_item__",
  FunctionSetInputValue$1 = "__function_set_input_value__",
  FunctionReset$2 = "__function_reset__",
  stateChangeTypes$2 = Object.freeze({
    __proto__: null,
    ToggleButtonClick: ToggleButtonClick$1,
    ToggleButtonKeyDownArrowDown,
    ToggleButtonKeyDownArrowUp,
    ToggleButtonKeyDownCharacter,
    ToggleButtonKeyDownEscape,
    ToggleButtonKeyDownHome,
    ToggleButtonKeyDownEnd,
    ToggleButtonKeyDownEnter,
    ToggleButtonKeyDownSpaceButton,
    ToggleButtonKeyDownPageUp,
    ToggleButtonKeyDownPageDown,
    ToggleButtonBlur,
    MenuMouseLeave: MenuMouseLeave$1,
    ItemMouseMove: ItemMouseMove$1,
    ItemClick: ItemClick$1,
    FunctionToggleMenu: FunctionToggleMenu$1,
    FunctionOpenMenu: FunctionOpenMenu$1,
    FunctionCloseMenu: FunctionCloseMenu$1,
    FunctionSetHighlightedIndex: FunctionSetHighlightedIndex$1,
    FunctionSelectItem: FunctionSelectItem$1,
    FunctionSetInputValue: FunctionSetInputValue$1,
    FunctionReset: FunctionReset$2,
  });
function downshiftSelectReducer(state, action) {
  var _props$items,
    type = action.type,
    props = action.props,
    altKey = action.altKey,
    changes;
  switch (type) {
    case ItemClick$1:
      changes = {
        isOpen: getDefaultValue$1(props, "isOpen"),
        highlightedIndex: getDefaultValue$1(props, "highlightedIndex"),
        selectedItem: props.items[action.index],
      };
      break;
    case ToggleButtonKeyDownCharacter:
      {
        var lowercasedKey = action.key,
          inputValue = "" + state.inputValue + lowercasedKey,
          prevHighlightedIndex =
            !state.isOpen && state.selectedItem
              ? props.items.findIndex(function (item) {
                  return (
                    props.itemToKey(item) ===
                    props.itemToKey(state.selectedItem)
                  );
                })
              : state.highlightedIndex,
          highlightedIndex = getItemIndexByCharacterKey({
            keysSoFar: inputValue,
            highlightedIndex: prevHighlightedIndex,
            items: props.items,
            itemToString: props.itemToString,
            isItemDisabled: props.isItemDisabled,
          });
        changes = { inputValue, highlightedIndex, isOpen: !0 };
      }
      break;
    case ToggleButtonKeyDownArrowDown:
      {
        var _highlightedIndex = state.isOpen
          ? getHighlightedIndex(
              state.highlightedIndex,
              1,
              props.items,
              props.isItemDisabled,
            )
          : altKey && state.selectedItem == null
            ? -1
            : getHighlightedIndexOnOpen(props, state, 1);
        changes = { highlightedIndex: _highlightedIndex, isOpen: !0 };
      }
      break;
    case ToggleButtonKeyDownArrowUp:
      if (state.isOpen && altKey)
        changes = getChangesOnSelection(props, state.highlightedIndex, !1);
      else {
        var _highlightedIndex2 = state.isOpen
          ? getHighlightedIndex(
              state.highlightedIndex,
              -1,
              props.items,
              props.isItemDisabled,
            )
          : getHighlightedIndexOnOpen(props, state, -1);
        changes = { highlightedIndex: _highlightedIndex2, isOpen: !0 };
      }
      break;
    case ToggleButtonKeyDownEnter:
    case ToggleButtonKeyDownSpaceButton:
      changes = getChangesOnSelection(props, state.highlightedIndex, !1);
      break;
    case ToggleButtonKeyDownHome:
      changes = {
        highlightedIndex: getNonDisabledIndex(
          0,
          !1,
          props.items,
          props.isItemDisabled,
        ),
        isOpen: !0,
      };
      break;
    case ToggleButtonKeyDownEnd:
      changes = {
        highlightedIndex: getNonDisabledIndex(
          props.items.length - 1,
          !0,
          props.items,
          props.isItemDisabled,
        ),
        isOpen: !0,
      };
      break;
    case ToggleButtonKeyDownPageUp:
      changes = {
        highlightedIndex: getHighlightedIndex(
          state.highlightedIndex,
          -10,
          props.items,
          props.isItemDisabled,
        ),
      };
      break;
    case ToggleButtonKeyDownPageDown:
      changes = {
        highlightedIndex: getHighlightedIndex(
          state.highlightedIndex,
          10,
          props.items,
          props.isItemDisabled,
        ),
      };
      break;
    case ToggleButtonKeyDownEscape:
      changes = { isOpen: !1, highlightedIndex: -1 };
      break;
    case ToggleButtonBlur:
      changes = _extends(
        { isOpen: !1, highlightedIndex: -1 },
        state.highlightedIndex >= 0 &&
          ((_props$items = props.items) == null
            ? void 0
            : _props$items.length) && {
            selectedItem: props.items[state.highlightedIndex],
          },
      );
      break;
    case FunctionSelectItem$1:
      changes = { selectedItem: action.selectedItem };
      break;
    default:
      return downshiftCommonReducer(state, action, stateChangeTypes$2);
  }
  return _extends({}, state, changes);
}
var _excluded$2 = ["onClick"],
  _excluded2$2 = ["onMouseLeave", "refKey", "ref"],
  _excluded3$1 = ["onBlur", "onClick", "onPress", "onKeyDown", "refKey", "ref"],
  _excluded4$1 = [
    "item",
    "index",
    "onMouseMove",
    "onClick",
    "onMouseDown",
    "onPress",
    "refKey",
    "disabled",
    "ref",
  ];
useSelect.stateChangeTypes = stateChangeTypes$2;
function useSelect(userProps) {
  userProps === void 0 && (userProps = {}),
    validatePropTypes$2(userProps, useSelect);
  var props = _extends({}, defaultProps$2, userProps),
    scrollIntoView3 = props.scrollIntoView,
    environment = props.environment,
    getA11yStatusMessage2 = props.getA11yStatusMessage,
    _useControlledReducer = useControlledReducer$1(
      downshiftSelectReducer,
      props,
      getInitialState$2,
      isDropdownsStateEqual,
    ),
    state = _useControlledReducer[0],
    dispatch = _useControlledReducer[1],
    isOpen = state.isOpen,
    highlightedIndex = state.highlightedIndex,
    selectedItem = state.selectedItem,
    inputValue = state.inputValue,
    toggleButtonRef = (0, import_react20.useRef)(null),
    menuRef = (0, import_react20.useRef)(null),
    itemRefs = (0, import_react20.useRef)({}),
    clearTimeoutRef = (0, import_react20.useRef)(null),
    elementIds = useElementIds(props),
    latest = useLatestRef({ state, props }),
    getItemNodeFromIndex = (0, import_react20.useCallback)(
      function (index) {
        return itemRefs.current[elementIds.getItemId(index)];
      },
      [elementIds],
    );
  useA11yMessageStatus(
    getA11yStatusMessage2,
    state,
    [isOpen, highlightedIndex, selectedItem, inputValue],
    environment,
  );
  var shouldScrollRef = useScrollIntoView({
    menuElement: menuRef.current,
    highlightedIndex,
    isOpen,
    itemRefs,
    scrollIntoView: scrollIntoView3,
    getItemNodeFromIndex,
  });
  (0, import_react20.useEffect)(function () {
    return (
      (clearTimeoutRef.current = debounce(function (outerDispatch) {
        outerDispatch({ type: FunctionSetInputValue$1, inputValue: "" });
      }, 500)),
      function () {
        clearTimeoutRef.current.cancel();
      }
    );
  }, []),
    (0, import_react20.useEffect)(
      function () {
        inputValue && clearTimeoutRef.current(dispatch);
      },
      [dispatch, inputValue],
    ),
    useControlPropsValidator({ props, state }),
    (0, import_react20.useEffect)(function () {
      var focusOnOpen = getInitialValue$1(props, "isOpen");
      focusOnOpen && toggleButtonRef.current && toggleButtonRef.current.focus();
    }, []);
  var mouseAndTouchTrackers = useMouseAndTouchTracker(
      environment,
      [toggleButtonRef, menuRef],
      (0, import_react20.useCallback)(
        function () {
          latest.current.state.isOpen && dispatch({ type: ToggleButtonBlur });
        },
        [dispatch, latest],
      ),
    ),
    setGetterPropCallInfo = useGetterPropsCalledChecker(
      "getMenuProps",
      "getToggleButtonProps",
    );
  (0, import_react20.useEffect)(
    function () {
      isOpen || (itemRefs.current = {});
    },
    [isOpen],
  );
  var toggleButtonKeyDownHandlers = (0, import_react20.useMemo)(
      function () {
        return {
          ArrowDown: function (event) {
            event.preventDefault(),
              dispatch({
                type: ToggleButtonKeyDownArrowDown,
                altKey: event.altKey,
              });
          },
          ArrowUp: function (event) {
            event.preventDefault(),
              dispatch({
                type: ToggleButtonKeyDownArrowUp,
                altKey: event.altKey,
              });
          },
          Home: function (event) {
            event.preventDefault(), dispatch({ type: ToggleButtonKeyDownHome });
          },
          End: function (event) {
            event.preventDefault(), dispatch({ type: ToggleButtonKeyDownEnd });
          },
          Escape: function () {
            latest.current.state.isOpen &&
              dispatch({ type: ToggleButtonKeyDownEscape });
          },
          Enter: function (event) {
            event.preventDefault(),
              dispatch({
                type: latest.current.state.isOpen
                  ? ToggleButtonKeyDownEnter
                  : ToggleButtonClick$1,
              });
          },
          PageUp: function (event) {
            latest.current.state.isOpen &&
              (event.preventDefault(),
              dispatch({ type: ToggleButtonKeyDownPageUp }));
          },
          PageDown: function (event) {
            latest.current.state.isOpen &&
              (event.preventDefault(),
              dispatch({ type: ToggleButtonKeyDownPageDown }));
          },
          " ": function (event) {
            event.preventDefault();
            var currentState = latest.current.state;
            if (!currentState.isOpen) {
              dispatch({ type: ToggleButtonClick$1 });
              return;
            }
            currentState.inputValue
              ? dispatch({ type: ToggleButtonKeyDownCharacter, key: " " })
              : dispatch({ type: ToggleButtonKeyDownSpaceButton });
          },
        };
      },
      [dispatch, latest],
    ),
    toggleMenu = (0, import_react20.useCallback)(
      function () {
        dispatch({ type: FunctionToggleMenu$1 });
      },
      [dispatch],
    ),
    closeMenu = (0, import_react20.useCallback)(
      function () {
        dispatch({ type: FunctionCloseMenu$1 });
      },
      [dispatch],
    ),
    openMenu = (0, import_react20.useCallback)(
      function () {
        dispatch({ type: FunctionOpenMenu$1 });
      },
      [dispatch],
    ),
    setHighlightedIndex = (0, import_react20.useCallback)(
      function (newHighlightedIndex) {
        dispatch({
          type: FunctionSetHighlightedIndex$1,
          highlightedIndex: newHighlightedIndex,
        });
      },
      [dispatch],
    ),
    selectItem = (0, import_react20.useCallback)(
      function (newSelectedItem) {
        dispatch({ type: FunctionSelectItem$1, selectedItem: newSelectedItem });
      },
      [dispatch],
    ),
    reset = (0, import_react20.useCallback)(
      function () {
        dispatch({ type: FunctionReset$2 });
      },
      [dispatch],
    ),
    setInputValue = (0, import_react20.useCallback)(
      function (newInputValue) {
        dispatch({ type: FunctionSetInputValue$1, inputValue: newInputValue });
      },
      [dispatch],
    ),
    getLabelProps = (0, import_react20.useCallback)(
      function (_temp) {
        var _ref = _temp === void 0 ? {} : _temp,
          onClick = _ref.onClick,
          labelProps = _objectWithoutPropertiesLoose(_ref, _excluded$2),
          labelHandleClick = function () {
            var _toggleButtonRef$curr;
            (_toggleButtonRef$curr = toggleButtonRef.current) == null ||
              _toggleButtonRef$curr.focus();
          };
        return _extends(
          {
            id: elementIds.labelId,
            htmlFor: elementIds.toggleButtonId,
            onClick: callAllEventHandlers(onClick, labelHandleClick),
          },
          labelProps,
        );
      },
      [elementIds],
    ),
    getMenuProps = (0, import_react20.useCallback)(
      function (_temp2, _temp3) {
        var _extends2,
          _ref2 = _temp2 === void 0 ? {} : _temp2,
          onMouseLeave = _ref2.onMouseLeave,
          _ref2$refKey = _ref2.refKey,
          refKey = _ref2$refKey === void 0 ? "ref" : _ref2$refKey,
          ref = _ref2.ref,
          rest = _objectWithoutPropertiesLoose(_ref2, _excluded2$2),
          _ref3 = _temp3 === void 0 ? {} : _temp3,
          _ref3$suppressRefErro = _ref3.suppressRefError,
          suppressRefError =
            _ref3$suppressRefErro === void 0 ? !1 : _ref3$suppressRefErro,
          menuHandleMouseLeave = function () {
            dispatch({ type: MenuMouseLeave$1 });
          };
        return (
          setGetterPropCallInfo(
            "getMenuProps",
            suppressRefError,
            refKey,
            menuRef,
          ),
          _extends(
            ((_extends2 = {}),
            (_extends2[refKey] = handleRefs(ref, function (menuNode) {
              menuRef.current = menuNode;
            })),
            (_extends2.id = elementIds.menuId),
            (_extends2.role = "listbox"),
            (_extends2["aria-labelledby"] =
              rest && rest["aria-label"] ? void 0 : "" + elementIds.labelId),
            (_extends2.onMouseLeave = callAllEventHandlers(
              onMouseLeave,
              menuHandleMouseLeave,
            )),
            _extends2),
            rest,
          )
        );
      },
      [dispatch, setGetterPropCallInfo, elementIds],
    ),
    getToggleButtonProps = (0, import_react20.useCallback)(
      function (_temp4, _temp5) {
        var _extends3,
          _ref4 = _temp4 === void 0 ? {} : _temp4,
          onBlur = _ref4.onBlur,
          onClick = _ref4.onClick;
        _ref4.onPress;
        var onKeyDown = _ref4.onKeyDown,
          _ref4$refKey = _ref4.refKey,
          refKey = _ref4$refKey === void 0 ? "ref" : _ref4$refKey,
          ref = _ref4.ref,
          rest = _objectWithoutPropertiesLoose(_ref4, _excluded3$1),
          _ref5 = _temp5 === void 0 ? {} : _temp5,
          _ref5$suppressRefErro = _ref5.suppressRefError,
          suppressRefError =
            _ref5$suppressRefErro === void 0 ? !1 : _ref5$suppressRefErro,
          latestState = latest.current.state,
          toggleButtonHandleClick = function () {
            dispatch({ type: ToggleButtonClick$1 });
          },
          toggleButtonHandleBlur = function () {
            latestState.isOpen &&
              !mouseAndTouchTrackers.isMouseDown &&
              dispatch({ type: ToggleButtonBlur });
          },
          toggleButtonHandleKeyDown = function (event) {
            var key = normalizeArrowKey(event);
            key && toggleButtonKeyDownHandlers[key]
              ? toggleButtonKeyDownHandlers[key](event)
              : isAcceptedCharacterKey(key) &&
                dispatch({ type: ToggleButtonKeyDownCharacter, key });
          },
          toggleProps = _extends(
            ((_extends3 = {}),
            (_extends3[refKey] = handleRefs(ref, function (toggleButtonNode) {
              toggleButtonRef.current = toggleButtonNode;
            })),
            (_extends3["aria-activedescendant"] =
              latestState.isOpen && latestState.highlightedIndex > -1
                ? elementIds.getItemId(latestState.highlightedIndex)
                : ""),
            (_extends3["aria-controls"] = elementIds.menuId),
            (_extends3["aria-expanded"] = latest.current.state.isOpen),
            (_extends3["aria-haspopup"] = "listbox"),
            (_extends3["aria-labelledby"] =
              rest && rest["aria-label"] ? void 0 : "" + elementIds.labelId),
            (_extends3.id = elementIds.toggleButtonId),
            (_extends3.role = "combobox"),
            (_extends3.tabIndex = 0),
            (_extends3.onBlur = callAllEventHandlers(
              onBlur,
              toggleButtonHandleBlur,
            )),
            _extends3),
            rest,
          );
        return (
          rest.disabled ||
            ((toggleProps.onClick = callAllEventHandlers(
              onClick,
              toggleButtonHandleClick,
            )),
            (toggleProps.onKeyDown = callAllEventHandlers(
              onKeyDown,
              toggleButtonHandleKeyDown,
            ))),
          setGetterPropCallInfo(
            "getToggleButtonProps",
            suppressRefError,
            refKey,
            toggleButtonRef,
          ),
          toggleProps
        );
      },
      [
        dispatch,
        elementIds,
        latest,
        mouseAndTouchTrackers,
        setGetterPropCallInfo,
        toggleButtonKeyDownHandlers,
      ],
    ),
    getItemProps = (0, import_react20.useCallback)(
      function (_temp6) {
        var _extends4,
          _ref6 = _temp6 === void 0 ? {} : _temp6,
          itemProp = _ref6.item,
          indexProp = _ref6.index,
          onMouseMove = _ref6.onMouseMove,
          onClick = _ref6.onClick,
          onMouseDown = _ref6.onMouseDown;
        _ref6.onPress;
        var _ref6$refKey = _ref6.refKey,
          refKey = _ref6$refKey === void 0 ? "ref" : _ref6$refKey,
          disabledProp = _ref6.disabled,
          ref = _ref6.ref,
          rest = _objectWithoutPropertiesLoose(_ref6, _excluded4$1);
        disabledProp !== void 0 &&
          console.warn(
            'Passing "disabled" as an argument to getItemProps is not supported anymore. Please use the isItemDisabled prop from useSelect.',
          );
        var _latest$current = latest.current,
          latestState = _latest$current.state,
          latestProps = _latest$current.props,
          _getItemAndIndex = getItemAndIndex(
            itemProp,
            indexProp,
            latestProps.items,
            "Pass either item or index to getItemProps!",
          ),
          item = _getItemAndIndex[0],
          index = _getItemAndIndex[1],
          disabled = latestProps.isItemDisabled(item, index),
          itemHandleMouseMove = function () {
            mouseAndTouchTrackers.isTouchEnd ||
              index === latestState.highlightedIndex ||
              ((shouldScrollRef.current = !1),
              dispatch({ type: ItemMouseMove$1, index, disabled }));
          },
          itemHandleClick = function () {
            dispatch({ type: ItemClick$1, index });
          },
          itemHandleMouseDown = function (e3) {
            return e3.preventDefault();
          },
          itemProps = _extends(
            ((_extends4 = {}),
            (_extends4[refKey] = handleRefs(ref, function (itemNode) {
              itemNode &&
                (itemRefs.current[elementIds.getItemId(index)] = itemNode);
            })),
            (_extends4["aria-disabled"] = disabled),
            (_extends4["aria-selected"] =
              "" + (item === latestState.selectedItem)),
            (_extends4.id = elementIds.getItemId(index)),
            (_extends4.role = "option"),
            _extends4),
            rest,
          );
        return (
          disabled ||
            (itemProps.onClick = callAllEventHandlers(
              onClick,
              itemHandleClick,
            )),
          (itemProps.onMouseMove = callAllEventHandlers(
            onMouseMove,
            itemHandleMouseMove,
          )),
          (itemProps.onMouseDown = callAllEventHandlers(
            onMouseDown,
            itemHandleMouseDown,
          )),
          itemProps
        );
      },
      [latest, elementIds, mouseAndTouchTrackers, shouldScrollRef, dispatch],
    );
  return {
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getItemProps,
    toggleMenu,
    openMenu,
    closeMenu,
    setHighlightedIndex,
    selectItem,
    reset,
    setInputValue,
    highlightedIndex,
    isOpen,
    selectedItem,
    inputValue,
  };
}
var InputKeyDownArrowDown = "__input_keydown_arrow_down__",
  InputKeyDownArrowUp = "__input_keydown_arrow_up__",
  InputKeyDownEscape = "__input_keydown_escape__",
  InputKeyDownHome = "__input_keydown_home__",
  InputKeyDownEnd = "__input_keydown_end__",
  InputKeyDownPageUp = "__input_keydown_page_up__",
  InputKeyDownPageDown = "__input_keydown_page_down__",
  InputKeyDownEnter = "__input_keydown_enter__",
  InputChange = "__input_change__",
  InputBlur = "__input_blur__",
  InputClick = "__input_click__",
  MenuMouseLeave = "__menu_mouse_leave__",
  ItemMouseMove = "__item_mouse_move__",
  ItemClick = "__item_click__",
  ToggleButtonClick = "__togglebutton_click__",
  FunctionToggleMenu = "__function_toggle_menu__",
  FunctionOpenMenu = "__function_open_menu__",
  FunctionCloseMenu = "__function_close_menu__",
  FunctionSetHighlightedIndex = "__function_set_highlighted_index__",
  FunctionSelectItem = "__function_select_item__",
  FunctionSetInputValue = "__function_set_input_value__",
  FunctionReset$1 = "__function_reset__",
  ControlledPropUpdatedSelectedItem =
    "__controlled_prop_updated_selected_item__",
  stateChangeTypes$1 = Object.freeze({
    __proto__: null,
    InputKeyDownArrowDown,
    InputKeyDownArrowUp,
    InputKeyDownEscape,
    InputKeyDownHome,
    InputKeyDownEnd,
    InputKeyDownPageUp,
    InputKeyDownPageDown,
    InputKeyDownEnter,
    InputChange,
    InputBlur,
    InputClick,
    MenuMouseLeave,
    ItemMouseMove,
    ItemClick,
    ToggleButtonClick,
    FunctionToggleMenu,
    FunctionOpenMenu,
    FunctionCloseMenu,
    FunctionSetHighlightedIndex,
    FunctionSelectItem,
    FunctionSetInputValue,
    FunctionReset: FunctionReset$1,
    ControlledPropUpdatedSelectedItem,
  });
function getInitialState$1(props) {
  var initialState = getInitialState$2(props),
    selectedItem = initialState.selectedItem,
    inputValue = initialState.inputValue;
  return (
    inputValue === "" &&
      selectedItem &&
      props.defaultInputValue === void 0 &&
      props.initialInputValue === void 0 &&
      props.inputValue === void 0 &&
      (inputValue = props.itemToString(selectedItem)),
    _extends({}, initialState, { inputValue })
  );
}
var propTypes$1 = _extends({}, commonDropdownPropTypes, {
  items: import_prop_types2.default.array.isRequired,
  isItemDisabled: import_prop_types2.default.func,
  inputValue: import_prop_types2.default.string,
  defaultInputValue: import_prop_types2.default.string,
  initialInputValue: import_prop_types2.default.string,
  inputId: import_prop_types2.default.string,
  onInputValueChange: import_prop_types2.default.func,
});
function useControlledReducer(
  reducer,
  props,
  createInitialState,
  isStateEqual2,
) {
  var previousSelectedItemRef = (0, import_react20.useRef)(),
    _useEnhancedReducer = useEnhancedReducer(
      reducer,
      props,
      createInitialState,
      isStateEqual2,
    ),
    state = _useEnhancedReducer[0],
    dispatch = _useEnhancedReducer[1],
    isInitialMount = useIsInitialMount();
  return (
    (0, import_react20.useEffect)(
      function () {
        if (isControlledProp(props, "selectedItem")) {
          if (!isInitialMount) {
            var shouldCallDispatch =
              props.itemToKey(props.selectedItem) !==
              props.itemToKey(previousSelectedItemRef.current);
            shouldCallDispatch &&
              dispatch({
                type: ControlledPropUpdatedSelectedItem,
                inputValue: props.itemToString(props.selectedItem),
              });
          }
          previousSelectedItemRef.current =
            state.selectedItem === previousSelectedItemRef.current
              ? props.selectedItem
              : state.selectedItem;
        }
      },
      [state.selectedItem, props.selectedItem],
    ),
    [getState(state, props), dispatch]
  );
}
var validatePropTypes$1 = noop2;
validatePropTypes$1 = function (options2, caller) {
  import_prop_types2.default.checkPropTypes(
    propTypes$1,
    options2,
    "prop",
    caller.name,
  );
};
var defaultProps$1 = _extends({}, defaultProps$3, {
  isItemDisabled: function () {
    return !1;
  },
});
function downshiftUseComboboxReducer(state, action) {
  var _props$items,
    type = action.type,
    props = action.props,
    altKey = action.altKey,
    changes;
  switch (type) {
    case ItemClick:
      changes = {
        isOpen: getDefaultValue$1(props, "isOpen"),
        highlightedIndex: getDefaultValue$1(props, "highlightedIndex"),
        selectedItem: props.items[action.index],
        inputValue: props.itemToString(props.items[action.index]),
      };
      break;
    case InputKeyDownArrowDown:
      state.isOpen
        ? (changes = {
            highlightedIndex: getHighlightedIndex(
              state.highlightedIndex,
              1,
              props.items,
              props.isItemDisabled,
              !0,
            ),
          })
        : (changes = {
            highlightedIndex:
              altKey && state.selectedItem == null
                ? -1
                : getHighlightedIndexOnOpen(props, state, 1),
            isOpen: props.items.length >= 0,
          });
      break;
    case InputKeyDownArrowUp:
      state.isOpen
        ? altKey
          ? (changes = getChangesOnSelection(props, state.highlightedIndex))
          : (changes = {
              highlightedIndex: getHighlightedIndex(
                state.highlightedIndex,
                -1,
                props.items,
                props.isItemDisabled,
                !0,
              ),
            })
        : (changes = {
            highlightedIndex: getHighlightedIndexOnOpen(props, state, -1),
            isOpen: props.items.length >= 0,
          });
      break;
    case InputKeyDownEnter:
      changes = getChangesOnSelection(props, state.highlightedIndex);
      break;
    case InputKeyDownEscape:
      changes = _extends(
        { isOpen: !1, highlightedIndex: -1 },
        !state.isOpen && { selectedItem: null, inputValue: "" },
      );
      break;
    case InputKeyDownPageUp:
      changes = {
        highlightedIndex: getHighlightedIndex(
          state.highlightedIndex,
          -10,
          props.items,
          props.isItemDisabled,
          !0,
        ),
      };
      break;
    case InputKeyDownPageDown:
      changes = {
        highlightedIndex: getHighlightedIndex(
          state.highlightedIndex,
          10,
          props.items,
          props.isItemDisabled,
          !0,
        ),
      };
      break;
    case InputKeyDownHome:
      changes = {
        highlightedIndex: getNonDisabledIndex(
          0,
          !1,
          props.items,
          props.isItemDisabled,
        ),
      };
      break;
    case InputKeyDownEnd:
      changes = {
        highlightedIndex: getNonDisabledIndex(
          props.items.length - 1,
          !0,
          props.items,
          props.isItemDisabled,
        ),
      };
      break;
    case InputBlur:
      changes = _extends(
        { isOpen: !1, highlightedIndex: -1 },
        state.highlightedIndex >= 0 &&
          ((_props$items = props.items) == null
            ? void 0
            : _props$items.length) &&
          action.selectItem && {
            selectedItem: props.items[state.highlightedIndex],
            inputValue: props.itemToString(props.items[state.highlightedIndex]),
          },
      );
      break;
    case InputChange:
      changes = {
        isOpen: !0,
        highlightedIndex: getDefaultValue$1(props, "highlightedIndex"),
        inputValue: action.inputValue,
      };
      break;
    case InputClick:
      changes = {
        isOpen: !state.isOpen,
        highlightedIndex: state.isOpen
          ? -1
          : getHighlightedIndexOnOpen(props, state, 0),
      };
      break;
    case FunctionSelectItem:
      changes = {
        selectedItem: action.selectedItem,
        inputValue: props.itemToString(action.selectedItem),
      };
      break;
    case ControlledPropUpdatedSelectedItem:
      changes = { inputValue: action.inputValue };
      break;
    default:
      return downshiftCommonReducer(state, action, stateChangeTypes$1);
  }
  return _extends({}, state, changes);
}
var _excluded$1 = ["onMouseLeave", "refKey", "ref"],
  _excluded2$1 = [
    "item",
    "index",
    "refKey",
    "ref",
    "onMouseMove",
    "onMouseDown",
    "onClick",
    "onPress",
    "disabled",
  ],
  _excluded3 = ["onClick", "onPress", "refKey", "ref"],
  _excluded4 = [
    "onKeyDown",
    "onChange",
    "onInput",
    "onBlur",
    "onChangeText",
    "onClick",
    "refKey",
    "ref",
  ];
useCombobox.stateChangeTypes = stateChangeTypes$1;
function useCombobox(userProps) {
  userProps === void 0 && (userProps = {}),
    validatePropTypes$1(userProps, useCombobox);
  var props = _extends({}, defaultProps$1, userProps),
    items = props.items,
    scrollIntoView3 = props.scrollIntoView,
    environment = props.environment,
    getA11yStatusMessage2 = props.getA11yStatusMessage,
    _useControlledReducer = useControlledReducer(
      downshiftUseComboboxReducer,
      props,
      getInitialState$1,
      isDropdownsStateEqual,
    ),
    state = _useControlledReducer[0],
    dispatch = _useControlledReducer[1],
    isOpen = state.isOpen,
    highlightedIndex = state.highlightedIndex,
    selectedItem = state.selectedItem,
    inputValue = state.inputValue,
    menuRef = (0, import_react20.useRef)(null),
    itemRefs = (0, import_react20.useRef)({}),
    inputRef = (0, import_react20.useRef)(null),
    toggleButtonRef = (0, import_react20.useRef)(null),
    isInitialMount = useIsInitialMount(),
    elementIds = useElementIds(props),
    previousResultCountRef = (0, import_react20.useRef)(),
    latest = useLatestRef({ state, props }),
    getItemNodeFromIndex = (0, import_react20.useCallback)(
      function (index) {
        return itemRefs.current[elementIds.getItemId(index)];
      },
      [elementIds],
    );
  useA11yMessageStatus(
    getA11yStatusMessage2,
    state,
    [isOpen, highlightedIndex, selectedItem, inputValue],
    environment,
  );
  var shouldScrollRef = useScrollIntoView({
    menuElement: menuRef.current,
    highlightedIndex,
    isOpen,
    itemRefs,
    scrollIntoView: scrollIntoView3,
    getItemNodeFromIndex,
  });
  useControlPropsValidator({ props, state }),
    (0, import_react20.useEffect)(function () {
      var focusOnOpen = getInitialValue$1(props, "isOpen");
      focusOnOpen && inputRef.current && inputRef.current.focus();
    }, []),
    (0, import_react20.useEffect)(function () {
      isInitialMount || (previousResultCountRef.current = items.length);
    });
  var mouseAndTouchTrackers = useMouseAndTouchTracker(
      environment,
      [toggleButtonRef, menuRef, inputRef],
      (0, import_react20.useCallback)(
        function () {
          latest.current.state.isOpen &&
            dispatch({ type: InputBlur, selectItem: !1 });
        },
        [dispatch, latest],
      ),
    ),
    setGetterPropCallInfo = useGetterPropsCalledChecker(
      "getInputProps",
      "getMenuProps",
    );
  (0, import_react20.useEffect)(
    function () {
      isOpen || (itemRefs.current = {});
    },
    [isOpen],
  ),
    (0, import_react20.useEffect)(
      function () {
        var _inputRef$current;
        !isOpen ||
          !(environment != null && environment.document) ||
          !(
            inputRef != null &&
            (_inputRef$current = inputRef.current) != null &&
            _inputRef$current.focus
          ) ||
          (environment.document.activeElement !== inputRef.current &&
            inputRef.current.focus());
      },
      [isOpen, environment],
    );
  var inputKeyDownHandlers = (0, import_react20.useMemo)(
      function () {
        return {
          ArrowDown: function (event) {
            event.preventDefault(),
              dispatch({ type: InputKeyDownArrowDown, altKey: event.altKey });
          },
          ArrowUp: function (event) {
            event.preventDefault(),
              dispatch({ type: InputKeyDownArrowUp, altKey: event.altKey });
          },
          Home: function (event) {
            latest.current.state.isOpen &&
              (event.preventDefault(), dispatch({ type: InputKeyDownHome }));
          },
          End: function (event) {
            latest.current.state.isOpen &&
              (event.preventDefault(), dispatch({ type: InputKeyDownEnd }));
          },
          Escape: function (event) {
            var latestState = latest.current.state;
            (latestState.isOpen ||
              latestState.inputValue ||
              latestState.selectedItem ||
              latestState.highlightedIndex > -1) &&
              (event.preventDefault(), dispatch({ type: InputKeyDownEscape }));
          },
          Enter: function (event) {
            var latestState = latest.current.state;
            !latestState.isOpen ||
              event.which === 229 ||
              (event.preventDefault(), dispatch({ type: InputKeyDownEnter }));
          },
          PageUp: function (event) {
            latest.current.state.isOpen &&
              (event.preventDefault(), dispatch({ type: InputKeyDownPageUp }));
          },
          PageDown: function (event) {
            latest.current.state.isOpen &&
              (event.preventDefault(),
              dispatch({ type: InputKeyDownPageDown }));
          },
        };
      },
      [dispatch, latest],
    ),
    getLabelProps = (0, import_react20.useCallback)(
      function (labelProps) {
        return _extends(
          { id: elementIds.labelId, htmlFor: elementIds.inputId },
          labelProps,
        );
      },
      [elementIds],
    ),
    getMenuProps = (0, import_react20.useCallback)(
      function (_temp, _temp2) {
        var _extends2,
          _ref = _temp === void 0 ? {} : _temp,
          onMouseLeave = _ref.onMouseLeave,
          _ref$refKey = _ref.refKey,
          refKey = _ref$refKey === void 0 ? "ref" : _ref$refKey,
          ref = _ref.ref,
          rest = _objectWithoutPropertiesLoose(_ref, _excluded$1),
          _ref2 = _temp2 === void 0 ? {} : _temp2,
          _ref2$suppressRefErro = _ref2.suppressRefError,
          suppressRefError =
            _ref2$suppressRefErro === void 0 ? !1 : _ref2$suppressRefErro;
        return (
          setGetterPropCallInfo(
            "getMenuProps",
            suppressRefError,
            refKey,
            menuRef,
          ),
          _extends(
            ((_extends2 = {}),
            (_extends2[refKey] = handleRefs(ref, function (menuNode) {
              menuRef.current = menuNode;
            })),
            (_extends2.id = elementIds.menuId),
            (_extends2.role = "listbox"),
            (_extends2["aria-labelledby"] =
              rest && rest["aria-label"] ? void 0 : "" + elementIds.labelId),
            (_extends2.onMouseLeave = callAllEventHandlers(
              onMouseLeave,
              function () {
                dispatch({ type: MenuMouseLeave });
              },
            )),
            _extends2),
            rest,
          )
        );
      },
      [dispatch, setGetterPropCallInfo, elementIds],
    ),
    getItemProps = (0, import_react20.useCallback)(
      function (_temp3) {
        var _extends3,
          _ref4,
          _ref3 = _temp3 === void 0 ? {} : _temp3,
          itemProp = _ref3.item,
          indexProp = _ref3.index,
          _ref3$refKey = _ref3.refKey,
          refKey = _ref3$refKey === void 0 ? "ref" : _ref3$refKey,
          ref = _ref3.ref,
          onMouseMove = _ref3.onMouseMove,
          onMouseDown = _ref3.onMouseDown,
          onClick = _ref3.onClick;
        _ref3.onPress;
        var disabledProp = _ref3.disabled,
          rest = _objectWithoutPropertiesLoose(_ref3, _excluded2$1);
        disabledProp !== void 0 &&
          console.warn(
            'Passing "disabled" as an argument to getItemProps is not supported anymore. Please use the isItemDisabled prop from useCombobox.',
          );
        var _latest$current = latest.current,
          latestProps = _latest$current.props,
          latestState = _latest$current.state,
          _getItemAndIndex = getItemAndIndex(
            itemProp,
            indexProp,
            latestProps.items,
            "Pass either item or index to getItemProps!",
          ),
          item = _getItemAndIndex[0],
          index = _getItemAndIndex[1],
          disabled = latestProps.isItemDisabled(item, index),
          onSelectKey = "onClick",
          customClickHandler = onClick,
          itemHandleMouseMove = function () {
            mouseAndTouchTrackers.isTouchEnd ||
              index === latestState.highlightedIndex ||
              ((shouldScrollRef.current = !1),
              dispatch({ type: ItemMouseMove, index, disabled }));
          },
          itemHandleClick = function () {
            dispatch({ type: ItemClick, index });
          },
          itemHandleMouseDown = function (e3) {
            return e3.preventDefault();
          };
        return _extends(
          ((_extends3 = {}),
          (_extends3[refKey] = handleRefs(ref, function (itemNode) {
            itemNode &&
              (itemRefs.current[elementIds.getItemId(index)] = itemNode);
          })),
          (_extends3["aria-disabled"] = disabled),
          (_extends3["aria-selected"] =
            "" + (index === latestState.highlightedIndex)),
          (_extends3.id = elementIds.getItemId(index)),
          (_extends3.role = "option"),
          _extends3),
          !disabled &&
            ((_ref4 = {}),
            (_ref4[onSelectKey] = callAllEventHandlers(
              customClickHandler,
              itemHandleClick,
            )),
            _ref4),
          {
            onMouseMove: callAllEventHandlers(onMouseMove, itemHandleMouseMove),
            onMouseDown: callAllEventHandlers(onMouseDown, itemHandleMouseDown),
          },
          rest,
        );
      },
      [dispatch, elementIds, latest, mouseAndTouchTrackers, shouldScrollRef],
    ),
    getToggleButtonProps = (0, import_react20.useCallback)(
      function (_temp4) {
        var _extends4,
          _ref5 = _temp4 === void 0 ? {} : _temp4,
          onClick = _ref5.onClick;
        _ref5.onPress;
        var _ref5$refKey = _ref5.refKey,
          refKey = _ref5$refKey === void 0 ? "ref" : _ref5$refKey,
          ref = _ref5.ref,
          rest = _objectWithoutPropertiesLoose(_ref5, _excluded3),
          latestState = latest.current.state,
          toggleButtonHandleClick = function () {
            dispatch({ type: ToggleButtonClick });
          };
        return _extends(
          ((_extends4 = {}),
          (_extends4[refKey] = handleRefs(ref, function (toggleButtonNode) {
            toggleButtonRef.current = toggleButtonNode;
          })),
          (_extends4["aria-controls"] = elementIds.menuId),
          (_extends4["aria-expanded"] = latestState.isOpen),
          (_extends4.id = elementIds.toggleButtonId),
          (_extends4.tabIndex = -1),
          _extends4),
          !rest.disabled &&
            _extends(
              {},
              {
                onClick: callAllEventHandlers(onClick, toggleButtonHandleClick),
              },
            ),
          rest,
        );
      },
      [dispatch, latest, elementIds],
    ),
    getInputProps = (0, import_react20.useCallback)(
      function (_temp5, _temp6) {
        var _extends5,
          _ref6 = _temp5 === void 0 ? {} : _temp5,
          onKeyDown = _ref6.onKeyDown,
          onChange = _ref6.onChange,
          onInput = _ref6.onInput,
          onBlur = _ref6.onBlur;
        _ref6.onChangeText;
        var onClick = _ref6.onClick,
          _ref6$refKey = _ref6.refKey,
          refKey = _ref6$refKey === void 0 ? "ref" : _ref6$refKey,
          ref = _ref6.ref,
          rest = _objectWithoutPropertiesLoose(_ref6, _excluded4),
          _ref7 = _temp6 === void 0 ? {} : _temp6,
          _ref7$suppressRefErro = _ref7.suppressRefError,
          suppressRefError =
            _ref7$suppressRefErro === void 0 ? !1 : _ref7$suppressRefErro;
        setGetterPropCallInfo(
          "getInputProps",
          suppressRefError,
          refKey,
          inputRef,
        );
        var latestState = latest.current.state,
          inputHandleKeyDown = function (event) {
            var key = normalizeArrowKey(event);
            key &&
              inputKeyDownHandlers[key] &&
              inputKeyDownHandlers[key](event);
          },
          inputHandleChange = function (event) {
            dispatch({ type: InputChange, inputValue: event.target.value });
          },
          inputHandleBlur = function (event) {
            if (
              environment != null &&
              environment.document &&
              latestState.isOpen &&
              !mouseAndTouchTrackers.isMouseDown
            ) {
              var isBlurByTabChange =
                event.relatedTarget === null &&
                environment.document.activeElement !==
                  environment.document.body;
              dispatch({ type: InputBlur, selectItem: !isBlurByTabChange });
            }
          },
          inputHandleClick = function () {
            dispatch({ type: InputClick });
          },
          onChangeKey = "onChange",
          eventHandlers = {};
        if (!rest.disabled) {
          var _eventHandlers;
          eventHandlers =
            ((_eventHandlers = {}),
            (_eventHandlers[onChangeKey] = callAllEventHandlers(
              onChange,
              onInput,
              inputHandleChange,
            )),
            (_eventHandlers.onKeyDown = callAllEventHandlers(
              onKeyDown,
              inputHandleKeyDown,
            )),
            (_eventHandlers.onBlur = callAllEventHandlers(
              onBlur,
              inputHandleBlur,
            )),
            (_eventHandlers.onClick = callAllEventHandlers(
              onClick,
              inputHandleClick,
            )),
            _eventHandlers);
        }
        return _extends(
          ((_extends5 = {}),
          (_extends5[refKey] = handleRefs(ref, function (inputNode) {
            inputRef.current = inputNode;
          })),
          (_extends5["aria-activedescendant"] =
            latestState.isOpen && latestState.highlightedIndex > -1
              ? elementIds.getItemId(latestState.highlightedIndex)
              : ""),
          (_extends5["aria-autocomplete"] = "list"),
          (_extends5["aria-controls"] = elementIds.menuId),
          (_extends5["aria-expanded"] = latestState.isOpen),
          (_extends5["aria-labelledby"] =
            rest && rest["aria-label"] ? void 0 : elementIds.labelId),
          (_extends5.autoComplete = "off"),
          (_extends5.id = elementIds.inputId),
          (_extends5.role = "combobox"),
          (_extends5.value = latestState.inputValue),
          _extends5),
          eventHandlers,
          rest,
        );
      },
      [
        dispatch,
        elementIds,
        environment,
        inputKeyDownHandlers,
        latest,
        mouseAndTouchTrackers,
        setGetterPropCallInfo,
      ],
    ),
    toggleMenu = (0, import_react20.useCallback)(
      function () {
        dispatch({ type: FunctionToggleMenu });
      },
      [dispatch],
    ),
    closeMenu = (0, import_react20.useCallback)(
      function () {
        dispatch({ type: FunctionCloseMenu });
      },
      [dispatch],
    ),
    openMenu = (0, import_react20.useCallback)(
      function () {
        dispatch({ type: FunctionOpenMenu });
      },
      [dispatch],
    ),
    setHighlightedIndex = (0, import_react20.useCallback)(
      function (newHighlightedIndex) {
        dispatch({
          type: FunctionSetHighlightedIndex,
          highlightedIndex: newHighlightedIndex,
        });
      },
      [dispatch],
    ),
    selectItem = (0, import_react20.useCallback)(
      function (newSelectedItem) {
        dispatch({ type: FunctionSelectItem, selectedItem: newSelectedItem });
      },
      [dispatch],
    ),
    setInputValue = (0, import_react20.useCallback)(
      function (newInputValue) {
        dispatch({ type: FunctionSetInputValue, inputValue: newInputValue });
      },
      [dispatch],
    ),
    reset = (0, import_react20.useCallback)(
      function () {
        dispatch({ type: FunctionReset$1 });
      },
      [dispatch],
    );
  return {
    getItemProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getToggleButtonProps,
    toggleMenu,
    openMenu,
    closeMenu,
    setHighlightedIndex,
    setInputValue,
    selectItem,
    reset,
    highlightedIndex,
    isOpen,
    selectedItem,
    inputValue,
  };
}
var defaultStateValues = { activeIndex: -1, selectedItems: [] };
function getInitialValue(props, propKey) {
  return getInitialValue$1(props, propKey, defaultStateValues);
}
function getDefaultValue(props, propKey) {
  return getDefaultValue$1(props, propKey, defaultStateValues);
}
function getInitialState(props) {
  var activeIndex = getInitialValue(props, "activeIndex"),
    selectedItems = getInitialValue(props, "selectedItems");
  return { activeIndex, selectedItems };
}
function isKeyDownOperationPermitted(event) {
  if (event.shiftKey || event.metaKey || event.ctrlKey || event.altKey)
    return !1;
  var element = event.target;
  return !(
    element instanceof HTMLInputElement &&
    element.value !== "" &&
    (element.selectionStart !== 0 || element.selectionEnd !== 0)
  );
}
function isStateEqual(prevState, newState) {
  return (
    prevState.selectedItems === newState.selectedItems &&
    prevState.activeIndex === newState.activeIndex
  );
}
var propTypes = {
    stateReducer: commonPropTypes.stateReducer,
    itemToKey: commonPropTypes.itemToKey,
    environment: commonPropTypes.environment,
    selectedItems: import_prop_types2.default.array,
    initialSelectedItems: import_prop_types2.default.array,
    defaultSelectedItems: import_prop_types2.default.array,
    getA11yStatusMessage: import_prop_types2.default.func,
    activeIndex: import_prop_types2.default.number,
    initialActiveIndex: import_prop_types2.default.number,
    defaultActiveIndex: import_prop_types2.default.number,
    onActiveIndexChange: import_prop_types2.default.func,
    onSelectedItemsChange: import_prop_types2.default.func,
    keyNavigationNext: import_prop_types2.default.string,
    keyNavigationPrevious: import_prop_types2.default.string,
  },
  defaultProps = {
    itemToKey: defaultProps$3.itemToKey,
    stateReducer: defaultProps$3.stateReducer,
    environment: defaultProps$3.environment,
    keyNavigationNext: "ArrowRight",
    keyNavigationPrevious: "ArrowLeft",
  },
  validatePropTypes = noop2;
validatePropTypes = function (options2, caller) {
  import_prop_types2.default.checkPropTypes(
    propTypes,
    options2,
    "prop",
    caller.name,
  );
};
var SelectedItemClick = "__selected_item_click__",
  SelectedItemKeyDownDelete = "__selected_item_keydown_delete__",
  SelectedItemKeyDownBackspace = "__selected_item_keydown_backspace__",
  SelectedItemKeyDownNavigationNext =
    "__selected_item_keydown_navigation_next__",
  SelectedItemKeyDownNavigationPrevious =
    "__selected_item_keydown_navigation_previous__",
  DropdownKeyDownNavigationPrevious =
    "__dropdown_keydown_navigation_previous__",
  DropdownKeyDownBackspace = "__dropdown_keydown_backspace__",
  DropdownClick = "__dropdown_click__",
  FunctionAddSelectedItem = "__function_add_selected_item__",
  FunctionRemoveSelectedItem = "__function_remove_selected_item__",
  FunctionSetSelectedItems = "__function_set_selected_items__",
  FunctionSetActiveIndex = "__function_set_active_index__",
  FunctionReset = "__function_reset__",
  stateChangeTypes = Object.freeze({
    __proto__: null,
    SelectedItemClick,
    SelectedItemKeyDownDelete,
    SelectedItemKeyDownBackspace,
    SelectedItemKeyDownNavigationNext,
    SelectedItemKeyDownNavigationPrevious,
    DropdownKeyDownNavigationPrevious,
    DropdownKeyDownBackspace,
    DropdownClick,
    FunctionAddSelectedItem,
    FunctionRemoveSelectedItem,
    FunctionSetSelectedItems,
    FunctionSetActiveIndex,
    FunctionReset,
  });
function downshiftMultipleSelectionReducer(state, action) {
  var type = action.type,
    index = action.index,
    props = action.props,
    selectedItem = action.selectedItem,
    activeIndex = state.activeIndex,
    selectedItems = state.selectedItems,
    changes;
  switch (type) {
    case SelectedItemClick:
      changes = { activeIndex: index };
      break;
    case SelectedItemKeyDownNavigationPrevious:
      changes = { activeIndex: activeIndex - 1 < 0 ? 0 : activeIndex - 1 };
      break;
    case SelectedItemKeyDownNavigationNext:
      changes = {
        activeIndex:
          activeIndex + 1 >= selectedItems.length ? -1 : activeIndex + 1,
      };
      break;
    case SelectedItemKeyDownBackspace:
    case SelectedItemKeyDownDelete: {
      if (activeIndex < 0) break;
      var newActiveIndex = activeIndex;
      selectedItems.length === 1
        ? (newActiveIndex = -1)
        : activeIndex === selectedItems.length - 1 &&
          (newActiveIndex = selectedItems.length - 2),
        (changes = _extends(
          {
            selectedItems: [].concat(
              selectedItems.slice(0, activeIndex),
              selectedItems.slice(activeIndex + 1),
            ),
          },
          { activeIndex: newActiveIndex },
        ));
      break;
    }
    case DropdownKeyDownNavigationPrevious:
      changes = { activeIndex: selectedItems.length - 1 };
      break;
    case DropdownKeyDownBackspace:
      changes = {
        selectedItems: selectedItems.slice(0, selectedItems.length - 1),
      };
      break;
    case FunctionAddSelectedItem:
      changes = { selectedItems: [].concat(selectedItems, [selectedItem]) };
      break;
    case DropdownClick:
      changes = { activeIndex: -1 };
      break;
    case FunctionRemoveSelectedItem: {
      var _newActiveIndex = activeIndex,
        selectedItemIndex = selectedItems.findIndex(function (item) {
          return props.itemToKey(item) === props.itemToKey(selectedItem);
        });
      if (selectedItemIndex < 0) break;
      selectedItems.length === 1
        ? (_newActiveIndex = -1)
        : selectedItemIndex === selectedItems.length - 1 &&
          (_newActiveIndex = selectedItems.length - 2),
        (changes = {
          selectedItems: [].concat(
            selectedItems.slice(0, selectedItemIndex),
            selectedItems.slice(selectedItemIndex + 1),
          ),
          activeIndex: _newActiveIndex,
        });
      break;
    }
    case FunctionSetSelectedItems: {
      var newSelectedItems = action.selectedItems;
      changes = { selectedItems: newSelectedItems };
      break;
    }
    case FunctionSetActiveIndex: {
      var _newActiveIndex2 = action.activeIndex;
      changes = { activeIndex: _newActiveIndex2 };
      break;
    }
    case FunctionReset:
      changes = {
        activeIndex: getDefaultValue(props, "activeIndex"),
        selectedItems: getDefaultValue(props, "selectedItems"),
      };
      break;
    default:
      throw new Error("Reducer called without proper action type.");
  }
  return _extends({}, state, changes);
}
var _excluded = [
    "refKey",
    "ref",
    "onClick",
    "onKeyDown",
    "selectedItem",
    "index",
  ],
  _excluded2 = ["refKey", "ref", "onKeyDown", "onClick", "preventKeyAction"];
useMultipleSelection.stateChangeTypes = stateChangeTypes;
function useMultipleSelection(userProps) {
  userProps === void 0 && (userProps = {}),
    validatePropTypes(userProps, useMultipleSelection);
  var props = _extends({}, defaultProps, userProps),
    getA11yStatusMessage2 = props.getA11yStatusMessage,
    environment = props.environment,
    keyNavigationNext = props.keyNavigationNext,
    keyNavigationPrevious = props.keyNavigationPrevious,
    _useControlledReducer = useControlledReducer$1(
      downshiftMultipleSelectionReducer,
      props,
      getInitialState,
      isStateEqual,
    ),
    state = _useControlledReducer[0],
    dispatch = _useControlledReducer[1],
    activeIndex = state.activeIndex,
    selectedItems = state.selectedItems,
    isInitialMount = useIsInitialMount(),
    dropdownRef = (0, import_react20.useRef)(null),
    selectedItemRefs = (0, import_react20.useRef)();
  selectedItemRefs.current = [];
  var latest = useLatestRef({ state, props });
  useA11yMessageStatus(
    getA11yStatusMessage2,
    state,
    [activeIndex, selectedItems],
    environment,
  ),
    (0, import_react20.useEffect)(
      function () {
        isInitialMount ||
          (activeIndex === -1 && dropdownRef.current
            ? dropdownRef.current.focus()
            : selectedItemRefs.current[activeIndex] &&
              selectedItemRefs.current[activeIndex].focus());
      },
      [activeIndex],
    ),
    useControlPropsValidator({ props, state });
  var setGetterPropCallInfo = useGetterPropsCalledChecker("getDropdownProps"),
    selectedItemKeyDownHandlers = (0, import_react20.useMemo)(
      function () {
        var _ref;
        return (
          (_ref = {}),
          (_ref[keyNavigationPrevious] = function () {
            dispatch({ type: SelectedItemKeyDownNavigationPrevious });
          }),
          (_ref[keyNavigationNext] = function () {
            dispatch({ type: SelectedItemKeyDownNavigationNext });
          }),
          (_ref.Delete = function () {
            dispatch({ type: SelectedItemKeyDownDelete });
          }),
          (_ref.Backspace = function () {
            dispatch({ type: SelectedItemKeyDownBackspace });
          }),
          _ref
        );
      },
      [dispatch, keyNavigationNext, keyNavigationPrevious],
    ),
    dropdownKeyDownHandlers = (0, import_react20.useMemo)(
      function () {
        var _ref2;
        return (
          (_ref2 = {}),
          (_ref2[keyNavigationPrevious] = function (event) {
            isKeyDownOperationPermitted(event) &&
              dispatch({ type: DropdownKeyDownNavigationPrevious });
          }),
          (_ref2.Backspace = function (event) {
            isKeyDownOperationPermitted(event) &&
              dispatch({ type: DropdownKeyDownBackspace });
          }),
          _ref2
        );
      },
      [dispatch, keyNavigationPrevious],
    ),
    getSelectedItemProps = (0, import_react20.useCallback)(
      function (_temp) {
        var _extends2,
          _ref3 = _temp === void 0 ? {} : _temp,
          _ref3$refKey = _ref3.refKey,
          refKey = _ref3$refKey === void 0 ? "ref" : _ref3$refKey,
          ref = _ref3.ref,
          onClick = _ref3.onClick,
          onKeyDown = _ref3.onKeyDown,
          selectedItemProp = _ref3.selectedItem,
          indexProp = _ref3.index,
          rest = _objectWithoutPropertiesLoose(_ref3, _excluded),
          latestState = latest.current.state,
          _getItemAndIndex = getItemAndIndex(
            selectedItemProp,
            indexProp,
            latestState.selectedItems,
            "Pass either item or index to getSelectedItemProps!",
          ),
          index = _getItemAndIndex[1],
          isFocusable = index > -1 && index === latestState.activeIndex,
          selectedItemHandleClick = function () {
            dispatch({ type: SelectedItemClick, index });
          },
          selectedItemHandleKeyDown = function (event) {
            var key = normalizeArrowKey(event);
            key &&
              selectedItemKeyDownHandlers[key] &&
              selectedItemKeyDownHandlers[key](event);
          };
        return _extends(
          ((_extends2 = {}),
          (_extends2[refKey] = handleRefs(ref, function (selectedItemNode) {
            selectedItemNode && selectedItemRefs.current.push(selectedItemNode);
          })),
          (_extends2.tabIndex = isFocusable ? 0 : -1),
          (_extends2.onClick = callAllEventHandlers(
            onClick,
            selectedItemHandleClick,
          )),
          (_extends2.onKeyDown = callAllEventHandlers(
            onKeyDown,
            selectedItemHandleKeyDown,
          )),
          _extends2),
          rest,
        );
      },
      [dispatch, latest, selectedItemKeyDownHandlers],
    ),
    getDropdownProps = (0, import_react20.useCallback)(
      function (_temp2, _temp3) {
        var _extends3,
          _ref4 = _temp2 === void 0 ? {} : _temp2,
          _ref4$refKey = _ref4.refKey,
          refKey = _ref4$refKey === void 0 ? "ref" : _ref4$refKey,
          ref = _ref4.ref,
          onKeyDown = _ref4.onKeyDown,
          onClick = _ref4.onClick,
          _ref4$preventKeyActio = _ref4.preventKeyAction,
          preventKeyAction =
            _ref4$preventKeyActio === void 0 ? !1 : _ref4$preventKeyActio,
          rest = _objectWithoutPropertiesLoose(_ref4, _excluded2),
          _ref5 = _temp3 === void 0 ? {} : _temp3,
          _ref5$suppressRefErro = _ref5.suppressRefError,
          suppressRefError =
            _ref5$suppressRefErro === void 0 ? !1 : _ref5$suppressRefErro;
        setGetterPropCallInfo(
          "getDropdownProps",
          suppressRefError,
          refKey,
          dropdownRef,
        );
        var dropdownHandleKeyDown = function (event) {
            var key = normalizeArrowKey(event);
            key &&
              dropdownKeyDownHandlers[key] &&
              dropdownKeyDownHandlers[key](event);
          },
          dropdownHandleClick = function () {
            dispatch({ type: DropdownClick });
          };
        return _extends(
          ((_extends3 = {}),
          (_extends3[refKey] = handleRefs(ref, function (dropdownNode) {
            dropdownNode && (dropdownRef.current = dropdownNode);
          })),
          _extends3),
          !preventKeyAction && {
            onKeyDown: callAllEventHandlers(onKeyDown, dropdownHandleKeyDown),
            onClick: callAllEventHandlers(onClick, dropdownHandleClick),
          },
          rest,
        );
      },
      [dispatch, dropdownKeyDownHandlers, setGetterPropCallInfo],
    ),
    addSelectedItem = (0, import_react20.useCallback)(
      function (selectedItem) {
        dispatch({ type: FunctionAddSelectedItem, selectedItem });
      },
      [dispatch],
    ),
    removeSelectedItem = (0, import_react20.useCallback)(
      function (selectedItem) {
        dispatch({ type: FunctionRemoveSelectedItem, selectedItem });
      },
      [dispatch],
    ),
    setSelectedItems = (0, import_react20.useCallback)(
      function (newSelectedItems) {
        dispatch({
          type: FunctionSetSelectedItems,
          selectedItems: newSelectedItems,
        });
      },
      [dispatch],
    ),
    setActiveIndex = (0, import_react20.useCallback)(
      function (newActiveIndex) {
        dispatch({ type: FunctionSetActiveIndex, activeIndex: newActiveIndex });
      },
      [dispatch],
    ),
    reset = (0, import_react20.useCallback)(
      function () {
        dispatch({ type: FunctionReset });
      },
      [dispatch],
    );
  return {
    getSelectedItemProps,
    getDropdownProps,
    addSelectedItem,
    removeSelectedItem,
    setSelectedItems,
    setActiveIndex,
    reset,
    selectedItems,
    activeIndex,
  };
}
var import_fuse = __toESM(require_fuse());
var import_react28 = __toESM(require_react());
function isExpandType(x2) {
  return !!(x2 && x2.showAll);
}
function isSearchResult(x2) {
  return !!(x2 && x2.item);
}
var import_react27 = __toESM(require_react());
var import_react21 = __toESM(require_react());
function useDebounce(value, delay) {
  let [debouncedValue, setDebouncedValue] = (0, import_react21.useState)(value);
  return (
    (0, import_react21.useEffect)(() => {
      let handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      return () => {
        clearTimeout(handler);
      };
    }, [value, delay]),
    debouncedValue
  );
}
function extractSeededRequiredArgs(argTypes) {
  return Object.keys(argTypes).reduce((acc, key) => {
    let argType = argTypes[key];
    if (typeof argType.control == "object" && "type" in argType.control)
      switch (argType.control.type) {
        case "object":
          acc[key] = {};
          break;
        case "inline-radio":
        case "radio":
        case "inline-check":
        case "check":
        case "select":
        case "multi-select":
          acc[key] = argType.control.options?.[0];
          break;
        case "color":
          acc[key] = "#000000";
          break;
        default:
          break;
      }
    return setArgType(argType.type, acc, key), acc;
  }, {});
}
function setArgType(type, obj, objKey) {
  if (!(typeof type == "string" || !type.required))
    switch (type.name) {
      case "boolean":
        obj[objKey] = !0;
        break;
      case "number":
        obj[objKey] = 0;
        break;
      case "string":
        obj[objKey] = objKey;
        break;
      case "array":
        obj[objKey] = [];
        break;
      case "object":
        (obj[objKey] = {}),
          Object.entries(type.value ?? {}).forEach(([typeKey, typeVal]) => {
            setArgType(typeVal, obj[objKey], typeKey);
          });
        break;
      case "function":
        obj[objKey] = () => {};
        break;
      case "intersection":
        type.value?.every((v2) => v2.name === "object") &&
          ((obj[objKey] = {}),
          type.value?.forEach((typeVal) => {
            typeVal.name === "object" &&
              Object.entries(typeVal.value ?? {}).forEach(
                ([typeValKey, typeValVal]) => {
                  setArgType(typeValVal, obj[objKey], typeValKey);
                },
              );
          }));
        break;
      case "union":
        type.value?.[0] !== void 0 && setArgType(type.value[0], obj, objKey);
        break;
      case "enum":
        type.value?.[0] !== void 0 && (obj[objKey] = type.value?.[0]);
        break;
      case "other":
        typeof type.value == "string" &&
          type.value === "tuple" &&
          (obj[objKey] = []);
        break;
      default:
        break;
    }
}
async function trySelectNewStory(selectStory, storyId, attempt = 1) {
  if (attempt > 10)
    throw new Error("We could not select the new story. Please try again.");
  try {
    await selectStory(storyId);
  } catch {
    return (
      await new Promise((resolve) => setTimeout(resolve, 500)),
      trySelectNewStory(selectStory, storyId, attempt + 1)
    );
  }
}
var import_react26 = __toESM(require_react());
var import_react24 = __toESM(require_react());
var import_react22 = __toESM(require_react());
var FileListWrapper = newStyled("div")(({ theme }) => ({
    marginTop: "-16px",
    "&::after": {
      content: '""',
      position: "fixed",
      pointerEvents: "none",
      bottom: 0,
      left: 0,
      right: 0,
      height: "80px",
      background: `linear-gradient(${rgba(theme.barBg, 0)} 10%, ${theme.barBg} 80%)`,
    },
  })),
  FileList = newStyled("div")(({ theme }) => ({
    height: "280px",
    overflow: "auto",
    msOverflowStyle: "none",
    scrollbarWidth: "none",
    position: "relative",
    "::-webkit-scrollbar": { display: "none" },
  })),
  FileListLi = newStyled("li")(({ theme }) => ({
    ":focus-visible": {
      outline: "none",
      ".file-list-item": {
        borderRadius: "4px",
        background:
          theme.base === "dark"
            ? "rgba(255,255,255,.1)"
            : theme.color.mediumlight,
        "> svg": { display: "flex" },
      },
    },
  })),
  FileListItem = newStyled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    position: "relative",
  })),
  FileListItemContentWrapper = newStyled.div(
    ({ theme, selected, disabled, error }) => ({
      display: "flex",
      alignItems: "flex-start",
      gap: "8px",
      alignSelf: "stretch",
      padding: "8px 16px",
      cursor: "pointer",
      borderRadius: "4px",
      ...(selected && {
        borderRadius: "4px",
        background:
          theme.base === "dark"
            ? "rgba(255,255,255,.1)"
            : theme.color.mediumlight,
        "> svg": { display: "flex" },
      }),
      ...(disabled && {
        cursor: "not-allowed",
        div: { color: `${theme.color.mediumdark} !important` },
      }),
      ...(error && {
        background: theme.base === "light" ? "#00000011" : "#00000033",
      }),
      "&:hover": {
        background: error
          ? "#00000022"
          : theme.base === "dark"
            ? "rgba(255,255,255,.1)"
            : theme.color.mediumlight,
        "> svg": { display: "flex" },
      },
    }),
  ),
  FileListUl = newStyled("ul")({
    margin: 0,
    padding: "0 0 0 0",
    width: "100%",
    position: "relative",
  }),
  FileListItemContent = newStyled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "calc(100% - 50px)",
  }),
  FileListIconWrapper = newStyled("div")(({ theme, error }) => ({
    color: error ? theme.color.negativeText : theme.color.secondary,
  })),
  FileListItemLabel = newStyled("div")(({ theme, error }) => ({
    color: error
      ? theme.color.negativeText
      : theme.base === "dark"
        ? theme.color.lighter
        : theme.color.darkest,
    fontSize: "14px",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
    maxWidth: "100%",
  })),
  FileListItemPath = newStyled("div")(({ theme }) => ({
    color: theme.color.mediumdark,
    fontSize: "14px",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
    maxWidth: "100%",
  })),
  FileListExport = newStyled("ul")(({ theme }) => ({ margin: 0, padding: 0 })),
  FileListItemExport = newStyled("li")(({ theme, error }) => ({
    padding: "8px 16px 8px 16px",
    marginLeft: "30px",
    display: "flex",
    gap: "8px",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: "14px",
    cursor: "pointer",
    borderRadius: "4px",
    ":focus-visible": { outline: "none" },
    ...(error && { background: "#F9ECEC", color: theme.color.negativeText }),
    "&:hover,:focus-visible": {
      background: error
        ? "#F9ECEC"
        : theme.base === "dark"
          ? "rgba(255, 255, 255, 0.1)"
          : theme.color.mediumlight,
      "> svg": { display: "flex" },
    },
    "> div > svg": {
      color: error ? theme.color.negativeText : theme.color.secondary,
    },
  })),
  FileListItemExportName = newStyled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "8px",
    width: "calc(100% - 20px)",
  })),
  FileListItemExportNameContent = newStyled("span")(({ theme }) => ({
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
    maxWidth: "calc(100% - 160px)",
    display: "inline-block",
  })),
  DefaultExport = newStyled("span")(({ theme }) => ({
    display: "inline-block",
    padding: `1px ${theme.appBorderRadius}px`,
    borderRadius: "2px",
    fontSize: "10px",
    color: theme.base === "dark" ? theme.color.lightest : "#727272",
    backgroundColor:
      theme.base === "dark" ? "rgba(255, 255, 255, 0.1)" : "#F2F4F5",
  })),
  NoResults = newStyled("div")(({ theme }) => ({
    textAlign: "center",
    maxWidth: "334px",
    margin: "16px auto 50px auto",
    fontSize: "14px",
    color: theme.base === "dark" ? theme.color.lightest : "#000",
  })),
  NoResultsDescription = newStyled("p")(({ theme }) => ({
    margin: 0,
    color:
      theme.base === "dark" ? theme.color.defaultText : theme.color.mediumdark,
  }));
var FileListItemContentWrapperSkeleton = newStyled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "flex-start",
    gap: "8px",
    alignSelf: "stretch",
    padding: "8px 16px",
  })),
  FileListItemContentSkeleton = newStyled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
    borderRadius: "3px",
  }),
  FileListIconWrapperSkeleton = newStyled.div(({ theme }) => ({
    width: "14px",
    height: "14px",
    borderRadius: "3px",
    marginTop: "1px",
    background:
      theme.base === "dark" ? "rgba(255,255,255,.1)" : "rgba(0,0,0,.1)",
    animation: `${theme.animation.glow} 1.5s ease-in-out infinite`,
  })),
  FileListItemSkeleton = newStyled.div(({ theme }) => ({
    height: "16px",
    borderRadius: "3px",
    background:
      theme.base === "dark" ? "rgba(255,255,255,.1)" : "rgba(0,0,0,.1)",
    animation: `${theme.animation.glow} 1.5s ease-in-out infinite`,
    width: "100%",
    maxWidth: "100%",
    "+ div": { marginTop: "6px" },
  })),
  FileSearchListLoadingSkeleton = () =>
    import_react22.default.createElement(
      FileList,
      null,
      [1, 2, 3].map((result) =>
        import_react22.default.createElement(
          FileListItem,
          { key: result },
          import_react22.default.createElement(
            FileListItemContentWrapperSkeleton,
            null,
            import_react22.default.createElement(
              FileListIconWrapperSkeleton,
              null,
            ),
            import_react22.default.createElement(
              FileListItemContentSkeleton,
              null,
              import_react22.default.createElement(FileListItemSkeleton, {
                style: { width: "90px" },
              }),
              import_react22.default.createElement(FileListItemSkeleton, {
                style: { width: "300px" },
              }),
            ),
          ),
        ),
      ),
    );
var React18 = __toESM(require_react(), 1),
  import_react_dom = __toESM(require_react_dom(), 1);
function memo(getDeps, fn, opts) {
  let deps = opts.initialDeps ?? [],
    result;
  return () => {
    var _a, _b, _c, _d;
    let depTime;
    opts.key &&
      (_a = opts.debug) != null &&
      _a.call(opts) &&
      (depTime = Date.now());
    let newDeps = getDeps();
    if (
      !(
        newDeps.length !== deps.length ||
        newDeps.some((dep, index) => deps[index] !== dep)
      )
    )
      return result;
    deps = newDeps;
    let resultTime;
    if (
      (opts.key &&
        (_b = opts.debug) != null &&
        _b.call(opts) &&
        (resultTime = Date.now()),
      (result = fn(...newDeps)),
      opts.key && (_c = opts.debug) != null && _c.call(opts))
    ) {
      let depEndTime = Math.round((Date.now() - depTime) * 100) / 100,
        resultEndTime = Math.round((Date.now() - resultTime) * 100) / 100,
        resultFpsPercentage = resultEndTime / 16,
        pad = (str, num) => {
          for (str = String(str); str.length < num; ) str = " " + str;
          return str;
        };
      console.info(
        `%c\u23F1 ${pad(resultEndTime, 5)} /${pad(depEndTime, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * resultFpsPercentage, 120))}deg 100% 31%);`,
        opts?.key,
      );
    }
    return (_d = opts?.onChange) == null || _d.call(opts, result), result;
  };
}
function notUndefined(value, msg) {
  if (value === void 0)
    throw new Error(`Unexpected undefined${msg ? `: ${msg}` : ""}`);
  return value;
}
var approxEqual = (a2, b2) => Math.abs(a2 - b2) < 1;
var defaultKeyExtractor = (index) => index,
  defaultRangeExtractor = (range) => {
    let start = Math.max(range.startIndex - range.overscan, 0),
      end = Math.min(range.endIndex + range.overscan, range.count - 1),
      arr = [];
    for (let i2 = start; i2 <= end; i2++) arr.push(i2);
    return arr;
  },
  observeElementRect = (instance, cb) => {
    let element = instance.scrollElement;
    if (!element) return;
    let handler = (rect) => {
      let { width, height } = rect;
      cb({ width: Math.round(width), height: Math.round(height) });
    };
    if ((handler(element.getBoundingClientRect()), typeof ResizeObserver > "u"))
      return () => {};
    let observer = new ResizeObserver((entries) => {
      let entry = entries[0];
      if (entry?.borderBoxSize) {
        let box = entry.borderBoxSize[0];
        if (box) {
          handler({ width: box.inlineSize, height: box.blockSize });
          return;
        }
      }
      handler(element.getBoundingClientRect());
    });
    return (
      observer.observe(element, { box: "border-box" }),
      () => {
        observer.unobserve(element);
      }
    );
  };
var observeElementOffset = (instance, cb) => {
  let element = instance.scrollElement;
  if (!element) return;
  let handler = () => {
    cb(element[instance.options.horizontal ? "scrollLeft" : "scrollTop"]);
  };
  return (
    handler(),
    element.addEventListener("scroll", handler, { passive: !0 }),
    () => {
      element.removeEventListener("scroll", handler);
    }
  );
};
var measureElement = (element, entry, instance) => {
  if (entry?.borderBoxSize) {
    let box = entry.borderBoxSize[0];
    if (box)
      return Math.round(
        box[instance.options.horizontal ? "inlineSize" : "blockSize"],
      );
  }
  return Math.round(
    element.getBoundingClientRect()[
      instance.options.horizontal ? "width" : "height"
    ],
  );
};
var elementScroll = (offset, { adjustments = 0, behavior }, instance) => {
    var _a, _b;
    let toOffset = offset + adjustments;
    (_b = (_a = instance.scrollElement) == null ? void 0 : _a.scrollTo) ==
      null ||
      _b.call(_a, {
        [instance.options.horizontal ? "left" : "top"]: toOffset,
        behavior,
      });
  },
  Virtualizer = class {
    constructor(opts) {
      (this.unsubs = []),
        (this.scrollElement = null),
        (this.isScrolling = !1),
        (this.isScrollingTimeoutId = null),
        (this.scrollToIndexTimeoutId = null),
        (this.measurementsCache = []),
        (this.itemSizeCache = new Map()),
        (this.pendingMeasuredCacheIndexes = []),
        (this.scrollDirection = null),
        (this.scrollAdjustments = 0),
        (this.measureElementCache = new Map()),
        (this.observer = (() => {
          let _ro = null,
            get2 = () =>
              _ro ||
              (typeof ResizeObserver < "u"
                ? (_ro = new ResizeObserver((entries) => {
                    entries.forEach((entry) => {
                      this._measureElement(entry.target, entry);
                    });
                  }))
                : null);
          return {
            disconnect: () => {
              var _a;
              return (_a = get2()) == null ? void 0 : _a.disconnect();
            },
            observe: (target) => {
              var _a;
              return (_a = get2()) == null
                ? void 0
                : _a.observe(target, { box: "border-box" });
            },
            unobserve: (target) => {
              var _a;
              return (_a = get2()) == null ? void 0 : _a.unobserve(target);
            },
          };
        })()),
        (this.range = null),
        (this.setOptions = (opts2) => {
          Object.entries(opts2).forEach(([key, value]) => {
            typeof value > "u" && delete opts2[key];
          }),
            (this.options = {
              debug: !1,
              initialOffset: 0,
              overscan: 1,
              paddingStart: 0,
              paddingEnd: 0,
              scrollPaddingStart: 0,
              scrollPaddingEnd: 0,
              horizontal: !1,
              getItemKey: defaultKeyExtractor,
              rangeExtractor: defaultRangeExtractor,
              onChange: () => {},
              measureElement,
              initialRect: { width: 0, height: 0 },
              scrollMargin: 0,
              gap: 0,
              scrollingDelay: 150,
              indexAttribute: "data-index",
              initialMeasurementsCache: [],
              lanes: 1,
              ...opts2,
            });
        }),
        (this.notify = (sync) => {
          var _a, _b;
          (_b = (_a = this.options).onChange) == null ||
            _b.call(_a, this, sync);
        }),
        (this.maybeNotify = memo(
          () => (
            this.calculateRange(),
            [
              this.isScrolling,
              this.range ? this.range.startIndex : null,
              this.range ? this.range.endIndex : null,
            ]
          ),
          (isScrolling) => {
            this.notify(isScrolling);
          },
          {
            key: "maybeNotify",
            debug: () => this.options.debug,
            initialDeps: [
              this.isScrolling,
              this.range ? this.range.startIndex : null,
              this.range ? this.range.endIndex : null,
            ],
          },
        )),
        (this.cleanup = () => {
          this.unsubs.filter(Boolean).forEach((d2) => d2()),
            (this.unsubs = []),
            (this.scrollElement = null);
        }),
        (this._didMount = () => (
          this.measureElementCache.forEach(this.observer.observe),
          () => {
            this.observer.disconnect(), this.cleanup();
          }
        )),
        (this._willUpdate = () => {
          let scrollElement = this.options.getScrollElement();
          this.scrollElement !== scrollElement &&
            (this.cleanup(),
            (this.scrollElement = scrollElement),
            this._scrollToOffset(this.scrollOffset, {
              adjustments: void 0,
              behavior: void 0,
            }),
            this.unsubs.push(
              this.options.observeElementRect(this, (rect) => {
                (this.scrollRect = rect), this.maybeNotify();
              }),
            ),
            this.unsubs.push(
              this.options.observeElementOffset(this, (offset) => {
                (this.scrollAdjustments = 0),
                  this.scrollOffset !== offset &&
                    (this.isScrollingTimeoutId !== null &&
                      (clearTimeout(this.isScrollingTimeoutId),
                      (this.isScrollingTimeoutId = null)),
                    (this.isScrolling = !0),
                    (this.scrollDirection =
                      this.scrollOffset < offset ? "forward" : "backward"),
                    (this.scrollOffset = offset),
                    this.maybeNotify(),
                    (this.isScrollingTimeoutId = setTimeout(() => {
                      (this.isScrollingTimeoutId = null),
                        (this.isScrolling = !1),
                        (this.scrollDirection = null),
                        this.maybeNotify();
                    }, this.options.scrollingDelay)));
              }),
            ));
        }),
        (this.getSize = () =>
          this.scrollRect[this.options.horizontal ? "width" : "height"]),
        (this.memoOptions = memo(
          () => [
            this.options.count,
            this.options.paddingStart,
            this.options.scrollMargin,
            this.options.getItemKey,
          ],
          (count, paddingStart, scrollMargin, getItemKey) => (
            (this.pendingMeasuredCacheIndexes = []),
            { count, paddingStart, scrollMargin, getItemKey }
          ),
          { key: !1 },
        )),
        (this.getFurthestMeasurement = (measurements, index) => {
          let furthestMeasurementsFound = new Map(),
            furthestMeasurements = new Map();
          for (let m2 = index - 1; m2 >= 0; m2--) {
            let measurement = measurements[m2];
            if (furthestMeasurementsFound.has(measurement.lane)) continue;
            let previousFurthestMeasurement = furthestMeasurements.get(
              measurement.lane,
            );
            if (
              (previousFurthestMeasurement == null ||
              measurement.end > previousFurthestMeasurement.end
                ? furthestMeasurements.set(measurement.lane, measurement)
                : measurement.end < previousFurthestMeasurement.end &&
                  furthestMeasurementsFound.set(measurement.lane, !0),
              furthestMeasurementsFound.size === this.options.lanes)
            )
              break;
          }
          return furthestMeasurements.size === this.options.lanes
            ? Array.from(furthestMeasurements.values()).sort((a2, b2) =>
                a2.end === b2.end ? a2.index - b2.index : a2.end - b2.end,
              )[0]
            : void 0;
        }),
        (this.getMeasurements = memo(
          () => [this.memoOptions(), this.itemSizeCache],
          (
            { count, paddingStart, scrollMargin, getItemKey },
            itemSizeCache,
          ) => {
            let min =
              this.pendingMeasuredCacheIndexes.length > 0
                ? Math.min(...this.pendingMeasuredCacheIndexes)
                : 0;
            this.pendingMeasuredCacheIndexes = [];
            let measurements = this.measurementsCache.slice(0, min);
            for (let i2 = min; i2 < count; i2++) {
              let key = getItemKey(i2),
                furthestMeasurement =
                  this.options.lanes === 1
                    ? measurements[i2 - 1]
                    : this.getFurthestMeasurement(measurements, i2),
                start = furthestMeasurement
                  ? furthestMeasurement.end + this.options.gap
                  : paddingStart + scrollMargin,
                measuredSize = itemSizeCache.get(key),
                size =
                  typeof measuredSize == "number"
                    ? measuredSize
                    : this.options.estimateSize(i2),
                end = start + size,
                lane = furthestMeasurement
                  ? furthestMeasurement.lane
                  : i2 % this.options.lanes;
              measurements[i2] = { index: i2, start, size, end, key, lane };
            }
            return (this.measurementsCache = measurements), measurements;
          },
          { key: "getMeasurements", debug: () => this.options.debug },
        )),
        (this.calculateRange = memo(
          () => [this.getMeasurements(), this.getSize(), this.scrollOffset],
          (measurements, outerSize, scrollOffset) =>
            (this.range =
              measurements.length > 0 && outerSize > 0
                ? calculateRange({ measurements, outerSize, scrollOffset })
                : null),
          { key: "calculateRange", debug: () => this.options.debug },
        )),
        (this.getIndexes = memo(
          () => [
            this.options.rangeExtractor,
            this.calculateRange(),
            this.options.overscan,
            this.options.count,
          ],
          (rangeExtractor, range, overscan, count) =>
            range === null ? [] : rangeExtractor({ ...range, overscan, count }),
          { key: "getIndexes", debug: () => this.options.debug },
        )),
        (this.indexFromElement = (node) => {
          let attributeName = this.options.indexAttribute,
            indexStr = node.getAttribute(attributeName);
          return indexStr
            ? parseInt(indexStr, 10)
            : (console.warn(
                `Missing attribute name '${attributeName}={index}' on measured element.`,
              ),
              -1);
        }),
        (this._measureElement = (node, entry) => {
          let item = this.measurementsCache[this.indexFromElement(node)];
          if (!item || !node.isConnected) {
            this.measureElementCache.forEach((cached, key) => {
              cached === node &&
                (this.observer.unobserve(node),
                this.measureElementCache.delete(key));
            });
            return;
          }
          let prevNode = this.measureElementCache.get(item.key);
          prevNode !== node &&
            (prevNode && this.observer.unobserve(prevNode),
            this.observer.observe(node),
            this.measureElementCache.set(item.key, node));
          let measuredItemSize = this.options.measureElement(node, entry, this);
          this.resizeItem(item, measuredItemSize);
        }),
        (this.resizeItem = (item, size) => {
          let itemSize = this.itemSizeCache.get(item.key) ?? item.size,
            delta = size - itemSize;
          delta !== 0 &&
            ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0
              ? this.shouldAdjustScrollPositionOnItemSizeChange(
                  item,
                  delta,
                  this,
                )
              : item.start < this.scrollOffset + this.scrollAdjustments) &&
              (this.options.debug && console.info("correction", delta),
              this._scrollToOffset(this.scrollOffset, {
                adjustments: (this.scrollAdjustments += delta),
                behavior: void 0,
              })),
            this.pendingMeasuredCacheIndexes.push(item.index),
            (this.itemSizeCache = new Map(
              this.itemSizeCache.set(item.key, size),
            )),
            this.notify(!1));
        }),
        (this.measureElement = (node) => {
          node && this._measureElement(node, void 0);
        }),
        (this.getVirtualItems = memo(
          () => [this.getIndexes(), this.getMeasurements()],
          (indexes, measurements) => {
            let virtualItems = [];
            for (let k2 = 0, len = indexes.length; k2 < len; k2++) {
              let i2 = indexes[k2],
                measurement = measurements[i2];
              virtualItems.push(measurement);
            }
            return virtualItems;
          },
          { key: "getIndexes", debug: () => this.options.debug },
        )),
        (this.getVirtualItemForOffset = (offset) => {
          let measurements = this.getMeasurements();
          return notUndefined(
            measurements[
              findNearestBinarySearch(
                0,
                measurements.length - 1,
                (index) => notUndefined(measurements[index]).start,
                offset,
              )
            ],
          );
        }),
        (this.getOffsetForAlignment = (toOffset, align) => {
          let size = this.getSize();
          align === "auto" &&
            (toOffset <= this.scrollOffset
              ? (align = "start")
              : toOffset >= this.scrollOffset + size
                ? (align = "end")
                : (align = "start")),
            align === "start"
              ? (toOffset = toOffset)
              : align === "end"
                ? (toOffset = toOffset - size)
                : align === "center" && (toOffset = toOffset - size / 2);
          let scrollSizeProp = this.options.horizontal
              ? "scrollWidth"
              : "scrollHeight",
            maxOffset =
              (this.scrollElement
                ? "document" in this.scrollElement
                  ? this.scrollElement.document.documentElement[scrollSizeProp]
                  : this.scrollElement[scrollSizeProp]
                : 0) - this.getSize();
          return Math.max(Math.min(maxOffset, toOffset), 0);
        }),
        (this.getOffsetForIndex = (index, align = "auto") => {
          index = Math.max(0, Math.min(index, this.options.count - 1));
          let measurement = notUndefined(this.getMeasurements()[index]);
          if (align === "auto")
            if (
              measurement.end >=
              this.scrollOffset + this.getSize() - this.options.scrollPaddingEnd
            )
              align = "end";
            else if (
              measurement.start <=
              this.scrollOffset + this.options.scrollPaddingStart
            )
              align = "start";
            else return [this.scrollOffset, align];
          let toOffset =
            align === "end"
              ? measurement.end + this.options.scrollPaddingEnd
              : measurement.start - this.options.scrollPaddingStart;
          return [this.getOffsetForAlignment(toOffset, align), align];
        }),
        (this.isDynamicMode = () => this.measureElementCache.size > 0),
        (this.cancelScrollToIndex = () => {
          this.scrollToIndexTimeoutId !== null &&
            (clearTimeout(this.scrollToIndexTimeoutId),
            (this.scrollToIndexTimeoutId = null));
        }),
        (this.scrollToOffset = (
          toOffset,
          { align = "start", behavior } = {},
        ) => {
          this.cancelScrollToIndex(),
            behavior === "smooth" &&
              this.isDynamicMode() &&
              console.warn(
                "The `smooth` scroll behavior is not fully supported with dynamic size.",
              ),
            this._scrollToOffset(this.getOffsetForAlignment(toOffset, align), {
              adjustments: void 0,
              behavior,
            });
        }),
        (this.scrollToIndex = (
          index,
          { align: initialAlign = "auto", behavior } = {},
        ) => {
          (index = Math.max(0, Math.min(index, this.options.count - 1))),
            this.cancelScrollToIndex(),
            behavior === "smooth" &&
              this.isDynamicMode() &&
              console.warn(
                "The `smooth` scroll behavior is not fully supported with dynamic size.",
              );
          let [toOffset, align] = this.getOffsetForIndex(index, initialAlign);
          this._scrollToOffset(toOffset, { adjustments: void 0, behavior }),
            behavior !== "smooth" &&
              this.isDynamicMode() &&
              (this.scrollToIndexTimeoutId = setTimeout(() => {
                if (
                  ((this.scrollToIndexTimeoutId = null),
                  this.measureElementCache.has(this.options.getItemKey(index)))
                ) {
                  let [toOffset2] = this.getOffsetForIndex(index, align);
                  approxEqual(toOffset2, this.scrollOffset) ||
                    this.scrollToIndex(index, { align, behavior });
                } else this.scrollToIndex(index, { align, behavior });
              }));
        }),
        (this.scrollBy = (delta, { behavior } = {}) => {
          this.cancelScrollToIndex(),
            behavior === "smooth" &&
              this.isDynamicMode() &&
              console.warn(
                "The `smooth` scroll behavior is not fully supported with dynamic size.",
              ),
            this._scrollToOffset(this.scrollOffset + delta, {
              adjustments: void 0,
              behavior,
            });
        }),
        (this.getTotalSize = () => {
          var _a;
          let measurements = this.getMeasurements(),
            end;
          return (
            measurements.length === 0
              ? (end = this.options.paddingStart)
              : (end =
                  this.options.lanes === 1
                    ? (((_a = measurements[measurements.length - 1]) == null
                        ? void 0
                        : _a.end) ?? 0)
                    : Math.max(
                        ...measurements
                          .slice(-this.options.lanes)
                          .map((m2) => m2.end),
                      )),
            end - this.options.scrollMargin + this.options.paddingEnd
          );
        }),
        (this._scrollToOffset = (offset, { adjustments, behavior }) => {
          this.options.scrollToFn(offset, { behavior, adjustments }, this);
        }),
        (this.measure = () => {
          (this.itemSizeCache = new Map()), this.notify(!1);
        }),
        this.setOptions(opts),
        (this.scrollRect = this.options.initialRect),
        (this.scrollOffset =
          typeof this.options.initialOffset == "function"
            ? this.options.initialOffset()
            : this.options.initialOffset),
        (this.measurementsCache = this.options.initialMeasurementsCache),
        this.measurementsCache.forEach((item) => {
          this.itemSizeCache.set(item.key, item.size);
        }),
        this.maybeNotify();
    }
  },
  findNearestBinarySearch = (low, high, getCurrentValue, value) => {
    for (; low <= high; ) {
      let middle = ((low + high) / 2) | 0,
        currentValue = getCurrentValue(middle);
      if (currentValue < value) low = middle + 1;
      else if (currentValue > value) high = middle - 1;
      else return middle;
    }
    return low > 0 ? low - 1 : 0;
  };
function calculateRange({ measurements, outerSize, scrollOffset }) {
  let count = measurements.length - 1,
    startIndex = findNearestBinarySearch(
      0,
      count,
      (index) => measurements[index].start,
      scrollOffset,
    ),
    endIndex = startIndex;
  for (
    ;
    endIndex < count && measurements[endIndex].end < scrollOffset + outerSize;

  )
    endIndex++;
  return { startIndex, endIndex };
}
var useIsomorphicLayoutEffect2 =
  typeof document < "u" ? React18.useLayoutEffect : React18.useEffect;
function useVirtualizerBase(options2) {
  let rerender = React18.useReducer(() => ({}), {})[1],
    resolvedOptions = {
      ...options2,
      onChange: (instance2, sync) => {
        var _a;
        sync ? (0, import_react_dom.flushSync)(rerender) : rerender(),
          (_a = options2.onChange) == null ||
            _a.call(options2, instance2, sync);
      },
    },
    [instance] = React18.useState(() => new Virtualizer(resolvedOptions));
  return (
    instance.setOptions(resolvedOptions),
    React18.useEffect(() => instance._didMount(), []),
    useIsomorphicLayoutEffect2(() => instance._willUpdate()),
    instance
  );
}
function useVirtualizer(options2) {
  return useVirtualizerBase({
    observeElementRect,
    observeElementOffset,
    scrollToFn: elementScroll,
    ...options2,
  });
}
var import_react23 = __toESM(require_react()),
  import_react_dom2 = __toESM(require_react_dom()),
  useArrowKeyNavigation = ({ parentRef, rowVirtualizer, selectedItem }) => {
    (0, import_react23.useEffect)(() => {
      let handleArrowKeys = (event) => {
        if (!parentRef.current) return;
        let maxIndex = rowVirtualizer.options.count,
          activeElement = document.activeElement,
          rowIndex = parseInt(
            activeElement.getAttribute("data-index") || "-1",
            10,
          ),
          isActiveElementInput = activeElement.tagName === "INPUT",
          getFirstElement = () => document.querySelector('[data-index="0"]'),
          getLastElement = () =>
            document.querySelector(`[data-index="${maxIndex - 1}"]`);
        if (event.code === "ArrowDown" && activeElement) {
          if ((event.stopPropagation(), isActiveElementInput)) {
            getFirstElement()?.focus();
            return;
          }
          if (rowIndex === maxIndex - 1) {
            (0, import_react_dom2.flushSync)(() => {
              rowVirtualizer.scrollToIndex(0, { align: "start" });
            }),
              setTimeout(() => {
                getFirstElement()?.focus();
              }, 100);
            return;
          }
          if (selectedItem === rowIndex) {
            document
              .querySelector(`[data-index-position="${selectedItem}_first"]`)
              ?.focus();
            return;
          }
          if (
            selectedItem !== null &&
            activeElement.getAttribute("data-index-position")?.includes("last")
          ) {
            document
              .querySelector(`[data-index="${selectedItem + 1}"]`)
              ?.focus();
            return;
          }
          activeElement.nextElementSibling?.focus();
        }
        if (event.code === "ArrowUp" && activeElement) {
          if (isActiveElementInput) {
            (0, import_react_dom2.flushSync)(() => {
              rowVirtualizer.scrollToIndex(maxIndex - 1, { align: "start" });
            }),
              setTimeout(() => {
                getLastElement()?.focus();
              }, 100);
            return;
          }
          if (
            selectedItem !== null &&
            activeElement.getAttribute("data-index-position")?.includes("first")
          ) {
            document.querySelector(`[data-index="${selectedItem}"]`)?.focus();
            return;
          }
          activeElement.previousElementSibling?.focus();
        }
      };
      return (
        document.addEventListener("keydown", handleArrowKeys, { capture: !0 }),
        () => {
          document.removeEventListener("keydown", handleArrowKeys, {
            capture: !0,
          });
        }
      );
    }, [rowVirtualizer, selectedItem, parentRef]);
  };
var ChevronRightIconStyled = newStyled(ChevronRightIcon)(({ theme }) => ({
    display: "none",
    alignSelf: "center",
    color: theme.color.mediumdark,
  })),
  ChevronDownIconStyled = newStyled(ChevronDownIcon)(({ theme }) => ({
    display: "none",
    alignSelf: "center",
    color: theme.color.mediumdark,
  })),
  FileSearchList = (0, import_react24.memo)(function ({
    isLoading,
    searchResults,
    onNewStory,
    errorItemId,
  }) {
    let [selectedItem, setSelectedItem] = (0, import_react24.useState)(null),
      parentRef = import_react24.default.useRef(),
      sortedSearchResults = (0, import_react24.useMemo)(
        () =>
          [...(searchResults ?? [])].sort((a2, b2) => {
            let isALowPriority =
                a2.exportedComponents === null ||
                a2.exportedComponents?.length === 0,
              hasAStory = a2.storyFileExists,
              isBLowPriority =
                b2.exportedComponents === null ||
                b2.exportedComponents?.length === 0,
              hasBStory = b2.storyFileExists;
            return hasAStory && !hasBStory
              ? -1
              : (hasBStory && !hasAStory) || (isALowPriority && !isBLowPriority)
                ? 1
                : !isALowPriority && isBLowPriority
                  ? -1
                  : 0;
          }),
        [searchResults],
      ),
      count = searchResults?.length || 0,
      rowVirtualizer = useVirtualizer({
        count,
        getScrollElement: () => parentRef.current,
        paddingStart: 16,
        paddingEnd: 40,
        estimateSize: () => 54,
        overscan: 2,
      });
    useArrowKeyNavigation({ rowVirtualizer, parentRef, selectedItem });
    let handleFileItemSelection = (0, import_react24.useCallback)(
        ({ virtualItem, searchResult, itemId }) => {
          searchResult?.exportedComponents?.length > 1
            ? setSelectedItem((sItem) =>
                sItem === virtualItem.index ? null : virtualItem.index,
              )
            : searchResult?.exportedComponents?.length === 1 &&
              onNewStory({
                componentExportName: searchResult.exportedComponents[0].name,
                componentFilePath: searchResult.filepath,
                componentIsDefaultExport:
                  searchResult.exportedComponents[0].default,
                selectedItemId: itemId,
                componentExportCount: 1,
              });
        },
        [onNewStory],
      ),
      handleFileItemComponentSelection = (0, import_react24.useCallback)(
        ({ searchResult, component, id }) => {
          onNewStory({
            componentExportName: component.name,
            componentFilePath: searchResult.filepath,
            componentIsDefaultExport: component.default,
            selectedItemId: id,
            componentExportCount: searchResult.exportedComponents.length,
          });
        },
        [onNewStory],
      ),
      ListItem = (0, import_react24.useCallback)(
        ({ virtualItem, selected, searchResult }) => {
          let itemError = errorItemId === searchResult.filepath,
            itemSelected = selected === virtualItem.index;
          return import_react24.default.createElement(
            FileListItem,
            {
              "aria-expanded": itemSelected,
              "aria-controls": `file-list-export-${virtualItem.index}`,
              id: `file-list-item-wrapper-${virtualItem.index}`,
            },
            import_react24.default.createElement(
              FileListItemContentWrapper,
              {
                className: "file-list-item",
                selected: itemSelected,
                error: itemError,
                disabled:
                  searchResult.exportedComponents === null ||
                  searchResult.exportedComponents?.length === 0,
              },
              import_react24.default.createElement(
                FileListIconWrapper,
                { error: itemError },
                import_react24.default.createElement(ComponentIcon, null),
              ),
              import_react24.default.createElement(
                FileListItemContent,
                null,
                import_react24.default.createElement(
                  FileListItemLabel,
                  { error: itemError },
                  searchResult.filepath.split("/").at(-1),
                ),
                import_react24.default.createElement(
                  FileListItemPath,
                  null,
                  searchResult.filepath,
                ),
              ),
              itemSelected
                ? import_react24.default.createElement(
                    ChevronDownIconStyled,
                    null,
                  )
                : import_react24.default.createElement(
                    ChevronRightIconStyled,
                    null,
                  ),
            ),
            searchResult?.exportedComponents?.length > 1 &&
              itemSelected &&
              import_react24.default.createElement(
                FileListExport,
                {
                  role: "region",
                  id: `file-list-export-${virtualItem.index}`,
                  "aria-labelledby": `file-list-item-wrapper-${virtualItem.index}`,
                  onClick: (e3) => {
                    e3.stopPropagation();
                  },
                  onKeyUp: (e3) => {
                    e3.key === "Enter" && e3.stopPropagation();
                  },
                },
                searchResult.exportedComponents?.map(
                  (component, itemExportId) => {
                    let itemExportError =
                        errorItemId ===
                        `${searchResult.filepath}_${itemExportId}`,
                      position =
                        itemExportId === 0
                          ? "first"
                          : itemExportId ===
                              searchResult.exportedComponents.length - 1
                            ? "last"
                            : "middle";
                    return import_react24.default.createElement(
                      FileListItemExport,
                      {
                        tabIndex: 0,
                        "data-index-position": `${virtualItem.index}_${position}`,
                        key: component.name,
                        error: itemExportError,
                        onClick: () => {
                          handleFileItemComponentSelection({
                            searchResult,
                            component,
                            id: `${searchResult.filepath}_${itemExportId}`,
                          });
                        },
                        onKeyUp: (event) => {
                          event.key === "Enter" &&
                            handleFileItemComponentSelection({
                              searchResult,
                              component,
                              id: `${searchResult.filepath}_${itemExportId}`,
                            });
                        },
                      },
                      import_react24.default.createElement(
                        FileListItemExportName,
                        null,
                        import_react24.default.createElement(
                          ComponentIcon,
                          null,
                        ),
                        component.default
                          ? import_react24.default.createElement(
                              import_react24.default.Fragment,
                              null,
                              import_react24.default.createElement(
                                FileListItemExportNameContent,
                                null,
                                searchResult.filepath
                                  .split("/")
                                  .at(-1)
                                  ?.split(".")
                                  ?.at(0),
                              ),
                              import_react24.default.createElement(
                                DefaultExport,
                                null,
                                "Default export",
                              ),
                            )
                          : component.name,
                      ),
                      import_react24.default.createElement(
                        ChevronRightIconStyled,
                        null,
                      ),
                    );
                  },
                ),
              ),
          );
        },
        [handleFileItemComponentSelection, errorItemId],
      );
    return isLoading && (searchResults === null || searchResults?.length === 0)
      ? import_react24.default.createElement(
          FileSearchListLoadingSkeleton,
          null,
        )
      : searchResults?.length === 0
        ? import_react24.default.createElement(
            NoResults,
            null,
            import_react24.default.createElement(
              "p",
              null,
              "We could not find any file with that name",
            ),
            import_react24.default.createElement(
              NoResultsDescription,
              null,
              "You may want to try using different keywords, check for typos, and adjust your filters",
            ),
          )
        : sortedSearchResults?.length > 0
          ? import_react24.default.createElement(
              FileListWrapper,
              null,
              import_react24.default.createElement(
                FileList,
                { ref: parentRef },
                import_react24.default.createElement(
                  FileListUl,
                  { style: { height: `${rowVirtualizer.getTotalSize()}px` } },
                  rowVirtualizer.getVirtualItems().map((virtualItem) => {
                    let searchResult = sortedSearchResults[virtualItem.index],
                      noExports =
                        searchResult.exportedComponents === null ||
                        searchResult.exportedComponents?.length === 0,
                      itemProps = {};
                    return import_react24.default.createElement(
                      FileListLi,
                      {
                        key: virtualItem.key,
                        "data-index": virtualItem.index,
                        ref: rowVirtualizer.measureElement,
                        onClick: () => {
                          handleFileItemSelection({
                            virtualItem,
                            itemId: searchResult.filepath,
                            searchResult,
                          });
                        },
                        onKeyUp: (event) => {
                          event.key === "Enter" &&
                            handleFileItemSelection({
                              virtualItem,
                              itemId: searchResult.filepath,
                              searchResult,
                            });
                        },
                        style: {
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          transform: `translateY(${virtualItem.start}px)`,
                        },
                        tabIndex: 0,
                      },
                      noExports
                        ? import_react24.default.createElement(
                            WithTooltip,
                            {
                              ...itemProps,
                              style: { width: "100%" },
                              hasChrome: !1,
                              closeOnOutsideClick: !0,
                              tooltip: import_react24.default.createElement(
                                TooltipNote,
                                {
                                  note: noExports
                                    ? "We can't evaluate exports for this file. You can't create a story for it automatically"
                                    : null,
                                },
                              ),
                            },
                            import_react24.default.createElement(ListItem, {
                              searchResult,
                              selected: selectedItem,
                              virtualItem,
                            }),
                          )
                        : import_react24.default.createElement(ListItem, {
                            ...itemProps,
                            key: virtualItem.index,
                            searchResult,
                            selected: selectedItem,
                            virtualItem,
                          }),
                    );
                  }),
                ),
              ),
            )
          : null;
  });
var import_react25 = __toESM(require_react());
function useMeasure() {
  let [dimensions, setDimensions] = import_react25.default.useState({
      width: null,
      height: null,
    }),
    prevObserver = import_react25.default.useRef(null);
  return [
    import_react25.default.useCallback((node) => {
      if (
        (prevObserver.current &&
          (prevObserver.current.disconnect(), (prevObserver.current = null)),
        node?.nodeType === Node.ELEMENT_NODE)
      ) {
        let observer = new ResizeObserver(([entry]) => {
          if (entry && entry.borderBoxSize) {
            let { inlineSize: width, blockSize: height } =
              entry.borderBoxSize[0];
            setDimensions({ width, height });
          }
        });
        observer.observe(node), (prevObserver.current = observer);
      }
    }, []),
    dimensions,
  ];
}
var MODAL_HEIGHT = 418,
  ModalStyled = newStyled(Modal)(() => ({
    boxShadow: "none",
    background: "transparent",
  })),
  ModalChild = newStyled.div(({ theme, height }) => ({
    backgroundColor: theme.background.bar,
    borderRadius: 6,
    boxShadow:
      "rgba(255, 255, 255, 0.05) 0 0 0 1px inset, rgba(14, 18, 22, 0.35) 0px 10px 18px -10px",
    padding: "16px",
    transition: "height 0.3s",
    height: height ? `${height + 32}px` : "auto",
    overflow: "hidden",
  })),
  ModalContent = newStyled(Modal.Content)(({ theme }) => ({
    margin: 0,
    color: theme.base === "dark" ? theme.color.lighter : theme.color.mediumdark,
  })),
  ModalInput = newStyled(Form.Input)(({ theme }) => ({
    paddingLeft: 40,
    paddingRight: 28,
    fontSize: 14,
    height: 40,
    ...(theme.base === "light" && { color: theme.color.darkest }),
    "::placeholder": { color: theme.color.mediumdark },
    "&:invalid:not(:placeholder-shown)": {
      boxShadow: `${theme.color.negative} 0 0 0 1px inset`,
    },
    "&::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration":
      { display: "none" },
  })),
  SearchField = newStyled.div({
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    position: "relative",
  }),
  SearchIconWrapper = newStyled.div(({ theme }) => ({
    position: "absolute",
    top: 0,
    left: 16,
    zIndex: 1,
    pointerEvents: "none",
    color: theme.darkest,
    display: "flex",
    alignItems: "center",
    height: "100%",
  })),
  LoadingIcon = newStyled.div(({ theme }) => ({
    position: "absolute",
    top: 0,
    right: 16,
    zIndex: 1,
    color: theme.darkest,
    display: "flex",
    alignItems: "center",
    height: "100%",
    "@keyframes spin": {
      from: { transform: "rotate(0deg)" },
      to: { transform: "rotate(360deg)" },
    },
    animation: "spin 1s linear infinite",
  })),
  ModalError = newStyled(Modal.Error)({
    position: "absolute",
    padding: "8px 40px 8px 16px",
    bottom: 0,
    maxHeight: "initial",
    width: "100%",
    div: { wordBreak: "break-word" },
    "> div": { padding: 0 },
  }),
  ModalErrorCloseIcon = newStyled(CloseAltIcon)({
    position: "absolute",
    top: 4,
    right: -24,
    cursor: "pointer",
  }),
  FileSearchModal = ({
    open,
    onOpenChange,
    fileSearchQuery,
    setFileSearchQuery,
    isLoading,
    error,
    searchResults,
    onCreateNewStory,
    setError,
    container,
  }) => {
    let [modalContentRef, modalContentDimensions] = useMeasure(),
      [modalMaxHeight, setModalMaxHeight] = (0, import_react26.useState)(
        modalContentDimensions.height,
      ),
      [, startTransition] = (0, import_react26.useTransition)(),
      [searchInputValue, setSearchInputValue] = (0, import_react26.useState)(
        fileSearchQuery,
      );
    return (
      (0, import_react26.useEffect)(() => {
        modalMaxHeight < modalContentDimensions.height &&
          setModalMaxHeight(modalContentDimensions.height);
      }, [modalContentDimensions.height, modalMaxHeight]),
      import_react26.default.createElement(
        ModalStyled,
        {
          height: MODAL_HEIGHT,
          width: 440,
          open,
          onOpenChange,
          onEscapeKeyDown: () => {
            onOpenChange(!1);
          },
          onInteractOutside: () => {
            onOpenChange(!1);
          },
          container,
        },
        import_react26.default.createElement(
          ModalChild,
          {
            height:
              fileSearchQuery === ""
                ? modalContentDimensions.height
                : modalMaxHeight,
          },
          import_react26.default.createElement(
            ModalContent,
            { ref: modalContentRef },
            import_react26.default.createElement(
              Modal.Header,
              null,
              import_react26.default.createElement(
                Modal.Title,
                null,
                "Add a new story",
              ),
              import_react26.default.createElement(
                Modal.Description,
                null,
                "We will create a new story for your component",
              ),
            ),
            import_react26.default.createElement(
              SearchField,
              null,
              import_react26.default.createElement(
                SearchIconWrapper,
                null,
                import_react26.default.createElement(SearchIcon, null),
              ),
              import_react26.default.createElement(ModalInput, {
                placeholder: "./components/**/*.tsx",
                type: "search",
                required: !0,
                autoFocus: !0,
                value: searchInputValue,
                onChange: (e3) => {
                  let newValue = e3.target.value;
                  setSearchInputValue(newValue),
                    startTransition(() => {
                      setFileSearchQuery(newValue);
                    });
                },
              }),
              isLoading &&
                import_react26.default.createElement(
                  LoadingIcon,
                  null,
                  import_react26.default.createElement(SyncIcon, null),
                ),
            ),
            import_react26.default.createElement(FileSearchList, {
              errorItemId: error?.selectedItemId,
              isLoading,
              searchResults,
              onNewStory: onCreateNewStory,
            }),
          ),
        ),
        error &&
          fileSearchQuery !== "" &&
          import_react26.default.createElement(
            ModalError,
            null,
            import_react26.default.createElement("div", null, error.error),
            import_react26.default.createElement(ModalErrorCloseIcon, {
              onClick: () => {
                setError(null);
              },
            }),
          ),
      )
    );
  };
var stringifyArgs = (args) =>
    JSON.stringify(args, (_2, value) =>
      typeof value == "function" ? "__sb_empty_function_arg__" : value,
    ),
  CreateNewStoryFileModal = ({ open, onOpenChange }) => {
    let [isLoading, setLoading] = (0, import_react27.useState)(!1),
      [fileSearchQuery, setFileSearchQuery] = (0, import_react27.useState)(""),
      fileSearchQueryDebounced = useDebounce(fileSearchQuery, 600),
      fileSearchQueryDeferred = (0, import_react27.useDeferredValue)(
        fileSearchQueryDebounced,
      ),
      emittedValue = (0, import_react27.useRef)(null),
      [error, setError] = (0, import_react27.useState)(null),
      api = useStorybookApi(),
      [searchResults, setSearchResults] = (0, import_react27.useState)(null),
      handleSuccessfullyCreatedStory = (0, import_react27.useCallback)(
        (componentExportName) => {
          api.addNotification({
            id: "create-new-story-file-success",
            content: {
              headline: "Story file created",
              subHeadline: `${componentExportName} was created`,
            },
            duration: 8e3,
            icon: import_react27.default.createElement(CheckIcon, null),
          }),
            onOpenChange(!1);
        },
        [api, onOpenChange],
      ),
      handleStoryAlreadyExists = (0, import_react27.useCallback)(() => {
        api.addNotification({
          id: "create-new-story-file-error",
          content: {
            headline: "Story already exists",
            subHeadline: "Successfully navigated to existing story",
          },
          duration: 8e3,
          icon: import_react27.default.createElement(CheckIcon, null),
        }),
          onOpenChange(!1);
      }, [api, onOpenChange]),
      handleFileSearch = (0, import_react27.useCallback)(() => {
        setLoading(!0);
        let channel = addons.getChannel(),
          set = (data) => {
            data.id === fileSearchQueryDeferred &&
              (data.success
                ? setSearchResults(data.payload.files)
                : setError({ error: data.error }),
              channel.off(FILE_COMPONENT_SEARCH_RESPONSE, set),
              setLoading(!1),
              (emittedValue.current = null));
          };
        return (
          channel.on(FILE_COMPONENT_SEARCH_RESPONSE, set),
          fileSearchQueryDeferred !== "" &&
          emittedValue.current !== fileSearchQueryDeferred
            ? ((emittedValue.current = fileSearchQueryDeferred),
              channel.emit(FILE_COMPONENT_SEARCH_REQUEST, {
                id: fileSearchQueryDeferred,
                payload: {},
              }))
            : (setSearchResults(null), setLoading(!1)),
          () => {
            channel.off(FILE_COMPONENT_SEARCH_RESPONSE, set);
          }
        );
      }, [fileSearchQueryDeferred]),
      handleCreateNewStory = (0, import_react27.useCallback)(
        async ({
          componentExportName,
          componentFilePath,
          componentIsDefaultExport,
          componentExportCount,
          selectedItemId,
        }) => {
          try {
            let channel = addons.getChannel(),
              createNewStoryResult = await experimental_requestResponse(
                channel,
                CREATE_NEW_STORYFILE_REQUEST,
                CREATE_NEW_STORYFILE_RESPONSE,
                {
                  componentExportName,
                  componentFilePath,
                  componentIsDefaultExport,
                  componentExportCount,
                },
              );
            setError(null);
            let storyId = createNewStoryResult.storyId;
            await trySelectNewStory(api.selectStory, storyId);
            try {
              let argTypes = (
                  await experimental_requestResponse(
                    channel,
                    ARGTYPES_INFO_REQUEST,
                    ARGTYPES_INFO_RESPONSE,
                    { storyId },
                  )
                ).argTypes,
                requiredArgs = extractSeededRequiredArgs(argTypes);
              await experimental_requestResponse(
                channel,
                SAVE_STORY_REQUEST,
                SAVE_STORY_RESPONSE,
                {
                  args: stringifyArgs(requiredArgs),
                  importPath: createNewStoryResult.storyFilePath,
                  csfId: storyId,
                },
              );
            } catch {}
            handleSuccessfullyCreatedStory(componentExportName),
              handleFileSearch();
          } catch (e3) {
            switch (e3?.payload?.type) {
              case "STORY_FILE_EXISTS":
                let err = e3;
                await trySelectNewStory(api.selectStory, err.payload.kind),
                  handleStoryAlreadyExists();
                break;
              default:
                setError({ selectedItemId, error: e3?.message });
                break;
            }
          }
        },
        [
          api?.selectStory,
          handleSuccessfullyCreatedStory,
          handleFileSearch,
          handleStoryAlreadyExists,
        ],
      );
    return (
      (0, import_react27.useEffect)(() => {
        setError(null);
      }, [fileSearchQueryDeferred]),
      (0, import_react27.useEffect)(
        () => handleFileSearch(),
        [handleFileSearch],
      ),
      import_react27.default.createElement(FileSearchModal, {
        error,
        fileSearchQuery,
        fileSearchQueryDeferred,
        onCreateNewStory: handleCreateNewStory,
        isLoading,
        onOpenChange,
        open,
        searchResults,
        setError,
        setFileSearchQuery,
      })
    );
  };
var { document: document6 } = scope,
  DEFAULT_MAX_SEARCH_RESULTS = 50,
  options = {
    shouldSort: !0,
    tokenize: !0,
    findAllMatches: !0,
    includeScore: !0,
    includeMatches: !0,
    threshold: 0.2,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: [
      { name: "name", weight: 0.7 },
      { name: "path", weight: 0.3 },
    ],
  },
  SearchBar = newStyled.div({
    display: "flex",
    flexDirection: "row",
    columnGap: 6,
  }),
  TooltipNoteWrapper = newStyled(TooltipNote)({ margin: 0 }),
  ScreenReaderLabel = newStyled.label({
    position: "absolute",
    left: -1e4,
    top: "auto",
    width: 1,
    height: 1,
    overflow: "hidden",
  }),
  CreateNewStoryButton = newStyled(IconButton)(({ theme }) => ({
    color: theme.color.mediumdark,
  })),
  SearchIconWrapper2 = newStyled.div(({ theme }) => ({
    position: "absolute",
    top: 0,
    left: 8,
    zIndex: 1,
    pointerEvents: "none",
    color: theme.textMutedColor,
    display: "flex",
    alignItems: "center",
    height: "100%",
  })),
  SearchField2 = newStyled.div({
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    position: "relative",
  }),
  Input = newStyled.input(({ theme }) => ({
    appearance: "none",
    height: 28,
    paddingLeft: 28,
    paddingRight: 28,
    border: 0,
    boxShadow: `${theme.button.border} 0 0 0 1px inset`,
    background: "transparent",
    borderRadius: 4,
    fontSize: `${theme.typography.size.s1 + 1}px`,
    fontFamily: "inherit",
    transition: "all 150ms",
    color: theme.color.defaultText,
    width: "100%",
    "&:focus, &:active": {
      outline: 0,
      borderColor: theme.color.secondary,
      background: theme.background.app,
    },
    "&::placeholder": { color: theme.textMutedColor, opacity: 1 },
    "&:valid ~ code, &:focus ~ code": { display: "none" },
    "&:invalid ~ svg": { display: "none" },
    "&:valid ~ svg": { display: "block" },
    "&::-ms-clear": { display: "none" },
    "&::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration":
      { display: "none" },
  })),
  FocusKey = newStyled.code(({ theme }) => ({
    position: "absolute",
    top: 6,
    right: 9,
    height: 16,
    zIndex: 1,
    lineHeight: "16px",
    textAlign: "center",
    fontSize: "11px",
    color: theme.base === "light" ? theme.color.dark : theme.textMutedColor,
    userSelect: "none",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    gap: 4,
  })),
  FocusKeyCmd = newStyled.span({ fontSize: "14px" }),
  ClearIcon = newStyled.div(({ theme }) => ({
    position: "absolute",
    top: 0,
    right: 8,
    zIndex: 1,
    color: theme.textMutedColor,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    height: "100%",
  })),
  FocusContainer = newStyled.div({ outline: 0 }),
  isDevelopment = scope.CONFIG_TYPE === "DEVELOPMENT",
  isRendererReact = scope.STORYBOOK_RENDERER === "react",
  Search = import_react28.default.memo(function ({
    children,
    dataset,
    enableShortcuts = !0,
    getLastViewed,
    initialQuery = "",
    showCreateStoryButton = isDevelopment && isRendererReact,
  }) {
    let api = useStorybookApi(),
      inputRef = (0, import_react28.useRef)(null),
      [inputPlaceholder, setPlaceholder] = (0, import_react28.useState)(
        "Find components",
      ),
      [allComponents, showAllComponents] = (0, import_react28.useState)(!1),
      searchShortcut = api
        ? shortcutToHumanString(api.getShortcutKeys().search)
        : "/",
      [isFileSearchModalOpen, setIsFileSearchModalOpen] = (0,
      import_react28.useState)(!1),
      makeFuse = (0, import_react28.useCallback)(() => {
        let list = dataset.entries.reduce((acc, [refId, { index, status }]) => {
          let groupStatus = getGroupStatus(index || {}, status);
          return (
            index &&
              acc.push(
                ...Object.values(index).map((item) => {
                  let statusValue =
                    status && status[item.id]
                      ? getHighestStatus(
                          Object.values(status[item.id] || {}).map(
                            (s2) => s2.status,
                          ),
                        )
                      : null;
                  return {
                    ...searchItem(item, dataset.hash[refId]),
                    status: statusValue || groupStatus[item.id] || null,
                  };
                }),
              ),
            acc
          );
        }, []);
        return new import_fuse.default(list, options);
      }, [dataset]),
      getResults = (0, import_react28.useCallback)(
        (input) => {
          let fuse = makeFuse();
          if (!input) return [];
          let results = [],
            resultIds = new Set(),
            distinctResults = fuse
              .search(input)
              .filter(({ item }) =>
                !(
                  item.type === "component" ||
                  item.type === "docs" ||
                  item.type === "story"
                ) || resultIds.has(item.parent)
                  ? !1
                  : (resultIds.add(item.id), !0),
              );
          return (
            distinctResults.length &&
              ((results = distinctResults.slice(
                0,
                allComponents ? 1e3 : DEFAULT_MAX_SEARCH_RESULTS,
              )),
              distinctResults.length > DEFAULT_MAX_SEARCH_RESULTS &&
                !allComponents &&
                results.push({
                  showAll: () => showAllComponents(!0),
                  totalCount: distinctResults.length,
                  moreCount:
                    distinctResults.length - DEFAULT_MAX_SEARCH_RESULTS,
                })),
            results
          );
        },
        [allComponents, makeFuse],
      ),
      onSelect = (0, import_react28.useCallback)(
        (selectedItem) => {
          if (isSearchResult(selectedItem)) {
            let { id, refId } = selectedItem.item;
            api?.selectStory(id, void 0, {
              ref: refId !== DEFAULT_REF_ID && refId,
            }),
              inputRef.current.blur(),
              showAllComponents(!1);
            return;
          }
          isExpandType(selectedItem) && selectedItem.showAll();
        },
        [api],
      ),
      onInputValueChange = (0, import_react28.useCallback)(
        (inputValue, stateAndHelpers) => {
          showAllComponents(!1);
        },
        [],
      ),
      stateReducer2 = (0, import_react28.useCallback)((state, changes) => {
        switch (changes.type) {
          case Downshift$1.stateChangeTypes.blurInput:
            return {
              ...changes,
              inputValue: state.inputValue,
              isOpen: state.inputValue && !state.selectedItem,
            };
          case Downshift$1.stateChangeTypes.mouseUp:
            return state;
          case Downshift$1.stateChangeTypes.keyDownEscape:
            return state.inputValue
              ? { ...changes, inputValue: "", isOpen: !0, selectedItem: null }
              : { ...changes, isOpen: !1, selectedItem: null };
          case Downshift$1.stateChangeTypes.clickItem:
          case Downshift$1.stateChangeTypes.keyDownEnter:
            return isSearchResult(changes.selectedItem)
              ? { ...changes, inputValue: state.inputValue }
              : isExpandType(changes.selectedItem)
                ? state
                : changes;
          default:
            return changes;
        }
      }, []),
      { isMobile } = useLayout();
    return import_react28.default.createElement(
      Downshift$1,
      {
        initialInputValue: initialQuery,
        stateReducer: stateReducer2,
        itemToString: (result) => result?.item?.name || "",
        scrollIntoView: (e3) => scrollIntoView(e3),
        onSelect,
        onInputValueChange,
      },
      ({
        isOpen,
        openMenu,
        closeMenu,
        inputValue,
        clearSelection,
        getInputProps,
        getItemProps,
        getLabelProps,
        getMenuProps,
        getRootProps,
        highlightedIndex,
      }) => {
        let input = inputValue ? inputValue.trim() : "",
          results = input ? getResults(input) : [],
          lastViewed = !input && getLastViewed();
        lastViewed &&
          lastViewed.length &&
          (results = lastViewed.reduce((acc, { storyId, refId }) => {
            let data = dataset.hash[refId];
            if (data && data.index && data.index[storyId]) {
              let story = data.index[storyId],
                item =
                  story.type === "story" ? data.index[story.parent] : story;
              acc.some(
                (res) => res.item.refId === refId && res.item.id === item.id,
              ) ||
                acc.push({
                  item: searchItem(item, dataset.hash[refId]),
                  matches: [],
                  score: 0,
                });
            }
            return acc;
          }, []));
        let inputId = "storybook-explorer-searchfield",
          inputProps = getInputProps({
            id: inputId,
            ref: inputRef,
            required: !0,
            type: "search",
            placeholder: inputPlaceholder,
            onFocus: () => {
              openMenu(), setPlaceholder("Type to find...");
            },
            onBlur: () => setPlaceholder("Find components"),
            onKeyDown: (e3) => {
              e3.key === "Escape" &&
                inputValue.length === 0 &&
                inputRef.current.blur();
            },
          }),
          labelProps = getLabelProps({ htmlFor: inputId });
        return import_react28.default.createElement(
          import_react28.default.Fragment,
          null,
          import_react28.default.createElement(
            ScreenReaderLabel,
            { ...labelProps },
            "Search for components",
          ),
          import_react28.default.createElement(
            SearchBar,
            null,
            import_react28.default.createElement(
              SearchField2,
              {
                ...getRootProps({ refKey: "" }, { suppressRefError: !0 }),
                className: "search-field",
              },
              import_react28.default.createElement(
                SearchIconWrapper2,
                null,
                import_react28.default.createElement(SearchIcon, null),
              ),
              import_react28.default.createElement(Input, { ...inputProps }),
              !isMobile &&
                enableShortcuts &&
                !isOpen &&
                import_react28.default.createElement(
                  FocusKey,
                  null,
                  searchShortcut === "\u2318 K"
                    ? import_react28.default.createElement(
                        import_react28.default.Fragment,
                        null,
                        import_react28.default.createElement(
                          FocusKeyCmd,
                          null,
                          "\u2318",
                        ),
                        "K",
                      )
                    : searchShortcut,
                ),
              isOpen &&
                import_react28.default.createElement(
                  ClearIcon,
                  { onClick: () => clearSelection() },
                  import_react28.default.createElement(CloseIcon, null),
                ),
            ),
            showCreateStoryButton &&
              import_react28.default.createElement(
                import_react28.default.Fragment,
                null,
                import_react28.default.createElement(
                  WithTooltip,
                  {
                    trigger: "hover",
                    hasChrome: !1,
                    tooltip: import_react28.default.createElement(
                      TooltipNoteWrapper,
                      { note: "Create a new story" },
                    ),
                  },
                  import_react28.default.createElement(
                    CreateNewStoryButton,
                    {
                      onClick: () => {
                        setIsFileSearchModalOpen(!0);
                      },
                      variant: "outline",
                    },
                    import_react28.default.createElement(PlusIcon, null),
                  ),
                ),
                import_react28.default.createElement(CreateNewStoryFileModal, {
                  open: isFileSearchModalOpen,
                  onOpenChange: setIsFileSearchModalOpen,
                }),
              ),
          ),
          import_react28.default.createElement(
            FocusContainer,
            { tabIndex: 0, id: "storybook-explorer-menu" },
            children({
              query: input,
              results,
              isBrowsing:
                !isOpen && document6.activeElement !== inputRef.current,
              closeMenu,
              getMenuProps,
              getItemProps,
              highlightedIndex,
            }),
          ),
        );
      },
    );
  });
var import_react29 = __toESM(require_react());
var { document: document7 } = scope,
  ResultsList = newStyled.ol({ listStyle: "none", margin: 0, padding: 0 }),
  ResultRow = newStyled.li(({ theme, isHighlighted }) => ({
    width: "100%",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "start",
    textAlign: "left",
    color: "inherit",
    fontSize: `${theme.typography.size.s2}px`,
    background: isHighlighted ? theme.background.hoverable : "transparent",
    minHeight: 28,
    borderRadius: 4,
    gap: 6,
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 8,
    paddingRight: 8,
    "&:hover, &:focus": {
      background: curriedTransparentize$1(0.93, theme.color.secondary),
      outline: "none",
    },
  })),
  IconWrapper = newStyled.div({ marginTop: 2 }),
  ResultRowContent = newStyled.div(() => ({
    display: "flex",
    flexDirection: "column",
  })),
  NoResults2 = newStyled.div(({ theme }) => ({
    marginTop: 20,
    textAlign: "center",
    fontSize: `${theme.typography.size.s2}px`,
    lineHeight: "18px",
    color: theme.color.defaultText,
    small: {
      color: theme.barTextColor,
      fontSize: `${theme.typography.size.s1}px`,
    },
  })),
  Mark = newStyled.mark(({ theme }) => ({
    background: "transparent",
    color: theme.color.secondary,
  })),
  MoreWrapper = newStyled.div({ marginTop: 8 }),
  RecentlyOpenedTitle = newStyled.div(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    fontSize: `${theme.typography.size.s1 - 1}px`,
    fontWeight: theme.typography.weight.bold,
    minHeight: 28,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: theme.textMutedColor,
    marginTop: 16,
    marginBottom: 4,
    alignItems: "center",
    ".search-result-recentlyOpened-clear": { visibility: "hidden" },
    "&:hover": {
      ".search-result-recentlyOpened-clear": { visibility: "visible" },
    },
  })),
  Highlight = import_react29.default.memo(function ({ children, match }) {
    if (!match) return children;
    let { value, indices } = match,
      { nodes: result } = indices.reduce(
        ({ cursor, nodes }, [start, end], index, { length }) => (
          nodes.push(
            import_react29.default.createElement(
              "span",
              { key: `${index}-1` },
              value.slice(cursor, start),
            ),
          ),
          nodes.push(
            import_react29.default.createElement(
              Mark,
              { key: `${index}-2` },
              value.slice(start, end + 1),
            ),
          ),
          index === length - 1 &&
            nodes.push(
              import_react29.default.createElement(
                "span",
                { key: `${index}-3` },
                value.slice(end + 1),
              ),
            ),
          { cursor: end + 1, nodes }
        ),
        { cursor: 0, nodes: [] },
      );
    return import_react29.default.createElement("span", null, result);
  }),
  Title = newStyled.div(({ theme }) => ({
    display: "grid",
    justifyContent: "start",
    gridAutoColumns: "auto",
    gridAutoFlow: "column",
    "& > span": {
      display: "block",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  })),
  Path = newStyled.div(({ theme }) => ({
    display: "grid",
    justifyContent: "start",
    gridAutoColumns: "auto",
    gridAutoFlow: "column",
    fontSize: `${theme.typography.size.s1 - 1}px`,
    "& > span": {
      display: "block",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    "& > span + span": { "&:before": { content: "' / '" } },
  })),
  Result = import_react29.default.memo(function ({
    item,
    matches,
    onClick,
    ...props
  }) {
    let click = (0, import_react29.useCallback)(
        (event) => {
          event.preventDefault(), onClick?.(event);
        },
        [onClick],
      ),
      api = useStorybookApi();
    (0, import_react29.useEffect)(() => {
      api &&
        props.isHighlighted &&
        item.type === "component" &&
        api.emit(
          PRELOAD_ENTRIES,
          { ids: [item.children[0]] },
          { options: { target: item.refId } },
        );
    }, [props.isHighlighted, item]);
    let nameMatch = matches.find((match) => match.key === "name"),
      pathMatches = matches.filter((match) => match.key === "path"),
      [i2] = item.status ? statusMapping[item.status] : [];
    return import_react29.default.createElement(
      ResultRow,
      { ...props, onClick: click },
      import_react29.default.createElement(
        IconWrapper,
        null,
        item.type === "component" &&
          import_react29.default.createElement(
            TypeIcon,
            {
              viewBox: "0 0 14 14",
              width: "14",
              height: "14",
              type: "component",
            },
            import_react29.default.createElement(UseSymbol, {
              type: "component",
            }),
          ),
        item.type === "story" &&
          import_react29.default.createElement(
            TypeIcon,
            { viewBox: "0 0 14 14", width: "14", height: "14", type: "story" },
            import_react29.default.createElement(UseSymbol, { type: "story" }),
          ),
        !(item.type === "component" || item.type === "story") &&
          import_react29.default.createElement(
            TypeIcon,
            {
              viewBox: "0 0 14 14",
              width: "14",
              height: "14",
              type: "document",
            },
            import_react29.default.createElement(UseSymbol, {
              type: "document",
            }),
          ),
      ),
      import_react29.default.createElement(
        ResultRowContent,
        { className: "search-result-item--label" },
        import_react29.default.createElement(
          Title,
          null,
          import_react29.default.createElement(
            Highlight,
            { match: nameMatch },
            item.name,
          ),
        ),
        import_react29.default.createElement(
          Path,
          null,
          item.path.map((group, index) =>
            import_react29.default.createElement(
              "span",
              { key: index },
              import_react29.default.createElement(
                Highlight,
                {
                  match: pathMatches.find(
                    (match) => match.arrayIndex === index,
                  ),
                },
                group,
              ),
            ),
          ),
        ),
      ),
      item.status ? i2 : null,
    );
  }),
  SearchResults = import_react29.default.memo(function ({
    query,
    results,
    closeMenu,
    getMenuProps,
    getItemProps,
    highlightedIndex,
    isLoading = !1,
    enableShortcuts = !0,
    clearLastViewed,
  }) {
    let api = useStorybookApi();
    (0, import_react29.useEffect)(() => {
      let handleEscape = (event) => {
        if (
          !(!enableShortcuts || isLoading || event.repeat) &&
          matchesModifiers(!1, event) &&
          matchesKeyCode("Escape", event)
        ) {
          if (event.target?.id === "storybook-explorer-searchfield") return;
          event.preventDefault(), closeMenu();
        }
      };
      return (
        document7.addEventListener("keydown", handleEscape),
        () => document7.removeEventListener("keydown", handleEscape)
      );
    }, [closeMenu, enableShortcuts, isLoading]);
    let mouseOverHandler = (0, import_react29.useCallback)((event) => {
        if (!api) return;
        let currentTarget = event.currentTarget,
          storyId = currentTarget.getAttribute("data-id"),
          refId = currentTarget.getAttribute("data-refid"),
          item = api.resolveStory(
            storyId,
            refId === "storybook_internal" ? void 0 : refId,
          );
        item?.type === "component" &&
          api.emit(PRELOAD_ENTRIES, {
            ids: [item.isLeaf ? item.id : item.children[0]],
            options: { target: refId },
          });
      }, []),
      handleClearLastViewed = () => {
        clearLastViewed(), closeMenu();
      };
    return import_react29.default.createElement(
      ResultsList,
      { ...getMenuProps() },
      results.length > 0 &&
        !query &&
        import_react29.default.createElement(
          RecentlyOpenedTitle,
          { className: "search-result-recentlyOpened" },
          "Recently opened",
          import_react29.default.createElement(
            IconButton,
            {
              className: "search-result-recentlyOpened-clear",
              onClick: handleClearLastViewed,
            },
            import_react29.default.createElement(TrashIcon, null),
          ),
        ),
      results.length === 0 &&
        query &&
        import_react29.default.createElement(
          "li",
          null,
          import_react29.default.createElement(
            NoResults2,
            null,
            import_react29.default.createElement(
              "strong",
              null,
              "No components found",
            ),
            import_react29.default.createElement("br", null),
            import_react29.default.createElement(
              "small",
              null,
              "Find components by name or path.",
            ),
          ),
        ),
      results.map((result, index) => {
        if (isExpandType(result))
          return import_react29.default.createElement(
            MoreWrapper,
            { key: "search-result-expand" },
            import_react29.default.createElement(
              Button,
              {
                ...result,
                ...getItemProps({ key: index, index, item: result }),
                size: "small",
              },
              "Show ",
              result.moreCount,
              " more results",
            ),
          );
        let { item } = result,
          key = `${item.refId}::${item.id}`;
        return import_react29.default.createElement(Result, {
          key: item.id,
          ...result,
          ...getItemProps({ key, index, item: result }),
          isHighlighted: highlightedIndex === index,
          "data-id": result.item.id,
          "data-refid": result.item.refId,
          onMouseOver: mouseOverHandler,
          className: "search-result-item",
        });
      }),
    );
  });
var import_debounce = __toESM(require_debounce()),
  import_react30 = __toESM(require_react()),
  import_store2 = __toESM(require_store2()),
  save = (0, import_debounce.default)(
    (value) => import_store2.default.set("lastViewedStoryIds", value),
    1e3,
  ),
  useLastViewed = (selection) => {
    let initialLastViewedStoryIds = (0, import_react30.useMemo)(() => {
        let items = import_store2.default.get("lastViewedStoryIds");
        return !items || !Array.isArray(items)
          ? []
          : items.some(
                (item) => typeof item == "object" && item.storyId && item.refId,
              )
            ? items
            : [];
      }, [import_store2.default]),
      lastViewedRef = (0, import_react30.useRef)(initialLastViewedStoryIds),
      updateLastViewed = (0, import_react30.useCallback)(
        (story) => {
          let items = lastViewedRef.current,
            index = items.findIndex(
              ({ storyId, refId }) =>
                storyId === story.storyId && refId === story.refId,
            );
          index !== 0 &&
            (index === -1
              ? (lastViewedRef.current = [story, ...items])
              : (lastViewedRef.current = [
                  story,
                  ...items.slice(0, index),
                  ...items.slice(index + 1),
                ]),
            save(lastViewedRef.current));
        },
        [lastViewedRef],
      );
    return (
      (0, import_react30.useEffect)(() => {
        selection && updateLastViewed(selection);
      }, [selection]),
      {
        getLastViewed: (0, import_react30.useCallback)(
          () => lastViewedRef.current,
          [lastViewedRef],
        ),
        clearLastViewed: (0, import_react30.useCallback)(() => {
          (lastViewedRef.current = lastViewedRef.current.slice(0, 1)),
            save(lastViewedRef.current);
        }, [lastViewedRef]),
      }
    );
  };
var DEFAULT_REF_ID = "storybook_internal",
  Container2 = newStyled.nav(({ theme }) => ({
    position: "absolute",
    zIndex: 1,
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    background: theme.background.content,
    [MEDIA_DESKTOP_BREAKPOINT]: { background: theme.background.app },
  })),
  Top = newStyled(Spaced)({
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 20,
    paddingTop: 16,
    flex: 1,
  }),
  Bottom = newStyled.div(({ theme }) => ({
    borderTop: `1px solid ${theme.appBorderColor}`,
    padding: theme.layoutMargin / 2,
    display: "flex",
    flexWrap: "wrap",
    gap: theme.layoutMargin / 2,
    backgroundColor: theme.barBg,
    "&:empty": { display: "none" },
  })),
  Swap = import_react31.default.memo(function ({ children, condition }) {
    let [a2, b2] = import_react31.default.Children.toArray(children);
    return import_react31.default.createElement(
      import_react31.default.Fragment,
      null,
      import_react31.default.createElement(
        "div",
        { style: { display: condition ? "block" : "none" } },
        a2,
      ),
      import_react31.default.createElement(
        "div",
        { style: { display: condition ? "none" : "block" } },
        b2,
      ),
    );
  }),
  useCombination = (index, indexError, previewInitialized, status, refs) => {
    let hash = (0, import_react31.useMemo)(
      () => ({
        [DEFAULT_REF_ID]: {
          index,
          indexError,
          previewInitialized,
          status,
          title: null,
          id: DEFAULT_REF_ID,
          url: "iframe.html",
        },
        ...refs,
      }),
      [refs, index, indexError, previewInitialized, status],
    );
    return (0, import_react31.useMemo)(
      () => ({ hash, entries: Object.entries(hash) }),
      [hash],
    );
  },
  Sidebar = import_react31.default.memo(function ({
    storyId = null,
    refId = DEFAULT_REF_ID,
    index,
    indexError,
    status,
    previewInitialized,
    menu,
    extra,
    bottom = [],
    menuHighlighted = !1,
    enableShortcuts = !0,
    refs = {},
    onMenuClick,
    showCreateStoryButton,
  }) {
    let selected = (0, import_react31.useMemo)(
        () => storyId && { storyId, refId },
        [storyId, refId],
      ),
      dataset = useCombination(
        index,
        indexError,
        previewInitialized,
        status,
        refs,
      ),
      isLoading = !index && !indexError,
      lastViewedProps = useLastViewed(selected);
    return import_react31.default.createElement(
      Container2,
      { className: "container sidebar-container" },
      import_react31.default.createElement(
        ScrollArea,
        { vertical: !0, offset: 3, scrollbarSize: 6 },
        import_react31.default.createElement(
          Top,
          { row: 1.6 },
          import_react31.default.createElement(Heading, {
            className: "sidebar-header",
            menuHighlighted,
            menu,
            extra,
            skipLinkHref: "#storybook-preview-wrapper",
            isLoading,
            onMenuClick,
          }),
          import_react31.default.createElement(
            Search,
            {
              dataset,
              enableShortcuts,
              showCreateStoryButton,
              ...lastViewedProps,
            },
            ({
              query,
              results,
              isBrowsing,
              closeMenu,
              getMenuProps,
              getItemProps,
              highlightedIndex,
            }) =>
              import_react31.default.createElement(
                Swap,
                { condition: isBrowsing },
                import_react31.default.createElement(Explorer, {
                  dataset,
                  selected,
                  isLoading,
                  isBrowsing,
                }),
                import_react31.default.createElement(SearchResults, {
                  query,
                  results,
                  closeMenu,
                  getMenuProps,
                  getItemProps,
                  highlightedIndex,
                  enableShortcuts,
                  isLoading,
                  clearLastViewed: lastViewedProps.clearLastViewed,
                }),
              ),
          ),
        ),
      ),
      isLoading
        ? null
        : import_react31.default.createElement(
            Bottom,
            { className: "sb-bar" },
            bottom.map(({ id, render: Render }) =>
              import_react31.default.createElement(Render, { key: id }),
            ),
          ),
    );
  });
var import_react32 = __toESM(require_react());
var focusableUIElements = {
    storySearchField: "storybook-explorer-searchfield",
    storyListMenu: "storybook-explorer-menu",
    storyPanelRoot: "storybook-panel-root",
  },
  Key = newStyled.span(({ theme }) => ({
    display: "inline-block",
    height: 16,
    lineHeight: "16px",
    textAlign: "center",
    fontSize: "11px",
    background:
      theme.base === "light" ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.05)",
    color: theme.base === "light" ? theme.color.dark : theme.textMutedColor,
    borderRadius: 2,
    userSelect: "none",
    pointerEvents: "none",
    padding: "0 6px",
  })),
  KeyChild = newStyled.code(
    ({ theme }) => `
  padding: 0;
  vertical-align: middle;

  & + & {
    margin-left: 6px;
  }
`,
  ),
  Shortcut = ({ keys }) =>
    import_react32.default.createElement(
      import_react32.default.Fragment,
      null,
      import_react32.default.createElement(
        Key,
        null,
        keys.map((key, index) =>
          import_react32.default.createElement(
            KeyChild,
            { key },
            shortcutToHumanString([key]),
          ),
        ),
      ),
    ),
  useMenu = (
    state,
    api,
    showToolbar,
    isFullscreen,
    isPanelShown,
    isNavShown,
    enableShortcuts,
  ) => {
    let theme = useTheme(),
      shortcutKeys = api.getShortcutKeys(),
      about = (0, import_react32.useMemo)(
        () => ({
          id: "about",
          title: "About your Storybook",
          onClick: () => api.changeSettingsTab("about"),
          icon: import_react32.default.createElement(InfoIcon, null),
        }),
        [api],
      ),
      documentation = (0, import_react32.useMemo)(
        () => ({
          id: "documentation",
          title: "Documentation",
          href: api.getDocsUrl({ versioned: !0, renderer: !0 }),
          icon: import_react32.default.createElement(ShareAltIcon, null),
        }),
        [api],
      ),
      whatsNewNotificationsEnabled =
        state.whatsNewData?.status === "SUCCESS" &&
        !state.disableWhatsNewNotifications,
      isWhatsNewUnread = api.isWhatsNewUnread(),
      whatsNew = (0, import_react32.useMemo)(
        () => ({
          id: "whats-new",
          title: "What's new?",
          onClick: () => api.changeSettingsTab("whats-new"),
          right:
            whatsNewNotificationsEnabled &&
            isWhatsNewUnread &&
            import_react32.default.createElement(
              Badge,
              { status: "positive" },
              "Check it out",
            ),
          icon: import_react32.default.createElement(WandIcon, null),
        }),
        [api, whatsNewNotificationsEnabled, isWhatsNewUnread],
      ),
      shortcuts = (0, import_react32.useMemo)(
        () => ({
          id: "shortcuts",
          title: "Keyboard shortcuts",
          onClick: () => api.changeSettingsTab("shortcuts"),
          right: enableShortcuts
            ? import_react32.default.createElement(Shortcut, {
                keys: shortcutKeys.shortcutsPage,
              })
            : null,
          style: { borderBottom: `4px solid ${theme.appBorderColor}` },
        }),
        [
          api,
          enableShortcuts,
          shortcutKeys.shortcutsPage,
          theme.appBorderColor,
        ],
      ),
      sidebarToggle = (0, import_react32.useMemo)(
        () => ({
          id: "S",
          title: "Show sidebar",
          onClick: () => api.toggleNav(),
          active: isNavShown,
          right: enableShortcuts
            ? import_react32.default.createElement(Shortcut, {
                keys: shortcutKeys.toggleNav,
              })
            : null,
          icon: isNavShown
            ? import_react32.default.createElement(CheckIcon, null)
            : null,
        }),
        [api, enableShortcuts, shortcutKeys, isNavShown],
      ),
      toolbarToogle = (0, import_react32.useMemo)(
        () => ({
          id: "T",
          title: "Show toolbar",
          onClick: () => api.toggleToolbar(),
          active: showToolbar,
          right: enableShortcuts
            ? import_react32.default.createElement(Shortcut, {
                keys: shortcutKeys.toolbar,
              })
            : null,
          icon: showToolbar
            ? import_react32.default.createElement(CheckIcon, null)
            : null,
        }),
        [api, enableShortcuts, shortcutKeys, showToolbar],
      ),
      addonsToggle = (0, import_react32.useMemo)(
        () => ({
          id: "A",
          title: "Show addons",
          onClick: () => api.togglePanel(),
          active: isPanelShown,
          right: enableShortcuts
            ? import_react32.default.createElement(Shortcut, {
                keys: shortcutKeys.togglePanel,
              })
            : null,
          icon: isPanelShown
            ? import_react32.default.createElement(CheckIcon, null)
            : null,
        }),
        [api, enableShortcuts, shortcutKeys, isPanelShown],
      ),
      addonsOrientationToggle = (0, import_react32.useMemo)(
        () => ({
          id: "D",
          title: "Change addons orientation",
          onClick: () => api.togglePanelPosition(),
          right: enableShortcuts
            ? import_react32.default.createElement(Shortcut, {
                keys: shortcutKeys.panelPosition,
              })
            : null,
        }),
        [api, enableShortcuts, shortcutKeys],
      ),
      fullscreenToggle = (0, import_react32.useMemo)(
        () => ({
          id: "F",
          title: "Go full screen",
          onClick: () => api.toggleFullscreen(),
          active: isFullscreen,
          right: enableShortcuts
            ? import_react32.default.createElement(Shortcut, {
                keys: shortcutKeys.fullScreen,
              })
            : null,
          icon: isFullscreen
            ? import_react32.default.createElement(CheckIcon, null)
            : null,
        }),
        [api, enableShortcuts, shortcutKeys, isFullscreen],
      ),
      searchToggle = (0, import_react32.useMemo)(
        () => ({
          id: "/",
          title: "Search",
          onClick: () =>
            api.focusOnUIElement(focusableUIElements.storySearchField),
          right: enableShortcuts
            ? import_react32.default.createElement(Shortcut, {
                keys: shortcutKeys.search,
              })
            : null,
        }),
        [api, enableShortcuts, shortcutKeys],
      ),
      up = (0, import_react32.useMemo)(
        () => ({
          id: "up",
          title: "Previous component",
          onClick: () => api.jumpToComponent(-1),
          right: enableShortcuts
            ? import_react32.default.createElement(Shortcut, {
                keys: shortcutKeys.prevComponent,
              })
            : null,
        }),
        [api, enableShortcuts, shortcutKeys],
      ),
      down = (0, import_react32.useMemo)(
        () => ({
          id: "down",
          title: "Next component",
          onClick: () => api.jumpToComponent(1),
          right: enableShortcuts
            ? import_react32.default.createElement(Shortcut, {
                keys: shortcutKeys.nextComponent,
              })
            : null,
        }),
        [api, enableShortcuts, shortcutKeys],
      ),
      prev = (0, import_react32.useMemo)(
        () => ({
          id: "prev",
          title: "Previous story",
          onClick: () => api.jumpToStory(-1),
          right: enableShortcuts
            ? import_react32.default.createElement(Shortcut, {
                keys: shortcutKeys.prevStory,
              })
            : null,
        }),
        [api, enableShortcuts, shortcutKeys],
      ),
      next = (0, import_react32.useMemo)(
        () => ({
          id: "next",
          title: "Next story",
          onClick: () => api.jumpToStory(1),
          right: enableShortcuts
            ? import_react32.default.createElement(Shortcut, {
                keys: shortcutKeys.nextStory,
              })
            : null,
        }),
        [api, enableShortcuts, shortcutKeys],
      ),
      collapse = (0, import_react32.useMemo)(
        () => ({
          id: "collapse",
          title: "Collapse all",
          onClick: () => api.collapseAll(),
          right: enableShortcuts
            ? import_react32.default.createElement(Shortcut, {
                keys: shortcutKeys.collapseAll,
              })
            : null,
        }),
        [api, enableShortcuts, shortcutKeys],
      ),
      getAddonsShortcuts = (0, import_react32.useCallback)(() => {
        let addonsShortcuts = api.getAddonsShortcuts(),
          keys = shortcutKeys;
        return Object.entries(addonsShortcuts)
          .filter(([_2, { showInMenu }]) => showInMenu)
          .map(([actionName, { label, action }]) => ({
            id: actionName,
            title: label,
            onClick: () => action(),
            right: enableShortcuts
              ? import_react32.default.createElement(Shortcut, {
                  keys: keys[actionName],
                })
              : null,
          }));
      }, [api, enableShortcuts, shortcutKeys]);
    return (0, import_react32.useMemo)(
      () => [
        about,
        ...(state.whatsNewData?.status === "SUCCESS" ? [whatsNew] : []),
        documentation,
        shortcuts,
        sidebarToggle,
        toolbarToogle,
        addonsToggle,
        addonsOrientationToggle,
        fullscreenToggle,
        searchToggle,
        up,
        down,
        prev,
        next,
        collapse,
        ...getAddonsShortcuts(),
      ],
      [
        about,
        state,
        whatsNew,
        documentation,
        shortcuts,
        sidebarToggle,
        toolbarToogle,
        addonsToggle,
        addonsOrientationToggle,
        fullscreenToggle,
        searchToggle,
        up,
        down,
        prev,
        next,
        collapse,
        getAddonsShortcuts,
      ],
    );
  };
var Sidebar3 = import_react33.default.memo(function ({ onMenuClick }) {
    return import_react33.default.createElement(
      ManagerConsumer,
      {
        filter: ({ state, api }) => {
          let {
              ui: { name, url, enableShortcuts },
              viewMode,
              storyId,
              refId,
              layout: { showToolbar },
              index,
              status,
              indexError,
              previewInitialized,
              refs,
            } = state,
            menu = useMenu(
              state,
              api,
              showToolbar,
              api.getIsFullscreen(),
              api.getIsPanelShown(),
              api.getIsNavShown(),
              enableShortcuts,
            ),
            whatsNewNotificationsEnabled =
              state.whatsNewData?.status === "SUCCESS" &&
              !state.disableWhatsNewNotifications,
            bottomItems = api.getElements(
              Addon_TypesEnum.experimental_SIDEBAR_BOTTOM,
            ),
            topItems = api.getElements(
              Addon_TypesEnum.experimental_SIDEBAR_TOP,
            ),
            bottom = (0, import_react33.useMemo)(
              () => Object.values(bottomItems),
              [Object.keys(bottomItems).join("")],
            ),
            top = (0, import_react33.useMemo)(
              () => Object.values(topItems),
              [Object.keys(topItems).join("")],
            );
          return {
            title: name,
            url,
            index,
            indexError,
            status,
            previewInitialized,
            refs,
            storyId,
            refId,
            viewMode,
            menu,
            menuHighlighted:
              whatsNewNotificationsEnabled && api.isWhatsNewUnread(),
            enableShortcuts,
            bottom,
            extra: top,
          };
        },
      },
      (fromState) =>
        import_react33.default.createElement(Sidebar, {
          ...fromState,
          onMenuClick,
        }),
    );
  }),
  Sidebar_default = Sidebar3;
var import_react45 = __toESM(require_react()),
  import_memoizerific2 = __toESM(require_memoizerific());
var import_react43 = __toESM(require_react());
var PreviewContainer = newStyled.main({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    overflow: "hidden",
  }),
  FrameWrap = newStyled.div({
    overflow: "auto",
    width: "100%",
    zIndex: 3,
    background: "transparent",
    flex: 1,
  }),
  CanvasWrap = newStyled.div(
    {
      alignContent: "center",
      alignItems: "center",
      justifyContent: "center",
      justifyItems: "center",
      overflow: "auto",
      gridTemplateColumns: "100%",
      gridTemplateRows: "100%",
      position: "relative",
      width: "100%",
      height: "100%",
    },
    ({ show }) => ({ display: show ? "grid" : "none" }),
  ),
  UnstyledLink = newStyled(Link2)({
    color: "inherit",
    textDecoration: "inherit",
    display: "inline-block",
  }),
  DesktopOnly = newStyled.span({
    "@media (max-width: 599px)": { display: "none" },
  }),
  IframeWrapper = newStyled.div(({ theme }) => ({
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    justifyItems: "center",
    overflow: "auto",
    display: "grid",
    gridTemplateColumns: "100%",
    gridTemplateRows: "100%",
    position: "relative",
    width: "100%",
    height: "100%",
  })),
  LoaderWrapper = newStyled.div(({ theme }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    background: theme.background.preview,
    zIndex: 1,
  }));
var import_react34 = __toESM(require_react());
var initialZoom = 1,
  Context = (0, import_react34.createContext)({
    value: initialZoom,
    set: (v2) => {},
  }),
  ZoomProvider = class extends import_react34.Component {
    constructor() {
      super(...arguments);
      this.state = { value: initialZoom };
      this.set = (value) => this.setState({ value });
    }
    render() {
      let { children, shouldScale } = this.props,
        { set } = this,
        { value } = this.state;
      return import_react34.default.createElement(
        Context.Provider,
        { value: { value: shouldScale ? value : initialZoom, set } },
        children,
      );
    }
  },
  { Consumer: ZoomConsumer } = Context,
  Zoom2 = (0, import_react34.memo)(function ({ zoomIn, zoomOut, reset }) {
    return import_react34.default.createElement(
      import_react34.default.Fragment,
      null,
      import_react34.default.createElement(
        IconButton,
        { key: "zoomin", onClick: zoomIn, title: "Zoom in" },
        import_react34.default.createElement(ZoomIcon, null),
      ),
      import_react34.default.createElement(
        IconButton,
        { key: "zoomout", onClick: zoomOut, title: "Zoom out" },
        import_react34.default.createElement(ZoomOutIcon, null),
      ),
      import_react34.default.createElement(
        IconButton,
        { key: "zoomreset", onClick: reset, title: "Reset zoom" },
        import_react34.default.createElement(ZoomResetIcon, null),
      ),
    );
  });
var ZoomWrapper = (0, import_react34.memo)(function ({ set, value }) {
  let zoomIn = (0, import_react34.useCallback)(
      (e3) => {
        e3.preventDefault(), set(0.8 * value);
      },
      [set, value],
    ),
    zoomOut = (0, import_react34.useCallback)(
      (e3) => {
        e3.preventDefault(), set(1.25 * value);
      },
      [set, value],
    ),
    reset = (0, import_react34.useCallback)(
      (e3) => {
        e3.preventDefault(), set(initialZoom);
      },
      [set, initialZoom],
    );
  return import_react34.default.createElement(Zoom2, {
    key: "zoom",
    zoomIn,
    zoomOut,
    reset,
  });
});
function ZoomToolRenderer() {
  return import_react34.default.createElement(
    import_react34.default.Fragment,
    null,
    import_react34.default.createElement(ZoomConsumer, null, ({ set, value }) =>
      import_react34.default.createElement(ZoomWrapper, { set, value }),
    ),
    import_react34.default.createElement(Separator, null),
  );
}
var zoomTool = {
  title: "zoom",
  id: "zoom",
  type: typesX.TOOL,
  match: ({ viewMode, tabId }) => viewMode === "story" && !tabId,
  render: ZoomToolRenderer,
};
var import_react35 = __toESM(require_react());
var ApplyWrappers = ({ wrappers, id, storyId, children }) =>
    import_react35.default.createElement(
      import_react35.Fragment,
      null,
      wrappers.reduceRight(
        (acc, wrapper, index) =>
          import_react35.default.createElement(wrapper.render, {
            index,
            children: acc,
            id,
            storyId,
          }),
        children,
      ),
    ),
  defaultWrappers = [
    {
      id: "iframe-wrapper",
      type: Addon_TypesEnum.PREVIEW,
      render: (p2) =>
        import_react35.default.createElement(
          IframeWrapper,
          { id: "storybook-preview-wrapper" },
          p2.children,
        ),
    },
  ];
var import_react40 = __toESM(require_react());
var import_react36 = __toESM(require_react()),
  import_copy_to_clipboard = __toESM(require_copy_to_clipboard());
var { PREVIEW_URL, document: document8 } = scope,
  copyMapper = ({ state }) => {
    let { storyId, refId, refs } = state,
      { location } = document8,
      ref = refs[refId],
      baseUrl = `${location.origin}${location.pathname}`;
    return (
      baseUrl.endsWith("/") || (baseUrl += "/"),
      {
        refId,
        baseUrl: ref
          ? `${ref.url}/iframe.html`
          : PREVIEW_URL || `${baseUrl}iframe.html`,
        storyId,
        queryParams: state.customQueryParams,
      }
    );
  },
  copyTool = {
    title: "copy",
    id: "copy",
    type: typesX.TOOL,
    match: ({ viewMode, tabId }) => viewMode === "story" && !tabId,
    render: () =>
      import_react36.default.createElement(
        ManagerConsumer,
        { filter: copyMapper },
        ({ baseUrl, storyId, queryParams }) =>
          storyId
            ? import_react36.default.createElement(
                IconButton,
                {
                  key: "copy",
                  onClick: () =>
                    (0, import_copy_to_clipboard.default)(
                      getStoryHref(baseUrl, storyId, queryParams),
                    ),
                  title: "Copy canvas link",
                },
                import_react36.default.createElement(LinkIcon, null),
              )
            : null,
      ),
  };
var import_react37 = __toESM(require_react());
var { PREVIEW_URL: PREVIEW_URL2 } = scope,
  ejectMapper = ({ state }) => {
    let { storyId, refId, refs } = state,
      ref = refs[refId];
    return {
      refId,
      baseUrl: ref ? `${ref.url}/iframe.html` : PREVIEW_URL2 || "iframe.html",
      storyId,
      queryParams: state.customQueryParams,
    };
  },
  ejectTool = {
    title: "eject",
    id: "eject",
    type: typesX.TOOL,
    match: ({ viewMode, tabId }) => viewMode === "story" && !tabId,
    render: () =>
      import_react37.default.createElement(
        ManagerConsumer,
        { filter: ejectMapper },
        ({ baseUrl, storyId, queryParams }) =>
          storyId
            ? import_react37.default.createElement(
                IconButton,
                { key: "opener", asChild: !0 },
                import_react37.default.createElement(
                  "a",
                  {
                    href: getStoryHref(baseUrl, storyId, queryParams),
                    target: "_blank",
                    rel: "noopener noreferrer",
                    title: "Open canvas in new tab",
                  },
                  import_react37.default.createElement(ShareAltIcon, null),
                ),
              )
            : null,
      ),
  };
var import_react38 = __toESM(require_react());
var menuMapper = ({ api, state }) => ({
    isVisible: api.getIsPanelShown(),
    singleStory: state.singleStory,
    panelPosition: state.layout.panelPosition,
    toggle: () => api.togglePanel(),
  }),
  addonsTool = {
    title: "addons",
    id: "addons",
    type: typesX.TOOL,
    match: ({ viewMode, tabId }) => viewMode === "story" && !tabId,
    render: () =>
      import_react38.default.createElement(
        ManagerConsumer,
        { filter: menuMapper },
        ({ isVisible, toggle, singleStory, panelPosition }) =>
          !singleStory &&
          !isVisible &&
          import_react38.default.createElement(
            import_react38.default.Fragment,
            null,
            import_react38.default.createElement(
              IconButton,
              {
                "aria-label": "Show addons",
                key: "addons",
                onClick: toggle,
                title: "Show addons",
              },
              panelPosition === "bottom"
                ? import_react38.default.createElement(BottomBarIcon, null)
                : import_react38.default.createElement(SidebarAltIcon, null),
            ),
          ),
      ),
  };
var import_react39 = __toESM(require_react());
var StyledAnimatedIconButton = newStyled(IconButton)(
    ({ theme, animating, disabled }) => ({
      opacity: disabled ? 0.5 : 1,
      svg: {
        animation: animating && `${theme.animation.rotate360} 1000ms ease-out`,
      },
    }),
  ),
  menuMapper2 = ({ api, state }) => {
    let { storyId } = state;
    return {
      storyId,
      remount: () => api.emit(FORCE_REMOUNT, { storyId: state.storyId }),
      api,
    };
  },
  remountTool = {
    title: "remount",
    id: "remount",
    type: typesX.TOOL,
    match: ({ viewMode, tabId }) => viewMode === "story" && !tabId,
    render: () =>
      import_react39.default.createElement(
        ManagerConsumer,
        { filter: menuMapper2 },
        ({ remount, storyId, api }) => {
          let [isAnimating, setIsAnimating] = (0, import_react39.useState)(!1),
            remountComponent = () => {
              storyId && remount();
            };
          return (
            api.on(FORCE_REMOUNT, () => {
              setIsAnimating(!0);
            }),
            import_react39.default.createElement(
              StyledAnimatedIconButton,
              {
                key: "remount",
                title: "Remount component",
                onClick: remountComponent,
                onAnimationEnd: () => setIsAnimating(!1),
                animating: isAnimating,
                disabled: !storyId,
              },
              import_react39.default.createElement(SyncIcon, null),
            )
          );
        },
      ),
  };
var fullScreenMapper = ({ api, state }) => ({
    toggle: api.toggleFullscreen,
    isFullscreen: api.getIsFullscreen(),
    shortcut: shortcutToHumanString(api.getShortcutKeys().fullScreen),
    hasPanel: Object.keys(api.getElements(Addon_TypesEnum.PANEL)).length > 0,
    singleStory: state.singleStory,
  }),
  fullScreenTool = {
    title: "fullscreen",
    id: "fullscreen",
    type: typesX.TOOL,
    match: (p2) => ["story", "docs"].includes(p2.viewMode),
    render: () => {
      let { isMobile } = useLayout();
      return isMobile
        ? null
        : import_react40.default.createElement(
            ManagerConsumer,
            { filter: fullScreenMapper },
            ({ toggle, isFullscreen, shortcut, hasPanel, singleStory }) =>
              (!singleStory || (singleStory && hasPanel)) &&
              import_react40.default.createElement(
                IconButton,
                {
                  key: "full",
                  onClick: toggle,
                  title: `${isFullscreen ? "Exit full screen" : "Go full screen"} [${shortcut}]`,
                  "aria-label": isFullscreen
                    ? "Exit full screen"
                    : "Go full screen",
                },
                isFullscreen
                  ? import_react40.default.createElement(CloseIcon, null)
                  : import_react40.default.createElement(ExpandIcon, null),
              ),
          );
    },
  };
var ToolbarComp = import_react40.default.memo(function ({
    isShown,
    tools,
    toolsExtra,
    tabs,
    tabId,
    api,
  }) {
    return tabs || tools || toolsExtra
      ? import_react40.default.createElement(
          Toolbar,
          {
            className: "sb-bar",
            key: "toolbar",
            shown: isShown,
            "data-test-id": "sb-preview-toolbar",
          },
          import_react40.default.createElement(
            ToolbarInner,
            null,
            import_react40.default.createElement(
              ToolbarLeft,
              null,
              tabs.length > 1
                ? import_react40.default.createElement(
                    import_react40.Fragment,
                    null,
                    import_react40.default.createElement(
                      TabBar,
                      { key: "tabs" },
                      tabs.map((tab, index) =>
                        import_react40.default.createElement(
                          TabButton,
                          {
                            disabled: tab.disabled,
                            active:
                              tab.id === tabId ||
                              (tab.id === "canvas" && !tabId),
                            onClick: () => {
                              api.applyQueryParams({
                                tab: tab.id === "canvas" ? void 0 : tab.id,
                              });
                            },
                            key: tab.id || `tab-${index}`,
                          },
                          tab.title,
                        ),
                      ),
                    ),
                    import_react40.default.createElement(Separator, null),
                  )
                : null,
              import_react40.default.createElement(Tools, {
                key: "left",
                list: tools,
              }),
            ),
            import_react40.default.createElement(
              ToolbarRight,
              null,
              import_react40.default.createElement(Tools, {
                key: "right",
                list: toolsExtra,
              }),
            ),
          ),
        )
      : null;
  }),
  Tools = import_react40.default.memo(function ({ list }) {
    return import_react40.default.createElement(
      import_react40.default.Fragment,
      null,
      list.filter(Boolean).map(({ render: Render, id, ...t3 }, index) =>
        import_react40.default.createElement(Render, {
          key: id || t3.key || `f-${index}`,
        }),
      ),
    );
  });
function toolbarItemHasBeenExcluded(item, entry) {
  let parameters =
      entry?.type === "story" && entry?.prepared ? entry?.parameters : {},
    toolbarItemsFromStoryParameters =
      "toolbar" in parameters ? parameters.toolbar : void 0,
    { toolbar: toolbarItemsFromAddonsConfig } = addons.getConfig(),
    toolbarItems = merge_default(
      toolbarItemsFromAddonsConfig,
      toolbarItemsFromStoryParameters,
    );
  return toolbarItems ? !!toolbarItems[item?.id]?.hidden : !1;
}
function filterToolsSide(tools, entry, viewMode, location, path, tabId) {
  let filter = (item) =>
    item &&
    (!item.match ||
      item.match({
        storyId: entry?.id,
        refId: entry?.refId,
        viewMode,
        location,
        path,
        tabId,
      })) &&
    !toolbarItemHasBeenExcluded(item, entry);
  return tools.filter(filter);
}
var Toolbar = newStyled.div(({ theme, shown }) => ({
    position: "relative",
    color: theme.barTextColor,
    width: "100%",
    height: 40,
    flexShrink: 0,
    overflowX: "auto",
    overflowY: "hidden",
    marginTop: shown ? 0 : -40,
    boxShadow: `${theme.appBorderColor}  0 -1px 0 0 inset`,
    background: theme.barBg,
    zIndex: 4,
  })),
  ToolbarInner = newStyled.div({
    position: "absolute",
    width: "calc(100% - 20px)",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "nowrap",
    flexShrink: 0,
    height: 40,
    marginLeft: 10,
    marginRight: 10,
  }),
  ToolbarLeft = newStyled.div({
    display: "flex",
    whiteSpace: "nowrap",
    flexBasis: "auto",
    gap: 6,
    alignItems: "center",
  }),
  ToolbarRight = newStyled(ToolbarLeft)({ marginLeft: 30 });
var import_react42 = __toESM(require_react());
var import_react41 = __toESM(require_react());
var StyledIframe = newStyled.iframe(({ theme }) => ({
  backgroundColor: theme.background.preview,
  display: "block",
  boxSizing: "content-box",
  height: "100%",
  width: "100%",
  border: "0 none",
  transition: "background-position 0s, visibility 0s",
  backgroundPosition: "-1px -1px, -1px -1px, -1px -1px, -1px -1px",
  margin: "auto",
  boxShadow: "0 0 100px 100vw rgba(0,0,0,0.5)",
}));
function IFrame(props) {
  let { active, id, title, src, allowFullScreen, scale, ...rest } = props,
    iFrameRef = import_react41.default.useRef(null);
  return import_react41.default.createElement(
    Zoom.IFrame,
    { scale, active, iFrameRef },
    import_react41.default.createElement(StyledIframe, {
      "data-is-storybook": active ? "true" : "false",
      onLoad: (e3) => e3.currentTarget.setAttribute("data-is-loaded", "true"),
      id,
      title,
      src,
      allow: "clipboard-write;",
      allowFullScreen,
      ref: iFrameRef,
      ...rest,
    }),
  );
}
var import_qs = __toESM(require_lib()),
  stringifyQueryParams = (queryParams) =>
    import_qs.default
      .stringify(queryParams, { addQueryPrefix: !0, encode: !1 })
      .replace(/^\?/, "&");
var getActive = (refId, refs) =>
    refId && refs[refId]
      ? `storybook-ref-${refId}`
      : "storybook-preview-iframe",
  SkipToSidebarLink = newStyled(Button)(({ theme }) => ({
    display: "none",
    "@media (min-width: 600px)": {
      position: "absolute",
      display: "block",
      top: 10,
      right: 15,
      padding: "10px 15px",
      fontSize: theme.typography.size.s1,
      transform: "translateY(-100px)",
      "&:focus": { transform: "translateY(0)", zIndex: 1 },
    },
  })),
  whenSidebarIsVisible = ({ api, state }) => ({
    isFullscreen: api.getIsFullscreen(),
    isNavShown: api.getIsNavShown(),
    selectedStoryId: state.storyId,
  }),
  styles = {
    '#root [data-is-storybook="false"]': { display: "none" },
    '#root [data-is-storybook="true"]': { display: "block" },
  },
  FramesRenderer = ({
    refs,
    scale,
    viewMode = "story",
    refId,
    queryParams = {},
    baseUrl,
    storyId = "*",
  }) => {
    let version = refs[refId]?.version,
      stringifiedQueryParams = stringifyQueryParams({
        ...queryParams,
        ...(version && { version }),
      }),
      active = getActive(refId, refs),
      { current: frames } = (0, import_react42.useRef)({}),
      refsToLoad = Object.values(refs).filter(
        (ref) => ref.type === "auto-inject" || ref.id === refId,
        {},
      );
    return (
      frames["storybook-preview-iframe"] ||
        (frames["storybook-preview-iframe"] = getStoryHref(baseUrl, storyId, {
          ...queryParams,
          ...(version && { version }),
          viewMode,
        })),
      refsToLoad.forEach((ref) => {
        let id = `storybook-ref-${ref.id}`,
          existingUrl = frames[id]?.split("/iframe.html")[0];
        if (!existingUrl || ref.url !== existingUrl) {
          let newUrl = `${ref.url}/iframe.html?id=${storyId}&viewMode=${viewMode}&refId=${ref.id}${stringifiedQueryParams}`;
          frames[id] = newUrl;
        }
      }),
      import_react42.default.createElement(
        import_react42.Fragment,
        null,
        import_react42.default.createElement(Global, { styles }),
        import_react42.default.createElement(
          ManagerConsumer,
          { filter: whenSidebarIsVisible },
          ({ isFullscreen, isNavShown, selectedStoryId }) =>
            isFullscreen || !isNavShown || !selectedStoryId
              ? null
              : import_react42.default.createElement(
                  SkipToSidebarLink,
                  { asChild: !0 },
                  import_react42.default.createElement(
                    "a",
                    {
                      href: `#${selectedStoryId}`,
                      tabIndex: 0,
                      title: "Skip to sidebar",
                    },
                    "Skip to sidebar",
                  ),
                ),
        ),
        Object.entries(frames).map(([id, src]) =>
          import_react42.default.createElement(
            import_react42.Fragment,
            { key: id },
            import_react42.default.createElement(IFrame, {
              active: id === active,
              key: id,
              id,
              title: id,
              src,
              allowFullScreen: !0,
              scale,
            }),
          ),
        ),
      )
    );
  };
var canvasMapper = ({ state, api }) => ({
    storyId: state.storyId,
    refId: state.refId,
    viewMode: state.viewMode,
    customCanvas: api.renderPreview,
    queryParams: state.customQueryParams,
    getElements: api.getElements,
    entry: api.getData(state.storyId, state.refId),
    previewInitialized: state.previewInitialized,
    refs: state.refs,
  }),
  createCanvasTab = () => ({
    id: "canvas",
    type: typesX.TAB,
    title: "Canvas",
    route: ({ storyId, refId }) =>
      refId ? `/story/${refId}_${storyId}` : `/story/${storyId}`,
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: () => null,
  }),
  Preview = import_react43.default.memo(function (props) {
    let {
        api,
        id: previewId,
        options: options2,
        viewMode,
        storyId,
        entry = void 0,
        description,
        baseUrl,
        withLoader = !0,
        tools,
        toolsExtra,
        tabs,
        wrappers,
        tabId,
      } = props,
      tabContent = tabs.find((tab) => tab.id === tabId)?.render,
      shouldScale = viewMode === "story",
      { showToolbar } = options2,
      previousStoryId = (0, import_react43.useRef)(storyId);
    return (
      (0, import_react43.useEffect)(() => {
        if (entry && viewMode) {
          if (storyId === previousStoryId.current) return;
          if (
            ((previousStoryId.current = storyId), viewMode.match(/docs|story/))
          ) {
            let { refId, id } = entry;
            api.emit(SET_CURRENT_STORY, {
              storyId: id,
              viewMode,
              options: { target: refId },
            });
          }
        }
      }, [entry, viewMode, storyId, api]),
      import_react43.default.createElement(
        import_react43.Fragment,
        null,
        previewId === "main" &&
          import_react43.default.createElement(
            W,
            { key: "description" },
            import_react43.default.createElement("title", null, description),
          ),
        import_react43.default.createElement(
          ZoomProvider,
          { shouldScale },
          import_react43.default.createElement(
            PreviewContainer,
            null,
            import_react43.default.createElement(ToolbarComp, {
              key: "tools",
              isShown: showToolbar,
              tabId,
              tabs,
              tools,
              toolsExtra,
              api,
            }),
            import_react43.default.createElement(
              FrameWrap,
              { key: "frame" },
              tabContent &&
                import_react43.default.createElement(
                  IframeWrapper,
                  null,
                  tabContent({ active: !0 }),
                ),
              import_react43.default.createElement(
                CanvasWrap,
                { show: !tabId },
                import_react43.default.createElement(Canvas, {
                  withLoader,
                  baseUrl,
                  wrappers,
                }),
              ),
            ),
          ),
        ),
      )
    );
  });
var Canvas = ({ baseUrl, withLoader, wrappers }) =>
  import_react43.default.createElement(
    ManagerConsumer,
    { filter: canvasMapper },
    ({
      entry,
      refs,
      customCanvas,
      storyId,
      refId,
      viewMode,
      queryParams,
      previewInitialized,
    }) => {
      let id = "canvas",
        [progress, setProgress] = (0, import_react43.useState)(void 0);
      (0, import_react43.useEffect)(() => {
        if (scope.CONFIG_TYPE === "DEVELOPMENT")
          try {
            addons.getChannel().on(PREVIEW_BUILDER_PROGRESS, (options2) => {
              setProgress(options2);
            });
          } catch {}
      }, []);
      let refLoading = !!refs[refId] && !refs[refId].previewInitialized,
        isBuilding = !(progress?.value === 1 || progress === void 0),
        rootLoading = !refId && (!previewInitialized || isBuilding),
        isLoading = (entry && refLoading) || rootLoading;
      return import_react43.default.createElement(
        ZoomConsumer,
        null,
        ({ value: scale }) =>
          import_react43.default.createElement(
            import_react43.default.Fragment,
            null,
            withLoader &&
              isLoading &&
              import_react43.default.createElement(
                LoaderWrapper,
                null,
                import_react43.default.createElement(Loader, {
                  id: "preview-loader",
                  role: "progressbar",
                  progress,
                }),
              ),
            import_react43.default.createElement(
              ApplyWrappers,
              { id, storyId, viewMode, wrappers },
              customCanvas
                ? customCanvas(
                    storyId,
                    viewMode,
                    id,
                    baseUrl,
                    scale,
                    queryParams,
                  )
                : import_react43.default.createElement(FramesRenderer, {
                    baseUrl,
                    refs,
                    scale,
                    entry,
                    viewMode,
                    refId,
                    queryParams,
                    storyId,
                  }),
            ),
          ),
      );
    },
  );
function filterTabs(panels, parameters) {
  let { previewTabs } = addons.getConfig(),
    parametersTabs = parameters ? parameters.previewTabs : void 0;
  if (previewTabs || parametersTabs) {
    let tabs = merge_default(previewTabs, parametersTabs),
      arrTabs = Object.keys(tabs).map((key, index) => ({
        index,
        ...(typeof tabs[key] == "string" ? { title: tabs[key] } : tabs[key]),
        id: key,
      }));
    return panels
      .filter((panel) => {
        let t3 = arrTabs.find((tab) => tab.id === panel.id);
        return t3 === void 0 || t3.id === "canvas" || !t3.hidden;
      })
      .map((panel, index) => ({ ...panel, index }))
      .sort((p1, p2) => {
        let tab_1 = arrTabs.find((tab) => tab.id === p1.id),
          index_1 = tab_1 ? tab_1.index : arrTabs.length + p1.index,
          tab_2 = arrTabs.find((tab) => tab.id === p2.id),
          index_2 = tab_2 ? tab_2.index : arrTabs.length + p2.index;
        return index_1 - index_2;
      })
      .map((panel) => {
        let t3 = arrTabs.find((tab) => tab.id === panel.id);
        return t3
          ? {
              ...panel,
              title: t3.title || panel.title,
              disabled: t3.disabled,
              hidden: t3.hidden,
            }
          : panel;
      });
  }
  return panels;
}
var import_react44 = __toESM(require_react());
var menuMapper3 = ({ api, state }) => ({
    isVisible: api.getIsNavShown(),
    singleStory: state.singleStory,
    toggle: () => api.toggleNav(),
  }),
  menuTool = {
    title: "menu",
    id: "menu",
    type: typesX.TOOL,
    match: ({ viewMode }) => ["story", "docs"].includes(viewMode),
    render: () =>
      import_react44.default.createElement(
        ManagerConsumer,
        { filter: menuMapper3 },
        ({ isVisible, toggle, singleStory }) =>
          !singleStory &&
          !isVisible &&
          import_react44.default.createElement(
            import_react44.default.Fragment,
            null,
            import_react44.default.createElement(
              IconButton,
              {
                "aria-label": "Show sidebar",
                key: "menu",
                onClick: toggle,
                title: "Show sidebar",
              },
              import_react44.default.createElement(MenuIcon, null),
            ),
            import_react44.default.createElement(Separator, null),
          ),
      ),
  };
var defaultTabs = [createCanvasTab()],
  defaultTools = [menuTool, remountTool, zoomTool],
  defaultToolsExtra = [addonsTool, fullScreenTool, ejectTool, copyTool],
  emptyTabsList = [],
  memoizedTabs = (0, import_memoizerific2.default)(1)(
    (_2, tabElements, parameters, showTabs) =>
      showTabs
        ? filterTabs(
            [...defaultTabs, ...Object.values(tabElements)],
            parameters,
          )
        : emptyTabsList,
  ),
  memoizedTools = (0, import_memoizerific2.default)(1)(
    (_2, toolElements, filterProps) =>
      filterToolsSide(
        [...defaultTools, ...Object.values(toolElements)],
        ...filterProps,
      ),
  ),
  memoizedExtra = (0, import_memoizerific2.default)(1)(
    (_2, extraElements, filterProps) =>
      filterToolsSide(
        [...defaultToolsExtra, ...Object.values(extraElements)],
        ...filterProps,
      ),
  ),
  memoizedWrapper = (0, import_memoizerific2.default)(1)(
    (_2, previewElements) => [
      ...defaultWrappers,
      ...Object.values(previewElements),
    ],
  ),
  { PREVIEW_URL: PREVIEW_URL3 } = scope,
  splitTitleAddExtraSpace = (input) =>
    input.split("/").join(" / ").replace(/\s\s/, " "),
  getDescription = (item) => {
    if (item?.type === "story" || item?.type === "docs") {
      let { title, name } = item;
      return title && name
        ? splitTitleAddExtraSpace(`${title} - ${name} \u22C5 Storybook`)
        : "Storybook";
    }
    return item?.name ? `${item.name} \u22C5 Storybook` : "Storybook";
  },
  mapper = ({ api, state }) => {
    let {
        layout,
        location,
        customQueryParams,
        storyId,
        refs,
        viewMode,
        path,
        refId,
      } = state,
      entry = api.getData(storyId, refId),
      tabsList = Object.values(api.getElements(Addon_TypesEnum.TAB)),
      wrapperList = Object.values(api.getElements(Addon_TypesEnum.PREVIEW)),
      toolsList = Object.values(api.getElements(Addon_TypesEnum.TOOL)),
      toolsExtraList = Object.values(
        api.getElements(Addon_TypesEnum.TOOLEXTRA),
      ),
      tabId = api.getQueryParam("tab"),
      tools = memoizedTools(
        toolsList.length,
        api.getElements(Addon_TypesEnum.TOOL),
        [entry, viewMode, location, path, tabId],
      ),
      toolsExtra = memoizedExtra(
        toolsExtraList.length,
        api.getElements(Addon_TypesEnum.TOOLEXTRA),
        [entry, viewMode, location, path, tabId],
      );
    return {
      api,
      entry,
      options: layout,
      description: getDescription(entry),
      viewMode,
      refs,
      storyId,
      baseUrl: PREVIEW_URL3 || "iframe.html",
      queryParams: customQueryParams,
      tools,
      toolsExtra,
      tabs: memoizedTabs(
        tabsList.length,
        api.getElements(Addon_TypesEnum.TAB),
        entry ? entry.parameters : void 0,
        layout.showTabs,
      ),
      wrappers: memoizedWrapper(
        wrapperList.length,
        api.getElements(Addon_TypesEnum.PREVIEW),
      ),
      tabId,
    };
  },
  PreviewConnected = import_react45.default.memo(function (props) {
    return import_react45.default.createElement(
      ManagerConsumer,
      { filter: mapper },
      (fromState) =>
        import_react45.default.createElement(Preview, {
          ...props,
          ...fromState,
        }),
    );
  }),
  Preview_default = PreviewConnected;
var import_react47 = __toESM(require_react()),
  import_memoizerific3 = __toESM(require_memoizerific());
var import_react46 = __toESM(require_react());
var SafeTab = class extends import_react46.Component {
    constructor(props) {
      super(props), (this.state = { hasError: !1 });
    }
    componentDidCatch(error, info) {
      this.setState({ hasError: !0 }), console.error(error, info);
    }
    render() {
      let { hasError } = this.state,
        { children } = this.props;
      return hasError
        ? import_react46.default.createElement(
            "h1",
            null,
            "Something went wrong.",
          )
        : children;
    }
  },
  AddonPanel = import_react46.default.memo(
    ({
      panels,
      shortcuts,
      actions,
      selectedPanel = null,
      panelPosition = "right",
      absolute = !0,
    }) => {
      let { isDesktop, setMobilePanelOpen } = useLayout();
      return import_react46.default.createElement(
        Tabs,
        {
          absolute,
          ...(selectedPanel ? { selected: selectedPanel } : {}),
          menuName: "Addons",
          actions,
          showToolsWhenEmpty: !0,
          emptyState: import_react46.default.createElement(EmptyTabContent, {
            title: "Storybook add-ons",
            description: import_react46.default.createElement(
              import_react46.default.Fragment,
              null,
              "Integrate your tools with Storybook to connect workflows and unlock advanced features.",
            ),
            footer: import_react46.default.createElement(
              Link22,
              {
                href: "https://storybook.js.org/integrations",
                target: "_blank",
                withArrow: !0,
              },
              import_react46.default.createElement(DocumentIcon, null),
              " Explore integrations catalog",
            ),
          }),
          tools: import_react46.default.createElement(
            Actions,
            null,
            isDesktop
              ? import_react46.default.createElement(
                  import_react46.default.Fragment,
                  null,
                  import_react46.default.createElement(
                    IconButton,
                    {
                      key: "position",
                      onClick: actions.togglePosition,
                      title: `Change addon orientation [${shortcutToHumanString(shortcuts.panelPosition)}]`,
                    },
                    panelPosition === "bottom"
                      ? import_react46.default.createElement(
                          SidebarAltIcon,
                          null,
                        )
                      : import_react46.default.createElement(
                          BottomBarIcon,
                          null,
                        ),
                  ),
                  import_react46.default.createElement(
                    IconButton,
                    {
                      key: "visibility",
                      onClick: actions.toggleVisibility,
                      title: `Hide addons [${shortcutToHumanString(shortcuts.togglePanel)}]`,
                    },
                    import_react46.default.createElement(CloseIcon, null),
                  ),
                )
              : import_react46.default.createElement(
                  IconButton,
                  {
                    onClick: () => setMobilePanelOpen(!1),
                    title: "Close addon panel",
                  },
                  import_react46.default.createElement(CloseIcon, null),
                ),
          ),
          id: "storybook-panel-root",
        },
        Object.entries(panels).map(([k2, v2]) =>
          import_react46.default.createElement(
            SafeTab,
            {
              key: k2,
              id: k2,
              title:
                typeof v2.title == "function"
                  ? import_react46.default.createElement(v2.title, null)
                  : v2.title,
            },
            v2.render,
          ),
        ),
      );
    },
  );
AddonPanel.displayName = "AddonPanel";
var Actions = newStyled.div({ display: "flex", alignItems: "center", gap: 6 });
var createPanelActions = (0, import_memoizerific3.default)(1)((api) => ({
    onSelect: (panel) => api.setSelectedPanel(panel),
    toggleVisibility: () => api.togglePanel(),
    togglePosition: () => api.togglePanelPosition(),
  })),
  getPanels = (api) => {
    let allPanels = api.getElements(Addon_TypesEnum.PANEL),
      story = api.getCurrentStoryData();
    if (!allPanels || !story || story.type !== "story") return allPanels;
    let { parameters } = story,
      filteredPanels = {};
    return (
      Object.entries(allPanels).forEach(([id, panel]) => {
        let { paramKey } = panel;
        (paramKey &&
          parameters &&
          parameters[paramKey] &&
          parameters[paramKey].disable) ||
          (filteredPanels[id] = panel);
      }),
      filteredPanels
    );
  },
  mapper2 = ({ state, api }) => ({
    panels: getPanels(api),
    selectedPanel: api.getSelectedPanel(),
    panelPosition: state.layout.panelPosition,
    actions: createPanelActions(api),
    shortcuts: api.getShortcutKeys(),
  }),
  Panel = (props) =>
    import_react47.default.createElement(
      ManagerConsumer,
      { filter: mapper2 },
      (customProps) =>
        import_react47.default.createElement(AddonPanel, {
          ...props,
          ...customProps,
        }),
    ),
  Panel_default = Panel;
var import_react59 = __toESM(require_react());
var import_react48 = __toESM(require_react()),
  SNAP_THRESHOLD_PX = 30,
  SIDEBAR_MIN_WIDTH_PX = 240,
  RIGHT_PANEL_MIN_WIDTH_PX = 270,
  MIN_WIDTH_STIFFNESS = 0.9;
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
function interpolate(relativeValue, min, max) {
  return min + (max - min) * relativeValue;
}
function useDragging({ setState, isPanelShown, isDesktop }) {
  let panelResizerRef = (0, import_react48.useRef)(null),
    sidebarResizerRef = (0, import_react48.useRef)(null);
  return (
    (0, import_react48.useEffect)(() => {
      let panelResizer = panelResizerRef.current,
        sidebarResizer = sidebarResizerRef.current,
        previewIframe = document.querySelector("#storybook-preview-iframe"),
        draggedElement = null,
        onDragStart = (e3) => {
          e3.preventDefault(),
            setState((state) => ({ ...state, isDragging: !0 })),
            e3.currentTarget === panelResizer
              ? (draggedElement = panelResizer)
              : e3.currentTarget === sidebarResizer &&
                (draggedElement = sidebarResizer),
            window.addEventListener("mousemove", onDrag),
            window.addEventListener("mouseup", onDragEnd),
            previewIframe && (previewIframe.style.pointerEvents = "none");
        },
        onDragEnd = (e3) => {
          setState((state) =>
            draggedElement === sidebarResizer &&
            state.navSize < SIDEBAR_MIN_WIDTH_PX &&
            state.navSize > 0
              ? { ...state, isDragging: !1, navSize: SIDEBAR_MIN_WIDTH_PX }
              : draggedElement === panelResizer &&
                  state.panelPosition === "right" &&
                  state.rightPanelWidth < RIGHT_PANEL_MIN_WIDTH_PX &&
                  state.rightPanelWidth > 0
                ? {
                    ...state,
                    isDragging: !1,
                    rightPanelWidth: RIGHT_PANEL_MIN_WIDTH_PX,
                  }
                : { ...state, isDragging: !1 },
          ),
            window.removeEventListener("mousemove", onDrag),
            window.removeEventListener("mouseup", onDragEnd),
            previewIframe?.removeAttribute("style"),
            (draggedElement = null);
        },
        onDrag = (e3) => {
          if (e3.buttons === 0) {
            onDragEnd(e3);
            return;
          }
          setState((state) => {
            if (draggedElement === sidebarResizer) {
              let sidebarDragX = e3.clientX;
              return sidebarDragX === state.navSize
                ? state
                : sidebarDragX <= SNAP_THRESHOLD_PX
                  ? { ...state, navSize: 0 }
                  : sidebarDragX <= SIDEBAR_MIN_WIDTH_PX
                    ? {
                        ...state,
                        navSize: interpolate(
                          MIN_WIDTH_STIFFNESS,
                          sidebarDragX,
                          SIDEBAR_MIN_WIDTH_PX,
                        ),
                      }
                    : {
                        ...state,
                        navSize: clamp(sidebarDragX, 0, e3.view.innerWidth),
                      };
            }
            if (draggedElement === panelResizer) {
              let sizeAxisState =
                  state.panelPosition === "bottom"
                    ? "bottomPanelHeight"
                    : "rightPanelWidth",
                panelDragSize =
                  state.panelPosition === "bottom"
                    ? e3.view.innerHeight - e3.clientY
                    : e3.view.innerWidth - e3.clientX;
              if (panelDragSize === state[sizeAxisState]) return state;
              if (panelDragSize <= SNAP_THRESHOLD_PX)
                return { ...state, [sizeAxisState]: 0 };
              if (
                state.panelPosition === "right" &&
                panelDragSize <= RIGHT_PANEL_MIN_WIDTH_PX
              )
                return {
                  ...state,
                  [sizeAxisState]: interpolate(
                    MIN_WIDTH_STIFFNESS,
                    panelDragSize,
                    RIGHT_PANEL_MIN_WIDTH_PX,
                  ),
                };
              let sizeAxisMax =
                state.panelPosition === "bottom"
                  ? e3.view.innerHeight
                  : e3.view.innerWidth;
              return {
                ...state,
                [sizeAxisState]: clamp(panelDragSize, 0, sizeAxisMax),
              };
            }
            return state;
          });
        };
      return (
        panelResizer?.addEventListener("mousedown", onDragStart),
        sidebarResizer?.addEventListener("mousedown", onDragStart),
        () => {
          panelResizer?.removeEventListener("mousedown", onDragStart),
            sidebarResizer?.removeEventListener("mousedown", onDragStart),
            previewIframe?.removeAttribute("style");
        }
      );
    }, [isPanelShown, isDesktop, setState]),
    { panelResizerRef, sidebarResizerRef }
  );
}
var import_react55 = __toESM(require_react());
var import_react53 = __toESM(require_react());
var import_prop_types4 = __toESM(require_prop_types()),
  import_react50 = __toESM(require_react()),
  import_react_dom3 = __toESM(require_react_dom());
var config_default = { disabled: !1 };
var import_prop_types3 = __toESM(require_prop_types()),
  timeoutsShape = import_prop_types3.default.oneOfType([
    import_prop_types3.default.number,
    import_prop_types3.default.shape({
      enter: import_prop_types3.default.number,
      exit: import_prop_types3.default.number,
      appear: import_prop_types3.default.number,
    }).isRequired,
  ]),
  classNamesShape = import_prop_types3.default.oneOfType([
    import_prop_types3.default.string,
    import_prop_types3.default.shape({
      enter: import_prop_types3.default.string,
      exit: import_prop_types3.default.string,
      active: import_prop_types3.default.string,
    }),
    import_prop_types3.default.shape({
      enter: import_prop_types3.default.string,
      enterDone: import_prop_types3.default.string,
      enterActive: import_prop_types3.default.string,
      exit: import_prop_types3.default.string,
      exitDone: import_prop_types3.default.string,
      exitActive: import_prop_types3.default.string,
    }),
  ]);
var import_react49 = __toESM(require_react()),
  TransitionGroupContext_default = import_react49.default.createContext(null);
var forceReflow = function (node) {
  return node.scrollTop;
};
var UNMOUNTED = "unmounted",
  EXITED = "exited",
  ENTERING = "entering",
  ENTERED = "entered",
  EXITING = "exiting",
  Transition = (function (_React$Component) {
    _inheritsLoose(Transition2, _React$Component);
    function Transition2(props, context) {
      var _this;
      _this = _React$Component.call(this, props, context) || this;
      var parentGroup = context,
        appear =
          parentGroup && !parentGroup.isMounting ? props.enter : props.appear,
        initialStatus;
      return (
        (_this.appearStatus = null),
        props.in
          ? appear
            ? ((initialStatus = EXITED), (_this.appearStatus = ENTERING))
            : (initialStatus = ENTERED)
          : props.unmountOnExit || props.mountOnEnter
            ? (initialStatus = UNMOUNTED)
            : (initialStatus = EXITED),
        (_this.state = { status: initialStatus }),
        (_this.nextCallback = null),
        _this
      );
    }
    Transition2.getDerivedStateFromProps = function (_ref, prevState) {
      var nextIn = _ref.in;
      return nextIn && prevState.status === UNMOUNTED
        ? { status: EXITED }
        : null;
    };
    var _proto = Transition2.prototype;
    return (
      (_proto.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (_proto.componentDidUpdate = function (prevProps) {
        var nextStatus = null;
        if (prevProps !== this.props) {
          var status = this.state.status;
          this.props.in
            ? status !== ENTERING &&
              status !== ENTERED &&
              (nextStatus = ENTERING)
            : (status === ENTERING || status === ENTERED) &&
              (nextStatus = EXITING);
        }
        this.updateStatus(!1, nextStatus);
      }),
      (_proto.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (_proto.getTimeouts = function () {
        var timeout2 = this.props.timeout,
          exit,
          enter,
          appear;
        return (
          (exit = enter = appear = timeout2),
          timeout2 != null &&
            typeof timeout2 != "number" &&
            ((exit = timeout2.exit),
            (enter = timeout2.enter),
            (appear = timeout2.appear !== void 0 ? timeout2.appear : enter)),
          { exit, enter, appear }
        );
      }),
      (_proto.updateStatus = function (mounting, nextStatus) {
        if ((mounting === void 0 && (mounting = !1), nextStatus !== null))
          if ((this.cancelNextCallback(), nextStatus === ENTERING)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var node = this.props.nodeRef
                ? this.props.nodeRef.current
                : import_react_dom3.default.findDOMNode(this);
              node && forceReflow(node);
            }
            this.performEnter(mounting);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === EXITED &&
            this.setState({ status: UNMOUNTED });
      }),
      (_proto.performEnter = function (mounting) {
        var _this2 = this,
          enter = this.props.enter,
          appearing = this.context ? this.context.isMounting : mounting,
          _ref2 = this.props.nodeRef
            ? [appearing]
            : [import_react_dom3.default.findDOMNode(this), appearing],
          maybeNode = _ref2[0],
          maybeAppearing = _ref2[1],
          timeouts = this.getTimeouts(),
          enterTimeout = appearing ? timeouts.appear : timeouts.enter;
        if ((!mounting && !enter) || config_default.disabled) {
          this.safeSetState({ status: ENTERED }, function () {
            _this2.props.onEntered(maybeNode);
          });
          return;
        }
        this.props.onEnter(maybeNode, maybeAppearing),
          this.safeSetState({ status: ENTERING }, function () {
            _this2.props.onEntering(maybeNode, maybeAppearing),
              _this2.onTransitionEnd(enterTimeout, function () {
                _this2.safeSetState({ status: ENTERED }, function () {
                  _this2.props.onEntered(maybeNode, maybeAppearing);
                });
              });
          });
      }),
      (_proto.performExit = function () {
        var _this3 = this,
          exit = this.props.exit,
          timeouts = this.getTimeouts(),
          maybeNode = this.props.nodeRef
            ? void 0
            : import_react_dom3.default.findDOMNode(this);
        if (!exit || config_default.disabled) {
          this.safeSetState({ status: EXITED }, function () {
            _this3.props.onExited(maybeNode);
          });
          return;
        }
        this.props.onExit(maybeNode),
          this.safeSetState({ status: EXITING }, function () {
            _this3.props.onExiting(maybeNode),
              _this3.onTransitionEnd(timeouts.exit, function () {
                _this3.safeSetState({ status: EXITED }, function () {
                  _this3.props.onExited(maybeNode);
                });
              });
          });
      }),
      (_proto.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (_proto.safeSetState = function (nextState, callback) {
        (callback = this.setNextCallback(callback)),
          this.setState(nextState, callback);
      }),
      (_proto.setNextCallback = function (callback) {
        var _this4 = this,
          active = !0;
        return (
          (this.nextCallback = function (event) {
            active &&
              ((active = !1), (_this4.nextCallback = null), callback(event));
          }),
          (this.nextCallback.cancel = function () {
            active = !1;
          }),
          this.nextCallback
        );
      }),
      (_proto.onTransitionEnd = function (timeout2, handler) {
        this.setNextCallback(handler);
        var node = this.props.nodeRef
            ? this.props.nodeRef.current
            : import_react_dom3.default.findDOMNode(this),
          doesNotHaveTimeoutOrListener =
            timeout2 == null && !this.props.addEndListener;
        if (!node || doesNotHaveTimeoutOrListener) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var _ref3 = this.props.nodeRef
              ? [this.nextCallback]
              : [node, this.nextCallback],
            maybeNode = _ref3[0],
            maybeNextCallback = _ref3[1];
          this.props.addEndListener(maybeNode, maybeNextCallback);
        }
        timeout2 != null && setTimeout(this.nextCallback, timeout2);
      }),
      (_proto.render = function () {
        var status = this.state.status;
        if (status === UNMOUNTED) return null;
        var _this$props = this.props,
          children = _this$props.children,
          _in = _this$props.in,
          _mountOnEnter = _this$props.mountOnEnter,
          _unmountOnExit = _this$props.unmountOnExit,
          _appear = _this$props.appear,
          _enter = _this$props.enter,
          _exit = _this$props.exit,
          _timeout = _this$props.timeout,
          _addEndListener = _this$props.addEndListener,
          _onEnter = _this$props.onEnter,
          _onEntering = _this$props.onEntering,
          _onEntered = _this$props.onEntered,
          _onExit = _this$props.onExit,
          _onExiting = _this$props.onExiting,
          _onExited = _this$props.onExited,
          _nodeRef = _this$props.nodeRef,
          childProps = _objectWithoutPropertiesLoose(_this$props, [
            "children",
            "in",
            "mountOnEnter",
            "unmountOnExit",
            "appear",
            "enter",
            "exit",
            "timeout",
            "addEndListener",
            "onEnter",
            "onEntering",
            "onEntered",
            "onExit",
            "onExiting",
            "onExited",
            "nodeRef",
          ]);
        return import_react50.default.createElement(
          TransitionGroupContext_default.Provider,
          { value: null },
          typeof children == "function"
            ? children(status, childProps)
            : import_react50.default.cloneElement(
                import_react50.default.Children.only(children),
                childProps,
              ),
        );
      }),
      Transition2
    );
  })(import_react50.default.Component);
Transition.contextType = TransitionGroupContext_default;
Transition.propTypes = {
  nodeRef: import_prop_types4.default.shape({
    current:
      typeof Element > "u"
        ? import_prop_types4.default.any
        : function (
            propValue,
            key,
            componentName,
            location,
            propFullName,
            secret,
          ) {
            var value = propValue[key];
            return import_prop_types4.default.instanceOf(
              value && "ownerDocument" in value
                ? value.ownerDocument.defaultView.Element
                : Element,
            )(propValue, key, componentName, location, propFullName, secret);
          },
  }),
  children: import_prop_types4.default.oneOfType([
    import_prop_types4.default.func.isRequired,
    import_prop_types4.default.element.isRequired,
  ]).isRequired,
  in: import_prop_types4.default.bool,
  mountOnEnter: import_prop_types4.default.bool,
  unmountOnExit: import_prop_types4.default.bool,
  appear: import_prop_types4.default.bool,
  enter: import_prop_types4.default.bool,
  exit: import_prop_types4.default.bool,
  timeout: function (props) {
    var pt = timeoutsShape;
    props.addEndListener || (pt = pt.isRequired);
    for (
      var _len = arguments.length,
        args = new Array(_len > 1 ? _len - 1 : 0),
        _key = 1;
      _key < _len;
      _key++
    )
      args[_key - 1] = arguments[_key];
    return pt.apply(void 0, [props].concat(args));
  },
  addEndListener: import_prop_types4.default.func,
  onEnter: import_prop_types4.default.func,
  onEntering: import_prop_types4.default.func,
  onEntered: import_prop_types4.default.func,
  onExit: import_prop_types4.default.func,
  onExiting: import_prop_types4.default.func,
  onExited: import_prop_types4.default.func,
};
function noop3() {}
Transition.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: noop3,
  onEntering: noop3,
  onEntered: noop3,
  onExit: noop3,
  onExiting: noop3,
  onExited: noop3,
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
var Transition_default = Transition;
var import_react52 = __toESM(require_react());
var import_react51 = __toESM(require_react());
var UpgradeBlock = ({ onNavigateToWhatsNew }) => {
    let api = useStorybookApi(),
      [activeTab, setActiveTab] = (0, import_react51.useState)("npm");
    return import_react51.default.createElement(
      Container3,
      null,
      import_react51.default.createElement(
        "strong",
        null,
        "You are on Storybook ",
        api.getCurrentVersion().version,
      ),
      import_react51.default.createElement(
        "p",
        null,
        "Run the following script to check for updates and upgrade to the latest version.",
      ),
      import_react51.default.createElement(
        Tabs2,
        null,
        import_react51.default.createElement(
          ButtonTab,
          { active: activeTab === "npm", onClick: () => setActiveTab("npm") },
          "npm",
        ),
        import_react51.default.createElement(
          ButtonTab,
          { active: activeTab === "pnpm", onClick: () => setActiveTab("pnpm") },
          "pnpm",
        ),
      ),
      import_react51.default.createElement(
        Code,
        null,
        activeTab === "npm"
          ? "npx storybook@latest upgrade"
          : "pnpm dlx storybook@latest upgrade",
      ),
      onNavigateToWhatsNew &&
        import_react51.default.createElement(
          Link22,
          { onClick: onNavigateToWhatsNew },
          "See what's new in Storybook",
        ),
    );
  },
  Container3 = newStyled.div(({ theme }) => ({
    border: "1px solid",
    borderRadius: 5,
    padding: 20,
    marginTop: 0,
    borderColor: theme.appBorderColor,
    fontSize: theme.typography.size.s2,
    width: "100%",
    [MEDIA_DESKTOP_BREAKPOINT]: { maxWidth: 400 },
  })),
  Tabs2 = newStyled.div({ display: "flex", gap: 2 }),
  Code = newStyled.pre(({ theme }) => ({
    background:
      theme.base === "light" ? "rgba(0, 0, 0, 0.05)" : theme.appBorderColor,
    fontSize: theme.typography.size.s2 - 1,
    margin: "4px 0 16px",
  })),
  ButtonTab = newStyled.button(({ theme, active }) => ({
    all: "unset",
    alignItems: "center",
    gap: 10,
    color: theme.color.defaultText,
    fontSize: theme.typography.size.s2 - 1,
    borderBottom: "2px solid transparent",
    borderBottomColor: active ? theme.color.secondary : "none",
    padding: "0 10px 5px",
    marginBottom: "5px",
    cursor: "pointer",
  }));
var MobileAbout = () => {
    let { isMobileAboutOpen, setMobileAboutOpen } = useLayout(),
      aboutRef = (0, import_react52.useRef)(null);
    return import_react52.default.createElement(
      Transition_default,
      {
        nodeRef: aboutRef,
        in: isMobileAboutOpen,
        timeout: 300,
        appear: !0,
        mountOnEnter: !0,
        unmountOnExit: !0,
      },
      (state) =>
        import_react52.default.createElement(
          Container4,
          { ref: aboutRef, state, transitionDuration: 300 },
          import_react52.default.createElement(
            Button2,
            {
              onClick: () => setMobileAboutOpen(!1),
              title: "Close about section",
            },
            import_react52.default.createElement(ArrowLeftIcon, null),
            "Back",
          ),
          import_react52.default.createElement(
            LinkContainer,
            null,
            import_react52.default.createElement(
              LinkLine,
              {
                href: "https://github.com/storybookjs/storybook",
                target: "_blank",
              },
              import_react52.default.createElement(
                LinkLeft,
                null,
                import_react52.default.createElement(GithubIcon, null),
                import_react52.default.createElement("span", null, "Github"),
              ),
              import_react52.default.createElement(ShareAltIcon, { width: 12 }),
            ),
            import_react52.default.createElement(
              LinkLine,
              {
                href: "https://storybook.js.org/docs/react/get-started/install/",
                target: "_blank",
              },
              import_react52.default.createElement(
                LinkLeft,
                null,
                import_react52.default.createElement(StorybookIcon, null),
                import_react52.default.createElement(
                  "span",
                  null,
                  "Documentation",
                ),
              ),
              import_react52.default.createElement(ShareAltIcon, { width: 12 }),
            ),
          ),
          import_react52.default.createElement(UpgradeBlock, null),
          import_react52.default.createElement(
            BottomText,
            null,
            "Open source software maintained by",
            " ",
            import_react52.default.createElement(
              Link22,
              { href: "https://chromatic.com", target: "_blank" },
              "Chromatic",
            ),
            " ",
            "and the",
            " ",
            import_react52.default.createElement(
              Link22,
              {
                href: "https://github.com/storybookjs/storybook/graphs/contributors",
              },
              "Storybook Community",
            ),
          ),
        ),
    );
  },
  Container4 = newStyled.div(({ theme, state, transitionDuration }) => ({
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    zIndex: 11,
    transition: `all ${transitionDuration}ms ease-in-out`,
    overflow: "scroll",
    padding: "25px 10px 10px",
    color: theme.color.defaultText,
    background: theme.background.content,
    opacity: `${(() => {
      switch (state) {
        case "entering":
        case "entered":
          return 1;
        case "exiting":
        case "exited":
          return 0;
        default:
          return 0;
      }
    })()}`,
    transform: `${(() => {
      switch (state) {
        case "entering":
        case "entered":
          return "translateX(0)";
        case "exiting":
        case "exited":
          return "translateX(20px)";
        default:
          return "translateX(0)";
      }
    })()}`,
  })),
  LinkContainer = newStyled.div({ marginTop: 20, marginBottom: 20 }),
  LinkLine = newStyled.a(({ theme }) => ({
    all: "unset",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: theme.typography.size.s2 - 1,
    height: 52,
    borderBottom: `1px solid ${theme.appBorderColor}`,
    cursor: "pointer",
    padding: "0 10px",
    "&:last-child": { borderBottom: "none" },
  })),
  LinkLeft = newStyled.div(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    fontSize: theme.typography.size.s2 - 1,
    height: 40,
    gap: 5,
  })),
  BottomText = newStyled.div(({ theme }) => ({
    fontSize: theme.typography.size.s2 - 1,
    marginTop: 30,
  })),
  Button2 = newStyled.button(({ theme }) => ({
    all: "unset",
    display: "flex",
    alignItems: "center",
    gap: 10,
    color: "currentColor",
    fontSize: theme.typography.size.s2 - 1,
    padding: "0 10px",
  }));
var MobileMenuDrawer = ({ children }) => {
    let containerRef = (0, import_react53.useRef)(null),
      sidebarRef = (0, import_react53.useRef)(null),
      overlayRef = (0, import_react53.useRef)(null),
      {
        isMobileMenuOpen,
        setMobileMenuOpen,
        isMobileAboutOpen,
        setMobileAboutOpen,
      } = useLayout();
    return import_react53.default.createElement(
      import_react53.default.Fragment,
      null,
      import_react53.default.createElement(
        Transition_default,
        {
          nodeRef: containerRef,
          in: isMobileMenuOpen,
          timeout: 300,
          mountOnEnter: !0,
          unmountOnExit: !0,
          onExited: () => setMobileAboutOpen(!1),
        },
        (state) =>
          import_react53.default.createElement(
            Container5,
            { ref: containerRef, state },
            import_react53.default.createElement(
              Transition_default,
              { nodeRef: sidebarRef, in: !isMobileAboutOpen, timeout: 300 },
              (sidebarState) =>
                import_react53.default.createElement(
                  SidebarContainer,
                  { ref: sidebarRef, state: sidebarState },
                  children,
                ),
            ),
            import_react53.default.createElement(MobileAbout, null),
          ),
      ),
      import_react53.default.createElement(
        Transition_default,
        {
          nodeRef: overlayRef,
          in: isMobileMenuOpen,
          timeout: 300,
          mountOnEnter: !0,
          unmountOnExit: !0,
        },
        (state) =>
          import_react53.default.createElement(Overlay, {
            ref: overlayRef,
            state,
            onClick: () => setMobileMenuOpen(!1),
            "aria-label": "Close navigation menu",
          }),
      ),
    );
  },
  Container5 = newStyled.div(({ theme, state }) => ({
    position: "fixed",
    boxSizing: "border-box",
    width: "100%",
    background: theme.background.content,
    height: "80%",
    bottom: 0,
    left: 0,
    zIndex: 11,
    borderRadius: "10px 10px 0 0",
    transition: `all ${300}ms ease-in-out`,
    overflow: "hidden",
    transform: `${state === "entering" || state === "entered" ? "translateY(0)" : state === "exiting" || state === "exited" ? "translateY(100%)" : "translateY(0)"}`,
  })),
  SidebarContainer = newStyled.div(({ theme, state }) => ({
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    zIndex: 1,
    transition: `all ${300}ms ease-in-out`,
    overflow: "hidden",
    opacity: `${state === "entered" || state === "entering" ? 1 : state === "exiting" || state === "exited" ? 0 : 1}`,
    transform: `${(() => {
      switch (state) {
        case "entering":
        case "entered":
          return "translateX(0)";
        case "exiting":
        case "exited":
          return "translateX(-20px)";
        default:
          return "translateX(0)";
      }
    })()}`,
  })),
  Overlay = newStyled.div(({ state }) => ({
    position: "fixed",
    boxSizing: "border-box",
    background: "rgba(0, 0, 0, 0.5)",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 10,
    transition: `all ${300}ms ease-in-out`,
    cursor: "pointer",
    opacity: `${(() => {
      switch (state) {
        case "entering":
        case "entered":
          return 1;
        case "exiting":
        case "exited":
          return 0;
        default:
          return 0;
      }
    })()}`,
    "&:hover": { background: "rgba(0, 0, 0, 0.6)" },
  }));
var import_react54 = __toESM(require_react());
var Container6 = newStyled.div(({ theme }) => ({
    position: "relative",
    boxSizing: "border-box",
    width: "100%",
    background: theme.background.content,
    height: "42vh",
    zIndex: 11,
    overflow: "hidden",
  })),
  MobileAddonsDrawer = ({ children }) =>
    import_react54.default.createElement(Container6, null, children);
var useFullStoryName = () => {
    let { index } = useStorybookState(),
      api = useStorybookApi(),
      currentStory = api.getCurrentStoryData();
    if (!currentStory) return "";
    let fullStoryName =
        currentStory.renderLabel?.(currentStory, api) || currentStory.name,
      node = index[currentStory.id];
    for (
      ;
      "parent" in node &&
      node.parent &&
      index[node.parent] &&
      fullStoryName.length < 24;

    )
      (node = index[node.parent]),
        (fullStoryName = `${node.renderLabel?.(node, api) || node.name}/${fullStoryName}`);
    return fullStoryName;
  },
  MobileNavigation = ({ menu, panel, showPanel }) => {
    let {
        isMobileMenuOpen,
        isMobilePanelOpen,
        setMobileMenuOpen,
        setMobilePanelOpen,
      } = useLayout(),
      fullStoryName = useFullStoryName();
    return import_react55.default.createElement(
      Container7,
      null,
      import_react55.default.createElement(MobileMenuDrawer, null, menu),
      isMobilePanelOpen
        ? import_react55.default.createElement(MobileAddonsDrawer, null, panel)
        : import_react55.default.createElement(
            Nav,
            { className: "sb-bar" },
            import_react55.default.createElement(
              Button3,
              {
                onClick: () => setMobileMenuOpen(!isMobileMenuOpen),
                title: "Open navigation menu",
              },
              import_react55.default.createElement(MenuIcon, null),
              import_react55.default.createElement(Text2, null, fullStoryName),
            ),
            showPanel &&
              import_react55.default.createElement(
                IconButton,
                {
                  onClick: () => setMobilePanelOpen(!0),
                  title: "Open addon panel",
                },
                import_react55.default.createElement(BottomBarToggleIcon, null),
              ),
          ),
    );
  },
  Container7 = newStyled.div(({ theme }) => ({
    bottom: 0,
    left: 0,
    width: "100%",
    zIndex: 10,
    background: theme.barBg,
    borderTop: `1px solid ${theme.appBorderColor}`,
  })),
  Nav = newStyled.div({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: 40,
    padding: "0 6px",
  }),
  Button3 = newStyled.button(({ theme }) => ({
    all: "unset",
    display: "flex",
    alignItems: "center",
    gap: 10,
    color: theme.barTextColor,
    fontSize: `${theme.typography.size.s2 - 1}px`,
    padding: "0 7px",
    fontWeight: theme.typography.weight.bold,
    WebkitLineClamp: 1,
    "> svg": { width: 14, height: 14, flexShrink: 0 },
  })),
  Text2 = newStyled.p({
    display: "-webkit-box",
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  });
var import_react58 = __toESM(require_react());
var import_react57 = __toESM(require_react());
var import_react56 = __toESM(require_react());
var slideIn = keyframes({
    "0%": { opacity: 0, transform: "translateY(30px)" },
    "100%": { opacity: 1, transform: "translateY(0)" },
  }),
  grow = keyframes({ "0%": { width: "0%" }, "100%": { width: "100%" } }),
  Notification = newStyled.div(
    ({ theme }) => ({
      position: "relative",
      display: "flex",
      padding: 15,
      width: 280,
      borderRadius: 4,
      alignItems: "center",
      animation: `${slideIn} 500ms`,
      background:
        theme.base === "light"
          ? "hsla(203, 50%, 20%, .97)"
          : "hsla(203, 30%, 95%, .97)",
      boxShadow: "0 2px 5px 0 rgba(0,0,0,0.05), 0 5px 15px 0 rgba(0,0,0,0.1)",
      color: theme.color.inverseText,
      textDecoration: "none",
      overflow: "hidden",
    }),
    ({ duration, theme }) =>
      duration && {
        "&::after": {
          content: '""',
          display: "block",
          position: "absolute",
          bottom: 0,
          left: 0,
          height: 3,
          background: theme.color.secondary,
          animation: `${grow} ${duration}ms linear forwards reverse`,
        },
      },
  ),
  NotificationWithInteractiveStates = newStyled(Notification)(() => ({
    cursor: "pointer",
    border: "none",
    outline: "none",
    textAlign: "left",
    transition: "all 150ms ease-out",
    transform: "translate3d(0, 0, 0)",
    "&:hover": {
      transform: "translate3d(0, -3px, 0)",
      boxShadow:
        "0 1px 3px 0 rgba(30,167,253,0.5), 0 2px 5px 0 rgba(0,0,0,0.05), 0 5px 15px 0 rgba(0,0,0,0.1)",
    },
    "&:active": {
      transform: "translate3d(0, 0, 0)",
      boxShadow:
        "0 1px 3px 0 rgba(30,167,253,0.5), 0 2px 5px 0 rgba(0,0,0,0.05), 0 5px 15px 0 rgba(0,0,0,0.1)",
    },
    "&:focus": {
      boxShadow:
        "rgba(2,156,253,1) 0 0 0 1px inset, 0 1px 3px 0 rgba(30,167,253,0.5), 0 2px 5px 0 rgba(0,0,0,0.05), 0 5px 15px 0 rgba(0,0,0,0.1)",
    },
  })),
  NotificationButton = NotificationWithInteractiveStates.withComponent("div"),
  NotificationLink = NotificationWithInteractiveStates.withComponent(Link2),
  NotificationIconWrapper = newStyled.div(() => ({
    display: "flex",
    marginRight: 10,
    alignItems: "center",
    svg: { width: 16, height: 16 },
  })),
  NotificationTextWrapper = newStyled.div(({ theme }) => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    color:
      theme.base === "dark" ? theme.color.mediumdark : theme.color.mediumlight,
  })),
  Headline = newStyled.div(({ theme, hasIcon }) => ({
    height: "100%",
    width: hasIcon ? 205 : 230,
    alignItems: "center",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontSize: theme.typography.size.s1,
    lineHeight: "16px",
    fontWeight: theme.typography.weight.bold,
  })),
  SubHeadline = newStyled.div(({ theme }) => ({
    color: curriedTransparentize$1(0.25, theme.color.inverseText),
    fontSize: theme.typography.size.s1 - 1,
    lineHeight: "14px",
    marginTop: 2,
  })),
  ItemContent = ({ icon, content: { headline, subHeadline } }) => {
    let theme = useTheme(),
      defaultColor =
        theme.base === "dark"
          ? theme.color.mediumdark
          : theme.color.mediumlight;
    return import_react56.default.createElement(
      import_react56.default.Fragment,
      null,
      !icon ||
        import_react56.default.createElement(
          NotificationIconWrapper,
          null,
          import_react56.default.isValidElement(icon)
            ? icon
            : typeof icon == "object" &&
                "name" in icon &&
                import_react56.default.createElement(Icons, {
                  icon: icon.name,
                  color: icon.color || defaultColor,
                }),
        ),
      import_react56.default.createElement(
        NotificationTextWrapper,
        null,
        import_react56.default.createElement(
          Headline,
          { title: headline, hasIcon: !!icon },
          headline,
        ),
        subHeadline &&
          import_react56.default.createElement(SubHeadline, null, subHeadline),
      ),
    );
  },
  DismissButtonWrapper = newStyled(IconButton)(({ theme }) => ({
    alignSelf: "center",
    marginTop: 0,
    color: theme.base === "light" ? "rgba(255,255,255,0.7)" : " #999999",
  })),
  DismissNotificationItem = ({ onDismiss }) =>
    import_react56.default.createElement(
      DismissButtonWrapper,
      {
        title: "Dismiss notification",
        onClick: (e3) => {
          e3.preventDefault(), e3.stopPropagation(), onDismiss();
        },
      },
      import_react56.default.createElement(CloseAltIcon, { size: 12 }),
    ),
  NotificationItemSpacer = newStyled.div({ height: 48 }),
  NotificationItem = ({
    notification: { content, duration, link, onClear, onClick, id, icon },
    onDismissNotification,
  }) => {
    let onTimeout = (0, import_react56.useCallback)(() => {
        onDismissNotification(id),
          onClear && onClear({ dismissed: !1, timeout: !0 });
      }, [onDismissNotification, onClear]),
      timer = (0, import_react56.useRef)(null);
    (0, import_react56.useEffect)(() => {
      if (duration)
        return (
          (timer.current = setTimeout(onTimeout, duration)),
          () => clearTimeout(timer.current)
        );
    }, [duration, onTimeout]);
    let onDismiss = (0, import_react56.useCallback)(() => {
      clearTimeout(timer.current),
        onDismissNotification(id),
        onClear && onClear({ dismissed: !0, timeout: !1 });
    }, [onDismissNotification, onClear]);
    return link
      ? import_react56.default.createElement(
          NotificationLink,
          { to: link, duration },
          import_react56.default.createElement(ItemContent, { icon, content }),
          import_react56.default.createElement(DismissNotificationItem, {
            onDismiss,
          }),
        )
      : onClick
        ? import_react56.default.createElement(
            NotificationButton,
            { duration, onClick: () => onClick({ onDismiss }) },
            import_react56.default.createElement(ItemContent, {
              icon,
              content,
            }),
            import_react56.default.createElement(DismissNotificationItem, {
              onDismiss,
            }),
          )
        : import_react56.default.createElement(
            Notification,
            { duration },
            import_react56.default.createElement(ItemContent, {
              icon,
              content,
            }),
            import_react56.default.createElement(DismissNotificationItem, {
              onDismiss,
            }),
          );
  },
  NotificationItem_default = NotificationItem;
var NotificationList = ({ notifications, clearNotification }) =>
    import_react57.default.createElement(
      List,
      null,
      notifications &&
        notifications.map((notification) =>
          import_react57.default.createElement(NotificationItem_default, {
            key: notification.id,
            onDismissNotification: (id) => clearNotification(id),
            notification,
          }),
        ),
    ),
  List = newStyled.div({
    zIndex: 200,
    position: "fixed",
    left: 20,
    bottom: 60,
    [MEDIA_DESKTOP_BREAKPOINT]: { bottom: 20 },
    "> * + *": { marginTop: 10 },
    "&:empty": { display: "none" },
  });
var mapper3 = ({ state, api }) => ({
    notifications: state.notifications,
    clearNotification: api.clearNotification,
  }),
  Notifications = (props) =>
    import_react58.default.createElement(
      ManagerConsumer,
      { filter: mapper3 },
      (fromState) =>
        import_react58.default.createElement(NotificationList, {
          ...props,
          ...fromState,
        }),
    );
var MINIMUM_CONTENT_WIDTH_PX = 100,
  layoutStateIsEqual = (state, other) =>
    state.navSize === other.navSize &&
    state.bottomPanelHeight === other.bottomPanelHeight &&
    state.rightPanelWidth === other.rightPanelWidth &&
    state.panelPosition === other.panelPosition,
  useLayoutSyncingState = ({
    managerLayoutState,
    setManagerLayoutState,
    isDesktop,
    hasTab,
  }) => {
    let prevManagerLayoutStateRef =
        import_react59.default.useRef(managerLayoutState),
      [internalDraggingSizeState, setInternalDraggingSizeState] = (0,
      import_react59.useState)({ ...managerLayoutState, isDragging: !1 });
    (0, import_react59.useEffect)(() => {
      internalDraggingSizeState.isDragging ||
        layoutStateIsEqual(
          managerLayoutState,
          prevManagerLayoutStateRef.current,
        ) ||
        ((prevManagerLayoutStateRef.current = managerLayoutState),
        setInternalDraggingSizeState((state) => ({
          ...state,
          ...managerLayoutState,
        })));
    }, [
      internalDraggingSizeState.isDragging,
      managerLayoutState,
      setInternalDraggingSizeState,
    ]),
      (0, import_react59.useLayoutEffect)(() => {
        if (
          internalDraggingSizeState.isDragging ||
          layoutStateIsEqual(managerLayoutState, internalDraggingSizeState)
        )
          return;
        let nextState = {
          navSize: internalDraggingSizeState.navSize,
          bottomPanelHeight: internalDraggingSizeState.bottomPanelHeight,
          rightPanelWidth: internalDraggingSizeState.rightPanelWidth,
        };
        (prevManagerLayoutStateRef.current = {
          ...prevManagerLayoutStateRef.current,
          ...nextState,
        }),
          setManagerLayoutState(nextState);
      }, [internalDraggingSizeState, setManagerLayoutState]);
    let isPagesShown =
        managerLayoutState.viewMode !== "story" &&
        managerLayoutState.viewMode !== "docs",
      isPanelShown = managerLayoutState.viewMode === "story" && !hasTab,
      { panelResizerRef, sidebarResizerRef } = useDragging({
        setState: setInternalDraggingSizeState,
        isPanelShown,
        isDesktop,
      }),
      { navSize, rightPanelWidth, bottomPanelHeight } =
        internalDraggingSizeState.isDragging
          ? internalDraggingSizeState
          : managerLayoutState;
    return {
      navSize,
      rightPanelWidth,
      bottomPanelHeight,
      panelPosition: managerLayoutState.panelPosition,
      panelResizerRef,
      sidebarResizerRef,
      showPages: isPagesShown,
      showPanel: isPanelShown,
      isDragging: internalDraggingSizeState.isDragging,
    };
  },
  Layout = ({
    managerLayoutState,
    setManagerLayoutState,
    hasTab,
    ...slots
  }) => {
    let { isDesktop, isMobile } = useLayout(),
      {
        navSize,
        rightPanelWidth,
        bottomPanelHeight,
        panelPosition,
        panelResizerRef,
        sidebarResizerRef,
        showPages,
        showPanel,
        isDragging,
      } = useLayoutSyncingState({
        managerLayoutState,
        setManagerLayoutState,
        isDesktop,
        hasTab,
      });
    return import_react59.default.createElement(
      LayoutContainer,
      {
        navSize,
        rightPanelWidth,
        bottomPanelHeight,
        panelPosition: managerLayoutState.panelPosition,
        isDragging,
        viewMode: managerLayoutState.viewMode,
        showPanel,
      },
      import_react59.default.createElement(Notifications, null),
      showPages &&
        import_react59.default.createElement(
          PagesContainer,
          null,
          slots.slotPages,
        ),
      import_react59.default.createElement(
        Match,
        { path: /(^\/story|docs|onboarding\/|^\/$)/, startsWith: !1 },
        ({ match }) =>
          import_react59.default.createElement(
            ContentContainer,
            { shown: !!match },
            slots.slotMain,
          ),
      ),
      isDesktop &&
        import_react59.default.createElement(
          import_react59.default.Fragment,
          null,
          import_react59.default.createElement(
            SidebarContainer2,
            null,
            import_react59.default.createElement(Drag, {
              ref: sidebarResizerRef,
            }),
            slots.slotSidebar,
          ),
          showPanel &&
            import_react59.default.createElement(
              PanelContainer,
              { position: panelPosition },
              import_react59.default.createElement(Drag, {
                orientation:
                  panelPosition === "bottom" ? "horizontal" : "vertical",
                position: panelPosition === "bottom" ? "left" : "right",
                ref: panelResizerRef,
              }),
              slots.slotPanel,
            ),
        ),
      isMobile &&
        import_react59.default.createElement(MobileNavigation, {
          menu: slots.slotSidebar,
          panel: slots.slotPanel,
          showPanel,
        }),
    );
  },
  LayoutContainer = newStyled.div(
    ({
      navSize,
      rightPanelWidth,
      bottomPanelHeight,
      viewMode,
      panelPosition,
      showPanel,
    }) => ({
      width: "100%",
      height: ["100vh", "100dvh"],
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      [MEDIA_DESKTOP_BREAKPOINT]: {
        display: "grid",
        gap: 0,
        gridTemplateColumns: `minmax(0, ${navSize}px) minmax(${MINIMUM_CONTENT_WIDTH_PX}px, 1fr) minmax(0, ${rightPanelWidth}px)`,
        gridTemplateRows: `1fr minmax(0, ${bottomPanelHeight}px)`,
        gridTemplateAreas:
          viewMode === "docs" || !showPanel
            ? `"sidebar content content"
                  "sidebar content content"`
            : panelPosition === "right"
              ? `"sidebar content panel"
                  "sidebar content panel"`
              : `"sidebar content content"
                "sidebar panel   panel"`,
      },
    }),
  ),
  SidebarContainer2 = newStyled.div(({ theme }) => ({
    backgroundColor: theme.background.app,
    gridArea: "sidebar",
    position: "relative",
    borderRight: `1px solid ${theme.color.border}`,
  })),
  ContentContainer = newStyled.div(({ theme, shown }) => ({
    flex: 1,
    position: "relative",
    backgroundColor: theme.background.content,
    display: shown ? "grid" : "none",
    overflow: "auto",
    [MEDIA_DESKTOP_BREAKPOINT]: { flex: "auto", gridArea: "content" },
  })),
  PagesContainer = newStyled.div(({ theme }) => ({
    gridRowStart: "sidebar-start",
    gridRowEnd: "-1",
    gridColumnStart: "sidebar-end",
    gridColumnEnd: "-1",
    backgroundColor: theme.background.content,
    zIndex: 1,
  })),
  PanelContainer = newStyled.div(({ theme, position }) => ({
    gridArea: "panel",
    position: "relative",
    backgroundColor: theme.background.content,
    borderTop: position === "bottom" ? `1px solid ${theme.color.border}` : null,
    borderLeft: position === "right" ? `1px solid ${theme.color.border}` : null,
  })),
  Drag = newStyled.div(
    ({ theme }) => ({
      position: "absolute",
      opacity: 0,
      transition: "opacity 0.2s ease-in-out",
      zIndex: 100,
      "&:after": {
        content: '""',
        display: "block",
        backgroundColor: theme.color.secondary,
      },
      "&:hover": { opacity: 1 },
    }),
    ({ orientation = "vertical", position = "left" }) =>
      orientation === "vertical"
        ? {
            width: position === "left" ? 10 : 13,
            height: "100%",
            top: 0,
            right: position === "left" ? "-7px" : null,
            left: position === "right" ? "-7px" : null,
            "&:after": {
              width: 1,
              height: "100%",
              marginLeft: position === "left" ? 3 : 6,
            },
            "&:hover": { cursor: "col-resize" },
          }
        : {
            width: "100%",
            height: "13px",
            top: "-7px",
            left: 0,
            "&:after": { width: "100%", height: 1, marginTop: 6 },
            "&:hover": { cursor: "row-resize" },
          },
  );
var App = ({ managerLayoutState, setManagerLayoutState, pages, hasTab }) => {
  let { setMobileAboutOpen } = useLayout();
  return import_react60.default.createElement(
    import_react60.default.Fragment,
    null,
    import_react60.default.createElement(Global, { styles: createGlobal }),
    import_react60.default.createElement(Layout, {
      hasTab,
      managerLayoutState,
      setManagerLayoutState,
      slotMain: import_react60.default.createElement(Preview_default, {
        id: "main",
        withLoader: !0,
      }),
      slotSidebar: import_react60.default.createElement(Sidebar_default, {
        onMenuClick: () => setMobileAboutOpen((state) => !state),
      }),
      slotPanel: import_react60.default.createElement(Panel_default, null),
      slotPages: pages.map(({ id, render: Content2 }) =>
        import_react60.default.createElement(Content2, { key: id }),
      ),
    }),
  );
};
var Provider = class {
  getElements(_type) {
    throw new Error("Provider.getElements() is not implemented!");
  }
  handleAPI(_api) {
    throw new Error("Provider.handleAPI() is not implemented!");
  }
  getConfig() {
    return console.error("Provider.getConfig() is not implemented!"), {};
  }
};
var import_react68 = __toESM(require_react());
var import_react62 = __toESM(require_react());
var import_react61 = __toESM(require_react());
var Container8 = newStyled.div({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginTop: 40,
  }),
  Header = newStyled.header({
    marginBottom: 32,
    alignItems: "center",
    display: "flex",
    "> svg": { height: 48, width: "auto", marginRight: 8 },
  }),
  Footer = newStyled.div(({ theme }) => ({
    marginBottom: 24,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: theme.base === "light" ? theme.color.dark : theme.color.lightest,
    fontWeight: theme.typography.weight.regular,
    fontSize: theme.typography.size.s2,
  })),
  Actions2 = newStyled.div({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
    marginTop: 24,
    gap: 16,
  }),
  StyledLink = newStyled(Link22)(({ theme }) => ({
    "&&": {
      fontWeight: theme.typography.weight.bold,
      color: theme.base === "light" ? theme.color.dark : theme.color.light,
    },
    "&:hover": {
      color:
        theme.base === "light" ? theme.color.darkest : theme.color.lightest,
    },
  })),
  AboutScreen = ({ onNavigateToWhatsNew }) =>
    import_react61.default.createElement(
      Container8,
      null,
      import_react61.default.createElement(
        Header,
        null,
        import_react61.default.createElement(StorybookLogo, {
          alt: "Storybook",
        }),
      ),
      import_react61.default.createElement(UpgradeBlock, {
        onNavigateToWhatsNew,
      }),
      import_react61.default.createElement(
        Footer,
        null,
        import_react61.default.createElement(
          Actions2,
          null,
          import_react61.default.createElement(
            Button,
            { asChild: !0 },
            import_react61.default.createElement(
              "a",
              { href: "https://github.com/storybookjs/storybook" },
              import_react61.default.createElement(GithubIcon, null),
              "GitHub",
            ),
          ),
          import_react61.default.createElement(
            Button,
            { asChild: !0 },
            import_react61.default.createElement(
              "a",
              { href: "https://storybook.js.org/docs" },
              import_react61.default.createElement(DocumentIcon, {
                style: { display: "inline", marginRight: 5 },
              }),
              "Documentation",
            ),
          ),
        ),
        import_react61.default.createElement(
          "div",
          null,
          "Open source software maintained by",
          " ",
          import_react61.default.createElement(
            StyledLink,
            { href: "https://www.chromatic.com/" },
            "Chromatic",
          ),
          " and the",
          " ",
          import_react61.default.createElement(
            StyledLink,
            {
              href: "https://github.com/storybookjs/storybook/graphs/contributors",
            },
            "Storybook Community",
          ),
        ),
      ),
    );
var NotificationClearer = class extends import_react62.Component {
    componentDidMount() {
      let { api, notificationId } = this.props;
      api.clearNotification(notificationId);
    }
    render() {
      let { children } = this.props;
      return children;
    }
  },
  AboutPage = () => {
    let api = useStorybookApi(),
      state = useStorybookState(),
      onNavigateToWhatsNew = (0, import_react62.useCallback)(() => {
        api.changeSettingsTab("whats-new");
      }, [api]);
    return import_react62.default.createElement(
      NotificationClearer,
      { api, notificationId: "update" },
      import_react62.default.createElement(AboutScreen, {
        onNavigateToWhatsNew:
          state.whatsNewData?.status === "SUCCESS"
            ? onNavigateToWhatsNew
            : void 0,
      }),
    );
  };
var import_react65 = __toESM(require_react());
var import_react64 = __toESM(require_react());
var import_react63 = __toESM(require_react());
var Footer2 = newStyled.div(({ theme }) => ({
    display: "flex",
    paddingTop: 20,
    marginTop: 20,
    borderTop: `1px solid ${theme.appBorderColor}`,
    fontWeight: theme.typography.weight.bold,
    "& > * + *": { marginLeft: 20 },
  })),
  SettingsFooter = (props) =>
    import_react63.default.createElement(
      Footer2,
      { ...props },
      import_react63.default.createElement(
        Link22,
        {
          secondary: !0,
          href: "https://storybook.js.org",
          cancel: !1,
          target: "_blank",
        },
        "Docs",
      ),
      import_react63.default.createElement(
        Link22,
        {
          secondary: !0,
          href: "https://github.com/storybookjs/storybook",
          cancel: !1,
          target: "_blank",
        },
        "GitHub",
      ),
      import_react63.default.createElement(
        Link22,
        {
          secondary: !0,
          href: "https://storybook.js.org/community#support",
          cancel: !1,
          target: "_blank",
        },
        "Support",
      ),
    ),
  SettingsFooter_default = SettingsFooter;
var Header2 = newStyled.header(({ theme }) => ({
    marginBottom: 20,
    fontSize: theme.typography.size.m3,
    fontWeight: theme.typography.weight.bold,
    alignItems: "center",
    display: "flex",
  })),
  HeaderItem = newStyled.div(({ theme }) => ({
    fontWeight: theme.typography.weight.bold,
  })),
  GridHeaderRow = newStyled.div({
    alignSelf: "flex-end",
    display: "grid",
    margin: "10px 0",
    gridTemplateColumns: "1fr 1fr 12px",
    "& > *:last-of-type": {
      gridColumn: "2 / 2",
      justifySelf: "flex-end",
      gridRow: "1",
    },
  }),
  Row = newStyled.div(({ theme }) => ({
    padding: "6px 0",
    borderTop: `1px solid ${theme.appBorderColor}`,
    display: "grid",
    gridTemplateColumns: "1fr 1fr 0px",
  })),
  GridWrapper = newStyled.div({
    display: "grid",
    gridTemplateColumns: "1fr",
    gridAutoRows: "minmax(auto, auto)",
    marginBottom: 20,
  }),
  Description = newStyled.div({ alignSelf: "center" }),
  TextInput = newStyled(Form.Input)(
    ({ valid, theme }) =>
      valid === "error"
        ? { animation: `${theme.animation.jiggle} 700ms ease-out` }
        : {},
    {
      display: "flex",
      width: 80,
      flexDirection: "column",
      justifySelf: "flex-end",
      paddingLeft: 4,
      paddingRight: 4,
      textAlign: "center",
    },
  ),
  Fade = keyframes`
0%,100% { opacity: 0; }
  50% { opacity: 1; }
`,
  SuccessIcon = newStyled(CheckIcon)(
    ({ valid, theme }) =>
      valid === "valid"
        ? { color: theme.color.positive, animation: `${Fade} 2s ease forwards` }
        : { opacity: 0 },
    {
      alignSelf: "center",
      display: "flex",
      marginLeft: 10,
      height: 14,
      width: 14,
    },
  ),
  Container9 = newStyled.div(({ theme }) => ({
    fontSize: theme.typography.size.s2,
    padding: "3rem 20px",
    maxWidth: 600,
    margin: "0 auto",
  })),
  shortcutLabels = {
    fullScreen: "Go full screen",
    togglePanel: "Toggle addons",
    panelPosition: "Toggle addons orientation",
    toggleNav: "Toggle sidebar",
    toolbar: "Toggle canvas toolbar",
    search: "Focus search",
    focusNav: "Focus sidebar",
    focusIframe: "Focus canvas",
    focusPanel: "Focus addons",
    prevComponent: "Previous component",
    nextComponent: "Next component",
    prevStory: "Previous story",
    nextStory: "Next story",
    shortcutsPage: "Go to shortcuts page",
    aboutPage: "Go to about page",
    collapseAll: "Collapse all items on sidebar",
    expandAll: "Expand all items on sidebar",
    remount: "Remount component",
  },
  fixedShortcuts = ["escape"];
function toShortcutState(shortcutKeys) {
  return Object.entries(shortcutKeys).reduce(
    (acc, [feature, shortcut]) =>
      fixedShortcuts.includes(feature)
        ? acc
        : { ...acc, [feature]: { shortcut, error: !1 } },
    {},
  );
}
var ShortcutsScreen = class extends import_react64.Component {
  constructor(props) {
    super(props);
    this.onKeyDown = (e3) => {
      let { activeFeature, shortcutKeys } = this.state;
      if (e3.key === "Backspace") return this.restoreDefault();
      let shortcut = eventToShortcut(e3);
      if (!shortcut) return !1;
      let error = !!Object.entries(shortcutKeys).find(
        ([feature, { shortcut: existingShortcut }]) =>
          feature !== activeFeature &&
          existingShortcut &&
          shortcutMatchesShortcut(shortcut, existingShortcut),
      );
      return this.setState({
        shortcutKeys: { ...shortcutKeys, [activeFeature]: { shortcut, error } },
      });
    };
    this.onFocus = (focusedInput) => () => {
      let { shortcutKeys } = this.state;
      this.setState({
        activeFeature: focusedInput,
        shortcutKeys: {
          ...shortcutKeys,
          [focusedInput]: { shortcut: null, error: !1 },
        },
      });
    };
    this.onBlur = async () => {
      let { shortcutKeys, activeFeature } = this.state;
      if (shortcutKeys[activeFeature]) {
        let { shortcut, error } = shortcutKeys[activeFeature];
        return !shortcut || error ? this.restoreDefault() : this.saveShortcut();
      }
      return !1;
    };
    this.saveShortcut = async () => {
      let { activeFeature, shortcutKeys } = this.state,
        { setShortcut } = this.props;
      await setShortcut(activeFeature, shortcutKeys[activeFeature].shortcut),
        this.setState({ successField: activeFeature });
    };
    this.restoreDefaults = async () => {
      let { restoreAllDefaultShortcuts } = this.props,
        defaultShortcuts = await restoreAllDefaultShortcuts();
      return this.setState({ shortcutKeys: toShortcutState(defaultShortcuts) });
    };
    this.restoreDefault = async () => {
      let { activeFeature, shortcutKeys } = this.state,
        { restoreDefaultShortcut } = this.props,
        defaultShortcut = await restoreDefaultShortcut(activeFeature);
      return this.setState({
        shortcutKeys: {
          ...shortcutKeys,
          ...toShortcutState({ [activeFeature]: defaultShortcut }),
        },
      });
    };
    this.displaySuccessMessage = (activeElement) => {
      let { successField, shortcutKeys } = this.state;
      return activeElement === successField &&
        shortcutKeys[activeElement].error === !1
        ? "valid"
        : void 0;
    };
    this.displayError = (activeElement) => {
      let { activeFeature, shortcutKeys } = this.state;
      return activeElement === activeFeature &&
        shortcutKeys[activeElement].error === !0
        ? "error"
        : void 0;
    };
    this.renderKeyInput = () => {
      let { shortcutKeys, addonsShortcutLabels } = this.state;
      return Object.entries(shortcutKeys).map(([feature, { shortcut }]) =>
        import_react64.default.createElement(
          Row,
          { key: feature },
          import_react64.default.createElement(
            Description,
            null,
            shortcutLabels[feature] || addonsShortcutLabels[feature],
          ),
          import_react64.default.createElement(TextInput, {
            spellCheck: "false",
            valid: this.displayError(feature),
            className: "modalInput",
            onBlur: this.onBlur,
            onFocus: this.onFocus(feature),
            onKeyDown: this.onKeyDown,
            value: shortcut ? shortcutToHumanString(shortcut) : "",
            placeholder: "Type keys",
            readOnly: !0,
          }),
          import_react64.default.createElement(SuccessIcon, {
            valid: this.displaySuccessMessage(feature),
          }),
        ),
      );
    };
    this.renderKeyForm = () =>
      import_react64.default.createElement(
        GridWrapper,
        null,
        import_react64.default.createElement(
          GridHeaderRow,
          null,
          import_react64.default.createElement(HeaderItem, null, "Commands"),
          import_react64.default.createElement(HeaderItem, null, "Shortcut"),
        ),
        this.renderKeyInput(),
      );
    this.state = {
      activeFeature: void 0,
      successField: void 0,
      shortcutKeys: toShortcutState(props.shortcutKeys),
      addonsShortcutLabels: props.addonsShortcutLabels,
    };
  }
  render() {
    let layout = this.renderKeyForm();
    return import_react64.default.createElement(
      Container9,
      null,
      import_react64.default.createElement(Header2, null, "Keyboard shortcuts"),
      layout,
      import_react64.default.createElement(
        Button,
        {
          variant: "outline",
          size: "small",
          id: "restoreDefaultsHotkeys",
          onClick: this.restoreDefaults,
        },
        "Restore defaults",
      ),
      import_react64.default.createElement(SettingsFooter_default, null),
    );
  }
};
var ShortcutsPage = () =>
  import_react65.default.createElement(
    ManagerConsumer,
    null,
    ({
      api: {
        getShortcutKeys,
        getAddonsShortcutLabels,
        setShortcut,
        restoreDefaultShortcut,
        restoreAllDefaultShortcuts,
      },
    }) =>
      import_react65.default.createElement(ShortcutsScreen, {
        shortcutKeys: getShortcutKeys(),
        addonsShortcutLabels: getAddonsShortcutLabels(),
        setShortcut,
        restoreDefaultShortcut,
        restoreAllDefaultShortcuts,
      }),
  );
var import_react67 = __toESM(require_react());
var import_react66 = __toESM(require_react());
var Centered = newStyled.div({
    top: "50%",
    position: "absolute",
    transform: "translateY(-50%)",
    width: "100%",
    textAlign: "center",
  }),
  LoaderWrapper2 = newStyled.div({ position: "relative", height: "32px" }),
  Message2 = newStyled.div(({ theme }) => ({
    paddingTop: "12px",
    color: theme.textMutedColor,
    maxWidth: "295px",
    margin: "0 auto",
    fontSize: `${theme.typography.size.s1}px`,
    lineHeight: "16px",
  })),
  Container10 = newStyled.div(({ theme }) => ({
    position: "absolute",
    width: "100%",
    bottom: "40px",
    background: theme.background.bar,
    fontSize: "13px",
    borderTop: "1px solid",
    borderColor: theme.appBorderColor,
    padding: "8px 12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  })),
  WhatsNewFooter = ({
    isNotificationsEnabled,
    onToggleNotifications,
    onCopyLink,
  }) => {
    let theme = useTheme(),
      [copyText, setCopyText] = (0, import_react66.useState)("Copy Link"),
      copyLink = () => {
        onCopyLink(),
          setCopyText("Copied!"),
          setTimeout(() => setCopyText("Copy Link"), 4e3);
      };
    return import_react66.default.createElement(
      Container10,
      null,
      import_react66.default.createElement(
        "div",
        { style: { display: "flex", alignItems: "center", gap: 10 } },
        import_react66.default.createElement(HeartIcon, {
          color: theme.color.mediumdark,
        }),
        import_react66.default.createElement(
          "div",
          null,
          "Share this with your team.",
        ),
        import_react66.default.createElement(
          Button,
          { onClick: copyLink, size: "small", variant: "ghost" },
          copyText,
        ),
      ),
      isNotificationsEnabled
        ? import_react66.default.createElement(
            Button,
            { size: "small", variant: "ghost", onClick: onToggleNotifications },
            import_react66.default.createElement(EyeCloseIcon, null),
            "Hide notifications",
          )
        : import_react66.default.createElement(
            Button,
            { size: "small", variant: "ghost", onClick: onToggleNotifications },
            import_react66.default.createElement(EyeIcon, null),
            "Show notifications",
          ),
    );
  },
  Iframe = newStyled.iframe(
    {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      border: 0,
      margin: 0,
      padding: 0,
      width: "100%",
      height: "calc(100% - 80px)",
      background: "white",
    },
    ({ isLoaded }) => ({ visibility: isLoaded ? "visible" : "hidden" }),
  ),
  AlertIcon2 = newStyled((props) =>
    import_react66.default.createElement(AlertIcon, { ...props }),
  )(({ theme }) => ({
    color: theme.textMutedColor,
    width: 32,
    height: 32,
    margin: "0 auto",
  })),
  WhatsNewLoader = () =>
    import_react66.default.createElement(
      Centered,
      null,
      import_react66.default.createElement(
        LoaderWrapper2,
        null,
        import_react66.default.createElement(Loader, null),
      ),
      import_react66.default.createElement(Message2, null, "Loading..."),
    ),
  MaxWaitTimeMessaging = () =>
    import_react66.default.createElement(
      Centered,
      null,
      import_react66.default.createElement(AlertIcon2, null),
      import_react66.default.createElement(
        Message2,
        null,
        "The page couldn't be loaded. Check your internet connection and try again.",
      ),
    ),
  PureWhatsNewScreen = ({
    didHitMaxWaitTime,
    isLoaded,
    onLoad,
    url,
    onCopyLink,
    onToggleNotifications,
    isNotificationsEnabled,
  }) =>
    import_react66.default.createElement(
      import_react66.Fragment,
      null,
      !isLoaded &&
        !didHitMaxWaitTime &&
        import_react66.default.createElement(WhatsNewLoader, null),
      didHitMaxWaitTime
        ? import_react66.default.createElement(MaxWaitTimeMessaging, null)
        : import_react66.default.createElement(
            import_react66.default.Fragment,
            null,
            import_react66.default.createElement(Iframe, {
              isLoaded,
              onLoad,
              src: url,
              title: "What's new?",
            }),
            import_react66.default.createElement(WhatsNewFooter, {
              isNotificationsEnabled,
              onToggleNotifications,
              onCopyLink,
            }),
          ),
    ),
  MAX_WAIT_TIME = 1e4,
  WhatsNewScreen = () => {
    let api = useStorybookApi(),
      state = useStorybookState(),
      { whatsNewData } = state,
      [isLoaded, setLoaded] = (0, import_react66.useState)(!1),
      [didHitMaxWaitTime, setDidHitMaxWaitTime] = (0, import_react66.useState)(
        !1,
      );
    if (
      ((0, import_react66.useEffect)(() => {
        let timer = setTimeout(
          () => !isLoaded && setDidHitMaxWaitTime(!0),
          MAX_WAIT_TIME,
        );
        return () => clearTimeout(timer);
      }, [isLoaded]),
      whatsNewData?.status !== "SUCCESS")
    )
      return null;
    let isNotificationsEnabled = !whatsNewData.disableWhatsNewNotifications;
    return import_react66.default.createElement(PureWhatsNewScreen, {
      didHitMaxWaitTime,
      isLoaded,
      onLoad: () => {
        api.whatsNewHasBeenRead(), setLoaded(!0);
      },
      url: whatsNewData.url,
      isNotificationsEnabled,
      onCopyLink: () => {
        navigator.clipboard?.writeText(
          whatsNewData.blogUrl ?? whatsNewData.url,
        );
      },
      onToggleNotifications: () => {
        isNotificationsEnabled
          ? scope.confirm(
              "All update notifications will no longer be shown. Are you sure?",
            ) && api.toggleWhatsNewNotifications()
          : api.toggleWhatsNewNotifications();
      },
    });
  };
var WhatsNewPage = () =>
  import_react67.default.createElement(WhatsNewScreen, null);
var { document: document9 } = scope,
  Header3 = newStyled.div(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 40,
    boxShadow: `${theme.appBorderColor}  0 -1px 0 0 inset`,
    background: theme.barBg,
    paddingRight: 8,
  })),
  TabBarButton = import_react68.default.memo(function ({
    changeTab,
    id,
    title,
  }) {
    return import_react68.default.createElement(Location, null, ({ path }) => {
      let active = path.includes(`settings/${id}`);
      return import_react68.default.createElement(
        TabButton,
        {
          id: `tabbutton-${id}`,
          className: ["tabbutton"]
            .concat(active ? ["tabbutton-active"] : [])
            .join(" "),
          type: "button",
          key: "id",
          active,
          onClick: () => changeTab(id),
          role: "tab",
        },
        title,
      );
    });
  }),
  Content = newStyled(ScrollArea)(({ theme }) => ({
    background: theme.background.content,
  })),
  Pages = ({ changeTab, onClose, enableShortcuts = !0, enableWhatsNew }) => (
    import_react68.default.useEffect(() => {
      let handleEscape = (event) => {
        !enableShortcuts ||
          event.repeat ||
          (matchesModifiers(!1, event) &&
            matchesKeyCode("Escape", event) &&
            (event.preventDefault(), onClose()));
      };
      return (
        document9.addEventListener("keydown", handleEscape),
        () => document9.removeEventListener("keydown", handleEscape)
      );
    }, [enableShortcuts, onClose]),
    import_react68.default.createElement(
      import_react68.Fragment,
      null,
      import_react68.default.createElement(
        Header3,
        { className: "sb-bar" },
        import_react68.default.createElement(
          TabBar,
          { role: "tablist" },
          import_react68.default.createElement(TabBarButton, {
            id: "about",
            title: "About",
            changeTab,
          }),
          enableWhatsNew &&
            import_react68.default.createElement(TabBarButton, {
              id: "whats-new",
              title: "What's new?",
              changeTab,
            }),
          import_react68.default.createElement(TabBarButton, {
            id: "shortcuts",
            title: "Keyboard shortcuts",
            changeTab,
          }),
        ),
        import_react68.default.createElement(
          IconButton,
          {
            onClick: (e3) => (e3.preventDefault(), onClose()),
            title: "Close settings page",
          },
          import_react68.default.createElement(CloseIcon, null),
        ),
      ),
      import_react68.default.createElement(
        Content,
        { vertical: !0, horizontal: !1 },
        import_react68.default.createElement(
          Route2,
          { path: "about" },
          import_react68.default.createElement(AboutPage, { key: "about" }),
        ),
        import_react68.default.createElement(
          Route2,
          { path: "whats-new" },
          import_react68.default.createElement(WhatsNewPage, {
            key: "whats-new",
          }),
        ),
        import_react68.default.createElement(
          Route2,
          { path: "shortcuts" },
          import_react68.default.createElement(ShortcutsPage, {
            key: "shortcuts",
          }),
        ),
      ),
    )
  ),
  SettingsPages = () => {
    let api = useStorybookApi(),
      state = useStorybookState(),
      changeTab = (tab) => api.changeSettingsTab(tab);
    return import_react68.default.createElement(Pages, {
      enableWhatsNew: state.whatsNewData?.status === "SUCCESS",
      enableShortcuts: state.ui.enableShortcuts,
      changeTab,
      onClose: api.closeSettings,
    });
  },
  settingsPageAddon = {
    id: "settings",
    url: "/settings/",
    title: "Settings",
    type: typesX.experimental_PAGE,
    render: () =>
      import_react68.default.createElement(
        Route2,
        { path: "/settings/", startsWith: !0 },
        import_react68.default.createElement(SettingsPages, null),
      ),
  };
ThemeProvider.displayName = "ThemeProvider";
q.displayName = "HelmetProvider";
var Root3 = ({ provider }) =>
    import_react69.default.createElement(
      q,
      { key: "helmet.Provider" },
      import_react69.default.createElement(
        LocationProvider,
        { key: "location.provider" },
        import_react69.default.createElement(Main, { provider }),
      ),
    ),
  Main = ({ provider }) => {
    let navigate = useNavigate2();
    return import_react69.default.createElement(
      Location,
      { key: "location.consumer" },
      (locationData) =>
        import_react69.default.createElement(
          ManagerProvider,
          {
            key: "manager",
            provider,
            ...locationData,
            navigate,
            docsOptions: scope?.DOCS_OPTIONS || {},
          },
          (combo) => {
            let { state, api } = combo,
              setManagerLayoutState = (0, import_react69.useCallback)(
                (sizes) => {
                  api.setSizes(sizes);
                },
                [api],
              ),
              pages = (0, import_react69.useMemo)(
                () => [
                  settingsPageAddon,
                  ...Object.values(api.getElements(typesX.experimental_PAGE)),
                ],
                [Object.keys(api.getElements(typesX.experimental_PAGE)).join()],
              );
            return import_react69.default.createElement(
              ThemeProvider,
              { key: "theme.provider", theme: ensure(state.theme) },
              import_react69.default.createElement(
                LayoutProvider,
                null,
                import_react69.default.createElement(App, {
                  key: "app",
                  pages,
                  managerLayoutState: {
                    ...state.layout,
                    viewMode: state.viewMode,
                  },
                  hasTab: !!api.getQueryParam("tab"),
                  setManagerLayoutState,
                }),
              ),
            );
          },
        ),
    );
  };
function renderStorybookUI(domNode, provider) {
  if (!(provider instanceof Provider))
    throw new ProviderDoesNotExtendBaseProviderError();
  (0, import_client.createRoot)(domNode).render(
    import_react69.default.createElement(Root3, { key: "root", provider }),
  );
}
export { Provider, Root3 as Root, renderStorybookUI };
