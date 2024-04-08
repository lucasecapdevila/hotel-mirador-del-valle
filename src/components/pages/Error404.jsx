import { Container, Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import error404 from "../../assets/ERROR_404.png";
import iconerror404 from "../../assets/logoerror.png";

const Error404 = () => {
  return (
    <>
      <Container className="mainPage mb-lg-4">
        <div className="d-flex justify-content-center mt-2">
          <div className="d-flex flex-column justify-content-center text-center">
            <h2 className="titulos">
              <b className="rojo">ERROR 404.</b> Pagina no encontrada
            </h2>
            <h5 className="titulos">
              ¡¡Oops!! Parece que alguien se llevó la llave
            </h5>
          </div>
          <img
            src={iconerror404}
            alt="icon de una figurita de una llave con una herramienta y un casco"
            id="iconerror"
            className="ms-3"
          />
        </div>
        <Row>
          <Col md={6} className="p-0">
            <Image src={error404} className="imagenError"></Image>
          </Col>
          <Col
            md={6}
            className="contenedorError d-flex flex-column justify-content-center"
          >
            <div className="ms-lg-4">
              <h1 className="fw-semibold tituloError">
                Suite 404: La Habitación de los Sueños
              </h1>
              <p className=" fs-5 textos fw-medium mt-lg-3 mb-md-1 mb-lg-3 descripcionerror">
                <b>Descripcion Breve:</b> Lo sentimos!. La llave de esta página
                no está en el llavero.
              </p>
              <p className="fs-5 textos fw-medium mb-lg-3 mb-md-2">
                Pero no te preocupes, nuestro conserje virtual está en camino.
                ¿Quizás quieras visitar nuestra galería mientras esperas?
              </p>
              <div className="text-center d-flex mt-lg-4 mt-md-1">
                <Link
                  className=" btn btnDetalleHabitacion textos fw-semibold me-2"
                  to="/galeria"
                >
                  GALERIA
                </Link>
                <Link
                  className=" btn btnDetalleHabitacion textos fw-semibold mx-2"
                  to="/"
                >
                  INICIO
                </Link>
              </div>
            </div>
          </Col>
          <Col md={12}>
            <p className="textos mt-3 fw-bold descripcionHabitacion">
              <span className="fs-5">
                Descripción: Bienvenido a la "Habitación de los Sueños", una
                habitacion especial y misteriosa. Aquí encontrarás almohadas de
                nubes y mantas de estrellas. Lamentablemente, solo los soñadores
                más intrépidos pueden reservar aquí. Toca el boton de{" "}
                <Link
                  className="fw-semibol link-underline link-underline-opacity-0 text-secondary-emphasis"
                  to="/inicio"
                >
                  {" "}
                  INICIO
                </Link>{" "}
                para regresar .
              </span>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Error404;
