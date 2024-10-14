//Ubah ke Module

//1
import yearUntilRetirement from './number1.js';
yearUntilRetirement(1987, "John");


//2.
import addNumber from './number2.js';
const result = addNumber(1, 2, 3, 4, 5, 6, 7);
console.log(result);


//3.
import { calculateArea } from './number3.js';

let radius = 0;
const power = 2;

radius = 21;
const area21 = calculateArea({ radius, power });

radius = 7;
const area7 = calculateArea({ radius, power });

console.log(`Area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);


//4.
import { makeAjaxRequest } from './number4.js';
makeAjaxRequest('www.google.com');
