// const json = require('./json-exercise/json.js');

// let getZsl = (name, callback) => {
//     let zsl = json.getZsl("Yman");
//     setTimeout(() => {
//         callback(zsl);
//     }, 3000)
// };

// getZsl("Yman", (zslObject) => {
//     console.log(zslObject);
// });

// Geolocation, Google, Google Cloud Platform => Spaceweb => Openhash Platform => School, Bank, Cityhall, Traffic....
// Time, Space
// Zsl => market participant => Spaceweb user => human or thing

// transaction between two smartphones or two PCs.
// GPS reader => lat, lng, alt coordinates => address
// Reverse geocoding = lat, lng => address

const request = require('request');
const yargs = require('yargs');

const argv = yargs
    .options({
        // 수풀 Supul = Spaceweb = Openhash blockchain
        supul: {
            demand: true,
            alias: 's',
            describe: 'Get information about the area user requested.',
            string: true
        }
    })
    .help()
    .argv;
    
    // 1. substitute the space aret to %20 in Korean characters.
    // 2. translate Korea to English, then encrypt it.

let encodedAddress = encodeURIComponent(argv.supul);

request({
    url: `https://maogleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyB9O1f7y7Qzm3k5P6-4fNIMpeaQED827WI`,
    json: true
}, (error, response, body) => {
    if (error) {
        console.log('This site can’t be reached');
    } else if (body.status === 'ZERO_RESULTS'){
        console.log('There is no address matching your input.');
    } else if (body.status === 'OK') {
        console.log(body.results[0].formatted_address);
        console.log(body.results[0].geometry.location.lat);
        console.log(body.results[0].geometry.location.lng);
    }
});


