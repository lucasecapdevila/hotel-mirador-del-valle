import { useEffect, useState } from "react";
import {Container} from "react-bootstrap";
import CardHabitacion from "./habitaciones/CardHabitacion";
import { leerHabitacionesAPI } from "../../helpers/queries";
const Habitaciones = () => {
    const [listaHabitaciones, setListaHabitaciones] = useState([])

    useEffect(() => {
      traerHabitaciones()
    }, [])
  
    const traerHabitaciones = async() => {
      try {
        const listaHabitacionesAPI = await leerHabitacionesAPI()
        setListaHabitaciones(listaHabitacionesAPI)
      } catch (error) {
        console.log(error);
      }
    }
  return (
    <Container>
        {listaHabitaciones.map((habitacion)=><CardHabitacion key={habitacion.id} habitacion={habitacion}/>)}
    </Container>
  );
};

export default Habitaciones;
