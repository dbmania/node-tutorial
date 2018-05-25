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


    
    // 1. substitute the space aret to %20 in Korean characters.
    // 2. translate Korea to English, then encrypt it.


let geocode = (address, callback) => {
    let encodedAddress = encodeURIComponent(address);
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyB9O1f7y7Qzm3k5P6-4fNIMpeaQED827WI`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('This site can’t be reached');
        } else if (body.status === 'ZERO_RESULTS'){
            callback('There is no address matching your input.');
        } else if (body.status === 'OK') {
            let geoResults = {};
            geoResults.address = body.results[0].formatted_address;
            geoResults.lat = body.results[0].geometry.location.lat;
            geoResults.lng = body.results[0].geometry.location.lng;

            callback(undefined, geoResults);
        }
    });
}


module.exports.geocode = geocode;


