import { useEffect, useState } from "react";
import { Button, Modal, Container, Row, Col, Image } from "react-bootstrap";
import {
  faDumbbell,
  faWifi,
  faSquareParking,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import { obtenerHabitacionAPI } from "../../../helpers/queries";
import Swal from "sweetalert2";
const ModalDetalleHabitacion = () => {
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
    <>
      <Modal  aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {habitacion.tipoHabitacion}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="grid-example">
          <Container>
            <Row>
              <Col xs={12} md={8}>
                <Image
                  src={habitacion.imagenHabitacion}
                  className="imagenDetalleHabitacion"
                ></Image>
              </Col>
              <Col xs={6} md={4}>
                <p className=" fs-5 textos fw-medium">
                  Precio: ${habitacion.precioHabitacion}
                </p>
              </Col>
            </Row>

            <Row>
              <Col xs={6} md={4}>
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
              </Col>
              <Col xs={6} md={4}>
                <p className="textos my-5 fw-bold descripcionHabitacion">
                  <span className="fs-5">Descripción:</span>{" "}
                  {habitacion.descripcionAmplia}
                </p>
              </Col>
              <Col xs={6} md={4}></Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button >Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDetalleHabitacion;
