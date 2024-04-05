import './App.css'
import Admin from './components/pages/Admin'
import Menu from './components/common/Menu'
import Error404 from "./components/pages/Error404"
import Footer from "./components/common/Footer"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route exact path='/' element={<Error404></Error404>}></Route>
        <Route exact path='/administrador' element={<Admin></Admin>}></Route>
        <Route exact path='/administrador/crear' element={<Admin></Admin>}></Route>
        <Route exact path='/administrador/editar' element={<Admin></Admin>}></Route>
        <Route exact path='*' element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
