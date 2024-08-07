/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react'
import { weatherContext } from '../../Context/WeatherApiContext'
import FavCards from '../FavCards/FavCards'

const ShowFavEachCity = ({ favCities }) => {

    const { byInputSearch, setFavArray, showFav } = useContext(weatherContext)

    useEffect(() => {
        if (favCities) {
            setFavArray([])
            for (const city of favCities) {
                byInputSearch(city, 'favArray')
            }
        }
    }, [favCities])


    return (
        <div className='FavCards'>
            {showFav && <FavCards />}
        </div>
    )
}

export default ShowFavEachCity
