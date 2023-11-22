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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CodeEditPage: function() { return /* binding */ CodeEditPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _monaco_editor_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @monaco-editor/react */ \"(app-pages-browser)/./node_modules/@monaco-editor/react/dist/index.mjs\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ \"(app-pages-browser)/./node_modules/recoil/es/index.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _recoil_userId__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/recoil/userId */ \"(app-pages-browser)/./src/recoil/userId.ts\");\n/* harmony import */ var _recoil_fileInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/recoil/fileInfo */ \"(app-pages-browser)/./src/recoil/fileInfo.ts\");\n/* harmony import */ var _recoil_fileMode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/recoil/fileMode */ \"(app-pages-browser)/./src/recoil/fileMode.ts\");\n/* harmony import */ var _component_organisms_chatting__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/component/organisms/chatting */ \"(app-pages-browser)/./src/component/organisms/chatting/index.tsx\");\n/* __next_internal_client_entry_do_not_use__ CodeEditPage auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst CodeEditPage = ()=>{\n    _s();\n    const path = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname)().split(\"/\");\n    const userId = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilValue)(_recoil_userId__WEBPACK_IMPORTED_MODULE_5__.user_id);\n    const [currentFileInfo, setCurrentFileInfo] = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilState)(_recoil_fileInfo__WEBPACK_IMPORTED_MODULE_6__.fileInfo);\n    const [currentFileMode, setCurrentFileMode] = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilState)(_recoil_fileMode__WEBPACK_IMPORTED_MODULE_7__.fileMode);\n    const [codeData, setCodeData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // useEffect(()=>{\n    //     if (typeof userId === \"number\"&& currentFileMode===\"create\"){\n    //         createNewFile(Number(userId), path[2],path[3])\n    //     } \n    // },[userId])\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(currentFileMode);\n    }, [\n        currentFileMode\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"100vw\",\n            height: \"85vh\",\n            paddingTop: 10,\n            backgroundColor: \"black\",\n            display: \"flex\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_monaco_editor_react__WEBPACK_IMPORTED_MODULE_2__.Editor, {\n                height: \"100%\",\n                width: \"70%\",\n                // language=\"javascript\"\n                language: path[2],\n                value: codeData,\n                // defaultValue={currentFileInfo.fileDetail}\n                onChange: (value)=>{\n                    if (value !== undefined) {\n                        console.log(value);\n                        setCodeData(value);\n                    }\n                },\n                theme: \"vs-dark\",\n                options: {\n                    minimap: {\n                        enabled: true\n                    },\n                    fontSize: 15,\n                    cursorStyle: \"black\",\n                    wordWrap: \"on\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/template/code-editor/index.tsx\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_organisms_chatting__WEBPACK_IMPORTED_MODULE_8__.Chatting, {}, void 0, false, {\n                fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/template/code-editor/index.tsx\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/template/code-editor/index.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CodeEditPage, \"TS7WxCMKv29aWBD4xRaxbLf3yXk=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname,\n        recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilValue,\n        recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilState\n    ];\n});\n_c = CodeEditPage;\nvar _c;\n$RefreshReg$(_c, \"CodeEditPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnQvdGVtcGxhdGUvY29kZS1lZGl0b3IvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQzBEO0FBQ2I7QUFDUztBQUVUO0FBQ0o7QUFDRztBQUNBO0FBQ2E7QUFFbEQsTUFBTVcsZUFBZTs7SUFDeEIsTUFBTUMsT0FBT04sNERBQVdBLEdBQUdPLEtBQUssQ0FBQztJQUNqQyxNQUFNQyxTQUFTVCxzREFBY0EsQ0FBQ0UsbURBQU9BO0lBQ3JDLE1BQU0sQ0FBQ1EsaUJBQWlCQyxtQkFBbUIsR0FBR1osc0RBQWNBLENBQUNJLHNEQUFRQTtJQUNyRSxNQUFNLENBQUNTLGlCQUFpQkMsbUJBQW1CLEdBQUdkLHNEQUFjQSxDQUFDSyxzREFBUUE7SUFDckUsTUFBTSxDQUFDVSxVQUFVQyxZQUFZLEdBQUdsQiwrQ0FBUUEsQ0FBQztJQUN6QyxrQkFBa0I7SUFDbEIsb0VBQW9FO0lBQ3BFLHlEQUF5RDtJQUN6RCxTQUFTO0lBQ1QsY0FBYztJQUNkRCxnREFBU0EsQ0FBQztRQUNOb0IsUUFBUUMsR0FBRyxDQUFDTDtJQUNkLEdBQUc7UUFBQ0E7S0FBZ0I7SUFDdEIscUJBQ0EsOERBQUNNO1FBQUlDLE9BQU87WUFBQ0MsT0FBTztZQUFTQyxRQUFRO1lBQVFDLFlBQVk7WUFBSUMsaUJBQWdCO1lBQVNDLFNBQVE7UUFBTTs7MEJBQ2hHLDhEQUFDMUIsd0RBQU1BO2dCQUNIdUIsUUFBTztnQkFDUEQsT0FBTTtnQkFDTix3QkFBd0I7Z0JBQ3hCSyxVQUFVbEIsSUFBSSxDQUFDLEVBQUU7Z0JBQ2pCbUIsT0FBT1o7Z0JBQ1AsNENBQTRDO2dCQUM1Q2EsVUFBVSxDQUFDRDtvQkFDUCxJQUFJQSxVQUFRRSxXQUFXO3dCQUNuQlosUUFBUUMsR0FBRyxDQUFDUzt3QkFDWlgsWUFBWVc7b0JBQ2hCO2dCQUNKO2dCQUVBRyxPQUFNO2dCQUNOQyxTQUFTO29CQUNMQyxTQUFTO3dCQUNUQyxTQUFTO29CQUNUO29CQUNBQyxVQUFVO29CQUNWQyxhQUFhO29CQUNiQyxVQUFVO2dCQUNkOzs7Ozs7MEJBRUosOERBQUM5QixtRUFBUUE7Ozs7Ozs7Ozs7O0FBRWpCLEVBQUM7R0ExQ1lDOztRQUNJTCx3REFBV0E7UUFDVEQsa0RBQWNBO1FBQ2lCRCxrREFBY0E7UUFDZEEsa0RBQWNBOzs7S0FKbkRPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnQvdGVtcGxhdGUvY29kZS1lZGl0b3IvaW5kZXgudHN4P2Y2ZDgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEVkaXRvciB9IGZyb20gJ0Btb25hY28tZWRpdG9yL3JlYWN0J1xuaW1wb3J0IHt1c2VSZWNvaWxTdGF0ZSwgdXNlUmVjb2lsVmFsdWUgfSBmcm9tICdyZWNvaWwnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IHVzZVBhdGhuYW1lIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xuaW1wb3J0IHsgdXNlcl9pZCB9IGZyb20gJ0AvcmVjb2lsL3VzZXJJZCdcbmltcG9ydCB7IGZpbGVJbmZvIH0gZnJvbSAnQC9yZWNvaWwvZmlsZUluZm8nXG5pbXBvcnQgeyBmaWxlTW9kZSB9IGZyb20gJ0AvcmVjb2lsL2ZpbGVNb2RlJ1xuaW1wb3J0IHsgQ2hhdHRpbmcgfSBmcm9tICdAL2NvbXBvbmVudC9vcmdhbmlzbXMvY2hhdHRpbmcnXG5pbXBvcnQgeyBjcmVhdGVOZXdGaWxlIH0gZnJvbSAnQC9hcGkvZmlsZS9hcGknXG5leHBvcnQgY29uc3QgQ29kZUVkaXRQYWdlID0gKCk9PntcbiAgICBjb25zdCBwYXRoID0gdXNlUGF0aG5hbWUoKS5zcGxpdCgnLycpO1xuICAgIGNvbnN0IHVzZXJJZCA9IHVzZVJlY29pbFZhbHVlKHVzZXJfaWQpO1xuICAgIGNvbnN0IFtjdXJyZW50RmlsZUluZm8sIHNldEN1cnJlbnRGaWxlSW5mb10gPSB1c2VSZWNvaWxTdGF0ZShmaWxlSW5mbyk7XG4gICAgY29uc3QgW2N1cnJlbnRGaWxlTW9kZSwgc2V0Q3VycmVudEZpbGVNb2RlXSA9IHVzZVJlY29pbFN0YXRlKGZpbGVNb2RlKTtcbiAgICBjb25zdCBbY29kZURhdGEsIHNldENvZGVEYXRhXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIC8vIHVzZUVmZmVjdCgoKT0+e1xuICAgIC8vICAgICBpZiAodHlwZW9mIHVzZXJJZCA9PT0gXCJudW1iZXJcIiYmIGN1cnJlbnRGaWxlTW9kZT09PVwiY3JlYXRlXCIpe1xuICAgIC8vICAgICAgICAgY3JlYXRlTmV3RmlsZShOdW1iZXIodXNlcklkKSwgcGF0aFsyXSxwYXRoWzNdKVxuICAgIC8vICAgICB9IFxuICAgIC8vIH0sW3VzZXJJZF0pXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudEZpbGVNb2RlKTtcbiAgICAgIH0sIFtjdXJyZW50RmlsZU1vZGVdKTtcbiAgICByZXR1cm4oXG4gICAgPGRpdiBzdHlsZT17e3dpZHRoOiBcIjEwMHZ3XCIsIGhlaWdodDogJzg1dmgnLCBwYWRkaW5nVG9wOiAxMCwgYmFja2dyb3VuZENvbG9yOidibGFjaycsIGRpc3BsYXk6J2ZsZXgnfX0+XG4gICAgICAgIDxFZGl0b3IgICAgICAgXG4gICAgICAgICAgICBoZWlnaHQ9JzEwMCUnXG4gICAgICAgICAgICB3aWR0aD1cIjcwJVwiXG4gICAgICAgICAgICAvLyBsYW5ndWFnZT1cImphdmFzY3JpcHRcIlxuICAgICAgICAgICAgbGFuZ3VhZ2U9e3BhdGhbMl19XG4gICAgICAgICAgICB2YWx1ZT17Y29kZURhdGF9XG4gICAgICAgICAgICAvLyBkZWZhdWx0VmFsdWU9e2N1cnJlbnRGaWxlSW5mby5maWxlRGV0YWlsfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSk9PntcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUhPT11bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIHNldENvZGVEYXRhKHZhbHVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoZW1lPSd2cy1kYXJrJ1xuICAgICAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgICAgICAgIG1pbmltYXA6IHtcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IDE1LFxuICAgICAgICAgICAgICAgIGN1cnNvclN0eWxlOiBcImJsYWNrXCIsXG4gICAgICAgICAgICAgICAgd29yZFdyYXA6IFwib25cIixcbiAgICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxDaGF0dGluZy8+XG4gICAgPC9kaXY+KVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRWRpdG9yIiwidXNlUmVjb2lsU3RhdGUiLCJ1c2VSZWNvaWxWYWx1ZSIsInVzZVBhdGhuYW1lIiwidXNlcl9pZCIsImZpbGVJbmZvIiwiZmlsZU1vZGUiLCJDaGF0dGluZyIsIkNvZGVFZGl0UGFnZSIsInBhdGgiLCJzcGxpdCIsInVzZXJJZCIsImN1cnJlbnRGaWxlSW5mbyIsInNldEN1cnJlbnRGaWxlSW5mbyIsImN1cnJlbnRGaWxlTW9kZSIsInNldEN1cnJlbnRGaWxlTW9kZSIsImNvZGVEYXRhIiwic2V0Q29kZURhdGEiLCJjb25zb2xlIiwibG9nIiwiZGl2Iiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsInBhZGRpbmdUb3AiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkaXNwbGF5IiwibGFuZ3VhZ2UiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidW5kZWZpbmVkIiwidGhlbWUiLCJvcHRpb25zIiwibWluaW1hcCIsImVuYWJsZWQiLCJmb250U2l6ZSIsImN1cnNvclN0eWxlIiwid29yZFdyYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/component/template/code-editor/index.tsx\n"));

/***/ })

});