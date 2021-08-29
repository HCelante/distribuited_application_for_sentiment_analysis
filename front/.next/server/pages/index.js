module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/components/github/index.js":
/*!******************************************!*\
  !*** ./pages/components/github/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/hcelante/workingon/distribuited_application/front/pages/components/github/index.js\";\n\n\nasync function getUser() {\n  const url = \"https://api.github.com/users/hcelante\";\n  const response = await fetch(url);\n  const result = await response.json();\n  return result;\n}\n\nconst githubStyle = {\n  backgroundColor: 'white'\n};\nconst avatarStyle = {\n  width: '100px',\n  height: '100px',\n  backgroundColor: 'red',\n  position: 'relative',\n  //animationName: K,\n  animationDuration: '4s'\n};\n\nfunction GitHub() {\n  const {\n    0: charged,\n    1: setCharged\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0);\n  const {\n    0: myGit,\n    1: setMyGit\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({});\n\n  function getGit() {\n    getUser().then(response => {\n      setMyGit(response);\n    });\n  }\n\n  if (charged === 0) {\n    getGit();\n    setCharged(1);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    style: githubStyle,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      className: 'shape-2',\n      src: myGit.avatar_url ? myGit.avatar_url : \"\",\n      alt: \"Higor Celante\",\n      style: {\n        borderRadius: '300px',\n        maxWidth: '10%'\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 47,\n    columnNumber: 9\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GitHub);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL2dpdGh1Yi9pbmRleC5qcz8yNmFmIl0sIm5hbWVzIjpbImdldFVzZXIiLCJ1cmwiLCJyZXNwb25zZSIsImZldGNoIiwicmVzdWx0IiwianNvbiIsImdpdGh1YlN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiYXZhdGFyU3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsInBvc2l0aW9uIiwiYW5pbWF0aW9uRHVyYXRpb24iLCJHaXRIdWIiLCJjaGFyZ2VkIiwic2V0Q2hhcmdlZCIsInVzZVN0YXRlIiwibXlHaXQiLCJzZXRNeUdpdCIsImdldEdpdCIsInRoZW4iLCJhdmF0YXJfdXJsIiwiYm9yZGVyUmFkaXVzIiwibWF4V2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxlQUFlQSxPQUFmLEdBQXlCO0FBQ3JCLFFBQU1DLEdBQUcsR0FBRyx1Q0FBWjtBQUNBLFFBQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNGLEdBQUQsQ0FBNUI7QUFDQSxRQUFNRyxNQUFNLEdBQUcsTUFBTUYsUUFBUSxDQUFDRyxJQUFULEVBQXJCO0FBQ0EsU0FBT0QsTUFBUDtBQUNIOztBQUVELE1BQU1FLFdBQVcsR0FBRztBQUNoQkMsaUJBQWUsRUFBRTtBQURELENBQXBCO0FBSUEsTUFBTUMsV0FBVyxHQUFHO0FBQ2hCQyxPQUFLLEVBQUUsT0FEUztBQUVoQkMsUUFBTSxFQUFFLE9BRlE7QUFHaEJILGlCQUFlLEVBQUUsS0FIRDtBQUloQkksVUFBUSxFQUFFLFVBSk07QUFLaEI7QUFDQUMsbUJBQWlCLEVBQUU7QUFOSCxDQUFwQjs7QUFhQSxTQUFTQyxNQUFULEdBQWtCO0FBQ2QsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCQyxzREFBUSxDQUFDLENBQUQsQ0FBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JGLHNEQUFRLENBQUMsRUFBRCxDQUFsQzs7QUFNQSxXQUFTRyxNQUFULEdBQWtCO0FBQ2RuQixXQUFPLEdBQUdvQixJQUFWLENBQWVsQixRQUFRLElBQUk7QUFDdkJnQixjQUFRLENBQUNoQixRQUFELENBQVI7QUFDSCxLQUZEO0FBR0g7O0FBRUQsTUFBSVksT0FBTyxLQUFLLENBQWhCLEVBQW1CO0FBQ2ZLLFVBQU07QUFDTkosY0FBVSxDQUFDLENBQUQsQ0FBVjtBQUNIOztBQUVELHNCQUNJO0FBQUssU0FBSyxFQUFFVCxXQUFaO0FBQUEsMkJBQ0k7QUFBSyxlQUFTLEVBQUUsU0FBaEI7QUFBMkIsU0FBRyxFQUFFVyxLQUFLLENBQUNJLFVBQU4sR0FBbUJKLEtBQUssQ0FBQ0ksVUFBekIsR0FBc0MsRUFBdEU7QUFBMEUsU0FBRyxFQUFDLGVBQTlFO0FBQThGLFdBQUssRUFBRTtBQUFFQyxvQkFBWSxFQUFFLE9BQWhCO0FBQXlCQyxnQkFBUSxFQUFFO0FBQW5DO0FBQXJHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFNSDs7QUFBZ0JWLHFFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY29tcG9uZW50cy9naXRodWIvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuYXN5bmMgZnVuY3Rpb24gZ2V0VXNlcigpIHtcbiAgICBjb25zdCB1cmwgPSBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvaGNlbGFudGVcIlxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKVxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgIHJldHVybiByZXN1bHRcbn1cblxuY29uc3QgZ2l0aHViU3R5bGUgPSB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnXG59O1xuXG5jb25zdCBhdmF0YXJTdHlsZSA9IHtcbiAgICB3aWR0aDogJzEwMHB4JyxcbiAgICBoZWlnaHQ6ICcxMDBweCcsXG4gICAgYmFja2dyb3VuZENvbG9yOiAncmVkJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAvL2FuaW1hdGlvbk5hbWU6IEssXG4gICAgYW5pbWF0aW9uRHVyYXRpb246ICc0cydcbn07XG5cblxuXG5cblxuZnVuY3Rpb24gR2l0SHViKCkge1xuICAgIGNvbnN0IFtjaGFyZ2VkLCBzZXRDaGFyZ2VkXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtteUdpdCwgc2V0TXlHaXRdID0gdXNlU3RhdGUoe30pO1xuXG5cblxuXG5cbiAgICBmdW5jdGlvbiBnZXRHaXQoKSB7XG4gICAgICAgIGdldFVzZXIoKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIHNldE15R2l0KHJlc3BvbnNlKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGlmIChjaGFyZ2VkID09PSAwKSB7XG4gICAgICAgIGdldEdpdCgpXG4gICAgICAgIHNldENoYXJnZWQoMSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXtnaXRodWJTdHlsZX0+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17J3NoYXBlLTInfSBzcmM9e215R2l0LmF2YXRhcl91cmwgPyBteUdpdC5hdmF0YXJfdXJsIDogXCJcIn0gYWx0PVwiSGlnb3IgQ2VsYW50ZVwiIHN0eWxlPXt7IGJvcmRlclJhZGl1czogJzMwMHB4JywgbWF4V2lkdGg6ICcxMCUnIH19IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcblxufSBleHBvcnQgZGVmYXVsdCBHaXRIdWI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/github/index.js\n");

/***/ }),

/***/ "./pages/components/graph/index.js":
/*!*****************************************!*\
  !*** ./pages/components/graph/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/hcelante/workingon/distribuited_application/front/pages/components/graph/index.js\";\n\n\nasync function getData() {\n  const url = \"http://127.0.0.1:5000/\";\n  const response = await fetch(url);\n  console.log(response);\n  const result = await response.json();\n  return result;\n}\n\nconst graphStyle = {\n  backgroundColor: 'white'\n};\n\nfunction Graph() {\n  const {\n    0: charged,\n    1: setCharged\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0);\n  const {\n    0: myData,\n    1: setMyData\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({});\n\n  function getGraph() {\n    getData().then(response => {\n      setMyData(response);\n    });\n  }\n\n  if (charged === 0) {\n    getGraph();\n    setCharged(1);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    style: graphStyle,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: \"aaaaaaaaaaaaaaaa\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 9\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Graph);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL2dyYXBoL2luZGV4LmpzPzk1OTciXSwibmFtZXMiOlsiZ2V0RGF0YSIsInVybCIsInJlc3BvbnNlIiwiZmV0Y2giLCJjb25zb2xlIiwibG9nIiwicmVzdWx0IiwianNvbiIsImdyYXBoU3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJHcmFwaCIsImNoYXJnZWQiLCJzZXRDaGFyZ2VkIiwidXNlU3RhdGUiLCJteURhdGEiLCJzZXRNeURhdGEiLCJnZXRHcmFwaCIsInRoZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxlQUFlQSxPQUFmLEdBQXlCO0FBQ3JCLFFBQU1DLEdBQUcsR0FBRyx3QkFBWjtBQUNBLFFBQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNGLEdBQUQsQ0FBNUI7QUFDQUcsU0FBTyxDQUFDQyxHQUFSLENBQVlILFFBQVo7QUFDQSxRQUFNSSxNQUFNLEdBQUcsTUFBTUosUUFBUSxDQUFDSyxJQUFULEVBQXJCO0FBQ0EsU0FBT0QsTUFBUDtBQUNIOztBQUdELE1BQU1FLFVBQVUsR0FBRztBQUNmQyxpQkFBZSxFQUFFO0FBREYsQ0FBbkI7O0FBSUEsU0FBU0MsS0FBVCxHQUFpQjtBQUNiLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkMsc0RBQVEsQ0FBQyxDQUFELENBQXRDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCRixzREFBUSxDQUFDLEVBQUQsQ0FBcEM7O0FBRUEsV0FBU0csUUFBVCxHQUFvQjtBQUNoQmhCLFdBQU8sR0FBR2lCLElBQVYsQ0FBZWYsUUFBUSxJQUFJO0FBQ3ZCYSxlQUFTLENBQUNiLFFBQUQsQ0FBVDtBQUNILEtBRkQ7QUFHSDs7QUFFRCxNQUFJUyxPQUFPLEtBQUssQ0FBaEIsRUFBbUI7QUFDZkssWUFBUTtBQUNSSixjQUFVLENBQUMsQ0FBRCxDQUFWO0FBQ0g7O0FBRUQsc0JBQ0k7QUFBSyxTQUFLLEVBQUVKLFVBQVo7QUFBQSwyQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVFIOztBQUFnQkUsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2dyYXBoL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldERhdGEoKSB7XG4gICAgY29uc3QgdXJsID0gXCJodHRwOi8vMTI3LjAuMC4xOjUwMDAvXCJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybClcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICByZXR1cm4gcmVzdWx0XG59XG5cblxuY29uc3QgZ3JhcGhTdHlsZSA9IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZSdcbn07XG5cbmZ1bmN0aW9uIEdyYXBoKCkge1xuICAgIGNvbnN0IFtjaGFyZ2VkLCBzZXRDaGFyZ2VkXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtteURhdGEsIHNldE15RGF0YV0gPSB1c2VTdGF0ZSh7fSk7XG5cbiAgICBmdW5jdGlvbiBnZXRHcmFwaCgpIHtcbiAgICAgICAgZ2V0RGF0YSgpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgc2V0TXlEYXRhKHJlc3BvbnNlKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGlmIChjaGFyZ2VkID09PSAwKSB7XG4gICAgICAgIGdldEdyYXBoKClcbiAgICAgICAgc2V0Q2hhcmdlZCgxKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e2dyYXBoU3R5bGV9PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICBhYWFhYWFhYWFhYWFhYWFhXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuXG59IGV4cG9ydCBkZWZhdWx0IEdyYXBoO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/graph/index.js\n");

/***/ }),

/***/ "./pages/components/navbar/index.js":
/*!******************************************!*\
  !*** ./pages/components/navbar/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/hcelante/workingon/distribuited_application/front/pages/components/navbar/index.js\";\n\n\nfunction NavBar() {\n  const {\n    0: toggled,\n    1: setToggled\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(1);\n  const {\n    0: links,\n    1: setLinks\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n  const {\n    0: charged,\n    1: setCharged\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0);\n\n  function clickToggle() {\n    setToggled(!toggled);\n  }\n\n  function constructorLinks() {\n    let values = [{\n      name: 'Github',\n      link: 'https://github.com/hcelante'\n    }, {\n      name: 'Linkedin',\n      link: 'https://linkedin.com/in/hcelante'\n    }];\n    setLinks(values.map(item => {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: item.link,\n        children: item.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 21\n      }, this);\n    }));\n  }\n\n  if (charged === 0) {\n    constructorLinks();\n    setCharged(1);\n  } //<img src='https://avatars1.githubusercontent.com/u/14967963?s=400&u=0dd60c7ff394e3c9efc55c6b86a753760634b68e&v=4' alt=\"Higor Celante\" style={{borderRadius:'300px', maxWidth:'10%'}}/>\n\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: links\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 9\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL25hdmJhci9pbmRleC5qcz82M2RiIl0sIm5hbWVzIjpbIk5hdkJhciIsInRvZ2dsZWQiLCJzZXRUb2dnbGVkIiwidXNlU3RhdGUiLCJsaW5rcyIsInNldExpbmtzIiwiY2hhcmdlZCIsInNldENoYXJnZWQiLCJjbGlja1RvZ2dsZSIsImNvbnN0cnVjdG9yTGlua3MiLCJ2YWx1ZXMiLCJuYW1lIiwibGluayIsIm1hcCIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFHQSxTQUFTQSxNQUFULEdBQWtCO0FBQ2QsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCQyxzREFBUSxDQUFDLENBQUQsQ0FBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JGLHNEQUFRLENBQUMsRUFBRCxDQUFsQztBQUNBLFFBQU07QUFBQSxPQUFDRyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3Qkosc0RBQVEsQ0FBQyxDQUFELENBQXRDOztBQUVBLFdBQVNLLFdBQVQsR0FBdUI7QUFDbkJOLGNBQVUsQ0FBQyxDQUFDRCxPQUFGLENBQVY7QUFDSDs7QUFFRCxXQUFTUSxnQkFBVCxHQUE0QjtBQUV4QixRQUFJQyxNQUFNLEdBQUcsQ0FDVDtBQUFFQyxVQUFJLEVBQUUsUUFBUjtBQUFrQkMsVUFBSSxFQUFFO0FBQXhCLEtBRFMsRUFFVDtBQUFFRCxVQUFJLEVBQUUsVUFBUjtBQUFvQkMsVUFBSSxFQUFFO0FBQTFCLEtBRlMsQ0FBYjtBQUtBUCxZQUFRLENBQ0pLLE1BQU0sQ0FBQ0csR0FBUCxDQUFXQyxJQUFJLElBQUk7QUFDZiwwQkFDSTtBQUFHLFlBQUksRUFBRUEsSUFBSSxDQUFDRixJQUFkO0FBQUEsa0JBQXFCRSxJQUFJLENBQUNIO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESjtBQUdILEtBSkQsQ0FESSxDQUFSO0FBUUg7O0FBQ0QsTUFBR0wsT0FBTyxLQUFLLENBQWYsRUFBaUI7QUFDYkcsb0JBQWdCO0FBQ2hCRixjQUFVLENBQUMsQ0FBRCxDQUFWO0FBQ0gsR0E1QmEsQ0E2QmQ7OztBQUNBLHNCQUNJO0FBQUEsY0FFS0g7QUFGTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFNSDs7QUFBZ0JKLHFFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY29tcG9uZW50cy9uYXZiYXIvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuXG5mdW5jdGlvbiBOYXZCYXIoKSB7XG4gICAgY29uc3QgW3RvZ2dsZWQsIHNldFRvZ2dsZWRdID0gdXNlU3RhdGUoMSk7XG4gICAgY29uc3QgW2xpbmtzLCBzZXRMaW5rc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW2NoYXJnZWQsIHNldENoYXJnZWRdID0gdXNlU3RhdGUoMCk7XG5cbiAgICBmdW5jdGlvbiBjbGlja1RvZ2dsZSgpIHtcbiAgICAgICAgc2V0VG9nZ2xlZCghdG9nZ2xlZCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29uc3RydWN0b3JMaW5rcygpIHtcblxuICAgICAgICBsZXQgdmFsdWVzID0gW1xuICAgICAgICAgICAgeyBuYW1lOiAnR2l0aHViJywgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9oY2VsYW50ZScgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ0xpbmtlZGluJywgbGluazogJ2h0dHBzOi8vbGlua2VkaW4uY29tL2luL2hjZWxhbnRlJyB9XG4gICAgICAgIF1cblxuICAgICAgICBzZXRMaW5rcyhcbiAgICAgICAgICAgIHZhbHVlcy5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17aXRlbS5saW5rfT57aXRlbS5uYW1lfTwvYT5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICApXG5cbiAgICB9XG4gICAgaWYoY2hhcmdlZCA9PT0gMCl7XG4gICAgICAgIGNvbnN0cnVjdG9yTGlua3MoKTtcbiAgICAgICAgc2V0Q2hhcmdlZCgxKTtcbiAgICB9XG4gICAgLy88aW1nIHNyYz0naHR0cHM6Ly9hdmF0YXJzMS5naXRodWJ1c2VyY29udGVudC5jb20vdS8xNDk2Nzk2Mz9zPTQwMCZ1PTBkZDYwYzdmZjM5NGUzYzllZmM1NWM2Yjg2YTc1Mzc2MDYzNGI2OGUmdj00JyBhbHQ9XCJIaWdvciBDZWxhbnRlXCIgc3R5bGU9e3tib3JkZXJSYWRpdXM6JzMwMHB4JywgbWF4V2lkdGg6JzEwJSd9fS8+XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgXG4gICAgICAgICAgICB7bGlua3N9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0gZXhwb3J0IGRlZmF1bHQgTmF2QmFyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/navbar/index.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_github_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/github/index */ \"./pages/components/github/index.js\");\n/* harmony import */ var _components_navbar_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/navbar/index */ \"./pages/components/navbar/index.js\");\n/* harmony import */ var _components_graph_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/graph/index */ \"./pages/components/graph/index.js\");\n\nvar _jsxFileName = \"/home/hcelante/workingon/distribuited_application/front/pages/index.js\";\n\n\n\n\nconst homeStyle = {\n  backgroundColor: 'grey'\n};\n\nfunction Home() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    style: homeStyle,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_graph_index__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 9\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbImhvbWVTdHlsZSIsImJhY2tncm91bmRDb2xvciIsIkhvbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU1BLFNBQVMsR0FBRztBQUNkQyxpQkFBZSxFQUFFO0FBREgsQ0FBbEI7O0FBSUEsU0FBU0MsSUFBVCxHQUFlO0FBRVgsc0JBQ0k7QUFBSyxTQUFLLEVBQUVGLFNBQVo7QUFBQSwyQkFDSSxxRUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBS0g7O0FBRWNFLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBHaXRIdWIgZnJvbSAnLi9jb21wb25lbnRzL2dpdGh1Yi9pbmRleCc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vY29tcG9uZW50cy9uYXZiYXIvaW5kZXgnO1xuaW1wb3J0IEdyYXBoIGZyb20gJy4vY29tcG9uZW50cy9ncmFwaC9pbmRleCc7XG5jb25zdCBob21lU3R5bGUgPSB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAnZ3JleSdcbn07XG5cbmZ1bmN0aW9uIEhvbWUoKXtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e2hvbWVTdHlsZX0+XG4gICAgICAgICAgICA8R3JhcGgvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });