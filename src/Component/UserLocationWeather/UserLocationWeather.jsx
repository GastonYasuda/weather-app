/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import { weatherContext } from '../../Context/WeatherApiContext'
import WeatherResult from '../WeatherResult/WeatherResult'
import Spinner from 'react-bootstrap/Spinner';

const UserLocationWeather = () => {

    const { userWeather, backgroundImage } = useContext(weatherContext)

    const [weatherData, setWeatherData] = useState([])



    useEffect(() => {
        if (userWeather) {
            setWeatherData(userWeather)
            //  console.log(userWeather);
        }
    }, [userWeather])


    return (
        <>
            {userWeather && weatherData.main ?
                <>
                    <WeatherResult weatherData={weatherData} />

                    <div className='weatherBackgroundImg'>
                        {backgroundImage(weatherData.weather[0].main)}
                    </div>
                </>
                :
                <div className='locationNotFound d-f-col-a_center-j_center '>
                    <Spinner animation="border" variant="primary" />
                    <h1>loading...</h1>
                    <p>We cannot found your location, please check that your location is active.</p>
                </div>
            }
        </>
    )
}

export default UserLocationWeather
