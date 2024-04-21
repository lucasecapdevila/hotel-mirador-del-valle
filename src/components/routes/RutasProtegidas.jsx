import { Navigate } from "react-router-dom"

const RutasProtegidas = ({children}) => {
  const admin = JSON.parse(sessionStorage.getItem('inicioHotelMiradorDelValle')) || null
  if(!admin){
    //  Cuando tengamos el componente <Login>, el navigate deberá dirigirnos allí, por el momento dirige a Error404
    return <Navigate to='/login'></Navigate>
  } else{
    return children
  }
}

export default RutasProtegidas