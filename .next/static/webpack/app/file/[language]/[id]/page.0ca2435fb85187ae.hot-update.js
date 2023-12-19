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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Chatting: function() { return /* binding */ Chatting; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.scss */ \"(app-pages-browser)/./src/component/organisms/chatting/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ Chatting auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Chatting = (param)=>{\n    let { socket, username, roomId } = param;\n    _s();\n    const [currentMsg, setCurrentMsg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [chat, setChat] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [isConnected, setIsConnected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const endOfMessagesRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const sendData = async ()=>{\n        if (currentMsg !== \"\") {\n            const msgData = {\n                roomId,\n                user: username,\n                msg: currentMsg,\n                time: new Date(Date.now()).getHours() + \":\" + new Date(Date.now()).getMinutes()\n            };\n            await socket.emit(\"send_msg\", msgData);\n            setCurrentMsg(\"\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!isConnected) {\n            const handleNewMessage = (data)=>{\n                setChat((prev)=>[\n                        ...prev,\n                        data\n                    ]);\n            };\n            socket.on(\"receive_msg\", handleNewMessage);\n        }\n        return ()=>{\n            setIsConnected(true);\n        };\n    }, [\n        socket\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        var _endOfMessagesRef_current;\n        (_endOfMessagesRef_current = endOfMessagesRef.current) === null || _endOfMessagesRef_current === void 0 ? void 0 : _endOfMessagesRef_current.scrollIntoView({\n            behavior: \"smooth\"\n        });\n    }, [\n        chat\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().chat_border),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        chat.map((param, key)=>/*#__PURE__*/ {\n                            let { roomId, user, msg, time } = param;\n                            return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: user == username ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().chatProfileRight) : (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().chatProfileLeft),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        user !== username ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().userName),\n                                            children: user\n                                        }, void 0, false, {\n                                            fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/chatting/index.tsx\",\n                                            lineNumber: 65,\n                                            columnNumber: 29\n                                        }, undefined) : null,\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: user == username ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().sendMessage) : (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().receiveMessage),\n                                            dangerouslySetInnerHTML: {\n                                                __html: msg.replace(/\\n/g, \"<br/>\")\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/chatting/index.tsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/chatting/index.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 21\n                                }, undefined)\n                            }, key, false, {\n                                fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/chatting/index.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 17\n                            }, undefined);\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            ref: endOfMessagesRef\n                        }, void 0, false, {\n                            fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/chatting/index.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/chatting/index.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: (e)=>{\n                            e.preventDefault();\n                            sendData();\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().input),\n                                type: \"text\",\n                                value: currentMsg,\n                                placeholder: \"Type your message..\",\n                                onChange: (e)=>setCurrentMsg(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/chatting/index.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: \"/paper-plane.png\",\n                                width: 25,\n                                height: 25,\n                                style: {\n                                    objectFit: \"cover\"\n                                },\n                                alt: \"Sync-Codes\",\n                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().image),\n                                onClick: ()=>{\n                                    sendData();\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/chatting/index.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/chatting/index.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/chatting/index.tsx\",\n                    lineNumber: 81,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/chatting/index.tsx\",\n            lineNumber: 52,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/chatting/index.tsx\",\n        lineNumber: 51,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Chatting, \"PzYmv4PeXKi+YyOb1gnqEYNEb4o=\");\n_c = Chatting;\nvar _c;\n$RefreshReg$(_c, \"Chatting\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnQvb3JnYW5pc21zL2NoYXR0aW5nL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQzJEO0FBQzVCO0FBQ1c7QUFTbkMsTUFBTU0sV0FBVztRQUFDLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxNQUFNLEVBQU87O0lBQ3RELE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNVLE1BQU1DLFFBQVEsR0FBR1gsK0NBQVFBLENBQWtCLEVBQUU7SUFDcEQsTUFBTSxDQUFDWSxhQUFhQyxlQUFlLEdBQUliLCtDQUFRQSxDQUFVO0lBQ3pELE1BQU1jLG1CQUFtQmIsNkNBQU1BLENBQU07SUFDckMsTUFBTWMsV0FBVztRQUNiLElBQUlQLGVBQWUsSUFBSTtZQUN2QixNQUFNUSxVQUF5QjtnQkFDM0JUO2dCQUNBVSxNQUFNWDtnQkFDTlksS0FBS1Y7Z0JBQ0xXLE1BQ0EsSUFBSUMsS0FBS0EsS0FBS0MsR0FBRyxJQUFJQyxRQUFRLEtBQzdCLE1BQ0EsSUFBSUYsS0FBS0EsS0FBS0MsR0FBRyxJQUFJRSxVQUFVO1lBQ25DO1lBQ0EsTUFBTWxCLE9BQU9tQixJQUFJLENBQUMsWUFBWVI7WUFDOUJQLGNBQWM7UUFDZDtJQUNKO0lBQ0FWLGdEQUFTQSxDQUFDO1FBQ04sSUFBSSxDQUFDYSxhQUFZO1lBQ2IsTUFBTWEsbUJBQW1CLENBQUNDO2dCQUN0QmYsUUFBUSxDQUFDZ0IsT0FBUzsyQkFBSUE7d0JBQU1EO3FCQUFLO1lBQ3JDO1lBRUFyQixPQUFPdUIsRUFBRSxDQUFDLGVBQWVIO1FBQzdCO1FBQ0EsT0FBTztZQUNIWixlQUFlO1FBQ25CO0lBQ0osR0FBRztRQUFDUjtLQUFPO0lBRVhOLGdEQUFTQSxDQUFDO1lBQ05lO1NBQUFBLDRCQUFBQSxpQkFBaUJlLE9BQU8sY0FBeEJmLGdEQUFBQSwwQkFBMEJnQixjQUFjLENBQUM7WUFBRUMsVUFBVTtRQUFTO0lBQ2xFLEdBQUU7UUFBQ3JCO0tBQUs7SUFFUixxQkFDSSw4REFBQ3NCO1FBQUlDLFdBQVc5QixzRUFBZ0I7a0JBQ2hDLDRFQUFDNkI7WUFBSUMsV0FBVzlCLHdFQUFrQjs7OEJBQzlCLDhEQUFDNkI7O3dCQUNBdEIsS0FBSzBCLEdBQUcsQ0FBQyxRQUE4QkM7Z0NBQTdCLEVBQUU5QixNQUFNLEVBQUVVLElBQUksRUFBRUMsR0FBRyxFQUFFQyxJQUFJLEVBQUU7bUNBQ2xDLDhEQUFDYTtnQ0FFREMsV0FDSWhCLFFBQVFYLFdBQ05ILDZFQUF1QixHQUN2QkEsNEVBQXNCOzBDQUd4Qiw0RUFBQzZCOzt3Q0FDSWYsU0FBU1gseUJBQ04sOERBQUMwQjs0Q0FDR0MsV0FBVzlCLHFFQUFlO3NEQUV6QmM7Ozs7O3dEQUNHO3NEQUNSLDhEQUFDZTs0Q0FDR0MsV0FBYWhCLFFBQVFYLFdBQVdILHdFQUFrQixHQUFFQSwyRUFBcUI7NENBQ3pFd0MseUJBQXlCO2dEQUFFQyxRQUFRMUIsSUFBSTJCLE9BQU8sQ0FBQyxPQUFPOzRDQUFTOzs7Ozs7Ozs7Ozs7K0JBaEIxRVI7Ozs7O3dCQXFCQTtzQ0FFVCw4REFBQ0w7NEJBQUljLEtBQUtoQzs7Ozs7Ozs7Ozs7OzhCQUVOLDhEQUFDa0I7OEJBQ0csNEVBQUNlO3dCQUFLQyxVQUFVLENBQUNDOzRCQUNiQSxFQUFFQyxjQUFjOzRCQUNoQm5DO3dCQUNKOzswQ0FDSSw4REFBQ29DO2dDQUNHbEIsV0FBVzlCLGtFQUFZO2dDQUN2QmlELE1BQUs7Z0NBQ0xDLE9BQU83QztnQ0FDUDhDLGFBQVk7Z0NBQ1pDLFVBQVUsQ0FBQ04sSUFBTXhDLGNBQWN3QyxFQUFFTyxNQUFNLENBQUNILEtBQUs7Ozs7OzswQ0FFakQsOERBQUNuRCxtREFBS0E7Z0NBQ0Z1RCxLQUFJO2dDQUNKQyxPQUFPO2dDQUNQQyxRQUFRO2dDQUNSQyxPQUFPO29DQUFFQyxXQUFXO2dDQUFPO2dDQUMzQkMsS0FBSTtnQ0FDSjdCLFdBQVc5QixrRUFBWTtnQ0FDdkI2RCxTQUFTO29DQUNUakQ7Z0NBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNNUIsRUFBQztHQS9GWVg7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudC9vcmdhbmlzbXMvY2hhdHRpbmcvaW5kZXgudHN4P2RiNGIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJztcblxuaW50ZXJmYWNlIElNc2dEYXRhVHlwZXMge1xuICAgIHJvb21JZDogc3RyaW5nIHwgbnVtYmVyO1xuICAgIHVzZXI6IHN0cmluZztcbiAgICBtc2c6IHN0cmluZztcbiAgICB0aW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBDaGF0dGluZyA9ICh7IHNvY2tldCwgdXNlcm5hbWUsIHJvb21JZCB9OiBhbnkpPT57XG4gICAgY29uc3QgW2N1cnJlbnRNc2csIHNldEN1cnJlbnRNc2ddID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW2NoYXQsIHNldENoYXRdID0gdXNlU3RhdGU8SU1zZ0RhdGFUeXBlc1tdPihbXSk7XG4gICAgY29uc3QgW2lzQ29ubmVjdGVkLCBzZXRJc0Nvbm5lY3RlZF0gID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICAgIGNvbnN0IGVuZE9mTWVzc2FnZXNSZWYgPSB1c2VSZWY8YW55PihudWxsKTtcbiAgICBjb25zdCBzZW5kRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgaWYgKGN1cnJlbnRNc2cgIT09IFwiXCIpIHtcbiAgICAgICAgY29uc3QgbXNnRGF0YTogSU1zZ0RhdGFUeXBlcyA9IHtcbiAgICAgICAgICAgIHJvb21JZCxcbiAgICAgICAgICAgIHVzZXI6IHVzZXJuYW1lLFxuICAgICAgICAgICAgbXNnOiBjdXJyZW50TXNnLFxuICAgICAgICAgICAgdGltZTpcbiAgICAgICAgICAgIG5ldyBEYXRlKERhdGUubm93KCkpLmdldEhvdXJzKCkgK1xuICAgICAgICAgICAgXCI6XCIgK1xuICAgICAgICAgICAgbmV3IERhdGUoRGF0ZS5ub3coKSkuZ2V0TWludXRlcygpLFxuICAgICAgICB9O1xuICAgICAgICBhd2FpdCBzb2NrZXQuZW1pdChcInNlbmRfbXNnXCIsIG1zZ0RhdGEpO1xuICAgICAgICBzZXRDdXJyZW50TXNnKFwiXCIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoIWlzQ29ubmVjdGVkKXtcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZU5ld01lc3NhZ2UgPSAoZGF0YTogSU1zZ0RhdGFUeXBlcykgPT4ge1xuICAgICAgICAgICAgICAgIHNldENoYXQoKHByZXYpID0+IFsuLi5wcmV2LCBkYXRhXSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgICAgIHNvY2tldC5vbihcInJlY2VpdmVfbXNnXCIsIGhhbmRsZU5ld01lc3NhZ2UpOyAgICBcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgc2V0SXNDb25uZWN0ZWQodHJ1ZSk7XG4gICAgICAgIH07XG4gICAgfSwgW3NvY2tldF0pO1xuXG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGVuZE9mTWVzc2FnZXNSZWYuY3VycmVudD8uc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG4gICAgfSxbY2hhdF0pXG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGF0X2JvcmRlcn0+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge2NoYXQubWFwKCh7IHJvb21JZCwgdXNlciwgbXNnLCB0aW1lIH0sIGtleSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICB1c2VyID09IHVzZXJuYW1lXG4gICAgICAgICAgICAgICAgICAgID8gc3R5bGVzLmNoYXRQcm9maWxlUmlnaHRcbiAgICAgICAgICAgICAgICAgICAgOiBzdHlsZXMuY2hhdFByb2ZpbGVMZWZ0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyICE9PSB1c2VybmFtZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy51c2VyTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PjogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSB7dXNlciA9PSB1c2VybmFtZSA/IHN0eWxlcy5zZW5kTWVzc2FnZTogc3R5bGVzLnJlY2VpdmVNZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IG1zZy5yZXBsYWNlKC9cXG4vZywgJzxici8+JykgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB7bXNnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDxkaXYgcmVmPXtlbmRPZk1lc3NhZ2VzUmVmfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VuZERhdGEoKVxuICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2N1cnJlbnRNc2d9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgbWVzc2FnZS4uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEN1cnJlbnRNc2coZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9wYXBlci1wbGFuZS5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsyNX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezI1fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG9iamVjdEZpdDogJ2NvdmVyJ319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiU3luYy1Db2Rlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZW5kRGF0YSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj4pXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJJbWFnZSIsInN0eWxlcyIsIkNoYXR0aW5nIiwic29ja2V0IiwidXNlcm5hbWUiLCJyb29tSWQiLCJjdXJyZW50TXNnIiwic2V0Q3VycmVudE1zZyIsImNoYXQiLCJzZXRDaGF0IiwiaXNDb25uZWN0ZWQiLCJzZXRJc0Nvbm5lY3RlZCIsImVuZE9mTWVzc2FnZXNSZWYiLCJzZW5kRGF0YSIsIm1zZ0RhdGEiLCJ1c2VyIiwibXNnIiwidGltZSIsIkRhdGUiLCJub3ciLCJnZXRIb3VycyIsImdldE1pbnV0ZXMiLCJlbWl0IiwiaGFuZGxlTmV3TWVzc2FnZSIsImRhdGEiLCJwcmV2Iiwib24iLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImNoYXRfYm9yZGVyIiwibWFwIiwia2V5IiwiY2hhdFByb2ZpbGVSaWdodCIsImNoYXRQcm9maWxlTGVmdCIsInVzZXJOYW1lIiwic2VuZE1lc3NhZ2UiLCJyZWNlaXZlTWVzc2FnZSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwicmVwbGFjZSIsInJlZiIsImZvcm0iLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInRhcmdldCIsInNyYyIsIndpZHRoIiwiaGVpZ2h0Iiwic3R5bGUiLCJvYmplY3RGaXQiLCJhbHQiLCJpbWFnZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/component/organisms/chatting/index.tsx\n"));

/***/ })

});