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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"./components/Header.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/zsoka/Ironhack/Course/FINAL_PROJECT_GYMMIE/gymmie-frontend/components/Page.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction Page(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('light'),\n      theme = _useState[0],\n      setTheme = _useState[1];\n\n  var themeMode = theme === \"light\" ? \"dark\" : \"light\";\n\n  var toggleTheme = function toggleTheme() {\n    localStorage.setItem(\"theme\", themeMode);\n    setTheme(themeMode);\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    var localTheme = localStorage.getItem(\"theme\");\n    localTheme && setTheme(localTheme);\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {\n      theme: theme == 'light' ? lightTheme : darkTheme,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalStyles, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(InnerStyles, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          onClick: toggleTheme,\n          children: \"Light/Dark\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 13\n        }, this), children]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this)\n  }, void 0, false);\n}\n\n_s(Page, \"Z8UCD9KudyQA62DCQ9e5cf9+m5k=\");\n\n_c = Page;\nvar GlobalStyles = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.createGlobalStyle)([\":root{--darkest-color:#0C0032;--dark-color:#190061;--medium-color:#240090;--light-color:#3500d3;--bright-color:#7ed0e1;--darkGrey:#282828;--lightGrey:#f5f5f5;--mediumGrey:#aaabb8;--offWhite:#ededed;--maxWidth:1000px;--bs:0 12px 24px 0 rgba(0,0,0,0,.09)}html{box-sizing:border-box;font-size:62.5%;}*,*:before,*:after{box-sizing:inherit;}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;padding:0;margin:0;font-size:1.5rem;line-height:1;}a{text-decoration:none;color:\", \";}a:hover{text-decoration:underline;color:var(--bright-color);}button{font-family:--apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;}\"], function (_ref2) {\n  var theme = _ref2.theme;\n  return theme.text.ternary;\n});\n_c2 = GlobalStyles;\nvar InnerStyles = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div.withConfig({\n  displayName: \"Page__InnerStyles\",\n  componentId: \"sc-1mmdsed-0\"\n})([\"max-width:var(--maxWidth);margin:0 auto;padding:2rem;\"]);\n_c3 = InnerStyles;\nvar lightTheme = {\n  bg: {\n    primary: '#ffffff',\n    secondary: '#7ed0e1',\n    tertiary: '#525560',\n    quarternary: '#f5f5f5'\n  },\n  text: {\n    primary: '#0C0032',\n    secondary: '#190061',\n    ternary: '#240090',\n    quarternary: '#3500d3'\n  }\n};\nvar darkTheme = {\n  bg: {\n    primary: '#0C0032',\n    secondary: '#190061',\n    tertiary: '#240090',\n    quarternary: '#3500d3'\n  },\n  text: {\n    primary: '#ffffff',\n    secondary: '#7ed0e1',\n    tertiary: '#525560',\n    quarternary: '#f5f5f5'\n  }\n};\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Page\");\n$RefreshReg$(_c2, \"GlobalStyles\");\n$RefreshReg$(_c3, \"InnerStyles\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlLnRzeD9jZDE2Il0sIm5hbWVzIjpbIlBhZ2UiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwidGhlbWUiLCJzZXRUaGVtZSIsInRoZW1lTW9kZSIsInRvZ2dsZVRoZW1lIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInVzZUVmZmVjdCIsImxvY2FsVGhlbWUiLCJnZXRJdGVtIiwibGlnaHRUaGVtZSIsImRhcmtUaGVtZSIsIkdsb2JhbFN0eWxlcyIsImNyZWF0ZUdsb2JhbFN0eWxlIiwidGV4dCIsInRlcm5hcnkiLCJJbm5lclN0eWxlcyIsInN0eWxlZCIsImJnIiwicHJpbWFyeSIsInNlY29uZGFyeSIsInRlcnRpYXJ5IiwicXVhcnRlcm5hcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxPQUE0QjtBQUFBOztBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTs7QUFBQSxrQkFDZkMsK0NBQVEsQ0FBQyxPQUFELENBRE87QUFBQSxNQUNsQ0MsS0FEa0M7QUFBQSxNQUMzQkMsUUFEMkI7O0FBRXpDLE1BQU1DLFNBQVMsR0FBR0YsS0FBSyxLQUFLLE9BQVYsR0FBb0IsTUFBcEIsR0FBNkIsT0FBL0M7O0FBRUEsTUFBTUcsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QkMsZ0JBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixFQUE4QkgsU0FBOUI7QUFDQUQsWUFBUSxDQUFDQyxTQUFELENBQVI7QUFDRCxHQUhEOztBQUtBSSxrREFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxVQUFVLEdBQUdILFlBQVksQ0FBQ0ksT0FBYixDQUFxQixPQUFyQixDQUFuQjtBQUNBRCxjQUFVLElBQUlOLFFBQVEsQ0FBQ00sVUFBRCxDQUF0QjtBQUNELEdBSFEsRUFHTixFQUhNLENBQVQ7QUFLQSxzQkFDRTtBQUFBLDJCQUNFLDhEQUFDLDREQUFEO0FBQWUsV0FBSyxFQUFFUCxLQUFLLElBQUksT0FBVCxHQUFtQlMsVUFBbkIsR0FBZ0NDLFNBQXREO0FBQUEsOEJBQ0UsOERBQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFSSw4REFBQyw0Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFHSSw4REFBQyxXQUFEO0FBQUEsZ0NBQ0U7QUFBUSxpQkFBTyxFQUFFUCxXQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQUVHTCxRQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBYUQ7O0dBM0J1QkQsSTs7S0FBQUEsSTtBQTZCeEIsSUFBTWMsWUFBWSxHQUFHQyxvRUFBSCxzdkJBaUNMO0FBQUEsTUFBR1osS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDYSxJQUFOLENBQVdDLE9BQTFCO0FBQUEsQ0FqQ0ssQ0FBbEI7TUFBTUgsWTtBQThDTixJQUFNSSxXQUFXLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLDZEQUFqQjtNQUFNRCxXO0FBTU4sSUFBTU4sVUFBVSxHQUFHO0FBQ2pCUSxJQUFFLEVBQUU7QUFDRkMsV0FBTyxFQUFFLFNBRFA7QUFFRkMsYUFBUyxFQUFFLFNBRlQ7QUFHRkMsWUFBUSxFQUFFLFNBSFI7QUFJRkMsZUFBVyxFQUFFO0FBSlgsR0FEYTtBQU9qQlIsTUFBSSxFQUFFO0FBQ0pLLFdBQU8sRUFBRSxTQURMO0FBRUpDLGFBQVMsRUFBRSxTQUZQO0FBR0pMLFdBQU8sRUFBRSxTQUhMO0FBSUpPLGVBQVcsRUFBRTtBQUpUO0FBUFcsQ0FBbkI7QUFlQSxJQUFNWCxTQUFTLEdBQUc7QUFDaEJPLElBQUUsRUFBRTtBQUNGQyxXQUFPLEVBQUUsU0FEUDtBQUVGQyxhQUFTLEVBQUUsU0FGVDtBQUdGQyxZQUFRLEVBQUUsU0FIUjtBQUlGQyxlQUFXLEVBQUU7QUFKWCxHQURZO0FBT2hCUixNQUFJLEVBQUU7QUFDSkssV0FBTyxFQUFFLFNBREw7QUFFSkMsYUFBUyxFQUFFLFNBRlA7QUFHSkMsWUFBUSxFQUFFLFNBSE47QUFJSkMsZUFBVyxFQUFFO0FBSlQ7QUFQVSxDQUFsQiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUGFnZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCwgeyBjcmVhdGVHbG9iYWxTdHlsZSwgVGhlbWVQcm92aWRlciB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKHsgY2hpbGRyZW4gfSkge1xuICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZVN0YXRlKCdsaWdodCcpO1xuICBjb25zdCB0aGVtZU1vZGUgPSB0aGVtZSA9PT0gXCJsaWdodFwiID8gXCJkYXJrXCIgOiBcImxpZ2h0XCI7XG5cbiAgY29uc3QgdG9nZ2xlVGhlbWUgPSAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCB0aGVtZU1vZGUpOyBcbiAgICBzZXRUaGVtZSh0aGVtZU1vZGUpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbG9jYWxUaGVtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIik7XG4gICAgbG9jYWxUaGVtZSAmJiBzZXRUaGVtZShsb2NhbFRoZW1lKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZSA9PSAnbGlnaHQnID8gbGlnaHRUaGVtZSA6IGRhcmtUaGVtZX0+XG4gICAgICAgIDxHbG9iYWxTdHlsZXMgLz5cbiAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgPElubmVyU3R5bGVzPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVUaGVtZX0+TGlnaHQvRGFyazwvYnV0dG9uPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgIDwvSW5uZXJTdHlsZXM+XG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XG5cbiAgICA8Lz5cbiAgKTtcbn1cblxuY29uc3QgR2xvYmFsU3R5bGVzID0gY3JlYXRlR2xvYmFsU3R5bGVgXG4gICAgOnJvb3R7XG4gICAgICAgIC0tZGFya2VzdC1jb2xvcjogIzBDMDAzMjtcbiAgICAgICAgLS1kYXJrLWNvbG9yOiAjMTkwMDYxO1xuICAgICAgICAtLW1lZGl1bS1jb2xvcjogIzI0MDA5MDtcbiAgICAgICAgLS1saWdodC1jb2xvcjojMzUwMGQzO1xuICAgICAgICAtLWJyaWdodC1jb2xvcjogIzdlZDBlMTtcbiAgICAgICAgLS1kYXJrR3JleTogIzI4MjgyODtcbiAgICAgICAgLS1saWdodEdyZXk6ICNmNWY1ZjU7XG4gICAgICAgIC0tbWVkaXVtR3JleTogI2FhYWJiODtcbiAgICAgICAgLS1vZmZXaGl0ZTogI2VkZWRlZDtcbiAgICAgICAgLS1tYXhXaWR0aDogMTAwMHB4O1xuICAgICAgICAtLWJzOiAwIDEycHggMjRweCAwIHJnYmEoMCwwLDAsMCwuMDkpXG59XG4gIGh0bWwge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1zaXplOiA2Mi41JTtcbiAgfVxuXG4gICosICo6YmVmb3JlLCAqOmFmdGVyIHtcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xuICB9XG5cbiAgYm9keSB7XG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgfVxuXG4gIGF7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHQudGVybmFyeX07XG4gIH1cblxuICBhOmhvdmVye1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGNvbG9yOiB2YXIoLS1icmlnaHQtY29sb3IpO1xuICB9XG5cbiAgYnV0dG9uIHtcbiAgICBmb250LWZhbWlseTogLS1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgfVxuYDtcblxuY29uc3QgSW5uZXJTdHlsZXMgPSBzdHlsZWQuZGl2YFxuICBtYXgtd2lkdGg6IHZhcigtLW1heFdpZHRoKTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDJyZW07XG5gO1xuXG5jb25zdCBsaWdodFRoZW1lID0ge1xuICBiZzoge1xuICAgIHByaW1hcnk6ICcjZmZmZmZmJyxcbiAgICBzZWNvbmRhcnk6ICcjN2VkMGUxJyxcbiAgICB0ZXJ0aWFyeTogJyM1MjU1NjAnLFxuICAgIHF1YXJ0ZXJuYXJ5OiAnI2Y1ZjVmNScsXG4gIH0sXG4gIHRleHQ6IHtcbiAgICBwcmltYXJ5OiAnIzBDMDAzMicsXG4gICAgc2Vjb25kYXJ5OiAnIzE5MDA2MScsXG4gICAgdGVybmFyeTogJyMyNDAwOTAnLFxuICAgIHF1YXJ0ZXJuYXJ5OiAnIzM1MDBkMydcbn1cbn1cblxuY29uc3QgZGFya1RoZW1lID0ge1xuICBiZzoge1xuICAgIHByaW1hcnk6ICcjMEMwMDMyJyxcbiAgICBzZWNvbmRhcnk6ICcjMTkwMDYxJyxcbiAgICB0ZXJ0aWFyeTogJyMyNDAwOTAnLFxuICAgIHF1YXJ0ZXJuYXJ5OiAnIzM1MDBkMydcbiAgfSxcbiAgdGV4dDoge1xuICAgIHByaW1hcnk6ICcjZmZmZmZmJyxcbiAgICBzZWNvbmRhcnk6ICcjN2VkMGUxJyxcbiAgICB0ZXJ0aWFyeTogJyM1MjU1NjAnLFxuICAgIHF1YXJ0ZXJuYXJ5OiAnI2Y1ZjVmNScsXG59XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Page.tsx\n");

/***/ })

});