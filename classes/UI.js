class UI {
    constructor() {
        this.description = document.querySelector("#description")
        this.temp = document.querySelector("#temp")
        this.city = document.querySelector("#location")
        this.wind_deg = document.querySelector("#wind_deg")
        this.wind_sp = document.querySelector("#wind_speed")
        this.humi = document.querySelector('#humidity')
        this.air_pr = document.querySelector('#air_pressure')
        this.visibility = document.querySelector('#visibility')

    }

    drawWeather(data) {
        let celsius = Math.round(parseFloat(data.main.temp) - 273.15)

        this.description.innerHTML = data.weather[0].description
        this.temp.innerHTML = celsius + "&deg;"
        this.city.innerHTML = 'City: ' + data.name
        this.wind_deg.innerHTML = 'Wind ' + data.wind.deg + '\u00B0'
        this.wind_sp.innerHTML = 'Wind speed: ' + data.wind.speed + ' m/s'
        this.humi.innerHTML = 'Humidity: ' + data.main.humidity + ' %'
        this.air_pr.innerHTML = 'Air pressure: ' + data.main.pressure
        this.visibility.innerHTML = 'Visibility: ' + data.visibility
    }
}