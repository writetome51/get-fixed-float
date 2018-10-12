"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfNotInteger_1 = require("basic-data-handling/errorIfNotInteger");
var errorIfNotNumber_1 = require("basic-data-handling/errorIfNotNumber");
var getCautiouslyRounded_1 = require("@writetome51/get-cautiously-rounded/getCautiouslyRounded");
var getWithShiftedDecimal_1 = require("./getWithShiftedDecimal");
// numDigitsToRoundTo refers to number of places to right or left of decimal that it
// should round to.
// To round to a digit left of the decimal, set it to negative number.
// Example:  getRoundedToPrecision(12.19955, 4); // returns  12.1996
function getRoundedToPrecision(numDigitsToRoundTo, numberToRound) {
    errorIfNotInteger_1.errorIfNotInteger(numDigitsToRoundTo);
    errorIfNotNumber_1.errorIfNotNumber(numberToRound);
    numberToRound = getWithShiftedDecimal_1.getWithShiftedDecimal(numDigitsToRoundTo, numberToRound);
    var roundedNumber = getCautiouslyRounded_1.getCautiouslyRounded(numberToRound);
    return getWithShiftedDecimal_1.getWithShiftedDecimal(-numDigitsToRoundTo, roundedNumber);
}
exports.getRoundedToPrecision = getRoundedToPrecision;
