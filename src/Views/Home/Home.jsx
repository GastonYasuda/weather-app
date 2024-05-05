import React, { useContext, useEffect } from 'react'
import { weatherContext } from '../../Context/WeatherApiContext'

const Home = () => {

  const {}=useContext(weatherContext)

  useEffect(()=>{
  },[])


  return (
    <div>Hola! soy HOME!!!</div>
  )
}

export default Home