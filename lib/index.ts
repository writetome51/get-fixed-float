import { errorIfNotIntegerZeroOrGreater } from 'basic-data-handling/errorIfNotIntegerZeroOrGreater';
import { errorIfNotNumber } from 'basic-data-handling/errorIfNotNumber';
import { isFloat } from 'basic-data-handling/isInteger_isFloat';
import { getRoundedToPrecision } from '@writetome51/get-rounded-to-precision';
import { getFloatPaddedOnRight_ifNeeded } from '@writetome51/get-float-padded-on-right-if-needed';


export function getFixedFloat(num, numDigitsAfterDecimal): string {
	errorIfNotNumber(num);
	errorIfNotIntegerZeroOrGreater(numDigitsAfterDecimal);

	if (isFloat(num)) num = getRoundedToPrecision(num, numDigitsAfterDecimal);

	return getFloatPaddedOnRight_ifNeeded(num, numDigitsAfterDecimal);
}
