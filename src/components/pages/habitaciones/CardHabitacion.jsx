import { Button, Card, Col } from "react-bootstrap";
import imagenCard from "../../../assets/habitacion_doble.jpg";

const CardHabitacion = () => {
  return (
    <Col md={4} className="mb-3">
      <Card>
        <Card.Img
          variant="top"
          src={imagenCard}
          className="card-img-top-nueva"
        />
        <Card.Body className="bodyCardHabitacion">
          <Card.Title>HABITACION DOBLE</Card.Title>
          <Card.Text>
            Las habitaciones dobles poseen todo lo necesario para compartir unos
            días de descanso en pareja,
          </Card.Text>
          <Button className="btnCardHabitacion">DETALLES</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardHabitacion;