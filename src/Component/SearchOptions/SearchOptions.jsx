/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react'
import { weatherContext } from '../../Context/WeatherApiContext';

const SearchOptions = () => {

    const { bySearch } = useContext(weatherContext)


    useEffect(() => {

        if (bySearch !== undefined) {
            if (bySearch.name) {

                console.log(bySearch);
                console.log(bySearch.name);



            }

        }

    }, [bySearch])


    //si 
    // <h1>{userWeather.name}</h1>



    //tiene que darme todos los que coinciden en un array

    return (
        <div>

        </div>
    )
}

export default SearchOptions
