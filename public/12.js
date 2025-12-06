(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/SuperAdmin/Setting.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/SuperAdmin/Setting.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
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
  name: "setting",
  components: {},
  data: function data() {
    return {
      general: {},
      socialLink: {},
      seoTags: {}
    };
  },
  mounted: function mounted() {
    this.loadGeneral();
    this.loadSocialLinks();
    this.loadSeoTags();
  },
  methods: {
    loadGeneral: function () {
      var _loadGeneral = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _services_setting_service__WEBPACK_IMPORTED_MODULE_1__["loadGeneral"]();

              case 3:
                response = _context.sent;
                this.general = response.data;
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

      function loadGeneral() {
        return _loadGeneral.apply(this, arguments);
      }

      return loadGeneral;
    }(),
    loadSocialLinks: function () {
      var _loadSocialLinks = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _services_setting_service__WEBPACK_IMPORTED_MODULE_1__["loadSocialLinks"]();

              case 3:
                response = _context2.sent;
                this.socialLink = response.data;
                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                this.flashMessage.error({
                  message: 'Some error occured, please refresh!',
                  time: 5000
                });

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 7]]);
      }));

      function loadSocialLinks() {
        return _loadSocialLinks.apply(this, arguments);
      }

      return loadSocialLinks;
    }(),
    loadSeoTags: function () {
      var _loadSeoTags = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _services_setting_service__WEBPACK_IMPORTED_MODULE_1__["loadSeoTags"]();

              case 3:
                response = _context3.sent;
                this.seoTags = response.data;
                _context3.next = 10;
                break;

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);
                this.flashMessage.error({
                  message: 'Some error occured, please refresh!',
                  time: 5000
                });

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 7]]);
      }));

      function loadSeoTags() {
        return _loadSeoTags.apply(this, arguments);
      }

      return loadSeoTags;
    }(),
    updateGeneral: function () {
      var _updateGeneral = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                formData = new FormData();
                formData.append('favicon', this.general.favicon);
                formData.append('logo', this.general.logo);
                formData.append('address', this.general.address);
                formData.append('address2', this.general.address2);
                formData.append('city', this.general.city);
                formData.append('state', this.general.state);
                formData.append('zip', this.general.zip);
                _context4.next = 11;
                return _services_setting_service__WEBPACK_IMPORTED_MODULE_1__["updateGeneral"](this.general.id, formData);

              case 11:
                response = _context4.sent;
                this.general = response.data;
                this.flashMessage.success({
                  message: 'General has been updated successfully!',
                  time: 5000
                });
                _context4.next = 19;
                break;

              case 16:
                _context4.prev = 16;
                _context4.t0 = _context4["catch"](0);
                this.flashMessage.error({
                  message: 'Some error occured, please refresh!',
                  time: 5000
                });

              case 19:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 16]]);
      }));

      function updateGeneral() {
        return _updateGeneral.apply(this, arguments);
      }

      return updateGeneral;
    }(),
    updateSocialLinks: function () {
      var _updateSocialLinks = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _services_setting_service__WEBPACK_IMPORTED_MODULE_1__["updateSocialLinks"](this.socialLink.id, this.socialLink);

              case 3:
                response = _context5.sent;
                this.socialLink = response.data;
                this.flashMessage.success({
                  message: 'Social links has been updated successfully!',
                  time: 5000
                });
                _context5.next = 11;
                break;

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](0);
                this.flashMessage.error({
                  message: 'Some error occured, please refresh!',
                  time: 5000
                });

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 8]]);
      }));

      function updateSocialLinks() {
        return _updateSocialLinks.apply(this, arguments);
      }

      return updateSocialLinks;
    }(),
    updateSeoTags: function () {
      var _updateSeoTags = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return _services_setting_service__WEBPACK_IMPORTED_MODULE_1__["updateSeoTags"](this.seoTags.id, this.seoTags);

              case 3:
                response = _context6.sent;
                this.seoTags = response.data;
                this.flashMessage.success({
                  message: 'Seo Tags has been updated successfully!',
                  time: 5000
                });
                _context6.next = 11;
                break;

              case 8:
                _context6.prev = 8;
                _context6.t0 = _context6["catch"](0);
                this.flashMessage.error({
                  message: 'Some error occured, please refresh!',
                  time: 5000
                });

              case 11:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[0, 8]]);
      }));

      function updateSeoTags() {
        return _updateSeoTags.apply(this, arguments);
      }

      return updateSeoTags;
    }(),
    editAttachFavicon: function editAttachFavicon() {
      this.general.favicon = this.$refs.editFavicon.files[0];
      var reader = new FileReader();
      reader.addEventListener('load', function () {
        this.$refs.editFaviconDisplay.src = reader.result;
      }.bind(this), false);
      reader.readAsDataURL(this.general.favicon);
    },
    editAttachLogo: function editAttachLogo() {
      this.general.logo = this.$refs.editLogo.files[0];
      var reader = new FileReader();
      reader.addEventListener('load', function () {
        this.$refs.editLogoDisplay.src = reader.result;
      }.bind(this), false);
      reader.readAsDataURL(this.general.logo);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/SuperAdmin/Setting.vue?vue&type=template&id=309279af&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/SuperAdmin/Setting.vue?vue&type=template&id=309279af& ***!
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
  return _c("div", { staticClass: "container-fluid" }, [
    _c("h1", { staticClass: "h3 mb-4 text-gray-800" }, [_vm._v("Setting")]),
    _vm._v(" "),
    _c("div", { staticClass: "row  mt-md-5 container-fluid" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "col-12 col-md-10" }, [
        _c(
          "div",
          { staticClass: "tab-content", attrs: { id: "v-pills-tabContent" } },
          [
            _c(
              "div",
              {
                staticClass: "tab-pane fade active show",
                attrs: {
                  id: "v-pills-home",
                  role: "tabpanel",
                  "aria-labelledby": "v-pills-home-tab"
                }
              },
              [
                _c("div", { staticClass: "card" }, [
                  _c("div", { staticClass: "card-body" }, [
                    _c(
                      "form",
                      {
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.updateGeneral($event)
                          }
                        }
                      },
                      [
                        _c("div", { staticClass: "form-row" }, [
                          _c("div", { staticClass: "form-group col-md-6" }, [
                            _c(
                              "label",
                              { attrs: { for: "exampleFormControlFile1" } },
                              [_vm._v("Choose Favicon")]
                            ),
                            _vm._v(" "),
                            _c("img", {
                              ref: "editFaviconDisplay",
                              staticClass: "w-100",
                              attrs: {
                                src:
                                  _vm.$store.state.serverPath +
                                  "/storage/" +
                                  _vm.general.favicon,
                                alt: "favicon"
                              }
                            }),
                            _vm._v(" "),
                            _c("input", {
                              ref: "editFavicon",
                              staticClass: "form-control-file",
                              attrs: {
                                type: "file",
                                id: "exampleFormControlFile1"
                              },
                              on: { change: _vm.editAttachFavicon }
                            })
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group col-md-6" }, [
                            _c(
                              "label",
                              { attrs: { for: "exampleFormControlFile1" } },
                              [_vm._v("Choose logo")]
                            ),
                            _vm._v(" "),
                            _c("img", {
                              ref: "editLogoDisplay",
                              staticClass: "w-100",
                              attrs: {
                                src:
                                  _vm.$store.state.serverPath +
                                  "/storage/" +
                                  _vm.general.logo,
                                alt: "logo"
                              }
                            }),
                            _vm._v(" "),
                            _c("input", {
                              ref: "editLogo",
                              staticClass: "form-control-file",
                              attrs: {
                                type: "file",
                                id: "exampleFormControlFile1"
                              },
                              on: { change: _vm.editAttachLogo }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "inputAddress" } }, [
                            _vm._v("Address")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.general.address,
                                expression: "general.address"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              id: "inputAddress",
                              placeholder: "1234 Main St"
                            },
                            domProps: { value: _vm.general.address },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.general,
                                  "address",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "inputAddress2" } }, [
                            _vm._v("Address 2")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.general.address2,
                                expression: "general.address2"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              id: "inputAddress2",
                              placeholder: "Apartment, studio, or floor"
                            },
                            domProps: { value: _vm.general.address2 },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.general,
                                  "address2",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-row" }, [
                          _c("div", { staticClass: "form-group col-md-6" }, [
                            _c("label", { attrs: { for: "inputCity" } }, [
                              _vm._v("City")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.general.city,
                                  expression: "general.city"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "text", id: "inputCity" },
                              domProps: { value: _vm.general.city },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.general,
                                    "city",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group col-md-4" }, [
                            _c("label", { attrs: { for: "inputState" } }, [
                              _vm._v("State")
                            ]),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.general.state,
                                    expression: "general.state"
                                  }
                                ],
                                staticClass: "form-control",
                                on: {
                                  change: function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      _vm.general,
                                      "state",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              [
                                _c("option", { attrs: { selected: "" } }, [
                                  _vm._v(_vm._s(_vm.general.state))
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "punjab" } }, [
                                  _vm._v("punjab")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "sindh" } }, [
                                  _vm._v("sindh")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "kpk" } }, [
                                  _vm._v("kpk")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "option",
                                  { attrs: { value: "balochistan" } },
                                  [_vm._v("balochistan")]
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group col-md-2" }, [
                            _c("label", { attrs: { for: "inputZip" } }, [
                              _vm._v("Zip")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.general.zip,
                                  expression: "general.zip"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "text", id: "inputZip" },
                              domProps: { value: _vm.general.zip },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.general,
                                    "zip",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-primary",
                            attrs: { type: "submit" }
                          },
                          [_vm._v("Update")]
                        )
                      ]
                    )
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "tab-pane fade",
                attrs: {
                  id: "v-pills-profile",
                  role: "tabpanel",
                  "aria-labelledby": "v-pills-profile-tab"
                }
              },
              [
                _c("div", { staticClass: "card" }, [
                  _c("div", { staticClass: "card-body" }, [
                    _c(
                      "form",
                      {
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.updateSocialLinks($event)
                          }
                        }
                      },
                      [
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            { attrs: { for: "exampleInputEmail1" } },
                            [_vm._v("Facebook")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.socialLink.facebook,
                                expression: "socialLink.facebook"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              id: "exampleInputEmail1",
                              placeholder: ""
                            },
                            domProps: { value: _vm.socialLink.facebook },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.socialLink,
                                  "facebook",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            { attrs: { for: "exampleInputPassword1" } },
                            [_vm._v("Instagram")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.socialLink.instagram,
                                expression: "socialLink.instagram"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              id: "exampleInputPassword1",
                              placeholder: ""
                            },
                            domProps: { value: _vm.socialLink.instagram },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.socialLink,
                                  "instagram",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            { attrs: { for: "exampleInputPassword1" } },
                            [_vm._v("Twitter")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.socialLink.twitter,
                                expression: "socialLink.twitter"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              id: "exampleInputPassword1",
                              placeholder: ""
                            },
                            domProps: { value: _vm.socialLink.twitter },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.socialLink,
                                  "twitter",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-primary",
                            attrs: { type: "submit" }
                          },
                          [_vm._v("Update")]
                        )
                      ]
                    )
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "tab-pane fade",
                attrs: {
                  id: "v-pills-messages",
                  role: "tabpanel",
                  "aria-labelledby": "v-pills-messages-tab"
                }
              },
              [
                _c("div", { staticClass: "card" }, [
                  _c("div", { staticClass: "card-body" }, [
                    _c(
                      "form",
                      {
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.updateSeoTags($event)
                          }
                        }
                      },
                      [
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            { attrs: { for: "exampleInputEmail1" } },
                            [_vm._v("Title for main home page")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.seoTags.title,
                                expression: "seoTags.title"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              id: "exampleInputEmail1",
                              placeholder: ""
                            },
                            domProps: { value: _vm.seoTags.title },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.seoTags,
                                  "title",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            { attrs: { for: "exampleInputPassword1" } },
                            [_vm._v("Meta tags ")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.seoTags.meta_tags,
                                expression: "seoTags.meta_tags"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              id: "exampleInputPassword1",
                              placeholder: ""
                            },
                            domProps: { value: _vm.seoTags.meta_tags },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.seoTags,
                                  "meta_tags",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            { attrs: { for: "exampleInputPassword1" } },
                            [_vm._v("Meta description")]
                          ),
                          _vm._v(" "),
                          _c("textarea", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.seoTags.meta_description,
                                expression: "seoTags.meta_description"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              id: "exampleInputPassword1",
                              placeholder: "",
                              row: "8"
                            },
                            domProps: { value: _vm.seoTags.meta_description },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.seoTags,
                                  "meta_description",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-primary",
                            attrs: { type: "submit" }
                          },
                          [_vm._v("Update")]
                        )
                      ]
                    )
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "tab-pane fade",
                attrs: {
                  id: "v-pills-settings",
                  role: "tabpanel",
                  "aria-labelledby": "v-pills-settings-tab"
                }
              },
              [_vm._v("...")]
            )
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 col-md-2" }, [
      _c(
        "div",
        {
          staticClass: "nav flex-column nav-pills",
          attrs: {
            id: "v-pills-tab",
            role: "tablist",
            "aria-orientation": "vertical"
          }
        },
        [
          _c(
            "a",
            {
              staticClass: "nav-link active",
              attrs: {
                id: "v-pills-home-tab",
                "data-toggle": "pill",
                href: "#v-pills-home",
                role: "tab",
                "aria-controls": "v-pills-home",
                "aria-selected": "true"
              }
            },
            [_vm._v("General")]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "nav-link",
              attrs: {
                id: "v-pills-profile-tab",
                "data-toggle": "pill",
                href: "#v-pills-profile",
                role: "tab",
                "aria-controls": "v-pills-profile",
                "aria-selected": "false"
              }
            },
            [_vm._v("Social Links")]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "nav-link",
              attrs: {
                id: "v-pills-messages-tab",
                "data-toggle": "pill",
                href: "#v-pills-messages",
                role: "tab",
                "aria-controls": "v-pills-messages",
                "aria-selected": "false"
              }
            },
            [_vm._v("Seo Tags")]
          )
        ]
      )
    ])
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

/***/ "./resources/js/views/dashboard/SuperAdmin/Setting.vue":
/*!*************************************************************!*\
  !*** ./resources/js/views/dashboard/SuperAdmin/Setting.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Setting_vue_vue_type_template_id_309279af___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Setting.vue?vue&type=template&id=309279af& */ "./resources/js/views/dashboard/SuperAdmin/Setting.vue?vue&type=template&id=309279af&");
/* harmony import */ var _Setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Setting.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/SuperAdmin/Setting.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Setting_vue_vue_type_template_id_309279af___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Setting_vue_vue_type_template_id_309279af___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/SuperAdmin/Setting.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/SuperAdmin/Setting.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/dashboard/SuperAdmin/Setting.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Setting.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/SuperAdmin/Setting.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/SuperAdmin/Setting.vue?vue&type=template&id=309279af&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/dashboard/SuperAdmin/Setting.vue?vue&type=template&id=309279af& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Setting_vue_vue_type_template_id_309279af___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Setting.vue?vue&type=template&id=309279af& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/SuperAdmin/Setting.vue?vue&type=template&id=309279af&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Setting_vue_vue_type_template_id_309279af___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Setting_vue_vue_type_template_id_309279af___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);