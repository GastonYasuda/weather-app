/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import { weatherContext } from '../../Context/WeatherApiContext'
import FavCards from '../FavCards/FavCards'

const ShowFavEachCity = ({ getFavArray }) => {

    const { byInputSearch, bySearch } = useContext(weatherContext)

    const [favArray, setFavArray] = useState([])


    useEffect(() => {

        //getFavArray las ciudades de este array buscarlos y que me los guarde en un nuevo array pero con toda la info [{},{},{}]
        if (getFavArray) {

            for (const city of getFavArray) {
                //   console.log(city);
                byInputSearch(city)

                setFavArray((prevFavCities) => [...prevFavCities, bySearch]);

            }
        }

    }, [])





    return (
        <div>
            ShowFavEachCity
            <ul>
                {getFavArray.map((city, index) => (
                    <li key={index}>{city}</li>
                ))}
            </ul>



            <FavCards favArray={favArray} />




        </div>
    )
}

export default ShowFavEachCity
