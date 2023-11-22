"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/component/organisms/documentLIst/index.tsx":
/*!********************************************************!*\
  !*** ./src/component/organisms/documentLIst/index.tsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles.module.scss */ \"(app-pages-browser)/./src/component/organisms/documentLIst/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"(app-pages-browser)/./node_modules/recoil/es/index.js\");\n/* harmony import */ var _recoil_userId__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/recoil/userId */ \"(app-pages-browser)/./src/recoil/userId.ts\");\n/* harmony import */ var _api_file_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/api/file/api */ \"(app-pages-browser)/./src/api/file/api.ts\");\n/* harmony import */ var _Table_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Table.scss */ \"(app-pages-browser)/./src/component/organisms/documentLIst/Table.scss\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst DocumentList = ()=>{\n    _s();\n    const userId = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue)(_recoil_userId__WEBPACK_IMPORTED_MODULE_3__.user_id);\n    const [fileList, setFileList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (typeof userId === \"number\") {\n            (0,_api_file_api__WEBPACK_IMPORTED_MODULE_4__.getUserFilesList)(userId, setFileList);\n        }\n    }, [\n        userId\n    ]);\n    const headerArray = [\n        \"형식\",\n        \"작성자\",\n        \"권한\",\n        \"파일명\",\n        \"최종 수정 날짜\",\n        \"문서 생성 날짜\"\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n            className: \"user-table\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: headerArray.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: item\n                            }, item, false, {\n                                fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/documentLIst/index.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 45\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/documentLIst/index.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/documentLIst/index.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                    children: fileList.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                            style: {\n                                width: \"100vw\"\n                            },\n                            href: \"file/\".concat(item.language, \"/\").concat(item.fileHash),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: item.language\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/documentLIst/index.tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: item.role\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/documentLIst/index.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: item.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/documentLIst/index.tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: item.fileName\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/documentLIst/index.tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: item.modifiedTime\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/documentLIst/index.tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: item.createdTime\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/documentLIst/index.tsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/documentLIst/index.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 17\n                            }, undefined)\n                        }, item.fileId, false, {\n                            fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/documentLIst/index.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 17\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/documentLIst/index.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/documentLIst/index.tsx\",\n            lineNumber: 23,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/documentLIst/index.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DocumentList, \"VSSzMj9KK88LD4TZ1OeaRsO8OZc=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue\n    ];\n});\n_c = DocumentList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DocumentList);\nvar _c;\n$RefreshReg$(_c, \"DocumentList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnQvb3JnYW5pc21zL2RvY3VtZW50TElzdC9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDbUQ7QUFDVjtBQUNEO0FBQ0U7QUFDUTtBQUM3QjtBQUdRO0FBRTdCLE1BQU1RLGVBQWU7O0lBQ2pCLE1BQU1DLFNBQVNMLHNEQUFjQSxDQUFDQyxtREFBT0E7SUFDckMsTUFBTSxDQUFDSyxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFnQixFQUFFO0lBQzFERCxnREFBU0EsQ0FBQztRQUNOLElBQUksT0FBT1EsV0FBVyxVQUFTO1lBQzNCSCwrREFBZ0JBLENBQUNHLFFBQVFFO1FBQzdCO0lBQ0osR0FBRTtRQUFDRjtLQUFPO0lBQ1YsTUFBTUcsY0FBYztRQUFDO1FBQU07UUFBTztRQUFNO1FBQU87UUFBWTtLQUFXO0lBQ3RFLHFCQUNBLDhEQUFDQztRQUFJQyxXQUFXWCxzRUFBZ0I7a0JBQ3hCLDRFQUFDYTtZQUFNRixXQUFVOzs4QkFDakIsOERBQUNHOzhCQUNHLDRFQUFDQztrQ0FFR04sWUFBWU8sR0FBRyxDQUFDLENBQUNDLHFCQUFPLDhEQUFDQzswQ0FBZUQ7K0JBQVBBOzs7Ozs7Ozs7Ozs7Ozs7OEJBSTdDLDhEQUFDRTs4QkFFT1osU0FBU1MsR0FBRyxDQUFDLENBQUNDLHFCQUNkLDhEQUFDYixrREFBSUE7NEJBQ0xnQixPQUFPO2dDQUFDQyxPQUFNOzRCQUFPOzRCQUVyQkMsTUFBTyxRQUF5QkwsT0FBakJBLEtBQUtNLFFBQVEsRUFBQyxLQUFpQixPQUFkTixLQUFLTyxRQUFRO3NDQUU3Qyw0RUFBQ1Q7O2tEQUNPLDhEQUFDVTtrREFBSVIsS0FBS00sUUFBUTs7Ozs7O2tEQUNsQiw4REFBQ0U7a0RBQUlSLEtBQUtTLElBQUk7Ozs7OztrREFDZCw4REFBQ0Q7a0RBQUlSLEtBQUtVLElBQUk7Ozs7OztrREFDZCw4REFBQ0Y7a0RBQUlSLEtBQUtXLFFBQVE7Ozs7OztrREFDbEIsOERBQUNIO2tEQUFJUixLQUFLWSxZQUFZOzs7Ozs7a0RBQ3RCLDhEQUFDSjtrREFBSVIsS0FBS2EsV0FBVzs7Ozs7Ozs7Ozs7OzJCQVR4QmIsS0FBS2MsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JoQztHQXhDTTFCOztRQUNhSixrREFBY0E7OztLQUQzQkk7QUF5Q04sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudC9vcmdhbmlzbXMvZG9jdW1lbnRMSXN0L2luZGV4LnRzeD9lZGNhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnXG5pbXBvcnQgeyB1c2VSZWNvaWxWYWx1ZSB9IGZyb20gJ3JlY29pbCc7XG5pbXBvcnQgeyB1c2VyX2lkIH0gZnJvbSAnQC9yZWNvaWwvdXNlcklkJztcbmltcG9ydCB7IGdldFVzZXJGaWxlc0xpc3QgfSBmcm9tICdAL2FwaS9maWxlL2FwaSc7XG5pbXBvcnQgJy4vVGFibGUuc2NzcydcbmltcG9ydCB7IENvZGVGaWxlIH0gZnJvbSAnQC9AdHlwZS9maWxlL2ludGVyZmFjZSc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBEb2N1bWVudExpc3QgPSAoKT0+e1xuICAgIGNvbnN0IHVzZXJJZCA9IHVzZVJlY29pbFZhbHVlKHVzZXJfaWQpXG4gICAgY29uc3QgW2ZpbGVMaXN0LCBzZXRGaWxlTGlzdF0gPSB1c2VTdGF0ZTxDb2RlRmlsZVtdfFtdPihbXSkgIFxuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBpZiAodHlwZW9mIHVzZXJJZCA9PT0gXCJudW1iZXJcIil7XG4gICAgICAgICAgICBnZXRVc2VyRmlsZXNMaXN0KHVzZXJJZCwgc2V0RmlsZUxpc3QpO1xuICAgICAgICB9IFxuICAgIH0sW3VzZXJJZF0pXG4gICAgY29uc3QgaGVhZGVyQXJyYXkgPSBbXCLtmJXsi51cIiwgXCLsnpHshLHsnpBcIiwgXCLqtoztlZxcIiwgXCLtjIzsnbzrqoVcIiwgXCLstZzsooUg7IiY7KCVIOuCoOynnFwiLCBcIuusuOyEnCDsg53shLEg64Kg7KecXCJdXG4gICAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ1c2VyLXRhYmxlXCI+XG4gICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyQXJyYXkubWFwKChpdGVtKT0+PHRoIGtleT17aXRlbX0+e2l0ZW19PC90aD4pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmlsZUxpc3QubWFwKChpdGVtKT0+XG4gICAgICAgICAgICAgICAgPExpbmsgXG4gICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDonMTAwdncnfX1cbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uZmlsZUlkfSBcbiAgICAgICAgICAgICAgICBocmVmPSB7YGZpbGUvJHtpdGVtLmxhbmd1YWdlfS8ke2l0ZW0uZmlsZUhhc2h9YH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHRyID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5sYW5ndWFnZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtLnJvbGV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5uYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0uZmlsZU5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5tb2RpZmllZFRpbWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5jcmVhdGVkVGltZX08L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC9MaW5rPilcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICA8L2Rpdj4pXG59XG5leHBvcnQgZGVmYXVsdCBEb2N1bWVudExpc3Q7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJ1c2VSZWNvaWxWYWx1ZSIsInVzZXJfaWQiLCJnZXRVc2VyRmlsZXNMaXN0IiwiTGluayIsIkRvY3VtZW50TGlzdCIsInVzZXJJZCIsImZpbGVMaXN0Iiwic2V0RmlsZUxpc3QiLCJoZWFkZXJBcnJheSIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInRhYmxlIiwidGhlYWQiLCJ0ciIsIm1hcCIsIml0ZW0iLCJ0aCIsInRib2R5Iiwic3R5bGUiLCJ3aWR0aCIsImhyZWYiLCJsYW5ndWFnZSIsImZpbGVIYXNoIiwidGQiLCJyb2xlIiwibmFtZSIsImZpbGVOYW1lIiwibW9kaWZpZWRUaW1lIiwiY3JlYXRlZFRpbWUiLCJmaWxlSWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/component/organisms/documentLIst/index.tsx\n"));

/***/ })

});