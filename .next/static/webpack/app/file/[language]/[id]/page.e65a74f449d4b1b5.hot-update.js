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

/***/ "(app-pages-browser)/./src/component/organisms/fileHeader/index.tsx":
/*!******************************************************!*\
  !*** ./src/component/organisms/fileHeader/index.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles.module.scss */ \"(app-pages-browser)/./src/component/organisms/fileHeader/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _component_molcules_loginBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/component/molcules/loginBox */ \"(app-pages-browser)/./src/component/molcules/loginBox/index.tsx\");\n/* harmony import */ var _component_molcules_authorityModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/component/molcules/authorityModal */ \"(app-pages-browser)/./src/component/molcules/authorityModal/index.tsx\");\n/* harmony import */ var _recoil_fileInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/recoil/fileInfo */ \"(app-pages-browser)/./src/recoil/fileInfo.ts\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! recoil */ \"(app-pages-browser)/./node_modules/recoil/es/index.js\");\n/* harmony import */ var _api_file_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/api/file/api */ \"(app-pages-browser)/./src/api/file/api.ts\");\n/* harmony import */ var _hooks_useDebounce__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/hooks/useDebounce */ \"(app-pages-browser)/./src/hooks/useDebounce.ts\");\n/* harmony import */ var _recoil_userId__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/recoil/userId */ \"(app-pages-browser)/./src/recoil/userId.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nconst FileHeader = ()=>{\n    _s();\n    const [modalIsOpen, setModalIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [currentFileInfo, setCurrentFileInfo] = (0,recoil__WEBPACK_IMPORTED_MODULE_7__.useRecoilState)(_recoil_fileInfo__WEBPACK_IMPORTED_MODULE_6__.fileInfo);\n    const [fileName, setFileName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const debouncedName = (0,_hooks_useDebounce__WEBPACK_IMPORTED_MODULE_9__.useDebounce)(fileName, 500);\n    const userId = (0,recoil__WEBPACK_IMPORTED_MODULE_7__.useRecoilValue)(_recoil_userId__WEBPACK_IMPORTED_MODULE_10__.user_id);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const modifyFileNameAsync = async ()=>{\n            if (currentFileInfo !== undefined) {\n                if (await (0,_api_file_api__WEBPACK_IMPORTED_MODULE_8__.modifyFileName)(userId, currentFileInfo, debouncedName)) {\n                    setCurrentFileInfo({\n                        ...currentFileInfo,\n                        fileName: debouncedName\n                    });\n                }\n            }\n        };\n        modifyFileNameAsync();\n    }, [\n        debouncedName\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (currentFileInfo !== undefined) {\n            setFileName(currentFileInfo === null || currentFileInfo === void 0 ? void 0 : currentFileInfo.fileName);\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default().leftContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: \"/logo.jpg\",\n                            width: 100,\n                            height: 100,\n                            style: {\n                                objectFit: \"cover\",\n                                marginLeft: 20\n                            },\n                            alt: \"Sync-Codes\"\n                        }, void 0, false, {\n                            fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/fileHeader/index.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 17\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/fileHeader/index.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: currentFileInfo === null || currentFileInfo === void 0 ? void 0 : currentFileInfo.fileName,\n                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default().fileName),\n                        value: fileName,\n                        onChange: (e)=>setFileName(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/fileHeader/index.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/fileHeader/index.tsx\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default().rightContainer),\n                children: [\n                    (currentFileInfo === null || currentFileInfo === void 0 ? void 0 : currentFileInfo.role) === Role.ADMIN && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: \"/shareIcon.png\",\n                        width: \"50\",\n                        height: \"50\",\n                        alt: \"공유하기\",\n                        style: {\n                            margin: \"0 15px\"\n                        },\n                        onClick: ()=>setModalIsOpen(true)\n                    }, void 0, false, {\n                        fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/fileHeader/index.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_molcules_authorityModal__WEBPACK_IMPORTED_MODULE_5__.AuthorityModal, {\n                        modalIsOpen: modalIsOpen,\n                        setModalIsOpen: setModalIsOpen\n                    }, void 0, false, {\n                        fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/fileHeader/index.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_molcules_loginBox__WEBPACK_IMPORTED_MODULE_4__.LoginBox, {}, void 0, false, {\n                        fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/fileHeader/index.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/fileHeader/index.tsx\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/fileHeader/index.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FileHeader, \"7TcvtYWDrTEgSVKD/IYzp/PfDBA=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_7__.useRecoilState,\n        _hooks_useDebounce__WEBPACK_IMPORTED_MODULE_9__.useDebounce,\n        recoil__WEBPACK_IMPORTED_MODULE_7__.useRecoilValue\n    ];\n});\n_c = FileHeader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FileHeader);\nvar _c;\n$RefreshReg$(_c, \"FileHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnQvb3JnYW5pc21zL2ZpbGVIZWFkZXIvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDbUQ7QUFDVjtBQUNWO0FBQ0Y7QUFDNEI7QUFDWTtBQUN4QjtBQUNXO0FBQ1k7QUFDbEI7QUFDUjtBQUMxQyxNQUFNYyxhQUFhOztJQUNmLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHZCwrQ0FBUUEsQ0FBVTtJQUN4RCxNQUFNLENBQUNlLGlCQUFpQkMsbUJBQW1CLEdBQUdULHNEQUFjQSxDQUFDRCxzREFBUUE7SUFDckUsTUFBTSxDQUFDVyxVQUFVQyxZQUFZLEdBQUdsQiwrQ0FBUUEsQ0FBUztJQUNqRCxNQUFNbUIsZ0JBQWdCVCwrREFBV0EsQ0FBQ08sVUFBVTtJQUM1QyxNQUFNRyxTQUFTWixzREFBY0EsQ0FBQ0csb0RBQU9BO0lBQ3JDWixnREFBU0EsQ0FBQztRQUNOLE1BQU1zQixzQkFBc0I7WUFDMUIsSUFBSU4sb0JBQW9CTyxXQUFXO2dCQUNqQyxJQUFJLE1BQU1iLDZEQUFjQSxDQUFDVyxRQUFRTCxpQkFBaUJJLGdCQUFnQjtvQkFDOURILG1CQUFtQjt3QkFBRSxHQUFHRCxlQUFlO3dCQUFFRSxVQUFVRTtvQkFBYztnQkFDckU7WUFDRjtRQUNGO1FBRUFFO0lBQ0YsR0FBRztRQUFDRjtLQUFjO0lBQ3BCcEIsZ0RBQVNBLENBQUM7UUFDTixJQUFJZ0Isb0JBQWtCTyxXQUFXO1lBQzdCSixZQUFZSCw0QkFBQUEsc0NBQUFBLGdCQUFpQkUsUUFBUTtRQUN6QztJQUNKLEdBQUUsRUFBRTtJQUNKLHFCQUNBLDhEQUFDTTtRQUFJQyxXQUFXdkIsdUVBQWdCOzswQkFDNUIsOERBQUNzQjtnQkFBSUMsV0FBV3ZCLDJFQUFvQjs7a0NBQ2hDLDhEQUFDRSxrREFBSUE7d0JBQUN3QixNQUFPO2tDQUNULDRFQUFDekIsbURBQUtBOzRCQUNFMEIsS0FBSTs0QkFDSkMsT0FBTzs0QkFDUEMsUUFBUTs0QkFDUkMsT0FBTztnQ0FBRUMsV0FBVztnQ0FBU0MsWUFBVzs0QkFBRTs0QkFDMUNDLEtBQUk7Ozs7Ozs7Ozs7O2tDQUdoQiw4REFBQ0M7d0JBQ0dDLE1BQUs7d0JBQ0xDLFdBQVcsRUFBRXRCLDRCQUFBQSxzQ0FBQUEsZ0JBQWlCRSxRQUFRO3dCQUN0Q08sV0FBV3ZCLHNFQUFlO3dCQUMxQnFDLE9BQU9yQjt3QkFDUHNCLFVBQVUsQ0FBQ0MsSUFBSXRCLFlBQVlzQixFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7Ozs7Ozs7OzswQkFHakQsOERBQUNmO2dCQUFJQyxXQUFXdkIsNEVBQXFCOztvQkFFN0JjLENBQUFBLDRCQUFBQSxzQ0FBQUEsZ0JBQWlCNEIsSUFBSSxNQUFLQyxLQUFLQyxLQUFLLGtCQUNwQyw4REFBQzNDLG1EQUFLQTt3QkFDTjBCLEtBQUk7d0JBQ0pDLE9BQU07d0JBQ05DLFFBQU87d0JBQ1BJLEtBQUk7d0JBQ0pILE9BQU87NEJBQUNlLFFBQVE7d0JBQVE7d0JBQ3hCQyxTQUFTLElBQUlqQyxlQUFlOzs7Ozs7a0NBR2hDLDhEQUFDVCw4RUFBY0E7d0JBQ1hRLGFBQWFBO3dCQUNiQyxnQkFBZ0JBOzs7Ozs7a0NBRXBCLDhEQUFDVixrRUFBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR3JCO0dBN0RNUTs7UUFFNENMLGtEQUFjQTtRQUV0Q0csMkRBQVdBO1FBQ2xCRixrREFBY0E7OztLQUwzQkk7QUE4RE4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudC9vcmdhbmlzbXMvZmlsZUhlYWRlci9pbmRleC50c3g/ZTExNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IExvZ2luQm94IH0gZnJvbSAnQC9jb21wb25lbnQvbW9sY3VsZXMvbG9naW5Cb3gnO1xuaW1wb3J0IHsgQXV0aG9yaXR5TW9kYWwgfSBmcm9tICdAL2NvbXBvbmVudC9tb2xjdWxlcy9hdXRob3JpdHlNb2RhbCc7XG5pbXBvcnQgeyBmaWxlSW5mbyB9IGZyb20gJ0AvcmVjb2lsL2ZpbGVJbmZvJztcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlLCB1c2VSZWNvaWxWYWx1ZSB9IGZyb20gJ3JlY29pbCc7XG5pbXBvcnQgeyBtb2RpZnlGaWxlQ29udGVudHMsIG1vZGlmeUZpbGVOYW1lIH0gZnJvbSAnQC9hcGkvZmlsZS9hcGknO1xuaW1wb3J0IHsgdXNlRGVib3VuY2UgfSBmcm9tICdAL2hvb2tzL3VzZURlYm91bmNlJztcbmltcG9ydCB7IHVzZXJfaWQgfSBmcm9tICdAL3JlY29pbC91c2VySWQnO1xuY29uc3QgRmlsZUhlYWRlciA9ICgpPT57XG4gICAgY29uc3QgW21vZGFsSXNPcGVuLCBzZXRNb2RhbElzT3Blbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gICAgY29uc3QgW2N1cnJlbnRGaWxlSW5mbywgc2V0Q3VycmVudEZpbGVJbmZvXSA9IHVzZVJlY29pbFN0YXRlKGZpbGVJbmZvKTtcbiAgICBjb25zdCBbZmlsZU5hbWUsIHNldEZpbGVOYW1lXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gICAgY29uc3QgZGVib3VuY2VkTmFtZSA9IHVzZURlYm91bmNlKGZpbGVOYW1lLCA1MDApO1xuICAgIGNvbnN0IHVzZXJJZCA9IHVzZVJlY29pbFZhbHVlKHVzZXJfaWQpXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgbW9kaWZ5RmlsZU5hbWVBc3luYyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICBpZiAoY3VycmVudEZpbGVJbmZvICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmIChhd2FpdCBtb2RpZnlGaWxlTmFtZSh1c2VySWQsIGN1cnJlbnRGaWxlSW5mbywgZGVib3VuY2VkTmFtZSkpIHtcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50RmlsZUluZm8oeyAuLi5jdXJyZW50RmlsZUluZm8sIGZpbGVOYW1lOiBkZWJvdW5jZWROYW1lIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIFxuICAgICAgICBtb2RpZnlGaWxlTmFtZUFzeW5jKCk7XG4gICAgICB9LCBbZGVib3VuY2VkTmFtZV0pO1xuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBpZiAoY3VycmVudEZpbGVJbmZvIT09dW5kZWZpbmVkICl7XG4gICAgICAgICAgICBzZXRGaWxlTmFtZShjdXJyZW50RmlsZUluZm8/LmZpbGVOYW1lKVxuICAgICAgICB9XG4gICAgfSxbXSlcbiAgICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnRDb250YWluZXJ9PlxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9gfT5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9sb2dvLmpwZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxMDB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBvYmplY3RGaXQ6ICdjb3ZlcicsIG1hcmdpbkxlZnQ6MjB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiU3luYy1Db2Rlc1wiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17Y3VycmVudEZpbGVJbmZvPy5maWxlTmFtZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5maWxlTmFtZX1cbiAgICAgICAgICAgICAgICB2YWx1ZT17ZmlsZU5hbWV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+c2V0RmlsZU5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmlnaHRDb250YWluZXJ9PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRGaWxlSW5mbz8ucm9sZSA9PT0gUm9sZS5BRE1JTiAmJlxuICAgICAgICAgICAgICAgIDxJbWFnZSBcbiAgICAgICAgICAgICAgICBzcmM9Jy9zaGFyZUljb24ucG5nJyBcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjUwXCJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCI1MFwiXG4gICAgICAgICAgICAgICAgYWx0PVwi6rO17Jyg7ZWY6riwXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbjogXCIwIDE1cHhcIn19XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCk9PnNldE1vZGFsSXNPcGVuKHRydWUpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8QXV0aG9yaXR5TW9kYWwgXG4gICAgICAgICAgICAgICAgbW9kYWxJc09wZW49e21vZGFsSXNPcGVufVxuICAgICAgICAgICAgICAgIHNldE1vZGFsSXNPcGVuPXtzZXRNb2RhbElzT3Blbn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8TG9naW5Cb3gvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj4pXG59XG5leHBvcnQgZGVmYXVsdCBGaWxlSGVhZGVyOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiSW1hZ2UiLCJMaW5rIiwiTG9naW5Cb3giLCJBdXRob3JpdHlNb2RhbCIsImZpbGVJbmZvIiwidXNlUmVjb2lsU3RhdGUiLCJ1c2VSZWNvaWxWYWx1ZSIsIm1vZGlmeUZpbGVOYW1lIiwidXNlRGVib3VuY2UiLCJ1c2VyX2lkIiwiRmlsZUhlYWRlciIsIm1vZGFsSXNPcGVuIiwic2V0TW9kYWxJc09wZW4iLCJjdXJyZW50RmlsZUluZm8iLCJzZXRDdXJyZW50RmlsZUluZm8iLCJmaWxlTmFtZSIsInNldEZpbGVOYW1lIiwiZGVib3VuY2VkTmFtZSIsInVzZXJJZCIsIm1vZGlmeUZpbGVOYW1lQXN5bmMiLCJ1bmRlZmluZWQiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJsZWZ0Q29udGFpbmVyIiwiaHJlZiIsInNyYyIsIndpZHRoIiwiaGVpZ2h0Iiwic3R5bGUiLCJvYmplY3RGaXQiLCJtYXJnaW5MZWZ0IiwiYWx0IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInJpZ2h0Q29udGFpbmVyIiwicm9sZSIsIlJvbGUiLCJBRE1JTiIsIm1hcmdpbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/component/organisms/fileHeader/index.tsx\n"));

/***/ })

});