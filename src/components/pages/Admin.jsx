import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Container, Table } from "react-bootstrap"
import ItemHabitacion from "./habitaciones/ItemHabitacion"

const Admin = ({users}) => {
  return (
    <main className="my-3">
      <Container>
        <div className="d-flex align-items-center justify-content-between">
          <h2 className="fs-1 fw-bold titulos">{users ? 'Administrador de usuarios' : 'Administrador de habitaciones'}</h2>
          <Button><FontAwesomeIcon icon={faPlus} /></Button>
        </div>
        <hr />

        <Table striped bordered responsive>
          <thead>
            <tr>
              <th>N° de Habitación</th>
              <th>Tipo</th>
              <th>Precio</th>
              <th>Disponible</th>
            </tr>
          </thead>
          <tbody>
            <ItemHabitacion />
          </tbody>
        </Table>
      </Container>
    </main>
  )
}

export default Admin