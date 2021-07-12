(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./assets/js/theme/account.js":
/*!************************************!*\
  !*** ./assets/js/theme/account.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Account; });
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/find */ "./node_modules/lodash/find.js");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/reduce */ "./node_modules/lodash/reduce.js");
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_reduce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./wishlist */ "./assets/js/theme/wishlist.js");
/* harmony import */ var _common_form_validation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/form-validation */ "./assets/js/theme/common/form-validation.js");
/* harmony import */ var _common_state_country__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/state-country */ "./assets/js/theme/common/state-country.js");
/* harmony import */ var _common_form_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common/form-utils */ "./assets/js/theme/common/form-utils.js");
/* harmony import */ var _common_payment_method__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./common/payment-method */ "./assets/js/theme/common/payment-method.js");
/* harmony import */ var _global_sweet_alert__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./global/sweet-alert */ "./assets/js/theme/global/sweet-alert.js");







function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var Account = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Account, _PageManager);

  function Account(context) {
    var _this;

    _this = _PageManager.call(this, context) || this;
    _this.$state = $('[data-field-type="State"]');
    _this.$body = $('body');
    return _this;
  }

  var _proto = Account.prototype;

  _proto.onReady = function onReady() {
    var $editAccountForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_11__["classifyForm"])('form[data-edit-account-form]');
    var $addressForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_11__["classifyForm"])('form[data-address-form]');
    var $inboxForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_11__["classifyForm"])('form[data-inbox-form]');
    var $accountReturnForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_11__["classifyForm"])('[data-account-return-form]');
    var $paymentMethodForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_11__["classifyForm"])('form[data-payment-method-form]');
    var $reorderForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_11__["classifyForm"])('[data-account-reorder-form]');
    var $invoiceButton = $('[data-print-invoice]'); // Injected via template

    this.passwordRequirements = this.context.passwordRequirements; // Instantiates wish list JS

    _wishlist__WEBPACK_IMPORTED_MODULE_8__["default"].load(this.context);

    if ($editAccountForm.length) {
      this.registerEditAccountValidation($editAccountForm);

      if (this.$state.is('input')) {
        Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_11__["insertStateHiddenField"])(this.$state);
      }
    }

    if ($invoiceButton.length) {
      $invoiceButton.on('click', function () {
        var left = window.screen.availWidth / 2 - 450;
        var top = window.screen.availHeight / 2 - 320;
        var url = $invoiceButton.data('printInvoice');
        window.open(url, 'orderInvoice', "width=900,height=650,left=" + left + ",top=" + top + ",scrollbars=1");
      });
    }

    if ($addressForm.length) {
      this.initAddressFormValidation($addressForm);

      if (this.$state.is('input')) {
        Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_11__["insertStateHiddenField"])(this.$state);
      }
    }

    if ($inboxForm.length) {
      this.registerInboxValidation($inboxForm);
    }

    if ($accountReturnForm.length) {
      this.initAccountReturnFormValidation($accountReturnForm);
    }

    if ($paymentMethodForm.length) {
      this.initPaymentMethodFormValidation($paymentMethodForm);
    }

    if ($reorderForm.length) {
      this.initReorderForm($reorderForm);
    }

    this.bindDeleteAddress();
    this.bindDeletePaymentMethod();
  }
  /**
   * Binds a submit hook to ensure the customer receives a confirmation dialog before deleting an address
   */
  ;

  _proto.bindDeleteAddress = function bindDeleteAddress() {
    $('[data-delete-address]').on('submit', function (event) {
      var message = $(event.currentTarget).data('deleteAddress');

      if (!window.confirm(message)) {
        event.preventDefault();
      }
    });
  };

  _proto.bindDeletePaymentMethod = function bindDeletePaymentMethod() {
    $('[data-delete-payment-method]').on('submit', function (event) {
      var message = $(event.currentTarget).data('deletePaymentMethod');

      if (!window.confirm(message)) {
        event.preventDefault();
      }
    });
  };

  _proto.initReorderForm = function initReorderForm($reorderForm) {
    var _this2 = this;

    $reorderForm.on('submit', function (event) {
      var $productReorderCheckboxes = $('.account-listItem .form-checkbox:checked');
      var submitForm = false;
      $reorderForm.find('[name^="reorderitem"]').remove();
      $productReorderCheckboxes.each(function (index, productCheckbox) {
        var productId = $(productCheckbox).val();
        var $input = $('<input>', {
          type: 'hidden',
          name: "reorderitem[" + productId + "]",
          value: '1'
        });
        submitForm = true;
        $reorderForm.append($input);
      });

      if (!submitForm) {
        event.preventDefault();
        _global_sweet_alert__WEBPACK_IMPORTED_MODULE_13__["default"].fire({
          text: _this2.context.selectItem,
          icon: 'error'
        });
      }
    });
  };

  _proto.initAddressFormValidation = function initAddressFormValidation($addressForm) {
    var validationModel = Object(_common_form_validation__WEBPACK_IMPORTED_MODULE_9__["default"])($addressForm);
    var stateSelector = 'form[data-address-form] [data-field-type="State"]';
    var $stateElement = $(stateSelector);
    var addressValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_7__["default"])({
      submit: 'form[data-address-form] input[type="submit"]'
    });
    addressValidator.add(validationModel);

    if ($stateElement) {
      var $last; // Requests the states for a country with AJAX

      Object(_common_state_country__WEBPACK_IMPORTED_MODULE_10__["default"])($stateElement, this.context, function (err, field) {
        if (err) {
          throw new Error(err);
        }

        var $field = $(field);

        if (addressValidator.getStatus($stateElement) !== 'undefined') {
          addressValidator.remove($stateElement);
        }

        if ($last) {
          addressValidator.remove($last);
        }

        if ($field.is('select')) {
          $last = field;
          _common_form_utils__WEBPACK_IMPORTED_MODULE_11__["Validators"].setStateCountryValidation(addressValidator, field);
        } else {
          _common_form_utils__WEBPACK_IMPORTED_MODULE_11__["Validators"].cleanUpStateValidation(field);
        }
      });
    }

    $addressForm.on('submit', function (event) {
      addressValidator.performCheck();

      if (addressValidator.areAll('valid')) {
        return;
      }

      event.preventDefault();
    });
  };

  _proto.initAccountReturnFormValidation = function initAccountReturnFormValidation($accountReturnForm) {
    var errorMessage = $accountReturnForm.data('accountReturnFormError');
    $accountReturnForm.on('submit', function (event) {
      var formSubmit = false; // Iterate until we find a non-zero value in the dropdown for quantity

      $('[name^="return_qty"]', $accountReturnForm).each(function (i, ele) {
        if (parseInt($(ele).val(), 10) !== 0) {
          formSubmit = true; // Exit out of loop if we found at least one return

          return true;
        }
      });

      if (formSubmit) {
        return true;
      }

      _global_sweet_alert__WEBPACK_IMPORTED_MODULE_13__["default"].fire({
        text: errorMessage,
        icon: 'error'
      });
      return event.preventDefault();
    });
  };

  _proto.initPaymentMethodFormValidation = function initPaymentMethodFormValidation($paymentMethodForm) {
    var _this3 = this;

    // Inject validations into form fields before validation runs
    $paymentMethodForm.find('#first_name.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.firstNameLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#last_name.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.lastNameLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#company.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.companyLabel + "\", \"required\": false, \"maxlength\": 0 }");
    $paymentMethodForm.find('#phone.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.phoneLabel + "\", \"required\": false, \"maxlength\": 0 }");
    $paymentMethodForm.find('#address1.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.address1Label + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#address2.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.address2Label + "\", \"required\": false, \"maxlength\": 0 }");
    $paymentMethodForm.find('#city.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.cityLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#country.form-field').attr('data-validation', "{ \"type\": \"singleselect\", \"label\": \"" + this.context.countryLabel + "\", \"required\": true, prefix: \"" + this.context.chooseCountryLabel + "\" }");
    $paymentMethodForm.find('#state.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.stateLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#postal_code.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.postalCodeLabel + "\", \"required\": true, \"maxlength\": 0 }");
    var validationModel = Object(_common_form_validation__WEBPACK_IMPORTED_MODULE_9__["default"])($paymentMethodForm);
    var paymentMethodSelector = 'form[data-payment-method-form]';
    var paymentMethodValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_7__["default"])({
      submit: paymentMethodSelector + " input[type=\"submit\"]"
    });
    var $stateElement = $(paymentMethodSelector + " [data-field-type=\"State\"]");
    var $last; // Requests the states for a country with AJAX

    Object(_common_state_country__WEBPACK_IMPORTED_MODULE_10__["default"])($stateElement, this.context, function (err, field) {
      if (err) {
        throw new Error(err);
      }

      var $field = $(field);

      if (paymentMethodValidator.getStatus($stateElement) !== 'undefined') {
        paymentMethodValidator.remove($stateElement);
      }

      if ($last) {
        paymentMethodValidator.remove($last);
      }

      if ($field.is('select')) {
        $last = field;
        _common_form_utils__WEBPACK_IMPORTED_MODULE_11__["Validators"].setStateCountryValidation(paymentMethodValidator, field);
      } else {
        _common_form_utils__WEBPACK_IMPORTED_MODULE_11__["Validators"].cleanUpStateValidation(field);
      }
    }); // Use credit card number input listener to highlight credit card type

    var cardType;
    $(paymentMethodSelector + " input[name=\"credit_card_number\"]").on('keyup', function (_ref) {
      var target = _ref.target;
      cardType = Object(_common_payment_method__WEBPACK_IMPORTED_MODULE_12__["creditCardType"])(target.value);

      if (cardType) {
        $(paymentMethodSelector + " img[alt=\"" + cardType + "\"]").siblings().css('opacity', '.2');
      } else {
        $(paymentMethodSelector + " img").css('opacity', '1');
      }
    }); // Set of credit card validation

    _common_payment_method__WEBPACK_IMPORTED_MODULE_12__["Validators"].setCreditCardNumberValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"credit_card_number\"]", this.context.creditCardNumber);
    _common_payment_method__WEBPACK_IMPORTED_MODULE_12__["Validators"].setExpirationValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"expiration\"]", this.context.expiration);
    _common_payment_method__WEBPACK_IMPORTED_MODULE_12__["Validators"].setNameOnCardValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"name_on_card\"]", this.context.nameOnCard);
    _common_payment_method__WEBPACK_IMPORTED_MODULE_12__["Validators"].setCvvValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"cvv\"]", this.context.cvv, function () {
      return cardType;
    }); // Set of credit card format

    _common_payment_method__WEBPACK_IMPORTED_MODULE_12__["Formatters"].setCreditCardNumberFormat(paymentMethodSelector + " input[name=\"credit_card_number\"]");
    _common_payment_method__WEBPACK_IMPORTED_MODULE_12__["Formatters"].setExpirationFormat(paymentMethodSelector + " input[name=\"expiration\"]"); // Billing address validation

    paymentMethodValidator.add(validationModel);
    $paymentMethodForm.on('submit', function (event) {
      event.preventDefault(); // Perform final form validation

      paymentMethodValidator.performCheck();

      if (paymentMethodValidator.areAll('valid')) {
        // Serialize form data and reduce it to object
        var data = lodash_reduce__WEBPACK_IMPORTED_MODULE_1___default()($paymentMethodForm.serializeArray(), function (obj, item) {
          var refObj = obj;
          refObj[item.name] = item.value;
          return refObj;
        }, {}); // Assign country and state code


        var country = lodash_find__WEBPACK_IMPORTED_MODULE_0___default()(_this3.context.countries, function (_ref2) {
          var value = _ref2.value;
          return value === data.country;
        });

        var state = country && lodash_find__WEBPACK_IMPORTED_MODULE_0___default()(country.states, function (_ref3) {
          var value = _ref3.value;
          return value === data.state;
        });

        data.country_code = country ? country.code : data.country;
        data.state_or_province_code = state ? state.code : data.state; // Default Instrument

        data.default_instrument = !!data.default_instrument; // Store credit card

        Object(_common_payment_method__WEBPACK_IMPORTED_MODULE_12__["storeInstrument"])(_this3.context, data, function () {
          window.location.href = _this3.context.paymentMethodsUrl;
        }, function () {
          _global_sweet_alert__WEBPACK_IMPORTED_MODULE_13__["default"].fire({
            text: _this3.context.generic_error,
            icon: 'error'
          });
        });
      }
    });
  };

  _proto.registerEditAccountValidation = function registerEditAccountValidation($editAccountForm) {
    var validationModel = Object(_common_form_validation__WEBPACK_IMPORTED_MODULE_9__["default"])($editAccountForm);
    var formEditSelector = 'form[data-edit-account-form]';
    var editValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_7__["default"])({
      submit: '${formEditSelector} input[type="submit"]'
    });
    var emailSelector = formEditSelector + " [data-field-type=\"EmailAddress\"]";
    var $emailElement = $(emailSelector);
    var passwordSelector = formEditSelector + " [data-field-type=\"Password\"]";
    var $passwordElement = $(passwordSelector);
    var password2Selector = formEditSelector + " [data-field-type=\"ConfirmPassword\"]";
    var $password2Element = $(password2Selector);
    var currentPasswordSelector = formEditSelector + " [data-field-type=\"CurrentPassword\"]";
    var $currentPassword = $(currentPasswordSelector); // This only handles the custom fields, standard fields are added below

    editValidator.add(validationModel);

    if ($emailElement) {
      editValidator.remove(emailSelector);
      _common_form_utils__WEBPACK_IMPORTED_MODULE_11__["Validators"].setEmailValidation(editValidator, emailSelector);
    }

    if ($passwordElement && $password2Element) {
      editValidator.remove(passwordSelector);
      editValidator.remove(password2Selector);
      _common_form_utils__WEBPACK_IMPORTED_MODULE_11__["Validators"].setPasswordValidation(editValidator, passwordSelector, password2Selector, this.passwordRequirements, true);
    }

    if ($currentPassword) {
      editValidator.add({
        selector: currentPasswordSelector,
        validate: function validate(cb, val) {
          var result = true;

          if (val === '' && $passwordElement.val() !== '') {
            result = false;
          }

          cb(result);
        },
        errorMessage: this.context.currentPassword
      });
    }

    editValidator.add([{
      selector: formEditSelector + " input[name='account_firstname']",
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.firstName
    }, {
      selector: formEditSelector + " input[name='account_lastname']",
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.lastName
    }]);
    $editAccountForm.on('submit', function (event) {
      editValidator.performCheck();

      if (editValidator.areAll('valid')) {
        return;
      }

      event.preventDefault();
    });
  };

  _proto.registerInboxValidation = function registerInboxValidation($inboxForm) {
    var inboxValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_7__["default"])({
      submit: 'form[data-inbox-form] input[type="submit"]'
    });
    inboxValidator.add([{
      selector: 'form[data-inbox-form] select[name="message_order_id"]',
      validate: function validate(cb, val) {
        var result = Number(val) !== 0;
        cb(result);
      },
      errorMessage: this.context.enterOrderNum
    }, {
      selector: 'form[data-inbox-form] input[name="message_subject"]',
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.enterSubject
    }, {
      selector: 'form[data-inbox-form] textarea[name="message_content"]',
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.enterMessage
    }]);
    $inboxForm.on('submit', function (event) {
      inboxValidator.performCheck();

      if (inboxValidator.areAll('valid')) {
        return;
      }

      event.preventDefault();
    });
  };

  return Account;
}(_page_manager__WEBPACK_IMPORTED_MODULE_6__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/form-validation.js":
/*!***************************************************!*\
  !*** ./assets/js/theme/common/form-validation.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__);







/**
 * Validate that the given date for the day/month/year select inputs is within potential range
 * @param $formField
 * @param validation
 * @returns {{selector: string, triggeredBy: string, validate: Function, errorMessage: string}}
 */
function buildDateValidation($formField, validation) {
  // No date range restriction, skip
  if (validation.min_date && validation.max_date) {
    var invalidMessage = "Your chosen date must fall between " + validation.min_date + " and " + validation.max_date + ".";
    var formElementId = $formField.attr('id');
    var minSplit = validation.min_date.split('-');
    var maxSplit = validation.max_date.split('-');
    var minDate = new Date(minSplit[0], minSplit[1] - 1, minSplit[2]);
    var maxDate = new Date(maxSplit[0], maxSplit[1] - 1, maxSplit[2]);
    return {
      selector: "#" + formElementId + " select[data-label=\"year\"]",
      triggeredBy: "#" + formElementId + " select:not([data-label=\"year\"])",
      validate: function validate(cb, val) {
        var day = Number($formField.find('select[data-label="day"]').val());
        var month = Number($formField.find('select[data-label="month"]').val()) - 1;
        var year = Number(val);
        var chosenDate = new Date(year, month, day);
        cb(chosenDate >= minDate && chosenDate <= maxDate);
      },
      errorMessage: invalidMessage
    };
  }
}
/**
 * We validate checkboxes separately from single input fields, as they must have at least one checked option
 * from many different inputs
 * @param $formField
 * @param validation
 */


function buildRequiredCheckboxValidation($formField, validation) {
  var formFieldId = $formField.attr('id');
  var primarySelector = "#" + formFieldId + " input:first-of-type";
  var secondarySelector = "#" + formFieldId + " input";
  return {
    selector: primarySelector,
    triggeredBy: secondarySelector,
    validate: function validate(cb) {
      var result = false;
      $(secondarySelector).each(function (index, checkbox) {
        if (checkbox.checked) {
          result = true;
          return false;
        }
      });
      cb(result);
    },
    errorMessage: "The '" + validation.label + "' field cannot be blank."
  };
}

function buildRequiredValidation(validation, selector) {
  return {
    selector: selector,
    validate: function validate(cb, val) {
      cb(val.length > 0);
    },
    errorMessage: "The '" + validation.label + "' field cannot be blank."
  };
}

function buildNumberRangeValidation(validation, formFieldSelector) {
  var invalidMessage = "The value for " + validation.label + " must be between " + validation.min + " and " + validation.max + ".";
  var min = Number(validation.min);
  var max = Number(validation.max);
  return {
    selector: formFieldSelector + " input[name=\"" + validation.name + "\"]",
    validate: function validate(cb, val) {
      var numberVal = Number(val);
      cb(numberVal >= min && numberVal <= max);
    },
    errorMessage: invalidMessage
  };
}

function buildValidation($validateableElement) {
  var validation = $validateableElement.data('validation');
  var fieldValidations = [];
  var formFieldSelector = "#" + $validateableElement.attr('id');

  if (validation.type === 'datechooser') {
    var dateValidation = buildDateValidation($validateableElement, validation);

    if (dateValidation) {
      fieldValidations.push(dateValidation);
    }
  } else if (validation.required && (validation.type === 'checkboxselect' || validation.type === 'radioselect')) {
    fieldValidations.push(buildRequiredCheckboxValidation($validateableElement, validation));
  } else {
    $validateableElement.find('input, select, textarea').each(function (index, element) {
      var $inputElement = $(element);
      var tagName = $inputElement.get(0).tagName;
      var inputName = $inputElement.attr('name');
      var elementSelector = formFieldSelector + " " + tagName + "[name=\"" + inputName + "\"]";

      if (validation.type === 'numberonly') {
        fieldValidations.push(buildNumberRangeValidation(validation, formFieldSelector));
      }

      if (validation.required) {
        fieldValidations.push(buildRequiredValidation(validation, elementSelector));
      }
    });
  }

  return fieldValidations;
}
/**
 * Builds the validation model for dynamic forms
 * @param $form
 * @returns {Array}
 */


/* harmony default export */ __webpack_exports__["default"] = (function ($form) {
  var validationsToPerform = [];
  $form.find('[data-validation]').each(function (index, input) {
    validationsToPerform = validationsToPerform.concat(buildValidation($(input)));
  });
  return validationsToPerform;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/payment-method.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/common/payment-method.js ***!
  \**************************************************/
/*! exports provided: creditCardType, storeInstrument, Formatters, Validators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "creditCardType", function() { return creditCardType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeInstrument", function() { return storeInstrument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Formatters", function() { return Formatters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validators", function() { return Validators; });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var creditcards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! creditcards */ "./node_modules/creditcards/index.js");
/* harmony import */ var creditcards__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(creditcards__WEBPACK_IMPORTED_MODULE_4__);





/**
 * Omit null or empty string properties of object
 * @param {Object} object
 * @returns {Object}
 */

var omitNullString = function omitNullString(obj) {
  var refObj = obj;
  $.each(refObj, function (key, value) {
    if (value === null || value === '') {
      delete refObj[key];
    }
  });
  return refObj;
};
/**
 * Get credit card type from credit card number
 * @param {string} value
 */


var creditCardType = function creditCardType(value) {
  return creditcards__WEBPACK_IMPORTED_MODULE_4___default.a.card.type(creditcards__WEBPACK_IMPORTED_MODULE_4___default.a.card.parse(value), true);
};
/**
 * Wrapper for ajax request to store a new instrument in bigpay
 * @param {object} Representing the data needed for the header
 * @param {object} Representing the data needed for the body
 * @param {function} done Function to execute on a successful response
 * @param {function} fail Function to execute on a unsuccessful response
 */

var storeInstrument = function storeInstrument(_ref, _ref2, done, fail) {
  var paymentsUrl = _ref.paymentsUrl,
      shopperId = _ref.shopperId,
      storeHash = _ref.storeHash,
      vaultToken = _ref.vaultToken;
  var provider_id = _ref2.provider_id,
      currency_code = _ref2.currency_code,
      credit_card_number = _ref2.credit_card_number,
      expiration = _ref2.expiration,
      name_on_card = _ref2.name_on_card,
      cvv = _ref2.cvv,
      default_instrument = _ref2.default_instrument,
      address1 = _ref2.address1,
      address2 = _ref2.address2,
      city = _ref2.city,
      postal_code = _ref2.postal_code,
      state_or_province_code = _ref2.state_or_province_code,
      country_code = _ref2.country_code,
      company = _ref2.company,
      first_name = _ref2.first_name,
      last_name = _ref2.last_name,
      email = _ref2.email,
      phone = _ref2.phone;
  var expiry = expiration.split('/');
  $.ajax({
    url: paymentsUrl + "/stores/" + storeHash + "/customers/" + shopperId + "/stored_instruments",
    dataType: 'json',
    method: 'POST',
    cache: false,
    headers: {
      Authorization: vaultToken,
      Accept: 'application/vnd.bc.v1+json',
      'Content-Type': 'application/vnd.bc.v1+json'
    },
    data: JSON.stringify({
      instrument: {
        type: 'card',
        cardholder_name: name_on_card,
        number: creditcards__WEBPACK_IMPORTED_MODULE_4___default.a.card.parse(credit_card_number),
        expiry_month: creditcards__WEBPACK_IMPORTED_MODULE_4___default.a.expiration.month.parse(expiry[0]),
        expiry_year: creditcards__WEBPACK_IMPORTED_MODULE_4___default.a.expiration.year.parse(expiry[1], true),
        verification_value: cvv
      },
      billing_address: omitNullString({
        address1: address1,
        address2: address2,
        city: city,
        postal_code: postal_code,
        state_or_province_code: state_or_province_code,
        country_code: country_code,
        company: company,
        first_name: first_name,
        last_name: last_name,
        email: email,
        phone: phone
      }),
      provider_id: provider_id,
      default_instrument: default_instrument,
      currency_code: currency_code
    })
  }).done(done).fail(fail);
};
var Formatters = {
  /**
   * Sets up a format for credit card number
   * @param field
   */
  setCreditCardNumberFormat: function setCreditCardNumberFormat(field) {
    if (field) {
      $(field).on('keyup', function (_ref3) {
        var target = _ref3.target;
        var refTarget = target;
        refTarget.value = creditcards__WEBPACK_IMPORTED_MODULE_4___default.a.card.format(creditcards__WEBPACK_IMPORTED_MODULE_4___default.a.card.parse(target.value));
      });
    }
  },

  /**
   * Sets up a format for expiration date
   * @param field
   */
  setExpirationFormat: function setExpirationFormat(field) {
    if (field) {
      $(field).on('keyup', function (_ref4) {
        var target = _ref4.target,
            which = _ref4.which;
        var refTarget = target;

        if (which === 8 && /.*(\/)$/.test(target.value)) {
          refTarget.value = target.value.slice(0, -1);
        } else if (target.value.length > 4) {
          refTarget.value = target.value.slice(0, 5);
        } else if (which !== 8) {
          refTarget.value = target.value.replace(/^([1-9]\/|[2-9])$/g, '0$1/').replace(/^(0[1-9]|1[0-2])$/g, '$1/').replace(/^([0-1])([3-9])$/g, '0$1/$2').replace(/^(0[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2').replace(/^([0]+)\/|[0]+$/g, '0').replace(/[^\d\/]|^[\/]*$/g, '').replace(/\/\//g, '/');
        }
      });
    }
  }
};
var Validators = {
  /**
   * Sets up a validation for credit card number
   * @param validator
   * @param field
   * @param errorMessage
   */
  setCreditCardNumberValidation: function setCreditCardNumberValidation(validator, field, errorMessage) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var result = val.length && creditcards__WEBPACK_IMPORTED_MODULE_4___default.a.card.isValid(creditcards__WEBPACK_IMPORTED_MODULE_4___default.a.card.parse(val));
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  },

  /**
   * Sets up a validation for expiration date
   * @param validator
   * @param field
   * @param errorMessage
   */
  setExpirationValidation: function setExpirationValidation(validator, field, errorMessage) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var expiry = val.split('/');
          var result = val.length && /^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(val);
          result = result && !creditcards__WEBPACK_IMPORTED_MODULE_4___default.a.expiration.isPast(creditcards__WEBPACK_IMPORTED_MODULE_4___default.a.expiration.month.parse(expiry[0]), creditcards__WEBPACK_IMPORTED_MODULE_4___default.a.expiration.year.parse(expiry[1], true));
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  },

  /**
   * Sets up a validation for name on card
   * @param validator
   * @param field
   * @param errorMessage
   */
  setNameOnCardValidation: function setNameOnCardValidation(validator, field, errorMessage) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var result = !!val.length;
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  },

  /**
   * Sets up a validation for cvv
   * @param validator
   * @param field
   * @param errorMessage
   * @param {any} cardType The credit card number type
   */
  setCvvValidation: function setCvvValidation(validator, field, errorMessage, cardType) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var type = typeof cardType === 'function' ? cardType() : cardType;
          var result = val.length && creditcards__WEBPACK_IMPORTED_MODULE_4___default.a.cvc.isValid(val, type);
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/global/sweet-alert.js":
/*!***********************************************!*\
  !*** ./assets/js/theme/global/sweet-alert.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.weak-map.js */ "./node_modules/core-js/modules/es.weak-map.js");
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var weakmap_polyfill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! weakmap-polyfill */ "./node_modules/weakmap-polyfill/weakmap-polyfill.js");
/* harmony import */ var weakmap_polyfill__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(weakmap_polyfill__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.min.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);






 // WeakMap will defined in the global scope if native WeakMap is not supported.

var weakMap = new WeakMap(); // eslint-disable-line no-unused-vars
// Set defaults for sweetalert2 popup boxes

var Swal = sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.mixin({
  buttonsStyling: false,
  customClass: {
    confirmButton: 'button',
    cancelButton: 'button'
  }
}); // Re-export

/* harmony default export */ __webpack_exports__["default"] = (Swal);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvYWNjb3VudC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2Zvcm0tdmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3BheW1lbnQtbWV0aG9kLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9nbG9iYWwvc3dlZXQtYWxlcnQuanMiXSwibmFtZXMiOlsiQWNjb3VudCIsImNvbnRleHQiLCIkc3RhdGUiLCIkIiwiJGJvZHkiLCJvblJlYWR5IiwiJGVkaXRBY2NvdW50Rm9ybSIsImNsYXNzaWZ5Rm9ybSIsIiRhZGRyZXNzRm9ybSIsIiRpbmJveEZvcm0iLCIkYWNjb3VudFJldHVybkZvcm0iLCIkcGF5bWVudE1ldGhvZEZvcm0iLCIkcmVvcmRlckZvcm0iLCIkaW52b2ljZUJ1dHRvbiIsInBhc3N3b3JkUmVxdWlyZW1lbnRzIiwiV2lzaGxpc3QiLCJsb2FkIiwibGVuZ3RoIiwicmVnaXN0ZXJFZGl0QWNjb3VudFZhbGlkYXRpb24iLCJpcyIsImluc2VydFN0YXRlSGlkZGVuRmllbGQiLCJvbiIsImxlZnQiLCJ3aW5kb3ciLCJzY3JlZW4iLCJhdmFpbFdpZHRoIiwidG9wIiwiYXZhaWxIZWlnaHQiLCJ1cmwiLCJkYXRhIiwib3BlbiIsImluaXRBZGRyZXNzRm9ybVZhbGlkYXRpb24iLCJyZWdpc3RlckluYm94VmFsaWRhdGlvbiIsImluaXRBY2NvdW50UmV0dXJuRm9ybVZhbGlkYXRpb24iLCJpbml0UGF5bWVudE1ldGhvZEZvcm1WYWxpZGF0aW9uIiwiaW5pdFJlb3JkZXJGb3JtIiwiYmluZERlbGV0ZUFkZHJlc3MiLCJiaW5kRGVsZXRlUGF5bWVudE1ldGhvZCIsImV2ZW50IiwibWVzc2FnZSIsImN1cnJlbnRUYXJnZXQiLCJjb25maXJtIiwicHJldmVudERlZmF1bHQiLCIkcHJvZHVjdFJlb3JkZXJDaGVja2JveGVzIiwic3VibWl0Rm9ybSIsImZpbmQiLCJyZW1vdmUiLCJlYWNoIiwiaW5kZXgiLCJwcm9kdWN0Q2hlY2tib3giLCJwcm9kdWN0SWQiLCJ2YWwiLCIkaW5wdXQiLCJ0eXBlIiwibmFtZSIsInZhbHVlIiwiYXBwZW5kIiwic3dhbCIsImZpcmUiLCJ0ZXh0Iiwic2VsZWN0SXRlbSIsImljb24iLCJ2YWxpZGF0aW9uTW9kZWwiLCJ2YWxpZGF0aW9uIiwic3RhdGVTZWxlY3RvciIsIiRzdGF0ZUVsZW1lbnQiLCJhZGRyZXNzVmFsaWRhdG9yIiwibm9kIiwic3VibWl0IiwiYWRkIiwiJGxhc3QiLCJzdGF0ZUNvdW50cnkiLCJlcnIiLCJmaWVsZCIsIkVycm9yIiwiJGZpZWxkIiwiZ2V0U3RhdHVzIiwiVmFsaWRhdG9ycyIsInNldFN0YXRlQ291bnRyeVZhbGlkYXRpb24iLCJjbGVhblVwU3RhdGVWYWxpZGF0aW9uIiwicGVyZm9ybUNoZWNrIiwiYXJlQWxsIiwiZXJyb3JNZXNzYWdlIiwiZm9ybVN1Ym1pdCIsImkiLCJlbGUiLCJwYXJzZUludCIsImF0dHIiLCJmaXJzdE5hbWVMYWJlbCIsImxhc3ROYW1lTGFiZWwiLCJjb21wYW55TGFiZWwiLCJwaG9uZUxhYmVsIiwiYWRkcmVzczFMYWJlbCIsImFkZHJlc3MyTGFiZWwiLCJjaXR5TGFiZWwiLCJjb3VudHJ5TGFiZWwiLCJjaG9vc2VDb3VudHJ5TGFiZWwiLCJzdGF0ZUxhYmVsIiwicG9zdGFsQ29kZUxhYmVsIiwicGF5bWVudE1ldGhvZFNlbGVjdG9yIiwicGF5bWVudE1ldGhvZFZhbGlkYXRvciIsImNhcmRUeXBlIiwidGFyZ2V0IiwiY3JlZGl0Q2FyZFR5cGUiLCJzaWJsaW5ncyIsImNzcyIsIkNDVmFsaWRhdG9ycyIsInNldENyZWRpdENhcmROdW1iZXJWYWxpZGF0aW9uIiwiY3JlZGl0Q2FyZE51bWJlciIsInNldEV4cGlyYXRpb25WYWxpZGF0aW9uIiwiZXhwaXJhdGlvbiIsInNldE5hbWVPbkNhcmRWYWxpZGF0aW9uIiwibmFtZU9uQ2FyZCIsInNldEN2dlZhbGlkYXRpb24iLCJjdnYiLCJDQ0Zvcm1hdHRlcnMiLCJzZXRDcmVkaXRDYXJkTnVtYmVyRm9ybWF0Iiwic2V0RXhwaXJhdGlvbkZvcm1hdCIsInNlcmlhbGl6ZUFycmF5Iiwib2JqIiwiaXRlbSIsInJlZk9iaiIsImNvdW50cnkiLCJjb3VudHJpZXMiLCJzdGF0ZSIsInN0YXRlcyIsImNvdW50cnlfY29kZSIsImNvZGUiLCJzdGF0ZV9vcl9wcm92aW5jZV9jb2RlIiwiZGVmYXVsdF9pbnN0cnVtZW50Iiwic3RvcmVJbnN0cnVtZW50IiwibG9jYXRpb24iLCJocmVmIiwicGF5bWVudE1ldGhvZHNVcmwiLCJnZW5lcmljX2Vycm9yIiwiZm9ybUVkaXRTZWxlY3RvciIsImVkaXRWYWxpZGF0b3IiLCJlbWFpbFNlbGVjdG9yIiwiJGVtYWlsRWxlbWVudCIsInBhc3N3b3JkU2VsZWN0b3IiLCIkcGFzc3dvcmRFbGVtZW50IiwicGFzc3dvcmQyU2VsZWN0b3IiLCIkcGFzc3dvcmQyRWxlbWVudCIsImN1cnJlbnRQYXNzd29yZFNlbGVjdG9yIiwiJGN1cnJlbnRQYXNzd29yZCIsInNldEVtYWlsVmFsaWRhdGlvbiIsInNldFBhc3N3b3JkVmFsaWRhdGlvbiIsInNlbGVjdG9yIiwidmFsaWRhdGUiLCJjYiIsInJlc3VsdCIsImN1cnJlbnRQYXNzd29yZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiaW5ib3hWYWxpZGF0b3IiLCJOdW1iZXIiLCJlbnRlck9yZGVyTnVtIiwiZW50ZXJTdWJqZWN0IiwiZW50ZXJNZXNzYWdlIiwiUGFnZU1hbmFnZXIiLCJidWlsZERhdGVWYWxpZGF0aW9uIiwiJGZvcm1GaWVsZCIsIm1pbl9kYXRlIiwibWF4X2RhdGUiLCJpbnZhbGlkTWVzc2FnZSIsImZvcm1FbGVtZW50SWQiLCJtaW5TcGxpdCIsInNwbGl0IiwibWF4U3BsaXQiLCJtaW5EYXRlIiwiRGF0ZSIsIm1heERhdGUiLCJ0cmlnZ2VyZWRCeSIsImRheSIsIm1vbnRoIiwieWVhciIsImNob3NlbkRhdGUiLCJidWlsZFJlcXVpcmVkQ2hlY2tib3hWYWxpZGF0aW9uIiwiZm9ybUZpZWxkSWQiLCJwcmltYXJ5U2VsZWN0b3IiLCJzZWNvbmRhcnlTZWxlY3RvciIsImNoZWNrYm94IiwiY2hlY2tlZCIsImxhYmVsIiwiYnVpbGRSZXF1aXJlZFZhbGlkYXRpb24iLCJidWlsZE51bWJlclJhbmdlVmFsaWRhdGlvbiIsImZvcm1GaWVsZFNlbGVjdG9yIiwibWluIiwibWF4IiwibnVtYmVyVmFsIiwiYnVpbGRWYWxpZGF0aW9uIiwiJHZhbGlkYXRlYWJsZUVsZW1lbnQiLCJmaWVsZFZhbGlkYXRpb25zIiwiZGF0ZVZhbGlkYXRpb24iLCJwdXNoIiwicmVxdWlyZWQiLCJlbGVtZW50IiwiJGlucHV0RWxlbWVudCIsInRhZ05hbWUiLCJnZXQiLCJpbnB1dE5hbWUiLCJlbGVtZW50U2VsZWN0b3IiLCIkZm9ybSIsInZhbGlkYXRpb25zVG9QZXJmb3JtIiwiaW5wdXQiLCJjb25jYXQiLCJvbWl0TnVsbFN0cmluZyIsImtleSIsImNyZWRpdGNhcmRzIiwiY2FyZCIsInBhcnNlIiwiZG9uZSIsImZhaWwiLCJwYXltZW50c1VybCIsInNob3BwZXJJZCIsInN0b3JlSGFzaCIsInZhdWx0VG9rZW4iLCJwcm92aWRlcl9pZCIsImN1cnJlbmN5X2NvZGUiLCJjcmVkaXRfY2FyZF9udW1iZXIiLCJuYW1lX29uX2NhcmQiLCJhZGRyZXNzMSIsImFkZHJlc3MyIiwiY2l0eSIsInBvc3RhbF9jb2RlIiwiY29tcGFueSIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJlbWFpbCIsInBob25lIiwiZXhwaXJ5IiwiYWpheCIsImRhdGFUeXBlIiwibWV0aG9kIiwiY2FjaGUiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsIkFjY2VwdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJpbnN0cnVtZW50IiwiY2FyZGhvbGRlcl9uYW1lIiwibnVtYmVyIiwiZXhwaXJ5X21vbnRoIiwiZXhwaXJ5X3llYXIiLCJ2ZXJpZmljYXRpb25fdmFsdWUiLCJiaWxsaW5nX2FkZHJlc3MiLCJGb3JtYXR0ZXJzIiwicmVmVGFyZ2V0IiwiZm9ybWF0Iiwid2hpY2giLCJ0ZXN0Iiwic2xpY2UiLCJyZXBsYWNlIiwidmFsaWRhdG9yIiwiaXNWYWxpZCIsImlzUGFzdCIsImN2YyIsIndlYWtNYXAiLCJXZWFrTWFwIiwiU3dhbCIsInN3ZWV0QWxlcnQiLCJtaXhpbiIsImJ1dHRvbnNTdHlsaW5nIiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwiY2FuY2VsQnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFcUJBLE87OztBQUNqQixtQkFBWUMsT0FBWixFQUFxQjtBQUFBOztBQUNqQixvQ0FBTUEsT0FBTjtBQUVBLFVBQUtDLE1BQUwsR0FBY0MsQ0FBQyxDQUFDLDJCQUFELENBQWY7QUFDQSxVQUFLQyxLQUFMLEdBQWFELENBQUMsQ0FBQyxNQUFELENBQWQ7QUFKaUI7QUFLcEI7Ozs7U0FFREUsTyxHQUFBLG1CQUFVO0FBQ04sUUFBTUMsZ0JBQWdCLEdBQUdDLHdFQUFZLENBQUMsOEJBQUQsQ0FBckM7QUFDQSxRQUFNQyxZQUFZLEdBQUdELHdFQUFZLENBQUMseUJBQUQsQ0FBakM7QUFDQSxRQUFNRSxVQUFVLEdBQUdGLHdFQUFZLENBQUMsdUJBQUQsQ0FBL0I7QUFDQSxRQUFNRyxrQkFBa0IsR0FBR0gsd0VBQVksQ0FBQyw0QkFBRCxDQUF2QztBQUNBLFFBQU1JLGtCQUFrQixHQUFHSix3RUFBWSxDQUFDLGdDQUFELENBQXZDO0FBQ0EsUUFBTUssWUFBWSxHQUFHTCx3RUFBWSxDQUFDLDZCQUFELENBQWpDO0FBQ0EsUUFBTU0sY0FBYyxHQUFHVixDQUFDLENBQUMsc0JBQUQsQ0FBeEIsQ0FQTSxDQVNOOztBQUNBLFNBQUtXLG9CQUFMLEdBQTRCLEtBQUtiLE9BQUwsQ0FBYWEsb0JBQXpDLENBVk0sQ0FZTjs7QUFDQUMscURBQVEsQ0FBQ0MsSUFBVCxDQUFjLEtBQUtmLE9BQW5COztBQUVBLFFBQUlLLGdCQUFnQixDQUFDVyxNQUFyQixFQUE2QjtBQUN6QixXQUFLQyw2QkFBTCxDQUFtQ1osZ0JBQW5DOztBQUNBLFVBQUksS0FBS0osTUFBTCxDQUFZaUIsRUFBWixDQUFlLE9BQWYsQ0FBSixFQUE2QjtBQUN6QkMsMEZBQXNCLENBQUMsS0FBS2xCLE1BQU4sQ0FBdEI7QUFDSDtBQUNKOztBQUVELFFBQUlXLGNBQWMsQ0FBQ0ksTUFBbkIsRUFBMkI7QUFDdkJKLG9CQUFjLENBQUNRLEVBQWYsQ0FBa0IsT0FBbEIsRUFBMkIsWUFBTTtBQUM3QixZQUFNQyxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxVQUFkLEdBQTJCLENBQTNCLEdBQStCLEdBQTVDO0FBQ0EsWUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNDLE1BQVAsQ0FBY0csV0FBZCxHQUE0QixDQUE1QixHQUFnQyxHQUE1QztBQUNBLFlBQU1DLEdBQUcsR0FBR2YsY0FBYyxDQUFDZ0IsSUFBZixDQUFvQixjQUFwQixDQUFaO0FBRUFOLGNBQU0sQ0FBQ08sSUFBUCxDQUFZRixHQUFaLEVBQWlCLGNBQWpCLGlDQUE4RE4sSUFBOUQsYUFBMEVJLEdBQTFFO0FBQ0gsT0FORDtBQU9IOztBQUVELFFBQUlsQixZQUFZLENBQUNTLE1BQWpCLEVBQXlCO0FBQ3JCLFdBQUtjLHlCQUFMLENBQStCdkIsWUFBL0I7O0FBRUEsVUFBSSxLQUFLTixNQUFMLENBQVlpQixFQUFaLENBQWUsT0FBZixDQUFKLEVBQTZCO0FBQ3pCQywwRkFBc0IsQ0FBQyxLQUFLbEIsTUFBTixDQUF0QjtBQUNIO0FBQ0o7O0FBRUQsUUFBSU8sVUFBVSxDQUFDUSxNQUFmLEVBQXVCO0FBQ25CLFdBQUtlLHVCQUFMLENBQTZCdkIsVUFBN0I7QUFDSDs7QUFFRCxRQUFJQyxrQkFBa0IsQ0FBQ08sTUFBdkIsRUFBK0I7QUFDM0IsV0FBS2dCLCtCQUFMLENBQXFDdkIsa0JBQXJDO0FBQ0g7O0FBRUQsUUFBSUMsa0JBQWtCLENBQUNNLE1BQXZCLEVBQStCO0FBQzNCLFdBQUtpQiwrQkFBTCxDQUFxQ3ZCLGtCQUFyQztBQUNIOztBQUVELFFBQUlDLFlBQVksQ0FBQ0ssTUFBakIsRUFBeUI7QUFDckIsV0FBS2tCLGVBQUwsQ0FBcUJ2QixZQUFyQjtBQUNIOztBQUVELFNBQUt3QixpQkFBTDtBQUNBLFNBQUtDLHVCQUFMO0FBQ0g7QUFFRDtBQUNKO0FBQ0E7OztTQUNJRCxpQixHQUFBLDZCQUFvQjtBQUNoQmpDLEtBQUMsQ0FBQyx1QkFBRCxDQUFELENBQTJCa0IsRUFBM0IsQ0FBOEIsUUFBOUIsRUFBd0MsVUFBQWlCLEtBQUssRUFBSTtBQUM3QyxVQUFNQyxPQUFPLEdBQUdwQyxDQUFDLENBQUNtQyxLQUFLLENBQUNFLGFBQVAsQ0FBRCxDQUF1QlgsSUFBdkIsQ0FBNEIsZUFBNUIsQ0FBaEI7O0FBRUEsVUFBSSxDQUFDTixNQUFNLENBQUNrQixPQUFQLENBQWVGLE9BQWYsQ0FBTCxFQUE4QjtBQUMxQkQsYUFBSyxDQUFDSSxjQUFOO0FBQ0g7QUFDSixLQU5EO0FBT0gsRzs7U0FFREwsdUIsR0FBQSxtQ0FBMEI7QUFDdEJsQyxLQUFDLENBQUMsOEJBQUQsQ0FBRCxDQUFrQ2tCLEVBQWxDLENBQXFDLFFBQXJDLEVBQStDLFVBQUFpQixLQUFLLEVBQUk7QUFDcEQsVUFBTUMsT0FBTyxHQUFHcEMsQ0FBQyxDQUFDbUMsS0FBSyxDQUFDRSxhQUFQLENBQUQsQ0FBdUJYLElBQXZCLENBQTRCLHFCQUE1QixDQUFoQjs7QUFFQSxVQUFJLENBQUNOLE1BQU0sQ0FBQ2tCLE9BQVAsQ0FBZUYsT0FBZixDQUFMLEVBQThCO0FBQzFCRCxhQUFLLENBQUNJLGNBQU47QUFDSDtBQUNKLEtBTkQ7QUFPSCxHOztTQUVEUCxlLEdBQUEseUJBQWdCdkIsWUFBaEIsRUFBOEI7QUFBQTs7QUFDMUJBLGdCQUFZLENBQUNTLEVBQWIsQ0FBZ0IsUUFBaEIsRUFBMEIsVUFBQWlCLEtBQUssRUFBSTtBQUMvQixVQUFNSyx5QkFBeUIsR0FBR3hDLENBQUMsQ0FBQywwQ0FBRCxDQUFuQztBQUNBLFVBQUl5QyxVQUFVLEdBQUcsS0FBakI7QUFFQWhDLGtCQUFZLENBQUNpQyxJQUFiLENBQWtCLHVCQUFsQixFQUEyQ0MsTUFBM0M7QUFFQUgsK0JBQXlCLENBQUNJLElBQTFCLENBQStCLFVBQUNDLEtBQUQsRUFBUUMsZUFBUixFQUE0QjtBQUN2RCxZQUFNQyxTQUFTLEdBQUcvQyxDQUFDLENBQUM4QyxlQUFELENBQUQsQ0FBbUJFLEdBQW5CLEVBQWxCO0FBQ0EsWUFBTUMsTUFBTSxHQUFHakQsQ0FBQyxDQUFDLFNBQUQsRUFBWTtBQUN4QmtELGNBQUksRUFBRSxRQURrQjtBQUV4QkMsY0FBSSxtQkFBaUJKLFNBQWpCLE1BRm9CO0FBR3hCSyxlQUFLLEVBQUU7QUFIaUIsU0FBWixDQUFoQjtBQU1BWCxrQkFBVSxHQUFHLElBQWI7QUFFQWhDLG9CQUFZLENBQUM0QyxNQUFiLENBQW9CSixNQUFwQjtBQUNILE9BWEQ7O0FBYUEsVUFBSSxDQUFDUixVQUFMLEVBQWlCO0FBQ2JOLGFBQUssQ0FBQ0ksY0FBTjtBQUNBZSxvRUFBSSxDQUFDQyxJQUFMLENBQVU7QUFDTkMsY0FBSSxFQUFFLE1BQUksQ0FBQzFELE9BQUwsQ0FBYTJELFVBRGI7QUFFTkMsY0FBSSxFQUFFO0FBRkEsU0FBVjtBQUlIO0FBQ0osS0ExQkQ7QUEyQkgsRzs7U0FFRDlCLHlCLEdBQUEsbUNBQTBCdkIsWUFBMUIsRUFBd0M7QUFDcEMsUUFBTXNELGVBQWUsR0FBR0MsdUVBQVUsQ0FBQ3ZELFlBQUQsQ0FBbEM7QUFDQSxRQUFNd0QsYUFBYSxHQUFHLG1EQUF0QjtBQUNBLFFBQU1DLGFBQWEsR0FBRzlELENBQUMsQ0FBQzZELGFBQUQsQ0FBdkI7QUFDQSxRQUFNRSxnQkFBZ0IsR0FBR0MsMkRBQUcsQ0FBQztBQUN6QkMsWUFBTSxFQUFFO0FBRGlCLEtBQUQsQ0FBNUI7QUFJQUYsb0JBQWdCLENBQUNHLEdBQWpCLENBQXFCUCxlQUFyQjs7QUFFQSxRQUFJRyxhQUFKLEVBQW1CO0FBQ2YsVUFBSUssS0FBSixDQURlLENBR2Y7O0FBQ0FDLDRFQUFZLENBQUNOLGFBQUQsRUFBZ0IsS0FBS2hFLE9BQXJCLEVBQThCLFVBQUN1RSxHQUFELEVBQU1DLEtBQU4sRUFBZ0I7QUFDdEQsWUFBSUQsR0FBSixFQUFTO0FBQ0wsZ0JBQU0sSUFBSUUsS0FBSixDQUFVRixHQUFWLENBQU47QUFDSDs7QUFFRCxZQUFNRyxNQUFNLEdBQUd4RSxDQUFDLENBQUNzRSxLQUFELENBQWhCOztBQUVBLFlBQUlQLGdCQUFnQixDQUFDVSxTQUFqQixDQUEyQlgsYUFBM0IsTUFBOEMsV0FBbEQsRUFBK0Q7QUFDM0RDLDBCQUFnQixDQUFDcEIsTUFBakIsQ0FBd0JtQixhQUF4QjtBQUNIOztBQUVELFlBQUlLLEtBQUosRUFBVztBQUNQSiwwQkFBZ0IsQ0FBQ3BCLE1BQWpCLENBQXdCd0IsS0FBeEI7QUFDSDs7QUFFRCxZQUFJSyxNQUFNLENBQUN4RCxFQUFQLENBQVUsUUFBVixDQUFKLEVBQXlCO0FBQ3JCbUQsZUFBSyxHQUFHRyxLQUFSO0FBQ0FJLHdFQUFVLENBQUNDLHlCQUFYLENBQXFDWixnQkFBckMsRUFBdURPLEtBQXZEO0FBQ0gsU0FIRCxNQUdPO0FBQ0hJLHdFQUFVLENBQUNFLHNCQUFYLENBQWtDTixLQUFsQztBQUNIO0FBQ0osT0FyQlcsQ0FBWjtBQXNCSDs7QUFFRGpFLGdCQUFZLENBQUNhLEVBQWIsQ0FBZ0IsUUFBaEIsRUFBMEIsVUFBQWlCLEtBQUssRUFBSTtBQUMvQjRCLHNCQUFnQixDQUFDYyxZQUFqQjs7QUFFQSxVQUFJZCxnQkFBZ0IsQ0FBQ2UsTUFBakIsQ0FBd0IsT0FBeEIsQ0FBSixFQUFzQztBQUNsQztBQUNIOztBQUVEM0MsV0FBSyxDQUFDSSxjQUFOO0FBQ0gsS0FSRDtBQVNILEc7O1NBRURULCtCLEdBQUEseUNBQWdDdkIsa0JBQWhDLEVBQW9EO0FBQ2hELFFBQU13RSxZQUFZLEdBQUd4RSxrQkFBa0IsQ0FBQ21CLElBQW5CLENBQXdCLHdCQUF4QixDQUFyQjtBQUVBbkIsc0JBQWtCLENBQUNXLEVBQW5CLENBQXNCLFFBQXRCLEVBQWdDLFVBQUFpQixLQUFLLEVBQUk7QUFDckMsVUFBSTZDLFVBQVUsR0FBRyxLQUFqQixDQURxQyxDQUdyQzs7QUFDQWhGLE9BQUMsQ0FBQyxzQkFBRCxFQUF5Qk8sa0JBQXpCLENBQUQsQ0FBOENxQyxJQUE5QyxDQUFtRCxVQUFDcUMsQ0FBRCxFQUFJQyxHQUFKLEVBQVk7QUFDM0QsWUFBSUMsUUFBUSxDQUFDbkYsQ0FBQyxDQUFDa0YsR0FBRCxDQUFELENBQU9sQyxHQUFQLEVBQUQsRUFBZSxFQUFmLENBQVIsS0FBK0IsQ0FBbkMsRUFBc0M7QUFDbENnQyxvQkFBVSxHQUFHLElBQWIsQ0FEa0MsQ0FHbEM7O0FBQ0EsaUJBQU8sSUFBUDtBQUNIO0FBQ0osT0FQRDs7QUFTQSxVQUFJQSxVQUFKLEVBQWdCO0FBQ1osZUFBTyxJQUFQO0FBQ0g7O0FBRUQxQixrRUFBSSxDQUFDQyxJQUFMLENBQVU7QUFDTkMsWUFBSSxFQUFFdUIsWUFEQTtBQUVOckIsWUFBSSxFQUFFO0FBRkEsT0FBVjtBQUtBLGFBQU92QixLQUFLLENBQUNJLGNBQU4sRUFBUDtBQUNILEtBdkJEO0FBd0JILEc7O1NBRURSLCtCLEdBQUEseUNBQWdDdkIsa0JBQWhDLEVBQW9EO0FBQUE7O0FBQ2hEO0FBQ0FBLHNCQUFrQixDQUFDa0MsSUFBbkIsQ0FBd0Isd0JBQXhCLEVBQWtEMEMsSUFBbEQsQ0FBdUQsaUJBQXZELGdEQUErRyxLQUFLdEYsT0FBTCxDQUFhdUYsY0FBNUg7QUFDQTdFLHNCQUFrQixDQUFDa0MsSUFBbkIsQ0FBd0IsdUJBQXhCLEVBQWlEMEMsSUFBakQsQ0FBc0QsaUJBQXRELGdEQUE4RyxLQUFLdEYsT0FBTCxDQUFhd0YsYUFBM0g7QUFDQTlFLHNCQUFrQixDQUFDa0MsSUFBbkIsQ0FBd0IscUJBQXhCLEVBQStDMEMsSUFBL0MsQ0FBb0QsaUJBQXBELGdEQUE0RyxLQUFLdEYsT0FBTCxDQUFheUYsWUFBekg7QUFDQS9FLHNCQUFrQixDQUFDa0MsSUFBbkIsQ0FBd0IsbUJBQXhCLEVBQTZDMEMsSUFBN0MsQ0FBa0QsaUJBQWxELGdEQUEwRyxLQUFLdEYsT0FBTCxDQUFhMEYsVUFBdkg7QUFDQWhGLHNCQUFrQixDQUFDa0MsSUFBbkIsQ0FBd0Isc0JBQXhCLEVBQWdEMEMsSUFBaEQsQ0FBcUQsaUJBQXJELGdEQUE2RyxLQUFLdEYsT0FBTCxDQUFhMkYsYUFBMUg7QUFDQWpGLHNCQUFrQixDQUFDa0MsSUFBbkIsQ0FBd0Isc0JBQXhCLEVBQWdEMEMsSUFBaEQsQ0FBcUQsaUJBQXJELGdEQUE2RyxLQUFLdEYsT0FBTCxDQUFhNEYsYUFBMUg7QUFDQWxGLHNCQUFrQixDQUFDa0MsSUFBbkIsQ0FBd0Isa0JBQXhCLEVBQTRDMEMsSUFBNUMsQ0FBaUQsaUJBQWpELGdEQUF5RyxLQUFLdEYsT0FBTCxDQUFhNkYsU0FBdEg7QUFDQW5GLHNCQUFrQixDQUFDa0MsSUFBbkIsQ0FBd0IscUJBQXhCLEVBQStDMEMsSUFBL0MsQ0FBb0QsaUJBQXBELGtEQUE4RyxLQUFLdEYsT0FBTCxDQUFhOEYsWUFBM0gsMENBQXdLLEtBQUs5RixPQUFMLENBQWErRixrQkFBckw7QUFDQXJGLHNCQUFrQixDQUFDa0MsSUFBbkIsQ0FBd0IsbUJBQXhCLEVBQTZDMEMsSUFBN0MsQ0FBa0QsaUJBQWxELGdEQUEwRyxLQUFLdEYsT0FBTCxDQUFhZ0csVUFBdkg7QUFDQXRGLHNCQUFrQixDQUFDa0MsSUFBbkIsQ0FBd0IseUJBQXhCLEVBQW1EMEMsSUFBbkQsQ0FBd0QsaUJBQXhELGdEQUFnSCxLQUFLdEYsT0FBTCxDQUFhaUcsZUFBN0g7QUFFQSxRQUFNcEMsZUFBZSxHQUFHQyx1RUFBVSxDQUFDcEQsa0JBQUQsQ0FBbEM7QUFDQSxRQUFNd0YscUJBQXFCLEdBQUcsZ0NBQTlCO0FBQ0EsUUFBTUMsc0JBQXNCLEdBQUdqQywyREFBRyxDQUFDO0FBQUVDLFlBQU0sRUFBSytCLHFCQUFMO0FBQVIsS0FBRCxDQUFsQztBQUNBLFFBQU1sQyxhQUFhLEdBQUc5RCxDQUFDLENBQUlnRyxxQkFBSixrQ0FBdkI7QUFFQSxRQUFJN0IsS0FBSixDQWxCZ0QsQ0FtQmhEOztBQUNBQywwRUFBWSxDQUFDTixhQUFELEVBQWdCLEtBQUtoRSxPQUFyQixFQUE4QixVQUFDdUUsR0FBRCxFQUFNQyxLQUFOLEVBQWdCO0FBQ3RELFVBQUlELEdBQUosRUFBUztBQUNMLGNBQU0sSUFBSUUsS0FBSixDQUFVRixHQUFWLENBQU47QUFDSDs7QUFFRCxVQUFNRyxNQUFNLEdBQUd4RSxDQUFDLENBQUNzRSxLQUFELENBQWhCOztBQUVBLFVBQUkyQixzQkFBc0IsQ0FBQ3hCLFNBQXZCLENBQWlDWCxhQUFqQyxNQUFvRCxXQUF4RCxFQUFxRTtBQUNqRW1DLDhCQUFzQixDQUFDdEQsTUFBdkIsQ0FBOEJtQixhQUE5QjtBQUNIOztBQUVELFVBQUlLLEtBQUosRUFBVztBQUNQOEIsOEJBQXNCLENBQUN0RCxNQUF2QixDQUE4QndCLEtBQTlCO0FBQ0g7O0FBRUQsVUFBSUssTUFBTSxDQUFDeEQsRUFBUCxDQUFVLFFBQVYsQ0FBSixFQUF5QjtBQUNyQm1ELGFBQUssR0FBR0csS0FBUjtBQUNBSSxzRUFBVSxDQUFDQyx5QkFBWCxDQUFxQ3NCLHNCQUFyQyxFQUE2RDNCLEtBQTdEO0FBQ0gsT0FIRCxNQUdPO0FBQ0hJLHNFQUFVLENBQUNFLHNCQUFYLENBQWtDTixLQUFsQztBQUNIO0FBQ0osS0FyQlcsQ0FBWixDQXBCZ0QsQ0EyQ2hEOztBQUNBLFFBQUk0QixRQUFKO0FBQ0FsRyxLQUFDLENBQUlnRyxxQkFBSix5Q0FBRCxDQUErRDlFLEVBQS9ELENBQWtFLE9BQWxFLEVBQTJFLGdCQUFnQjtBQUFBLFVBQWJpRixNQUFhLFFBQWJBLE1BQWE7QUFDdkZELGNBQVEsR0FBR0UsOEVBQWMsQ0FBQ0QsTUFBTSxDQUFDL0MsS0FBUixDQUF6Qjs7QUFDQSxVQUFJOEMsUUFBSixFQUFjO0FBQ1ZsRyxTQUFDLENBQUlnRyxxQkFBSixtQkFBc0NFLFFBQXRDLFNBQUQsQ0FBcURHLFFBQXJELEdBQWdFQyxHQUFoRSxDQUFvRSxTQUFwRSxFQUErRSxJQUEvRTtBQUNILE9BRkQsTUFFTztBQUNIdEcsU0FBQyxDQUFJZ0cscUJBQUosVUFBRCxDQUFrQ00sR0FBbEMsQ0FBc0MsU0FBdEMsRUFBaUQsR0FBakQ7QUFDSDtBQUNKLEtBUEQsRUE3Q2dELENBc0RoRDs7QUFDQUMsc0VBQVksQ0FBQ0MsNkJBQWIsQ0FBMkNQLHNCQUEzQyxFQUFzRUQscUJBQXRFLDBDQUFnSSxLQUFLbEcsT0FBTCxDQUFhMkcsZ0JBQTdJO0FBQ0FGLHNFQUFZLENBQUNHLHVCQUFiLENBQXFDVCxzQkFBckMsRUFBZ0VELHFCQUFoRSxrQ0FBa0gsS0FBS2xHLE9BQUwsQ0FBYTZHLFVBQS9IO0FBQ0FKLHNFQUFZLENBQUNLLHVCQUFiLENBQXFDWCxzQkFBckMsRUFBZ0VELHFCQUFoRSxvQ0FBb0gsS0FBS2xHLE9BQUwsQ0FBYStHLFVBQWpJO0FBQ0FOLHNFQUFZLENBQUNPLGdCQUFiLENBQThCYixzQkFBOUIsRUFBeURELHFCQUF6RCwyQkFBb0csS0FBS2xHLE9BQUwsQ0FBYWlILEdBQWpILEVBQXNIO0FBQUEsYUFBTWIsUUFBTjtBQUFBLEtBQXRILEVBMURnRCxDQTREaEQ7O0FBQ0FjLHNFQUFZLENBQUNDLHlCQUFiLENBQTBDakIscUJBQTFDO0FBQ0FnQixzRUFBWSxDQUFDRSxtQkFBYixDQUFvQ2xCLHFCQUFwQyxrQ0E5RGdELENBZ0VoRDs7QUFDQUMsMEJBQXNCLENBQUMvQixHQUF2QixDQUEyQlAsZUFBM0I7QUFFQW5ELHNCQUFrQixDQUFDVSxFQUFuQixDQUFzQixRQUF0QixFQUFnQyxVQUFBaUIsS0FBSyxFQUFJO0FBQ3JDQSxXQUFLLENBQUNJLGNBQU4sR0FEcUMsQ0FFckM7O0FBQ0EwRCw0QkFBc0IsQ0FBQ3BCLFlBQXZCOztBQUNBLFVBQUlvQixzQkFBc0IsQ0FBQ25CLE1BQXZCLENBQThCLE9BQTlCLENBQUosRUFBNEM7QUFDeEM7QUFDQSxZQUFNcEQsSUFBSSxHQUFHLHFEQUFTbEIsa0JBQWtCLENBQUMyRyxjQUFuQixFQUFULEVBQThDLFVBQUNDLEdBQUQsRUFBTUMsSUFBTixFQUFlO0FBQ3RFLGNBQU1DLE1BQU0sR0FBR0YsR0FBZjtBQUNBRSxnQkFBTSxDQUFDRCxJQUFJLENBQUNsRSxJQUFOLENBQU4sR0FBb0JrRSxJQUFJLENBQUNqRSxLQUF6QjtBQUNBLGlCQUFPa0UsTUFBUDtBQUNILFNBSlksRUFJVixFQUpVLENBQWIsQ0FGd0MsQ0FReEM7OztBQUNBLFlBQU1DLE9BQU8sR0FBRyxtREFBTyxNQUFJLENBQUN6SCxPQUFMLENBQWEwSCxTQUFwQixFQUErQjtBQUFBLGNBQUdwRSxLQUFILFNBQUdBLEtBQUg7QUFBQSxpQkFBZUEsS0FBSyxLQUFLMUIsSUFBSSxDQUFDNkYsT0FBOUI7QUFBQSxTQUEvQixDQUFoQjs7QUFDQSxZQUFNRSxLQUFLLEdBQUdGLE9BQU8sSUFBSSxtREFBT0EsT0FBTyxDQUFDRyxNQUFmLEVBQXVCO0FBQUEsY0FBR3RFLEtBQUgsU0FBR0EsS0FBSDtBQUFBLGlCQUFlQSxLQUFLLEtBQUsxQixJQUFJLENBQUMrRixLQUE5QjtBQUFBLFNBQXZCLENBQXpCOztBQUNBL0YsWUFBSSxDQUFDaUcsWUFBTCxHQUFvQkosT0FBTyxHQUFHQSxPQUFPLENBQUNLLElBQVgsR0FBa0JsRyxJQUFJLENBQUM2RixPQUFsRDtBQUNBN0YsWUFBSSxDQUFDbUcsc0JBQUwsR0FBOEJKLEtBQUssR0FBR0EsS0FBSyxDQUFDRyxJQUFULEdBQWdCbEcsSUFBSSxDQUFDK0YsS0FBeEQsQ0Fad0MsQ0FjeEM7O0FBQ0EvRixZQUFJLENBQUNvRyxrQkFBTCxHQUEwQixDQUFDLENBQUNwRyxJQUFJLENBQUNvRyxrQkFBakMsQ0Fmd0MsQ0FpQnhDOztBQUNBQyx1RkFBZSxDQUFDLE1BQUksQ0FBQ2pJLE9BQU4sRUFBZTRCLElBQWYsRUFBcUIsWUFBTTtBQUN0Q04sZ0JBQU0sQ0FBQzRHLFFBQVAsQ0FBZ0JDLElBQWhCLEdBQXVCLE1BQUksQ0FBQ25JLE9BQUwsQ0FBYW9JLGlCQUFwQztBQUNILFNBRmMsRUFFWixZQUFNO0FBQ0w1RSxzRUFBSSxDQUFDQyxJQUFMLENBQVU7QUFDTkMsZ0JBQUksRUFBRSxNQUFJLENBQUMxRCxPQUFMLENBQWFxSSxhQURiO0FBRU56RSxnQkFBSSxFQUFFO0FBRkEsV0FBVjtBQUlILFNBUGMsQ0FBZjtBQVFIO0FBQ0osS0EvQkQ7QUFnQ0gsRzs7U0FFRDNDLDZCLEdBQUEsdUNBQThCWixnQkFBOUIsRUFBZ0Q7QUFDNUMsUUFBTXdELGVBQWUsR0FBR0MsdUVBQVUsQ0FBQ3pELGdCQUFELENBQWxDO0FBQ0EsUUFBTWlJLGdCQUFnQixHQUFHLDhCQUF6QjtBQUNBLFFBQU1DLGFBQWEsR0FBR3JFLDJEQUFHLENBQUM7QUFDdEJDLFlBQU0sRUFBRTtBQURjLEtBQUQsQ0FBekI7QUFHQSxRQUFNcUUsYUFBYSxHQUFNRixnQkFBTix3Q0FBbkI7QUFDQSxRQUFNRyxhQUFhLEdBQUd2SSxDQUFDLENBQUNzSSxhQUFELENBQXZCO0FBQ0EsUUFBTUUsZ0JBQWdCLEdBQU1KLGdCQUFOLG9DQUF0QjtBQUNBLFFBQU1LLGdCQUFnQixHQUFHekksQ0FBQyxDQUFDd0ksZ0JBQUQsQ0FBMUI7QUFDQSxRQUFNRSxpQkFBaUIsR0FBTU4sZ0JBQU4sMkNBQXZCO0FBQ0EsUUFBTU8saUJBQWlCLEdBQUczSSxDQUFDLENBQUMwSSxpQkFBRCxDQUEzQjtBQUNBLFFBQU1FLHVCQUF1QixHQUFNUixnQkFBTiwyQ0FBN0I7QUFDQSxRQUFNUyxnQkFBZ0IsR0FBRzdJLENBQUMsQ0FBQzRJLHVCQUFELENBQTFCLENBYjRDLENBZTVDOztBQUNBUCxpQkFBYSxDQUFDbkUsR0FBZCxDQUFrQlAsZUFBbEI7O0FBRUEsUUFBSTRFLGFBQUosRUFBbUI7QUFDZkYsbUJBQWEsQ0FBQzFGLE1BQWQsQ0FBcUIyRixhQUFyQjtBQUNBNUQsb0VBQVUsQ0FBQ29FLGtCQUFYLENBQThCVCxhQUE5QixFQUE2Q0MsYUFBN0M7QUFDSDs7QUFFRCxRQUFJRyxnQkFBZ0IsSUFBSUUsaUJBQXhCLEVBQTJDO0FBQ3ZDTixtQkFBYSxDQUFDMUYsTUFBZCxDQUFxQjZGLGdCQUFyQjtBQUNBSCxtQkFBYSxDQUFDMUYsTUFBZCxDQUFxQitGLGlCQUFyQjtBQUNBaEUsb0VBQVUsQ0FBQ3FFLHFCQUFYLENBQ0lWLGFBREosRUFFSUcsZ0JBRkosRUFHSUUsaUJBSEosRUFJSSxLQUFLL0gsb0JBSlQsRUFLSSxJQUxKO0FBT0g7O0FBRUQsUUFBSWtJLGdCQUFKLEVBQXNCO0FBQ2xCUixtQkFBYSxDQUFDbkUsR0FBZCxDQUFrQjtBQUNkOEUsZ0JBQVEsRUFBRUosdUJBREk7QUFFZEssZ0JBQVEsRUFBRSxrQkFBQ0MsRUFBRCxFQUFLbEcsR0FBTCxFQUFhO0FBQ25CLGNBQUltRyxNQUFNLEdBQUcsSUFBYjs7QUFFQSxjQUFJbkcsR0FBRyxLQUFLLEVBQVIsSUFBY3lGLGdCQUFnQixDQUFDekYsR0FBakIsT0FBMkIsRUFBN0MsRUFBaUQ7QUFDN0NtRyxrQkFBTSxHQUFHLEtBQVQ7QUFDSDs7QUFFREQsWUFBRSxDQUFDQyxNQUFELENBQUY7QUFDSCxTQVZhO0FBV2RwRSxvQkFBWSxFQUFFLEtBQUtqRixPQUFMLENBQWFzSjtBQVhiLE9BQWxCO0FBYUg7O0FBRURmLGlCQUFhLENBQUNuRSxHQUFkLENBQWtCLENBQ2Q7QUFDSThFLGNBQVEsRUFBS1osZ0JBQUwscUNBRFo7QUFFSWEsY0FBUSxFQUFFLGtCQUFDQyxFQUFELEVBQUtsRyxHQUFMLEVBQWE7QUFDbkIsWUFBTW1HLE1BQU0sR0FBR25HLEdBQUcsQ0FBQ2xDLE1BQW5CO0FBRUFvSSxVQUFFLENBQUNDLE1BQUQsQ0FBRjtBQUNILE9BTkw7QUFPSXBFLGtCQUFZLEVBQUUsS0FBS2pGLE9BQUwsQ0FBYXVKO0FBUC9CLEtBRGMsRUFVZDtBQUNJTCxjQUFRLEVBQUtaLGdCQUFMLG9DQURaO0FBRUlhLGNBQVEsRUFBRSxrQkFBQ0MsRUFBRCxFQUFLbEcsR0FBTCxFQUFhO0FBQ25CLFlBQU1tRyxNQUFNLEdBQUduRyxHQUFHLENBQUNsQyxNQUFuQjtBQUVBb0ksVUFBRSxDQUFDQyxNQUFELENBQUY7QUFDSCxPQU5MO0FBT0lwRSxrQkFBWSxFQUFFLEtBQUtqRixPQUFMLENBQWF3SjtBQVAvQixLQVZjLENBQWxCO0FBcUJBbkosb0JBQWdCLENBQUNlLEVBQWpCLENBQW9CLFFBQXBCLEVBQThCLFVBQUFpQixLQUFLLEVBQUk7QUFDbkNrRyxtQkFBYSxDQUFDeEQsWUFBZDs7QUFFQSxVQUFJd0QsYUFBYSxDQUFDdkQsTUFBZCxDQUFxQixPQUFyQixDQUFKLEVBQW1DO0FBQy9CO0FBQ0g7O0FBRUQzQyxXQUFLLENBQUNJLGNBQU47QUFDSCxLQVJEO0FBU0gsRzs7U0FFRFYsdUIsR0FBQSxpQ0FBd0J2QixVQUF4QixFQUFvQztBQUNoQyxRQUFNaUosY0FBYyxHQUFHdkYsMkRBQUcsQ0FBQztBQUN2QkMsWUFBTSxFQUFFO0FBRGUsS0FBRCxDQUExQjtBQUlBc0Ysa0JBQWMsQ0FBQ3JGLEdBQWYsQ0FBbUIsQ0FDZjtBQUNJOEUsY0FBUSxFQUFFLHVEQURkO0FBRUlDLGNBQVEsRUFBRSxrQkFBQ0MsRUFBRCxFQUFLbEcsR0FBTCxFQUFhO0FBQ25CLFlBQU1tRyxNQUFNLEdBQUdLLE1BQU0sQ0FBQ3hHLEdBQUQsQ0FBTixLQUFnQixDQUEvQjtBQUVBa0csVUFBRSxDQUFDQyxNQUFELENBQUY7QUFDSCxPQU5MO0FBT0lwRSxrQkFBWSxFQUFFLEtBQUtqRixPQUFMLENBQWEySjtBQVAvQixLQURlLEVBVWY7QUFDSVQsY0FBUSxFQUFFLHFEQURkO0FBRUlDLGNBQVEsRUFBRSxrQkFBQ0MsRUFBRCxFQUFLbEcsR0FBTCxFQUFhO0FBQ25CLFlBQU1tRyxNQUFNLEdBQUduRyxHQUFHLENBQUNsQyxNQUFuQjtBQUVBb0ksVUFBRSxDQUFDQyxNQUFELENBQUY7QUFDSCxPQU5MO0FBT0lwRSxrQkFBWSxFQUFFLEtBQUtqRixPQUFMLENBQWE0SjtBQVAvQixLQVZlLEVBbUJmO0FBQ0lWLGNBQVEsRUFBRSx3REFEZDtBQUVJQyxjQUFRLEVBQUUsa0JBQUNDLEVBQUQsRUFBS2xHLEdBQUwsRUFBYTtBQUNuQixZQUFNbUcsTUFBTSxHQUFHbkcsR0FBRyxDQUFDbEMsTUFBbkI7QUFFQW9JLFVBQUUsQ0FBQ0MsTUFBRCxDQUFGO0FBQ0gsT0FOTDtBQU9JcEUsa0JBQVksRUFBRSxLQUFLakYsT0FBTCxDQUFhNko7QUFQL0IsS0FuQmUsQ0FBbkI7QUE4QkFySixjQUFVLENBQUNZLEVBQVgsQ0FBYyxRQUFkLEVBQXdCLFVBQUFpQixLQUFLLEVBQUk7QUFDN0JvSCxvQkFBYyxDQUFDMUUsWUFBZjs7QUFFQSxVQUFJMEUsY0FBYyxDQUFDekUsTUFBZixDQUFzQixPQUF0QixDQUFKLEVBQW9DO0FBQ2hDO0FBQ0g7O0FBRUQzQyxXQUFLLENBQUNJLGNBQU47QUFDSCxLQVJEO0FBU0gsRzs7O0VBM2FnQ3FILHFEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTQyxtQkFBVCxDQUE2QkMsVUFBN0IsRUFBeUNsRyxVQUF6QyxFQUFxRDtBQUNqRDtBQUNBLE1BQUlBLFVBQVUsQ0FBQ21HLFFBQVgsSUFBdUJuRyxVQUFVLENBQUNvRyxRQUF0QyxFQUFnRDtBQUM1QyxRQUFNQyxjQUFjLDJDQUF5Q3JHLFVBQVUsQ0FBQ21HLFFBQXBELGFBQW9FbkcsVUFBVSxDQUFDb0csUUFBL0UsTUFBcEI7QUFDQSxRQUFNRSxhQUFhLEdBQUdKLFVBQVUsQ0FBQzFFLElBQVgsQ0FBZ0IsSUFBaEIsQ0FBdEI7QUFDQSxRQUFNK0UsUUFBUSxHQUFHdkcsVUFBVSxDQUFDbUcsUUFBWCxDQUFvQkssS0FBcEIsQ0FBMEIsR0FBMUIsQ0FBakI7QUFDQSxRQUFNQyxRQUFRLEdBQUd6RyxVQUFVLENBQUNvRyxRQUFYLENBQW9CSSxLQUFwQixDQUEwQixHQUExQixDQUFqQjtBQUNBLFFBQU1FLE9BQU8sR0FBRyxJQUFJQyxJQUFKLENBQVNKLFFBQVEsQ0FBQyxDQUFELENBQWpCLEVBQXNCQSxRQUFRLENBQUMsQ0FBRCxDQUFSLEdBQWMsQ0FBcEMsRUFBdUNBLFFBQVEsQ0FBQyxDQUFELENBQS9DLENBQWhCO0FBQ0EsUUFBTUssT0FBTyxHQUFHLElBQUlELElBQUosQ0FBU0YsUUFBUSxDQUFDLENBQUQsQ0FBakIsRUFBc0JBLFFBQVEsQ0FBQyxDQUFELENBQVIsR0FBYyxDQUFwQyxFQUF1Q0EsUUFBUSxDQUFDLENBQUQsQ0FBL0MsQ0FBaEI7QUFFQSxXQUFPO0FBQ0hyQixjQUFRLFFBQU1rQixhQUFOLGlDQURMO0FBRUhPLGlCQUFXLFFBQU1QLGFBQU4sdUNBRlI7QUFHSGpCLGNBQVEsRUFBRSxrQkFBQ0MsRUFBRCxFQUFLbEcsR0FBTCxFQUFhO0FBQ25CLFlBQU0wSCxHQUFHLEdBQUdsQixNQUFNLENBQUNNLFVBQVUsQ0FBQ3BILElBQVgsQ0FBZ0IsMEJBQWhCLEVBQTRDTSxHQUE1QyxFQUFELENBQWxCO0FBQ0EsWUFBTTJILEtBQUssR0FBR25CLE1BQU0sQ0FBQ00sVUFBVSxDQUFDcEgsSUFBWCxDQUFnQiw0QkFBaEIsRUFBOENNLEdBQTlDLEVBQUQsQ0FBTixHQUE4RCxDQUE1RTtBQUNBLFlBQU00SCxJQUFJLEdBQUdwQixNQUFNLENBQUN4RyxHQUFELENBQW5CO0FBQ0EsWUFBTTZILFVBQVUsR0FBRyxJQUFJTixJQUFKLENBQVNLLElBQVQsRUFBZUQsS0FBZixFQUFzQkQsR0FBdEIsQ0FBbkI7QUFFQXhCLFVBQUUsQ0FBQzJCLFVBQVUsSUFBSVAsT0FBZCxJQUF5Qk8sVUFBVSxJQUFJTCxPQUF4QyxDQUFGO0FBQ0gsT0FWRTtBQVdIekYsa0JBQVksRUFBRWtGO0FBWFgsS0FBUDtBQWFIO0FBQ0o7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFNBQVNhLCtCQUFULENBQXlDaEIsVUFBekMsRUFBcURsRyxVQUFyRCxFQUFpRTtBQUM3RCxNQUFNbUgsV0FBVyxHQUFHakIsVUFBVSxDQUFDMUUsSUFBWCxDQUFnQixJQUFoQixDQUFwQjtBQUNBLE1BQU00RixlQUFlLFNBQU9ELFdBQVAseUJBQXJCO0FBQ0EsTUFBTUUsaUJBQWlCLFNBQU9GLFdBQVAsV0FBdkI7QUFFQSxTQUFPO0FBQ0gvQixZQUFRLEVBQUVnQyxlQURQO0FBRUhQLGVBQVcsRUFBRVEsaUJBRlY7QUFHSGhDLFlBQVEsRUFBRSxrQkFBQ0MsRUFBRCxFQUFRO0FBQ2QsVUFBSUMsTUFBTSxHQUFHLEtBQWI7QUFFQW5KLE9BQUMsQ0FBQ2lMLGlCQUFELENBQUQsQ0FBcUJySSxJQUFyQixDQUEwQixVQUFDQyxLQUFELEVBQVFxSSxRQUFSLEVBQXFCO0FBQzNDLFlBQUlBLFFBQVEsQ0FBQ0MsT0FBYixFQUFzQjtBQUNsQmhDLGdCQUFNLEdBQUcsSUFBVDtBQUVBLGlCQUFPLEtBQVA7QUFDSDtBQUNKLE9BTkQ7QUFRQUQsUUFBRSxDQUFDQyxNQUFELENBQUY7QUFDSCxLQWZFO0FBZ0JIcEUsZ0JBQVksWUFBVW5CLFVBQVUsQ0FBQ3dILEtBQXJCO0FBaEJULEdBQVA7QUFrQkg7O0FBRUQsU0FBU0MsdUJBQVQsQ0FBaUN6SCxVQUFqQyxFQUE2Q29GLFFBQTdDLEVBQXVEO0FBQ25ELFNBQU87QUFDSEEsWUFBUSxFQUFSQSxRQURHO0FBRUhDLFlBRkcsb0JBRU1DLEVBRk4sRUFFVWxHLEdBRlYsRUFFZTtBQUNka0csUUFBRSxDQUFDbEcsR0FBRyxDQUFDbEMsTUFBSixHQUFhLENBQWQsQ0FBRjtBQUNILEtBSkU7QUFLSGlFLGdCQUFZLFlBQVVuQixVQUFVLENBQUN3SCxLQUFyQjtBQUxULEdBQVA7QUFPSDs7QUFFRCxTQUFTRSwwQkFBVCxDQUFvQzFILFVBQXBDLEVBQWdEMkgsaUJBQWhELEVBQW1FO0FBQy9ELE1BQU10QixjQUFjLHNCQUFvQnJHLFVBQVUsQ0FBQ3dILEtBQS9CLHlCQUF3RHhILFVBQVUsQ0FBQzRILEdBQW5FLGFBQThFNUgsVUFBVSxDQUFDNkgsR0FBekYsTUFBcEI7QUFDQSxNQUFNRCxHQUFHLEdBQUdoQyxNQUFNLENBQUM1RixVQUFVLENBQUM0SCxHQUFaLENBQWxCO0FBQ0EsTUFBTUMsR0FBRyxHQUFHakMsTUFBTSxDQUFDNUYsVUFBVSxDQUFDNkgsR0FBWixDQUFsQjtBQUVBLFNBQU87QUFDSHpDLFlBQVEsRUFBS3VDLGlCQUFMLHNCQUFzQzNILFVBQVUsQ0FBQ1QsSUFBakQsUUFETDtBQUVIOEYsWUFBUSxFQUFFLGtCQUFDQyxFQUFELEVBQUtsRyxHQUFMLEVBQWE7QUFDbkIsVUFBTTBJLFNBQVMsR0FBR2xDLE1BQU0sQ0FBQ3hHLEdBQUQsQ0FBeEI7QUFFQWtHLFFBQUUsQ0FBQ3dDLFNBQVMsSUFBSUYsR0FBYixJQUFvQkUsU0FBUyxJQUFJRCxHQUFsQyxDQUFGO0FBQ0gsS0FORTtBQU9IMUcsZ0JBQVksRUFBRWtGO0FBUFgsR0FBUDtBQVNIOztBQUdELFNBQVMwQixlQUFULENBQXlCQyxvQkFBekIsRUFBK0M7QUFDM0MsTUFBTWhJLFVBQVUsR0FBR2dJLG9CQUFvQixDQUFDbEssSUFBckIsQ0FBMEIsWUFBMUIsQ0FBbkI7QUFDQSxNQUFNbUssZ0JBQWdCLEdBQUcsRUFBekI7QUFDQSxNQUFNTixpQkFBaUIsU0FBT0ssb0JBQW9CLENBQUN4RyxJQUFyQixDQUEwQixJQUExQixDQUE5Qjs7QUFFQSxNQUFJeEIsVUFBVSxDQUFDVixJQUFYLEtBQW9CLGFBQXhCLEVBQXVDO0FBQ25DLFFBQU00SSxjQUFjLEdBQUdqQyxtQkFBbUIsQ0FBQytCLG9CQUFELEVBQXVCaEksVUFBdkIsQ0FBMUM7O0FBRUEsUUFBSWtJLGNBQUosRUFBb0I7QUFDaEJELHNCQUFnQixDQUFDRSxJQUFqQixDQUFzQkQsY0FBdEI7QUFDSDtBQUNKLEdBTkQsTUFNTyxJQUFJbEksVUFBVSxDQUFDb0ksUUFBWCxLQUF3QnBJLFVBQVUsQ0FBQ1YsSUFBWCxLQUFvQixnQkFBcEIsSUFBd0NVLFVBQVUsQ0FBQ1YsSUFBWCxLQUFvQixhQUFwRixDQUFKLEVBQXdHO0FBQzNHMkksb0JBQWdCLENBQUNFLElBQWpCLENBQXNCakIsK0JBQStCLENBQUNjLG9CQUFELEVBQXVCaEksVUFBdkIsQ0FBckQ7QUFDSCxHQUZNLE1BRUE7QUFDSGdJLHdCQUFvQixDQUFDbEosSUFBckIsQ0FBMEIseUJBQTFCLEVBQXFERSxJQUFyRCxDQUEwRCxVQUFDQyxLQUFELEVBQVFvSixPQUFSLEVBQW9CO0FBQzFFLFVBQU1DLGFBQWEsR0FBR2xNLENBQUMsQ0FBQ2lNLE9BQUQsQ0FBdkI7QUFDQSxVQUFNRSxPQUFPLEdBQUdELGFBQWEsQ0FBQ0UsR0FBZCxDQUFrQixDQUFsQixFQUFxQkQsT0FBckM7QUFDQSxVQUFNRSxTQUFTLEdBQUdILGFBQWEsQ0FBQzlHLElBQWQsQ0FBbUIsTUFBbkIsQ0FBbEI7QUFDQSxVQUFNa0gsZUFBZSxHQUFNZixpQkFBTixTQUEyQlksT0FBM0IsZ0JBQTRDRSxTQUE1QyxRQUFyQjs7QUFFQSxVQUFJekksVUFBVSxDQUFDVixJQUFYLEtBQW9CLFlBQXhCLEVBQXNDO0FBQ2xDMkksd0JBQWdCLENBQUNFLElBQWpCLENBQXNCVCwwQkFBMEIsQ0FBQzFILFVBQUQsRUFBYTJILGlCQUFiLENBQWhEO0FBQ0g7O0FBQ0QsVUFBSTNILFVBQVUsQ0FBQ29JLFFBQWYsRUFBeUI7QUFDckJILHdCQUFnQixDQUFDRSxJQUFqQixDQUFzQlYsdUJBQXVCLENBQUN6SCxVQUFELEVBQWEwSSxlQUFiLENBQTdDO0FBQ0g7QUFDSixLQVpEO0FBYUg7O0FBRUQsU0FBT1QsZ0JBQVA7QUFDSDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNlLHlFQUFVVSxLQUFWLEVBQWlCO0FBQzVCLE1BQUlDLG9CQUFvQixHQUFHLEVBQTNCO0FBRUFELE9BQUssQ0FBQzdKLElBQU4sQ0FBVyxtQkFBWCxFQUFnQ0UsSUFBaEMsQ0FBcUMsVUFBQ0MsS0FBRCxFQUFRNEosS0FBUixFQUFrQjtBQUNuREQsd0JBQW9CLEdBQUdBLG9CQUFvQixDQUFDRSxNQUFyQixDQUE0QmYsZUFBZSxDQUFDM0wsQ0FBQyxDQUFDeU0sS0FBRCxDQUFGLENBQTNDLENBQXZCO0FBQ0gsR0FGRDtBQUlBLFNBQU9ELG9CQUFQO0FBQ0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2SUQ7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1HLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQXZGLEdBQUcsRUFBSTtBQUMxQixNQUFNRSxNQUFNLEdBQUdGLEdBQWY7QUFFQXBILEdBQUMsQ0FBQzRDLElBQUYsQ0FBTzBFLE1BQVAsRUFBZSxVQUFDc0YsR0FBRCxFQUFNeEosS0FBTixFQUFnQjtBQUMzQixRQUFJQSxLQUFLLEtBQUssSUFBVixJQUFrQkEsS0FBSyxLQUFLLEVBQWhDLEVBQW9DO0FBQ2hDLGFBQU9rRSxNQUFNLENBQUNzRixHQUFELENBQWI7QUFDSDtBQUNKLEdBSkQ7QUFNQSxTQUFPdEYsTUFBUDtBQUNILENBVkQ7QUFZQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTWxCLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQWhELEtBQUs7QUFBQSxTQUFJeUosa0RBQVcsQ0FBQ0MsSUFBWixDQUFpQjVKLElBQWpCLENBQXNCMkosa0RBQVcsQ0FBQ0MsSUFBWixDQUFpQkMsS0FBakIsQ0FBdUIzSixLQUF2QixDQUF0QixFQUFxRCxJQUFyRCxDQUFKO0FBQUEsQ0FBNUI7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxJQUFNMkUsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixjQWdDNUJpRixJQWhDNEIsRUFnQ3RCQyxJQWhDc0IsRUFnQ2I7QUFBQSxNQTlCZEMsV0E4QmMsUUE5QmRBLFdBOEJjO0FBQUEsTUE3QmRDLFNBNkJjLFFBN0JkQSxTQTZCYztBQUFBLE1BNUJkQyxTQTRCYyxRQTVCZEEsU0E0QmM7QUFBQSxNQTNCZEMsVUEyQmMsUUEzQmRBLFVBMkJjO0FBQUEsTUF2QmRDLFdBdUJjLFNBdkJkQSxXQXVCYztBQUFBLE1BdEJkQyxhQXNCYyxTQXRCZEEsYUFzQmM7QUFBQSxNQW5CZEMsa0JBbUJjLFNBbkJkQSxrQkFtQmM7QUFBQSxNQWxCZDdHLFVBa0JjLFNBbEJkQSxVQWtCYztBQUFBLE1BakJkOEcsWUFpQmMsU0FqQmRBLFlBaUJjO0FBQUEsTUFoQmQxRyxHQWdCYyxTQWhCZEEsR0FnQmM7QUFBQSxNQWZkZSxrQkFlYyxTQWZkQSxrQkFlYztBQUFBLE1BWmQ0RixRQVljLFNBWmRBLFFBWWM7QUFBQSxNQVhkQyxRQVdjLFNBWGRBLFFBV2M7QUFBQSxNQVZkQyxJQVVjLFNBVmRBLElBVWM7QUFBQSxNQVRkQyxXQVNjLFNBVGRBLFdBU2M7QUFBQSxNQVJkaEcsc0JBUWMsU0FSZEEsc0JBUWM7QUFBQSxNQVBkRixZQU9jLFNBUGRBLFlBT2M7QUFBQSxNQU5kbUcsT0FNYyxTQU5kQSxPQU1jO0FBQUEsTUFMZEMsVUFLYyxTQUxkQSxVQUtjO0FBQUEsTUFKZEMsU0FJYyxTQUpkQSxTQUljO0FBQUEsTUFIZEMsS0FHYyxTQUhkQSxLQUdjO0FBQUEsTUFGZEMsS0FFYyxTQUZkQSxLQUVjO0FBQ2QsTUFBTUMsTUFBTSxHQUFHeEgsVUFBVSxDQUFDeUQsS0FBWCxDQUFpQixHQUFqQixDQUFmO0FBRUFwSyxHQUFDLENBQUNvTyxJQUFGLENBQU87QUFDSDNNLE9BQUcsRUFBS3lMLFdBQUwsZ0JBQTJCRSxTQUEzQixtQkFBa0RELFNBQWxELHdCQURBO0FBRUhrQixZQUFRLEVBQUUsTUFGUDtBQUdIQyxVQUFNLEVBQUUsTUFITDtBQUlIQyxTQUFLLEVBQUUsS0FKSjtBQUtIQyxXQUFPLEVBQUU7QUFDTEMsbUJBQWEsRUFBRXBCLFVBRFY7QUFFTHFCLFlBQU0sRUFBRSw0QkFGSDtBQUdMLHNCQUFnQjtBQUhYLEtBTE47QUFVSGhOLFFBQUksRUFBRWlOLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ2pCQyxnQkFBVSxFQUFFO0FBQ1IzTCxZQUFJLEVBQUUsTUFERTtBQUVSNEwsdUJBQWUsRUFBRXJCLFlBRlQ7QUFHUnNCLGNBQU0sRUFBRWxDLGtEQUFXLENBQUNDLElBQVosQ0FBaUJDLEtBQWpCLENBQXVCUyxrQkFBdkIsQ0FIQTtBQUlSd0Isb0JBQVksRUFBRW5DLGtEQUFXLENBQUNsRyxVQUFaLENBQXVCZ0UsS0FBdkIsQ0FBNkJvQyxLQUE3QixDQUFtQ29CLE1BQU0sQ0FBQyxDQUFELENBQXpDLENBSk47QUFLUmMsbUJBQVcsRUFBRXBDLGtEQUFXLENBQUNsRyxVQUFaLENBQXVCaUUsSUFBdkIsQ0FBNEJtQyxLQUE1QixDQUFrQ29CLE1BQU0sQ0FBQyxDQUFELENBQXhDLEVBQTZDLElBQTdDLENBTEw7QUFNUmUsMEJBQWtCLEVBQUVuSTtBQU5aLE9BREs7QUFTakJvSSxxQkFBZSxFQUFFeEMsY0FBYyxDQUFDO0FBQzVCZSxnQkFBUSxFQUFSQSxRQUQ0QjtBQUU1QkMsZ0JBQVEsRUFBUkEsUUFGNEI7QUFHNUJDLFlBQUksRUFBSkEsSUFINEI7QUFJNUJDLG1CQUFXLEVBQVhBLFdBSjRCO0FBSzVCaEcsOEJBQXNCLEVBQXRCQSxzQkFMNEI7QUFNNUJGLG9CQUFZLEVBQVpBLFlBTjRCO0FBTzVCbUcsZUFBTyxFQUFQQSxPQVA0QjtBQVE1QkMsa0JBQVUsRUFBVkEsVUFSNEI7QUFTNUJDLGlCQUFTLEVBQVRBLFNBVDRCO0FBVTVCQyxhQUFLLEVBQUxBLEtBVjRCO0FBVzVCQyxhQUFLLEVBQUxBO0FBWDRCLE9BQUQsQ0FUZDtBQXNCakJaLGlCQUFXLEVBQVhBLFdBdEJpQjtBQXVCakJ4Rix3QkFBa0IsRUFBbEJBLGtCQXZCaUI7QUF3QmpCeUYsbUJBQWEsRUFBYkE7QUF4QmlCLEtBQWY7QUFWSCxHQUFQLEVBcUNLUCxJQXJDTCxDQXFDVUEsSUFyQ1YsRUFzQ0tDLElBdENMLENBc0NVQSxJQXRDVjtBQXVDSCxDQTFFTTtBQTRFQSxJQUFNbUMsVUFBVSxHQUFHO0FBQ3RCO0FBQ0o7QUFDQTtBQUNBO0FBQ0luSSwyQkFBeUIsRUFBRSxtQ0FBQTNDLEtBQUssRUFBSTtBQUNoQyxRQUFJQSxLQUFKLEVBQVc7QUFDUHRFLE9BQUMsQ0FBQ3NFLEtBQUQsQ0FBRCxDQUFTcEQsRUFBVCxDQUFZLE9BQVosRUFBcUIsaUJBQWdCO0FBQUEsWUFBYmlGLE1BQWEsU0FBYkEsTUFBYTtBQUNqQyxZQUFNa0osU0FBUyxHQUFHbEosTUFBbEI7QUFDQWtKLGlCQUFTLENBQUNqTSxLQUFWLEdBQWtCeUosa0RBQVcsQ0FBQ0MsSUFBWixDQUFpQndDLE1BQWpCLENBQXdCekMsa0RBQVcsQ0FBQ0MsSUFBWixDQUFpQkMsS0FBakIsQ0FBdUI1RyxNQUFNLENBQUMvQyxLQUE5QixDQUF4QixDQUFsQjtBQUNILE9BSEQ7QUFJSDtBQUNKLEdBWnFCOztBQWN0QjtBQUNKO0FBQ0E7QUFDQTtBQUNJOEQscUJBQW1CLEVBQUUsNkJBQUE1QyxLQUFLLEVBQUk7QUFDMUIsUUFBSUEsS0FBSixFQUFXO0FBQ1B0RSxPQUFDLENBQUNzRSxLQUFELENBQUQsQ0FBU3BELEVBQVQsQ0FBWSxPQUFaLEVBQXFCLGlCQUF1QjtBQUFBLFlBQXBCaUYsTUFBb0IsU0FBcEJBLE1BQW9CO0FBQUEsWUFBWm9KLEtBQVksU0FBWkEsS0FBWTtBQUN4QyxZQUFNRixTQUFTLEdBQUdsSixNQUFsQjs7QUFDQSxZQUFJb0osS0FBSyxLQUFLLENBQVYsSUFBZSxVQUFVQyxJQUFWLENBQWVySixNQUFNLENBQUMvQyxLQUF0QixDQUFuQixFQUFpRDtBQUM3Q2lNLG1CQUFTLENBQUNqTSxLQUFWLEdBQWtCK0MsTUFBTSxDQUFDL0MsS0FBUCxDQUFhcU0sS0FBYixDQUFtQixDQUFuQixFQUFzQixDQUFDLENBQXZCLENBQWxCO0FBQ0gsU0FGRCxNQUVPLElBQUl0SixNQUFNLENBQUMvQyxLQUFQLENBQWF0QyxNQUFiLEdBQXNCLENBQTFCLEVBQTZCO0FBQ2hDdU8sbUJBQVMsQ0FBQ2pNLEtBQVYsR0FBa0IrQyxNQUFNLENBQUMvQyxLQUFQLENBQWFxTSxLQUFiLENBQW1CLENBQW5CLEVBQXNCLENBQXRCLENBQWxCO0FBQ0gsU0FGTSxNQUVBLElBQUlGLEtBQUssS0FBSyxDQUFkLEVBQWlCO0FBQ3BCRixtQkFBUyxDQUFDak0sS0FBVixHQUFrQitDLE1BQU0sQ0FBQy9DLEtBQVAsQ0FDYnNNLE9BRGEsQ0FDTCxvQkFESyxFQUNpQixNQURqQixFQUViQSxPQUZhLENBRUwsb0JBRkssRUFFaUIsS0FGakIsRUFHYkEsT0FIYSxDQUdMLG1CQUhLLEVBR2dCLFFBSGhCLEVBSWJBLE9BSmEsQ0FJTCw4QkFKSyxFQUkyQixPQUozQixFQUtiQSxPQUxhLENBS0wsa0JBTEssRUFLZSxHQUxmLEVBTWJBLE9BTmEsQ0FNTCxrQkFOSyxFQU1lLEVBTmYsRUFPYkEsT0FQYSxDQU9MLE9BUEssRUFPSSxHQVBKLENBQWxCO0FBUUg7QUFDSixPQWhCRDtBQWlCSDtBQUNKO0FBdENxQixDQUFuQjtBQXlDQSxJQUFNaEwsVUFBVSxHQUFHO0FBQ3RCO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNJOEIsK0JBQTZCLEVBQUUsdUNBQUNtSixTQUFELEVBQVlyTCxLQUFaLEVBQW1CUyxZQUFuQixFQUFvQztBQUMvRCxRQUFJVCxLQUFKLEVBQVc7QUFDUHFMLGVBQVMsQ0FBQ3pMLEdBQVYsQ0FBYztBQUNWOEUsZ0JBQVEsRUFBRTFFLEtBREE7QUFFVjJFLGdCQUFRLEVBQUUsa0JBQUNDLEVBQUQsRUFBS2xHLEdBQUwsRUFBYTtBQUNuQixjQUFNbUcsTUFBTSxHQUFHbkcsR0FBRyxDQUFDbEMsTUFBSixJQUFjK0wsa0RBQVcsQ0FBQ0MsSUFBWixDQUFpQjhDLE9BQWpCLENBQXlCL0Msa0RBQVcsQ0FBQ0MsSUFBWixDQUFpQkMsS0FBakIsQ0FBdUIvSixHQUF2QixDQUF6QixDQUE3QjtBQUVBa0csWUFBRSxDQUFDQyxNQUFELENBQUY7QUFDSCxTQU5TO0FBT1ZwRSxvQkFBWSxFQUFaQTtBQVBVLE9BQWQ7QUFTSDtBQUNKLEdBbkJxQjs7QUFxQnRCO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNJMkIseUJBQXVCLEVBQUUsaUNBQUNpSixTQUFELEVBQVlyTCxLQUFaLEVBQW1CUyxZQUFuQixFQUFvQztBQUN6RCxRQUFJVCxLQUFKLEVBQVc7QUFDUHFMLGVBQVMsQ0FBQ3pMLEdBQVYsQ0FBYztBQUNWOEUsZ0JBQVEsRUFBRTFFLEtBREE7QUFFVjJFLGdCQUFRLEVBQUUsa0JBQUNDLEVBQUQsRUFBS2xHLEdBQUwsRUFBYTtBQUNuQixjQUFNbUwsTUFBTSxHQUFHbkwsR0FBRyxDQUFDb0gsS0FBSixDQUFVLEdBQVYsQ0FBZjtBQUNBLGNBQUlqQixNQUFNLEdBQUduRyxHQUFHLENBQUNsQyxNQUFKLElBQWMsZ0NBQWdDME8sSUFBaEMsQ0FBcUN4TSxHQUFyQyxDQUEzQjtBQUNBbUcsZ0JBQU0sR0FBR0EsTUFBTSxJQUFJLENBQUMwRCxrREFBVyxDQUFDbEcsVUFBWixDQUF1QmtKLE1BQXZCLENBQThCaEQsa0RBQVcsQ0FBQ2xHLFVBQVosQ0FBdUJnRSxLQUF2QixDQUE2Qm9DLEtBQTdCLENBQW1Db0IsTUFBTSxDQUFDLENBQUQsQ0FBekMsQ0FBOUIsRUFBNkV0QixrREFBVyxDQUFDbEcsVUFBWixDQUF1QmlFLElBQXZCLENBQTRCbUMsS0FBNUIsQ0FBa0NvQixNQUFNLENBQUMsQ0FBRCxDQUF4QyxFQUE2QyxJQUE3QyxDQUE3RSxDQUFwQjtBQUVBakYsWUFBRSxDQUFDQyxNQUFELENBQUY7QUFDSCxTQVJTO0FBU1ZwRSxvQkFBWSxFQUFaQTtBQVRVLE9BQWQ7QUFXSDtBQUNKLEdBekNxQjs7QUEyQ3RCO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNJNkIseUJBQXVCLEVBQUUsaUNBQUMrSSxTQUFELEVBQVlyTCxLQUFaLEVBQW1CUyxZQUFuQixFQUFvQztBQUN6RCxRQUFJVCxLQUFKLEVBQVc7QUFDUHFMLGVBQVMsQ0FBQ3pMLEdBQVYsQ0FBYztBQUNWOEUsZ0JBQVEsRUFBRTFFLEtBREE7QUFFVjJFLGdCQUFRLEVBQUUsa0JBQUNDLEVBQUQsRUFBS2xHLEdBQUwsRUFBYTtBQUNuQixjQUFNbUcsTUFBTSxHQUFHLENBQUMsQ0FBQ25HLEdBQUcsQ0FBQ2xDLE1BQXJCO0FBRUFvSSxZQUFFLENBQUNDLE1BQUQsQ0FBRjtBQUNILFNBTlM7QUFPVnBFLG9CQUFZLEVBQVpBO0FBUFUsT0FBZDtBQVNIO0FBQ0osR0E3RHFCOztBQStEdEI7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSStCLGtCQUFnQixFQUFFLDBCQUFDNkksU0FBRCxFQUFZckwsS0FBWixFQUFtQlMsWUFBbkIsRUFBaUNtQixRQUFqQyxFQUE4QztBQUM1RCxRQUFJNUIsS0FBSixFQUFXO0FBQ1BxTCxlQUFTLENBQUN6TCxHQUFWLENBQWM7QUFDVjhFLGdCQUFRLEVBQUUxRSxLQURBO0FBRVYyRSxnQkFBUSxFQUFFLGtCQUFDQyxFQUFELEVBQUtsRyxHQUFMLEVBQWE7QUFDbkIsY0FBTUUsSUFBSSxHQUFHLE9BQU9nRCxRQUFQLEtBQW9CLFVBQXBCLEdBQWlDQSxRQUFRLEVBQXpDLEdBQThDQSxRQUEzRDtBQUNBLGNBQU1pRCxNQUFNLEdBQUduRyxHQUFHLENBQUNsQyxNQUFKLElBQWMrTCxrREFBVyxDQUFDaUQsR0FBWixDQUFnQkYsT0FBaEIsQ0FBd0I1TSxHQUF4QixFQUE2QkUsSUFBN0IsQ0FBN0I7QUFFQWdHLFlBQUUsQ0FBQ0MsTUFBRCxDQUFGO0FBQ0gsU0FQUztBQVFWcEUsb0JBQVksRUFBWkE7QUFSVSxPQUFkO0FBVUg7QUFDSjtBQW5GcUIsQ0FBbkIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckpQO0NBR0E7O0FBQ0EsSUFBTWdMLE9BQU8sR0FBRyxJQUFJQyxPQUFKLEVBQWhCLEMsQ0FBK0I7QUFFL0I7O0FBQ0EsSUFBTUMsSUFBSSxHQUFHQyxrREFBVSxDQUFDQyxLQUFYLENBQWlCO0FBQzFCQyxnQkFBYyxFQUFFLEtBRFU7QUFFMUJDLGFBQVcsRUFBRTtBQUNUQyxpQkFBYSxFQUFFLFFBRE47QUFFVEMsZ0JBQVksRUFBRTtBQUZMO0FBRmEsQ0FBakIsQ0FBYixDLENBUUE7O0FBQ2VOLG1FQUFmLEUiLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLjEwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgbm9kIGZyb20gJy4vY29tbW9uL25vZCc7XG5pbXBvcnQgV2lzaGxpc3QgZnJvbSAnLi93aXNobGlzdCc7XG5pbXBvcnQgdmFsaWRhdGlvbiBmcm9tICcuL2NvbW1vbi9mb3JtLXZhbGlkYXRpb24nO1xuaW1wb3J0IHN0YXRlQ291bnRyeSBmcm9tICcuL2NvbW1vbi9zdGF0ZS1jb3VudHJ5JztcbmltcG9ydCB7IGNsYXNzaWZ5Rm9ybSwgVmFsaWRhdG9ycywgaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCB9IGZyb20gJy4vY29tbW9uL2Zvcm0tdXRpbHMnO1xuaW1wb3J0IHsgY3JlZGl0Q2FyZFR5cGUsIHN0b3JlSW5zdHJ1bWVudCwgVmFsaWRhdG9ycyBhcyBDQ1ZhbGlkYXRvcnMsIEZvcm1hdHRlcnMgYXMgQ0NGb3JtYXR0ZXJzIH0gZnJvbSAnLi9jb21tb24vcGF5bWVudC1tZXRob2QnO1xuaW1wb3J0IHN3YWwgZnJvbSAnLi9nbG9iYWwvc3dlZXQtYWxlcnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY2NvdW50IGV4dGVuZHMgUGFnZU1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy4kc3RhdGUgPSAkKCdbZGF0YS1maWVsZC10eXBlPVwiU3RhdGVcIl0nKTtcbiAgICAgICAgdGhpcy4kYm9keSA9ICQoJ2JvZHknKTtcbiAgICB9XG5cbiAgICBvblJlYWR5KCkge1xuICAgICAgICBjb25zdCAkZWRpdEFjY291bnRGb3JtID0gY2xhc3NpZnlGb3JtKCdmb3JtW2RhdGEtZWRpdC1hY2NvdW50LWZvcm1dJyk7XG4gICAgICAgIGNvbnN0ICRhZGRyZXNzRm9ybSA9IGNsYXNzaWZ5Rm9ybSgnZm9ybVtkYXRhLWFkZHJlc3MtZm9ybV0nKTtcbiAgICAgICAgY29uc3QgJGluYm94Rm9ybSA9IGNsYXNzaWZ5Rm9ybSgnZm9ybVtkYXRhLWluYm94LWZvcm1dJyk7XG4gICAgICAgIGNvbnN0ICRhY2NvdW50UmV0dXJuRm9ybSA9IGNsYXNzaWZ5Rm9ybSgnW2RhdGEtYWNjb3VudC1yZXR1cm4tZm9ybV0nKTtcbiAgICAgICAgY29uc3QgJHBheW1lbnRNZXRob2RGb3JtID0gY2xhc3NpZnlGb3JtKCdmb3JtW2RhdGEtcGF5bWVudC1tZXRob2QtZm9ybV0nKTtcbiAgICAgICAgY29uc3QgJHJlb3JkZXJGb3JtID0gY2xhc3NpZnlGb3JtKCdbZGF0YS1hY2NvdW50LXJlb3JkZXItZm9ybV0nKTtcbiAgICAgICAgY29uc3QgJGludm9pY2VCdXR0b24gPSAkKCdbZGF0YS1wcmludC1pbnZvaWNlXScpO1xuXG4gICAgICAgIC8vIEluamVjdGVkIHZpYSB0ZW1wbGF0ZVxuICAgICAgICB0aGlzLnBhc3N3b3JkUmVxdWlyZW1lbnRzID0gdGhpcy5jb250ZXh0LnBhc3N3b3JkUmVxdWlyZW1lbnRzO1xuXG4gICAgICAgIC8vIEluc3RhbnRpYXRlcyB3aXNoIGxpc3QgSlNcbiAgICAgICAgV2lzaGxpc3QubG9hZCh0aGlzLmNvbnRleHQpO1xuXG4gICAgICAgIGlmICgkZWRpdEFjY291bnRGb3JtLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckVkaXRBY2NvdW50VmFsaWRhdGlvbigkZWRpdEFjY291bnRGb3JtKTtcbiAgICAgICAgICAgIGlmICh0aGlzLiRzdGF0ZS5pcygnaW5wdXQnKSkge1xuICAgICAgICAgICAgICAgIGluc2VydFN0YXRlSGlkZGVuRmllbGQodGhpcy4kc3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRpbnZvaWNlQnV0dG9uLmxlbmd0aCkge1xuICAgICAgICAgICAgJGludm9pY2VCdXR0b24ub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxlZnQgPSB3aW5kb3cuc2NyZWVuLmF2YWlsV2lkdGggLyAyIC0gNDUwO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvcCA9IHdpbmRvdy5zY3JlZW4uYXZhaWxIZWlnaHQgLyAyIC0gMzIwO1xuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9ICRpbnZvaWNlQnV0dG9uLmRhdGEoJ3ByaW50SW52b2ljZScpO1xuXG4gICAgICAgICAgICAgICAgd2luZG93Lm9wZW4odXJsLCAnb3JkZXJJbnZvaWNlJywgYHdpZHRoPTkwMCxoZWlnaHQ9NjUwLGxlZnQ9JHtsZWZ0fSx0b3A9JHt0b3B9LHNjcm9sbGJhcnM9MWApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJGFkZHJlc3NGb3JtLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5pbml0QWRkcmVzc0Zvcm1WYWxpZGF0aW9uKCRhZGRyZXNzRm9ybSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLiRzdGF0ZS5pcygnaW5wdXQnKSkge1xuICAgICAgICAgICAgICAgIGluc2VydFN0YXRlSGlkZGVuRmllbGQodGhpcy4kc3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRpbmJveEZvcm0ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVySW5ib3hWYWxpZGF0aW9uKCRpbmJveEZvcm0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRhY2NvdW50UmV0dXJuRm9ybS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdEFjY291bnRSZXR1cm5Gb3JtVmFsaWRhdGlvbigkYWNjb3VudFJldHVybkZvcm0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRwYXltZW50TWV0aG9kRm9ybS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdFBheW1lbnRNZXRob2RGb3JtVmFsaWRhdGlvbigkcGF5bWVudE1ldGhvZEZvcm0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRyZW9yZGVyRm9ybS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdFJlb3JkZXJGb3JtKCRyZW9yZGVyRm9ybSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJpbmREZWxldGVBZGRyZXNzKCk7XG4gICAgICAgIHRoaXMuYmluZERlbGV0ZVBheW1lbnRNZXRob2QoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCaW5kcyBhIHN1Ym1pdCBob29rIHRvIGVuc3VyZSB0aGUgY3VzdG9tZXIgcmVjZWl2ZXMgYSBjb25maXJtYXRpb24gZGlhbG9nIGJlZm9yZSBkZWxldGluZyBhbiBhZGRyZXNzXG4gICAgICovXG4gICAgYmluZERlbGV0ZUFkZHJlc3MoKSB7XG4gICAgICAgICQoJ1tkYXRhLWRlbGV0ZS1hZGRyZXNzXScpLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdkZWxldGVBZGRyZXNzJyk7XG5cbiAgICAgICAgICAgIGlmICghd2luZG93LmNvbmZpcm0obWVzc2FnZSkpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBiaW5kRGVsZXRlUGF5bWVudE1ldGhvZCgpIHtcbiAgICAgICAgJCgnW2RhdGEtZGVsZXRlLXBheW1lbnQtbWV0aG9kXScpLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdkZWxldGVQYXltZW50TWV0aG9kJyk7XG5cbiAgICAgICAgICAgIGlmICghd2luZG93LmNvbmZpcm0obWVzc2FnZSkpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0UmVvcmRlckZvcm0oJHJlb3JkZXJGb3JtKSB7XG4gICAgICAgICRyZW9yZGVyRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgJHByb2R1Y3RSZW9yZGVyQ2hlY2tib3hlcyA9ICQoJy5hY2NvdW50LWxpc3RJdGVtIC5mb3JtLWNoZWNrYm94OmNoZWNrZWQnKTtcbiAgICAgICAgICAgIGxldCBzdWJtaXRGb3JtID0gZmFsc2U7XG5cbiAgICAgICAgICAgICRyZW9yZGVyRm9ybS5maW5kKCdbbmFtZV49XCJyZW9yZGVyaXRlbVwiXScpLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICAkcHJvZHVjdFJlb3JkZXJDaGVja2JveGVzLmVhY2goKGluZGV4LCBwcm9kdWN0Q2hlY2tib3gpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0SWQgPSAkKHByb2R1Y3RDaGVja2JveCkudmFsKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgJGlucHV0ID0gJCgnPGlucHV0PicsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGByZW9yZGVyaXRlbVske3Byb2R1Y3RJZH1dYCxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICcxJyxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHN1Ym1pdEZvcm0gPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgJHJlb3JkZXJGb3JtLmFwcGVuZCgkaW5wdXQpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICghc3VibWl0Rm9ybSkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgc3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogdGhpcy5jb250ZXh0LnNlbGVjdEl0ZW0sXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXRBZGRyZXNzRm9ybVZhbGlkYXRpb24oJGFkZHJlc3NGb3JtKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb25Nb2RlbCA9IHZhbGlkYXRpb24oJGFkZHJlc3NGb3JtKTtcbiAgICAgICAgY29uc3Qgc3RhdGVTZWxlY3RvciA9ICdmb3JtW2RhdGEtYWRkcmVzcy1mb3JtXSBbZGF0YS1maWVsZC10eXBlPVwiU3RhdGVcIl0nO1xuICAgICAgICBjb25zdCAkc3RhdGVFbGVtZW50ID0gJChzdGF0ZVNlbGVjdG9yKTtcbiAgICAgICAgY29uc3QgYWRkcmVzc1ZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6ICdmb3JtW2RhdGEtYWRkcmVzcy1mb3JtXSBpbnB1dFt0eXBlPVwic3VibWl0XCJdJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYWRkcmVzc1ZhbGlkYXRvci5hZGQodmFsaWRhdGlvbk1vZGVsKTtcblxuICAgICAgICBpZiAoJHN0YXRlRWxlbWVudCkge1xuICAgICAgICAgICAgbGV0ICRsYXN0O1xuXG4gICAgICAgICAgICAvLyBSZXF1ZXN0cyB0aGUgc3RhdGVzIGZvciBhIGNvdW50cnkgd2l0aCBBSkFYXG4gICAgICAgICAgICBzdGF0ZUNvdW50cnkoJHN0YXRlRWxlbWVudCwgdGhpcy5jb250ZXh0LCAoZXJyLCBmaWVsZCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgJGZpZWxkID0gJChmaWVsZCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoYWRkcmVzc1ZhbGlkYXRvci5nZXRTdGF0dXMoJHN0YXRlRWxlbWVudCkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3NWYWxpZGF0b3IucmVtb3ZlKCRzdGF0ZUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICgkbGFzdCkge1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzVmFsaWRhdG9yLnJlbW92ZSgkbGFzdCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCRmaWVsZC5pcygnc2VsZWN0JykpIHtcbiAgICAgICAgICAgICAgICAgICAgJGxhc3QgPSBmaWVsZDtcbiAgICAgICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5zZXRTdGF0ZUNvdW50cnlWYWxpZGF0aW9uKGFkZHJlc3NWYWxpZGF0b3IsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLmNsZWFuVXBTdGF0ZVZhbGlkYXRpb24oZmllbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgJGFkZHJlc3NGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBhZGRyZXNzVmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuXG4gICAgICAgICAgICBpZiAoYWRkcmVzc1ZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXRBY2NvdW50UmV0dXJuRm9ybVZhbGlkYXRpb24oJGFjY291bnRSZXR1cm5Gb3JtKSB7XG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9ICRhY2NvdW50UmV0dXJuRm9ybS5kYXRhKCdhY2NvdW50UmV0dXJuRm9ybUVycm9yJyk7XG5cbiAgICAgICAgJGFjY291bnRSZXR1cm5Gb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBsZXQgZm9ybVN1Ym1pdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAvLyBJdGVyYXRlIHVudGlsIHdlIGZpbmQgYSBub24temVybyB2YWx1ZSBpbiB0aGUgZHJvcGRvd24gZm9yIHF1YW50aXR5XG4gICAgICAgICAgICAkKCdbbmFtZV49XCJyZXR1cm5fcXR5XCJdJywgJGFjY291bnRSZXR1cm5Gb3JtKS5lYWNoKChpLCBlbGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQoJChlbGUpLnZhbCgpLCAxMCkgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybVN1Ym1pdCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gRXhpdCBvdXQgb2YgbG9vcCBpZiB3ZSBmb3VuZCBhdCBsZWFzdCBvbmUgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoZm9ybVN1Ym1pdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgIHRleHQ6IGVycm9yTWVzc2FnZSxcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0UGF5bWVudE1ldGhvZEZvcm1WYWxpZGF0aW9uKCRwYXltZW50TWV0aG9kRm9ybSkge1xuICAgICAgICAvLyBJbmplY3QgdmFsaWRhdGlvbnMgaW50byBmb3JtIGZpZWxkcyBiZWZvcmUgdmFsaWRhdGlvbiBydW5zXG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjZmlyc3RfbmFtZS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQuZmlyc3ROYW1lTGFiZWx9XCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJtYXhsZW5ndGhcIjogMCB9YCk7XG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjbGFzdF9uYW1lLmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVsaW5lXCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5sYXN0TmFtZUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI2NvbXBhbnkuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZWxpbmVcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0LmNvbXBhbnlMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiBmYWxzZSwgXCJtYXhsZW5ndGhcIjogMCB9YCk7XG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjcGhvbmUuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZWxpbmVcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0LnBob25lTGFiZWx9XCIsIFwicmVxdWlyZWRcIjogZmFsc2UsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI2FkZHJlc3MxLmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVsaW5lXCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5hZGRyZXNzMUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI2FkZHJlc3MyLmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVsaW5lXCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5hZGRyZXNzMkxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IGZhbHNlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNjaXR5LmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVsaW5lXCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5jaXR5TGFiZWx9XCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJtYXhsZW5ndGhcIjogMCB9YCk7XG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjY291bnRyeS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlc2VsZWN0XCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5jb3VudHJ5TGFiZWx9XCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgcHJlZml4OiBcIiR7dGhpcy5jb250ZXh0LmNob29zZUNvdW50cnlMYWJlbH1cIiB9YCk7XG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjc3RhdGUuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZWxpbmVcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0LnN0YXRlTGFiZWx9XCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJtYXhsZW5ndGhcIjogMCB9YCk7XG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjcG9zdGFsX2NvZGUuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZWxpbmVcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0LnBvc3RhbENvZGVMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcblxuICAgICAgICBjb25zdCB2YWxpZGF0aW9uTW9kZWwgPSB2YWxpZGF0aW9uKCRwYXltZW50TWV0aG9kRm9ybSk7XG4gICAgICAgIGNvbnN0IHBheW1lbnRNZXRob2RTZWxlY3RvciA9ICdmb3JtW2RhdGEtcGF5bWVudC1tZXRob2QtZm9ybV0nO1xuICAgICAgICBjb25zdCBwYXltZW50TWV0aG9kVmFsaWRhdG9yID0gbm9kKHsgc3VibWl0OiBgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IGlucHV0W3R5cGU9XCJzdWJtaXRcIl1gIH0pO1xuICAgICAgICBjb25zdCAkc3RhdGVFbGVtZW50ID0gJChgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IFtkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXWApO1xuXG4gICAgICAgIGxldCAkbGFzdDtcbiAgICAgICAgLy8gUmVxdWVzdHMgdGhlIHN0YXRlcyBmb3IgYSBjb3VudHJ5IHdpdGggQUpBWFxuICAgICAgICBzdGF0ZUNvdW50cnkoJHN0YXRlRWxlbWVudCwgdGhpcy5jb250ZXh0LCAoZXJyLCBmaWVsZCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCAkZmllbGQgPSAkKGZpZWxkKTtcblxuICAgICAgICAgICAgaWYgKHBheW1lbnRNZXRob2RWYWxpZGF0b3IuZ2V0U3RhdHVzKCRzdGF0ZUVsZW1lbnQpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2RWYWxpZGF0b3IucmVtb3ZlKCRzdGF0ZUVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJGxhc3QpIHtcbiAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kVmFsaWRhdG9yLnJlbW92ZSgkbGFzdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgkZmllbGQuaXMoJ3NlbGVjdCcpKSB7XG4gICAgICAgICAgICAgICAgJGxhc3QgPSBmaWVsZDtcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnNldFN0YXRlQ291bnRyeVZhbGlkYXRpb24ocGF5bWVudE1ldGhvZFZhbGlkYXRvciwgZmllbGQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLmNsZWFuVXBTdGF0ZVZhbGlkYXRpb24oZmllbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBVc2UgY3JlZGl0IGNhcmQgbnVtYmVyIGlucHV0IGxpc3RlbmVyIHRvIGhpZ2hsaWdodCBjcmVkaXQgY2FyZCB0eXBlXG4gICAgICAgIGxldCBjYXJkVHlwZTtcbiAgICAgICAgJChgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IGlucHV0W25hbWU9XCJjcmVkaXRfY2FyZF9udW1iZXJcIl1gKS5vbigna2V5dXAnLCAoeyB0YXJnZXQgfSkgPT4ge1xuICAgICAgICAgICAgY2FyZFR5cGUgPSBjcmVkaXRDYXJkVHlwZSh0YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgaWYgKGNhcmRUeXBlKSB7XG4gICAgICAgICAgICAgICAgJChgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IGltZ1thbHQ9XCIke2NhcmRUeXBlfVwiXWApLnNpYmxpbmdzKCkuY3NzKCdvcGFjaXR5JywgJy4yJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbWdgKS5jc3MoJ29wYWNpdHknLCAnMScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBTZXQgb2YgY3JlZGl0IGNhcmQgdmFsaWRhdGlvblxuICAgICAgICBDQ1ZhbGlkYXRvcnMuc2V0Q3JlZGl0Q2FyZE51bWJlclZhbGlkYXRpb24ocGF5bWVudE1ldGhvZFZhbGlkYXRvciwgYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFtuYW1lPVwiY3JlZGl0X2NhcmRfbnVtYmVyXCJdYCwgdGhpcy5jb250ZXh0LmNyZWRpdENhcmROdW1iZXIpO1xuICAgICAgICBDQ1ZhbGlkYXRvcnMuc2V0RXhwaXJhdGlvblZhbGlkYXRpb24ocGF5bWVudE1ldGhvZFZhbGlkYXRvciwgYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFtuYW1lPVwiZXhwaXJhdGlvblwiXWAsIHRoaXMuY29udGV4dC5leHBpcmF0aW9uKTtcbiAgICAgICAgQ0NWYWxpZGF0b3JzLnNldE5hbWVPbkNhcmRWYWxpZGF0aW9uKHBheW1lbnRNZXRob2RWYWxpZGF0b3IsIGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW5wdXRbbmFtZT1cIm5hbWVfb25fY2FyZFwiXWAsIHRoaXMuY29udGV4dC5uYW1lT25DYXJkKTtcbiAgICAgICAgQ0NWYWxpZGF0b3JzLnNldEN2dlZhbGlkYXRpb24ocGF5bWVudE1ldGhvZFZhbGlkYXRvciwgYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFtuYW1lPVwiY3Z2XCJdYCwgdGhpcy5jb250ZXh0LmN2diwgKCkgPT4gY2FyZFR5cGUpO1xuXG4gICAgICAgIC8vIFNldCBvZiBjcmVkaXQgY2FyZCBmb3JtYXRcbiAgICAgICAgQ0NGb3JtYXR0ZXJzLnNldENyZWRpdENhcmROdW1iZXJGb3JtYXQoYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFtuYW1lPVwiY3JlZGl0X2NhcmRfbnVtYmVyXCJdYCk7XG4gICAgICAgIENDRm9ybWF0dGVycy5zZXRFeHBpcmF0aW9uRm9ybWF0KGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW5wdXRbbmFtZT1cImV4cGlyYXRpb25cIl1gKTtcblxuICAgICAgICAvLyBCaWxsaW5nIGFkZHJlc3MgdmFsaWRhdGlvblxuICAgICAgICBwYXltZW50TWV0aG9kVmFsaWRhdG9yLmFkZCh2YWxpZGF0aW9uTW9kZWwpO1xuXG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIC8vIFBlcmZvcm0gZmluYWwgZm9ybSB2YWxpZGF0aW9uXG4gICAgICAgICAgICBwYXltZW50TWV0aG9kVmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuICAgICAgICAgICAgaWYgKHBheW1lbnRNZXRob2RWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XG4gICAgICAgICAgICAgICAgLy8gU2VyaWFsaXplIGZvcm0gZGF0YSBhbmQgcmVkdWNlIGl0IHRvIG9iamVjdFxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBfLnJlZHVjZSgkcGF5bWVudE1ldGhvZEZvcm0uc2VyaWFsaXplQXJyYXkoKSwgKG9iaiwgaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWZPYmogPSBvYmo7XG4gICAgICAgICAgICAgICAgICAgIHJlZk9ialtpdGVtLm5hbWVdID0gaXRlbS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlZk9iajtcbiAgICAgICAgICAgICAgICB9LCB7fSk7XG5cbiAgICAgICAgICAgICAgICAvLyBBc3NpZ24gY291bnRyeSBhbmQgc3RhdGUgY29kZVxuICAgICAgICAgICAgICAgIGNvbnN0IGNvdW50cnkgPSBfLmZpbmQodGhpcy5jb250ZXh0LmNvdW50cmllcywgKHsgdmFsdWUgfSkgPT4gdmFsdWUgPT09IGRhdGEuY291bnRyeSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSBjb3VudHJ5ICYmIF8uZmluZChjb3VudHJ5LnN0YXRlcywgKHsgdmFsdWUgfSkgPT4gdmFsdWUgPT09IGRhdGEuc3RhdGUpO1xuICAgICAgICAgICAgICAgIGRhdGEuY291bnRyeV9jb2RlID0gY291bnRyeSA/IGNvdW50cnkuY29kZSA6IGRhdGEuY291bnRyeTtcbiAgICAgICAgICAgICAgICBkYXRhLnN0YXRlX29yX3Byb3ZpbmNlX2NvZGUgPSBzdGF0ZSA/IHN0YXRlLmNvZGUgOiBkYXRhLnN0YXRlO1xuXG4gICAgICAgICAgICAgICAgLy8gRGVmYXVsdCBJbnN0cnVtZW50XG4gICAgICAgICAgICAgICAgZGF0YS5kZWZhdWx0X2luc3RydW1lbnQgPSAhIWRhdGEuZGVmYXVsdF9pbnN0cnVtZW50O1xuXG4gICAgICAgICAgICAgICAgLy8gU3RvcmUgY3JlZGl0IGNhcmRcbiAgICAgICAgICAgICAgICBzdG9yZUluc3RydW1lbnQodGhpcy5jb250ZXh0LCBkYXRhLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGhpcy5jb250ZXh0LnBheW1lbnRNZXRob2RzVXJsO1xuICAgICAgICAgICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMuY29udGV4dC5nZW5lcmljX2Vycm9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyRWRpdEFjY291bnRWYWxpZGF0aW9uKCRlZGl0QWNjb3VudEZvcm0pIHtcbiAgICAgICAgY29uc3QgdmFsaWRhdGlvbk1vZGVsID0gdmFsaWRhdGlvbigkZWRpdEFjY291bnRGb3JtKTtcbiAgICAgICAgY29uc3QgZm9ybUVkaXRTZWxlY3RvciA9ICdmb3JtW2RhdGEtZWRpdC1hY2NvdW50LWZvcm1dJztcbiAgICAgICAgY29uc3QgZWRpdFZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6ICcke2Zvcm1FZGl0U2VsZWN0b3J9IGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgZW1haWxTZWxlY3RvciA9IGAke2Zvcm1FZGl0U2VsZWN0b3J9IFtkYXRhLWZpZWxkLXR5cGU9XCJFbWFpbEFkZHJlc3NcIl1gO1xuICAgICAgICBjb25zdCAkZW1haWxFbGVtZW50ID0gJChlbWFpbFNlbGVjdG9yKTtcbiAgICAgICAgY29uc3QgcGFzc3dvcmRTZWxlY3RvciA9IGAke2Zvcm1FZGl0U2VsZWN0b3J9IFtkYXRhLWZpZWxkLXR5cGU9XCJQYXNzd29yZFwiXWA7XG4gICAgICAgIGNvbnN0ICRwYXNzd29yZEVsZW1lbnQgPSAkKHBhc3N3b3JkU2VsZWN0b3IpO1xuICAgICAgICBjb25zdCBwYXNzd29yZDJTZWxlY3RvciA9IGAke2Zvcm1FZGl0U2VsZWN0b3J9IFtkYXRhLWZpZWxkLXR5cGU9XCJDb25maXJtUGFzc3dvcmRcIl1gO1xuICAgICAgICBjb25zdCAkcGFzc3dvcmQyRWxlbWVudCA9ICQocGFzc3dvcmQyU2VsZWN0b3IpO1xuICAgICAgICBjb25zdCBjdXJyZW50UGFzc3dvcmRTZWxlY3RvciA9IGAke2Zvcm1FZGl0U2VsZWN0b3J9IFtkYXRhLWZpZWxkLXR5cGU9XCJDdXJyZW50UGFzc3dvcmRcIl1gO1xuICAgICAgICBjb25zdCAkY3VycmVudFBhc3N3b3JkID0gJChjdXJyZW50UGFzc3dvcmRTZWxlY3Rvcik7XG5cbiAgICAgICAgLy8gVGhpcyBvbmx5IGhhbmRsZXMgdGhlIGN1c3RvbSBmaWVsZHMsIHN0YW5kYXJkIGZpZWxkcyBhcmUgYWRkZWQgYmVsb3dcbiAgICAgICAgZWRpdFZhbGlkYXRvci5hZGQodmFsaWRhdGlvbk1vZGVsKTtcblxuICAgICAgICBpZiAoJGVtYWlsRWxlbWVudCkge1xuICAgICAgICAgICAgZWRpdFZhbGlkYXRvci5yZW1vdmUoZW1haWxTZWxlY3Rvcik7XG4gICAgICAgICAgICBWYWxpZGF0b3JzLnNldEVtYWlsVmFsaWRhdGlvbihlZGl0VmFsaWRhdG9yLCBlbWFpbFNlbGVjdG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkcGFzc3dvcmRFbGVtZW50ICYmICRwYXNzd29yZDJFbGVtZW50KSB7XG4gICAgICAgICAgICBlZGl0VmFsaWRhdG9yLnJlbW92ZShwYXNzd29yZFNlbGVjdG9yKTtcbiAgICAgICAgICAgIGVkaXRWYWxpZGF0b3IucmVtb3ZlKHBhc3N3b3JkMlNlbGVjdG9yKTtcbiAgICAgICAgICAgIFZhbGlkYXRvcnMuc2V0UGFzc3dvcmRWYWxpZGF0aW9uKFxuICAgICAgICAgICAgICAgIGVkaXRWYWxpZGF0b3IsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmRTZWxlY3RvcixcbiAgICAgICAgICAgICAgICBwYXNzd29yZDJTZWxlY3RvcixcbiAgICAgICAgICAgICAgICB0aGlzLnBhc3N3b3JkUmVxdWlyZW1lbnRzLFxuICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRjdXJyZW50UGFzc3dvcmQpIHtcbiAgICAgICAgICAgIGVkaXRWYWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogY3VycmVudFBhc3N3b3JkU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWwgPT09ICcnICYmICRwYXNzd29yZEVsZW1lbnQudmFsKCkgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5jdXJyZW50UGFzc3dvcmQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVkaXRWYWxpZGF0b3IuYWRkKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogYCR7Zm9ybUVkaXRTZWxlY3Rvcn0gaW5wdXRbbmFtZT0nYWNjb3VudF9maXJzdG5hbWUnXWAsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmZpcnN0TmFtZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGAke2Zvcm1FZGl0U2VsZWN0b3J9IGlucHV0W25hbWU9J2FjY291bnRfbGFzdG5hbWUnXWAsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0Lmxhc3ROYW1lLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSk7XG5cbiAgICAgICAgJGVkaXRBY2NvdW50Rm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZWRpdFZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcblxuICAgICAgICAgICAgaWYgKGVkaXRWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZWdpc3RlckluYm94VmFsaWRhdGlvbigkaW5ib3hGb3JtKSB7XG4gICAgICAgIGNvbnN0IGluYm94VmFsaWRhdG9yID0gbm9kKHtcbiAgICAgICAgICAgIHN1Ym1pdDogJ2Zvcm1bZGF0YS1pbmJveC1mb3JtXSBpbnB1dFt0eXBlPVwic3VibWl0XCJdJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaW5ib3hWYWxpZGF0b3IuYWRkKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Zvcm1bZGF0YS1pbmJveC1mb3JtXSBzZWxlY3RbbmFtZT1cIm1lc3NhZ2Vfb3JkZXJfaWRcIl0nLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBOdW1iZXIodmFsKSAhPT0gMDtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQuZW50ZXJPcmRlck51bSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdmb3JtW2RhdGEtaW5ib3gtZm9ybV0gaW5wdXRbbmFtZT1cIm1lc3NhZ2Vfc3ViamVjdFwiXScsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmVudGVyU3ViamVjdCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdmb3JtW2RhdGEtaW5ib3gtZm9ybV0gdGV4dGFyZWFbbmFtZT1cIm1lc3NhZ2VfY29udGVudFwiXScsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmVudGVyTWVzc2FnZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuXG4gICAgICAgICRpbmJveEZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGluYm94VmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuXG4gICAgICAgICAgICBpZiAoaW5ib3hWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCIvKipcbiAqIFZhbGlkYXRlIHRoYXQgdGhlIGdpdmVuIGRhdGUgZm9yIHRoZSBkYXkvbW9udGgveWVhciBzZWxlY3QgaW5wdXRzIGlzIHdpdGhpbiBwb3RlbnRpYWwgcmFuZ2VcbiAqIEBwYXJhbSAkZm9ybUZpZWxkXG4gKiBAcGFyYW0gdmFsaWRhdGlvblxuICogQHJldHVybnMge3tzZWxlY3Rvcjogc3RyaW5nLCB0cmlnZ2VyZWRCeTogc3RyaW5nLCB2YWxpZGF0ZTogRnVuY3Rpb24sIGVycm9yTWVzc2FnZTogc3RyaW5nfX1cbiAqL1xuZnVuY3Rpb24gYnVpbGREYXRlVmFsaWRhdGlvbigkZm9ybUZpZWxkLCB2YWxpZGF0aW9uKSB7XG4gICAgLy8gTm8gZGF0ZSByYW5nZSByZXN0cmljdGlvbiwgc2tpcFxuICAgIGlmICh2YWxpZGF0aW9uLm1pbl9kYXRlICYmIHZhbGlkYXRpb24ubWF4X2RhdGUpIHtcbiAgICAgICAgY29uc3QgaW52YWxpZE1lc3NhZ2UgPSBgWW91ciBjaG9zZW4gZGF0ZSBtdXN0IGZhbGwgYmV0d2VlbiAke3ZhbGlkYXRpb24ubWluX2RhdGV9IGFuZCAke3ZhbGlkYXRpb24ubWF4X2RhdGV9LmA7XG4gICAgICAgIGNvbnN0IGZvcm1FbGVtZW50SWQgPSAkZm9ybUZpZWxkLmF0dHIoJ2lkJyk7XG4gICAgICAgIGNvbnN0IG1pblNwbGl0ID0gdmFsaWRhdGlvbi5taW5fZGF0ZS5zcGxpdCgnLScpO1xuICAgICAgICBjb25zdCBtYXhTcGxpdCA9IHZhbGlkYXRpb24ubWF4X2RhdGUuc3BsaXQoJy0nKTtcbiAgICAgICAgY29uc3QgbWluRGF0ZSA9IG5ldyBEYXRlKG1pblNwbGl0WzBdLCBtaW5TcGxpdFsxXSAtIDEsIG1pblNwbGl0WzJdKTtcbiAgICAgICAgY29uc3QgbWF4RGF0ZSA9IG5ldyBEYXRlKG1heFNwbGl0WzBdLCBtYXhTcGxpdFsxXSAtIDEsIG1heFNwbGl0WzJdKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2VsZWN0b3I6IGAjJHtmb3JtRWxlbWVudElkfSBzZWxlY3RbZGF0YS1sYWJlbD1cInllYXJcIl1gLFxuICAgICAgICAgICAgdHJpZ2dlcmVkQnk6IGAjJHtmb3JtRWxlbWVudElkfSBzZWxlY3Q6bm90KFtkYXRhLWxhYmVsPVwieWVhclwiXSlgLFxuICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF5ID0gTnVtYmVyKCRmb3JtRmllbGQuZmluZCgnc2VsZWN0W2RhdGEtbGFiZWw9XCJkYXlcIl0nKS52YWwoKSk7XG4gICAgICAgICAgICAgICAgY29uc3QgbW9udGggPSBOdW1iZXIoJGZvcm1GaWVsZC5maW5kKCdzZWxlY3RbZGF0YS1sYWJlbD1cIm1vbnRoXCJdJykudmFsKCkpIC0gMTtcbiAgICAgICAgICAgICAgICBjb25zdCB5ZWFyID0gTnVtYmVyKHZhbCk7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hvc2VuRGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCBkYXkpO1xuXG4gICAgICAgICAgICAgICAgY2IoY2hvc2VuRGF0ZSA+PSBtaW5EYXRlICYmIGNob3NlbkRhdGUgPD0gbWF4RGF0ZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBpbnZhbGlkTWVzc2FnZSxcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbi8qKlxuICogV2UgdmFsaWRhdGUgY2hlY2tib3hlcyBzZXBhcmF0ZWx5IGZyb20gc2luZ2xlIGlucHV0IGZpZWxkcywgYXMgdGhleSBtdXN0IGhhdmUgYXQgbGVhc3Qgb25lIGNoZWNrZWQgb3B0aW9uXG4gKiBmcm9tIG1hbnkgZGlmZmVyZW50IGlucHV0c1xuICogQHBhcmFtICRmb3JtRmllbGRcbiAqIEBwYXJhbSB2YWxpZGF0aW9uXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkUmVxdWlyZWRDaGVja2JveFZhbGlkYXRpb24oJGZvcm1GaWVsZCwgdmFsaWRhdGlvbikge1xuICAgIGNvbnN0IGZvcm1GaWVsZElkID0gJGZvcm1GaWVsZC5hdHRyKCdpZCcpO1xuICAgIGNvbnN0IHByaW1hcnlTZWxlY3RvciA9IGAjJHtmb3JtRmllbGRJZH0gaW5wdXQ6Zmlyc3Qtb2YtdHlwZWA7XG4gICAgY29uc3Qgc2Vjb25kYXJ5U2VsZWN0b3IgPSBgIyR7Zm9ybUZpZWxkSWR9IGlucHV0YDtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHNlbGVjdG9yOiBwcmltYXJ5U2VsZWN0b3IsXG4gICAgICAgIHRyaWdnZXJlZEJ5OiBzZWNvbmRhcnlTZWxlY3RvcixcbiAgICAgICAgdmFsaWRhdGU6IChjYikgPT4ge1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAkKHNlY29uZGFyeVNlbGVjdG9yKS5lYWNoKChpbmRleCwgY2hlY2tib3gpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3JNZXNzYWdlOiBgVGhlICcke3ZhbGlkYXRpb24ubGFiZWx9JyBmaWVsZCBjYW5ub3QgYmUgYmxhbmsuYCxcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBidWlsZFJlcXVpcmVkVmFsaWRhdGlvbih2YWxpZGF0aW9uLCBzZWxlY3Rvcikge1xuICAgIHJldHVybiB7XG4gICAgICAgIHNlbGVjdG9yLFxuICAgICAgICB2YWxpZGF0ZShjYiwgdmFsKSB7XG4gICAgICAgICAgICBjYih2YWwubGVuZ3RoID4gMCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yTWVzc2FnZTogYFRoZSAnJHt2YWxpZGF0aW9uLmxhYmVsfScgZmllbGQgY2Fubm90IGJlIGJsYW5rLmAsXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gYnVpbGROdW1iZXJSYW5nZVZhbGlkYXRpb24odmFsaWRhdGlvbiwgZm9ybUZpZWxkU2VsZWN0b3IpIHtcbiAgICBjb25zdCBpbnZhbGlkTWVzc2FnZSA9IGBUaGUgdmFsdWUgZm9yICR7dmFsaWRhdGlvbi5sYWJlbH0gbXVzdCBiZSBiZXR3ZWVuICR7dmFsaWRhdGlvbi5taW59IGFuZCAke3ZhbGlkYXRpb24ubWF4fS5gO1xuICAgIGNvbnN0IG1pbiA9IE51bWJlcih2YWxpZGF0aW9uLm1pbik7XG4gICAgY29uc3QgbWF4ID0gTnVtYmVyKHZhbGlkYXRpb24ubWF4KTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHNlbGVjdG9yOiBgJHtmb3JtRmllbGRTZWxlY3Rvcn0gaW5wdXRbbmFtZT1cIiR7dmFsaWRhdGlvbi5uYW1lfVwiXWAsXG4gICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbnVtYmVyVmFsID0gTnVtYmVyKHZhbCk7XG5cbiAgICAgICAgICAgIGNiKG51bWJlclZhbCA+PSBtaW4gJiYgbnVtYmVyVmFsIDw9IG1heCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yTWVzc2FnZTogaW52YWxpZE1lc3NhZ2UsXG4gICAgfTtcbn1cblxuXG5mdW5jdGlvbiBidWlsZFZhbGlkYXRpb24oJHZhbGlkYXRlYWJsZUVsZW1lbnQpIHtcbiAgICBjb25zdCB2YWxpZGF0aW9uID0gJHZhbGlkYXRlYWJsZUVsZW1lbnQuZGF0YSgndmFsaWRhdGlvbicpO1xuICAgIGNvbnN0IGZpZWxkVmFsaWRhdGlvbnMgPSBbXTtcbiAgICBjb25zdCBmb3JtRmllbGRTZWxlY3RvciA9IGAjJHskdmFsaWRhdGVhYmxlRWxlbWVudC5hdHRyKCdpZCcpfWA7XG5cbiAgICBpZiAodmFsaWRhdGlvbi50eXBlID09PSAnZGF0ZWNob29zZXInKSB7XG4gICAgICAgIGNvbnN0IGRhdGVWYWxpZGF0aW9uID0gYnVpbGREYXRlVmFsaWRhdGlvbigkdmFsaWRhdGVhYmxlRWxlbWVudCwgdmFsaWRhdGlvbik7XG5cbiAgICAgICAgaWYgKGRhdGVWYWxpZGF0aW9uKSB7XG4gICAgICAgICAgICBmaWVsZFZhbGlkYXRpb25zLnB1c2goZGF0ZVZhbGlkYXRpb24pO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmICh2YWxpZGF0aW9uLnJlcXVpcmVkICYmICh2YWxpZGF0aW9uLnR5cGUgPT09ICdjaGVja2JveHNlbGVjdCcgfHwgdmFsaWRhdGlvbi50eXBlID09PSAncmFkaW9zZWxlY3QnKSkge1xuICAgICAgICBmaWVsZFZhbGlkYXRpb25zLnB1c2goYnVpbGRSZXF1aXJlZENoZWNrYm94VmFsaWRhdGlvbigkdmFsaWRhdGVhYmxlRWxlbWVudCwgdmFsaWRhdGlvbikpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICR2YWxpZGF0ZWFibGVFbGVtZW50LmZpbmQoJ2lucHV0LCBzZWxlY3QsIHRleHRhcmVhJykuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRpbnB1dEVsZW1lbnQgPSAkKGVsZW1lbnQpO1xuICAgICAgICAgICAgY29uc3QgdGFnTmFtZSA9ICRpbnB1dEVsZW1lbnQuZ2V0KDApLnRhZ05hbWU7XG4gICAgICAgICAgICBjb25zdCBpbnB1dE5hbWUgPSAkaW5wdXRFbGVtZW50LmF0dHIoJ25hbWUnKTtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRTZWxlY3RvciA9IGAke2Zvcm1GaWVsZFNlbGVjdG9yfSAke3RhZ05hbWV9W25hbWU9XCIke2lucHV0TmFtZX1cIl1gO1xuXG4gICAgICAgICAgICBpZiAodmFsaWRhdGlvbi50eXBlID09PSAnbnVtYmVyb25seScpIHtcbiAgICAgICAgICAgICAgICBmaWVsZFZhbGlkYXRpb25zLnB1c2goYnVpbGROdW1iZXJSYW5nZVZhbGlkYXRpb24odmFsaWRhdGlvbiwgZm9ybUZpZWxkU2VsZWN0b3IpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uLnJlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgZmllbGRWYWxpZGF0aW9ucy5wdXNoKGJ1aWxkUmVxdWlyZWRWYWxpZGF0aW9uKHZhbGlkYXRpb24sIGVsZW1lbnRTZWxlY3RvcikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmllbGRWYWxpZGF0aW9ucztcbn1cblxuLyoqXG4gKiBCdWlsZHMgdGhlIHZhbGlkYXRpb24gbW9kZWwgZm9yIGR5bmFtaWMgZm9ybXNcbiAqIEBwYXJhbSAkZm9ybVxuICogQHJldHVybnMge0FycmF5fVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoJGZvcm0pIHtcbiAgICBsZXQgdmFsaWRhdGlvbnNUb1BlcmZvcm0gPSBbXTtcblxuICAgICRmb3JtLmZpbmQoJ1tkYXRhLXZhbGlkYXRpb25dJykuZWFjaCgoaW5kZXgsIGlucHV0KSA9PiB7XG4gICAgICAgIHZhbGlkYXRpb25zVG9QZXJmb3JtID0gdmFsaWRhdGlvbnNUb1BlcmZvcm0uY29uY2F0KGJ1aWxkVmFsaWRhdGlvbigkKGlucHV0KSkpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHZhbGlkYXRpb25zVG9QZXJmb3JtO1xufVxuIiwiaW1wb3J0IGNyZWRpdGNhcmRzIGZyb20gJ2NyZWRpdGNhcmRzJztcblxuLyoqXG4gKiBPbWl0IG51bGwgb3IgZW1wdHkgc3RyaW5nIHByb3BlcnRpZXMgb2Ygb2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG5jb25zdCBvbWl0TnVsbFN0cmluZyA9IG9iaiA9PiB7XG4gICAgY29uc3QgcmVmT2JqID0gb2JqO1xuXG4gICAgJC5lYWNoKHJlZk9iaiwgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgZGVsZXRlIHJlZk9ialtrZXldO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVmT2JqO1xufTtcblxuLyoqXG4gKiBHZXQgY3JlZGl0IGNhcmQgdHlwZSBmcm9tIGNyZWRpdCBjYXJkIG51bWJlclxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKi9cbmV4cG9ydCBjb25zdCBjcmVkaXRDYXJkVHlwZSA9IHZhbHVlID0+IGNyZWRpdGNhcmRzLmNhcmQudHlwZShjcmVkaXRjYXJkcy5jYXJkLnBhcnNlKHZhbHVlKSwgdHJ1ZSk7XG5cbi8qKlxuICogV3JhcHBlciBmb3IgYWpheCByZXF1ZXN0IHRvIHN0b3JlIGEgbmV3IGluc3RydW1lbnQgaW4gYmlncGF5XG4gKiBAcGFyYW0ge29iamVjdH0gUmVwcmVzZW50aW5nIHRoZSBkYXRhIG5lZWRlZCBmb3IgdGhlIGhlYWRlclxuICogQHBhcmFtIHtvYmplY3R9IFJlcHJlc2VudGluZyB0aGUgZGF0YSBuZWVkZWQgZm9yIHRoZSBib2R5XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBkb25lIEZ1bmN0aW9uIHRvIGV4ZWN1dGUgb24gYSBzdWNjZXNzZnVsIHJlc3BvbnNlXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmYWlsIEZ1bmN0aW9uIHRvIGV4ZWN1dGUgb24gYSB1bnN1Y2Nlc3NmdWwgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IGNvbnN0IHN0b3JlSW5zdHJ1bWVudCA9ICh7XG4gICAgLy8gSG9zdG5hbWUsIElkcyAmIFRva2VuXG4gICAgcGF5bWVudHNVcmwsXG4gICAgc2hvcHBlcklkLFxuICAgIHN0b3JlSGFzaCxcbiAgICB2YXVsdFRva2VuLFxufSwge1xuICAgIC8qIGVzbGludC1kaXNhYmxlICovXG4gICAgLy8gUHJvdmlkZXIgSW5mb1xuICAgIHByb3ZpZGVyX2lkLFxuICAgIGN1cnJlbmN5X2NvZGUsXG5cbiAgICAvLyBJbnN0cnVtZW50IERldGFpbHNcbiAgICBjcmVkaXRfY2FyZF9udW1iZXIsXG4gICAgZXhwaXJhdGlvbixcbiAgICBuYW1lX29uX2NhcmQsXG4gICAgY3Z2LFxuICAgIGRlZmF1bHRfaW5zdHJ1bWVudCxcblxuICAgIC8vIEJpbGxpbmcgQWRkcmVzc1xuICAgIGFkZHJlc3MxLFxuICAgIGFkZHJlc3MyLFxuICAgIGNpdHksXG4gICAgcG9zdGFsX2NvZGUsXG4gICAgc3RhdGVfb3JfcHJvdmluY2VfY29kZSxcbiAgICBjb3VudHJ5X2NvZGUsXG4gICAgY29tcGFueSxcbiAgICBmaXJzdF9uYW1lLFxuICAgIGxhc3RfbmFtZSxcbiAgICBlbWFpbCxcbiAgICBwaG9uZSxcbiAgICAvKiBlc2xpbnQtZW5hYmxlICovXG59LCBkb25lLCBmYWlsKSA9PiB7XG4gICAgY29uc3QgZXhwaXJ5ID0gZXhwaXJhdGlvbi5zcGxpdCgnLycpO1xuXG4gICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiBgJHtwYXltZW50c1VybH0vc3RvcmVzLyR7c3RvcmVIYXNofS9jdXN0b21lcnMvJHtzaG9wcGVySWR9L3N0b3JlZF9pbnN0cnVtZW50c2AsXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBjYWNoZTogZmFsc2UsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IHZhdWx0VG9rZW4sXG4gICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi92bmQuYmMudjEranNvbicsXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3ZuZC5iYy52MStqc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgaW5zdHJ1bWVudDoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdjYXJkJyxcbiAgICAgICAgICAgICAgICBjYXJkaG9sZGVyX25hbWU6IG5hbWVfb25fY2FyZCxcbiAgICAgICAgICAgICAgICBudW1iZXI6IGNyZWRpdGNhcmRzLmNhcmQucGFyc2UoY3JlZGl0X2NhcmRfbnVtYmVyKSxcbiAgICAgICAgICAgICAgICBleHBpcnlfbW9udGg6IGNyZWRpdGNhcmRzLmV4cGlyYXRpb24ubW9udGgucGFyc2UoZXhwaXJ5WzBdKSxcbiAgICAgICAgICAgICAgICBleHBpcnlfeWVhcjogY3JlZGl0Y2FyZHMuZXhwaXJhdGlvbi55ZWFyLnBhcnNlKGV4cGlyeVsxXSwgdHJ1ZSksXG4gICAgICAgICAgICAgICAgdmVyaWZpY2F0aW9uX3ZhbHVlOiBjdnYsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmlsbGluZ19hZGRyZXNzOiBvbWl0TnVsbFN0cmluZyh7XG4gICAgICAgICAgICAgICAgYWRkcmVzczEsXG4gICAgICAgICAgICAgICAgYWRkcmVzczIsXG4gICAgICAgICAgICAgICAgY2l0eSxcbiAgICAgICAgICAgICAgICBwb3N0YWxfY29kZSxcbiAgICAgICAgICAgICAgICBzdGF0ZV9vcl9wcm92aW5jZV9jb2RlLFxuICAgICAgICAgICAgICAgIGNvdW50cnlfY29kZSxcbiAgICAgICAgICAgICAgICBjb21wYW55LFxuICAgICAgICAgICAgICAgIGZpcnN0X25hbWUsXG4gICAgICAgICAgICAgICAgbGFzdF9uYW1lLFxuICAgICAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgICAgIHBob25lLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBwcm92aWRlcl9pZCxcbiAgICAgICAgICAgIGRlZmF1bHRfaW5zdHJ1bWVudCxcbiAgICAgICAgICAgIGN1cnJlbmN5X2NvZGUsXG4gICAgICAgIH0pLFxuICAgIH0pXG4gICAgICAgIC5kb25lKGRvbmUpXG4gICAgICAgIC5mYWlsKGZhaWwpO1xufTtcblxuZXhwb3J0IGNvbnN0IEZvcm1hdHRlcnMgPSB7XG4gICAgLyoqXG4gICAgICogU2V0cyB1cCBhIGZvcm1hdCBmb3IgY3JlZGl0IGNhcmQgbnVtYmVyXG4gICAgICogQHBhcmFtIGZpZWxkXG4gICAgICovXG4gICAgc2V0Q3JlZGl0Q2FyZE51bWJlckZvcm1hdDogZmllbGQgPT4ge1xuICAgICAgICBpZiAoZmllbGQpIHtcbiAgICAgICAgICAgICQoZmllbGQpLm9uKCdrZXl1cCcsICh7IHRhcmdldCB9KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVmVGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICAgICAgICAgIHJlZlRhcmdldC52YWx1ZSA9IGNyZWRpdGNhcmRzLmNhcmQuZm9ybWF0KGNyZWRpdGNhcmRzLmNhcmQucGFyc2UodGFyZ2V0LnZhbHVlKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIGEgZm9ybWF0IGZvciBleHBpcmF0aW9uIGRhdGVcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKi9cbiAgICBzZXRFeHBpcmF0aW9uRm9ybWF0OiBmaWVsZCA9PiB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgJChmaWVsZCkub24oJ2tleXVwJywgKHsgdGFyZ2V0LCB3aGljaCB9KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVmVGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICAgICAgICAgIGlmICh3aGljaCA9PT0gOCAmJiAvLiooXFwvKSQvLnRlc3QodGFyZ2V0LnZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICByZWZUYXJnZXQudmFsdWUgPSB0YXJnZXQudmFsdWUuc2xpY2UoMCwgLTEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LnZhbHVlLmxlbmd0aCA+IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVmVGFyZ2V0LnZhbHVlID0gdGFyZ2V0LnZhbHVlLnNsaWNlKDAsIDUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAod2hpY2ggIT09IDgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVmVGFyZ2V0LnZhbHVlID0gdGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXihbMS05XVxcL3xbMi05XSkkL2csICcwJDEvJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eKDBbMS05XXwxWzAtMl0pJC9nLCAnJDEvJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eKFswLTFdKShbMy05XSkkL2csICcwJDEvJDInKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL14oMFsxLTldfDFbMC0yXSkoWzAtOV17Mn0pJC9nLCAnJDEvJDInKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL14oWzBdKylcXC98WzBdKyQvZywgJzAnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1teXFxkXFwvXXxeW1xcL10qJC9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXC9cXC8vZywgJy8nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG59O1xuXG5leHBvcnQgY29uc3QgVmFsaWRhdG9ycyA9IHtcbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIGEgdmFsaWRhdGlvbiBmb3IgY3JlZGl0IGNhcmQgbnVtYmVyXG4gICAgICogQHBhcmFtIHZhbGlkYXRvclxuICAgICAqIEBwYXJhbSBmaWVsZFxuICAgICAqIEBwYXJhbSBlcnJvck1lc3NhZ2VcbiAgICAgKi9cbiAgICBzZXRDcmVkaXRDYXJkTnVtYmVyVmFsaWRhdGlvbjogKHZhbGlkYXRvciwgZmllbGQsIGVycm9yTWVzc2FnZSkgPT4ge1xuICAgICAgICBpZiAoZmllbGQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBmaWVsZCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aCAmJiBjcmVkaXRjYXJkcy5jYXJkLmlzVmFsaWQoY3JlZGl0Y2FyZHMuY2FyZC5wYXJzZSh2YWwpKTtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB1cCBhIHZhbGlkYXRpb24gZm9yIGV4cGlyYXRpb24gZGF0ZVxuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKiBAcGFyYW0gZXJyb3JNZXNzYWdlXG4gICAgICovXG4gICAgc2V0RXhwaXJhdGlvblZhbGlkYXRpb246ICh2YWxpZGF0b3IsIGZpZWxkLCBlcnJvck1lc3NhZ2UpID0+IHtcbiAgICAgICAgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogZmllbGQsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4cGlyeSA9IHZhbC5zcGxpdCgnLycpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gdmFsLmxlbmd0aCAmJiAvXigwWzEtOV18MVswLTJdKVxcLyhbMC05XXsyfSkkLy50ZXN0KHZhbCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCAmJiAhY3JlZGl0Y2FyZHMuZXhwaXJhdGlvbi5pc1Bhc3QoY3JlZGl0Y2FyZHMuZXhwaXJhdGlvbi5tb250aC5wYXJzZShleHBpcnlbMF0pLCBjcmVkaXRjYXJkcy5leHBpcmF0aW9uLnllYXIucGFyc2UoZXhwaXJ5WzFdLCB0cnVlKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldHMgdXAgYSB2YWxpZGF0aW9uIGZvciBuYW1lIG9uIGNhcmRcbiAgICAgKiBAcGFyYW0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIGZpZWxkXG4gICAgICogQHBhcmFtIGVycm9yTWVzc2FnZVxuICAgICAqL1xuICAgIHNldE5hbWVPbkNhcmRWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBmaWVsZCwgZXJyb3JNZXNzYWdlKSA9PiB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGZpZWxkLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSAhIXZhbC5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldHMgdXAgYSB2YWxpZGF0aW9uIGZvciBjdnZcbiAgICAgKiBAcGFyYW0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIGZpZWxkXG4gICAgICogQHBhcmFtIGVycm9yTWVzc2FnZVxuICAgICAqIEBwYXJhbSB7YW55fSBjYXJkVHlwZSBUaGUgY3JlZGl0IGNhcmQgbnVtYmVyIHR5cGVcbiAgICAgKi9cbiAgICBzZXRDdnZWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBmaWVsZCwgZXJyb3JNZXNzYWdlLCBjYXJkVHlwZSkgPT4ge1xuICAgICAgICBpZiAoZmllbGQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBmaWVsZCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IHR5cGVvZiBjYXJkVHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IGNhcmRUeXBlKCkgOiBjYXJkVHlwZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aCAmJiBjcmVkaXRjYXJkcy5jdmMuaXNWYWxpZCh2YWwsIHR5cGUpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG59O1xuIiwiaW1wb3J0ICd3ZWFrbWFwLXBvbHlmaWxsJztcbmltcG9ydCBzd2VldEFsZXJ0IGZyb20gJ3N3ZWV0YWxlcnQyJztcblxuLy8gV2Vha01hcCB3aWxsIGRlZmluZWQgaW4gdGhlIGdsb2JhbCBzY29wZSBpZiBuYXRpdmUgV2Vha01hcCBpcyBub3Qgc3VwcG9ydGVkLlxuY29uc3Qgd2Vha01hcCA9IG5ldyBXZWFrTWFwKCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcblxuLy8gU2V0IGRlZmF1bHRzIGZvciBzd2VldGFsZXJ0MiBwb3B1cCBib3hlc1xuY29uc3QgU3dhbCA9IHN3ZWV0QWxlcnQubWl4aW4oe1xuICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZSxcbiAgICBjdXN0b21DbGFzczoge1xuICAgICAgICBjb25maXJtQnV0dG9uOiAnYnV0dG9uJyxcbiAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnV0dG9uJyxcbiAgICB9LFxufSk7XG5cbi8vIFJlLWV4cG9ydFxuZXhwb3J0IGRlZmF1bHQgU3dhbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=