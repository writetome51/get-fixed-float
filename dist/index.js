import { errorIfNotIntegerZeroOrGreater } from 'error-if-not-integer-zero-or-greater';
import { getFloatPaddedOnRight_ifNeeded } from '@writetome51/get-float-padded-on-right-if-needed';
import { getRoundedToPrecision } from '@writetome51/get-rounded-to-precision';
import { isFloat } from '@writetome51/is-integer-is-float';
export function getFixedFloat(num, numDigitsAfterDecimal) {
    errorIfNotIntegerZeroOrGreater(numDigitsAfterDecimal);
    if (isFloat(num))
        num = getRoundedToPrecision(num, numDigitsAfterDecimal);
    return getFloatPaddedOnRight_ifNeeded(num, numDigitsAfterDecimal);
}
