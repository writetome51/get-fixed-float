"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfNotIntegerZeroOrGreater_1 = require("basic-data-handling/errorIfNotIntegerZeroOrGreater");
var errorIfNotNumber_1 = require("basic-data-handling/errorIfNotNumber");
var isInteger_isFloat_1 = require("basic-data-handling/isInteger_isFloat");
var getRoundedToPrecision_1 = require("./getRoundedToPrecision");
var getFloatPaddedOnRight_1 = require("./getFloatPaddedOnRight");
function getFixedFloat(num, numDigitsAfterDecimal) {
    errorIfNotNumber_1.errorIfNotNumber(num);
    errorIfNotIntegerZeroOrGreater_1.errorIfNotIntegerZeroOrGreater(numDigitsAfterDecimal);
    if (isInteger_isFloat_1.isFloat(num))
        num = getRoundedToPrecision_1.getRoundedToPrecision(numDigitsAfterDecimal, num);
    return getFloatPaddedOnRight_1.getFloatPaddedOnRight(num, numDigitsAfterDecimal);
}
exports.getFixedFloat = getFixedFloat;
