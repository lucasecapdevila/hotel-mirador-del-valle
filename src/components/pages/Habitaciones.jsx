import { useEffect, useState } from "react";
import { ConfigProvider, DatePicker, Space } from "antd";
import locale from "antd/locale/es_ES";
import dayjs from "dayjs";
import "dayjs/locale/es";
import isBetween from "dayjs/plugin/isBetween";
import { Container, Row } from "react-bootstrap";
import CardHabitacion from "./habitaciones/CardHabitacion";
import { leerHabitacionesAPI } from "../../helpers/queries";
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

  useEffect(() => {
    traerHabitaciones();
  }, []);

  const { RangePicker } = DatePicker;
  dayjs.locale("es");

  const traerHabitaciones = async () => {
    try {
      const listaHabitacionesAPI = await leerHabitacionesAPI();
      setListaHabitaciones(listaHabitacionesAPI);
      setListaHabitacionesPorFiltrar(listaHabitacionesAPI);
    } catch (error) {
      console.log(error);
    }
  };

  const filtrarPorFecha = (fechas) => {
    setFechaEntrada(dayjs(fechas[0]).format("DD-MM-YYYY"));
    setFechaSalida(dayjs(fechas[1]).format("DD-MM-YYYY"));

    let habitacionesTemporales = [];
    let disponible = false;
    listaHabitacionesPorFiltrar.map((habitacionTemporal) => {
      if (habitacionTemporal.reservasActuales.length > 0) {
        habitacionTemporal.reservasActuales.map((reserva) => {
          if (
            !dayjs(dayjs(fechas[0]).format("DD-MM-YYYY")).isBetween(
              reserva.fechaEntrada,
              reserva.fechaSalida
            ) &&
            !dayjs(dayjs(fechas[1]).format("DD-MM-YYYY")).isBetween(
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
          {listaHabitaciones.map((habitacion) => (
            <CardHabitacion
              key={habitacion.id}
              habitacion={habitacion}
              fechaEntrada={fechaEntrada}
              fechaSalida={fechaSalida}
            />
          ))}
        </Row>
      </Container>
    </ConfigProvider>
  );
};

export default Habitaciones;
