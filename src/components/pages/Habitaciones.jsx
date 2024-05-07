import { useEffect, useState } from "react";
import { ConfigProvider, DatePicker, Space } from "antd";
import locale from "antd/locale/es_ES";
import dayjs from "dayjs";
import "dayjs/locale/es";
import isBetween from "dayjs/plugin/isBetween";
import { Container, Row } from "react-bootstrap";
import CardHabitacion from "./habitaciones/CardHabitacion";
import { leerHabitacionesAPI } from "../../helpers/queries";
import Loader from "../common/Loader";
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
  const [listaHabitacionesPorFiltrar, setListaHabitacionesPorFiltrar] = useState([]);
  const [loading, setLoading] = useState()

  useEffect(() => {
    traerHabitaciones();
  }, []);

  const { RangePicker } = DatePicker;
  dayjs.locale("es");

  const traerHabitaciones = async () => {
    try {
      setLoading(true)
      const listaHabitacionesAPI = await leerHabitacionesAPI();
      setListaHabitaciones(listaHabitacionesAPI);
      setListaHabitacionesPorFiltrar(listaHabitacionesAPI);
      setLoading(false)
    } catch (error) {
      setLoading(true)
      console.log(error);
      setLoading(false)
    }
  };

  //! ESTA FUNCIÓN NO SE ESTÁ HACIENDO LO QUE DEBERÍA:
  //* Debería filtrar las habitaciones en base a las fechas de las reservas
  //* Ej: Si una habitación tiene una reserva en las fechas 23/5 al 25/5, no debería mostrarse si quiero reservar en las mismas fechas o en otros períodos que contengan los días 23/5, 24/5 y/o 25/5
  
  //* En cambio, está ocultando todas las habitaciones que tengan una reserva (sin importar la fecha de dicha reserva)

  const filtrarPorFecha = (fechas) => {
    console.log('Función');
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
      <div className="portadaHabitaciones mb-5 text-center">
        <img
          className="banner"
          src="https://tafidelvalle.com/imagenes/album/tafi-del-valle_099.jpg"
        />
        <div className="titulos tituloPrincipal">
          <h1 className="">HABITACIONES</h1>
        </div>
      </div>
      <Container className="mainPage">
        {usuarioLogueado && usuarioLogueado.email ? (
          <Space className="mb-5" direction="vertical" size={12}>
            <RangePicker format="DD-MM-YYYY" onChange={filtrarPorFecha} />
          </Space>
        ) : null}

        <Row>
          {loading ? (
            <Loader />
          ) : (
            listaHabitaciones.map((habitacion) => (
              <CardHabitacion
                key={habitacion._id}
                habitacion={habitacion}
                fechaEntrada={fechaEntrada}
                fechaSalida={fechaSalida}
              />
            ))
          )}
        </Row>
      </Container>
    </ConfigProvider>
  );
};

export default Habitaciones;
