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

/***/ "./pages/components/graph/index.js":
/*!*****************************************!*\
  !*** ./pages/components/graph/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_google_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-google-charts */ \"react-google-charts\");\n/* harmony import */ var react_google_charts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_google_charts__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/home/hcelante/Documents/APS SD/distribuited_application/front/pages/components/graph/index.js\";\n\n\n\nasync function getData() {\n  const url = \"http://127.0.0.1:5000/\";\n  const response = await fetch(url);\n  const result = await response.json();\n  return result;\n}\n\nconst graphStyle = {\n  backgroundColor: 'white'\n};\n\nfunction Graph() {\n  const {\n    0: charged,\n    1: setCharged\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0);\n  const {\n    0: myData,\n    1: setMyData\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({});\n  const {\n    0: sentiments,\n    1: setSentiments\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n\n  function getGraph() {\n    getData().then(response => {\n      setMyData(response);\n      countSentiments(response);\n    });\n  }\n\n  function countSentiments(myData) {\n    let sentiment = [0, 0, 0];\n    myData.forEach(element => {\n      sentiment[element[0]] += 1;\n    });\n    setSentiments(sentiment);\n  }\n\n  if (charged === 0) {\n    getGraph();\n    setCharged(1);\n  }\n\n  console.log(sentiments);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    style: graphStyle,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_google_charts__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          width: '1000px',\n          height: '1000px',\n          chartType: \"PieChart\",\n          loader: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: \"Carregando Gr\\xE1fico\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 29\n          }, this),\n          data: [['Sentimento', 'Tweets'], ['Positivo', sentiments[1]], ['Negativo', sentiments[0]], ['Neutro', sentiments[2]]],\n          options: {\n            title: 'Análise Sentimental de tweets sobre o personagem Luffy de One Piece',\n            // Just add this option\n            is3D: true\n          },\n          rootProps: {\n            'data-testid': '2'\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 17\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 45,\n    columnNumber: 9\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Graph);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL2dyYXBoL2luZGV4LmpzPzk1OTciXSwibmFtZXMiOlsiZ2V0RGF0YSIsInVybCIsInJlc3BvbnNlIiwiZmV0Y2giLCJyZXN1bHQiLCJqc29uIiwiZ3JhcGhTdHlsZSIsImJhY2tncm91bmRDb2xvciIsIkdyYXBoIiwiY2hhcmdlZCIsInNldENoYXJnZWQiLCJ1c2VTdGF0ZSIsIm15RGF0YSIsInNldE15RGF0YSIsInNlbnRpbWVudHMiLCJzZXRTZW50aW1lbnRzIiwiZ2V0R3JhcGgiLCJ0aGVuIiwiY291bnRTZW50aW1lbnRzIiwic2VudGltZW50IiwiZm9yRWFjaCIsImVsZW1lbnQiLCJjb25zb2xlIiwibG9nIiwidGl0bGUiLCJpczNEIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLGVBQWVBLE9BQWYsR0FBeUI7QUFDckIsUUFBTUMsR0FBRyxHQUFHLHdCQUFaO0FBQ0EsUUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ0YsR0FBRCxDQUE1QjtBQUNBLFFBQU1HLE1BQU0sR0FBRyxNQUFNRixRQUFRLENBQUNHLElBQVQsRUFBckI7QUFDQSxTQUFPRCxNQUFQO0FBQ0g7O0FBRUQsTUFBTUUsVUFBVSxHQUFHO0FBQ2ZDLGlCQUFlLEVBQUU7QUFERixDQUFuQjs7QUFJQSxTQUFTQyxLQUFULEdBQWlCO0FBQ2IsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCQyxzREFBUSxDQUFDLENBQUQsQ0FBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0JGLHNEQUFRLENBQUMsRUFBRCxDQUFwQztBQUNBLFFBQU07QUFBQSxPQUFDRyxVQUFEO0FBQUEsT0FBYUM7QUFBYixNQUE4Qkosc0RBQVEsQ0FBQyxFQUFELENBQTVDOztBQUdBLFdBQVNLLFFBQVQsR0FBb0I7QUFDaEJoQixXQUFPLEdBQUdpQixJQUFWLENBQWVmLFFBQVEsSUFBSTtBQUN2QlcsZUFBUyxDQUFDWCxRQUFELENBQVQ7QUFFQWdCLHFCQUFlLENBQUNoQixRQUFELENBQWY7QUFDSCxLQUpEO0FBTUg7O0FBRUQsV0FBU2dCLGVBQVQsQ0FBeUJOLE1BQXpCLEVBQWlDO0FBQzdCLFFBQUlPLFNBQVMsR0FBRyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFoQjtBQUNBUCxVQUFNLENBQUNRLE9BQVAsQ0FBZUMsT0FBTyxJQUFJO0FBQ3RCRixlQUFTLENBQUNFLE9BQU8sQ0FBQyxDQUFELENBQVIsQ0FBVCxJQUF5QixDQUF6QjtBQUNILEtBRkQ7QUFHQU4saUJBQWEsQ0FBQ0ksU0FBRCxDQUFiO0FBQ0g7O0FBRUQsTUFBSVYsT0FBTyxLQUFLLENBQWhCLEVBQW1CO0FBQ2ZPLFlBQVE7QUFDUk4sY0FBVSxDQUFDLENBQUQsQ0FBVjtBQUNIOztBQUVEWSxTQUFPLENBQUNDLEdBQVIsQ0FBWVQsVUFBWjtBQUNBLHNCQUNJO0FBQUssU0FBSyxFQUFFUixVQUFaO0FBQUEsMkJBQ0k7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUMsRUFBZjtBQUFBLCtCQUNBLHFFQUFDLDBEQUFEO0FBQ0ksZUFBSyxFQUFFLFFBRFg7QUFFSSxnQkFBTSxFQUFFLFFBRlo7QUFHSSxtQkFBUyxFQUFDLFVBSGQ7QUFJSSxnQkFBTSxlQUFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpaO0FBS0ksY0FBSSxFQUFFLENBQ0YsQ0FBQyxZQUFELEVBQWUsUUFBZixDQURFLEVBRUYsQ0FBQyxVQUFELEVBQWFRLFVBQVUsQ0FBQyxDQUFELENBQXZCLENBRkUsRUFHRixDQUFDLFVBQUQsRUFBYUEsVUFBVSxDQUFDLENBQUQsQ0FBdkIsQ0FIRSxFQUlGLENBQUMsUUFBRCxFQUFXQSxVQUFVLENBQUMsQ0FBRCxDQUFyQixDQUpFLENBTFY7QUFXSSxpQkFBTyxFQUFFO0FBQ0xVLGlCQUFLLEVBQUUscUVBREY7QUFFTDtBQUNBQyxnQkFBSSxFQUFFO0FBSEQsV0FYYjtBQWdCSSxtQkFBUyxFQUFFO0FBQUUsMkJBQWU7QUFBakI7QUFoQmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBMkJIOztBQUFnQmpCLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY29tcG9uZW50cy9ncmFwaC9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICBDaGFydCAgZnJvbSBcInJlYWN0LWdvb2dsZS1jaGFydHNcIjtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YSgpIHtcbiAgICBjb25zdCB1cmwgPSBcImh0dHA6Ly8xMjcuMC4wLjE6NTAwMC9cIlxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKVxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgIHJldHVybiByZXN1bHRcbn1cblxuY29uc3QgZ3JhcGhTdHlsZSA9IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZSdcbn07XG5cbmZ1bmN0aW9uIEdyYXBoKCkge1xuICAgIGNvbnN0IFtjaGFyZ2VkLCBzZXRDaGFyZ2VkXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtteURhdGEsIHNldE15RGF0YV0gPSB1c2VTdGF0ZSh7fSk7XG4gICAgY29uc3QgW3NlbnRpbWVudHMsIHNldFNlbnRpbWVudHNdID0gdXNlU3RhdGUoW10pO1xuXG5cbiAgICBmdW5jdGlvbiBnZXRHcmFwaCgpIHtcbiAgICAgICAgZ2V0RGF0YSgpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgc2V0TXlEYXRhKHJlc3BvbnNlKVxuXG4gICAgICAgICAgICBjb3VudFNlbnRpbWVudHMocmVzcG9uc2UpXG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb3VudFNlbnRpbWVudHMobXlEYXRhKSB7XG4gICAgICAgIGxldCBzZW50aW1lbnQgPSBbMCwgMCwgMF1cbiAgICAgICAgbXlEYXRhLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBzZW50aW1lbnRbZWxlbWVudFswXV0gKz0gMVxuICAgICAgICB9KTtcbiAgICAgICAgc2V0U2VudGltZW50cyhzZW50aW1lbnQpXG4gICAgfVxuXG4gICAgaWYgKGNoYXJnZWQgPT09IDApIHtcbiAgICAgICAgZ2V0R3JhcGgoKVxuICAgICAgICBzZXRDaGFyZ2VkKDEpXG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coc2VudGltZW50cylcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXtncmFwaFN0eWxlfT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICA8Q2hhcnRcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9eycxMDAwcHgnfVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9eycxMDAwcHgnfVxuICAgICAgICAgICAgICAgICAgICBjaGFydFR5cGU9XCJQaWVDaGFydFwiXG4gICAgICAgICAgICAgICAgICAgIGxvYWRlcj17PGRpdj5DYXJyZWdhbmRvIEdyw6FmaWNvPC9kaXY+fVxuICAgICAgICAgICAgICAgICAgICBkYXRhPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ1NlbnRpbWVudG8nLCAnVHdlZXRzJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ1Bvc2l0aXZvJywgc2VudGltZW50c1sxXV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ05lZ2F0aXZvJywgc2VudGltZW50c1swXV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ05ldXRybycsIHNlbnRpbWVudHNbMl1dLFxuICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0Fuw6FsaXNlIFNlbnRpbWVudGFsIGRlIHR3ZWV0cyBzb2JyZSBvIHBlcnNvbmFnZW0gTHVmZnkgZGUgT25lIFBpZWNlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEp1c3QgYWRkIHRoaXMgb3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBpczNEOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICByb290UHJvcHM9e3sgJ2RhdGEtdGVzdGlkJzogJzInIH19XG4gICAgICAgICAgICAgICAgPjwvQ2hhcnQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuXG59IGV4cG9ydCBkZWZhdWx0IEdyYXBoO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/graph/index.js\n");

/***/ }),

/***/ "./pages/components/navbar/index.js":
/*!******************************************!*\
  !*** ./pages/components/navbar/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/hcelante/Documents/APS SD/distribuited_application/front/pages/components/navbar/index.js\";\n\n\nfunction NavBar() {\n  const {\n    0: charged,\n    1: setCharged\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0);\n  const {\n    0: toggled,\n    1: setToggled\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(1);\n  const {\n    0: links,\n    1: setLinks\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n\n  function clickToggle() {\n    setToggled(!toggled);\n  }\n\n  function constructorLinks() {\n    let values = [{\n      name: 'Github',\n      link: 'https://github.com/hcelante'\n    }, {\n      name: 'Linkedin',\n      link: 'https://linkedin.com/in/hcelante'\n    }, {\n      name: 'Github',\n      link: 'https://github.com/wesff'\n    }, {\n      name: 'Linkedin',\n      link: 'https://www.linkedin.com/in/wesley-franco-ferreira-28105214a/'\n    }];\n    setLinks(values.map(item => {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: item.link,\n        children: item.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 21\n      }, this);\n    }));\n  }\n\n  if (charged === 0) {\n    constructorLinks();\n    setCharged(1);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: links\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 9\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL25hdmJhci9pbmRleC5qcz82M2RiIl0sIm5hbWVzIjpbIk5hdkJhciIsImNoYXJnZWQiLCJzZXRDaGFyZ2VkIiwidXNlU3RhdGUiLCJ0b2dnbGVkIiwic2V0VG9nZ2xlZCIsImxpbmtzIiwic2V0TGlua3MiLCJjbGlja1RvZ2dsZSIsImNvbnN0cnVjdG9yTGlua3MiLCJ2YWx1ZXMiLCJuYW1lIiwibGluayIsIm1hcCIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFHQSxTQUFTQSxNQUFULEdBQWtCO0FBQ2QsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCQyxzREFBUSxDQUFDLENBQUQsQ0FBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JGLHNEQUFRLENBQUMsQ0FBRCxDQUF0QztBQUNBLFFBQU07QUFBQSxPQUFDRyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkosc0RBQVEsQ0FBQyxFQUFELENBQWxDOztBQUVBLFdBQVNLLFdBQVQsR0FBdUI7QUFDbkJILGNBQVUsQ0FBQyxDQUFDRCxPQUFGLENBQVY7QUFDSDs7QUFJRCxXQUFTSyxnQkFBVCxHQUE0QjtBQUV4QixRQUFJQyxNQUFNLEdBQUcsQ0FDVDtBQUFFQyxVQUFJLEVBQUUsUUFBUjtBQUFrQkMsVUFBSSxFQUFFO0FBQXhCLEtBRFMsRUFFVDtBQUFFRCxVQUFJLEVBQUUsVUFBUjtBQUFvQkMsVUFBSSxFQUFFO0FBQTFCLEtBRlMsRUFHVDtBQUFFRCxVQUFJLEVBQUUsUUFBUjtBQUFrQkMsVUFBSSxFQUFFO0FBQXhCLEtBSFMsRUFJVDtBQUFFRCxVQUFJLEVBQUUsVUFBUjtBQUFvQkMsVUFBSSxFQUFFO0FBQTFCLEtBSlMsQ0FBYjtBQU9BTCxZQUFRLENBQ0pHLE1BQU0sQ0FBQ0csR0FBUCxDQUFXQyxJQUFJLElBQUk7QUFDZiwwQkFDSTtBQUFHLFlBQUksRUFBRUEsSUFBSSxDQUFDRixJQUFkO0FBQUEsa0JBQXFCRSxJQUFJLENBQUNIO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESjtBQUdILEtBSkQsQ0FESSxDQUFSO0FBUUg7O0FBRUQsTUFBSVYsT0FBTyxLQUFLLENBQWhCLEVBQW1CO0FBQ2ZRLG9CQUFnQjtBQUNoQlAsY0FBVSxDQUFDLENBQUQsQ0FBVjtBQUNIOztBQUVELHNCQUNJO0FBQUEsY0FDS0k7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFLSDs7QUFBZ0JOLHFFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY29tcG9uZW50cy9uYXZiYXIvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuXG5mdW5jdGlvbiBOYXZCYXIoKSB7XG4gICAgY29uc3QgW2NoYXJnZWQsIHNldENoYXJnZWRdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW3RvZ2dsZWQsIHNldFRvZ2dsZWRdID0gdXNlU3RhdGUoMSk7XG4gICAgY29uc3QgW2xpbmtzLCBzZXRMaW5rc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICBmdW5jdGlvbiBjbGlja1RvZ2dsZSgpIHtcbiAgICAgICAgc2V0VG9nZ2xlZCghdG9nZ2xlZCk7XG4gICAgfVxuXG5cblxuICAgIGZ1bmN0aW9uIGNvbnN0cnVjdG9yTGlua3MoKSB7XG5cbiAgICAgICAgbGV0IHZhbHVlcyA9IFtcbiAgICAgICAgICAgIHsgbmFtZTogJ0dpdGh1YicsIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vaGNlbGFudGUnIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdMaW5rZWRpbicsIGxpbms6ICdodHRwczovL2xpbmtlZGluLmNvbS9pbi9oY2VsYW50ZScgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ0dpdGh1YicsIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vd2VzZmYnIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdMaW5rZWRpbicsIGxpbms6ICdodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vd2VzbGV5LWZyYW5jby1mZXJyZWlyYS0yODEwNTIxNGEvJyB9XG4gICAgICAgIF1cblxuICAgICAgICBzZXRMaW5rcyhcbiAgICAgICAgICAgIHZhbHVlcy5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17aXRlbS5saW5rfT57aXRlbS5uYW1lfTwvYT5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICApXG5cbiAgICB9XG5cbiAgICBpZiAoY2hhcmdlZCA9PT0gMCkge1xuICAgICAgICBjb25zdHJ1Y3RvckxpbmtzKClcbiAgICAgICAgc2V0Q2hhcmdlZCgxKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7bGlua3N9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0gZXhwb3J0IGRlZmF1bHQgTmF2QmFyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/navbar/index.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_navbar_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navbar/index */ \"./pages/components/navbar/index.js\");\n/* harmony import */ var _components_graph_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/graph/index */ \"./pages/components/graph/index.js\");\n\nvar _jsxFileName = \"/home/hcelante/Documents/APS SD/distribuited_application/front/pages/index.js\";\n\n\n\nconst homeStyle = {\n  backgroundColor: 'grey'\n};\n\nfunction Home() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    style: homeStyle,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_graph_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_navbar_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 9\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbImhvbWVTdHlsZSIsImJhY2tncm91bmRDb2xvciIsIkhvbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLE1BQU1BLFNBQVMsR0FBRztBQUNkQyxpQkFBZSxFQUFFO0FBREgsQ0FBbEI7O0FBSUEsU0FBU0MsSUFBVCxHQUFlO0FBRVgsc0JBQ0k7QUFBSyxTQUFLLEVBQUVGLFNBQVo7QUFBQSw0QkFDSSxxRUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSSxxRUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFNSDs7QUFFY0UsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5hdkJhciBmcm9tICcuL2NvbXBvbmVudHMvbmF2YmFyL2luZGV4JztcbmltcG9ydCBHcmFwaCBmcm9tICcuL2NvbXBvbmVudHMvZ3JhcGgvaW5kZXgnO1xuY29uc3QgaG9tZVN0eWxlID0ge1xuICAgIGJhY2tncm91bmRDb2xvcjogJ2dyZXknXG59O1xuXG5mdW5jdGlvbiBIb21lKCl7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXtob21lU3R5bGV9PlxuICAgICAgICAgICAgPEdyYXBoLz5cbiAgICAgICAgICAgIDxOYXZCYXIvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-google-charts":
/*!**************************************!*\
  !*** external "react-google-charts" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-google-charts\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1nb29nbGUtY2hhcnRzXCI/MmU4NiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1nb29nbGUtY2hhcnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZ29vZ2xlLWNoYXJ0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-google-charts\n");

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