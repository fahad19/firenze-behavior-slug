this["firenze"] = this["firenze"] || {}; this["firenze"]["SlugBehavior"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* eslint-disable new-cap */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _lodash = __webpack_require__(1);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _firenze = __webpack_require__(2);

	var _firenze2 = _interopRequireDefault(_firenze);

	var Behavior = _firenze2['default'].Behavior;
	var P = _firenze2['default'].Promise;

	// ## What it does
	//
	// When saving a new model, it will automatically generate a slug and set it to specified field for you.
	//
	// For example, when saving a post with the title `Hello World`:
	//
	// ```js
	// var posts = new Posts();
	// var post = posts.model({
	//   title: 'Hello World'
	// });
	//
	// post.save().then(function (model) {
	//   var slug = model.get('slug'); // `hello-world`
	// });
	// ```
	//
	// It will also save the value `hello-world` in `slug` field.
	//
	// ## Usage
	//
	// ### Node.js
	//
	// With [npm](https://npmjs.com):
	//
	// ```
	// $ npm install --save firenze-behavior-slug
	// ```
	//
	// Now you can require it as follows:
	//
	// ```js
	// var SlugBehavior = require('firenze-behavior-slug');
	//
	// // create your Database instance...
	//
	// db.createCollectionClass({
	//   behaviors: [
	//     SlugBehavior
	//   ]
	// });
	// ```
	//
	// If you want to pass extra configuration options:
	//
	// ```js
	// db.createCollectionClass({
	//   behaviors: [
	//     {
	//       'class': SlugBehavior
	//       options: {
	//         source: 'title', // field to convert
	//         field: 'slug', // field to store the slug in
	//         separator: '-',
	//       }
	//     }
	//   ]
	// });
	// ```
	//
	// ### Browser
	//
	// Or [Bower](http://bower.io):
	//
	// ```
	// $ bower installl --save firenze-behavior-slug
	// ```
	//
	// Can be loaded in your HTML page as follows:
	//
	// ```js
	// <script src="bower_components/lodash/lodash.min.js"></script>
	// <script src="bower_components/async/lib/async.js"></script>
	// <script src="bower_components/bluebird/js/browser/bluebird.min.js"></script>
	// <script src="bower_components/validator-js/validator.min.js"></script>
	//
	// <script src="bower_components/firenze/dist/firenze.min.js"></script>
	// <script src="bower_components/firenze-behavior-slug/dist/firenze-behavior-slug.min.js"></script>
	//
	// <script>
	//   // Slug behavior is available in `firenze.SlugBehavior`
	// </script>
	// ```
	//

	var Slug = (function (_Behavior) {
	  function Slug() {
	    _classCallCheck(this, Slug);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _get(Object.getPrototypeOf(Slug.prototype), 'constructor', this).apply(this, args);

	    this.options = _lodash2['default'].merge({
	      source: this.collection.displayField,
	      field: 'slug',
	      separator: '-'
	    }, this.options);
	  }

	  _inherits(Slug, _Behavior);

	  _createClass(Slug, [{
	    key: 'beforeSave',
	    value: function beforeSave(model) {
	      if (!model.isNew()) {
	        return new P.resolve(true);
	      }

	      var source = model.get(this.options.source);
	      var slug = _lodash2['default'].chain(source.toLowerCase()).deburr().words().join(this.options.separator).value();

	      model.set(this.options.field, slug);
	      return new P.resolve(true);
	    }
	  }]);

	  return Slug;
	})(Behavior);

	exports['default'] = Slug;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	(function() { module.exports = this["_"]; }());

/***/ },
/* 2 */
/***/ function(module, exports) {

	(function() { module.exports = this["firenze"]; }());

/***/ }
/******/ ]);