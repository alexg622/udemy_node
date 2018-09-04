const request = require('request')
const yargs = require('yargs')
const keys = require('../.git/keys')
const axios = require('axios')

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

const encodedAddress = encodeURIComponent(argv.address)
const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`

axios.get(geocodeUrl).then(res => {
  if (res.data.status === "ZERO_RESULTS") {
    throw new Error("Unable to find that address")
  }
  let lat = res.data.results[0].geometry.location.lat
  let lng = res.data.results[0].geometry.location.lng
  let weatherUrl = `https://api.darksky.net/forecast/${keys.apiKey}/${lat},${lng}`
  console.log(res.data.results[0].formatted_address);
  return axios.get(weatherUrl);
}).then((res) => {
  let temperature = res.data.currently.temperature
  let apparentTemperature = res.data.currently.apparentTemperature
  console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}`);
}).catch(e => {
  if (e.code === "ENOTFOUND") {
    console.log("Unable to connect to geocode servers");
  } else {
    console.log(e.message);
  }
})
