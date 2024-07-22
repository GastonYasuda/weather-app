import React, { useContext, useEffect } from 'react'
import { weatherContext } from '../../Context/WeatherApiContext'
import WeatherResult from '../WeatherResult/WeatherResult'

const UserInputResults = () => {


    const { bySearch, backgroundImage } = useContext(weatherContext)


    useEffect(() => {

        if (bySearch) {

            //console.log(bySearch);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <>
            {bySearch && bySearch.main &&
                <>
                    <WeatherResult weatherData={bySearch} />
                    <div className='weatherBackgroundImg'>
                        {backgroundImage(bySearch.weather[0].main)}
                    </div>
                </>
            }
        </>
    )
}

export default UserInputResults
