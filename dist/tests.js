"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
console.log(index_1.getFixedFloat(-100.9754, 5)); // -100.97540
console.log(index_1.getFixedFloat(-1.9754, 1)); // '-2.0'
console.log(index_1.getFixedFloat(-10.9754, 1)); // '-11.0'
console.log(index_1.getFixedFloat(101.965, 2)); // '101.96'
console.log(index_1.getFixedFloat(101.975, 2)); // '101.98'
console.log(index_1.getFixedFloat(101.975, 3)); // '101.975'
console.log(index_1.getFixedFloat(-10.7754, 1)); // '-10.8'
console.log(index_1.getFixedFloat(9, 2)); // '9.00'
console.log(index_1.getFixedFloat(9, 0)); // '9'
console.log(index_1.getFixedFloat(10.95, 1)); // --> '11.0'
console.log(index_1.getFixedFloat(10.85, 1)); // --> '10.8'
console.log(typeof index_1.getFixedFloat(9, 0)); // 'string'
