import './App.css'
import Admin from './components/pages/Admin'
import FormularioHabitaciones from './components/pages/habitaciones/FormularioHabitaciones'

function App() {

  return (
    <>
      <Admin />

      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />

      <FormularioHabitaciones editar={false} titulo='Agregar nueva habitación' />
      {/* <FormularioHabitaciones editar={true} titulo='Editar habitación' /> */}
    </>
  )
}

export default App
