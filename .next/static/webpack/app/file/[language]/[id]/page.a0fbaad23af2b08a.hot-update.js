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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CodeEditor: function() { return /* binding */ CodeEditor; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _type_authority_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/@type/authority/interface */ \"(app-pages-browser)/./src/@type/authority/interface.ts\");\n/* harmony import */ var _api_file_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/file/api */ \"(app-pages-browser)/./src/api/file/api.ts\");\n/* harmony import */ var _hooks_useDebounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/useDebounce */ \"(app-pages-browser)/./src/hooks/useDebounce.ts\");\n/* harmony import */ var _recoil_fileInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/recoil/fileInfo */ \"(app-pages-browser)/./src/recoil/fileInfo.ts\");\n/* harmony import */ var _recoil_fileMode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/recoil/fileMode */ \"(app-pages-browser)/./src/recoil/fileMode.ts\");\n/* harmony import */ var _recoil_userId__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/recoil/userId */ \"(app-pages-browser)/./src/recoil/userId.ts\");\n/* harmony import */ var _monaco_editor_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @monaco-editor/react */ \"(app-pages-browser)/./node_modules/@monaco-editor/react/dist/index.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! recoil */ \"(app-pages-browser)/./node_modules/recoil/es/index.js\");\n/* harmony import */ var yorkie_js_sdk__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! yorkie-js-sdk */ \"(app-pages-browser)/./node_modules/yorkie-js-sdk/dist/yorkie-js-sdk.js\");\n/* harmony import */ var yorkie_js_sdk__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(yorkie_js_sdk__WEBPACK_IMPORTED_MODULE_11__);\n/* __next_internal_client_entry_do_not_use__ CodeEditor auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nconst SERVER_DEPLOY_URL = \"http://ec2-15-165-115-163.ap-northeast-2.compute.amazonaws.com:12345\";\nconst CodeEditor = (param)=>{\n    let { codeData, setCodeData } = param;\n    _s();\n    const userId = (0,recoil__WEBPACK_IMPORTED_MODULE_10__.useRecoilValue)(_recoil_userId__WEBPACK_IMPORTED_MODULE_6__.user_id);\n    const [currentFileInfo, setCurrentFileInfo] = (0,recoil__WEBPACK_IMPORTED_MODULE_10__.useRecoilState)(_recoil_fileInfo__WEBPACK_IMPORTED_MODULE_4__.fileInfo);\n    const [currentFileMode, setCurrentFileMode] = (0,recoil__WEBPACK_IMPORTED_MODULE_10__.useRecoilState)(_recoil_fileMode__WEBPACK_IMPORTED_MODULE_5__.fileMode);\n    const [doc] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(new (yorkie_js_sdk__WEBPACK_IMPORTED_MODULE_11___default().Document)(\"file\", currentFileInfo === null || currentFileInfo === void 0 ? void 0 : currentFileInfo.fileHash));\n    const path = (0,next_navigation__WEBPACK_IMPORTED_MODULE_8__.usePathname)().split(\"/\");\n    const debouncedCode = (0,_hooks_useDebounce__WEBPACK_IMPORTED_MODULE_3__.useDebounce)(codeData, 300);\n    // const debouncedSyncCode = useDebounce(codeData, 0);\n    // useEffect(() => {\n    //     async function attachDoc() {\n    //       // 01. create client with RPCAddr(envoy) then activate it.\n    //       const client = new yorkie.Client('https://api.yorkie.dev', {\n    //         apiKey: 'cm0u43qosnrjq2ub15q0',\n    //       });\n    //       await client.activate();\n    //       // 02. attach the document into the client.\n    //       await client.attach(doc);\n    //     //   03. create default todos if not exists.\n    //       doc.update((root) => {\n    //         if (root['contents']===undefined) {\n    //           root['contents'] = new yorkie.Text();  \n    //         }\n    //     })\n    //     doc.subscribe((event) => {\n    //         setCodeData(doc.getRoot()['contents']);\n    //     });\n    //     // //   05. set todos  the attached document.\n    //     //   setCodeData(doc.getRoot()['contents']);\n    //     }\n    //     attachDoc();\n    //   }, [doc]);\n    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{\n        if (currentFileInfo !== undefined && codeData.length > 0 && currentFileInfo.role !== _type_authority_interface__WEBPACK_IMPORTED_MODULE_1__.Role.VIEWER) {\n            // doc.update((root)=>{\n            //     root['contents']= codeData;\n            // });\n            (0,_api_file_api__WEBPACK_IMPORTED_MODULE_2__.modifyFileContents)(userId, currentFileInfo, debouncedCode);\n        }\n    }, [\n        debouncedCode\n    ]);\n    // useEffect(()=>{\n    //     if (currentFileMode === \"modify\" && currentFileInfo !== undefined && codeData.length > 0 && currentFileInfo.role !== Role.VIEWER) {\n    //         doc.update((root)=>{\n    //             root['contents'] =  codeData;\n    //         });\n    //     }\n    // },[codeData])\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_monaco_editor_react__WEBPACK_IMPORTED_MODULE_7__.Editor, {\n        height: \"100%\",\n        width: \"70%\",\n        language: path[2],\n        value: codeData,\n        defaultValue: currentFileInfo !== undefined ? currentFileInfo.fileDetail : \"\",\n        onChange: (value)=>{\n            if (value !== undefined && (currentFileInfo === null || currentFileInfo === void 0 ? void 0 : currentFileInfo.role) !== _type_authority_interface__WEBPACK_IMPORTED_MODULE_1__.Role.VIEWER) {\n                setCodeData(value);\n            }\n        },\n        theme: \"vs-dark\",\n        options: {\n            // minimap: {\n            //     enabled: true,\n            // },\n            fontSize: 15\n        }\n    }, void 0, false, {\n        fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/codeEditor/index.tsx\",\n        lineNumber: 73,\n        columnNumber: 13\n    }, undefined);\n};\n_s(CodeEditor, \"8MiTdwEMtuSsrzlujR+BLHzr9II=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_10__.useRecoilValue,\n        recoil__WEBPACK_IMPORTED_MODULE_10__.useRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_10__.useRecoilState,\n        next_navigation__WEBPACK_IMPORTED_MODULE_8__.usePathname,\n        _hooks_useDebounce__WEBPACK_IMPORTED_MODULE_3__.useDebounce\n    ];\n});\n_c = CodeEditor;\nvar _c;\n$RefreshReg$(_c, \"CodeEditor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnQvb3JnYW5pc21zL2NvZGVFZGl0b3IvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNtRDtBQUNDO0FBQ0Y7QUFDTDtBQUNBO0FBQ0g7QUFDSTtBQUNBO0FBQ0k7QUFDTTtBQUNyQjtBQUtuQyxNQUFNYyxvQkFBb0I7QUFFbkIsTUFBTUMsYUFBYTtRQUFDLEVBQUVDLFFBQVEsRUFBRUMsV0FBVyxFQUFtQjs7SUFDakUsTUFBTUMsU0FBU04sdURBQWNBLENBQUNQLG1EQUFPQTtJQUNyQyxNQUFNLENBQUNjLGlCQUFpQkMsbUJBQW1CLEdBQUdULHVEQUFjQSxDQUFDUixzREFBUUE7SUFDckUsTUFBTSxDQUFDa0IsaUJBQWlCQyxtQkFBbUIsR0FBR1gsdURBQWNBLENBQUNQLHNEQUFRQTtJQUNyRSxNQUFNLENBQUNtQixJQUFLLEdBQUdiLCtDQUFRQSxDQUFDLElBQUlHLGdFQUFlLENBQUMsUUFBUU0sNEJBQUFBLHNDQUFBQSxnQkFBaUJNLFFBQVE7SUFDN0UsTUFBTUMsT0FBT25CLDREQUFXQSxHQUFHb0IsS0FBSyxDQUFDO0lBQ2pDLE1BQU1DLGdCQUFnQjFCLCtEQUFXQSxDQUFDYyxVQUFVO0lBQzVDLHNEQUFzRDtJQUN0RCxvQkFBb0I7SUFDcEIsbUNBQW1DO0lBQ25DLG1FQUFtRTtJQUNuRSxxRUFBcUU7SUFDckUsMENBQTBDO0lBQzFDLFlBQVk7SUFDWixpQ0FBaUM7SUFFakMsb0RBQW9EO0lBQ3BELGtDQUFrQztJQUVsQyxtREFBbUQ7SUFDbkQsK0JBQStCO0lBQy9CLDhDQUE4QztJQUM5QyxvREFBb0Q7SUFDcEQsWUFBWTtJQUNaLFNBQVM7SUFFVCxpQ0FBaUM7SUFDakMsa0RBQWtEO0lBQ2xELFVBQVU7SUFFVixvREFBb0Q7SUFDcEQsbURBQW1EO0lBRW5ELFFBQVE7SUFDUixtQkFBbUI7SUFDbkIsZUFBZTtJQUVmUCxnREFBU0EsQ0FBQztRQUNOLElBQUlVLG9CQUFvQlUsYUFBYWIsU0FBU2MsTUFBTSxHQUFHLEtBQU1YLGdCQUFnQlksSUFBSSxLQUFLL0IsMkRBQUlBLENBQUNnQyxNQUFNLEVBQUU7WUFDL0YsdUJBQXVCO1lBQ3ZCLGtDQUFrQztZQUNsQyxNQUFNO1lBQ04vQixpRUFBa0JBLENBQUNpQixRQUFRQyxpQkFBaUJTO1FBQ2hEO0lBQ0osR0FBRztRQUFDQTtLQUFjO0lBRWxCLGtCQUFrQjtJQUNsQiwwSUFBMEk7SUFDMUksK0JBQStCO0lBQy9CLDRDQUE0QztJQUM1QyxjQUFjO0lBQ2QsUUFBUTtJQUNSLGdCQUFnQjtJQUNoQixxQkFDUSw4REFBQ3RCLHdEQUFNQTtRQUNIMkIsUUFBTztRQUNQQyxPQUFNO1FBQ05DLFVBQVVULElBQUksQ0FBQyxFQUFFO1FBQ2pCVSxPQUFPcEI7UUFDUHFCLGNBQWNsQixvQkFBb0JVLFlBQVlWLGdCQUFnQm1CLFVBQVUsR0FBRztRQUMzRUMsVUFBVSxDQUFDSDtZQUNQLElBQUlBLFVBQVVQLGFBQWFWLENBQUFBLDRCQUFBQSxzQ0FBQUEsZ0JBQWlCWSxJQUFJLE1BQUsvQiwyREFBSUEsQ0FBQ2dDLE1BQU0sRUFBRTtnQkFDOURmLFlBQVltQjtZQUNoQjtRQUNKO1FBQ0FJLE9BQU07UUFDTkMsU0FBUztZQUVMLGFBQWE7WUFDYixxQkFBcUI7WUFDckIsS0FBSztZQUNMQyxVQUFVO1FBQ2Q7Ozs7OztBQUloQixFQUFDO0dBNUVZM0I7O1FBQ01ILG1EQUFjQTtRQUNpQkQsbURBQWNBO1FBQ2RBLG1EQUFjQTtRQUUvQ0osd0RBQVdBO1FBQ0ZMLDJEQUFXQTs7O0tBTnhCYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50L29yZ2FuaXNtcy9jb2RlRWRpdG9yL2luZGV4LnRzeD8zZjA3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgeyBSb2xlIH0gZnJvbSAnQC9AdHlwZS9hdXRob3JpdHkvaW50ZXJmYWNlJztcbmltcG9ydCB7IG1vZGlmeUZpbGVDb250ZW50cyB9IGZyb20gJ0AvYXBpL2ZpbGUvYXBpJztcbmltcG9ydCB7IHVzZURlYm91bmNlIH0gZnJvbSAnQC9ob29rcy91c2VEZWJvdW5jZSc7XG5pbXBvcnQgeyBmaWxlSW5mbyB9IGZyb20gJ0AvcmVjb2lsL2ZpbGVJbmZvJztcbmltcG9ydCB7IGZpbGVNb2RlIH0gZnJvbSAnQC9yZWNvaWwvZmlsZU1vZGUnO1xuaW1wb3J0IHsgdXNlcl9pZCB9IGZyb20gJ0AvcmVjb2lsL3VzZXJJZCc7XG5pbXBvcnQgeyBFZGl0b3IgfSBmcm9tICdAbW9uYWNvLWVkaXRvci9yZWFjdCc7XG5pbXBvcnQgeyB1c2VQYXRobmFtZSB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUmVjb2lsU3RhdGUsIHVzZVJlY29pbFZhbHVlIH0gZnJvbSAncmVjb2lsJztcbmltcG9ydCB5b3JraWUgZnJvbSAneW9ya2llLWpzLXNkayc7XG5pbnRlcmZhY2UgQ29kZUVkaXRvclByb3BzIHtcbiAgICBjb2RlRGF0YTogc3RyaW5nO1xuICAgIHNldENvZGVEYXRhOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxzdHJpbmc+PlxufVxuY29uc3QgU0VSVkVSX0RFUExPWV9VUkwgPSAnaHR0cDovL2VjMi0xNS0xNjUtMTE1LTE2My5hcC1ub3J0aGVhc3QtMi5jb21wdXRlLmFtYXpvbmF3cy5jb206MTIzNDUnXG5cbmV4cG9ydCBjb25zdCBDb2RlRWRpdG9yID0gKHsgY29kZURhdGEsIHNldENvZGVEYXRhIH06IENvZGVFZGl0b3JQcm9wcykgPT4ge1xuICAgIGNvbnN0IHVzZXJJZCA9IHVzZVJlY29pbFZhbHVlKHVzZXJfaWQpO1xuICAgIGNvbnN0IFtjdXJyZW50RmlsZUluZm8sIHNldEN1cnJlbnRGaWxlSW5mb10gPSB1c2VSZWNvaWxTdGF0ZShmaWxlSW5mbyk7XG4gICAgY29uc3QgW2N1cnJlbnRGaWxlTW9kZSwgc2V0Q3VycmVudEZpbGVNb2RlXSA9IHVzZVJlY29pbFN0YXRlKGZpbGVNb2RlKTtcbiAgICBjb25zdCBbZG9jLF0gPSB1c2VTdGF0ZShuZXcgeW9ya2llLkRvY3VtZW50KCdmaWxlJywgY3VycmVudEZpbGVJbmZvPy5maWxlSGFzaCkpO1xuICAgIGNvbnN0IHBhdGggPSB1c2VQYXRobmFtZSgpLnNwbGl0KCcvJyk7XG4gICAgY29uc3QgZGVib3VuY2VkQ29kZSA9IHVzZURlYm91bmNlKGNvZGVEYXRhLCAzMDApO1xuICAgIC8vIGNvbnN0IGRlYm91bmNlZFN5bmNDb2RlID0gdXNlRGVib3VuY2UoY29kZURhdGEsIDApO1xuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gICAgIGFzeW5jIGZ1bmN0aW9uIGF0dGFjaERvYygpIHtcbiAgICAvLyAgICAgICAvLyAwMS4gY3JlYXRlIGNsaWVudCB3aXRoIFJQQ0FkZHIoZW52b3kpIHRoZW4gYWN0aXZhdGUgaXQuXG4gICAgLy8gICAgICAgY29uc3QgY2xpZW50ID0gbmV3IHlvcmtpZS5DbGllbnQoJ2h0dHBzOi8vYXBpLnlvcmtpZS5kZXYnLCB7XG4gICAgLy8gICAgICAgICBhcGlLZXk6ICdjbTB1NDNxb3NucmpxMnViMTVxMCcsXG4gICAgLy8gICAgICAgfSk7XG4gICAgLy8gICAgICAgYXdhaXQgY2xpZW50LmFjdGl2YXRlKCk7XG4gICAgXG4gICAgLy8gICAgICAgLy8gMDIuIGF0dGFjaCB0aGUgZG9jdW1lbnQgaW50byB0aGUgY2xpZW50LlxuICAgIC8vICAgICAgIGF3YWl0IGNsaWVudC5hdHRhY2goZG9jKTtcbiAgICBcbiAgICAvLyAgICAgLy8gICAwMy4gY3JlYXRlIGRlZmF1bHQgdG9kb3MgaWYgbm90IGV4aXN0cy5cbiAgICAvLyAgICAgICBkb2MudXBkYXRlKChyb290KSA9PiB7XG4gICAgLy8gICAgICAgICBpZiAocm9vdFsnY29udGVudHMnXT09PXVuZGVmaW5lZCkge1xuICAgIC8vICAgICAgICAgICByb290Wydjb250ZW50cyddID0gbmV3IHlvcmtpZS5UZXh0KCk7ICBcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfSlcblxuICAgIC8vICAgICBkb2Muc3Vic2NyaWJlKChldmVudCkgPT4ge1xuICAgIC8vICAgICAgICAgc2V0Q29kZURhdGEoZG9jLmdldFJvb3QoKVsnY29udGVudHMnXSk7XG4gICAgLy8gICAgIH0pO1xuICAgIFxuICAgIC8vICAgICAvLyAvLyAgIDA1LiBzZXQgdG9kb3MgIHRoZSBhdHRhY2hlZCBkb2N1bWVudC5cbiAgICAvLyAgICAgLy8gICBzZXRDb2RlRGF0YShkb2MuZ2V0Um9vdCgpWydjb250ZW50cyddKTtcbiAgICBcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBhdHRhY2hEb2MoKTtcbiAgICAvLyAgIH0sIFtkb2NdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChjdXJyZW50RmlsZUluZm8gIT09IHVuZGVmaW5lZCAmJiBjb2RlRGF0YS5sZW5ndGggPiAwICAmJiBjdXJyZW50RmlsZUluZm8ucm9sZSAhPT0gUm9sZS5WSUVXRVIpIHtcbiAgICAgICAgICAgIC8vIGRvYy51cGRhdGUoKHJvb3QpPT57XG4gICAgICAgICAgICAvLyAgICAgcm9vdFsnY29udGVudHMnXT0gY29kZURhdGE7XG4gICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgIG1vZGlmeUZpbGVDb250ZW50cyh1c2VySWQsIGN1cnJlbnRGaWxlSW5mbywgZGVib3VuY2VkQ29kZSk7XG4gICAgICAgIH1cbiAgICB9LCBbZGVib3VuY2VkQ29kZV0pO1xuXG4gICAgLy8gdXNlRWZmZWN0KCgpPT57XG4gICAgLy8gICAgIGlmIChjdXJyZW50RmlsZU1vZGUgPT09IFwibW9kaWZ5XCIgJiYgY3VycmVudEZpbGVJbmZvICE9PSB1bmRlZmluZWQgJiYgY29kZURhdGEubGVuZ3RoID4gMCAmJiBjdXJyZW50RmlsZUluZm8ucm9sZSAhPT0gUm9sZS5WSUVXRVIpIHtcbiAgICAvLyAgICAgICAgIGRvYy51cGRhdGUoKHJvb3QpPT57XG4gICAgLy8gICAgICAgICAgICAgcm9vdFsnY29udGVudHMnXSA9ICBjb2RlRGF0YTtcbiAgICAvLyAgICAgICAgIH0pO1xuICAgIC8vICAgICB9XG4gICAgLy8gfSxbY29kZURhdGFdKVxuICAgIHJldHVybiAoXG4gICAgICAgICAgICA8RWRpdG9yXG4gICAgICAgICAgICAgICAgaGVpZ2h0PScxMDAlJ1xuICAgICAgICAgICAgICAgIHdpZHRoPVwiNzAlXCJcbiAgICAgICAgICAgICAgICBsYW5ndWFnZT17cGF0aFsyXX1cbiAgICAgICAgICAgICAgICB2YWx1ZT17Y29kZURhdGF9XG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtjdXJyZW50RmlsZUluZm8gIT09IHVuZGVmaW5lZCA/IGN1cnJlbnRGaWxlSW5mby5maWxlRGV0YWlsIDogXCJcIn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIGN1cnJlbnRGaWxlSW5mbz8ucm9sZSAhPT0gUm9sZS5WSUVXRVIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldENvZGVEYXRhKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgdGhlbWU9J3ZzLWRhcmsnXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gbWluaW1hcDoge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDE1LFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAvPlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiUm9sZSIsIm1vZGlmeUZpbGVDb250ZW50cyIsInVzZURlYm91bmNlIiwiZmlsZUluZm8iLCJmaWxlTW9kZSIsInVzZXJfaWQiLCJFZGl0b3IiLCJ1c2VQYXRobmFtZSIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWNvaWxTdGF0ZSIsInVzZVJlY29pbFZhbHVlIiwieW9ya2llIiwiU0VSVkVSX0RFUExPWV9VUkwiLCJDb2RlRWRpdG9yIiwiY29kZURhdGEiLCJzZXRDb2RlRGF0YSIsInVzZXJJZCIsImN1cnJlbnRGaWxlSW5mbyIsInNldEN1cnJlbnRGaWxlSW5mbyIsImN1cnJlbnRGaWxlTW9kZSIsInNldEN1cnJlbnRGaWxlTW9kZSIsImRvYyIsIkRvY3VtZW50IiwiZmlsZUhhc2giLCJwYXRoIiwic3BsaXQiLCJkZWJvdW5jZWRDb2RlIiwidW5kZWZpbmVkIiwibGVuZ3RoIiwicm9sZSIsIlZJRVdFUiIsImhlaWdodCIsIndpZHRoIiwibGFuZ3VhZ2UiLCJ2YWx1ZSIsImRlZmF1bHRWYWx1ZSIsImZpbGVEZXRhaWwiLCJvbkNoYW5nZSIsInRoZW1lIiwib3B0aW9ucyIsImZvbnRTaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/component/organisms/codeEditor/index.tsx\n"));

/***/ })

});