// package.json, package-lock.json
// open source 3rd party libraries = lodash(synchronous), RxJS(asynchronous), Cycle.js(functional reactive programming)
const calc = require('./calc');
const _ = require('lodash');
const yargs = require('yargs');

let arg2 = yargs.argv._[0];
let arg3 = yargs.argv.a;
let arg4 = yargs.argv.b;

// arguemnts are strings
// console.log(calc.add(arg3, arg4));


if (arg2 === 'add') {
    let result = calc.add(arg3, arg4);
    console.log(result);
} else if (arg2 === 'substract') {
    let result = calc.substract(arg3, arg4);
    console.log(result);
} else if (arg2 === 'multiply') {
    let result = calc.multiply(arg3, arg4);
    console.log(result);
} else {
    console.log("I don't understand what you have input");
}

// console.log(process.argv);
// console.log(yargs.argv);







