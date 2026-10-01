// CommonJS
// const {generateRandomNumber, celciusToFahrenheit} = require('./utils')
// console.log(`Random number: ${generateRandomNumber()}`)
// console.log(`Celcius to Fahrenheit: ${celciusToFahrenheit(0)}`)

// Module
import getPost, { getPostLength } from "./postController.js";

console.log(getPost());
console.log(`Post length`, getPostLength());
