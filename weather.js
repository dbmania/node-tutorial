// Autonomous Driving 
const request = require('request');


let getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/208976c30b861eaae15b596e1a07b65f/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('This site can’t be reached');
        } else if (body.status === 'ZERO_RESULTS'){
            callback('There is no region matching your input.');
        } else {
            callback(undefined, body.currently.time);
        }
    });
}


module.exports.getWeather = getWeather;


