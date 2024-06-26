/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import UserLocationWeather from '../../Component/UserLocationWeather/UserLocationWeather'
import SearchLocation from '../../Component/SearchLocation/SearchLocation'
import Header from '../../Component/Header/Header'
import Footer from '../../Component/Footer/Footer'
import UserInputResults from '../../Component/UserInputResults/UserInputResults'
import ShowFav from '../../Component/ShowFav/ShowFav'

const Home = () => {

  const [search, setSearch] = useState(false)
  const [showFav, setShowFav] = useState(false)




  return (
    <div className='main d-f-col'>
      <div className="componentBody d-f-col-a-center">
        <Header setSearch={setSearch} showFav={showFav} setShowFav={setShowFav} />
        <SearchLocation setSearch={setSearch} />

        <div className="resultBody d-f-col-a_center-j_center">

          {/* si searchLocation es true que me muestre solo UserInputResults y si es false UserLocationWeather */}
          {search ? <UserInputResults /> : <UserLocationWeather />}

        </div>


        <ShowFav />
        {/* {showFav && <ShowFav />} */}


        <Footer />
      </div>

    </div >
  )
}

export default Home