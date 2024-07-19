import React, { useEffect } from 'react'

const FavCards = ({ favArray }) => {

    useEffect(() => {
        console.log(favArray);
    }, [favArray])
    return (
        <div>

        </div>
    )
}

export default FavCards
