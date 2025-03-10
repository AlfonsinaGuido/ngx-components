try {
  (() => {
    var i = Object.defineProperty;
    var v = Object.getOwnPropertyDescriptor;
    var T = Object.getOwnPropertyNames;
    var h = Object.prototype.hasOwnProperty;
    var u = (e, t) => () => (e && (t = e((e = 0))), t);
    var P = (e, t) => () => (
        t || e((t = { exports: {} }).exports, t), t.exports
      ),
      w = (e, t) => {
        for (var r in t) i(e, r, { get: t[r], enumerable: !0 });
      },
      x = (e, t, r, s) => {
        if ((t && typeof t == "object") || typeof t == "function")
          for (let o of T(t))
            !h.call(e, o) &&
              o !== r &&
              i(e, o, {
                get: () => t[o],
                enumerable: !(s = v(t, o)) || s.enumerable,
              });
        return e;
      };
    var A = (e) => x(i({}, "__esModule", { value: !0 }), e);
    var a = u(() => {});
    var n = u(() => {});
    var l = u(() => {});
    var b = {};
    w(b, {
      ActiveTabs: () => M,
      Consumer: () => j,
      ManagerContext: () => C,
      Provider: () => R,
      RequestResponseError: () => I,
      addons: () => q,
      combineParameters: () => F,
      controlOrMetaKey: () => G,
      controlOrMetaSymbol: () => K,
      default: () => k,
      eventMatchesShortcut: () => N,
      eventToShortcut: () => B,
      experimental_requestResponse: () => D,
      isMacLike: () => E,
      isShortcutTaken: () => L,
      keyToSymbol: () => Y,
      merge: () => H,
      mockChannel: () => J,
      optionOrAltSymbol: () => z,
      shortcutMatchesShortcut: () => Q,
      shortcutToHumanString: () => U,
      types: () => V,
      useAddonState: () => W,
      useArgTypes: () => X,
      useArgs: () => Z,
      useChannel: () => $,
      useGlobalTypes: () => ee,
      useGlobals: () => te,
      useParameter: () => re,
      useSharedState: () => oe,
      useStoryPrepared: () => se,
      useStorybookApi: () => ae,
      useStorybookState: () => ne,
    });
    var k,
      M,
      j,
      C,
      R,
      I,
      q,
      F,
      G,
      K,
      N,
      B,
      D,
      E,
      L,
      Y,
      H,
      J,
      z,
      Q,
      U,
      V,
      W,
      X,
      Z,
      $,
      ee,
      te,
      re,
      oe,
      se,
      ae,
      ne,
      g = u(() => {
        a();
        n();
        l();
        (k = __STORYBOOK_API__),
          ({
            ActiveTabs: M,
            Consumer: j,
            ManagerContext: C,
            Provider: R,
            RequestResponseError: I,
            addons: q,
            combineParameters: F,
            controlOrMetaKey: G,
            controlOrMetaSymbol: K,
            eventMatchesShortcut: N,
            eventToShortcut: B,
            experimental_requestResponse: D,
            isMacLike: E,
            isShortcutTaken: L,
            keyToSymbol: Y,
            merge: H,
            mockChannel: J,
            optionOrAltSymbol: z,
            shortcutMatchesShortcut: Q,
            shortcutToHumanString: U,
            types: V,
            useAddonState: W,
            useArgTypes: X,
            useArgs: Z,
            useChannel: $,
            useGlobalTypes: ee,
            useGlobals: te,
            useParameter: re,
            useSharedState: oe,
            useStoryPrepared: se,
            useStorybookApi: ae,
            useStorybookState: ne,
          } = __STORYBOOK_API__);
      });
    var O = P((xe, f) => {
      "use strict";
      a();
      n();
      l();
      var d = Object.defineProperty,
        le = Object.getOwnPropertyDescriptor,
        ue = Object.getOwnPropertyNames,
        ie = Object.prototype.hasOwnProperty,
        pe = (e, t) => {
          for (var r in t) d(e, r, { get: t[r], enumerable: !0 });
        },
        _e = (e, t, r, s) => {
          if ((t && typeof t == "object") || typeof t == "function")
            for (let o of ue(t))
              !ie.call(e, o) &&
                o !== r &&
                d(e, o, {
                  get: () => t[o],
                  enumerable: !(s = le(t, o)) || s.enumerable,
                });
          return e;
        },
        ce = (e) => _e(d({}, "__esModule", { value: !0 }), e),
        y = {};
      pe(y, { global: () => de });
      f.exports = ce(y);
      var de = (() => {
        let e;
        return (
          typeof window < "u"
            ? (e = window)
            : typeof globalThis < "u"
              ? (e = globalThis)
              : typeof window < "u"
                ? (e = window)
                : typeof self < "u"
                  ? (e = self)
                  : (e = {}),
          e
        );
      })();
    });
    a();
    n();
    l();
    a();
    n();
    l();
    var be = (g(), A(b)),
      ge = O(),
      S = "static-filter";
    be.addons.register(S, (e) => {
      let t = Object.entries(ge.global.TAGS_OPTIONS ?? {}).reduce((r, s) => {
        let [o, m] = s;
        return m.excludeFromSidebar && (r[o] = !0), r;
      }, {});
      e.experimental_setFilter(S, (r) => {
        let s = r.tags ?? [];
        return (
          (s.includes("dev") || r.type === "docs") &&
          s.filter((o) => t[o]).length === 0
        );
      });
    });
  })();
} catch (e) {
  console.error(
    "[Storybook] One of your manager-entries failed: " + import.meta.url,
    e,
  );
}
