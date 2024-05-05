import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Views/Home/Home';
import WeatherApiContext from './Context/WeatherApiContext';

function App() {
  return (
  <WeatherApiContext>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<h1>Página no encontrada!!!</h1>} />
      </Routes>
    </BrowserRouter>
  </WeatherApiContext>
  );
}

export default App;
