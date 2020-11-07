(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/playersForm.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/playersForm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  props: {
    index: {
      require: true,
      type: Number
    },
    player: {
      require: false,
      type: Object
    }
  },
  data: function data() {
    return {
      playerData: {
        id: '',
        first_name: '',
        last_name: '',
        type: '',
        index: this.index
      }
    };
  },
  computed: {
    types: function types() {
      return ['captain', 'player', 'substitute'];
    }
  },
  created: function created() {
    this.playerData.index = this.index;
    this.playerData.id = this.player.id || '';
    this.playerData.first_name = this.player.first_name || '';
    this.playerData.last_name = this.player.last_name || '';
    this.playerData.type = this.player.type || '';
  },
  methods: {
    changed: function changed() {
      this.$emit('change', this.playerData);
    },
    deletePlayer: function deletePlayer() {
      this.$emit('delete', this.playerData);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/router/views/create_modify_team.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/router/views/create_modify_team.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_main_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layouts/main.vue */ "./resources/js/router/layouts/main.vue");
/* harmony import */ var _state_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state/helpers */ "./resources/js/state/helpers.js");
/* harmony import */ var nprogress_nprogress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nprogress/nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress_nprogress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nprogress_nprogress__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_playersForm_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/playersForm.vue */ "./resources/js/components/playersForm.vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_4__);
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
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Layout: _layouts_main_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    PlayerForm: _components_playersForm_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      view: 'create',
      team: {
        id: null,
        name: '',
        phone_number: '',
        icon: 'sports_baseball'
      },
      players: [],
      showPlayers: true,
      // We need to refresh forms once the delete occures
      validated: false,
      dialogSuccess: false,
      alertBox: false,
      validationError: ''
    };
  },
  computed: {
    redirectTo: function redirectTo() {
      if (this.view == 'create') {
        return {
          name: 'home'
        };
      } else {
        return '';
      }
    }
  },
  created: function created() {
    if (this.$route.meta.edit) {
      this.view = 'edit';
      this.team = this.$route.params.team;
      this.players = this.$route.params.team.players;
    } else {
      this.view = 'create';
    }
  },
  methods: _objectSpread(_objectSpread(_objectSpread({}, _state_helpers__WEBPACK_IMPORTED_MODULE_1__["teamMethods"]), _state_helpers__WEBPACK_IMPORTED_MODULE_1__["playerMethods"]), {}, {
    validate: function validate() {
      return this.$refs.form.validate();
    },
    saveTeam: function saveTeam() {
      var _this = this;

      if (this.validate()) {
        nprogress_nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.start();
        this.save().then(function (response) {
          var data = response.data;
          nprogress_nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.done();
          _this.team = data;
          _this.dialogSuccess = true;
        })["catch"](function (error) {
          console.log(error);

          if (error.response && error.response.status === 422) {
            _this.validationError = [].concat.apply([], Object.values(error.response.data.errors)).join(); //flattening the errors to string

            _this.alertBox = true;
          } else {
            _this.validationError = "Something went wrong and we 're investigating about it.";
            _this.alertBox = true;
          }
        });
      }
    },
    save: function save() {
      if (this.view == 'edit') {
        return this.updateTeam(this.team);
      } else {
        return this.createTeam(this.team);
      }
    },
    addPlayerForm: function addPlayerForm() {
      this.players.push({});
    },
    changePlayer: function changePlayer(data) {
      var _this2 = this;

      if (data.first_name && data.last_name && data.type) {
        this.players[data.index] = data;
        data.team_id = this.team.id;
        nprogress_nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.start();
        this.savePlayer(data).then(function (response) {
          _this2.players[data.index] = response.data;
          nprogress_nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.done();

          _this2.refreshPlayersForm();
        });
      }
    },
    triggerDeletePlayer: function triggerDeletePlayer(data) {
      vue__WEBPACK_IMPORTED_MODULE_4___default.a["delete"](this.players, data.index);
      this.refreshPlayersForm();
      nprogress_nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.start();
      this.deletePlayer(data).then(function () {
        nprogress_nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.done();
      })["catch"](function (error) {
        nprogress_nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.done();
        console.warn(error);
      });
    },
    refreshPlayersForm: function refreshPlayersForm() {
      var self = this;
      self.showPlayers = false;
      this.$nextTick(function () {
        self.showPlayers = true;
      });
    },
    savePlayer: function savePlayer(data) {
      if (data.id) {
        return this.updatePlayer(data);
      } else {
        return this.createPlayer(data);
      }
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/playersForm.vue?vue&type=template&id=03f7a19b&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/playersForm.vue?vue&type=template&id=03f7a19b& ***!
  \**************************************************************************************************************************************************************************************************************/
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
    "v-row",
    { staticClass: "px-3" },
    [
      _c(
        "v-col",
        { attrs: { cols: "4" } },
        [
          _c("v-text-field", {
            attrs: {
              label: "First name",
              "validate-on-blur": "",
              rules: [
                function(v) {
                  return !!v || "First name is required"
                }
              ]
            },
            on: { change: _vm.changed },
            model: {
              value: _vm.playerData.first_name,
              callback: function($$v) {
                _vm.$set(_vm.playerData, "first_name", $$v)
              },
              expression: "playerData.first_name"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-col",
        { attrs: { cols: "4" } },
        [
          _c("v-text-field", {
            attrs: {
              label: "Last name",
              "validate-on-blur": "",
              rules: [
                function(v) {
                  return !!v || "Last name is required"
                }
              ]
            },
            on: { change: _vm.changed },
            model: {
              value: _vm.playerData.last_name,
              callback: function($$v) {
                _vm.$set(_vm.playerData, "last_name", $$v)
              },
              expression: "playerData.last_name"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-col",
        { attrs: { cols: "4" } },
        [
          _c("v-select", {
            attrs: {
              items: _vm.types,
              label: "Player type",
              "validate-on-blur": "",
              required: "",
              "append-outer-icon": "delete_outline",
              rules: [
                function(v) {
                  return !!v || "Type is required"
                }
              ]
            },
            on: { change: _vm.changed, "click:append-outer": _vm.deletePlayer },
            model: {
              value: _vm.playerData.type,
              callback: function($$v) {
                _vm.$set(_vm.playerData, "type", $$v)
              },
              expression: "playerData.type"
            }
          })
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/router/views/create_modify_team.vue?vue&type=template&id=03799390&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/router/views/create_modify_team.vue?vue&type=template&id=03799390& ***!
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
    "Layout",
    [
      _c(
        "v-container",
        { attrs: { fluid: "" } },
        [
          _c(
            "v-row",
            { attrs: { justify: "center" } },
            [
              _c(
                "v-col",
                { attrs: { cols: "12", md: "7" } },
                [
                  _c(
                    "v-card",
                    { staticClass: "px-4" },
                    [
                      _c(
                        "div",
                        { staticClass: "text-center pt-7 pb-3 text-h4" },
                        [
                          _c(
                            "v-btn",
                            {
                              staticClass: "float-left",
                              attrs: { text: "", to: { name: "home" } }
                            },
                            [_c("v-icon", [_vm._v("chevron_left")])],
                            1
                          ),
                          _vm._v(" "),
                          _c("span", { staticClass: "text-capitalize" }, [
                            _vm._v(_vm._s(_vm.view) + " Team")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-alert",
                        {
                          attrs: {
                            dense: "",
                            outlined: "",
                            type: "error",
                            dismissible: ""
                          },
                          model: {
                            value: _vm.alertBox,
                            callback: function($$v) {
                              _vm.alertBox = $$v
                            },
                            expression: "alertBox"
                          }
                        },
                        [_vm._v(_vm._s(_vm.validationError))]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-form",
                        {
                          ref: "form",
                          model: {
                            value: _vm.validated,
                            callback: function($$v) {
                              _vm.validated = $$v
                            },
                            expression: "validated"
                          }
                        },
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "Name",
                                  "validate-on-blur": "",
                                  rules: [
                                    function(v) {
                                      return !!v || "Name is required"
                                    }
                                  ],
                                  "data-cy": "input_team_name"
                                },
                                model: {
                                  value: _vm.team.name,
                                  callback: function($$v) {
                                    _vm.$set(_vm.team, "name", $$v)
                                  },
                                  expression: "team.name"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "Phone number",
                                  "validate-on-blur": "",
                                  rules: [
                                    function(v) {
                                      return !!v || "Phone number is required"
                                    }
                                  ],
                                  "data-cy": "input_team_phone_number"
                                },
                                model: {
                                  value: _vm.team.phone_number,
                                  callback: function($$v) {
                                    _vm.$set(_vm.team, "phone_number", $$v)
                                  },
                                  expression: "team.phone_number"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.team.id
                            ? _c("v-subheader", [_vm._v("Players")])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm._l(_vm.players, function(player, index) {
                            return _vm.showPlayers && _vm.team.id
                              ? _c("PlayerForm", {
                                  key: index,
                                  attrs: { index: index, player: player },
                                  on: {
                                    change: _vm.changePlayer,
                                    delete: _vm.triggerDeletePlayer
                                  }
                                })
                              : _vm._e()
                          }),
                          _vm._v(" "),
                          _vm.team.id
                            ? _c("v-col", { attrs: { cols: "12" } }, [
                                _c("a", { on: { click: _vm.addPlayerForm } }, [
                                  _vm._v("Add player")
                                ])
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "v-card-actions",
                            [
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: {
                                    color: "green darken-1",
                                    text: "",
                                    "data-cy": "save_team_btn"
                                  },
                                  on: { click: _vm.saveTeam }
                                },
                                [_vm._v("Save")]
                              )
                            ],
                            1
                          )
                        ],
                        2
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
            "v-dialog",
            {
              attrs: { "max-width": "350", "data-cy": "success_dialog" },
              model: {
                value: _vm.dialogSuccess,
                callback: function($$v) {
                  _vm.dialogSuccess = $$v
                },
                expression: "dialogSuccess"
              }
            },
            [
              _c(
                "v-card",
                { attrs: { "data-cy": "success_dialog" } },
                [
                  _c("v-card-title", { staticClass: "headline" }, [
                    _vm._v("Success!")
                  ]),
                  _vm._v(" "),
                  _c("v-card-text", [
                    _vm._v("Team " + _vm._s(_vm.view) + "ed succesfully.")
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "green darken-1", text: "" },
                          on: {
                            click: function($event) {
                              _vm.dialogSuccess = false
                            }
                          }
                        },
                        [_vm._v("Ok")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
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

/***/ "./resources/js/components/playersForm.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/playersForm.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _playersForm_vue_vue_type_template_id_03f7a19b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playersForm.vue?vue&type=template&id=03f7a19b& */ "./resources/js/components/playersForm.vue?vue&type=template&id=03f7a19b&");
/* harmony import */ var _playersForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playersForm.vue?vue&type=script&lang=js& */ "./resources/js/components/playersForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _playersForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _playersForm_vue_vue_type_template_id_03f7a19b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _playersForm_vue_vue_type_template_id_03f7a19b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */





_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__["VCol"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__["VRow"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_5__["VSelect"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/playersForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/playersForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/playersForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_playersForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./playersForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/playersForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_playersForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/playersForm.vue?vue&type=template&id=03f7a19b&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/playersForm.vue?vue&type=template&id=03f7a19b& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_playersForm_vue_vue_type_template_id_03f7a19b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./playersForm.vue?vue&type=template&id=03f7a19b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/playersForm.vue?vue&type=template&id=03f7a19b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_playersForm_vue_vue_type_template_id_03f7a19b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_playersForm_vue_vue_type_template_id_03f7a19b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/router/views/create_modify_team.vue":
/*!**********************************************************!*\
  !*** ./resources/js/router/views/create_modify_team.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_modify_team_vue_vue_type_template_id_03799390___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create_modify_team.vue?vue&type=template&id=03799390& */ "./resources/js/router/views/create_modify_team.vue?vue&type=template&id=03799390&");
/* harmony import */ var _create_modify_team_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create_modify_team.vue?vue&type=script&lang=js& */ "./resources/js/router/views/create_modify_team.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VAlert */ "./node_modules/vuetify/lib/components/VAlert/index.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VSubheader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VSubheader */ "./node_modules/vuetify/lib/components/VSubheader/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _create_modify_team_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_modify_team_vue_vue_type_template_id_03799390___WEBPACK_IMPORTED_MODULE_0__["render"],
  _create_modify_team_vue_vue_type_template_id_03799390___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */
















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VAlert: vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_4__["VAlert"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VContainer"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_8__["VDialog"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_9__["VForm"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_10__["VIcon"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VRow"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VSpacer"],VSubheader: vuetify_lib_components_VSubheader__WEBPACK_IMPORTED_MODULE_11__["VSubheader"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_12__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/router/views/create_modify_team.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/router/views/create_modify_team.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/router/views/create_modify_team.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_modify_team_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./create_modify_team.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/router/views/create_modify_team.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_modify_team_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/router/views/create_modify_team.vue?vue&type=template&id=03799390&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/router/views/create_modify_team.vue?vue&type=template&id=03799390& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_modify_team_vue_vue_type_template_id_03799390___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./create_modify_team.vue?vue&type=template&id=03799390& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/router/views/create_modify_team.vue?vue&type=template&id=03799390&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_modify_team_vue_vue_type_template_id_03799390___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_modify_team_vue_vue_type_template_id_03799390___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGxheWVyc0Zvcm0udnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvcm91dGVyL3ZpZXdzL2NyZWF0ZV9tb2RpZnlfdGVhbS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGxheWVyc0Zvcm0udnVlP2Y3MmIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3JvdXRlci92aWV3cy9jcmVhdGVfbW9kaWZ5X3RlYW0udnVlP2FmN2YiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGxheWVyc0Zvcm0udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3BsYXllcnNGb3JtLnZ1ZT9mYzlkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3BsYXllcnNGb3JtLnZ1ZT8zODYzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9yb3V0ZXIvdmlld3MvY3JlYXRlX21vZGlmeV90ZWFtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcm91dGVyL3ZpZXdzL2NyZWF0ZV9tb2RpZnlfdGVhbS52dWU/NjA4ZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcm91dGVyL3ZpZXdzL2NyZWF0ZV9tb2RpZnlfdGVhbS52dWU/OGQzZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0NBO0FBQ0E7QUFDQTtBQUNBLG1CQURBO0FBRUE7QUFGQSxLQURBO0FBS0E7QUFDQSxvQkFEQTtBQUVBO0FBRkE7QUFMQSxHQURBO0FBV0EsTUFYQSxrQkFXQTtBQUNBO0FBQ0E7QUFDQSxjQURBO0FBRUEsc0JBRkE7QUFHQSxxQkFIQTtBQUlBLGdCQUpBO0FBS0E7QUFMQTtBQURBO0FBU0EsR0FyQkE7QUFzQkE7QUFDQSxT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aUIsYUFBYSw0RUFBTSxDQUFDLHNFQUFJLENBQUMseUVBQUssQ0FBQyx1RkFBWSxDQUFDLGlGQUFTLENBQUMsbUZBQVUsQ0FBQyx1RUFBSSxDQUFDLG1GQUFVLENBQUMsK0VBQU8sQ0FBQyx5RUFBSyxDQUFDLDBFQUFLLENBQUMsdUVBQUksQ0FBQyw2RUFBTyxDQUFDLHlGQUFVLENBQUMseUZBQVUsQ0FBQzs7O0FBR3pKO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUMxRGY7QUFBQTtBQUFBLHdDQUF3TSxDQUFnQiw4UEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0E1TjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiNC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8di1yb3cgY2xhc3M9XCJweC0zXCI+XG4gICAgICAgIDx2LWNvbCBjb2xzPVwiNFwiPlxuICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJwbGF5ZXJEYXRhLmZpcnN0X25hbWVcIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwiRmlyc3QgbmFtZVwiXG4gICAgICAgICAgICAgICAgdmFsaWRhdGUtb24tYmx1clxuICAgICAgICAgICAgICAgIDpydWxlcz1cIlsodikgPT4gISF2IHx8ICdGaXJzdCBuYW1lIGlzIHJlcXVpcmVkJ11cIlxuICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCJjaGFuZ2VkXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvdi1jb2w+XG4gICAgICAgIDx2LWNvbCBjb2xzPVwiNFwiPlxuICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJwbGF5ZXJEYXRhLmxhc3RfbmFtZVwiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJMYXN0IG5hbWVcIlxuICAgICAgICAgICAgICAgIHZhbGlkYXRlLW9uLWJsdXJcbiAgICAgICAgICAgICAgICA6cnVsZXM9XCJbKHYpID0+ICEhdiB8fCAnTGFzdCBuYW1lIGlzIHJlcXVpcmVkJ11cIlxuICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCJjaGFuZ2VkXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvdi1jb2w+XG4gICAgICAgIDx2LWNvbCBjb2xzPVwiNFwiPlxuICAgICAgICAgICAgPHYtc2VsZWN0XG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cInBsYXllckRhdGEudHlwZVwiXG4gICAgICAgICAgICAgICAgOml0ZW1zPVwidHlwZXNcIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwiUGxheWVyIHR5cGVcIlxuICAgICAgICAgICAgICAgIHZhbGlkYXRlLW9uLWJsdXJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIGFwcGVuZC1vdXRlci1pY29uPVwiZGVsZXRlX291dGxpbmVcIlxuICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCJjaGFuZ2VkXCJcbiAgICAgICAgICAgICAgICA6cnVsZXM9XCJbKHYpID0+ICEhdiB8fCAnVHlwZSBpcyByZXF1aXJlZCddXCJcbiAgICAgICAgICAgICAgICBAY2xpY2s6YXBwZW5kLW91dGVyPVwiZGVsZXRlUGxheWVyXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvdi1jb2w+XG4gICAgPC92LXJvdz5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHByb3BzOiB7XG4gICAgICAgIGluZGV4OiB7XG4gICAgICAgICAgICByZXF1aXJlOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB9LFxuICAgICAgICBwbGF5ZXI6IHtcbiAgICAgICAgICAgIHJlcXVpcmU6IGZhbHNlLFxuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBsYXllckRhdGE6IHtcbiAgICAgICAgICAgICAgICBpZDogJycsXG4gICAgICAgICAgICAgICAgZmlyc3RfbmFtZTogJycsXG4gICAgICAgICAgICAgICAgbGFzdF9uYW1lOiAnJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnJyxcbiAgICAgICAgICAgICAgICBpbmRleDogdGhpcy5pbmRleCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIHR5cGVzKCkge1xuICAgICAgICAgICAgcmV0dXJuIFsnY2FwdGFpbicsICdwbGF5ZXInLCAnc3Vic3RpdHV0ZSddXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBjcmVhdGVkKCkge1xuICAgICAgICB0aGlzLnBsYXllckRhdGEuaW5kZXggPSB0aGlzLmluZGV4XG4gICAgICAgIHRoaXMucGxheWVyRGF0YS5pZCA9IHRoaXMucGxheWVyLmlkIHx8ICcnXG4gICAgICAgIHRoaXMucGxheWVyRGF0YS5maXJzdF9uYW1lID0gdGhpcy5wbGF5ZXIuZmlyc3RfbmFtZSB8fCAnJ1xuICAgICAgICB0aGlzLnBsYXllckRhdGEubGFzdF9uYW1lID0gdGhpcy5wbGF5ZXIubGFzdF9uYW1lIHx8ICcnXG4gICAgICAgIHRoaXMucGxheWVyRGF0YS50eXBlID0gdGhpcy5wbGF5ZXIudHlwZSB8fCAnJ1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBjaGFuZ2VkKCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgdGhpcy5wbGF5ZXJEYXRhKVxuICAgICAgICB9LFxuICAgICAgICBkZWxldGVQbGF5ZXIoKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdkZWxldGUnLCB0aGlzLnBsYXllckRhdGEpXG4gICAgICAgIH0sXG4gICAgfSxcbn1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cbiAgICA8TGF5b3V0PlxuICAgICAgICA8di1jb250YWluZXIgZmx1aWQ+XG4gICAgICAgICAgICA8di1yb3cganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDx2LWNvbCBjb2xzPVwiMTJcIiBtZD1cIjdcIj5cbiAgICAgICAgICAgICAgICAgICAgPHYtY2FyZCBjbGFzcz1cInB4LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBwdC03IHBiLTMgdGV4dC1oNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBjbGFzcz1cImZsb2F0LWxlZnRcIiB0ZXh0IDp0bz1cInsgbmFtZTogJ2hvbWUnIH1cIj48di1pY29uPmNoZXZyb25fbGVmdDwvdi1pY29uPjwvdi1idG4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWNhcGl0YWxpemVcIj57eyB2aWV3IH19IFRlYW08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtYWxlcnQgdi1tb2RlbD1cImFsZXJ0Qm94XCIgZGVuc2Ugb3V0bGluZWQgdHlwZT1cImVycm9yXCIgZGlzbWlzc2libGU+e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PC92LWFsZXJ0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtZm9ybSByZWY9XCJmb3JtXCIgdi1tb2RlbD1cInZhbGlkYXRlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNvbCBjb2xzPVwiMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInRlYW0ubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUtb24tYmx1clxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnJ1bGVzPVwiWyh2KSA9PiAhIXYgfHwgJ05hbWUgaXMgcmVxdWlyZWQnXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWN5PVwiaW5wdXRfdGVhbV9uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNvbCBjb2xzPVwiMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInRlYW0ucGhvbmVfbnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGhvbmUgbnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLW9uLWJsdXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpydWxlcz1cIlsodikgPT4gISF2IHx8ICdQaG9uZSBudW1iZXIgaXMgcmVxdWlyZWQnXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWN5PVwiaW5wdXRfdGVhbV9waG9uZV9udW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc3ViaGVhZGVyIHYtaWY9XCJ0ZWFtLmlkXCI+UGxheWVyczwvdi1zdWJoZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBsYXllckZvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCIocGxheWVyLCBpbmRleCkgaW4gcGxheWVyc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJpbmRleFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDppbmRleD1cImluZGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnBsYXllcj1cInBsYXllclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCJjaGFuZ2VQbGF5ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGVsZXRlPVwidHJpZ2dlckRlbGV0ZVBsYXllclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJzaG93UGxheWVycyAmJiB0ZWFtLmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNvbCBjb2xzPVwiMTJcIiB2LWlmPVwidGVhbS5pZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBAY2xpY2s9XCJhZGRQbGF5ZXJGb3JtXCI+QWRkIHBsYXllcjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcmQtYWN0aW9ucz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc3BhY2VyPjwvdi1zcGFjZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBjb2xvcj1cImdyZWVuIGRhcmtlbi0xXCIgdGV4dCBkYXRhLWN5PVwic2F2ZV90ZWFtX2J0blwiIEBjbGljaz1cInNhdmVUZWFtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5TYXZlPC92LWJ0blxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQtYWN0aW9ucz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1mb3JtPlxuICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZD5cbiAgICAgICAgICAgICAgICA8L3YtY29sPlxuICAgICAgICAgICAgPC92LXJvdz5cblxuICAgICAgICAgICAgPHYtZGlhbG9nIHYtbW9kZWw9XCJkaWFsb2dTdWNjZXNzXCIgbWF4LXdpZHRoPVwiMzUwXCIgZGF0YS1jeT1cInN1Y2Nlc3NfZGlhbG9nXCI+XG4gICAgICAgICAgICAgICAgPHYtY2FyZCBkYXRhLWN5PVwic3VjY2Vzc19kaWFsb2dcIj5cbiAgICAgICAgICAgICAgICAgICAgPHYtY2FyZC10aXRsZSBjbGFzcz1cImhlYWRsaW5lXCI+U3VjY2VzcyE8L3YtY2FyZC10aXRsZT5cblxuICAgICAgICAgICAgICAgICAgICA8di1jYXJkLXRleHQ+VGVhbSB7eyB2aWV3IH19ZWQgc3VjY2VzZnVsbHkuPC92LWNhcmQtdGV4dD5cblxuICAgICAgICAgICAgICAgICAgICA8di1jYXJkLWFjdGlvbnM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1zcGFjZXI+PC92LXNwYWNlcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIGNvbG9yPVwiZ3JlZW4gZGFya2VuLTFcIiB0ZXh0IEBjbGljaz1cImRpYWxvZ1N1Y2Nlc3MgPSBmYWxzZVwiPk9rPC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQtYWN0aW9ucz5cbiAgICAgICAgICAgICAgICA8L3YtY2FyZD5cbiAgICAgICAgICAgIDwvdi1kaWFsb2c+XG4gICAgICAgIDwvdi1jb250YWluZXI+XG4gICAgPC9MYXlvdXQ+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vbGF5b3V0cy9tYWluLnZ1ZSdcbmltcG9ydCB7IHRlYW1NZXRob2RzLCBwbGF5ZXJNZXRob2RzIH0gZnJvbSAnLi4vLi4vc3RhdGUvaGVscGVycydcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzL25wcm9ncmVzcydcbmltcG9ydCBQbGF5ZXJGb3JtIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcGxheWVyc0Zvcm0udnVlJ1xuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBMYXlvdXQsXG4gICAgICAgIFBsYXllckZvcm0sXG4gICAgfSxcbiAgICBkYXRhOiAoKSA9PiAoe1xuICAgICAgICB2aWV3OiAnY3JlYXRlJyxcbiAgICAgICAgdGVhbToge1xuICAgICAgICAgICAgaWQ6IG51bGwsXG4gICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgIHBob25lX251bWJlcjogJycsXG4gICAgICAgICAgICBpY29uOiAnc3BvcnRzX2Jhc2ViYWxsJyxcbiAgICAgICAgfSxcbiAgICAgICAgcGxheWVyczogW10sXG4gICAgICAgIHNob3dQbGF5ZXJzOiB0cnVlLCAvLyBXZSBuZWVkIHRvIHJlZnJlc2ggZm9ybXMgb25jZSB0aGUgZGVsZXRlIG9jY3VyZXNcbiAgICAgICAgdmFsaWRhdGVkOiBmYWxzZSxcbiAgICAgICAgZGlhbG9nU3VjY2VzczogZmFsc2UsXG4gICAgICAgIGFsZXJ0Qm94OiBmYWxzZSxcbiAgICAgICAgdmFsaWRhdGlvbkVycm9yOiAnJyxcbiAgICB9KSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgICByZWRpcmVjdFRvKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMudmlldyA9PSAnY3JlYXRlJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdob21lJyB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH0sXG4gICAgY3JlYXRlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuJHJvdXRlLm1ldGEuZWRpdCkge1xuICAgICAgICAgICAgdGhpcy52aWV3ID0gJ2VkaXQnXG4gICAgICAgICAgICB0aGlzLnRlYW0gPSB0aGlzLiRyb3V0ZS5wYXJhbXMudGVhbVxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJzID0gdGhpcy4kcm91dGUucGFyYW1zLnRlYW0ucGxheWVyc1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52aWV3ID0gJ2NyZWF0ZSdcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICAuLi50ZWFtTWV0aG9kcyxcbiAgICAgICAgLi4ucGxheWVyTWV0aG9kcyxcbiAgICAgICAgdmFsaWRhdGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kcmVmcy5mb3JtLnZhbGlkYXRlKClcbiAgICAgICAgfSxcbiAgICAgICAgc2F2ZVRlYW0oKSB7XG4gICAgICAgICAgICBpZiAodGhpcy52YWxpZGF0ZSgpKSB7XG4gICAgICAgICAgICAgICAgTlByb2dyZXNzLnN0YXJ0KClcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmUoKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5kYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICBOUHJvZ3Jlc3MuZG9uZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRlYW0gPSBkYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZ1N1Y2Nlc3MgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlICYmIGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDIyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uRXJyb3IgPSBbXS5jb25jYXQuYXBwbHkoW10sIE9iamVjdC52YWx1ZXMoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnMpKS5qb2luKCkgLy9mbGF0dGVuaW5nIHRoZSBlcnJvcnMgdG8gc3RyaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydEJveCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uRXJyb3IgPSBcIlNvbWV0aGluZyB3ZW50IHdyb25nIGFuZCB3ZSAncmUgaW52ZXN0aWdhdGluZyBhYm91dCBpdC5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRCb3ggPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHNhdmUoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy52aWV3ID09ICdlZGl0Jykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZVRlYW0odGhpcy50ZWFtKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVUZWFtKHRoaXMudGVhbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYWRkUGxheWVyRm9ybSgpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVycy5wdXNoKHt9KVxuICAgICAgICB9LFxuICAgICAgICBjaGFuZ2VQbGF5ZXIoZGF0YSkge1xuICAgICAgICAgICAgaWYgKGRhdGEuZmlyc3RfbmFtZSAmJiBkYXRhLmxhc3RfbmFtZSAmJiBkYXRhLnR5cGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcnNbZGF0YS5pbmRleF0gPSBkYXRhXG4gICAgICAgICAgICAgICAgZGF0YS50ZWFtX2lkID0gdGhpcy50ZWFtLmlkXG4gICAgICAgICAgICAgICAgTlByb2dyZXNzLnN0YXJ0KClcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVQbGF5ZXIoZGF0YSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJzW2RhdGEuaW5kZXhdID0gcmVzcG9uc2UuZGF0YVxuICAgICAgICAgICAgICAgICAgICBOUHJvZ3Jlc3MuZG9uZSgpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaFBsYXllcnNGb3JtKClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB0cmlnZ2VyRGVsZXRlUGxheWVyKGRhdGEpIHtcbiAgICAgICAgICAgIFZ1ZS5kZWxldGUodGhpcy5wbGF5ZXJzLCBkYXRhLmluZGV4KVxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoUGxheWVyc0Zvcm0oKVxuICAgICAgICAgICAgTlByb2dyZXNzLnN0YXJ0KClcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlUGxheWVyKGRhdGEpXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBOUHJvZ3Jlc3MuZG9uZSgpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIE5Qcm9ncmVzcy5kb25lKClcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGVycm9yKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIHJlZnJlc2hQbGF5ZXJzRm9ybSgpIHtcbiAgICAgICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICAgICAgc2VsZi5zaG93UGxheWVycyA9IGZhbHNlXG5cbiAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnNob3dQbGF5ZXJzID0gdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgc2F2ZVBsYXllcihkYXRhKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5pZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZVBsYXllcihkYXRhKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVQbGF5ZXIoZGF0YSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9LFxufVxuPC9zY3JpcHQ+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInYtcm93XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJweC0zXCIgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWNvbFwiLFxuICAgICAgICB7IGF0dHJzOiB7IGNvbHM6IFwiNFwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGxhYmVsOiBcIkZpcnN0IG5hbWVcIixcbiAgICAgICAgICAgICAgXCJ2YWxpZGF0ZS1vbi1ibHVyXCI6IFwiXCIsXG4gICAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24odikge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuICEhdiB8fCBcIkZpcnN0IG5hbWUgaXMgcmVxdWlyZWRcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uOiB7IGNoYW5nZTogX3ZtLmNoYW5nZWQgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0ucGxheWVyRGF0YS5maXJzdF9uYW1lLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnBsYXllckRhdGEsIFwiZmlyc3RfbmFtZVwiLCAkJHYpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicGxheWVyRGF0YS5maXJzdF9uYW1lXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInYtY29sXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgY29sczogXCI0XCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgbGFiZWw6IFwiTGFzdCBuYW1lXCIsXG4gICAgICAgICAgICAgIFwidmFsaWRhdGUtb24tYmx1clwiOiBcIlwiLFxuICAgICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAhIXYgfHwgXCJMYXN0IG5hbWUgaXMgcmVxdWlyZWRcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uOiB7IGNoYW5nZTogX3ZtLmNoYW5nZWQgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0ucGxheWVyRGF0YS5sYXN0X25hbWUsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ucGxheWVyRGF0YSwgXCJsYXN0X25hbWVcIiwgJCR2KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBsYXllckRhdGEubGFzdF9uYW1lXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInYtY29sXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgY29sczogXCI0XCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJ2LXNlbGVjdFwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBpdGVtczogX3ZtLnR5cGVzLFxuICAgICAgICAgICAgICBsYWJlbDogXCJQbGF5ZXIgdHlwZVwiLFxuICAgICAgICAgICAgICBcInZhbGlkYXRlLW9uLWJsdXJcIjogXCJcIixcbiAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgIFwiYXBwZW5kLW91dGVyLWljb25cIjogXCJkZWxldGVfb3V0bGluZVwiLFxuICAgICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAhIXYgfHwgXCJUeXBlIGlzIHJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjogeyBjaGFuZ2U6IF92bS5jaGFuZ2VkLCBcImNsaWNrOmFwcGVuZC1vdXRlclwiOiBfdm0uZGVsZXRlUGxheWVyIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBsYXllckRhdGEudHlwZSxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5wbGF5ZXJEYXRhLCBcInR5cGVcIiwgJCR2KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBsYXllckRhdGEudHlwZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIkxheW91dFwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInYtY29udGFpbmVyXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgZmx1aWQ6IFwiXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtcm93XCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IGp1c3RpZnk6IFwiY2VudGVyXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtY29sXCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBjb2xzOiBcIjEyXCIsIG1kOiBcIjdcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicHgtNFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyIHB0LTcgcGItMyB0ZXh0LWg0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZsb2F0LWxlZnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiXCIsIHRvOiB7IG5hbWU6IFwiaG9tZVwiIH0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwidi1pY29uXCIsIFtfdm0uX3YoXCJjaGV2cm9uX2xlZnRcIildKV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNhcGl0YWxpemVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udmlldykgKyBcIiBUZWFtXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1hbGVydFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbnNlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZXJyb3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNtaXNzaWJsZTogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uYWxlcnRCb3gsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmFsZXJ0Qm94ID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImFsZXJ0Qm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS52YWxpZGF0aW9uRXJyb3IpKV1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInYtZm9ybVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6IFwiZm9ybVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udmFsaWRhdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52YWxpZGF0ZWQgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidmFsaWRhdGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgY29sczogXCIxMlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiTmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsaWRhdGUtb24tYmx1clwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhIXYgfHwgXCJOYW1lIGlzIHJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS1jeVwiOiBcImlucHV0X3RlYW1fbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS50ZWFtLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnRlYW0sIFwibmFtZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInRlYW0ubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGNvbHM6IFwiMTJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlBob25lIG51bWJlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsaWRhdGUtb24tYmx1clwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhIXYgfHwgXCJQaG9uZSBudW1iZXIgaXMgcmVxdWlyZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLWN5XCI6IFwiaW5wdXRfdGVhbV9waG9uZV9udW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udGVhbS5waG9uZV9udW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnRlYW0sIFwicGhvbmVfbnVtYmVyXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidGVhbS5waG9uZV9udW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udGVhbS5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ2LXN1YmhlYWRlclwiLCBbX3ZtLl92KFwiUGxheWVyc1wiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5wbGF5ZXJzLCBmdW5jdGlvbihwbGF5ZXIsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zaG93UGxheWVycyAmJiBfdm0udGVhbS5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcIlBsYXllckZvcm1cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaW5kZXg6IGluZGV4LCBwbGF5ZXI6IHBsYXllciB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IF92bS5jaGFuZ2VQbGF5ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGU6IF92bS50cmlnZ2VyRGVsZXRlUGxheWVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRlYW0uaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidi1jb2xcIiwgeyBhdHRyczogeyBjb2xzOiBcIjEyXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYVwiLCB7IG9uOiB7IGNsaWNrOiBfdm0uYWRkUGxheWVyRm9ybSB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJBZGQgcGxheWVyXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jYXJkLWFjdGlvbnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiZ3JlZW4gZGFya2VuLTFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtY3lcIjogXCJzYXZlX3RlYW1fYnRuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uc2F2ZVRlYW0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiU2F2ZVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtZGlhbG9nXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IFwibWF4LXdpZHRoXCI6IFwiMzUwXCIsIFwiZGF0YS1jeVwiOiBcInN1Y2Nlc3NfZGlhbG9nXCIgfSxcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmRpYWxvZ1N1Y2Nlc3MsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgX3ZtLmRpYWxvZ1N1Y2Nlc3MgPSAkJHZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZGlhbG9nU3VjY2Vzc1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBcImRhdGEtY3lcIjogXCJzdWNjZXNzX2RpYWxvZ1wiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInYtY2FyZC10aXRsZVwiLCB7IHN0YXRpY0NsYXNzOiBcImhlYWRsaW5lXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJTdWNjZXNzIVwiKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ2LWNhcmQtdGV4dFwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlRlYW0gXCIgKyBfdm0uX3MoX3ZtLnZpZXcpICsgXCJlZCBzdWNjZXNmdWxseS5cIilcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtY2FyZC1hY3Rpb25zXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbG9yOiBcImdyZWVuIGRhcmtlbi0xXCIsIHRleHQ6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGlhbG9nU3VjY2VzcyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIk9rXCIpXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9wbGF5ZXJzRm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDNmN2ExOWImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vcGxheWVyc0Zvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9wbGF5ZXJzRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiB2dWV0aWZ5LWxvYWRlciAqL1xuaW1wb3J0IGluc3RhbGxDb21wb25lbnRzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9ydW50aW1lL2luc3RhbGxDb21wb25lbnRzLmpzXCJcbmltcG9ydCB7IFZDb2wgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZHcmlkJztcbmltcG9ydCB7IFZSb3cgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZHcmlkJztcbmltcG9ydCB7IFZTZWxlY3QgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZTZWxlY3QnO1xuaW1wb3J0IHsgVlRleHRGaWVsZCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVlRleHRGaWVsZCc7XG5pbnN0YWxsQ29tcG9uZW50cyhjb21wb25lbnQsIHtWQ29sLFZSb3csVlNlbGVjdCxWVGV4dEZpZWxkfSlcblxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9yYWplZXYvcHJvamVjdHMvc3R1ZHkvdXB3b3JrX2RlbW8vbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMDNmN2ExOWInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMDNmN2ExOWInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMDNmN2ExOWInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3BsYXllcnNGb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wM2Y3YTE5YiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwM2Y3YTE5YicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGxheWVyc0Zvcm0udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wbGF5ZXJzRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGxheWVyc0Zvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BsYXllcnNGb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wM2Y3YTE5YiZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vY3JlYXRlX21vZGlmeV90ZWFtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wMzc5OTM5MCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9jcmVhdGVfbW9kaWZ5X3RlYW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9jcmVhdGVfbW9kaWZ5X3RlYW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogdnVldGlmeS1sb2FkZXIgKi9cbmltcG9ydCBpbnN0YWxsQ29tcG9uZW50cyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvcnVudGltZS9pbnN0YWxsQ29tcG9uZW50cy5qc1wiXG5pbXBvcnQgeyBWQWxlcnQgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZBbGVydCc7XG5pbXBvcnQgeyBWQnRuIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WQnRuJztcbmltcG9ydCB7IFZDYXJkIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WQ2FyZCc7XG5pbXBvcnQgeyBWQ2FyZEFjdGlvbnMgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZDYXJkJztcbmltcG9ydCB7IFZDYXJkVGV4dCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkNhcmQnO1xuaW1wb3J0IHsgVkNhcmRUaXRsZSB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkNhcmQnO1xuaW1wb3J0IHsgVkNvbCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkdyaWQnO1xuaW1wb3J0IHsgVkNvbnRhaW5lciB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkdyaWQnO1xuaW1wb3J0IHsgVkRpYWxvZyB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkRpYWxvZyc7XG5pbXBvcnQgeyBWRm9ybSB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkZvcm0nO1xuaW1wb3J0IHsgVkljb24gfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZJY29uJztcbmltcG9ydCB7IFZSb3cgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZHcmlkJztcbmltcG9ydCB7IFZTcGFjZXIgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZHcmlkJztcbmltcG9ydCB7IFZTdWJoZWFkZXIgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZTdWJoZWFkZXInO1xuaW1wb3J0IHsgVlRleHRGaWVsZCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVlRleHRGaWVsZCc7XG5pbnN0YWxsQ29tcG9uZW50cyhjb21wb25lbnQsIHtWQWxlcnQsVkJ0bixWQ2FyZCxWQ2FyZEFjdGlvbnMsVkNhcmRUZXh0LFZDYXJkVGl0bGUsVkNvbCxWQ29udGFpbmVyLFZEaWFsb2csVkZvcm0sVkljb24sVlJvdyxWU3BhY2VyLFZTdWJoZWFkZXIsVlRleHRGaWVsZH0pXG5cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvcmFqZWV2L3Byb2plY3RzL3N0dWR5L3Vwd29ya19kZW1vL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzAzNzk5MzkwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzAzNzk5MzkwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzAzNzk5MzkwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9jcmVhdGVfbW9kaWZ5X3RlYW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTAzNzk5MzkwJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzAzNzk5MzkwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvcm91dGVyL3ZpZXdzL2NyZWF0ZV9tb2RpZnlfdGVhbS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NyZWF0ZV9tb2RpZnlfdGVhbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY3JlYXRlX21vZGlmeV90ZWFtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jcmVhdGVfbW9kaWZ5X3RlYW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTAzNzk5MzkwJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==