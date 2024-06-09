import React, { useContext, useEffect, useState } from 'react'
import { weatherContext } from '../../Context/WeatherApiContext'
import WeatherResult from '../WeatherResult/WeatherResult'

const UserInputResults = () => {

    const { bySearch } = useContext(weatherContext)

    const [userSearchResult, setUserSearchResult] = useState([])

    useEffect(() => {

        if (bySearch) {
            setUserSearchResult(bySearch)
        }

    }, [bySearch])


    return (
        <>
            {userSearchResult &&
                <WeatherResult weatherData={userSearchResult} />
            }
        </>
    )
}

export default UserInputResults
