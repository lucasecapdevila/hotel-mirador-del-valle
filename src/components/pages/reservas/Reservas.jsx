import { Container, Row } from "react-bootstrap";
import CardReserva from "./CardReserva";
import { useParams } from "react-router-dom";

const Reservas = () => {
  const { id, fechaEntrada, fechaSalida } = useParams();

  return (
    <main className="mainPage">
      <Container>
        <Row>
          <CardReserva id={id} fechaEntrada={fechaEntrada} fechaSalida={fechaSalida} />
        </Row>
      </Container>
    </main>
  );
};

export default Reservas;