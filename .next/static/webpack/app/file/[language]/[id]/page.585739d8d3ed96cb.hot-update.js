/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/file/[language]/[id]/page",{

/***/ "(app-pages-browser)/./src/component/organisms/codeEditor/index.tsx":
/*!******************************************************!*\
  !*** ./src/component/organisms/codeEditor/index.tsx ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "(app-pages-browser)/./src/component/template/code-editor/index.tsx":
/*!******************************************************!*\
  !*** ./src/component/template/code-editor/index.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CodeEditPage: function() { return /* binding */ CodeEditPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"(app-pages-browser)/./node_modules/recoil/es/index.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _recoil_userId__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/recoil/userId */ \"(app-pages-browser)/./src/recoil/userId.ts\");\n/* harmony import */ var _recoil_fileMode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/recoil/fileMode */ \"(app-pages-browser)/./src/recoil/fileMode.ts\");\n/* harmony import */ var _component_organisms_chatting__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/component/organisms/chatting */ \"(app-pages-browser)/./src/component/organisms/chatting/index.tsx\");\n/* harmony import */ var _api_file_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/api/file/api */ \"(app-pages-browser)/./src/api/file/api.ts\");\n/* harmony import */ var _component_organisms_codeEditor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/component/organisms/codeEditor */ \"(app-pages-browser)/./src/component/organisms/codeEditor/index.tsx\");\n/* harmony import */ var _component_organisms_codeEditor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_component_organisms_codeEditor__WEBPACK_IMPORTED_MODULE_8__);\n/* __next_internal_client_entry_do_not_use__ CodeEditPage auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst CodeEditPage = ()=>{\n    _s();\n    const path = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)().split(\"/\");\n    const userId = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue)(_recoil_userId__WEBPACK_IMPORTED_MODULE_4__.user_id);\n    const [currentFileMode, setCurrentFileMode] = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_recoil_fileMode__WEBPACK_IMPORTED_MODULE_5__.fileMode);\n    const [codeData, setCodeData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (typeof userId === \"number\" && currentFileMode === \"create\") {\n            (0,_api_file_api__WEBPACK_IMPORTED_MODULE_7__.createNewFile)(Number(userId), path[2], path[3]);\n        }\n    }, [\n        userId\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"100vw\",\n            height: \"85vh\",\n            paddingTop: 10,\n            backgroundColor: \"black\",\n            display: \"flex\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_organisms_codeEditor__WEBPACK_IMPORTED_MODULE_8__.CodeEditor, {\n                codeData: codeData,\n                setCodeData: setCodeData\n            }, void 0, false, {\n                fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/template/code-editor/index.tsx\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_organisms_chatting__WEBPACK_IMPORTED_MODULE_6__.Chatting, {}, void 0, false, {\n                fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/template/code-editor/index.tsx\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/template/code-editor/index.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CodeEditPage, \"LrxUord2a/5+FEJwBHDCCjWv6t8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname,\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue,\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState\n    ];\n});\n_c = CodeEditPage;\nvar _c;\n$RefreshReg$(_c, \"CodeEditPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnQvdGVtcGxhdGUvY29kZS1lZGl0b3IvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUMwRDtBQUNKO0FBQ1Q7QUFDSjtBQUVHO0FBQ2E7QUFDWDtBQUNlO0FBQ3RELE1BQU1XLGVBQWU7O0lBQ3hCLE1BQU1DLE9BQU9QLDREQUFXQSxHQUFHUSxLQUFLLENBQUM7SUFDakMsTUFBTUMsU0FBU1Ysc0RBQWNBLENBQUNFLG1EQUFPQTtJQUNyQyxNQUFNLENBQUNTLGlCQUFpQkMsbUJBQW1CLEdBQUdiLHNEQUFjQSxDQUFDSSxzREFBUUE7SUFDckUsTUFBTSxDQUFDVSxVQUFVQyxZQUFZLEdBQUdoQiwrQ0FBUUEsQ0FBUztJQUNqREQsZ0RBQVNBLENBQUM7UUFDTixJQUFJLE9BQU9hLFdBQVcsWUFBVUMsb0JBQWtCLFVBQVM7WUFDdkROLDREQUFhQSxDQUFDVSxPQUFPTCxTQUFTRixJQUFJLENBQUMsRUFBRSxFQUFDQSxJQUFJLENBQUMsRUFBRTtRQUNqRDtJQUNKLEdBQUU7UUFBQ0U7S0FBTztJQUNWLHFCQUNBLDhEQUFDTTtRQUFJQyxPQUFPO1lBQUNDLE9BQU87WUFBU0MsUUFBUTtZQUFRQyxZQUFZO1lBQUlDLGlCQUFnQjtZQUFTQyxTQUFRO1FBQU07OzBCQUNoRyw4REFBQ2hCLHVFQUFVQTtnQkFBQ08sVUFBVUE7Z0JBQVVDLGFBQWFBOzs7Ozs7MEJBQzdDLDhEQUFDVixtRUFBUUE7Ozs7Ozs7Ozs7O0FBRWpCLEVBQUM7R0FmWUc7O1FBQ0lOLHdEQUFXQTtRQUNURCxrREFBY0E7UUFDaUJELGtEQUFjQTs7O0tBSG5EUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50L3RlbXBsYXRlL2NvZGUtZWRpdG9yL2luZGV4LnRzeD9mNmQ4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge3VzZVJlY29pbFN0YXRlLCB1c2VSZWNvaWxWYWx1ZSB9IGZyb20gJ3JlY29pbCdcbmltcG9ydCB7IHVzZVBhdGhuYW1lIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xuaW1wb3J0IHsgdXNlcl9pZCB9IGZyb20gJ0AvcmVjb2lsL3VzZXJJZCdcbmltcG9ydCB7IGZpbGVJbmZvIH0gZnJvbSAnQC9yZWNvaWwvZmlsZUluZm8nXG5pbXBvcnQgeyBmaWxlTW9kZSB9IGZyb20gJ0AvcmVjb2lsL2ZpbGVNb2RlJ1xuaW1wb3J0IHsgQ2hhdHRpbmcgfSBmcm9tICdAL2NvbXBvbmVudC9vcmdhbmlzbXMvY2hhdHRpbmcnXG5pbXBvcnQgeyBjcmVhdGVOZXdGaWxlIH0gZnJvbSAnQC9hcGkvZmlsZS9hcGknXG5pbXBvcnQgeyBDb2RlRWRpdG9yIH0gZnJvbSAnQC9jb21wb25lbnQvb3JnYW5pc21zL2NvZGVFZGl0b3InXG5leHBvcnQgY29uc3QgQ29kZUVkaXRQYWdlID0gKCk9PntcbiAgICBjb25zdCBwYXRoID0gdXNlUGF0aG5hbWUoKS5zcGxpdCgnLycpO1xuICAgIGNvbnN0IHVzZXJJZCA9IHVzZVJlY29pbFZhbHVlKHVzZXJfaWQpO1xuICAgIGNvbnN0IFtjdXJyZW50RmlsZU1vZGUsIHNldEN1cnJlbnRGaWxlTW9kZV0gPSB1c2VSZWNvaWxTdGF0ZShmaWxlTW9kZSk7XG4gICAgY29uc3QgW2NvZGVEYXRhLCBzZXRDb2RlRGF0YV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBpZiAodHlwZW9mIHVzZXJJZCA9PT0gXCJudW1iZXJcIiYmY3VycmVudEZpbGVNb2RlPT09XCJjcmVhdGVcIil7XG4gICAgICAgICAgICBjcmVhdGVOZXdGaWxlKE51bWJlcih1c2VySWQpLCBwYXRoWzJdLHBhdGhbM10pXG4gICAgICAgIH0gXG4gICAgfSxbdXNlcklkXSlcbiAgICByZXR1cm4oXG4gICAgPGRpdiBzdHlsZT17e3dpZHRoOiBcIjEwMHZ3XCIsIGhlaWdodDogJzg1dmgnLCBwYWRkaW5nVG9wOiAxMCwgYmFja2dyb3VuZENvbG9yOidibGFjaycsIGRpc3BsYXk6J2ZsZXgnfX0+XG4gICAgICAgIDxDb2RlRWRpdG9yIGNvZGVEYXRhPXtjb2RlRGF0YX0gc2V0Q29kZURhdGE9e3NldENvZGVEYXRhfS8+XG4gICAgICAgIDxDaGF0dGluZy8+XG4gICAgPC9kaXY+KVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVjb2lsU3RhdGUiLCJ1c2VSZWNvaWxWYWx1ZSIsInVzZVBhdGhuYW1lIiwidXNlcl9pZCIsImZpbGVNb2RlIiwiQ2hhdHRpbmciLCJjcmVhdGVOZXdGaWxlIiwiQ29kZUVkaXRvciIsIkNvZGVFZGl0UGFnZSIsInBhdGgiLCJzcGxpdCIsInVzZXJJZCIsImN1cnJlbnRGaWxlTW9kZSIsInNldEN1cnJlbnRGaWxlTW9kZSIsImNvZGVEYXRhIiwic2V0Q29kZURhdGEiLCJOdW1iZXIiLCJkaXYiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwicGFkZGluZ1RvcCIsImJhY2tncm91bmRDb2xvciIsImRpc3BsYXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/component/template/code-editor/index.tsx\n"));

/***/ })

});