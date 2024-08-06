import React, { useContext } from 'react'
import { Button } from 'react-bootstrap';
import SearchLocation from '../SearchLocation/SearchLocation';
import { weatherContext } from '../../Context/WeatherApiContext';


const Header = ({ showFavs, setShowFavs }) => {


    const { setShowSearchResult, setShowFavResult } = useContext(weatherContext)

    const showFavOrNot = () => {
        if (showFavs) {
            setShowFavs(false)
        } else {
            setShowFavs(true)
        }
    }

    const geoLocationHome = () => {
        setShowSearchResult(false)
        setShowFavResult(false)
        console.log('myresult');

    }


    return (
        <div className='header d-f-col-a-center'>
            <div className=' d-f-row-j-between'>

                <button onClick={() => { geoLocationHome() }}>
                    <div className="logo d-f-row-a-center">
                        <img src="/logoTanuki_black.png" alt="logo tanuki" />
                        <h4>WeatherRyo</h4>
                    </div>
                </button>

                <Button className='showFavButton' type='button' onClick={showFavOrNot}>
                    show fav
                </Button>


            </div>
            <SearchLocation />

            {/* si searchLocation es true que me muestre solo UserInputResults y si es false UserLocationWeather */}
        </div>

    )
}

export default Header
