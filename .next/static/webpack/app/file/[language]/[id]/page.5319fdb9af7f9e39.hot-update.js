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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Chatting: function() { return /* binding */ Chatting; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.scss */ \"(app-pages-browser)/./src/component/organisms/chatting/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"(app-pages-browser)/./node_modules/recoil/es/index.js\");\n/* harmony import */ var _recoil_fileInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/recoil/fileInfo */ \"(app-pages-browser)/./src/recoil/fileInfo.ts\");\n/* __next_internal_client_entry_do_not_use__ Chatting auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Chatting = (param)=>{\n    let { socket, username, roomId } = param;\n    _s();\n    const [currentFileInfo, setCurrentFileInfo] = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_recoil_fileInfo__WEBPACK_IMPORTED_MODULE_3__.fileInfo);\n    const [currentMsg, setCurrentMsg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [chat, setChat] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const sendData = async (e)=>{\n        e.preventDefault();\n        if (currentMsg !== \"\") {\n            const msgData = {\n                roomId,\n                user: username,\n                msg: currentMsg,\n                time: new Date(Date.now()).getHours() + \":\" + new Date(Date.now()).getMinutes()\n            };\n            await socket.emit(\"send_msg\", msgData);\n            setCurrentMsg(\"\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        socket.on(\"receive_msg\", (data)=>{\n            setChat((pre)=>[\n                    ...pre,\n                    data\n                ]);\n        });\n    }, [\n        socket\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"28%\",\n            backgroundColor: \"white\",\n            height: \"82vh\",\n            borderRadius: 20,\n            position: \"relative\",\n            color: \"black\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().chat_border),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: chat.map((param, key)=>/*#__PURE__*/ {\n                        let { roomId, user, msg, time } = param;\n                        return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: user == username ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().chatProfileRight) : (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().chatProfileLeft),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().chatProfileSpan),\n                                    style: {\n                                        textAlign: user == username ? \"right\" : \"left\"\n                                    },\n                                    children: user.charAt(0)\n                                }, void 0, false, {\n                                    fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/chatting/index.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    style: {\n                                        textAlign: user == username ? \"right\" : \"left\"\n                                    },\n                                    children: msg\n                                }, void 0, false, {\n                                    fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/chatting/index.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, key, true, {\n                            fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/chatting/index.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 17\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/chatting/index.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: (e)=>sendData(e),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().chat_input),\n                                type: \"text\",\n                                value: currentMsg,\n                                placeholder: \"Type your message..\",\n                                onChange: (e)=>setCurrentMsg(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/chatting/index.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().chat_button),\n                                children: \"Send\"\n                            }, void 0, false, {\n                                fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/chatting/index.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/chatting/index.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/chatting/index.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/chatting/index.tsx\",\n            lineNumber: 44,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/chatting/index.tsx\",\n        lineNumber: 43,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Chatting, \"7XLJXzhmi458f7JI3RFzZBWZ/UY=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState\n    ];\n});\n_c = Chatting;\nvar _c;\n$RefreshReg$(_c, \"Chatting\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnQvb3JnYW5pc21zL2NoYXR0aW5nL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ21EO0FBRVQ7QUFDRjtBQUNLO0FBU3RDLE1BQU1NLFdBQVc7UUFBQyxFQUFFQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsTUFBTSxFQUFPOztJQUN0RCxNQUFNLENBQUNDLGlCQUFpQkMsbUJBQW1CLEdBQUdQLHNEQUFjQSxDQUFDQyxzREFBUUE7SUFDckUsTUFBTSxDQUFDTyxZQUFZQyxjQUFjLEdBQUdYLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ1ksTUFBTUMsUUFBUSxHQUFHYiwrQ0FBUUEsQ0FBa0IsRUFBRTtJQUNwRCxNQUFNYyxXQUFXLE9BQU9DO1FBQ3BCQSxFQUFFQyxjQUFjO1FBQ2hCLElBQUlOLGVBQWUsSUFBSTtZQUN2QixNQUFNTyxVQUF5QjtnQkFDM0JWO2dCQUNBVyxNQUFNWjtnQkFDTmEsS0FBS1Q7Z0JBQ0xVLE1BQ0EsSUFBSUMsS0FBS0EsS0FBS0MsR0FBRyxJQUFJQyxRQUFRLEtBQzdCLE1BQ0EsSUFBSUYsS0FBS0EsS0FBS0MsR0FBRyxJQUFJRSxVQUFVO1lBQ25DO1lBQ0EsTUFBTW5CLE9BQU9vQixJQUFJLENBQUMsWUFBWVI7WUFDOUJOLGNBQWM7UUFDZDtJQUNKO0lBRUFaLGdEQUFTQSxDQUFDO1FBQ05NLE9BQU9xQixFQUFFLENBQUMsZUFBZSxDQUFDQztZQUN4QmQsUUFBUSxDQUFDZSxNQUFRO3VCQUFJQTtvQkFBS0Q7aUJBQUs7UUFDakM7SUFDRixHQUFHO1FBQUN0QjtLQUFPO0lBRWIscUJBQ0ksOERBQUN3QjtRQUFJQyxPQUFPO1lBQUNDLE9BQU87WUFBT0MsaUJBQWdCO1lBQVNDLFFBQVE7WUFBT0MsY0FBYztZQUFJQyxVQUFVO1lBQVlDLE9BQU07UUFBTztrQkFDeEgsNEVBQUNQO1lBQUlRLFdBQVdwQyx3RUFBa0I7OzhCQUM5Qiw4REFBQzRCOzhCQUNBakIsS0FBSzJCLEdBQUcsQ0FBQyxRQUE4QkM7NEJBQTdCLEVBQUVqQyxNQUFNLEVBQUVXLElBQUksRUFBRUMsR0FBRyxFQUFFQyxJQUFJLEVBQUU7K0JBQ2xDLDhEQUFDUzs0QkFFRFEsV0FDSW5CLFFBQVFaLFdBQ05MLDZFQUF1QixHQUN2QkEsNEVBQXNCOzs4Q0FHNUIsOERBQUMwQztvQ0FDR04sV0FBV3BDLDRFQUFzQjtvQ0FDakM2QixPQUFPO3dDQUFFZSxXQUFXM0IsUUFBUVosV0FBVyxVQUFVO29DQUFPOzhDQUV2RFksS0FBSzRCLE1BQU0sQ0FBQzs7Ozs7OzhDQUVqQiw4REFBQ0M7b0NBQUdqQixPQUFPO3dDQUFFZSxXQUFXM0IsUUFBUVosV0FBVyxVQUFVO29DQUFPOzhDQUN2RGE7Ozs7Ozs7MkJBZEFxQjs7Ozs7b0JBZ0JBOzs7Ozs7OEJBR1QsOERBQUNYOzhCQUNELDRFQUFDbUI7d0JBQUtDLFVBQVUsQ0FBQ2xDLElBQU1ELFNBQVNDOzswQ0FDNUIsOERBQUNtQztnQ0FDRGIsV0FBV3BDLHVFQUFpQjtnQ0FDNUJtRCxNQUFLO2dDQUNMQyxPQUFPM0M7Z0NBQ1A0QyxhQUFZO2dDQUNaQyxVQUFVLENBQUN4QyxJQUFNSixjQUFjSSxFQUFFeUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7MENBRTdDLDhEQUFDSTtnQ0FBT3BCLFdBQVdwQyx3RUFBa0I7MENBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdkQsRUFBQztHQWxFWUc7O1FBQ3FDRixrREFBY0E7OztLQURuREUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudC9vcmdhbmlzbXMvY2hhdHRpbmcvaW5kZXgudHN4P2RiNGIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgeyB1c2VSZWNvaWxTdGF0ZSB9IGZyb20gJ3JlY29pbCc7XG5pbXBvcnQgeyBmaWxlSW5mbyB9IGZyb20gJ0AvcmVjb2lsL2ZpbGVJbmZvJztcblxuaW50ZXJmYWNlIElNc2dEYXRhVHlwZXMge1xuICAgIHJvb21JZDogc3RyaW5nIHwgbnVtYmVyO1xuICAgIHVzZXI6IHN0cmluZztcbiAgICBtc2c6IHN0cmluZztcbiAgICB0aW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBDaGF0dGluZyA9ICh7IHNvY2tldCwgdXNlcm5hbWUsIHJvb21JZCB9OiBhbnkpPT57XG4gICAgY29uc3QgW2N1cnJlbnRGaWxlSW5mbywgc2V0Q3VycmVudEZpbGVJbmZvXSA9IHVzZVJlY29pbFN0YXRlKGZpbGVJbmZvKTtcbiAgICBjb25zdCBbY3VycmVudE1zZywgc2V0Q3VycmVudE1zZ10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbY2hhdCwgc2V0Q2hhdF0gPSB1c2VTdGF0ZTxJTXNnRGF0YVR5cGVzW10+KFtdKTtcbiAgICBjb25zdCBzZW5kRGF0YSA9IGFzeW5jIChlOiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChjdXJyZW50TXNnICE9PSBcIlwiKSB7XG4gICAgICAgIGNvbnN0IG1zZ0RhdGE6IElNc2dEYXRhVHlwZXMgPSB7XG4gICAgICAgICAgICByb29tSWQsXG4gICAgICAgICAgICB1c2VyOiB1c2VybmFtZSxcbiAgICAgICAgICAgIG1zZzogY3VycmVudE1zZyxcbiAgICAgICAgICAgIHRpbWU6XG4gICAgICAgICAgICBuZXcgRGF0ZShEYXRlLm5vdygpKS5nZXRIb3VycygpICtcbiAgICAgICAgICAgIFwiOlwiICtcbiAgICAgICAgICAgIG5ldyBEYXRlKERhdGUubm93KCkpLmdldE1pbnV0ZXMoKSxcbiAgICAgICAgfTtcbiAgICAgICAgYXdhaXQgc29ja2V0LmVtaXQoXCJzZW5kX21zZ1wiLCBtc2dEYXRhKTtcbiAgICAgICAgc2V0Q3VycmVudE1zZyhcIlwiKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzb2NrZXQub24oXCJyZWNlaXZlX21zZ1wiLCAoZGF0YTogSU1zZ0RhdGFUeXBlcykgPT4ge1xuICAgICAgICAgIHNldENoYXQoKHByZSkgPT4gWy4uLnByZSwgZGF0YV0pO1xuICAgICAgICB9KTtcbiAgICAgIH0sIFtzb2NrZXRdKTtcblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiAnMjglJywgYmFja2dyb3VuZENvbG9yOid3aGl0ZScsIGhlaWdodDogJzgydmgnLGJvcmRlclJhZGl1czogMjAsIHBvc2l0aW9uOiAncmVsYXRpdmUnLCBjb2xvcjonYmxhY2snfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhdF9ib3JkZXJ9PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtjaGF0Lm1hcCgoeyByb29tSWQsIHVzZXIsIG1zZywgdGltZSB9LCBrZXkpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgdXNlciA9PSB1c2VybmFtZVxuICAgICAgICAgICAgICAgICAgICA/IHN0eWxlcy5jaGF0UHJvZmlsZVJpZ2h0XG4gICAgICAgICAgICAgICAgICAgIDogc3R5bGVzLmNoYXRQcm9maWxlTGVmdFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2hhdFByb2ZpbGVTcGFufVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB0ZXh0QWxpZ246IHVzZXIgPT0gdXNlcm5hbWUgPyBcInJpZ2h0XCIgOiBcImxlZnRcIiB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3VzZXIuY2hhckF0KDApfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3sgdGV4dEFsaWduOiB1c2VyID09IHVzZXJuYW1lID8gXCJyaWdodFwiIDogXCJsZWZ0XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIHttc2d9XG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiBzZW5kRGF0YShlKX0+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2hhdF9pbnB1dH1cbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2N1cnJlbnRNc2d9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgbWVzc2FnZS4uXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEN1cnJlbnRNc2coZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5jaGF0X2J1dHRvbn0+U2VuZDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj4pXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJ1c2VSZWNvaWxTdGF0ZSIsImZpbGVJbmZvIiwiQ2hhdHRpbmciLCJzb2NrZXQiLCJ1c2VybmFtZSIsInJvb21JZCIsImN1cnJlbnRGaWxlSW5mbyIsInNldEN1cnJlbnRGaWxlSW5mbyIsImN1cnJlbnRNc2ciLCJzZXRDdXJyZW50TXNnIiwiY2hhdCIsInNldENoYXQiLCJzZW5kRGF0YSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm1zZ0RhdGEiLCJ1c2VyIiwibXNnIiwidGltZSIsIkRhdGUiLCJub3ciLCJnZXRIb3VycyIsImdldE1pbnV0ZXMiLCJlbWl0Iiwib24iLCJkYXRhIiwicHJlIiwiZGl2Iiwic3R5bGUiLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsInBvc2l0aW9uIiwiY29sb3IiLCJjbGFzc05hbWUiLCJjaGF0X2JvcmRlciIsIm1hcCIsImtleSIsImNoYXRQcm9maWxlUmlnaHQiLCJjaGF0UHJvZmlsZUxlZnQiLCJzcGFuIiwiY2hhdFByb2ZpbGVTcGFuIiwidGV4dEFsaWduIiwiY2hhckF0IiwiaDMiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsImNoYXRfaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiYnV0dG9uIiwiY2hhdF9idXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/component/organisms/chatting/index.tsx\n"));

/***/ })

});