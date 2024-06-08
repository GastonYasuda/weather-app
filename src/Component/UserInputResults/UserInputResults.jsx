import React, { useContext } from 'react'
import { weatherContext } from '../../Context/WeatherApiContext'

const UserInputResults = () => {

    const { bySearch } = useContext(weatherContext)


    return (
        <>
            {bySearch && bySearch.weather && bySearch.weather[0] && bySearch.main && bySearch.sys &&
                <>
                    <h4>{bySearch.weather[0].main}</h4>
                    <img src={`http://openweathermap.org/img/wn/${bySearch.weather[0].icon}.png`} alt="Weather icon" />


                    <h2>Temp: {Math.round(bySearch.main.temp)}°</h2>
                    <h4>Max: {Math.round(bySearch.main.temp_max)}°</h4>
                    <h4>Min: {Math.round(bySearch.main.temp_min)}°</h4>

                    <h1>{bySearch.name}</h1>
                    <h4>{bySearch.sys.country}</h4>
                </>
            }
        </>
    )
}

export default UserInputResults
