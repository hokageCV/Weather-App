// fetches weather data, then puts required info in an object and exports it to renderData.js

// cityName :
//     name 
// mainWeather :
//     weather.main 
// okayishData :
//     main.temp
//     main.pressure
//     main.humidity
// fluffData :
//     coord.lon
//     coord.lat


async function dataLao(e) {
    e.preventDefault();
    const cityName = document.querySelector('#city').value;console.log( cityName );

    try{
        const rawData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=8f99876633dc56b8cd04a0c94c38f769&lang=hi`) ;

        const response =await rawData.json();

        
        const mausam = response.weather[0].main ;
        const mausamDesc = response.weather[0].description;
        const shahar = response.name ;
        const taapmaan = response.main.temp ; 
        const vayuMandalDabav = response.main.pressure ; 
        const namee = response.main.humidity ;
        const longitude = response.coord.lon ; 
        const latitude = response.coord.lat ; 

        return { mausam, mausamDesc, shahar, taapmaan, vayuMandalDabav, namee, longitude, latitude}; 
    
    }
    catch(err){
        const alertDiv = document.getElementsByClassName("alert")[0]
        alertDiv.textContent = "City Not found"
        setTimeout(()=>{
            alertDiv.textContent = ''
        }, 5000)
    }
}

export { dataLao };
