(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./assets/js/theme/auth.js":
/*!*********************************!*\
  !*** ./assets/js/theme/auth.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Auth; });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_state_country__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/state-country */ "./assets/js/theme/common/state-country.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _common_form_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/form-validation */ "./assets/js/theme/common/form-validation.js");
/* harmony import */ var _common_models_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/models/forms */ "./assets/js/theme/common/models/forms.js");
/* harmony import */ var _common_form_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/form-utils */ "./assets/js/theme/common/form-utils.js");


function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var Auth = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Auth, _PageManager);

  function Auth(context) {
    var _this;

    _this = _PageManager.call(this, context) || this;
    _this.formCreateSelector = 'form[data-create-account-form]';
    return _this;
  }

  var _proto = Auth.prototype;

  _proto.registerLoginValidation = function registerLoginValidation($loginForm) {
    var _this2 = this;

    var loginModel = _common_models_forms__WEBPACK_IMPORTED_MODULE_5__["default"];
    this.loginValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
      submit: '.login-form input[type="submit"]'
    });
    this.loginValidator.add([{
      selector: '.login-form input[name="login_email"]',
      validate: function validate(cb, val) {
        var result = loginModel.email(val);
        cb(result);
      },
      errorMessage: this.context.useValidEmail
    }, {
      selector: '.login-form input[name="login_pass"]',
      validate: function validate(cb, val) {
        var result = loginModel.password(val);
        cb(result);
      },
      errorMessage: this.context.enterPass
    }]);
    $loginForm.on('submit', function (event) {
      _this2.loginValidator.performCheck();

      if (_this2.loginValidator.areAll('valid')) {
        return;
      }

      event.preventDefault();
    });
  };

  _proto.registerForgotPasswordValidation = function registerForgotPasswordValidation($forgotPasswordForm) {
    var _this3 = this;

    this.forgotPasswordValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
      submit: '.forgot-password-form input[type="submit"]'
    });
    this.forgotPasswordValidator.add([{
      selector: '.forgot-password-form input[name="email"]',
      validate: function validate(cb, val) {
        var result = _common_models_forms__WEBPACK_IMPORTED_MODULE_5__["default"].email(val);
        cb(result);
      },
      errorMessage: this.context.useValidEmail
    }]);
    $forgotPasswordForm.on('submit', function (event) {
      _this3.forgotPasswordValidator.performCheck();

      if (_this3.forgotPasswordValidator.areAll('valid')) {
        return;
      }

      event.preventDefault();
    });
  };

  _proto.registerNewPasswordValidation = function registerNewPasswordValidation() {
    var newPasswordForm = '.new-password-form';
    var newPasswordValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
      submit: $(newPasswordForm + " input[type=\"submit\"]")
    });
    var passwordSelector = $(newPasswordForm + " input[name=\"password\"]");
    var password2Selector = $(newPasswordForm + " input[name=\"password_confirm\"]");
    _common_form_utils__WEBPACK_IMPORTED_MODULE_6__["Validators"].setPasswordValidation(newPasswordValidator, passwordSelector, password2Selector, this.passwordRequirements);
  };

  _proto.registerCreateAccountValidator = function registerCreateAccountValidator($createAccountForm) {
    var validationModel = Object(_common_form_validation__WEBPACK_IMPORTED_MODULE_4__["default"])($createAccountForm);
    var createAccountValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
      submit: this.formCreateSelector + " input[type='submit']"
    });
    var $stateElement = $('[data-field-type="State"]');
    var emailSelector = this.formCreateSelector + " [data-field-type='EmailAddress']";
    var $emailElement = $(emailSelector);
    var passwordSelector = this.formCreateSelector + " [data-field-type='Password']";
    var $passwordElement = $(passwordSelector);
    var password2Selector = this.formCreateSelector + " [data-field-type='ConfirmPassword']";
    var $password2Element = $(password2Selector);
    createAccountValidator.add(validationModel);

    if ($stateElement) {
      var $last; // Requests the states for a country with AJAX

      Object(_common_state_country__WEBPACK_IMPORTED_MODULE_2__["default"])($stateElement, this.context, function (err, field) {
        if (err) {
          throw new Error(err);
        }

        var $field = $(field);

        if (createAccountValidator.getStatus($stateElement) !== 'undefined') {
          createAccountValidator.remove($stateElement);
        }

        if ($last) {
          createAccountValidator.remove($last);
        }

        if ($field.is('select')) {
          $last = field;
          _common_form_utils__WEBPACK_IMPORTED_MODULE_6__["Validators"].setStateCountryValidation(createAccountValidator, field);
        } else {
          _common_form_utils__WEBPACK_IMPORTED_MODULE_6__["Validators"].cleanUpStateValidation(field);
        }
      });
    }

    if ($emailElement) {
      createAccountValidator.remove(emailSelector);
      _common_form_utils__WEBPACK_IMPORTED_MODULE_6__["Validators"].setEmailValidation(createAccountValidator, emailSelector);
    }

    if ($passwordElement && $password2Element) {
      createAccountValidator.remove(passwordSelector);
      createAccountValidator.remove(password2Selector);
      _common_form_utils__WEBPACK_IMPORTED_MODULE_6__["Validators"].setPasswordValidation(createAccountValidator, passwordSelector, password2Selector, this.passwordRequirements);
    }

    $createAccountForm.on('submit', function (event) {
      createAccountValidator.performCheck();

      if (createAccountValidator.areAll('valid')) {
        return;
      }

      event.preventDefault();
    });
  }
  /**
   * Request is made in this function to the remote endpoint and pulls back the states for country.
   */
  ;

  _proto.onReady = function onReady() {
    var $createAccountForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_6__["classifyForm"])(this.formCreateSelector);
    var $loginForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_6__["classifyForm"])('.login-form');
    var $forgotPasswordForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_6__["classifyForm"])('.forgot-password-form');
    var $newPasswordForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_6__["classifyForm"])('.new-password-form'); // reset password
    // Injected via auth.html

    this.passwordRequirements = this.context.passwordRequirements;

    if ($loginForm.length) {
      this.registerLoginValidation($loginForm);
    }

    if ($newPasswordForm.length) {
      this.registerNewPasswordValidation();
    }

    if ($forgotPasswordForm.length) {
      this.registerForgotPasswordValidation($forgotPasswordForm);
    }

    if ($createAccountForm.length) {
      this.registerCreateAccountValidator($createAccountForm);
    }
  };

  return Auth;
}(_page_manager__WEBPACK_IMPORTED_MODULE_1__["default"]);


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

/***/ "./node_modules/lodash/_baseFor.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseFor.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ "./node_modules/lodash/_createBaseFor.js");

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),

/***/ "./node_modules/lodash/_baseForOwn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseForOwn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(/*! ./_baseFor */ "./node_modules/lodash/_baseFor.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),

/***/ "./node_modules/lodash/_baseIteratee.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIteratee.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "./node_modules/lodash/_createBaseFor.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_createBaseFor.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),

/***/ "./node_modules/lodash/each.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/each.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),

/***/ "./node_modules/lodash/transform.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/transform.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayEach = __webpack_require__(/*! ./_arrayEach */ "./node_modules/lodash/_arrayEach.js"),
    baseCreate = __webpack_require__(/*! ./_baseCreate */ "./node_modules/lodash/_baseCreate.js"),
    baseForOwn = __webpack_require__(/*! ./_baseForOwn */ "./node_modules/lodash/_baseForOwn.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/**
 * An alternative to `_.reduce`; this method transforms `object` to a new
 * `accumulator` object which is the result of running each of its own
 * enumerable string keyed properties thru `iteratee`, with each invocation
 * potentially mutating the `accumulator` object. If `accumulator` is not
 * provided, a new object with the same `[[Prototype]]` will be used. The
 * iteratee is invoked with four arguments: (accumulator, value, key, object).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @since 1.3.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The custom accumulator value.
 * @returns {*} Returns the accumulated value.
 * @example
 *
 * _.transform([2, 3, 4], function(result, n) {
 *   result.push(n *= n);
 *   return n % 2 == 0;
 * }, []);
 * // => [4, 9]
 *
 * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
 *   (result[value] || (result[value] = [])).push(key);
 * }, {});
 * // => { '1': ['a', 'c'], '2': ['b'] }
 */
function transform(object, iteratee, accumulator) {
  var isArr = isArray(object),
      isArrLike = isArr || isBuffer(object) || isTypedArray(object);

  iteratee = baseIteratee(iteratee, 4);
  if (accumulator == null) {
    var Ctor = object && object.constructor;
    if (isArrLike) {
      accumulator = isArr ? new Ctor : [];
    }
    else if (isObject(object)) {
      accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
    }
    else {
      accumulator = {};
    }
  }
  (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object) {
    return iteratee(accumulator, value, index, object);
  });
  return accumulator;
}

module.exports = transform;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2Zvcm0tdmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlRm9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VGb3JPd24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUl0ZXJhdGVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NyZWF0ZUJhc2VGb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9lYWNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdHJhbnNmb3JtLmpzIl0sIm5hbWVzIjpbIkF1dGgiLCJjb250ZXh0IiwiZm9ybUNyZWF0ZVNlbGVjdG9yIiwicmVnaXN0ZXJMb2dpblZhbGlkYXRpb24iLCIkbG9naW5Gb3JtIiwibG9naW5Nb2RlbCIsImZvcm1zIiwibG9naW5WYWxpZGF0b3IiLCJub2QiLCJzdWJtaXQiLCJhZGQiLCJzZWxlY3RvciIsInZhbGlkYXRlIiwiY2IiLCJ2YWwiLCJyZXN1bHQiLCJlbWFpbCIsImVycm9yTWVzc2FnZSIsInVzZVZhbGlkRW1haWwiLCJwYXNzd29yZCIsImVudGVyUGFzcyIsIm9uIiwiZXZlbnQiLCJwZXJmb3JtQ2hlY2siLCJhcmVBbGwiLCJwcmV2ZW50RGVmYXVsdCIsInJlZ2lzdGVyRm9yZ290UGFzc3dvcmRWYWxpZGF0aW9uIiwiJGZvcmdvdFBhc3N3b3JkRm9ybSIsImZvcmdvdFBhc3N3b3JkVmFsaWRhdG9yIiwicmVnaXN0ZXJOZXdQYXNzd29yZFZhbGlkYXRpb24iLCJuZXdQYXNzd29yZEZvcm0iLCJuZXdQYXNzd29yZFZhbGlkYXRvciIsIiQiLCJwYXNzd29yZFNlbGVjdG9yIiwicGFzc3dvcmQyU2VsZWN0b3IiLCJWYWxpZGF0b3JzIiwic2V0UGFzc3dvcmRWYWxpZGF0aW9uIiwicGFzc3dvcmRSZXF1aXJlbWVudHMiLCJyZWdpc3RlckNyZWF0ZUFjY291bnRWYWxpZGF0b3IiLCIkY3JlYXRlQWNjb3VudEZvcm0iLCJ2YWxpZGF0aW9uTW9kZWwiLCJ2YWxpZGF0aW9uIiwiY3JlYXRlQWNjb3VudFZhbGlkYXRvciIsIiRzdGF0ZUVsZW1lbnQiLCJlbWFpbFNlbGVjdG9yIiwiJGVtYWlsRWxlbWVudCIsIiRwYXNzd29yZEVsZW1lbnQiLCIkcGFzc3dvcmQyRWxlbWVudCIsIiRsYXN0Iiwic3RhdGVDb3VudHJ5IiwiZXJyIiwiZmllbGQiLCJFcnJvciIsIiRmaWVsZCIsImdldFN0YXR1cyIsInJlbW92ZSIsImlzIiwic2V0U3RhdGVDb3VudHJ5VmFsaWRhdGlvbiIsImNsZWFuVXBTdGF0ZVZhbGlkYXRpb24iLCJzZXRFbWFpbFZhbGlkYXRpb24iLCJvblJlYWR5IiwiY2xhc3NpZnlGb3JtIiwiJG5ld1Bhc3N3b3JkRm9ybSIsImxlbmd0aCIsIlBhZ2VNYW5hZ2VyIiwiYnVpbGREYXRlVmFsaWRhdGlvbiIsIiRmb3JtRmllbGQiLCJtaW5fZGF0ZSIsIm1heF9kYXRlIiwiaW52YWxpZE1lc3NhZ2UiLCJmb3JtRWxlbWVudElkIiwiYXR0ciIsIm1pblNwbGl0Iiwic3BsaXQiLCJtYXhTcGxpdCIsIm1pbkRhdGUiLCJEYXRlIiwibWF4RGF0ZSIsInRyaWdnZXJlZEJ5IiwiZGF5IiwiTnVtYmVyIiwiZmluZCIsIm1vbnRoIiwieWVhciIsImNob3NlbkRhdGUiLCJidWlsZFJlcXVpcmVkQ2hlY2tib3hWYWxpZGF0aW9uIiwiZm9ybUZpZWxkSWQiLCJwcmltYXJ5U2VsZWN0b3IiLCJzZWNvbmRhcnlTZWxlY3RvciIsImVhY2giLCJpbmRleCIsImNoZWNrYm94IiwiY2hlY2tlZCIsImxhYmVsIiwiYnVpbGRSZXF1aXJlZFZhbGlkYXRpb24iLCJidWlsZE51bWJlclJhbmdlVmFsaWRhdGlvbiIsImZvcm1GaWVsZFNlbGVjdG9yIiwibWluIiwibWF4IiwibmFtZSIsIm51bWJlclZhbCIsImJ1aWxkVmFsaWRhdGlvbiIsIiR2YWxpZGF0ZWFibGVFbGVtZW50IiwiZGF0YSIsImZpZWxkVmFsaWRhdGlvbnMiLCJ0eXBlIiwiZGF0ZVZhbGlkYXRpb24iLCJwdXNoIiwicmVxdWlyZWQiLCJlbGVtZW50IiwiJGlucHV0RWxlbWVudCIsInRhZ05hbWUiLCJnZXQiLCJpbnB1dE5hbWUiLCJlbGVtZW50U2VsZWN0b3IiLCIkZm9ybSIsInZhbGlkYXRpb25zVG9QZXJmb3JtIiwiaW5wdXQiLCJjb25jYXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVxQkEsSTs7O0FBQ2pCLGdCQUFZQyxPQUFaLEVBQXFCO0FBQUE7O0FBQ2pCLG9DQUFNQSxPQUFOO0FBQ0EsVUFBS0Msa0JBQUwsR0FBMEIsZ0NBQTFCO0FBRmlCO0FBR3BCOzs7O1NBRURDLHVCLEdBQUEsaUNBQXdCQyxVQUF4QixFQUFvQztBQUFBOztBQUNoQyxRQUFNQyxVQUFVLEdBQUdDLDREQUFuQjtBQUVBLFNBQUtDLGNBQUwsR0FBc0JDLDJEQUFHLENBQUM7QUFDdEJDLFlBQU0sRUFBRTtBQURjLEtBQUQsQ0FBekI7QUFJQSxTQUFLRixjQUFMLENBQW9CRyxHQUFwQixDQUF3QixDQUNwQjtBQUNJQyxjQUFRLEVBQUUsdUNBRGQ7QUFFSUMsY0FBUSxFQUFFLGtCQUFDQyxFQUFELEVBQUtDLEdBQUwsRUFBYTtBQUNuQixZQUFNQyxNQUFNLEdBQUdWLFVBQVUsQ0FBQ1csS0FBWCxDQUFpQkYsR0FBakIsQ0FBZjtBQUVBRCxVQUFFLENBQUNFLE1BQUQsQ0FBRjtBQUNILE9BTkw7QUFPSUUsa0JBQVksRUFBRSxLQUFLaEIsT0FBTCxDQUFhaUI7QUFQL0IsS0FEb0IsRUFVcEI7QUFDSVAsY0FBUSxFQUFFLHNDQURkO0FBRUlDLGNBQVEsRUFBRSxrQkFBQ0MsRUFBRCxFQUFLQyxH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QUFHO0FBQ0g7QUFDQTs7QUFFQSIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XG5pbXBvcnQgc3RhdGVDb3VudHJ5IGZyb20gJy4vY29tbW9uL3N0YXRlLWNvdW50cnknO1xuaW1wb3J0IG5vZCBmcm9tICcuL2NvbW1vbi9ub2QnO1xuaW1wb3J0IHZhbGlkYXRpb24gZnJvbSAnLi9jb21tb24vZm9ybS12YWxpZGF0aW9uJztcbmltcG9ydCBmb3JtcyBmcm9tICcuL2NvbW1vbi9tb2RlbHMvZm9ybXMnO1xuaW1wb3J0IHsgY2xhc3NpZnlGb3JtLCBWYWxpZGF0b3JzIH0gZnJvbSAnLi9jb21tb24vZm9ybS11dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dGggZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcbiAgICAgICAgdGhpcy5mb3JtQ3JlYXRlU2VsZWN0b3IgPSAnZm9ybVtkYXRhLWNyZWF0ZS1hY2NvdW50LWZvcm1dJztcbiAgICB9XG5cbiAgICByZWdpc3RlckxvZ2luVmFsaWRhdGlvbigkbG9naW5Gb3JtKSB7XG4gICAgICAgIGNvbnN0IGxvZ2luTW9kZWwgPSBmb3JtcztcblxuICAgICAgICB0aGlzLmxvZ2luVmFsaWRhdG9yID0gbm9kKHtcbiAgICAgICAgICAgIHN1Ym1pdDogJy5sb2dpbi1mb3JtIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmxvZ2luVmFsaWRhdG9yLmFkZChbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcubG9naW4tZm9ybSBpbnB1dFtuYW1lPVwibG9naW5fZW1haWxcIl0nLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBsb2dpbk1vZGVsLmVtYWlsKHZhbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LnVzZVZhbGlkRW1haWwsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnLmxvZ2luLWZvcm0gaW5wdXRbbmFtZT1cImxvZ2luX3Bhc3NcIl0nLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBsb2dpbk1vZGVsLnBhc3N3b3JkKHZhbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmVudGVyUGFzcyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuXG4gICAgICAgICRsb2dpbkZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9naW5WYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmxvZ2luVmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJGb3Jnb3RQYXNzd29yZFZhbGlkYXRpb24oJGZvcmdvdFBhc3N3b3JkRm9ybSkge1xuICAgICAgICB0aGlzLmZvcmdvdFBhc3N3b3JkVmFsaWRhdG9yID0gbm9kKHtcbiAgICAgICAgICAgIHN1Ym1pdDogJy5mb3Jnb3QtcGFzc3dvcmQtZm9ybSBpbnB1dFt0eXBlPVwic3VibWl0XCJdJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5mb3Jnb3RQYXNzd29yZFZhbGlkYXRvci5hZGQoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnLmZvcmdvdC1wYXNzd29yZC1mb3JtIGlucHV0W25hbWU9XCJlbWFpbFwiXScsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGZvcm1zLmVtYWlsKHZhbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LnVzZVZhbGlkRW1haWwsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdKTtcblxuICAgICAgICAkZm9yZ290UGFzc3dvcmRGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICB0aGlzLmZvcmdvdFBhc3N3b3JkVmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5mb3Jnb3RQYXNzd29yZFZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyTmV3UGFzc3dvcmRWYWxpZGF0aW9uKCkge1xuICAgICAgICBjb25zdCBuZXdQYXNzd29yZEZvcm0gPSAnLm5ldy1wYXNzd29yZC1mb3JtJztcbiAgICAgICAgY29uc3QgbmV3UGFzc3dvcmRWYWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiAkKGAke25ld1Bhc3N3b3JkRm9ybX0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXWApLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgcGFzc3dvcmRTZWxlY3RvciA9ICQoYCR7bmV3UGFzc3dvcmRGb3JtfSBpbnB1dFtuYW1lPVwicGFzc3dvcmRcIl1gKTtcbiAgICAgICAgY29uc3QgcGFzc3dvcmQyU2VsZWN0b3IgPSAkKGAke25ld1Bhc3N3b3JkRm9ybX0gaW5wdXRbbmFtZT1cInBhc3N3b3JkX2NvbmZpcm1cIl1gKTtcblxuICAgICAgICBWYWxpZGF0b3JzLnNldFBhc3N3b3JkVmFsaWRhdGlvbihcbiAgICAgICAgICAgIG5ld1Bhc3N3b3JkVmFsaWRhdG9yLFxuICAgICAgICAgICAgcGFzc3dvcmRTZWxlY3RvcixcbiAgICAgICAgICAgIHBhc3N3b3JkMlNlbGVjdG9yLFxuICAgICAgICAgICAgdGhpcy5wYXNzd29yZFJlcXVpcmVtZW50cyxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZWdpc3RlckNyZWF0ZUFjY291bnRWYWxpZGF0b3IoJGNyZWF0ZUFjY291bnRGb3JtKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb25Nb2RlbCA9IHZhbGlkYXRpb24oJGNyZWF0ZUFjY291bnRGb3JtKTtcbiAgICAgICAgY29uc3QgY3JlYXRlQWNjb3VudFZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6IGAke3RoaXMuZm9ybUNyZWF0ZVNlbGVjdG9yfSBpbnB1dFt0eXBlPSdzdWJtaXQnXWAsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCAkc3RhdGVFbGVtZW50ID0gJCgnW2RhdGEtZmllbGQtdHlwZT1cIlN0YXRlXCJdJyk7XG4gICAgICAgIGNvbnN0IGVtYWlsU2VsZWN0b3IgPSBgJHt0aGlzLmZvcm1DcmVhdGVTZWxlY3Rvcn0gW2RhdGEtZmllbGQtdHlwZT0nRW1haWxBZGRyZXNzJ11gO1xuICAgICAgICBjb25zdCAkZW1haWxFbGVtZW50ID0gJChlbWFpbFNlbGVjdG9yKTtcbiAgICAgICAgY29uc3QgcGFzc3dvcmRTZWxlY3RvciA9IGAke3RoaXMuZm9ybUNyZWF0ZVNlbGVjdG9yfSBbZGF0YS1maWVsZC10eXBlPSdQYXNzd29yZCddYDtcbiAgICAgICAgY29uc3QgJHBhc3N3b3JkRWxlbWVudCA9ICQocGFzc3dvcmRTZWxlY3Rvcik7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkMlNlbGVjdG9yID0gYCR7dGhpcy5mb3JtQ3JlYXRlU2VsZWN0b3J9IFtkYXRhLWZpZWxkLXR5cGU9J0NvbmZpcm1QYXNzd29yZCddYDtcbiAgICAgICAgY29uc3QgJHBhc3N3b3JkMkVsZW1lbnQgPSAkKHBhc3N3b3JkMlNlbGVjdG9yKTtcblxuICAgICAgICBjcmVhdGVBY2NvdW50VmFsaWRhdG9yLmFkZCh2YWxpZGF0aW9uTW9kZWwpO1xuXG4gICAgICAgIGlmICgkc3RhdGVFbGVtZW50KSB7XG4gICAgICAgICAgICBsZXQgJGxhc3Q7XG5cbiAgICAgICAgICAgIC8vIFJlcXVlc3RzIHRoZSBzdGF0ZXMgZm9yIGEgY291bnRyeSB3aXRoIEFKQVhcbiAgICAgICAgICAgIHN0YXRlQ291bnRyeSgkc3RhdGVFbGVtZW50LCB0aGlzLmNvbnRleHQsIChlcnIsIGZpZWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCAkZmllbGQgPSAkKGZpZWxkKTtcblxuICAgICAgICAgICAgICAgIGlmIChjcmVhdGVBY2NvdW50VmFsaWRhdG9yLmdldFN0YXR1cygkc3RhdGVFbGVtZW50KSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlQWNjb3VudFZhbGlkYXRvci5yZW1vdmUoJHN0YXRlRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCRsYXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZUFjY291bnRWYWxpZGF0b3IucmVtb3ZlKCRsYXN0KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoJGZpZWxkLmlzKCdzZWxlY3QnKSkge1xuICAgICAgICAgICAgICAgICAgICAkbGFzdCA9IGZpZWxkO1xuICAgICAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnNldFN0YXRlQ291bnRyeVZhbGlkYXRpb24oY3JlYXRlQWNjb3VudFZhbGlkYXRvciwgZmllbGQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMuY2xlYW5VcFN0YXRlVmFsaWRhdGlvbihmaWVsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJGVtYWlsRWxlbWVudCkge1xuICAgICAgICAgICAgY3JlYXRlQWNjb3VudFZhbGlkYXRvci5yZW1vdmUoZW1haWxTZWxlY3Rvcik7XG4gICAgICAgICAgICBWYWxpZGF0b3JzLnNldEVtYWlsVmFsaWRhdGlvbihjcmVhdGVBY2NvdW50VmFsaWRhdG9yLCBlbWFpbFNlbGVjdG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkcGFzc3dvcmRFbGVtZW50ICYmICRwYXNzd29yZDJFbGVtZW50KSB7XG4gICAgICAgICAgICBjcmVhdGVBY2NvdW50VmFsaWRhdG9yLnJlbW92ZShwYXNzd29yZFNlbGVjdG9yKTtcbiAgICAgICAgICAgIGNyZWF0ZUFjY291bnRWYWxpZGF0b3IucmVtb3ZlKHBhc3N3b3JkMlNlbGVjdG9yKTtcbiAgICAgICAgICAgIFZhbGlkYXRvcnMuc2V0UGFzc3dvcmRWYWxpZGF0aW9uKFxuICAgICAgICAgICAgICAgIGNyZWF0ZUFjY291bnRWYWxpZGF0b3IsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmRTZWxlY3RvcixcbiAgICAgICAgICAgICAgICBwYXNzd29yZDJTZWxlY3RvcixcbiAgICAgICAgICAgICAgICB0aGlzLnBhc3N3b3JkUmVxdWlyZW1lbnRzLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgICRjcmVhdGVBY2NvdW50Rm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY3JlYXRlQWNjb3VudFZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcblxuICAgICAgICAgICAgaWYgKGNyZWF0ZUFjY291bnRWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXF1ZXN0IGlzIG1hZGUgaW4gdGhpcyBmdW5jdGlvbiB0byB0aGUgcmVtb3RlIGVuZHBvaW50IGFuZCBwdWxscyBiYWNrIHRoZSBzdGF0ZXMgZm9yIGNvdW50cnkuXG4gICAgICovXG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgY29uc3QgJGNyZWF0ZUFjY291bnRGb3JtID0gY2xhc3NpZnlGb3JtKHRoaXMuZm9ybUNyZWF0ZVNlbGVjdG9yKTtcbiAgICAgICAgY29uc3QgJGxvZ2luRm9ybSA9IGNsYXNzaWZ5Rm9ybSgnLmxvZ2luLWZvcm0nKTtcbiAgICAgICAgY29uc3QgJGZvcmdvdFBhc3N3b3JkRm9ybSA9IGNsYXNzaWZ5Rm9ybSgnLmZvcmdvdC1wYXNzd29yZC1mb3JtJyk7XG4gICAgICAgIGNvbnN0ICRuZXdQYXNzd29yZEZvcm0gPSBjbGFzc2lmeUZvcm0oJy5uZXctcGFzc3dvcmQtZm9ybScpOyAvLyByZXNldCBwYXNzd29yZFxuXG4gICAgICAgIC8vIEluamVjdGVkIHZpYSBhdXRoLmh0bWxcbiAgICAgICAgdGhpcy5wYXNzd29yZFJlcXVpcmVtZW50cyA9IHRoaXMuY29udGV4dC5wYXNzd29yZFJlcXVpcmVtZW50cztcblxuICAgICAgICBpZiAoJGxvZ2luRm9ybS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJMb2dpblZhbGlkYXRpb24oJGxvZ2luRm9ybSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJG5ld1Bhc3N3b3JkRm9ybS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJOZXdQYXNzd29yZFZhbGlkYXRpb24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkZm9yZ290UGFzc3dvcmRGb3JtLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckZvcmdvdFBhc3N3b3JkVmFsaWRhdGlvbigkZm9yZ290UGFzc3dvcmRGb3JtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkY3JlYXRlQWNjb3VudEZvcm0ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyQ3JlYXRlQWNjb3VudFZhbGlkYXRvcigkY3JlYXRlQWNjb3VudEZvcm0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLyoqXG4gKiBWYWxpZGF0ZSB0aGF0IHRoZSBnaXZlbiBkYXRlIGZvciB0aGUgZGF5L21vbnRoL3llYXIgc2VsZWN0IGlucHV0cyBpcyB3aXRoaW4gcG90ZW50aWFsIHJhbmdlXG4gKiBAcGFyYW0gJGZvcm1GaWVsZFxuICogQHBhcmFtIHZhbGlkYXRpb25cbiAqIEByZXR1cm5zIHt7c2VsZWN0b3I6IHN0cmluZywgdHJpZ2dlcmVkQnk6IHN0cmluZywgdmFsaWRhdGU6IEZ1bmN0aW9uLCBlcnJvck1lc3NhZ2U6IHN0cmluZ319XG4gKi9cbmZ1bmN0aW9uIGJ1aWxkRGF0ZVZhbGlkYXRpb24oJGZvcm1GaWVsZCwgdmFsaWRhdGlvbikge1xuICAgIC8vIE5vIGRhdGUgcmFuZ2UgcmVzdHJpY3Rpb24sIHNraXBcbiAgICBpZiAodmFsaWRhdGlvbi5taW5fZGF0ZSAmJiB2YWxpZGF0aW9uLm1heF9kYXRlKSB7XG4gICAgICAgIGNvbnN0IGludmFsaWRNZXNzYWdlID0gYFlvdXIgY2hvc2VuIGRhdGUgbXVzdCBmYWxsIGJldHdlZW4gJHt2YWxpZGF0aW9uLm1pbl9kYXRlfSBhbmQgJHt2YWxpZGF0aW9uLm1heF9kYXRlfS5gO1xuICAgICAgICBjb25zdCBmb3JtRWxlbWVudElkID0gJGZvcm1GaWVsZC5hdHRyKCdpZCcpO1xuICAgICAgICBjb25zdCBtaW5TcGxpdCA9IHZhbGlkYXRpb24ubWluX2RhdGUuc3BsaXQoJy0nKTtcbiAgICAgICAgY29uc3QgbWF4U3BsaXQgPSB2YWxpZGF0aW9uLm1heF9kYXRlLnNwbGl0KCctJyk7XG4gICAgICAgIGNvbnN0IG1pbkRhdGUgPSBuZXcgRGF0ZShtaW5TcGxpdFswXSwgbWluU3BsaXRbMV0gLSAxLCBtaW5TcGxpdFsyXSk7XG4gICAgICAgIGNvbnN0IG1heERhdGUgPSBuZXcgRGF0ZShtYXhTcGxpdFswXSwgbWF4U3BsaXRbMV0gLSAxLCBtYXhTcGxpdFsyXSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiBgIyR7Zm9ybUVsZW1lbnRJZH0gc2VsZWN0W2RhdGEtbGFiZWw9XCJ5ZWFyXCJdYCxcbiAgICAgICAgICAgIHRyaWdnZXJlZEJ5OiBgIyR7Zm9ybUVsZW1lbnRJZH0gc2VsZWN0Om5vdChbZGF0YS1sYWJlbD1cInllYXJcIl0pYCxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRheSA9IE51bWJlcigkZm9ybUZpZWxkLmZpbmQoJ3NlbGVjdFtkYXRhLWxhYmVsPVwiZGF5XCJdJykudmFsKCkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vbnRoID0gTnVtYmVyKCRmb3JtRmllbGQuZmluZCgnc2VsZWN0W2RhdGEtbGFiZWw9XCJtb250aFwiXScpLnZhbCgpKSAtIDE7XG4gICAgICAgICAgICAgICAgY29uc3QgeWVhciA9IE51bWJlcih2YWwpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNob3NlbkRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5KTtcblxuICAgICAgICAgICAgICAgIGNiKGNob3NlbkRhdGUgPj0gbWluRGF0ZSAmJiBjaG9zZW5EYXRlIDw9IG1heERhdGUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogaW52YWxpZE1lc3NhZ2UsXG4gICAgICAgIH07XG4gICAgfVxufVxuXG4vKipcbiAqIFdlIHZhbGlkYXRlIGNoZWNrYm94ZXMgc2VwYXJhdGVseSBmcm9tIHNpbmdsZSBpbnB1dCBmaWVsZHMsIGFzIHRoZXkgbXVzdCBoYXZlIGF0IGxlYXN0IG9uZSBjaGVja2VkIG9wdGlvblxuICogZnJvbSBtYW55IGRpZmZlcmVudCBpbnB1dHNcbiAqIEBwYXJhbSAkZm9ybUZpZWxkXG4gKiBAcGFyYW0gdmFsaWRhdGlvblxuICovXG5mdW5jdGlvbiBidWlsZFJlcXVpcmVkQ2hlY2tib3hWYWxpZGF0aW9uKCRmb3JtRmllbGQsIHZhbGlkYXRpb24pIHtcbiAgICBjb25zdCBmb3JtRmllbGRJZCA9ICRmb3JtRmllbGQuYXR0cignaWQnKTtcbiAgICBjb25zdCBwcmltYXJ5U2VsZWN0b3IgPSBgIyR7Zm9ybUZpZWxkSWR9IGlucHV0OmZpcnN0LW9mLXR5cGVgO1xuICAgIGNvbnN0IHNlY29uZGFyeVNlbGVjdG9yID0gYCMke2Zvcm1GaWVsZElkfSBpbnB1dGA7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzZWxlY3RvcjogcHJpbWFyeVNlbGVjdG9yLFxuICAgICAgICB0cmlnZ2VyZWRCeTogc2Vjb25kYXJ5U2VsZWN0b3IsXG4gICAgICAgIHZhbGlkYXRlOiAoY2IpID0+IHtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBmYWxzZTtcblxuICAgICAgICAgICAgJChzZWNvbmRhcnlTZWxlY3RvcikuZWFjaCgoaW5kZXgsIGNoZWNrYm94KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yTWVzc2FnZTogYFRoZSAnJHt2YWxpZGF0aW9uLmxhYmVsfScgZmllbGQgY2Fubm90IGJlIGJsYW5rLmAsXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gYnVpbGRSZXF1aXJlZFZhbGlkYXRpb24odmFsaWRhdGlvbiwgc2VsZWN0b3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBzZWxlY3RvcixcbiAgICAgICAgdmFsaWRhdGUoY2IsIHZhbCkge1xuICAgICAgICAgICAgY2IodmFsLmxlbmd0aCA+IDApO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvck1lc3NhZ2U6IGBUaGUgJyR7dmFsaWRhdGlvbi5sYWJlbH0nIGZpZWxkIGNhbm5vdCBiZSBibGFuay5gLFxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGJ1aWxkTnVtYmVyUmFuZ2VWYWxpZGF0aW9uKHZhbGlkYXRpb24sIGZvcm1GaWVsZFNlbGVjdG9yKSB7XG4gICAgY29uc3QgaW52YWxpZE1lc3NhZ2UgPSBgVGhlIHZhbHVlIGZvciAke3ZhbGlkYXRpb24ubGFiZWx9IG11c3QgYmUgYmV0d2VlbiAke3ZhbGlkYXRpb24ubWlufSBhbmQgJHt2YWxpZGF0aW9uLm1heH0uYDtcbiAgICBjb25zdCBtaW4gPSBOdW1iZXIodmFsaWRhdGlvbi5taW4pO1xuICAgIGNvbnN0IG1heCA9IE51bWJlcih2YWxpZGF0aW9uLm1heCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzZWxlY3RvcjogYCR7Zm9ybUZpZWxkU2VsZWN0b3J9IGlucHV0W25hbWU9XCIke3ZhbGlkYXRpb24ubmFtZX1cIl1gLFxuICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG51bWJlclZhbCA9IE51bWJlcih2YWwpO1xuXG4gICAgICAgICAgICBjYihudW1iZXJWYWwgPj0gbWluICYmIG51bWJlclZhbCA8PSBtYXgpO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvck1lc3NhZ2U6IGludmFsaWRNZXNzYWdlLFxuICAgIH07XG59XG5cblxuZnVuY3Rpb24gYnVpbGRWYWxpZGF0aW9uKCR2YWxpZGF0ZWFibGVFbGVtZW50KSB7XG4gICAgY29uc3QgdmFsaWRhdGlvbiA9ICR2YWxpZGF0ZWFibGVFbGVtZW50LmRhdGEoJ3ZhbGlkYXRpb24nKTtcbiAgICBjb25zdCBmaWVsZFZhbGlkYXRpb25zID0gW107XG4gICAgY29uc3QgZm9ybUZpZWxkU2VsZWN0b3IgPSBgIyR7JHZhbGlkYXRlYWJsZUVsZW1lbnQuYXR0cignaWQnKX1gO1xuXG4gICAgaWYgKHZhbGlkYXRpb24udHlwZSA9PT0gJ2RhdGVjaG9vc2VyJykge1xuICAgICAgICBjb25zdCBkYXRlVmFsaWRhdGlvbiA9IGJ1aWxkRGF0ZVZhbGlkYXRpb24oJHZhbGlkYXRlYWJsZUVsZW1lbnQsIHZhbGlkYXRpb24pO1xuXG4gICAgICAgIGlmIChkYXRlVmFsaWRhdGlvbikge1xuICAgICAgICAgICAgZmllbGRWYWxpZGF0aW9ucy5wdXNoKGRhdGVWYWxpZGF0aW9uKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAodmFsaWRhdGlvbi5yZXF1aXJlZCAmJiAodmFsaWRhdGlvbi50eXBlID09PSAnY2hlY2tib3hzZWxlY3QnIHx8IHZhbGlkYXRpb24udHlwZSA9PT0gJ3JhZGlvc2VsZWN0JykpIHtcbiAgICAgICAgZmllbGRWYWxpZGF0aW9ucy5wdXNoKGJ1aWxkUmVxdWlyZWRDaGVja2JveFZhbGlkYXRpb24oJHZhbGlkYXRlYWJsZUVsZW1lbnQsIHZhbGlkYXRpb24pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkdmFsaWRhdGVhYmxlRWxlbWVudC5maW5kKCdpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYScpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkaW5wdXRFbGVtZW50ID0gJChlbGVtZW50KTtcbiAgICAgICAgICAgIGNvbnN0IHRhZ05hbWUgPSAkaW5wdXRFbGVtZW50LmdldCgwKS50YWdOYW1lO1xuICAgICAgICAgICAgY29uc3QgaW5wdXROYW1lID0gJGlucHV0RWxlbWVudC5hdHRyKCduYW1lJyk7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50U2VsZWN0b3IgPSBgJHtmb3JtRmllbGRTZWxlY3Rvcn0gJHt0YWdOYW1lfVtuYW1lPVwiJHtpbnB1dE5hbWV9XCJdYDtcblxuICAgICAgICAgICAgaWYgKHZhbGlkYXRpb24udHlwZSA9PT0gJ251bWJlcm9ubHknKSB7XG4gICAgICAgICAgICAgICAgZmllbGRWYWxpZGF0aW9ucy5wdXNoKGJ1aWxkTnVtYmVyUmFuZ2VWYWxpZGF0aW9uKHZhbGlkYXRpb24sIGZvcm1GaWVsZFNlbGVjdG9yKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsaWRhdGlvbi5yZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgIGZpZWxkVmFsaWRhdGlvbnMucHVzaChidWlsZFJlcXVpcmVkVmFsaWRhdGlvbih2YWxpZGF0aW9uLCBlbGVtZW50U2VsZWN0b3IpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpZWxkVmFsaWRhdGlvbnM7XG59XG5cbi8qKlxuICogQnVpbGRzIHRoZSB2YWxpZGF0aW9uIG1vZGVsIGZvciBkeW5hbWljIGZvcm1zXG4gKiBAcGFyYW0gJGZvcm1cbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCRmb3JtKSB7XG4gICAgbGV0IHZhbGlkYXRpb25zVG9QZXJmb3JtID0gW107XG5cbiAgICAkZm9ybS5maW5kKCdbZGF0YS12YWxpZGF0aW9uXScpLmVhY2goKGluZGV4LCBpbnB1dCkgPT4ge1xuICAgICAgICB2YWxpZGF0aW9uc1RvUGVyZm9ybSA9IHZhbGlkYXRpb25zVG9QZXJmb3JtLmNvbmNhdChidWlsZFZhbGlkYXRpb24oJChpbnB1dCkpKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB2YWxpZGF0aW9uc1RvUGVyZm9ybTtcbn1cbiIsInZhciBjcmVhdGVCYXNlRm9yID0gcmVxdWlyZSgnLi9fY3JlYXRlQmFzZUZvcicpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBiYXNlRm9yT3duYCB3aGljaCBpdGVyYXRlcyBvdmVyIGBvYmplY3RgXG4gKiBwcm9wZXJ0aWVzIHJldHVybmVkIGJ5IGBrZXlzRnVuY2AgYW5kIGludm9rZXMgYGl0ZXJhdGVlYCBmb3IgZWFjaCBwcm9wZXJ0eS5cbiAqIEl0ZXJhdGVlIGZ1bmN0aW9ucyBtYXkgZXhpdCBpdGVyYXRpb24gZWFybHkgYnkgZXhwbGljaXRseSByZXR1cm5pbmcgYGZhbHNlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBrZXlzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBrZXlzIG9mIGBvYmplY3RgLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xudmFyIGJhc2VGb3IgPSBjcmVhdGVCYXNlRm9yKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUZvcjtcbiIsInZhciBiYXNlRm9yID0gcmVxdWlyZSgnLi9fYmFzZUZvcicpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5mb3JPd25gIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBiYXNlRm9yT3duKG9iamVjdCwgaXRlcmF0ZWUpIHtcbiAgcmV0dXJuIG9iamVjdCAmJiBiYXNlRm9yKG9iamVjdCwgaXRlcmF0ZWUsIGtleXMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VGb3JPd247XG4iLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgdGhlIGZpcnN0IGFyZ3VtZW50IGl0IHJlY2VpdmVzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0geyp9IHZhbHVlIEFueSB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIGB2YWx1ZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICpcbiAqIGNvbnNvbGUubG9nKF8uaWRlbnRpdHkob2JqZWN0KSA9PT0gb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaWRlbnRpdHkodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlkZW50aXR5O1xuIiwiLyoqXG4gKiBDcmVhdGVzIGEgYmFzZSBmdW5jdGlvbiBmb3IgbWV0aG9kcyBsaWtlIGBfLmZvckluYCBhbmQgYF8uZm9yT3duYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtib29sZWFufSBbZnJvbVJpZ2h0XSBTcGVjaWZ5IGl0ZXJhdGluZyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBiYXNlIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVCYXNlRm9yKGZyb21SaWdodCkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0LCBpdGVyYXRlZSwga2V5c0Z1bmMpIHtcbiAgICB2YXIgaW5kZXggPSAtMSxcbiAgICAgICAgaXRlcmFibGUgPSBPYmplY3Qob2JqZWN0KSxcbiAgICAgICAgcHJvcHMgPSBrZXlzRnVuYyhvYmplY3QpLFxuICAgICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAgIHZhciBrZXkgPSBwcm9wc1tmcm9tUmlnaHQgPyBsZW5ndGggOiArK2luZGV4XTtcbiAgICAgIGlmIChpdGVyYXRlZShpdGVyYWJsZVtrZXldLCBrZXksIGl0ZXJhYmxlKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmplY3Q7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlQmFzZUZvcjtcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmZvckVhY2hgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheUVhY2goYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAoaXRlcmF0ZWUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpID09PSBmYWxzZSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUVhY2g7XG4iLCJ2YXIgYXJyYXlFYWNoID0gcmVxdWlyZSgnLi9fYXJyYXlFYWNoJyksXG4gICAgYmFzZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX2Jhc2VDcmVhdGUnKSxcbiAgICBiYXNlRm9yT3duID0gcmVxdWlyZSgnLi9fYmFzZUZvck93bicpLFxuICAgIGJhc2VJdGVyYXRlZSA9IHJlcXVpcmUoJy4vX2Jhc2VJdGVyYXRlZScpLFxuICAgIGdldFByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2dldFByb3RvdHlwZScpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0J1ZmZlciA9IHJlcXVpcmUoJy4vaXNCdWZmZXInKSxcbiAgICBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgaXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9pc1R5cGVkQXJyYXknKTtcblxuLyoqXG4gKiBBbiBhbHRlcm5hdGl2ZSB0byBgXy5yZWR1Y2VgOyB0aGlzIG1ldGhvZCB0cmFuc2Zvcm1zIGBvYmplY3RgIHRvIGEgbmV3XG4gKiBgYWNjdW11bGF0b3JgIG9iamVjdCB3aGljaCBpcyB0aGUgcmVzdWx0IG9mIHJ1bm5pbmcgZWFjaCBvZiBpdHMgb3duXG4gKiBlbnVtZXJhYmxlIHN0cmluZyBrZXllZCBwcm9wZXJ0aWVzIHRocnUgYGl0ZXJhdGVlYCwgd2l0aCBlYWNoIGludm9jYXRpb25cbiAqIHBvdGVudGlhbGx5IG11dGF0aW5nIHRoZSBgYWNjdW11bGF0b3JgIG9iamVjdC4gSWYgYGFjY3VtdWxhdG9yYCBpcyBub3RcbiAqIHByb3ZpZGVkLCBhIG5ldyBvYmplY3Qgd2l0aCB0aGUgc2FtZSBgW1tQcm90b3R5cGVdXWAgd2lsbCBiZSB1c2VkLiBUaGVcbiAqIGl0ZXJhdGVlIGlzIGludm9rZWQgd2l0aCBmb3VyIGFyZ3VtZW50czogKGFjY3VtdWxhdG9yLCB2YWx1ZSwga2V5LCBvYmplY3QpLlxuICogSXRlcmF0ZWUgZnVuY3Rpb25zIG1heSBleGl0IGl0ZXJhdGlvbiBlYXJseSBieSBleHBsaWNpdGx5IHJldHVybmluZyBgZmFsc2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMS4zLjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbaXRlcmF0ZWU9Xy5pZGVudGl0eV0gVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7Kn0gW2FjY3VtdWxhdG9yXSBUaGUgY3VzdG9tIGFjY3VtdWxhdG9yIHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGFjY3VtdWxhdGVkIHZhbHVlLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRyYW5zZm9ybShbMiwgMywgNF0sIGZ1bmN0aW9uKHJlc3VsdCwgbikge1xuICogICByZXN1bHQucHVzaChuICo9IG4pO1xuICogICByZXR1cm4gbiAlIDIgPT0gMDtcbiAqIH0sIFtdKTtcbiAqIC8vID0+IFs0LCA5XVxuICpcbiAqIF8udHJhbnNmb3JtKHsgJ2EnOiAxLCAnYic6IDIsICdjJzogMSB9LCBmdW5jdGlvbihyZXN1bHQsIHZhbHVlLCBrZXkpIHtcbiAqICAgKHJlc3VsdFt2YWx1ZV0gfHwgKHJlc3VsdFt2YWx1ZV0gPSBbXSkpLnB1c2goa2V5KTtcbiAqIH0sIHt9KTtcbiAqIC8vID0+IHsgJzEnOiBbJ2EnLCAnYyddLCAnMic6IFsnYiddIH1cbiAqL1xuZnVuY3Rpb24gdHJhbnNmb3JtKG9iamVjdCwgaXRlcmF0ZWUsIGFjY3VtdWxhdG9yKSB7XG4gIHZhciBpc0FyciA9IGlzQXJyYXkob2JqZWN0KSxcbiAgICAgIGlzQXJyTGlrZSA9IGlzQXJyIHx8IGlzQnVmZmVyKG9iamVjdCkgfHwgaXNUeXBlZEFycmF5KG9iamVjdCk7XG5cbiAgaXRlcmF0ZWUgPSBiYXNlSXRlcmF0ZWUoaXRlcmF0ZWUsIDQpO1xuICBpZiAoYWNjdW11bGF0b3IgPT0gbnVsbCkge1xuICAgIHZhciBDdG9yID0gb2JqZWN0ICYmIG9iamVjdC5jb25zdHJ1Y3RvcjtcbiAgICBpZiAoaXNBcnJMaWtlKSB7XG4gICAgICBhY2N1bXVsYXRvciA9IGlzQXJyID8gbmV3IEN0b3IgOiBbXTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNPYmplY3Qob2JqZWN0KSkge1xuICAgICAgYWNjdW11bGF0b3IgPSBpc0Z1bmN0aW9uKEN0b3IpID8gYmFzZUNyZWF0ZShnZXRQcm90b3R5cGUob2JqZWN0KSkgOiB7fTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBhY2N1bXVsYXRvciA9IHt9O1xuICAgIH1cbiAgfVxuICAoaXNBcnJMaWtlID8gYXJyYXlFYWNoIDogYmFzZUZvck93bikob2JqZWN0LCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIG9iamVjdCkge1xuICAgIHJldHVybiBpdGVyYXRlZShhY2N1bXVsYXRvciwgdmFsdWUsIGluZGV4LCBvYmplY3QpO1xuICB9KTtcbiAgcmV0dXJuIGFjY3VtdWxhdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRyYW5zZm9ybTtcbiJdLCJzb3VyY2VSb290IjoiIn0=