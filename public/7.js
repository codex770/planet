(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/SuperAdmin/Contact.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/SuperAdmin/Contact.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_setting_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/setting_service */ "./resources/js/services/setting_service.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  name: "Contact",
  data: function data() {
    return {
      contact: {
        email: ''
      },
      contacts: [],
      viewContact: {}
    };
  },
  mounted: function mounted() {
    this.loadAdminContact();
    this.loadAllContact();
  },
  methods: {
    loadAdminContact: function () {
      var _loadAdminContact = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _services_setting_service__WEBPACK_IMPORTED_MODULE_1__["loadAdminContact"]();

              case 3:
                response = _context.sent;
                this.contact = response.data;
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                this.flashMessage.error({
                  message: 'Some error occured, please refresh!',
                  time: 5000
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
      }));

      function loadAdminContact() {
        return _loadAdminContact.apply(this, arguments);
      }

      return loadAdminContact;
    }(),
    loadAllContact: function () {
      var _loadAllContact = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _services_setting_service__WEBPACK_IMPORTED_MODULE_1__["loadAllContact"]();

              case 3:
                response = _context2.sent;
                this.contacts = response.data;
                console.log(this.contacts);
                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                this.flashMessage.error({
                  message: 'Some error occured, please refresh!',
                  time: 5000
                });

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 8]]);
      }));

      function loadAllContact() {
        return _loadAllContact.apply(this, arguments);
      }

      return loadAllContact;
    }(),
    updateContact: function () {
      var _updateContact = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _services_setting_service__WEBPACK_IMPORTED_MODULE_1__["updateContact"](this.contact.id, this.contact);

              case 3:
                response = _context3.sent;
                this.contact = response.data;
                this.hideUpdateContactWindow();
                this.flashMessage.success({
                  message: 'Contact has been updated successfully!',
                  time: 5000
                });
                _context3.next = 12;
                break;

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](0);
                this.flashMessage.error({
                  message: 'Some error occured, please refresh!',
                  time: 5000
                });

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 9]]);
      }));

      function updateContact() {
        return _updateContact.apply(this, arguments);
      }

      return updateContact;
    }(),
    showUpdateContactWindow: function showUpdateContactWindow() {
      this.$refs.updateContactModal.show();
    },
    hideUpdateContactWindow: function hideUpdateContactWindow() {
      this.$refs.updateContactModal.hide();
    },
    showContact: function showContact(contact) {
      this.viewContact = contact;
      this.$refs.viewContactModal.show();
    },
    deleteContact: function () {
      var _deleteContact = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(contact) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (window.confirm("Are you sure you want to delete ".concat(contact.name))) {
                  _context4.next = 2;
                  break;
                }

                return _context4.abrupt("return");

              case 2:
                _context4.prev = 2;
                _context4.next = 5;
                return _services_setting_service__WEBPACK_IMPORTED_MODULE_1__["deleteContact"](contact.id);

              case 5:
                response = _context4.sent;
                this.contacts = this.contacts.filter(function (obj) {
                  return obj.id != contact.id;
                });
                this.flashMessage.success({
                  message: "Contact deleted successfuly!",
                  time: 5000
                });
                _context4.next = 13;
                break;

              case 10:
                _context4.prev = 10;
                _context4.t0 = _context4["catch"](2);
                this.flashMessage.error({
                  message: "Some error occurred please try again!",
                  time: 5000
                });

              case 13:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[2, 10]]);
      }));

      function deleteContact(_x) {
        return _deleteContact.apply(this, arguments);
      }

      return deleteContact;
    }()
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/SuperAdmin/Contact.vue?vue&type=template&id=3a4b277f&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/SuperAdmin/Contact.vue?vue&type=template&id=3a4b277f& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    "div",
    { staticClass: "container-fluid" },
    [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "align-items-center justify-content-between mb-4 text-right"
        },
        [
          _c(
            "button",
            {
              staticClass: "btn btn-primary",
              on: { click: _vm.showUpdateContactWindow }
            },
            [_vm._v("Update Email Contact")]
          )
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "card shadow mb-4" }, [
        _vm._m(1),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c("div", { staticClass: "table-responsive" }, [
            _c("table", { staticClass: "table" }, [
              _vm._m(2),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.contacts, function(contact, index) {
                  return _c("tr", { key: index }, [
                    _c("th", { attrs: { scope: "row" } }, [
                      _vm._v(_vm._s(index + 1))
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(contact.name))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(contact.email))]),
                    _vm._v(" "),
                    _c("td", [
                      _c(
                        "a",
                        {
                          staticClass: "btn btn-info btn-circle",
                          on: {
                            click: function($event) {
                              return _vm.showContact(contact)
                            }
                          }
                        },
                        [_c("i", { staticClass: "fas fa-eye" })]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "btn btn-danger btn-circle",
                          on: {
                            click: function($event) {
                              return _vm.deleteContact(contact)
                            }
                          }
                        },
                        [_c("i", { staticClass: "fas fa-trash" })]
                      )
                    ])
                  ])
                }),
                0
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _vm._m(3),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "updateContactModal",
          attrs: { "hide-footer": "", title: "Update Contact..." }
        },
        [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.updateContact($event)
                }
              }
            },
            [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Contact")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.contact.email,
                      expression: "contact.email"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "email" },
                  domProps: { value: _vm.contact.email },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.contact, "email", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c(
                "button",
                { staticClass: "btn btn-primary", attrs: { type: "submit" } },
                [_vm._v("Update Email Contact")]
              )
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "viewContactModal",
          attrs: { "hide-footer": "", title: "View Contact" }
        },
        [
          _c("p", [_vm._v("Name: " + _vm._s(_vm.viewContact.name))]),
          _vm._v(" "),
          _c("p", [_vm._v("Email: " + _vm._s(_vm.viewContact.email))]),
          _vm._v(" "),
          _vm.viewContact.phone
            ? _c("p", [_vm._v("Phone: " + _vm._s(_vm.viewContact.phone))])
            : _vm._e(),
          _vm._v(" "),
          _c("p", [_vm._v("Message: " + _vm._s(_vm.viewContact.message))])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "d-sm-flex align-items-center justify-content-between mb-4"
      },
      [
        _c("h1", { staticClass: "h3 mb-0 text-gray-800" }, [
          _vm._v("Contact Management")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header py-3" }, [
      _c("h6", { staticClass: "m-0 font-weight-bold text-primary" }, [
        _vm._v("list of User")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("name")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("email")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Action")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "addUser",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "exampleModalCenterTitle",
          "aria-hidden": "true"
        }
      },
      [
        _c(
          "div",
          {
            staticClass: "modal-dialog modal-dialog-centered  modal-lg",
            attrs: { role: "document" }
          },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header" }, [
                _c(
                  "h5",
                  {
                    staticClass: "modal-title",
                    attrs: { id: "exampleModalLongTitle" }
                  },
                  [_vm._v("Create an Account!")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "close",
                    attrs: {
                      type: "button",
                      "data-dismiss": "modal",
                      "aria-label": "Close"
                    }
                  },
                  [
                    _c("span", { attrs: { "aria-hidden": "true" } }, [
                      _vm._v("×")
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-lg-10" }, [
                    _c("div", { staticClass: "p-5" }, [
                      _c("div", { staticClass: "text-center" }, [
                        _c("p", { staticClass: "h4 text-gray-900 mb-4" }, [
                          _vm._v("User Will get Email with password")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("form", { staticClass: "user" }, [
                        _c("div", { staticClass: "form-group row" }, [
                          _c("div", { staticClass: "col-sm-12 mb-3 mb-sm-0" }, [
                            _c("input", {
                              staticClass: "form-control form-control-user",
                              attrs: {
                                type: "text",
                                id: "exampleFirstName",
                                placeholder: "User Name"
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c("input", {
                            staticClass: "form-control form-control-user",
                            attrs: {
                              type: "email",
                              id: "exampleInputEmail",
                              placeholder: "Email Address"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group row" }, [
                          _c("div", { staticClass: "col-sm-6 mb-3 mb-sm-0" }, [
                            _c("input", {
                              staticClass: "form-control form-control-user",
                              attrs: {
                                type: "password",
                                id: "exampleInputPassword",
                                placeholder: "Password"
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-sm-6" }, [
                            _c("input", {
                              staticClass: "form-control form-control-user",
                              attrs: {
                                type: "password",
                                id: "exampleRepeatPassword",
                                placeholder: "Repeat Password"
                              }
                            })
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("br")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-secondary",
                    attrs: { type: "button", "data-dismiss": "modal" }
                  },
                  [_vm._v("Close")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  { staticClass: "btn btn-primary", attrs: { type: "button" } },
                  [_vm._v("Add User")]
                )
              ])
            ])
          ]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/services/setting_service.js":
/*!**************************************************!*\
  !*** ./resources/js/services/setting_service.js ***!
  \**************************************************/
/*! exports provided: loadGeneral, loadSocialLinks, loadSeoTags, loadUsers, loadAdminContact, loadAllContact, updateContact, updateGeneral, deleteContact, updateSocialLinks, updateSeoTags, deleteUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadGeneral", function() { return loadGeneral; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadSocialLinks", function() { return loadSocialLinks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadSeoTags", function() { return loadSeoTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadUsers", function() { return loadUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadAdminContact", function() { return loadAdminContact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadAllContact", function() { return loadAllContact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateContact", function() { return updateContact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateGeneral", function() { return updateGeneral; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteContact", function() { return deleteContact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSocialLinks", function() { return updateSocialLinks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSeoTags", function() { return updateSeoTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteUser", function() { return deleteUser; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");

function loadGeneral() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/general');
}
function loadSocialLinks() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/social-links');
}
function loadSeoTags() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/seo-tags');
}
function loadUsers() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-users');
}
function loadAdminContact() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/admin-contact');
}
function loadAllContact() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/all-contact');
}
function updateContact(id, data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post("/update-contact/".concat(id), data);
}
function updateGeneral(id, data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post("/update-general/".concat(id), data);
}
function deleteContact(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])()["delete"]("/delete-contact/".concat(id));
}
function updateSocialLinks(id, data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post("/update-social-links/".concat(id), data);
}
function updateSeoTags(id, data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post("/update-seo-tags/".concat(id), data);
}
function deleteUser(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])()["delete"]("/delete-user/".concat(id));
}

/***/ }),

/***/ "./resources/js/views/dashboard/SuperAdmin/Contact.vue":
/*!*************************************************************!*\
  !*** ./resources/js/views/dashboard/SuperAdmin/Contact.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Contact_vue_vue_type_template_id_3a4b277f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contact.vue?vue&type=template&id=3a4b277f& */ "./resources/js/views/dashboard/SuperAdmin/Contact.vue?vue&type=template&id=3a4b277f&");
/* harmony import */ var _Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Contact.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/SuperAdmin/Contact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Contact_vue_vue_type_template_id_3a4b277f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Contact_vue_vue_type_template_id_3a4b277f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/SuperAdmin/Contact.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/SuperAdmin/Contact.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/dashboard/SuperAdmin/Contact.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Contact.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/SuperAdmin/Contact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/SuperAdmin/Contact.vue?vue&type=template&id=3a4b277f&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/dashboard/SuperAdmin/Contact.vue?vue&type=template&id=3a4b277f& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_3a4b277f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Contact.vue?vue&type=template&id=3a4b277f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/SuperAdmin/Contact.vue?vue&type=template&id=3a4b277f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_3a4b277f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_3a4b277f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);