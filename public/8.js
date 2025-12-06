(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/SuperAdmin/Earth.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/SuperAdmin/Earth.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_planet_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/planet_service */ "./resources/js/services/planet_service.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Mars",
  components: {},
  data: function data() {
    return {
      slider: {
        name: '',
        description: '',
        order: '',
        planet: 'earth'
      },
      fakten: {
        name: '',
        description: '',
        order: '',
        planet: 'earth'
      },
      seo: {
        title: '',
        meta_tags: '',
        description: '',
        planet: 'earth'
      },
      heading: {
        title: '',
        file: '',
        description: '',
        planet: 'earth'
      },
      sliders: [],
      faktens: [],
      mars: [],
      headings: [],
      seos: [],
      editHeadingData: {},
      errors: {}
    };
  },
  beforeRouteEnter: function () {
    var _beforeRouteEnter = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(to, from, next) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _services_planet_service__WEBPACK_IMPORTED_MODULE_1__["loadSlider"](to.params.name);

            case 3:
              response = _context.sent;

              if (!response) {
                next('/404');
              } else {
                next(function (vm) {
                  vm.earth = response.data;
                  console.log(vm.earth);
                });
              }

              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              next('/404');

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    function beforeRouteEnter(_x, _x2, _x3) {
      return _beforeRouteEnter.apply(this, arguments);
    }

    return beforeRouteEnter;
  }(),
  mounted: function mounted() {
    this.loadSlider();
    this.loadFakten();
    this.loadHeading();
    this.loadSeo();
  },
  methods: {
    loadSeo: function () {
      var _loadSeo = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _services_planet_service__WEBPACK_IMPORTED_MODULE_1__["loadSeo"]();

              case 3:
                response = _context2.sent;
                this.seo = response.data;
                console.log(this.seo);
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

      function loadSeo() {
        return _loadSeo.apply(this, arguments);
      }

      return loadSeo;
    }(),
    updateSeo: function () {
      var _updateSeo = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _services_planet_service__WEBPACK_IMPORTED_MODULE_1__["updateSeo"](this.seo.id, this.seo);

              case 3:
                response = _context3.sent;
                this.seo = response.data;
                this.hideSeoWindow();
                this.flashMessage.success({
                  message: 'Seo has been updated successfully!',
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

      function updateSeo() {
        return _updateSeo.apply(this, arguments);
      }

      return updateSeo;
    }(),
    loadHeading: function () {
      var _loadHeading = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _services_planet_service__WEBPACK_IMPORTED_MODULE_1__["loadHeading"]();

              case 3:
                response = _context4.sent;
                this.headings = response.data;
                _context4.next = 10;
                break;

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](0);
                this.flashMessage.error({
                  message: 'Some error occured, please refresh!',
                  time: 5000
                });

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 7]]);
      }));

      function loadHeading() {
        return _loadHeading.apply(this, arguments);
      }

      return loadHeading;
    }(),
    createHeading: function () {
      var _createHeading = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                formData = new FormData();
                formData.append('title', this.heading.title);
                formData.append('file', this.heading.file);
                formData.append('description', this.heading.description);
                formData.append('planet', this.heading.planet);
                _context5.next = 8;
                return _services_planet_service__WEBPACK_IMPORTED_MODULE_1__["createHeading"](formData);

              case 8:
                response = _context5.sent;
                this.headings.unshift(response.data);
                this.errors = {};
                this.heading = {
                  title: '',
                  description: '',
                  file: ''
                };
                this.hideNewWindow();
                this.flashMessage.success({
                  message: 'Heading is created successfully!',
                  time: 5000
                });
                _context5.next = 19;
                break;

              case 16:
                _context5.prev = 16;
                _context5.t0 = _context5["catch"](0);
                this.flashMessage.error({
                  message: 'Some error occured, please refresh!',
                  time: 5000
                });

              case 19:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 16]]);
      }));

      function createHeading() {
        return _createHeading.apply(this, arguments);
      }

      return createHeading;
    }(),
    attachImage: function attachImage() {
      this.heading.file = this.$refs.heading_file.files[0];
      var reader = new FileReader();
      reader.addEventListener('load', function () {
        this.$refs.displayFile.src = reader.result;
      }.bind(this), false);
      reader.readAsDataURL(this.heading.file);
    },
    editHeading: function () {
      var _editHeading = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(heading) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                this.editHeadingData = _objectSpread({}, heading);
                this.$refs.editNewWindow.show();

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function editHeading(_x4) {
        return _editHeading.apply(this, arguments);
      }

      return editHeading;
    }(),
    editAttachFile: function editAttachFile() {
      this.editHeadingData.file = this.$refs.heading_file.files[0];
      var reader = new FileReader();
      reader.addEventListener('load', function () {
        this.$refs.editHeadingFile.src = reader.result;
      }.bind(this), false);
      reader.readAsDataURL(this.editHeadingData.file);
    },
    updateHeading: function () {
      var _updateHeading = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                formData = new FormData();
                formData.append('title', this.editHeadingData.title);
                formData.append('file', this.editHeadingData.file);
                formData.append('description', this.editHeadingData.description);
                formData.append('planet', 'earth');
                formData.append('_method', 'put');
                _context7.prev = 6;
                _context7.next = 9;
                return _services_planet_service__WEBPACK_IMPORTED_MODULE_1__["updateHeading"](this.editHeadingData.id, formData);

              case 9:
                response = _context7.sent;
                this.$refs.editNewWindow.hide();
                this.headings.map(function (heading) {
                  if (heading.id == response.data.id) {
                    for (var key in response.data) {
                      heading[key] = response.data[key];
                    }
                  }
                });
                this.flashMessage.success({
                  message: 'Heading has been updated successfully!',
                  time: 5000
                });
                _context7.next = 26;
                break;

              case 15:
                _context7.prev = 15;
                _context7.t0 = _context7["catch"](6);
                _context7.t1 = _context7.t0.response.status;
                _context7.next = _context7.t1 === 422 ? 20 : _context7.t1 === 401 ? 22 : 24;
                break;

              case 20:
                this.errors = _context7.t0.response.data.errors;
                return _context7.abrupt("break", 26);

              case 22:
                this.flashMessage.info({
                  message: _context7.t0.response.data.message,
                  time: 5000
                });
                return _context7.abrupt("break", 26);

              case 24:
                this.flashMessage.error({
                  message: "Some error occurred please try again",
                  time: 5000
                });
                return _context7.abrupt("break", 26);

              case 26:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[6, 15]]);
      }));

      function updateHeading() {
        return _updateHeading.apply(this, arguments);
      }

      return updateHeading;
    }(),
    deleteHeading: function () {
      var _deleteHeading = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(heading) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                if (window.confirm("Are you sure you want to delete ".concat(heading.title))) {
                  _context8.next = 2;
                  break;
                }

                return _context8.abrupt("return");

              case 2:
                _context8.prev = 2;
                _context8.next = 5;
                return _services_planet_service__WEBPACK_IMPORTED_MODULE_1__["deleteHeading"](heading.id);

              case 5:
                response = _context8.sent;
                this.headings = this.headings.filter(function (obj) {
                  return obj.id != heading.id;
                });
                this.flashMessage.success({
                  message: "Heading deleted successfuly!",
                  time: 5000
                });
                _context8.next = 13;
                break;

              case 10:
                _context8.prev = 10;
                _context8.t0 = _context8["catch"](2);
                this.flashMessage.error({
                  message: "Some error occurred please try again!",
                  time: 5000
                });

              case 13:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[2, 10]]);
      }));

      function deleteHeading(_x5) {
        return _deleteHeading.apply(this, arguments);
      }

      return deleteHeading;
    }(),
    loadSlider: function () {
      var _loadSlider = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.prev = 0;
                _context9.next = 3;
                return _services_planet_service__WEBPACK_IMPORTED_MODULE_1__["loadSlider"]();

              case 3:
                response = _context9.sent;
                this.sliders = response.data;
                _context9.next = 10;
                break;

              case 7:
                _context9.prev = 7;
                _context9.t0 = _context9["catch"](0);
                this.flashMessage.error({
                  message: 'Some error occured, please refresh!',
                  time: 5000
                });

              case 10:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this, [[0, 7]]);
      }));

      function loadSlider() {
        return _loadSlider.apply(this, arguments);
      }

      return loadSlider;
    }(),
    createSlider: function () {
      var _createSlider = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.prev = 0;
                _context10.next = 3;
                return _services_planet_service__WEBPACK_IMPORTED_MODULE_1__["createSlider"](this.slider);

              case 3:
                response = _context10.sent;
                this.sliders.unshift(response.data);
                this.errors = {};
                this.slider = {
                  name: '',
                  description: '',
                  order: ''
                };
                this.hideSliderWindow();
                this.flashMessage.success({
                  message: 'Slider is created successfully!',
                  time: 5000
                });
                _context10.next = 14;
                break;

              case 11:
                _context10.prev = 11;
                _context10.t0 = _context10["catch"](0);
                this.flashMessage.error({
                  message: 'Some error occured, please refresh!',
                  time: 5000
                });

              case 14:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this, [[0, 11]]);
      }));

      function createSlider() {
        return _createSlider.apply(this, arguments);
      }

      return createSlider;
    }(),
    updateSlider: function () {
      var _updateSlider = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.prev = 0;
                _context11.next = 3;
                return _services_planet_service__WEBPACK_IMPORTED_MODULE_1__["updateSlider"](this.slider.id, this.slider);

              case 3:
                response = _context11.sent;
                this.sliders.map(function (slider) {
                  if (slider.id == response.data.id) {
                    for (var key in response.data) {
                      slider[key] = response.data[key];
                    }
                  }
                });
                this.slider = {
                  name: '',
                  description: '',
                  order: ''
                };
                this.flashMessage.success({
                  message: 'Slider is updated successfully..!',
                  time: 5000
                });
                _context11.next = 12;
                break;

              case 9:
                _context11.prev = 9;
                _context11.t0 = _context11["catch"](0);
                this.flashMessage.error({
                  message: 'Some error occured, please try again!',
                  time: 5000
                });

              case 12:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this, [[0, 9]]);
      }));

      function updateSlider() {
        return _updateSlider.apply(this, arguments);
      }

      return updateSlider;
    }(),
    deleteSlider: function () {
      var _deleteSlider = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12(slider) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                if (window.confirm("Are you sure you want to delete ".concat(slider.name))) {
                  _context12.next = 2;
                  break;
                }

                return _context12.abrupt("return");

              case 2:
                _context12.prev = 2;
                _context12.next = 5;
                return _services_planet_service__WEBPACK_IMPORTED_MODULE_1__["deleteSlider"](slider.id);

              case 5:
                response = _context12.sent;
                this.sliders = this.sliders.filter(function (obj) {
                  return obj.id != slider.id;
                });
                this.flashMessage.success({
                  message: "Slider deleted successfuly!",
                  time: 5000
                });
                _context12.next = 13;
                break;

              case 10:
                _context12.prev = 10;
                _context12.t0 = _context12["catch"](2);
                this.flashMessage.error({
                  message: "Some error occurred please try again!",
                  time: 5000
                });

              case 13:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this, [[2, 10]]);
      }));

      function deleteSlider(_x6) {
        return _deleteSlider.apply(this, arguments);
      }

      return deleteSlider;
    }(),
    editSlider: function () {
      var _editSlider = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee13(slider) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                this.slider = _objectSpread({}, slider);

              case 1:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function editSlider(_x7) {
        return _editSlider.apply(this, arguments);
      }

      return editSlider;
    }(),
    loadFakten: function () {
      var _loadFakten = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee14() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.prev = 0;
                _context14.next = 3;
                return _services_planet_service__WEBPACK_IMPORTED_MODULE_1__["loadFakten"]();

              case 3:
                response = _context14.sent;
                this.faktens = response.data;
                _context14.next = 10;
                break;

              case 7:
                _context14.prev = 7;
                _context14.t0 = _context14["catch"](0);
                this.flashMessage.error({
                  message: 'Some error occured, please refresh!',
                  time: 5000
                });

              case 10:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this, [[0, 7]]);
      }));

      function loadFakten() {
        return _loadFakten.apply(this, arguments);
      }

      return loadFakten;
    }(),
    createFakten: function () {
      var _createFakten = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee15() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.prev = 0;
                _context15.next = 3;
                return _services_planet_service__WEBPACK_IMPORTED_MODULE_1__["createFakten"](this.fakten);

              case 3:
                response = _context15.sent;
                this.faktens.unshift(response.data);
                this.errors = {};
                this.fakten = {
                  name: '',
                  description: '',
                  order: ''
                };
                this.hideFakterWindow();
                this.flashMessage.success({
                  message: 'Fakten is created successfully!',
                  time: 5000
                });
                _context15.next = 14;
                break;

              case 11:
                _context15.prev = 11;
                _context15.t0 = _context15["catch"](0);
                this.flashMessage.error({
                  message: 'Some error occured, please refresh!',
                  time: 5000
                });

              case 14:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this, [[0, 11]]);
      }));

      function createFakten() {
        return _createFakten.apply(this, arguments);
      }

      return createFakten;
    }(),
    updateFakten: function () {
      var _updateFakten = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee16() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _context16.prev = 0;
                _context16.next = 3;
                return _services_planet_service__WEBPACK_IMPORTED_MODULE_1__["updateFakten"](this.fakten.id, this.fakten);

              case 3:
                response = _context16.sent;
                this.faktens.map(function (fakten) {
                  if (fakten.id == response.data.id) {
                    for (var key in response.data) {
                      fakten[key] = response.data[key];
                    }
                  }
                });
                this.fakten = {
                  name: '',
                  description: '',
                  order: ''
                };
                this.flashMessage.success({
                  message: 'Fakten is updated successfully..!',
                  time: 5000
                });
                _context16.next = 12;
                break;

              case 9:
                _context16.prev = 9;
                _context16.t0 = _context16["catch"](0);
                this.flashMessage.error({
                  message: 'Some error occured, please try again!',
                  time: 5000
                });

              case 12:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this, [[0, 9]]);
      }));

      function updateFakten() {
        return _updateFakten.apply(this, arguments);
      }

      return updateFakten;
    }(),
    deleteFakten: function () {
      var _deleteFakten = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee17(fakten) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                if (window.confirm("Are you sure you want to delete ".concat(fakten.name))) {
                  _context17.next = 2;
                  break;
                }

                return _context17.abrupt("return");

              case 2:
                _context17.prev = 2;
                _context17.next = 5;
                return _services_planet_service__WEBPACK_IMPORTED_MODULE_1__["deleteFakten"](fakten.id);

              case 5:
                response = _context17.sent;
                this.faktens = this.faktens.filter(function (obj) {
                  return obj.id != fakten.id;
                });
                this.flashMessage.success({
                  message: "Fakten deleted successfuly!",
                  time: 5000
                });
                _context17.next = 13;
                break;

              case 10:
                _context17.prev = 10;
                _context17.t0 = _context17["catch"](2);
                this.flashMessage.error({
                  message: "Some error occurred please try again!",
                  time: 5000
                });

              case 13:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this, [[2, 10]]);
      }));

      function deleteFakten(_x8) {
        return _deleteFakten.apply(this, arguments);
      }

      return deleteFakten;
    }(),
    editFakten: function () {
      var _editFakten = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee18(fakten) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                this.fakten = _objectSpread({}, fakten);

              case 1:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      function editFakten(_x9) {
        return _editFakten.apply(this, arguments);
      }

      return editFakten;
    }(),
    createSeo: function () {
      var _createSeo = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee19() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                _context19.prev = 0;
                this.seo.planet = 'earth';
                _context19.next = 4;
                return _services_planet_service__WEBPACK_IMPORTED_MODULE_1__["createSeo"](this.seo);

              case 4:
                response = _context19.sent;
                this.loadSeo();
                this.errors = {};
                this.seo = {
                  title: '',
                  description: '',
                  meta_tags: ''
                };
                this.hideSeoWindow();
                this.flashMessage.success({
                  message: 'Seo is created successfully!',
                  time: 5000
                });
                _context19.next = 15;
                break;

              case 12:
                _context19.prev = 12;
                _context19.t0 = _context19["catch"](0);
                this.flashMessage.error({
                  message: 'Some error occured, please refresh!',
                  time: 5000
                });

              case 15:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this, [[0, 12]]);
      }));

      function createSeo() {
        return _createSeo.apply(this, arguments);
      }

      return createSeo;
    }(),
    showSliderWindow: function showSliderWindow() {
      this.$refs.sliderWindow.show();
    },
    hideSliderWindow: function hideSliderWindow() {
      this.$refs.sliderWindow.hide();
    },
    showFaktenWindow: function showFaktenWindow() {
      this.$refs.faktenWindow.show();
    },
    hideFakterWindow: function hideFakterWindow() {
      this.$refs.faktenWindow.hide();
    },
    showSeoWindow: function showSeoWindow() {
      this.$refs.seoWindow.show();
    },
    hideSeoWindow: function hideSeoWindow() {
      this.$refs.seoWindow.hide();
    },
    showNewWindow: function showNewWindow() {
      this.$refs.newWindow.show();
    },
    hideNewWindow: function hideNewWindow() {
      this.$refs.newWindow.hide();
    },
    hideEditNewWindow: function hideEditNewWindow() {
      this.$refs.editNewWindow.hide();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/SuperAdmin/Earth.vue?vue&type=template&id=10e67c69&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/SuperAdmin/Earth.vue?vue&type=template&id=10e67c69& ***!
  \************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-xl-3 col-md-6 mb-4" }, [
          _c(
            "div",
            { staticClass: "card border-left-primary shadow h-100 py-2" },
            [
              _c("div", { staticClass: "card-body" }, [
                _c(
                  "div",
                  { staticClass: "row no-gutters align-items-center" },
                  [
                    _vm._m(1),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-auto" }, [
                      _c(
                        "a",
                        {
                          staticClass: "btn btn-info btn-icon-split",
                          on: { click: _vm.showSliderWindow }
                        },
                        [_vm._m(2)]
                      )
                    ])
                  ]
                )
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xl-3 col-md-6 mb-4" }, [
          _c(
            "div",
            { staticClass: "card border-left-danger shadow h-100 py-2" },
            [
              _c("div", { staticClass: "card-body" }, [
                _c(
                  "div",
                  { staticClass: "row no-gutters align-items-center" },
                  [
                    _vm._m(3),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-auto" }, [
                      _c(
                        "a",
                        {
                          staticClass: "btn btn-info btn-icon-split",
                          on: { click: _vm.showFaktenWindow }
                        },
                        [_vm._m(4)]
                      )
                    ])
                  ]
                )
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xl-3 col-md-6 mb-4" }, [
          _c(
            "div",
            { staticClass: "card border-left-danger shadow h-100 py-2" },
            [
              _c("div", { staticClass: "card-body" }, [
                _c(
                  "div",
                  { staticClass: "row no-gutters align-items-center" },
                  [
                    _vm._m(5),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-auto" }, [
                      _c(
                        "a",
                        {
                          staticClass: "btn btn-info btn-icon-split",
                          on: { click: _vm.showSeoWindow }
                        },
                        [_vm._m(6)]
                      )
                    ])
                  ]
                )
              ])
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "d-sm-flex align-items-center justify-content-between mb-4"
        },
        [
          _c("h1", { staticClass: "h3 mb-0 text-gray-800" }, [
            _vm._v("Überschrift")
          ]),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass:
                "d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm",
              on: { click: _vm.showNewWindow }
            },
            [
              _c("i", {
                staticClass: "fas fa-plus-circle fa-sm text-white-50"
              }),
              _vm._v(" Add new Überschrift")
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "card shadow mb-4" }, [
        _vm._m(7),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c("div", { staticClass: "table-responsive" }, [
            _c("table", { staticClass: "table" }, [
              _vm._m(8),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.headings, function(heading, index) {
                  return _c("tr", { key: index }, [
                    _c("th", { attrs: { scope: "row" } }, [
                      _vm._v(_vm._s(index + 1))
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(heading.title))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(heading.description))]),
                    _vm._v(" "),
                    _c("td", [
                      _c(
                        "a",
                        {
                          staticClass: "btn btn-info btn-circle",
                          on: {
                            click: function($event) {
                              return _vm.editHeading(heading)
                            }
                          }
                        },
                        [_c("i", { staticClass: "fas fa-edit" })]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "btn btn-danger btn-circle",
                          on: {
                            click: function($event) {
                              return _vm.deleteHeading(heading)
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
      _c(
        "b-modal",
        {
          ref: "sliderWindow",
          attrs: {
            size: "lg",
            "hide-footer": "",
            title: "Slider Kurzinfo Planet"
          }
        },
        [
          _c("div", { staticClass: "modal-body" }, [
            _c("form", [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.slider.name,
                        expression: "slider.name"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", placeholder: "Name" },
                    domProps: { value: _vm.slider.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.slider, "name", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors.name
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(_vm._s(_vm.errors.name[0]))
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.slider.description,
                        expression: "slider.description"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", placeholder: "Description" },
                    domProps: { value: _vm.slider.description },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.slider, "description", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors.description
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(_vm._s(_vm.errors.description[0]))
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.slider.order,
                        expression: "slider.order"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "number", placeholder: "Choose order..." },
                    domProps: { value: _vm.slider.order },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.slider, "order", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors.order
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(_vm._s(_vm.errors.order[0]))
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-success mb-2",
                      attrs: { type: "submit" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.createSlider($event)
                        }
                      }
                    },
                    [
                      _c("i", { staticClass: "fas fa-plus-square" }),
                      _vm._v(" Add")
                    ]
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("table", { staticClass: "table" }, [
              _c("thead", [
                _c("tr", [
                  _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
                  _vm._v(" "),
                  _c("th", { attrs: { scope: "col" } }, [_vm._v("Name")]),
                  _vm._v(" "),
                  _c("th", { attrs: { scope: "col" } }, [
                    _vm._v("Description")
                  ]),
                  _vm._v(" "),
                  _c("th", { attrs: { scope: "col" } }, [_vm._v("Action")])
                ])
              ]),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.sliders, function(slider, index) {
                  return _c("tr", { key: index }, [
                    _c("th", { attrs: { scope: "row" } }, [
                      _vm._v(_vm._s(index + 1))
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(slider.name))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(slider.description))]),
                    _vm._v(" "),
                    _c("td", [
                      _c(
                        "a",
                        {
                          staticClass: "btn btn-info btn-circle",
                          on: {
                            click: function($event) {
                              return _vm.editSlider(slider)
                            }
                          }
                        },
                        [_c("i", { staticClass: "fas fa-edit" })]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "btn btn-danger btn-circle",
                          on: {
                            click: function($event) {
                              return _vm.deleteSlider(slider)
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
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "modal-footer" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-secondary",
                attrs: { type: "button" },
                on: { click: _vm.hideSliderWindow }
              },
              [_vm._v("Close")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-primary",
                attrs: { type: "submit" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.updateSlider($event)
                  }
                }
              },
              [_vm._v("Update changes")]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "faktenWindow",
          attrs: { "hide-footer": "", title: "Fakten Window..." }
        },
        [
          _c("form", [
            _c("div", { staticClass: "modal-body" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.fakten.name,
                        expression: "fakten.name"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", placeholder: "Name" },
                    domProps: { value: _vm.fakten.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.fakten, "name", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.fakten.description,
                        expression: "fakten.description"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", placeholder: "Description" },
                    domProps: { value: _vm.fakten.description },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.fakten, "description", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.fakten.order,
                        expression: "fakten.order"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "number", placeholder: "Choose order" },
                    domProps: { value: _vm.fakten.order },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.fakten, "order", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-success mb-2",
                      attrs: { type: "submit" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.createFakten($event)
                        }
                      }
                    },
                    [
                      _c("i", { staticClass: "fas fa-plus-square" }),
                      _vm._v(" Add")
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("table", { staticClass: "table" }, [
                _c("thead", [
                  _c("tr", [
                    _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
                    _vm._v(" "),
                    _c("th", { attrs: { scope: "col" } }, [_vm._v("Name")]),
                    _vm._v(" "),
                    _c("th", { attrs: { scope: "col" } }, [
                      _vm._v("Description")
                    ]),
                    _vm._v(" "),
                    _c("th", { attrs: { scope: "col" } }, [_vm._v("Action")])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.faktens, function(fakten, index) {
                    return _c("tr", { key: index }, [
                      _c("th", { attrs: { scope: "row" } }, [
                        _vm._v(_vm._s(index + 1))
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(fakten.name))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(fakten.description))]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "a",
                          {
                            staticClass: "btn btn-info btn-circle",
                            on: {
                              click: function($event) {
                                return _vm.editFakten(fakten)
                              }
                            }
                          },
                          [_c("i", { staticClass: "fas fa-edit" })]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "btn btn-danger btn-circle",
                            on: {
                              click: function($event) {
                                return _vm.deleteFakten(fakten)
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
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-secondary",
                  attrs: { type: "button" },
                  on: { click: _vm.hideFakterWindow }
                },
                [_vm._v("Close")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  attrs: { type: "submit" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.updateFakten($event)
                    }
                  }
                },
                [_vm._v("Update changes")]
              )
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "newWindow",
          attrs: { "hide-footer": "", title: "Uberschrift..." }
        },
        [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.createHeading($event)
                }
              }
            },
            [
              _c("div", { staticClass: "modal-body" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [_vm._v("Title")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.heading.title,
                        expression: "heading.title"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      "aria-describedby": "emailHelp",
                      placeholder: "Enter Title"
                    },
                    domProps: { value: _vm.heading.title },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.heading, "title", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "marsFile" } }, [
                    _vm._v("Video | Image")
                  ]),
                  _vm._v(" "),
                  _vm.heading.file.name
                    ? _c("div", [
                        _c("img", {
                          ref: "displayFile",
                          staticClass: "w-100",
                          attrs: { src: "", id: "displayFile" }
                        })
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("img", {
                    ref: "",
                    staticClass: "w-100",
                    attrs: { src: "", id: "" }
                  }),
                  _vm._v(" "),
                  _c("input", {
                    ref: "heading_file",
                    staticClass: "form-control-file",
                    attrs: { type: "file", id: "file" },
                    on: { change: _vm.attachImage }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    { attrs: { for: "exampleFormControlTextarea1" } },
                    [_vm._v("Description")]
                  ),
                  _vm._v(" "),
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.heading.description,
                        expression: "heading.description"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { id: "exampleFormControlTextarea1", rows: "6" },
                    domProps: { value: _vm.heading.description },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.heading,
                          "description",
                          $event.target.value
                        )
                      }
                    }
                  })
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
                    attrs: { type: "button" },
                    on: { click: _vm.hideNewWindow }
                  },
                  [_vm._v("Close")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  { staticClass: "btn btn-primary", attrs: { type: "submit" } },
                  [_vm._v("Add Überschrift")]
                )
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "editNewWindow",
          attrs: { "hide-footer": "", title: "Edit Uberschrift..." }
        },
        [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.updateHeading($event)
                }
              }
            },
            [
              _c("div", { staticClass: "modal-body" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [_vm._v("Title")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.editHeadingData.title,
                        expression: "editHeadingData.title"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      "aria-describedby": "emailHelp",
                      placeholder: "Enter Title"
                    },
                    domProps: { value: _vm.editHeadingData.title },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.editHeadingData,
                          "title",
                          $event.target.value
                        )
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "marsFile" } }, [
                    _vm._v("Video | Image")
                  ]),
                  _vm._v(" "),
                  _c("div", [
                    _c("img", {
                      ref: "editHeadingFile",
                      staticStyle: { width: "100%" },
                      attrs: {
                        src:
                          _vm.$store.state.serverPath +
                          "/storage/" +
                          _vm.editHeadingData.file,
                        id: "heading_file"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    ref: "heading_file",
                    staticClass: "form-control-file",
                    attrs: { id: "image", type: "file" },
                    on: { change: _vm.editAttachFile }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    { attrs: { for: "exampleFormControlTextarea1" } },
                    [_vm._v("Description")]
                  ),
                  _vm._v(" "),
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.editHeadingData.description,
                        expression: "editHeadingData.description"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { id: "exampleFormControlTextarea1", rows: "6" },
                    domProps: { value: _vm.editHeadingData.description },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.editHeadingData,
                          "description",
                          $event.target.value
                        )
                      }
                    }
                  })
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
                    attrs: { type: "button" },
                    on: { click: _vm.hideEditNewWindow }
                  },
                  [_vm._v("Close")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  { staticClass: "btn btn-primary", attrs: { type: "submit" } },
                  [_vm._v("Update Überschrift")]
                )
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "seoWindow",
          attrs: { "hide-footer": "", title: "Seo Window...." }
        },
        [
          _c("form", [
            _c("div", { staticClass: "modal-body" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                  _vm._v("Slug title")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.seo.title,
                      expression: "seo.title"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    id: "exampleInputEmail1",
                    "aria-describedby": "emailHelp",
                    placeholder: "Enter Title"
                  },
                  domProps: { value: _vm.seo.title },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.seo, "title", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.errors.title
                  ? _c("div", { staticClass: "invalid-feedback" }, [
                      _vm._v(_vm._s(_vm.errors.title[0]))
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "exampleFormControlFile1" } }, [
                  _vm._v("metatags ( e.g sport,football,hockey)")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.seo.meta_tags,
                      expression: "seo.meta_tags"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    id: "exampleInputEmail1",
                    "aria-describedby": "emailHelp",
                    placeholder: "Enter Title"
                  },
                  domProps: { value: _vm.seo.meta_tags },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.seo, "meta_tags", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.errors.meta_tags
                  ? _c("div", { staticClass: "invalid-feedback" }, [
                      _vm._v(_vm._s(_vm.errors.meta_tags[0]))
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "exampleFormControlTextarea1" } }, [
                  _vm._v("Short Description")
                ]),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.seo.description,
                      expression: "seo.description"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { id: "exampleFormControlTextarea1", rows: "6" },
                  domProps: { value: _vm.seo.description },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.seo, "description", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.errors.description
                  ? _c("div", { staticClass: "invalid-feedback" }, [
                      _vm._v(_vm._s(_vm.errors.description[0]))
                    ])
                  : _vm._e()
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
                  attrs: { type: "button" },
                  on: { click: _vm.hideSeoWindow }
                },
                [_vm._v("Close")]
              ),
              _vm._v(" "),
              _vm.seo.created_at
                ? _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "submit" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.updateSeo($event)
                        }
                      }
                    },
                    [_vm._v("Update Überschrift")]
                  )
                : _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "submit" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.createSeo($event)
                        }
                      }
                    },
                    [_vm._v("Add Überschrift")]
                  )
            ])
          ])
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
      [_c("h1", { staticClass: "h3 mb-0 text-gray-800" }, [_vm._v("Earth")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col mr-2" }, [
      _c("p", { staticClass: " mb-1" }, [_vm._v("Slider Kurzinfo Planet")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon text-white-50" }, [
      _c("i", { staticClass: "fas fa-edit" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col mr-2" }, [
      _c("p", { staticClass: " mb-1" }, [_vm._v("Fakten")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon text-white-50" }, [
      _c("i", { staticClass: "fas fa-edit" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col mr-2" }, [
      _c("p", { staticClass: " mb-1" }, [_vm._v("SEO")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon text-white-50" }, [
      _c("i", { staticClass: "fas fa-edit" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header py-3" }, [
      _c("h6", { staticClass: "m-0 font-weight-bold text-primary" }, [
        _vm._v("list of Überschrift")
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
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Title")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Description")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Action")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/services/planet_service.js":
/*!*************************************************!*\
  !*** ./resources/js/services/planet_service.js ***!
  \*************************************************/
/*! exports provided: loadSlider, getPlanet, createSlider, deleteSlider, updateSlider, loadSeo, createSeo, deleteSeo, updateSeo, loadFakten, createFakten, deleteFakten, updateFakten, loadHeading, createHeading, deleteHeading, updateHeading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadSlider", function() { return loadSlider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlanet", function() { return getPlanet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSlider", function() { return createSlider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteSlider", function() { return deleteSlider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSlider", function() { return updateSlider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadSeo", function() { return loadSeo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSeo", function() { return createSeo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteSeo", function() { return deleteSeo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSeo", function() { return updateSeo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadFakten", function() { return loadFakten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFakten", function() { return createFakten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteFakten", function() { return deleteFakten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateFakten", function() { return updateFakten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadHeading", function() { return loadHeading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHeading", function() { return createHeading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteHeading", function() { return deleteHeading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateHeading", function() { return updateHeading; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");

function loadSlider() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('sliders');
}
function getPlanet(name) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("all-planet/".concat(name));
}
function createSlider(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/sliders', data);
}
function deleteSlider(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])()["delete"]("sliders/".concat(id));
}
function updateSlider(id, data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().put("sliders/".concat(id), data);
} /////////// end of slider ///////////////

function loadSeo() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('seos');
}
function createSeo(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/seos', data);
}
function deleteSeo(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])()["delete"]("seos/".concat(id));
}
function updateSeo(id, data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().put("seos/".concat(id), data);
} /////// end of seo  /////////

function loadFakten() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('faktens');
}
function createFakten(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/faktens', data);
}
function deleteFakten(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])()["delete"]("faktens/".concat(id));
}
function updateFakten(id, data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().put("faktens/".concat(id), data);
} ///////// end of fakten ///////
//////  start of Headings ////////

function loadHeading() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('headings');
}
function createHeading(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/headings', data);
}
function deleteHeading(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])()["delete"]("headings/".concat(id));
}
function updateHeading(id, data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post("headings/".concat(id), data);
}

/***/ }),

/***/ "./resources/js/views/dashboard/SuperAdmin/Earth.vue":
/*!***********************************************************!*\
  !*** ./resources/js/views/dashboard/SuperAdmin/Earth.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Earth_vue_vue_type_template_id_10e67c69___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Earth.vue?vue&type=template&id=10e67c69& */ "./resources/js/views/dashboard/SuperAdmin/Earth.vue?vue&type=template&id=10e67c69&");
/* harmony import */ var _Earth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Earth.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/SuperAdmin/Earth.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Earth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Earth_vue_vue_type_template_id_10e67c69___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Earth_vue_vue_type_template_id_10e67c69___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/SuperAdmin/Earth.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/SuperAdmin/Earth.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/dashboard/SuperAdmin/Earth.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Earth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Earth.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/SuperAdmin/Earth.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Earth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/SuperAdmin/Earth.vue?vue&type=template&id=10e67c69&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/dashboard/SuperAdmin/Earth.vue?vue&type=template&id=10e67c69& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Earth_vue_vue_type_template_id_10e67c69___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Earth.vue?vue&type=template&id=10e67c69& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/SuperAdmin/Earth.vue?vue&type=template&id=10e67c69&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Earth_vue_vue_type_template_id_10e67c69___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Earth_vue_vue_type_template_id_10e67c69___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);