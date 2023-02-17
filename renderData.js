import { dataLao } from "./dataLao.js";

const cityDiv = document.getElementById('cityName');
const mainWeatherDiv = document.getElementById('mainWeather');
const okayishDiv = document.getElementById('okayishData');
const fluffDiv = document.getElementById('fluffData');

const cityName = document.createElement('h3');
const weather = document.createElement('p');
const weatherDesc = document.createElement('p');
const temperature = document.createElement('p');
const pressure = document.createElement('p');
const humidity = document.createElement('p');
const longitude = document.createElement('p');
const latitude = document.createElement('p'); 

cityDiv.appendChild(cityName);
mainWeatherDiv.appendChild(weather);
mainWeatherDiv.appendChild(weatherDesc);
okayishDiv.appendChild(temperature);
okayishDiv.appendChild(pressure);
okayishDiv.appendChild(humidity);
fluffDiv.appendChild(longitude);
fluffDiv.appendChild(latitude);



async function renderData(e){
    const data = await dataLao(e);
    let taapmaanInC = data.taapmaan +  -273.1 ; // kelvin to celsius

    cityName.textContent = `${data.shahar}`;
    weather.textContent = `Weather : ${data.mausam}`;
    weatherDesc.textContent = `मौसम : ${data.mausamDesc}`;
    temperature.textContent = `Temperature : ${taapmaanInC.toFixed(2)}℃ `; 
    pressure.textContent = `Pressure : ${data.vayuMandalDabav}`;
    humidity.textContent = `Humidity : ${data.namee}`;
    longitude.textContent = `Latitude : ${data.longitude}`;
    latitude.textContent = `Longitude : ${data.latitude}`;


    // document.body.style.backgroundImage= `url('https://source.unsplash.com/1080x1070/?weather,sky,"+${data.mausam}+"')`

    // fetch image
    const response =await fetch(`https://source.unsplash.com/2400x1566/?weather,sky,"+${data.mausam}+"`)
    const blob = await response.blob()
    const imgURL =await URL.createObjectURL(blob)
    document.body.style.backgroundImage = `url(${imgURL})`;

    // Add the 'darken' class to the body to darken it
    document.body.classList.add('darkenOverlay');


    // making container thoda visible
    const container = document.getElementsByClassName("container")[0]
    container.classList.add("thodaOverlay")
}

export { renderData };
