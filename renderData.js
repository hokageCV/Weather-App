import { dataLao } from "./dataLao.js";

const cityDiv = document.getElementById('cityName');
const mainWeatherDiv = document.getElementById('mainWeather');
const okayishDiv = document.getElementById('okayishData');
const fluffDiv = document.getElementById('fluffData');

const cityName = document.createElement('h3');
const weather = document.createElement('p');
const temperature = document.createElement('p');
const pressure = document.createElement('p');
const humidity = document.createElement('p');
const longitude = document.createElement('p');
const latitude = document.createElement('p'); 

cityDiv.appendChild(cityName);
mainWeatherDiv.appendChild(weather);
okayishDiv.appendChild(temperature);
okayishDiv.appendChild(pressure);
okayishDiv.appendChild(humidity);
fluffDiv.appendChild(longitude);
fluffDiv.appendChild(latitude);



async function renderData(e){
    const data = await dataLao(e);

    cityName.textContent = `${data.shahar}`;
    weather.textContent = `Weather : ${data.mausam}`;
    temperature.textContent = `Temperature : ${data.taapmaan}`;
    pressure.textContent = `Pressure : ${data.vayuMandalDabav}`;
    humidity.textContent = `Humidity : ${data.namee}`;
    longitude.textContent = `Latitude : ${data.longitude}`;
    latitude.textContent = `Longitude : ${data.latitude}`;

}

export {renderData};