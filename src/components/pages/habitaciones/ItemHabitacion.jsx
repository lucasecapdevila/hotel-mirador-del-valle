import { Button } from "react-bootstrap"

const ItemHabitacion = () => {
  return (
    <tr>
      <td>N° Habitac</td>
      <td>Tipo de Habit</td>
      <td>$XXX</td>
      <td>Si/no</td>
      <td className="anchoColumna">
        <div className="d-flex align-items-center justify-content-center">
          <Button variant="warning" className="ms-0 me-2">Editar</Button>
          <Button variant="danger">Eliminar</Button>
        </div>
      </td>
    </tr>
  )
}

export default ItemHabitacion