/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'

const WeatherResult = ({ weatherData }) => {

    const [isFav, setIsFav] = useState(false)
    const [favCities, setFavCities] = useState([]);
    // const [myLocation, setMyLocation] = useState('')

    // Cargar favCities desde localStorage al montar el componente
    useEffect(() => {
        const storedFavs = JSON.parse(localStorage.getItem('FavCity'));
        if (storedFavs) {
            setFavCities(storedFavs);
        }

        console.log("myLocation:", weatherData.name);

    }, [isFav]);

    // Actualizar localStorage cada vez que favCities cambie
    useEffect(() => {
        localStorage.setItem('FavCity', JSON.stringify(favCities));

        if (favCities && favCities.includes(weatherData.name)) {
            setIsFav(true)
        } else {
            setIsFav(false)
        }
    }, [favCities, weatherData]);

    const toggleFav = (myCity) => {
        // setMyLocation(myCity)
        if (favCities.includes(myCity)) {
            setIsFav(true)
            removeFavCity(myCity);
            console.log("esta");

        } else {
            setIsFav(false)
            addFavCity(myCity);
            console.log("NO esta");
        }
    };

    const addFavCity = (myCity) => {
        setFavCities((prevFavCities) => [...prevFavCities, myCity]);
    };

    const removeFavCity = (myCity) => {
        setFavCities((prevFavCities) => prevFavCities.filter(city => city !== myCity));
    };


    return (
        <>
            {weatherData && weatherData.weather && weatherData.weather[0] && weatherData.main && weatherData.sys &&
                <>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body className='d-f-col-a-center'>

                            {/* <div>
                                <div>
                                    <h3>Favoritos:</h3>
                                    <ul>
                                        {favoritos.map((city, index) => (
                                            <li key={index}>{city}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div> */}


                            <button type='button' onClick={() => { toggleFav(weatherData.name) }} className="favOrNotFav">
                                {
                                    isFav ?
                                        <img src="/fav.svg" alt="fav buttom" />
                                        :
                                        <img src="/not_fav.svg" alt="not fav buttom" />

                                }
                            </button>


                            <section className='weatherData d-f-col-a-center'>
                                <div className="mainData d-f-col-a-center ">
                                    <h4>{weatherData.weather[0].main}</h4>
                                    <div className="d-f-row-a-center">
                                        <h1>{weatherData.name} - </h1>
                                        <h1> <b>{weatherData.sys.country}</b></h1>
                                    </div>
                                </div>
                                <Card.Title>
                                    <span>{Math.round(weatherData.main.temp)}°</span>
                                </Card.Title>
                                <div className="d-f-row-j-between">
                                    <span>Max: {Math.round(weatherData.main.temp_max)}°</span>
                                    <span>Min: {Math.round(weatherData.main.temp_min)}°</span>
                                </div>
                            </section>

                        </Card.Body>


                    </Card>

                </>
            }
        </>
    )
}

export default WeatherResult
