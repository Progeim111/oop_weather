// Weather object
const weather = new Weather("Tallinn")
console.log(weather.getWeather())

// Get city weather
function getWeather() {
    weather.getWeather()
        .then(data => {
            console.log(data)
        })
        .catch(error => console.log(error))
}

getWeather()