/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Page.tsx":
/*!*****************************!*\
  !*** ./components/Page.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"./components/Header.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/zsoka/Ironhack/Course/FINAL_PROJECT_GYMMIE/gymmie-frontend/components/Page.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction Page(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('light'),\n      theme = _useState[0],\n      setTheme = _useState[1];\n\n  var themeMode = theme === \"light\" ? \"dark\" : \"light\";\n\n  var toggleTheme = function toggleTheme() {\n    localStorage.setItem(\"theme\", themeMode);\n    setTheme(themeMode);\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    var localTheme = localStorage.getItem(\"theme\");\n    localTheme && setTheme(localTheme);\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {\n      theme: theme == 'light' ? lightTheme : darkTheme,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalStyles, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(InnerStyles, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          onClick: toggleTheme,\n          children: \"Light/Dark\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 13\n        }, this), children]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this)\n  }, void 0, false);\n}\n\n_s(Page, \"Z8UCD9KudyQA62DCQ9e5cf9+m5k=\");\n\n_c = Page;\nvar GlobalStyles = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.createGlobalStyle)([\":root{--darkest-color:#0C0032;--dark-color:#190061;--medium-color:#240090;--light-color:#3500d3;--bright-color:#7ed0e1;--darkGrey:#282828;--lightGrey:#f5f5f5;--mediumGrey:#aaabb8;--offWhite:#ededed;--maxWidth:1000px;--bs:0 12px 24px 0 rgba(0,0,0,0,.09)}html{box-sizing:border-box;font-size:62.5%;}*,*:before,*:after{box-sizing:inherit;}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;padding:0;margin:0;font-size:1.5rem;line-height:1;}a{text-decoration:none;color:var(--light-color);}a:hover{text-decoration:underline;color:var(--bright-color);}button{font-family:--apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;}\"]);\n_c2 = GlobalStyles;\nvar InnerStyles = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div.withConfig({\n  displayName: \"Page__InnerStyles\",\n  componentId: \"sc-1mmdsed-0\"\n})([\"max-width:var(--maxWidth);margin:0 auto;padding:2rem;\"]);\n_c3 = InnerStyles;\nvar lightTheme = {\n  bg: {\n    primary: '#ffffff',\n    secondary: '#7ed0e1',\n    tertiary: '#525560',\n    quarternary: '#f5f5f5'\n  },\n  text: {\n    primary: '#0C0032',\n    secondary: '#190061',\n    ternary: '#240090',\n    quarternary: '#3500d3'\n  }\n};\nvar darkTheme = {\n  bg: {\n    primary: '#0C0032',\n    secondary: '#190061',\n    ternary: '#240090',\n    quarternary: '#3500d3'\n  },\n  text: {\n    primary: '#ffffff',\n    secondary: '#7ed0e1',\n    tertiary: '#525560',\n    quarternary: '#f5f5f5'\n  }\n};\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Page\");\n$RefreshReg$(_c2, \"GlobalStyles\");\n$RefreshReg$(_c3, \"InnerStyles\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlLnRzeD9jZDE2Il0sIm5hbWVzIjpbIlBhZ2UiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwidGhlbWUiLCJzZXRUaGVtZSIsInRoZW1lTW9kZSIsInRvZ2dsZVRoZW1lIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInVzZUVmZmVjdCIsImxvY2FsVGhlbWUiLCJnZXRJdGVtIiwibGlnaHRUaGVtZSIsImRhcmtUaGVtZSIsIkdsb2JhbFN0eWxlcyIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiSW5uZXJTdHlsZXMiLCJzdHlsZWQiLCJiZyIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJ0ZXJ0aWFyeSIsInF1YXJ0ZXJuYXJ5IiwidGV4dCIsInRlcm5hcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxPQUE0QjtBQUFBOztBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTs7QUFBQSxrQkFDZkMsK0NBQVEsQ0FBQyxPQUFELENBRE87QUFBQSxNQUNsQ0MsS0FEa0M7QUFBQSxNQUMzQkMsUUFEMkI7O0FBRXpDLE1BQU1DLFNBQVMsR0FBR0YsS0FBSyxLQUFLLE9BQVYsR0FBb0IsTUFBcEIsR0FBNkIsT0FBL0M7O0FBRUEsTUFBTUcsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QkMsZ0JBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixFQUE4QkgsU0FBOUI7QUFDQUQsWUFBUSxDQUFDQyxTQUFELENBQVI7QUFDRCxHQUhEOztBQUtBSSxrREFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxVQUFVLEdBQUdILFlBQVksQ0FBQ0ksT0FBYixDQUFxQixPQUFyQixDQUFuQjtBQUNBRCxjQUFVLElBQUlOLFFBQVEsQ0FBQ00sVUFBRCxDQUF0QjtBQUNELEdBSFEsRUFHTixFQUhNLENBQVQ7QUFLQSxzQkFDRTtBQUFBLDJCQUNFLDhEQUFDLDREQUFEO0FBQWUsV0FBSyxFQUFFUCxLQUFLLElBQUksT0FBVCxHQUFtQlMsVUFBbkIsR0FBZ0NDLFNBQXREO0FBQUEsOEJBQ0UsOERBQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFSSw4REFBQyw0Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFHSSw4REFBQyxXQUFEO0FBQUEsZ0NBQ0U7QUFBUSxpQkFBTyxFQUFFUCxXQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQUVHTCxRQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBYUQ7O0dBM0J1QkQsSTs7S0FBQUEsSTtBQTZCeEIsSUFBTWMsWUFBWSxHQUFHQyxvRUFBSCxtd0JBQWxCO01BQU1ELFk7QUE4Q04sSUFBTUUsV0FBVyxHQUFHQyxxRUFBSDtBQUFBO0FBQUE7QUFBQSw2REFBakI7TUFBTUQsVztBQU1OLElBQU1KLFVBQVUsR0FBRztBQUNqQk0sSUFBRSxFQUFFO0FBQ0ZDLFdBQU8sRUFBRSxTQURQO0FBRUZDLGFBQVMsRUFBRSxTQUZUO0FBR0ZDLFlBQVEsRUFBRSxTQUhSO0FBSUZDLGVBQVcsRUFBRTtBQUpYLEdBRGE7QUFPakJDLE1BQUksRUFBRTtBQUNKSixXQUFPLEVBQUUsU0FETDtBQUVKQyxhQUFTLEVBQUUsU0FGUDtBQUdKSSxXQUFPLEVBQUUsU0FITDtBQUlKRixlQUFXLEVBQUU7QUFKVDtBQVBXLENBQW5CO0FBZUEsSUFBTVQsU0FBUyxHQUFHO0FBQ2hCSyxJQUFFLEVBQUU7QUFDRkMsV0FBTyxFQUFFLFNBRFA7QUFFRkMsYUFBUyxFQUFFLFNBRlQ7QUFHRkksV0FBTyxFQUFFLFNBSFA7QUFJRkYsZUFBVyxFQUFFO0FBSlgsR0FEWTtBQU9oQkMsTUFBSSxFQUFFO0FBQ0pKLFdBQU8sRUFBRSxTQURMO0FBRUpDLGFBQVMsRUFBRSxTQUZQO0FBR0pDLFlBQVEsRUFBRSxTQUhOO0FBSUpDLGVBQVcsRUFBRTtBQUpUO0FBUFUsQ0FBbEIiLCJmaWxlIjoiLi9jb21wb25lbnRzL1BhZ2UudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQsIHsgY3JlYXRlR2xvYmFsU3R5bGUsIFRoZW1lUHJvdmlkZXIgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSh7IGNoaWxkcmVuIH0pIHtcbiAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZSgnbGlnaHQnKTtcbiAgY29uc3QgdGhlbWVNb2RlID0gdGhlbWUgPT09IFwibGlnaHRcIiA/IFwiZGFya1wiIDogXCJsaWdodFwiO1xuXG4gIGNvbnN0IHRvZ2dsZVRoZW1lID0gKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgdGhlbWVNb2RlKTsgXG4gICAgc2V0VGhlbWUodGhlbWVNb2RlKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGxvY2FsVGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRoZW1lXCIpO1xuICAgIGxvY2FsVGhlbWUgJiYgc2V0VGhlbWUobG9jYWxUaGVtZSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWUgPT0gJ2xpZ2h0JyA/IGxpZ2h0VGhlbWUgOiBkYXJrVGhlbWV9PlxuICAgICAgICA8R2xvYmFsU3R5bGVzIC8+XG4gICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgIDxJbm5lclN0eWxlcz5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dG9nZ2xlVGhlbWV9PkxpZ2h0L0Rhcms8L2J1dHRvbj5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICA8L0lubmVyU3R5bGVzPlxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuXG4gICAgPC8+XG4gICk7XG59XG5cbmNvbnN0IEdsb2JhbFN0eWxlcyA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuICAgIDpyb290e1xuICAgICAgICAtLWRhcmtlc3QtY29sb3I6ICMwQzAwMzI7XG4gICAgICAgIC0tZGFyay1jb2xvcjogIzE5MDA2MTtcbiAgICAgICAgLS1tZWRpdW0tY29sb3I6ICMyNDAwOTA7XG4gICAgICAgIC0tbGlnaHQtY29sb3I6IzM1MDBkMztcbiAgICAgICAgLS1icmlnaHQtY29sb3I6ICM3ZWQwZTE7XG4gICAgICAgIC0tZGFya0dyZXk6ICMyODI4Mjg7XG4gICAgICAgIC0tbGlnaHRHcmV5OiAjZjVmNWY1O1xuICAgICAgICAtLW1lZGl1bUdyZXk6ICNhYWFiYjg7XG4gICAgICAgIC0tb2ZmV2hpdGU6ICNlZGVkZWQ7XG4gICAgICAgIC0tbWF4V2lkdGg6IDEwMDBweDtcbiAgICAgICAgLS1iczogMCAxMnB4IDI0cHggMCByZ2JhKDAsMCwwLDAsLjA5KVxufVxuICBodG1sIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtc2l6ZTogNjIuNSU7XG4gIH1cblxuICAqLCAqOmJlZm9yZSwgKjphZnRlciB7XG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcbiAgfVxuXG4gIGJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gIH1cblxuICBhe1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xuICB9XG5cbiAgYTpob3ZlcntcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBjb2xvcjogdmFyKC0tYnJpZ2h0LWNvbG9yKTtcbiAgfVxuXG4gIGJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6IC0tYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gIH1cbmA7XG5cbmNvbnN0IElubmVyU3R5bGVzID0gc3R5bGVkLmRpdmBcbiAgbWF4LXdpZHRoOiB2YXIoLS1tYXhXaWR0aCk7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAycmVtO1xuYDtcblxuY29uc3QgbGlnaHRUaGVtZSA9IHtcbiAgYmc6IHtcbiAgICBwcmltYXJ5OiAnI2ZmZmZmZicsXG4gICAgc2Vjb25kYXJ5OiAnIzdlZDBlMScsXG4gICAgdGVydGlhcnk6ICcjNTI1NTYwJyxcbiAgICBxdWFydGVybmFyeTogJyNmNWY1ZjUnLFxuICB9LFxuICB0ZXh0OiB7XG4gICAgcHJpbWFyeTogJyMwQzAwMzInLFxuICAgIHNlY29uZGFyeTogJyMxOTAwNjEnLFxuICAgIHRlcm5hcnk6ICcjMjQwMDkwJyxcbiAgICBxdWFydGVybmFyeTogJyMzNTAwZDMnXG59XG59XG5cbmNvbnN0IGRhcmtUaGVtZSA9IHtcbiAgYmc6IHtcbiAgICBwcmltYXJ5OiAnIzBDMDAzMicsXG4gICAgc2Vjb25kYXJ5OiAnIzE5MDA2MScsXG4gICAgdGVybmFyeTogJyMyNDAwOTAnLFxuICAgIHF1YXJ0ZXJuYXJ5OiAnIzM1MDBkMydcbiAgfSxcbiAgdGV4dDoge1xuICAgIHByaW1hcnk6ICcjZmZmZmZmJyxcbiAgICBzZWNvbmRhcnk6ICcjN2VkMGUxJyxcbiAgICB0ZXJ0aWFyeTogJyM1MjU1NjAnLFxuICAgIHF1YXJ0ZXJuYXJ5OiAnI2Y1ZjVmNScsXG59XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Page.tsx\n");

/***/ })

});