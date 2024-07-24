import React, { useContext, useEffect } from 'react'
import { weatherContext } from '../../Context/WeatherApiContext';

const FavCards = ({ favCities }) => {

    const { favArray } = useContext(weatherContext)

    useEffect(() => {
        if (favArray.length === favCities.length && favArray.length !== 0) {
            console.log(favArray);

        }
    }, [favArray, favCities])



    return (
        <div>

        </div>
    )
}

export default FavCards
