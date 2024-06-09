/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import { weatherContext } from '../../Context/WeatherApiContext'
import WeatherResult from '../WeatherResult/WeatherResult'

const UserLocationWeather = () => {

    const { userWeather } = useContext(weatherContext)

    const [weatherData, setWeatherData] = useState([])

    useEffect(() => {
        if (userWeather) {
            setWeatherData(userWeather)
            console.log(userWeather);
        }
    }, [userWeather])


    return (
        <>
            {userWeather &&
                <WeatherResult weatherData={weatherData} />
            }
        </>
    )
}

export default UserLocationWeather
