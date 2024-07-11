"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkstate"] = self["webpackChunkstate"] || []).push([["src_stores_cart_store_ts"],{

/***/ "./src/stores/cart.store.ts":
/*!**********************************!*\
  !*** ./src/stores/cart.store.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useCart: () => (/* binding */ useCart)\n/* harmony export */ });\n/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand */ \"webpack/sharing/consume/default/zustand/zustand\");\n/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zustand__WEBPACK_IMPORTED_MODULE_0__);\n\nconst useCart = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)(set => ({\n  cart: [],\n  addToCart: product => set(state => ({\n    cart: [...state.cart, product]\n  })),\n  removeFromCart: productId => set(state => ({\n    cart: state.cart.filter(product => product.id !== productId)\n  }))\n}));\n\n//# sourceURL=webpack://state/./src/stores/cart.store.ts?");

/***/ })

}]);