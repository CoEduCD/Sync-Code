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

/***/ "(app-pages-browser)/./src/component/molcules/authorityModal/index.tsx":
/*!*********************************************************!*\
  !*** ./src/component/molcules/authorityModal/index.tsx ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthorityModal: function() { return /* binding */ AuthorityModal; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modal_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.styles */ \"(app-pages-browser)/./src/component/molcules/authorityModal/modal.styles.ts\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-modal */ \"(app-pages-browser)/./node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles.module.scss */ \"(app-pages-browser)/./src/component/molcules/authorityModal/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recoil */ \"(app-pages-browser)/./node_modules/recoil/es/index.js\");\n/* harmony import */ var _recoil_fileInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/recoil/fileInfo */ \"(app-pages-browser)/./src/recoil/fileInfo.ts\");\n/* harmony import */ var _recoil_userId__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/recoil/userId */ \"(app-pages-browser)/./src/recoil/userId.ts\");\n/* harmony import */ var _api_authority_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/api/authority/api */ \"(app-pages-browser)/./src/api/authority/api.ts\");\n/* harmony import */ var _accessUserBox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../accessUserBox */ \"(app-pages-browser)/./src/component/molcules/accessUserBox/index.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst AuthorityModal = (param)=>{\n    let { modalIsOpen, setModalIsOpen } = param;\n    _s();\n    const closeModal = ()=>{\n        setModalIsOpen(false);\n    };\n    const [currentFileInfo, setCurrentFileInfo] = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState)(_recoil_fileInfo__WEBPACK_IMPORTED_MODULE_5__.fileInfo);\n    const [list, setList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const userId = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilValue)(_recoil_userId__WEBPACK_IMPORTED_MODULE_6__.user_id);\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isCopied, setIsCopied] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleAddAuthority = async ()=>{\n        if (currentFileInfo !== undefined) {\n            if (await (0,_api_authority_api__WEBPACK_IMPORTED_MODULE_7__.addAuthority)(currentFileInfo === null || currentFileInfo === void 0 ? void 0 : currentFileInfo.fileId, userId, email)) {\n                (0,_api_authority_api__WEBPACK_IMPORTED_MODULE_7__.getAuthority)(currentFileInfo === null || currentFileInfo === void 0 ? void 0 : currentFileInfo.fileId, setList);\n            }\n        }\n    };\n    const handleCopyClick = ()=>{\n        // 텍스트를 클립보드에 복사하는 로직\n        const textToCopy = window.location.href;\n        console.log(textToCopy);\n        navigator.clipboard.writeText(textToCopy).then(()=>{\n            alert(\"주소가 복사되었습니다\");\n            setIsCopied(true);\n            setTimeout(()=>setIsCopied(false), 1500); // 1.5초 후에 메시지를 숨깁니다.\n        }).catch((err)=>{\n            console.error(\"클립보드 복사 실패:\", err);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (currentFileInfo !== undefined) {\n            (0,_api_authority_api__WEBPACK_IMPORTED_MODULE_7__.getAuthority)(currentFileInfo === null || currentFileInfo === void 0 ? void 0 : currentFileInfo.fileId, setList);\n        }\n    }, []);\n    return modalIsOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_modal__WEBPACK_IMPORTED_MODULE_3___default()), {\n        isOpen: modalIsOpen,\n        onRequestClose: closeModal,\n        style: _modal_styles__WEBPACK_IMPORTED_MODULE_2__.customStyles,\n        contentLabel: \"확인\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().fileName),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: [\n                                ' \"',\n                                currentFileInfo === null || currentFileInfo === void 0 ? void 0 : currentFileInfo.fileName,\n                                '\"'\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/molcules/authorityModal/index.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 46\n                        }, undefined),\n                        \"공유\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/molcules/authorityModal/index.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().addContainer),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().addEmail),\n                            type: \"text\",\n                            value: email,\n                            onChange: (e)=>{\n                                setEmail(e.target.value);\n                            },\n                            placeholder: \"사용자 및 권한 추가\"\n                        }, void 0, false, {\n                            fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/molcules/authorityModal/index.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().addButton),\n                            onClick: ()=>handleAddAuthority(),\n                            children: \"추가\"\n                        }, void 0, false, {\n                            fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/molcules/authorityModal/index.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/molcules/authorityModal/index.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().accessList),\n                    children: \"엑세스 권한이 있는 사용자\"\n                }, void 0, false, {\n                    fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/molcules/authorityModal/index.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().accessListContainer),\n                    children: list !== undefined && list.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_accessUserBox__WEBPACK_IMPORTED_MODULE_8__.AccessUserBox, {\n                            user: item,\n                            setUser: setList\n                        }, item.userId, false, {\n                            fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/molcules/authorityModal/index.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 19\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/molcules/authorityModal/index.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().buttonContainer),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>handleCopyClick(),\n                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().shareButton),\n                            children: \"링크 복사\"\n                        }, void 0, false, {\n                            fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/molcules/authorityModal/index.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 18\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>setModalIsOpen(false),\n                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().closeButton),\n                            children: \"완료\"\n                        }, void 0, false, {\n                            fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/molcules/authorityModal/index.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/molcules/authorityModal/index.tsx\",\n                    lineNumber: 83,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/molcules/authorityModal/index.tsx\",\n            lineNumber: 55,\n            columnNumber: 11\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/molcules/authorityModal/index.tsx\",\n        lineNumber: 54,\n        columnNumber: 9\n    }, undefined);\n};\n_s(AuthorityModal, \"kNvwBV/L3QeUseYoBUC9DvqNFCg=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilValue\n    ];\n});\n_c = AuthorityModal;\nvar _c;\n$RefreshReg$(_c, \"AuthorityModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnQvbW9sY3VsZXMvYXV0aG9yaXR5TW9kYWwvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDSDtBQUNkO0FBQ1M7QUFDZTtBQUNYO0FBQ0g7QUFDeUQ7QUFFbEQ7QUFNMUMsTUFBTWEsaUJBQWlCO1FBQUMsRUFBRUMsV0FBVyxFQUFFQyxjQUFjLEVBQW1COztJQUMzRSxNQUFNQyxhQUFhO1FBQ2ZELGVBQWU7SUFDakI7SUFDQSxNQUFNLENBQUNFLGlCQUFpQkMsbUJBQW1CLEdBQUdaLHNEQUFjQSxDQUFDRSxzREFBUUE7SUFDckUsTUFBTSxDQUFDVyxNQUFNQyxRQUFRLEdBQUduQiwrQ0FBUUE7SUFDaEMsTUFBTW9CLFNBQVNkLHNEQUFjQSxDQUFDRSxtREFBT0E7SUFDckMsTUFBTSxDQUFDYSxPQUFPQyxTQUFTLEdBQUd0QiwrQ0FBUUEsQ0FBUztJQUMzQyxNQUFNLENBQUN1QixVQUFVQyxZQUFZLEdBQUd4QiwrQ0FBUUEsQ0FBVTtJQUNsRCxNQUFNeUIscUJBQXFCO1FBQ3pCLElBQUlULG9CQUFtQlUsV0FBVTtZQUMvQixJQUFJLE1BQU1qQixnRUFBWUEsQ0FBQ08sNEJBQUFBLHNDQUFBQSxnQkFBaUJXLE1BQU0sRUFBRVAsUUFBUUMsUUFBTztnQkFDN0RYLGdFQUFZQSxDQUFDTSw0QkFBQUEsc0NBQUFBLGdCQUFpQlcsTUFBTSxFQUFFUjtZQUN4QztRQUNGO0lBQ0Y7SUFDQSxNQUFNUyxrQkFBa0I7UUFDdEIscUJBQXFCO1FBQ3JCLE1BQU1DLGFBQWNDLE9BQU9DLFFBQVEsQ0FBQ0MsSUFBSTtRQUN4Q0MsUUFBUUMsR0FBRyxDQUFDTDtRQUNaTSxVQUFVQyxTQUFTLENBQUNDLFNBQVMsQ0FBQ1IsWUFDM0JTLElBQUksQ0FBQztZQUNKQyxNQUFNO1lBQ05mLFlBQVk7WUFDWmdCLFdBQVcsSUFBTWhCLFlBQVksUUFBUSxPQUFPLHFCQUFxQjtRQUNuRSxHQUNDaUIsS0FBSyxDQUFDLENBQUNDO1lBQ05ULFFBQVFVLEtBQUssQ0FBQyxlQUFlRDtRQUMvQjtJQUNKO0lBQ0F6QyxnREFBU0EsQ0FBQztRQUNSLElBQUllLG9CQUFtQlUsV0FBVztZQUNoQ2hCLGdFQUFZQSxDQUFDTSw0QkFBQUEsc0NBQUFBLGdCQUFpQlcsTUFBTSxFQUFFUjtRQUN4QztJQUNGLEdBQUUsRUFBRTtJQUVOLE9BQ0FOLDZCQUNJLDhEQUFDVixvREFBS0E7UUFBQ3lDLFFBQVEvQjtRQUFhZ0MsZ0JBQWdCOUI7UUFBWStCLE9BQU81Qyx1REFBWUE7UUFBRTZDLGNBQWE7a0JBQ3hGLDRFQUFDQztZQUFJQyxXQUFXN0Msc0VBQWdCOzs4QkFDOUIsOERBQUM0QztvQkFBSUMsV0FBVzdDLHFFQUFlOztzQ0FBRSw4REFBQ2dEOztnQ0FBSztnQ0FBUXBDLDRCQUFBQSxzQ0FBQUEsZ0JBQWlCbUMsUUFBUTtnQ0FBQzs7Ozs7Ozt3QkFBYTs7Ozs7Ozs4QkFDdEYsOERBQUNIO29CQUFJQyxXQUFXN0MseUVBQW1COztzQ0FDakMsOERBQUNrRDs0QkFDQ0wsV0FBVzdDLHFFQUFlOzRCQUMxQm9ELE1BQUs7NEJBQ0xDLE9BQU9wQzs0QkFDUHFDLFVBQVUsQ0FBQ0M7Z0NBQ1RyQyxTQUFTcUMsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzRCQUN6Qjs0QkFDQUksYUFBWTs7Ozs7O3NDQUVkLDhEQUFDQzs0QkFDQ2IsV0FBVzdDLHNFQUFnQjs0QkFDM0I0RCxTQUFTLElBQUl2QztzQ0FDZDs7Ozs7Ozs7Ozs7OzhCQUlILDhEQUFDdUI7b0JBQUlDLFdBQVc3Qyx1RUFBaUI7OEJBQUU7Ozs7Ozs4QkFDbkMsOERBQUM0QztvQkFBSUMsV0FBVzdDLGdGQUEwQjs4QkFFdENjLFNBQU9RLGFBQWFSLEtBQUtpRCxHQUFHLENBQzVCLENBQUNDLHFCQUNDLDhEQUFDekQseURBQWFBOzRCQUFDMEQsTUFBTUQ7NEJBQU1FLFNBQVNuRDsyQkFBY2lELEtBQUtoRCxNQUFNOzs7Ozs7Ozs7OzhCQUluRSw4REFBQzRCO29CQUFJQyxXQUFXN0MsNEVBQXNCOztzQ0FDakMsOERBQUMwRDs0QkFDRUUsU0FBUyxJQUFJcEM7NEJBQ2JxQixXQUFXN0Msd0VBQWtCO3NDQUM5Qjs7Ozs7O3NDQUdILDhEQUFDMEQ7NEJBQ0dFLFNBQVMsSUFBSWxELGVBQWU7NEJBQzVCbUMsV0FBVzdDLHdFQUFrQjtzQ0FDOUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT25CLEVBQUM7R0FwRllROztRQUl1Q1Asa0RBQWNBO1FBRTdDQyxrREFBY0E7OztLQU50Qk0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudC9tb2xjdWxlcy9hdXRob3JpdHlNb2RhbC9pbmRleC50c3g/NzUwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGN1c3RvbVN0eWxlcyB9IGZyb20gXCIuL21vZGFsLnN0eWxlc1wiO1xuaW1wb3J0IE1vZGFsIGZyb20gXCJyZWFjdC1tb2RhbFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2NzcydcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlLCB1c2VSZWNvaWxWYWx1ZSB9IGZyb20gXCJyZWNvaWxcIjtcbmltcG9ydCB7IGZpbGVJbmZvIH0gZnJvbSBcIkAvcmVjb2lsL2ZpbGVJbmZvXCI7XG5pbXBvcnQgeyB1c2VyX2lkIH0gZnJvbSBcIkAvcmVjb2lsL3VzZXJJZFwiO1xuaW1wb3J0IHsgYWRkQXV0aG9yaXR5LCBkZWxldGVBdXRob3JpdHksIGdldEF1dGhvcml0eSwgbW9kaWZ5QXV0aG9yaXR5IH0gZnJvbSBcIkAvYXBpL2F1dGhvcml0eS9hcGlcIjtcbmltcG9ydCB7IGZpbGVBdXRob3JpdHkgfSBmcm9tIFwiQC9AdHlwZS9hdXRob3JpdHkvaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBBY2Nlc3NVc2VyQm94IH0gZnJvbSBcIi4uL2FjY2Vzc1VzZXJCb3hcIjtcbmludGVyZmFjZSBDdXN0b21Nb2RhbFByb3BzIHtcbiAgICBtb2RhbElzT3BlbjogYm9vbGVhbjtcbiAgICBzZXRNb2RhbElzT3BlbjogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248Ym9vbGVhbj4+O1xuICB9XG4gIFxuZXhwb3J0IGNvbnN0IEF1dGhvcml0eU1vZGFsID0gKHsgbW9kYWxJc09wZW4sIHNldE1vZGFsSXNPcGVufTogQ3VzdG9tTW9kYWxQcm9wcykgPT4ge1xuICAgIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgICAgIHNldE1vZGFsSXNPcGVuKGZhbHNlKTtcbiAgICAgIH07XG4gICAgICBjb25zdCBbY3VycmVudEZpbGVJbmZvLCBzZXRDdXJyZW50RmlsZUluZm9dID0gdXNlUmVjb2lsU3RhdGUoZmlsZUluZm8pO1xuICAgICAgY29uc3QgW2xpc3QsIHNldExpc3RdID0gdXNlU3RhdGU8ZmlsZUF1dGhvcml0eVtdfHVuZGVmaW5lZD4oKTtcbiAgICAgIGNvbnN0IHVzZXJJZCA9IHVzZVJlY29pbFZhbHVlKHVzZXJfaWQpO1xuICAgICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICAgICAgY29uc3QgW2lzQ29waWVkLCBzZXRJc0NvcGllZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gICAgICBjb25zdCBoYW5kbGVBZGRBdXRob3JpdHkgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGlmIChjdXJyZW50RmlsZUluZm8hPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICBpZiAoYXdhaXQgYWRkQXV0aG9yaXR5KGN1cnJlbnRGaWxlSW5mbz8uZmlsZUlkLCB1c2VySWQsIGVtYWlsKSl7XG4gICAgICAgICAgICBnZXRBdXRob3JpdHkoY3VycmVudEZpbGVJbmZvPy5maWxlSWQsIHNldExpc3QpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zdCBoYW5kbGVDb3B5Q2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIC8vIO2FjeyKpO2KuOulvCDtgbTrpr3rs7Trk5zsl5Ag67O17IKs7ZWY64qUIOuhnOyngVxuICAgICAgICBjb25zdCB0ZXh0VG9Db3B5ID0gIHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICBjb25zb2xlLmxvZyh0ZXh0VG9Db3B5KVxuICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh0ZXh0VG9Db3B5KVxuICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGFsZXJ0KFwi7KO87IaM6rCAIOuzteyCrOuQmOyXiOyKteuLiOuLpFwiKVxuICAgICAgICAgICAgc2V0SXNDb3BpZWQodHJ1ZSk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNldElzQ29waWVkKGZhbHNlKSwgMTUwMCk7IC8vIDEuNey0iCDtm4Tsl5Ag66mU7Iuc7KeA66W8IOyIqOq5geuLiOuLpC5cbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCftgbTrpr3rs7Trk5wg67O17IKsIOyLpO2MqDonLCBlcnIpO1xuICAgICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBpZiAoY3VycmVudEZpbGVJbmZvIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGdldEF1dGhvcml0eShjdXJyZW50RmlsZUluZm8/LmZpbGVJZCwgc2V0TGlzdClcbiAgICAgICAgfVxuICAgICAgfSxbXSlcblxuICAgIHJldHVybihcbiAgICBtb2RhbElzT3BlbiAmJiBcbiAgICAgICAgPE1vZGFsIGlzT3Blbj17bW9kYWxJc09wZW59IG9uUmVxdWVzdENsb3NlPXtjbG9zZU1vZGFsfSBzdHlsZT17Y3VzdG9tU3R5bGVzfSBjb250ZW50TGFiZWw9XCLtmZXsnbhcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpbGVOYW1lfT48c3Bhbj4gJnF1b3Q7e2N1cnJlbnRGaWxlSW5mbz8uZmlsZU5hbWV9JnF1b3Q7PC9zcGFuPuqzteycoDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZGRDb250YWluZXJ9PlxuICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYWRkRW1haWx9IFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pik9PntcbiAgICAgICAgICAgICAgICAgIHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLsgqzsmqnsnpAg67CPIOq2jO2VnCDstpTqsIBcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFkZEJ1dHRvbn1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+aGFuZGxlQWRkQXV0aG9yaXR5KCl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAg7LaU6rCAXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjY2Vzc0xpc3R9PuyXkeyEuOyKpCDqtoztlZzsnbQg7J6I64qUIOyCrOyaqeyekDwvZGl2PiBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWNjZXNzTGlzdENvbnRhaW5lcn0+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsaXN0IT09dW5kZWZpbmVkICYmIGxpc3QubWFwKFxuICAgICAgICAgICAgICAgIChpdGVtKT0+XG4gICAgICAgICAgICAgICAgICA8QWNjZXNzVXNlckJveCB1c2VyPXtpdGVtfSBzZXRVc2VyPXtzZXRMaXN0fSBrZXk9e2l0ZW0udXNlcklkfS8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj4gICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25Db250YWluZXJ9PlxuICAgICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+aGFuZGxlQ29weUNsaWNrKCl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNoYXJlQnV0dG9ufVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICDrp4Htgawg67O17IKsXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PnNldE1vZGFsSXNPcGVuKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2xvc2VCdXR0b259XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIOyZhOujjFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiY3VzdG9tU3R5bGVzIiwiTW9kYWwiLCJzdHlsZXMiLCJ1c2VSZWNvaWxTdGF0ZSIsInVzZVJlY29pbFZhbHVlIiwiZmlsZUluZm8iLCJ1c2VyX2lkIiwiYWRkQXV0aG9yaXR5IiwiZ2V0QXV0aG9yaXR5IiwiQWNjZXNzVXNlckJveCIsIkF1dGhvcml0eU1vZGFsIiwibW9kYWxJc09wZW4iLCJzZXRNb2RhbElzT3BlbiIsImNsb3NlTW9kYWwiLCJjdXJyZW50RmlsZUluZm8iLCJzZXRDdXJyZW50RmlsZUluZm8iLCJsaXN0Iiwic2V0TGlzdCIsInVzZXJJZCIsImVtYWlsIiwic2V0RW1haWwiLCJpc0NvcGllZCIsInNldElzQ29waWVkIiwiaGFuZGxlQWRkQXV0aG9yaXR5IiwidW5kZWZpbmVkIiwiZmlsZUlkIiwiaGFuZGxlQ29weUNsaWNrIiwidGV4dFRvQ29weSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImNvbnNvbGUiLCJsb2ciLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ0aGVuIiwiYWxlcnQiLCJzZXRUaW1lb3V0IiwiY2F0Y2giLCJlcnIiLCJlcnJvciIsImlzT3BlbiIsIm9uUmVxdWVzdENsb3NlIiwic3R5bGUiLCJjb250ZW50TGFiZWwiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJmaWxlTmFtZSIsInNwYW4iLCJhZGRDb250YWluZXIiLCJpbnB1dCIsImFkZEVtYWlsIiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJhZGRCdXR0b24iLCJvbkNsaWNrIiwiYWNjZXNzTGlzdCIsImFjY2Vzc0xpc3RDb250YWluZXIiLCJtYXAiLCJpdGVtIiwidXNlciIsInNldFVzZXIiLCJidXR0b25Db250YWluZXIiLCJzaGFyZUJ1dHRvbiIsImNsb3NlQnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/component/molcules/authorityModal/index.tsx\n"));

/***/ })

});