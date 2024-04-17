import "./App.css";
import Menu from "./components/common/Menu";
import Error404 from "./components/pages/Error404";
import Footer from "./components/common/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuienesSomos from "./components/pages/QuienesSomos";
import Habitaciones from "./components/pages/Habitaciones";
import DetalleHabitacion from "./components/pages/habitaciones/DetalleHabitacion";
import RutasProtegidas from "./components/routes/RutasProtegidas";
import RutasAdmin from "./components/routes/RutasAdmin";
import Login from "./components/pages/Login";
import { useState } from "react";
function App() {
  const usuario =
  JSON.parse(sessionStorage.getItem("inicioHotelMiradorDelValle")) || "";
const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);
  return (
    <BrowserRouter>
      <Menu usuarioLogueado = {usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado}/>
      <Routes>
        <Route exact path="/quienesSomos" element={<QuienesSomos></QuienesSomos>} />
        <Route exact path="/login" element={<Login setUsuarioLogueado = {setUsuarioLogueado}></Login>}></Route>
        <Route
          exact
          path="/administrador/*"
          element={
            <RutasProtegidas>
              <RutasAdmin />
            </RutasProtegidas>
          }
        />
        <Route exact path="/habitaciones/" element={<Habitaciones></Habitaciones>} />
        <Route exact path="/detalleHabitacion/:id" element={<DetalleHabitacion></DetalleHabitacion>} />
        <Route exact path="/contacto/" element={<Contacto></Contacto>} />
        <Route exact path="*" element={<Error404></Error404>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
