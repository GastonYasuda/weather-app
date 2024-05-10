/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import { weatherContext } from '../../Context/WeatherApiContext'

const Home = () => {

  const { userWeather } = useContext(weatherContext)




  useEffect(() => {



  }, [])






  return (
    <>
      <div>Hola! soy HOME!!!</div>
      {userWeather &&
        <>
          <h1>{userWeather.name}</h1>
          <h3>Temp: {Math.round(userWeather.main.temp)}°</h3>
          <img src={userWeather.weather[0].icon} alt="" />
        </>
      }
    </>
  )
}

export default Home