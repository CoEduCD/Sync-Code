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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles.module.scss */ \"(app-pages-browser)/./src/component/organisms/documentLIst/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"(app-pages-browser)/./node_modules/recoil/es/index.js\");\n/* harmony import */ var _recoil_userId__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/recoil/userId */ \"(app-pages-browser)/./src/recoil/userId.ts\");\n/* harmony import */ var _api_file_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/api/file/api */ \"(app-pages-browser)/./src/api/file/api.ts\");\n/* harmony import */ var _Table_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Table.scss */ \"(app-pages-browser)/./src/component/organisms/documentLIst/Table.scss\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst DocumentList = ()=>{\n    _s();\n    const userId = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue)(_recoil_userId__WEBPACK_IMPORTED_MODULE_3__.user_id);\n    const [fileList, setFileList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (typeof userId === \"number\") {\n            (0,_api_file_api__WEBPACK_IMPORTED_MODULE_4__.getUserFilesList)(userId, setFileList);\n        }\n    }, [\n        userId\n    ]);\n    const headerArray = [\n        \"형식\",\n        \"작성자\",\n        \"권한\",\n        \"파일명\",\n        \"최종 수정 날짜\",\n        \"문서 생성 날짜\"\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n            className: \"user-table\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: headerArray.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: item\n                            }, item, false, {\n                                fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/documentLIst/index.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 45\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/documentLIst/index.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/documentLIst/index.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                    children: fileList.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                href: \"file/\".concat(item.language, \"/\").concat(item.fileHash),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: item.language\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/documentLIst/index.tsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: item.role\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/documentLIst/index.tsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: item.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/documentLIst/index.tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: item.fileName\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/documentLIst/index.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: item.modifiedTime\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/documentLIst/index.tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: item.createdTime\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/documentLIst/index.tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/documentLIst/index.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 21\n                            }, undefined)\n                        }, item.fileId, false, {\n                            fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/documentLIst/index.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 17\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/documentLIst/index.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/documentLIst/index.tsx\",\n            lineNumber: 23,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/documentLIst/index.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DocumentList, \"VSSzMj9KK88LD4TZ1OeaRsO8OZc=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue\n    ];\n});\n_c = DocumentList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DocumentList);\nvar _c;\n$RefreshReg$(_c, \"DocumentList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnQvb3JnYW5pc21zL2RvY3VtZW50TElzdC9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDbUQ7QUFDVjtBQUNEO0FBQ0U7QUFDUTtBQUM3QjtBQUdRO0FBRTdCLE1BQU1RLGVBQWU7O0lBQ2pCLE1BQU1DLFNBQVNMLHNEQUFjQSxDQUFDQyxtREFBT0E7SUFDckMsTUFBTSxDQUFDSyxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFnQixFQUFFO0lBQzFERCxnREFBU0EsQ0FBQztRQUNOLElBQUksT0FBT1EsV0FBVyxVQUFTO1lBQzNCSCwrREFBZ0JBLENBQUNHLFFBQVFFO1FBQzdCO0lBQ0osR0FBRTtRQUFDRjtLQUFPO0lBQ1YsTUFBTUcsY0FBYztRQUFDO1FBQU07UUFBTztRQUFNO1FBQU87UUFBWTtLQUFXO0lBQ3RFLHFCQUNBLDhEQUFDQztRQUFJQyxXQUFXWCxzRUFBZ0I7a0JBQ3hCLDRFQUFDYTtZQUFNRixXQUFVOzs4QkFDakIsOERBQUNHOzhCQUNHLDRFQUFDQztrQ0FFR04sWUFBWU8sR0FBRyxDQUFDLENBQUNDLHFCQUFPLDhEQUFDQzswQ0FBZUQ7K0JBQVBBOzs7Ozs7Ozs7Ozs7Ozs7OEJBSTdDLDhEQUFDRTs4QkFFT1osU0FBU1MsR0FBRyxDQUFDLENBQUNDLHFCQUNkLDhEQUFDRjtzQ0FDRyw0RUFBQ1gsa0RBQUlBO2dDQUNEZ0IsTUFBTyxRQUF5QkgsT0FBakJBLEtBQUtJLFFBQVEsRUFBQyxLQUFpQixPQUFkSixLQUFLSyxRQUFROztrREFFN0MsOERBQUNDO2tEQUFJTixLQUFLSSxRQUFROzs7Ozs7a0RBQ2xCLDhEQUFDRTtrREFBSU4sS0FBS08sSUFBSTs7Ozs7O2tEQUNkLDhEQUFDRDtrREFBSU4sS0FBS1EsSUFBSTs7Ozs7O2tEQUNkLDhEQUFDRjtrREFBSU4sS0FBS1MsUUFBUTs7Ozs7O2tEQUNsQiw4REFBQ0g7a0RBQUlOLEtBQUtVLFlBQVk7Ozs7OztrREFDdEIsOERBQUNKO2tEQUFJTixLQUFLVyxXQUFXOzs7Ozs7Ozs7Ozs7MkJBVHBCWCxLQUFLWSxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQnBDO0dBdENNeEI7O1FBQ2FKLGtEQUFjQTs7O0tBRDNCSTtBQXVDTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50L29yZ2FuaXNtcy9kb2N1bWVudExJc3QvaW5kZXgudHN4P2VkY2EiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2NzcydcbmltcG9ydCB7IHVzZVJlY29pbFZhbHVlIH0gZnJvbSAncmVjb2lsJztcbmltcG9ydCB7IHVzZXJfaWQgfSBmcm9tICdAL3JlY29pbC91c2VySWQnO1xuaW1wb3J0IHsgZ2V0VXNlckZpbGVzTGlzdCB9IGZyb20gJ0AvYXBpL2ZpbGUvYXBpJztcbmltcG9ydCAnLi9UYWJsZS5zY3NzJ1xuaW1wb3J0IHsgQ29kZUZpbGUgfSBmcm9tICdAL0B0eXBlL2ZpbGUvaW50ZXJmYWNlJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IERvY3VtZW50TGlzdCA9ICgpPT57XG4gICAgY29uc3QgdXNlcklkID0gdXNlUmVjb2lsVmFsdWUodXNlcl9pZClcbiAgICBjb25zdCBbZmlsZUxpc3QsIHNldEZpbGVMaXN0XSA9IHVzZVN0YXRlPENvZGVGaWxlW118W10+KFtdKSAgXG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGlmICh0eXBlb2YgdXNlcklkID09PSBcIm51bWJlclwiKXtcbiAgICAgICAgICAgIGdldFVzZXJGaWxlc0xpc3QodXNlcklkLCBzZXRGaWxlTGlzdCk7XG4gICAgICAgIH0gXG4gICAgfSxbdXNlcklkXSlcbiAgICBjb25zdCBoZWFkZXJBcnJheSA9IFtcIu2YleyLnVwiLCBcIuyekeyEseyekFwiLCBcIuq2jO2VnFwiLCBcIu2MjOydvOuqhVwiLCBcIuy1nOyihSDsiJjsoJUg64Kg7KecXCIsIFwi66y47IScIOyDneyEsSDrgqDsp5xcIl1cbiAgICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInVzZXItdGFibGVcIj5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXJBcnJheS5tYXAoKGl0ZW0pPT48dGgga2V5PXtpdGVtfT57aXRlbX08L3RoPilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaWxlTGlzdC5tYXAoKGl0ZW0pPT5cbiAgICAgICAgICAgICAgICA8dHIga2V5PXtpdGVtLmZpbGVJZH0gPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9IHtgZmlsZS8ke2l0ZW0ubGFuZ3VhZ2V9LyR7aXRlbS5maWxlSGFzaH1gfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0ubGFuZ3VhZ2V9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5yb2xlfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0ubmFtZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtLmZpbGVOYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0ubW9kaWZpZWRUaW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0uY3JlYXRlZFRpbWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvdHI+KVxuICAgICAgICAgICAgfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgIDwvZGl2Pilcbn1cbmV4cG9ydCBkZWZhdWx0IERvY3VtZW50TGlzdDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsInVzZVJlY29pbFZhbHVlIiwidXNlcl9pZCIsImdldFVzZXJGaWxlc0xpc3QiLCJMaW5rIiwiRG9jdW1lbnRMaXN0IiwidXNlcklkIiwiZmlsZUxpc3QiLCJzZXRGaWxlTGlzdCIsImhlYWRlckFycmF5IiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwidGFibGUiLCJ0aGVhZCIsInRyIiwibWFwIiwiaXRlbSIsInRoIiwidGJvZHkiLCJocmVmIiwibGFuZ3VhZ2UiLCJmaWxlSGFzaCIsInRkIiwicm9sZSIsIm5hbWUiLCJmaWxlTmFtZSIsIm1vZGlmaWVkVGltZSIsImNyZWF0ZWRUaW1lIiwiZmlsZUlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/component/organisms/documentLIst/index.tsx\n"));

/***/ })

});