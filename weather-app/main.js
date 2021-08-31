const searchBtn = document.querySelector('.search');
searchBtn.addEventListener('click', getWeather);


function getWeather() {
    const url = buildUrl();

    fetch(url, {mode:'cors'})
        .then(data => {
            return data.json();
        })
        .then(data => {
            
    });
}

function buildUrl() {
    const locationSearch = document.getElementById('search-value').value;
    const searchUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + locationSearch + '&appid=3f4b37410dae41853e29006e593f0cc6';

    return searchUrl;
}




function cwosantLog() {
    console.log('cwosant');
    console.log(locationSearch);
}

