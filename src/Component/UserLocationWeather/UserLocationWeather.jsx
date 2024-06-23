/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import { weatherContext } from '../../Context/WeatherApiContext'
import WeatherResult from '../WeatherResult/WeatherResult'
import Spinner from 'react-bootstrap/Spinner';

const UserLocationWeather = () => {

    const { userWeather } = useContext(weatherContext)

    const [weatherData, setWeatherData] = useState([])

    const backgroundImage = (weatherMain) => {
        switch (weatherMain) {
            case 'Rain':
                return <img className='weatherImg' src="/rain.jpg" alt="rain background" />;
            case 'Snow':
                return <img className='weatherImg' src="/snow.jpg" alt="snow background" />
            case 'Clear':
                return <img className='weatherImg' src="/clear.jpg" alt="clear background" />
            case 'Clouds':
                return <img className='weatherImg' src="/clouds.jpg" alt="clouds background" />
            default:
                return <p>Unknown status</p>;
        }
    }

    useEffect(() => {
        if (userWeather) {
            setWeatherData(userWeather)
            console.log(userWeather);
        }
    }, [userWeather])


    return (
        <>
            {userWeather && weatherData.main ?
                <>
                    <WeatherResult weatherData={weatherData} />

                    <div className='weatherBackgroundImg'>
                        {backgroundImage(weatherData.weather[0].main)}
                    </div>
                </>
                :
                <div className='locationNotFound d-f-col-a_center-j_center '>
                    <Spinner animation="border" variant="primary" />
                    <h1>loading...</h1>
                    <p>We cannot found your location, please check that your location is active.</p>
                </div>
            }
        </>
    )
}

export default UserLocationWeather
