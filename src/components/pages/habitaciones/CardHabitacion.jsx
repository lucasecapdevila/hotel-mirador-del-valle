import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardHabitacion = ({habitacion}) => {
  return (
    
    <Col md={4} className="mb-3">
      <Card className="my-3 cardCategoria">
        <Card.Img
          variant="top"
          src={habitacion.imagenHabitacion}
          className="card-img-top-nueva"
        />
        <Card.Body className="bodyCardHabitacion">
          <Card.Title>{habitacion.tipoHabitacion}</Card.Title>
          <Card.Text>{habitacion.descripcionBreve}</Card.Text>
          <Link className=" btn btnCardHabitacion w-100 fw-semibold" to={'/detalleHabitacion/'+ habitacion.id} >DETALLES</Link>
        </Card.Body>
      </Card>
    </Col>
    
  );
};

export default CardHabitacion;