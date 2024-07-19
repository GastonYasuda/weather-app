/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import { weatherContext } from '../../Context/WeatherApiContext'
import FavCards from '../FavCards/FavCards'

const ShowFavEachCity = ({ getFavArray }) => {

    const { byInputSearch, bySearch } = useContext(weatherContext)

    const [favArray, setFavArray] = useState([])


    useEffect(() => {
        if (favArray.length !== 0) {
            console.log(getFavArray);

        }



        //getFavArray las ciudades de este array buscarlos y que me los guarde en un nuevo array pero con toda la info [{},{},{}]

        for (const city of getFavArray) {
            // console.log(city);
            byInputSearch(city)


            setFavArray((prevFavCities) => [...prevFavCities, bySearch]);

        }

    }, [getFavArray])





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
