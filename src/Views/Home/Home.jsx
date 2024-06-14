/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import UserLocationWeather from '../../Component/UserLocationWeather/UserLocationWeather'
import SearchLocation from '../../Component/SearchLocation/SearchLocation'
import UserInputResults from '../../Component/UserInputResults/UserInputResults'
import Header from '../../Component/Header/Header'

const Home = () => {



  return (
    <div className='main d-f-col-a-center'>


      <Header />

      <SearchLocation />

      <UserInputResults />


      <UserLocationWeather />

    </div >
  )
}

export default Home