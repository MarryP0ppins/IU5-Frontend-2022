const changeBackground = (code) => {
    switch (code.slice(0, 2)) {
        case '01':
            document.body.style.background = "url(./img/clearSky.jpg) no-repeat top center";
            return;
        case '02':
            document.body.style.background = "url(./img/fewClouds.jpg) no-repeat top center";
            return;
        case '03':
            document.body.style.background = "url(./img/scatteredClouds.jpg) no-repeat top center"
            return;
        case '04':
            document.body.style.background = "url(./img/brokenClouds.jpg) no-repeat top center"
            return;
        case '09':
            document.body.style.background = "url(./img/showerRain.jpg) no-repeat top center";
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


const weatherNowFunc = (info) => {
    changeBackground(info.weather[0].icon)
    const temp = Math.round(info.main.temp);
    document.getElementById("mainTemp").innerHTML = (temp > 0 ? '+' : temp < 0 ? '-' : '') + temp + "°"
    const feelsLike = Math.round(info.main.feels_like)
    document.getElementById("mainFeelsLike").innerHTML = "Ощущается как: " + (feelsLike > 0 ? '+' : feelsLike < 0 ? '-' : '') + feelsLike + "°"
    document.getElementById("mainDescription").innerHTML = info.weather[0].description[0].toUpperCase() + info.weather[0].description.slice(1)
    document.getElementById("mainPicture").src = `https://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`
    document.getElementById("mainWind").innerHTML = `Скорость ветра: ${Math.round(info.wind.speed)}м/с`
    document.getElementById("mainWet").innerHTML = `Относительная влажность: ${info.main.humidity}%`
    document.getElementById("mainPressure").innerHTML = `Атмосферное давлние: ${Math.round(info.main.pressure * 0.75)}мм рт. ст.`
}

const weatherNextFunc = (info) => {
    let bottom = document.getElementById("bottomBox")
    if (bottom) bottom.remove()
    bottom = document.createElement("div")
    bottom.setAttribute('id', 'bottomBox')
    const date = (new Date).getHours()
    for (hour = 1; hour < 24; hour++) {
        const nextTemp = document.createElement('div')
        nextTemp.setAttribute('id', 'nextTemp')
        nextTemp.innerHTML = (Math.round(info[hour].temp) > 0 ? '+' : Math.round(info[hour].temp) < 0 ? '-' : '') + Math.round(info[hour].temp) + "°"

        const nextPicture = document.createElement('img')
        nextPicture.setAttribute('id', "nextPicture")
        nextPicture.setAttribute('src', `https://openweathermap.org/img/wn/${info[hour].weather[0].icon}@2x.png`)

        const time = document.createElement('div')
        time.setAttribute('id', "time")
        time.innerHTML = (date + hour) % 24 + ':00'

        const nextDescription = document.createElement('div')
        nextDescription.setAttribute('id', "nextDescription")
        nextDescription.innerHTML = info[hour].weather[0].description[0].toUpperCase() + info[hour].weather[0].description.slice(1)

        const nextWind = document.createElement('div')
        nextWind.setAttribute('class', "item")
        nextWind.setAttribute('id', "nextWind")
        nextWind.innerHTML = `<i class='fa-solid fa-wind'></i><div>${Math.round(info[hour].wind_speed)}м/с</div>`

        const nextWet = document.createElement('i')
        nextWet.setAttribute('class', "item")
        nextWet.setAttribute('id', "nextWet")
        nextWet.innerHTML = `<i class='fa-solid fa-droplet'></i><div>${info[hour].humidity}%</div>`

        const nextPressure = document.createElement('div')
        nextPressure.setAttribute('class', "item")
        nextPressure.setAttribute('id', "nextPressure")
        nextPressure.innerHTML = `<i class='fa-regular fa-compass'></i><div>${Math.round(info[hour].pressure * 0.75)}мм рт. ст.</div>`

        const left = document.createElement('div')
        left.setAttribute('id', 'nextLeft')
        left.append(nextTemp, nextPicture)
        const right = document.createElement('div')
        right.setAttribute('id', 'nextRight')
        right.append(time, nextDescription, nextWind, nextWet, nextPressure)

        const box = document.createElement('div')
        box.setAttribute('class', 'boxNextWeather')
        box.append(left, right)
        bottom.append(box)
    }
    document.body.insertBefore(bottom, document.getElementById("script"))
}

main = () => {
    const city = inputCity.value === "" ? "Москва" : encodeURIComponent(inputCity.value)
    const apiKey = "ca145850eea033fbad59a1c102308f58"

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${apiKey}`)
        .then(response => response.json())
        .then(result => {
            if (result.cod != 404) {
                weatherNowFunc(result)
                fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${result.coord.lat}&lon=${result.coord.lon}&lang=ru&cnt=5&units=metric&appid=${apiKey}`)
                    .then(responseIn => responseIn.json())
                    .then(resultIn => {
                        (resultIn.cod != 404) && weatherNextFunc(resultIn.hourly)
                    }, error => alert(error))
            } else alert("Город не найден")
        }, error => alert(error))
}