/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Nav */ \"./components/Nav.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/zsoka/Ironhack/Course/FINAL_PROJECT_GYMMIE/gymmie-frontend/components/Header.tsx\";\n\n\n\nfunction Header() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderStyles, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"navbar\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Logo, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n          href: \"/\",\n          children: \"gymmie\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 10,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Nav__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, this);\n}\n_c = Header;\nvar Logo = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.h1.withConfig({\n  displayName: \"Header__Logo\",\n  componentId: \"sc-okjhof-0\"\n})([\"font-size:4rem;margin-left:2rem;position:relative;z-index:2;\"]);\n_c2 = Logo;\nvar HeaderStyles = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.header.withConfig({\n  displayName: \"Header__HeaderStyles\",\n  componentId: \"sc-okjhof-1\"\n})([\".navbar{border-bottom:3px solid var(--darkest-color);display:flex;justify-content:space-between;align-items:center;background-color:\", \";}\"], function (_ref) {\n  var theme = _ref.theme;\n  return theme.bg.primary;\n});\n_c3 = HeaderStyles;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Header\");\n$RefreshReg$(_c2, \"Logo\");\n$RefreshReg$(_c3, \"HeaderStyles\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIudHN4P2RkYjgiXSwibmFtZXMiOlsiSGVhZGVyIiwiTG9nbyIsInN0eWxlZCIsIkhlYWRlclN0eWxlcyIsInRoZW1lIiwiYmciLCJwcmltYXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxHQUFrQjtBQUMvQixzQkFDRSw4REFBQyxZQUFEO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsUUFBZjtBQUFBLDhCQUNFLDhEQUFDLElBQUQ7QUFBQSwrQkFDRSw4REFBQyxrREFBRDtBQUFNLGNBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBSUUsOERBQUMseUNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVVEO0tBWHVCQSxNO0FBYXhCLElBQU1DLElBQUksR0FBR0Msb0VBQUg7QUFBQTtBQUFBO0FBQUEsb0VBQVY7TUFBTUQsSTtBQU9OLElBQU1FLFlBQVksR0FBR0Qsd0VBQUg7QUFBQTtBQUFBO0FBQUEsbUpBTU07QUFBQSxNQUFHRSxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNDLEVBQU4sQ0FBU0MsT0FBeEI7QUFBQSxDQU5OLENBQWxCO01BQU1ILFkiLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgTmF2IGZyb20gJy4vTmF2JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxIZWFkZXJTdHlsZXM+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxuICAgICAgICA8TG9nbz5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPmd5bW1pZTwvTGluaz5cbiAgICAgICAgPC9Mb2dvPlxuICAgICAgICA8TmF2IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L0hlYWRlclN0eWxlcz5cbiAgKTtcbn1cblxuY29uc3QgTG9nbyA9IHN0eWxlZC5oMWBcbiAgZm9udC1zaXplOiA0cmVtO1xuICBtYXJnaW4tbGVmdDogMnJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xuYDtcblxuY29uc3QgSGVhZGVyU3R5bGVzID0gc3R5bGVkLmhlYWRlcmBcbiAgLm5hdmJhciB7XG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHZhcigtLWRhcmtlc3QtY29sb3IpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5iZy5wcmltYXJ5fTtcbiAgfVxuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.tsx\n");

/***/ })

});