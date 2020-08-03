# getFixedFloat(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;number,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;numDigitsAfterDecimal<br>): string

Returns `number` with a decimal and exact `numDigitsAfterDecimal`.  
If `number` already has more than `numDigitsAfterDecimal`, it will be  
rounded to the last required digit after the decimal.  
The algorithm prevents cumulative rounding errors.

## Examples
```js
getFixedFloat(101.975, 3); // --> '101.975'

getFixedFloat(-10.7754, 1); // --> '-10.8'

getFixedFloat(101.965, 2); // --> '101.96'

getFixedFloat(101.975, 2); // --> '101.98'

getFixedFloat(9, 2); // --> '9.00'

getFixedFloat(-100.9754, 5)); // -->  '-100.97540'

getFixedFloat(10.9754, 1); // --> '11.0'
```

## Installation
`npm i  @writetome51/get-fixed-float`

## Loading
```js
import {getFixedFloat}  from '@writetome51/get-fixed-float';
```
