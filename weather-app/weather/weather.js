const request = require('request')
const keys = require('../../.git/keys')

const getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/${keys.apiKey}/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (error){
      callback("Unable to connect to Forecase.io Service");
    } else if (response.statusCode === 400){
      callback("Unable to fetch weather");
    } else if (response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }
  })
}

module.exports = getWeather
