import { useEffect, useState } from "react";
import { Button, Card, CardHeader, Col } from "react-bootstrap"
import { obtenerHabitacionAPI } from "../../../helpers/queries";
import dayjs from "dayjs";

const CardReserva = ({id, fechaEntrada, fechaSalida}) => {
  const [habitacion, setHabitacion] = useState({});

  useEffect(() => {
    cargarDetalle();
  }, []);

  const fecha1 = dayjs(fechaEntrada, "DD-MM-YYYY")
  const fecha2 = dayjs(fechaSalida, "DD-MM-YYYY")
  const diasTotales = fecha2.diff(fecha1, 'day') + 1
  

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
    <Col className="mb-3 mx-2 mx-md-0">
      <Card className="my-3">
        <CardHeader>
          <Card.Title className="text-center text-md-start m-0 titulos">
            <h4>{habitacion.tipoHabitacion}</h4>
          </Card.Title>
        </CardHeader>
        <Card.Body className="bodyCardHabitacion">
          <div className="d-md-flex justify-content-between">
            <Card.Img
              src={habitacion.imagenHabitacion}
              className="imagenReserva"
            />
            <div className="d-flex flex-column mt-4 my-md-0">
              <div className="mb-2 mb-lg-5">
                <Card.Title className="textos">
                  <h2>Detalles de la Reserva</h2>
                </Card.Title>
                <ul className="list-unstyled">
                  <li className="fs-5 textos mb-2">Nombre: <span className="textosAlternativos">{id}</span></li>
                  <li className="fs-5 textos mb-2">Fecha de Entrada: <span className="textosAlternativos">{fechaEntrada}</span></li>
                  <li className="fs-5 textos mb-2">Fecha de Salida: <span className="textosAlternativos">{fechaSalida}</span></li>
                  <li className="fs-5 textos mb-2">Cantidad máxima de personas: <span className="textosAlternativos">3</span></li>
                </ul>
              </div>
              <div>
                <Card.Title className="textos">
                  <h2>Cantidades</h2>
                </Card.Title>
                <ul className="list-unstyled">
                  <li className="fs-5 textos mb-2">Total de días: <span className="textosAlternativos">{diasTotales}</span></li>
                  <li className="fs-5 textos mb-2">Precio por día: <span className="textosAlternativos">${habitacion.precioHabitacion}</span></li>
                  <li className="fs-5 textos mb-2">Precio total: <span className="textosAlternativos">Precio * cantidad de días</span></li>
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