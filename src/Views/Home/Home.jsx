/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import UserLocationWeather from '../../Component/UserLocationWeather/UserLocationWeather'
import SearchLocation from '../../Component/SearchLocation/SearchLocation'
import UserInputResults from '../../Component/UserInputResults/UserInputResults'

const Home = () => {



  return (
    <div className='d-f-col-a-center'>

      <SearchLocation />

      <UserInputResults />


      <UserLocationWeather />

    </div>
  )
}

export default Home