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
          <Image src={habitacion.imagenHabitacion}></Image>
          <h5 className="mt-4"></h5>
          <p>{habitacion.descripcionAmplia}</p>
        </Col>
        <Col md={6} className="contenedorDetalleHabitacion text-center ">
          <h1 className="display-4 fw-semibold my-5 titulos">
            {habitacion.tipoHabitacion}
          </h1>
          <p className="my-5 fs-5">{habitacion.precioHabitacion}</p>
          <p className="fs-5">{habitacion.disponibilidad}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default DetalleHabitacion;
