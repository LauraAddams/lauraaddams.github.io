"use strict";
exports.id = 171;
exports.ids = [171];
exports.modules = {

/***/ 2931:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8000);
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2752);
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9371);
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7602);
/* harmony import */ var _chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8084);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
'use client'

// src/container.tsx
;


var Container = (0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__/* .forwardRef */ .G)(function Container2(props, ref) {
  const { className, centerContent, ...rest } = (0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__/* .omitThemingProps */ .Lr)(props);
  const styles = (0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__/* .useStyleConfig */ .mq)("Container", props);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__/* .chakra */ .m.div,
    {
      ref,
      className: (0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_5__.cx)("chakra-container", className),
      ...rest,
      __css: {
        ...styles,
        ...centerContent && {
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }
      }
    }
  );
});
Container.displayName = "Container";


//# sourceMappingURL=chunk-5MKCW436.mjs.map

/***/ }),

/***/ 6197:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y$: () => (/* binding */ Highlight)
/* harmony export */ });
/* unused harmony exports useHighlight, Mark */
/* harmony import */ var _chunk_PULVB27S_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8787);
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8000);
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9371);
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2752);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6786);
'use client'
;

// src/highlight.tsx



var escapeRegexp = (term) => term.replace(/[|\\{}()[\]^$+*?.-]/g, (char) => `\\${char}`);
function buildRegex(query) {
  const _query = query.filter((text) => text.length !== 0).map((text) => escapeRegexp(text.trim()));
  if (!_query.length) {
    return null;
  }
  return new RegExp(`(${_query.join("|")})`, "ig");
}
function highlightWords({ text, query }) {
  const regex = buildRegex(Array.isArray(query) ? query : [query]);
  if (!regex) {
    return [{ text, match: false }];
  }
  const result = text.split(regex).filter(Boolean);
  return result.map((str) => ({ text: str, match: regex.test(str) }));
}
function useHighlight(props) {
  const { text, query } = props;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => highlightWords({ text, query }), [text, query]);
}
var Mark = (0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__/* .forwardRef */ .G)(function Mark2(props, ref) {
  const styles = (0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__/* .useStyleConfig */ .mq)("Mark", props);
  const ownProps = (0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__/* .omitThemingProps */ .Lr)(props);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
    _chunk_PULVB27S_mjs__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu,
    {
      ref,
      ...ownProps,
      as: "mark",
      __css: { bg: "transparent", whiteSpace: "nowrap", ...styles }
    }
  );
});
function Highlight(props) {
  const { children, query, styles } = props;
  if (typeof children !== "string") {
    throw new Error("The children prop of Highlight must be a string");
  }
  const chunks = useHighlight({ query, text: children });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, { children: chunks.map((chunk, index) => {
    return chunk.match ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Mark, { sx: styles, children: chunk.text }, index) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: chunk.text }, index);
  }) });
}


//# sourceMappingURL=chunk-G5IOFHY7.mjs.map

/***/ })

};
;