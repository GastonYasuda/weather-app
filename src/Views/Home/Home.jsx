/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import UserLocationWeather from '../../Component/UserLocationWeather/UserLocationWeather'
import SearchLocation from '../../Component/SearchLocation/SearchLocation'
import UserInputResults from '../../Component/UserInputResults/UserInputResults'

const Home = () => {



  return (
    <>

      <SearchLocation />

      <UserInputResults />


      <UserLocationWeather />

    </>
  )
}

export default Home