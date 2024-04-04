import { faFilePen, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from "react-bootstrap"

const ItemHabitacion = ({habitacion, setListaHabitaciones}) => {
  return (
    <tr>
      <td>{habitacion.numeroHabitacion}</td>
      <td>{habitacion.tipoHabitacion}</td>
      <td className="text-center">${habitacion.precio}</td>
      <td className="text-center">{habitacion.disponibilidad}</td>
      <td className="anchoColumna">
        <div className="d-flex align-items-center justify-content-center">
          <Button variant="warning" className="ms-0 me-2"><FontAwesomeIcon icon={faFilePen} /></Button>
          <Button variant="danger"><FontAwesomeIcon icon={faTrashCan} /></Button>
        </div>
      </td>
    </tr>
  )
}

export default ItemHabitacion