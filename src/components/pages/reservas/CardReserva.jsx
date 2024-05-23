import { useEffect, useState } from "react";
import { Button, Card, CardHeader, Col } from "react-bootstrap";
import {
  crearReservaAPI,
  obtenerHabitacionAPI,
} from "../../../helpers/queries";
import dayjs from "dayjs";
import Swal from "sweetalert2";
import Loader from "../../common/Loader";
import Error from "../../common/Error";

const CardReserva = ({ id, fechaEntrada, fechaSalida }) => {
  const [habitacion, setHabitacion] = useState({});
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    cargarDetalle();
  }, []);

  const fechaE = dayjs(fechaEntrada, "DD-MM-YYYY");
  const fechaS = dayjs(fechaSalida, "DD-MM-YYYY");
  const diasTotales = fechaS.diff(fechaE, "day") + 1;
  const precioTotal = diasTotales * habitacion.precioHabitacion;

  const cargarDetalle = async () => {
    try {
      setLoading(true)
      const respuesta = await obtenerHabitacionAPI(id);
      if (respuesta.status === 200) {
        const datoHabitacion = await respuesta.json();
        setHabitacion(datoHabitacion);
        setLoading(false)
      } else {
        setLoading(false)
        Swal.fire({
          title: "Ocurrio un error",
          text: "Intente realizar esta operacion en unos minutos",
          icon: "error",
        });
        setError(true)
      }
    } catch (error) {
      console.log(error);
      setLoading(false)
        Swal.fire({
          title: "Ocurrio un error",
          text: "Intente realizar esta operacion en unos minutos",
          icon: "error",
        });
      setError(true)
    }
  };

  const reservarHabitacion = async () => {
    const detallesReserva = {
      habitacion: habitacion.numeroHabitacion,
      idHabitacion: habitacion._id,
      idUsuario: "1234",
      fechaEntrada,
      fechaSalida,
      precioTotal,
      diasTotales,
    };

    try {
      setLoading(true)
      const response = await crearReservaAPI(detallesReserva);
      if (response.status === 201) {
        setLoading(false)
        Swal.fire({
          title: "Reserva confirmada",
          text: `Reservaste la habitación ${habitacion.numeroHabitacion} desde el ${detallesReserva.fechaEntrada} hasta el ${detallesReserva.fechaSalida} exitosamente.`,
          icon: "success",
        });
      } else {
        setLoading(false)
      }
    } catch (error) {
      setLoading(true)
      console.error(error);
      setLoading(false)
    }
  };

  return (
    <Col className="mb-3 mx-2 mx-md-0">
      {loading ? (
        <Loader />
      ) : Object.keys(habitacion).length > 0 ? (
      <Card className="my-3 bgReserva">
        <CardHeader className="cabeceraReserva">
          <Card.Title className="text-center text-md-start my-2 titulos ">
            <h4 className="azul fs-1">{habitacion.tipoHabitacion}</h4>
          </Card.Title>
        </CardHeader>
        <Card.Body className="bodyCardReserva">
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
                  <li className="fs-5 textos mb-2">
                    Nombre:{" "}
                    <span className="textosAlternativos">
                    {JSON.parse(sessionStorage.getItem("inicioHotelMiradorDelValle")).tipoHabitacion}
                    </span>
                  </li>
                  <li className="fs-5 textos mb-2">
                    Fecha de Entrada:{" "}
                    <span className="textosAlternativos">{fechaEntrada}</span>
                  </li>
                  <li className="fs-5 textos mb-2">
                    Fecha de Salida:{" "}
                    <span className="textosAlternativos">{fechaSalida}</span>
                  </li>
                  <li className="fs-5 textos mb-2">
                    Cantidad máxima de personas:{" "}
                    <span className="textosAlternativos">3</span>
                  </li>
                </ul>
              </div>
              <div>
                <Card.Title className="textos">
                  <h2>Cantidades</h2>
                </Card.Title>
                <ul className="list-unstyled">
                  <li className="fs-5 textos mb-2">
                    Total de días:{" "}
                    <span className="textosAlternativos">{diasTotales}</span>
                  </li>
                  <li className="fs-5 textos mb-2">
                    Precio por día:{" "}
                    <span className="textosAlternativos">
                      ${habitacion.precioHabitacion}
                    </span>
                  </li>
                  <li className="fs-5 textos mb-2">
                    Precio total:{" "}
                    <span className="textosAlternativos">${precioTotal}</span>
                  </li>
                </ul>
              </div>
              <Button
                className="w-100 m-auto ms-1 mb-0 btnCardReserva"
                onClick={reservarHabitacion}
              >
                PAGAR AHORA
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
      ) : (
        <Error />
      )}
    </Col>
  );
};

export default CardReserva;
