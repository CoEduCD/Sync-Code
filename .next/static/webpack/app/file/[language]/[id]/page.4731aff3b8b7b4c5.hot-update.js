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

/***/ "(app-pages-browser)/./src/api/file/api.ts":
/*!*****************************!*\
  !*** ./src/api/file/api.ts ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createNewFile: function() { return /* binding */ createNewFile; },\n/* harmony export */   deleteFile: function() { return /* binding */ deleteFile; },\n/* harmony export */   getUserFilesList: function() { return /* binding */ getUserFilesList; },\n/* harmony export */   modifyFileContents: function() { return /* binding */ modifyFileContents; }\n/* harmony export */ });\n/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/axios */ \"(app-pages-browser)/./src/utils/axios.ts\");\n\nconst createNewFile = async (userId, language, fileHash)=>{\n    try {\n        let data = {\n            \"user_id\": userId,\n            \"fileName\": \"fileName\",\n            \"language\": language,\n            \"fileDetail\": \"\",\n            \"fileHash\": fileHash\n        };\n        const res = await (0,_utils_axios__WEBPACK_IMPORTED_MODULE_0__.fetchFromApi)(\"POST\", \"/file/create\", data);\n        console.log(res.data);\n    } catch (e) {\n        console.log(e);\n    }\n};\nconst getUserFilesList = async (userId, setFileList)=>{\n    try {\n        const res = await (0,_utils_axios__WEBPACK_IMPORTED_MODULE_0__.fetchFromApi)(\"GET\", \"/file/\".concat(userId));\n        setFileList(res.data);\n        console.log(res.data);\n    } catch (e) {\n        console.log(e);\n    }\n};\nconst modifyFileContents = async (fileInfo, codeData)=>{\n    try {\n        let data = {\n            \"fileId\": fileInfo.fileId,\n            \"fileName\": fileInfo.fileName,\n            \"language\": fileInfo.language,\n            \"fileDetail\": codeData\n        };\n        const res = await (0,_utils_axios__WEBPACK_IMPORTED_MODULE_0__.fetchFromApi)(\"PATCH\", \"/file/edit\", data);\n        console.log(res.data);\n    } catch (e) {\n        console.log(e);\n    }\n};\nconst deleteFile = async (fileId)=>{\n    try {\n        let data = {\n            \"file_id\": fileId\n        };\n        const res = await (0,_utils_axios__WEBPACK_IMPORTED_MODULE_0__.fetchFromApi)(\"DELETE\", \"/file/delete\", data);\n        console.log(res.data);\n    } catch (e) {\n        console.log(e);\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcGkvZmlsZS9hcGkudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDNkM7QUFDdEMsTUFBTUMsZ0JBQWdCLE9BQU9DLFFBQWVDLFVBQWlCQztJQUNoRSxJQUFJO1FBQ0osSUFBSUMsT0FBTztZQUNMLFdBQVdIO1lBQ1gsWUFBWTtZQUNaLFlBQVlDO1lBQ1osY0FBYztZQUNkLFlBQVlDO1FBQ2Q7UUFDRixNQUFNRSxNQUFNLE1BQU1OLDBEQUFZQSxDQUFDLFFBQVEsZ0JBQWdCSztRQUN2REUsUUFBUUMsR0FBRyxDQUFDRixJQUFJRCxJQUFJO0lBQ3RCLEVBQUUsT0FBT0ksR0FBRztRQUNWRixRQUFRQyxHQUFHLENBQUNDO0lBQ2Q7QUFDSixFQUFDO0FBQ00sTUFBTUMsbUJBQW1CLE9BQU9SLFFBQWNTO0lBQ2pELElBQUk7UUFDRixNQUFNTCxNQUFNLE1BQU1OLDBEQUFZQSxDQUFDLE9BQU8sU0FBZ0IsT0FBUEU7UUFDL0NTLFlBQVlMLElBQUlELElBQUk7UUFDcEJFLFFBQVFDLEdBQUcsQ0FBQ0YsSUFBSUQsSUFBSTtJQUN0QixFQUFFLE9BQU9JLEdBQUc7UUFDVkYsUUFBUUMsR0FBRyxDQUFDQztJQUNkO0FBQ0osRUFBQztBQUVNLE1BQU1HLHFCQUFxQixPQUFPQyxVQUFvQkM7SUFDM0QsSUFBSTtRQUNGLElBQUlULE9BQU87WUFDVCxVQUFVUSxTQUFTRSxNQUFNO1lBQ3pCLFlBQVlGLFNBQVNHLFFBQVE7WUFDN0IsWUFBWUgsU0FBU1YsUUFBUTtZQUM3QixjQUFjVztRQUNoQjtRQUNBLE1BQU1SLE1BQU0sTUFBTU4sMERBQVlBLENBQUMsU0FBVSxjQUFhSztRQUN0REUsUUFBUUMsR0FBRyxDQUFDRixJQUFJRCxJQUFJO0lBQ3RCLEVBQUUsT0FBT0ksR0FBRztRQUNWRixRQUFRQyxHQUFHLENBQUNDO0lBQ2Q7QUFDRixFQUFDO0FBR00sTUFBTVEsYUFBYSxPQUFPRjtJQUMvQixJQUFJO1FBQ0YsSUFBSVYsT0FBTztZQUNULFdBQVlVO1FBQ2Q7UUFDQSxNQUFNVCxNQUFNLE1BQU1OLDBEQUFZQSxDQUFDLFVBQVcsZ0JBQWVLO1FBQ3pERSxRQUFRQyxHQUFHLENBQUNGLElBQUlELElBQUk7SUFDdEIsRUFBRSxPQUFPSSxHQUFHO1FBQ1ZGLFFBQVFDLEdBQUcsQ0FBQ0M7SUFDZDtBQUNGLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwaS9maWxlL2FwaS50cz9mMjcwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvZGVGaWxlIH0gZnJvbSBcIkAvQHR5cGUvZmlsZS9pbnRlcmZhY2VcIjtcbmltcG9ydCB7IGZldGNoRnJvbUFwaSB9IGZyb20gXCJAL3V0aWxzL2F4aW9zXCI7XG5leHBvcnQgY29uc3QgY3JlYXRlTmV3RmlsZSA9IGFzeW5jICh1c2VySWQ6bnVtYmVyLCBsYW5ndWFnZTpzdHJpbmcsIGZpbGVIYXNoOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICB0cnkge1xuICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgIFwidXNlcl9pZFwiOiB1c2VySWQsXG4gICAgICAgICAgXCJmaWxlTmFtZVwiOiBcImZpbGVOYW1lXCIsXG4gICAgICAgICAgXCJsYW5ndWFnZVwiOiBsYW5ndWFnZSxcbiAgICAgICAgICBcImZpbGVEZXRhaWxcIjogXCJcIixcbiAgICAgICAgICBcImZpbGVIYXNoXCI6IGZpbGVIYXNoLFxuICAgICAgICB9XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaEZyb21BcGkoJ1BPU1QnLCAnL2ZpbGUvY3JlYXRlJywgZGF0YSk7XG4gICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSlcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB9XG59XG5leHBvcnQgY29uc3QgZ2V0VXNlckZpbGVzTGlzdCA9IGFzeW5jICh1c2VySWQ6bnVtYmVyLHNldEZpbGVMaXN0OiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxDb2RlRmlsZVtdfFtdPj4pOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2hGcm9tQXBpKCdHRVQnLCBgL2ZpbGUvJHt1c2VySWR9YCk7XG4gICAgICBzZXRGaWxlTGlzdChyZXMuZGF0YSlcbiAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBtb2RpZnlGaWxlQ29udGVudHMgPSBhc3luYyAoZmlsZUluZm86IENvZGVGaWxlLCBjb2RlRGF0YTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gIHRyeSB7XG4gICAgbGV0IGRhdGEgPSB7XG4gICAgICBcImZpbGVJZFwiOiBmaWxlSW5mby5maWxlSWQsXG4gICAgICBcImZpbGVOYW1lXCI6IGZpbGVJbmZvLmZpbGVOYW1lLFxuICAgICAgXCJsYW5ndWFnZVwiOiBmaWxlSW5mby5sYW5ndWFnZSxcbiAgICAgIFwiZmlsZURldGFpbFwiOiBjb2RlRGF0YVxuICAgIH1cbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaEZyb21BcGkoJ1BBVENIJywgYC9maWxlL2VkaXRgLCBkYXRhKTtcbiAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBjb25zdCBkZWxldGVGaWxlID0gYXN5bmMgKGZpbGVJZDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gIHRyeSB7XG4gICAgbGV0IGRhdGEgPSB7XG4gICAgICBcImZpbGVfaWRcIiA6IGZpbGVJZFxuICAgIH1cbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaEZyb21BcGkoJ0RFTEVURScsIGAvZmlsZS9kZWxldGVgLCBkYXRhKTtcbiAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgfVxufVxuXG4iXSwibmFtZXMiOlsiZmV0Y2hGcm9tQXBpIiwiY3JlYXRlTmV3RmlsZSIsInVzZXJJZCIsImxhbmd1YWdlIiwiZmlsZUhhc2giLCJkYXRhIiwicmVzIiwiY29uc29sZSIsImxvZyIsImUiLCJnZXRVc2VyRmlsZXNMaXN0Iiwic2V0RmlsZUxpc3QiLCJtb2RpZnlGaWxlQ29udGVudHMiLCJmaWxlSW5mbyIsImNvZGVEYXRhIiwiZmlsZUlkIiwiZmlsZU5hbWUiLCJkZWxldGVGaWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/api/file/api.ts\n"));

/***/ })

});