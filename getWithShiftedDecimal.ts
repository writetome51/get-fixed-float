import { errorIfNotInteger } from 'basic-data-handling/errorIfNotInteger';
import { errorIfNotNumber } from 'basic-data-handling/errorIfNotNumber';


// To move decimal to left, have numPlacesToMoveDecimal be a negative number.

export function getWithShiftedDecimal(numPlacesToMoveDecimal, num): number {
	errorIfNotInteger(numPlacesToMoveDecimal);
	errorIfNotNumber(num);

	let factor = 1, i = -1, positiveNumPlaces = Math.abs(numPlacesToMoveDecimal);
	while (++i < positiveNumPlaces) {
		factor *= 10;
	}
	if (numPlacesToMoveDecimal < 0) return (num / factor);

	else return (num * factor);
}