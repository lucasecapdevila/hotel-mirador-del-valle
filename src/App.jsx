import './App.css'
import Menu from './components/common/Menu'
import Error404 from "./components/pages/Error404"
import Footer from "./components/common/Footer"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import QuienesSomos from './components/pages/QuienesSomos'
import Habitaciones from './components/pages/Habitaciones'
import DetalleHabitacion from './components/pages/habitaciones/DetalleHabitacion'


function App() {

  return (
    <>
      <BrowserRouter>
        <Menu></Menu>
        <Routes>
          
          <Route exact path='/quienesSomos' element={<QuienesSomos></QuienesSomos>}></Route>
          <Route  exact path="/habitaciones/" element={<Habitaciones></Habitaciones>}></Route>
          <Route exact path="/detalleHabitacion/:id" element={<DetalleHabitacion></DetalleHabitacion>}></Route>
          <Route exact path='*' element={<Error404></Error404>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
