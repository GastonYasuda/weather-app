import React, { useContext, useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import { weatherContext } from '../../Context/WeatherApiContext';

const FavCards = () => {

    const { favArray, favCities, toggleFav } = useContext(weatherContext)

    useEffect(() => {
        if (favArray && favCities) {

            if (favArray.length === favCities.length && favArray.length !== 0 && favArray !== null) {
                console.log(favArray);

            }
        }

    }, [favArray, favCities])

    //favArray si dentro de esto esta en el localstorage 



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

                        <button type='button' onClick={() => { toggleFav(city.name) }} className="favOrNotFav">
                            <img src="/fav.svg" alt="fav buttom" style={{ width: "35px" }} />
                        </button>

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
