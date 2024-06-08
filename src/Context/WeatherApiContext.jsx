import React, { createContext, useEffect, useState } from 'react'

export const weatherContext = createContext()

const WeatherApiContext = ({ children }) => {

    //---------------------------------------- CALL API


    const [userWeather, setUserWeather] = useState()
    const [bySearch, setBySearch] = useState({})

    const API_key = '387f9ff0d731ddf4811deaddd4ae497a'


    useEffect(() => {
        geoLocalization()

    }, [])

    //fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}&units=metric`) //para poner un buscador de la ciudad


    const byInputSearch = (city_name) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}&units=metric`) //para poner un buscador de la ciudad
            .then((response) => response.json())
            .then((json) => {
                //  console.log(json);
                setBySearch(json);
                localStorage.setItem('InputLocation', JSON.stringify(json.name));
            })
            .catch((err) => {
                console.error('Error fetching weather data:', err);
            });
    }

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


    function mayPrimera(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <weatherContext.Provider value={{ mayPrimera, userWeather, byInputSearch, bySearch }}>
            {children}
        </weatherContext.Provider>
    )
}

export default WeatherApiContext