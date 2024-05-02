import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Tab, Table, Tabs } from "react-bootstrap";
import ItemHabitacion from "./habitaciones/ItemHabitacion";
import { useEffect, useState } from "react";
import { leerHabitacionesAPI } from "../../helpers/queries";
import { leerUsuariosAPI } from "../../helpers/queries";
import { Link } from "react-router-dom";
import ItemUsuario from "./usuarios/ItemUsuario";
const Admin = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [habitaciones, setHabitaciones] = useState([]);
  useEffect(() => {
    traerHabitaciones();
  }, []);

  const traerHabitaciones = async () => {
    try {
      const listaHabitacionesAPI = await leerHabitacionesAPI();
      setHabitaciones(listaHabitacionesAPI);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    traerUsuarios();
  }, []);

  const traerUsuarios = async () => {
    try {
      const listaUsuariosAPI = await leerUsuariosAPI();
      setUsuarios(listaUsuariosAPI);
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
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody className="fs-5">
                {habitaciones.map((habitacion) => (
                  <ItemHabitacion
                    key={habitacion._id}
                    habitacion={habitacion}
                    
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
                  <th>Usuario</th>
                  <th>Rol</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Email</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody className=" fs-5">
              {usuarios.map((usuario) => (
                  <ItemUsuario
                    key={usuario._id}
                    usuario={usuario}
                    
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
