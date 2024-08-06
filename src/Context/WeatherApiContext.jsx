import React, { createContext, useEffect, useState } from 'react'

export const weatherContext = createContext()

const WeatherApiContext = ({ children }) => {

    //---------------------------------------- CALL API


    const API_key = '387f9ff0d731ddf4811deaddd4ae497a'

    useEffect(() => {
        geoLocalization()
        setFavCities(JSON.parse(localStorage.getItem('FavCity')));
    }, [])


    //---------------------------------------- INPUT BY SEARCH


    const [bySearch, setBySearch] = useState({})
    const [favArray, setFavArray] = useState([])
    const [byFavs, setByFavs] = useState([])

    const byInputSearch = (city_name, uniqueOrArray) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}&units=metric`) //para poner un buscador de la ciudad
            .then((response) => response.json())
            .then((json) => {

                if (uniqueOrArray === 'search') {
                    setBySearch(json)

                } else if (uniqueOrArray === 'favs') {
                    setByFavs(json)

                } else if (uniqueOrArray === 'favArray') {
                    setFavArray((prevFavCities) => [...prevFavCities, json])

                }
            })
            .catch((err) => {
                console.error('Error fetching weather data:', err);
            });
    }


    //---------------------------------------- ACTUAL LOCATION

    const [userWeather, setUserWeather] = useState()

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


    //---------------------------------------- FAVS

    const [favCities, setFavCities] = useState([]);
    const [isFav, setIsFav] = useState(false)


    const toggleFav = (myCity) => {
        if (favCities.includes(myCity)) {
            setIsFav(true)
            removeFavCity(myCity);

        } else {
            setIsFav(false)
            addFavCity(myCity);
        }
    };

    const addFavCity = (myCity) => {
        setFavCities((prevFavCities) => [...prevFavCities, myCity]);
    };

    const removeFavCity = (myCity) => {
        setFavCities((prevFavCities) => prevFavCities.filter(city => city !== myCity));
    };


    const [showFavResult, setShowFavResult] = useState(false)
    const [showSearchResult, setShowSearchResult] = useState(false)

    return (
        <weatherContext.Provider value={{ mayPrimera, userWeather, byInputSearch, bySearch, setFavArray, favArray, backgroundImage, toggleFav, setIsFav, isFav, favCities, byFavs, showFavResult, setShowFavResult, showSearchResult, setShowSearchResult }}>
            {children}
        </weatherContext.Provider>
    )
}

export default WeatherApiContext