import { errorIfNotIntegerZeroOrGreater } from 'basic-data-handling/errorIfNotIntegerZeroOrGreater';
import { errorIfNotNumber } from 'basic-data-handling/errorIfNotNumber';
import { isFloat } from 'basic-data-handling/isInteger_isFloat';
import { getRoundedToPrecision } from './getRoundedToPrecision';
import { getFloatPaddedOnRight } from './getFloatPaddedOnRight';


export function getFixedFloat(num, numDigitsAfterDecimal): string {
	errorIfNotNumber(num);
	errorIfNotIntegerZeroOrGreater(numDigitsAfterDecimal);

	if (isFloat(num)) num = getRoundedToPrecision(numDigitsAfterDecimal, num);

	return getFloatPaddedOnRight(num, numDigitsAfterDecimal);
}
