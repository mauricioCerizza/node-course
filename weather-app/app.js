import axios from 'axios'

const weatherUrl = `http://api.weatherstack.com/current?access_key=01e64cf020c6f1ef3123ae87b79045b6&query=Buenos Aires`
const geocondingUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/Avellaneda.json?access_token=pk.eyJ1IjoibWNlcml6emEiLCJhIjoiY2tkeGx1ZTM0MHUwdjJwb2Fva3d3bnR1YSJ9.HQLIj3m4z5MXi0edjTDpIg&limit=1`

axios.get(weatherUrl)
.then(response => {
    if (response.data.error) {
        console.log(response.data.error.info)
    }
    else {
        const currentWeather = response.data.current
        const msg = `It is currently ${currentWeather.weather_descriptions[0]} and it is ${currentWeather.temperature} degress out. It feels like ${currentWeather.feelslike} degress out.`
        console.log(msg)
    }
})
.catch(error => {
    console.log(`Can't connect to weather service` + error)
})

axios.get(geocondingUrl)
.then(response => {
    if (response.data.features.length === 0) {
        console.log('Unable to find location. Try another search.')
    }
    else {
        const place = response.data.features[0]
        // latitude,logitude
        const coordinates = `${place.center[1]},${place.center[0]}`
        console.log(`${place.place_name}: ${coordinates}`)
    }
})
.catch(error => {
    console.log(`Can't connect to geocoding service` + error)
})