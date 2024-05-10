/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react'
import { weatherContext } from '../../Context/WeatherApiContext'

const UserLocationWeather = () => {

    const { userWeather } = useContext(weatherContext)


    useEffect(() => {
        userWeather && console.log(userWeather);
    }, [])

    return (
        <>
            {userWeather &&
                <>
                    <h4>{userWeather.weather[0].main}</h4>
                    <img src={`http://openweathermap.org/img/wn/${userWeather.weather[0].icon}.png`} alt="Weather icon" />


                    <h2>Temp: {Math.round(userWeather.main.temp)}°</h2>
                    <h4>Max: {Math.round(userWeather.main.temp_max)}°</h4>
                    <h4>Min: {Math.round(userWeather.main.temp_min)}°</h4>

                    <h1>{userWeather.name}</h1>
                    <h4>{userWeather.sys.country}</h4>
                </>
            }
        </>
    )
}

export default UserLocationWeather
