import { errorIfNotInteger } from 'basic-data-handling/errorIfNotInteger';
import { errorIfNotNumber } from 'basic-data-handling/errorIfNotNumber';
import { getCautiouslyRounded } from '@writetome51/get-cautiously-rounded/getCautiouslyRounded';
import { getWithShiftedDecimal } from './getWithShiftedDecimal';



// numDigitsToRoundTo refers to number of places to right or left of decimal that it
// should round to.
// To round to a digit left of the decimal, set it to negative number.
// Example:  getRoundedToPrecision(12.19955, 4); // returns  12.1996

export function getRoundedToPrecision(numDigitsToRoundTo, numberToRound) {
	errorIfNotInteger(numDigitsToRoundTo);
	errorIfNotNumber(numberToRound);
	numberToRound = getWithShiftedDecimal(numDigitsToRoundTo, numberToRound);
	let roundedNumber = getCautiouslyRounded(numberToRound);
	return getWithShiftedDecimal(-numDigitsToRoundTo, roundedNumber);
}
