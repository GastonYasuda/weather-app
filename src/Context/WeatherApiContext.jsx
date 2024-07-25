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






    const [favArray, setFavArray] = useState([])

    const byInputSearch = (city_name, uniqueOrArray) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}&units=metric`) //para poner un buscador de la ciudad
            .then((response) => response.json())
            .then((json) => {

                if (uniqueOrArray) {
                    setBySearch(json);

                } else {
                    setFavArray((prevFavCities) => [...prevFavCities, json]);
                }
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
                        setUserWeather(json);
                        // localStorage.setItem('Location', JSON.stringify(json.name));
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



    //---------------------------------------- BACKGROUND IMAGE

    const backgroundImage = (weatherMain) => {
        switch (weatherMain) {
            case 'Rain':
                return <img className='weatherImg' src="/rain.jpg" alt="rain background" />;
            case 'Snow':
                return <img className='weatherImg' src="/snow.jpg" alt="snow background" />
            case 'Clear':
                return <img className='weatherImg' src="/clear.jpg" alt="clear background" />
            case 'Clouds':
                return <img className='weatherImg' src="/clouds.jpg" alt="clouds background" />
            case 'Fog':
                return <img className='weatherImg' src="/fogMist.jpg" alt="fog background" />
            case 'Mist':
                return <img className='weatherImg' src="/fogMist.jpg" alt="mist background" />
            default:
                return <p>Unknown status</p>;
        }
    }


    //---------------------------------------- FIRST CHAR TO UPPER


    function mayPrimera(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <weatherContext.Provider value={{ mayPrimera, userWeather, byInputSearch, bySearch, setFavArray, favArray, backgroundImage }}>
            {children}
        </weatherContext.Provider>
    )
}

export default WeatherApiContext