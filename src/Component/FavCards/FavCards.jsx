import React, { useContext, useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import { weatherContext } from '../../Context/WeatherApiContext';

const FavCards = ({ favCities }) => {

    const { favArray, backgroundImage } = useContext(weatherContext)

    useEffect(() => {
        if (favArray.length === favCities.length && favArray.length !== 0) {
            console.log(favArray);

        }
    }, [favArray, favCities])



    return (
        <div>
            {favArray.map((city, i) => (
                < Card style={{ width: '18rem' }} key={i}>
                    <Card.Body>
                        <div>
                            <h4>{city.weather[0].main}</h4>
                            <div className="d-f-row-a-center">
                                <h1>{city.name} - </h1>
                                <h1> <b>{city.sys.country}</b></h1>
                            </div>
                        </div>

                        {/* <div>
                            {backgroundImage(city.weather[0].main)}
                        </div> */}

                        <Card.Title>
                            <span>{Math.round(city.main.temp)}°</span>
                        </Card.Title>
                        <div>
                            <span>Max: {Math.round(city.main.temp_max)}°</span>
                            <span>Min: {Math.round(city.main.temp_min)}°</span>
                        </div>
                    </Card.Body>
                </Card>

            ))}


        </div >
    )
}

export default FavCards
