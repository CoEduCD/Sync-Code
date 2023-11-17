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

/***/ "(app-pages-browser)/./src/component/template/code-editor/index.tsx":
/*!******************************************************!*\
  !*** ./src/component/template/code-editor/index.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CodeEditPage: function() { return /* binding */ CodeEditPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _monaco_editor_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @monaco-editor/react */ \"(app-pages-browser)/./node_modules/@monaco-editor/react/dist/index.mjs\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ \"(app-pages-browser)/./node_modules/recoil/es/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles.module.scss */ \"(app-pages-browser)/./src/component/template/code-editor/styles.module.scss\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _recoil_userId__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/recoil/userId */ \"(app-pages-browser)/./src/recoil/userId.ts\");\n/* harmony import */ var _api_file_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/api/file/api */ \"(app-pages-browser)/./src/api/file/api.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst CodeEditPage = ()=>{\n    _s();\n    const path = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.usePathname)().split(\"/\");\n    const userId = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilValue)(_recoil_userId__WEBPACK_IMPORTED_MODULE_6__.user_id);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (typeof userId === \"number\") {\n            (0,_api_file_api__WEBPACK_IMPORTED_MODULE_7__.createNewFile)(Number(userId), path[2], path[3]);\n        }\n    }, [\n        userId\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"100vw\",\n            height: \"85vh\",\n            paddingTop: 10,\n            backgroundColor: \"black\",\n            display: \"flex\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_monaco_editor_react__WEBPACK_IMPORTED_MODULE_2__.Editor, {\n                height: \"100%\",\n                width: \"70%\",\n                language: \"javascript\",\n                theme: \"vs-dark\",\n                options: {\n                    minimap: {\n                        enabled: true\n                    },\n                    fontSize: 15,\n                    // cursorStyle: \"black\",\n                    wordWrap: \"on\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/template/code-editor/index.tsx\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    width: \"28%\",\n                    backgroundColor: \"white\",\n                    height: \"82vh\",\n                    borderRadius: 20,\n                    position: \"relative\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        style: {\n                            position: \"absolute\",\n                            backgroundColor: \"white\",\n                            color: \"black\",\n                            border: \"2px solid\",\n                            borderRadius: 20,\n                            borderColor: \"#E3E3E3\",\n                            paddingLeft: 10,\n                            bottom: 20,\n                            left: 0,\n                            width: \"90%\",\n                            height: \"40px\",\n                            transform: \"translateX(5%)\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/template/code-editor/index.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        src: \"/paper-plane.png\",\n                        width: 25,\n                        height: 25,\n                        style: {\n                            objectFit: \"cover\"\n                        },\n                        alt: \"Sync-Codes\",\n                        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_8__.image\n                    }, void 0, false, {\n                        fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/template/code-editor/index.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/template/code-editor/index.tsx\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/template/code-editor/index.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CodeEditPage, \"hQYp4VwLf9VxD3OjQSd+c3bU/cQ=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.usePathname,\n        recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilValue\n    ];\n});\n_c = CodeEditPage;\nvar _c;\n$RefreshReg$(_c, \"CodeEditPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnQvdGVtcGxhdGUvY29kZS1lZGl0b3IvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNLO0FBQ1A7QUFDUjtBQUNXO0FBQ2U7QUFDZjtBQUNLO0FBRXZDLE1BQU1TLGVBQWU7O0lBQ3hCLE1BQU1DLE9BQU9KLDREQUFXQSxHQUFHSyxLQUFLLENBQUM7SUFDakMsTUFBTUMsU0FBU1Qsc0RBQWNBLENBQUNJLG1EQUFPQTtJQUNyQ04sZ0RBQVNBLENBQUM7UUFDTixJQUFJLE9BQU9XLFdBQVcsVUFBUztZQUMzQkosNERBQWFBLENBQUNLLE9BQU9ELFNBQVNGLElBQUksQ0FBQyxFQUFFLEVBQUNBLElBQUksQ0FBQyxFQUFFO1FBQ2pEO0lBQ0osR0FBRTtRQUFDRTtLQUFPO0lBRVYscUJBQ0EsOERBQUNFO1FBQUlDLE9BQU87WUFBQ0MsT0FBTztZQUFTQyxRQUFRO1lBQVFDLFlBQVk7WUFBSUMsaUJBQWdCO1lBQVNDLFNBQVE7UUFBTTs7MEJBQ2hHLDhEQUFDbEIsd0RBQU1BO2dCQUNIZSxRQUFPO2dCQUNQRCxPQUFNO2dCQUNOSyxVQUFTO2dCQUNUQyxPQUFNO2dCQUNOQyxTQUFTO29CQUNMQyxTQUFTO3dCQUNUQyxTQUFTO29CQUNUO29CQUNBQyxVQUFVO29CQUNWLHdCQUF3QjtvQkFDeEJDLFVBQVU7Z0JBQ2Q7Ozs7OzswQkFFSiw4REFBQ2I7Z0JBQUlDLE9BQU87b0JBQUNDLE9BQU87b0JBQU9HLGlCQUFnQjtvQkFBU0YsUUFBUTtvQkFBT1csY0FBYztvQkFBSUMsVUFBVTtnQkFBVTs7a0NBQ3JHLDhEQUFDQzt3QkFBTUMsTUFBSzt3QkFBT2hCLE9BQU87NEJBQUNjLFVBQVU7NEJBQVlWLGlCQUFpQjs0QkFBU2EsT0FBTzs0QkFBU0MsUUFBTzs0QkFBYUwsY0FBYTs0QkFBSU0sYUFBWTs0QkFBV0MsYUFBYTs0QkFBSUMsUUFBUTs0QkFBSUMsTUFBTTs0QkFBR3JCLE9BQU87NEJBQU9DLFFBQVE7NEJBQVFxQixXQUFXO3dCQUFnQjs7Ozs7O2tDQUN0UCw4REFBQ2xDLG1EQUFLQTt3QkFDRm1DLEtBQUk7d0JBQ0p2QixPQUFPO3dCQUNQQyxRQUFRO3dCQUNSRixPQUFPOzRCQUFFeUIsV0FBVzt3QkFBTzt3QkFDM0JDLEtBQUk7d0JBQ0pDLFdBQVdyQyxnREFBTUEsQ0FBQ3NDLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUl2QyxFQUFDO0dBckNZbEM7O1FBQ0lILHdEQUFXQTtRQUNUSCxrREFBY0E7OztLQUZwQk0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudC90ZW1wbGF0ZS9jb2RlLWVkaXRvci9pbmRleC50c3g/ZjZkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBFZGl0b3IgfSBmcm9tICdAbW9uYWNvLWVkaXRvci9yZWFjdCdcbmltcG9ydCB7dXNlUmVjb2lsVmFsdWUgfSBmcm9tICdyZWNvaWwnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnXG5pbXBvcnQgeyB1c2VQYXRobmFtZSwgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xuaW1wb3J0IHsgdXNlcl9pZCB9IGZyb20gJ0AvcmVjb2lsL3VzZXJJZCdcbmltcG9ydCB7IGNyZWF0ZU5ld0ZpbGUgfSBmcm9tICdAL2FwaS9maWxlL2FwaSdcblxuZXhwb3J0IGNvbnN0IENvZGVFZGl0UGFnZSA9ICgpPT57XG4gICAgY29uc3QgcGF0aCA9IHVzZVBhdGhuYW1lKCkuc3BsaXQoJy8nKTtcbiAgICBjb25zdCB1c2VySWQgPSB1c2VSZWNvaWxWYWx1ZSh1c2VyX2lkKTtcbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgaWYgKHR5cGVvZiB1c2VySWQgPT09IFwibnVtYmVyXCIpe1xuICAgICAgICAgICAgY3JlYXRlTmV3RmlsZShOdW1iZXIodXNlcklkKSwgcGF0aFsyXSxwYXRoWzNdKVxuICAgICAgICB9IFxuICAgIH0sW3VzZXJJZF0pXG5cbiAgICByZXR1cm4oXG4gICAgPGRpdiBzdHlsZT17e3dpZHRoOiBcIjEwMHZ3XCIsIGhlaWdodDogJzg1dmgnLCBwYWRkaW5nVG9wOiAxMCwgYmFja2dyb3VuZENvbG9yOidibGFjaycsIGRpc3BsYXk6J2ZsZXgnfX0+XG4gICAgICAgIDxFZGl0b3IgICAgICAgXG4gICAgICAgICAgICBoZWlnaHQ9JzEwMCUnXG4gICAgICAgICAgICB3aWR0aD1cIjcwJVwiXG4gICAgICAgICAgICBsYW5ndWFnZT1cImphdmFzY3JpcHRcIlxuICAgICAgICAgICAgdGhlbWU9J3ZzLWRhcmsnXG4gICAgICAgICAgICBvcHRpb25zPXt7XG4gICAgICAgICAgICAgICAgbWluaW1hcDoge1xuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogMTUsXG4gICAgICAgICAgICAgICAgLy8gY3Vyc29yU3R5bGU6IFwiYmxhY2tcIixcbiAgICAgICAgICAgICAgICB3b3JkV3JhcDogXCJvblwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiAnMjglJywgYmFja2dyb3VuZENvbG9yOid3aGl0ZScsIGhlaWdodDogJzgydmgnLGJvcmRlclJhZGl1czogMjAsIHBvc2l0aW9uOiAncmVsYXRpdmUnfX0+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBzdHlsZT17e3Bvc2l0aW9uOiAnYWJzb2x1dGUnICxiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGNvbG9yOiAnYmxhY2snLCBib3JkZXI6JzJweCBzb2xpZCcsIGJvcmRlclJhZGl1czoyMCwgYm9yZGVyQ29sb3I6JyNFM0UzRTMnLCBwYWRkaW5nTGVmdDogMTAsIGJvdHRvbTogMjAsIGxlZnQ6IDAsIHdpZHRoOiAnOTAlJywgaGVpZ2h0OiAnNDBweCcsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoNSUpJ319Lz5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgIHNyYz1cIi9wYXBlci1wbGFuZS5wbmdcIlxuICAgICAgICAgICAgICAgIHdpZHRoPXsyNX1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezI1fVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG9iamVjdEZpdDogJ2NvdmVyJ319XG4gICAgICAgICAgICAgICAgYWx0PVwiU3luYy1Db2Rlc1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj4pXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiRWRpdG9yIiwidXNlUmVjb2lsVmFsdWUiLCJJbWFnZSIsInN0eWxlcyIsInVzZVBhdGhuYW1lIiwidXNlcl9pZCIsImNyZWF0ZU5ld0ZpbGUiLCJDb2RlRWRpdFBhZ2UiLCJwYXRoIiwic3BsaXQiLCJ1c2VySWQiLCJOdW1iZXIiLCJkaXYiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwicGFkZGluZ1RvcCIsImJhY2tncm91bmRDb2xvciIsImRpc3BsYXkiLCJsYW5ndWFnZSIsInRoZW1lIiwib3B0aW9ucyIsIm1pbmltYXAiLCJlbmFibGVkIiwiZm9udFNpemUiLCJ3b3JkV3JhcCIsImJvcmRlclJhZGl1cyIsInBvc2l0aW9uIiwiaW5wdXQiLCJ0eXBlIiwiY29sb3IiLCJib3JkZXIiLCJib3JkZXJDb2xvciIsInBhZGRpbmdMZWZ0IiwiYm90dG9tIiwibGVmdCIsInRyYW5zZm9ybSIsInNyYyIsIm9iamVjdEZpdCIsImFsdCIsImNsYXNzTmFtZSIsImltYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/component/template/code-editor/index.tsx\n"));

/***/ })

});