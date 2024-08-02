/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import Header from '../../Component/Header/Header'
import Footer from '../../Component/Footer/Footer'
import UserInputResults from '../../Component/UserInputResults/UserInputResults'
import { weatherContext } from '../../Context/WeatherApiContext'
import FavCards from '../../Component/FavCards/FavCards'

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

  }, [bySearch, userWeather, byFavs, showFavResult, showSearchResult])




  //si es searchEs true me muestra
  return (
    <div className='main d-f-col'>
      <div className="componentBody d-f-col-a-center">
        <Header showFavs={showFavs} setShowFavs={setShowFavs} />

        <UserInputResults myresult={myresult} />

        {showFavs ? <FavCards /> : 'no estoy'}

        <Footer />
      </div>
    </div >
  )
}

export default Home