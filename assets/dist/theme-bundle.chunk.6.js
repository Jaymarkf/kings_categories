(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./assets/js/theme/common/form-utils.js":
/*!**********************************************!*\
  !*** ./assets/js/theme/common/form-utils.js ***!
  \**********************************************/
/*! exports provided: classifyForm, Validators, insertStateHiddenField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classifyForm", function() { return classifyForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validators", function() { return Validators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertStateHiddenField", function() { return insertStateHiddenField; });
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/capitalize */ "./node_modules/lodash/capitalize.js");
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_capitalize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/camelCase */ "./node_modules/lodash/camelCase.js");
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_camelCase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/includes */ "./node_modules/lodash/includes.js");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _nod__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _models_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./models/forms */ "./assets/js/theme/common/models/forms.js");













var inputTagNames = ['input', 'select', 'textarea'];
/**
 * Apply class name to an input element on its type
 * @param {object} input
 * @param {string} formFieldClass
 * @return {object} Element itself
 */

function classifyInput(input, formFieldClass) {
  var $input = $(input);
  var $formField = $input.parent("." + formFieldClass);
  var tagName = $input.prop('tagName').toLowerCase();
  var className = formFieldClass + "--" + tagName;
  var specificClassName; // Input can be text/checkbox/radio etc...

  if (tagName === 'input') {
    var inputType = $input.prop('type');

    if (lodash_includes__WEBPACK_IMPORTED_MODULE_2___default()(['radio', 'checkbox', 'submit'], inputType)) {
      // ie: .form-field--checkbox, .form-field--radio
      className = formFieldClass + "--" + lodash_camelCase__WEBPACK_IMPORTED_MODULE_1___default()(inputType);
    } else {
      // ie: .form-field--input .form-field--inputText
      specificClassName = "" + className + lodash_capitalize__WEBPACK_IMPORTED_MODULE_0___default()(inputType);
    }
  } // Apply class modifier


  return $formField.addClass(className).addClass(specificClassName);
}
/**
 * Apply class name to each input element in a form based on its type
 * @example
 * // Before
 * <form id="form">
 *     <div class="form-field">
 *         <input type="text">
 *     </div>
 *     <div class="form-field">
 *         <select>...</select>
 *     </div>
 * </form>
 *
 * classifyForm('#form', { formFieldClass: 'form-field' });
 *
 * // After
 * <div class="form-field form-field--input form-field--inputText">...</div>
 * <div class="form-field form-field--select">...</div>
 *
 * @param {string|object} formSelector - selector or element
 * @param {object} options
 * @return {jQuery} Element itself
 */


function classifyForm(formSelector, options) {
  if (options === void 0) {
    options = {};
  }

  var $form = $(formSelector);
  var $inputs = $form.find(inputTagNames.join(', ')); // Obtain options

  var _options = options,
      _options$formFieldCla = _options.formFieldClass,
      formFieldClass = _options$formFieldCla === void 0 ? 'form-field' : _options$formFieldCla; // Classify each input in a form

  $inputs.each(function (__, input) {
    classifyInput(input, formFieldClass);
  });
  return $form;
}
/**
 * Get id from given field
 * @param {object} $field JQuery field object
 * @return {string}
 */

function getFieldId($field) {
  var fieldId = $field.prop('name').match(/(\[.*\])/);

  if (fieldId && fieldId.length !== 0) {
    return fieldId[0];
  }

  return '';
}
/**
 * Insert hidden field after State/Province field
 * @param {object} $stateField JQuery field object
 */


function insertStateHiddenField($stateField) {
  var fieldId = getFieldId($stateField);
  var stateFieldAttrs = {
    type: 'hidden',
    name: "FormFieldIsText" + fieldId,
    value: '1'
  };
  $stateField.after($('<input />', stateFieldAttrs));
}

var Validators = {
  /**
   * Sets up a new validation when the form is dirty
   * @param validator
   * @param field
   */
  setEmailValidation: function setEmailValidation(validator, field) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var result = _models_forms__WEBPACK_IMPORTED_MODULE_12__["default"].email(val);
          cb(result);
        },
        errorMessage: 'You must enter a valid email.'
      });
    }
  },

  /**
   * Validate password fields
   * @param validator
   * @param passwordSelector
   * @param password2Selector
   * @param requirements
   * @param isOptional
   */
  setPasswordValidation: function setPasswordValidation(validator, passwordSelector, password2Selector, requirements, isOptional) {
    var $password = $(passwordSelector);
    var passwordValidations = [{
      selector: passwordSelector,
      validate: function validate(cb, val) {
        var result = val.length;

        if (isOptional) {
          return cb(true);
        }

        cb(result);
      },
      errorMessage: 'You must enter a password.'
    }, {
      selector: passwordSelector,
      validate: function validate(cb, val) {
        var result = val.match(new RegExp(requirements.alpha)) && val.match(new RegExp(requirements.numeric)) && val.length >= requirements.minlength; // If optional and nothing entered, it is valid

        if (isOptional && val.length === 0) {
          return cb(true);
        }

        cb(result);
      },
      errorMessage: requirements.error
    }, {
      selector: password2Selector,
      validate: function validate(cb, val) {
        var result = val.length;

        if (isOptional) {
          return cb(true);
        }

        cb(result);
      },
      errorMessage: 'You must enter a password.'
    }, {
      selector: password2Selector,
      validate: function validate(cb, val) {
        var result = val === $password.val();
        cb(result);
      },
      errorMessage: 'Your passwords do not match.'
    }];
    validator.add(passwordValidations);
  },

  /**
   * Validate password fields
   * @param {Nod} validator
   * @param {Object} selectors
   * @param {string} selectors.errorSelector
   * @param {string} selectors.fieldsetSelector
   * @param {string} selectors.formSelector
   * @param {string} selectors.maxPriceSelector
   * @param {string} selectors.minPriceSelector
   */
  setMinMaxPriceValidation: function setMinMaxPriceValidation(validator, selectors) {
    var errorSelector = selectors.errorSelector,
        fieldsetSelector = selectors.fieldsetSelector,
        formSelector = selectors.formSelector,
        maxPriceSelector = selectors.maxPriceSelector,
        minPriceSelector = selectors.minPriceSelector;
    validator.configure({
      form: formSelector,
      preventSubmit: true,
      successClass: '_' // KLUDGE: Don't apply success class

    });
    validator.add({
      errorMessage: 'Min price must be less than max. price.',
      selector: minPriceSelector,
      validate: "min-max:" + minPriceSelector + ":" + maxPriceSelector
    });
    validator.add({
      errorMessage: 'Min price must be less than max. price.',
      selector: maxPriceSelector,
      validate: "min-max:" + minPriceSelector + ":" + maxPriceSelector
    });
    validator.add({
      errorMessage: 'Max. price is required.',
      selector: maxPriceSelector,
      validate: 'presence'
    });
    validator.add({
      errorMessage: 'Min. price is required.',
      selector: minPriceSelector,
      validate: 'presence'
    });
    validator.add({
      errorMessage: 'Input must be greater than 0.',
      selector: [minPriceSelector, maxPriceSelector],
      validate: 'min-number:0'
    });
    validator.setMessageOptions({
      selector: [minPriceSelector, maxPriceSelector],
      parent: fieldsetSelector,
      errorSpan: errorSelector
    });
  },

  /**
   * Sets up a new validation when the form is dirty
   * @param validator
   * @param field
   */
  setStateCountryValidation: function setStateCountryValidation(validator, field) {
    if (field) {
      validator.add({
        selector: field,
        validate: 'presence',
        errorMessage: 'The \'State/Province\' field cannot be blank.'
      });
    }
  },

  /**
   * Removes classes from dirty form if previously checked
   * @param field
   */
  cleanUpStateValidation: function cleanUpStateValidation(field) {
    var $fieldClassElement = $("[data-type=\"" + field.data('fieldType') + "\"]");
    Object.keys(_nod__WEBPACK_IMPORTED_MODULE_11__["default"].classes).forEach(function (value) {
      if ($fieldClassElement.hasClass(_nod__WEBPACK_IMPORTED_MODULE_11__["default"].classes[value])) {
        $fieldClassElement.removeClass(_nod__WEBPACK_IMPORTED_MODULE_11__["default"].classes[value]);
      }
    });
  }
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/models/forms.js":
/*!************************************************!*\
  !*** ./assets/js/theme/common/models/forms.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var forms = {
  email: function email(value) {
    var re = /^.+@.+\..+/;
    return re.test(value);
  },

  /**
   * Validates a password field
   * @param value
   * @returns {boolean}
   */
  password: function password(value) {
    return this.notEmpty(value);
  },

  /**
   * validates if a field is empty
   * @param value
   * @returns {boolean}
   *
   */
  notEmpty: function notEmpty(value) {
    return value.length > 0;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./assets/js/theme/product.js":
/*!************************************!*\
  !*** ./assets/js/theme/product.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Product; });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _product_reviews__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product/reviews */ "./assets/js/theme/product/reviews.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_product_details__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/product-details */ "./assets/js/theme/common/product-details.js");
/* harmony import */ var _product_video_gallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product/video-gallery */ "./assets/js/theme/product/video-gallery.js");
/* harmony import */ var _common_form_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/form-utils */ "./assets/js/theme/common/form-utils.js");


function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
 Import all product specific js
 */







var Product = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Product, _PageManager);

  function Product(context) {
    var _this;

    _this = _PageManager.call(this, context) || this;
    _this.url = window.location.href;
    _this.$reviewLink = $('[data-reveal-id="modal-review-form"]');
    _this.$bulkPricingLink = $('[data-reveal-id="modal-bulk-pricing"]');
    return _this;
  }

  var _proto = Product.prototype;

  _proto.onReady = function onReady() {
    var _this2 = this;

    // Listen for foundation modal close events to sanitize URL after review.
    $(document).on('close.fndtn.reveal', function () {
      if (_this2.url.indexOf('#write_review') !== -1 && typeof window.history.replaceState === 'function') {
        window.history.replaceState(null, document.title, window.location.pathname);
      }
    });
    var validator; // Init collapsible

    Object(_common_collapsible__WEBPACK_IMPORTED_MODULE_3__["default"])();
    this.productDetails = new _common_product_details__WEBPACK_IMPORTED_MODULE_4__["default"]($('.productView'), this.context, window.BCData.product_attributes);
    this.productDetails.setProductVariant();
    Object(_product_video_gallery__WEBPACK_IMPORTED_MODULE_5__["default"])();
    var $reviewForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_6__["classifyForm"])('.writeReview-form');
    var review = new _product_reviews__WEBPACK_IMPORTED_MODULE_2__["default"]($reviewForm);
    $('body').on('click', '[data-reveal-id="modal-review-form"]', function () {
      validator = review.registerValidation(_this2.context);
    });
    $reviewForm.on('submit', function () {
      if (validator) {
        validator.performCheck();
        return validator.areAll('valid');
      }

      return false;
    });
    this.productReviewHandler();
    this.bulkPricingHandler();
  };

  _proto.productReviewHandler = function productReviewHandler() {
    if (this.url.indexOf('#write_review') !== -1) {
      this.$reviewLink.trigger('click');
    }
  };

  _proto.bulkPricingHandler = function bulkPricingHandler() {
    if (this.url.indexOf('#bulk_pricing') !== -1) {
      this.$bulkPricingLink.trigger('click');
    }
  };

  return Product;
}(_page_manager__WEBPACK_IMPORTED_MODULE_1__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/product/reviews.js":
/*!********************************************!*\
  !*** ./assets/js/theme/product/reviews.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_models_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/models/forms */ "./assets/js/theme/common/models/forms.js");





var _default = /*#__PURE__*/function () {
  function _default($reviewForm) {
    this.validator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_1__["default"])({
      submit: $reviewForm.find('input[type="submit"]')
    });
    this.$reviewsContent = $('#product-reviews');
    this.$collapsible = $('[data-collapsible]', this.$reviewsContent);
    this.initLinkBind();
    this.injectPaginationLink();
    this.collapseReviews();
  }
  /**
   * On initial page load, the user clicks on "(12 Reviews)" link
   * The browser jumps to the review page and should expand the reviews section
   */


  var _proto = _default.prototype;

  _proto.initLinkBind = function initLinkBind() {
    var _this = this;

    var $content = $('#productReviews-content', this.$reviewsContent);
    $('.productView-reviewLink').on('click', function () {
      $('.productView-reviewTabLink').trigger('click');

      if (!$content.hasClass('is-open')) {
        _this.$collapsible.trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_2__["CollapsibleEvents"].click);
      }
    });
  };

  _proto.collapseReviews = function collapseReviews() {
    // We're in paginating state, do not collapse
    if (window.location.hash && window.location.hash.indexOf('#product-reviews') === 0) {
      return;
    } // force collapse on page load


    this.$collapsible.trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_2__["CollapsibleEvents"].click);
  }
  /**
   * Inject ID into the pagination link
   */
  ;

  _proto.injectPaginationLink = function injectPaginationLink() {
    var $nextLink = $('.pagination-item--next .pagination-link', this.$reviewsContent);
    var $prevLink = $('.pagination-item--previous .pagination-link', this.$reviewsContent);

    if ($nextLink.length) {
      $nextLink.attr('href', $nextLink.attr('href') + " #product-reviews");
    }

    if ($prevLink.length) {
      $prevLink.attr('href', $prevLink.attr('href') + " #product-reviews");
    }
  };

  _proto.registerValidation = function registerValidation(context) {
    this.context = context;
    this.validator.add([{
      selector: '[name="revrating"]',
      validate: 'presence',
      errorMessage: this.context.reviewRating
    }, {
      selector: '[name="revtitle"]',
      validate: 'presence',
      errorMessage: this.context.reviewSubject
    }, {
      selector: '[name="revtext"]',
      validate: 'presence',
      errorMessage: this.context.reviewComment
    }, {
      selector: '.writeReview-form [name="email"]',
      validate: function validate(cb, val) {
        var result = _common_models_forms__WEBPACK_IMPORTED_MODULE_3__["default"].email(val);
        cb(result);
      },
      errorMessage: this.context.reviewEmail
    }]);
    return this.validator;
  };

  _proto.validate = function validate() {
    return this.validator.performCheck();
  };

  return _default;
}();


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/product/video-gallery.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/product/video-gallery.js ***!
  \**************************************************/
/*! exports provided: VideoGallery, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoGallery", function() { return VideoGallery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return videoGallery; });
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);

var VideoGallery = /*#__PURE__*/function () {
  function VideoGallery($element) {
    this.$player = $element.find('[data-video-player]');
    this.$videos = $element.find('[data-video-item]');
    this.currentVideo = {};
    this.bindEvents();
  }

  var _proto = VideoGallery.prototype;

  _proto.selectNewVideo = function selectNewVideo(e) {
    e.preventDefault();
    var $target = $(e.currentTarget);
    this.currentVideo = {
      id: $target.data('videoId'),
      $selectedThumb: $target
    };
    this.setMainVideo();
    this.setActiveThumb();
  };

  _proto.setMainVideo = function setMainVideo() {
    this.$player.attr('src', "//www.youtube.com/embed/" + this.currentVideo.id);
  };

  _proto.setActiveThumb = function setActiveThumb() {
    this.$videos.removeClass('is-active');
    this.currentVideo.$selectedThumb.addClass('is-active');
  };

  _proto.bindEvents = function bindEvents() {
    this.$videos.on('click', this.selectNewVideo.bind(this));
  };

  return VideoGallery;
}();
function videoGallery() {
  var pluginKey = 'video-gallery';
  var $videoGallery = $("[data-" + pluginKey + "]");
  $videoGallery.each(function (index, element) {
    var $el = $(element);
    var isInitialized = $el.data(pluginKey) instanceof VideoGallery;

    if (isInitialized) {
      return;
    }

    $el.data(pluginKey, new VideoGallery($el));
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2Zvcm0tdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9tb2RlbHMvZm9ybXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL3Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL3Byb2R1Y3QvcmV2aWV3cy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvcHJvZHVjdC92aWRlby1nYWxsZXJ5LmpzIl0sIm5hbWVzIjpbImlucHV0VGFnTmFtZXMiLCJjbGFzc2lmeUlucHV0IiwiaW5wdXQiLCJmb3JtRmllbGRDbGFzcyIsIiRpbnB1dCIsIiQiLCIkZm9ybUZpZWxkIiwicGFyZW50IiwidGFnTmFtZSIsInByb3AiLCJ0b0xvd2VyQ2FzZSIsImNsYXNzTmFtZSIsInNwZWNpZmljQ2xhc3NOYW1lIiwiaW5wdXRUeXBlIiwiYWRkQ2xhc3MiLCJjbGFzc2lmeUZvcm0iLCJmb3JtU2VsZWN0b3IiLCJvcHRpb25zIiwiJGZvcm0iLCIkaW5wdXRzIiwiZmluZCIsImpvaW4iLCJlYWNoIiwiX18iLCJnZXRGaWVsZElkIiwiJGZpZWxkIiwiZmllbGRJZCIsIm1hdGNoIiwibGVuZ3RoIiwiaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCIsIiRzdGF0ZUZpZWxkIiwic3RhdGVGaWVsZEF0dHJzIiwidHlwZSIsIm5hbWUiLCJ2YWx1ZSIsImFmdGVyIiwiVmFsaWRhdG9ycyIsInNldEVtYWlsVmFsaWRhdGlvbiIsInZhbGlkYXRvciIsImZpZWxkIiwiYWRkIiwic2VsZWN0b3IiLCJ2YWxpZGF0ZSIsImNiIiwidmFsIiwicmVzdWx0IiwiZm9ybXMiLCJlbWFpbCIsImVycm9yTWVzc2FnZSIsInNldFBhc3N3b3JkVmFsaWRhdGlvbiIsInBhc3N3b3JkU2VsZWN0b3IiLCJwYXNzd29yZDJTZWxlY3RvciIsInJlcXVpcmVtZW50cyIsImlzT3B0aW9uYWwiLCIkcGFzc3dvcmQiLCJwYXNzd29yZFZhbGlkYXRpb25zIiwiUmVnRXhwIiwiYWxwaGEiLCJudW1lcmljIiwibWlubGVuZ3RoIiwiZXJyb3IiLCJzZXRNaW5NYXhQcmljZVZhbGlkYXRpb24iLCJzZWxlY3RvcnMiLCJlcnJvclNlbGVjdG9yIiwiZmllbGRzZXRTZWxlY3RvciIsIm1heFByaWNlU2VsZWN0b3IiLCJtaW5QcmljZVNlbGVjdG9yIiwiY29uZmlndXJlIiwiZm9ybSIsInByZXZlbnRTdWJtaXQiLCJzdWNjZXNzQ2xhc3MiLCJzZXRNZXNzYWdlT3B0aW9ucyIsImVycm9yU3BhbiIsInNldFN0YXRlQ291bnRyeVZhbGlkYXRpb24iLCJjbGVhblVwU3RhdGVWYWxpZGF0aW9uIiwiJGZpZWxkQ2xhc3NFbGVtZW50IiwiZGF0YSIsIk9iamVjdCIsImtleXMiLCJub2QiLCJjbGFzc2VzIiwiZm9yRWFjaCIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJyZSIsInRlc3QiLCJwYXNzd29yZCIsIm5vdEVtcHR5IiwiUHJvZHVjdCIsImNvbnRleHQiLCJ1cmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCIkcmV2aWV3TGluayIsIiRidWxrUHJpY2luZ0xpbmsiLCJvblJlYWR5IiwiZG9jdW1lbnQiLCJvbiIsImluZGV4T2YiLCJoaXN0b3J5IiwicmVwbGFjZVN0YXRlIiwidGl0bGUiLCJwYXRobmFtZSIsImNvbGxhcHNpYmxlRmFjdG9yeSIsInByb2R1Y3REZXRhaWxzIiwiUHJvZHVjdERldGFpbHMiLCJCQ0RhdGEiLCJwcm9kdWN0X2F0dHJpYnV0ZXMiLCJzZXRQcm9kdWN0VmFyaWFudCIsInZpZGVvR2FsbGVyeSIsIiRyZXZpZXdGb3JtIiwicmV2aWV3IiwiUmV2aWV3IiwicmVnaXN0ZXJWYWxpZGF0aW9uIiwicGVyZm9ybUNoZWNrIiwiYXJlQWxsIiwicHJvZHVjdFJldmlld0hhbmRsZXIiLCJidWxrUHJpY2luZ0hhbmRsZXIiLCJ0cmlnZ2VyIiwiUGFnZU1hbmFnZXIiLCJzdWJtaXQiLCIkcmV2aWV3c0NvbnRlbnQiLCIkY29sbGFwc2libGUiLCJpbml0TGlua0JpbmQiLCJpbmplY3RQYWdpbmF0aW9uTGluayIsImNvbGxhcHNlUmV2aWV3cyIsIiRjb250ZW50IiwiQ29sbGFwc2libGVFdmVudHMiLCJjbGljayIsImhhc2giLCIkbmV4dExpbmsiLCIkcHJldkxpbmsiLCJhdHRyIiwicmV2aWV3UmF0aW5nIiwicmV2aWV3U3ViamVjdCIsInJldmlld0NvbW1lbnQiLCJyZXZpZXdFbWFpbCIsIlZpZGVvR2FsbGVyeSIsIiRlbGVtZW50IiwiJHBsYXllciIsIiR2aWRlb3MiLCJjdXJyZW50VmlkZW8iLCJiaW5kRXZlbnRzIiwic2VsZWN0TmV3VmlkZW8iLCJlIiwicHJldmVudERlZmF1bHQiLCIkdGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImlkIiwiJHNlbGVjdGVkVGh1bWIiLCJzZXRNYWluVmlkZW8iLCJzZXRBY3RpdmVUaHVtYiIsImJpbmQiLCJwbHVnaW5LZXkiLCIkdmlkZW9HYWxsZXJ5IiwiaW5kZXgiLCJlbGVtZW50IiwiJGVsIiwiaXNJbml0aWFsaXplZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQSxJQUFNQSxhQUFhLEdBQUcsQ0FDbEIsT0FEa0IsRUFFbEIsUUFGa0IsRUFHbEIsVUFIa0IsQ0FBdEI7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU0MsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEJDLGNBQTlCLEVBQThDO0FBQzFDLE1BQU1DLE1BQU0sR0FBR0MsQ0FBQyxDQUFDSCxLQUFELENBQWhCO0FBQ0EsTUFBTUksVUFBVSxHQUFHRixNQUFNLENBQUNHLE1BQVAsT0FBa0JKLGNBQWxCLENBQW5CO0FBQ0EsTUFBTUssT0FBTyxHQUFHSixNQUFNLENBQUNLLElBQVAsQ0FBWSxTQUFaLEVBQXVCQyxXQUF2QixFQUFoQjtBQUVBLE1BQUlDLFNBQVMs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LElBQXBCLENBQXlCLElBQXpCLENBQXpCO0FBQ0gsR0FqQ0w7O0FBQUE7QUFBQTtBQW9DZSxTQUFTM0MsWUFBVCxHQUF3QjtBQUNuQyxNQUFNNEMsU0FBUyxHQUFHLGVBQWxCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHdEosQ0FBQyxZQUFVcUosU0FBVixPQUF2QjtBQUVBQyxlQUFhLENBQUNySSxJQUFkLENBQW1CLFVBQUNzSSxLQUFELEVBQVFDLE9BQVIsRUFBb0I7QUFDbkMsUUFBTUMsR0FBRyxHQUFHekosQ0FBQyxDQUFDd0osT0FBRCxDQUFiO0FBQ0EsUUFBTUUsYUFBYSxHQUFHRCxHQUFHLENBQUNsRixJQUFKLENBQVM4RSxTQUFULGFBQStCaEIsWUFBckQ7O0FBRUEsUUFBSXFCLGFBQUosRUFBbUI7QUFDZjtBQUNIOztBQUVERCxPQUFHLENBQUNsRixJQUFKLENBQVM4RSxTQUFULEVBQW9CLElBQUloQixZQUFKLENBQWlCb0IsR0FBakIsQ0FBcEI7QUFDSCxHQVREO0FBVUgsQyIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgbm9kIGZyb20gJy4vbm9kJztcbmltcG9ydCBmb3JtcyBmcm9tICcuL21vZGVscy9mb3Jtcyc7XG5cbmNvbnN0IGlucHV0VGFnTmFtZXMgPSBbXG4gICAgJ2lucHV0JyxcbiAgICAnc2VsZWN0JyxcbiAgICAndGV4dGFyZWEnLFxuXTtcblxuLyoqXG4gKiBBcHBseSBjbGFzcyBuYW1lIHRvIGFuIGlucHV0IGVsZW1lbnQgb24gaXRzIHR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBpbnB1dFxuICogQHBhcmFtIHtzdHJpbmd9IGZvcm1GaWVsZENsYXNzXG4gKiBAcmV0dXJuIHtvYmplY3R9IEVsZW1lbnQgaXRzZWxmXG4gKi9cbmZ1bmN0aW9uIGNsYXNzaWZ5SW5wdXQoaW5wdXQsIGZvcm1GaWVsZENsYXNzKSB7XG4gICAgY29uc3QgJGlucHV0ID0gJChpbnB1dCk7XG4gICAgY29uc3QgJGZvcm1GaWVsZCA9ICRpbnB1dC5wYXJlbnQoYC4ke2Zvcm1GaWVsZENsYXNzfWApO1xuICAgIGNvbnN0IHRhZ05hbWUgPSAkaW5wdXQucHJvcCgndGFnTmFtZScpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBsZXQgY2xhc3NOYW1lID0gYCR7Zm9ybUZpZWxkQ2xhc3N9LS0ke3RhZ05hbWV9YDtcbiAgICBsZXQgc3BlY2lmaWNDbGFzc05hbWU7XG5cbiAgICAvLyBJbnB1dCBjYW4gYmUgdGV4dC9jaGVja2JveC9yYWRpbyBldGMuLi5cbiAgICBpZiAodGFnTmFtZSA9PT0gJ2lucHV0Jykge1xuICAgICAgICBjb25zdCBpbnB1dFR5cGUgPSAkaW5wdXQucHJvcCgndHlwZScpO1xuXG4gICAgICAgIGlmIChfLmluY2x1ZGVzKFsncmFkaW8nLCAnY2hlY2tib3gnLCAnc3VibWl0J10sIGlucHV0VHlwZSkpIHtcbiAgICAgICAgICAgIC8vIGllOiAuZm9ybS1maWVsZC0tY2hlY2tib3gsIC5mb3JtLWZpZWxkLS1yYWRpb1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gYCR7Zm9ybUZpZWxkQ2xhc3N9LS0ke18uY2FtZWxDYXNlKGlucHV0VHlwZSl9YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGllOiAuZm9ybS1maWVsZC0taW5wdXQgLmZvcm0tZmllbGQtLWlucHV0VGV4dFxuICAgICAgICAgICAgc3BlY2lmaWNDbGFzc05hbWUgPSBgJHtjbGFzc05hbWV9JHtfLmNhcGl0YWxpemUoaW5wdXRUeXBlKX1gO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgY2xhc3MgbW9kaWZpZXJcbiAgICByZXR1cm4gJGZvcm1GaWVsZFxuICAgICAgICAuYWRkQ2xhc3MoY2xhc3NOYW1lKVxuICAgICAgICAuYWRkQ2xhc3Moc3BlY2lmaWNDbGFzc05hbWUpO1xufVxuXG4vKipcbiAqIEFwcGx5IGNsYXNzIG5hbWUgdG8gZWFjaCBpbnB1dCBlbGVtZW50IGluIGEgZm9ybSBiYXNlZCBvbiBpdHMgdHlwZVxuICogQGV4YW1wbGVcbiAqIC8vIEJlZm9yZVxuICogPGZvcm0gaWQ9XCJmb3JtXCI+XG4gKiAgICAgPGRpdiBjbGFzcz1cImZvcm0tZmllbGRcIj5cbiAqICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCI+XG4gKiAgICAgPC9kaXY+XG4gKiAgICAgPGRpdiBjbGFzcz1cImZvcm0tZmllbGRcIj5cbiAqICAgICAgICAgPHNlbGVjdD4uLi48L3NlbGVjdD5cbiAqICAgICA8L2Rpdj5cbiAqIDwvZm9ybT5cbiAqXG4gKiBjbGFzc2lmeUZvcm0oJyNmb3JtJywgeyBmb3JtRmllbGRDbGFzczogJ2Zvcm0tZmllbGQnIH0pO1xuICpcbiAqIC8vIEFmdGVyXG4gKiA8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZCBmb3JtLWZpZWxkLS1pbnB1dCBmb3JtLWZpZWxkLS1pbnB1dFRleHRcIj4uLi48L2Rpdj5cbiAqIDxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkIGZvcm0tZmllbGQtLXNlbGVjdFwiPi4uLjwvZGl2PlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gZm9ybVNlbGVjdG9yIC0gc2VsZWN0b3Igb3IgZWxlbWVudFxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge2pRdWVyeX0gRWxlbWVudCBpdHNlbGZcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsYXNzaWZ5Rm9ybShmb3JtU2VsZWN0b3IsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0ICRmb3JtID0gJChmb3JtU2VsZWN0b3IpO1xuICAgIGNvbnN0ICRpbnB1dHMgPSAkZm9ybS5maW5kKGlucHV0VGFnTmFtZXMuam9pbignLCAnKSk7XG5cbiAgICAvLyBPYnRhaW4gb3B0aW9uc1xuICAgIGNvbnN0IHsgZm9ybUZpZWxkQ2xhc3MgPSAnZm9ybS1maWVsZCcgfSA9IG9wdGlvbnM7XG5cbiAgICAvLyBDbGFzc2lmeSBlYWNoIGlucHV0IGluIGEgZm9ybVxuICAgICRpbnB1dHMuZWFjaCgoX18sIGlucHV0KSA9PiB7XG4gICAgICAgIGNsYXNzaWZ5SW5wdXQoaW5wdXQsIGZvcm1GaWVsZENsYXNzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiAkZm9ybTtcbn1cblxuLyoqXG4gKiBHZXQgaWQgZnJvbSBnaXZlbiBmaWVsZFxuICogQHBhcmFtIHtvYmplY3R9ICRmaWVsZCBKUXVlcnkgZmllbGQgb2JqZWN0XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGdldEZpZWxkSWQoJGZpZWxkKSB7XG4gICAgY29uc3QgZmllbGRJZCA9ICRmaWVsZC5wcm9wKCduYW1lJykubWF0Y2goLyhcXFsuKlxcXSkvKTtcblxuICAgIGlmIChmaWVsZElkICYmIGZpZWxkSWQubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIHJldHVybiBmaWVsZElkWzBdO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbn1cblxuLyoqXG4gKiBJbnNlcnQgaGlkZGVuIGZpZWxkIGFmdGVyIFN0YXRlL1Byb3ZpbmNlIGZpZWxkXG4gKiBAcGFyYW0ge29iamVjdH0gJHN0YXRlRmllbGQgSlF1ZXJ5IGZpZWxkIG9iamVjdFxuICovXG5mdW5jdGlvbiBpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkKCRzdGF0ZUZpZWxkKSB7XG4gICAgY29uc3QgZmllbGRJZCA9IGdldEZpZWxkSWQoJHN0YXRlRmllbGQpO1xuICAgIGNvbnN0IHN0YXRlRmllbGRBdHRycyA9IHtcbiAgICAgICAgdHlwZTogJ2hpZGRlbicsXG4gICAgICAgIG5hbWU6IGBGb3JtRmllbGRJc1RleHQke2ZpZWxkSWR9YCxcbiAgICAgICAgdmFsdWU6ICcxJyxcbiAgICB9O1xuXG4gICAgJHN0YXRlRmllbGQuYWZ0ZXIoJCgnPGlucHV0IC8+Jywgc3RhdGVGaWVsZEF0dHJzKSk7XG59XG5cbmNvbnN0IFZhbGlkYXRvcnMgPSB7XG4gICAgLyoqXG4gICAgICogU2V0cyB1cCBhIG5ldyB2YWxpZGF0aW9uIHdoZW4gdGhlIGZvcm0gaXMgZGlydHlcbiAgICAgKiBAcGFyYW0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIGZpZWxkXG4gICAgICovXG4gICAgc2V0RW1haWxWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBmaWVsZCkgPT4ge1xuICAgICAgICBpZiAoZmllbGQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBmaWVsZCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZm9ybXMuZW1haWwodmFsKTtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnWW91IG11c3QgZW50ZXIgYSB2YWxpZCBlbWFpbC4nLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVmFsaWRhdGUgcGFzc3dvcmQgZmllbGRzXG4gICAgICogQHBhcmFtIHZhbGlkYXRvclxuICAgICAqIEBwYXJhbSBwYXNzd29yZFNlbGVjdG9yXG4gICAgICogQHBhcmFtIHBhc3N3b3JkMlNlbGVjdG9yXG4gICAgICogQHBhcmFtIHJlcXVpcmVtZW50c1xuICAgICAqIEBwYXJhbSBpc09wdGlvbmFsXG4gICAgICovXG4gICAgc2V0UGFzc3dvcmRWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBwYXNzd29yZFNlbGVjdG9yLCBwYXNzd29yZDJTZWxlY3RvciwgcmVxdWlyZW1lbnRzLCBpc09wdGlvbmFsKSA9PiB7XG4gICAgICAgIGNvbnN0ICRwYXNzd29yZCA9ICQocGFzc3dvcmRTZWxlY3Rvcik7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkVmFsaWRhdGlvbnMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IHBhc3N3b3JkU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzT3B0aW9uYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdZb3UgbXVzdCBlbnRlciBhIHBhc3N3b3JkLicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBwYXNzd29yZFNlbGVjdG9yLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubWF0Y2gobmV3IFJlZ0V4cChyZXF1aXJlbWVudHMuYWxwaGEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgdmFsLm1hdGNoKG5ldyBSZWdFeHAocmVxdWlyZW1lbnRzLm51bWVyaWMpKVxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgdmFsLmxlbmd0aCA+PSByZXF1aXJlbWVudHMubWlubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIG9wdGlvbmFsIGFuZCBub3RoaW5nIGVudGVyZWQsIGl0IGlzIHZhbGlkXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc09wdGlvbmFsICYmIHZhbC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHJlcXVpcmVtZW50cy5lcnJvcixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IHBhc3N3b3JkMlNlbGVjdG9yLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc09wdGlvbmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2IodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnWW91IG11c3QgZW50ZXIgYSBwYXNzd29yZC4nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogcGFzc3dvcmQyU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbCA9PT0gJHBhc3N3b3JkLnZhbCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdZb3VyIHBhc3N3b3JkcyBkbyBub3QgbWF0Y2guJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF07XG5cbiAgICAgICAgdmFsaWRhdG9yLmFkZChwYXNzd29yZFZhbGlkYXRpb25zKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVmFsaWRhdGUgcGFzc3dvcmQgZmllbGRzXG4gICAgICogQHBhcmFtIHtOb2R9IHZhbGlkYXRvclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzZWxlY3RvcnNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JzLmVycm9yU2VsZWN0b3JcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JzLmZpZWxkc2V0U2VsZWN0b3JcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JzLmZvcm1TZWxlY3RvclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMubWF4UHJpY2VTZWxlY3RvclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMubWluUHJpY2VTZWxlY3RvclxuICAgICAqL1xuICAgIHNldE1pbk1heFByaWNlVmFsaWRhdGlvbjogKHZhbGlkYXRvciwgc2VsZWN0b3JzKSA9PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGVycm9yU2VsZWN0b3IsXG4gICAgICAgICAgICBmaWVsZHNldFNlbGVjdG9yLFxuICAgICAgICAgICAgZm9ybVNlbGVjdG9yLFxuICAgICAgICAgICAgbWF4UHJpY2VTZWxlY3RvcixcbiAgICAgICAgICAgIG1pblByaWNlU2VsZWN0b3IsXG4gICAgICAgIH0gPSBzZWxlY3RvcnM7XG5cbiAgICAgICAgdmFsaWRhdG9yLmNvbmZpZ3VyZSh7XG4gICAgICAgICAgICBmb3JtOiBmb3JtU2VsZWN0b3IsXG4gICAgICAgICAgICBwcmV2ZW50U3VibWl0OiB0cnVlLFxuICAgICAgICAgICAgc3VjY2Vzc0NsYXNzOiAnXycsIC8vIEtMVURHRTogRG9uJ3QgYXBwbHkgc3VjY2VzcyBjbGFzc1xuICAgICAgICB9KTtcblxuICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ01pbiBwcmljZSBtdXN0IGJlIGxlc3MgdGhhbiBtYXguIHByaWNlLicsXG4gICAgICAgICAgICBzZWxlY3RvcjogbWluUHJpY2VTZWxlY3RvcixcbiAgICAgICAgICAgIHZhbGlkYXRlOiBgbWluLW1heDoke21pblByaWNlU2VsZWN0b3J9OiR7bWF4UHJpY2VTZWxlY3Rvcn1gLFxuICAgICAgICB9KTtcblxuICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ01pbiBwcmljZSBtdXN0IGJlIGxlc3MgdGhhbiBtYXguIHByaWNlLicsXG4gICAgICAgICAgICBzZWxlY3RvcjogbWF4UHJpY2VTZWxlY3RvcixcbiAgICAgICAgICAgIHZhbGlkYXRlOiBgbWluLW1heDoke21pblByaWNlU2VsZWN0b3J9OiR7bWF4UHJpY2VTZWxlY3Rvcn1gLFxuICAgICAgICB9KTtcblxuICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ01heC4gcHJpY2UgaXMgcmVxdWlyZWQuJyxcbiAgICAgICAgICAgIHNlbGVjdG9yOiBtYXhQcmljZVNlbGVjdG9yLFxuICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnTWluLiBwcmljZSBpcyByZXF1aXJlZC4nLFxuICAgICAgICAgICAgc2VsZWN0b3I6IG1pblByaWNlU2VsZWN0b3IsXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdJbnB1dCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiAwLicsXG4gICAgICAgICAgICBzZWxlY3RvcjogW21pblByaWNlU2VsZWN0b3IsIG1heFByaWNlU2VsZWN0b3JdLFxuICAgICAgICAgICAgdmFsaWRhdGU6ICdtaW4tbnVtYmVyOjAnLFxuICAgICAgICB9KTtcblxuICAgICAgICB2YWxpZGF0b3Iuc2V0TWVzc2FnZU9wdGlvbnMoe1xuICAgICAgICAgICAgc2VsZWN0b3I6IFttaW5QcmljZVNlbGVjdG9yLCBtYXhQcmljZVNlbGVjdG9yXSxcbiAgICAgICAgICAgIHBhcmVudDogZmllbGRzZXRTZWxlY3RvcixcbiAgICAgICAgICAgIGVycm9yU3BhbjogZXJyb3JTZWxlY3RvcixcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldHMgdXAgYSBuZXcgdmFsaWRhdGlvbiB3aGVuIHRoZSBmb3JtIGlzIGRpcnR5XG4gICAgICogQHBhcmFtIHZhbGlkYXRvclxuICAgICAqIEBwYXJhbSBmaWVsZFxuICAgICAqL1xuICAgIHNldFN0YXRlQ291bnRyeVZhbGlkYXRpb246ICh2YWxpZGF0b3IsIGZpZWxkKSA9PiB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGZpZWxkLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ1RoZSBcXCdTdGF0ZS9Qcm92aW5jZVxcJyBmaWVsZCBjYW5ub3QgYmUgYmxhbmsuJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgY2xhc3NlcyBmcm9tIGRpcnR5IGZvcm0gaWYgcHJldmlvdXNseSBjaGVja2VkXG4gICAgICogQHBhcmFtIGZpZWxkXG4gICAgICovXG4gICAgY2xlYW5VcFN0YXRlVmFsaWRhdGlvbjogKGZpZWxkKSA9PiB7XG4gICAgICAgIGNvbnN0ICRmaWVsZENsYXNzRWxlbWVudCA9ICQoKGBbZGF0YS10eXBlPVwiJHtmaWVsZC5kYXRhKCdmaWVsZFR5cGUnKX1cIl1gKSk7XG5cbiAgICAgICAgT2JqZWN0LmtleXMobm9kLmNsYXNzZXMpLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBpZiAoJGZpZWxkQ2xhc3NFbGVtZW50Lmhhc0NsYXNzKG5vZC5jbGFzc2VzW3ZhbHVlXSkpIHtcbiAgICAgICAgICAgICAgICAkZmllbGRDbGFzc0VsZW1lbnQucmVtb3ZlQ2xhc3Mobm9kLmNsYXNzZXNbdmFsdWVdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcbn07XG5cbmV4cG9ydCB7IFZhbGlkYXRvcnMsIGluc2VydFN0YXRlSGlkZGVuRmllbGQgfTtcbiIsImNvbnN0IGZvcm1zID0ge1xuICAgIGVtYWlsKHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHJlID0gL14uK0AuK1xcLi4rLztcbiAgICAgICAgcmV0dXJuIHJlLnRlc3QodmFsdWUpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZXMgYSBwYXNzd29yZCBmaWVsZFxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIHBhc3N3b3JkKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vdEVtcHR5KHZhbHVlKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogdmFsaWRhdGVzIGlmIGEgZmllbGQgaXMgZW1wdHlcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKlxuICAgICAqL1xuICAgIG5vdEVtcHR5KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPiAwO1xuICAgIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtcztcbiIsIi8qXG4gSW1wb3J0IGFsbCBwcm9kdWN0IHNwZWNpZmljIGpzXG4gKi9cbmltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XG5pbXBvcnQgUmV2aWV3IGZyb20gJy4vcHJvZHVjdC9yZXZpZXdzJztcbmltcG9ydCBjb2xsYXBzaWJsZUZhY3RvcnkgZnJvbSAnLi9jb21tb24vY29sbGFwc2libGUnO1xuaW1wb3J0IFByb2R1Y3REZXRhaWxzIGZyb20gJy4vY29tbW9uL3Byb2R1Y3QtZGV0YWlscyc7XG5pbXBvcnQgdmlkZW9HYWxsZXJ5IGZyb20gJy4vcHJvZHVjdC92aWRlby1nYWxsZXJ5JztcbmltcG9ydCB7IGNsYXNzaWZ5Rm9ybSB9IGZyb20gJy4vY29tbW9uL2Zvcm0tdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0IGV4dGVuZHMgUGFnZU1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG4gICAgICAgIHRoaXMudXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICAgIHRoaXMuJHJldmlld0xpbmsgPSAkKCdbZGF0YS1yZXZlYWwtaWQ9XCJtb2RhbC1yZXZpZXctZm9ybVwiXScpO1xuICAgICAgICB0aGlzLiRidWxrUHJpY2luZ0xpbmsgPSAkKCdbZGF0YS1yZXZlYWwtaWQ9XCJtb2RhbC1idWxrLXByaWNpbmdcIl0nKTtcbiAgICB9XG5cbiAgICBvblJlYWR5KCkge1xuICAgICAgICAvLyBMaXN0ZW4gZm9yIGZvdW5kYXRpb24gbW9kYWwgY2xvc2UgZXZlbnRzIHRvIHNhbml0aXplIFVSTCBhZnRlciByZXZpZXcuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbG9zZS5mbmR0bi5yZXZlYWwnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy51cmwuaW5kZXhPZignI3dyaXRlX3JldmlldycpICE9PSAtMSAmJiB0eXBlb2Ygd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIGRvY3VtZW50LnRpdGxlLCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgdmFsaWRhdG9yO1xuXG4gICAgICAgIC8vIEluaXQgY29sbGFwc2libGVcbiAgICAgICAgY29sbGFwc2libGVGYWN0b3J5KCk7XG5cbiAgICAgICAgdGhpcy5wcm9kdWN0RGV0YWlscyA9IG5ldyBQcm9kdWN0RGV0YWlscygkKCcucHJvZHVjdFZpZXcnKSwgdGhpcy5jb250ZXh0LCB3aW5kb3cuQkNEYXRhLnByb2R1Y3RfYXR0cmlidXRlcyk7XG4gICAgICAgIHRoaXMucHJvZHVjdERldGFpbHMuc2V0UHJvZHVjdFZhcmlhbnQoKTtcblxuICAgICAgICB2aWRlb0dhbGxlcnkoKTtcblxuICAgICAgICBjb25zdCAkcmV2aWV3Rm9ybSA9IGNsYXNzaWZ5Rm9ybSgnLndyaXRlUmV2aWV3LWZvcm0nKTtcbiAgICAgICAgY29uc3QgcmV2aWV3ID0gbmV3IFJldmlldygkcmV2aWV3Rm9ybSk7XG5cbiAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsICdbZGF0YS1yZXZlYWwtaWQ9XCJtb2RhbC1yZXZpZXctZm9ybVwiXScsICgpID0+IHtcbiAgICAgICAgICAgIHZhbGlkYXRvciA9IHJldmlldy5yZWdpc3RlclZhbGlkYXRpb24odGhpcy5jb250ZXh0KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJHJldmlld0Zvcm0ub24oJ3N1Ym1pdCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh2YWxpZGF0b3IpIHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5wcm9kdWN0UmV2aWV3SGFuZGxlcigpO1xuICAgICAgICB0aGlzLmJ1bGtQcmljaW5nSGFuZGxlcigpO1xuICAgIH1cblxuICAgIHByb2R1Y3RSZXZpZXdIYW5kbGVyKCkge1xuICAgICAgICBpZiAodGhpcy51cmwuaW5kZXhPZignI3dyaXRlX3JldmlldycpICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy4kcmV2aWV3TGluay50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYnVsa1ByaWNpbmdIYW5kbGVyKCkge1xuICAgICAgICBpZiAodGhpcy51cmwuaW5kZXhPZignI2J1bGtfcHJpY2luZycpICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy4kYnVsa1ByaWNpbmdMaW5rLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgbm9kIGZyb20gJy4uL2NvbW1vbi9ub2QnO1xuaW1wb3J0IHsgQ29sbGFwc2libGVFdmVudHMgfSBmcm9tICcuLi9jb21tb24vY29sbGFwc2libGUnO1xuaW1wb3J0IGZvcm1zIGZyb20gJy4uL2NvbW1vbi9tb2RlbHMvZm9ybXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoJHJldmlld0Zvcm0pIHtcbiAgICAgICAgdGhpcy52YWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiAkcmV2aWV3Rm9ybS5maW5kKCdpbnB1dFt0eXBlPVwic3VibWl0XCJdJyksXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJHJldmlld3NDb250ZW50ID0gJCgnI3Byb2R1Y3QtcmV2aWV3cycpO1xuICAgICAgICB0aGlzLiRjb2xsYXBzaWJsZSA9ICQoJ1tkYXRhLWNvbGxhcHNpYmxlXScsIHRoaXMuJHJldmlld3NDb250ZW50KTtcblxuICAgICAgICB0aGlzLmluaXRMaW5rQmluZCgpO1xuICAgICAgICB0aGlzLmluamVjdFBhZ2luYXRpb25MaW5rKCk7XG4gICAgICAgIHRoaXMuY29sbGFwc2VSZXZpZXdzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT24gaW5pdGlhbCBwYWdlIGxvYWQsIHRoZSB1c2VyIGNsaWNrcyBvbiBcIigxMiBSZXZpZXdzKVwiIGxpbmtcbiAgICAgKiBUaGUgYnJvd3NlciBqdW1wcyB0byB0aGUgcmV2aWV3IHBhZ2UgYW5kIHNob3VsZCBleHBhbmQgdGhlIHJldmlld3Mgc2VjdGlvblxuICAgICAqL1xuICAgIGluaXRMaW5rQmluZCgpIHtcbiAgICAgICAgY29uc3QgJGNvbnRlbnQgPSAkKCcjcHJvZHVjdFJldmlld3MtY29udGVudCcsIHRoaXMuJHJldmlld3NDb250ZW50KTtcblxuICAgICAgICAkKCcucHJvZHVjdFZpZXctcmV2aWV3TGluaycpLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICQoJy5wcm9kdWN0Vmlldy1yZXZpZXdUYWJMaW5rJykudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgICAgIGlmICghJGNvbnRlbnQuaGFzQ2xhc3MoJ2lzLW9wZW4nKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGNvbGxhcHNpYmxlLnRyaWdnZXIoQ29sbGFwc2libGVFdmVudHMuY2xpY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb2xsYXBzZVJldmlld3MoKSB7XG4gICAgICAgIC8vIFdlJ3JlIGluIHBhZ2luYXRpbmcgc3RhdGUsIGRvIG5vdCBjb2xsYXBzZVxuICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhhc2ggJiYgd2luZG93LmxvY2F0aW9uLmhhc2guaW5kZXhPZignI3Byb2R1Y3QtcmV2aWV3cycpID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmb3JjZSBjb2xsYXBzZSBvbiBwYWdlIGxvYWRcbiAgICAgICAgdGhpcy4kY29sbGFwc2libGUudHJpZ2dlcihDb2xsYXBzaWJsZUV2ZW50cy5jbGljayk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5qZWN0IElEIGludG8gdGhlIHBhZ2luYXRpb24gbGlua1xuICAgICAqL1xuICAgIGluamVjdFBhZ2luYXRpb25MaW5rKCkge1xuICAgICAgICBjb25zdCAkbmV4dExpbmsgPSAkKCcucGFnaW5hdGlvbi1pdGVtLS1uZXh0IC5wYWdpbmF0aW9uLWxpbmsnLCB0aGlzLiRyZXZpZXdzQ29udGVudCk7XG4gICAgICAgIGNvbnN0ICRwcmV2TGluayA9ICQoJy5wYWdpbmF0aW9uLWl0ZW0tLXByZXZpb3VzIC5wYWdpbmF0aW9uLWxpbmsnLCB0aGlzLiRyZXZpZXdzQ29udGVudCk7XG5cbiAgICAgICAgaWYgKCRuZXh0TGluay5sZW5ndGgpIHtcbiAgICAgICAgICAgICRuZXh0TGluay5hdHRyKCdocmVmJywgYCR7JG5leHRMaW5rLmF0dHIoJ2hyZWYnKX0gI3Byb2R1Y3QtcmV2aWV3c2ApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRwcmV2TGluay5sZW5ndGgpIHtcbiAgICAgICAgICAgICRwcmV2TGluay5hdHRyKCdocmVmJywgYCR7JHByZXZMaW5rLmF0dHIoJ2hyZWYnKX0gI3Byb2R1Y3QtcmV2aWV3c2ApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJWYWxpZGF0aW9uKGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy52YWxpZGF0b3IuYWRkKFt7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ1tuYW1lPVwicmV2cmF0aW5nXCJdJyxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQucmV2aWV3UmF0aW5nLFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ1tuYW1lPVwicmV2dGl0bGVcIl0nLFxuICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5yZXZpZXdTdWJqZWN0LFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ1tuYW1lPVwicmV2dGV4dFwiXScsXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LnJldmlld0NvbW1lbnQsXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnLndyaXRlUmV2aWV3LWZvcm0gW25hbWU9XCJlbWFpbFwiXScsXG4gICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBmb3Jtcy5lbWFpbCh2YWwpO1xuICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQucmV2aWV3RW1haWwsXG4gICAgICAgIH1dKTtcblxuICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0b3I7XG4gICAgfVxuXG4gICAgdmFsaWRhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVmlkZW9HYWxsZXJ5IHtcbiAgICBjb25zdHJ1Y3RvcigkZWxlbWVudCkge1xuICAgICAgICB0aGlzLiRwbGF5ZXIgPSAkZWxlbWVudC5maW5kKCdbZGF0YS12aWRlby1wbGF5ZXJdJyk7XG4gICAgICAgIHRoaXMuJHZpZGVvcyA9ICRlbGVtZW50LmZpbmQoJ1tkYXRhLXZpZGVvLWl0ZW1dJyk7XG4gICAgICAgIHRoaXMuY3VycmVudFZpZGVvID0ge307XG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIHNlbGVjdE5ld1ZpZGVvKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGUuY3VycmVudFRhcmdldCk7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50VmlkZW8gPSB7XG4gICAgICAgICAgICBpZDogJHRhcmdldC5kYXRhKCd2aWRlb0lkJyksXG4gICAgICAgICAgICAkc2VsZWN0ZWRUaHVtYjogJHRhcmdldCxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnNldE1haW5WaWRlbygpO1xuICAgICAgICB0aGlzLnNldEFjdGl2ZVRodW1iKCk7XG4gICAgfVxuXG4gICAgc2V0TWFpblZpZGVvKCkge1xuICAgICAgICB0aGlzLiRwbGF5ZXIuYXR0cignc3JjJywgYC8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7dGhpcy5jdXJyZW50VmlkZW8uaWR9YCk7XG4gICAgfVxuXG4gICAgc2V0QWN0aXZlVGh1bWIoKSB7XG4gICAgICAgIHRoaXMuJHZpZGVvcy5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgIHRoaXMuY3VycmVudFZpZGVvLiRzZWxlY3RlZFRodW1iLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLiR2aWRlb3Mub24oJ2NsaWNrJywgdGhpcy5zZWxlY3ROZXdWaWRlby5iaW5kKHRoaXMpKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZpZGVvR2FsbGVyeSgpIHtcbiAgICBjb25zdCBwbHVnaW5LZXkgPSAndmlkZW8tZ2FsbGVyeSc7XG4gICAgY29uc3QgJHZpZGVvR2FsbGVyeSA9ICQoYFtkYXRhLSR7cGx1Z2luS2V5fV1gKTtcblxuICAgICR2aWRlb0dhbGxlcnkuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgJGVsID0gJChlbGVtZW50KTtcbiAgICAgICAgY29uc3QgaXNJbml0aWFsaXplZCA9ICRlbC5kYXRhKHBsdWdpbktleSkgaW5zdGFuY2VvZiBWaWRlb0dhbGxlcnk7XG5cbiAgICAgICAgaWYgKGlzSW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgICRlbC5kYXRhKHBsdWdpbktleSwgbmV3IFZpZGVvR2FsbGVyeSgkZWwpKTtcbiAgICB9KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=