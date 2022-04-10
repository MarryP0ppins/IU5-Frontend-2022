const change_background = (code) => {
    switch (code.slice(0, 2)) {
        case '01':
            document.body.style.background = "url(./img/clear_sky.jpg) no-repeat top center";
            return;
        case '02':
            document.body.style.background = "url(./img/few_clouds.jpg) no-repeat top center";
            return;
        case '03':
            document.body.style.background = "url(./img/scattered_clouds.jpg) no-repeat top center"
            return;
        case '04':
            document.body.style.background = "url(./img/broken_clouds.jpg) no-repeat top center"
            return;
        case '09':
            document.body.style.background = "url(./img/shower_rain.jpg) no-repeat top center";
            return;
        case '10':
            document.body.style.background = "url(./img/rain.jpg) no-repeat top center";
            return;
        case '11':
            document.body.style.background = "url(./img/thunderstorm.jpg) no-repeat top center";
            return;
        case '13':
            document.body.style.background = "url(./img/snow.jpg) no-repeat top center";
            return;
        case '50':
            document.body.style.background = "url(./img/mist.jpg) no-repeat top center";
            return;
    }
}


const weather_now_func = (info) => {
    change_background(info.weather[0].icon)
    const temp = Math.round(info.main.temp);
    document.getElementById("main_temp").innerHTML = (temp > 0 ? '+' : temp < 0 ? '-' : '') + temp + "°"
    const feels_like = Math.round(info.main.feels_like)
    document.getElementById("main_feels_like").innerHTML = "Ощущается как: " + (feels_like > 0 ? '+' : feels_like < 0 ? '-' : '') + feels_like + "°"
    document.getElementById("main_description").innerHTML = info.weather[0].description[0].toUpperCase() + info.weather[0].description.slice(1)
    document.getElementById("main_picture").src = `https://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`
    document.getElementById("main_wind").innerHTML = `Скорость ветра: ${Math.round(info.wind.speed)}м/с`
    document.getElementById("main_wet").innerHTML = `Относительная влажность: ${info.main.humidity}%`
    document.getElementById("main_pressure").innerHTML = `Атмосферное давлние: ${Math.round(info.main.pressure * 0.75)}мм рт. ст.`
}

const weather_next_func = (info) => {
    /*console.log(info)*/
    let bottom = document.getElementById("bottom_box")
    if (bottom) bottom.remove()
    bottom = document.createElement("div")
    bottom.setAttribute('id', 'bottom_box')
    const date = (new Date).getHours()
    for (hour = 1; hour < 24; hour++) {
        const next_temp = document.createElement('div')
        next_temp.setAttribute('id', 'next_temp')
        next_temp.innerHTML = (Math.round(info[hour].temp) > 0 ? '+' : Math.round(info[hour].temp) < 0 ? '-' : '') + Math.round(info[hour].temp) + "°"

        const next_picture = document.createElement('img')
        next_picture.setAttribute('id', "next_picture")
        next_picture.setAttribute('src', `https://openweathermap.org/img/wn/${info[hour].weather[0].icon}@2x.png`)

        const time = document.createElement('div')
        time.setAttribute('id', "time")
        time.innerHTML = (date + hour) % 24 + ':00'

        const next_description = document.createElement('div')
        next_description.setAttribute('id', "next_description")
        next_description.innerHTML = info[hour].weather[0].description[0].toUpperCase() + info[hour].weather[0].description.slice(1)

        const next_wind = document.createElement('div')
        next_wind.setAttribute('class', "item")
        next_wind.setAttribute('id', "next_wind")
        next_wind.innerHTML = `<i class='fa-solid fa-wind'></i><div>${Math.round(info[hour].wind_speed)}м/с</div>`

        const next_wet = document.createElement('i')
        next_wet.setAttribute('class', "item")
        next_wet.setAttribute('id', "next_wet")
        next_wet.innerHTML = `<i class='fa-solid fa-droplet'></i><div>${info[hour].humidity}%</div>`

        const next_pressure = document.createElement('div')
        next_pressure.setAttribute('class', "item")
        next_pressure.setAttribute('id', "next_pressure")
        next_pressure.innerHTML = `<i class='fa-regular fa-compass'></i><div>${Math.round(info[hour].pressure * 0.75)}мм рт. ст.</div>`

        const left = document.createElement('div')
        left.setAttribute('id', 'next_left')
        left.append(...[next_temp, next_picture])
        const right = document.createElement('div')
        right.setAttribute('id', 'next_right')
        right.append(...[time, next_description, next_wind, next_wet, next_pressure])

        const box = document.createElement('div')
        box.setAttribute('class', 'box_next_weather')
        box.append(...[left, right])
        bottom.append(box)
    }
    document.body.insertBefore(bottom, document.getElementById("script"))
}

main = () => {
    const city = input_city.value === "" ? "Москва" : encodeURIComponent(input_city.value)
    const api_key = "ca145850eea033fbad59a1c102308f58"

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${api_key}`)
        .then(response => response.json())
        .then(result => {
            /*console.log(result)*/
            result.cod == 404 ? alert("Город не найден") : weather_now_func(result)
        }, error => alert(error))

    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${api_key}`)
        .then(response => response.json())
        .then(result => {
            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${result[0].lat}&lon=${result[0].lon}&lang=ru&cnt=5&units=metric&appid=${api_key}`)
                .then(response_in => response_in.json())
                .then(result_in => {
                    (result_in.cod != 404) && weather_next_func(result_in.hourly)
                }, error => alert(error))
        }, error => alert(error))
}