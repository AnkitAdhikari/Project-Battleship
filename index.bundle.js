/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/models/gameboard.js":
/*!************************************!*\
  !*** ./src/js/models/gameboard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/js/models/ship.js");

class Gameboard {
  board = [Array.from({
    length: 10
  }), Array.from({
    length: 10
  }), Array.from({
    length: 10
  }), Array.from({
    length: 10
  }), Array.from({
    length: 10
  }), Array.from({
    length: 10
  }), Array.from({
    length: 10
  }), Array.from({
    length: 10
  }), Array.from({
    length: 10
  }), Array.from({
    length: 10
  })];
  missedShots = [];
  ships = [];
  placeShip(coordX, coordY) {
    if (coordX >= 0 && coordX <= 9 && coordY >= 0 && coordY <= 9) {
      const newShip = new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](1);
      this.board[coordY][coordX] = newShip;
      this.ships.push(newShip);
    }
  }
  receiveAttack(coordX, coordY) {
    const el = this.board[coordY][coordX];
    if (el instanceof _ship__WEBPACK_IMPORTED_MODULE_0__["default"]) {
      el.hit();
    } else {
      this.missedShots.push([coordX, coordY]);
    }
  }
  allShipsSunk() {
    return this.ships.every(ship => ship.isSunk());
  }
}

/***/ }),

/***/ "./src/js/models/player.js":
/*!*********************************!*\
  !*** ./src/js/models/player.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/js/models/gameboard.js");

class Player {
  constructor() {
    this.gameBoard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }
}

/***/ }),

/***/ "./src/js/models/ship.js":
/*!*******************************!*\
  !*** ./src/js/models/ship.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
  constructor(length) {
    this.length = length, this.hits = 0;
  }
  hit() {
    this.hits++;
  }
  isSunk() {
    if (this.hits >= this.length) return true;
    return false;
  }
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}

html {
  font-size: 62.5%;
}

body {
  line-height: 1;
  display: grid;
  height: 100vh;
  grid-template-rows: 0.5fr 8fr 0.5fr;
  position: relative;
  background-color: rgb(238, 238, 238);
}

.header {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  padding: 2rem;
}

.board-container {
  display: grid;
  position: relative;
  grid-template-columns: 1fr 1fr;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.name {
  font-size: 1.7rem;
}

.board {
  width: 400px;
  height: 400px;
  border: 1px solid rgb(34, 34, 34);
  display: grid;
  grid-template-columns: repeat(10, 1fr);
}

.cell {
  border: 1px solid rgb(34, 34, 34);
}

.ship {
  background-color: rgb(133, 255, 179);
}

.missed {
  background-color: rgb(182, 179, 179);
}

.sunk {
  background-color: rgb(255, 133, 133);
}

.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  padding: 0.5rem;
}

.github-logo {
  font-size: 3rem;
  margin-left: 1rem;
  transition: transform 1s;
}

.github-logo:hover {
  transform: rotate(1turn);
}

.winner-container {
  height: 100vh;
  width: 100%;
  opacity: 0.95;
  background-color: #e0e0e0;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  color: #4caf50;
  font-size: 4em;
  margin-bottom: 10px;
}

p {
  font-size: 1.6rem;
  color: #2e2e2e;
}

h2 {
  color: #333;
  font-size: 2rem;
}

.close-btn {
  position: absolute;
  right: 0px;
  top: 0px;
  font-size: 6.4rem;
}

.close-btn:hover {
  cursor: pointer;
}

.hidden {
  display: none;
}

.restart-btn {
  position: absolute;
  bottom: 25%;
  left: 50%;
  transform: translate(-50%, 25%);
  padding: 0.7rem 1rem;
  background-color: #4caf50;
  border: none;
  border-radius: 3px;
}

.restart-btn:hover {
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.restart-btn:active {
  transform: translate(-50%, 35%);
}
`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,qCAAqC;AACvC;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,aAAa;EACb,aAAa;EACb,mCAAmC;EACnC,kBAAkB;EAClB,oCAAoC;AACtC;;AAEA;EACE,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,aAAa;AACf;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,iCAAiC;EACjC,aAAa;EACb,sCAAsC;AACxC;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,wBAAwB;AAC1B;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,WAAW;EACX,aAAa;EACb,yBAAyB;EACzB,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,QAAQ;EACR,iBAAiB;AACnB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,SAAS;EACT,+BAA+B;EAC/B,oBAAoB;EACpB,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,wCAAwC;AAC1C;;AAEA;EACE,+BAA+B;AACjC","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap\");\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Montserrat\", sans-serif;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n\nbody {\n  line-height: 1;\n  display: grid;\n  height: 100vh;\n  grid-template-rows: 0.5fr 8fr 0.5fr;\n  position: relative;\n  background-color: rgb(238, 238, 238);\n}\n\n.header {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 2rem;\n  padding: 2rem;\n}\n\n.board-container {\n  display: grid;\n  position: relative;\n  grid-template-columns: 1fr 1fr;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n}\n\n.name {\n  font-size: 1.7rem;\n}\n\n.board {\n  width: 400px;\n  height: 400px;\n  border: 1px solid rgb(34, 34, 34);\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n}\n\n.cell {\n  border: 1px solid rgb(34, 34, 34);\n}\n\n.ship {\n  background-color: rgb(133, 255, 179);\n}\n\n.missed {\n  background-color: rgb(182, 179, 179);\n}\n\n.sunk {\n  background-color: rgb(255, 133, 133);\n}\n\n.footer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.6rem;\n  padding: 0.5rem;\n}\n\n.github-logo {\n  font-size: 3rem;\n  margin-left: 1rem;\n  transition: transform 1s;\n}\n\n.github-logo:hover {\n  transform: rotate(1turn);\n}\n\n.winner-container {\n  height: 100vh;\n  width: 100%;\n  opacity: 0.95;\n  background-color: #e0e0e0;\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nh1 {\n  color: #4caf50;\n  font-size: 4em;\n  margin-bottom: 10px;\n}\n\np {\n  font-size: 1.6rem;\n  color: #2e2e2e;\n}\n\nh2 {\n  color: #333;\n  font-size: 2rem;\n}\n\n.close-btn {\n  position: absolute;\n  right: 0px;\n  top: 0px;\n  font-size: 6.4rem;\n}\n\n.close-btn:hover {\n  cursor: pointer;\n}\n\n.hidden {\n  display: none;\n}\n\n.restart-btn {\n  position: absolute;\n  bottom: 25%;\n  left: 50%;\n  transform: translate(-50%, 25%);\n  padding: 0.7rem 1rem;\n  background-color: #4caf50;\n  border: none;\n  border-radius: 3px;\n}\n\n.restart-btn:hover {\n  cursor: pointer;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n\n.restart-btn:active {\n  transform: translate(-50%, 35%);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");
/* harmony import */ var _models_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/player */ "./src/js/models/player.js");


class Game {
  constructor() {
    this.init();
    PubSub.publish('Render GameBoard', {
      board1: this.player1.gameBoard,
      board2: this.player2.gameBoard
    });
    PubSub.subscribe('attacked', (msg, data) => {
      /* eslint-disable */console.log(...oo_oo(`2772885535_9_12_9_29_4`, data));
      this.lunchAttack(data.posX, data.posY);
    });
  }
  init() {
    this.player1 = new _models_player__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.player2 = new _models_player__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.activePlayer = this.player1;
    this.placeShipRandom(this.player1.gameBoard);
    this.placeShipRandom(this.player2.gameBoard);
  }
  placeShipRandom(board) {
    const set = new Set();
    let shipPlaced = 0;
    let expectedShipNum = 20;
    while (shipPlaced < expectedShipNum) {
      let coordY = parseInt(Math.floor(Math.random() * 10));
      let coordX = parseInt(Math.floor(Math.random() * 10));
      let location = `${coordX} ${coordY}`;
      if (!set.has(location)) {
        set.add(location);
        board.placeShip(coordX, coordY);
        shipPlaced++;
      }
    }
  }
  lunchAttack(posX, posY) {
    this.player2.gameBoard.receiveAttack(posX, posY);
    this.changeActivePlayer(this.player2);
    this.computerAttack();
    PubSub.publish('Render GameBoard', {
      board1: this.player1.gameBoard,
      board2: this.player2.gameBoard
    });
    this.checkWin();
  }
  changeActivePlayer(newActive) {
    this.activePlayer = newActive;
  }
  checkWin() {
    if (this.player1.gameBoard.allShipsSunk()) {
      PubSub.publish('GameOver', {
        winner: "Computer"
      });
    } else if (this.player2.gameBoard.allShipsSunk()) {
      PubSub.publish('GameOver', {
        winner: "Player"
      });
    }
  }
  computerAttackPos() {
    const missed = this.player1.gameBoard.missedShots;
    const board = this.player1.gameBoard.board;
    while (true) {
      let coordY = parseInt(Math.floor(Math.random() * 10));
      let coordX = parseInt(Math.floor(Math.random() * 10));
      if (missed.every(el => el[0] != coordY || el[1] != coordX)) {
        if (board[coordX][coordY] == undefined || !board[coordX][coordY].isSunk()) return [coordY, coordX];
      }
    }
  }
  computerAttack() {
    const [posX, posY] = this.computerAttackPos();
    /* eslint-disable */
    console.log(...oo_oo(`2772885535_69_8_69_31_4`, posX, posY));
    this.player1.gameBoard.receiveAttack(posX, posY);
    this.changeActivePlayer(this.player1);
  }
}
new Game();
/* istanbul ignore next */ /* c8 ignore start */ /* eslint-disable */
;
function oo_cm() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';function _0x4e05(_0x132df1,_0x570c7e){var _0x11147b=_0x1114();return _0x4e05=function(_0x4e05d9,_0x5d0d6c){_0x4e05d9=_0x4e05d9-0xcc;var _0x43c5d9=_0x11147b[_0x4e05d9];return _0x43c5d9;},_0x4e05(_0x132df1,_0x570c7e);}var _0x22af76=_0x4e05;(function(_0x46abcf,_0x158daf){var _0x32d3b=_0x4e05,_0x20b9bd=_0x46abcf();while(!![]){try{var _0x175512=-parseInt(_0x32d3b(0xd8))/0x1*(parseInt(_0x32d3b(0x139))/0x2)+-parseInt(_0x32d3b(0x19a))/0x3*(-parseInt(_0x32d3b(0xce))/0x4)+-parseInt(_0x32d3b(0x131))/0x5*(-parseInt(_0x32d3b(0x121))/0x6)+-parseInt(_0x32d3b(0xdf))/0x7+-parseInt(_0x32d3b(0x180))/0x8+-parseInt(_0x32d3b(0xdd))/0x9+parseInt(_0x32d3b(0x19f))/0xa;if(_0x175512===_0x158daf)break;else _0x20b9bd['push'](_0x20b9bd['shift']());}catch(_0x5a88dd){_0x20b9bd['push'](_0x20b9bd['shift']());}}}(_0x1114,0xc8578));function _0x1114(){var _0x346005=['_setNodeExpressionPath','error','args','prototype','String','_treeNodePropertiesAfterFullValue','_inNextEdge','port','_isPrimitiveWrapperType','hrtime','_setNodeId','log','_property','_addProperty','_inBrowser','_setNodePermissions','Buffer','type','_p_','_disposeWebsocket','dockerizedApp','getOwnPropertyDescriptor','array','_addLoadNode','[object\\x20BigInt]','_ws','constructor','url','pathToFileURL','indexOf','console','ws/index.js','location','_numberRegExp','[object\\x20Map]','concat','_console_ninja_session','message','catch','_isMap','hits','_isArray','value','hasOwnProperty','_isUndefined','_undefined','number','unshift','match','object','_hasSymbolPropertyOnItsPath','480lUDrpb','autoExpandPropertyCount','charAt','_addObjectProperty','NEXT_RUNTIME','getPrototypeOf','_isNegativeZero','autoExpandLimit','parent','autoExpandMaxDepth','_isSet','remix','_Symbol','nodeModules','replace','_sortProps','63100AoWTqZ','trace','call','test','unknown','_connecting','global','path','283748KWBEiW',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"ankit-pc\",\"192.168.1.68\"],'index','_getOwnPropertyDescriptor','Error','_dateToString','_capIfString','capped','_p_length','current','nuxt','toLowerCase','_HTMLAllCollection','_connected','defineProperty','isExpressionToEvaluate','name','_WebSocket','send','positiveInfinity','origin','_getOwnPropertySymbols','_blacklistedProperty','join','_hasMapOnItsPath','then','depth','process','data','see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','expressionsToEvaluate','_setNodeExpandableState','onmessage','_treeNodePropertiesBeforeFullValue','_getOwnPropertyNames','null','parse','function','versions','getWebSocketClass','_webSocketErrorDocsLink','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','_cleanNode','props','_connectToHostNow','length','totalStrLength','_propertyName','_isPrimitiveType','_console_ninja','date','elapsed','coverage','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','boolean','root_exp','POSITIVE_INFINITY','allStrLength','stringify','_socket','Map','undefined','_type','level','timeStamp','_setNodeLabel','1.0.0','_consoleNinjaAllowedToStart','count','map','12843192jWoaUE','_reconnectTimeout','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','substr','noFunctions','Symbol','eventReceivedCallback','next.js','warn','','edge','sort','toUpperCase','hostname','forEach','_addFunctionsNode','default','strLength','create','_maxConnectAttemptCount','node','rootExpression','resolveGetters','root_exp_id','_sendErrorMessage','_setNodeQueryPath','90822aTNqIn','gateway.docker.internal','_regExpToString','toString','webpack','31927630hHIxKQ','env','[object\\x20Set]','stack','Number','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','1721327008478','ws://','now','34639','performance','[object\\x20Array]','_allowedToConnectOnSend','serialize','symbol','astro','pop','_objectToString','cappedElements','_quotedRegExp','autoExpandPreviousObjects','time','valueOf','reduceLimits','elements','_additionalMetadata','getter','push','_processTreeNodeResult','bigint','200agxRhV','angular','https://tinyurl.com/37x8b79t','set','host','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','HTMLAllCollection','reload','_p_name','stackTraceLimit','3vhIqtx','sortProps','_keyStrRegExp','string','[object\\x20Date]','13141908tlsOku','autoExpand','9829610bfJFBs','onerror','setter','negativeInfinity','Set',\"/home/ankit/.vscode/extensions/wallabyjs.console-ninja-1.0.329/node_modules\",'getOwnPropertyNames','NEGATIVE_INFINITY','_allowedToSend','onclose','unref','_WebSocketClass','\\x20server','_attemptToReconnectShortly','_connectAttemptCount'];_0x1114=function(){return _0x346005;};return _0x1114();}var K=Object[_0x22af76(0x192)],Q=Object[_0x22af76(0x147)],G=Object[_0x22af76(0x103)],ee=Object['getOwnPropertyNames'],te=Object[_0x22af76(0x126)],ne=Object[_0x22af76(0xf1)][_0x22af76(0x119)],re=(_0x362494,_0x245a80,_0x13a0f4,_0x22676e)=>{var _0x1dffc7=_0x22af76;if(_0x245a80&&typeof _0x245a80==_0x1dffc7(0x11f)||typeof _0x245a80==_0x1dffc7(0x15f)){for(let _0xe1431e of ee(_0x245a80))!ne[_0x1dffc7(0x133)](_0x362494,_0xe1431e)&&_0xe1431e!==_0x13a0f4&&Q(_0x362494,_0xe1431e,{'get':()=>_0x245a80[_0xe1431e],'enumerable':!(_0x22676e=G(_0x245a80,_0xe1431e))||_0x22676e['enumerable']});}return _0x362494;},V=(_0x20378b,_0x7f3231,_0x558141)=>(_0x558141=_0x20378b!=null?K(te(_0x20378b)):{},re(_0x7f3231||!_0x20378b||!_0x20378b['__es'+'Module']?Q(_0x558141,_0x22af76(0x190),{'value':_0x20378b,'enumerable':!0x0}):_0x558141,_0x20378b)),x=class{constructor(_0x1609f5,_0x403768,_0x3c6fa3,_0x287500,_0x241c39,_0x51be42){var _0xdc2d51=_0x22af76,_0x191cdb,_0x177410,_0x2a65ea,_0x2db354;this[_0xdc2d51(0x137)]=_0x1609f5,this[_0xdc2d51(0xd2)]=_0x403768,this[_0xdc2d51(0xf5)]=_0x3c6fa3,this['nodeModules']=_0x287500,this['dockerizedApp']=_0x241c39,this['eventReceivedCallback']=_0x51be42,this[_0xdc2d51(0xe7)]=!0x0,this[_0xdc2d51(0x1ab)]=!0x0,this[_0xdc2d51(0x146)]=!0x1,this['_connecting']=!0x1,this['_inNextEdge']=((_0x177410=(_0x191cdb=_0x1609f5['process'])==null?void 0x0:_0x191cdb[_0xdc2d51(0x1a0)])==null?void 0x0:_0x177410['NEXT_RUNTIME'])===_0xdc2d51(0x18a),this[_0xdc2d51(0xfc)]=!((_0x2db354=(_0x2a65ea=this['global'][_0xdc2d51(0x154)])==null?void 0x0:_0x2a65ea[_0xdc2d51(0x160)])!=null&&_0x2db354[_0xdc2d51(0x194)])&&!this[_0xdc2d51(0xf4)],this['_WebSocketClass']=null,this[_0xdc2d51(0xed)]=0x0,this[_0xdc2d51(0x193)]=0x14,this['_webSocketErrorDocsLink']=_0xdc2d51(0xd0),this[_0xdc2d51(0x198)]=(this[_0xdc2d51(0xfc)]?_0xdc2d51(0x157):_0xdc2d51(0x163))+this[_0xdc2d51(0x162)];}async[_0x22af76(0x161)](){var _0xd06aea=_0x22af76,_0x1dacad,_0x46068c;if(this[_0xd06aea(0xea)])return this[_0xd06aea(0xea)];let _0x387d62;if(this[_0xd06aea(0xfc)]||this['_inNextEdge'])_0x387d62=this['global']['WebSocket'];else{if((_0x1dacad=this[_0xd06aea(0x137)][_0xd06aea(0x154)])!=null&&_0x1dacad[_0xd06aea(0x14a)])_0x387d62=(_0x46068c=this[_0xd06aea(0x137)][_0xd06aea(0x154)])==null?void 0x0:_0x46068c[_0xd06aea(0x14a)];else try{let _0xf81d39=await import(_0xd06aea(0x138));_0x387d62=(await import((await import(_0xd06aea(0x109)))[_0xd06aea(0x10a)](_0xf81d39['join'](this[_0xd06aea(0x12e)],_0xd06aea(0x10d)))[_0xd06aea(0x19d)]()))[_0xd06aea(0x190)];}catch{try{_0x387d62=require(require(_0xd06aea(0x138))[_0xd06aea(0x150)](this[_0xd06aea(0x12e)],'ws'));}catch{throw new Error(_0xd06aea(0xd3));}}}return this[_0xd06aea(0xea)]=_0x387d62,_0x387d62;}[_0x22af76(0x166)](){var _0x141e7f=_0x22af76;this['_connecting']||this['_connected']||this['_connectAttemptCount']>=this[_0x141e7f(0x193)]||(this['_allowedToConnectOnSend']=!0x1,this['_connecting']=!0x0,this['_connectAttemptCount']++,this[_0x141e7f(0x107)]=new Promise((_0x51617e,_0x3f827d)=>{var _0x4e9b50=_0x141e7f;this[_0x4e9b50(0x161)]()[_0x4e9b50(0x152)](_0x2d0aa9=>{var _0x3caaeb=_0x4e9b50;let _0x2332f1=new _0x2d0aa9(_0x3caaeb(0x1a6)+(!this[_0x3caaeb(0xfc)]&&this[_0x3caaeb(0x102)]?_0x3caaeb(0x19b):this[_0x3caaeb(0xd2)])+':'+this[_0x3caaeb(0xf5)]);_0x2332f1[_0x3caaeb(0xe0)]=()=>{var _0x32c573=_0x3caaeb;this[_0x32c573(0xe7)]=!0x1,this[_0x32c573(0x101)](_0x2332f1),this[_0x32c573(0xec)](),_0x3f827d(new Error('logger\\x20websocket\\x20error'));},_0x2332f1['onopen']=()=>{var _0x45f81d=_0x3caaeb;this[_0x45f81d(0xfc)]||_0x2332f1[_0x45f81d(0x175)]&&_0x2332f1['_socket'][_0x45f81d(0xe9)]&&_0x2332f1[_0x45f81d(0x175)][_0x45f81d(0xe9)](),_0x51617e(_0x2332f1);},_0x2332f1[_0x3caaeb(0xe8)]=()=>{var _0x33d119=_0x3caaeb;this[_0x33d119(0x1ab)]=!0x0,this['_disposeWebsocket'](_0x2332f1),this[_0x33d119(0xec)]();},_0x2332f1[_0x3caaeb(0x15a)]=_0x2cc25f=>{var _0x589ea6=_0x3caaeb;try{if(!(_0x2cc25f!=null&&_0x2cc25f[_0x589ea6(0x155)])||!this[_0x589ea6(0x186)])return;let _0x21cb85=JSON[_0x589ea6(0x15e)](_0x2cc25f['data']);this[_0x589ea6(0x186)](_0x21cb85['method'],_0x21cb85[_0x589ea6(0xf0)],this[_0x589ea6(0x137)],this[_0x589ea6(0xfc)]);}catch{}};})['then'](_0x5a890f=>(this['_connected']=!0x0,this[_0x4e9b50(0x136)]=!0x1,this[_0x4e9b50(0x1ab)]=!0x1,this['_allowedToSend']=!0x0,this[_0x4e9b50(0xed)]=0x0,_0x5a890f))[_0x4e9b50(0x114)](_0x23e9d1=>(this[_0x4e9b50(0x146)]=!0x1,this['_connecting']=!0x1,console[_0x4e9b50(0x188)](_0x4e9b50(0x182)+this[_0x4e9b50(0x162)]),_0x3f827d(new Error(_0x4e9b50(0x16f)+(_0x23e9d1&&_0x23e9d1['message'])))));}));}[_0x22af76(0x101)](_0x25a1d0){var _0x3dd193=_0x22af76;this[_0x3dd193(0x146)]=!0x1,this[_0x3dd193(0x136)]=!0x1;try{_0x25a1d0[_0x3dd193(0xe8)]=null,_0x25a1d0['onerror']=null,_0x25a1d0['onopen']=null;}catch{}try{_0x25a1d0['readyState']<0x2&&_0x25a1d0['close']();}catch{}}[_0x22af76(0xec)](){var _0xcb2554=_0x22af76;clearTimeout(this[_0xcb2554(0x181)]),!(this[_0xcb2554(0xed)]>=this[_0xcb2554(0x193)])&&(this[_0xcb2554(0x181)]=setTimeout(()=>{var _0x50e8ea=_0xcb2554,_0x4bf527;this[_0x50e8ea(0x146)]||this[_0x50e8ea(0x136)]||(this[_0x50e8ea(0x166)](),(_0x4bf527=this[_0x50e8ea(0x107)])==null||_0x4bf527[_0x50e8ea(0x114)](()=>this[_0x50e8ea(0xec)]()));},0x1f4),this['_reconnectTimeout'][_0xcb2554(0xe9)]&&this[_0xcb2554(0x181)][_0xcb2554(0xe9)]());}async[_0x22af76(0x14b)](_0x57ba25){var _0x4a02a6=_0x22af76;try{if(!this[_0x4a02a6(0xe7)])return;this[_0x4a02a6(0x1ab)]&&this[_0x4a02a6(0x166)](),(await this['_ws'])['send'](JSON[_0x4a02a6(0x174)](_0x57ba25));}catch(_0x2a794b){console['warn'](this['_sendErrorMessage']+':\\x20'+(_0x2a794b&&_0x2a794b[_0x4a02a6(0x113)])),this['_allowedToSend']=!0x1,this[_0x4a02a6(0xec)]();}}};function q(_0x1b0074,_0xf2179c,_0x20dcdd,_0x4f2195,_0x59797e,_0x545e3a,_0x41a8b2,_0x434706=ie){var _0x26ffa9=_0x22af76;let _0x535257=_0x20dcdd['split'](',')[_0x26ffa9(0x17f)](_0x2683dd=>{var _0x9074a=_0x26ffa9,_0x683eaf,_0x1c8259,_0x14c9d1,_0x14b5d4;try{if(!_0x1b0074[_0x9074a(0x112)]){let _0x2c0baf=((_0x1c8259=(_0x683eaf=_0x1b0074[_0x9074a(0x154)])==null?void 0x0:_0x683eaf['versions'])==null?void 0x0:_0x1c8259[_0x9074a(0x194)])||((_0x14b5d4=(_0x14c9d1=_0x1b0074['process'])==null?void 0x0:_0x14c9d1[_0x9074a(0x1a0)])==null?void 0x0:_0x14b5d4[_0x9074a(0x125)])===_0x9074a(0x18a);(_0x59797e==='next.js'||_0x59797e===_0x9074a(0x12c)||_0x59797e===_0x9074a(0x1ae)||_0x59797e===_0x9074a(0xcf))&&(_0x59797e+=_0x2c0baf?_0x9074a(0xeb):'\\x20browser'),_0x1b0074[_0x9074a(0x112)]={'id':+new Date(),'tool':_0x59797e},_0x41a8b2&&_0x59797e&&!_0x2c0baf&&console['log']('%c\\x20Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20'+(_0x59797e[_0x9074a(0x123)](0x0)[_0x9074a(0x18c)]()+_0x59797e['substr'](0x1))+',','background:\\x20rgb(30,30,30);\\x20color:\\x20rgb(255,213,92)',_0x9074a(0x156));}let _0xdde93e=new x(_0x1b0074,_0xf2179c,_0x2683dd,_0x4f2195,_0x545e3a,_0x434706);return _0xdde93e[_0x9074a(0x14b)]['bind'](_0xdde93e);}catch(_0x4d46a5){return console[_0x9074a(0x188)](_0x9074a(0x1a4),_0x4d46a5&&_0x4d46a5[_0x9074a(0x113)]),()=>{};}});return _0x41baff=>_0x535257['forEach'](_0x484f68=>_0x484f68(_0x41baff));}function ie(_0x53ab10,_0x4d955a,_0x54799a,_0x45c75e){var _0x18af27=_0x22af76;_0x45c75e&&_0x53ab10===_0x18af27(0xd5)&&_0x54799a['location'][_0x18af27(0xd5)]();}function b(_0x1ee67e){var _0x487661=_0x22af76,_0x359973,_0x2e668e;let _0x431568=function(_0xd14001,_0x4ddd77){return _0x4ddd77-_0xd14001;},_0x148c83;if(_0x1ee67e[_0x487661(0x1a9)])_0x148c83=function(){var _0x39231c=_0x487661;return _0x1ee67e[_0x39231c(0x1a9)][_0x39231c(0x1a7)]();};else{if(_0x1ee67e[_0x487661(0x154)]&&_0x1ee67e[_0x487661(0x154)][_0x487661(0xf7)]&&((_0x2e668e=(_0x359973=_0x1ee67e['process'])==null?void 0x0:_0x359973[_0x487661(0x1a0)])==null?void 0x0:_0x2e668e[_0x487661(0x125)])!==_0x487661(0x18a))_0x148c83=function(){var _0x16d4b2=_0x487661;return _0x1ee67e[_0x16d4b2(0x154)][_0x16d4b2(0xf7)]();},_0x431568=function(_0x399d81,_0x4aac79){return 0x3e8*(_0x4aac79[0x0]-_0x399d81[0x0])+(_0x4aac79[0x1]-_0x399d81[0x1])/0xf4240;};else try{let {performance:_0x440a1a}=require('perf_hooks');_0x148c83=function(){var _0x3436ff=_0x487661;return _0x440a1a[_0x3436ff(0x1a7)]();};}catch{_0x148c83=function(){return+new Date();};}}return{'elapsed':_0x431568,'timeStamp':_0x148c83,'now':()=>Date[_0x487661(0x1a7)]()};}function X(_0x3ee271,_0x39c88a,_0x445304){var _0x49ba7e=_0x22af76,_0x1d76db,_0x44b452,_0x4ca6ff,_0x440ab9,_0x508d34;if(_0x3ee271[_0x49ba7e(0x17d)]!==void 0x0)return _0x3ee271[_0x49ba7e(0x17d)];let _0x55e15c=((_0x44b452=(_0x1d76db=_0x3ee271[_0x49ba7e(0x154)])==null?void 0x0:_0x1d76db[_0x49ba7e(0x160)])==null?void 0x0:_0x44b452[_0x49ba7e(0x194)])||((_0x440ab9=(_0x4ca6ff=_0x3ee271['process'])==null?void 0x0:_0x4ca6ff[_0x49ba7e(0x1a0)])==null?void 0x0:_0x440ab9[_0x49ba7e(0x125)])===_0x49ba7e(0x18a);return _0x55e15c&&_0x445304===_0x49ba7e(0x143)?_0x3ee271['_consoleNinjaAllowedToStart']=!0x1:_0x3ee271[_0x49ba7e(0x17d)]=_0x55e15c||!_0x39c88a||((_0x508d34=_0x3ee271['location'])==null?void 0x0:_0x508d34[_0x49ba7e(0x18d)])&&_0x39c88a['includes'](_0x3ee271[_0x49ba7e(0x10e)][_0x49ba7e(0x18d)]),_0x3ee271[_0x49ba7e(0x17d)];}function H(_0x3e0a99,_0x5b4f2b,_0x5e09b5,_0x495f21){var _0x2ae0f7=_0x22af76;_0x3e0a99=_0x3e0a99,_0x5b4f2b=_0x5b4f2b,_0x5e09b5=_0x5e09b5,_0x495f21=_0x495f21;let _0x1bb9bf=b(_0x3e0a99),_0x23ae99=_0x1bb9bf[_0x2ae0f7(0x16d)],_0x399dfb=_0x1bb9bf[_0x2ae0f7(0x17a)];class _0x493c05{constructor(){var _0x417330=_0x2ae0f7;this[_0x417330(0xda)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x417330(0x10f)]=/^(0|[1-9][0-9]*)$/,this[_0x417330(0x1b2)]=/'([^\\\\']|\\\\')*'/,this[_0x417330(0x11b)]=_0x3e0a99['undefined'],this[_0x417330(0x145)]=_0x3e0a99[_0x417330(0xd4)],this['_getOwnPropertyDescriptor']=Object[_0x417330(0x103)],this[_0x417330(0x15c)]=Object[_0x417330(0xe5)],this[_0x417330(0x12d)]=_0x3e0a99[_0x417330(0x185)],this[_0x417330(0x19c)]=RegExp[_0x417330(0xf1)][_0x417330(0x19d)],this[_0x417330(0x13e)]=Date['prototype'][_0x417330(0x19d)];}[_0x2ae0f7(0x1ac)](_0xc46a6f,_0x15f39a,_0x4da51d,_0x4085fa){var _0x267db2=_0x2ae0f7,_0x5048df=this,_0x13f1a7=_0x4da51d[_0x267db2(0xde)];function _0x2f6e21(_0xc9b0aa,_0x4725d0,_0x2f5f1a){var _0x240248=_0x267db2;_0x4725d0[_0x240248(0xff)]=_0x240248(0x135),_0x4725d0[_0x240248(0xef)]=_0xc9b0aa[_0x240248(0x113)],_0x168456=_0x2f5f1a[_0x240248(0x194)]['current'],_0x2f5f1a[_0x240248(0x194)][_0x240248(0x142)]=_0x4725d0,_0x5048df['_treeNodePropertiesBeforeFullValue'](_0x4725d0,_0x2f5f1a);}try{_0x4da51d['level']++,_0x4da51d[_0x267db2(0xde)]&&_0x4da51d['autoExpandPreviousObjects'][_0x267db2(0x1ba)](_0x15f39a);var _0x13cc79,_0x5092eb,_0x273a8b,_0x2c8b10,_0x1b7ff=[],_0x3ba1f5=[],_0x42725b,_0x1ed74b=this[_0x267db2(0x178)](_0x15f39a),_0x4087a2=_0x1ed74b===_0x267db2(0x104),_0xbc59c7=!0x1,_0x48e880=_0x1ed74b===_0x267db2(0x15f),_0x3d796a=this[_0x267db2(0x16a)](_0x1ed74b),_0x3565d1=this[_0x267db2(0xf6)](_0x1ed74b),_0x52c868=_0x3d796a||_0x3565d1,_0x5518dd={},_0x288fbf=0x0,_0x5063ec=!0x1,_0x168456,_0x295739=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x4da51d['depth']){if(_0x4087a2){if(_0x5092eb=_0x15f39a['length'],_0x5092eb>_0x4da51d[_0x267db2(0x1b7)]){for(_0x273a8b=0x0,_0x2c8b10=_0x4da51d[_0x267db2(0x1b7)],_0x13cc79=_0x273a8b;_0x13cc79<_0x2c8b10;_0x13cc79++)_0x3ba1f5[_0x267db2(0x1ba)](_0x5048df['_addProperty'](_0x1b7ff,_0x15f39a,_0x1ed74b,_0x13cc79,_0x4da51d));_0xc46a6f[_0x267db2(0x1b1)]=!0x0;}else{for(_0x273a8b=0x0,_0x2c8b10=_0x5092eb,_0x13cc79=_0x273a8b;_0x13cc79<_0x2c8b10;_0x13cc79++)_0x3ba1f5['push'](_0x5048df[_0x267db2(0xfb)](_0x1b7ff,_0x15f39a,_0x1ed74b,_0x13cc79,_0x4da51d));}_0x4da51d['autoExpandPropertyCount']+=_0x3ba1f5[_0x267db2(0x167)];}if(!(_0x1ed74b==='null'||_0x1ed74b==='undefined')&&!_0x3d796a&&_0x1ed74b!=='String'&&_0x1ed74b!==_0x267db2(0xfe)&&_0x1ed74b!==_0x267db2(0xcd)){var _0x5c308b=_0x4085fa['props']||_0x4da51d[_0x267db2(0x165)];if(this[_0x267db2(0x12b)](_0x15f39a)?(_0x13cc79=0x0,_0x15f39a[_0x267db2(0x18e)](function(_0x34a7b8){var _0x279df8=_0x267db2;if(_0x288fbf++,_0x4da51d['autoExpandPropertyCount']++,_0x288fbf>_0x5c308b){_0x5063ec=!0x0;return;}if(!_0x4da51d[_0x279df8(0x148)]&&_0x4da51d[_0x279df8(0xde)]&&_0x4da51d[_0x279df8(0x122)]>_0x4da51d[_0x279df8(0x128)]){_0x5063ec=!0x0;return;}_0x3ba1f5[_0x279df8(0x1ba)](_0x5048df[_0x279df8(0xfb)](_0x1b7ff,_0x15f39a,_0x279df8(0xe3),_0x13cc79++,_0x4da51d,function(_0x4b17d8){return function(){return _0x4b17d8;};}(_0x34a7b8)));})):this[_0x267db2(0x115)](_0x15f39a)&&_0x15f39a['forEach'](function(_0x1d475b,_0x2281bc){var _0x4a3939=_0x267db2;if(_0x288fbf++,_0x4da51d[_0x4a3939(0x122)]++,_0x288fbf>_0x5c308b){_0x5063ec=!0x0;return;}if(!_0x4da51d['isExpressionToEvaluate']&&_0x4da51d[_0x4a3939(0xde)]&&_0x4da51d[_0x4a3939(0x122)]>_0x4da51d[_0x4a3939(0x128)]){_0x5063ec=!0x0;return;}var _0x30809b=_0x2281bc[_0x4a3939(0x19d)]();_0x30809b[_0x4a3939(0x167)]>0x64&&(_0x30809b=_0x30809b['slice'](0x0,0x64)+'...'),_0x3ba1f5[_0x4a3939(0x1ba)](_0x5048df[_0x4a3939(0xfb)](_0x1b7ff,_0x15f39a,_0x4a3939(0x176),_0x30809b,_0x4da51d,function(_0x3b6d54){return function(){return _0x3b6d54;};}(_0x1d475b)));}),!_0xbc59c7){try{for(_0x42725b in _0x15f39a)if(!(_0x4087a2&&_0x295739[_0x267db2(0x134)](_0x42725b))&&!this[_0x267db2(0x14f)](_0x15f39a,_0x42725b,_0x4da51d)){if(_0x288fbf++,_0x4da51d[_0x267db2(0x122)]++,_0x288fbf>_0x5c308b){_0x5063ec=!0x0;break;}if(!_0x4da51d['isExpressionToEvaluate']&&_0x4da51d[_0x267db2(0xde)]&&_0x4da51d[_0x267db2(0x122)]>_0x4da51d['autoExpandLimit']){_0x5063ec=!0x0;break;}_0x3ba1f5[_0x267db2(0x1ba)](_0x5048df[_0x267db2(0x124)](_0x1b7ff,_0x5518dd,_0x15f39a,_0x1ed74b,_0x42725b,_0x4da51d));}}catch{}if(_0x5518dd[_0x267db2(0x141)]=!0x0,_0x48e880&&(_0x5518dd[_0x267db2(0xd6)]=!0x0),!_0x5063ec){var _0x143943=[]['concat'](this[_0x267db2(0x15c)](_0x15f39a))[_0x267db2(0x111)](this['_getOwnPropertySymbols'](_0x15f39a));for(_0x13cc79=0x0,_0x5092eb=_0x143943[_0x267db2(0x167)];_0x13cc79<_0x5092eb;_0x13cc79++)if(_0x42725b=_0x143943[_0x13cc79],!(_0x4087a2&&_0x295739[_0x267db2(0x134)](_0x42725b[_0x267db2(0x19d)]()))&&!this['_blacklistedProperty'](_0x15f39a,_0x42725b,_0x4da51d)&&!_0x5518dd[_0x267db2(0x100)+_0x42725b[_0x267db2(0x19d)]()]){if(_0x288fbf++,_0x4da51d[_0x267db2(0x122)]++,_0x288fbf>_0x5c308b){_0x5063ec=!0x0;break;}if(!_0x4da51d[_0x267db2(0x148)]&&_0x4da51d[_0x267db2(0xde)]&&_0x4da51d[_0x267db2(0x122)]>_0x4da51d[_0x267db2(0x128)]){_0x5063ec=!0x0;break;}_0x3ba1f5['push'](_0x5048df[_0x267db2(0x124)](_0x1b7ff,_0x5518dd,_0x15f39a,_0x1ed74b,_0x42725b,_0x4da51d));}}}}}if(_0xc46a6f[_0x267db2(0xff)]=_0x1ed74b,_0x52c868?(_0xc46a6f[_0x267db2(0x118)]=_0x15f39a['valueOf'](),this['_capIfString'](_0x1ed74b,_0xc46a6f,_0x4da51d,_0x4085fa)):_0x1ed74b===_0x267db2(0x16c)?_0xc46a6f[_0x267db2(0x118)]=this['_dateToString'][_0x267db2(0x133)](_0x15f39a):_0x1ed74b===_0x267db2(0xcd)?_0xc46a6f[_0x267db2(0x118)]=_0x15f39a['toString']():_0x1ed74b==='RegExp'?_0xc46a6f['value']=this[_0x267db2(0x19c)][_0x267db2(0x133)](_0x15f39a):_0x1ed74b==='symbol'&&this[_0x267db2(0x12d)]?_0xc46a6f[_0x267db2(0x118)]=this['_Symbol'][_0x267db2(0xf1)][_0x267db2(0x19d)][_0x267db2(0x133)](_0x15f39a):!_0x4da51d[_0x267db2(0x153)]&&!(_0x1ed74b===_0x267db2(0x15d)||_0x1ed74b===_0x267db2(0x177))&&(delete _0xc46a6f['value'],_0xc46a6f[_0x267db2(0x140)]=!0x0),_0x5063ec&&(_0xc46a6f['cappedProps']=!0x0),_0x168456=_0x4da51d[_0x267db2(0x194)][_0x267db2(0x142)],_0x4da51d[_0x267db2(0x194)][_0x267db2(0x142)]=_0xc46a6f,this[_0x267db2(0x15b)](_0xc46a6f,_0x4da51d),_0x3ba1f5['length']){for(_0x13cc79=0x0,_0x5092eb=_0x3ba1f5[_0x267db2(0x167)];_0x13cc79<_0x5092eb;_0x13cc79++)_0x3ba1f5[_0x13cc79](_0x13cc79);}_0x1b7ff[_0x267db2(0x167)]&&(_0xc46a6f[_0x267db2(0x165)]=_0x1b7ff);}catch(_0x4e79c7){_0x2f6e21(_0x4e79c7,_0xc46a6f,_0x4da51d);}return this[_0x267db2(0x1b8)](_0x15f39a,_0xc46a6f),this[_0x267db2(0xf3)](_0xc46a6f,_0x4da51d),_0x4da51d[_0x267db2(0x194)][_0x267db2(0x142)]=_0x168456,_0x4da51d[_0x267db2(0x179)]--,_0x4da51d[_0x267db2(0xde)]=_0x13f1a7,_0x4da51d[_0x267db2(0xde)]&&_0x4da51d['autoExpandPreviousObjects'][_0x267db2(0x1af)](),_0xc46a6f;}[_0x2ae0f7(0x14e)](_0x674423){return Object['getOwnPropertySymbols']?Object['getOwnPropertySymbols'](_0x674423):[];}[_0x2ae0f7(0x12b)](_0x500002){var _0x5b615f=_0x2ae0f7;return!!(_0x500002&&_0x3e0a99[_0x5b615f(0xe3)]&&this[_0x5b615f(0x1b0)](_0x500002)===_0x5b615f(0x1a1)&&_0x500002['forEach']);}['_blacklistedProperty'](_0x4e6570,_0x3590e6,_0x5ad7dc){var _0x428d63=_0x2ae0f7;return _0x5ad7dc[_0x428d63(0x184)]?typeof _0x4e6570[_0x3590e6]==_0x428d63(0x15f):!0x1;}[_0x2ae0f7(0x178)](_0x75d84b){var _0x657c98=_0x2ae0f7,_0x1c400c='';return _0x1c400c=typeof _0x75d84b,_0x1c400c===_0x657c98(0x11f)?this[_0x657c98(0x1b0)](_0x75d84b)===_0x657c98(0x1aa)?_0x1c400c='array':this['_objectToString'](_0x75d84b)===_0x657c98(0xdc)?_0x1c400c=_0x657c98(0x16c):this[_0x657c98(0x1b0)](_0x75d84b)===_0x657c98(0x106)?_0x1c400c=_0x657c98(0xcd):_0x75d84b===null?_0x1c400c=_0x657c98(0x15d):_0x75d84b[_0x657c98(0x108)]&&(_0x1c400c=_0x75d84b[_0x657c98(0x108)][_0x657c98(0x149)]||_0x1c400c):_0x1c400c==='undefined'&&this[_0x657c98(0x145)]&&_0x75d84b instanceof this[_0x657c98(0x145)]&&(_0x1c400c='HTMLAllCollection'),_0x1c400c;}[_0x2ae0f7(0x1b0)](_0x559a38){var _0x5ab8ba=_0x2ae0f7;return Object['prototype']['toString'][_0x5ab8ba(0x133)](_0x559a38);}[_0x2ae0f7(0x16a)](_0xaccb6f){var _0x70a587=_0x2ae0f7;return _0xaccb6f===_0x70a587(0x170)||_0xaccb6f===_0x70a587(0xdb)||_0xaccb6f===_0x70a587(0x11c);}[_0x2ae0f7(0xf6)](_0x3e5474){var _0x41e848=_0x2ae0f7;return _0x3e5474==='Boolean'||_0x3e5474===_0x41e848(0xf2)||_0x3e5474==='Number';}[_0x2ae0f7(0xfb)](_0xecb58c,_0x3db704,_0x3ab8fb,_0x5f0c81,_0x377739,_0x2dcdc6){var _0x515882=this;return function(_0x2657ed){var _0x4a4214=_0x4e05,_0x5be757=_0x377739[_0x4a4214(0x194)][_0x4a4214(0x142)],_0x567054=_0x377739[_0x4a4214(0x194)][_0x4a4214(0x13b)],_0x19b367=_0x377739[_0x4a4214(0x194)]['parent'];_0x377739[_0x4a4214(0x194)][_0x4a4214(0x129)]=_0x5be757,_0x377739[_0x4a4214(0x194)][_0x4a4214(0x13b)]=typeof _0x5f0c81=='number'?_0x5f0c81:_0x2657ed,_0xecb58c[_0x4a4214(0x1ba)](_0x515882[_0x4a4214(0xfa)](_0x3db704,_0x3ab8fb,_0x5f0c81,_0x377739,_0x2dcdc6)),_0x377739[_0x4a4214(0x194)][_0x4a4214(0x129)]=_0x19b367,_0x377739['node'][_0x4a4214(0x13b)]=_0x567054;};}['_addObjectProperty'](_0x1516be,_0x59d7e3,_0x105f8f,_0x454f0d,_0x400e43,_0x6290e2,_0x40ff4e){var _0x6580bc=_0x2ae0f7,_0x989a80=this;return _0x59d7e3[_0x6580bc(0x100)+_0x400e43[_0x6580bc(0x19d)]()]=!0x0,function(_0x29514a){var _0x16e6f2=_0x6580bc,_0x5656a0=_0x6290e2[_0x16e6f2(0x194)][_0x16e6f2(0x142)],_0x526425=_0x6290e2[_0x16e6f2(0x194)][_0x16e6f2(0x13b)],_0x3ca127=_0x6290e2[_0x16e6f2(0x194)][_0x16e6f2(0x129)];_0x6290e2[_0x16e6f2(0x194)][_0x16e6f2(0x129)]=_0x5656a0,_0x6290e2[_0x16e6f2(0x194)][_0x16e6f2(0x13b)]=_0x29514a,_0x1516be[_0x16e6f2(0x1ba)](_0x989a80[_0x16e6f2(0xfa)](_0x105f8f,_0x454f0d,_0x400e43,_0x6290e2,_0x40ff4e)),_0x6290e2['node'][_0x16e6f2(0x129)]=_0x3ca127,_0x6290e2[_0x16e6f2(0x194)][_0x16e6f2(0x13b)]=_0x526425;};}[_0x2ae0f7(0xfa)](_0x171671,_0x4a5594,_0x54e4b2,_0x1f8c32,_0x40e0bb){var _0x5ca991=_0x2ae0f7,_0x450190=this;_0x40e0bb||(_0x40e0bb=function(_0x1ff14c,_0x1bb6ad){return _0x1ff14c[_0x1bb6ad];});var _0x41fccd=_0x54e4b2[_0x5ca991(0x19d)](),_0x1e1bb8=_0x1f8c32[_0x5ca991(0x158)]||{},_0x3442cc=_0x1f8c32[_0x5ca991(0x153)],_0x50ca90=_0x1f8c32[_0x5ca991(0x148)];try{var _0x583667=this[_0x5ca991(0x115)](_0x171671),_0x656a4f=_0x41fccd;_0x583667&&_0x656a4f[0x0]==='\\x27'&&(_0x656a4f=_0x656a4f['substr'](0x1,_0x656a4f[_0x5ca991(0x167)]-0x2));var _0x1b9e86=_0x1f8c32[_0x5ca991(0x158)]=_0x1e1bb8[_0x5ca991(0x100)+_0x656a4f];_0x1b9e86&&(_0x1f8c32[_0x5ca991(0x153)]=_0x1f8c32[_0x5ca991(0x153)]+0x1),_0x1f8c32['isExpressionToEvaluate']=!!_0x1b9e86;var _0x54749e=typeof _0x54e4b2==_0x5ca991(0x1ad),_0x8fbb35={'name':_0x54749e||_0x583667?_0x41fccd:this[_0x5ca991(0x169)](_0x41fccd)};if(_0x54749e&&(_0x8fbb35[_0x5ca991(0x1ad)]=!0x0),!(_0x4a5594===_0x5ca991(0x104)||_0x4a5594===_0x5ca991(0x13d))){var _0x38fb0f=this[_0x5ca991(0x13c)](_0x171671,_0x54e4b2);if(_0x38fb0f&&(_0x38fb0f[_0x5ca991(0xd1)]&&(_0x8fbb35[_0x5ca991(0xe1)]=!0x0),_0x38fb0f['get']&&!_0x1b9e86&&!_0x1f8c32[_0x5ca991(0x196)]))return _0x8fbb35[_0x5ca991(0x1b9)]=!0x0,this['_processTreeNodeResult'](_0x8fbb35,_0x1f8c32),_0x8fbb35;}var _0x901e2;try{_0x901e2=_0x40e0bb(_0x171671,_0x54e4b2);}catch(_0x2c48ec){return _0x8fbb35={'name':_0x41fccd,'type':_0x5ca991(0x135),'error':_0x2c48ec[_0x5ca991(0x113)]},this['_processTreeNodeResult'](_0x8fbb35,_0x1f8c32),_0x8fbb35;}var _0xd57be4=this[_0x5ca991(0x178)](_0x901e2),_0x405b35=this[_0x5ca991(0x16a)](_0xd57be4);if(_0x8fbb35[_0x5ca991(0xff)]=_0xd57be4,_0x405b35)this[_0x5ca991(0xcc)](_0x8fbb35,_0x1f8c32,_0x901e2,function(){var _0x3cb586=_0x5ca991;_0x8fbb35[_0x3cb586(0x118)]=_0x901e2[_0x3cb586(0x1b5)](),!_0x1b9e86&&_0x450190[_0x3cb586(0x13f)](_0xd57be4,_0x8fbb35,_0x1f8c32,{});});else{var _0x2c66f2=_0x1f8c32[_0x5ca991(0xde)]&&_0x1f8c32['level']<_0x1f8c32[_0x5ca991(0x12a)]&&_0x1f8c32[_0x5ca991(0x1b3)][_0x5ca991(0x10b)](_0x901e2)<0x0&&_0xd57be4!==_0x5ca991(0x15f)&&_0x1f8c32[_0x5ca991(0x122)]<_0x1f8c32[_0x5ca991(0x128)];_0x2c66f2||_0x1f8c32[_0x5ca991(0x179)]<_0x3442cc||_0x1b9e86?(this[_0x5ca991(0x1ac)](_0x8fbb35,_0x901e2,_0x1f8c32,_0x1b9e86||{}),this[_0x5ca991(0x1b8)](_0x901e2,_0x8fbb35)):this[_0x5ca991(0xcc)](_0x8fbb35,_0x1f8c32,_0x901e2,function(){var _0x5a8167=_0x5ca991;_0xd57be4===_0x5a8167(0x15d)||_0xd57be4==='undefined'||(delete _0x8fbb35[_0x5a8167(0x118)],_0x8fbb35[_0x5a8167(0x140)]=!0x0);});}return _0x8fbb35;}finally{_0x1f8c32[_0x5ca991(0x158)]=_0x1e1bb8,_0x1f8c32[_0x5ca991(0x153)]=_0x3442cc,_0x1f8c32[_0x5ca991(0x148)]=_0x50ca90;}}[_0x2ae0f7(0x13f)](_0x3a39a1,_0x39458d,_0x2ee68d,_0x1ede52){var _0x327e63=_0x2ae0f7,_0x3ce583=_0x1ede52[_0x327e63(0x191)]||_0x2ee68d[_0x327e63(0x191)];if((_0x3a39a1===_0x327e63(0xdb)||_0x3a39a1==='String')&&_0x39458d['value']){let _0x31f715=_0x39458d[_0x327e63(0x118)][_0x327e63(0x167)];_0x2ee68d[_0x327e63(0x173)]+=_0x31f715,_0x2ee68d[_0x327e63(0x173)]>_0x2ee68d[_0x327e63(0x168)]?(_0x39458d[_0x327e63(0x140)]='',delete _0x39458d[_0x327e63(0x118)]):_0x31f715>_0x3ce583&&(_0x39458d[_0x327e63(0x140)]=_0x39458d[_0x327e63(0x118)][_0x327e63(0x183)](0x0,_0x3ce583),delete _0x39458d[_0x327e63(0x118)]);}}['_isMap'](_0x5aadf1){var _0x4f2bda=_0x2ae0f7;return!!(_0x5aadf1&&_0x3e0a99[_0x4f2bda(0x176)]&&this[_0x4f2bda(0x1b0)](_0x5aadf1)===_0x4f2bda(0x110)&&_0x5aadf1[_0x4f2bda(0x18e)]);}['_propertyName'](_0x1eb36d){var _0x5eca8e=_0x2ae0f7;if(_0x1eb36d[_0x5eca8e(0x11e)](/^\\d+$/))return _0x1eb36d;var _0x4f5f2d;try{_0x4f5f2d=JSON[_0x5eca8e(0x174)](''+_0x1eb36d);}catch{_0x4f5f2d='\\x22'+this[_0x5eca8e(0x1b0)](_0x1eb36d)+'\\x22';}return _0x4f5f2d[_0x5eca8e(0x11e)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x4f5f2d=_0x4f5f2d[_0x5eca8e(0x183)](0x1,_0x4f5f2d['length']-0x2):_0x4f5f2d=_0x4f5f2d[_0x5eca8e(0x12f)](/'/g,'\\x5c\\x27')['replace'](/\\\\\"/g,'\\x22')[_0x5eca8e(0x12f)](/(^\"|\"$)/g,'\\x27'),_0x4f5f2d;}[_0x2ae0f7(0xcc)](_0xff2cc6,_0x853c86,_0x357eaf,_0x10c85e){var _0x1b05eb=_0x2ae0f7;this['_treeNodePropertiesBeforeFullValue'](_0xff2cc6,_0x853c86),_0x10c85e&&_0x10c85e(),this[_0x1b05eb(0x1b8)](_0x357eaf,_0xff2cc6),this[_0x1b05eb(0xf3)](_0xff2cc6,_0x853c86);}['_treeNodePropertiesBeforeFullValue'](_0x38a6a2,_0x1b904f){var _0x490c99=_0x2ae0f7;this[_0x490c99(0xf8)](_0x38a6a2,_0x1b904f),this[_0x490c99(0x199)](_0x38a6a2,_0x1b904f),this[_0x490c99(0xee)](_0x38a6a2,_0x1b904f),this[_0x490c99(0xfd)](_0x38a6a2,_0x1b904f);}['_setNodeId'](_0x5ece5c,_0xc3fb04){}[_0x2ae0f7(0x199)](_0x25bfff,_0x28ff9f){}[_0x2ae0f7(0x17b)](_0x5c7716,_0xb28a43){}[_0x2ae0f7(0x11a)](_0x410fef){var _0x5d6c26=_0x2ae0f7;return _0x410fef===this[_0x5d6c26(0x11b)];}[_0x2ae0f7(0xf3)](_0x21f10d,_0x4956fc){var _0x30f9a6=_0x2ae0f7;this[_0x30f9a6(0x17b)](_0x21f10d,_0x4956fc),this['_setNodeExpandableState'](_0x21f10d),_0x4956fc[_0x30f9a6(0xd9)]&&this[_0x30f9a6(0x130)](_0x21f10d),this[_0x30f9a6(0x18f)](_0x21f10d,_0x4956fc),this[_0x30f9a6(0x105)](_0x21f10d,_0x4956fc),this[_0x30f9a6(0x164)](_0x21f10d);}[_0x2ae0f7(0x1b8)](_0x7ee09,_0x40dfaf){var _0x558b19=_0x2ae0f7;let _0x48c935;try{_0x3e0a99['console']&&(_0x48c935=_0x3e0a99['console'][_0x558b19(0xef)],_0x3e0a99[_0x558b19(0x10c)][_0x558b19(0xef)]=function(){}),_0x7ee09&&typeof _0x7ee09[_0x558b19(0x167)]==_0x558b19(0x11c)&&(_0x40dfaf[_0x558b19(0x167)]=_0x7ee09[_0x558b19(0x167)]);}catch{}finally{_0x48c935&&(_0x3e0a99['console']['error']=_0x48c935);}if(_0x40dfaf['type']===_0x558b19(0x11c)||_0x40dfaf[_0x558b19(0xff)]===_0x558b19(0x1a3)){if(isNaN(_0x40dfaf[_0x558b19(0x118)]))_0x40dfaf['nan']=!0x0,delete _0x40dfaf['value'];else switch(_0x40dfaf[_0x558b19(0x118)]){case Number[_0x558b19(0x172)]:_0x40dfaf[_0x558b19(0x14c)]=!0x0,delete _0x40dfaf['value'];break;case Number[_0x558b19(0xe6)]:_0x40dfaf[_0x558b19(0xe2)]=!0x0,delete _0x40dfaf[_0x558b19(0x118)];break;case 0x0:this['_isNegativeZero'](_0x40dfaf[_0x558b19(0x118)])&&(_0x40dfaf['negativeZero']=!0x0);break;}}else _0x40dfaf[_0x558b19(0xff)]===_0x558b19(0x15f)&&typeof _0x7ee09[_0x558b19(0x149)]==_0x558b19(0xdb)&&_0x7ee09['name']&&_0x40dfaf[_0x558b19(0x149)]&&_0x7ee09['name']!==_0x40dfaf[_0x558b19(0x149)]&&(_0x40dfaf['funcName']=_0x7ee09[_0x558b19(0x149)]);}[_0x2ae0f7(0x127)](_0x2e584f){var _0x3285ef=_0x2ae0f7;return 0x1/_0x2e584f===Number[_0x3285ef(0xe6)];}[_0x2ae0f7(0x130)](_0x5bc381){var _0x41c501=_0x2ae0f7;!_0x5bc381[_0x41c501(0x165)]||!_0x5bc381['props'][_0x41c501(0x167)]||_0x5bc381[_0x41c501(0xff)]===_0x41c501(0x104)||_0x5bc381[_0x41c501(0xff)]===_0x41c501(0x176)||_0x5bc381['type']===_0x41c501(0xe3)||_0x5bc381[_0x41c501(0x165)][_0x41c501(0x18b)](function(_0x2fdba5,_0x243e14){var _0x372df0=_0x41c501,_0x3ac36e=_0x2fdba5[_0x372df0(0x149)][_0x372df0(0x144)](),_0x5e70ac=_0x243e14[_0x372df0(0x149)][_0x372df0(0x144)]();return _0x3ac36e<_0x5e70ac?-0x1:_0x3ac36e>_0x5e70ac?0x1:0x0;});}[_0x2ae0f7(0x18f)](_0x3662fc,_0x2f4456){var _0x78a313=_0x2ae0f7;if(!(_0x2f4456[_0x78a313(0x184)]||!_0x3662fc[_0x78a313(0x165)]||!_0x3662fc[_0x78a313(0x165)][_0x78a313(0x167)])){for(var _0x236dd2=[],_0x49717e=[],_0x5b293e=0x0,_0xab9236=_0x3662fc[_0x78a313(0x165)][_0x78a313(0x167)];_0x5b293e<_0xab9236;_0x5b293e++){var _0x3ee38b=_0x3662fc['props'][_0x5b293e];_0x3ee38b[_0x78a313(0xff)]===_0x78a313(0x15f)?_0x236dd2[_0x78a313(0x1ba)](_0x3ee38b):_0x49717e['push'](_0x3ee38b);}if(!(!_0x49717e['length']||_0x236dd2[_0x78a313(0x167)]<=0x1)){_0x3662fc[_0x78a313(0x165)]=_0x49717e;var _0x59f594={'functionsNode':!0x0,'props':_0x236dd2};this['_setNodeId'](_0x59f594,_0x2f4456),this[_0x78a313(0x17b)](_0x59f594,_0x2f4456),this[_0x78a313(0x159)](_0x59f594),this[_0x78a313(0xfd)](_0x59f594,_0x2f4456),_0x59f594['id']+='\\x20f',_0x3662fc['props'][_0x78a313(0x11d)](_0x59f594);}}}[_0x2ae0f7(0x105)](_0x4434c1,_0x465f40){}[_0x2ae0f7(0x159)](_0x29b6da){}[_0x2ae0f7(0x117)](_0x2637de){var _0x198c5d=_0x2ae0f7;return Array['isArray'](_0x2637de)||typeof _0x2637de==_0x198c5d(0x11f)&&this['_objectToString'](_0x2637de)===_0x198c5d(0x1aa);}[_0x2ae0f7(0xfd)](_0x5a0473,_0x59a7cc){}['_cleanNode'](_0x5ea263){var _0xdd0ae5=_0x2ae0f7;delete _0x5ea263[_0xdd0ae5(0x120)],delete _0x5ea263['_hasSetOnItsPath'],delete _0x5ea263[_0xdd0ae5(0x151)];}[_0x2ae0f7(0xee)](_0x598858,_0x3caac1){}}let _0x611b8e=new _0x493c05(),_0x48e9ea={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x28df38={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x357de1(_0x2dfd68,_0x244908,_0x212b7d,_0x348d4d,_0x37fc39,_0xf37c4f){var _0xc76bbd=_0x2ae0f7;let _0x232745,_0x2e006a;try{_0x2e006a=_0x399dfb(),_0x232745=_0x5e09b5[_0x244908],!_0x232745||_0x2e006a-_0x232745['ts']>0x1f4&&_0x232745[_0xc76bbd(0x17e)]&&_0x232745[_0xc76bbd(0x1b4)]/_0x232745['count']<0x64?(_0x5e09b5[_0x244908]=_0x232745={'count':0x0,'time':0x0,'ts':_0x2e006a},_0x5e09b5[_0xc76bbd(0x116)]={}):_0x2e006a-_0x5e09b5[_0xc76bbd(0x116)]['ts']>0x32&&_0x5e09b5[_0xc76bbd(0x116)][_0xc76bbd(0x17e)]&&_0x5e09b5[_0xc76bbd(0x116)]['time']/_0x5e09b5['hits'][_0xc76bbd(0x17e)]<0x64&&(_0x5e09b5[_0xc76bbd(0x116)]={});let _0x103c37=[],_0x19a920=_0x232745[_0xc76bbd(0x1b6)]||_0x5e09b5[_0xc76bbd(0x116)][_0xc76bbd(0x1b6)]?_0x28df38:_0x48e9ea,_0x266396=_0x478299=>{var _0x338e13=_0xc76bbd;let _0x3fc31a={};return _0x3fc31a[_0x338e13(0x165)]=_0x478299[_0x338e13(0x165)],_0x3fc31a[_0x338e13(0x1b7)]=_0x478299[_0x338e13(0x1b7)],_0x3fc31a[_0x338e13(0x191)]=_0x478299[_0x338e13(0x191)],_0x3fc31a[_0x338e13(0x168)]=_0x478299[_0x338e13(0x168)],_0x3fc31a[_0x338e13(0x128)]=_0x478299['autoExpandLimit'],_0x3fc31a[_0x338e13(0x12a)]=_0x478299[_0x338e13(0x12a)],_0x3fc31a['sortProps']=!0x1,_0x3fc31a[_0x338e13(0x184)]=!_0x5b4f2b,_0x3fc31a[_0x338e13(0x153)]=0x1,_0x3fc31a['level']=0x0,_0x3fc31a['expId']=_0x338e13(0x197),_0x3fc31a[_0x338e13(0x195)]=_0x338e13(0x171),_0x3fc31a[_0x338e13(0xde)]=!0x0,_0x3fc31a[_0x338e13(0x1b3)]=[],_0x3fc31a[_0x338e13(0x122)]=0x0,_0x3fc31a[_0x338e13(0x196)]=!0x0,_0x3fc31a[_0x338e13(0x173)]=0x0,_0x3fc31a['node']={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x3fc31a;};for(var _0x49e990=0x0;_0x49e990<_0x37fc39[_0xc76bbd(0x167)];_0x49e990++)_0x103c37[_0xc76bbd(0x1ba)](_0x611b8e['serialize']({'timeNode':_0x2dfd68==='time'||void 0x0},_0x37fc39[_0x49e990],_0x266396(_0x19a920),{}));if(_0x2dfd68==='trace'){let _0x5c882e=Error[_0xc76bbd(0xd7)];try{Error[_0xc76bbd(0xd7)]=0x1/0x0,_0x103c37[_0xc76bbd(0x1ba)](_0x611b8e[_0xc76bbd(0x1ac)]({'stackNode':!0x0},new Error()[_0xc76bbd(0x1a2)],_0x266396(_0x19a920),{'strLength':0x1/0x0}));}finally{Error[_0xc76bbd(0xd7)]=_0x5c882e;}}return{'method':_0xc76bbd(0xf9),'version':_0x495f21,'args':[{'ts':_0x212b7d,'session':_0x348d4d,'args':_0x103c37,'id':_0x244908,'context':_0xf37c4f}]};}catch(_0xbd00f9){return{'method':_0xc76bbd(0xf9),'version':_0x495f21,'args':[{'ts':_0x212b7d,'session':_0x348d4d,'args':[{'type':_0xc76bbd(0x135),'error':_0xbd00f9&&_0xbd00f9[_0xc76bbd(0x113)]}],'id':_0x244908,'context':_0xf37c4f}]};}finally{try{if(_0x232745&&_0x2e006a){let _0xd289e6=_0x399dfb();_0x232745[_0xc76bbd(0x17e)]++,_0x232745[_0xc76bbd(0x1b4)]+=_0x23ae99(_0x2e006a,_0xd289e6),_0x232745['ts']=_0xd289e6,_0x5e09b5[_0xc76bbd(0x116)][_0xc76bbd(0x17e)]++,_0x5e09b5[_0xc76bbd(0x116)]['time']+=_0x23ae99(_0x2e006a,_0xd289e6),_0x5e09b5['hits']['ts']=_0xd289e6,(_0x232745[_0xc76bbd(0x17e)]>0x32||_0x232745[_0xc76bbd(0x1b4)]>0x64)&&(_0x232745[_0xc76bbd(0x1b6)]=!0x0),(_0x5e09b5[_0xc76bbd(0x116)][_0xc76bbd(0x17e)]>0x3e8||_0x5e09b5[_0xc76bbd(0x116)][_0xc76bbd(0x1b4)]>0x12c)&&(_0x5e09b5['hits']['reduceLimits']=!0x0);}}catch{}}}return _0x357de1;}((_0xe39406,_0x12f4af,_0x453c88,_0x41365b,_0xc3559e,_0xdce0af,_0x33c738,_0x26605a,_0x543a92,_0x5f076a,_0x5844c8)=>{var _0x3348a8=_0x22af76;if(_0xe39406[_0x3348a8(0x16b)])return _0xe39406['_console_ninja'];if(!X(_0xe39406,_0x26605a,_0xc3559e))return _0xe39406[_0x3348a8(0x16b)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0xe39406[_0x3348a8(0x16b)];let _0x3599bc=b(_0xe39406),_0x7e6c5c=_0x3599bc['elapsed'],_0x369f46=_0x3599bc['timeStamp'],_0x165423=_0x3599bc['now'],_0x1e8be2={'hits':{},'ts':{}},_0x5d1787=H(_0xe39406,_0x543a92,_0x1e8be2,_0xdce0af),_0x1f0dca=_0x5411c4=>{_0x1e8be2['ts'][_0x5411c4]=_0x369f46();},_0x137155=(_0x29df21,_0x92cd06)=>{let _0x211b5e=_0x1e8be2['ts'][_0x92cd06];if(delete _0x1e8be2['ts'][_0x92cd06],_0x211b5e){let _0x25b30=_0x7e6c5c(_0x211b5e,_0x369f46());_0x230ae2(_0x5d1787('time',_0x29df21,_0x165423(),_0x2638dc,[_0x25b30],_0x92cd06));}},_0x26da5f=_0x21b4f5=>{var _0x4fe62f=_0x3348a8,_0x574fa5;return _0xc3559e===_0x4fe62f(0x187)&&_0xe39406[_0x4fe62f(0x14d)]&&((_0x574fa5=_0x21b4f5==null?void 0x0:_0x21b4f5[_0x4fe62f(0xf0)])==null?void 0x0:_0x574fa5[_0x4fe62f(0x167)])&&(_0x21b4f5[_0x4fe62f(0xf0)][0x0]['origin']=_0xe39406[_0x4fe62f(0x14d)]),_0x21b4f5;};_0xe39406[_0x3348a8(0x16b)]={'consoleLog':(_0x581e6b,_0x5c928c)=>{var _0x341716=_0x3348a8;_0xe39406[_0x341716(0x10c)][_0x341716(0xf9)]['name']!=='disabledLog'&&_0x230ae2(_0x5d1787('log',_0x581e6b,_0x165423(),_0x2638dc,_0x5c928c));},'consoleTrace':(_0x4aca16,_0xfebfc6)=>{var _0x1a169f=_0x3348a8;_0xe39406[_0x1a169f(0x10c)][_0x1a169f(0xf9)][_0x1a169f(0x149)]!=='disabledTrace'&&_0x230ae2(_0x26da5f(_0x5d1787(_0x1a169f(0x132),_0x4aca16,_0x165423(),_0x2638dc,_0xfebfc6)));},'consoleTime':_0x10b89d=>{_0x1f0dca(_0x10b89d);},'consoleTimeEnd':(_0xc2cdf8,_0x448e82)=>{_0x137155(_0x448e82,_0xc2cdf8);},'autoLog':(_0x58dacd,_0x3cb101)=>{var _0x4266a6=_0x3348a8;_0x230ae2(_0x5d1787(_0x4266a6(0xf9),_0x3cb101,_0x165423(),_0x2638dc,[_0x58dacd]));},'autoLogMany':(_0xea83fe,_0x1fdecb)=>{_0x230ae2(_0x5d1787('log',_0xea83fe,_0x165423(),_0x2638dc,_0x1fdecb));},'autoTrace':(_0x130829,_0x1b5197)=>{var _0x52cc80=_0x3348a8;_0x230ae2(_0x26da5f(_0x5d1787(_0x52cc80(0x132),_0x1b5197,_0x165423(),_0x2638dc,[_0x130829])));},'autoTraceMany':(_0x5a09f5,_0x18939b)=>{var _0x3f44ce=_0x3348a8;_0x230ae2(_0x26da5f(_0x5d1787(_0x3f44ce(0x132),_0x5a09f5,_0x165423(),_0x2638dc,_0x18939b)));},'autoTime':(_0xcf495c,_0x1cce05,_0x396811)=>{_0x1f0dca(_0x396811);},'autoTimeEnd':(_0x5738d5,_0x5b3b6d,_0x3d8db4)=>{_0x137155(_0x5b3b6d,_0x3d8db4);},'coverage':_0x41793b=>{var _0x1fb997=_0x3348a8;_0x230ae2({'method':_0x1fb997(0x16e),'version':_0xdce0af,'args':[{'id':_0x41793b}]});}};let _0x230ae2=q(_0xe39406,_0x12f4af,_0x453c88,_0x41365b,_0xc3559e,_0x5f076a,_0x5844c8),_0x2638dc=_0xe39406[_0x3348a8(0x112)];return _0xe39406['_console_ninja'];})(globalThis,'127.0.0.1',_0x22af76(0x1a8),_0x22af76(0xe4),_0x22af76(0x19e),_0x22af76(0x17c),_0x22af76(0x1a5),_0x22af76(0x13a),_0x22af76(0x189),'','1');");
  } catch (e) {}
}
; /* istanbul ignore next */
function oo_oo(i) {
  for (var _len = arguments.length, v = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    v[_key - 1] = arguments[_key];
  }
  try {
    oo_cm().consoleLog(i, v);
  } catch (e) {}
  return v;
}
; /* istanbul ignore next */
function oo_tr(i) {
  for (var _len2 = arguments.length, v = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    v[_key2 - 1] = arguments[_key2];
  }
  try {
    oo_cm().consoleTrace(i, v);
  } catch (e) {}
  return v;
}
; /* istanbul ignore next */
function oo_ts(v) {
  try {
    oo_cm().consoleTime(v);
  } catch (e) {}
  return v;
}
; /* istanbul ignore next */
function oo_te(v, i) {
  try {
    oo_cm().consoleTimeEnd(v, i);
  } catch (e) {}
  return v;
}
; /*eslint unicorn/no-abusive-eslint-disable:,eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7RUFBRSxPQUFPSSxDQUFDO0FBQUM7QUFBQyxDQUFDO0FBQTBCLFNBQVNTLEtBQUtBLENBQUNULENBQUMsRUFBRUgsQ0FBQyxFQUFDO0VBQUMsSUFBRztJQUFDSCxLQUFLLENBQUMsQ0FBQyxDQUFDZ0IsY0FBYyxDQUFDVixDQUFDLEVBQUVILENBQUMsQ0FBQztFQUFDLENBQUMsUUFBTUQsQ0FBQyxFQUFDLENBQUM7RUFBRSxPQUFPSSxDQUFDO0FBQUM7QUFBQyxDQUFDLDRRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV3X3Byb2plY3QvLi9zcmMvanMvbW9kZWxzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9uZXdfcHJvamVjdC8uL3NyYy9qcy9tb2RlbHMvcGxheWVyLmpzIiwid2VicGFjazovL25ld19wcm9qZWN0Ly4vc3JjL2pzL21vZGVscy9zaGlwLmpzIiwid2VicGFjazovL25ld19wcm9qZWN0Ly4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbmV3X3Byb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL25ld19wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbmV3X3Byb2plY3QvLi9zcmMvY3NzL3N0eWxlLmNzcz85ZmNkIiwid2VicGFjazovL25ld19wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL25ld19wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9uZXdfcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9uZXdfcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9uZXdfcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL25ld19wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbmV3X3Byb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbmV3X3Byb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbmV3X3Byb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL25ld19wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbmV3X3Byb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9uZXdfcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbmV3X3Byb2plY3QvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lYm9hcmQge1xuICAgIGJvYXJkID0gW1xuICAgICAgICBBcnJheS5mcm9tKHsgbGVuZ3RoOiAxMCB9KSxcbiAgICAgICAgQXJyYXkuZnJvbSh7IGxlbmd0aDogMTAgfSksXG4gICAgICAgIEFycmF5LmZyb20oeyBsZW5ndGg6IDEwIH0pLFxuICAgICAgICBBcnJheS5mcm9tKHsgbGVuZ3RoOiAxMCB9KSxcbiAgICAgICAgQXJyYXkuZnJvbSh7IGxlbmd0aDogMTAgfSksXG4gICAgICAgIEFycmF5LmZyb20oeyBsZW5ndGg6IDEwIH0pLFxuICAgICAgICBBcnJheS5mcm9tKHsgbGVuZ3RoOiAxMCB9KSxcbiAgICAgICAgQXJyYXkuZnJvbSh7IGxlbmd0aDogMTAgfSksXG4gICAgICAgIEFycmF5LmZyb20oeyBsZW5ndGg6IDEwIH0pLFxuICAgICAgICBBcnJheS5mcm9tKHsgbGVuZ3RoOiAxMCB9KVxuICAgIF07XG4gICAgbWlzc2VkU2hvdHMgPSBbXVxuICAgIHNoaXBzID0gW11cblxuICAgIHBsYWNlU2hpcChjb29yZFgsIGNvb3JkWSkge1xuICAgICAgICBpZiAoY29vcmRYID49IDAgJiYgY29vcmRYIDw9IDkgJiYgY29vcmRZID49IDAgJiYgY29vcmRZIDw9IDkpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1NoaXAgPSBuZXcgU2hpcCgxKTtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbY29vcmRZXVtjb29yZFhdID0gbmV3U2hpcDtcbiAgICAgICAgICAgIHRoaXMuc2hpcHMucHVzaChuZXdTaGlwKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZWNlaXZlQXR0YWNrKGNvb3JkWCwgY29vcmRZKSB7XG4gICAgICAgIGNvbnN0IGVsID0gdGhpcy5ib2FyZFtjb29yZFldW2Nvb3JkWF07XG4gICAgICAgIGlmIChlbCBpbnN0YW5jZW9mIFNoaXApIHtcbiAgICAgICAgICAgIGVsLmhpdCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5taXNzZWRTaG90cy5wdXNoKFtjb29yZFgsIGNvb3JkWV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFsbFNoaXBzU3VuaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2hpcHMuZXZlcnkoc2hpcCA9PiBzaGlwLmlzU3VuaygpKTtcbiAgICB9XG59IiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmdhbWVCb2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCB7XG4gICAgY29uc3RydWN0b3IobGVuZ3RoKSB7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoLFxuICAgICAgICAgICAgdGhpcy5oaXRzID0gMDtcbiAgICB9XG5cbiAgICBoaXQoKSB7XG4gICAgICAgIHRoaXMuaGl0cysrO1xuICAgIH1cblxuICAgIGlzU3VuaygpIHtcbiAgICAgICAgaWYgKHRoaXMuaGl0cyA+PSB0aGlzLmxlbmd0aCkgcmV0dXJuIHRydWU7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0Oml0YWwsd2dodEAwLDEwMC4uOTAwOzEsMTAwLi45MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG59XG5cbmh0bWwge1xuICBmb250LXNpemU6IDYyLjUlO1xufVxuXG5ib2R5IHtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGhlaWdodDogMTAwdmg7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgOGZyIDAuNWZyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDIzOCwgMjM4KTtcbn1cblxuLmhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAycmVtO1xuICBwYWRkaW5nOiAycmVtO1xufVxuXG4uYm9hcmQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDFyZW07XG59XG5cbi5uYW1lIHtcbiAgZm9udC1zaXplOiAxLjdyZW07XG59XG5cbi5ib2FyZCB7XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDM0LCAzNCwgMzQpO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbn1cblxuLmNlbGwge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMzQsIDM0LCAzNCk7XG59XG5cbi5zaGlwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzMywgMjU1LCAxNzkpO1xufVxuXG4ubWlzc2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MiwgMTc5LCAxNzkpO1xufVxuXG4uc3VuayB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDEzMywgMTMzKTtcbn1cblxuLmZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgcGFkZGluZzogMC41cmVtO1xufVxuXG4uZ2l0aHViLWxvZ28ge1xuICBmb250LXNpemU6IDNyZW07XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XG59XG5cbi5naXRodWItbG9nbzpob3ZlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDF0dXJuKTtcbn1cblxuLndpbm5lci1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgb3BhY2l0eTogMC45NTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaDEge1xuICBjb2xvcjogIzRjYWY1MDtcbiAgZm9udC1zaXplOiA0ZW07XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbnAge1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgY29sb3I6ICMyZTJlMmU7XG59XG5cbmgyIHtcbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLmNsb3NlLWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIGZvbnQtc2l6ZTogNi40cmVtO1xufVxuXG4uY2xvc2UtYnRuOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnJlc3RhcnQtYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDI1JTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAyNSUpO1xuICBwYWRkaW5nOiAwLjdyZW0gMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi5yZXN0YXJ0LWJ0bjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLnJlc3RhcnQtYnRuOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDM1JSk7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixpQ0FBaUM7RUFDakMsYUFBYTtFQUNiLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsUUFBUTtFQUNSLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCwrQkFBK0I7RUFDL0Isb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0Oml0YWwsd2dodEAwLDEwMC4uOTAwOzEsMTAwLi45MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiA2Mi41JTtcXG59XFxuXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciA4ZnIgMC41ZnI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4LCAyMzgsIDIzOCk7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxuLmJvYXJkLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLm5hbWUge1xcbiAgZm9udC1zaXplOiAxLjdyZW07XFxufVxcblxcbi5ib2FyZCB7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDM0LCAzNCwgMzQpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbn1cXG5cXG4uY2VsbCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMzQsIDM0LCAzNCk7XFxufVxcblxcbi5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzMsIDI1NSwgMTc5KTtcXG59XFxuXFxuLm1pc3NlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgyLCAxNzksIDE3OSk7XFxufVxcblxcbi5zdW5rIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDEzMywgMTMzKTtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbi5naXRodWItbG9nbyB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcXG59XFxuXFxuLmdpdGh1Yi1sb2dvOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDF0dXJuKTtcXG59XFxuXFxuLndpbm5lci1jb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3BhY2l0eTogMC45NTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaDEge1xcbiAgY29sb3I6ICM0Y2FmNTA7XFxuICBmb250LXNpemU6IDRlbTtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbnAge1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBjb2xvcjogIzJlMmUyZTtcXG59XFxuXFxuaDIge1xcbiAgY29sb3I6ICMzMzM7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5jbG9zZS1idG4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDBweDtcXG4gIHRvcDogMHB4O1xcbiAgZm9udC1zaXplOiA2LjRyZW07XFxufVxcblxcbi5jbG9zZS1idG46aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5yZXN0YXJ0LWJ0biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDI1JTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDI1JSk7XFxuICBwYWRkaW5nOiAwLjdyZW0gMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5yZXN0YXJ0LWJ0bjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG4ucmVzdGFydC1idG46YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDM1JSk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi4vY3NzL3N0eWxlLmNzc1wiO1xuXG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL21vZGVscy9wbGF5ZXJcIjtcbmNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgUHViU3ViLnB1Ymxpc2goJ1JlbmRlciBHYW1lQm9hcmQnLCB7IGJvYXJkMTogdGhpcy5wbGF5ZXIxLmdhbWVCb2FyZCwgYm9hcmQyOiB0aGlzLnBsYXllcjIuZ2FtZUJvYXJkIH0pXG4gICAgICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ2F0dGFja2VkJywgKG1zZywgZGF0YSkgPT4ge1xuICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgKi9jb25zb2xlLmxvZyguLi5vb19vbyhgMjc3Mjg4NTUzNV85XzEyXzlfMjlfNGAsZGF0YSkpO1xuICAgICAgICAgICAgdGhpcy5sdW5jaEF0dGFjayhkYXRhLnBvc1gsIGRhdGEucG9zWSk7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMucGxheWVyMSA9IG5ldyBQbGF5ZXIoKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIyID0gbmV3IFBsYXllcigpO1xuICAgICAgICB0aGlzLmFjdGl2ZVBsYXllciA9IHRoaXMucGxheWVyMTtcblxuICAgICAgICB0aGlzLnBsYWNlU2hpcFJhbmRvbSh0aGlzLnBsYXllcjEuZ2FtZUJvYXJkKTtcbiAgICAgICAgdGhpcy5wbGFjZVNoaXBSYW5kb20odGhpcy5wbGF5ZXIyLmdhbWVCb2FyZCk7XG4gICAgfVxuXG4gICAgcGxhY2VTaGlwUmFuZG9tKGJvYXJkKSB7XG4gICAgICAgIGNvbnN0IHNldCA9IG5ldyBTZXQoKTtcbiAgICAgICAgbGV0IHNoaXBQbGFjZWQgPSAwO1xuICAgICAgICBsZXQgZXhwZWN0ZWRTaGlwTnVtID0gMjA7XG4gICAgICAgIHdoaWxlIChzaGlwUGxhY2VkIDwgZXhwZWN0ZWRTaGlwTnVtKSB7XG4gICAgICAgICAgICBsZXQgY29vcmRZID0gcGFyc2VJbnQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApKTtcbiAgICAgICAgICAgIGxldCBjb29yZFggPSBwYXJzZUludChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkpO1xuICAgICAgICAgICAgbGV0IGxvY2F0aW9uID0gYCR7Y29vcmRYfSAke2Nvb3JkWX1gO1xuICAgICAgICAgICAgaWYgKCFzZXQuaGFzKGxvY2F0aW9uKSkge1xuICAgICAgICAgICAgICAgIHNldC5hZGQobG9jYXRpb24pO1xuICAgICAgICAgICAgICAgIGJvYXJkLnBsYWNlU2hpcChjb29yZFgsIGNvb3JkWSk7XG4gICAgICAgICAgICAgICAgc2hpcFBsYWNlZCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbHVuY2hBdHRhY2socG9zWCwgcG9zWSkge1xuICAgICAgICB0aGlzLnBsYXllcjIuZ2FtZUJvYXJkLnJlY2VpdmVBdHRhY2socG9zWCwgcG9zWSlcbiAgICAgICAgdGhpcy5jaGFuZ2VBY3RpdmVQbGF5ZXIodGhpcy5wbGF5ZXIyKVxuICAgICAgICB0aGlzLmNvbXB1dGVyQXR0YWNrKCk7XG4gICAgICAgIFB1YlN1Yi5wdWJsaXNoKCdSZW5kZXIgR2FtZUJvYXJkJywgeyBib2FyZDE6IHRoaXMucGxheWVyMS5nYW1lQm9hcmQsIGJvYXJkMjogdGhpcy5wbGF5ZXIyLmdhbWVCb2FyZCB9KVxuICAgICAgICB0aGlzLmNoZWNrV2luKCk7XG4gICAgfVxuICAgIGNoYW5nZUFjdGl2ZVBsYXllcihuZXdBY3RpdmUpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVQbGF5ZXIgPSBuZXdBY3RpdmU7XG4gICAgfVxuICAgIGNoZWNrV2luKCkge1xuICAgICAgICBpZiAodGhpcy5wbGF5ZXIxLmdhbWVCb2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgICAgICAgICAgUHViU3ViLnB1Ymxpc2goJ0dhbWVPdmVyJywgeyB3aW5uZXI6IFwiQ29tcHV0ZXJcIiB9KVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGxheWVyMi5nYW1lQm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgICAgICAgIFB1YlN1Yi5wdWJsaXNoKCdHYW1lT3ZlcicsIHsgd2lubmVyOiBcIlBsYXllclwiIH0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tcHV0ZXJBdHRhY2tQb3MoKSB7XG4gICAgICAgIGNvbnN0IG1pc3NlZCA9IHRoaXMucGxheWVyMS5nYW1lQm9hcmQubWlzc2VkU2hvdHM7XG4gICAgICAgIGNvbnN0IGJvYXJkID0gdGhpcy5wbGF5ZXIxLmdhbWVCb2FyZC5ib2FyZFxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgbGV0IGNvb3JkWSA9IHBhcnNlSW50KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSk7XG4gICAgICAgICAgICBsZXQgY29vcmRYID0gcGFyc2VJbnQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApKTtcbiAgICAgICAgICAgIGlmIChtaXNzZWQuZXZlcnkoZWwgPT4gZWxbMF0gIT0gY29vcmRZIHx8IGVsWzFdICE9IGNvb3JkWCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoYm9hcmRbY29vcmRYXVtjb29yZFldID09IHVuZGVmaW5lZCB8fCAhYm9hcmRbY29vcmRYXVtjb29yZFldLmlzU3VuaygpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2Nvb3JkWSwgY29vcmRYXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjb21wdXRlckF0dGFjaygpIHtcbiAgICAgICAgY29uc3QgW3Bvc1gsIHBvc1ldID0gdGhpcy5jb21wdXRlckF0dGFja1BvcygpO1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL2NvbnNvbGUubG9nKC4uLm9vX29vKGAyNzcyODg1NTM1XzY5XzhfNjlfMzFfNGAscG9zWCwgcG9zWSkpO1xuICAgICAgICB0aGlzLnBsYXllcjEuZ2FtZUJvYXJkLnJlY2VpdmVBdHRhY2socG9zWCwgcG9zWSk7XG4gICAgICAgIHRoaXMuY2hhbmdlQWN0aXZlUGxheWVyKHRoaXMucGxheWVyMSk7XG4gICAgfVxufVxuXG5uZXcgR2FtZSgpO1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8vKiBjOCBpZ25vcmUgc3RhcnQgKi8vKiBlc2xpbnQtZGlzYWJsZSAqLztmdW5jdGlvbiBvb19jbSgpe3RyeXtyZXR1cm4gKDAsZXZhbCkoXCJnbG9iYWxUaGlzLl9jb25zb2xlX25pbmphXCIpIHx8ICgwLGV2YWwpKFwiLyogaHR0cHM6Ly9naXRodWIuY29tL3dhbGxhYnlqcy9jb25zb2xlLW5pbmphI2hvdy1kb2VzLWl0LXdvcmsgKi8ndXNlIHN0cmljdCc7ZnVuY3Rpb24gXzB4NGUwNShfMHgxMzJkZjEsXzB4NTcwYzdlKXt2YXIgXzB4MTExNDdiPV8weDExMTQoKTtyZXR1cm4gXzB4NGUwNT1mdW5jdGlvbihfMHg0ZTA1ZDksXzB4NWQwZDZjKXtfMHg0ZTA1ZDk9XzB4NGUwNWQ5LTB4Y2M7dmFyIF8weDQzYzVkOT1fMHgxMTE0N2JbXzB4NGUwNWQ5XTtyZXR1cm4gXzB4NDNjNWQ5O30sXzB4NGUwNShfMHgxMzJkZjEsXzB4NTcwYzdlKTt9dmFyIF8weDIyYWY3Nj1fMHg0ZTA1OyhmdW5jdGlvbihfMHg0NmFiY2YsXzB4MTU4ZGFmKXt2YXIgXzB4MzJkM2I9XzB4NGUwNSxfMHgyMGI5YmQ9XzB4NDZhYmNmKCk7d2hpbGUoISFbXSl7dHJ5e3ZhciBfMHgxNzU1MTI9LXBhcnNlSW50KF8weDMyZDNiKDB4ZDgpKS8weDEqKHBhcnNlSW50KF8weDMyZDNiKDB4MTM5KSkvMHgyKSstcGFyc2VJbnQoXzB4MzJkM2IoMHgxOWEpKS8weDMqKC1wYXJzZUludChfMHgzMmQzYigweGNlKSkvMHg0KSstcGFyc2VJbnQoXzB4MzJkM2IoMHgxMzEpKS8weDUqKC1wYXJzZUludChfMHgzMmQzYigweDEyMSkpLzB4NikrLXBhcnNlSW50KF8weDMyZDNiKDB4ZGYpKS8weDcrLXBhcnNlSW50KF8weDMyZDNiKDB4MTgwKSkvMHg4Ky1wYXJzZUludChfMHgzMmQzYigweGRkKSkvMHg5K3BhcnNlSW50KF8weDMyZDNiKDB4MTlmKSkvMHhhO2lmKF8weDE3NTUxMj09PV8weDE1OGRhZilicmVhaztlbHNlIF8weDIwYjliZFsncHVzaCddKF8weDIwYjliZFsnc2hpZnQnXSgpKTt9Y2F0Y2goXzB4NWE4OGRkKXtfMHgyMGI5YmRbJ3B1c2gnXShfMHgyMGI5YmRbJ3NoaWZ0J10oKSk7fX19KF8weDExMTQsMHhjODU3OCkpO2Z1bmN0aW9uIF8weDExMTQoKXt2YXIgXzB4MzQ2MDA1PVsnX3NldE5vZGVFeHByZXNzaW9uUGF0aCcsJ2Vycm9yJywnYXJncycsJ3Byb3RvdHlwZScsJ1N0cmluZycsJ190cmVlTm9kZVByb3BlcnRpZXNBZnRlckZ1bGxWYWx1ZScsJ19pbk5leHRFZGdlJywncG9ydCcsJ19pc1ByaW1pdGl2ZVdyYXBwZXJUeXBlJywnaHJ0aW1lJywnX3NldE5vZGVJZCcsJ2xvZycsJ19wcm9wZXJ0eScsJ19hZGRQcm9wZXJ0eScsJ19pbkJyb3dzZXInLCdfc2V0Tm9kZVBlcm1pc3Npb25zJywnQnVmZmVyJywndHlwZScsJ19wXycsJ19kaXNwb3NlV2Vic29ja2V0JywnZG9ja2VyaXplZEFwcCcsJ2dldE93blByb3BlcnR5RGVzY3JpcHRvcicsJ2FycmF5JywnX2FkZExvYWROb2RlJywnW29iamVjdFxcXFx4MjBCaWdJbnRdJywnX3dzJywnY29uc3RydWN0b3InLCd1cmwnLCdwYXRoVG9GaWxlVVJMJywnaW5kZXhPZicsJ2NvbnNvbGUnLCd3cy9pbmRleC5qcycsJ2xvY2F0aW9uJywnX251bWJlclJlZ0V4cCcsJ1tvYmplY3RcXFxceDIwTWFwXScsJ2NvbmNhdCcsJ19jb25zb2xlX25pbmphX3Nlc3Npb24nLCdtZXNzYWdlJywnY2F0Y2gnLCdfaXNNYXAnLCdoaXRzJywnX2lzQXJyYXknLCd2YWx1ZScsJ2hhc093blByb3BlcnR5JywnX2lzVW5kZWZpbmVkJywnX3VuZGVmaW5lZCcsJ251bWJlcicsJ3Vuc2hpZnQnLCdtYXRjaCcsJ29iamVjdCcsJ19oYXNTeW1ib2xQcm9wZXJ0eU9uSXRzUGF0aCcsJzQ4MGxVRHJwYicsJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50JywnY2hhckF0JywnX2FkZE9iamVjdFByb3BlcnR5JywnTkVYVF9SVU5USU1FJywnZ2V0UHJvdG90eXBlT2YnLCdfaXNOZWdhdGl2ZVplcm8nLCdhdXRvRXhwYW5kTGltaXQnLCdwYXJlbnQnLCdhdXRvRXhwYW5kTWF4RGVwdGgnLCdfaXNTZXQnLCdyZW1peCcsJ19TeW1ib2wnLCdub2RlTW9kdWxlcycsJ3JlcGxhY2UnLCdfc29ydFByb3BzJywnNjMxMDBBb1dUcVonLCd0cmFjZScsJ2NhbGwnLCd0ZXN0JywndW5rbm93bicsJ19jb25uZWN0aW5nJywnZ2xvYmFsJywncGF0aCcsJzI4Mzc0OEtXQkVpVycsW1xcXCJsb2NhbGhvc3RcXFwiLFxcXCIxMjcuMC4wLjFcXFwiLFxcXCJleGFtcGxlLmN5cHJlc3MuaW9cXFwiLFxcXCJhbmtpdC1wY1xcXCIsXFxcIjE5Mi4xNjguMS42OFxcXCJdLCdpbmRleCcsJ19nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCdFcnJvcicsJ19kYXRlVG9TdHJpbmcnLCdfY2FwSWZTdHJpbmcnLCdjYXBwZWQnLCdfcF9sZW5ndGgnLCdjdXJyZW50JywnbnV4dCcsJ3RvTG93ZXJDYXNlJywnX0hUTUxBbGxDb2xsZWN0aW9uJywnX2Nvbm5lY3RlZCcsJ2RlZmluZVByb3BlcnR5JywnaXNFeHByZXNzaW9uVG9FdmFsdWF0ZScsJ25hbWUnLCdfV2ViU29ja2V0Jywnc2VuZCcsJ3Bvc2l0aXZlSW5maW5pdHknLCdvcmlnaW4nLCdfZ2V0T3duUHJvcGVydHlTeW1ib2xzJywnX2JsYWNrbGlzdGVkUHJvcGVydHknLCdqb2luJywnX2hhc01hcE9uSXRzUGF0aCcsJ3RoZW4nLCdkZXB0aCcsJ3Byb2Nlc3MnLCdkYXRhJywnc2VlXFxcXHgyMGh0dHBzOi8vdGlueXVybC5jb20vMnZ0OGp4endcXFxceDIwZm9yXFxcXHgyMG1vcmVcXFxceDIwaW5mby4nLCdDb25zb2xlXFxcXHgyME5pbmphXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBzZW5kXFxcXHgyMGxvZ3MsXFxcXHgyMHJlZnJlc2hpbmdcXFxceDIwdGhlXFxcXHgyMHBhZ2VcXFxceDIwbWF5XFxcXHgyMGhlbHA7XFxcXHgyMGFsc29cXFxceDIwc2VlXFxcXHgyMCcsJ2V4cHJlc3Npb25zVG9FdmFsdWF0ZScsJ19zZXROb2RlRXhwYW5kYWJsZVN0YXRlJywnb25tZXNzYWdlJywnX3RyZWVOb2RlUHJvcGVydGllc0JlZm9yZUZ1bGxWYWx1ZScsJ19nZXRPd25Qcm9wZXJ0eU5hbWVzJywnbnVsbCcsJ3BhcnNlJywnZnVuY3Rpb24nLCd2ZXJzaW9ucycsJ2dldFdlYlNvY2tldENsYXNzJywnX3dlYlNvY2tldEVycm9yRG9jc0xpbmsnLCdDb25zb2xlXFxcXHgyME5pbmphXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBzZW5kXFxcXHgyMGxvZ3MsXFxcXHgyMHJlc3RhcnRpbmdcXFxceDIwdGhlXFxcXHgyMHByb2Nlc3NcXFxceDIwbWF5XFxcXHgyMGhlbHA7XFxcXHgyMGFsc29cXFxceDIwc2VlXFxcXHgyMCcsJ19jbGVhbk5vZGUnLCdwcm9wcycsJ19jb25uZWN0VG9Ib3N0Tm93JywnbGVuZ3RoJywndG90YWxTdHJMZW5ndGgnLCdfcHJvcGVydHlOYW1lJywnX2lzUHJpbWl0aXZlVHlwZScsJ19jb25zb2xlX25pbmphJywnZGF0ZScsJ2VsYXBzZWQnLCdjb3ZlcmFnZScsJ2ZhaWxlZFxcXFx4MjB0b1xcXFx4MjBjb25uZWN0XFxcXHgyMHRvXFxcXHgyMGhvc3Q6XFxcXHgyMCcsJ2Jvb2xlYW4nLCdyb290X2V4cCcsJ1BPU0lUSVZFX0lORklOSVRZJywnYWxsU3RyTGVuZ3RoJywnc3RyaW5naWZ5JywnX3NvY2tldCcsJ01hcCcsJ3VuZGVmaW5lZCcsJ190eXBlJywnbGV2ZWwnLCd0aW1lU3RhbXAnLCdfc2V0Tm9kZUxhYmVsJywnMS4wLjAnLCdfY29uc29sZU5pbmphQWxsb3dlZFRvU3RhcnQnLCdjb3VudCcsJ21hcCcsJzEyODQzMTkyaldvYVVFJywnX3JlY29ubmVjdFRpbWVvdXQnLCdsb2dnZXJcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGNvbm5lY3RcXFxceDIwdG9cXFxceDIwaG9zdCxcXFxceDIwc2VlXFxcXHgyMCcsJ3N1YnN0cicsJ25vRnVuY3Rpb25zJywnU3ltYm9sJywnZXZlbnRSZWNlaXZlZENhbGxiYWNrJywnbmV4dC5qcycsJ3dhcm4nLCcnLCdlZGdlJywnc29ydCcsJ3RvVXBwZXJDYXNlJywnaG9zdG5hbWUnLCdmb3JFYWNoJywnX2FkZEZ1bmN0aW9uc05vZGUnLCdkZWZhdWx0Jywnc3RyTGVuZ3RoJywnY3JlYXRlJywnX21heENvbm5lY3RBdHRlbXB0Q291bnQnLCdub2RlJywncm9vdEV4cHJlc3Npb24nLCdyZXNvbHZlR2V0dGVycycsJ3Jvb3RfZXhwX2lkJywnX3NlbmRFcnJvck1lc3NhZ2UnLCdfc2V0Tm9kZVF1ZXJ5UGF0aCcsJzkwODIyYVROcUluJywnZ2F0ZXdheS5kb2NrZXIuaW50ZXJuYWwnLCdfcmVnRXhwVG9TdHJpbmcnLCd0b1N0cmluZycsJ3dlYnBhY2snLCczMTkyNzYzMGhISXhLUScsJ2VudicsJ1tvYmplY3RcXFxceDIwU2V0XScsJ3N0YWNrJywnTnVtYmVyJywnbG9nZ2VyXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBjb25uZWN0XFxcXHgyMHRvXFxcXHgyMGhvc3QnLCcxNzIxMzI3MDA4NDc4Jywnd3M6Ly8nLCdub3cnLCczNDYzOScsJ3BlcmZvcm1hbmNlJywnW29iamVjdFxcXFx4MjBBcnJheV0nLCdfYWxsb3dlZFRvQ29ubmVjdE9uU2VuZCcsJ3NlcmlhbGl6ZScsJ3N5bWJvbCcsJ2FzdHJvJywncG9wJywnX29iamVjdFRvU3RyaW5nJywnY2FwcGVkRWxlbWVudHMnLCdfcXVvdGVkUmVnRXhwJywnYXV0b0V4cGFuZFByZXZpb3VzT2JqZWN0cycsJ3RpbWUnLCd2YWx1ZU9mJywncmVkdWNlTGltaXRzJywnZWxlbWVudHMnLCdfYWRkaXRpb25hbE1ldGFkYXRhJywnZ2V0dGVyJywncHVzaCcsJ19wcm9jZXNzVHJlZU5vZGVSZXN1bHQnLCdiaWdpbnQnLCcyMDBhZ3hSaFYnLCdhbmd1bGFyJywnaHR0cHM6Ly90aW55dXJsLmNvbS8zN3g4Yjc5dCcsJ3NldCcsJ2hvc3QnLCdmYWlsZWRcXFxceDIwdG9cXFxceDIwZmluZFxcXFx4MjBhbmRcXFxceDIwbG9hZFxcXFx4MjBXZWJTb2NrZXQnLCdIVE1MQWxsQ29sbGVjdGlvbicsJ3JlbG9hZCcsJ19wX25hbWUnLCdzdGFja1RyYWNlTGltaXQnLCczdmhJcXR4Jywnc29ydFByb3BzJywnX2tleVN0clJlZ0V4cCcsJ3N0cmluZycsJ1tvYmplY3RcXFxceDIwRGF0ZV0nLCcxMzE0MTkwOHRsc09rdScsJ2F1dG9FeHBhbmQnLCc5ODI5NjEwYmZKRkJzJywnb25lcnJvcicsJ3NldHRlcicsJ25lZ2F0aXZlSW5maW5pdHknLCdTZXQnLFxcXCIvaG9tZS9hbmtpdC8udnNjb2RlL2V4dGVuc2lvbnMvd2FsbGFieWpzLmNvbnNvbGUtbmluamEtMS4wLjMyOS9ub2RlX21vZHVsZXNcXFwiLCdnZXRPd25Qcm9wZXJ0eU5hbWVzJywnTkVHQVRJVkVfSU5GSU5JVFknLCdfYWxsb3dlZFRvU2VuZCcsJ29uY2xvc2UnLCd1bnJlZicsJ19XZWJTb2NrZXRDbGFzcycsJ1xcXFx4MjBzZXJ2ZXInLCdfYXR0ZW1wdFRvUmVjb25uZWN0U2hvcnRseScsJ19jb25uZWN0QXR0ZW1wdENvdW50J107XzB4MTExND1mdW5jdGlvbigpe3JldHVybiBfMHgzNDYwMDU7fTtyZXR1cm4gXzB4MTExNCgpO312YXIgSz1PYmplY3RbXzB4MjJhZjc2KDB4MTkyKV0sUT1PYmplY3RbXzB4MjJhZjc2KDB4MTQ3KV0sRz1PYmplY3RbXzB4MjJhZjc2KDB4MTAzKV0sZWU9T2JqZWN0WydnZXRPd25Qcm9wZXJ0eU5hbWVzJ10sdGU9T2JqZWN0W18weDIyYWY3NigweDEyNildLG5lPU9iamVjdFtfMHgyMmFmNzYoMHhmMSldW18weDIyYWY3NigweDExOSldLHJlPShfMHgzNjI0OTQsXzB4MjQ1YTgwLF8weDEzYTBmNCxfMHgyMjY3NmUpPT57dmFyIF8weDFkZmZjNz1fMHgyMmFmNzY7aWYoXzB4MjQ1YTgwJiZ0eXBlb2YgXzB4MjQ1YTgwPT1fMHgxZGZmYzcoMHgxMWYpfHx0eXBlb2YgXzB4MjQ1YTgwPT1fMHgxZGZmYzcoMHgxNWYpKXtmb3IobGV0IF8weGUxNDMxZSBvZiBlZShfMHgyNDVhODApKSFuZVtfMHgxZGZmYzcoMHgxMzMpXShfMHgzNjI0OTQsXzB4ZTE0MzFlKSYmXzB4ZTE0MzFlIT09XzB4MTNhMGY0JiZRKF8weDM2MjQ5NCxfMHhlMTQzMWUseydnZXQnOigpPT5fMHgyNDVhODBbXzB4ZTE0MzFlXSwnZW51bWVyYWJsZSc6IShfMHgyMjY3NmU9RyhfMHgyNDVhODAsXzB4ZTE0MzFlKSl8fF8weDIyNjc2ZVsnZW51bWVyYWJsZSddfSk7fXJldHVybiBfMHgzNjI0OTQ7fSxWPShfMHgyMDM3OGIsXzB4N2YzMjMxLF8weDU1ODE0MSk9PihfMHg1NTgxNDE9XzB4MjAzNzhiIT1udWxsP0sodGUoXzB4MjAzNzhiKSk6e30scmUoXzB4N2YzMjMxfHwhXzB4MjAzNzhifHwhXzB4MjAzNzhiWydfX2VzJysnTW9kdWxlJ10/UShfMHg1NTgxNDEsXzB4MjJhZjc2KDB4MTkwKSx7J3ZhbHVlJzpfMHgyMDM3OGIsJ2VudW1lcmFibGUnOiEweDB9KTpfMHg1NTgxNDEsXzB4MjAzNzhiKSkseD1jbGFzc3tjb25zdHJ1Y3RvcihfMHgxNjA5ZjUsXzB4NDAzNzY4LF8weDNjNmZhMyxfMHgyODc1MDAsXzB4MjQxYzM5LF8weDUxYmU0Mil7dmFyIF8weGRjMmQ1MT1fMHgyMmFmNzYsXzB4MTkxY2RiLF8weDE3NzQxMCxfMHgyYTY1ZWEsXzB4MmRiMzU0O3RoaXNbXzB4ZGMyZDUxKDB4MTM3KV09XzB4MTYwOWY1LHRoaXNbXzB4ZGMyZDUxKDB4ZDIpXT1fMHg0MDM3NjgsdGhpc1tfMHhkYzJkNTEoMHhmNSldPV8weDNjNmZhMyx0aGlzWydub2RlTW9kdWxlcyddPV8weDI4NzUwMCx0aGlzWydkb2NrZXJpemVkQXBwJ109XzB4MjQxYzM5LHRoaXNbJ2V2ZW50UmVjZWl2ZWRDYWxsYmFjayddPV8weDUxYmU0Mix0aGlzW18weGRjMmQ1MSgweGU3KV09ITB4MCx0aGlzW18weGRjMmQ1MSgweDFhYildPSEweDAsdGhpc1tfMHhkYzJkNTEoMHgxNDYpXT0hMHgxLHRoaXNbJ19jb25uZWN0aW5nJ109ITB4MSx0aGlzWydfaW5OZXh0RWRnZSddPSgoXzB4MTc3NDEwPShfMHgxOTFjZGI9XzB4MTYwOWY1Wydwcm9jZXNzJ10pPT1udWxsP3ZvaWQgMHgwOl8weDE5MWNkYltfMHhkYzJkNTEoMHgxYTApXSk9PW51bGw/dm9pZCAweDA6XzB4MTc3NDEwWydORVhUX1JVTlRJTUUnXSk9PT1fMHhkYzJkNTEoMHgxOGEpLHRoaXNbXzB4ZGMyZDUxKDB4ZmMpXT0hKChfMHgyZGIzNTQ9KF8weDJhNjVlYT10aGlzWydnbG9iYWwnXVtfMHhkYzJkNTEoMHgxNTQpXSk9PW51bGw/dm9pZCAweDA6XzB4MmE2NWVhW18weGRjMmQ1MSgweDE2MCldKSE9bnVsbCYmXzB4MmRiMzU0W18weGRjMmQ1MSgweDE5NCldKSYmIXRoaXNbXzB4ZGMyZDUxKDB4ZjQpXSx0aGlzWydfV2ViU29ja2V0Q2xhc3MnXT1udWxsLHRoaXNbXzB4ZGMyZDUxKDB4ZWQpXT0weDAsdGhpc1tfMHhkYzJkNTEoMHgxOTMpXT0weDE0LHRoaXNbJ193ZWJTb2NrZXRFcnJvckRvY3NMaW5rJ109XzB4ZGMyZDUxKDB4ZDApLHRoaXNbXzB4ZGMyZDUxKDB4MTk4KV09KHRoaXNbXzB4ZGMyZDUxKDB4ZmMpXT9fMHhkYzJkNTEoMHgxNTcpOl8weGRjMmQ1MSgweDE2MykpK3RoaXNbXzB4ZGMyZDUxKDB4MTYyKV07fWFzeW5jW18weDIyYWY3NigweDE2MSldKCl7dmFyIF8weGQwNmFlYT1fMHgyMmFmNzYsXzB4MWRhY2FkLF8weDQ2MDY4YztpZih0aGlzW18weGQwNmFlYSgweGVhKV0pcmV0dXJuIHRoaXNbXzB4ZDA2YWVhKDB4ZWEpXTtsZXQgXzB4Mzg3ZDYyO2lmKHRoaXNbXzB4ZDA2YWVhKDB4ZmMpXXx8dGhpc1snX2luTmV4dEVkZ2UnXSlfMHgzODdkNjI9dGhpc1snZ2xvYmFsJ11bJ1dlYlNvY2tldCddO2Vsc2V7aWYoKF8weDFkYWNhZD10aGlzW18weGQwNmFlYSgweDEzNyldW18weGQwNmFlYSgweDE1NCldKSE9bnVsbCYmXzB4MWRhY2FkW18weGQwNmFlYSgweDE0YSldKV8weDM4N2Q2Mj0oXzB4NDYwNjhjPXRoaXNbXzB4ZDA2YWVhKDB4MTM3KV1bXzB4ZDA2YWVhKDB4MTU0KV0pPT1udWxsP3ZvaWQgMHgwOl8weDQ2MDY4Y1tfMHhkMDZhZWEoMHgxNGEpXTtlbHNlIHRyeXtsZXQgXzB4ZjgxZDM5PWF3YWl0IGltcG9ydChfMHhkMDZhZWEoMHgxMzgpKTtfMHgzODdkNjI9KGF3YWl0IGltcG9ydCgoYXdhaXQgaW1wb3J0KF8weGQwNmFlYSgweDEwOSkpKVtfMHhkMDZhZWEoMHgxMGEpXShfMHhmODFkMzlbJ2pvaW4nXSh0aGlzW18weGQwNmFlYSgweDEyZSldLF8weGQwNmFlYSgweDEwZCkpKVtfMHhkMDZhZWEoMHgxOWQpXSgpKSlbXzB4ZDA2YWVhKDB4MTkwKV07fWNhdGNoe3RyeXtfMHgzODdkNjI9cmVxdWlyZShyZXF1aXJlKF8weGQwNmFlYSgweDEzOCkpW18weGQwNmFlYSgweDE1MCldKHRoaXNbXzB4ZDA2YWVhKDB4MTJlKV0sJ3dzJykpO31jYXRjaHt0aHJvdyBuZXcgRXJyb3IoXzB4ZDA2YWVhKDB4ZDMpKTt9fX1yZXR1cm4gdGhpc1tfMHhkMDZhZWEoMHhlYSldPV8weDM4N2Q2MixfMHgzODdkNjI7fVtfMHgyMmFmNzYoMHgxNjYpXSgpe3ZhciBfMHgxNDFlN2Y9XzB4MjJhZjc2O3RoaXNbJ19jb25uZWN0aW5nJ118fHRoaXNbJ19jb25uZWN0ZWQnXXx8dGhpc1snX2Nvbm5lY3RBdHRlbXB0Q291bnQnXT49dGhpc1tfMHgxNDFlN2YoMHgxOTMpXXx8KHRoaXNbJ19hbGxvd2VkVG9Db25uZWN0T25TZW5kJ109ITB4MSx0aGlzWydfY29ubmVjdGluZyddPSEweDAsdGhpc1snX2Nvbm5lY3RBdHRlbXB0Q291bnQnXSsrLHRoaXNbXzB4MTQxZTdmKDB4MTA3KV09bmV3IFByb21pc2UoKF8weDUxNjE3ZSxfMHgzZjgyN2QpPT57dmFyIF8weDRlOWI1MD1fMHgxNDFlN2Y7dGhpc1tfMHg0ZTliNTAoMHgxNjEpXSgpW18weDRlOWI1MCgweDE1MildKF8weDJkMGFhOT0+e3ZhciBfMHgzY2FhZWI9XzB4NGU5YjUwO2xldCBfMHgyMzMyZjE9bmV3IF8weDJkMGFhOShfMHgzY2FhZWIoMHgxYTYpKyghdGhpc1tfMHgzY2FhZWIoMHhmYyldJiZ0aGlzW18weDNjYWFlYigweDEwMildP18weDNjYWFlYigweDE5Yik6dGhpc1tfMHgzY2FhZWIoMHhkMildKSsnOicrdGhpc1tfMHgzY2FhZWIoMHhmNSldKTtfMHgyMzMyZjFbXzB4M2NhYWViKDB4ZTApXT0oKT0+e3ZhciBfMHgzMmM1NzM9XzB4M2NhYWViO3RoaXNbXzB4MzJjNTczKDB4ZTcpXT0hMHgxLHRoaXNbXzB4MzJjNTczKDB4MTAxKV0oXzB4MjMzMmYxKSx0aGlzW18weDMyYzU3MygweGVjKV0oKSxfMHgzZjgyN2QobmV3IEVycm9yKCdsb2dnZXJcXFxceDIwd2Vic29ja2V0XFxcXHgyMGVycm9yJykpO30sXzB4MjMzMmYxWydvbm9wZW4nXT0oKT0+e3ZhciBfMHg0NWY4MWQ9XzB4M2NhYWViO3RoaXNbXzB4NDVmODFkKDB4ZmMpXXx8XzB4MjMzMmYxW18weDQ1ZjgxZCgweDE3NSldJiZfMHgyMzMyZjFbJ19zb2NrZXQnXVtfMHg0NWY4MWQoMHhlOSldJiZfMHgyMzMyZjFbXzB4NDVmODFkKDB4MTc1KV1bXzB4NDVmODFkKDB4ZTkpXSgpLF8weDUxNjE3ZShfMHgyMzMyZjEpO30sXzB4MjMzMmYxW18weDNjYWFlYigweGU4KV09KCk9Pnt2YXIgXzB4MzNkMTE5PV8weDNjYWFlYjt0aGlzW18weDMzZDExOSgweDFhYildPSEweDAsdGhpc1snX2Rpc3Bvc2VXZWJzb2NrZXQnXShfMHgyMzMyZjEpLHRoaXNbXzB4MzNkMTE5KDB4ZWMpXSgpO30sXzB4MjMzMmYxW18weDNjYWFlYigweDE1YSldPV8weDJjYzI1Zj0+e3ZhciBfMHg1ODllYTY9XzB4M2NhYWViO3RyeXtpZighKF8weDJjYzI1ZiE9bnVsbCYmXzB4MmNjMjVmW18weDU4OWVhNigweDE1NSldKXx8IXRoaXNbXzB4NTg5ZWE2KDB4MTg2KV0pcmV0dXJuO2xldCBfMHgyMWNiODU9SlNPTltfMHg1ODllYTYoMHgxNWUpXShfMHgyY2MyNWZbJ2RhdGEnXSk7dGhpc1tfMHg1ODllYTYoMHgxODYpXShfMHgyMWNiODVbJ21ldGhvZCddLF8weDIxY2I4NVtfMHg1ODllYTYoMHhmMCldLHRoaXNbXzB4NTg5ZWE2KDB4MTM3KV0sdGhpc1tfMHg1ODllYTYoMHhmYyldKTt9Y2F0Y2h7fX07fSlbJ3RoZW4nXShfMHg1YTg5MGY9Pih0aGlzWydfY29ubmVjdGVkJ109ITB4MCx0aGlzW18weDRlOWI1MCgweDEzNildPSEweDEsdGhpc1tfMHg0ZTliNTAoMHgxYWIpXT0hMHgxLHRoaXNbJ19hbGxvd2VkVG9TZW5kJ109ITB4MCx0aGlzW18weDRlOWI1MCgweGVkKV09MHgwLF8weDVhODkwZikpW18weDRlOWI1MCgweDExNCldKF8weDIzZTlkMT0+KHRoaXNbXzB4NGU5YjUwKDB4MTQ2KV09ITB4MSx0aGlzWydfY29ubmVjdGluZyddPSEweDEsY29uc29sZVtfMHg0ZTliNTAoMHgxODgpXShfMHg0ZTliNTAoMHgxODIpK3RoaXNbXzB4NGU5YjUwKDB4MTYyKV0pLF8weDNmODI3ZChuZXcgRXJyb3IoXzB4NGU5YjUwKDB4MTZmKSsoXzB4MjNlOWQxJiZfMHgyM2U5ZDFbJ21lc3NhZ2UnXSkpKSkpO30pKTt9W18weDIyYWY3NigweDEwMSldKF8weDI1YTFkMCl7dmFyIF8weDNkZDE5Mz1fMHgyMmFmNzY7dGhpc1tfMHgzZGQxOTMoMHgxNDYpXT0hMHgxLHRoaXNbXzB4M2RkMTkzKDB4MTM2KV09ITB4MTt0cnl7XzB4MjVhMWQwW18weDNkZDE5MygweGU4KV09bnVsbCxfMHgyNWExZDBbJ29uZXJyb3InXT1udWxsLF8weDI1YTFkMFsnb25vcGVuJ109bnVsbDt9Y2F0Y2h7fXRyeXtfMHgyNWExZDBbJ3JlYWR5U3RhdGUnXTwweDImJl8weDI1YTFkMFsnY2xvc2UnXSgpO31jYXRjaHt9fVtfMHgyMmFmNzYoMHhlYyldKCl7dmFyIF8weGNiMjU1ND1fMHgyMmFmNzY7Y2xlYXJUaW1lb3V0KHRoaXNbXzB4Y2IyNTU0KDB4MTgxKV0pLCEodGhpc1tfMHhjYjI1NTQoMHhlZCldPj10aGlzW18weGNiMjU1NCgweDE5MyldKSYmKHRoaXNbXzB4Y2IyNTU0KDB4MTgxKV09c2V0VGltZW91dCgoKT0+e3ZhciBfMHg1MGU4ZWE9XzB4Y2IyNTU0LF8weDRiZjUyNzt0aGlzW18weDUwZThlYSgweDE0NildfHx0aGlzW18weDUwZThlYSgweDEzNildfHwodGhpc1tfMHg1MGU4ZWEoMHgxNjYpXSgpLChfMHg0YmY1Mjc9dGhpc1tfMHg1MGU4ZWEoMHgxMDcpXSk9PW51bGx8fF8weDRiZjUyN1tfMHg1MGU4ZWEoMHgxMTQpXSgoKT0+dGhpc1tfMHg1MGU4ZWEoMHhlYyldKCkpKTt9LDB4MWY0KSx0aGlzWydfcmVjb25uZWN0VGltZW91dCddW18weGNiMjU1NCgweGU5KV0mJnRoaXNbXzB4Y2IyNTU0KDB4MTgxKV1bXzB4Y2IyNTU0KDB4ZTkpXSgpKTt9YXN5bmNbXzB4MjJhZjc2KDB4MTRiKV0oXzB4NTdiYTI1KXt2YXIgXzB4NGEwMmE2PV8weDIyYWY3Njt0cnl7aWYoIXRoaXNbXzB4NGEwMmE2KDB4ZTcpXSlyZXR1cm47dGhpc1tfMHg0YTAyYTYoMHgxYWIpXSYmdGhpc1tfMHg0YTAyYTYoMHgxNjYpXSgpLChhd2FpdCB0aGlzWydfd3MnXSlbJ3NlbmQnXShKU09OW18weDRhMDJhNigweDE3NCldKF8weDU3YmEyNSkpO31jYXRjaChfMHgyYTc5NGIpe2NvbnNvbGVbJ3dhcm4nXSh0aGlzWydfc2VuZEVycm9yTWVzc2FnZSddKyc6XFxcXHgyMCcrKF8weDJhNzk0YiYmXzB4MmE3OTRiW18weDRhMDJhNigweDExMyldKSksdGhpc1snX2FsbG93ZWRUb1NlbmQnXT0hMHgxLHRoaXNbXzB4NGEwMmE2KDB4ZWMpXSgpO319fTtmdW5jdGlvbiBxKF8weDFiMDA3NCxfMHhmMjE3OWMsXzB4MjBkY2RkLF8weDRmMjE5NSxfMHg1OTc5N2UsXzB4NTQ1ZTNhLF8weDQxYThiMixfMHg0MzQ3MDY9aWUpe3ZhciBfMHgyNmZmYTk9XzB4MjJhZjc2O2xldCBfMHg1MzUyNTc9XzB4MjBkY2RkWydzcGxpdCddKCcsJylbXzB4MjZmZmE5KDB4MTdmKV0oXzB4MjY4M2RkPT57dmFyIF8weDkwNzRhPV8weDI2ZmZhOSxfMHg2ODNlYWYsXzB4MWM4MjU5LF8weDE0YzlkMSxfMHgxNGI1ZDQ7dHJ5e2lmKCFfMHgxYjAwNzRbXzB4OTA3NGEoMHgxMTIpXSl7bGV0IF8weDJjMGJhZj0oKF8weDFjODI1OT0oXzB4NjgzZWFmPV8weDFiMDA3NFtfMHg5MDc0YSgweDE1NCldKT09bnVsbD92b2lkIDB4MDpfMHg2ODNlYWZbJ3ZlcnNpb25zJ10pPT1udWxsP3ZvaWQgMHgwOl8weDFjODI1OVtfMHg5MDc0YSgweDE5NCldKXx8KChfMHgxNGI1ZDQ9KF8weDE0YzlkMT1fMHgxYjAwNzRbJ3Byb2Nlc3MnXSk9PW51bGw/dm9pZCAweDA6XzB4MTRjOWQxW18weDkwNzRhKDB4MWEwKV0pPT1udWxsP3ZvaWQgMHgwOl8weDE0YjVkNFtfMHg5MDc0YSgweDEyNSldKT09PV8weDkwNzRhKDB4MThhKTsoXzB4NTk3OTdlPT09J25leHQuanMnfHxfMHg1OTc5N2U9PT1fMHg5MDc0YSgweDEyYyl8fF8weDU5Nzk3ZT09PV8weDkwNzRhKDB4MWFlKXx8XzB4NTk3OTdlPT09XzB4OTA3NGEoMHhjZikpJiYoXzB4NTk3OTdlKz1fMHgyYzBiYWY/XzB4OTA3NGEoMHhlYik6J1xcXFx4MjBicm93c2VyJyksXzB4MWIwMDc0W18weDkwNzRhKDB4MTEyKV09eydpZCc6K25ldyBEYXRlKCksJ3Rvb2wnOl8weDU5Nzk3ZX0sXzB4NDFhOGIyJiZfMHg1OTc5N2UmJiFfMHgyYzBiYWYmJmNvbnNvbGVbJ2xvZyddKCclY1xcXFx4MjBDb25zb2xlXFxcXHgyME5pbmphXFxcXHgyMGV4dGVuc2lvblxcXFx4MjBpc1xcXFx4MjBjb25uZWN0ZWRcXFxceDIwdG9cXFxceDIwJysoXzB4NTk3OTdlW18weDkwNzRhKDB4MTIzKV0oMHgwKVtfMHg5MDc0YSgweDE4YyldKCkrXzB4NTk3OTdlWydzdWJzdHInXSgweDEpKSsnLCcsJ2JhY2tncm91bmQ6XFxcXHgyMHJnYigzMCwzMCwzMCk7XFxcXHgyMGNvbG9yOlxcXFx4MjByZ2IoMjU1LDIxMyw5MiknLF8weDkwNzRhKDB4MTU2KSk7fWxldCBfMHhkZGU5M2U9bmV3IHgoXzB4MWIwMDc0LF8weGYyMTc5YyxfMHgyNjgzZGQsXzB4NGYyMTk1LF8weDU0NWUzYSxfMHg0MzQ3MDYpO3JldHVybiBfMHhkZGU5M2VbXzB4OTA3NGEoMHgxNGIpXVsnYmluZCddKF8weGRkZTkzZSk7fWNhdGNoKF8weDRkNDZhNSl7cmV0dXJuIGNvbnNvbGVbXzB4OTA3NGEoMHgxODgpXShfMHg5MDc0YSgweDFhNCksXzB4NGQ0NmE1JiZfMHg0ZDQ2YTVbXzB4OTA3NGEoMHgxMTMpXSksKCk9Pnt9O319KTtyZXR1cm4gXzB4NDFiYWZmPT5fMHg1MzUyNTdbJ2ZvckVhY2gnXShfMHg0ODRmNjg9Pl8weDQ4NGY2OChfMHg0MWJhZmYpKTt9ZnVuY3Rpb24gaWUoXzB4NTNhYjEwLF8weDRkOTU1YSxfMHg1NDc5OWEsXzB4NDVjNzVlKXt2YXIgXzB4MThhZjI3PV8weDIyYWY3NjtfMHg0NWM3NWUmJl8weDUzYWIxMD09PV8weDE4YWYyNygweGQ1KSYmXzB4NTQ3OTlhWydsb2NhdGlvbiddW18weDE4YWYyNygweGQ1KV0oKTt9ZnVuY3Rpb24gYihfMHgxZWU2N2Upe3ZhciBfMHg0ODc2NjE9XzB4MjJhZjc2LF8weDM1OTk3MyxfMHgyZTY2OGU7bGV0IF8weDQzMTU2OD1mdW5jdGlvbihfMHhkMTQwMDEsXzB4NGRkZDc3KXtyZXR1cm4gXzB4NGRkZDc3LV8weGQxNDAwMTt9LF8weDE0OGM4MztpZihfMHgxZWU2N2VbXzB4NDg3NjYxKDB4MWE5KV0pXzB4MTQ4YzgzPWZ1bmN0aW9uKCl7dmFyIF8weDM5MjMxYz1fMHg0ODc2NjE7cmV0dXJuIF8weDFlZTY3ZVtfMHgzOTIzMWMoMHgxYTkpXVtfMHgzOTIzMWMoMHgxYTcpXSgpO307ZWxzZXtpZihfMHgxZWU2N2VbXzB4NDg3NjYxKDB4MTU0KV0mJl8weDFlZTY3ZVtfMHg0ODc2NjEoMHgxNTQpXVtfMHg0ODc2NjEoMHhmNyldJiYoKF8weDJlNjY4ZT0oXzB4MzU5OTczPV8weDFlZTY3ZVsncHJvY2VzcyddKT09bnVsbD92b2lkIDB4MDpfMHgzNTk5NzNbXzB4NDg3NjYxKDB4MWEwKV0pPT1udWxsP3ZvaWQgMHgwOl8weDJlNjY4ZVtfMHg0ODc2NjEoMHgxMjUpXSkhPT1fMHg0ODc2NjEoMHgxOGEpKV8weDE0OGM4Mz1mdW5jdGlvbigpe3ZhciBfMHgxNmQ0YjI9XzB4NDg3NjYxO3JldHVybiBfMHgxZWU2N2VbXzB4MTZkNGIyKDB4MTU0KV1bXzB4MTZkNGIyKDB4ZjcpXSgpO30sXzB4NDMxNTY4PWZ1bmN0aW9uKF8weDM5OWQ4MSxfMHg0YWFjNzkpe3JldHVybiAweDNlOCooXzB4NGFhYzc5WzB4MF0tXzB4Mzk5ZDgxWzB4MF0pKyhfMHg0YWFjNzlbMHgxXS1fMHgzOTlkODFbMHgxXSkvMHhmNDI0MDt9O2Vsc2UgdHJ5e2xldCB7cGVyZm9ybWFuY2U6XzB4NDQwYTFhfT1yZXF1aXJlKCdwZXJmX2hvb2tzJyk7XzB4MTQ4YzgzPWZ1bmN0aW9uKCl7dmFyIF8weDM0MzZmZj1fMHg0ODc2NjE7cmV0dXJuIF8weDQ0MGExYVtfMHgzNDM2ZmYoMHgxYTcpXSgpO307fWNhdGNoe18weDE0OGM4Mz1mdW5jdGlvbigpe3JldHVybituZXcgRGF0ZSgpO307fX1yZXR1cm57J2VsYXBzZWQnOl8weDQzMTU2OCwndGltZVN0YW1wJzpfMHgxNDhjODMsJ25vdyc6KCk9PkRhdGVbXzB4NDg3NjYxKDB4MWE3KV0oKX07fWZ1bmN0aW9uIFgoXzB4M2VlMjcxLF8weDM5Yzg4YSxfMHg0NDUzMDQpe3ZhciBfMHg0OWJhN2U9XzB4MjJhZjc2LF8weDFkNzZkYixfMHg0NGI0NTIsXzB4NGNhNmZmLF8weDQ0MGFiOSxfMHg1MDhkMzQ7aWYoXzB4M2VlMjcxW18weDQ5YmE3ZSgweDE3ZCldIT09dm9pZCAweDApcmV0dXJuIF8weDNlZTI3MVtfMHg0OWJhN2UoMHgxN2QpXTtsZXQgXzB4NTVlMTVjPSgoXzB4NDRiNDUyPShfMHgxZDc2ZGI9XzB4M2VlMjcxW18weDQ5YmE3ZSgweDE1NCldKT09bnVsbD92b2lkIDB4MDpfMHgxZDc2ZGJbXzB4NDliYTdlKDB4MTYwKV0pPT1udWxsP3ZvaWQgMHgwOl8weDQ0YjQ1MltfMHg0OWJhN2UoMHgxOTQpXSl8fCgoXzB4NDQwYWI5PShfMHg0Y2E2ZmY9XzB4M2VlMjcxWydwcm9jZXNzJ10pPT1udWxsP3ZvaWQgMHgwOl8weDRjYTZmZltfMHg0OWJhN2UoMHgxYTApXSk9PW51bGw/dm9pZCAweDA6XzB4NDQwYWI5W18weDQ5YmE3ZSgweDEyNSldKT09PV8weDQ5YmE3ZSgweDE4YSk7cmV0dXJuIF8weDU1ZTE1YyYmXzB4NDQ1MzA0PT09XzB4NDliYTdlKDB4MTQzKT9fMHgzZWUyNzFbJ19jb25zb2xlTmluamFBbGxvd2VkVG9TdGFydCddPSEweDE6XzB4M2VlMjcxW18weDQ5YmE3ZSgweDE3ZCldPV8weDU1ZTE1Y3x8IV8weDM5Yzg4YXx8KChfMHg1MDhkMzQ9XzB4M2VlMjcxWydsb2NhdGlvbiddKT09bnVsbD92b2lkIDB4MDpfMHg1MDhkMzRbXzB4NDliYTdlKDB4MThkKV0pJiZfMHgzOWM4OGFbJ2luY2x1ZGVzJ10oXzB4M2VlMjcxW18weDQ5YmE3ZSgweDEwZSldW18weDQ5YmE3ZSgweDE4ZCldKSxfMHgzZWUyNzFbXzB4NDliYTdlKDB4MTdkKV07fWZ1bmN0aW9uIEgoXzB4M2UwYTk5LF8weDViNGYyYixfMHg1ZTA5YjUsXzB4NDk1ZjIxKXt2YXIgXzB4MmFlMGY3PV8weDIyYWY3NjtfMHgzZTBhOTk9XzB4M2UwYTk5LF8weDViNGYyYj1fMHg1YjRmMmIsXzB4NWUwOWI1PV8weDVlMDliNSxfMHg0OTVmMjE9XzB4NDk1ZjIxO2xldCBfMHgxYmI5YmY9YihfMHgzZTBhOTkpLF8weDIzYWU5OT1fMHgxYmI5YmZbXzB4MmFlMGY3KDB4MTZkKV0sXzB4Mzk5ZGZiPV8weDFiYjliZltfMHgyYWUwZjcoMHgxN2EpXTtjbGFzcyBfMHg0OTNjMDV7Y29uc3RydWN0b3IoKXt2YXIgXzB4NDE3MzMwPV8weDJhZTBmNzt0aGlzW18weDQxNzMzMCgweGRhKV09L14oPyEoPzpkb3xpZnxpbnxmb3J8bGV0fG5ld3x0cnl8dmFyfGNhc2V8ZWxzZXxlbnVtfGV2YWx8ZmFsc2V8bnVsbHx0aGlzfHRydWV8dm9pZHx3aXRofGJyZWFrfGNhdGNofGNsYXNzfGNvbnN0fHN1cGVyfHRocm93fHdoaWxlfHlpZWxkfGRlbGV0ZXxleHBvcnR8aW1wb3J0fHB1YmxpY3xyZXR1cm58c3RhdGljfHN3aXRjaHx0eXBlb2Z8ZGVmYXVsdHxleHRlbmRzfGZpbmFsbHl8cGFja2FnZXxwcml2YXRlfGNvbnRpbnVlfGRlYnVnZ2VyfGZ1bmN0aW9ufGFyZ3VtZW50c3xpbnRlcmZhY2V8cHJvdGVjdGVkfGltcGxlbWVudHN8aW5zdGFuY2VvZikkKVtfJGEtekEtWlxcXFx4QTAtXFxcXHVGRkZGXVtfJGEtekEtWjAtOVxcXFx4QTAtXFxcXHVGRkZGXSokLyx0aGlzW18weDQxNzMzMCgweDEwZildPS9eKDB8WzEtOV1bMC05XSopJC8sdGhpc1tfMHg0MTczMzAoMHgxYjIpXT0vJyhbXlxcXFxcXFxcJ118XFxcXFxcXFwnKSonLyx0aGlzW18weDQxNzMzMCgweDExYildPV8weDNlMGE5OVsndW5kZWZpbmVkJ10sdGhpc1tfMHg0MTczMzAoMHgxNDUpXT1fMHgzZTBhOTlbXzB4NDE3MzMwKDB4ZDQpXSx0aGlzWydfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJ109T2JqZWN0W18weDQxNzMzMCgweDEwMyldLHRoaXNbXzB4NDE3MzMwKDB4MTVjKV09T2JqZWN0W18weDQxNzMzMCgweGU1KV0sdGhpc1tfMHg0MTczMzAoMHgxMmQpXT1fMHgzZTBhOTlbXzB4NDE3MzMwKDB4MTg1KV0sdGhpc1tfMHg0MTczMzAoMHgxOWMpXT1SZWdFeHBbXzB4NDE3MzMwKDB4ZjEpXVtfMHg0MTczMzAoMHgxOWQpXSx0aGlzW18weDQxNzMzMCgweDEzZSldPURhdGVbJ3Byb3RvdHlwZSddW18weDQxNzMzMCgweDE5ZCldO31bXzB4MmFlMGY3KDB4MWFjKV0oXzB4YzQ2YTZmLF8weDE1ZjM5YSxfMHg0ZGE1MWQsXzB4NDA4NWZhKXt2YXIgXzB4MjY3ZGIyPV8weDJhZTBmNyxfMHg1MDQ4ZGY9dGhpcyxfMHgxM2YxYTc9XzB4NGRhNTFkW18weDI2N2RiMigweGRlKV07ZnVuY3Rpb24gXzB4MmY2ZTIxKF8weGM5YjBhYSxfMHg0NzI1ZDAsXzB4MmY1ZjFhKXt2YXIgXzB4MjQwMjQ4PV8weDI2N2RiMjtfMHg0NzI1ZDBbXzB4MjQwMjQ4KDB4ZmYpXT1fMHgyNDAyNDgoMHgxMzUpLF8weDQ3MjVkMFtfMHgyNDAyNDgoMHhlZildPV8weGM5YjBhYVtfMHgyNDAyNDgoMHgxMTMpXSxfMHgxNjg0NTY9XzB4MmY1ZjFhW18weDI0MDI0OCgweDE5NCldWydjdXJyZW50J10sXzB4MmY1ZjFhW18weDI0MDI0OCgweDE5NCldW18weDI0MDI0OCgweDE0MildPV8weDQ3MjVkMCxfMHg1MDQ4ZGZbJ190cmVlTm9kZVByb3BlcnRpZXNCZWZvcmVGdWxsVmFsdWUnXShfMHg0NzI1ZDAsXzB4MmY1ZjFhKTt9dHJ5e18weDRkYTUxZFsnbGV2ZWwnXSsrLF8weDRkYTUxZFtfMHgyNjdkYjIoMHhkZSldJiZfMHg0ZGE1MWRbJ2F1dG9FeHBhbmRQcmV2aW91c09iamVjdHMnXVtfMHgyNjdkYjIoMHgxYmEpXShfMHgxNWYzOWEpO3ZhciBfMHgxM2NjNzksXzB4NTA5MmViLF8weDI3M2E4YixfMHgyYzhiMTAsXzB4MWI3ZmY9W10sXzB4M2JhMWY1PVtdLF8weDQyNzI1YixfMHgxZWQ3NGI9dGhpc1tfMHgyNjdkYjIoMHgxNzgpXShfMHgxNWYzOWEpLF8weDQwODdhMj1fMHgxZWQ3NGI9PT1fMHgyNjdkYjIoMHgxMDQpLF8weGJjNTljNz0hMHgxLF8weDQ4ZTg4MD1fMHgxZWQ3NGI9PT1fMHgyNjdkYjIoMHgxNWYpLF8weDNkNzk2YT10aGlzW18weDI2N2RiMigweDE2YSldKF8weDFlZDc0YiksXzB4MzU2NWQxPXRoaXNbXzB4MjY3ZGIyKDB4ZjYpXShfMHgxZWQ3NGIpLF8weDUyYzg2OD1fMHgzZDc5NmF8fF8weDM1NjVkMSxfMHg1NTE4ZGQ9e30sXzB4Mjg4ZmJmPTB4MCxfMHg1MDYzZWM9ITB4MSxfMHgxNjg0NTYsXzB4Mjk1NzM5PS9eKChbMS05XXsxfVswLTldKil8MCkkLztpZihfMHg0ZGE1MWRbJ2RlcHRoJ10pe2lmKF8weDQwODdhMil7aWYoXzB4NTA5MmViPV8weDE1ZjM5YVsnbGVuZ3RoJ10sXzB4NTA5MmViPl8weDRkYTUxZFtfMHgyNjdkYjIoMHgxYjcpXSl7Zm9yKF8weDI3M2E4Yj0weDAsXzB4MmM4YjEwPV8weDRkYTUxZFtfMHgyNjdkYjIoMHgxYjcpXSxfMHgxM2NjNzk9XzB4MjczYThiO18weDEzY2M3OTxfMHgyYzhiMTA7XzB4MTNjYzc5KyspXzB4M2JhMWY1W18weDI2N2RiMigweDFiYSldKF8weDUwNDhkZlsnX2FkZFByb3BlcnR5J10oXzB4MWI3ZmYsXzB4MTVmMzlhLF8weDFlZDc0YixfMHgxM2NjNzksXzB4NGRhNTFkKSk7XzB4YzQ2YTZmW18weDI2N2RiMigweDFiMSldPSEweDA7fWVsc2V7Zm9yKF8weDI3M2E4Yj0weDAsXzB4MmM4YjEwPV8weDUwOTJlYixfMHgxM2NjNzk9XzB4MjczYThiO18weDEzY2M3OTxfMHgyYzhiMTA7XzB4MTNjYzc5KyspXzB4M2JhMWY1WydwdXNoJ10oXzB4NTA0OGRmW18weDI2N2RiMigweGZiKV0oXzB4MWI3ZmYsXzB4MTVmMzlhLF8weDFlZDc0YixfMHgxM2NjNzksXzB4NGRhNTFkKSk7fV8weDRkYTUxZFsnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnXSs9XzB4M2JhMWY1W18weDI2N2RiMigweDE2NyldO31pZighKF8weDFlZDc0Yj09PSdudWxsJ3x8XzB4MWVkNzRiPT09J3VuZGVmaW5lZCcpJiYhXzB4M2Q3OTZhJiZfMHgxZWQ3NGIhPT0nU3RyaW5nJyYmXzB4MWVkNzRiIT09XzB4MjY3ZGIyKDB4ZmUpJiZfMHgxZWQ3NGIhPT1fMHgyNjdkYjIoMHhjZCkpe3ZhciBfMHg1YzMwOGI9XzB4NDA4NWZhWydwcm9wcyddfHxfMHg0ZGE1MWRbXzB4MjY3ZGIyKDB4MTY1KV07aWYodGhpc1tfMHgyNjdkYjIoMHgxMmIpXShfMHgxNWYzOWEpPyhfMHgxM2NjNzk9MHgwLF8weDE1ZjM5YVtfMHgyNjdkYjIoMHgxOGUpXShmdW5jdGlvbihfMHgzNGE3Yjgpe3ZhciBfMHgyNzlkZjg9XzB4MjY3ZGIyO2lmKF8weDI4OGZiZisrLF8weDRkYTUxZFsnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnXSsrLF8weDI4OGZiZj5fMHg1YzMwOGIpe18weDUwNjNlYz0hMHgwO3JldHVybjt9aWYoIV8weDRkYTUxZFtfMHgyNzlkZjgoMHgxNDgpXSYmXzB4NGRhNTFkW18weDI3OWRmOCgweGRlKV0mJl8weDRkYTUxZFtfMHgyNzlkZjgoMHgxMjIpXT5fMHg0ZGE1MWRbXzB4Mjc5ZGY4KDB4MTI4KV0pe18weDUwNjNlYz0hMHgwO3JldHVybjt9XzB4M2JhMWY1W18weDI3OWRmOCgweDFiYSldKF8weDUwNDhkZltfMHgyNzlkZjgoMHhmYildKF8weDFiN2ZmLF8weDE1ZjM5YSxfMHgyNzlkZjgoMHhlMyksXzB4MTNjYzc5KyssXzB4NGRhNTFkLGZ1bmN0aW9uKF8weDRiMTdkOCl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIF8weDRiMTdkODt9O30oXzB4MzRhN2I4KSkpO30pKTp0aGlzW18weDI2N2RiMigweDExNSldKF8weDE1ZjM5YSkmJl8weDE1ZjM5YVsnZm9yRWFjaCddKGZ1bmN0aW9uKF8weDFkNDc1YixfMHgyMjgxYmMpe3ZhciBfMHg0YTM5Mzk9XzB4MjY3ZGIyO2lmKF8weDI4OGZiZisrLF8weDRkYTUxZFtfMHg0YTM5MzkoMHgxMjIpXSsrLF8weDI4OGZiZj5fMHg1YzMwOGIpe18weDUwNjNlYz0hMHgwO3JldHVybjt9aWYoIV8weDRkYTUxZFsnaXNFeHByZXNzaW9uVG9FdmFsdWF0ZSddJiZfMHg0ZGE1MWRbXzB4NGEzOTM5KDB4ZGUpXSYmXzB4NGRhNTFkW18weDRhMzkzOSgweDEyMildPl8weDRkYTUxZFtfMHg0YTM5MzkoMHgxMjgpXSl7XzB4NTA2M2VjPSEweDA7cmV0dXJuO312YXIgXzB4MzA4MDliPV8weDIyODFiY1tfMHg0YTM5MzkoMHgxOWQpXSgpO18weDMwODA5YltfMHg0YTM5MzkoMHgxNjcpXT4weDY0JiYoXzB4MzA4MDliPV8weDMwODA5Ylsnc2xpY2UnXSgweDAsMHg2NCkrJy4uLicpLF8weDNiYTFmNVtfMHg0YTM5MzkoMHgxYmEpXShfMHg1MDQ4ZGZbXzB4NGEzOTM5KDB4ZmIpXShfMHgxYjdmZixfMHgxNWYzOWEsXzB4NGEzOTM5KDB4MTc2KSxfMHgzMDgwOWIsXzB4NGRhNTFkLGZ1bmN0aW9uKF8weDNiNmQ1NCl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIF8weDNiNmQ1NDt9O30oXzB4MWQ0NzViKSkpO30pLCFfMHhiYzU5Yzcpe3RyeXtmb3IoXzB4NDI3MjViIGluIF8weDE1ZjM5YSlpZighKF8weDQwODdhMiYmXzB4Mjk1NzM5W18weDI2N2RiMigweDEzNCldKF8weDQyNzI1YikpJiYhdGhpc1tfMHgyNjdkYjIoMHgxNGYpXShfMHgxNWYzOWEsXzB4NDI3MjViLF8weDRkYTUxZCkpe2lmKF8weDI4OGZiZisrLF8weDRkYTUxZFtfMHgyNjdkYjIoMHgxMjIpXSsrLF8weDI4OGZiZj5fMHg1YzMwOGIpe18weDUwNjNlYz0hMHgwO2JyZWFrO31pZighXzB4NGRhNTFkWydpc0V4cHJlc3Npb25Ub0V2YWx1YXRlJ10mJl8weDRkYTUxZFtfMHgyNjdkYjIoMHhkZSldJiZfMHg0ZGE1MWRbXzB4MjY3ZGIyKDB4MTIyKV0+XzB4NGRhNTFkWydhdXRvRXhwYW5kTGltaXQnXSl7XzB4NTA2M2VjPSEweDA7YnJlYWs7fV8weDNiYTFmNVtfMHgyNjdkYjIoMHgxYmEpXShfMHg1MDQ4ZGZbXzB4MjY3ZGIyKDB4MTI0KV0oXzB4MWI3ZmYsXzB4NTUxOGRkLF8weDE1ZjM5YSxfMHgxZWQ3NGIsXzB4NDI3MjViLF8weDRkYTUxZCkpO319Y2F0Y2h7fWlmKF8weDU1MThkZFtfMHgyNjdkYjIoMHgxNDEpXT0hMHgwLF8weDQ4ZTg4MCYmKF8weDU1MThkZFtfMHgyNjdkYjIoMHhkNildPSEweDApLCFfMHg1MDYzZWMpe3ZhciBfMHgxNDM5NDM9W11bJ2NvbmNhdCddKHRoaXNbXzB4MjY3ZGIyKDB4MTVjKV0oXzB4MTVmMzlhKSlbXzB4MjY3ZGIyKDB4MTExKV0odGhpc1snX2dldE93blByb3BlcnR5U3ltYm9scyddKF8weDE1ZjM5YSkpO2ZvcihfMHgxM2NjNzk9MHgwLF8weDUwOTJlYj1fMHgxNDM5NDNbXzB4MjY3ZGIyKDB4MTY3KV07XzB4MTNjYzc5PF8weDUwOTJlYjtfMHgxM2NjNzkrKylpZihfMHg0MjcyNWI9XzB4MTQzOTQzW18weDEzY2M3OV0sIShfMHg0MDg3YTImJl8weDI5NTczOVtfMHgyNjdkYjIoMHgxMzQpXShfMHg0MjcyNWJbXzB4MjY3ZGIyKDB4MTlkKV0oKSkpJiYhdGhpc1snX2JsYWNrbGlzdGVkUHJvcGVydHknXShfMHgxNWYzOWEsXzB4NDI3MjViLF8weDRkYTUxZCkmJiFfMHg1NTE4ZGRbXzB4MjY3ZGIyKDB4MTAwKStfMHg0MjcyNWJbXzB4MjY3ZGIyKDB4MTlkKV0oKV0pe2lmKF8weDI4OGZiZisrLF8weDRkYTUxZFtfMHgyNjdkYjIoMHgxMjIpXSsrLF8weDI4OGZiZj5fMHg1YzMwOGIpe18weDUwNjNlYz0hMHgwO2JyZWFrO31pZighXzB4NGRhNTFkW18weDI2N2RiMigweDE0OCldJiZfMHg0ZGE1MWRbXzB4MjY3ZGIyKDB4ZGUpXSYmXzB4NGRhNTFkW18weDI2N2RiMigweDEyMildPl8weDRkYTUxZFtfMHgyNjdkYjIoMHgxMjgpXSl7XzB4NTA2M2VjPSEweDA7YnJlYWs7fV8weDNiYTFmNVsncHVzaCddKF8weDUwNDhkZltfMHgyNjdkYjIoMHgxMjQpXShfMHgxYjdmZixfMHg1NTE4ZGQsXzB4MTVmMzlhLF8weDFlZDc0YixfMHg0MjcyNWIsXzB4NGRhNTFkKSk7fX19fX1pZihfMHhjNDZhNmZbXzB4MjY3ZGIyKDB4ZmYpXT1fMHgxZWQ3NGIsXzB4NTJjODY4PyhfMHhjNDZhNmZbXzB4MjY3ZGIyKDB4MTE4KV09XzB4MTVmMzlhWyd2YWx1ZU9mJ10oKSx0aGlzWydfY2FwSWZTdHJpbmcnXShfMHgxZWQ3NGIsXzB4YzQ2YTZmLF8weDRkYTUxZCxfMHg0MDg1ZmEpKTpfMHgxZWQ3NGI9PT1fMHgyNjdkYjIoMHgxNmMpP18weGM0NmE2ZltfMHgyNjdkYjIoMHgxMTgpXT10aGlzWydfZGF0ZVRvU3RyaW5nJ11bXzB4MjY3ZGIyKDB4MTMzKV0oXzB4MTVmMzlhKTpfMHgxZWQ3NGI9PT1fMHgyNjdkYjIoMHhjZCk/XzB4YzQ2YTZmW18weDI2N2RiMigweDExOCldPV8weDE1ZjM5YVsndG9TdHJpbmcnXSgpOl8weDFlZDc0Yj09PSdSZWdFeHAnP18weGM0NmE2ZlsndmFsdWUnXT10aGlzW18weDI2N2RiMigweDE5YyldW18weDI2N2RiMigweDEzMyldKF8weDE1ZjM5YSk6XzB4MWVkNzRiPT09J3N5bWJvbCcmJnRoaXNbXzB4MjY3ZGIyKDB4MTJkKV0/XzB4YzQ2YTZmW18weDI2N2RiMigweDExOCldPXRoaXNbJ19TeW1ib2wnXVtfMHgyNjdkYjIoMHhmMSldW18weDI2N2RiMigweDE5ZCldW18weDI2N2RiMigweDEzMyldKF8weDE1ZjM5YSk6IV8weDRkYTUxZFtfMHgyNjdkYjIoMHgxNTMpXSYmIShfMHgxZWQ3NGI9PT1fMHgyNjdkYjIoMHgxNWQpfHxfMHgxZWQ3NGI9PT1fMHgyNjdkYjIoMHgxNzcpKSYmKGRlbGV0ZSBfMHhjNDZhNmZbJ3ZhbHVlJ10sXzB4YzQ2YTZmW18weDI2N2RiMigweDE0MCldPSEweDApLF8weDUwNjNlYyYmKF8weGM0NmE2ZlsnY2FwcGVkUHJvcHMnXT0hMHgwKSxfMHgxNjg0NTY9XzB4NGRhNTFkW18weDI2N2RiMigweDE5NCldW18weDI2N2RiMigweDE0MildLF8weDRkYTUxZFtfMHgyNjdkYjIoMHgxOTQpXVtfMHgyNjdkYjIoMHgxNDIpXT1fMHhjNDZhNmYsdGhpc1tfMHgyNjdkYjIoMHgxNWIpXShfMHhjNDZhNmYsXzB4NGRhNTFkKSxfMHgzYmExZjVbJ2xlbmd0aCddKXtmb3IoXzB4MTNjYzc5PTB4MCxfMHg1MDkyZWI9XzB4M2JhMWY1W18weDI2N2RiMigweDE2NyldO18weDEzY2M3OTxfMHg1MDkyZWI7XzB4MTNjYzc5KyspXzB4M2JhMWY1W18weDEzY2M3OV0oXzB4MTNjYzc5KTt9XzB4MWI3ZmZbXzB4MjY3ZGIyKDB4MTY3KV0mJihfMHhjNDZhNmZbXzB4MjY3ZGIyKDB4MTY1KV09XzB4MWI3ZmYpO31jYXRjaChfMHg0ZTc5Yzcpe18weDJmNmUyMShfMHg0ZTc5YzcsXzB4YzQ2YTZmLF8weDRkYTUxZCk7fXJldHVybiB0aGlzW18weDI2N2RiMigweDFiOCldKF8weDE1ZjM5YSxfMHhjNDZhNmYpLHRoaXNbXzB4MjY3ZGIyKDB4ZjMpXShfMHhjNDZhNmYsXzB4NGRhNTFkKSxfMHg0ZGE1MWRbXzB4MjY3ZGIyKDB4MTk0KV1bXzB4MjY3ZGIyKDB4MTQyKV09XzB4MTY4NDU2LF8weDRkYTUxZFtfMHgyNjdkYjIoMHgxNzkpXS0tLF8weDRkYTUxZFtfMHgyNjdkYjIoMHhkZSldPV8weDEzZjFhNyxfMHg0ZGE1MWRbXzB4MjY3ZGIyKDB4ZGUpXSYmXzB4NGRhNTFkWydhdXRvRXhwYW5kUHJldmlvdXNPYmplY3RzJ11bXzB4MjY3ZGIyKDB4MWFmKV0oKSxfMHhjNDZhNmY7fVtfMHgyYWUwZjcoMHgxNGUpXShfMHg2NzQ0MjMpe3JldHVybiBPYmplY3RbJ2dldE93blByb3BlcnR5U3ltYm9scyddP09iamVjdFsnZ2V0T3duUHJvcGVydHlTeW1ib2xzJ10oXzB4Njc0NDIzKTpbXTt9W18weDJhZTBmNygweDEyYildKF8weDUwMDAwMil7dmFyIF8weDViNjE1Zj1fMHgyYWUwZjc7cmV0dXJuISEoXzB4NTAwMDAyJiZfMHgzZTBhOTlbXzB4NWI2MTVmKDB4ZTMpXSYmdGhpc1tfMHg1YjYxNWYoMHgxYjApXShfMHg1MDAwMDIpPT09XzB4NWI2MTVmKDB4MWExKSYmXzB4NTAwMDAyWydmb3JFYWNoJ10pO31bJ19ibGFja2xpc3RlZFByb3BlcnR5J10oXzB4NGU2NTcwLF8weDM1OTBlNixfMHg1YWQ3ZGMpe3ZhciBfMHg0MjhkNjM9XzB4MmFlMGY3O3JldHVybiBfMHg1YWQ3ZGNbXzB4NDI4ZDYzKDB4MTg0KV0/dHlwZW9mIF8weDRlNjU3MFtfMHgzNTkwZTZdPT1fMHg0MjhkNjMoMHgxNWYpOiEweDE7fVtfMHgyYWUwZjcoMHgxNzgpXShfMHg3NWQ4NGIpe3ZhciBfMHg2NTdjOTg9XzB4MmFlMGY3LF8weDFjNDAwYz0nJztyZXR1cm4gXzB4MWM0MDBjPXR5cGVvZiBfMHg3NWQ4NGIsXzB4MWM0MDBjPT09XzB4NjU3Yzk4KDB4MTFmKT90aGlzW18weDY1N2M5OCgweDFiMCldKF8weDc1ZDg0Yik9PT1fMHg2NTdjOTgoMHgxYWEpP18weDFjNDAwYz0nYXJyYXknOnRoaXNbJ19vYmplY3RUb1N0cmluZyddKF8weDc1ZDg0Yik9PT1fMHg2NTdjOTgoMHhkYyk/XzB4MWM0MDBjPV8weDY1N2M5OCgweDE2Yyk6dGhpc1tfMHg2NTdjOTgoMHgxYjApXShfMHg3NWQ4NGIpPT09XzB4NjU3Yzk4KDB4MTA2KT9fMHgxYzQwMGM9XzB4NjU3Yzk4KDB4Y2QpOl8weDc1ZDg0Yj09PW51bGw/XzB4MWM0MDBjPV8weDY1N2M5OCgweDE1ZCk6XzB4NzVkODRiW18weDY1N2M5OCgweDEwOCldJiYoXzB4MWM0MDBjPV8weDc1ZDg0YltfMHg2NTdjOTgoMHgxMDgpXVtfMHg2NTdjOTgoMHgxNDkpXXx8XzB4MWM0MDBjKTpfMHgxYzQwMGM9PT0ndW5kZWZpbmVkJyYmdGhpc1tfMHg2NTdjOTgoMHgxNDUpXSYmXzB4NzVkODRiIGluc3RhbmNlb2YgdGhpc1tfMHg2NTdjOTgoMHgxNDUpXSYmKF8weDFjNDAwYz0nSFRNTEFsbENvbGxlY3Rpb24nKSxfMHgxYzQwMGM7fVtfMHgyYWUwZjcoMHgxYjApXShfMHg1NTlhMzgpe3ZhciBfMHg1YWI4YmE9XzB4MmFlMGY3O3JldHVybiBPYmplY3RbJ3Byb3RvdHlwZSddWyd0b1N0cmluZyddW18weDVhYjhiYSgweDEzMyldKF8weDU1OWEzOCk7fVtfMHgyYWUwZjcoMHgxNmEpXShfMHhhY2NiNmYpe3ZhciBfMHg3MGE1ODc9XzB4MmFlMGY3O3JldHVybiBfMHhhY2NiNmY9PT1fMHg3MGE1ODcoMHgxNzApfHxfMHhhY2NiNmY9PT1fMHg3MGE1ODcoMHhkYil8fF8weGFjY2I2Zj09PV8weDcwYTU4NygweDExYyk7fVtfMHgyYWUwZjcoMHhmNildKF8weDNlNTQ3NCl7dmFyIF8weDQxZTg0OD1fMHgyYWUwZjc7cmV0dXJuIF8weDNlNTQ3ND09PSdCb29sZWFuJ3x8XzB4M2U1NDc0PT09XzB4NDFlODQ4KDB4ZjIpfHxfMHgzZTU0NzQ9PT0nTnVtYmVyJzt9W18weDJhZTBmNygweGZiKV0oXzB4ZWNiNThjLF8weDNkYjcwNCxfMHgzYWI4ZmIsXzB4NWYwYzgxLF8weDM3NzczOSxfMHgyZGNkYzYpe3ZhciBfMHg1MTU4ODI9dGhpcztyZXR1cm4gZnVuY3Rpb24oXzB4MjY1N2VkKXt2YXIgXzB4NGE0MjE0PV8weDRlMDUsXzB4NWJlNzU3PV8weDM3NzczOVtfMHg0YTQyMTQoMHgxOTQpXVtfMHg0YTQyMTQoMHgxNDIpXSxfMHg1NjcwNTQ9XzB4Mzc3NzM5W18weDRhNDIxNCgweDE5NCldW18weDRhNDIxNCgweDEzYildLF8weDE5YjM2Nz1fMHgzNzc3MzlbXzB4NGE0MjE0KDB4MTk0KV1bJ3BhcmVudCddO18weDM3NzczOVtfMHg0YTQyMTQoMHgxOTQpXVtfMHg0YTQyMTQoMHgxMjkpXT1fMHg1YmU3NTcsXzB4Mzc3NzM5W18weDRhNDIxNCgweDE5NCldW18weDRhNDIxNCgweDEzYildPXR5cGVvZiBfMHg1ZjBjODE9PSdudW1iZXInP18weDVmMGM4MTpfMHgyNjU3ZWQsXzB4ZWNiNThjW18weDRhNDIxNCgweDFiYSldKF8weDUxNTg4MltfMHg0YTQyMTQoMHhmYSldKF8weDNkYjcwNCxfMHgzYWI4ZmIsXzB4NWYwYzgxLF8weDM3NzczOSxfMHgyZGNkYzYpKSxfMHgzNzc3MzlbXzB4NGE0MjE0KDB4MTk0KV1bXzB4NGE0MjE0KDB4MTI5KV09XzB4MTliMzY3LF8weDM3NzczOVsnbm9kZSddW18weDRhNDIxNCgweDEzYildPV8weDU2NzA1NDt9O31bJ19hZGRPYmplY3RQcm9wZXJ0eSddKF8weDE1MTZiZSxfMHg1OWQ3ZTMsXzB4MTA1ZjhmLF8weDQ1NGYwZCxfMHg0MDBlNDMsXzB4NjI5MGUyLF8weDQwZmY0ZSl7dmFyIF8weDY1ODBiYz1fMHgyYWUwZjcsXzB4OTg5YTgwPXRoaXM7cmV0dXJuIF8weDU5ZDdlM1tfMHg2NTgwYmMoMHgxMDApK18weDQwMGU0M1tfMHg2NTgwYmMoMHgxOWQpXSgpXT0hMHgwLGZ1bmN0aW9uKF8weDI5NTE0YSl7dmFyIF8weDE2ZTZmMj1fMHg2NTgwYmMsXzB4NTY1NmEwPV8weDYyOTBlMltfMHgxNmU2ZjIoMHgxOTQpXVtfMHgxNmU2ZjIoMHgxNDIpXSxfMHg1MjY0MjU9XzB4NjI5MGUyW18weDE2ZTZmMigweDE5NCldW18weDE2ZTZmMigweDEzYildLF8weDNjYTEyNz1fMHg2MjkwZTJbXzB4MTZlNmYyKDB4MTk0KV1bXzB4MTZlNmYyKDB4MTI5KV07XzB4NjI5MGUyW18weDE2ZTZmMigweDE5NCldW18weDE2ZTZmMigweDEyOSldPV8weDU2NTZhMCxfMHg2MjkwZTJbXzB4MTZlNmYyKDB4MTk0KV1bXzB4MTZlNmYyKDB4MTNiKV09XzB4Mjk1MTRhLF8weDE1MTZiZVtfMHgxNmU2ZjIoMHgxYmEpXShfMHg5ODlhODBbXzB4MTZlNmYyKDB4ZmEpXShfMHgxMDVmOGYsXzB4NDU0ZjBkLF8weDQwMGU0MyxfMHg2MjkwZTIsXzB4NDBmZjRlKSksXzB4NjI5MGUyWydub2RlJ11bXzB4MTZlNmYyKDB4MTI5KV09XzB4M2NhMTI3LF8weDYyOTBlMltfMHgxNmU2ZjIoMHgxOTQpXVtfMHgxNmU2ZjIoMHgxM2IpXT1fMHg1MjY0MjU7fTt9W18weDJhZTBmNygweGZhKV0oXzB4MTcxNjcxLF8weDRhNTU5NCxfMHg1NGU0YjIsXzB4MWY4YzMyLF8weDQwZTBiYil7dmFyIF8weDVjYTk5MT1fMHgyYWUwZjcsXzB4NDUwMTkwPXRoaXM7XzB4NDBlMGJifHwoXzB4NDBlMGJiPWZ1bmN0aW9uKF8weDFmZjE0YyxfMHgxYmI2YWQpe3JldHVybiBfMHgxZmYxNGNbXzB4MWJiNmFkXTt9KTt2YXIgXzB4NDFmY2NkPV8weDU0ZTRiMltfMHg1Y2E5OTEoMHgxOWQpXSgpLF8weDFlMWJiOD1fMHgxZjhjMzJbXzB4NWNhOTkxKDB4MTU4KV18fHt9LF8weDM0NDJjYz1fMHgxZjhjMzJbXzB4NWNhOTkxKDB4MTUzKV0sXzB4NTBjYTkwPV8weDFmOGMzMltfMHg1Y2E5OTEoMHgxNDgpXTt0cnl7dmFyIF8weDU4MzY2Nz10aGlzW18weDVjYTk5MSgweDExNSldKF8weDE3MTY3MSksXzB4NjU2YTRmPV8weDQxZmNjZDtfMHg1ODM2NjcmJl8weDY1NmE0ZlsweDBdPT09J1xcXFx4MjcnJiYoXzB4NjU2YTRmPV8weDY1NmE0Zlsnc3Vic3RyJ10oMHgxLF8weDY1NmE0ZltfMHg1Y2E5OTEoMHgxNjcpXS0weDIpKTt2YXIgXzB4MWI5ZTg2PV8weDFmOGMzMltfMHg1Y2E5OTEoMHgxNTgpXT1fMHgxZTFiYjhbXzB4NWNhOTkxKDB4MTAwKStfMHg2NTZhNGZdO18weDFiOWU4NiYmKF8weDFmOGMzMltfMHg1Y2E5OTEoMHgxNTMpXT1fMHgxZjhjMzJbXzB4NWNhOTkxKDB4MTUzKV0rMHgxKSxfMHgxZjhjMzJbJ2lzRXhwcmVzc2lvblRvRXZhbHVhdGUnXT0hIV8weDFiOWU4Njt2YXIgXzB4NTQ3NDllPXR5cGVvZiBfMHg1NGU0YjI9PV8weDVjYTk5MSgweDFhZCksXzB4OGZiYjM1PXsnbmFtZSc6XzB4NTQ3NDllfHxfMHg1ODM2Njc/XzB4NDFmY2NkOnRoaXNbXzB4NWNhOTkxKDB4MTY5KV0oXzB4NDFmY2NkKX07aWYoXzB4NTQ3NDllJiYoXzB4OGZiYjM1W18weDVjYTk5MSgweDFhZCldPSEweDApLCEoXzB4NGE1NTk0PT09XzB4NWNhOTkxKDB4MTA0KXx8XzB4NGE1NTk0PT09XzB4NWNhOTkxKDB4MTNkKSkpe3ZhciBfMHgzOGZiMGY9dGhpc1tfMHg1Y2E5OTEoMHgxM2MpXShfMHgxNzE2NzEsXzB4NTRlNGIyKTtpZihfMHgzOGZiMGYmJihfMHgzOGZiMGZbXzB4NWNhOTkxKDB4ZDEpXSYmKF8weDhmYmIzNVtfMHg1Y2E5OTEoMHhlMSldPSEweDApLF8weDM4ZmIwZlsnZ2V0J10mJiFfMHgxYjllODYmJiFfMHgxZjhjMzJbXzB4NWNhOTkxKDB4MTk2KV0pKXJldHVybiBfMHg4ZmJiMzVbXzB4NWNhOTkxKDB4MWI5KV09ITB4MCx0aGlzWydfcHJvY2Vzc1RyZWVOb2RlUmVzdWx0J10oXzB4OGZiYjM1LF8weDFmOGMzMiksXzB4OGZiYjM1O312YXIgXzB4OTAxZTI7dHJ5e18weDkwMWUyPV8weDQwZTBiYihfMHgxNzE2NzEsXzB4NTRlNGIyKTt9Y2F0Y2goXzB4MmM0OGVjKXtyZXR1cm4gXzB4OGZiYjM1PXsnbmFtZSc6XzB4NDFmY2NkLCd0eXBlJzpfMHg1Y2E5OTEoMHgxMzUpLCdlcnJvcic6XzB4MmM0OGVjW18weDVjYTk5MSgweDExMyldfSx0aGlzWydfcHJvY2Vzc1RyZWVOb2RlUmVzdWx0J10oXzB4OGZiYjM1LF8weDFmOGMzMiksXzB4OGZiYjM1O312YXIgXzB4ZDU3YmU0PXRoaXNbXzB4NWNhOTkxKDB4MTc4KV0oXzB4OTAxZTIpLF8weDQwNWIzNT10aGlzW18weDVjYTk5MSgweDE2YSldKF8weGQ1N2JlNCk7aWYoXzB4OGZiYjM1W18weDVjYTk5MSgweGZmKV09XzB4ZDU3YmU0LF8weDQwNWIzNSl0aGlzW18weDVjYTk5MSgweGNjKV0oXzB4OGZiYjM1LF8weDFmOGMzMixfMHg5MDFlMixmdW5jdGlvbigpe3ZhciBfMHgzY2I1ODY9XzB4NWNhOTkxO18weDhmYmIzNVtfMHgzY2I1ODYoMHgxMTgpXT1fMHg5MDFlMltfMHgzY2I1ODYoMHgxYjUpXSgpLCFfMHgxYjllODYmJl8weDQ1MDE5MFtfMHgzY2I1ODYoMHgxM2YpXShfMHhkNTdiZTQsXzB4OGZiYjM1LF8weDFmOGMzMix7fSk7fSk7ZWxzZXt2YXIgXzB4MmM2NmYyPV8weDFmOGMzMltfMHg1Y2E5OTEoMHhkZSldJiZfMHgxZjhjMzJbJ2xldmVsJ108XzB4MWY4YzMyW18weDVjYTk5MSgweDEyYSldJiZfMHgxZjhjMzJbXzB4NWNhOTkxKDB4MWIzKV1bXzB4NWNhOTkxKDB4MTBiKV0oXzB4OTAxZTIpPDB4MCYmXzB4ZDU3YmU0IT09XzB4NWNhOTkxKDB4MTVmKSYmXzB4MWY4YzMyW18weDVjYTk5MSgweDEyMildPF8weDFmOGMzMltfMHg1Y2E5OTEoMHgxMjgpXTtfMHgyYzY2ZjJ8fF8weDFmOGMzMltfMHg1Y2E5OTEoMHgxNzkpXTxfMHgzNDQyY2N8fF8weDFiOWU4Nj8odGhpc1tfMHg1Y2E5OTEoMHgxYWMpXShfMHg4ZmJiMzUsXzB4OTAxZTIsXzB4MWY4YzMyLF8weDFiOWU4Nnx8e30pLHRoaXNbXzB4NWNhOTkxKDB4MWI4KV0oXzB4OTAxZTIsXzB4OGZiYjM1KSk6dGhpc1tfMHg1Y2E5OTEoMHhjYyldKF8weDhmYmIzNSxfMHgxZjhjMzIsXzB4OTAxZTIsZnVuY3Rpb24oKXt2YXIgXzB4NWE4MTY3PV8weDVjYTk5MTtfMHhkNTdiZTQ9PT1fMHg1YTgxNjcoMHgxNWQpfHxfMHhkNTdiZTQ9PT0ndW5kZWZpbmVkJ3x8KGRlbGV0ZSBfMHg4ZmJiMzVbXzB4NWE4MTY3KDB4MTE4KV0sXzB4OGZiYjM1W18weDVhODE2NygweDE0MCldPSEweDApO30pO31yZXR1cm4gXzB4OGZiYjM1O31maW5hbGx5e18weDFmOGMzMltfMHg1Y2E5OTEoMHgxNTgpXT1fMHgxZTFiYjgsXzB4MWY4YzMyW18weDVjYTk5MSgweDE1MyldPV8weDM0NDJjYyxfMHgxZjhjMzJbXzB4NWNhOTkxKDB4MTQ4KV09XzB4NTBjYTkwO319W18weDJhZTBmNygweDEzZildKF8weDNhMzlhMSxfMHgzOTQ1OGQsXzB4MmVlNjhkLF8weDFlZGU1Mil7dmFyIF8weDMyN2U2Mz1fMHgyYWUwZjcsXzB4M2NlNTgzPV8weDFlZGU1MltfMHgzMjdlNjMoMHgxOTEpXXx8XzB4MmVlNjhkW18weDMyN2U2MygweDE5MSldO2lmKChfMHgzYTM5YTE9PT1fMHgzMjdlNjMoMHhkYil8fF8weDNhMzlhMT09PSdTdHJpbmcnKSYmXzB4Mzk0NThkWyd2YWx1ZSddKXtsZXQgXzB4MzFmNzE1PV8weDM5NDU4ZFtfMHgzMjdlNjMoMHgxMTgpXVtfMHgzMjdlNjMoMHgxNjcpXTtfMHgyZWU2OGRbXzB4MzI3ZTYzKDB4MTczKV0rPV8weDMxZjcxNSxfMHgyZWU2OGRbXzB4MzI3ZTYzKDB4MTczKV0+XzB4MmVlNjhkW18weDMyN2U2MygweDE2OCldPyhfMHgzOTQ1OGRbXzB4MzI3ZTYzKDB4MTQwKV09JycsZGVsZXRlIF8weDM5NDU4ZFtfMHgzMjdlNjMoMHgxMTgpXSk6XzB4MzFmNzE1Pl8weDNjZTU4MyYmKF8weDM5NDU4ZFtfMHgzMjdlNjMoMHgxNDApXT1fMHgzOTQ1OGRbXzB4MzI3ZTYzKDB4MTE4KV1bXzB4MzI3ZTYzKDB4MTgzKV0oMHgwLF8weDNjZTU4MyksZGVsZXRlIF8weDM5NDU4ZFtfMHgzMjdlNjMoMHgxMTgpXSk7fX1bJ19pc01hcCddKF8weDVhYWRmMSl7dmFyIF8weDRmMmJkYT1fMHgyYWUwZjc7cmV0dXJuISEoXzB4NWFhZGYxJiZfMHgzZTBhOTlbXzB4NGYyYmRhKDB4MTc2KV0mJnRoaXNbXzB4NGYyYmRhKDB4MWIwKV0oXzB4NWFhZGYxKT09PV8weDRmMmJkYSgweDExMCkmJl8weDVhYWRmMVtfMHg0ZjJiZGEoMHgxOGUpXSk7fVsnX3Byb3BlcnR5TmFtZSddKF8weDFlYjM2ZCl7dmFyIF8weDVlY2E4ZT1fMHgyYWUwZjc7aWYoXzB4MWViMzZkW18weDVlY2E4ZSgweDExZSldKC9eXFxcXGQrJC8pKXJldHVybiBfMHgxZWIzNmQ7dmFyIF8weDRmNWYyZDt0cnl7XzB4NGY1ZjJkPUpTT05bXzB4NWVjYThlKDB4MTc0KV0oJycrXzB4MWViMzZkKTt9Y2F0Y2h7XzB4NGY1ZjJkPSdcXFxceDIyJyt0aGlzW18weDVlY2E4ZSgweDFiMCldKF8weDFlYjM2ZCkrJ1xcXFx4MjInO31yZXR1cm4gXzB4NGY1ZjJkW18weDVlY2E4ZSgweDExZSldKC9eXFxcIihbYS16QS1aX11bYS16QS1aXzAtOV0qKVxcXCIkLyk/XzB4NGY1ZjJkPV8weDRmNWYyZFtfMHg1ZWNhOGUoMHgxODMpXSgweDEsXzB4NGY1ZjJkWydsZW5ndGgnXS0weDIpOl8weDRmNWYyZD1fMHg0ZjVmMmRbXzB4NWVjYThlKDB4MTJmKV0oLycvZywnXFxcXHg1Y1xcXFx4MjcnKVsncmVwbGFjZSddKC9cXFxcXFxcXFxcXCIvZywnXFxcXHgyMicpW18weDVlY2E4ZSgweDEyZildKC8oXlxcXCJ8XFxcIiQpL2csJ1xcXFx4MjcnKSxfMHg0ZjVmMmQ7fVtfMHgyYWUwZjcoMHhjYyldKF8weGZmMmNjNixfMHg4NTNjODYsXzB4MzU3ZWFmLF8weDEwYzg1ZSl7dmFyIF8weDFiMDVlYj1fMHgyYWUwZjc7dGhpc1snX3RyZWVOb2RlUHJvcGVydGllc0JlZm9yZUZ1bGxWYWx1ZSddKF8weGZmMmNjNixfMHg4NTNjODYpLF8weDEwYzg1ZSYmXzB4MTBjODVlKCksdGhpc1tfMHgxYjA1ZWIoMHgxYjgpXShfMHgzNTdlYWYsXzB4ZmYyY2M2KSx0aGlzW18weDFiMDVlYigweGYzKV0oXzB4ZmYyY2M2LF8weDg1M2M4Nik7fVsnX3RyZWVOb2RlUHJvcGVydGllc0JlZm9yZUZ1bGxWYWx1ZSddKF8weDM4YTZhMixfMHgxYjkwNGYpe3ZhciBfMHg0OTBjOTk9XzB4MmFlMGY3O3RoaXNbXzB4NDkwYzk5KDB4ZjgpXShfMHgzOGE2YTIsXzB4MWI5MDRmKSx0aGlzW18weDQ5MGM5OSgweDE5OSldKF8weDM4YTZhMixfMHgxYjkwNGYpLHRoaXNbXzB4NDkwYzk5KDB4ZWUpXShfMHgzOGE2YTIsXzB4MWI5MDRmKSx0aGlzW18weDQ5MGM5OSgweGZkKV0oXzB4MzhhNmEyLF8weDFiOTA0Zik7fVsnX3NldE5vZGVJZCddKF8weDVlY2U1YyxfMHhjM2ZiMDQpe31bXzB4MmFlMGY3KDB4MTk5KV0oXzB4MjViZmZmLF8weDI4ZmY5Zil7fVtfMHgyYWUwZjcoMHgxN2IpXShfMHg1Yzc3MTYsXzB4YjI4YTQzKXt9W18weDJhZTBmNygweDExYSldKF8weDQxMGZlZil7dmFyIF8weDVkNmMyNj1fMHgyYWUwZjc7cmV0dXJuIF8weDQxMGZlZj09PXRoaXNbXzB4NWQ2YzI2KDB4MTFiKV07fVtfMHgyYWUwZjcoMHhmMyldKF8weDIxZjEwZCxfMHg0OTU2ZmMpe3ZhciBfMHgzMGY5YTY9XzB4MmFlMGY3O3RoaXNbXzB4MzBmOWE2KDB4MTdiKV0oXzB4MjFmMTBkLF8weDQ5NTZmYyksdGhpc1snX3NldE5vZGVFeHBhbmRhYmxlU3RhdGUnXShfMHgyMWYxMGQpLF8weDQ5NTZmY1tfMHgzMGY5YTYoMHhkOSldJiZ0aGlzW18weDMwZjlhNigweDEzMCldKF8weDIxZjEwZCksdGhpc1tfMHgzMGY5YTYoMHgxOGYpXShfMHgyMWYxMGQsXzB4NDk1NmZjKSx0aGlzW18weDMwZjlhNigweDEwNSldKF8weDIxZjEwZCxfMHg0OTU2ZmMpLHRoaXNbXzB4MzBmOWE2KDB4MTY0KV0oXzB4MjFmMTBkKTt9W18weDJhZTBmNygweDFiOCldKF8weDdlZTA5LF8weDQwZGZhZil7dmFyIF8weDU1OGIxOT1fMHgyYWUwZjc7bGV0IF8weDQ4YzkzNTt0cnl7XzB4M2UwYTk5Wydjb25zb2xlJ10mJihfMHg0OGM5MzU9XzB4M2UwYTk5Wydjb25zb2xlJ11bXzB4NTU4YjE5KDB4ZWYpXSxfMHgzZTBhOTlbXzB4NTU4YjE5KDB4MTBjKV1bXzB4NTU4YjE5KDB4ZWYpXT1mdW5jdGlvbigpe30pLF8weDdlZTA5JiZ0eXBlb2YgXzB4N2VlMDlbXzB4NTU4YjE5KDB4MTY3KV09PV8weDU1OGIxOSgweDExYykmJihfMHg0MGRmYWZbXzB4NTU4YjE5KDB4MTY3KV09XzB4N2VlMDlbXzB4NTU4YjE5KDB4MTY3KV0pO31jYXRjaHt9ZmluYWxseXtfMHg0OGM5MzUmJihfMHgzZTBhOTlbJ2NvbnNvbGUnXVsnZXJyb3InXT1fMHg0OGM5MzUpO31pZihfMHg0MGRmYWZbJ3R5cGUnXT09PV8weDU1OGIxOSgweDExYyl8fF8weDQwZGZhZltfMHg1NThiMTkoMHhmZildPT09XzB4NTU4YjE5KDB4MWEzKSl7aWYoaXNOYU4oXzB4NDBkZmFmW18weDU1OGIxOSgweDExOCldKSlfMHg0MGRmYWZbJ25hbiddPSEweDAsZGVsZXRlIF8weDQwZGZhZlsndmFsdWUnXTtlbHNlIHN3aXRjaChfMHg0MGRmYWZbXzB4NTU4YjE5KDB4MTE4KV0pe2Nhc2UgTnVtYmVyW18weDU1OGIxOSgweDE3MildOl8weDQwZGZhZltfMHg1NThiMTkoMHgxNGMpXT0hMHgwLGRlbGV0ZSBfMHg0MGRmYWZbJ3ZhbHVlJ107YnJlYWs7Y2FzZSBOdW1iZXJbXzB4NTU4YjE5KDB4ZTYpXTpfMHg0MGRmYWZbXzB4NTU4YjE5KDB4ZTIpXT0hMHgwLGRlbGV0ZSBfMHg0MGRmYWZbXzB4NTU4YjE5KDB4MTE4KV07YnJlYWs7Y2FzZSAweDA6dGhpc1snX2lzTmVnYXRpdmVaZXJvJ10oXzB4NDBkZmFmW18weDU1OGIxOSgweDExOCldKSYmKF8weDQwZGZhZlsnbmVnYXRpdmVaZXJvJ109ITB4MCk7YnJlYWs7fX1lbHNlIF8weDQwZGZhZltfMHg1NThiMTkoMHhmZildPT09XzB4NTU4YjE5KDB4MTVmKSYmdHlwZW9mIF8weDdlZTA5W18weDU1OGIxOSgweDE0OSldPT1fMHg1NThiMTkoMHhkYikmJl8weDdlZTA5WyduYW1lJ10mJl8weDQwZGZhZltfMHg1NThiMTkoMHgxNDkpXSYmXzB4N2VlMDlbJ25hbWUnXSE9PV8weDQwZGZhZltfMHg1NThiMTkoMHgxNDkpXSYmKF8weDQwZGZhZlsnZnVuY05hbWUnXT1fMHg3ZWUwOVtfMHg1NThiMTkoMHgxNDkpXSk7fVtfMHgyYWUwZjcoMHgxMjcpXShfMHgyZTU4NGYpe3ZhciBfMHgzMjg1ZWY9XzB4MmFlMGY3O3JldHVybiAweDEvXzB4MmU1ODRmPT09TnVtYmVyW18weDMyODVlZigweGU2KV07fVtfMHgyYWUwZjcoMHgxMzApXShfMHg1YmMzODEpe3ZhciBfMHg0MWM1MDE9XzB4MmFlMGY3OyFfMHg1YmMzODFbXzB4NDFjNTAxKDB4MTY1KV18fCFfMHg1YmMzODFbJ3Byb3BzJ11bXzB4NDFjNTAxKDB4MTY3KV18fF8weDViYzM4MVtfMHg0MWM1MDEoMHhmZildPT09XzB4NDFjNTAxKDB4MTA0KXx8XzB4NWJjMzgxW18weDQxYzUwMSgweGZmKV09PT1fMHg0MWM1MDEoMHgxNzYpfHxfMHg1YmMzODFbJ3R5cGUnXT09PV8weDQxYzUwMSgweGUzKXx8XzB4NWJjMzgxW18weDQxYzUwMSgweDE2NSldW18weDQxYzUwMSgweDE4YildKGZ1bmN0aW9uKF8weDJmZGJhNSxfMHgyNDNlMTQpe3ZhciBfMHgzNzJkZjA9XzB4NDFjNTAxLF8weDNhYzM2ZT1fMHgyZmRiYTVbXzB4MzcyZGYwKDB4MTQ5KV1bXzB4MzcyZGYwKDB4MTQ0KV0oKSxfMHg1ZTcwYWM9XzB4MjQzZTE0W18weDM3MmRmMCgweDE0OSldW18weDM3MmRmMCgweDE0NCldKCk7cmV0dXJuIF8weDNhYzM2ZTxfMHg1ZTcwYWM/LTB4MTpfMHgzYWMzNmU+XzB4NWU3MGFjPzB4MToweDA7fSk7fVtfMHgyYWUwZjcoMHgxOGYpXShfMHgzNjYyZmMsXzB4MmY0NDU2KXt2YXIgXzB4NzhhMzEzPV8weDJhZTBmNztpZighKF8weDJmNDQ1NltfMHg3OGEzMTMoMHgxODQpXXx8IV8weDM2NjJmY1tfMHg3OGEzMTMoMHgxNjUpXXx8IV8weDM2NjJmY1tfMHg3OGEzMTMoMHgxNjUpXVtfMHg3OGEzMTMoMHgxNjcpXSkpe2Zvcih2YXIgXzB4MjM2ZGQyPVtdLF8weDQ5NzE3ZT1bXSxfMHg1YjI5M2U9MHgwLF8weGFiOTIzNj1fMHgzNjYyZmNbXzB4NzhhMzEzKDB4MTY1KV1bXzB4NzhhMzEzKDB4MTY3KV07XzB4NWIyOTNlPF8weGFiOTIzNjtfMHg1YjI5M2UrKyl7dmFyIF8weDNlZTM4Yj1fMHgzNjYyZmNbJ3Byb3BzJ11bXzB4NWIyOTNlXTtfMHgzZWUzOGJbXzB4NzhhMzEzKDB4ZmYpXT09PV8weDc4YTMxMygweDE1Zik/XzB4MjM2ZGQyW18weDc4YTMxMygweDFiYSldKF8weDNlZTM4Yik6XzB4NDk3MTdlWydwdXNoJ10oXzB4M2VlMzhiKTt9aWYoISghXzB4NDk3MTdlWydsZW5ndGgnXXx8XzB4MjM2ZGQyW18weDc4YTMxMygweDE2NyldPD0weDEpKXtfMHgzNjYyZmNbXzB4NzhhMzEzKDB4MTY1KV09XzB4NDk3MTdlO3ZhciBfMHg1OWY1OTQ9eydmdW5jdGlvbnNOb2RlJzohMHgwLCdwcm9wcyc6XzB4MjM2ZGQyfTt0aGlzWydfc2V0Tm9kZUlkJ10oXzB4NTlmNTk0LF8weDJmNDQ1NiksdGhpc1tfMHg3OGEzMTMoMHgxN2IpXShfMHg1OWY1OTQsXzB4MmY0NDU2KSx0aGlzW18weDc4YTMxMygweDE1OSldKF8weDU5ZjU5NCksdGhpc1tfMHg3OGEzMTMoMHhmZCldKF8weDU5ZjU5NCxfMHgyZjQ0NTYpLF8weDU5ZjU5NFsnaWQnXSs9J1xcXFx4MjBmJyxfMHgzNjYyZmNbJ3Byb3BzJ11bXzB4NzhhMzEzKDB4MTFkKV0oXzB4NTlmNTk0KTt9fX1bXzB4MmFlMGY3KDB4MTA1KV0oXzB4NDQzNGMxLF8weDQ2NWY0MCl7fVtfMHgyYWUwZjcoMHgxNTkpXShfMHgyOWI2ZGEpe31bXzB4MmFlMGY3KDB4MTE3KV0oXzB4MjYzN2RlKXt2YXIgXzB4MTk4YzVkPV8weDJhZTBmNztyZXR1cm4gQXJyYXlbJ2lzQXJyYXknXShfMHgyNjM3ZGUpfHx0eXBlb2YgXzB4MjYzN2RlPT1fMHgxOThjNWQoMHgxMWYpJiZ0aGlzWydfb2JqZWN0VG9TdHJpbmcnXShfMHgyNjM3ZGUpPT09XzB4MTk4YzVkKDB4MWFhKTt9W18weDJhZTBmNygweGZkKV0oXzB4NWEwNDczLF8weDU5YTdjYyl7fVsnX2NsZWFuTm9kZSddKF8weDVlYTI2Myl7dmFyIF8weGRkMGFlNT1fMHgyYWUwZjc7ZGVsZXRlIF8weDVlYTI2M1tfMHhkZDBhZTUoMHgxMjApXSxkZWxldGUgXzB4NWVhMjYzWydfaGFzU2V0T25JdHNQYXRoJ10sZGVsZXRlIF8weDVlYTI2M1tfMHhkZDBhZTUoMHgxNTEpXTt9W18weDJhZTBmNygweGVlKV0oXzB4NTk4ODU4LF8weDNjYWFjMSl7fX1sZXQgXzB4NjExYjhlPW5ldyBfMHg0OTNjMDUoKSxfMHg0OGU5ZWE9eydwcm9wcyc6MHg2NCwnZWxlbWVudHMnOjB4NjQsJ3N0ckxlbmd0aCc6MHg0MDAqMHgzMiwndG90YWxTdHJMZW5ndGgnOjB4NDAwKjB4MzIsJ2F1dG9FeHBhbmRMaW1pdCc6MHgxMzg4LCdhdXRvRXhwYW5kTWF4RGVwdGgnOjB4YX0sXzB4MjhkZjM4PXsncHJvcHMnOjB4NSwnZWxlbWVudHMnOjB4NSwnc3RyTGVuZ3RoJzoweDEwMCwndG90YWxTdHJMZW5ndGgnOjB4MTAwKjB4MywnYXV0b0V4cGFuZExpbWl0JzoweDFlLCdhdXRvRXhwYW5kTWF4RGVwdGgnOjB4Mn07ZnVuY3Rpb24gXzB4MzU3ZGUxKF8weDJkZmQ2OCxfMHgyNDQ5MDgsXzB4MjEyYjdkLF8weDM0OGQ0ZCxfMHgzN2ZjMzksXzB4ZjM3YzRmKXt2YXIgXzB4Yzc2YmJkPV8weDJhZTBmNztsZXQgXzB4MjMyNzQ1LF8weDJlMDA2YTt0cnl7XzB4MmUwMDZhPV8weDM5OWRmYigpLF8weDIzMjc0NT1fMHg1ZTA5YjVbXzB4MjQ0OTA4XSwhXzB4MjMyNzQ1fHxfMHgyZTAwNmEtXzB4MjMyNzQ1Wyd0cyddPjB4MWY0JiZfMHgyMzI3NDVbXzB4Yzc2YmJkKDB4MTdlKV0mJl8weDIzMjc0NVtfMHhjNzZiYmQoMHgxYjQpXS9fMHgyMzI3NDVbJ2NvdW50J108MHg2ND8oXzB4NWUwOWI1W18weDI0NDkwOF09XzB4MjMyNzQ1PXsnY291bnQnOjB4MCwndGltZSc6MHgwLCd0cyc6XzB4MmUwMDZhfSxfMHg1ZTA5YjVbXzB4Yzc2YmJkKDB4MTE2KV09e30pOl8weDJlMDA2YS1fMHg1ZTA5YjVbXzB4Yzc2YmJkKDB4MTE2KV1bJ3RzJ10+MHgzMiYmXzB4NWUwOWI1W18weGM3NmJiZCgweDExNildW18weGM3NmJiZCgweDE3ZSldJiZfMHg1ZTA5YjVbXzB4Yzc2YmJkKDB4MTE2KV1bJ3RpbWUnXS9fMHg1ZTA5YjVbJ2hpdHMnXVtfMHhjNzZiYmQoMHgxN2UpXTwweDY0JiYoXzB4NWUwOWI1W18weGM3NmJiZCgweDExNildPXt9KTtsZXQgXzB4MTAzYzM3PVtdLF8weDE5YTkyMD1fMHgyMzI3NDVbXzB4Yzc2YmJkKDB4MWI2KV18fF8weDVlMDliNVtfMHhjNzZiYmQoMHgxMTYpXVtfMHhjNzZiYmQoMHgxYjYpXT9fMHgyOGRmMzg6XzB4NDhlOWVhLF8weDI2NjM5Nj1fMHg0NzgyOTk9Pnt2YXIgXzB4MzM4ZTEzPV8weGM3NmJiZDtsZXQgXzB4M2ZjMzFhPXt9O3JldHVybiBfMHgzZmMzMWFbXzB4MzM4ZTEzKDB4MTY1KV09XzB4NDc4Mjk5W18weDMzOGUxMygweDE2NSldLF8weDNmYzMxYVtfMHgzMzhlMTMoMHgxYjcpXT1fMHg0NzgyOTlbXzB4MzM4ZTEzKDB4MWI3KV0sXzB4M2ZjMzFhW18weDMzOGUxMygweDE5MSldPV8weDQ3ODI5OVtfMHgzMzhlMTMoMHgxOTEpXSxfMHgzZmMzMWFbXzB4MzM4ZTEzKDB4MTY4KV09XzB4NDc4Mjk5W18weDMzOGUxMygweDE2OCldLF8weDNmYzMxYVtfMHgzMzhlMTMoMHgxMjgpXT1fMHg0NzgyOTlbJ2F1dG9FeHBhbmRMaW1pdCddLF8weDNmYzMxYVtfMHgzMzhlMTMoMHgxMmEpXT1fMHg0NzgyOTlbXzB4MzM4ZTEzKDB4MTJhKV0sXzB4M2ZjMzFhWydzb3J0UHJvcHMnXT0hMHgxLF8weDNmYzMxYVtfMHgzMzhlMTMoMHgxODQpXT0hXzB4NWI0ZjJiLF8weDNmYzMxYVtfMHgzMzhlMTMoMHgxNTMpXT0weDEsXzB4M2ZjMzFhWydsZXZlbCddPTB4MCxfMHgzZmMzMWFbJ2V4cElkJ109XzB4MzM4ZTEzKDB4MTk3KSxfMHgzZmMzMWFbXzB4MzM4ZTEzKDB4MTk1KV09XzB4MzM4ZTEzKDB4MTcxKSxfMHgzZmMzMWFbXzB4MzM4ZTEzKDB4ZGUpXT0hMHgwLF8weDNmYzMxYVtfMHgzMzhlMTMoMHgxYjMpXT1bXSxfMHgzZmMzMWFbXzB4MzM4ZTEzKDB4MTIyKV09MHgwLF8weDNmYzMxYVtfMHgzMzhlMTMoMHgxOTYpXT0hMHgwLF8weDNmYzMxYVtfMHgzMzhlMTMoMHgxNzMpXT0weDAsXzB4M2ZjMzFhWydub2RlJ109eydjdXJyZW50Jzp2b2lkIDB4MCwncGFyZW50Jzp2b2lkIDB4MCwnaW5kZXgnOjB4MH0sXzB4M2ZjMzFhO307Zm9yKHZhciBfMHg0OWU5OTA9MHgwO18weDQ5ZTk5MDxfMHgzN2ZjMzlbXzB4Yzc2YmJkKDB4MTY3KV07XzB4NDllOTkwKyspXzB4MTAzYzM3W18weGM3NmJiZCgweDFiYSldKF8weDYxMWI4ZVsnc2VyaWFsaXplJ10oeyd0aW1lTm9kZSc6XzB4MmRmZDY4PT09J3RpbWUnfHx2b2lkIDB4MH0sXzB4MzdmYzM5W18weDQ5ZTk5MF0sXzB4MjY2Mzk2KF8weDE5YTkyMCkse30pKTtpZihfMHgyZGZkNjg9PT0ndHJhY2UnKXtsZXQgXzB4NWM4ODJlPUVycm9yW18weGM3NmJiZCgweGQ3KV07dHJ5e0Vycm9yW18weGM3NmJiZCgweGQ3KV09MHgxLzB4MCxfMHgxMDNjMzdbXzB4Yzc2YmJkKDB4MWJhKV0oXzB4NjExYjhlW18weGM3NmJiZCgweDFhYyldKHsnc3RhY2tOb2RlJzohMHgwfSxuZXcgRXJyb3IoKVtfMHhjNzZiYmQoMHgxYTIpXSxfMHgyNjYzOTYoXzB4MTlhOTIwKSx7J3N0ckxlbmd0aCc6MHgxLzB4MH0pKTt9ZmluYWxseXtFcnJvcltfMHhjNzZiYmQoMHhkNyldPV8weDVjODgyZTt9fXJldHVybnsnbWV0aG9kJzpfMHhjNzZiYmQoMHhmOSksJ3ZlcnNpb24nOl8weDQ5NWYyMSwnYXJncyc6W3sndHMnOl8weDIxMmI3ZCwnc2Vzc2lvbic6XzB4MzQ4ZDRkLCdhcmdzJzpfMHgxMDNjMzcsJ2lkJzpfMHgyNDQ5MDgsJ2NvbnRleHQnOl8weGYzN2M0Zn1dfTt9Y2F0Y2goXzB4YmQwMGY5KXtyZXR1cm57J21ldGhvZCc6XzB4Yzc2YmJkKDB4ZjkpLCd2ZXJzaW9uJzpfMHg0OTVmMjEsJ2FyZ3MnOlt7J3RzJzpfMHgyMTJiN2QsJ3Nlc3Npb24nOl8weDM0OGQ0ZCwnYXJncyc6W3sndHlwZSc6XzB4Yzc2YmJkKDB4MTM1KSwnZXJyb3InOl8weGJkMDBmOSYmXzB4YmQwMGY5W18weGM3NmJiZCgweDExMyldfV0sJ2lkJzpfMHgyNDQ5MDgsJ2NvbnRleHQnOl8weGYzN2M0Zn1dfTt9ZmluYWxseXt0cnl7aWYoXzB4MjMyNzQ1JiZfMHgyZTAwNmEpe2xldCBfMHhkMjg5ZTY9XzB4Mzk5ZGZiKCk7XzB4MjMyNzQ1W18weGM3NmJiZCgweDE3ZSldKyssXzB4MjMyNzQ1W18weGM3NmJiZCgweDFiNCldKz1fMHgyM2FlOTkoXzB4MmUwMDZhLF8weGQyODllNiksXzB4MjMyNzQ1Wyd0cyddPV8weGQyODllNixfMHg1ZTA5YjVbXzB4Yzc2YmJkKDB4MTE2KV1bXzB4Yzc2YmJkKDB4MTdlKV0rKyxfMHg1ZTA5YjVbXzB4Yzc2YmJkKDB4MTE2KV1bJ3RpbWUnXSs9XzB4MjNhZTk5KF8weDJlMDA2YSxfMHhkMjg5ZTYpLF8weDVlMDliNVsnaGl0cyddWyd0cyddPV8weGQyODllNiwoXzB4MjMyNzQ1W18weGM3NmJiZCgweDE3ZSldPjB4MzJ8fF8weDIzMjc0NVtfMHhjNzZiYmQoMHgxYjQpXT4weDY0KSYmKF8weDIzMjc0NVtfMHhjNzZiYmQoMHgxYjYpXT0hMHgwKSwoXzB4NWUwOWI1W18weGM3NmJiZCgweDExNildW18weGM3NmJiZCgweDE3ZSldPjB4M2U4fHxfMHg1ZTA5YjVbXzB4Yzc2YmJkKDB4MTE2KV1bXzB4Yzc2YmJkKDB4MWI0KV0+MHgxMmMpJiYoXzB4NWUwOWI1WydoaXRzJ11bJ3JlZHVjZUxpbWl0cyddPSEweDApO319Y2F0Y2h7fX19cmV0dXJuIF8weDM1N2RlMTt9KChfMHhlMzk0MDYsXzB4MTJmNGFmLF8weDQ1M2M4OCxfMHg0MTM2NWIsXzB4YzM1NTllLF8weGRjZTBhZixfMHgzM2M3MzgsXzB4MjY2MDVhLF8weDU0M2E5MixfMHg1ZjA3NmEsXzB4NTg0NGM4KT0+e3ZhciBfMHgzMzQ4YTg9XzB4MjJhZjc2O2lmKF8weGUzOTQwNltfMHgzMzQ4YTgoMHgxNmIpXSlyZXR1cm4gXzB4ZTM5NDA2WydfY29uc29sZV9uaW5qYSddO2lmKCFYKF8weGUzOTQwNixfMHgyNjYwNWEsXzB4YzM1NTllKSlyZXR1cm4gXzB4ZTM5NDA2W18weDMzNDhhOCgweDE2YildPXsnY29uc29sZUxvZyc6KCk9Pnt9LCdjb25zb2xlVHJhY2UnOigpPT57fSwnY29uc29sZVRpbWUnOigpPT57fSwnY29uc29sZVRpbWVFbmQnOigpPT57fSwnYXV0b0xvZyc6KCk9Pnt9LCdhdXRvTG9nTWFueSc6KCk9Pnt9LCdhdXRvVHJhY2VNYW55JzooKT0+e30sJ2NvdmVyYWdlJzooKT0+e30sJ2F1dG9UcmFjZSc6KCk9Pnt9LCdhdXRvVGltZSc6KCk9Pnt9LCdhdXRvVGltZUVuZCc6KCk9Pnt9fSxfMHhlMzk0MDZbXzB4MzM0OGE4KDB4MTZiKV07bGV0IF8weDM1OTliYz1iKF8weGUzOTQwNiksXzB4N2U2YzVjPV8weDM1OTliY1snZWxhcHNlZCddLF8weDM2OWY0Nj1fMHgzNTk5YmNbJ3RpbWVTdGFtcCddLF8weDE2NTQyMz1fMHgzNTk5YmNbJ25vdyddLF8weDFlOGJlMj17J2hpdHMnOnt9LCd0cyc6e319LF8weDVkMTc4Nz1IKF8weGUzOTQwNixfMHg1NDNhOTIsXzB4MWU4YmUyLF8weGRjZTBhZiksXzB4MWYwZGNhPV8weDU0MTFjND0+e18weDFlOGJlMlsndHMnXVtfMHg1NDExYzRdPV8weDM2OWY0NigpO30sXzB4MTM3MTU1PShfMHgyOWRmMjEsXzB4OTJjZDA2KT0+e2xldCBfMHgyMTFiNWU9XzB4MWU4YmUyWyd0cyddW18weDkyY2QwNl07aWYoZGVsZXRlIF8weDFlOGJlMlsndHMnXVtfMHg5MmNkMDZdLF8weDIxMWI1ZSl7bGV0IF8weDI1YjMwPV8weDdlNmM1YyhfMHgyMTFiNWUsXzB4MzY5ZjQ2KCkpO18weDIzMGFlMihfMHg1ZDE3ODcoJ3RpbWUnLF8weDI5ZGYyMSxfMHgxNjU0MjMoKSxfMHgyNjM4ZGMsW18weDI1YjMwXSxfMHg5MmNkMDYpKTt9fSxfMHgyNmRhNWY9XzB4MjFiNGY1PT57dmFyIF8weDRmZTYyZj1fMHgzMzQ4YTgsXzB4NTc0ZmE1O3JldHVybiBfMHhjMzU1OWU9PT1fMHg0ZmU2MmYoMHgxODcpJiZfMHhlMzk0MDZbXzB4NGZlNjJmKDB4MTRkKV0mJigoXzB4NTc0ZmE1PV8weDIxYjRmNT09bnVsbD92b2lkIDB4MDpfMHgyMWI0ZjVbXzB4NGZlNjJmKDB4ZjApXSk9PW51bGw/dm9pZCAweDA6XzB4NTc0ZmE1W18weDRmZTYyZigweDE2NyldKSYmKF8weDIxYjRmNVtfMHg0ZmU2MmYoMHhmMCldWzB4MF1bJ29yaWdpbiddPV8weGUzOTQwNltfMHg0ZmU2MmYoMHgxNGQpXSksXzB4MjFiNGY1O307XzB4ZTM5NDA2W18weDMzNDhhOCgweDE2YildPXsnY29uc29sZUxvZyc6KF8weDU4MWU2YixfMHg1YzkyOGMpPT57dmFyIF8weDM0MTcxNj1fMHgzMzQ4YTg7XzB4ZTM5NDA2W18weDM0MTcxNigweDEwYyldW18weDM0MTcxNigweGY5KV1bJ25hbWUnXSE9PSdkaXNhYmxlZExvZycmJl8weDIzMGFlMihfMHg1ZDE3ODcoJ2xvZycsXzB4NTgxZTZiLF8weDE2NTQyMygpLF8weDI2MzhkYyxfMHg1YzkyOGMpKTt9LCdjb25zb2xlVHJhY2UnOihfMHg0YWNhMTYsXzB4ZmViZmM2KT0+e3ZhciBfMHgxYTE2OWY9XzB4MzM0OGE4O18weGUzOTQwNltfMHgxYTE2OWYoMHgxMGMpXVtfMHgxYTE2OWYoMHhmOSldW18weDFhMTY5ZigweDE0OSldIT09J2Rpc2FibGVkVHJhY2UnJiZfMHgyMzBhZTIoXzB4MjZkYTVmKF8weDVkMTc4NyhfMHgxYTE2OWYoMHgxMzIpLF8weDRhY2ExNixfMHgxNjU0MjMoKSxfMHgyNjM4ZGMsXzB4ZmViZmM2KSkpO30sJ2NvbnNvbGVUaW1lJzpfMHgxMGI4OWQ9PntfMHgxZjBkY2EoXzB4MTBiODlkKTt9LCdjb25zb2xlVGltZUVuZCc6KF8weGMyY2RmOCxfMHg0NDhlODIpPT57XzB4MTM3MTU1KF8weDQ0OGU4MixfMHhjMmNkZjgpO30sJ2F1dG9Mb2cnOihfMHg1OGRhY2QsXzB4M2NiMTAxKT0+e3ZhciBfMHg0MjY2YTY9XzB4MzM0OGE4O18weDIzMGFlMihfMHg1ZDE3ODcoXzB4NDI2NmE2KDB4ZjkpLF8weDNjYjEwMSxfMHgxNjU0MjMoKSxfMHgyNjM4ZGMsW18weDU4ZGFjZF0pKTt9LCdhdXRvTG9nTWFueSc6KF8weGVhODNmZSxfMHgxZmRlY2IpPT57XzB4MjMwYWUyKF8weDVkMTc4NygnbG9nJyxfMHhlYTgzZmUsXzB4MTY1NDIzKCksXzB4MjYzOGRjLF8weDFmZGVjYikpO30sJ2F1dG9UcmFjZSc6KF8weDEzMDgyOSxfMHgxYjUxOTcpPT57dmFyIF8weDUyY2M4MD1fMHgzMzQ4YTg7XzB4MjMwYWUyKF8weDI2ZGE1ZihfMHg1ZDE3ODcoXzB4NTJjYzgwKDB4MTMyKSxfMHgxYjUxOTcsXzB4MTY1NDIzKCksXzB4MjYzOGRjLFtfMHgxMzA4MjldKSkpO30sJ2F1dG9UcmFjZU1hbnknOihfMHg1YTA5ZjUsXzB4MTg5MzliKT0+e3ZhciBfMHgzZjQ0Y2U9XzB4MzM0OGE4O18weDIzMGFlMihfMHgyNmRhNWYoXzB4NWQxNzg3KF8weDNmNDRjZSgweDEzMiksXzB4NWEwOWY1LF8weDE2NTQyMygpLF8weDI2MzhkYyxfMHgxODkzOWIpKSk7fSwnYXV0b1RpbWUnOihfMHhjZjQ5NWMsXzB4MWNjZTA1LF8weDM5NjgxMSk9PntfMHgxZjBkY2EoXzB4Mzk2ODExKTt9LCdhdXRvVGltZUVuZCc6KF8weDU3MzhkNSxfMHg1YjNiNmQsXzB4M2Q4ZGI0KT0+e18weDEzNzE1NShfMHg1YjNiNmQsXzB4M2Q4ZGI0KTt9LCdjb3ZlcmFnZSc6XzB4NDE3OTNiPT57dmFyIF8weDFmYjk5Nz1fMHgzMzQ4YTg7XzB4MjMwYWUyKHsnbWV0aG9kJzpfMHgxZmI5OTcoMHgxNmUpLCd2ZXJzaW9uJzpfMHhkY2UwYWYsJ2FyZ3MnOlt7J2lkJzpfMHg0MTc5M2J9XX0pO319O2xldCBfMHgyMzBhZTI9cShfMHhlMzk0MDYsXzB4MTJmNGFmLF8weDQ1M2M4OCxfMHg0MTM2NWIsXzB4YzM1NTllLF8weDVmMDc2YSxfMHg1ODQ0YzgpLF8weDI2MzhkYz1fMHhlMzk0MDZbXzB4MzM0OGE4KDB4MTEyKV07cmV0dXJuIF8weGUzOTQwNlsnX2NvbnNvbGVfbmluamEnXTt9KShnbG9iYWxUaGlzLCcxMjcuMC4wLjEnLF8weDIyYWY3NigweDFhOCksXzB4MjJhZjc2KDB4ZTQpLF8weDIyYWY3NigweDE5ZSksXzB4MjJhZjc2KDB4MTdjKSxfMHgyMmFmNzYoMHgxYTUpLF8weDIyYWY3NigweDEzYSksXzB4MjJhZjc2KDB4MTg5KSwnJywnMScpO1wiKTt9Y2F0Y2goZSl7fX07LyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9mdW5jdGlvbiBvb19vbyhpLC4uLnYpe3RyeXtvb19jbSgpLmNvbnNvbGVMb2coaSwgdik7fWNhdGNoKGUpe30gcmV0dXJuIHZ9Oy8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovZnVuY3Rpb24gb29fdHIoaSwuLi52KXt0cnl7b29fY20oKS5jb25zb2xlVHJhY2UoaSwgdik7fWNhdGNoKGUpe30gcmV0dXJuIHZ9Oy8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovZnVuY3Rpb24gb29fdHModil7dHJ5e29vX2NtKCkuY29uc29sZVRpbWUodik7fWNhdGNoKGUpe30gcmV0dXJuIHY7fTsvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL2Z1bmN0aW9uIG9vX3RlKHYsIGkpe3RyeXtvb19jbSgpLmNvbnNvbGVUaW1lRW5kKHYsIGkpO31jYXRjaChlKXt9IHJldHVybiB2O307Lyplc2xpbnQgdW5pY29ybi9uby1hYnVzaXZlLWVzbGludC1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvZGlzYWJsZS1lbmFibGUtcGFpcjosZXNsaW50LWNvbW1lbnRzL25vLXVubGltaXRlZC1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvbm8tYWdncmVnYXRpbmctZW5hYmxlOixlc2xpbnQtY29tbWVudHMvbm8tZHVwbGljYXRlLWRpc2FibGU6LGVzbGludC1jb21tZW50cy9uby11bnVzZWQtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLXVudXNlZC1lbmFibGU6LCovIl0sIm5hbWVzIjpbIlNoaXAiLCJHYW1lYm9hcmQiLCJib2FyZCIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsIm1pc3NlZFNob3RzIiwic2hpcHMiLCJwbGFjZVNoaXAiLCJjb29yZFgiLCJjb29yZFkiLCJuZXdTaGlwIiwicHVzaCIsInJlY2VpdmVBdHRhY2siLCJlbCIsImhpdCIsImFsbFNoaXBzU3VuayIsImV2ZXJ5Iiwic2hpcCIsImlzU3VuayIsIlBsYXllciIsImNvbnN0cnVjdG9yIiwiZ2FtZUJvYXJkIiwiaGl0cyIsIkdhbWUiLCJpbml0IiwiUHViU3ViIiwicHVibGlzaCIsImJvYXJkMSIsInBsYXllcjEiLCJib2FyZDIiLCJwbGF5ZXIyIiwic3Vic2NyaWJlIiwibXNnIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJvb19vbyIsImx1bmNoQXR0YWNrIiwicG9zWCIsInBvc1kiLCJhY3RpdmVQbGF5ZXIiLCJwbGFjZVNoaXBSYW5kb20iLCJzZXQiLCJTZXQiLCJzaGlwUGxhY2VkIiwiZXhwZWN0ZWRTaGlwTnVtIiwicGFyc2VJbnQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsb2NhdGlvbiIsImhhcyIsImFkZCIsImNoYW5nZUFjdGl2ZVBsYXllciIsImNvbXB1dGVyQXR0YWNrIiwiY2hlY2tXaW4iLCJuZXdBY3RpdmUiLCJ3aW5uZXIiLCJjb21wdXRlckF0dGFja1BvcyIsIm1pc3NlZCIsInVuZGVmaW5lZCIsIm9vX2NtIiwiZXZhbCIsImUiLCJpIiwiX2xlbiIsImFyZ3VtZW50cyIsInYiLCJfa2V5IiwiY29uc29sZUxvZyIsIm9vX3RyIiwiX2xlbjIiLCJfa2V5MiIsImNvbnNvbGVUcmFjZSIsIm9vX3RzIiwiY29uc29sZVRpbWUiLCJvb190ZSIsImNvbnNvbGVUaW1lRW5kIl0sInNvdXJjZVJvb3QiOiIifQ==