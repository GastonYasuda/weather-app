import React from 'react'
import WeatherResult from '../WeatherResult/WeatherResult'

const UserInputResults = ({ myresult }) => {

    return (
        <>
            {myresult && myresult.main &&
                <WeatherResult weatherData={myresult} />
            }
        </>
    )
}

export default UserInputResults
