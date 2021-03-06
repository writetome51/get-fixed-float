import {getFixedFloat} from './index.js';


console.log(getFixedFloat(-100.9754, 5)); // -100.97540
console.log(getFixedFloat(-1.9754, 1)); // '-2.0'
console.log(getFixedFloat(-10.9754, 1)); // '-11.0'
console.log(getFixedFloat(101.965, 2)); // '101.96'
console.log(getFixedFloat(101.975, 2)); // '101.98'
console.log(getFixedFloat(101.975, 3)); // '101.975'
console.log(getFixedFloat(-10.7754, 1)); // '-10.8'
console.log(getFixedFloat(9, 2)); // '9.00'
console.log(getFixedFloat(9, 0)); // '9'
console.log(getFixedFloat(10.95, 1)); // --> '11.0'
console.log(getFixedFloat(10.85, 1)); // --> '10.8'
console.log(getFixedFloat(10.2999, 2)); // --> '10.30'
console.log(getFixedFloat(10.9999, 2)); // --> '11.00'
console.log(typeof getFixedFloat(9, 0)); // 'string'
