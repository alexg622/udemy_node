const request = require('request')
const yargs = require('yargs')
const geocodeAddress = require('./geocode/geocode')
const keys = require('../.git/keys')
const weather = require("./weather/weather")

const argv = yargs.options({
  a: {
    demand: true,
    alias: "address",
    describe: "Address to fetch weather for",
    string: true
  }
})
.help()
.alias("help", "h")
.argv

geocodeAddress(argv.address, (errorMessage, results) =>{
  if(errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(results.address);
    weather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
      if (errorMessage){
        console.log(errorMessage);
      } else {
        console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature} degrees`);
      }
    })
  }
})
