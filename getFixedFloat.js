"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getCautiouslyRounded_1 = require("@writetome51/get-cautiously-rounded/getCautiouslyRounded");
var errorIfNotFloat_1 = require("basic-data-handling/errorIfNotFloat");
function getFixedFloat(num, numDigitsAfterDecimal) {
    errorIfNotFloat_1.errorIfNotFloat(num);
    var numLength = String(num).length;
    var factor = 1;
    var i = -1;
    while (++i < numLength) {
        factor *= 10;
    }
    var tempNum = num * factor;
    tempNum = getCautiouslyRounded_1.getCautiouslyRounded(tempNum);
    tempNum = tempNum / factor;
}
exports.getFixedFloat = getFixedFloat;
