import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from '../pages/Home';
import ErradicarPobreza from '../pages/ErradicarPobreza';
import FomeZero from '../pages/FomeZero';
import IgualdadeGenero from '../pages/IgualdadeGenero';
import EducacaoQualidade from '../pages/EducacaoQualidade';
import SaudeBemEstar from '../pages/SaudeBemEstar';
const Rotas = () => {
  return (
    <BrowserRouter>
    <Home />
    <Routes>
        <Route path='/erradicarPobreza' element={<ErradicarPobreza/>} />
        <Route path='/fomeZero' element={<FomeZero/>} />
        <Route path='/educacaoQualidade' element={<EducacaoQualidade/>} />
        <Route path='/igualdadeGenero' element={<IgualdadeGenero />} />
        <Route path='/saudeBemEstar' element={<SaudeBemEstar />} />
    </Routes>

    </BrowserRouter>
  )
}

export default Rotas