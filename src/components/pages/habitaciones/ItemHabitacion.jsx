import { faFilePen, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from "react-bootstrap"
import Swal from 'sweetalert2'
import { borrarHabitacionAPI, leerHabitacionesAPI } from "../../../helpers/queries"

const ItemHabitacion = ({habitacion, setListaHabitaciones}) => {
  const borrarHabitacion = () => {
    Swal.fire({
      title: "¿Estás seguro de eliminar la habitación?",
      text: "No podrás revertir este proceso.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar"
    }).then(async(result) => {
      if (result.isConfirmed) {
        const response = await borrarHabitacionAPI(habitacion.id)
        if(response.status === 200){
          //  Actualizo la tabla
          const listaHabitacionesActualizada = await leerHabitacionesAPI()
          setListaHabitaciones(listaHabitacionesActualizada)
          
          Swal.fire({
            title: "Eliminado!",
            text: `La habitación número ${habitacion.numeroHabitacion} se eliminó exitosamente.`,
            icon: "success"
          });
        } else{
          Swal.fire({
            title: "Ocurrió un error",
            text: `No se pudo eliminar la habitación número ${habitacion.numeroHabitacion}. Vuelva a intentarlo en unos momentos.`,
            icon: "error"
          });
        }
      }
    });
  }

  return (
    <tr>
      <td>{habitacion.numeroHabitacion}</td>
      <td>{habitacion.tipoHabitacion}</td>
      <td className="text-center">${habitacion.precioHabitacion}</td>
      <td className="text-center">{habitacion.disponibilidad}</td>
      <td className="anchoColumna">
        <div className="d-flex align-items-center justify-content-center">
          <Button variant="warning" className="ms-0 me-2"><FontAwesomeIcon icon={faFilePen} /></Button>
          <Button variant="danger" onClick={borrarHabitacion}><FontAwesomeIcon icon={faTrashCan} /></Button>
        </div>
      </td>
    </tr>
  )
}

export default ItemHabitacion