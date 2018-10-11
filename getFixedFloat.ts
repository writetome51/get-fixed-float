import {getCautiouslyRounded} from '@writetome51/get-cautiously-rounded/getCautiouslyRounded';
import {errorIfNotFloat} from 'basic-data-handling/errorIfNotFloat';


export function getFixedFloat(num, numDigitsAfterDecimal): number {
	errorIfNotFloat(num);
	let numLength = String(num).length;
	let factor = 1;
	let i = -1;
	while(++i < numLength) {
		factor *= 10;
	}
	let tempNum = num * factor;
	tempNum = getCautiouslyRounded(tempNum);
	tempNum = tempNum / factor;
}