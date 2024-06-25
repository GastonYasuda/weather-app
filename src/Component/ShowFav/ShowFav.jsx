import React, { useEffect, useState } from 'react'

const ShowFav = () => {

    const [favArray, setFavArray] = useState([])

    //crear tarjetas para que muestre los favoritos
    //de cada ciudad que esta en favArray buscarlo en el api y que me traiga todos y los guarde en un state con toda la info
    //ej: favArray = [{aca toda la info que me trae siempre},{aca toda la info que me trae siempre},{aca toda la info que me trae siempre},etc]

    useEffect(() => {
        setFavArray(JSON.parse(localStorage.getItem('FavCity')))
    }, []);



    return (
        <div>
            <div>
                <ul>
                    {favArray.map((city, index) => (
                        <li key={index}>{city}</li>
                    ))}
                </ul>
            </div>        </div>
    )
}

export default ShowFav
