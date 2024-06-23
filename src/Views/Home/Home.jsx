/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import UserLocationWeather from '../../Component/UserLocationWeather/UserLocationWeather'
import SearchLocation from '../../Component/SearchLocation/SearchLocation'
import Header from '../../Component/Header/Header'
import Footer from '../../Component/Footer/Footer'
import UserInputResults from '../../Component/UserInputResults/UserInputResults'

const Home = () => {

  const [search, setSearch] = useState(false)

  useEffect(() => {

  }, [])



  return (
    <div className='main d-f-col'>
      <div className="componentBody d-f-col-a-center">
        <Header setSearch={setSearch} />
        <SearchLocation setSearch={setSearch} />

        <div className="resultBody d-f-col-a_center-j_center">

          {/* si searchLocation es true que me muestre solo UserInputResults y si es false UserLocationWeather */}
          {search ? <UserInputResults /> : <UserLocationWeather />}

        </div>


        <Footer />
      </div>

    </div >
  )
}

export default Home