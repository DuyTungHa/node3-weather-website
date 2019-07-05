const request = require('request');

const geocode = (address, callback) =>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoidHVuZ2tlbjQzMjEiLCJhIjoiY2p4am83MXliMTNkaDNucHFkbHR3djd3MyJ9.AyG92qes9UwhHEHxE6s3qw';
    request({url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to location services!', undefined);
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined);
        } else {
            const {center, place_name} = body.features[0]; 
            callback(undefined, {
                latitude: center[1],
                longtitude: center[0],
                location: place_name
            })
        }
    })
}

module.exports = geocode;