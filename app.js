// package.json, package-lock.json
// open source 3rd party libraries = lodash(synchronous), RxJS(asynchronous), Cycle.js(functional reactive programming)
const json = require('./json-exercise/json.js');
const _ = require('lodash');
const yargs = require('yargs');

let arg2 = yargs.argv._[0];
let arg3 = yargs.argv.name;
let arg4 = yargs.argv.tel;



// console.log(arg3, arg4);

//be careful of Scope of variables and functions etc.
if (arg2 === 'add') {
    json.addZsl(arg3, arg4);
} else if (arg2 === 'remove') {
    let result = json.removeZsl(arg3);
    let message = result ? `${arg3} was found`: `${arg3} was removed`;
    console.log(message);  
} else if (arg2 === 'get') {
    let result = json.getZsl(arg3);
    console.log(`name: ${result.name}, tel: ${result.tel}`);  
} else if (arg2 === 'list') {
    let result = json.listZsl();
    result.forEach(element => {
        console.log(`name: ${element.name}, tel: ${element.tel}`);  
    });
} else {
    console.log("I don't understand what you have input");
}

// console.log(process.argv);
// console.log(yargs.argv);

//JSON = JS Object Notation







