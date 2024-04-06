import { useEffect, useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { obtenerHabitacionAPI } from "../../../helpers/queries";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
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
    <Container className="my-lg-5">
      <Row>
        <Col md={6} className="p-0">
          <Image src={habitacion.imagenHabitacion} className="imagenDetalleHabitacion"></Image>
        </Col>
        <Col md={6} className="contenedorDetalleHabitacion text-center ">
          <h1 className="display-4 fw-semibold my-4 my-lg-5 titulos">
            {habitacion.tipoHabitacion}
          </h1>
          <p className=" fs-5 textos fw-medium">Precio: ${habitacion.precioHabitacion}</p>
          <p className="fs-5 textos fw-medium">Disponibilidad: {habitacion.disponibilidad}</p>
          <Link className=" btn btnDetalleHabitacion textos fw-semibold" >RESERVAR</Link>
        </Col>
        <Col md={12}>
          <p className="textos my-5 fw-medium descripcionHabitacion">Descripción: {habitacion.descripcionAmplia}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default DetalleHabitacion;
