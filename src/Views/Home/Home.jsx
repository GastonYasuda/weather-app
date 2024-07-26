/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'

import Header from '../../Component/Header/Header'
import Footer from '../../Component/Footer/Footer'
import UserInputResults from '../../Component/UserInputResults/UserInputResults'
import UserLocationWeather from '../../Component/UserLocationWeather/UserLocationWeather'

const Home = () => {

  const [search, setSearch] = useState(false)





  return (
    <div className='main d-f-col'>
      <div className="componentBody d-f-col-a-center">
        <Header setSearch={setSearch} />

        <div className="resultBody d-f-col-a_center-j_center">



        </div>

        {search ? <UserInputResults /> : <UserLocationWeather />}



        {/* {showFav && <ShowFav />} */}


        <Footer />
      </div>

    </div >
  )
}

export default Home