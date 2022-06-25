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



async function renderData(){
    const data = await dataLao();

    cityName.textContent = `${data.shahar}`;
    weather.textContent = `${data.mausam}`;
    temperature.textContent = `${data.taapmaan}`;
    pressure.textContent = `${data.vayuMandalDabav}`;
    humidity.textContent = `${data.namee}`;
    longitude.textContent = `${data.longitude}`
    latitude.textContent = `${data.latitude}`;

}

export {renderData};