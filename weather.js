const API_KEY = "";
const weather = document.querySelector(".js-weather");
const coords = 'coords';

function getWeather(lat,lng){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json();
    })
    .then(function(json){
        const temperature = json.main.temp;
        const place  = json.name;
        weather.innerText = `temperature : ${temperature} / location : ${place}`;
    });
}

function saveCoords(coordsobj){
    localStorage.setItem(coords, JSON.stringify(coordsobj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsobj = {
        latitude,
        longitude
    };
    saveCoords(coordsobj);
    getWeather(latitude,longitude);
}

function handleGeoErr(){
    console.log("cant access geo locatoin");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoErr);
}

function loadCoords(){
    const loadCords = localStorage.getItem(coords);
    if (loadCords === null){
        askForCoords();
    }else{
        const parsedCoords = JSON.parse(loadCords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);

    }
}

function init(){
    loadCoords();
}
init();