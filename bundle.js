/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_css__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__app_css__);
/* global document */






var appRoot = document.createElement('div');

appRoot.id = 'app';
document.body.appendChild(appRoot);
__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__App__["a" /* App */], null), appRoot);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Modal__ = __webpack_require__(4);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      showModal: false,
      showLazyModal: false
    }, _this.hideLazyModal = function () {
      _this.setState({ showLazyModal: false });
    }, _this.hideModal = function () {
      _this.setState({ showModal: false });
    }, _this.showLazyModal = function () {
      _this.setState({ showLazyModal: true });
    }, _this.showModal = function () {
      _this.setState({ showModal: true });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          showModal = _state.showModal,
          showLazyModal = _state.showLazyModal;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'app' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          null,
          'react-page-click'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'button',
          { onClick: this.showModal },
          'Open Modal'
        ),
        '\xA0Closes on mouse down or touch start events',
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'button',
          { onClick: this.showLazyModal },
          'Open Lazy Model'
        ),
        '\xA0Closes on mouse down or touch end events',
        showModal ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1__Modal__["a" /* Modal */],
          { onClose: this.hideModal },
          'Modal content'
        ) : null,
        showLazyModal ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1__Modal__["a" /* Modal */],
          { onClose: this.hideLazyModal, notifyOnTouchEnd: true },
          'Lazy Modal content'
        ) : null
      );
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Modal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_Component__ = __webpack_require__(5);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






var Modal = function Modal(_ref) {
  var onClose = _ref.onClose,
      notifyOnTouchEnd = _ref.notifyOnTouchEnd,
      rest = _objectWithoutProperties(_ref, ['onClose', 'notifyOnTouchEnd']);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'shade' }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1__src_Component__["a" /* ReactPageClick */],
      { notify: onClose, notifyOnTouchEnd: notifyOnTouchEnd },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'popup' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', _extends({ className: 'content' }, rest))
      )
    )
  );
};


Modal.defaultProps = {
  notifyOnTouchEnd: undefined
};

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReactPageClick; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var MAX_MOVE = 20;

var extractCoordinates = function extractCoordinates(_ref) {
  var changedTouches = _ref.changedTouches;
  return { x: changedTouches[0].screenX, y: changedTouches[0].screenY };
};

var ReactPageClick = function (_React$PureComponent) {
  _inherits(ReactPageClick, _React$PureComponent);

  function ReactPageClick() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, ReactPageClick);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = ReactPageClick.__proto__ || Object.getPrototypeOf(ReactPageClick)).call.apply(_ref2, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ReactPageClick, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.insideClick = false;
      this.touchStart = null;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      global.window.addEventListener('mousedown', this.onDocumentMouseDown, false);
      global.window.addEventListener('mouseup', this.onDocumentMouseUp, false);
      global.window.addEventListener('touchstart', this.onDocumentTouchStart, false);
      global.window.addEventListener('touchend', this.onDocumentTouchEnd, false);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      global.window.removeEventListener('mousedown', this.onDocumentMouseDown, false);
      global.window.removeEventListener('mouseup', this.onDocumentMouseUp, false);
      global.window.removeEventListener('touchstart', this.onDocumentTouchStart, false);
      global.window.removeEventListener('touchend', this.onDocumentTouchEnd, false);
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props.outsideOnly ? {
        onMouseDown: this.onMouseDown,
        onTouchStart: this.onTouchStart
      } : {};

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.only(this.props.children), props);
    }
  }]);

  return ReactPageClick;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);
ReactPageClick.defaultProps = {
  onMouseDown: undefined,
  onTouchStart: undefined,
  outsideOnly: true,
  notifyOnTouchEnd: false
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.onDocumentMouseDown = function () {
    var _props;

    if (_this2.insideClick) {
      return;
    }
    (_props = _this2.props).notify.apply(_props, arguments);
  };

  this.onDocumentMouseUp = function () {
    _this2.insideClick = false;
  };

  this.onDocumentTouchEnd = function (event) {
    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    // on mobile safari click events are not bubbled up to the document unless the target has the
    // css `cursor: pointer;` http://www.quirksmode.org/blog/archives/2010/10/click_event_del_1.html
    // so try and work out if we should call the notify prop
    if (_this2.props.notifyOnTouchEnd && _this2.touchStart && !_this2.insideClick) {
      var _extractCoordinates = extractCoordinates(event),
          x = _extractCoordinates.x,
          y = _extractCoordinates.y;

      var dx = Math.abs(x - _this2.touchStart.x);
      var dy = Math.abs(y - _this2.touchStart.y);

      if (dx < MAX_MOVE && dy < MAX_MOVE) {
        var _props2;

        (_props2 = _this2.props).notify.apply(_props2, [event].concat(args));
      }
    }
    _this2.touchStart = null;
    _this2.insideClick = false;
  };

  this.onDocumentTouchStart = function (event) {
    for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }

    if (_this2.insideClick) {
      return;
    }
    if (_this2.props.notifyOnTouchEnd) {
      _this2.touchStart = extractCoordinates(event);
    } else {
      var _props3;

      (_props3 = _this2.props).notify.apply(_props3, [event].concat(args));
    }
  };

  this.onMouseDown = function () {
    _this2.insideClick = true;
    if (_this2.props.onMouseDown) {
      var _props4;

      (_props4 = _this2.props).onMouseDown.apply(_props4, arguments);
    }
  };

  this.onTouchStart = function () {
    _this2.insideClick = true;
    if (_this2.props.onTouchStart) {
      var _props5;

      (_props5 = _this2.props).onTouchStart.apply(_props5, arguments);
    }
  };
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(6)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);