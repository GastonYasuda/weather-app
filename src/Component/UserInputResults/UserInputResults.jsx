import React, { useContext, useEffect } from 'react'
import { weatherContext } from '../../Context/WeatherApiContext'
import WeatherResult from '../WeatherResult/WeatherResult'

const UserInputResults = () => {


    const { bySearch } = useContext(weatherContext)


    useEffect(() => {

        if (bySearch) {

            console.log(bySearch);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [bySearch])


    return (
        <>
            {bySearch &&
                <WeatherResult weatherData={bySearch} />
            }
        </>
    )
}

export default UserInputResults
