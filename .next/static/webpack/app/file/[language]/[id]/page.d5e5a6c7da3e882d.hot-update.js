"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/file/[language]/[id]/page",{

/***/ "(app-pages-browser)/./src/app/file/[language]/[id]/page.tsx":
/*!***********************************************!*\
  !*** ./src/app/file/[language]/[id]/page.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ EditPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _component_template_code_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/component/template/code-editor */ \"(app-pages-browser)/./src/component/template/code-editor/index.tsx\");\n/* harmony import */ var _component_organisms_fileHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/component/organisms/fileHeader */ \"(app-pages-browser)/./src/component/organisms/fileHeader/index.tsx\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recoil */ \"(app-pages-browser)/./node_modules/recoil/es/index.js\");\n/* harmony import */ var _component_template_errorTemplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/component/template/errorTemplete */ \"(app-pages-browser)/./src/component/template/errorTemplete/index.tsx\");\n/* harmony import */ var _recoil_fileInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/recoil/fileInfo */ \"(app-pages-browser)/./src/recoil/fileInfo.ts\");\n/* harmony import */ var _recoil_fileMode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/recoil/fileMode */ \"(app-pages-browser)/./src/recoil/fileMode.ts\");\n/* harmony import */ var _recoil_userId__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/recoil/userId */ \"(app-pages-browser)/./src/recoil/userId.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction EditPage() {\n    _s();\n    const [currentFileInfo, setCurrentFileInfo] = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState)(_recoil_fileInfo__WEBPACK_IMPORTED_MODULE_6__.fileInfo);\n    const [currentFileMode, setCurrentFileMode] = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState)(_recoil_fileMode__WEBPACK_IMPORTED_MODULE_7__.fileMode);\n    const userId = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilValue)(_recoil_userId__WEBPACK_IMPORTED_MODULE_8__.user_id);\n    if (userId === 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_template_errorTemplete__WEBPACK_IMPORTED_MODULE_5__.ErrorPage, {}, void 0, false, {\n            fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/app/file/[language]/[id]/page.tsx\",\n            lineNumber: 18,\n            columnNumber: 13\n        }, this);\n    } else {\n        if (currentFileMode === \"create\") {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    width: \"100vw\",\n                    height: \"100vh\",\n                    backgroundColor: \"white\",\n                    display: \"flex\",\n                    flexDirection: \"column\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_organisms_fileHeader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/app/file/[language]/[id]/page.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_template_code_editor__WEBPACK_IMPORTED_MODULE_2__.CodeEditPage, {}, void 0, false, {\n                        fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/app/file/[language]/[id]/page.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/app/file/[language]/[id]/page.tsx\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, this);\n        } else {}\n    }\n    return currentFileInfo ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"100vw\",\n            height: \"100vh\",\n            backgroundColor: \"white\",\n            display: \"flex\",\n            flexDirection: \"column\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_organisms_fileHeader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/app/file/[language]/[id]/page.tsx\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_template_code_editor__WEBPACK_IMPORTED_MODULE_2__.CodeEditPage, {}, void 0, false, {\n                fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/app/file/[language]/[id]/page.tsx\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/app/file/[language]/[id]/page.tsx\",\n        lineNumber: 33,\n        columnNumber: 7\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_template_errorTemplete__WEBPACK_IMPORTED_MODULE_5__.ErrorPage, {}, void 0, false, {\n        fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/app/file/[language]/[id]/page.tsx\",\n        lineNumber: 36,\n        columnNumber: 16\n    }, this);\n}\n_s(EditPage, \"y+y+lBIR06CoC0lZym1s7R1MCCI=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilValue\n    ];\n});\n_c = EditPage;\nvar _c;\n$RefreshReg$(_c, \"EditPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZmlsZS9bbGFuZ3VhZ2VdL1tpZF0vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNnRDtBQUNlO0FBQ047QUFDRDtBQUNPO0FBQ2xCO0FBQ0E7QUFDSDtBQUczQixTQUFTUzs7SUFDdEIsTUFBTSxDQUFDQyxpQkFBaUJDLG1CQUFtQixHQUFHUixzREFBY0EsQ0FBQ0csc0RBQVFBO0lBQ3JFLE1BQU0sQ0FBQ00saUJBQWlCQyxtQkFBbUIsR0FBR1Ysc0RBQWNBLENBQUNJLHNEQUFRQTtJQUNyRSxNQUFNTyxTQUFTVixzREFBY0EsQ0FBQ0ksbURBQU9BO0lBRXJDLElBQUlNLFdBQVcsR0FBRTtRQUNmLHFCQUFRLDhEQUFDVCx3RUFBU0E7Ozs7O0lBQ3BCLE9BQU87UUFDTCxJQUFJTyxvQkFBb0IsVUFBUztZQUMvQixxQkFDRSw4REFBQ0c7Z0JBQUlDLE9BQU87b0JBQUNDLE9BQU87b0JBQVNDLFFBQVE7b0JBQVNDLGlCQUFnQjtvQkFBU0MsU0FBUTtvQkFBT0MsZUFBYztnQkFBUTs7a0NBQzFHLDhEQUFDbkIsdUVBQVVBOzs7OztrQ0FDWCw4REFBQ0QseUVBQVlBOzs7Ozs7Ozs7OztRQUduQixPQUFPLENBRVA7SUFDRjtJQUNBLE9BQ0lTLGdDQUNBLDhEQUFDSztRQUFJQyxPQUFPO1lBQUNDLE9BQU87WUFBU0MsUUFBUTtZQUFTQyxpQkFBZ0I7WUFBU0MsU0FBUTtZQUFPQyxlQUFjO1FBQVE7OzBCQUMxRyw4REFBQ25CLHVFQUFVQTs7Ozs7MEJBQ1gsOERBQUNELHlFQUFZQTs7Ozs7Ozs7Ozs2QkFDTiw4REFBQ0ksd0VBQVNBOzs7OztBQUV6QjtHQTFCd0JJOztRQUN3Qk4sa0RBQWNBO1FBQ2RBLGtEQUFjQTtRQUM3Q0Msa0RBQWNBOzs7S0FIUEsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9maWxlL1tsYW5ndWFnZV0vW2lkXS9wYWdlLnRzeD80MjY1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENvZGVFZGl0UGFnZSB9IGZyb20gJ0AvY29tcG9uZW50L3RlbXBsYXRlL2NvZGUtZWRpdG9yJ1xuaW1wb3J0IEZpbGVIZWFkZXIgZnJvbSAnQC9jb21wb25lbnQvb3JnYW5pc21zL2ZpbGVIZWFkZXInXG5pbXBvcnQgeyB1c2VSZWNvaWxTdGF0ZSwgdXNlUmVjb2lsVmFsdWUgfSBmcm9tICdyZWNvaWwnO1xuaW1wb3J0IHsgRXJyb3JQYWdlIH0gZnJvbSAnQC9jb21wb25lbnQvdGVtcGxhdGUvZXJyb3JUZW1wbGV0ZSc7XG5pbXBvcnQgeyBmaWxlSW5mbyB9IGZyb20gJ0AvcmVjb2lsL2ZpbGVJbmZvJztcbmltcG9ydCB7IGZpbGVNb2RlIH0gZnJvbSAnQC9yZWNvaWwvZmlsZU1vZGUnO1xuaW1wb3J0IHsgdXNlcl9pZCB9IGZyb20gJ0AvcmVjb2lsL3VzZXJJZCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdFBhZ2UoKSB7XG4gIGNvbnN0IFtjdXJyZW50RmlsZUluZm8sIHNldEN1cnJlbnRGaWxlSW5mb10gPSB1c2VSZWNvaWxTdGF0ZShmaWxlSW5mbyk7XG4gIGNvbnN0IFtjdXJyZW50RmlsZU1vZGUsIHNldEN1cnJlbnRGaWxlTW9kZV0gPSB1c2VSZWNvaWxTdGF0ZShmaWxlTW9kZSk7XG4gIGNvbnN0IHVzZXJJZCA9IHVzZVJlY29pbFZhbHVlKHVzZXJfaWQpXG5cbiAgaWYgKHVzZXJJZCA9PT0gMCl7XG4gICAgcmV0dXJuICg8RXJyb3JQYWdlLz4pO1xuICB9IGVsc2Uge1xuICAgIGlmIChjdXJyZW50RmlsZU1vZGUgPT09ICdjcmVhdGUnKXtcbiAgICAgIHJldHVybihcbiAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiBcIjEwMHZ3XCIsIGhlaWdodDogXCIxMDB2aFwiLCBiYWNrZ3JvdW5kQ29sb3I6J3doaXRlJywgZGlzcGxheTonZmxleCcsZmxleERpcmVjdGlvbjonY29sdW1uJ319PlxuICAgICAgICAgIDxGaWxlSGVhZGVyLz4gXG4gICAgICAgICAgPENvZGVFZGl0UGFnZS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH0gZWxzZSB7XG5cbiAgICB9XG4gIH1cbiAgcmV0dXJuIChcbiAgICAgIGN1cnJlbnRGaWxlSW5mbyA/ICAgICAgIFxuICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiBcIjEwMHZ3XCIsIGhlaWdodDogXCIxMDB2aFwiLCBiYWNrZ3JvdW5kQ29sb3I6J3doaXRlJywgZGlzcGxheTonZmxleCcsZmxleERpcmVjdGlvbjonY29sdW1uJ319PlxuICAgICAgICA8RmlsZUhlYWRlci8+IFxuICAgICAgICA8Q29kZUVkaXRQYWdlLz5cbiAgICAgIDwvZGl2PiA6IDxFcnJvclBhZ2UvPlxuICApXG59XG4gIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29kZUVkaXRQYWdlIiwiRmlsZUhlYWRlciIsInVzZVJlY29pbFN0YXRlIiwidXNlUmVjb2lsVmFsdWUiLCJFcnJvclBhZ2UiLCJmaWxlSW5mbyIsImZpbGVNb2RlIiwidXNlcl9pZCIsIkVkaXRQYWdlIiwiY3VycmVudEZpbGVJbmZvIiwic2V0Q3VycmVudEZpbGVJbmZvIiwiY3VycmVudEZpbGVNb2RlIiwic2V0Q3VycmVudEZpbGVNb2RlIiwidXNlcklkIiwiZGl2Iiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/file/[language]/[id]/page.tsx\n"));

/***/ })

});