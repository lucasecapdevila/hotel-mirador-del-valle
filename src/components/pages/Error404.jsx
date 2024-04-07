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
        <h3 className="titulos"><b className="rojo">ERROR 404.</b> Pagina no encontrada</h3>
        <h5 className="titulos">¡¡Oops!! Parece que alguien se llevó la llave</h5>
        </div>
        <img src={iconerror404} alt="icon de una figurita de una llave con una herramienta y un casco" id="iconerror" className="ms-3"/>
      </div>
        <Row>
        <Col md={6} className="p-0">
          <Image
            src={error404}
            className="imagenError"
          ></Image>
        </Col>
        <Col md={6} className="contenedorError pb-5 pb-lg-0">
          <div className="ms-lg-5">
            <h1 className="mt-3 fw-semibold tituloError">
            Suite 404: La Habitación de los Sueños Perdidos
            </h1>
            <p className=" fs-5 textos fw-medium mt-lg-3">
            <b>Descripcion Breve:</b> La llave de esta página no está en el llavero.
            </p>
            <p className="fs-5 textos fw-medium">
              Pero no te preocupes, nuestro
               conserje virtual está en camino. ¿Quizás quieras
                visitar nuestra galería mientras esperas?”
            </p>
          </div>
          <div className="d-flex text-center">
          <Link className=" btn btnDetalleHabitacion textos fw-semibold ms-0 ms-lg-5">
            GALERIA
          </Link>
          <Link className=" btn btnDetalleHabitacion textos fw-semibold ms-0 ms-4">
            INICIO
          </Link>
          </div>
        </Col>
      </Row>
      </Container>
    </>
  );
};

export default Error404;
