import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Container, Tab, Table, Tabs } from "react-bootstrap";
import ItemHabitacion from "./habitaciones/ItemHabitacion";
import { useEffect, useState } from "react";
import { leerHabitacionesAPI } from "../../helpers/queries";
import { leerUsuarioAPI } from "../../helpers/queries";
import { Link } from "react-router-dom";
import ItemUsuario from "./usuarios/ItemUsuario";
const Admin = () => {
  const [listaHabitaciones, setListaHabitaciones] = useState([]);

  useEffect(() => {
    traerHabitaciones();
  }, []);

  const traerHabitaciones = async () => {
    try {
      const listaHabitacionesAPI = await leerHabitacionesAPI();
      setListaHabitaciones(listaHabitacionesAPI);
    } catch (error) {
      console.log(error);
    }
  };
  const [listaUsuarios, setListaUsuarios] = useState([]);

  useEffect(() => {
    traerUsuarios();
  }, []);

  const traerUsuarios = async () => {
    try {
      const listaUsuariosAPI = await leerUsuarioAPI();
      setListaUsuarios(listaUsuariosAPI);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main className="my-3 mainPage ">
      <Container>
        <Tabs fill defaultActiveKey="habitaciones">
          <Tab eventKey="habitaciones" title="Habitaciones">
            <div className="d-flex align-items-center justify-content-between my-2">
              <h2 className="fs-1 fw-bold text-center titulos azul">
                Administrador de Habitaciones
              </h2>
              <Link to="/administrador/crear" className="btn btn-primary">
                <FontAwesomeIcon icon={faPlus} />
              </Link>
            </div>
            <hr />

            <Table striped bordered responsive >
              <thead className="fs-5">
                <tr className="text-center">
                  <th>N° de Habitación</th>
                  <th>Tipo</th>
                  <th>Precio</th>
                  <th>Disponible</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody className="fs-5">
                {listaHabitaciones.map((habitacion) => (
                  <ItemHabitacion
                    key={habitacion.id}
                    habitacion={habitacion}
                    setListaHabitaciones={setListaHabitaciones}
                  />
                ))}
              </tbody>
            </Table>
          </Tab>

          <Tab eventKey="usuarios" title="Usuarios">
            <div className="d-flex align-items-center justify-content-between my-2">
              <h2 className="fs-1 fw-bold titulos azul">
                Administrador de Usuarios
              </h2>
            </div>
            <hr />

            <Table striped bordered responsive>
              <thead className="fs-5">
                <tr className="text-center">
                  <th>Tipo de Usuario</th>
                  <th>Usuario</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Email</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody className=" fs-5">
              {listaUsuarios.map((usuario) => (
                  <ItemUsuario
                    key={usuario.id}
                    usuario={usuario}
                    setListaUsuarios={setListaUsuarios}
                  />
                ))}
              </tbody>
            </Table>
          </Tab>
        </Tabs>
      </Container>
    </main>
  );
};

export default Admin;
