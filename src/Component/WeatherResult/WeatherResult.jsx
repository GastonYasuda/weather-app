/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Card } from 'react-bootstrap'

const WeatherResult = ({ weatherData }) => {

    const backgroundImage = (weatherMain) => {
        switch (weatherMain) {
            case 'Rain':
                return <img className='weatherMainImg' src="/rain.jpg" alt="rain background" />;
            case 'Snow':
                return <img className='weatherMainImg' src="/snow.jpg" alt="snow background" />
            case 'Clear':
                return <img className='weatherMainImg' src="/clear.jpg" alt="clear background" />
            case 'Clouds':
                return <img className='weatherMainImg' src="/clouds.jpg" alt="clouds background" />
            default:
                return <p>Unknown status</p>;
        }
    }


    return (
        <>
            {weatherData && weatherData.weather && weatherData.weather[0] && weatherData.main && weatherData.sys &&
                <>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body className='d-f-col-a-center'>
                            <section className='weatherData d-f-col-a-center'>
                                <div className="mainData">
                                    <h4>{weatherData.weather[0].main}</h4>
                                </div>
                                <Card.Title>
                                    <span>{Math.round(weatherData.main.temp)}°</span>
                                </Card.Title>
                                <div className="d-f-r-j-between">
                                    <span>Max: {Math.round(weatherData.main.temp_max)}°</span>
                                    <span>Min: {Math.round(weatherData.main.temp_min)}°</span>
                                </div>
                                <div className="d-f-row-a-center">
                                    <p>{weatherData.name} - </p>
                                    <p> <b>{weatherData.sys.country}</b></p>
                                </div>
                            </section>

                        </Card.Body>


                    </Card>

                    {backgroundImage(weatherData.weather[0].main)}
                </>
            }
        </>
    )
}

export default WeatherResult
