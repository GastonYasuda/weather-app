/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import Header from '../../Component/Header/Header'
import Footer from '../../Component/Footer/Footer'
import { weatherContext } from '../../Context/WeatherApiContext'
import FavCards from '../../Component/FavCards/FavCards'
import WeatherResult from '../../Component/WeatherResult/WeatherResult'
import Spinner from 'react-bootstrap/Spinner';


const Home = () => {


  const { userWeather, bySearch, byFavs, showFavResult, showSearchResult } = useContext(weatherContext)

  const [showFavs, setShowFavs] = useState(false)

  const [myresult, setMyResult] = useState([])

  //aca traer

  useEffect(() => {


    if (showFavResult) {
      setMyResult(byFavs)
    } else if (showSearchResult) {
      setMyResult(bySearch)
    } else if (showFavResult === false && showSearchResult === false) {
      setMyResult(userWeather)
    }

  }, [bySearch, userWeather, byFavs, showFavResult, showSearchResult, myresult])


  return (
    <div className='main d-f-col'>
      <div className="componentBody d-f-col-a-center">
        <Header showFavs={showFavs} setShowFavs={setShowFavs} />

        {myresult && myresult.main ?
          <WeatherResult weatherData={myresult} /> :
          myresult ? 'no existe' : <Spinner animation="border" />
        }

        {showFavs && <FavCards />}

        <Footer />
      </div>
    </div >
  )
}

export default Home