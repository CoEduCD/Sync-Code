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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CodeEditor: function() { return /* binding */ CodeEditor; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _monaco_editor_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @monaco-editor/react */ \"(app-pages-browser)/./node_modules/@monaco-editor/react/dist/index.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst CodeEditor = (param)=>{\n    let { codeData, setCodeData } = param;\n    _s();\n    const path = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)().split(\"/\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_monaco_editor_react__WEBPACK_IMPORTED_MODULE_1__.Editor, {\n            height: \"100%\",\n            width: \"70%\",\n            // language=\"javascript\"\n            language: path[2],\n            value: codeData,\n            // defaultValue={currentFileInfo.fileDetail}\n            onChange: (value)=>{\n                if (value !== undefined) {\n                    console.log(value);\n                    setCodeData(value);\n                }\n            },\n            theme: \"vs-dark\",\n            options: {\n                minimap: {\n                    enabled: true\n                },\n                fontSize: 15,\n                cursorStyle: \"black\",\n                wordWrap: \"on\"\n            }\n        }, void 0, false, {\n            fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/codeEditor/index.tsx\",\n            lineNumber: 13,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n_s(CodeEditor, \"wVXOWZKWdId76kQQO0KX6Oz3JDA=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname\n    ];\n});\n_c = CodeEditor;\nvar _c;\n$RefreshReg$(_c, \"CodeEditor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnQvb3JnYW5pc21zL2NvZGVFZGl0b3IvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE4QztBQUNBO0FBRXBCO0FBS25CLE1BQU1HLGFBQWE7UUFBQyxFQUFDQyxRQUFRLEVBQUVDLFdBQVcsRUFBaUI7O0lBQzlELE1BQU1DLE9BQU9MLDREQUFXQSxHQUFHTSxLQUFLLENBQUM7SUFDakMscUJBQ0E7a0JBQ0ksNEVBQUNQLHdEQUFNQTtZQUNIUSxRQUFPO1lBQ1BDLE9BQU07WUFDTix3QkFBd0I7WUFDeEJDLFVBQVVKLElBQUksQ0FBQyxFQUFFO1lBQ2pCSyxPQUFPUDtZQUNQLDRDQUE0QztZQUM1Q1EsVUFBVSxDQUFDRDtnQkFDUCxJQUFJQSxVQUFRRSxXQUFXO29CQUNuQkMsUUFBUUMsR0FBRyxDQUFDSjtvQkFDWk4sWUFBWU07Z0JBQ2hCO1lBQ0o7WUFFQUssT0FBTTtZQUNOQyxTQUFTO2dCQUNMQyxTQUFTO29CQUNUQyxTQUFTO2dCQUNUO2dCQUNBQyxVQUFVO2dCQUNWQyxhQUFhO2dCQUNiQyxVQUFVO1lBQ2Q7Ozs7Ozs7QUFJWixFQUFDO0dBOUJZbkI7O1FBQ0lGLHdEQUFXQTs7O0tBRGZFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnQvb3JnYW5pc21zL2NvZGVFZGl0b3IvaW5kZXgudHN4PzNmMDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWRpdG9yIH0gZnJvbSAnQG1vbmFjby1lZGl0b3IvcmVhY3QnO1xuaW1wb3J0IHsgdXNlUGF0aG5hbWUgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW50ZXJmYWNlIENvZGVFZGl0b3JQcm9wcyB7XG4gICAgY29kZURhdGE6IHN0cmluZztcbiAgICBzZXRDb2RlRGF0YTogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248c3RyaW5nPj5cbn1cbmV4cG9ydCBjb25zdCBDb2RlRWRpdG9yID0gKHtjb2RlRGF0YSwgc2V0Q29kZURhdGF9OkNvZGVFZGl0b3JQcm9wcyk9PntcbiAgICBjb25zdCBwYXRoID0gdXNlUGF0aG5hbWUoKS5zcGxpdCgnLycpO1xuICAgIHJldHVybihcbiAgICA8PlxuICAgICAgICA8RWRpdG9yICAgICAgIFxuICAgICAgICAgICAgaGVpZ2h0PScxMDAlJ1xuICAgICAgICAgICAgd2lkdGg9XCI3MCVcIlxuICAgICAgICAgICAgLy8gbGFuZ3VhZ2U9XCJqYXZhc2NyaXB0XCJcbiAgICAgICAgICAgIGxhbmd1YWdlPXtwYXRoWzJdfVxuICAgICAgICAgICAgdmFsdWU9e2NvZGVEYXRhfVxuICAgICAgICAgICAgLy8gZGVmYXVsdFZhbHVlPXtjdXJyZW50RmlsZUluZm8uZmlsZURldGFpbH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpPT57XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlIT09dW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKVxuICAgICAgICAgICAgICAgICAgICBzZXRDb2RlRGF0YSh2YWx1ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGVtZT0ndnMtZGFyaydcbiAgICAgICAgICAgIG9wdGlvbnM9e3tcbiAgICAgICAgICAgICAgICBtaW5pbWFwOiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNSxcbiAgICAgICAgICAgICAgICBjdXJzb3JTdHlsZTogXCJibGFja1wiLFxuICAgICAgICAgICAgICAgIHdvcmRXcmFwOiBcIm9uXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAvPlxuXG4gICAgPC8+KVxufSJdLCJuYW1lcyI6WyJFZGl0b3IiLCJ1c2VQYXRobmFtZSIsIlJlYWN0IiwiQ29kZUVkaXRvciIsImNvZGVEYXRhIiwic2V0Q29kZURhdGEiLCJwYXRoIiwic3BsaXQiLCJoZWlnaHQiLCJ3aWR0aCIsImxhbmd1YWdlIiwidmFsdWUiLCJvbkNoYW5nZSIsInVuZGVmaW5lZCIsImNvbnNvbGUiLCJsb2ciLCJ0aGVtZSIsIm9wdGlvbnMiLCJtaW5pbWFwIiwiZW5hYmxlZCIsImZvbnRTaXplIiwiY3Vyc29yU3R5bGUiLCJ3b3JkV3JhcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/component/organisms/codeEditor/index.tsx\n"));

/***/ })

});