/*!
 * x5-notify v0.1.0
 * (c) Keagan Chisnall
 * Released under the MIT License.
 */
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Vue = _interopDefault(require('vue'));
var __vue_normalize__ = _interopDefault(require('vue-runtime-helpers/dist/normalize-component.mjs'));
var styleInject = _interopDefault(require('../node_modules/style-inject/dist/style-inject.es.js'));

//
//
//
//
//
//
//
//
//
//
//
var script = {
  name: 'x5-n-message',
  props: ['options'],
  data: function data() {
    return {
      closeOnClick: this.options.closeOnClick || true,
      onClick: this.options.onClick,
      onClose: this.options.onClose,
      text: this.options.text,
      timeout: null,
      type: this.options.type,
      visible: false,
      wait: this.options.wait || 5
    };
  },
  computed: {
    typeClass: function typeClass() {
      var o = ['success', 'warning', 'error', 'special', 'info'];
      return o.includes(this.type) ? this.type : 'default';
    }
  },
  methods: {
    click: function click() {
      if (this.onClick) this.onClick();
      this.$emit('click');
      if (this.closeOnClick) this.close();
    },
    close: function close() {
      var _this = this;

      clearTimeout(this.timeout);
      if (this.onClose) this.onClose();
      this.visible = false;
      setTimeout(function () {
        return _this.$emit('close');
      }, 1000);
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    setTimeout(function () {
      return _this2.visible = true;
    }, 100);
    this.timeout = setTimeout(function () {
      return _this2.close();
    }, this.wait * 1000);
  }
};

/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    ref: "message",
    "class": "x5-n-message x5-n-" + _vm.typeClass + " " + (_vm.visible ? 'x5-n-visible' : ''),
    on: {
      "click": _vm.click
    }
  }, [_c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.text)
    }
  }), _vm._v(" "), _vm.closeOnClick ? _c('span', {
    staticClass: "x5-n-click-to-dismiss"
  }, [_vm._v("(click to dismiss)")]) : _vm._e()]);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = undefined;
/* scoped */

var __vue_scope_id__ = undefined;
/* module identifier */

var __vue_module_identifier__ = undefined;
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__ = __vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
function _await(value, then, direct) {
  if (direct) {
    return then ? then(value) : value;
  }

  if (!value || !value.then) {
    value = Promise.resolve(value);
  }

  return then ? value.then(then) : value;
}

var script$1 = {
  name: "x5-n-dialog",
  props: ["close", "options"],
  data: function data() {
    return {
      input: null,
      isAlert: this.options.type === "alert",
      isConfirm: this.options.type === "confirm",
      isPrompt: this.options.type === "prompt",
      labelOK: this.options.labelOK || "OK",
      labelCancel: this.options.labelCancel || "Cancel",
      labels: Object.assign({}, {
        ok: "OK",
        cancel: "Cancel"
      }, {}, this.options.labels),
      onCancel: this.options.onCancel,
      onOK: this.options.onOK,
      permanent: this.options.permanent,
      rules: this.options.rules,
      text: this.options.text,
      title: this.options.title
    };
  },
  computed: {
    errors: function errors() {
      var _this = this;

      if (!this.isPrompt || !this.rules) return [];
      return this.rules.map(function (e) {
        return e(_this.input);
      }).filter(function (e) {
        return e !== true;
      });
    }
  },
  methods: {
    cancelClick: function cancelClick() {
      try {
        var _this3 = this;

        if (_this3.onCancel) _this3.onCancel();

        _this3.close();

        return _await();
      } catch (e) {
        return Promise.reject(e);
      }
    },
    okClick: function okClick() {
      try {
        var _this5 = this;

        if (_this5.onOK) _this5.onOK();

        _this5.close(_this5.isPrompt ? _this5.input : true);

        return _await();
      } catch (e) {
        return Promise.reject(e);
      }
    }
  }
};

/* script */
var __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "x5-n-dialog"
  }, [_vm.title ? _c('div', {
    staticClass: "x5-n-header"
  }, [_vm._v("\n    " + _vm._s(_vm.title) + "\n    "), !_vm.permanent ? _c('span', {
    staticClass: "x5-n-close",
    on: {
      "click": function click($event) {
        if ($event.target !== $event.currentTarget) {
          return null;
        }

        return _vm.close($event);
      }
    }
  }, [_vm._v("❌")]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "x5-n-content"
  }, [_vm.text ? _c('p', [_vm._v(_vm._s(_vm.text))]) : _vm._e(), _vm._v(" "), _vm.isPrompt ? _c('div', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.input,
      expression: "input"
    }],
    domProps: {
      "value": _vm.input
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) {
          return;
        }

        _vm.input = $event.target.value;
      }
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "x5-n-errors"
  }, [_vm._v(_vm._s(_vm.errors[0]))])]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "x5-n-footer"
  }, [!_vm.isAlert ? _c('button', {
    on: {
      "click": _vm.cancelClick
    }
  }, [_vm._v(_vm._s(_vm.labelCancel))]) : _vm._e(), _vm._v(" "), _c('button', {
    staticClass: "x5-n-ok",
    attrs: {
      "disabled": _vm.errors.length > 0
    },
    on: {
      "click": _vm.okClick
    }
  }, [_vm._v(_vm._s(_vm.labelOK))])])]);
};

var __vue_staticRenderFns__$1 = [];
/* style */

var __vue_inject_styles__$1 = undefined;
/* scoped */

var __vue_scope_id__$1 = undefined;
/* module identifier */

var __vue_module_identifier__$1 = undefined;
/* functional template */

var __vue_is_functional_template__$1 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$1 = __vue_normalize__({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, undefined, undefined);

//

function _await$1(value, then, direct) {
  if (direct) {
    return then ? then(value) : value;
  }

  if (!value || !value.then) {
    value = Promise.resolve(value);
  }

  return then ? value.then(then) : value;
}

var script$2 = {
  name: 'x5-n-modal',
  components: {
    x5Dialog: __vue_component__$1
  },
  props: {
    options: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    component: {
      type: Object,
      "default": function _default() {
        return null;
      }
    },
    resolve: {
      type: Function,
      required: true
    }
  },
  data: function data() {
    return {
      attention: false,
      onClose: this.options.cancelCB,
      overlay: this.options.overlay || true,
      permanent: this.options.permanent || false,
      width: this.options.width || 500,
      xClass: this.options["class"] || '',
      xStyle: this.options.style || ''
    };
  },
  methods: {
    close: function close() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (this.onClose) this.onClose();
      this.resolve(val);
      this.$emit('close', val);
    },
    overlayClick: function overlayClick() {
      try {
        var _this2 = this;

        if (_this2.overlay && !_this2.permanent) _this2.close();else {
          _this2.attention = true;
          setTimeout(function () {
            return _this2.attention = false;
          }, 150);
        }
        return _await$1();
      } catch (e) {
        return Promise.reject(e);
      }
    }
  }
};

/* script */
var __vue_script__$2 = script$2;
/* template */

var __vue_render__$2 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    "class": "x5-n-modal-wrapper " + (_vm.overlay ? 'x5-n-overlay' : ''),
    on: {
      "click": function click($event) {
        if ($event.target !== $event.currentTarget) {
          return null;
        }

        return _vm.overlayClick($event);
      }
    }
  }, [_c('div', {
    "class": "x5-n-modal " + (_vm.attention ? 'x5-n-attention' : '') + " " + _vm.xClass,
    style: "max-width:" + _vm.width + "px " + _vm.xStyle
  }, [_vm.component ? _c(_vm.component, {
    tag: "component",
    attrs: {
      "close": _vm.close,
      "options": _vm.options
    }
  }) : _c('x5-dialog', {
    attrs: {
      "close": _vm.close,
      "options": _vm.options
    }
  })], 1)]);
};

var __vue_staticRenderFns__$2 = [];
/* style */

var __vue_inject_styles__$2 = undefined;
/* scoped */

var __vue_scope_id__$2 = undefined;
/* module identifier */

var __vue_module_identifier__$2 = undefined;
/* functional template */

var __vue_is_functional_template__$2 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$2 = __vue_normalize__({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, undefined, undefined, undefined);

//
var script$3 = {
  name: "x5-n-app",
  components: {
    x5Message: __vue_component__,
    x5Modal: __vue_component__$2
  },
  computed: {
    zIndex: function zIndex() {
      return this.$root.zIndex || 200;
    },
    messages: function messages() {
      return this.$root.messages;
    },
    position: function position() {
      var o = ["bottom-right", "top-left", "top-right", "bottom-left"];
      return o.includes(this.$root.position) ? this.type : o[0];
    },
    modal: function modal() {
      return this.$root.modals[0];
    }
  },
  methods: {
    closeMessage: function closeMessage(key) {
      this.$root.removeMessage(key);
    },
    closeModal: function closeModal(key) {
      this.$root.removeModal(key);
    }
  }
};

/* script */
var __vue_script__$3 = script$3;
/* template */

var __vue_render__$3 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    style: "z-index:" + _vm.zIndex + ";"
  }, [_c('div', {
    staticClass: "x5-n-modals"
  }, [_vm.modal ? _c('x5-modal', {
    attrs: {
      "options": _vm.modal.options,
      "type": _vm.modal.type,
      "component": _vm.modal.component,
      "resolve": _vm.modal.resolve
    },
    on: {
      "close": function close($event) {
        return _vm.closeModal(_vm.modal.key);
      }
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('div', {
    "class": "x5-n-messages x5-n-" + _vm.position
  }, _vm._l(_vm.messages, function (m) {
    return _c('x5-message', {
      key: m.key,
      attrs: {
        "options": m.options
      },
      on: {
        "close": function close($event) {
          return _vm.closeMessage(m.key);
        }
      }
    }, [_vm._v(_vm._s(m.text))]);
  }), 1)]);
};

var __vue_staticRenderFns__$3 = [];
/* style */

var __vue_inject_styles__$3 = undefined;
/* scoped */

var __vue_scope_id__$3 = undefined;
/* module identifier */

var __vue_module_identifier__$3 = undefined;
/* functional template */

var __vue_is_functional_template__$3 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$3 = __vue_normalize__({
  render: __vue_render__$3,
  staticRenderFns: __vue_staticRenderFns__$3
}, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, undefined, undefined, undefined);

var x5NVue = new Vue({
  data: {
    position: null,
    messages: [],
    modals: [],
    zIndex: 200
  },
  methods: {
    addModal: function addModal(modal) {
      var promise = new Promise(function (resolve) {
        return modal.resolve = resolve;
      });
      modal.key = Math.floor(Math.random() * 10000);
      this.modals.unshift(modal);
      return promise;
    },
    removeModal: function removeModal(key) {
      this.modals = this.modals.filter(function (e) {
        return e.key !== key;
      });
    },
    addMessage: function addMessage(message) {
      message.key = Math.floor(Math.random() * 10000);
      this.messages.push(message);
    },
    removeMessage: function removeMessage(key) {
      this.messages = this.messages.filter(function (e) {
        return e.key !== key;
      });
    }
  },
  render: function render(h) {
    return h(__vue_component__$3);
  }
});

var css = ".x5-n-messages {\n  position: fixed;\n  width: 0;\n  overflow: visible; }\n  .x5-n-messages.x5-n-top-left, .x5-n-messages.x5-n-top-right {\n    top: 10px; }\n  .x5-n-messages.x5-n-bottom-left, .x5-n-messages.x5-n-bottom-right {\n    bottom: 10px; }\n  .x5-n-messages.x5-n-top-left, .x5-n-messages.x5-n-bottom-left {\n    left: 10px; }\n    .x5-n-messages.x5-n-top-left .x5-n-message, .x5-n-messages.x5-n-bottom-left .x5-n-message {\n      left: -300px; }\n      .x5-n-messages.x5-n-top-left .x5-n-message.x5-n-visible, .x5-n-messages.x5-n-bottom-left .x5-n-message.x5-n-visible {\n        left: 0; }\n  .x5-n-messages.x5-n-top-right, .x5-n-messages.x5-n-bottom-right {\n    right: 10px; }\n    .x5-n-messages.x5-n-top-right .x5-n-message, .x5-n-messages.x5-n-bottom-right .x5-n-message {\n      right: -320px; }\n      .x5-n-messages.x5-n-top-right .x5-n-message.x5-n-visible, .x5-n-messages.x5-n-bottom-right .x5-n-message.x5-n-visible {\n        right: 290px; }\n\n.x5-n-message {\n  border-radius: 10px;\n  box-shadow: 3px 3px 8px #0008;\n  color: #fff;\n  cursor: pointer;\n  font-size: 20px;\n  margin: 0;\n  max-height: 0;\n  opacity: 0;\n  padding: 0;\n  position: relative;\n  text-shadow: 1px 1px 2px #0008;\n  transition: linear 250ms;\n  width: 260px; }\n  .x5-n-message.x5-n-default {\n    background-color: rgba(155, 155, 155, 0.85); }\n  .x5-n-message.x5-n-success {\n    background-color: rgba(65, 187, 93, 0.85); }\n  .x5-n-message.x5-n-warning {\n    background-color: rgba(248, 149, 20, 0.85); }\n  .x5-n-message.x5-n-error {\n    background-color: rgba(207, 49, 49, 0.85); }\n  .x5-n-message.x5-n-special {\n    background-color: rgba(136, 64, 231, 0.85); }\n  .x5-n-message.x5-n-info {\n    background-color: rgba(49, 168, 236, 0.85); }\n  .x5-n-message.x5-n-visible {\n    transition: 500ms cubic-bezier(0.2, 0.9, 0.3, 1.3);\n    opacity: 1;\n    max-height: 100%;\n    padding: 15px;\n    margin-top: 10px; }\n  .x5-n-message .x5-n-click-to-dismiss {\n    position: absolute;\n    bottom: 5px;\n    right: 10px;\n    font-size: 11px;\n    font-family: Arial, Helvetica, sans-serif;\n    text-shadow: none;\n    color: #eee8; }\n\n@use \"sass:map\";\n.x5-n-modal-wrapper {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%; }\n  .x5-n-modal-wrapper.x5-n-overlay {\n    z-index: 5;\n    background-color: #0006; }\n  .x5-n-modal-wrapper .x5-n-modal {\n    background-color: #fff;\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);\n    transition: all 0.3s ease;\n    width: 100%;\n    overflow: auto;\n    max-width: 500px;\n    position: fixed;\n    max-height: 80vh;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%); }\n    .x5-n-modal-wrapper .x5-n-modal.x5-n-attention {\n      animation: shake 150ms; }\n\n@keyframes shake {\n  14%,\n  70% {\n    transform: translate(-49%, -49%); }\n  28%,\n  56%,\n  84% {\n    transform: translate(-49%, -51%); }\n  42%,\n  98% {\n    transform: translate(-51%, -51%); } }\n\n.x5-n-dialog .x5-n-header {\n  position: relative;\n  font-size: 22px;\n  font-weight: bold;\n  background: #fafafa;\n  border-bottom: #eee 1px solid;\n  color: #333;\n  border-radius: 2px 2px 0 0;\n  padding: 16px 44px 16px 24px; }\n  .x5-n-dialog .x5-n-header .x5-n-close {\n    font-size: 14px;\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    right: 24px;\n    color: transparent;\n    cursor: pointer;\n    text-shadow: 0 0 0 #999; }\n    .x5-n-dialog .x5-n-header .x5-n-close:hover {\n      text-shadow: 0 0 0 #666; }\n\n.x5-n-dialog .x5-n-content {\n  /* Always leave a little space above */\n  max-height: 80vh;\n  padding: 16px 24px; }\n  .x5-n-dialog .x5-n-content input {\n    width: 94%;\n    padding: 3%;\n    border-radius: 2px;\n    border: 1px solid #ccc; }\n  .x5-n-dialog .x5-n-content p.x5-n-errors {\n    height: 14px;\n    color: #c80000;\n    margin: 6px 0 0 0;\n    font-size: 14px; }\n\n.x5-n-dialog .x5-n-footer {\n  background: #fbfbfb;\n  border-top: #eee 1px solid;\n  border-radius: 0 0 2px 2px;\n  text-align: end; }\n  .x5-n-dialog .x5-n-footer button {\n    background-color: transparent;\n    border: 0 solid #4442;\n    color: #444;\n    cursor: pointer;\n    font-size: 14px;\n    font-weight: bold;\n    height: 40px;\n    margin: 4px;\n    padding: 1px 6px;\n    text-transform: uppercase;\n    width: 80px; }\n    .x5-n-dialog .x5-n-footer button.x5-n-ok {\n      color: dodgerblue;\n      border-color: #1e90ff80; }\n    .x5-n-dialog .x5-n-footer button:hover {\n      border-width: 1px; }\n    .x5-n-dialog .x5-n-footer button:disabled {\n      color: #ccc;\n      border-width: 0;\n      cursor: unset; }\n";
styleInject(css);

var index = {
  // Public Methods
  message: function message() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return x5NVue.addMessage({
      options: options
    });
  },
  modal: function modal(component) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return x5NVue.addModal({
      component: component,
      options: options
    });
  },
  alert: function alert(options) {
    return x5NVue.addModal({
      options: Object.assign({}, options, {}, {
        type: 'alert'
      })
    });
  },
  confirm: function confirm(options) {
    return x5NVue.addModal({
      options: Object.assign({}, options, {}, {
        type: 'confirm'
      })
    });
  },
  prompt: function prompt(options) {
    return x5NVue.addModal({
      options: Object.assign({}, options, {}, {
        type: 'prompt'
      })
    });
  },
  install: function install(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    // Set options
    if (options.position) x5NVue.position = options.position;
    if (options.zIndex) x5NVue.zIndex = options.zIndex; // Create and mount HTML element for new Vue

    var el = document.createElement('div');
    el.setAttribute('id', 'x5-n-vue');
    document.body.appendChild(el);
    x5NVue.$mount('#x5-n-vue'); // Create hooks on main vue

    Vue.prototype.$message = this.message;
    Vue.prototype.$modal = this.modal;
    Vue.prototype.$alert = this.alert;
    Vue.prototype.$confirm = this.confirm;
    Vue.prototype.$prompt = this.prompt;
  }
};

module.exports = index;
