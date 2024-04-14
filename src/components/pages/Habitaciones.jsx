import { useEffect, useState } from "react";
import { ConfigProvider, DatePicker, Space } from "antd";
import locale from "antd/locale/es_ES";
import dayjs from "dayjs";
import "dayjs/locale/es";
import { Container, Row } from "react-bootstrap";
import CardHabitacion from "./habitaciones/CardHabitacion";
import { leerHabitacionesAPI } from "../../helpers/queries";

const Habitaciones = ({fechaEntrada, setFechaEntrada, fechaSalida, setFechaSalida}) => {
  const [listaHabitaciones, setListaHabitaciones] = useState([]);

  useEffect(() => {
    traerHabitaciones();
  }, []);
  
  const { RangePicker } = DatePicker;
  dayjs.locale("es");

  const traerHabitaciones = async () => {
    try {
      const listaHabitacionesAPI = await leerHabitacionesAPI();
      setListaHabitaciones(listaHabitacionesAPI);
    } catch (error) {
      console.log(error);
    }
  };

  const filtrarPorFecha = (fechas) => {
    setFechaEntrada(dayjs(fechas[0]).format("DD-MM-YYYY"))
    setFechaSalida(dayjs(fechas[1]).format("DD-MM-YYYY"))
  };

  return (
    <ConfigProvider locale={locale}>
      <div className="portadaHabitaciones mb-5 text-center">
        <img
          className="banner"
          src="https://images.pexels.com/photos/939715/pexels-photo-939715.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
        <div className="titulos tituloPrincipal">
          <h1 className="">HABITACIONES</h1>
        </div>
      </div>
      <Container className="mainPage">
        <Space direction="vertical" size={12}>
          <RangePicker format="DD-MM-YYYY" onChange={filtrarPorFecha} />
        </Space>
        <Row>
          {listaHabitaciones.map((habitacion) => (
            <CardHabitacion key={habitacion.id} habitacion={habitacion} fechaEntrada={fechaEntrada} fechaSalida={fechaSalida} />
          ))}
        </Row>
      </Container>
    </ConfigProvider>
  );
};

export default Habitaciones;