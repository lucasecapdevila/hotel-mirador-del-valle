import React from 'react';

const DetalleHabitacion = () => {
    return (
        <Container className="mainPage my-3">
      <Row>
        <Col md={6} className="contenedorDetalleHabitacion text-center ">
          <h1 className="display-4 fw-semibold my-5"></h1>
          <p className="my-5 fs-5">
            min 
          </p>
          <p className="fs-5"></p>
        </Col>
        <Col md={6} className="p-0">
          <Image src=''></Image>
        </Col>
        <Col md={6}>
          <h5 className="mt-4"></h5>
          <p>{receta.ingredientes}</p>
        </Col>
        <Col md={6}>
          <h5 className="mt-4"></h5>
          <p></p>
        </Col>
      </Row>
    </Container>
    );
};

export default DetalleHabitacion;