import React, { useContext } from 'react'
import Card from 'react-bootstrap/Card';
import { weatherContext } from '../../Context/WeatherApiContext';
import { WiCloud, WiDaySunny, WiFog, WiRain, WiSnow } from "react-icons/wi";
import { Link } from 'react-router-dom';

const FavCards = () => {

    const { favArray, toggleFav, byInputSearch, setShowFavResult, setShowSearchResult } = useContext(weatherContext)


    const weatherIcon = (weatherCondition) => {
        switch (weatherCondition) {
            case 'Rain':
                return <WiRain size={40} />
            case 'Snow':
                return <WiSnow size={40} />
            case 'Clear':
                return <WiDaySunny size={40} />
            case 'Clouds':
                return <WiCloud size={40} />
            case 'Fog':
                return <WiFog size={40} />
            case 'Mist':
                return <WiFog size={40} />
            case 'Drizzle':
                return <WiRain size={40} />
            default:
                return <p>Unknown status</p>;
        }
    }

    const argentina = (cityName, state) => {
        byInputSearch(cityName, state)
        setShowFavResult(true)
        setShowSearchResult(false)
    }

    return (
        <div className='favCardStyle'>
            {favArray.map((city, i) => (
                <Card style={{ width: '18rem' }} key={i}>

                    <Link className='favCardStyle__container' onClick={() => { argentina(city.name, 'favs') }}>

                        <Card.Body>
                            <section className='d-f-row-a_center-j_center'>
                                {weatherIcon(city.weather[0].main)}
                                <span className='favCardStyle__container-temp'>
                                    {Math.round(city.main.temp)}°
                                </span>
                            </section>

                            <div className="d-f-row-a-center">
                                <h1>{city.name} - </h1>
                                <h1> <b>{city.sys.country}</b></h1>
                            </div>

                            <button type='button' onClick={() => { toggleFav(city.name) }} className="favOrNotFav">
                                <img src="/fav.svg" alt="fav buttom" style={{ width: "35px" }} />
                            </button>

                        </Card.Body>
                    </Link>
                </Card>
            ))}
        </div >
    )
}

export default FavCards
