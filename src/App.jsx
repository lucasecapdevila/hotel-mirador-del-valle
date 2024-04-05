import './App.css'
import Admin from './components/pages/Admin'
import Menu from './components/common/Menu'
import Error404 from "./components/pages/Error404"
import Footer from "./components/common/Footer"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FormularioHabitaciones from './components/pages/habitaciones/FormularioHabitaciones'

function App() {

  return (
    <>
      <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route exact path='/' element={<Error404></Error404>}></Route>
        <Route exact path='/administrador' element={<Admin></Admin>}></Route>
        <Route exact path='/administrador/crear' element={<FormularioHabitaciones editar={false} titulo='Agregar habitación'></FormularioHabitaciones>}></Route>
        <Route exact path='/administrador/editar/:id' element={<FormularioHabitaciones editar={true} titulo='Editar habitación'></FormularioHabitaciones>}></Route>
        <Route exact path='*' element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
