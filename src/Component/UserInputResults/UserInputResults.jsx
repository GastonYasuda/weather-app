import React, { useContext, useEffect } from 'react'
import { weatherContext } from '../../Context/WeatherApiContext'
import WeatherResult from '../WeatherResult/WeatherResult'
import { useParams } from 'react-router-dom'

const UserInputResults = () => {


    const { bySearch, byInputSearch } = useContext(weatherContext)
    const { cityId } = useParams()

    useEffect(() => {
        if (cityId) {
            console.log(cityId);
            byInputSearch(cityId, true)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cityId])

    return (
        <>
            {bySearch && bySearch.main &&
                <WeatherResult weatherData={bySearch} />
            }
        </>
    )
}

export default UserInputResults
