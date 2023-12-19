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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CodeEditor: function() { return /* binding */ CodeEditor; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _type_authority_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/@type/authority/interface */ \"(app-pages-browser)/./src/@type/authority/interface.ts\");\n/* harmony import */ var _api_file_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/file/api */ \"(app-pages-browser)/./src/api/file/api.ts\");\n/* harmony import */ var _hooks_useDebounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/useDebounce */ \"(app-pages-browser)/./src/hooks/useDebounce.ts\");\n/* harmony import */ var _recoil_fileInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/recoil/fileInfo */ \"(app-pages-browser)/./src/recoil/fileInfo.ts\");\n/* harmony import */ var _recoil_fileMode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/recoil/fileMode */ \"(app-pages-browser)/./src/recoil/fileMode.ts\");\n/* harmony import */ var _recoil_userId__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/recoil/userId */ \"(app-pages-browser)/./src/recoil/userId.ts\");\n/* harmony import */ var _monaco_editor_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @monaco-editor/react */ \"(app-pages-browser)/./node_modules/@monaco-editor/react/dist/index.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! recoil */ \"(app-pages-browser)/./node_modules/recoil/es/index.js\");\n/* harmony import */ var yorkie_js_sdk__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! yorkie-js-sdk */ \"(app-pages-browser)/./node_modules/yorkie-js-sdk/dist/yorkie-js-sdk.js\");\n/* harmony import */ var yorkie_js_sdk__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(yorkie_js_sdk__WEBPACK_IMPORTED_MODULE_11__);\n/* __next_internal_client_entry_do_not_use__ CodeEditor auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nconst SERVER_DEPLOY_URL = \"http://ec2-15-165-115-163.ap-northeast-2.compute.amazonaws.com:8000\";\nconst CodeEditor = (param)=>{\n    let { codeData, setCodeData } = param;\n    _s();\n    const userId = (0,recoil__WEBPACK_IMPORTED_MODULE_10__.useRecoilValue)(_recoil_userId__WEBPACK_IMPORTED_MODULE_6__.user_id);\n    const [currentFileInfo, setCurrentFileInfo] = (0,recoil__WEBPACK_IMPORTED_MODULE_10__.useRecoilState)(_recoil_fileInfo__WEBPACK_IMPORTED_MODULE_4__.fileInfo);\n    const [currentFileMode, setCurrentFileMode] = (0,recoil__WEBPACK_IMPORTED_MODULE_10__.useRecoilState)(_recoil_fileMode__WEBPACK_IMPORTED_MODULE_5__.fileMode);\n    const [doc] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(new (yorkie_js_sdk__WEBPACK_IMPORTED_MODULE_11___default().Document)(\"file\", currentFileInfo === null || currentFileInfo === void 0 ? void 0 : currentFileInfo.fileHash));\n    const path = (0,next_navigation__WEBPACK_IMPORTED_MODULE_8__.usePathname)().split(\"/\");\n    const debouncedCode = (0,_hooks_useDebounce__WEBPACK_IMPORTED_MODULE_3__.useDebounce)(codeData, 200);\n    // const debouncedSyncCode = useDebounce(codeData, 0);\n    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{\n        async function attachDoc() {\n            // 01. create client with RPCAddr(envoy) then activate it.\n            const client = new (yorkie_js_sdk__WEBPACK_IMPORTED_MODULE_11___default().Client)(\"http://localhost:8080\");\n            await client.activate();\n            // 02. attach the document into the client.\n            await client.attach(doc);\n            //   03. create default todos if not exists.\n            doc.update((root)=>{\n                if (root[\"contents\"] === undefined) {\n                    root[\"contents\"] = new (yorkie_js_sdk__WEBPACK_IMPORTED_MODULE_11___default().Text)();\n                }\n            });\n            doc.subscribe((event)=>{\n                setCodeData(doc.getRoot()[\"contents\"]);\n            });\n        // //   05. set todos  the attached document.\n        //   setCodeData(doc.getRoot()['contents']);\n        }\n        attachDoc();\n    }, [\n        doc\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{\n        console.log(debouncedCode);\n        if (currentFileMode === \"modify\" && currentFileInfo !== undefined && debouncedCode.length > 0 && currentFileInfo.role !== _type_authority_interface__WEBPACK_IMPORTED_MODULE_1__.Role.VIEWER) {\n            doc.update((root)=>{\n                root[\"contents\"] = codeData;\n            });\n            (0,_api_file_api__WEBPACK_IMPORTED_MODULE_2__.modifyFileContents)(userId, currentFileInfo, codeData);\n        }\n    }, [\n        debouncedCode\n    ]);\n    // useEffect(()=>{\n    //     if (currentFileMode === \"modify\" && currentFileInfo !== undefined && codeData.length > 0 && currentFileInfo.role !== Role.VIEWER) {\n    //         doc.update((root)=>{\n    //             root['contents'] =  codeData;\n    //         });\n    //     }\n    // },[codeData])\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_monaco_editor_react__WEBPACK_IMPORTED_MODULE_7__.Editor, {\n        height: \"100%\",\n        width: \"70%\",\n        language: path[2],\n        value: codeData,\n        defaultValue: currentFileInfo !== undefined ? currentFileInfo.fileDetail : \"\",\n        onChange: (value)=>{\n            if (value !== undefined && (currentFileInfo === null || currentFileInfo === void 0 ? void 0 : currentFileInfo.role) !== _type_authority_interface__WEBPACK_IMPORTED_MODULE_1__.Role.VIEWER) {\n                setCodeData(value);\n            }\n        },\n        theme: \"vs-dark\",\n        options: {\n            minimap: {\n                enabled: true\n            },\n            fontSize: 15,\n            wordWrap: \"on\"\n        }\n    }, void 0, false, {\n        fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/codeEditor/index.tsx\",\n        lineNumber: 72,\n        columnNumber: 13\n    }, undefined);\n};\n_s(CodeEditor, \"kO5spg4RpBTO/YD+zf97p/IGhtQ=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_10__.useRecoilValue,\n        recoil__WEBPACK_IMPORTED_MODULE_10__.useRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_10__.useRecoilState,\n        next_navigation__WEBPACK_IMPORTED_MODULE_8__.usePathname,\n        _hooks_useDebounce__WEBPACK_IMPORTED_MODULE_3__.useDebounce\n    ];\n});\n_c = CodeEditor;\nvar _c;\n$RefreshReg$(_c, \"CodeEditor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnQvb3JnYW5pc21zL2NvZGVFZGl0b3IvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNtRDtBQUNDO0FBQ0Y7QUFDTDtBQUNBO0FBQ0g7QUFDSTtBQUNBO0FBQ0k7QUFDTTtBQUNyQjtBQUtuQyxNQUFNYyxvQkFBb0I7QUFFbkIsTUFBTUMsYUFBYTtRQUFDLEVBQUVDLFFBQVEsRUFBRUMsV0FBVyxFQUFtQjs7SUFDakUsTUFBTUMsU0FBU04sdURBQWNBLENBQUNQLG1EQUFPQTtJQUNyQyxNQUFNLENBQUNjLGlCQUFpQkMsbUJBQW1CLEdBQUdULHVEQUFjQSxDQUFDUixzREFBUUE7SUFDckUsTUFBTSxDQUFDa0IsaUJBQWlCQyxtQkFBbUIsR0FBR1gsdURBQWNBLENBQUNQLHNEQUFRQTtJQUNyRSxNQUFNLENBQUNtQixJQUFLLEdBQUdiLCtDQUFRQSxDQUFDLElBQUlHLGdFQUFlLENBQUMsUUFBUU0sNEJBQUFBLHNDQUFBQSxnQkFBaUJNLFFBQVE7SUFDN0UsTUFBTUMsT0FBT25CLDREQUFXQSxHQUFHb0IsS0FBSyxDQUFDO0lBQ2pDLE1BQU1DLGdCQUFnQjFCLCtEQUFXQSxDQUFDYyxVQUFVO0lBQzVDLHNEQUFzRDtJQUN0RFAsZ0RBQVNBLENBQUM7UUFDTixlQUFlb0I7WUFDYiwwREFBMEQ7WUFDMUQsTUFBTUMsU0FBUyxJQUFJakIsOERBQWEsQ0FBQztZQUNqQyxNQUFNaUIsT0FBT0UsUUFBUTtZQUVyQiwyQ0FBMkM7WUFDM0MsTUFBTUYsT0FBT0csTUFBTSxDQUFDVjtZQUV0Qiw0Q0FBNEM7WUFDMUNBLElBQUlXLE1BQU0sQ0FBQyxDQUFDQztnQkFDVixJQUFJQSxJQUFJLENBQUMsV0FBVyxLQUFHQyxXQUFXO29CQUNoQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJdEIsNERBQVc7Z0JBQ3BDO1lBQ0o7WUFFQVUsSUFBSWUsU0FBUyxDQUFDLENBQUNDO2dCQUNYdEIsWUFBWU0sSUFBSWlCLE9BQU8sRUFBRSxDQUFDLFdBQVc7WUFDdkM7UUFFRiw2Q0FBNkM7UUFDN0MsNENBQTRDO1FBRTVDO1FBQ0FYO0lBQ0YsR0FBRztRQUFDTjtLQUFJO0lBRVZkLGdEQUFTQSxDQUFDO1FBQ05nQyxRQUFRQyxHQUFHLENBQUNkO1FBQ1osSUFBSVAsb0JBQW9CLFlBQVlGLG9CQUFvQmlCLGFBQWFSLGNBQWNlLE1BQU0sR0FBRyxLQUFLeEIsZ0JBQWdCeUIsSUFBSSxLQUFLNUMsMkRBQUlBLENBQUM2QyxNQUFNLEVBQUU7WUFDbkl0QixJQUFJVyxNQUFNLENBQUMsQ0FBQ0M7Z0JBQ1JBLElBQUksQ0FBQyxXQUFXLEdBQUVuQjtZQUN0QjtZQUNBZixpRUFBa0JBLENBQUNpQixRQUFRQyxpQkFBaUJIO1FBQ2hEO0lBQ0osR0FBRztRQUFDWTtLQUFjO0lBRWxCLGtCQUFrQjtJQUNsQiwwSUFBMEk7SUFDMUksK0JBQStCO0lBQy9CLDRDQUE0QztJQUM1QyxjQUFjO0lBQ2QsUUFBUTtJQUNSLGdCQUFnQjtJQUNoQixxQkFDUSw4REFBQ3RCLHdEQUFNQTtRQUNId0MsUUFBTztRQUNQQyxPQUFNO1FBQ05DLFVBQVV0QixJQUFJLENBQUMsRUFBRTtRQUNqQnVCLE9BQU9qQztRQUNQa0MsY0FBYy9CLG9CQUFvQmlCLFlBQVlqQixnQkFBZ0JnQyxVQUFVLEdBQUc7UUFDM0VDLFVBQVUsQ0FBQ0g7WUFDUCxJQUFJQSxVQUFVYixhQUFhakIsQ0FBQUEsNEJBQUFBLHNDQUFBQSxnQkFBaUJ5QixJQUFJLE1BQUs1QywyREFBSUEsQ0FBQzZDLE1BQU0sRUFBRTtnQkFDOUQ1QixZQUFZZ0M7WUFDaEI7UUFDSjtRQUNBSSxPQUFNO1FBQ05DLFNBQVM7WUFDTEMsU0FBUztnQkFDTEMsU0FBUztZQUNiO1lBQ0FDLFVBQVU7WUFDVkMsVUFBVTtRQUNkOzs7Ozs7QUFHaEIsRUFBQztHQTFFWTNDOztRQUNNSCxtREFBY0E7UUFDaUJELG1EQUFjQTtRQUNkQSxtREFBY0E7UUFFL0NKLHdEQUFXQTtRQUNGTCwyREFBV0E7OztLQU54QmEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudC9vcmdhbmlzbXMvY29kZUVkaXRvci9pbmRleC50c3g/M2YwNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IHsgUm9sZSB9IGZyb20gJ0AvQHR5cGUvYXV0aG9yaXR5L2ludGVyZmFjZSc7XG5pbXBvcnQgeyBtb2RpZnlGaWxlQ29udGVudHMgfSBmcm9tICdAL2FwaS9maWxlL2FwaSc7XG5pbXBvcnQgeyB1c2VEZWJvdW5jZSB9IGZyb20gJ0AvaG9va3MvdXNlRGVib3VuY2UnO1xuaW1wb3J0IHsgZmlsZUluZm8gfSBmcm9tICdAL3JlY29pbC9maWxlSW5mbyc7XG5pbXBvcnQgeyBmaWxlTW9kZSB9IGZyb20gJ0AvcmVjb2lsL2ZpbGVNb2RlJztcbmltcG9ydCB7IHVzZXJfaWQgfSBmcm9tICdAL3JlY29pbC91c2VySWQnO1xuaW1wb3J0IHsgRWRpdG9yIH0gZnJvbSAnQG1vbmFjby1lZGl0b3IvcmVhY3QnO1xuaW1wb3J0IHsgdXNlUGF0aG5hbWUgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlLCB1c2VSZWNvaWxWYWx1ZSB9IGZyb20gJ3JlY29pbCc7XG5pbXBvcnQgeW9ya2llIGZyb20gJ3lvcmtpZS1qcy1zZGsnO1xuaW50ZXJmYWNlIENvZGVFZGl0b3JQcm9wcyB7XG4gICAgY29kZURhdGE6IHN0cmluZztcbiAgICBzZXRDb2RlRGF0YTogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248c3RyaW5nPj5cbn1cbmNvbnN0IFNFUlZFUl9ERVBMT1lfVVJMID0gJ2h0dHA6Ly9lYzItMTUtMTY1LTExNS0xNjMuYXAtbm9ydGhlYXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tOjgwMDAnXG5cbmV4cG9ydCBjb25zdCBDb2RlRWRpdG9yID0gKHsgY29kZURhdGEsIHNldENvZGVEYXRhIH06IENvZGVFZGl0b3JQcm9wcykgPT4ge1xuICAgIGNvbnN0IHVzZXJJZCA9IHVzZVJlY29pbFZhbHVlKHVzZXJfaWQpO1xuICAgIGNvbnN0IFtjdXJyZW50RmlsZUluZm8sIHNldEN1cnJlbnRGaWxlSW5mb10gPSB1c2VSZWNvaWxTdGF0ZShmaWxlSW5mbyk7XG4gICAgY29uc3QgW2N1cnJlbnRGaWxlTW9kZSwgc2V0Q3VycmVudEZpbGVNb2RlXSA9IHVzZVJlY29pbFN0YXRlKGZpbGVNb2RlKTtcbiAgICBjb25zdCBbZG9jLF0gPSB1c2VTdGF0ZShuZXcgeW9ya2llLkRvY3VtZW50KCdmaWxlJywgY3VycmVudEZpbGVJbmZvPy5maWxlSGFzaCkpO1xuICAgIGNvbnN0IHBhdGggPSB1c2VQYXRobmFtZSgpLnNwbGl0KCcvJyk7XG4gICAgY29uc3QgZGVib3VuY2VkQ29kZSA9IHVzZURlYm91bmNlKGNvZGVEYXRhLCAyMDApO1xuICAgIC8vIGNvbnN0IGRlYm91bmNlZFN5bmNDb2RlID0gdXNlRGVib3VuY2UoY29kZURhdGEsIDApO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGF0dGFjaERvYygpIHtcbiAgICAgICAgICAvLyAwMS4gY3JlYXRlIGNsaWVudCB3aXRoIFJQQ0FkZHIoZW52b3kpIHRoZW4gYWN0aXZhdGUgaXQuXG4gICAgICAgICAgY29uc3QgY2xpZW50ID0gbmV3IHlvcmtpZS5DbGllbnQoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MCcpO1xuICAgICAgICAgIGF3YWl0IGNsaWVudC5hY3RpdmF0ZSgpO1xuICAgIFxuICAgICAgICAgIC8vIDAyLiBhdHRhY2ggdGhlIGRvY3VtZW50IGludG8gdGhlIGNsaWVudC5cbiAgICAgICAgICBhd2FpdCBjbGllbnQuYXR0YWNoKGRvYyk7XG4gICAgXG4gICAgICAgIC8vICAgMDMuIGNyZWF0ZSBkZWZhdWx0IHRvZG9zIGlmIG5vdCBleGlzdHMuXG4gICAgICAgICAgZG9jLnVwZGF0ZSgocm9vdCkgPT4ge1xuICAgICAgICAgICAgaWYgKHJvb3RbJ2NvbnRlbnRzJ109PT11bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgcm9vdFsnY29udGVudHMnXSA9IG5ldyB5b3JraWUuVGV4dCgpOyAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgZG9jLnN1YnNjcmliZSgoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHNldENvZGVEYXRhKGRvYy5nZXRSb290KClbJ2NvbnRlbnRzJ10pO1xuICAgICAgICAgIH0pO1xuICAgIFxuICAgICAgICAvLyAvLyAgIDA1LiBzZXQgdG9kb3MgIHRoZSBhdHRhY2hlZCBkb2N1bWVudC5cbiAgICAgICAgLy8gICBzZXRDb2RlRGF0YShkb2MuZ2V0Um9vdCgpWydjb250ZW50cyddKTtcbiAgICBcbiAgICAgICAgfVxuICAgICAgICBhdHRhY2hEb2MoKTtcbiAgICAgIH0sIFtkb2NdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRlYm91bmNlZENvZGUpXG4gICAgICAgIGlmIChjdXJyZW50RmlsZU1vZGUgPT09IFwibW9kaWZ5XCIgJiYgY3VycmVudEZpbGVJbmZvICE9PSB1bmRlZmluZWQgJiYgZGVib3VuY2VkQ29kZS5sZW5ndGggPiAwICYmIGN1cnJlbnRGaWxlSW5mby5yb2xlICE9PSBSb2xlLlZJRVdFUikge1xuICAgICAgICAgICAgZG9jLnVwZGF0ZSgocm9vdCk9PntcbiAgICAgICAgICAgICAgICByb290Wydjb250ZW50cyddPSBjb2RlRGF0YTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbW9kaWZ5RmlsZUNvbnRlbnRzKHVzZXJJZCwgY3VycmVudEZpbGVJbmZvLCBjb2RlRGF0YSk7XG4gICAgICAgIH1cbiAgICB9LCBbZGVib3VuY2VkQ29kZV0pO1xuXG4gICAgLy8gdXNlRWZmZWN0KCgpPT57XG4gICAgLy8gICAgIGlmIChjdXJyZW50RmlsZU1vZGUgPT09IFwibW9kaWZ5XCIgJiYgY3VycmVudEZpbGVJbmZvICE9PSB1bmRlZmluZWQgJiYgY29kZURhdGEubGVuZ3RoID4gMCAmJiBjdXJyZW50RmlsZUluZm8ucm9sZSAhPT0gUm9sZS5WSUVXRVIpIHtcbiAgICAvLyAgICAgICAgIGRvYy51cGRhdGUoKHJvb3QpPT57XG4gICAgLy8gICAgICAgICAgICAgcm9vdFsnY29udGVudHMnXSA9ICBjb2RlRGF0YTtcbiAgICAvLyAgICAgICAgIH0pO1xuICAgIC8vICAgICB9XG4gICAgLy8gfSxbY29kZURhdGFdKVxuICAgIHJldHVybiAoXG4gICAgICAgICAgICA8RWRpdG9yXG4gICAgICAgICAgICAgICAgaGVpZ2h0PScxMDAlJ1xuICAgICAgICAgICAgICAgIHdpZHRoPVwiNzAlXCJcbiAgICAgICAgICAgICAgICBsYW5ndWFnZT17cGF0aFsyXX1cbiAgICAgICAgICAgICAgICB2YWx1ZT17Y29kZURhdGF9XG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtjdXJyZW50RmlsZUluZm8gIT09IHVuZGVmaW5lZCA/IGN1cnJlbnRGaWxlSW5mby5maWxlRGV0YWlsIDogXCJcIn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIGN1cnJlbnRGaWxlSW5mbz8ucm9sZSAhPT0gUm9sZS5WSUVXRVIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldENvZGVEYXRhKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgdGhlbWU9J3ZzLWRhcmsnXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgICAgICAgICAgICBtaW5pbWFwOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTUsXG4gICAgICAgICAgICAgICAgICAgIHdvcmRXcmFwOiBcIm9uXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSb2xlIiwibW9kaWZ5RmlsZUNvbnRlbnRzIiwidXNlRGVib3VuY2UiLCJmaWxlSW5mbyIsImZpbGVNb2RlIiwidXNlcl9pZCIsIkVkaXRvciIsInVzZVBhdGhuYW1lIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlY29pbFN0YXRlIiwidXNlUmVjb2lsVmFsdWUiLCJ5b3JraWUiLCJTRVJWRVJfREVQTE9ZX1VSTCIsIkNvZGVFZGl0b3IiLCJjb2RlRGF0YSIsInNldENvZGVEYXRhIiwidXNlcklkIiwiY3VycmVudEZpbGVJbmZvIiwic2V0Q3VycmVudEZpbGVJbmZvIiwiY3VycmVudEZpbGVNb2RlIiwic2V0Q3VycmVudEZpbGVNb2RlIiwiZG9jIiwiRG9jdW1lbnQiLCJmaWxlSGFzaCIsInBhdGgiLCJzcGxpdCIsImRlYm91bmNlZENvZGUiLCJhdHRhY2hEb2MiLCJjbGllbnQiLCJDbGllbnQiLCJhY3RpdmF0ZSIsImF0dGFjaCIsInVwZGF0ZSIsInJvb3QiLCJ1bmRlZmluZWQiLCJUZXh0Iiwic3Vic2NyaWJlIiwiZXZlbnQiLCJnZXRSb290IiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsInJvbGUiLCJWSUVXRVIiLCJoZWlnaHQiLCJ3aWR0aCIsImxhbmd1YWdlIiwidmFsdWUiLCJkZWZhdWx0VmFsdWUiLCJmaWxlRGV0YWlsIiwib25DaGFuZ2UiLCJ0aGVtZSIsIm9wdGlvbnMiLCJtaW5pbWFwIiwiZW5hYmxlZCIsImZvbnRTaXplIiwid29yZFdyYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/component/organisms/codeEditor/index.tsx\n"));

/***/ })

});