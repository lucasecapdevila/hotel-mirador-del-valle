import {
  Button,
  Row,
  Container,
  Card,
  Col,
  Modal,
  Image,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  faDumbbell,
  faWifi,
  faSquareParking,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const CardHabitacion = ({ habitacion, fechaEntrada, fechaSalida }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Col md={4} className="mb-3">
      <Card className="my-3 cardCategoria">
        <Card.Img
          variant="top"
          src={habitacion.imagenHabitacion}
          className="card-img-top-nueva"
        />
        <Card.Body className="d-flex flex-column justify-content-between bodyCardHabitacion">
          <Card.Title className="titulos">
            {habitacion.tipoHabitacion}
          </Card.Title>
          <Card.Text className="textos">
            {habitacion.descripcionBreve}
          </Card.Text>
          <div className="d-flex flex-column justify-content-end">
            {fechaEntrada && fechaSalida && (
              <Link
                className="btn mb-3 w-100 fw-semibold mt-auto btnCardHabitacion"
                to={`/reservas/${habitacion.id}/${fechaEntrada}/${fechaSalida}`}
              >
                RESERVAR AHORA
              </Link>
            )}

            <Button className="btnCardHabitacion textos" onClick={handleShow}>
              VER DETALLES
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
              <Modal.Header closeButton className="descripcionHabitacion">
                <Modal.Title className="titulos">
                  {habitacion.tipoHabitacion}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="descripcionHabitacion">
                <Container>
                  <Row>
                    <Col xs={12}>
                      <Image
                        src={habitacion.imagenHabitacion}
                        className="imagenDetalleHabitacion"
                      ></Image>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs={12}>
                      <div className="text-start mx-lg-5 mt-4 text-center">
                        <h5 className="titulos fw-semibold">
                          Servicios que Incluye
                        </h5>
                        <div>
                          <span>
                            <FontAwesomeIcon icon={faWifi} /> Wifi
                          </span>
                          <span className="mx-4">
                            <FontAwesomeIcon icon={faSquareParking} />{" "}
                            Estacionamiento
                          </span>
                          <span>
                            <FontAwesomeIcon icon={faDumbbell} /> Gimnasio
                          </span>
                        </div>
                      </div>
                    </Col>
                    <Col xs={12}>
                      <p className="textos my-5 fw-bold descripcionHabitacion">
                        <span className="fs-5">Descripción: </span>
                        {habitacion.descripcionAmplia}
                      </p>
                    </Col>
                  </Row>
                </Container>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={handleClose} className="btnCardHabitacion">
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardHabitacion;
