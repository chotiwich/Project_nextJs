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

/***/ "./components/Shops/index.js":
/*!***********************************!*\
  !*** ./components/Shops/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/product */ "./components/product/index.js");


var _jsxFileName = "E:\\Project_nextJs\\components\\Shops\\index.js";



function index(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      class: "container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        class: "row",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "col-md-12",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            class: "row",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              class: "aa-product-area",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                class: "aa-product-inner",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  class: "tab-content",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                    class: "aa-product-catg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 14,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "row",
                    children: props.data.map(data => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_product__WEBPACK_IMPORTED_MODULE_2__["default"], {
                      data: data
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 18,
                      columnNumber: 25
                    }, this))
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 15,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 13,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 12,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 11,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./components/footer/footer.js":
/*!*************************************!*\
  !*** ./components/footer/footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "E:\\Project_nextJs\\components\\footer\\footer.js";


function footer() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      src: "https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      src: "js/bootstrap.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      type: "text/javascript",
      src: "js/jquery.smartmenus.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      type: "text/javascript",
      src: "js/jquery.smartmenus.bootstrap.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      src: "js/sequence.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      src: "js/sequence-theme.modern-slide-in.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      type: "text/javascript",
      src: "js/jquery.simpleGallery.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      type: "text/javascript",
      src: "js/jquery.simpleLens.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      type: "text/javascript",
      src: "js/slick.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      type: "text/javascript",
      src: "js/nouislider.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      src: "js/custom.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
      className: "footer",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
        id: "aa-footer",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "aa-footer-top",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            class: "container",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              class: "row",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                class: "col-md-12",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  class: "aa-footer-top-area",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    class: "row",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      class: "col-md-3 col-sm-6",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        class: "aa-footer-widget",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                          children: "Main Menu"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 31,
                          columnNumber: 27
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                          class: "aa-footer-nav",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                              href: "#",
                              children: "Home"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 34,
                              columnNumber: 31
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 33,
                            columnNumber: 29
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                              href: "#",
                              children: "Our Services"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 37,
                              columnNumber: 31
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 36,
                            columnNumber: 29
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                              href: "#",
                              children: "Our Products"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 40,
                              columnNumber: 31
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 39,
                            columnNumber: 29
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                              href: "#",
                              children: "About Us"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 43,
                              columnNumber: 31
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 42,
                            columnNumber: 29
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                              href: "#",
                              children: "Contact Us"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 46,
                              columnNumber: 31
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 45,
                            columnNumber: 29
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 32,
                          columnNumber: 27
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 30,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 29,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      class: "col-md-3 col-sm-6",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        class: "aa-footer-widget",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          class: "aa-footer-widget",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                            children: "Knowledge Base"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 54,
                            columnNumber: 29
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                            class: "aa-footer-nav",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                                href: "#",
                                children: "Delivery"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 57,
                                columnNumber: 33
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 56,
                              columnNumber: 31
                            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                                href: "#",
                                children: "Returns"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 60,
                                columnNumber: 33
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 59,
                              columnNumber: 31
                            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                                href: "#",
                                children: "Services"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 63,
                                columnNumber: 33
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 62,
                              columnNumber: 31
                            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                                href: "#",
                                children: "Discount"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 66,
                                columnNumber: 33
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 65,
                              columnNumber: 31
                            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                                href: "#",
                                children: "Special Offer"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 69,
                                columnNumber: 33
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 68,
                              columnNumber: 31
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 55,
                            columnNumber: 29
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 53,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 52,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 51,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      class: "col-md-3 col-sm-6",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        class: "aa-footer-widget",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          class: "aa-footer-widget",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                            children: "Useful Links"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 78,
                            columnNumber: 29
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                            class: "aa-footer-nav",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                                href: "#",
                                children: "Site Map"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 81,
                                columnNumber: 33
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 80,
                              columnNumber: 31
                            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                                href: "#",
                                children: "Search"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 84,
                                columnNumber: 33
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 83,
                              columnNumber: 31
                            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                                href: "#",
                                children: "Advanced Search"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 87,
                                columnNumber: 33
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 86,
                              columnNumber: 31
                            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                                href: "#",
                                children: "Suppliers"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 90,
                                columnNumber: 33
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 89,
                              columnNumber: 31
                            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                                href: "#",
                                children: "FAQ"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 93,
                                columnNumber: 33
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 92,
                              columnNumber: 31
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 79,
                            columnNumber: 29
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 77,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 76,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 75,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      class: "col-md-3 col-sm-6",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        class: "aa-footer-widget",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          class: "aa-footer-widget",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                            children: "Contact Us"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 102,
                            columnNumber: 29
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("address", {
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                              children: [" ", "222/17 Thaiburi , Thasala District Nakhon Si Thammarat 80160"]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 104,
                              columnNumber: 31
                            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                                class: "fa fa-phone"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 110,
                                columnNumber: 33
                              }, this), "095-4167750"]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 109,
                              columnNumber: 31
                            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                                class: "fa fa-envelope"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 113,
                                columnNumber: 33
                              }, this), "chotiwich.wa@mail.wu.ac.th"]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 112,
                              columnNumber: 31
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 103,
                            columnNumber: 29
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            class: "aa-footer-social",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                              href: "#",
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                                class: "fa fa-facebook"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 119,
                                columnNumber: 33
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 118,
                              columnNumber: 31
                            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                              href: "#",
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                                class: "fa fa-twitter"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 122,
                                columnNumber: 33
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 121,
                              columnNumber: 31
                            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                              href: "#",
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                                class: "fa fa-google-plus"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 125,
                                columnNumber: 33
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 124,
                              columnNumber: 31
                            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                              href: "#",
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                                class: "fa fa-youtube"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 128,
                                columnNumber: 33
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 127,
                              columnNumber: 31
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 117,
                            columnNumber: 29
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 101,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 100,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 99,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 28,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 27,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 26,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "aa-footer-bottom",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            class: "container",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              class: "row",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                class: "col-md-12",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  class: "aa-footer-bottom-area",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: ["Designed by", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "http://www.markups.io/",
                      children: "MarkUps.io"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 148,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 146,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    class: "aa-footer-payment",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      class: "fa fa-cc-mastercard"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 151,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      class: "fa fa-cc-visa"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 152,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      class: "fa fa-paypal"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 153,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      class: "fa fa-cc-discover"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 154,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 150,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 145,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 144,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (footer);

/***/ }),

/***/ "./components/head/index.js":
/*!**********************************!*\
  !*** ./components/head/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_Head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/Head */ "next/Head");
/* harmony import */ var next_Head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Head__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "E:\\Project_nextJs\\components\\head\\index.js";


function index() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_Head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      charset: "utf-8"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      "http-equiv": "X-UA-Compatible",
      content: "IE=edge"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      href: "/css/font-awesome.css",
      rel: "stylesheet"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      href: "/css/bootstrap.css",
      rel: "stylesheet"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      href: "/css/jquery.smartmenus.bootstrap.css",
      rel: "stylesheet"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      rel: "stylesheet",
      type: "text/css",
      href: "/css/jquery.simpleLens.css"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      rel: "stylesheet",
      type: "text/css",
      href: "/css/slick.css"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      rel: "stylesheet",
      type: "text/css",
      href: "/css/nouislider.css"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      id: "switcher",
      href: "/css/theme-color/default-theme.css",
      rel: "stylesheet"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      href: "/css/sequence-theme.modern-slide-in.css",
      rel: "stylesheet",
      media: "all"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      href: "/css/style.css",
      rel: "stylesheet"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      href: "https://fonts.googleapis.com/css?family=Lato",
      rel: "stylesheet",
      type: "text/css"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      href: "https://fonts.googleapis.com/css?family=Raleway",
      rel: "stylesheet",
      type: "text/css"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      src: "https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      src: "js/bootstrap.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      type: "text/javascript",
      src: "js/jquery.smartmenus.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      type: "text/javascript",
      src: "js/jquery.smartmenus.bootstrap.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      src: "js/sequence.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      src: "js/sequence-theme.modern-slide-in.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      type: "text/javascript",
      src: "js/jquery.simpleGallery.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      type: "text/javascript",
      src: "js/jquery.simpleLens.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      type: "text/javascript",
      src: "js/slick.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      type: "text/javascript",
      src: "js/nouislider.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      src: "js/custom.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./components/product/index.js":
/*!*************************************!*\
  !*** ./components/product/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "E:\\Project_nextJs\\components\\product\\index.js";


function index(props) {
  const {
    data
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      class: "card"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      class: "col-md-3",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        class: "aa-product-img",
        href: "#",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: data.product_img,
          width: "260",
          height: "295"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        class: "text-center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
          children: data.product_name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
        class: "text-center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
          children: [data.product_price, " \u0E3F"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("center", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "col-md-12",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            type: "button",
            class: "btn",
            children: "Add to Cart"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/footer/footer */ "./components/footer/footer.js");
/* harmony import */ var _components_Shops__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Shops */ "./components/Shops/index.js");
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/head */ "./components/head/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "E:\\Project_nextJs\\pages\\index.js";




const PRODUCT_LISTS = [{
  product_id: 1,
  product_name: "Olympus OM-D E-M10 ",
  product_img: "https://www.bigcamera.co.th/media/catalog/product/cache/2/image/1800x/040ec09b1e35df139433887a97daa66f/u/n/untitled-1_0019_e-m10m3s___0_1.jpg",
  product_price: 24990
}, {
  product_id: 2,
  product_name: "Sony a6600",
  product_img: "https://www.bigcamera.co.th/media/catalog/product/cache/2/image/1800x/040ec09b1e35df139433887a97daa66f/s/o/sony-a6600-body.jpg",
  product_price: 42990
}, {
  product_id: 3,
  product_name: "Canon EOS M200",
  product_img: "https://www.bigcamera.co.th/media/catalog/product/cache/2/image/1800x/040ec09b1e35df139433887a97daa66f/3/4/34645_1.jpg",
  product_price: 19990
}, {
  product_id: 4,
  product_name: "Fujifilm X-A7",
  product_img: "https://www.bigcamera.co.th/media/catalog/product/cache/2/image/1800x/040ec09b1e35df139433887a97daa66f/1/5/1568250032_img_1248877_4.jpg",
  product_price: 18990
}, {
  product_id: 5,
  product_name: "Nikon D3500 ",
  product_img: "https://www.bigcamera.co.th/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/1/5/1535611817000_1433064.jpg",
  product_price: 17990
}, {
  product_id: 6,
  product_name: "Canon PowerShot G7X  ",
  product_img: "https://www.bigcamera.co.th/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/2/9/29canon_powershot_g7x_mark_iii_1.jpg",
  product_price: 22990
}, {
  product_id: 7,
  product_name: "Canon EOS 5D Mark III ",
  product_img: "https://www.bigcamera.co.th/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/2/0/20210201_064617_a95e94e5480c22bf7282a35efb93c430.jpg",
  product_price: 61990
}, {
  product_id: 8,
  product_name: "Canon EOS 1500D ",
  product_img: "https://www.bigcamera.co.th/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/2/c/2canon_eos_1500d_kit_18-55mm_is_ii_1.jpg",
  product_price: 18990
}, {
  product_id: 9,
  product_name: "Sony a7R Body",
  product_img: "https://www.bigcamera.co.th/media/catalog/product/cache/2/image/1800x/040ec09b1e35df139433887a97daa66f/1/3/1387562831000_1008112_2.jpg",
  product_price: 30990
}, {
  product_id: 10,
  product_name: "Sony Cyber-shot ",
  product_img: "https://www.bigcamera.co.th/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/a/r/artboard-10-100.jpg",
  product_price: 3190
}, {
  product_id: 11,
  product_name: "Panasonic Lumix ",
  product_img: "https://www.bigcamera.co.th/media/catalog/product/cache/2/image/1800x/040ec09b1e35df139433887a97daa66f/g/f/gf10-black_1_1.jpg",
  product_price: 18991
}, {
  product_id: 12,
  product_name: "Fujifilm X-E4",
  product_img: "https://www.bigcamera.co.th/media/catalog/product/cache/2/image/1800x/040ec09b1e35df139433887a97daa66f/2/0/20210219_074142_1611737492_1618882.jpg",
  product_price: 28990
}];
function Home(props) {
  const {
    data
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_head__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Shops__WEBPACK_IMPORTED_MODULE_2__["default"], {
      data: data
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_footer_footer__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}
async function getStaticProps() {
  return {
    props: {
      data: PRODUCT_LISTS
    }
  };
}

/***/ }),

/***/ "next/Head":
/*!****************************!*\
  !*** external "next/Head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/Head");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TaG9wcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZWFkL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcHJvZHVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L0hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbImluZGV4IiwicHJvcHMiLCJkYXRhIiwibWFwIiwiZm9vdGVyIiwicHJvZHVjdF9pbWciLCJwcm9kdWN0X25hbWUiLCJwcm9kdWN0X3ByaWNlIiwiUFJPRFVDVF9MSVNUUyIsInByb2R1Y3RfaWQiLCJIb21lIiwiZ2V0U3RhdGljUHJvcHMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENhcmRTaG9wIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Byb2R1Y3RcIjtcclxuZnVuY3Rpb24gaW5kZXgocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWEtcHJvZHVjdC1hcmVhXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWEtcHJvZHVjdC1pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFiLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJhYS1wcm9kdWN0LWNhdGdcIj48L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7LyogY2FyZCBvbmUgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuZGF0YS5tYXAoKGRhdGEpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRTaG9wIGRhdGE9e2RhdGF9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gZm9vdGVyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8YnI+PC9icj5cclxuICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2FqYXguZ29vZ2xlYXBpcy5jb20vYWpheC9saWJzL2pxdWVyeS8xLjExLjMvanF1ZXJ5Lm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICA8c2NyaXB0IHNyYz1cImpzL2Jvb3RzdHJhcC5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCJqcy9qcXVlcnkuc21hcnRtZW51cy5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICA8c2NyaXB0XHJcbiAgICAgICAgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiXHJcbiAgICAgICAgc3JjPVwianMvanF1ZXJ5LnNtYXJ0bWVudXMuYm9vdHN0cmFwLmpzXCJcclxuICAgICAgPjwvc2NyaXB0PlxyXG4gICAgICA8c2NyaXB0IHNyYz1cImpzL3NlcXVlbmNlLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgIDxzY3JpcHQgc3JjPVwianMvc2VxdWVuY2UtdGhlbWUubW9kZXJuLXNsaWRlLWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cImpzL2pxdWVyeS5zaW1wbGVHYWxsZXJ5LmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cImpzL2pxdWVyeS5zaW1wbGVMZW5zLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cImpzL3NsaWNrLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cImpzL25vdWlzbGlkZXIuanNcIj48L3NjcmlwdD5cclxuICAgICAgPHNjcmlwdCBzcmM9XCJqcy9jdXN0b20uanNcIj48L3NjcmlwdD5cclxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJmb290ZXJcIj5cclxuICAgICAgICA8Zm9vdGVyIGlkPVwiYWEtZm9vdGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWEtZm9vdGVyLXRvcFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWEtZm9vdGVyLXRvcC1hcmVhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0zIGNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhYS1mb290ZXItd2lkZ2V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPk1haW4gTWVudTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiYWEtZm9vdGVyLW5hdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPkhvbWU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPk91ciBTZXJ2aWNlczwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+T3VyIFByb2R1Y3RzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5BYm91dCBVczwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+Q29udGFjdCBVczwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMyBjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWEtZm9vdGVyLXdpZGdldFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhYS1mb290ZXItd2lkZ2V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+S25vd2xlZGdlIEJhc2U8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiYWEtZm9vdGVyLW5hdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5EZWxpdmVyeTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+UmV0dXJuczwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+U2VydmljZXM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPkRpc2NvdW50PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5TcGVjaWFsIE9mZmVyPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMyBjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWEtZm9vdGVyLXdpZGdldFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhYS1mb290ZXItd2lkZ2V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+VXNlZnVsIExpbmtzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImFhLWZvb3Rlci1uYXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+U2l0ZSBNYXA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlNlYXJjaDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+QWR2YW5jZWQgU2VhcmNoPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5TdXBwbGllcnM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPkZBUTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTMgY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFhLWZvb3Rlci13aWRnZXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWEtZm9vdGVyLXdpZGdldFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkNvbnRhY3QgVXM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFkZHJlc3M+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMjIvMTcgVGhhaWJ1cmkgLCBUaGFzYWxhIERpc3RyaWN0IE5ha2hvbiBTaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoYW1tYXJhdCA4MDE2MFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtcGhvbmVcIj48L3NwYW4+MDk1LTQxNjc3NTBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLWVudmVsb3BlXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNob3Rpd2ljaC53YUBtYWlsLnd1LmFjLnRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYWRkcmVzcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhYS1mb290ZXItc29jaWFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1mYWNlYm9va1wiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtdHdpdHRlclwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtZ29vZ2xlLXBsdXNcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXlvdXR1YmVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhYS1mb290ZXItYm90dG9tXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhYS1mb290ZXItYm90dG9tLWFyZWFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgIERlc2lnbmVkIGJ5e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly93d3cubWFya3Vwcy5pby9cIj5NYXJrVXBzLmlvPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWEtZm9vdGVyLXBheW1lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtY2MtbWFzdGVyY2FyZFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtY2MtdmlzYVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtcGF5cGFsXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1jYy1kaXNjb3ZlclwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgPC9mb290ZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmb290ZXI7XHJcbiIsImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L0hlYWRcIjtcclxuZnVuY3Rpb24gaW5kZXgoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxIZWFkPlxyXG4gICAgICA8bWV0YSBjaGFyc2V0PVwidXRmLThcIiAvPlxyXG4gICAgICA8bWV0YSBodHRwLWVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIiAvPlxyXG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxyXG4gICAgICA8bGluayBocmVmPVwiL2Nzcy9mb250LWF3ZXNvbWUuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiLz5cclxuICAgICAgPGxpbmsgaHJlZj1cIi9jc3MvYm9vdHN0cmFwLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIi8+ICAgXHJcbiAgICAgIDxsaW5rIGhyZWY9XCIvY3NzL2pxdWVyeS5zbWFydG1lbnVzLmJvb3RzdHJhcC5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxyXG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIi9jc3MvanF1ZXJ5LnNpbXBsZUxlbnMuY3NzXCIvPiAgICBcclxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCIvY3NzL3NsaWNrLmNzc1wiLz5cclxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCIvY3NzL25vdWlzbGlkZXIuY3NzXCIvPlxyXG4gICAgICA8bGluayBpZD1cInN3aXRjaGVyXCIgaHJlZj1cIi9jc3MvdGhlbWUtY29sb3IvZGVmYXVsdC10aGVtZS5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxyXG4gICAgICA8bGluayBocmVmPVwiL2Nzcy9zZXF1ZW5jZS10aGVtZS5tb2Rlcm4tc2xpZGUtaW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIG1lZGlhPVwiYWxsXCIvPlxyXG4gICAgICA8bGluayBocmVmPVwiL2Nzcy9zdHlsZS5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIvPiAgICBcclxuICAgICAgPGxpbmsgaHJlZj0naHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG8nIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnLz5cclxuICAgICAgPGxpbmsgaHJlZj0naHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJhbGV3YXknIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnLz5cclxuICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2FqYXguZ29vZ2xlYXBpcy5jb20vYWpheC9saWJzL2pxdWVyeS8xLjExLjMvanF1ZXJ5Lm1pbi5qc1wiLz5cclxuICAgICAgPHNjcmlwdCBzcmM9XCJqcy9ib290c3RyYXAuanNcIi8+XHJcbiAgICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cImpzL2pxdWVyeS5zbWFydG1lbnVzLmpzXCIvPlxyXG4gICAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCJqcy9qcXVlcnkuc21hcnRtZW51cy5ib290c3RyYXAuanNcIi8+ICBcclxuICAgICAgPHNjcmlwdCBzcmM9XCJqcy9zZXF1ZW5jZS5qc1wiLz5cclxuICAgICAgPHNjcmlwdCBzcmM9XCJqcy9zZXF1ZW5jZS10aGVtZS5tb2Rlcm4tc2xpZGUtaW4uanNcIi8+XHJcbiAgICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cImpzL2pxdWVyeS5zaW1wbGVHYWxsZXJ5LmpzXCIvPlxyXG4gICAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCJqcy9qcXVlcnkuc2ltcGxlTGVucy5qc1wiLz5cclxuICAgICAgPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwianMvc2xpY2suanNcIi8+XHJcbiAgICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cImpzL25vdWlzbGlkZXIuanNcIi8+XHJcbiAgICAgIDxzY3JpcHQgc3JjPVwianMvY3VzdG9tLmpzXCIvPlxyXG4gICAgPC9IZWFkPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBpbmRleChwcm9wcykge1xyXG4gIGNvbnN0IHsgZGF0YSB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtM1wiPlxyXG4gICAgICAgIDxhIGNsYXNzPVwiYWEtcHJvZHVjdC1pbWdcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgPGltZyBzcmM9e2RhdGEucHJvZHVjdF9pbWd9IHdpZHRoPVwiMjYwXCIgaGVpZ2h0PVwiMjk1XCIgLz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPGgzIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxiPntkYXRhLnByb2R1Y3RfbmFtZX08L2I+XHJcbiAgICAgICAgPC9oMz5cclxuICAgICAgICA8aDQgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGI+e2RhdGEucHJvZHVjdF9wcmljZX0g4Li/PC9iPlxyXG4gICAgICAgIDwvaDQ+XHJcbiAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgPGNlbnRlcj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG5cIj5cclxuICAgICAgICAgICAgICBBZGQgdG8gQ2FydFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvY2VudGVyPlxyXG4gICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgIDxicj48L2JyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG4iLCJpbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXJcIjtcclxuaW1wb3J0IFNob3BzIGZyb20gXCIuLi9jb21wb25lbnRzL1Nob3BzXCI7XHJcbmltcG9ydCBTZXRIZWFkIGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5cclxuY29uc3QgUFJPRFVDVF9MSVNUUyA9IFtcclxuICB7XHJcbiAgICBwcm9kdWN0X2lkOiAxLFxyXG4gICAgcHJvZHVjdF9uYW1lOiBcIk9seW1wdXMgT00tRCBFLU0xMCBcIixcclxuICAgIHByb2R1Y3RfaW1nOlxyXG4gICAgICBcImh0dHBzOi8vd3d3LmJpZ2NhbWVyYS5jby50aC9tZWRpYS9jYXRhbG9nL3Byb2R1Y3QvY2FjaGUvMi9pbWFnZS8xODAweC8wNDBlYzA5YjFlMzVkZjEzOTQzMzg4N2E5N2RhYTY2Zi91L24vdW50aXRsZWQtMV8wMDE5X2UtbTEwbTNzX19fMF8xLmpwZ1wiLFxyXG4gICAgcHJvZHVjdF9wcmljZTogMjQ5OTAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwcm9kdWN0X2lkOiAyLFxyXG4gICAgcHJvZHVjdF9uYW1lOiBcIlNvbnkgYTY2MDBcIixcclxuICAgIHByb2R1Y3RfaW1nOlxyXG4gICAgICBcImh0dHBzOi8vd3d3LmJpZ2NhbWVyYS5jby50aC9tZWRpYS9jYXRhbG9nL3Byb2R1Y3QvY2FjaGUvMi9pbWFnZS8xODAweC8wNDBlYzA5YjFlMzVkZjEzOTQzMzg4N2E5N2RhYTY2Zi9zL28vc29ueS1hNjYwMC1ib2R5LmpwZ1wiLFxyXG4gICAgcHJvZHVjdF9wcmljZTogNDI5OTAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwcm9kdWN0X2lkOiAzLFxyXG4gICAgcHJvZHVjdF9uYW1lOiBcIkNhbm9uIEVPUyBNMjAwXCIsXHJcbiAgICBwcm9kdWN0X2ltZzpcclxuICAgICAgXCJodHRwczovL3d3dy5iaWdjYW1lcmEuY28udGgvbWVkaWEvY2F0YWxvZy9wcm9kdWN0L2NhY2hlLzIvaW1hZ2UvMTgwMHgvMDQwZWMwOWIxZTM1ZGYxMzk0MzM4ODdhOTdkYWE2NmYvMy80LzM0NjQ1XzEuanBnXCIsXHJcbiAgICBwcm9kdWN0X3ByaWNlOiAxOTk5MCxcclxuICB9LFxyXG4gIHtcclxuICAgIHByb2R1Y3RfaWQ6IDQsXHJcbiAgICBwcm9kdWN0X25hbWU6IFwiRnVqaWZpbG0gWC1BN1wiLFxyXG4gICAgcHJvZHVjdF9pbWc6XHJcbiAgICAgIFwiaHR0cHM6Ly93d3cuYmlnY2FtZXJhLmNvLnRoL21lZGlhL2NhdGFsb2cvcHJvZHVjdC9jYWNoZS8yL2ltYWdlLzE4MDB4LzA0MGVjMDliMWUzNWRmMTM5NDMzODg3YTk3ZGFhNjZmLzEvNS8xNTY4MjUwMDMyX2ltZ18xMjQ4ODc3XzQuanBnXCIsXHJcbiAgICBwcm9kdWN0X3ByaWNlOiAxODk5MCxcclxuICB9LFxyXG4gIHtcclxuICAgIHByb2R1Y3RfaWQ6IDUsXHJcbiAgICBwcm9kdWN0X25hbWU6IFwiTmlrb24gRDM1MDAgXCIsXHJcbiAgICBwcm9kdWN0X2ltZzpcclxuICAgICAgXCJodHRwczovL3d3dy5iaWdjYW1lcmEuY28udGgvbWVkaWEvY2F0YWxvZy9wcm9kdWN0L2NhY2hlLzIvaW1hZ2UvOWRmNzhlYWIzMzUyNWQwOGQ2ZTVmYjhkMjcxMzZlOTUvMS81LzE1MzU2MTE4MTcwMDBfMTQzMzA2NC5qcGdcIixcclxuICAgIHByb2R1Y3RfcHJpY2U6IDE3OTkwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcHJvZHVjdF9pZDogNixcclxuICAgIHByb2R1Y3RfbmFtZTogXCJDYW5vbiBQb3dlclNob3QgRzdYICBcIixcclxuICAgIHByb2R1Y3RfaW1nOlxyXG4gICAgICBcImh0dHBzOi8vd3d3LmJpZ2NhbWVyYS5jby50aC9tZWRpYS9jYXRhbG9nL3Byb2R1Y3QvY2FjaGUvMi9pbWFnZS85ZGY3OGVhYjMzNTI1ZDA4ZDZlNWZiOGQyNzEzNmU5NS8yLzkvMjljYW5vbl9wb3dlcnNob3RfZzd4X21hcmtfaWlpXzEuanBnXCIsXHJcbiAgICBwcm9kdWN0X3ByaWNlOiAyMjk5MCxcclxuICB9LFxyXG4gIHtcclxuICAgIHByb2R1Y3RfaWQ6IDcsXHJcbiAgICBwcm9kdWN0X25hbWU6IFwiQ2Fub24gRU9TIDVEIE1hcmsgSUlJIFwiLFxyXG4gICAgcHJvZHVjdF9pbWc6XHJcbiAgICAgIFwiaHR0cHM6Ly93d3cuYmlnY2FtZXJhLmNvLnRoL21lZGlhL2NhdGFsb2cvcHJvZHVjdC9jYWNoZS8yL2ltYWdlLzlkZjc4ZWFiMzM1MjVkMDhkNmU1ZmI4ZDI3MTM2ZTk1LzIvMC8yMDIxMDIwMV8wNjQ2MTdfYTk1ZTk0ZTU0ODBjMjJiZjcyODJhMzVlZmI5M2M0MzAuanBnXCIsXHJcbiAgICBwcm9kdWN0X3ByaWNlOiA2MTk5MCxcclxuICB9LFxyXG4gIHtcclxuICAgIHByb2R1Y3RfaWQ6IDgsXHJcbiAgICBwcm9kdWN0X25hbWU6IFwiQ2Fub24gRU9TIDE1MDBEIFwiLFxyXG4gICAgcHJvZHVjdF9pbWc6XHJcbiAgICAgIFwiaHR0cHM6Ly93d3cuYmlnY2FtZXJhLmNvLnRoL21lZGlhL2NhdGFsb2cvcHJvZHVjdC9jYWNoZS8yL2ltYWdlLzlkZjc4ZWFiMzM1MjVkMDhkNmU1ZmI4ZDI3MTM2ZTk1LzIvYy8yY2Fub25fZW9zXzE1MDBkX2tpdF8xOC01NW1tX2lzX2lpXzEuanBnXCIsXHJcbiAgICBwcm9kdWN0X3ByaWNlOiAxODk5MCxcclxuICB9LFxyXG4gIHtcclxuICAgIHByb2R1Y3RfaWQ6IDksXHJcbiAgICBwcm9kdWN0X25hbWU6IFwiU29ueSBhN1IgQm9keVwiLFxyXG4gICAgcHJvZHVjdF9pbWc6XHJcbiAgICAgIFwiaHR0cHM6Ly93d3cuYmlnY2FtZXJhLmNvLnRoL21lZGlhL2NhdGFsb2cvcHJvZHVjdC9jYWNoZS8yL2ltYWdlLzE4MDB4LzA0MGVjMDliMWUzNWRmMTM5NDMzODg3YTk3ZGFhNjZmLzEvMy8xMzg3NTYyODMxMDAwXzEwMDgxMTJfMi5qcGdcIixcclxuICAgIHByb2R1Y3RfcHJpY2U6IDMwOTkwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcHJvZHVjdF9pZDogMTAsXHJcbiAgICBwcm9kdWN0X25hbWU6IFwiU29ueSBDeWJlci1zaG90IFwiLFxyXG4gICAgcHJvZHVjdF9pbWc6XHJcbiAgICAgIFwiaHR0cHM6Ly93d3cuYmlnY2FtZXJhLmNvLnRoL21lZGlhL2NhdGFsb2cvcHJvZHVjdC9jYWNoZS8yL2ltYWdlLzlkZjc4ZWFiMzM1MjVkMDhkNmU1ZmI4ZDI3MTM2ZTk1L2Evci9hcnRib2FyZC0xMC0xMDAuanBnXCIsXHJcbiAgICBwcm9kdWN0X3ByaWNlOiAzMTkwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcHJvZHVjdF9pZDogMTEsXHJcbiAgICBwcm9kdWN0X25hbWU6IFwiUGFuYXNvbmljIEx1bWl4IFwiLFxyXG4gICAgcHJvZHVjdF9pbWc6XHJcbiAgICAgIFwiaHR0cHM6Ly93d3cuYmlnY2FtZXJhLmNvLnRoL21lZGlhL2NhdGFsb2cvcHJvZHVjdC9jYWNoZS8yL2ltYWdlLzE4MDB4LzA0MGVjMDliMWUzNWRmMTM5NDMzODg3YTk3ZGFhNjZmL2cvZi9nZjEwLWJsYWNrXzFfMS5qcGdcIixcclxuICAgIHByb2R1Y3RfcHJpY2U6IDE4OTkxLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcHJvZHVjdF9pZDogMTIsXHJcbiAgICBwcm9kdWN0X25hbWU6IFwiRnVqaWZpbG0gWC1FNFwiLFxyXG4gICAgcHJvZHVjdF9pbWc6XHJcbiAgICAgIFwiaHR0cHM6Ly93d3cuYmlnY2FtZXJhLmNvLnRoL21lZGlhL2NhdGFsb2cvcHJvZHVjdC9jYWNoZS8yL2ltYWdlLzE4MDB4LzA0MGVjMDliMWUzNWRmMTM5NDMzODg3YTk3ZGFhNjZmLzIvMC8yMDIxMDIxOV8wNzQxNDJfMTYxMTczNzQ5Ml8xNjE4ODgyLmpwZ1wiLFxyXG4gICAgcHJvZHVjdF9wcmljZTogMjg5OTAsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcclxuICBjb25zdCB7IGRhdGEgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8U2V0SGVhZCAvPlxyXG4gICAgICA8U2hvcHMgZGF0YT17ZGF0YX0gLz5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBkYXRhOiBQUk9EVUNUX0xJU1RTLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvSGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=