import { ConfigProvider, DatePicker, Space } from "antd";
import locale from "antd/locale/es_ES";
import dayjs from "dayjs";
import "dayjs/locale/es";
import { Container } from "react-bootstrap";

const Reservas = () => {
  const { RangePicker } = DatePicker;
  dayjs.locale("es");

  const filtrarPorFecha = (fechas) => {
    console.log(dayjs(fechas[0]).format("DD-MM-YYYY"));
    console.log(dayjs(fechas[1]).format("DD-MM-YYYY"));
  };

  return (
    <ConfigProvider locale={locale}>
      <Container className="mainPage">
        <Space direction="vertical" size={12}>
          <RangePicker format="DD-MM-YYYY" onChange={filtrarPorFecha} />
        </Space>
      </Container>
    </ConfigProvider>
  );
};

export default Reservas;
