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

/***/ "(app-pages-browser)/./src/component/organisms/chatting/index.tsx":
/*!****************************************************!*\
  !*** ./src/component/organisms/chatting/index.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Chatting: function() { return /* binding */ Chatting; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.module.scss */ \"(app-pages-browser)/./src/component/organisms/chatting/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ \"(app-pages-browser)/./node_modules/recoil/es/index.js\");\n/* harmony import */ var _recoil_fileInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/recoil/fileInfo */ \"(app-pages-browser)/./src/recoil/fileInfo.ts\");\n/* __next_internal_client_entry_do_not_use__ Chatting auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Chatting = (param)=>{\n    let { socket, username, roomId } = param;\n    _s();\n    const [currentFileInfo, setCurrentFileInfo] = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilState)(_recoil_fileInfo__WEBPACK_IMPORTED_MODULE_4__.fileInfo);\n    const [currentMsg, setCurrentMsg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [chat, setChat] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [isConnected, setIsConnected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const sendData = async ()=>{\n        if (currentMsg !== \"\") {\n            const msgData = {\n                roomId,\n                user: username,\n                msg: currentMsg,\n                time: new Date(Date.now()).getHours() + \":\" + new Date(Date.now()).getMinutes()\n            };\n            await socket.emit(\"send_msg\", msgData);\n            setCurrentMsg(\"\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!isConnected) {\n            const handleNewMessage = (data)=>{\n                setChat((prev)=>[\n                        ...prev,\n                        data\n                    ]);\n            };\n            socket.on(\"receive_msg\", handleNewMessage);\n        }\n        return ()=>{\n            setIsConnected(true);\n        };\n    }, [\n        socket\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"28%\",\n            backgroundColor: \"white\",\n            height: \"82vh\",\n            borderRadius: 20,\n            position: \"relative\",\n            color: \"black\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().chat_border),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: chat.map((param, key)=>/*#__PURE__*/ {\n                        let { roomId, user, msg, time } = param;\n                        return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: user == username ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().chatProfileRight) : (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().chatProfileLeft),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().chatProfileSpan),\n                                    style: {\n                                        textAlign: user == username ? \"right\" : \"left\"\n                                    },\n                                    children: user.charAt(0)\n                                }, void 0, false, {\n                                    fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/chatting/index.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    style: {\n                                        textAlign: user == username ? \"right\" : \"left\"\n                                    },\n                                    children: msg\n                                }, void 0, false, {\n                                    fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/chatting/index.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, key, true, {\n                            fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/chatting/index.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 17\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/chatting/index.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: (e)=>{\n                            e.preventDefault();\n                            sendData();\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: currentMsg,\n                                placeholder: \"Type your message..\",\n                                onChange: (e)=>setCurrentMsg(e.target.value),\n                                style: {\n                                    position: \"absolute\",\n                                    backgroundColor: \"white\",\n                                    color: \"black\",\n                                    border: \"2px solid\",\n                                    borderRadius: 20,\n                                    borderColor: \"#E3E3E3\",\n                                    paddingLeft: 10,\n                                    bottom: 20,\n                                    left: 0,\n                                    width: \"90%\",\n                                    height: \"40px\",\n                                    transform: \"translateX(5%)\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/chatting/index.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: \"/paper-plane.png\",\n                                width: 25,\n                                height: 25,\n                                style: {\n                                    objectFit: \"cover\"\n                                },\n                                alt: \"Sync-Codes\",\n                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().image),\n                                onClick: ()=>{\n                                    sendData();\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/chatting/index.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/chatting/index.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/chatting/index.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/chatting/index.tsx\",\n            lineNumber: 50,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/chatting/index.tsx\",\n        lineNumber: 49,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Chatting, \"b6UQYvsTQ5iRecaK8TNoRFfz7sE=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilState\n    ];\n});\n_c = Chatting;\nvar _c;\n$RefreshReg$(_c, \"Chatting\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnQvb3JnYW5pc21zL2NoYXR0aW5nL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDbUQ7QUFDcEI7QUFDVztBQUNGO0FBQ0s7QUFTdEMsTUFBTU8sV0FBVztRQUFDLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxNQUFNLEVBQU87O0lBQ3RELE1BQU0sQ0FBQ0MsaUJBQWlCQyxtQkFBbUIsR0FBR1Asc0RBQWNBLENBQUNDLHNEQUFRQTtJQUNyRSxNQUFNLENBQUNPLFlBQVlDLGNBQWMsR0FBR1osK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDYSxNQUFNQyxRQUFRLEdBQUdkLCtDQUFRQSxDQUFrQixFQUFFO0lBQ3BELE1BQU0sQ0FBQ2UsYUFBYUMsZUFBZSxHQUFJaEIsK0NBQVFBLENBQVU7SUFDekQsTUFBTWlCLFdBQVc7UUFDYixJQUFJTixlQUFlLElBQUk7WUFDdkIsTUFBTU8sVUFBeUI7Z0JBQzNCVjtnQkFDQVcsTUFBTVo7Z0JBQ05hLEtBQUtUO2dCQUNMVSxNQUNBLElBQUlDLEtBQUtBLEtBQUtDLEdBQUcsSUFBSUMsUUFBUSxLQUM3QixNQUNBLElBQUlGLEtBQUtBLEtBQUtDLEdBQUcsSUFBSUUsVUFBVTtZQUNuQztZQUNBLE1BQU1uQixPQUFPb0IsSUFBSSxDQUFDLFlBQVlSO1lBQzlCTixjQUFjO1FBQ2Q7SUFDSjtJQUNBYixnREFBU0EsQ0FBQztRQUNOLElBQUksQ0FBQ2dCLGFBQVk7WUFDYixNQUFNWSxtQkFBbUIsQ0FBQ0M7Z0JBQ3RCZCxRQUFRLENBQUNlLE9BQVM7MkJBQUlBO3dCQUFNRDtxQkFBSztZQUNyQztZQUVBdEIsT0FBT3dCLEVBQUUsQ0FBQyxlQUFlSDtRQUM3QjtRQUNBLE9BQU87WUFDSFgsZUFBZTtRQUNuQjtJQUNKLEdBQUc7UUFBQ1Y7S0FBTztJQUVYLHFCQUNJLDhEQUFDeUI7UUFBSUMsT0FBTztZQUFDQyxPQUFPO1lBQU9DLGlCQUFnQjtZQUFTQyxRQUFRO1lBQU9DLGNBQWM7WUFBSUMsVUFBVTtZQUFZQyxPQUFNO1FBQU87a0JBQ3hILDRFQUFDUDtZQUFJUSxXQUFXckMsd0VBQWtCOzs4QkFDOUIsOERBQUM2Qjs4QkFDQWxCLEtBQUs0QixHQUFHLENBQUMsUUFBOEJDOzRCQUE3QixFQUFFbEMsTUFBTSxFQUFFVyxJQUFJLEVBQUVDLEdBQUcsRUFBRUMsSUFBSSxFQUFFOytCQUNsQyw4REFBQ1U7NEJBRURRLFdBQ0lwQixRQUFRWixXQUNOTCw2RUFBdUIsR0FDdkJBLDRFQUFzQjs7OENBRzVCLDhEQUFDMkM7b0NBQ0dOLFdBQVdyQyw0RUFBc0I7b0NBQ2pDOEIsT0FBTzt3Q0FBRWUsV0FBVzVCLFFBQVFaLFdBQVcsVUFBVTtvQ0FBTzs4Q0FFdkRZLEtBQUs2QixNQUFNLENBQUM7Ozs7Ozs4Q0FFakIsOERBQUNDO29DQUFHakIsT0FBTzt3Q0FBRWUsV0FBVzVCLFFBQVFaLFdBQVcsVUFBVTtvQ0FBTzs4Q0FDdkRhOzs7Ozs7OzJCQWRBc0I7Ozs7O29CQWdCQTs7Ozs7OzhCQUdULDhEQUFDWDs4QkFDRyw0RUFBQ21CO3dCQUFLQyxVQUFVLENBQUNDOzRCQUNiQSxFQUFFQyxjQUFjOzRCQUNoQnBDO3dCQUNKOzswQ0FDSSw4REFBQ3FDO2dDQUNHQyxNQUFLO2dDQUNMQyxPQUFPN0M7Z0NBQ1A4QyxhQUFZO2dDQUNaQyxVQUFVLENBQUNOLElBQU14QyxjQUFjd0MsRUFBRU8sTUFBTSxDQUFDSCxLQUFLO2dDQUM3Q3hCLE9BQU87b0NBQUNLLFVBQVU7b0NBQVlILGlCQUFpQjtvQ0FBU0ksT0FBTztvQ0FBU3NCLFFBQU87b0NBQWF4QixjQUFhO29DQUFJeUIsYUFBWTtvQ0FBV0MsYUFBYTtvQ0FBSUMsUUFBUTtvQ0FBSUMsTUFBTTtvQ0FBRy9CLE9BQU87b0NBQU9FLFFBQVE7b0NBQVE4QixXQUFXO2dDQUFnQjs7Ozs7OzBDQUV2Tyw4REFBQ2hFLG1EQUFLQTtnQ0FDTmlFLEtBQUk7Z0NBQ0pqQyxPQUFPO2dDQUNQRSxRQUFRO2dDQUNSSCxPQUFPO29DQUFFbUMsV0FBVztnQ0FBTztnQ0FDM0JDLEtBQUk7Z0NBQ0o3QixXQUFXckMsa0VBQVk7Z0NBQ3ZCb0UsU0FBUztvQ0FDVHJEO2dDQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXBCLEVBQUM7R0FyRllaOztRQUNxQ0Ysa0RBQWNBOzs7S0FEbkRFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnQvb3JnYW5pc21zL2NoYXR0aW5nL2luZGV4LnRzeD9kYjRiIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHsgdXNlUmVjb2lsU3RhdGUgfSBmcm9tICdyZWNvaWwnO1xuaW1wb3J0IHsgZmlsZUluZm8gfSBmcm9tICdAL3JlY29pbC9maWxlSW5mbyc7XG5cbmludGVyZmFjZSBJTXNnRGF0YVR5cGVzIHtcbiAgICByb29tSWQ6IHN0cmluZyB8IG51bWJlcjtcbiAgICB1c2VyOiBzdHJpbmc7XG4gICAgbXNnOiBzdHJpbmc7XG4gICAgdGltZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgQ2hhdHRpbmcgPSAoeyBzb2NrZXQsIHVzZXJuYW1lLCByb29tSWQgfTogYW55KT0+e1xuICAgIGNvbnN0IFtjdXJyZW50RmlsZUluZm8sIHNldEN1cnJlbnRGaWxlSW5mb10gPSB1c2VSZWNvaWxTdGF0ZShmaWxlSW5mbyk7XG4gICAgY29uc3QgW2N1cnJlbnRNc2csIHNldEN1cnJlbnRNc2ddID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW2NoYXQsIHNldENoYXRdID0gdXNlU3RhdGU8SU1zZ0RhdGFUeXBlc1tdPihbXSk7XG4gICAgY29uc3QgW2lzQ29ubmVjdGVkLCBzZXRJc0Nvbm5lY3RlZF0gID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICAgIGNvbnN0IHNlbmREYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBpZiAoY3VycmVudE1zZyAhPT0gXCJcIikge1xuICAgICAgICBjb25zdCBtc2dEYXRhOiBJTXNnRGF0YVR5cGVzID0ge1xuICAgICAgICAgICAgcm9vbUlkLFxuICAgICAgICAgICAgdXNlcjogdXNlcm5hbWUsXG4gICAgICAgICAgICBtc2c6IGN1cnJlbnRNc2csXG4gICAgICAgICAgICB0aW1lOlxuICAgICAgICAgICAgbmV3IERhdGUoRGF0ZS5ub3coKSkuZ2V0SG91cnMoKSArXG4gICAgICAgICAgICBcIjpcIiArXG4gICAgICAgICAgICBuZXcgRGF0ZShEYXRlLm5vdygpKS5nZXRNaW51dGVzKCksXG4gICAgICAgIH07XG4gICAgICAgIGF3YWl0IHNvY2tldC5lbWl0KFwic2VuZF9tc2dcIiwgbXNnRGF0YSk7XG4gICAgICAgIHNldEN1cnJlbnRNc2coXCJcIik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICghaXNDb25uZWN0ZWQpe1xuICAgICAgICAgICAgY29uc3QgaGFuZGxlTmV3TWVzc2FnZSA9IChkYXRhOiBJTXNnRGF0YVR5cGVzKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0Q2hhdCgocHJldikgPT4gWy4uLnByZXYsIGRhdGFdKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICAgICAgc29ja2V0Lm9uKFwicmVjZWl2ZV9tc2dcIiwgaGFuZGxlTmV3TWVzc2FnZSk7ICAgIFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBzZXRJc0Nvbm5lY3RlZCh0cnVlKTtcbiAgICAgICAgfTtcbiAgICB9LCBbc29ja2V0XSk7XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogJzI4JScsIGJhY2tncm91bmRDb2xvcjond2hpdGUnLCBoZWlnaHQ6ICc4MnZoJyxib3JkZXJSYWRpdXM6IDIwLCBwb3NpdGlvbjogJ3JlbGF0aXZlJywgY29sb3I6J2JsYWNrJ319PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYXRfYm9yZGVyfT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7Y2hhdC5tYXAoKHsgcm9vbUlkLCB1c2VyLCBtc2csIHRpbWUgfSwga2V5KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgIHVzZXIgPT0gdXNlcm5hbWVcbiAgICAgICAgICAgICAgICAgICAgPyBzdHlsZXMuY2hhdFByb2ZpbGVSaWdodFxuICAgICAgICAgICAgICAgICAgICA6IHN0eWxlcy5jaGF0UHJvZmlsZUxlZnRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNoYXRQcm9maWxlU3Bhbn1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdGV4dEFsaWduOiB1c2VyID09IHVzZXJuYW1lID8gXCJyaWdodFwiIDogXCJsZWZ0XCIgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHt1c2VyLmNoYXJBdCgwKX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7IHRleHRBbGlnbjogdXNlciA9PSB1c2VybmFtZSA/IFwicmlnaHRcIiA6IFwibGVmdFwiIH19PlxuICAgICAgICAgICAgICAgICAgICB7bXNnfVxuICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpPT57XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgc2VuZERhdGEoKVxuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y3VycmVudE1zZ31cbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIG1lc3NhZ2UuLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEN1cnJlbnRNc2coZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twb3NpdGlvbjogJ2Fic29sdXRlJyAsYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBjb2xvcjogJ2JsYWNrJywgYm9yZGVyOicycHggc29saWQnLCBib3JkZXJSYWRpdXM6MjAsIGJvcmRlckNvbG9yOicjRTNFM0UzJywgcGFkZGluZ0xlZnQ6IDEwLCBib3R0b206IDIwLCBsZWZ0OiAwLCB3aWR0aDogJzkwJScsIGhlaWdodDogJzQwcHgnLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDUlKSd9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiL3BhcGVyLXBsYW5lLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXsyNX1cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyNX1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgb2JqZWN0Rml0OiAnY292ZXInfX1cbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiU3luYy1Db2Rlc1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+e1xuICAgICAgICAgICAgICAgICAgICBzZW5kRGF0YSgpXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj4pXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsInN0eWxlcyIsInVzZVJlY29pbFN0YXRlIiwiZmlsZUluZm8iLCJDaGF0dGluZyIsInNvY2tldCIsInVzZXJuYW1lIiwicm9vbUlkIiwiY3VycmVudEZpbGVJbmZvIiwic2V0Q3VycmVudEZpbGVJbmZvIiwiY3VycmVudE1zZyIsInNldEN1cnJlbnRNc2ciLCJjaGF0Iiwic2V0Q2hhdCIsImlzQ29ubmVjdGVkIiwic2V0SXNDb25uZWN0ZWQiLCJzZW5kRGF0YSIsIm1zZ0RhdGEiLCJ1c2VyIiwibXNnIiwidGltZSIsIkRhdGUiLCJub3ciLCJnZXRIb3VycyIsImdldE1pbnV0ZXMiLCJlbWl0IiwiaGFuZGxlTmV3TWVzc2FnZSIsImRhdGEiLCJwcmV2Iiwib24iLCJkaXYiLCJzdHlsZSIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwicG9zaXRpb24iLCJjb2xvciIsImNsYXNzTmFtZSIsImNoYXRfYm9yZGVyIiwibWFwIiwia2V5IiwiY2hhdFByb2ZpbGVSaWdodCIsImNoYXRQcm9maWxlTGVmdCIsInNwYW4iLCJjaGF0UHJvZmlsZVNwYW4iLCJ0ZXh0QWxpZ24iLCJjaGFyQXQiLCJoMyIsImZvcm0iLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInRhcmdldCIsImJvcmRlciIsImJvcmRlckNvbG9yIiwicGFkZGluZ0xlZnQiLCJib3R0b20iLCJsZWZ0IiwidHJhbnNmb3JtIiwic3JjIiwib2JqZWN0Rml0IiwiYWx0IiwiaW1hZ2UiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/component/organisms/chatting/index.tsx\n"));

/***/ })

});