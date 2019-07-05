const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/929be27b2a8fed7f542922191ddc3a6e/'+ latitude + ',' + longitude +'?units=si';
    request({ url, json: true }, (error, {body}) => {
        if(error)
            callback('Unable to connect to weather sevice', undefined);
        else if (body.error) {
            callback('Unable to find location', undefined)
        }
        else {
            const {currently, daily} = body;
            callback(undefined, `${daily.data[0].summary} It is currently ${currently.temperature} degrees out. There is a ${currently.precipProbability}% chance of rain.`)
        }
    });
};

module.exports = forecast;