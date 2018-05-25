// package.json, package-lock.json
// open source 3rd party libraries = lodash(synchronous), RxJS(asynchronous), Cycle.js(functional reactive programming)
const json = require('./json-exercise/json.js');
const _ = require('lodash');
const yargs = require('yargs');
const geolocation = require('./geolocation')
const weather = require('./weather');


const argv = yargs
    // .options({
    //     // 수풀 Supul = Spaceweb = Openhash blockchain
    //     supul: {
    //         demand: true,
    //         alias: 's',
    //         describe: 'Get information about the area user requested.',
    //         string: true
    //     }
    // })
    .command('add', 'Add a new zsl', {
        name: {
            describe: 'Name of a zsl to add.',
            demand: true,
            alias: 'n'
        },
        tel: {
            describe: 'Telephone number of a zsl to add.',
            demand: true,
            alias: 't'
        },
    })
    .command('list', 'List zsls')
    .command('remove', 'Remove a zsl from list', {
        name: {
            describe: 'Name of a zsl to remove.',
            demand: true,
            alias: 'r'
        }
    })
    .command('get', 'Read a zsl', {
        name: {
            describe: 'Name of a zsl to read.',
            demand: true,
            alias: 'g'
        }
    })
    .command('geolocation', 'Get data about the region user requested.', {
        supul: {
            describe: 'Information on a specific region or area.',
            demand: true,
            alias: 's'
        }
    })
    .command('weather', 'Get weather data about the region user requested.')
    .help()
    .argv;


let arg2 = yargs.argv._[0];
let arg3 = yargs.argv.name;
let arg4 = yargs.argv.tel;
let arg5 = yargs.argv.supul;


// console.log(arg5);

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
} else if (arg2 === 'geolocation') {
    geolocation.geocode(argv.supul, (errorMessage, geoResults) => {
        weather.getWeather(geoResults.lat, geoResults.lng, (errorMessage, time) => {
            if (errorMessage) {
                console.log(errorMessage);
            } else {
                console.log(time);
            }
        })
    });
} else {
    console.log("I don't understand what you have input");
}

// console.log(process.argv);
// console.log(yargs.argv);

//JSON = JS Object Notation







