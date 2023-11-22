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

/***/ "(app-pages-browser)/./src/component/organisms/codeEditor/index.tsx":
/*!******************************************************!*\
  !*** ./src/component/organisms/codeEditor/index.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CodeEditor: function() { return /* binding */ CodeEditor; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _api_file_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/file/api */ \"(app-pages-browser)/./src/api/file/api.ts\");\n/* harmony import */ var _hooks_useDebounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/useDebounce */ \"(app-pages-browser)/./src/hooks/useDebounce.ts\");\n/* harmony import */ var _recoil_fileInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/recoil/fileInfo */ \"(app-pages-browser)/./src/recoil/fileInfo.ts\");\n/* harmony import */ var _recoil_fileMode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/recoil/fileMode */ \"(app-pages-browser)/./src/recoil/fileMode.ts\");\n/* harmony import */ var _monaco_editor_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @monaco-editor/react */ \"(app-pages-browser)/./node_modules/@monaco-editor/react/dist/index.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! recoil */ \"(app-pages-browser)/./node_modules/recoil/es/index.js\");\n/* __next_internal_client_entry_do_not_use__ CodeEditor auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst CodeEditor = (param)=>{\n    let { codeData, setCodeData } = param;\n    _s();\n    const [currentFileInfo, setCurrentFileInfo] = (0,recoil__WEBPACK_IMPORTED_MODULE_8__.useRecoilState)(_recoil_fileInfo__WEBPACK_IMPORTED_MODULE_3__.fileInfo);\n    const [currentFileMode, setCurrentFileMode] = (0,recoil__WEBPACK_IMPORTED_MODULE_8__.useRecoilState)(_recoil_fileMode__WEBPACK_IMPORTED_MODULE_4__.fileMode);\n    const path = (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.usePathname)().split(\"/\");\n    const debouncedCode = (0,_hooks_useDebounce__WEBPACK_IMPORTED_MODULE_2__.useDebounce)(codeData, 300);\n    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{\n        if (currentFileMode === \"modify\" && currentFileInfo !== undefined) {\n            (0,_api_file_api__WEBPACK_IMPORTED_MODULE_1__.modifyFileContents)(currentFileInfo, codeData);\n            console.log(debouncedCode);\n        }\n    }, [\n        debouncedCode\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_monaco_editor_react__WEBPACK_IMPORTED_MODULE_5__.Editor, {\n            height: \"100%\",\n            width: \"70%\",\n            language: path[2],\n            value: codeData,\n            defaultValue: currentFileInfo !== undefined ? currentFileInfo.fileDetail : \"\",\n            onChange: (value)=>{\n                if (value !== undefined) {\n                    setCodeData(value);\n                }\n            },\n            theme: \"vs-dark\",\n            options: {\n                minimap: {\n                    enabled: true\n                },\n                fontSize: 15,\n                cursorStyle: \"black\",\n                wordWrap: \"on\"\n            }\n        }, void 0, false, {\n            fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/codeEditor/index.tsx\",\n            lineNumber: 28,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n_s(CodeEditor, \"vypBfPNSn0MTLXVEv8/YNWvr+ZI=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_8__.useRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_8__.useRecoilState,\n        next_navigation__WEBPACK_IMPORTED_MODULE_6__.usePathname,\n        _hooks_useDebounce__WEBPACK_IMPORTED_MODULE_2__.useDebounce\n    ];\n});\n_c = CodeEditor;\nvar _c;\n$RefreshReg$(_c, \"CodeEditor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnQvb3JnYW5pc21zL2NvZGVFZGl0b3IvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ29EO0FBQ0Y7QUFDTDtBQUNBO0FBRUM7QUFDQTtBQUNMO0FBQ2U7QUFLakQsTUFBTVMsYUFBYTtRQUFDLEVBQUNDLFFBQVEsRUFBRUMsV0FBVyxFQUFpQjs7SUFDOUQsTUFBTSxDQUFDQyxpQkFBaUJDLG1CQUFtQixHQUFHTCxzREFBY0EsQ0FBQ04sc0RBQVFBO0lBQ3JFLE1BQU0sQ0FBQ1ksaUJBQWlCQyxtQkFBbUIsR0FBR1Asc0RBQWNBLENBQUNMLHNEQUFRQTtJQUNyRSxNQUFNYSxPQUFPWCw0REFBV0EsR0FBR1ksS0FBSyxDQUFDO0lBQ2pDLE1BQU1DLGdCQUFnQmpCLCtEQUFXQSxDQUFDUyxVQUFVO0lBQzVDSCxnREFBU0EsQ0FBQztRQUNOLElBQUlPLG9CQUFvQixZQUFZRixvQkFBa0JPLFdBQVU7WUFDNURuQixpRUFBa0JBLENBQUNZLGlCQUFpQkY7WUFDcENVLFFBQVFDLEdBQUcsQ0FBQ0g7UUFDaEI7SUFDSixHQUFFO1FBQUNBO0tBQWM7SUFDakIscUJBQ0E7a0JBQ0ksNEVBQUNkLHdEQUFNQTtZQUNIa0IsUUFBTztZQUNQQyxPQUFNO1lBQ05DLFVBQVVSLElBQUksQ0FBQyxFQUFFO1lBQ2pCUyxPQUFPZjtZQUNQZ0IsY0FBY2Qsb0JBQWtCTyxZQUFVUCxnQkFBZ0JlLFVBQVUsR0FBQztZQUNyRUMsVUFBVSxDQUFDSDtnQkFDUCxJQUFJQSxVQUFRTixXQUFXO29CQUNuQlIsWUFBWWM7Z0JBQ2hCO1lBQ0o7WUFFQUksT0FBTTtZQUNOQyxTQUFTO2dCQUNMQyxTQUFTO29CQUNUQyxTQUFTO2dCQUNUO2dCQUNBQyxVQUFVO2dCQUNWQyxhQUFhO2dCQUNiQyxVQUFVO1lBQ2Q7Ozs7Ozs7QUFJWixFQUFDO0dBckNZMUI7O1FBQ3FDRCxrREFBY0E7UUFDZEEsa0RBQWNBO1FBQy9DSCx3REFBV0E7UUFDRkosMkRBQVdBOzs7S0FKeEJRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnQvb3JnYW5pc21zL2NvZGVFZGl0b3IvaW5kZXgudHN4PzNmMDciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCB7IG1vZGlmeUZpbGVDb250ZW50cyB9IGZyb20gJ0AvYXBpL2ZpbGUvYXBpJztcbmltcG9ydCB7IHVzZURlYm91bmNlIH0gZnJvbSAnQC9ob29rcy91c2VEZWJvdW5jZSc7XG5pbXBvcnQgeyBmaWxlSW5mbyB9IGZyb20gJ0AvcmVjb2lsL2ZpbGVJbmZvJztcbmltcG9ydCB7IGZpbGVNb2RlIH0gZnJvbSAnQC9yZWNvaWwvZmlsZU1vZGUnO1xuaW1wb3J0IHsgdXNlcl9pZCB9IGZyb20gJ0AvcmVjb2lsL3VzZXJJZCc7XG5pbXBvcnQgeyBFZGl0b3IgfSBmcm9tICdAbW9uYWNvLWVkaXRvci9yZWFjdCc7XG5pbXBvcnQgeyB1c2VQYXRobmFtZSB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUmVjb2lsU3RhdGUsIHVzZVJlY29pbFZhbHVlIH0gZnJvbSAncmVjb2lsJztcbmludGVyZmFjZSBDb2RlRWRpdG9yUHJvcHMge1xuICAgIGNvZGVEYXRhOiBzdHJpbmc7XG4gICAgc2V0Q29kZURhdGE6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPHN0cmluZz4+XG59XG5leHBvcnQgY29uc3QgQ29kZUVkaXRvciA9ICh7Y29kZURhdGEsIHNldENvZGVEYXRhfTpDb2RlRWRpdG9yUHJvcHMpPT57XG4gICAgY29uc3QgW2N1cnJlbnRGaWxlSW5mbywgc2V0Q3VycmVudEZpbGVJbmZvXSA9IHVzZVJlY29pbFN0YXRlKGZpbGVJbmZvKTtcbiAgICBjb25zdCBbY3VycmVudEZpbGVNb2RlLCBzZXRDdXJyZW50RmlsZU1vZGVdID0gdXNlUmVjb2lsU3RhdGUoZmlsZU1vZGUpO1xuICAgIGNvbnN0IHBhdGggPSB1c2VQYXRobmFtZSgpLnNwbGl0KCcvJyk7XG4gICAgY29uc3QgZGVib3VuY2VkQ29kZSA9IHVzZURlYm91bmNlKGNvZGVEYXRhLCAzMDApO1xuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBpZiAoY3VycmVudEZpbGVNb2RlID09PSBcIm1vZGlmeVwiICYmIGN1cnJlbnRGaWxlSW5mbyE9PXVuZGVmaW5lZCl7XG4gICAgICAgICAgICBtb2RpZnlGaWxlQ29udGVudHMoY3VycmVudEZpbGVJbmZvLCBjb2RlRGF0YSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRlYm91bmNlZENvZGUpXG4gICAgICAgIH1cbiAgICB9LFtkZWJvdW5jZWRDb2RlXSlcbiAgICByZXR1cm4oXG4gICAgPD5cbiAgICAgICAgPEVkaXRvciAgICAgICBcbiAgICAgICAgICAgIGhlaWdodD0nMTAwJSdcbiAgICAgICAgICAgIHdpZHRoPVwiNzAlXCJcbiAgICAgICAgICAgIGxhbmd1YWdlPXtwYXRoWzJdfVxuICAgICAgICAgICAgdmFsdWU9e2NvZGVEYXRhfVxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtjdXJyZW50RmlsZUluZm8hPT11bmRlZmluZWQ/Y3VycmVudEZpbGVJbmZvLmZpbGVEZXRhaWw6XCJcIn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpPT57XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlIT09dW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldENvZGVEYXRhKHZhbHVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoZW1lPSd2cy1kYXJrJ1xuICAgICAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgICAgICAgIG1pbmltYXA6IHtcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IDE1LFxuICAgICAgICAgICAgICAgIGN1cnNvclN0eWxlOiBcImJsYWNrXCIsXG4gICAgICAgICAgICAgICAgd29yZFdyYXA6IFwib25cIixcbiAgICAgICAgICAgIH19XG4gICAgICAgIC8+XG5cbiAgICA8Lz4pXG59Il0sIm5hbWVzIjpbIm1vZGlmeUZpbGVDb250ZW50cyIsInVzZURlYm91bmNlIiwiZmlsZUluZm8iLCJmaWxlTW9kZSIsIkVkaXRvciIsInVzZVBhdGhuYW1lIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWNvaWxTdGF0ZSIsIkNvZGVFZGl0b3IiLCJjb2RlRGF0YSIsInNldENvZGVEYXRhIiwiY3VycmVudEZpbGVJbmZvIiwic2V0Q3VycmVudEZpbGVJbmZvIiwiY3VycmVudEZpbGVNb2RlIiwic2V0Q3VycmVudEZpbGVNb2RlIiwicGF0aCIsInNwbGl0IiwiZGVib3VuY2VkQ29kZSIsInVuZGVmaW5lZCIsImNvbnNvbGUiLCJsb2ciLCJoZWlnaHQiLCJ3aWR0aCIsImxhbmd1YWdlIiwidmFsdWUiLCJkZWZhdWx0VmFsdWUiLCJmaWxlRGV0YWlsIiwib25DaGFuZ2UiLCJ0aGVtZSIsIm9wdGlvbnMiLCJtaW5pbWFwIiwiZW5hYmxlZCIsImZvbnRTaXplIiwiY3Vyc29yU3R5bGUiLCJ3b3JkV3JhcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/component/organisms/codeEditor/index.tsx\n"));

/***/ })

});