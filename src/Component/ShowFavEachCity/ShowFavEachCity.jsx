/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react'
import { weatherContext } from '../../Context/WeatherApiContext'
import FavCards from '../FavCards/FavCards'

const ShowFavEachCity = ({ favCities }) => {

    const { byInputSearch, setFavArray } = useContext(weatherContext)



    useEffect(() => {

        if (favCities) {
            setFavArray([])
            for (const city of favCities) {
                byInputSearch(city, false)
            }
        }

    }, [favCities])





    return (
        <div>
            <FavCards favCities={favCities} />
        </div>
    )
}

export default ShowFavEachCity
