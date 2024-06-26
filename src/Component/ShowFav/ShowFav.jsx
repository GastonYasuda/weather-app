import React, { useEffect, useState } from 'react'
import ShowFavEachCity from '../ShowFavEachCity/ShowFavEachCity';

const ShowFav = () => {

    const [getFavArray, setGetFavArray] = useState([])


    //crear tarjetas para que muestre los favoritos
    //de cada ciudad que esta en getFavArray buscarlo en el api y que me traiga todos y los guarde en un state con toda la info
    //ej: getFavArray = [{aca toda la info que me trae siempre},{aca toda la info que me trae siempre},{aca toda la info que me trae siempre},etc]

    useEffect(() => {

        setGetFavArray(JSON.parse(localStorage.getItem('FavCity')))


    }, []);





    return (
        <div>
            showFav
            <ShowFavEachCity getFavArray={getFavArray} />
        </div>
    )
}

export default ShowFav
