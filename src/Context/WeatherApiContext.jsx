import React, { createContext, useEffect } from 'react'

export const weatherContext = createContext()

const WeatherApiContext = ({children}) => {

    //---------------------------------------- CALL API

    const API_key = '387f9ff0d731ddf4811deaddd4ae497a'
    // const lat = 35.94926123904551
    // const lon = 139.40877288841608

    const city_name = 'villa crespo'

    useEffect(()=>{
    //    fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`) //por lat y lon para la ubicacion actual
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}&units=metric`) //para poner un buscador de la ciudad

        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            console.log((json.name));
            console.log((json.main.temp));
            console.log(json.weather[0].id);

            // console.log((json.main.humidity));

        })
    },[])







  return (
    <weatherContext.Provider value={{}}>
        {children}
    </weatherContext.Provider>
)
}

export default WeatherApiContext