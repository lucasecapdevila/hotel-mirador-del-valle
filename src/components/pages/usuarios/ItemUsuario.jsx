import { faFilePen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import {
  borrarHabitacionAPI,
  leerHabitacionesAPI,
} from "../../../helpers/queries";
import { Link } from "react-router-dom";

const ItemHabitacion = ({ usuario, setListaUsuarios }) => {
  const borrarUsuarios = () => {
    Swal.fire({
      title: "¿Estás seguro de eliminar el usuario?",
      text: "No podrás revertir este proceso.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await borrarUsuarioAPI(usuario.id);
        if (response.status === 200) {
          const listaUsuariosActualizada = await leerUsuarioAPI();
          setListaHabitaciones(listaUsuariosActualizada);

          Swal.fire({
            title: "Eliminado!",
            text: `El usuario ${usuario.userName} se eliminó exitosamente.`,
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Ocurrió un error",
            text: `No se pudo eliminar el usuario ${usuario.userName}. Vuelva a intentarlo en unos momentos.`,
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <tr>
      <td>{habitacion.numeroHabitacion}</td>
      <td>{habitacion.tipoHabitacion}</td>
      <td className="text-center">${habitacion.precioHabitacion}</td>
      <td className="text-center">{habitacion.disponibilidad}</td>
      <td className="anchoColumna">
        <div className="d-flex align-items-center justify-content-center">
          <Link
            to={`/administrador/editar/${habitacion.id}`}
            className="btn btn-warning ms-0 me-2"
          >
            <FontAwesomeIcon icon={faFilePen} />
          </Link>
          <Button variant="danger" onClick={borrarHabitacion}>
            <FontAwesomeIcon icon={faTrashCan} />
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default ItemHabitacion;
