import { useEffect, useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { obtenerHabitacionAPI } from "../../../helpers/queries";
import Swal from "sweetalert2";
const DetalleHabitacion = () => {
    const { id } = useParams();
  const [habitacion, setHabitacion] = useState({});

  useEffect(() => {
    cargarDetalle();
  }, []);

  const cargarDetalle = async () => {
    const respuesta = await obtenerHabitacionAPI(id);
    if (respuesta.status === 200) {
      const datoHabitacion = await respuesta.json();
      setHabitacion(datoHabitacion);
    } else {
      Swal.fire({
        title: "Ocurrio un error",
        text: "Intente realizar esta operacion en unos minutos",
        icon: "error",
      });
    }
  };
    return (
        <Container className="mainPage my-3">
      <Row>
      <Col md={6} className="p-0">
          <Image src=''></Image>
        </Col>
        <Col md={6}>
          <h5 className="mt-4"></h5>
          <p>DESCRIPCIÓN AMPLIA Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo veritatis, possimus beatae nihil, 
            delectus asperiores ad harum aliquid cum amet praesentium similique ab cupiditate nobis illum! Voluptatum beatae ratione officia?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptates quae enim nemo. 
            Doloribus perspiciatis ratione eveniet earum deserunt qui corrupti, et, vero quo delectus exercitationem ipsum autem recusandae! Ut.</p>
        </Col>
        <Col md={6} className="contenedorDetalleHabitacion text-center ">
          <h1 className="display-4 fw-semibold my-5 titulos">Habitacion Doble</h1>
          <p className="my-5 fs-5">
            min 
          </p>
          <p className="fs-5"></p>
        </Col>
       
        
        <Col md={6}>
          <h5 className="mt-4"></h5>
          <p></p>
        </Col>
      </Row>
    </Container>
    );
};

export default DetalleHabitacion;