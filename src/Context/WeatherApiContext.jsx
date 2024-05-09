import React, { createContext, useEffect, useState } from 'react'

export const weatherContext = createContext()

const WeatherApiContext = ({ children }) => {

    //---------------------------------------- CALL API


    const [userWeather, setUserWeather] = useState()

    const API_key = '387f9ff0d731ddf4811deaddd4ae497a'


    useEffect(() => {
        geoLocalization()

    }, [])

    //fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}&units=metric`) //para poner un buscador de la ciudad


    const geoLocalization = () => {
        navigator.geolocation.getCurrentPosition(
            ({ coords }) => {
                const { latitude, longitude } = coords;
                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_key}&units=metric`)
                    .then((response) => response.json())
                    .then((json) => {
                        //console.log(json);
                        setUserWeather(json);
                        localStorage.setItem('Location', JSON.stringify(json.name));
                    })
                    .catch((err) => {
                        console.error('Error fetching weather data:', err);
                    });
            },
            (err) => {
                alert('No se pudo obtener ubicación');
                console.error('Geolocation error:', err);
            }
        );
    };


    return (
        <weatherContext.Provider value={{ userWeather }}>
            {children}
        </weatherContext.Provider>
    )
}

export default WeatherApiContext