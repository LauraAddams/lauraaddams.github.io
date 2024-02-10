"use strict";
exports.id = 633;
exports.ids = [633];
exports.modules = {

/***/ 9185:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  M: () => (/* binding */ SimpleGrid)
});

// EXTERNAL MODULE: ./node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs
var chunk_ZJJGQIVY = __webpack_require__(8000);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs + 6 modules
var chunk_ZHQNHOQS = __webpack_require__(7602);
// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
;// CONCATENATED MODULE: ./node_modules/@chakra-ui/layout/dist/chunk-JARCRF6W.mjs
'use client'

// src/grid.tsx
;

var Grid = (0,chunk_ZJJGQIVY/* forwardRef */.G)(function Grid2(props, ref) {
  const {
    templateAreas,
    gap,
    rowGap,
    columnGap,
    column,
    row,
    autoFlow,
    autoRows,
    templateRows,
    autoColumns,
    templateColumns,
    ...rest
  } = props;
  const styles = {
    display: "grid",
    gridTemplateAreas: templateAreas,
    gridGap: gap,
    gridRowGap: rowGap,
    gridColumnGap: columnGap,
    gridAutoColumns: autoColumns,
    gridColumn: column,
    gridRow: row,
    gridAutoFlow: autoFlow,
    gridAutoRows: autoRows,
    gridTemplateRows: templateRows,
    gridTemplateColumns: templateColumns
  };
  return /* @__PURE__ */ (0,jsx_runtime_.jsx)(chunk_ZHQNHOQS/* chakra */.m.div, { ref, __css: styles, ...rest });
});
Grid.displayName = "Grid";


//# sourceMappingURL=chunk-JARCRF6W.mjs.map
// EXTERNAL MODULE: ./node_modules/@chakra-ui/system/dist/chunk-UIGT7YZF.mjs
var chunk_UIGT7YZF = __webpack_require__(9745);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/system/dist/chunk-WNDUHNHH.mjs
var chunk_WNDUHNHH = __webpack_require__(4845);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/breakpoint-utils/dist/chunk-G72KV6MB.mjs
var chunk_G72KV6MB = __webpack_require__(1073);
;// CONCATENATED MODULE: ./node_modules/@chakra-ui/layout/dist/chunk-2N6VWMFO.mjs
'use client'
;

// src/simple-grid.tsx



var SimpleGrid = (0,chunk_ZJJGQIVY/* forwardRef */.G)(
  function SimpleGrid2(props, ref) {
    const { columns, spacingX, spacingY, spacing, minChildWidth, ...rest } = props;
    const theme = (0,chunk_UIGT7YZF/* useTheme */.F)();
    const templateColumns = minChildWidth ? widthToColumns(minChildWidth, theme) : countToColumns(columns);
    return /* @__PURE__ */ (0,jsx_runtime_.jsx)(
      Grid,
      {
        ref,
        gap: spacing,
        columnGap: spacingX,
        rowGap: spacingY,
        templateColumns,
        ...rest
      }
    );
  }
);
SimpleGrid.displayName = "SimpleGrid";
function toPx(n) {
  return typeof n === "number" ? `${n}px` : n;
}
function widthToColumns(width, theme) {
  return (0,chunk_G72KV6MB/* mapResponsive */.XQ)(width, (value) => {
    const _value = (0,chunk_WNDUHNHH/* getToken */.LP)("sizes", value, toPx(value))(theme);
    return value === null ? null : `repeat(auto-fit, minmax(${_value}, 1fr))`;
  });
}
function countToColumns(count) {
  return (0,chunk_G72KV6MB/* mapResponsive */.XQ)(
    count,
    (value) => value === null ? null : `repeat(${value}, minmax(0, 1fr))`
  );
}


//# sourceMappingURL=chunk-2N6VWMFO.mjs.map

/***/ }),

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

/***/ })

};
;