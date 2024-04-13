import { Container, Row } from "react-bootstrap";
import CardReserva from "./CardReserva";

const Reservas = () => {

  return (
    <main className="mainPage">
      <Container>
        <Row>
          <CardReserva />
        </Row>
      </Container>
    </main>
  );
};

export default Reservas;