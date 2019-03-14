"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfNotIntegerZeroOrGreater_1 = require("basic-data-handling/errorIfNotIntegerZeroOrGreater");
var errorIfNotNumber_1 = require("basic-data-handling/errorIfNotNumber");
var isInteger_isFloat_1 = require("basic-data-handling/isInteger_isFloat");
var get_rounded_to_precision_1 = require("@writetome51/get-rounded-to-precision");
var get_float_padded_on_right_if_needed_1 = require("@writetome51/get-float-padded-on-right-if-needed");
function getFixedFloat(num, numDigitsAfterDecimal) {
    errorIfNotNumber_1.errorIfNotNumber(num);
    errorIfNotIntegerZeroOrGreater_1.errorIfNotIntegerZeroOrGreater(numDigitsAfterDecimal);
    if (isInteger_isFloat_1.isFloat(num))
        num = get_rounded_to_precision_1.getRoundedToPrecision(num, numDigitsAfterDecimal);
    return get_float_padded_on_right_if_needed_1.getFloatPaddedOnRight_ifNeeded(num, numDigitsAfterDecimal);
}
exports.getFixedFloat = getFixedFloat;
