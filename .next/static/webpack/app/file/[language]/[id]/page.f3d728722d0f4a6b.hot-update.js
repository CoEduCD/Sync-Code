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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CodeEditPage: function() { return /* binding */ CodeEditPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"(app-pages-browser)/./node_modules/recoil/es/index.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _recoil_userId__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/recoil/userId */ \"(app-pages-browser)/./src/recoil/userId.ts\");\n/* harmony import */ var _recoil_fileMode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/recoil/fileMode */ \"(app-pages-browser)/./src/recoil/fileMode.ts\");\n/* harmony import */ var _component_organisms_chatting__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/component/organisms/chatting */ \"(app-pages-browser)/./src/component/organisms/chatting/index.tsx\");\n/* harmony import */ var _api_file_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/api/file/api */ \"(app-pages-browser)/./src/api/file/api.ts\");\n/* harmony import */ var _component_organisms_codeEditor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/component/organisms/codeEditor */ \"(app-pages-browser)/./src/component/organisms/codeEditor/index.tsx\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! socket.io-client */ \"(app-pages-browser)/./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var _recoil_fileInfo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/recoil/fileInfo */ \"(app-pages-browser)/./src/recoil/fileInfo.ts\");\n/* harmony import */ var _recoil_userName__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/recoil/userName */ \"(app-pages-browser)/./src/recoil/userName.ts\");\n/* __next_internal_client_entry_do_not_use__ CodeEditPage auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nconst CodeEditPage = ()=>{\n    _s();\n    const path = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)().split(\"/\");\n    const userId = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue)(_recoil_userId__WEBPACK_IMPORTED_MODULE_4__.user_id);\n    const userName = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue)(_recoil_userName__WEBPACK_IMPORTED_MODULE_11__.user_name);\n    const [currentFileMode, setCurrentFileMode] = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_recoil_fileMode__WEBPACK_IMPORTED_MODULE_5__.fileMode);\n    const [currentFileInfo, setCurrentFileInfo] = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_recoil_fileInfo__WEBPACK_IMPORTED_MODULE_10__.fileInfo);\n    const [codeData, setCodeData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [showChat, setShowChat] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (currentFileMode === \"create\") {\n            (0,_api_file_api__WEBPACK_IMPORTED_MODULE_7__.createNewFile)(userId, path[2], path[3], setCurrentFileInfo);\n        }\n    }, [\n        userId\n    ]);\n    var socket;\n    socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_9__.io)(\"http://localhost:8000\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (currentFileInfo !== undefined) {\n            socket.emit(\"join_room\", currentFileInfo.fileId);\n            setShowChat(true);\n        } else {\n            console.log(\"현재 파일 정보가 없습니다\");\n        }\n    }, [\n        currentFileInfo\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"100vw\",\n            height: \"85vh\",\n            paddingTop: 10,\n            backgroundColor: \"black\",\n            display: \"flex\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_organisms_codeEditor__WEBPACK_IMPORTED_MODULE_8__.CodeEditor, {\n                codeData: codeData,\n                setCodeData: setCodeData\n            }, void 0, false, {\n                fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/template/code-editor/index.tsx\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, undefined),\n            showChat && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_organisms_chatting__WEBPACK_IMPORTED_MODULE_6__.Chatting, {\n                socket: socket,\n                roomId: currentFileInfo === null || currentFileInfo === void 0 ? void 0 : currentFileInfo.fileId,\n                username: userName\n            }, void 0, false, {\n                fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/template/code-editor/index.tsx\",\n                lineNumber: 44,\n                columnNumber: 21\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/template/code-editor/index.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CodeEditPage, \"QvLjzu9qfj1ffSQo48N74que4z4=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname,\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue,\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue,\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState\n    ];\n});\n_c = CodeEditPage;\nvar _c;\n$RefreshReg$(_c, \"CodeEditPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnQvdGVtcGxhdGUvY29kZS1lZGl0b3IvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQzBEO0FBQ0o7QUFDVDtBQUNKO0FBQ0c7QUFDYTtBQUNYO0FBQ2U7QUFDeEI7QUFDTztBQUNDO0FBQ3RDLE1BQU1jLGVBQWU7O0lBQ3hCLE1BQU1DLE9BQU9WLDREQUFXQSxHQUFHVyxLQUFLLENBQUM7SUFDakMsTUFBTUMsU0FBU2Isc0RBQWNBLENBQUNFLG1EQUFPQTtJQUNyQyxNQUFNWSxXQUFXZCxzREFBY0EsQ0FBQ1Msd0RBQVNBO0lBRXpDLE1BQU0sQ0FBQ00saUJBQWlCQyxtQkFBbUIsR0FBR2pCLHNEQUFjQSxDQUFDSSxzREFBUUE7SUFDckUsTUFBTSxDQUFDYyxpQkFBaUJDLG1CQUFtQixHQUFHbkIsc0RBQWNBLENBQUNTLHVEQUFRQTtJQUNyRSxNQUFNLENBQUNXLFVBQVVDLFlBQVksR0FBR3RCLCtDQUFRQSxDQUFTO0lBQ2pELE1BQU0sQ0FBQ3VCLFVBQVVDLFlBQVksR0FBR3hCLCtDQUFRQSxDQUFVO0lBQ2xERCxnREFBU0EsQ0FBQztRQUNOLElBQUlrQixvQkFBa0IsVUFBUztZQUMzQlYsNERBQWFBLENBQUNRLFFBQVFGLElBQUksQ0FBQyxFQUFFLEVBQUNBLElBQUksQ0FBQyxFQUFFLEVBQUVPO1FBRTNDO0lBQ0osR0FBRTtRQUFDTDtLQUFPO0lBQ1YsSUFBSVU7SUFDSkEsU0FBU2hCLG9EQUFFQSxDQUFDO0lBRVpWLGdEQUFTQSxDQUFDO1FBQ04sSUFBSW9CLG9CQUFvQk8sV0FBVztZQUMvQkQsT0FBT0UsSUFBSSxDQUFDLGFBQWFSLGdCQUFnQlMsTUFBTTtZQUMvQ0osWUFBWTtRQUNkLE9BQU87WUFDTEssUUFBUUMsR0FBRyxDQUFDO1FBQ2Q7SUFFTixHQUFFO1FBQUNYO0tBQWdCO0lBRW5CLHFCQUNBLDhEQUFDWTtRQUFJQyxPQUFPO1lBQUNDLE9BQU87WUFBU0MsUUFBUTtZQUFRQyxZQUFZO1lBQUlDLGlCQUFnQjtZQUFTQyxTQUFRO1FBQU07OzBCQUNoRyw4REFBQzdCLHVFQUFVQTtnQkFBQ2EsVUFBVUE7Z0JBQVVDLGFBQWFBOzs7Ozs7WUFDN0NDLDBCQUFZLDhEQUFDakIsbUVBQVFBO2dCQUFDbUIsUUFBUUE7Z0JBQVFhLE1BQU0sRUFBRW5CLDRCQUFBQSxzQ0FBQUEsZ0JBQWlCUyxNQUFNO2dCQUFFVyxVQUFVdkI7Ozs7Ozs7Ozs7OztBQUV6RixFQUFDO0dBakNZSjs7UUFDSVQsd0RBQVdBO1FBQ1RELGtEQUFjQTtRQUNaQSxrREFBY0E7UUFFZUQsa0RBQWNBO1FBQ2RBLGtEQUFjQTs7O0tBTm5EVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50L3RlbXBsYXRlL2NvZGUtZWRpdG9yL2luZGV4LnRzeD9mNmQ4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge3VzZVJlY29pbFN0YXRlLCB1c2VSZWNvaWxWYWx1ZSB9IGZyb20gJ3JlY29pbCdcbmltcG9ydCB7IHVzZVBhdGhuYW1lIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xuaW1wb3J0IHsgdXNlcl9pZCB9IGZyb20gJ0AvcmVjb2lsL3VzZXJJZCdcbmltcG9ydCB7IGZpbGVNb2RlIH0gZnJvbSAnQC9yZWNvaWwvZmlsZU1vZGUnXG5pbXBvcnQgeyBDaGF0dGluZyB9IGZyb20gJ0AvY29tcG9uZW50L29yZ2FuaXNtcy9jaGF0dGluZydcbmltcG9ydCB7IGNyZWF0ZU5ld0ZpbGUgfSBmcm9tICdAL2FwaS9maWxlL2FwaSdcbmltcG9ydCB7IENvZGVFZGl0b3IgfSBmcm9tICdAL2NvbXBvbmVudC9vcmdhbmlzbXMvY29kZUVkaXRvcidcbmltcG9ydCB7IGlvIH0gZnJvbSAnc29ja2V0LmlvLWNsaWVudCdcbmltcG9ydCB7IGZpbGVJbmZvIH0gZnJvbSAnQC9yZWNvaWwvZmlsZUluZm8nXG5pbXBvcnQgeyB1c2VyX25hbWUgfSBmcm9tICdAL3JlY29pbC91c2VyTmFtZSdcbmV4cG9ydCBjb25zdCBDb2RlRWRpdFBhZ2UgPSAoKT0+e1xuICAgIGNvbnN0IHBhdGggPSB1c2VQYXRobmFtZSgpLnNwbGl0KCcvJyk7XG4gICAgY29uc3QgdXNlcklkID0gdXNlUmVjb2lsVmFsdWUodXNlcl9pZCk7XG4gICAgY29uc3QgdXNlck5hbWUgPSB1c2VSZWNvaWxWYWx1ZSh1c2VyX25hbWUpXG5cbiAgICBjb25zdCBbY3VycmVudEZpbGVNb2RlLCBzZXRDdXJyZW50RmlsZU1vZGVdID0gdXNlUmVjb2lsU3RhdGUoZmlsZU1vZGUpO1xuICAgIGNvbnN0IFtjdXJyZW50RmlsZUluZm8sIHNldEN1cnJlbnRGaWxlSW5mb10gPSB1c2VSZWNvaWxTdGF0ZShmaWxlSW5mbyk7XG4gICAgY29uc3QgW2NvZGVEYXRhLCBzZXRDb2RlRGF0YV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICAgIGNvbnN0IFtzaG93Q2hhdCwgc2V0U2hvd0NoYXRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBpZiAoY3VycmVudEZpbGVNb2RlPT09XCJjcmVhdGVcIil7XG4gICAgICAgICAgICBjcmVhdGVOZXdGaWxlKHVzZXJJZCwgcGF0aFsyXSxwYXRoWzNdLCBzZXRDdXJyZW50RmlsZUluZm8pXG4gICAgICAgICAgICBcbiAgICAgICAgfSBcbiAgICB9LFt1c2VySWRdKVxuICAgIHZhciBzb2NrZXQ6IGFueTtcbiAgICBzb2NrZXQgPSBpbyhcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMFwiKSBcblxuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBpZiAoY3VycmVudEZpbGVJbmZvICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHNvY2tldC5lbWl0KFwiam9pbl9yb29tXCIsIGN1cnJlbnRGaWxlSW5mby5maWxlSWQpO1xuICAgICAgICAgICAgc2V0U2hvd0NoYXQodHJ1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi7ZiE7J6sIO2MjOydvCDsoJXrs7TqsIAg7JeG7Iq164uI64ukXCIpXG4gICAgICAgICAgfVxuICAgICAgICA7XG4gICAgfSxbY3VycmVudEZpbGVJbmZvXSlcblxuICAgIHJldHVybihcbiAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6IFwiMTAwdndcIiwgaGVpZ2h0OiAnODV2aCcsIHBhZGRpbmdUb3A6IDEwLCBiYWNrZ3JvdW5kQ29sb3I6J2JsYWNrJywgZGlzcGxheTonZmxleCd9fT5cbiAgICAgICAgPENvZGVFZGl0b3IgY29kZURhdGE9e2NvZGVEYXRhfSBzZXRDb2RlRGF0YT17c2V0Q29kZURhdGF9Lz5cbiAgICAgICB7c2hvd0NoYXQgJiYgPENoYXR0aW5nIHNvY2tldD17c29ja2V0fSByb29tSWQ9e2N1cnJlbnRGaWxlSW5mbz8uZmlsZUlkfSB1c2VybmFtZT17dXNlck5hbWV9Lz4gfVxuICAgIDwvZGl2Pilcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlY29pbFN0YXRlIiwidXNlUmVjb2lsVmFsdWUiLCJ1c2VQYXRobmFtZSIsInVzZXJfaWQiLCJmaWxlTW9kZSIsIkNoYXR0aW5nIiwiY3JlYXRlTmV3RmlsZSIsIkNvZGVFZGl0b3IiLCJpbyIsImZpbGVJbmZvIiwidXNlcl9uYW1lIiwiQ29kZUVkaXRQYWdlIiwicGF0aCIsInNwbGl0IiwidXNlcklkIiwidXNlck5hbWUiLCJjdXJyZW50RmlsZU1vZGUiLCJzZXRDdXJyZW50RmlsZU1vZGUiLCJjdXJyZW50RmlsZUluZm8iLCJzZXRDdXJyZW50RmlsZUluZm8iLCJjb2RlRGF0YSIsInNldENvZGVEYXRhIiwic2hvd0NoYXQiLCJzZXRTaG93Q2hhdCIsInNvY2tldCIsInVuZGVmaW5lZCIsImVtaXQiLCJmaWxlSWQiLCJjb25zb2xlIiwibG9nIiwiZGl2Iiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsInBhZGRpbmdUb3AiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkaXNwbGF5Iiwicm9vbUlkIiwidXNlcm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/component/template/code-editor/index.tsx\n"));

/***/ })

});