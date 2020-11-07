(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/router/views/register.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/router/views/register.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_auth_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layouts/auth.vue */ "./resources/js/router/layouts/auth.vue");
/* harmony import */ var _utils_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/form */ "./resources/js/utils/form.js");
/* harmony import */ var _state_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../state/helpers */ "./resources/js/state/helpers.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Layout: _layouts_auth_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    var _this = this;

    return {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      valid: false,
      errorMessage: '',
      passwordConfirmationRule: [function (value) {
        return value === _this.password || 'The password confirmation does not match.';
      }],
      showAlert: false,
      loading: false
    };
  },
  computed: _objectSpread({}, _utils_form__WEBPACK_IMPORTED_MODULE_1__["default"]),
  methods: _objectSpread(_objectSpread({}, _state_helpers__WEBPACK_IMPORTED_MODULE_2__["authMethods"]), {}, {
    submit: function submit() {
      var _this2 = this;

      if (this.$refs.form.validate()) {
        this.loading = true;
        this.register({
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation
        }).then(function () {
          _this2.$router.push({
            name: 'home'
          });

          self.loading = false;
        })["catch"](function (error) {
          var _error = error.response.data;
          _this2.showAlert = true;
          _this2.errorMessage = _error.errors.join('<br/>');
          _this2.loading = false;
        });
      }
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/router/layouts/auth.vue?vue&type=style&index=0&id=36abef66&scoped=true&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/router/layouts/auth.vue?vue&type=style&index=0&id=36abef66&scoped=true&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".layout-side[data-v-36abef66] {\n  width: 450px;\n}\n.theme--light.v-application[data-v-36abef66] {\n  background: #f2f5f8;\n  color: rgba(0, 0, 0, 0.87);\n}\n.w-full[data-v-36abef66] {\n  width: 100%;\n}\n.layout-side div.brand[data-v-36abef66] {\n  min-height: 300px;\n}\n.layout-side img[data-v-36abef66] {\n  padding: 30px;\n}\n.layout-content[data-v-36abef66] {\n  max-width: 450px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/router/layouts/auth.vue?vue&type=style&index=0&id=36abef66&scoped=true&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/router/layouts/auth.vue?vue&type=style&index=0&id=36abef66&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./auth.vue?vue&type=style&index=0&id=36abef66&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/router/layouts/auth.vue?vue&type=style&index=0&id=36abef66&scoped=true&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/router/layouts/auth.vue?vue&type=template&id=36abef66&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/router/layouts/auth.vue?vue&type=template&id=36abef66&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    { attrs: { id: "inspire", light: "" } },
    [
      _c(
        "v-row",
        [
          _c(
            "v-sheet",
            {
              staticClass:
                "text-center layout-side mx-auto mx-md-1 d-none d-md-flex flex-md-column justify-space-between",
              attrs: { light: "" }
            },
            [
              _c("div", { staticClass: "mt-3 mt-md-10 pa-2 brand" }, [
                _c(
                  "div",
                  { staticClass: "display-2 font-weight-bold primary--text" },
                  [_vm._v("Playerize")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "title my-2" }, [_vm._v("For teams!")])
              ]),
              _vm._v(" "),
              _c("img", {
                staticClass: "w-full",
                attrs: { src: __webpack_require__(/*! ../../assets/undraw_fans_gr54.svg */ "./resources/js/assets/undraw_fans_gr54.svg") }
              })
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "pa-2 pa-md-4 flex-grow-1 align-center justify-center d-flex flex-column"
            },
            [
              _c(
                "div",
                { staticClass: "layout-content w-full ma-auto" },
                [_vm._t("default")],
                2
              )
            ]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/router/views/register.vue?vue&type=template&id=28546c1c&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/router/views/register.vue?vue&type=template&id=28546c1c& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Layout",
    [
      _c(
        "v-card",
        { staticClass: "text-center" },
        [
          _c("v-card-title", { staticClass: "justify-center pt-9 text-h4" }, [
            _vm._v("Create an account. ")
          ]),
          _vm._v(" "),
          _c("v-card-subtitle", [_vm._v("and, create your team dashboard.")]),
          _vm._v(" "),
          _c(
            "v-card-text",
            { staticClass: "mt-5" },
            [
              _c(
                "v-form",
                {
                  ref: "form",
                  staticClass: "pb-5",
                  model: {
                    value: _vm.valid,
                    callback: function($$v) {
                      _vm.valid = $$v
                    },
                    expression: "valid"
                  }
                },
                [
                  _c(
                    "v-alert",
                    {
                      attrs: {
                        border: "left",
                        "close-text": "Close Alert",
                        color: "deep-orange accent-4",
                        dark: "",
                        dismissible: ""
                      },
                      model: {
                        value: _vm.showAlert,
                        callback: function($$v) {
                          _vm.showAlert = $$v
                        },
                        expression: "showAlert"
                      }
                    },
                    [
                      _vm._v(
                        "\n                    " +
                          _vm._s(_vm.errorMessage) +
                          "\n                "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      rules: _vm.nameRules,
                      label: "Fullname",
                      placeholder: "eg: Bob Smith",
                      required: "",
                      outlined: ""
                    },
                    model: {
                      value: _vm.name,
                      callback: function($$v) {
                        _vm.name = $$v
                      },
                      expression: "name"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      rules: _vm.emailRules,
                      label: "Email",
                      placeholder: "eg: address@email.com",
                      required: "",
                      outlined: ""
                    },
                    model: {
                      value: _vm.email,
                      callback: function($$v) {
                        _vm.email = $$v
                      },
                      expression: "email"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      type: "password",
                      rules: _vm.passwordRules,
                      label: "Password",
                      placeholder: "***********",
                      required: "",
                      outlined: ""
                    },
                    model: {
                      value: _vm.password,
                      callback: function($$v) {
                        _vm.password = $$v
                      },
                      expression: "password"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      type: "password",
                      rules: _vm.passwordConfirmationRule,
                      label: "Confirm Password",
                      placeholder: "***********",
                      required: "",
                      outlined: ""
                    },
                    model: {
                      value: _vm.password_confirmation,
                      callback: function($$v) {
                        _vm.password_confirmation = $$v
                      },
                      expression: "password_confirmation"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        color: "primary ",
                        loading: _vm.loading,
                        large: "",
                        block: ""
                      },
                      on: { click: _vm.submit },
                      scopedSlots: _vm._u([
                        {
                          key: "loader",
                          fn: function() {
                            return [_c("span", [_vm._v("Loading...")])]
                          },
                          proxy: true
                        }
                      ])
                    },
                    [_vm._v("Submit\n                    ")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "text-center pt-12" },
        [
          _vm._v("\n        Already have an account?\n        "),
          _c("router-link", { attrs: { to: { name: "login" } } }, [
            _vm._v("Login here")
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vuetify-loader/lib/runtime/installComponents.js":
/*!**********************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/runtime/installComponents.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function installComponents (component, components) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }
}


/***/ }),

/***/ "./resources/js/assets/undraw_fans_gr54.svg":
/*!**************************************************!*\
  !*** ./resources/js/assets/undraw_fans_gr54.svg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/undraw_fans_gr54.svg?96537b94a74f497a44dd15bd9289fa81";

/***/ }),

/***/ "./resources/js/router/layouts/auth.vue":
/*!**********************************************!*\
  !*** ./resources/js/router/layouts/auth.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_vue_vue_type_template_id_36abef66_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.vue?vue&type=template&id=36abef66&scoped=true& */ "./resources/js/router/layouts/auth.vue?vue&type=template&id=36abef66&scoped=true&");
/* harmony import */ var _auth_vue_vue_type_style_index_0_id_36abef66_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.vue?vue&type=style&index=0&id=36abef66&scoped=true&lang=scss& */ "./resources/js/router/layouts/auth.vue?vue&type=style&index=0&id=36abef66&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VApp */ "./node_modules/vuetify/lib/components/VApp/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VSheet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VSheet */ "./node_modules/vuetify/lib/components/VSheet/index.js");

var script = {}



/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  script,
  _auth_vue_vue_type_template_id_36abef66_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _auth_vue_vue_type_template_id_36abef66_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "36abef66",
  null
  
)

/* vuetify-loader */




_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VApp: vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__["VApp"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["VRow"],VSheet: vuetify_lib_components_VSheet__WEBPACK_IMPORTED_MODULE_6__["VSheet"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/router/layouts/auth.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/router/layouts/auth.vue?vue&type=style&index=0&id=36abef66&scoped=true&lang=scss&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/router/layouts/auth.vue?vue&type=style&index=0&id=36abef66&scoped=true&lang=scss& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_auth_vue_vue_type_style_index_0_id_36abef66_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./auth.vue?vue&type=style&index=0&id=36abef66&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/router/layouts/auth.vue?vue&type=style&index=0&id=36abef66&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_auth_vue_vue_type_style_index_0_id_36abef66_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_auth_vue_vue_type_style_index_0_id_36abef66_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_auth_vue_vue_type_style_index_0_id_36abef66_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_auth_vue_vue_type_style_index_0_id_36abef66_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/router/layouts/auth.vue?vue&type=template&id=36abef66&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/router/layouts/auth.vue?vue&type=template&id=36abef66&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_auth_vue_vue_type_template_id_36abef66_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./auth.vue?vue&type=template&id=36abef66&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/router/layouts/auth.vue?vue&type=template&id=36abef66&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_auth_vue_vue_type_template_id_36abef66_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_auth_vue_vue_type_template_id_36abef66_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/router/views/register.vue":
/*!************************************************!*\
  !*** ./resources/js/router/views/register.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _register_vue_vue_type_template_id_28546c1c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.vue?vue&type=template&id=28546c1c& */ "./resources/js/router/views/register.vue?vue&type=template&id=28546c1c&");
/* harmony import */ var _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.vue?vue&type=script&lang=js& */ "./resources/js/router/views/register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VAlert */ "./node_modules/vuetify/lib/components/VAlert/index.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _register_vue_vue_type_template_id_28546c1c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _register_vue_vue_type_template_id_28546c1c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */









_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VAlert: vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_4__["VAlert"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCard"],VCardSubtitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardSubtitle"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardTitle"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_7__["VForm"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_8__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/router/views/register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/router/views/register.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/router/views/register.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/router/views/register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/router/views/register.vue?vue&type=template&id=28546c1c&":
/*!*******************************************************************************!*\
  !*** ./resources/js/router/views/register.vue?vue&type=template&id=28546c1c& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_28546c1c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=template&id=28546c1c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/router/views/register.vue?vue&type=template&id=28546c1c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_28546c1c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_28546c1c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/state/helpers.js":
/*!***************************************!*\
  !*** ./resources/js/state/helpers.js ***!
  \***************************************/
/*! exports provided: authComputed, teamsComputed, authMethods, teamMethods, playerMethods */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authComputed", function() { return authComputed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "teamsComputed", function() { return teamsComputed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authMethods", function() { return authMethods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "teamMethods", function() { return teamMethods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playerMethods", function() { return playerMethods; });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var authComputed = _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('auth', {
  currentUser: function currentUser(state) {
    return state.currentUser;
  }
})), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('auth', ['loggedIn']));
var teamsComputed = _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('teams', ['teams']));
var authMethods = Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('auth', ['logIn', 'logOut', 'register']);
var teamMethods = Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('teams', ['fetchTeams', 'populateTeams', 'createTeam', 'updateTeam', 'fetchTeam']);
var playerMethods = Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('players', ['createPlayer', 'updatePlayer', 'deletePlayer']);

/***/ }),

/***/ "./resources/js/utils/form.js":
/*!************************************!*\
  !*** ./resources/js/utils/form.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  nameRules: function nameRules() {
    return [function (v) {
      return !!v || 'Name is required';
    }];
  },
  passwordRules: function passwordRules() {
    return [function (v) {
      return !!v || 'Password is required';
    }, function (v) {
      return v && v.length > 8 || 'Password must be greater than 8 characters';
    }];
  },
  emailRules: function emailRules() {
    return [function (v) {
      return !!v || 'E-mail is required';
    }, function (v) {
      return /.+@.+\..+/.test(v) || 'E-mail must be valid';
    }];
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3JvdXRlci92aWV3cy9yZWdpc3Rlci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3JvdXRlci9sYXlvdXRzL2F1dGgudnVlPzFlMjIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3JvdXRlci9sYXlvdXRzL2F1dGgudnVlPzQ0MmUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3JvdXRlci9sYXlvdXRzL2F1dGgudnVlPzg5YjMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3JvdXRlci92aWV3cy9yZWdpc3Rlci52dWU/N2RkNSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL3J1bnRpbWUvaW5zdGFsbENvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2Fzc2V0cy91bmRyYXdfZmFuc19ncjU0LnN2ZyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcm91dGVyL2xheW91dHMvYXV0aC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3JvdXRlci9sYXlvdXRzL2F1dGgudnVlP2E4NDkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3JvdXRlci9sYXlvdXRzL2F1dGgudnVlPzliZGQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3JvdXRlci92aWV3cy9yZWdpc3Rlci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3JvdXRlci92aWV3cy9yZWdpc3Rlci52dWU/ZjY4ZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcm91dGVyL3ZpZXdzL3JlZ2lzdGVyLnZ1ZT9jMWZlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9zdGF0ZS9oZWxwZXJzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy91dGlscy9mb3JtLmpzIl0sIm5hbWVzIjpbImF1dGhDb21wdXRlZCIsIm1hcFN0YXRlIiwiY3VycmVudFVzZXIiLCJzdGF0ZSIsIm1hcEdldHRlcnMiLCJ0ZWFtc0NvbXB1dGVkIiwiYXV0aE1ldGhvZHMiLCJtYXBBY3Rpb25zIiwidGVhbU1ldGhvZHMiLCJwbGF5ZXJNZXRob2RzIiwibmFtZVJ1bGVzIiwidiIsInBhc3N3b3JkUnVsZXMiLCJsZW5ndGgiLCJlbWFpbFJ1bGVzIiwidGVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREEsR0FEQTtBQUlBLE1BSkEsa0JBSUE7QUFBQTs7QUFDQTtBQUNBLGNBREE7QUFFQSxlQUZBO0FBR0Esa0JBSEE7QUFJQSwrQkFKQTtBQUtBLGtCQUxBO0FBTUEsc0JBTkE7QUFPQSxpQ0FDQTtBQUFBO0FBQUEsT0FEQSxDQVBBO0FBVUEsc0JBVkE7QUFXQTtBQVhBO0FBYUEsR0FsQkE7QUFtQkEsOEJBQ0EsbURBREEsQ0FuQkE7QUFzQkEsMkNBQ0EsMERBREE7QUFFQSxVQUZBLG9CQUVBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBREE7QUFFQSwyQkFGQTtBQUdBLGlDQUhBO0FBSUE7QUFKQSxXQU1BLElBTkEsQ0FNQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUVBLFNBWEEsV0FZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FqQkE7QUFrQkE7QUFDQTtBQXhCQTtBQXRCQSxHOzs7Ozs7Ozs7OztBQ3RFQSwyQkFBMkIsbUJBQU8sQ0FBQyxzR0FBcUQ7QUFDeEY7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLGtDQUFrQyxpQkFBaUIsR0FBRyxnREFBZ0Qsd0JBQXdCLCtCQUErQixHQUFHLDRCQUE0QixnQkFBZ0IsR0FBRywyQ0FBMkMsc0JBQXNCLEdBQUcscUNBQXFDLGtCQUFrQixHQUFHLG9DQUFvQyxxQkFBcUIsR0FBRzs7QUFFaGE7Ozs7Ozs7Ozs7Ozs7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LENBQUMsQ0FBQ0UsTUFBRixHQUFXLENBQWpCLElBQXVCLDRDQUE5QjtBQUFBLEtBRk0sQ0FBUDtBQUlBLEdBWGE7QUFZZEMsWUFaYyx3QkFZRDtBQUNaLFdBQU8sQ0FBRSxVQUFDSCxDQUFEO0FBQUEsYUFBTyxDQUFDLENBQUNBLENBQUYsSUFBTyxvQkFBZDtBQUFBLEtBQUYsRUFBc0MsVUFBQ0EsQ0FBRDtBQUFBLGFBQU8sWUFBWUksSUFBWixDQUFpQkosQ0FBakIsS0FBdUIsc0JBQTlCO0FBQUEsS0FBdEMsQ0FBUDtBQUNBO0FBZGEsQ0FBZixFIiwiZmlsZSI6IjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPExheW91dD5cbiAgICAgICAgPHYtY2FyZCBjbGFzcz1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8di1jYXJkLXRpdGxlIGNsYXNzPVwianVzdGlmeS1jZW50ZXIgcHQtOSB0ZXh0LWg0XCI+Q3JlYXRlIGFuIGFjY291bnQuIDwvdi1jYXJkLXRpdGxlPlxuICAgICAgICAgICAgPHYtY2FyZC1zdWJ0aXRsZT5hbmQsIGNyZWF0ZSB5b3VyIHRlYW0gZGFzaGJvYXJkLjwvdi1jYXJkLXN1YnRpdGxlPlxuICAgICAgICAgICAgPHYtY2FyZC10ZXh0IGNsYXNzPVwibXQtNVwiPlxuICAgICAgICAgICAgICAgIDx2LWZvcm0gY2xhc3M9XCJwYi01XCIgdi1tb2RlbD1cInZhbGlkXCIgcmVmPVwiZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICA8di1hbGVydFxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInNob3dBbGVydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI9XCJsZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlLXRleHQ9XCJDbG9zZSBBbGVydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImRlZXAtb3JhbmdlIGFjY2VudC00XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhcmtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc21pc3NpYmxlXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IGVycm9yTWVzc2FnZSB9fVxuICAgICAgICAgICAgICAgICAgICA8L3YtYWxlcnQ+XG4gICAgICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpydWxlcz1cIm5hbWVSdWxlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkZ1bGxuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZWc6IEJvYiBTbWl0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZWRcbiAgICAgICAgICAgICAgICAgICAgPjwvdi10ZXh0LWZpZWxkPlxuICAgICAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnJ1bGVzPVwiZW1haWxSdWxlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZWc6IGFkZHJlc3NAZW1haWwuY29tXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lZFxuICAgICAgICAgICAgICAgICAgICA+PC92LXRleHQtZmllbGQ+XG4gICAgICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnJ1bGVzPVwicGFzc3dvcmRSdWxlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiKioqKioqKioqKipcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmVkXG4gICAgICAgICAgICAgICAgICAgID48L3YtdGV4dC1maWVsZD5cbiAgICAgICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJwYXNzd29yZF9jb25maXJtYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnJ1bGVzPVwicGFzc3dvcmRDb25maXJtYXRpb25SdWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ29uZmlybSBQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIioqKioqKioqKioqXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lZFxuICAgICAgICAgICAgICAgICAgICA+PC92LXRleHQtZmllbGQ+XG4gICAgICAgICAgICAgICAgICAgIDx2LWJ0biBjb2xvcj1cInByaW1hcnkgXCIgOmxvYWRpbmc9XCJsb2FkaW5nXCIgbGFyZ2UgQGNsaWNrPVwic3VibWl0XCIgYmxvY2tcbiAgICAgICAgICAgICAgICAgICAgICAgID5TdWJtaXRcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6bG9hZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkxvYWRpbmcuLi48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgICAgICAgIDwvdi1mb3JtPlxuICAgICAgICAgICAgPC92LWNhcmQtdGV4dD5cbiAgICAgICAgPC92LWNhcmQ+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBwdC0xMlwiPlxuICAgICAgICAgICAgQWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/XG4gICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lOiAnbG9naW4nIH1cIj5Mb2dpbiBoZXJlPC9yb3V0ZXItbGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vbGF5b3V0cy9hdXRoLnZ1ZSdcbmltcG9ydCBydWxlcyBmcm9tICcuLi8uLi91dGlscy9mb3JtJ1xuaW1wb3J0IHsgYXV0aE1ldGhvZHMgfSBmcm9tICcuLi8uLi9zdGF0ZS9oZWxwZXJzJ1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgTGF5b3V0LFxuICAgIH0sXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgICAgICAgcGFzc3dvcmRfY29uZmlybWF0aW9uOiAnJyxcbiAgICAgICAgICAgIHZhbGlkOiBmYWxzZSxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJycsXG4gICAgICAgICAgICBwYXNzd29yZENvbmZpcm1hdGlvblJ1bGU6IFtcbiAgICAgICAgICAgICAgICAodmFsdWUpID0+IHZhbHVlID09PSB0aGlzLnBhc3N3b3JkIHx8ICdUaGUgcGFzc3dvcmQgY29uZmlybWF0aW9uIGRvZXMgbm90IG1hdGNoLicsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc2hvd0FsZXJ0OiBmYWxzZSxcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgICAuLi5ydWxlcyxcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgLi4uYXV0aE1ldGhvZHMsXG4gICAgICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLiRyZWZzLmZvcm0udmFsaWRhdGUoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWVcbiAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVyKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogdGhpcy5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkX2NvbmZpcm1hdGlvbjogdGhpcy5wYXNzd29yZF9jb25maXJtYXRpb24sXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goeyBuYW1lOiAnaG9tZScgfSlcblxuc2VsZi5sb2FkaW5nID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgX2Vycm9yID0gZXJyb3IucmVzcG9uc2UuZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93QWxlcnQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IF9lcnJvci5lcnJvcnMuam9pbignPGJyLz4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9LFxufVxuPC9zY3JpcHQ+IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubGF5b3V0LXNpZGVbZGF0YS12LTM2YWJlZjY2XSB7XFxuICB3aWR0aDogNDUwcHg7XFxufVxcbi50aGVtZS0tbGlnaHQudi1hcHBsaWNhdGlvbltkYXRhLXYtMzZhYmVmNjZdIHtcXG4gIGJhY2tncm91bmQ6ICNmMmY1Zjg7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcXG59XFxuLnctZnVsbFtkYXRhLXYtMzZhYmVmNjZdIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ubGF5b3V0LXNpZGUgZGl2LmJyYW5kW2RhdGEtdi0zNmFiZWY2Nl0ge1xcbiAgbWluLWhlaWdodDogMzAwcHg7XFxufVxcbi5sYXlvdXQtc2lkZSBpbWdbZGF0YS12LTM2YWJlZjY2XSB7XFxuICBwYWRkaW5nOiAzMHB4O1xcbn1cXG4ubGF5b3V0LWNvbnRlbnRbZGF0YS12LTM2YWJlZjY2XSB7XFxuICBtYXgtd2lkdGg6IDQ1MHB4O1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS03LTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hdXRoLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTM2YWJlZjY2JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYXV0aC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zNmFiZWY2NiZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS03LTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hdXRoLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTM2YWJlZjY2JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidi1hcHBcIixcbiAgICB7IGF0dHJzOiB7IGlkOiBcImluc3BpcmVcIiwgbGlnaHQ6IFwiXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInYtcm93XCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1zaGVldFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICBcInRleHQtY2VudGVyIGxheW91dC1zaWRlIG14LWF1dG8gbXgtbWQtMSBkLW5vbmUgZC1tZC1mbGV4IGZsZXgtbWQtY29sdW1uIGp1c3RpZnktc3BhY2UtYmV0d2VlblwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBsaWdodDogXCJcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm10LTMgbXQtbWQtMTAgcGEtMiBicmFuZFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImRpc3BsYXktMiBmb250LXdlaWdodC1ib2xkIHByaW1hcnktLXRleHRcIiB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihcIlBsYXllcml6ZVwiKV1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZSBteS0yXCIgfSwgW192bS5fdihcIkZvciB0ZWFtcyFcIildKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInctZnVsbFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIi4uLy4uL2Fzc2V0cy91bmRyYXdfZmFuc19ncjU0LnN2Z1wiKSB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgXCJwYS0yIHBhLW1kLTQgZmxleC1ncm93LTEgYWxpZ24tY2VudGVyIGp1c3RpZnktY2VudGVyIGQtZmxleCBmbGV4LWNvbHVtblwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibGF5b3V0LWNvbnRlbnQgdy1mdWxsIG1hLWF1dG9cIiB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSxcbiAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJMYXlvdXRcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInYtY2FyZC10aXRsZVwiLCB7IHN0YXRpY0NsYXNzOiBcImp1c3RpZnktY2VudGVyIHB0LTkgdGV4dC1oNFwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIkNyZWF0ZSBhbiBhY2NvdW50LiBcIilcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidi1jYXJkLXN1YnRpdGxlXCIsIFtfdm0uX3YoXCJhbmQsIGNyZWF0ZSB5b3VyIHRlYW0gZGFzaGJvYXJkLlwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtY2FyZC10ZXh0XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTVcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtZm9ybVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHJlZjogXCJmb3JtXCIsXG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwYi01XCIsXG4gICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnZhbGlkLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnZhbGlkID0gJCR2XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidmFsaWRcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1hbGVydFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNsb3NlLXRleHRcIjogXCJDbG9zZSBBbGVydFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiZGVlcC1vcmFuZ2UgYWNjZW50LTRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhcms6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNtaXNzaWJsZTogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2hvd0FsZXJ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2hvd0FsZXJ0ID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzaG93QWxlcnRcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZXJyb3JNZXNzYWdlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBydWxlczogX3ZtLm5hbWVSdWxlcyxcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJGdWxsbmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcImVnOiBCb2IgU21pdGhcIixcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lZDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0ubmFtZSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBfdm0uZW1haWxSdWxlcyxcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJFbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcImVnOiBhZGRyZXNzQGVtYWlsLmNvbVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmVkOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uZW1haWwgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBfdm0ucGFzc3dvcmRSdWxlcyxcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJQYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIioqKioqKioqKioqXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgb3V0bGluZWQ6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBhc3N3b3JkLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXNzd29yZCA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcnVsZXM6IF92bS5wYXNzd29yZENvbmZpcm1hdGlvblJ1bGUsXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiQ29uZmlybSBQYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIioqKioqKioqKioqXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgb3V0bGluZWQ6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBhc3N3b3JkX2NvbmZpcm1hdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGFzc3dvcmRfY29uZmlybWF0aW9uID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBhc3N3b3JkX2NvbmZpcm1hdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwicHJpbWFyeSBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IF92bS5sb2FkaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFyZ2U6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9jazogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5zdWJtaXQgfSxcbiAgICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImxvYWRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtfYyhcInNwYW5cIiwgW192bS5fdihcIkxvYWRpbmcuLi5cIildKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJveHk6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiU3VibWl0XFxuICAgICAgICAgICAgICAgICAgICBcIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyIHB0LTEyXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgQWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/XFxuICAgICAgICBcIiksXG4gICAgICAgICAgX2MoXCJyb3V0ZXItbGlua1wiLCB7IGF0dHJzOiB7IHRvOiB7IG5hbWU6IFwibG9naW5cIiB9IH0gfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiTG9naW4gaGVyZVwiKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluc3RhbGxDb21wb25lbnRzIChjb21wb25lbnQsIGNvbXBvbmVudHMpIHtcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2YgY29tcG9uZW50LmV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IGNvbXBvbmVudC5leHBvcnRzLmV4dGVuZE9wdGlvbnNcbiAgICA6IGNvbXBvbmVudC5vcHRpb25zXG5cbiAgaWYgKHR5cGVvZiBjb21wb25lbnQuZXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuY29tcG9uZW50cyA9IGNvbXBvbmVudC5leHBvcnRzLm9wdGlvbnMuY29tcG9uZW50c1xuICB9XG5cbiAgb3B0aW9ucy5jb21wb25lbnRzID0gb3B0aW9ucy5jb21wb25lbnRzIHx8IHt9XG5cbiAgZm9yICh2YXIgaSBpbiBjb21wb25lbnRzKSB7XG4gICAgb3B0aW9ucy5jb21wb25lbnRzW2ldID0gb3B0aW9ucy5jb21wb25lbnRzW2ldIHx8IGNvbXBvbmVudHNbaV1cbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9pbWFnZXMvdW5kcmF3X2ZhbnNfZ3I1NC5zdmc/OTY1MzdiOTRhNzRmNDk3YTQ0ZGQxNWJkOTI4OWZhODFcIjsiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2F1dGgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM2YWJlZjY2JnNjb3BlZD10cnVlJlwiXG52YXIgc2NyaXB0ID0ge31cbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vYXV0aC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zNmFiZWY2NiZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjM2YWJlZjY2XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIHZ1ZXRpZnktbG9hZGVyICovXG5pbXBvcnQgaW5zdGFsbENvbXBvbmVudHMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL3J1bnRpbWUvaW5zdGFsbENvbXBvbmVudHMuanNcIlxuaW1wb3J0IHsgVkFwcCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkFwcCc7XG5pbXBvcnQgeyBWUm93IH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WR3JpZCc7XG5pbXBvcnQgeyBWU2hlZXQgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZTaGVldCc7XG5pbnN0YWxsQ29tcG9uZW50cyhjb21wb25lbnQsIHtWQXBwLFZSb3csVlNoZWV0fSlcblxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9yYWplZXYvcHJvamVjdHMvc3R1ZHkvdXB3b3JrX2RlbW8vbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMzZhYmVmNjYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMzZhYmVmNjYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMzZhYmVmNjYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2F1dGgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM2YWJlZjY2JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzM2YWJlZjY2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvcm91dGVyL2xheW91dHMvYXV0aC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYXV0aC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zNmFiZWY2NiZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYXV0aC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzZhYmVmNjYmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3JlZ2lzdGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yODU0NmMxYyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9yZWdpc3Rlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3JlZ2lzdGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIHZ1ZXRpZnktbG9hZGVyICovXG5pbXBvcnQgaW5zdGFsbENvbXBvbmVudHMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL3J1bnRpbWUvaW5zdGFsbENvbXBvbmVudHMuanNcIlxuaW1wb3J0IHsgVkFsZXJ0IH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WQWxlcnQnO1xuaW1wb3J0IHsgVkJ0biB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkJ0bic7XG5pbXBvcnQgeyBWQ2FyZCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkNhcmQnO1xuaW1wb3J0IHsgVkNhcmRTdWJ0aXRsZSB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkNhcmQnO1xuaW1wb3J0IHsgVkNhcmRUZXh0IH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WQ2FyZCc7XG5pbXBvcnQgeyBWQ2FyZFRpdGxlIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WQ2FyZCc7XG5pbXBvcnQgeyBWRm9ybSB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkZvcm0nO1xuaW1wb3J0IHsgVlRleHRGaWVsZCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVlRleHRGaWVsZCc7XG5pbnN0YWxsQ29tcG9uZW50cyhjb21wb25lbnQsIHtWQWxlcnQsVkJ0bixWQ2FyZCxWQ2FyZFN1YnRpdGxlLFZDYXJkVGV4dCxWQ2FyZFRpdGxlLFZGb3JtLFZUZXh0RmllbGR9KVxuXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3JhamVldi9wcm9qZWN0cy9zdHVkeS91cHdvcmtfZGVtby9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyODU0NmMxYycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyODU0NmMxYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyODU0NmMxYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vcmVnaXN0ZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI4NTQ2YzFjJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzI4NTQ2YzFjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvcm91dGVyL3ZpZXdzL3JlZ2lzdGVyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcmVnaXN0ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3JlZ2lzdGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yZWdpc3Rlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Mjg1NDZjMWMmXCIiLCJpbXBvcnQgeyBtYXBTdGF0ZSwgbWFwR2V0dGVycywgbWFwQWN0aW9ucyB9IGZyb20gJ3Z1ZXgnXG5cbmV4cG9ydCBjb25zdCBhdXRoQ29tcHV0ZWQgPSB7XG4gIC4uLm1hcFN0YXRlKCdhdXRoJywge1xuICAgIGN1cnJlbnRVc2VyOiAoc3RhdGUpID0+IHN0YXRlLmN1cnJlbnRVc2VyLFxuICB9KSxcbiAgLi4ubWFwR2V0dGVycygnYXV0aCcsIFsnbG9nZ2VkSW4nXSksXG59XG5cbmV4cG9ydCBjb25zdCB0ZWFtc0NvbXB1dGVkID0ge1xuICAuLi5tYXBHZXR0ZXJzKCd0ZWFtcycsIFsndGVhbXMnXSksXG59XG5cblxuZXhwb3J0IGNvbnN0IGF1dGhNZXRob2RzID0gbWFwQWN0aW9ucygnYXV0aCcsIFsnbG9nSW4nLCAnbG9nT3V0JywgJ3JlZ2lzdGVyJ10pXG5cbmV4cG9ydCBjb25zdCB0ZWFtTWV0aG9kcyA9IG1hcEFjdGlvbnMoJ3RlYW1zJywgWydmZXRjaFRlYW1zJywgJ3BvcHVsYXRlVGVhbXMnLCAnY3JlYXRlVGVhbScsICd1cGRhdGVUZWFtJywgJ2ZldGNoVGVhbSddKVxuXG5leHBvcnQgY29uc3QgcGxheWVyTWV0aG9kcyA9IG1hcEFjdGlvbnMoJ3BsYXllcnMnLCBbICdjcmVhdGVQbGF5ZXInLCAndXBkYXRlUGxheWVyJywgJ2RlbGV0ZVBsYXllciddKSIsImV4cG9ydCBkZWZhdWx0IHtcblx0bmFtZVJ1bGVzKCkge1xuXHRcdHJldHVybiBbXG5cdFx0XHQodikgPT4gISF2IHx8ICdOYW1lIGlzIHJlcXVpcmVkJ1xuXHRcdF07XG5cdH0sXG5cdHBhc3N3b3JkUnVsZXMoKSB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdCh2KSA9PiAhIXYgfHwgJ1Bhc3N3b3JkIGlzIHJlcXVpcmVkJyxcblx0XHRcdCh2KSA9PiAodiAmJiB2Lmxlbmd0aCA+IDgpIHx8ICdQYXNzd29yZCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiA4IGNoYXJhY3RlcnMnXG5cdFx0XTtcblx0fSxcblx0ZW1haWxSdWxlcygpIHtcblx0XHRyZXR1cm4gWyAodikgPT4gISF2IHx8ICdFLW1haWwgaXMgcmVxdWlyZWQnLCAodikgPT4gLy4rQC4rXFwuLisvLnRlc3QodikgfHwgJ0UtbWFpbCBtdXN0IGJlIHZhbGlkJyBdO1xuXHR9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==