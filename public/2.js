(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/router/views/login.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/router/views/login.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Layout: _layouts_auth_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      email: '',
      password: '',
      valid: false,
      errorMessage: '',
      showAlert: false,
      loading: false
    };
  },
  computed: _objectSpread({}, _utils_form__WEBPACK_IMPORTED_MODULE_1__["default"]),
  methods: _objectSpread(_objectSpread({}, _state_helpers__WEBPACK_IMPORTED_MODULE_2__["authMethods"]), {}, {
    submit: function submit() {
      var _this = this;

      if (this.$refs.form.validate()) {
        this.loading = true;
        this.logIn({
          email: this.email,
          password: this.password
        }).then(function () {
          _this.$router.push({
            name: 'home'
          });

          _this.loading = false;
        })["catch"](function (error) {
          _this.showAlert = true;
          _this.errorMessage = 'There was an error logging in to your account.';
          _this.loading = false;
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/router/views/login.vue?vue&type=template&id=58af74c0&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/router/views/login.vue?vue&type=template&id=58af74c0& ***!
  \**********************************************************************************************************************************************************************************************************/
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
            _vm._v(" Welcome ")
          ]),
          _vm._v(" "),
          _c("v-card-subtitle", [_vm._v("Signin to your account.")]),
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
                      rules: _vm.emailRules,
                      label: "Email",
                      placeholder: "address@email.com",
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
                      rules: [
                        function(v) {
                          return !!v || "Password is required"
                        }
                      ],
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
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        color: "primary ",
                        large: "",
                        block: "",
                        loading: _vm.loading
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
          _vm._v("\n        Don't have an account?\n        "),
          _c("router-link", { attrs: { to: { name: "register" } } }, [
            _vm._v("Create one here")
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

/***/ "./resources/js/router/views/login.vue":
/*!*********************************************!*\
  !*** ./resources/js/router/views/login.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_vue_vue_type_template_id_58af74c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=58af74c0& */ "./resources/js/router/views/login.vue?vue&type=template&id=58af74c0&");
/* harmony import */ var _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js& */ "./resources/js/router/views/login.vue?vue&type=script&lang=js&");
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
  _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_vue_vue_type_template_id_58af74c0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _login_vue_vue_type_template_id_58af74c0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */









_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VAlert: vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_4__["VAlert"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCard"],VCardSubtitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardSubtitle"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardTitle"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_7__["VForm"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_8__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/router/views/login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/router/views/login.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/router/views/login.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/router/views/login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/router/views/login.vue?vue&type=template&id=58af74c0&":
/*!****************************************************************************!*\
  !*** ./resources/js/router/views/login.vue?vue&type=template&id=58af74c0& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_58af74c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=template&id=58af74c0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/router/views/login.vue?vue&type=template&id=58af74c0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_58af74c0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_58af74c0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3JvdXRlci92aWV3cy9sb2dpbi52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3JvdXRlci9sYXlvdXRzL2F1dGgudnVlPzFlMjIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3JvdXRlci9sYXlvdXRzL2F1dGgudnVlPzQ0MmUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3JvdXRlci9sYXlvdXRzL2F1dGgudnVlPzg5YjMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3JvdXRlci92aWV3cy9sb2dpbi52dWU/MDNhNCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL3J1bnRpbWUvaW5zdGFsbENvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2Fzc2V0cy91bmRyYXdfZmFuc19ncjU0LnN2ZyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcm91dGVyL2xheW91dHMvYXV0aC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3JvdXRlci9sYXlvdXRzL2F1dGgudnVlP2E4NDkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3JvdXRlci9sYXlvdXRzL2F1dGgudnVlPzliZGQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3JvdXRlci92aWV3cy9sb2dpbi52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3JvdXRlci92aWV3cy9sb2dpbi52dWU/NjkwYiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcm91dGVyL3ZpZXdzL2xvZ2luLnZ1ZT82NDIxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9zdGF0ZS9oZWxwZXJzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy91dGlscy9mb3JtLmpzIl0sIm5hbWVzIjpbImF1dGhDb21wdXRlZCIsIm1hcFN0YXRlIiwiY3VycmVudFVzZXIiLCJzdGF0ZSIsIm1hcEdldHRlcnMiLCJ0ZWFtc0NvbXB1dGVkIiwiYXV0aE1ldGhvZHMiLCJtYXBBY3Rpb25zIiwidGVhbU1ldGhvZHMiLCJwbGF5ZXJNZXRob2RzIiwibmFtZVJ1bGVzIiwidiIsInBhc3N3b3JkUnVsZXMiLCJsZW5ndGgiLCJlbWFpbFJ1bGVzIiwidGVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBLEdBREE7QUFJQSxNQUpBLGtCQUlBO0FBQ0E7QUFDQSxlQURBO0FBRUEsa0JBRkE7QUFHQSxrQkFIQTtBQUlBLHNCQUpBO0FBS0Esc0JBTEE7QUFNQTtBQU5BO0FBUUEsR0FiQTtBQWNBLDhCQUNBLG1EQURBLENBZEE7QUFpQkEsMkNBQ0EsMERBREE7QUFFQSxVQUZBLG9CQUVBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBREE7QUFFQTtBQUZBLFdBSUEsSUFKQSxDQUlBO0FBQ0E7QUFBQTtBQUFBOztBQUNBO0FBQ0EsU0FQQSxXQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FaQTtBQWFBO0FBQ0E7QUFuQkE7QUFqQkEsRzs7Ozs7Ozs7Ozs7QUNyREEsMkJBQTJCLG1CQUFPLENBQUMsc0dBQXFEO0FBQ3hGOzs7QUFHQTtBQUNBLGNBQWMsUUFBUyxrQ0FBa0MsaUJBQWlCLEdBQUcsZ0RBQWdELHdCQUF3QiwrQkFBK0IsR0FBRyw0QkFBNEIsZ0JBQWdCLEdBQUcsMkNBQTJDLHNCQUFzQixHQUFHLHFDQUFxQyxrQkFBa0IsR0FBRyxvQ0FBb0MscUJBQXFCLEdBQUc7O0FBRWhhOzs7Ozs7Ozs7Ozs7O0FDTkEsY0FBYyxtQkFBTyxDQUFDLDJwQkFBdVg7O0FBRTdZLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyw0R0FBeUQ7O0FBRTlFOztB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QUFELEVBQVUsQ0FBQyxPQUFELENBQVYsQ0FEVyxDQUFuQjtBQUtBLElBQU1FLFdBQVcsR0FBR0MsdURBQVUsQ0FBQyxNQUFELEVBQVMsQ0FBQyxPQUFELEVBQVUsUUFBVixFQUFvQixVQUFwQixDQUFULENBQTlCO0FBRUEsSUFBTUMsV0FBVyxHQUFHRCx1REFBVSxDQUFDLE9BQUQsRUFBVSxDQUFDLFlBQUQsRUFBZSxlQUFmLEVBQWdDLFlBQWhDLEVBQThDLFlBQTlDLEVBQTRELFdBQTVELENBQVYsQ0FBOUI7QUFFQSxJQUFNRSxhQUFhLEdBQUdGLHVEQUFVLENBQUMsU0FBRCxFQUFZLENBQUUsY0FBRixFQUFrQixjQUFsQixFQUFrQyxjQUFsQyxDQUFaLENBQWhDLEM7Ozs7Ozs7Ozs7OztBQ2xCUDtBQUFlO0FBQ2RHLFdBRGMsdUJBQ0Y7QUFDWCxXQUFPLENBQ04sVUFBQ0MsQ0FBRDtBQUFBLGFBQU8sQ0FBQyxDQUFDQSxDQUFGLElBQU8sa0JBQWQ7QUFBQSxLQURNLENBQVA7QUFHQSxHQUxhO0FBTWRDLGVBTmMsMkJBTUU7QUFDZixXQUFPLENBQ04sVUFBQ0QsQ0FBRDtBQUFBLGFBQU8sQ0FBQyxDQUFDQSxDQUFGLElBQU8sc0JBQWQ7QUFBQSxLQURNLEVBRU4sVUFBQ0EsQ0FBRDtBQUFBLGFBQVFBLENBQUMsSUFBSUEsQ0FBQyxDQUFDRSxNQUFGLEdBQVcsQ0FBakIsSUFBdUIsNENBQTlCO0FBQUEsS0FGTSxDQUFQO0FBSUEsR0FYYTtBQVlkQyxZQVpjLHdCQVlEO0FBQ1osV0FBTyxDQUFFLFVBQUNILENBQUQ7QUFBQSxhQUFPLENBQUMsQ0FBQ0EsQ0FBRixJQUFPLG9CQUFkO0FBQUEsS0FBRixFQUFzQyxVQUFDQSxDQUFEO0FBQUEsYUFBTyxZQUFZSSxJQUFaLENBQWlCSixDQUFqQixLQUF1QixzQkFBOUI7QUFBQSxLQUF0QyxDQUFQO0FBQ0E7QUFkYSxDQUFmLEUiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8TGF5b3V0PlxuICAgICAgICA8di1jYXJkIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDx2LWNhcmQtdGl0bGUgY2xhc3M9XCJqdXN0aWZ5LWNlbnRlciBwdC05IHRleHQtaDRcIj4gV2VsY29tZSA8L3YtY2FyZC10aXRsZT5cbiAgICAgICAgICAgIDx2LWNhcmQtc3VidGl0bGU+U2lnbmluIHRvIHlvdXIgYWNjb3VudC48L3YtY2FyZC1zdWJ0aXRsZT5cbiAgICAgICAgICAgIDx2LWNhcmQtdGV4dCBjbGFzcz1cIm10LTVcIj5cbiAgICAgICAgICAgICAgICA8di1mb3JtIGNsYXNzPVwicGItNVwiIHYtbW9kZWw9XCJ2YWxpZFwiIHJlZj1cImZvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgPHYtYWxlcnRcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJzaG93QWxlcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyPVwibGVmdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZS10ZXh0PVwiQ2xvc2UgQWxlcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJkZWVwLW9yYW5nZSBhY2NlbnQtNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXJrXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNtaXNzaWJsZVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBlcnJvck1lc3NhZ2UgfX1cbiAgICAgICAgICAgICAgICAgICAgPC92LWFsZXJ0PlxuICAgICAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnJ1bGVzPVwiZW1haWxSdWxlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiYWRkcmVzc0BlbWFpbC5jb21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmVkXG4gICAgICAgICAgICAgICAgICAgID48L3YtdGV4dC1maWVsZD5cbiAgICAgICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6cnVsZXM9XCJbKHYpID0+ICEhdiB8fCAnUGFzc3dvcmQgaXMgcmVxdWlyZWQnXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiKioqKioqKioqKipcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmVkXG4gICAgICAgICAgICAgICAgICAgID48L3YtdGV4dC1maWVsZD5cbiAgICAgICAgICAgICAgICAgICAgPHYtYnRuIGNvbG9yPVwicHJpbWFyeSBcIiBsYXJnZSBAY2xpY2s9XCJzdWJtaXRcIiBibG9jayA6bG9hZGluZz1cImxvYWRpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlN1Ym1pdFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpsb2FkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+TG9hZGluZy4uLjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+PC92LWJ0blxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPC92LWZvcm0+XG4gICAgICAgICAgICA8L3YtY2FyZC10ZXh0PlxuICAgICAgICA8L3YtY2FyZD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIHB0LTEyXCI+XG4gICAgICAgICAgICBEb24ndCBoYXZlIGFuIGFjY291bnQ/XG4gICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lOiAncmVnaXN0ZXInIH1cIj5DcmVhdGUgb25lIGhlcmU8L3JvdXRlci1saW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuaW1wb3J0IExheW91dCBmcm9tICcuLi9sYXlvdXRzL2F1dGgudnVlJ1xuaW1wb3J0IHJ1bGVzIGZyb20gJy4uLy4uL3V0aWxzL2Zvcm0nXG5pbXBvcnQgeyBhdXRoTWV0aG9kcyB9IGZyb20gJy4uLy4uL3N0YXRlL2hlbHBlcnMnXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBMYXlvdXQsXG4gICAgfSxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgICAgICAgdmFsaWQ6IGZhbHNlLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnJyxcbiAgICAgICAgICAgIHNob3dBbGVydDogZmFsc2UsXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgICAuLi5ydWxlcyxcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgLi4uYXV0aE1ldGhvZHMsXG4gICAgICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLiRyZWZzLmZvcm0udmFsaWRhdGUoKSkge1xuICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMubG9nSW4oe1xuICAgICAgICAgICAgICAgICAgICBlbWFpbDogdGhpcy5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goeyBuYW1lOiAnaG9tZScgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dBbGVydCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJ1RoZXJlIHdhcyBhbiBlcnJvciBsb2dnaW5nIGluIHRvIHlvdXIgYWNjb3VudC4nXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH0sXG59XG48L3NjcmlwdD4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5sYXlvdXQtc2lkZVtkYXRhLXYtMzZhYmVmNjZdIHtcXG4gIHdpZHRoOiA0NTBweDtcXG59XFxuLnRoZW1lLS1saWdodC52LWFwcGxpY2F0aW9uW2RhdGEtdi0zNmFiZWY2Nl0ge1xcbiAgYmFja2dyb3VuZDogI2YyZjVmODtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xcbn1cXG4udy1mdWxsW2RhdGEtdi0zNmFiZWY2Nl0ge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5sYXlvdXQtc2lkZSBkaXYuYnJhbmRbZGF0YS12LTM2YWJlZjY2XSB7XFxuICBtaW4taGVpZ2h0OiAzMDBweDtcXG59XFxuLmxheW91dC1zaWRlIGltZ1tkYXRhLXYtMzZhYmVmNjZdIHtcXG4gIHBhZGRpbmc6IDMwcHg7XFxufVxcbi5sYXlvdXQtY29udGVudFtkYXRhLXYtMzZhYmVmNjZdIHtcXG4gIG1heC13aWR0aDogNDUwcHg7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTctMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2F1dGgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzZhYmVmNjYmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS03LTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hdXRoLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTM2YWJlZjY2JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTctMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2F1dGgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzZhYmVmNjYmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWFwcFwiLFxuICAgIHsgYXR0cnM6IHsgaWQ6IFwiaW5zcGlyZVwiLCBsaWdodDogXCJcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidi1yb3dcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LXNoZWV0XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgIFwidGV4dC1jZW50ZXIgbGF5b3V0LXNpZGUgbXgtYXV0byBteC1tZC0xIGQtbm9uZSBkLW1kLWZsZXggZmxleC1tZC1jb2x1bW4ganVzdGlmeS1zcGFjZS1iZXR3ZWVuXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGxpZ2h0OiBcIlwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibXQtMyBtdC1tZC0xMCBwYS0yIGJyYW5kXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZGlzcGxheS0yIGZvbnQtd2VpZ2h0LWJvbGQgcHJpbWFyeS0tdGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiUGxheWVyaXplXCIpXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlIG15LTJcIiB9LCBbX3ZtLl92KFwiRm9yIHRlYW1zIVwiKV0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidy1mdWxsXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiLi4vLi4vYXNzZXRzL3VuZHJhd19mYW5zX2dyNTQuc3ZnXCIpIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICBcInBhLTIgcGEtbWQtNCBmbGV4LWdyb3ctMSBhbGlnbi1jZW50ZXIganVzdGlmeS1jZW50ZXIgZC1mbGV4IGZsZXgtY29sdW1uXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJsYXlvdXQtY29udGVudCB3LWZ1bGwgbWEtYXV0b1wiIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdChcImRlZmF1bHRcIildLFxuICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIkxheW91dFwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidi1jYXJkLXRpdGxlXCIsIHsgc3RhdGljQ2xhc3M6IFwianVzdGlmeS1jZW50ZXIgcHQtOSB0ZXh0LWg0XCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiIFdlbGNvbWUgXCIpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInYtY2FyZC1zdWJ0aXRsZVwiLCBbX3ZtLl92KFwiU2lnbmluIHRvIHlvdXIgYWNjb3VudC5cIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWNhcmQtdGV4dFwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtdC01XCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWZvcm1cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICByZWY6IFwiZm9ybVwiLFxuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicGItNVwiLFxuICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS52YWxpZCxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS52YWxpZCA9ICQkdlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInZhbGlkXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYWxlcnRcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjbG9zZS10ZXh0XCI6IFwiQ2xvc2UgQWxlcnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImRlZXAtb3JhbmdlIGFjY2VudC00XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXJrOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzbWlzc2libGU6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNob3dBbGVydCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNob3dBbGVydCA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2hvd0FsZXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmVycm9yTWVzc2FnZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgcnVsZXM6IF92bS5lbWFpbFJ1bGVzLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiYWRkcmVzc0BlbWFpbC5jb21cIixcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lZDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZW1haWwsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVtYWlsID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24odikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gISF2IHx8IFwiUGFzc3dvcmQgaXMgcmVxdWlyZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiUGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCIqKioqKioqKioqKlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmVkOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wYXNzd29yZCxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGFzc3dvcmQgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInByaW1hcnkgXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXJnZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogX3ZtLmxvYWRpbmdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uc3VibWl0IH0sXG4gICAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJsb2FkZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJMb2FkaW5nLi4uXCIpXSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlN1Ym1pdFxcbiAgICAgICAgICAgICAgICAgICAgXCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlciBwdC0xMlwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgIERvbid0IGhhdmUgYW4gYWNjb3VudD9cXG4gICAgICAgIFwiKSxcbiAgICAgICAgICBfYyhcInJvdXRlci1saW5rXCIsIHsgYXR0cnM6IHsgdG86IHsgbmFtZTogXCJyZWdpc3RlclwiIH0gfSB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCJDcmVhdGUgb25lIGhlcmVcIilcbiAgICAgICAgICBdKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZSAoZXhjZXB0IGZvciBtb2R1bGVzKS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbnN0YWxsQ29tcG9uZW50cyAoY29tcG9uZW50LCBjb21wb25lbnRzKSB7XG4gIHZhciBvcHRpb25zID0gdHlwZW9mIGNvbXBvbmVudC5leHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBjb21wb25lbnQuZXhwb3J0cy5leHRlbmRPcHRpb25zXG4gICAgOiBjb21wb25lbnQub3B0aW9uc1xuXG4gIGlmICh0eXBlb2YgY29tcG9uZW50LmV4cG9ydHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmNvbXBvbmVudHMgPSBjb21wb25lbnQuZXhwb3J0cy5vcHRpb25zLmNvbXBvbmVudHNcbiAgfVxuXG4gIG9wdGlvbnMuY29tcG9uZW50cyA9IG9wdGlvbnMuY29tcG9uZW50cyB8fCB7fVxuXG4gIGZvciAodmFyIGkgaW4gY29tcG9uZW50cykge1xuICAgIG9wdGlvbnMuY29tcG9uZW50c1tpXSA9IG9wdGlvbnMuY29tcG9uZW50c1tpXSB8fCBjb21wb25lbnRzW2ldXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvaW1hZ2VzL3VuZHJhd19mYW5zX2dyNTQuc3ZnPzk2NTM3Yjk0YTc0ZjQ5N2E0NGRkMTViZDkyODlmYTgxXCI7IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9hdXRoLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNmFiZWY2NiZzY29wZWQ9dHJ1ZSZcIlxudmFyIHNjcmlwdCA9IHt9XG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2F1dGgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzZhYmVmNjYmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIzNmFiZWY2NlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiB2dWV0aWZ5LWxvYWRlciAqL1xuaW1wb3J0IGluc3RhbGxDb21wb25lbnRzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9ydW50aW1lL2luc3RhbGxDb21wb25lbnRzLmpzXCJcbmltcG9ydCB7IFZBcHAgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZBcHAnO1xuaW1wb3J0IHsgVlJvdyB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkdyaWQnO1xuaW1wb3J0IHsgVlNoZWV0IH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WU2hlZXQnO1xuaW5zdGFsbENvbXBvbmVudHMoY29tcG9uZW50LCB7VkFwcCxWUm93LFZTaGVldH0pXG5cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvcmFqZWV2L3Byb2plY3RzL3N0dWR5L3Vwd29ya19kZW1vL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzM2YWJlZjY2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzM2YWJlZjY2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzM2YWJlZjY2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9hdXRoLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNmFiZWY2NiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczNmFiZWY2NicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3JvdXRlci9sYXlvdXRzL2F1dGgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTctMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2F1dGgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzZhYmVmNjYmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2F1dGgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM2YWJlZjY2JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9sb2dpbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NThhZjc0YzAmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9sb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiB2dWV0aWZ5LWxvYWRlciAqL1xuaW1wb3J0IGluc3RhbGxDb21wb25lbnRzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9ydW50aW1lL2luc3RhbGxDb21wb25lbnRzLmpzXCJcbmltcG9ydCB7IFZBbGVydCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkFsZXJ0JztcbmltcG9ydCB7IFZCdG4gfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZCdG4nO1xuaW1wb3J0IHsgVkNhcmQgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZDYXJkJztcbmltcG9ydCB7IFZDYXJkU3VidGl0bGUgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZDYXJkJztcbmltcG9ydCB7IFZDYXJkVGV4dCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkNhcmQnO1xuaW1wb3J0IHsgVkNhcmRUaXRsZSB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkNhcmQnO1xuaW1wb3J0IHsgVkZvcm0gfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZGb3JtJztcbmltcG9ydCB7IFZUZXh0RmllbGQgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZUZXh0RmllbGQnO1xuaW5zdGFsbENvbXBvbmVudHMoY29tcG9uZW50LCB7VkFsZXJ0LFZCdG4sVkNhcmQsVkNhcmRTdWJ0aXRsZSxWQ2FyZFRleHQsVkNhcmRUaXRsZSxWRm9ybSxWVGV4dEZpZWxkfSlcblxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9yYWplZXYvcHJvamVjdHMvc3R1ZHkvdXB3b3JrX2RlbW8vbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNThhZjc0YzAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNThhZjc0YzAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNThhZjc0YzAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2xvZ2luLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01OGFmNzRjMCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1OGFmNzRjMCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3JvdXRlci92aWV3cy9sb2dpbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU4YWY3NGMwJlwiIiwiaW1wb3J0IHsgbWFwU3RhdGUsIG1hcEdldHRlcnMsIG1hcEFjdGlvbnMgfSBmcm9tICd2dWV4J1xuXG5leHBvcnQgY29uc3QgYXV0aENvbXB1dGVkID0ge1xuICAuLi5tYXBTdGF0ZSgnYXV0aCcsIHtcbiAgICBjdXJyZW50VXNlcjogKHN0YXRlKSA9PiBzdGF0ZS5jdXJyZW50VXNlcixcbiAgfSksXG4gIC4uLm1hcEdldHRlcnMoJ2F1dGgnLCBbJ2xvZ2dlZEluJ10pLFxufVxuXG5leHBvcnQgY29uc3QgdGVhbXNDb21wdXRlZCA9IHtcbiAgLi4ubWFwR2V0dGVycygndGVhbXMnLCBbJ3RlYW1zJ10pLFxufVxuXG5cbmV4cG9ydCBjb25zdCBhdXRoTWV0aG9kcyA9IG1hcEFjdGlvbnMoJ2F1dGgnLCBbJ2xvZ0luJywgJ2xvZ091dCcsICdyZWdpc3RlciddKVxuXG5leHBvcnQgY29uc3QgdGVhbU1ldGhvZHMgPSBtYXBBY3Rpb25zKCd0ZWFtcycsIFsnZmV0Y2hUZWFtcycsICdwb3B1bGF0ZVRlYW1zJywgJ2NyZWF0ZVRlYW0nLCAndXBkYXRlVGVhbScsICdmZXRjaFRlYW0nXSlcblxuZXhwb3J0IGNvbnN0IHBsYXllck1ldGhvZHMgPSBtYXBBY3Rpb25zKCdwbGF5ZXJzJywgWyAnY3JlYXRlUGxheWVyJywgJ3VwZGF0ZVBsYXllcicsICdkZWxldGVQbGF5ZXInXSkiLCJleHBvcnQgZGVmYXVsdCB7XG5cdG5hbWVSdWxlcygpIHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0KHYpID0+ICEhdiB8fCAnTmFtZSBpcyByZXF1aXJlZCdcblx0XHRdO1xuXHR9LFxuXHRwYXNzd29yZFJ1bGVzKCkge1xuXHRcdHJldHVybiBbXG5cdFx0XHQodikgPT4gISF2IHx8ICdQYXNzd29yZCBpcyByZXF1aXJlZCcsXG5cdFx0XHQodikgPT4gKHYgJiYgdi5sZW5ndGggPiA4KSB8fCAnUGFzc3dvcmQgbXVzdCBiZSBncmVhdGVyIHRoYW4gOCBjaGFyYWN0ZXJzJ1xuXHRcdF07XG5cdH0sXG5cdGVtYWlsUnVsZXMoKSB7XG5cdFx0cmV0dXJuIFsgKHYpID0+ICEhdiB8fCAnRS1tYWlsIGlzIHJlcXVpcmVkJywgKHYpID0+IC8uK0AuK1xcLi4rLy50ZXN0KHYpIHx8ICdFLW1haWwgbXVzdCBiZSB2YWxpZCcgXTtcblx0fVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=