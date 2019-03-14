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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  // use时执行\r\n  install (Vue, options) {\r\n    Vue.directive(\"menu\", {\r\n      // 钩子函数, 第一次绑定时触发\r\n      bind (el, binding, vnode) {\r\n        // 注册鼠标右击事件\r\n        el.addEventListener(\"contextmenu\", e => {\r\n          // 阻止默认事件和冒泡\r\n          _utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].preventDefault(e)\r\n          // 初始化遮罩层\r\n          _utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].initMask(el)\r\n          // 初始化菜单栏\r\n          _utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].initMenu(binding.value, el, e)\r\n        })\r\n        // console.log({el, binding, vnode})\r\n      },\r\n      // 钩子函数, 解绑时触发\r\n      unbind (el) {\r\n        // console.log('解绑了?')\r\n      }\r\n    })\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/ldq.js":
/*!********************!*\
  !*** ./src/ldq.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst ldq = {\r\n  css: (node, styles) => {\r\n\t\tnode.style.cssText = node.style.cssText ? node.style.cssText += styles : styles\r\n\t},\r\n\r\n\twidth: (node) => {\r\n\t\treturn node.getBoundingClientRect().width\r\n\t},\r\n\r\n\theight: (node) => {\r\n\t\treturn node.getBoundingClientRect().height\r\n\t},\r\n\t\r\n\tbottom: (node) => {\r\n\t\treturn node.getBoundingClientRect().bottom\r\n\t},\r\n  \r\n  x: (node) => {\r\n\t\treturn node.getBoundingClientRect().x\r\n  },\r\n\r\n  y: (node) => {\r\n\t\treturn node.getBoundingClientRect().y\r\n  },\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (ldq);\n\n//# sourceURL=webpack:///./src/ldq.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ldq_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ldq.js */ \"./src/ldq.js\");\n\r\n\r\nconst utils = {\r\n  mask: {},\r\n  menu: {},\r\n  /**\r\n   * 阻止默认事件和冒泡\r\n   * @param { Event } e 事件参数\r\n   */\r\n  preventDefault: (e) => {\r\n    // 阻止冒泡\r\n    window.event ? window.event.cancelBubble = true : e.stopPropagation()\r\n    // 阻止默认事件\r\n    e.preventDefault ? e.preventDefault() : window.event.returnValue == false\r\n  },\r\n\r\n  /**\r\n   * 初始化遮罩层\r\n   */\r\n  initMask: (el) => {\r\n    utils.unMaskAndMenu()\r\n    let mask = document.createElement('div')\r\n    mask.id = 'ldq-mask'\r\n    mask.style.width = window.innerWidth + 'px'\r\n    mask.style.height =  window.innerHeight + 'px'\r\n    mask.style.background = 'rgba(0, 0, 0, 0)'\r\n    mask.style.position = 'fixed'\r\n    mask.style.left = 0 + 'px'\r\n    mask.style.top = 0 + 'px'\r\n    mask.style.zIndex = 9999998\r\n    document.body.appendChild(mask)\r\n    utils.mask = mask\r\n    mask.addEventListener('click', e => {\r\n      utils.unMaskAndMenu()\r\n    })\r\n    mask.addEventListener('contextmenu', e => {\r\n      utils.unMaskAndMenu()\r\n      e.preventDefault ? e.preventDefault() : window.event.returnValue == false\r\n    })\r\n  },\r\n\r\n  /**\r\n   * 初始化菜单栏\r\n   */\r\n  initMenu: (options, el, e) => {\r\n    const menu = utils.render(options)\r\n    utils.menu = menu\r\n    document.body.appendChild(menu)\r\n    // 计算位置\r\n\t\tlet x = e.clientX\r\n    let y = e.clientY\r\n\t\tif (window.innerWidth - x < menu.offsetWidth) {\r\n\t\t\tx -= menu.offsetWidth\r\n\t\t}\r\n\t\tif (window.innerHeight - y < menu.offsetHeight) {\r\n\t\t\ty -= menu.offsetHeight\r\n    }\r\n    menu.style.left = x + 'px'\r\n    menu.style.top = y + 'px'\r\n    menu.addEventListener('contextmenu', e => {\r\n      utils.unMaskAndMenu()\r\n      e.preventDefault ? e.preventDefault() : window.event.returnValue == false\r\n    })\r\n    // console.log(menu)\r\n  },\r\n\r\n  /**\r\n   * 卸载遮罩层和菜单栏\r\n   */\r\n  unMaskAndMenu: () => {\r\n    const temp = document.getElementById('ldq-mask')\r\n    if (temp) {\r\n      temp.parentNode.removeChild(temp)\r\n    }\r\n    const menuList = document.querySelectorAll('.ldq-menu')\r\n    menuList.forEach(item => {\r\n      item.parentNode.removeChild(item)\r\n    })\r\n  },\r\n\r\n  /**\r\n   * 渲染菜单栏\r\n   */\r\n  render: (options) => {\r\n    const menuList = []\r\n    options.forEach(item => {\r\n      switch (item.type) {\r\n        case 'a': menuList.push(utils._a(item)); break;\r\n        case 'hr': menuList.push(utils._hr(item)); break;\r\n        case 'li': menuList.push(utils._li(item)); break;\r\n        case 'ul': menuList.push(utils._ul(item)); break;\r\n        default: return\r\n      }\r\n    })\r\n    return new utils.DomIfy('ul', {class: 'ldq-menu'}, menuList).render()\r\n  },\r\n\r\n  _a: (opt) => {\r\n    const a = new utils.DomIfy('a', {\r\n      href: opt.href,\r\n      target: '_blank'\r\n    }, [opt.title]).render()\r\n    const li = new utils.DomIfy('li', {\r\n      class: 'ldq-menu-li ldq-menu-a'\r\n    }, [a]).render()\r\n    return li\r\n  },\r\n\r\n  _hr: (opt) => {\r\n    return new utils.DomIfy('li', {class: 'ldq-menu-hr'}).render()\r\n  },\r\n\r\n  _li: (opt) => {\r\n    const li = new utils.DomIfy('li', {\r\n      class: 'ldq-menu-li' + (opt.disabled ? ' ldq-menu-disabled' : '')\r\n    }, [opt.title]).render()\r\n    if (!opt.disabled && opt.func) {\r\n      li.addEventListener('click', e => {\r\n        opt.func(e)\r\n        utils.unMaskAndMenu()\r\n      })\r\n    }\r\n    return li\r\n  },\r\n\r\n  _ul: (opt) => {\r\n    const li = new utils.DomIfy('li', {\r\n      class: 'ldq-menu-li ldq-menu-list' + (opt.disabled ? ' ldq-menu-disabled' : '')\r\n    }, [opt.title]).render()\r\n    // 添加二级菜单\r\n    if (!opt.disabled && opt.children) {\r\n      const ul = utils.render(opt.children)\r\n      li.addEventListener('mouseover', e => {\r\n        li.appendChild(ul)\r\n        ul.style.position = 'fixed'\r\n        // 计算位置\r\n        let x = _ldq_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].x(utils.menu) + _ldq_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].width(utils.menu)\r\n        let y = _ldq_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y(li)\r\n        if (window.innerWidth - x < ul.offsetWidth) {\r\n          x -= _ldq_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].width(utils.menu) + _ldq_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].width(ul)\r\n        }\r\n        if (window.innerHeight - y < ul.offsetHeight) {\r\n          ul.style.top = _ldq_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].bottom(li) - _ldq_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].height(ul) + 'px'\r\n        } else {\r\n          ul.style.top = _ldq_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y(li) + 'px'\r\n        }\r\n        ul.style.left = x + 'px'\r\n      })\r\n      li.addEventListener('mouseout', (e) => {\r\n        if (e.toElement) {\r\n          if (e.toElement.parentNode != ul && e.toElement != ul) {\r\n            li.removeChild(ul)\r\n          }\r\n        }\r\n      })\r\n      // utils.mask.addEventListener('mouseover', e => {\r\n      //   li.removeChild(ul)\r\n      // })\r\n    }\r\n    return li\r\n  },\r\n\r\n  DomIfy: class DomIfy {\r\n    /**\r\n     * 渲染dom\r\n     * @param { String } [ tagName = 'ul' ] 元素名称\r\n\t\t * @param { Object } [ attrs = {} ] 元素属性对象\r\n\t\t * @param { Array } [ children = [] ] 子元素集合\r\n     */\r\n    constructor (tagName = 'ul', attrs = {}, children = []) {\r\n      this.tagName = tagName\r\n      this.attrs = attrs\r\n      this.children = Array.from(children)\r\n      this.event = event || []\r\n    }\r\n\r\n    render () {\r\n      const el = document.createElement(this.tagName)\r\n      // 循环添加属性\r\n      for (let key in this.attrs) {\r\n        el.setAttribute(key, this.attrs[key])\r\n      }\r\n      // 循环绑定事件\r\n      if (this.event.length) {\r\n        this.event.forEach(item => {\r\n          el.addEventListener(item.eventName, item.callBack)\r\n        })\r\n      }\r\n      // append所有子元素\r\n      this.children.forEach(child => {\r\n        if (typeof child === 'string') {\r\n          el.innerHTML = child\r\n        } else {\r\n          el.appendChild(child)\r\n        }\r\n      })\r\n      return el\r\n    }\r\n  },\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (utils);\r\n\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });