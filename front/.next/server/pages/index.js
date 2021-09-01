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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_google_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-google-charts */ \"react-google-charts\");\n/* harmony import */ var react_google_charts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_google_charts__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/home/hcelante/Documents/APS SD/distribuited_application/front/pages/components/graph/index.js\";\n\n\n\nasync function getData() {\n  const url = \"http://127.0.0.1:5000/\";\n  const response = await fetch(url);\n  const result = await response.json();\n  return result;\n}\n\nconst graphStyle = {\n  backgroundColor: 'white'\n};\n\nfunction Graph() {\n  const {\n    0: charged,\n    1: setCharged\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0);\n  const {\n    0: myData,\n    1: setMyData\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({});\n  const {\n    0: sentiments,\n    1: setSentiments\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n  const {\n    0: value,\n    1: setValue\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0);\n\n  async function collect() {\n    const url = \"http://127.0.0.1:5000/collect/\" + value;\n    fetch(url).then(() => {\n      console.log('response');\n    });\n  }\n\n  function getGraph() {\n    getData().then(response => {\n      setMyData(response);\n      countSentiments(response);\n    });\n  }\n\n  function countSentiments(myData) {\n    let sentiment = [0, 0, 0];\n    myData.forEach(element => {\n      sentiment[element[0]] += 1;\n    });\n    setSentiments(sentiment);\n  }\n\n  if (charged === 0) {\n    getGraph();\n    setCharged(1);\n  }\n\n  console.log(sentiments);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n          children: \"N\\xFAmero de Tweets que deseja buscar:\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"text\",\n          value: value,\n          onChange: e => setValue(e.target.value)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: () => collect(),\n        children: \"Update\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: graphStyle,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_google_charts__WEBPACK_IMPORTED_MODULE_2___default.a, {\n            width: '1000px',\n            height: '1000px',\n            chartType: \"PieChart\",\n            loader: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              children: \"Carregando Gr\\xE1fico\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 71,\n              columnNumber: 37\n            }, this),\n            data: [['Sentimento', 'Tweets'], ['Positivo', sentiments[1]], ['Negativo', sentiments[0]], ['Neutro', sentiments[2]]],\n            options: {\n              title: 'Análise Sentimental de tweets sobre o personagem Luffy de One Piece',\n              is3D: true\n            },\n            rootProps: {\n              'data-testid': '2'\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 54,\n    columnNumber: 9\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Graph);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL2dyYXBoL2luZGV4LmpzPzk1OTciXSwibmFtZXMiOlsiZ2V0RGF0YSIsInVybCIsInJlc3BvbnNlIiwiZmV0Y2giLCJyZXN1bHQiLCJqc29uIiwiZ3JhcGhTdHlsZSIsImJhY2tncm91bmRDb2xvciIsIkdyYXBoIiwiY2hhcmdlZCIsInNldENoYXJnZWQiLCJ1c2VTdGF0ZSIsIm15RGF0YSIsInNldE15RGF0YSIsInNlbnRpbWVudHMiLCJzZXRTZW50aW1lbnRzIiwidmFsdWUiLCJzZXRWYWx1ZSIsImNvbGxlY3QiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsImdldEdyYXBoIiwiY291bnRTZW50aW1lbnRzIiwic2VudGltZW50IiwiZm9yRWFjaCIsImVsZW1lbnQiLCJlIiwidGFyZ2V0IiwidGl0bGUiLCJpczNEIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLGVBQWVBLE9BQWYsR0FBeUI7QUFDckIsUUFBTUMsR0FBRyxHQUFHLHdCQUFaO0FBQ0EsUUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ0YsR0FBRCxDQUE1QjtBQUNBLFFBQU1HLE1BQU0sR0FBRyxNQUFNRixRQUFRLENBQUNHLElBQVQsRUFBckI7QUFDQSxTQUFPRCxNQUFQO0FBQ0g7O0FBR0QsTUFBTUUsVUFBVSxHQUFHO0FBQ2ZDLGlCQUFlLEVBQUU7QUFERixDQUFuQjs7QUFJQSxTQUFTQyxLQUFULEdBQWlCO0FBQ2IsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCQyxzREFBUSxDQUFDLENBQUQsQ0FBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0JGLHNEQUFRLENBQUMsRUFBRCxDQUFwQztBQUNBLFFBQU07QUFBQSxPQUFDRyxVQUFEO0FBQUEsT0FBYUM7QUFBYixNQUE4Qkosc0RBQVEsQ0FBQyxFQUFELENBQTVDO0FBQ0EsUUFBTTtBQUFBLE9BQUNLLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CTixzREFBUSxDQUFDLENBQUQsQ0FBbEM7O0FBRUEsaUJBQWVPLE9BQWYsR0FBd0I7QUFDcEIsVUFBTWpCLEdBQUcsR0FBRyxtQ0FBbUNlLEtBQS9DO0FBQ0FiLFNBQUssQ0FBQ0YsR0FBRCxDQUFMLENBQVdrQixJQUFYLENBQWdCLE1BQUs7QUFDakJDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVo7QUFDSCxLQUZEO0FBSUg7O0FBR0QsV0FBU0MsUUFBVCxHQUFvQjtBQUNoQnRCLFdBQU8sR0FBR21CLElBQVYsQ0FBZWpCLFFBQVEsSUFBSTtBQUN2QlcsZUFBUyxDQUFDWCxRQUFELENBQVQ7QUFDQXFCLHFCQUFlLENBQUNyQixRQUFELENBQWY7QUFDSCxLQUhEO0FBS0g7O0FBRUQsV0FBU3FCLGVBQVQsQ0FBeUJYLE1BQXpCLEVBQWlDO0FBQzdCLFFBQUlZLFNBQVMsR0FBRyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFoQjtBQUNBWixVQUFNLENBQUNhLE9BQVAsQ0FBZUMsT0FBTyxJQUFJO0FBQ3RCRixlQUFTLENBQUNFLE9BQU8sQ0FBQyxDQUFELENBQVIsQ0FBVCxJQUF5QixDQUF6QjtBQUNILEtBRkQ7QUFHQVgsaUJBQWEsQ0FBQ1MsU0FBRCxDQUFiO0FBQ0g7O0FBRUQsTUFBSWYsT0FBTyxLQUFLLENBQWhCLEVBQW1CO0FBQ2ZhLFlBQVE7QUFDUlosY0FBVSxDQUFDLENBQUQsQ0FBVjtBQUNIOztBQUVEVSxTQUFPLENBQUNDLEdBQVIsQ0FBWVAsVUFBWjtBQUNBLHNCQUNJO0FBQUEsNEJBQ0k7QUFBQSw4QkFDSTtBQUFBLGdDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBTyxjQUFJLEVBQUMsTUFBWjtBQUFtQixlQUFLLEVBQUVFLEtBQTFCO0FBQWlDLGtCQUFRLEVBQUVXLENBQUMsSUFBS1YsUUFBUSxDQUFDVSxDQUFDLENBQUNDLE1BQUYsQ0FBU1osS0FBVjtBQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBS0k7QUFBUSxlQUFPLEVBQUUsTUFBTUUsT0FBTyxFQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBVUk7QUFBSyxXQUFLLEVBQUVaLFVBQVo7QUFBQSw2QkFDSTtBQUFBLCtCQUNJO0FBQUssbUJBQVMsRUFBQyxFQUFmO0FBQUEsaUNBQ0kscUVBQUMsMERBQUQ7QUFDSSxpQkFBSyxFQUFFLFFBRFg7QUFFSSxrQkFBTSxFQUFFLFFBRlo7QUFHSSxxQkFBUyxFQUFDLFVBSGQ7QUFJSSxrQkFBTSxlQUFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpaO0FBS0ksZ0JBQUksRUFBRSxDQUNGLENBQUMsWUFBRCxFQUFlLFFBQWYsQ0FERSxFQUVGLENBQUMsVUFBRCxFQUFhUSxVQUFVLENBQUMsQ0FBRCxDQUF2QixDQUZFLEVBR0YsQ0FBQyxVQUFELEVBQWFBLFVBQVUsQ0FBQyxDQUFELENBQXZCLENBSEUsRUFJRixDQUFDLFFBQUQsRUFBV0EsVUFBVSxDQUFDLENBQUQsQ0FBckIsQ0FKRSxDQUxWO0FBV0ksbUJBQU8sRUFBRTtBQUNMZSxtQkFBSyxFQUFFLHFFQURGO0FBRUxDLGtCQUFJLEVBQUU7QUFGRCxhQVhiO0FBZUkscUJBQVMsRUFBRTtBQUFFLDZCQUFlO0FBQWpCO0FBZmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBcUNIOztBQUFnQnRCLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY29tcG9uZW50cy9ncmFwaC9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENoYXJ0IGZyb20gXCJyZWFjdC1nb29nbGUtY2hhcnRzXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldERhdGEoKSB7XG4gICAgY29uc3QgdXJsID0gXCJodHRwOi8vMTI3LjAuMC4xOjUwMDAvXCJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybClcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICByZXR1cm4gcmVzdWx0XG59XG5cblxuY29uc3QgZ3JhcGhTdHlsZSA9IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZSdcbn07XG5cbmZ1bmN0aW9uIEdyYXBoKCkge1xuICAgIGNvbnN0IFtjaGFyZ2VkLCBzZXRDaGFyZ2VkXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtteURhdGEsIHNldE15RGF0YV0gPSB1c2VTdGF0ZSh7fSk7XG4gICAgY29uc3QgW3NlbnRpbWVudHMsIHNldFNlbnRpbWVudHNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoMCk7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBjb2xsZWN0KCl7XG4gICAgICAgIGNvbnN0IHVybCA9IFwiaHR0cDovLzEyNy4wLjAuMTo1MDAwL2NvbGxlY3QvXCIgKyB2YWx1ZVxuICAgICAgICBmZXRjaCh1cmwpLnRoZW4oKCkgPT57XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVzcG9uc2UnKVxuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgXG4gICAgZnVuY3Rpb24gZ2V0R3JhcGgoKSB7XG4gICAgICAgIGdldERhdGEoKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIHNldE15RGF0YShyZXNwb25zZSlcbiAgICAgICAgICAgIGNvdW50U2VudGltZW50cyhyZXNwb25zZSlcbiAgICAgICAgfSlcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvdW50U2VudGltZW50cyhteURhdGEpIHtcbiAgICAgICAgbGV0IHNlbnRpbWVudCA9IFswLCAwLCAwXVxuICAgICAgICBteURhdGEuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIHNlbnRpbWVudFtlbGVtZW50WzBdXSArPSAxXG4gICAgICAgIH0pO1xuICAgICAgICBzZXRTZW50aW1lbnRzKHNlbnRpbWVudClcbiAgICB9XG5cbiAgICBpZiAoY2hhcmdlZCA9PT0gMCkge1xuICAgICAgICBnZXRHcmFwaCgpXG4gICAgICAgIHNldENoYXJnZWQoMSlcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhzZW50aW1lbnRzKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGgyPk7Dum1lcm8gZGUgVHdlZXRzIHF1ZSBkZXNlamEgYnVzY2FyOjwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9e2UgPT4gIHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gY29sbGVjdCgpfT5cbiAgICAgICAgICAgICAgICAgICAgVXBkYXRlXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e2dyYXBoU3R5bGV9PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hhcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17JzEwMDBweCd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsnMTAwMHB4J31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFydFR5cGU9XCJQaWVDaGFydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGVyPXs8ZGl2PkNhcnJlZ2FuZG8gR3LDoWZpY288L2Rpdj59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbJ1NlbnRpbWVudG8nLCAnVHdlZXRzJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsnUG9zaXRpdm8nLCBzZW50aW1lbnRzWzFdXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWydOZWdhdGl2bycsIHNlbnRpbWVudHNbMF1dLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbJ05ldXRybycsIHNlbnRpbWVudHNbMl1dLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0Fuw6FsaXNlIFNlbnRpbWVudGFsIGRlIHR3ZWV0cyBzb2JyZSBvIHBlcnNvbmFnZW0gTHVmZnkgZGUgT25lIFBpZWNlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXMzRDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvb3RQcm9wcz17eyAnZGF0YS10ZXN0aWQnOiAnMicgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID48L0NoYXJ0PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG5cbn0gZXhwb3J0IGRlZmF1bHQgR3JhcGg7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/graph/index.js\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_navbar_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navbar/index */ \"./pages/components/navbar/index.js\");\n/* harmony import */ var _components_graph_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/graph/index */ \"./pages/components/graph/index.js\");\n\nvar _jsxFileName = \"/home/hcelante/Documents/APS SD/distribuited_application/front/pages/index.js\";\n\n\n\nconst homeStyle = {\n  backgroundColor: 'white'\n};\n\nfunction Home() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    style: homeStyle,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_graph_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 9\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbImhvbWVTdHlsZSIsImJhY2tncm91bmRDb2xvciIsIkhvbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLE1BQU1BLFNBQVMsR0FBRztBQUNkQyxpQkFBZSxFQUFFO0FBREgsQ0FBbEI7O0FBSUEsU0FBU0MsSUFBVCxHQUFlO0FBRVgsc0JBQ0k7QUFBSyxTQUFLLEVBQUVGLFNBQVo7QUFBQSwyQkFDSSxxRUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBS0g7O0FBRWNFLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi9jb21wb25lbnRzL25hdmJhci9pbmRleCc7XG5pbXBvcnQgR3JhcGggZnJvbSAnLi9jb21wb25lbnRzL2dyYXBoL2luZGV4JztcbmNvbnN0IGhvbWVTdHlsZSA9IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZSdcbn07XG5cbmZ1bmN0aW9uIEhvbWUoKXtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e2hvbWVTdHlsZX0+XG4gICAgICAgICAgICA8R3JhcGgvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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