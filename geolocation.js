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

const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1600%20Amphitheatre%20Parkway,%20Mountain%20View,%20CA&key=AIzaSyB9O1f7y7Qzm3k5P6-4fNIMpeaQED827WI',
    json: true
}, (error, response, body) => {
    console.log(body.results[0].formatted_address);
    console.log(body.results[0].geometry.location.lat);
    console.log(body.results[0].geometry.location.lng);
});


