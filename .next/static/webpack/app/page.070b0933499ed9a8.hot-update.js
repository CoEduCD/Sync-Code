"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/component/organisms/header/index.tsx":
/*!**************************************************!*\
  !*** ./src/component/organisms/header/index.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles.module.scss */ \"(app-pages-browser)/./src/component/organisms/header/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _api_user_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/api/user/api */ \"(app-pages-browser)/./src/api/user/api.ts\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recoil */ \"(app-pages-browser)/./node_modules/recoil/es/index.js\");\n/* harmony import */ var _recoil_userId__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/recoil/userId */ \"(app-pages-browser)/./src/recoil/userId.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Header = ()=>{\n    var _session_user, _session_user1, _session_user2;\n    _s();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    const [showUserBox, setShowUserBox] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [userId, setUserId] = (0,recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilState)(_recoil_userId__WEBPACK_IMPORTED_MODULE_6__.user_id);\n    const handleLogin = async ()=>{\n        await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signIn)(\"google\", {\n            callbackUrl: \"/\"\n        });\n        await (0,_api_user_api__WEBPACK_IMPORTED_MODULE_4__.postUserLoginInfo)(session, setUserId);\n    };\n    const handleLogout = ()=>{\n        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signOut)();\n        setUserId(undefined);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: \"/logo.jpg\",\n                    width: 100,\n                    height: 100,\n                    style: {\n                        objectFit: \"cover\",\n                        marginLeft: 20\n                    },\n                    alt: \"Sync-Codes\"\n                }, void 0, false, {\n                    fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/header/index.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/header/index.tsx\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, undefined),\n            session ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().loginBox),\n                        onMouseOver: ()=>setShowUserBox(true),\n                        onMouseLeave: ()=>setShowUserBox(false),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.name\n                            }, void 0, false, {\n                                fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/header/index.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 21\n                            }, undefined),\n                            \"님 안녕하세요 \\uD83D\\uDC69\\uD83C\\uDFFB‍\\uD83D\\uDCBB\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/header/index.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, undefined),\n                    showUserBox && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().userBox),\n                        onMouseOver: ()=>setShowUserBox(true),\n                        onMouseLeave: ()=>setShowUserBox(false),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: ((_session_user1 = session.user) === null || _session_user1 === void 0 ? void 0 : _session_user1.image) || \"\",\n                                style: {\n                                    objectFit: \"cover\"\n                                },\n                                width: 80,\n                                height: 80,\n                                alt: \"유저이미지\"\n                            }, void 0, false, {\n                                fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/header/index.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    fontSize: 13,\n                                    marginTop: 5\n                                },\n                                children: (_session_user2 = session.user) === null || _session_user2 === void 0 ? void 0 : _session_user2.email\n                            }, void 0, false, {\n                                fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/header/index.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: ()=>handleLogout(),\n                                style: {\n                                    marginTop: 5,\n                                    fontWeight: 500\n                                },\n                                children: \"로그아웃\"\n                            }, void 0, false, {\n                                fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/header/index.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/header/index.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: ()=>handleLogin(),\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().loginBox),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: \"/GoogleLogo.png\",\n                        width: 30,\n                        height: 30,\n                        style: {\n                            objectFit: \"cover\",\n                            transform: \"translate(-10px,10px)\"\n                        },\n                        alt: \"구글\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/header/index.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 21\n                    }, undefined),\n                    \"Sign with Google\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/header/index.tsx\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yunmijeong/Desktop/project/sync-code-clinet/src/component/organisms/header/index.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Header, \"a3jVPAQOuVCmpj4ylnhoHhcZ7Ho=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession,\n        recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilState\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnQvb3JnYW5pc21zL2hlYWRlci9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDbUQ7QUFDVjtBQUNWO0FBQzhCO0FBQ1Y7QUFDTTtBQUNmO0FBQ2I7QUFDN0IsTUFBTVcsU0FBUztRQWlDWUMsZUFVT0EsZ0JBTWlDQTs7SUFoRC9ELE1BQU0sRUFBRUMsTUFBTUQsT0FBTyxFQUFFLEdBQUdOLDJEQUFVQTtJQUNwQyxNQUFNLENBQUNRLGFBQWFDLGVBQWUsR0FBR2QsK0NBQVFBLENBQVU7SUFDeEQsTUFBTSxDQUFDZSxRQUFRQyxVQUFVLEdBQUdULHNEQUFjQSxDQUFDQyxtREFBT0E7SUFFbEQsTUFBTVMsY0FBYztRQUNoQixNQUFNZCx1REFBTUEsQ0FBQyxVQUFVO1lBQUNlLGFBQWE7UUFBSTtRQUN6QyxNQUFNWixnRUFBaUJBLENBQUNLLFNBQVNLO0lBRXJDO0lBQ0EsTUFBTUcsZUFBYztRQUNoQmYsd0RBQU9BO1FBQ1BZLFVBQVVJO0lBQ2Q7SUFDQSxxQkFDQSw4REFBQ0M7UUFBSUMsV0FBV3JCLHNFQUFnQjs7MEJBQzVCLDhEQUFDUSxrREFBSUE7Z0JBQUNlLE1BQU87MEJBQ1QsNEVBQUN0QixtREFBS0E7b0JBQ0V1QixLQUFJO29CQUNKQyxPQUFPO29CQUNQQyxRQUFRO29CQUNSQyxPQUFPO3dCQUFFQyxXQUFXO3dCQUFTQyxZQUFXO29CQUFFO29CQUMxQ0MsS0FBSTs7Ozs7Ozs7Ozs7WUFJWnBCLHdCQUNBOztrQ0FDSSw4REFBQ1U7d0JBQ0dDLFdBQVdyQixxRUFBZTt3QkFDMUJnQyxhQUFlLElBQUluQixlQUFlO3dCQUNsQ29CLGNBQWMsSUFBSXBCLGVBQWU7OzBDQUVqQyw4REFBQ3FCOzJDQUFNeEIsZ0JBQUFBLFFBQVF5QixJQUFJLGNBQVp6QixvQ0FBQUEsY0FBYzBCLElBQUk7Ozs7Ozs0QkFBUTs7Ozs7OztvQkFHakN4Qiw2QkFDQSw4REFBQ1E7d0JBQ0dDLFdBQVdyQixvRUFBYzt3QkFDekJnQyxhQUFlLElBQUluQixlQUFlO3dCQUNsQ29CLGNBQWMsSUFBSXBCLGVBQWU7OzBDQUVqQyw4REFBQ1osbURBQUtBO2dDQUNGdUIsS0FBTWQsRUFBQUEsaUJBQUFBLFFBQVF5QixJQUFJLGNBQVp6QixxQ0FBQUEsZUFBYzRCLEtBQUssS0FBRTtnQ0FDM0JYLE9BQU87b0NBQUVDLFdBQVc7Z0NBQU87Z0NBQzNCSCxPQUFPO2dDQUNQQyxRQUFRO2dDQUNSSSxLQUFJOzs7Ozs7MENBRVIsOERBQUNWO2dDQUFJTyxPQUFPO29DQUFDWSxVQUFVO29DQUFJQyxXQUFXO2dDQUFDOzJDQUFJOUIsaUJBQUFBLFFBQVF5QixJQUFJLGNBQVp6QixxQ0FBQUEsZUFBYytCLEtBQUs7Ozs7OzswQ0FDOUQsOERBQUNyQjtnQ0FBSXNCLFNBQVMsSUFBSXhCO2dDQUFnQlMsT0FBTztvQ0FBQ2EsV0FBVTtvQ0FBR0csWUFBWTtnQ0FBRzswQ0FBRzs7Ozs7Ozs7Ozs7Ozs2Q0FJckYsOERBQUN2QjtnQkFDR3NCLFNBQVMsSUFBTTFCO2dCQUNmSyxXQUFXckIscUVBQWU7O2tDQUN0Qiw4REFBQ0MsbURBQUtBO3dCQUNGdUIsS0FBSTt3QkFDSkMsT0FBTzt3QkFDUEMsUUFBUTt3QkFDUkMsT0FBTzs0QkFBRUMsV0FBVzs0QkFBU2dCLFdBQVU7d0JBQXVCO3dCQUM5RGQsS0FBSTs7Ozs7O29CQUNOOzs7Ozs7Ozs7Ozs7O0FBTXRCO0dBckVNckI7O1FBQ3dCTCx1REFBVUE7UUFFUkUsa0RBQWNBOzs7S0FIeENHO0FBc0VOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnQvb3JnYW5pc21zL2hlYWRlci9pbmRleC50c3g/OTA1NiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IHsgc2lnbkluLCBzaWduT3V0LCB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0J1xuaW1wb3J0IHsgcG9zdFVzZXJMb2dpbkluZm8gfSBmcm9tICdAL2FwaS91c2VyL2FwaSc7XG5pbXBvcnQgeyBTZXR0ZXJPclVwZGF0ZXIsIHVzZVJlY29pbFN0YXRlIH0gZnJvbSAncmVjb2lsJztcbmltcG9ydCB7IHVzZXJfaWQgfSBmcm9tICdAL3JlY29pbC91c2VySWQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmNvbnN0IEhlYWRlciA9ICgpPT57XG4gICAgY29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKCk7XG4gICAgY29uc3QgW3Nob3dVc2VyQm94LCBzZXRTaG93VXNlckJveF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gICAgY29uc3QgW3VzZXJJZCwgc2V0VXNlcklkXSA9IHVzZVJlY29pbFN0YXRlKHVzZXJfaWQpO1xuICAgIFxuICAgIGNvbnN0IGhhbmRsZUxvZ2luID0gYXN5bmMgKCk9PntcbiAgICAgICAgYXdhaXQgc2lnbkluKFwiZ29vZ2xlXCIsIHtjYWxsYmFja1VybDogXCIvXCIgfSk7XG4gICAgICAgIGF3YWl0IHBvc3RVc2VyTG9naW5JbmZvKHNlc3Npb24sIHNldFVzZXJJZCk7ICAgICAgICAgICAgXG5cbiAgICB9XG4gICAgY29uc3QgaGFuZGxlTG9nb3V0PSAoKT0+e1xuICAgICAgICBzaWduT3V0KCk7XG4gICAgICAgIHNldFVzZXJJZCh1bmRlZmluZWQpO1xuICAgIH1cbiAgICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8TGluayBocmVmPXtgL2B9PlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi9sb2dvLmpwZ1wiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMDB9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17MTAwfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBvYmplY3RGaXQ6ICdjb3ZlcicsIG1hcmdpbkxlZnQ6MjB9fVxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJTeW5jLUNvZGVzXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHNlc3Npb24gPyBcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubG9naW5Cb3h9XG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VPdmVyID0geygpPT5zZXRTaG93VXNlckJveCh0cnVlKX1cbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKT0+c2V0U2hvd1VzZXJCb3goZmFsc2UpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Nlc3Npb24udXNlcj8ubmFtZX08L3NwYW4+64uYIOyViOuFle2VmOyEuOyalCDwn5Gp8J+Pu+KAjfCfkrtcbiAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzaG93VXNlckJveCAmJiBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnVzZXJCb3h9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlT3ZlciA9IHsoKT0+c2V0U2hvd1VzZXJCb3godHJ1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpPT5zZXRTaG93VXNlckJveChmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0ge3Nlc3Npb24udXNlcj8uaW1hZ2V8fFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgb2JqZWN0Rml0OiAnY292ZXInfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17ODB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs4MH0gIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIuycoOyggOydtOuvuOyngFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRTaXplOiAxMywgbWFyZ2luVG9wOiA1fX0+e3Nlc3Npb24udXNlcj8uZW1haWx9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpPT5oYW5kbGVMb2dvdXQoKX0gc3R5bGU9e3ttYXJnaW5Ub3A6NSwgZm9udFdlaWdodDogNTAwfX0+66Gc6re47JWE7JuDPC9kaXY+IFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8Lz46XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlTG9naW4oKX0gXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubG9naW5Cb3h9PlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9Hb29nbGVMb2dvLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzB9XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezMwfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgb2JqZWN0Rml0OiAnY292ZXInLCB0cmFuc2Zvcm06J3RyYW5zbGF0ZSgtMTBweCwxMHB4KSd9fVxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwi6rWs6riAXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgU2lnbiB3aXRoIEdvb2dsZVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICBcbiAgICA8L2Rpdj4pXG59XG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJJbWFnZSIsInNpZ25JbiIsInNpZ25PdXQiLCJ1c2VTZXNzaW9uIiwicG9zdFVzZXJMb2dpbkluZm8iLCJ1c2VSZWNvaWxTdGF0ZSIsInVzZXJfaWQiLCJMaW5rIiwiSGVhZGVyIiwic2Vzc2lvbiIsImRhdGEiLCJzaG93VXNlckJveCIsInNldFNob3dVc2VyQm94IiwidXNlcklkIiwic2V0VXNlcklkIiwiaGFuZGxlTG9naW4iLCJjYWxsYmFja1VybCIsImhhbmRsZUxvZ291dCIsInVuZGVmaW5lZCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImhyZWYiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsInN0eWxlIiwib2JqZWN0Rml0IiwibWFyZ2luTGVmdCIsImFsdCIsImxvZ2luQm94Iiwib25Nb3VzZU92ZXIiLCJvbk1vdXNlTGVhdmUiLCJzcGFuIiwidXNlciIsIm5hbWUiLCJ1c2VyQm94IiwiaW1hZ2UiLCJmb250U2l6ZSIsIm1hcmdpblRvcCIsImVtYWlsIiwib25DbGljayIsImZvbnRXZWlnaHQiLCJ0cmFuc2Zvcm0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/component/organisms/header/index.tsx\n"));

/***/ })

});