"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts/[slug]",{

/***/ "./components/posts/post-detail/post-content.js":
/*!******************************************************!*\
  !*** ./components/posts/post-detail/post-content.js ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PostContent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _post_content_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post-content.module.css */ \"./components/posts/post-detail/post-content.module.css\");\n/* harmony import */ var _post_content_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_post_content_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _post_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post-header */ \"./components/posts/post-detail/post-header.js\");\n\n\n\nfunction PostContent(param) {\n    let { post } = param;\n    const imagePath = \"/images/posts/\".concat(post.slug, \"/\").concat(post.image);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        className: (_post_content_module_css__WEBPACK_IMPORTED_MODULE_2___default().content),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_post_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                title: post.title,\n                image: imagePath\n            }, void 0, false, {\n                fileName: \"/Users/kastastin/next14-course/next-blog/components/posts/post-detail/post-content.js\",\n                lineNumber: 9,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostBody, {\n                children: post.content\n            }, void 0, false, {\n                fileName: \"/Users/kastastin/next14-course/next-blog/components/posts/post-detail/post-content.js\",\n                lineNumber: 10,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kastastin/next14-course/next-blog/components/posts/post-detail/post-content.js\",\n        lineNumber: 8,\n        columnNumber: 3\n    }, this);\n}\n_c = PostContent;\nvar _c;\n$RefreshReg$(_c, \"PostContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Bvc3RzL3Bvc3QtZGV0YWlsL3Bvc3QtY29udGVudC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWdEO0FBQ1Q7QUFFeEIsU0FBU0UsWUFBWSxLQUFRO1FBQVIsRUFBRUMsSUFBSSxFQUFFLEdBQVI7SUFDbkMsTUFBTUMsWUFBWSxpQkFBOEJELE9BQWJBLEtBQUtFLElBQUksRUFBQyxLQUFjLE9BQVhGLEtBQUtHLEtBQUs7SUFFMUQscUJBQ0MsOERBQUNDO1FBQVFDLFdBQVdSLHlFQUFlOzswQkFDbEMsOERBQUNDLG9EQUFVQTtnQkFBQ1MsT0FBT1AsS0FBS08sS0FBSztnQkFBRUosT0FBT0Y7Ozs7OzswQkFDdEMsOERBQUNPOzBCQUFVUixLQUFLTSxPQUFPOzs7Ozs7Ozs7Ozs7QUFHMUI7S0FUd0JQIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcG9zdHMvcG9zdC1kZXRhaWwvcG9zdC1jb250ZW50LmpzP2Q4YmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vcG9zdC1jb250ZW50Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCBQb3N0SGVhZGVyIGZyb20gXCIuL3Bvc3QtaGVhZGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RDb250ZW50KHsgcG9zdCB9KSB7XG5cdGNvbnN0IGltYWdlUGF0aCA9IGAvaW1hZ2VzL3Bvc3RzLyR7cG9zdC5zbHVnfS8ke3Bvc3QuaW1hZ2V9YDtcblxuXHRyZXR1cm4gKFxuXHRcdDxhcnRpY2xlIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cblx0XHRcdDxQb3N0SGVhZGVyIHRpdGxlPXtwb3N0LnRpdGxlfSBpbWFnZT17aW1hZ2VQYXRofSAvPlxuXHRcdFx0PFBvc3RCb2R5Pntwb3N0LmNvbnRlbnR9PC9Qb3N0Qm9keT5cblx0XHQ8L2FydGljbGU+XG5cdCk7XG59XG4iXSwibmFtZXMiOlsiY2xhc3NlcyIsIlBvc3RIZWFkZXIiLCJQb3N0Q29udGVudCIsInBvc3QiLCJpbWFnZVBhdGgiLCJzbHVnIiwiaW1hZ2UiLCJhcnRpY2xlIiwiY2xhc3NOYW1lIiwiY29udGVudCIsInRpdGxlIiwiUG9zdEJvZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/posts/post-detail/post-content.js\n"));

/***/ })

});