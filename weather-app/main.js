const searchBtn = document.querySelector('.search');
const tempToggle = document.getElementById('temp-tog');
let tempInF = true;

searchBtn.addEventListener('click', getWeather);
tempToggle.addEventListener('click', () => {
    let getTemp = document.querySelector('#user-temp').textContent;
    toggleTemp(getTemp);
});

function toggleTemp(t) {
    let getTemp = document.querySelector('#user-temp');

    if (tempInF === true) {
        let newTemp = Math.round((t - 32) / 1.8);

        getTemp.textContent = newTemp;

        tempInF = false;
    } else {
        let newTemp = Math.round((t * 1.8) + 32);

        getTemp.textContent = newTemp;

        tempInF = true;
    }
}


function getWeather() {
    const url = buildUrl();

    fetch(url, {mode:'cors'})
        .then(data => {
            return data.json();
        })
        .then(data => {
            console.log(data);

            const loc = data.name;
            const temp = kvToFh(data.main.temp);
            const weather = data.weather[0].main;

            showWeather(loc, temp, weather);
    });
}

function kvToFh(k) {
    const f = Math.round(((k-273.15) * 1.8) + 32);

    return f;
}

function buildUrl() {
    const locationSearch = document.getElementById('search-value').value;
    const searchUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + locationSearch + '&appid=3f4b37410dae41853e29006e593f0cc6';

    return searchUrl;
}

function showWeather(loc, temp, weather = '') {
    const getLocation = document.querySelector('.user-loc');
    const getTemp = document.querySelector('.user-temp');
    const getUserWeather = document.querySelector('.user-weather');

    getLocation.textContent = loc;
    getTemp.textContent = temp;
    getUserWeather.textContent = weather;

}


function cwosantLog() {
    console.log('cwosant');
}

