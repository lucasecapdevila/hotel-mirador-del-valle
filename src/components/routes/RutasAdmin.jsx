import { Route, Routes } from "react-router-dom"

const RutasAdmin = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Admin></Admin>} />
      <Route exact path='/administrador/crear' element={<FormularioHabitaciones editar={false} titulo='Agregar habitación'></FormularioHabitaciones>} />
      <Route exact path='/administrador/editar/:id' element={<FormularioHabitaciones editar={true} titulo='Editar habitación'></FormularioHabitaciones>} />
    </Routes>
  )
}

export default RutasAdmin