import { useEffect, useState } from "react";
import { Col, ConfigProvider, DatePicker, Space } from "antd";
import locale from "antd/locale/es_ES";
import dayjs from "dayjs";
import "dayjs/locale/es";
import isBetween from "dayjs/plugin/isBetween";
import { Container, Row } from "react-bootstrap";
import CardHabitacion from "./habitaciones/CardHabitacion";
import { leerHabitacionesAPI } from "../../helpers/queries";
import Loader from "../common/Loader";
import Error from "../common/Error";
dayjs.extend(isBetween);

const Habitaciones = ({
  fechaEntrada,
  setFechaEntrada,
  fechaSalida,
  setFechaSalida,
  usuarioLogueado,
  setUsuarioLogueado,
}) => {
  const [listaHabitaciones, setListaHabitaciones] = useState([]);
  const [listaHabitacionesPorFiltrar, setListaHabitacionesPorFiltrar] =
    useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    traerHabitaciones();
  }, []);

  const { RangePicker } = DatePicker;
  dayjs.locale("es");

  const traerHabitaciones = async () => {
    try {
      setLoading(true);
      const listaHabitacionesAPI = await leerHabitacionesAPI();
      setListaHabitaciones(listaHabitacionesAPI);
      setListaHabitacionesPorFiltrar(listaHabitacionesAPI);
      setLoading(false);
      if (!listaHabitacionesAPI) {
        return setListaHabitaciones([]) && setListaHabitacionesPorFiltrar([]);
      }
    } catch (error) {
      setError(true);
      console.log(error);
      setLoading(false);
    }
  };

  //! ESTA FUNCIÓN NO SE ESTÁ HACIENDO LO QUE DEBERÍA:
  //* Debería filtrar las habitaciones en base a las fechas de las reservas
  //* Ej: Si una habitación tiene una reserva en las fechas 23/5 al 25/5, no debería mostrarse si quiero reservar en las mismas fechas o en otros períodos que contengan los días 23/5, 24/5 y/o 25/5

  //* En cambio, está ocultando todas las habitaciones que tengan una reserva (sin importar la fecha de dicha reserva)

  const filtrarPorFecha = (fechas) => {
    console.log("Función");
    setFechaEntrada(dayjs(fechas[0]).format("DD-MM-YYYY"));
    setFechaSalida(dayjs(fechas[1]).format("DD-MM-YYYY"));

    let habitacionesTemporales = [];
    let disponible = false;
    listaHabitacionesPorFiltrar.map((habitacionTemporal) => {
      if (habitacionTemporal.reservasActuales.length > 0) {
        habitacionTemporal.reservasActuales.map((reserva) => {
          if (
            dayjs(dayjs(fechas[0]).format("DD-MM-YYYY")).isBetween(
              reserva.fechaEntrada,
              reserva.fechaSalida
            ) &&
            dayjs(dayjs(fechas[1]).format("DD-MM-YYYY")).isBetween(
              reserva.fechaEntrada,
              reserva.fechaSalida
            )
          ) {
            if (
              dayjs(fechas[0]).format("DD-MM-YYYY") !== reserva.fechaEntrada &&
              dayjs(fechas[0]).format("DD-MM-YYYY") !== reserva.fechaSalida &&
              dayjs(fechas[1]).format("DD-MM-YYYY") !== reserva.fechaEntrada &&
              dayjs(fechas[1]).format("DD-MM-YYYY") !== reserva.fechaSalida
            ) {
              disponible = true;
            }
          }
        });
      }
      if (
        disponible === true ||
        habitacionTemporal.reservasActuales.length == 0
      ) {
        habitacionesTemporales.push(habitacionTemporal);
      }
      setListaHabitaciones(habitacionesTemporales);
    });
  };

  return (
    <ConfigProvider locale={locale}>
      <div className="portadaHabitaciones text-center">
        <img
          className="banner"
          src="https://tafidelvalle.com/imagenes/album/tafi-del-valle_099.jpg"
        />
        <div className="titulos tituloPrincipal">
          <h1 className="">HABITACIONES</h1>
        </div>
      </div>
      <div className="mainPage">
        {usuarioLogueado && usuarioLogueado.email ? (
          <Row className="contenedorFechas justify-content-center mb-md-3">
            <Col  md={12} lg={6} className="text-center">
              <p className="buscarHabitacion m-4 mt-lg-4">Buscar Habitacion</p>
            </Col>
            <Col md={12} lg={6} className="text-center">
              {" "}
              <Space
                className="fw-bold m-4 mt-md-4"
                direction="vertical"
              >
                <RangePicker
                  className=" p-2"
                  format="DD-MM-YYYY"
                  onChange={filtrarPorFecha}
                />
              </Space>
            </Col>
          </Row>
        ) : null}
        <Container>
          <Row>
            {loading ? (
              <Loader />
            ) : listaHabitaciones.length > 0 ? (
              listaHabitaciones.map((habitacion) => (
                <CardHabitacion
                  key={habitacion._id}
                  habitacion={habitacion}
                  fechaEntrada={fechaEntrada}
                  fechaSalida={fechaSalida}
                />
              ))
            ) : (
              <Error />
            )}
          </Row>
        </Container>
      </div>
    </ConfigProvider>
  );
};

export default Habitaciones;
