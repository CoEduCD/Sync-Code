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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CodeEditPage: function() { return /* binding */ CodeEditPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"(app-pages-browser)/./node_modules/recoil/es/index.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _recoil_userId__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/recoil/userId */ \"(app-pages-browser)/./src/recoil/userId.ts\");\n/* harmony import */ var _recoil_fileMode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/recoil/fileMode */ \"(app-pages-browser)/./src/recoil/fileMode.ts\");\n/* harmony import */ var _component_organisms_chatting__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/component/organisms/chatting */ \"(app-pages-browser)/./src/component/organisms/chatting/index.tsx\");\n/* harmony import */ var _api_file_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/api/file/api */ \"(app-pages-browser)/./src/api/file/api.ts\");\n/* harmony import */ var _component_organisms_codeEditor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/component/organisms/codeEditor */ \"(app-pages-browser)/./src/component/organisms/codeEditor/index.tsx\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! socket.io-client */ \"(app-pages-browser)/./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var _recoil_fileInfo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/recoil/fileInfo */ \"(app-pages-browser)/./src/recoil/fileInfo.ts\");\n/* harmony import */ var _recoil_userName__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/recoil/userName */ \"(app-pages-browser)/./src/recoil/userName.ts\");\n/* __next_internal_client_entry_do_not_use__ CodeEditPage auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nconst CodeEditPage = ()=>{\n    _s();\n    const path = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)().split(\"/\");\n    const userId = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue)(_recoil_userId__WEBPACK_IMPORTED_MODULE_4__.user_id);\n    const userName = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue)(_recoil_userName__WEBPACK_IMPORTED_MODULE_11__.user_name);\n    const [currentFileMode, setCurrentFileMode] = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_recoil_fileMode__WEBPACK_IMPORTED_MODULE_5__.fileMode);\n    const [currentFileInfo, setCurrentFileInfo] = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_recoil_fileInfo__WEBPACK_IMPORTED_MODULE_10__.fileInfo);\n    const [codeData, setCodeData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [showChat, setShowChat] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (currentFileMode === \"create\") {\n            (0,_api_file_api__WEBPACK_IMPORTED_MODULE_7__.createNewFile)(userId, path[2], path[3], setCurrentFileInfo);\n        }\n    }, [\n        userId\n    ]);\n    var socket;\n    socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_9__.io)(\"http://localhost:8080\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (userName !== \"\" && currentFileInfo !== undefined) {\n            socket.emit(\"join_room\", currentFileInfo.fileId);\n            setTimeout(()=>{\n                setShowChat(true);\n            }, 4000);\n        } else {\n            alert(\"Please fill in Username and Room Id\");\n        }\n    }, [\n        currentFileInfo\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"100vw\",\n            height: \"85vh\",\n            paddingTop: 10,\n            backgroundColor: \"black\",\n            display: \"flex\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_organisms_codeEditor__WEBPACK_IMPORTED_MODULE_8__.CodeEditor, {\n                codeData: codeData,\n                setCodeData: setCodeData\n            }, void 0, false, {\n                fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/template/code-editor/index.tsx\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, undefined),\n            showChat && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_organisms_chatting__WEBPACK_IMPORTED_MODULE_6__.Chatting, {\n                socket: socket,\n                roomId: currentFileInfo === null || currentFileInfo === void 0 ? void 0 : currentFileInfo.fileId,\n                username: userName\n            }, void 0, false, {\n                fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/template/code-editor/index.tsx\",\n                lineNumber: 44,\n                columnNumber: 21\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/template/code-editor/index.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CodeEditPage, \"QvLjzu9qfj1ffSQo48N74que4z4=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname,\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue,\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue,\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState\n    ];\n});\n_c = CodeEditPage;\nvar _c;\n$RefreshReg$(_c, \"CodeEditPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnQvdGVtcGxhdGUvY29kZS1lZGl0b3IvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQzBEO0FBQ0o7QUFDVDtBQUNKO0FBQ0c7QUFDYTtBQUNYO0FBQ2U7QUFDeEI7QUFDTztBQUNDO0FBQ3RDLE1BQU1jLGVBQWU7O0lBQ3hCLE1BQU1DLE9BQU9WLDREQUFXQSxHQUFHVyxLQUFLLENBQUM7SUFDakMsTUFBTUMsU0FBU2Isc0RBQWNBLENBQUNFLG1EQUFPQTtJQUNyQyxNQUFNWSxXQUFXZCxzREFBY0EsQ0FBQ1Msd0RBQVNBO0lBRXpDLE1BQU0sQ0FBQ00saUJBQWlCQyxtQkFBbUIsR0FBR2pCLHNEQUFjQSxDQUFDSSxzREFBUUE7SUFDckUsTUFBTSxDQUFDYyxpQkFBaUJDLG1CQUFtQixHQUFHbkIsc0RBQWNBLENBQUNTLHVEQUFRQTtJQUNyRSxNQUFNLENBQUNXLFVBQVVDLFlBQVksR0FBR3RCLCtDQUFRQSxDQUFTO0lBQ2pELE1BQU0sQ0FBQ3VCLFVBQVVDLFlBQVksR0FBR3hCLCtDQUFRQSxDQUFVO0lBQ2xERCxnREFBU0EsQ0FBQztRQUNOLElBQUlrQixvQkFBa0IsVUFBUztZQUMzQlYsNERBQWFBLENBQUNRLFFBQVFGLElBQUksQ0FBQyxFQUFFLEVBQUNBLElBQUksQ0FBQyxFQUFFLEVBQUVPO1FBQzNDO0lBQ0osR0FBRTtRQUFDTDtLQUFPO0lBQ1YsSUFBSVU7SUFDSkEsU0FBU2hCLG9EQUFFQSxDQUFDO0lBQ1pWLGdEQUFTQSxDQUFDO1FBQ04sSUFBSWlCLGFBQWEsTUFBTUcsb0JBQW9CTyxXQUFXO1lBQ2xERCxPQUFPRSxJQUFJLENBQUMsYUFBYVIsZ0JBQWdCUyxNQUFNO1lBQy9DQyxXQUFXO2dCQUNQTCxZQUFZO1lBQ2QsR0FBRztRQUNQLE9BQU87WUFDTE0sTUFBTTtRQUNSO0lBRU4sR0FBRTtRQUFDWDtLQUFnQjtJQUVuQixxQkFDQSw4REFBQ1k7UUFBSUMsT0FBTztZQUFDQyxPQUFPO1lBQVNDLFFBQVE7WUFBUUMsWUFBWTtZQUFJQyxpQkFBZ0I7WUFBU0MsU0FBUTtRQUFNOzswQkFDaEcsOERBQUM3Qix1RUFBVUE7Z0JBQUNhLFVBQVVBO2dCQUFVQyxhQUFhQTs7Ozs7O1lBQzdDQywwQkFBWSw4REFBQ2pCLG1FQUFRQTtnQkFBQ21CLFFBQVFBO2dCQUFRYSxNQUFNLEVBQUVuQiw0QkFBQUEsc0NBQUFBLGdCQUFpQlMsTUFBTTtnQkFBRVcsVUFBVXZCOzs7Ozs7Ozs7Ozs7QUFFekYsRUFBQztHQWpDWUo7O1FBQ0lULHdEQUFXQTtRQUNURCxrREFBY0E7UUFDWkEsa0RBQWNBO1FBRWVELGtEQUFjQTtRQUNkQSxrREFBY0E7OztLQU5uRFciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudC90ZW1wbGF0ZS9jb2RlLWVkaXRvci9pbmRleC50c3g/ZjZkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHt1c2VSZWNvaWxTdGF0ZSwgdXNlUmVjb2lsVmFsdWUgfSBmcm9tICdyZWNvaWwnXG5pbXBvcnQgeyB1c2VQYXRobmFtZSB9IGZyb20gJ25leHQvbmF2aWdhdGlvbidcbmltcG9ydCB7IHVzZXJfaWQgfSBmcm9tICdAL3JlY29pbC91c2VySWQnXG5pbXBvcnQgeyBmaWxlTW9kZSB9IGZyb20gJ0AvcmVjb2lsL2ZpbGVNb2RlJ1xuaW1wb3J0IHsgQ2hhdHRpbmcgfSBmcm9tICdAL2NvbXBvbmVudC9vcmdhbmlzbXMvY2hhdHRpbmcnXG5pbXBvcnQgeyBjcmVhdGVOZXdGaWxlIH0gZnJvbSAnQC9hcGkvZmlsZS9hcGknXG5pbXBvcnQgeyBDb2RlRWRpdG9yIH0gZnJvbSAnQC9jb21wb25lbnQvb3JnYW5pc21zL2NvZGVFZGl0b3InXG5pbXBvcnQgeyBpbyB9IGZyb20gJ3NvY2tldC5pby1jbGllbnQnXG5pbXBvcnQgeyBmaWxlSW5mbyB9IGZyb20gJ0AvcmVjb2lsL2ZpbGVJbmZvJ1xuaW1wb3J0IHsgdXNlcl9uYW1lIH0gZnJvbSAnQC9yZWNvaWwvdXNlck5hbWUnXG5leHBvcnQgY29uc3QgQ29kZUVkaXRQYWdlID0gKCk9PntcbiAgICBjb25zdCBwYXRoID0gdXNlUGF0aG5hbWUoKS5zcGxpdCgnLycpO1xuICAgIGNvbnN0IHVzZXJJZCA9IHVzZVJlY29pbFZhbHVlKHVzZXJfaWQpO1xuICAgIGNvbnN0IHVzZXJOYW1lID0gdXNlUmVjb2lsVmFsdWUodXNlcl9uYW1lKVxuXG4gICAgY29uc3QgW2N1cnJlbnRGaWxlTW9kZSwgc2V0Q3VycmVudEZpbGVNb2RlXSA9IHVzZVJlY29pbFN0YXRlKGZpbGVNb2RlKTtcbiAgICBjb25zdCBbY3VycmVudEZpbGVJbmZvLCBzZXRDdXJyZW50RmlsZUluZm9dID0gdXNlUmVjb2lsU3RhdGUoZmlsZUluZm8pO1xuICAgIGNvbnN0IFtjb2RlRGF0YSwgc2V0Q29kZURhdGFdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgICBjb25zdCBbc2hvd0NoYXQsIHNldFNob3dDaGF0XSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgaWYgKGN1cnJlbnRGaWxlTW9kZT09PVwiY3JlYXRlXCIpe1xuICAgICAgICAgICAgY3JlYXRlTmV3RmlsZSh1c2VySWQsIHBhdGhbMl0scGF0aFszXSwgc2V0Q3VycmVudEZpbGVJbmZvKVxuICAgICAgICB9IFxuICAgIH0sW3VzZXJJZF0pXG4gICAgdmFyIHNvY2tldDogYW55O1xuICAgIHNvY2tldCA9IGlvKFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwXCIpIFxuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBpZiAodXNlck5hbWUgIT09IFwiXCIgJiYgY3VycmVudEZpbGVJbmZvICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHNvY2tldC5lbWl0KFwiam9pbl9yb29tXCIsIGN1cnJlbnRGaWxlSW5mby5maWxlSWQpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0U2hvd0NoYXQodHJ1ZSk7XG4gICAgICAgICAgICAgIH0sIDQwMDApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbGVydChcIlBsZWFzZSBmaWxsIGluIFVzZXJuYW1lIGFuZCBSb29tIElkXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgO1xuICAgIH0sW2N1cnJlbnRGaWxlSW5mb10pXG5cbiAgICByZXR1cm4oXG4gICAgPGRpdiBzdHlsZT17e3dpZHRoOiBcIjEwMHZ3XCIsIGhlaWdodDogJzg1dmgnLCBwYWRkaW5nVG9wOiAxMCwgYmFja2dyb3VuZENvbG9yOidibGFjaycsIGRpc3BsYXk6J2ZsZXgnfX0+XG4gICAgICAgIDxDb2RlRWRpdG9yIGNvZGVEYXRhPXtjb2RlRGF0YX0gc2V0Q29kZURhdGE9e3NldENvZGVEYXRhfS8+XG4gICAgICAge3Nob3dDaGF0ICYmIDxDaGF0dGluZyBzb2NrZXQ9e3NvY2tldH0gcm9vbUlkPXtjdXJyZW50RmlsZUluZm8/LmZpbGVJZH0gdXNlcm5hbWU9e3VzZXJOYW1lfS8+IH1cbiAgICA8L2Rpdj4pXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWNvaWxTdGF0ZSIsInVzZVJlY29pbFZhbHVlIiwidXNlUGF0aG5hbWUiLCJ1c2VyX2lkIiwiZmlsZU1vZGUiLCJDaGF0dGluZyIsImNyZWF0ZU5ld0ZpbGUiLCJDb2RlRWRpdG9yIiwiaW8iLCJmaWxlSW5mbyIsInVzZXJfbmFtZSIsIkNvZGVFZGl0UGFnZSIsInBhdGgiLCJzcGxpdCIsInVzZXJJZCIsInVzZXJOYW1lIiwiY3VycmVudEZpbGVNb2RlIiwic2V0Q3VycmVudEZpbGVNb2RlIiwiY3VycmVudEZpbGVJbmZvIiwic2V0Q3VycmVudEZpbGVJbmZvIiwiY29kZURhdGEiLCJzZXRDb2RlRGF0YSIsInNob3dDaGF0Iiwic2V0U2hvd0NoYXQiLCJzb2NrZXQiLCJ1bmRlZmluZWQiLCJlbWl0IiwiZmlsZUlkIiwic2V0VGltZW91dCIsImFsZXJ0IiwiZGl2Iiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsInBhZGRpbmdUb3AiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkaXNwbGF5Iiwicm9vbUlkIiwidXNlcm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/component/template/code-editor/index.tsx\n"));

/***/ })

});