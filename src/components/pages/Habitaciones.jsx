import { useEffect, useState } from "react";
import {Container, Row} from "react-bootstrap";
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
    <>
    <div className="portadaHabitaciones mb-5 text-center">
    <img className='banner' src="https://images.pexels.com/photos/939715/pexels-photo-939715.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <div className="titulos tiuloPrincipal">
          <h1 className="">HABITACIONES</h1>
        </div>
      </div>
    <Container>
      
   
      <Row>
        {listaHabitaciones.map((habitacion)=><CardHabitacion key={habitacion.id} habitacion={habitacion}/>)}
      </Row>
    </Container>
    </>
  );
};

export default Habitaciones;
