/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import UserLocationWeather from '../../Component/UserLocationWeather/UserLocationWeather'
import SearchLocation from '../../Component/SearchLocation/SearchLocation'
import UserInputResults from '../../Component/UserInputResults/UserInputResults'
import Header from '../../Component/Header/Header'
import Footer from '../../Component/Footer/Footer'

const Home = () => {



  return (
    <div className='main d-f-col'>

      <div className="componentBody d-f-col-a-center">
        <Header />

        <SearchLocation />


        <div className="resultBody d-f-col-a_center-j_center">
          <UserInputResults />

          <UserLocationWeather />

          {/* si es userInput es true me muestre userInputResults, si es false me muestre UserLocationWeather */}
        </div>

      </div>


      <Footer />

    </div >
  )
}

export default Home