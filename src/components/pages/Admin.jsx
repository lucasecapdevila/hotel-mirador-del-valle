import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Container, Tab, Table, Tabs } from "react-bootstrap"
import ItemHabitacion from "./habitaciones/ItemHabitacion"

const Admin = () => {
  return (
    <main className="my-3 mainPage">
      <Container>
        <Tabs fill defaultActiveKey='habitaciones'>
          <Tab eventKey='habitaciones' title='Habitaciones'>
            <div className="d-flex align-items-center justify-content-between my-2">
              <h2 className="fs-1 fw-bold text-center titulos">Administrador de habitaciones</h2>
              <Button><FontAwesomeIcon icon={faPlus} /></Button>
            </div>
            <hr />

            <Table striped bordered responsive>
              <thead>
                <tr className="text-center">
                  <th>N° de Habitación</th>
                  <th>Tipo</th>
                  <th>Precio</th>
                  <th>Disponible</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <ItemHabitacion />
              </tbody>
            </Table>
          </Tab>

          <Tab eventKey='usuarios' title='Usuarios'>
            <div className="d-flex align-items-center justify-content-between my-2">
              <h2 className="fs-1 fw-bold titulos">Administrador de usuarios</h2>
              <Button><FontAwesomeIcon icon={faPlus} /></Button>
            </div>
            <hr />

            <Table striped bordered responsive>
              <thead>
                <tr className="text-center">
                  <th>Algo de usuario</th>
                  <th>Algo de usuario</th>
                  <th>Algo de usuario</th>
                  <th>Algo de usuario</th>
                  <th>Algo de usuario</th>
                </tr>
              </thead>
              <tbody>
                <ItemHabitacion />
              </tbody>
            </Table>
          </Tab>
        </Tabs>

        
      </Container>
    </main>
  )
}

export default Admin