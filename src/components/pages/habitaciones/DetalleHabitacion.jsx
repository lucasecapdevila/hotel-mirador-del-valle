import { useEffect, useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import {
  faDumbbell,
  faWifi,
  faSquareParking,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
          <Image
            src={habitacion.imagenHabitacion}
            className="imagenDetalleHabitacion"
          ></Image>
        </Col>
        <Col md={6} className="contenedorDetalleHabitacion pb-5 pb-lg-0">
          <div className="ms-lg-5 my-5">
            <h1 className="display-4 fw-semibold my-4 my-lg-5 titulos">
              {habitacion.tipoHabitacion}
            </h1>
            <p className=" fs-5 textos fw-medium">
              Precio: ${habitacion.precioHabitacion}
            </p>
            <p className="fs-5 textos fw-medium">
              Disponibilidad: {habitacion.disponibilidad}
            </p>
          </div>
          <div className="text-start mx-lg-5 mt-4">
            <h5 className="titulos fw-semibold">Servicios del Hotel</h5>
            <div>
              <span>
                <FontAwesomeIcon icon={faWifi} /> Wifi
              </span>
              <span className="mx-4">
                <FontAwesomeIcon icon={faSquareParking} /> Estacionamiento
              </span>
              <span>
                <FontAwesomeIcon icon={faDumbbell} /> Gimnasio
              </span>
            </div>
          </div>
          <Link className=" btn btnDetalleHabitacion textos fw-semibold m-5 ms-0 ms-lg-5">
            RESERVAR
          </Link>
        </Col>
        <Col md={12}>
          <p className="textos my-5 fw-bold descripcionHabitacion">
            <span className="fs-5">Descripción:</span>{" "}
            {habitacion.descripcionAmplia}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default DetalleHabitacion;
