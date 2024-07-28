import React, { useContext } from 'react'
import { weatherContext } from '../../Context/WeatherApiContext'
import WeatherResult from '../WeatherResult/WeatherResult'

const UserInputResults = () => {


    const { bySearch } = useContext(weatherContext)


    return (
        <>
            {bySearch && bySearch.main &&
                <WeatherResult weatherData={bySearch} />
            }
        </>
    )
}

export default UserInputResults
