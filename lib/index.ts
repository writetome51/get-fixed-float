import { errorIfNotIntegerZeroOrGreater } from 'error-if-not-integer-zero-or-greater';
import { errorIfNotFiniteNumber } from 'error-if-not-finite-number';
import { isFloat } from '@writetome51/is-integer-is-float';
import { getRoundedToPrecision } from '@writetome51/get-rounded-to-precision';
import { getFloatPaddedOnRight_ifNeeded } from '@writetome51/get-float-padded-on-right-if-needed';


export function getFixedFloat(num, numDigitsAfterDecimal): string {
	errorIfNotFiniteNumber(num);
	errorIfNotIntegerZeroOrGreater(numDigitsAfterDecimal);

	if (isFloat(num)) num = getRoundedToPrecision(num, numDigitsAfterDecimal);

	return getFloatPaddedOnRight_ifNeeded(num, numDigitsAfterDecimal);
}
