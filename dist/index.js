"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error_if_not_integer_zero_or_greater_1 = require("error-if-not-integer-zero-or-greater");
var error_if_not_finite_number_1 = require("error-if-not-finite-number");
var is_integer_is_float_1 = require("@writetome51/is-integer-is-float");
var get_rounded_to_precision_1 = require("@writetome51/get-rounded-to-precision");
var get_float_padded_on_right_if_needed_1 = require("@writetome51/get-float-padded-on-right-if-needed");
function getFixedFloat(num, numDigitsAfterDecimal) {
    error_if_not_finite_number_1.errorIfNotFiniteNumber(num);
    error_if_not_integer_zero_or_greater_1.errorIfNotIntegerZeroOrGreater(numDigitsAfterDecimal);
    if (is_integer_is_float_1.isFloat(num))
        num = get_rounded_to_precision_1.getRoundedToPrecision(num, numDigitsAfterDecimal);
    return get_float_padded_on_right_if_needed_1.getFloatPaddedOnRight_ifNeeded(num, numDigitsAfterDecimal);
}
exports.getFixedFloat = getFixedFloat;
