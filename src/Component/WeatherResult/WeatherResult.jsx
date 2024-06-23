/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import { Card } from 'react-bootstrap'

const WeatherResult = ({ weatherData }) => {

    // const [isActive, setIsActive] = useState(false);

    // const toggleMenu = () => {
    //     setIsActive(!isActive);
    // };


    const [isFav, setIsFav] = useState(false)


    const toggleFav = () => {
        if (isFav) {
            setIsFav(false)
        } else {
            setIsFav(true)
        }
    }

    return (
        <>
            {weatherData && weatherData.weather && weatherData.weather[0] && weatherData.main && weatherData.sys &&
                <>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body className='d-f-col-a-center'>


                            <button type='button' onClick={toggleFav} className="favOrNotFav">
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
