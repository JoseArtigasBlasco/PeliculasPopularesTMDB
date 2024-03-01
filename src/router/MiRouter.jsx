import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DetallePelicula from '../Componentes/DetallePelicula';
import BusquedaNombre from "../Componentes/BusquedaNombre";
import App from '../App'


const MiRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<App/>}></Route>
        <Route path='/detallePelicula' element={<DetallePelicula/>}></Route>
        <Route path='/busquedaNombre' element={<BusquedaNombre/>}></Route>
        <Route path='*' element={<App/>}></Route>
    </Routes>
  )
}

export default MiRouter