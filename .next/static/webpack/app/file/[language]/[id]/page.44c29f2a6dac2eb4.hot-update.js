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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Chatting: function() { return /* binding */ Chatting; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.scss */ \"(app-pages-browser)/./src/component/organisms/chatting/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"(app-pages-browser)/./node_modules/recoil/es/index.js\");\n/* harmony import */ var _recoil_fileInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/recoil/fileInfo */ \"(app-pages-browser)/./src/recoil/fileInfo.ts\");\n/* __next_internal_client_entry_do_not_use__ Chatting auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Chatting = (param)=>{\n    let { socket, username, roomId } = param;\n    _s();\n    const [currentFileInfo, setCurrentFileInfo] = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_recoil_fileInfo__WEBPACK_IMPORTED_MODULE_3__.fileInfo);\n    const [currentMsg, setCurrentMsg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [chat, setChat] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const sendData = async (e)=>{\n        e.preventDefault();\n        if (currentMsg !== \"\") {\n            const msgData = {\n                roomId,\n                user: username,\n                msg: currentMsg,\n                time: new Date(Date.now()).getHours() + \":\" + new Date(Date.now()).getMinutes()\n            };\n            await socket.emit(\"send_msg\", msgData);\n            setCurrentMsg(\"\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleNewMessage = (data)=>{\n            setChat((prev)=>[\n                    ...prev,\n                    data\n                ]);\n        };\n        socket.on(\"receive_msg\", handleNewMessage);\n        return ()=>{\n            socket.off(\"receive_msg\", handleNewMessage);\n        };\n    }, [\n        socket\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"28%\",\n            backgroundColor: \"white\",\n            height: \"82vh\",\n            borderRadius: 20,\n            position: \"relative\",\n            color: \"black\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().chat_border),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: chat.map((param, key)=>/*#__PURE__*/ {\n                        let { roomId, user, msg, time } = param;\n                        return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: user == username ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().chatProfileRight) : (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().chatProfileLeft),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().chatProfileSpan),\n                                    style: {\n                                        textAlign: user == username ? \"right\" : \"left\"\n                                    },\n                                    children: user.charAt(0)\n                                }, void 0, false, {\n                                    fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/chatting/index.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    style: {\n                                        textAlign: user == username ? \"right\" : \"left\"\n                                    },\n                                    children: msg\n                                }, void 0, false, {\n                                    fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/chatting/index.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, key, true, {\n                            fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/chatting/index.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 17\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/chatting/index.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: (e)=>sendData(e),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().chat_input),\n                                type: \"text\",\n                                value: currentMsg,\n                                placeholder: \"Type your message..\",\n                                onChange: (e)=>setCurrentMsg(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/chatting/index.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().chat_button),\n                                children: \"Send\"\n                            }, void 0, false, {\n                                fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/chatting/index.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/chatting/index.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/chatting/index.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/chatting/index.tsx\",\n            lineNumber: 49,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/chatting/index.tsx\",\n        lineNumber: 48,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Chatting, \"7XLJXzhmi458f7JI3RFzZBWZ/UY=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState\n    ];\n});\n_c = Chatting;\nvar _c;\n$RefreshReg$(_c, \"Chatting\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnQvb3JnYW5pc21zL2NoYXR0aW5nL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ21EO0FBRVQ7QUFDRjtBQUNLO0FBU3RDLE1BQU1NLFdBQVc7UUFBQyxFQUFFQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsTUFBTSxFQUFPOztJQUN0RCxNQUFNLENBQUNDLGlCQUFpQkMsbUJBQW1CLEdBQUdQLHNEQUFjQSxDQUFDQyxzREFBUUE7SUFDckUsTUFBTSxDQUFDTyxZQUFZQyxjQUFjLEdBQUdYLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ1ksTUFBTUMsUUFBUSxHQUFHYiwrQ0FBUUEsQ0FBa0IsRUFBRTtJQUNwRCxNQUFNYyxXQUFXLE9BQU9DO1FBQ3BCQSxFQUFFQyxjQUFjO1FBQ2hCLElBQUlOLGVBQWUsSUFBSTtZQUN2QixNQUFNTyxVQUF5QjtnQkFDM0JWO2dCQUNBVyxNQUFNWjtnQkFDTmEsS0FBS1Q7Z0JBQ0xVLE1BQ0EsSUFBSUMsS0FBS0EsS0FBS0MsR0FBRyxJQUFJQyxRQUFRLEtBQzdCLE1BQ0EsSUFBSUYsS0FBS0EsS0FBS0MsR0FBRyxJQUFJRSxVQUFVO1lBQ25DO1lBQ0EsTUFBTW5CLE9BQU9vQixJQUFJLENBQUMsWUFBWVI7WUFDOUJOLGNBQWM7UUFDZDtJQUNKO0lBQ0FaLGdEQUFTQSxDQUFDO1FBQ04sTUFBTTJCLG1CQUFtQixDQUFDQztZQUN0QmQsUUFBUSxDQUFDZSxPQUFTO3VCQUFJQTtvQkFBTUQ7aUJBQUs7UUFDckM7UUFFQXRCLE9BQU93QixFQUFFLENBQUMsZUFBZUg7UUFFekIsT0FBTztZQUNIckIsT0FBT3lCLEdBQUcsQ0FBQyxlQUFlSjtRQUM5QjtJQUNKLEdBQUc7UUFBQ3JCO0tBQU87SUFFWCxxQkFDSSw4REFBQzBCO1FBQUlDLE9BQU87WUFBQ0MsT0FBTztZQUFPQyxpQkFBZ0I7WUFBU0MsUUFBUTtZQUFPQyxjQUFjO1lBQUlDLFVBQVU7WUFBWUMsT0FBTTtRQUFPO2tCQUN4SCw0RUFBQ1A7WUFBSVEsV0FBV3RDLHdFQUFrQjs7OEJBQzlCLDhEQUFDOEI7OEJBQ0FuQixLQUFLNkIsR0FBRyxDQUFDLFFBQThCQzs0QkFBN0IsRUFBRW5DLE1BQU0sRUFBRVcsSUFBSSxFQUFFQyxHQUFHLEVBQUVDLElBQUksRUFBRTsrQkFDbEMsOERBQUNXOzRCQUVEUSxXQUNJckIsUUFBUVosV0FDTkwsNkVBQXVCLEdBQ3ZCQSw0RUFBc0I7OzhDQUc1Qiw4REFBQzRDO29DQUNHTixXQUFXdEMsNEVBQXNCO29DQUNqQytCLE9BQU87d0NBQUVlLFdBQVc3QixRQUFRWixXQUFXLFVBQVU7b0NBQU87OENBRXZEWSxLQUFLOEIsTUFBTSxDQUFDOzs7Ozs7OENBRWpCLDhEQUFDQztvQ0FBR2pCLE9BQU87d0NBQUVlLFdBQVc3QixRQUFRWixXQUFXLFVBQVU7b0NBQU87OENBQ3ZEYTs7Ozs7OzsyQkFkQXVCOzs7OztvQkFnQkE7Ozs7Ozs4QkFHVCw4REFBQ1g7OEJBQ0QsNEVBQUNtQjt3QkFBS0MsVUFBVSxDQUFDcEMsSUFBTUQsU0FBU0M7OzBDQUM1Qiw4REFBQ3FDO2dDQUNEYixXQUFXdEMsdUVBQWlCO2dDQUM1QnFELE1BQUs7Z0NBQ0xDLE9BQU83QztnQ0FDUDhDLGFBQVk7Z0NBQ1pDLFVBQVUsQ0FBQzFDLElBQU1KLGNBQWNJLEVBQUUyQyxNQUFNLENBQUNILEtBQUs7Ozs7OzswQ0FFN0MsOERBQUNJO2dDQUFPcEIsV0FBV3RDLHdFQUFrQjswQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt2RCxFQUFDO0dBdkVZRzs7UUFDcUNGLGtEQUFjQTs7O0tBRG5ERSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50L29yZ2FuaXNtcy9jaGF0dGluZy9pbmRleC50c3g/ZGI0YiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlIH0gZnJvbSAncmVjb2lsJztcbmltcG9ydCB7IGZpbGVJbmZvIH0gZnJvbSAnQC9yZWNvaWwvZmlsZUluZm8nO1xuXG5pbnRlcmZhY2UgSU1zZ0RhdGFUeXBlcyB7XG4gICAgcm9vbUlkOiBzdHJpbmcgfCBudW1iZXI7XG4gICAgdXNlcjogc3RyaW5nO1xuICAgIG1zZzogc3RyaW5nO1xuICAgIHRpbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IENoYXR0aW5nID0gKHsgc29ja2V0LCB1c2VybmFtZSwgcm9vbUlkIH06IGFueSk9PntcbiAgICBjb25zdCBbY3VycmVudEZpbGVJbmZvLCBzZXRDdXJyZW50RmlsZUluZm9dID0gdXNlUmVjb2lsU3RhdGUoZmlsZUluZm8pO1xuICAgIGNvbnN0IFtjdXJyZW50TXNnLCBzZXRDdXJyZW50TXNnXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtjaGF0LCBzZXRDaGF0XSA9IHVzZVN0YXRlPElNc2dEYXRhVHlwZXNbXT4oW10pO1xuICAgIGNvbnN0IHNlbmREYXRhID0gYXN5bmMgKGU6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKGN1cnJlbnRNc2cgIT09IFwiXCIpIHtcbiAgICAgICAgY29uc3QgbXNnRGF0YTogSU1zZ0RhdGFUeXBlcyA9IHtcbiAgICAgICAgICAgIHJvb21JZCxcbiAgICAgICAgICAgIHVzZXI6IHVzZXJuYW1lLFxuICAgICAgICAgICAgbXNnOiBjdXJyZW50TXNnLFxuICAgICAgICAgICAgdGltZTpcbiAgICAgICAgICAgIG5ldyBEYXRlKERhdGUubm93KCkpLmdldEhvdXJzKCkgK1xuICAgICAgICAgICAgXCI6XCIgK1xuICAgICAgICAgICAgbmV3IERhdGUoRGF0ZS5ub3coKSkuZ2V0TWludXRlcygpLFxuICAgICAgICB9O1xuICAgICAgICBhd2FpdCBzb2NrZXQuZW1pdChcInNlbmRfbXNnXCIsIG1zZ0RhdGEpO1xuICAgICAgICBzZXRDdXJyZW50TXNnKFwiXCIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBoYW5kbGVOZXdNZXNzYWdlID0gKGRhdGE6IElNc2dEYXRhVHlwZXMpID0+IHtcbiAgICAgICAgICAgIHNldENoYXQoKHByZXYpID0+IFsuLi5wcmV2LCBkYXRhXSk7XG4gICAgICAgIH07XG4gICAgXG4gICAgICAgIHNvY2tldC5vbihcInJlY2VpdmVfbXNnXCIsIGhhbmRsZU5ld01lc3NhZ2UpO1xuICAgIFxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgc29ja2V0Lm9mZihcInJlY2VpdmVfbXNnXCIsIGhhbmRsZU5ld01lc3NhZ2UpO1xuICAgICAgICB9O1xuICAgIH0sIFtzb2NrZXRdKTtcblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiAnMjglJywgYmFja2dyb3VuZENvbG9yOid3aGl0ZScsIGhlaWdodDogJzgydmgnLGJvcmRlclJhZGl1czogMjAsIHBvc2l0aW9uOiAncmVsYXRpdmUnLCBjb2xvcjonYmxhY2snfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhdF9ib3JkZXJ9PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtjaGF0Lm1hcCgoeyByb29tSWQsIHVzZXIsIG1zZywgdGltZSB9LCBrZXkpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgdXNlciA9PSB1c2VybmFtZVxuICAgICAgICAgICAgICAgICAgICA/IHN0eWxlcy5jaGF0UHJvZmlsZVJpZ2h0XG4gICAgICAgICAgICAgICAgICAgIDogc3R5bGVzLmNoYXRQcm9maWxlTGVmdFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2hhdFByb2ZpbGVTcGFufVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB0ZXh0QWxpZ246IHVzZXIgPT0gdXNlcm5hbWUgPyBcInJpZ2h0XCIgOiBcImxlZnRcIiB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3VzZXIuY2hhckF0KDApfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3sgdGV4dEFsaWduOiB1c2VyID09IHVzZXJuYW1lID8gXCJyaWdodFwiIDogXCJsZWZ0XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIHttc2d9XG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiBzZW5kRGF0YShlKX0+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2hhdF9pbnB1dH1cbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2N1cnJlbnRNc2d9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgbWVzc2FnZS4uXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEN1cnJlbnRNc2coZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5jaGF0X2J1dHRvbn0+U2VuZDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj4pXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJ1c2VSZWNvaWxTdGF0ZSIsImZpbGVJbmZvIiwiQ2hhdHRpbmciLCJzb2NrZXQiLCJ1c2VybmFtZSIsInJvb21JZCIsImN1cnJlbnRGaWxlSW5mbyIsInNldEN1cnJlbnRGaWxlSW5mbyIsImN1cnJlbnRNc2ciLCJzZXRDdXJyZW50TXNnIiwiY2hhdCIsInNldENoYXQiLCJzZW5kRGF0YSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm1zZ0RhdGEiLCJ1c2VyIiwibXNnIiwidGltZSIsIkRhdGUiLCJub3ciLCJnZXRIb3VycyIsImdldE1pbnV0ZXMiLCJlbWl0IiwiaGFuZGxlTmV3TWVzc2FnZSIsImRhdGEiLCJwcmV2Iiwib24iLCJvZmYiLCJkaXYiLCJzdHlsZSIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwicG9zaXRpb24iLCJjb2xvciIsImNsYXNzTmFtZSIsImNoYXRfYm9yZGVyIiwibWFwIiwia2V5IiwiY2hhdFByb2ZpbGVSaWdodCIsImNoYXRQcm9maWxlTGVmdCIsInNwYW4iLCJjaGF0UHJvZmlsZVNwYW4iLCJ0ZXh0QWxpZ24iLCJjaGFyQXQiLCJoMyIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwiY2hhdF9pbnB1dCIsInR5cGUiLCJ2YWx1ZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJidXR0b24iLCJjaGF0X2J1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/component/organisms/chatting/index.tsx\n"));

/***/ })

});