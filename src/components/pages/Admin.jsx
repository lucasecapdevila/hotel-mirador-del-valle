import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Tab, Table, Tabs } from "react-bootstrap";
import ItemHabitacion from "./habitaciones/ItemHabitacion";
import { useEffect, useState } from "react";
import { leerHabitacionesAPI } from "../../helpers/queries";
import { leerUsuariosAPI } from "../../helpers/queries";
import { Link } from "react-router-dom";
import ItemUsuario from "./usuarios/ItemUsuario";
import Loader from "../common/Loader";
import Error from "../common/Error";

const Admin = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [habitaciones, setHabitaciones] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    traerHabitaciones();
  }, []);

  const traerHabitaciones = async () => {
    try {
      setLoading(true);
      const listaHabitacionesAPI = await leerHabitacionesAPI();
      setHabitaciones(listaHabitacionesAPI);
      setLoading(false);
      if (!listaHabitacionesAPI) {
        return setHabitaciones([]);
      }
    } catch (error) {
      setError(true);
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    traerUsuarios();
  }, []);

  const traerUsuarios = async () => {
    try {
      setLoading(true);
      const listaUsuariosAPI = await leerUsuariosAPI();
      setUsuarios(listaUsuariosAPI);
      setLoading(false);
      if (!listaUsuariosAPI) {
        return setUsuarios([]);
      }
    } catch (error) {
      setError(true);
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <main className="my-3 mainPage ">
      <Container>
        <Tabs fill defaultActiveKey="habitaciones">
          <Tab eventKey="habitaciones" title="Habitaciones">
            {loading ? (
              <Loader />
            ) : habitaciones.length > 0 ? (
              <>
                <div className="d-flex align-items-center justify-content-between my-2">
                  <h2 className="fs-1 fw-bold text-center titulos azul">
                    Administrador de Habitaciones
                  </h2>
                  <Link to="/administrador/crear" className="btn btn-primary">
                    <FontAwesomeIcon icon={faPlus} />
                  </Link>
                </div>
                <hr />

                <Table striped bordered responsive>
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
              </>
            ) : (
              <Error />
            )}
          </Tab>

          <Tab eventKey="usuarios" title="Usuarios">
            {loading ? (
              <Loader />
            ) : usuarios.length > 0 ? (
              <>
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
                      <ItemUsuario key={usuario._id} usuario={usuario} setUsuarios={setUsuarios} />
                    ))}
                  </tbody>
                </Table>
              </>
            ) : (
              <Error />
            )}
          </Tab>
        </Tabs>
      </Container>
    </main>
  );
};

export default Admin;
