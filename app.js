// https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=8f99876633dc56b8cd04a0c94c38f769

import { renderData } from "./renderData.js";



const form = document.querySelector('form');
form.addEventListener('submit', renderData);

