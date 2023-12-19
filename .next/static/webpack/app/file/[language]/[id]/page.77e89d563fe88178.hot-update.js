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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Chatting: function() { return /* binding */ Chatting; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.scss */ \"(app-pages-browser)/./src/component/organisms/chatting/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"(app-pages-browser)/./node_modules/recoil/es/index.js\");\n/* harmony import */ var _recoil_fileInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/recoil/fileInfo */ \"(app-pages-browser)/./src/recoil/fileInfo.ts\");\n/* __next_internal_client_entry_do_not_use__ Chatting auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Chatting = (param)=>{\n    let { socket, username, roomId } = param;\n    _s();\n    const [currentFileInfo, setCurrentFileInfo] = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_recoil_fileInfo__WEBPACK_IMPORTED_MODULE_3__.fileInfo);\n    const [currentMsg, setCurrentMsg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [chat, setChat] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(username);\n        console.log(roomId);\n    }, []);\n    const sendData = async (e)=>{\n        e.preventDefault();\n        if (currentMsg !== \"\") {\n            const msgData = {\n                roomId,\n                user: username,\n                msg: currentMsg,\n                time: new Date(Date.now()).getHours() + \":\" + new Date(Date.now()).getMinutes()\n            };\n            await socket.emit(\"send_msg\", msgData);\n            setCurrentMsg(\"\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        socket.on(\"receive_msg\", (data)=>{\n            console.log(\"receive\");\n            console.log(data);\n            setChat((pre)=>[\n                    ...pre,\n                    data\n                ]);\n        });\n    }, [\n        socket\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"28%\",\n            backgroundColor: \"white\",\n            height: \"82vh\",\n            borderRadius: 20,\n            position: \"relative\",\n            color: \"black\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().chat_border),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: chat.map((param, key)=>/*#__PURE__*/ {\n                        let { roomId, user, msg, time } = param;\n                        return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: user == username ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().chatProfileRight) : (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().chatProfileLeft),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().chatProfileSpan),\n                                    style: {\n                                        textAlign: user == username ? \"right\" : \"left\"\n                                    },\n                                    children: user.charAt(0)\n                                }, void 0, false, {\n                                    fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/chatting/index.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    style: {\n                                        textAlign: user == username ? \"right\" : \"left\"\n                                    },\n                                    children: msg\n                                }, void 0, false, {\n                                    fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/chatting/index.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, key, true, {\n                            fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/chatting/index.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 17\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/chatting/index.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: (e)=>sendData(e),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().chat_input),\n                                type: \"text\",\n                                value: currentMsg,\n                                placeholder: \"Type your message..\",\n                                onChange: (e)=>setCurrentMsg(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/chatting/index.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().chat_button),\n                                children: \"Send\"\n                            }, void 0, false, {\n                                fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/chatting/index.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/chatting/index.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/chatting/index.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/chatting/index.tsx\",\n            lineNumber: 50,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/chatting/index.tsx\",\n        lineNumber: 49,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Chatting, \"b4yPdEBGqH7PAvEYy/1edodZ5DQ=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState\n    ];\n});\n_c = Chatting;\nvar _c;\n$RefreshReg$(_c, \"Chatting\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnQvb3JnYW5pc21zL2NoYXR0aW5nL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ21EO0FBRVQ7QUFDRjtBQUNLO0FBU3RDLE1BQU1NLFdBQVc7UUFBQyxFQUFFQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsTUFBTSxFQUFPOztJQUN0RCxNQUFNLENBQUNDLGlCQUFpQkMsbUJBQW1CLEdBQUdQLHNEQUFjQSxDQUFDQyxzREFBUUE7SUFDckUsTUFBTSxDQUFDTyxZQUFZQyxjQUFjLEdBQUdYLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ1ksTUFBTUMsUUFBUSxHQUFHYiwrQ0FBUUEsQ0FBa0IsRUFBRTtJQUNwREQsZ0RBQVNBLENBQUM7UUFDTmUsUUFBUUMsR0FBRyxDQUFDVDtRQUNaUSxRQUFRQyxHQUFHLENBQUNSO0lBQ2hCLEdBQUUsRUFBRTtJQUNKLE1BQU1TLFdBQVcsT0FBT0M7UUFDcEJBLEVBQUVDLGNBQWM7UUFDaEIsSUFBSVIsZUFBZSxJQUFJO1lBQ3ZCLE1BQU1TLFVBQXlCO2dCQUMzQlo7Z0JBQ0FhLE1BQU1kO2dCQUNOZSxLQUFLWDtnQkFDTFksTUFDQSxJQUFJQyxLQUFLQSxLQUFLQyxHQUFHLElBQUlDLFFBQVEsS0FDN0IsTUFDQSxJQUFJRixLQUFLQSxLQUFLQyxHQUFHLElBQUlFLFVBQVU7WUFDbkM7WUFDQSxNQUFNckIsT0FBT3NCLElBQUksQ0FBQyxZQUFZUjtZQUM5QlIsY0FBYztRQUNkO0lBQ0o7SUFFQVosZ0RBQVNBLENBQUM7UUFDTk0sT0FBT3VCLEVBQUUsQ0FBQyxlQUFlLENBQUNDO1lBQ3hCZixRQUFRQyxHQUFHLENBQUM7WUFDWkQsUUFBUUMsR0FBRyxDQUFDYztZQUNaaEIsUUFBUSxDQUFDaUIsTUFBUTt1QkFBSUE7b0JBQUtEO2lCQUFLO1FBQ2pDO0lBQ0YsR0FBRztRQUFDeEI7S0FBTztJQUViLHFCQUNJLDhEQUFDMEI7UUFBSUMsT0FBTztZQUFDQyxPQUFPO1lBQU9DLGlCQUFnQjtZQUFTQyxRQUFRO1lBQU9DLGNBQWM7WUFBSUMsVUFBVTtZQUFZQyxPQUFNO1FBQU87a0JBQ3hILDRFQUFDUDtZQUFJUSxXQUFXdEMsd0VBQWtCOzs4QkFDOUIsOERBQUM4Qjs4QkFDQW5CLEtBQUs2QixHQUFHLENBQUMsUUFBOEJDOzRCQUE3QixFQUFFbkMsTUFBTSxFQUFFYSxJQUFJLEVBQUVDLEdBQUcsRUFBRUMsSUFBSSxFQUFFOytCQUNsQyw4REFBQ1M7NEJBRURRLFdBQ0luQixRQUFRZCxXQUNOTCw2RUFBdUIsR0FDdkJBLDRFQUFzQjs7OENBRzVCLDhEQUFDNEM7b0NBQ0dOLFdBQVd0Qyw0RUFBc0I7b0NBQ2pDK0IsT0FBTzt3Q0FBRWUsV0FBVzNCLFFBQVFkLFdBQVcsVUFBVTtvQ0FBTzs4Q0FFdkRjLEtBQUs0QixNQUFNLENBQUM7Ozs7Ozs4Q0FFakIsOERBQUNDO29DQUFHakIsT0FBTzt3Q0FBRWUsV0FBVzNCLFFBQVFkLFdBQVcsVUFBVTtvQ0FBTzs4Q0FDdkRlOzs7Ozs7OzJCQWRBcUI7Ozs7O29CQWdCQTs7Ozs7OzhCQUdULDhEQUFDWDs4QkFDRCw0RUFBQ21CO3dCQUFLQyxVQUFVLENBQUNsQyxJQUFNRCxTQUFTQzs7MENBQzVCLDhEQUFDbUM7Z0NBQ0RiLFdBQVd0Qyx1RUFBaUI7Z0NBQzVCcUQsTUFBSztnQ0FDTEMsT0FBTzdDO2dDQUNQOEMsYUFBWTtnQ0FDWkMsVUFBVSxDQUFDeEMsSUFBTU4sY0FBY00sRUFBRXlDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7OzBDQUU3Qyw4REFBQ0k7Z0NBQU9wQixXQUFXdEMsd0VBQWtCOzBDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3ZELEVBQUM7R0F4RVlHOztRQUNxQ0Ysa0RBQWNBOzs7S0FEbkRFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnQvb3JnYW5pc21zL2NoYXR0aW5nL2luZGV4LnRzeD9kYjRiIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHsgdXNlUmVjb2lsU3RhdGUgfSBmcm9tICdyZWNvaWwnO1xuaW1wb3J0IHsgZmlsZUluZm8gfSBmcm9tICdAL3JlY29pbC9maWxlSW5mbyc7XG5cbmludGVyZmFjZSBJTXNnRGF0YVR5cGVzIHtcbiAgICByb29tSWQ6IHN0cmluZyB8IG51bWJlcjtcbiAgICB1c2VyOiBzdHJpbmc7XG4gICAgbXNnOiBzdHJpbmc7XG4gICAgdGltZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgQ2hhdHRpbmcgPSAoeyBzb2NrZXQsIHVzZXJuYW1lLCByb29tSWQgfTogYW55KT0+e1xuICAgIGNvbnN0IFtjdXJyZW50RmlsZUluZm8sIHNldEN1cnJlbnRGaWxlSW5mb10gPSB1c2VSZWNvaWxTdGF0ZShmaWxlSW5mbyk7XG4gICAgY29uc3QgW2N1cnJlbnRNc2csIHNldEN1cnJlbnRNc2ddID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW2NoYXQsIHNldENoYXRdID0gdXNlU3RhdGU8SU1zZ0RhdGFUeXBlc1tdPihbXSk7XG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJuYW1lKVxuICAgICAgICBjb25zb2xlLmxvZyhyb29tSWQpXG4gICAgfSxbXSlcbiAgICBjb25zdCBzZW5kRGF0YSA9IGFzeW5jIChlOiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChjdXJyZW50TXNnICE9PSBcIlwiKSB7XG4gICAgICAgIGNvbnN0IG1zZ0RhdGE6IElNc2dEYXRhVHlwZXMgPSB7XG4gICAgICAgICAgICByb29tSWQsXG4gICAgICAgICAgICB1c2VyOiB1c2VybmFtZSxcbiAgICAgICAgICAgIG1zZzogY3VycmVudE1zZyxcbiAgICAgICAgICAgIHRpbWU6XG4gICAgICAgICAgICBuZXcgRGF0ZShEYXRlLm5vdygpKS5nZXRIb3VycygpICtcbiAgICAgICAgICAgIFwiOlwiICtcbiAgICAgICAgICAgIG5ldyBEYXRlKERhdGUubm93KCkpLmdldE1pbnV0ZXMoKSxcbiAgICAgICAgfTtcbiAgICAgICAgYXdhaXQgc29ja2V0LmVtaXQoXCJzZW5kX21zZ1wiLCBtc2dEYXRhKTtcbiAgICAgICAgc2V0Q3VycmVudE1zZyhcIlwiKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzb2NrZXQub24oXCJyZWNlaXZlX21zZ1wiLCAoZGF0YTogSU1zZ0RhdGFUeXBlcykgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWNlaXZlJylcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICBzZXRDaGF0KChwcmUpID0+IFsuLi5wcmUsIGRhdGFdKTtcbiAgICAgICAgfSk7XG4gICAgICB9LCBbc29ja2V0XSk7XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogJzI4JScsIGJhY2tncm91bmRDb2xvcjond2hpdGUnLCBoZWlnaHQ6ICc4MnZoJyxib3JkZXJSYWRpdXM6IDIwLCBwb3NpdGlvbjogJ3JlbGF0aXZlJywgY29sb3I6J2JsYWNrJ319PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYXRfYm9yZGVyfT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7Y2hhdC5tYXAoKHsgcm9vbUlkLCB1c2VyLCBtc2csIHRpbWUgfSwga2V5KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgIHVzZXIgPT0gdXNlcm5hbWVcbiAgICAgICAgICAgICAgICAgICAgPyBzdHlsZXMuY2hhdFByb2ZpbGVSaWdodFxuICAgICAgICAgICAgICAgICAgICA6IHN0eWxlcy5jaGF0UHJvZmlsZUxlZnRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNoYXRQcm9maWxlU3Bhbn1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdGV4dEFsaWduOiB1c2VyID09IHVzZXJuYW1lID8gXCJyaWdodFwiIDogXCJsZWZ0XCIgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHt1c2VyLmNoYXJBdCgwKX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7IHRleHRBbGlnbjogdXNlciA9PSB1c2VybmFtZSA/IFwicmlnaHRcIiA6IFwibGVmdFwiIH19PlxuICAgICAgICAgICAgICAgICAgICB7bXNnfVxuICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4gc2VuZERhdGEoZSl9PlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNoYXRfaW5wdXR9XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtjdXJyZW50TXNnfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIG1lc3NhZ2UuLlwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDdXJyZW50TXNnKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY2hhdF9idXR0b259PlNlbmQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+KVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwidXNlUmVjb2lsU3RhdGUiLCJmaWxlSW5mbyIsIkNoYXR0aW5nIiwic29ja2V0IiwidXNlcm5hbWUiLCJyb29tSWQiLCJjdXJyZW50RmlsZUluZm8iLCJzZXRDdXJyZW50RmlsZUluZm8iLCJjdXJyZW50TXNnIiwic2V0Q3VycmVudE1zZyIsImNoYXQiLCJzZXRDaGF0IiwiY29uc29sZSIsImxvZyIsInNlbmREYXRhIiwiZSIsInByZXZlbnREZWZhdWx0IiwibXNnRGF0YSIsInVzZXIiLCJtc2ciLCJ0aW1lIiwiRGF0ZSIsIm5vdyIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImVtaXQiLCJvbiIsImRhdGEiLCJwcmUiLCJkaXYiLCJzdHlsZSIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwicG9zaXRpb24iLCJjb2xvciIsImNsYXNzTmFtZSIsImNoYXRfYm9yZGVyIiwibWFwIiwia2V5IiwiY2hhdFByb2ZpbGVSaWdodCIsImNoYXRQcm9maWxlTGVmdCIsInNwYW4iLCJjaGF0UHJvZmlsZVNwYW4iLCJ0ZXh0QWxpZ24iLCJjaGFyQXQiLCJoMyIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwiY2hhdF9pbnB1dCIsInR5cGUiLCJ2YWx1ZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJidXR0b24iLCJjaGF0X2J1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/component/organisms/chatting/index.tsx\n"));

/***/ })

});