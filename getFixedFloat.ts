import { errorIfNotIntegerZeroOrGreater } from 'basic-data-handling/errorIfNotIntegerZeroOrGreater';
import { errorIfNotNumber } from 'basic-data-handling/errorIfNotNumber';
import { isFloat } from 'basic-data-handling/isInteger_isFloat';
import { getRightOfDecimal } from '@writetome51/get-right-of-decimal/getRightOfDecimal';
import { getLeftOfDecimal } from '@writetome51/get-left-of-decimal';
import { getRoundedToPrecision } from './getRoundedToPrecision';


export function getFixedFloat(num, numDigitsAfterDecimal): string {
	errorIfNotNumber(num);
	errorIfNotIntegerZeroOrGreater(numDigitsAfterDecimal);

	if (isFloat(num)) num = getRoundedToPrecision(numDigitsAfterDecimal, num);

	let fraction = '';
	if (isFloat(num)) {
		fraction = getRightOfDecimal(num);
		num = getLeftOfDecimal(num);
	}
	while (fraction.length < numDigitsAfterDecimal) fraction += '0';

	if (fraction.length > 0) return (String(num) + '.' + fraction);
	else return String(num);
}


console.log(getFixedFloat(-100.975, 2));
