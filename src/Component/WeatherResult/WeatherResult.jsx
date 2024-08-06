/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react'
import { Card } from 'react-bootstrap'
import ShowFavEachCity from '../ShowFavEachCity/ShowFavEachCity';
import { weatherContext } from '../../Context/WeatherApiContext';
import Background from '../BackgroundImg/BackgroundImg';

const WeatherResult = ({ weatherData }) => {

    const { toggleFav, setIsFav, isFav, favCities } = useContext(weatherContext)

    useEffect(() => {
        if (favCities && favCities.includes(weatherData.name)) {
            setIsFav(true)
            localStorage.setItem('FavCity', JSON.stringify(favCities));

        } else {
            setIsFav(false)
            localStorage.setItem('FavCity', JSON.stringify(favCities));
        }

    }, [weatherData, favCities]);



    return (
        <div className='cardResult d-f-col-a_center-j_center'>
            {weatherData && weatherData.weather && weatherData.weather[0] && weatherData.main && weatherData.sys &&
                <Card style={{ width: '18rem' }}>
                    <Card.Body className='d-f-col-a-center'>

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
            }
            <ShowFavEachCity favCities={favCities} />

            <Background getBackground={weatherData} />

        </div>
    )
}

export default WeatherResult
