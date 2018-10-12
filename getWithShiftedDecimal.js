"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfNotInteger_1 = require("basic-data-handling/errorIfNotInteger");
var errorIfNotNumber_1 = require("basic-data-handling/errorIfNotNumber");
// To move decimal to left, have numPlacesToMoveDecimal be a negative number.
function getWithShiftedDecimal(numPlacesToMoveDecimal, num) {
    errorIfNotInteger_1.errorIfNotInteger(numPlacesToMoveDecimal);
    errorIfNotNumber_1.errorIfNotNumber(num);
    var factor = 1, i = -1, positiveNumPlaces = Math.abs(numPlacesToMoveDecimal);
    while (++i < positiveNumPlaces) {
        factor *= 10;
    }
    if (numPlacesToMoveDecimal < 0)
        return (num / factor);
    else
        return (num * factor);
}
exports.getWithShiftedDecimal = getWithShiftedDecimal;
