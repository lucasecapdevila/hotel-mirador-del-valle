import { Button, Card, CardHeader, Col } from "react-bootstrap"

const CardReserva = () => {
  return (
    <Col className="mb-3 mx-2 mx-md-0">
      <Card className="my-3 cardCategoria">
        <CardHeader>
          <Card.Title className="text-center text-md-start m-0 titulos">
            <h4>Habitación espectacular</h4>
          </Card.Title>
        </CardHeader>
        <Card.Body className="bodyCardHabitacion">
          <div className="d-md-flex justify-content-between">
            <Card.Img
              src="https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg"
              className="imagenReserva"
            />
            <div className="d-flex flex-column mt-4 my-md-0">
              <div className="mb-2 mb-lg-5">
                <Card.Title className="textos">
                  <h2>Detalles de la Reserva</h2>
                </Card.Title>
                <ul className="list-unstyled">
                  <li className="fs-5 textos mb-2">Nombre: <span className="textosAlternativos">Lucas Capdevila</span></li>
                  <li className="fs-5 textos mb-2">Fecha de Entrada: <span className="textosAlternativos">13/4/2024</span></li>
                  <li className="fs-5 textos mb-2">Fecha de Salida: <span className="textosAlternativos">18/4/2024</span></li>
                  <li className="fs-5 textos mb-2">Cantidad máxima de personas: <span className="textosAlternativos">3</span></li>
                </ul>
              </div>
              <div>
                <Card.Title className="textos">
                  <h2>Cantidades</h2>
                </Card.Title>
                <ul className="list-unstyled">
                  <li className="fs-5 textos mb-2">Total de días: <span className="textosAlternativos">6</span></li>
                  <li className="fs-5 textos mb-2">Precio por día: <span className="textosAlternativos">$1000</span></li>
                  <li className="fs-5 textos mb-2">Precio total: <span className="textosAlternativos">$6000</span></li>
                </ul>
              </div>
              <Button className="w-100 m-auto ms-1 mb-0">Pagar ahora</Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default CardReserva