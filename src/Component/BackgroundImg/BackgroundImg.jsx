import React, { useContext, useEffect, useState } from 'react'
import { weatherContext } from '../../Context/WeatherApiContext'

const Background = ({ getBackground }) => {

    const { backgroundImage, userWeather } = useContext(weatherContext)

    const [background, setBackground] = useState([])


    useEffect(() => {

        if (getBackground) {
            setBackground(getBackground)
        } else if (userWeather) {
            setBackground(userWeather)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [getBackground])


    return (
        <>
            {background.length !== 0 && background &&
                <div className='weatherBackgroundImg'>
                    {backgroundImage(background.weather[0].main)}
                </div>
            }
        </>
    )
}

export default Background
