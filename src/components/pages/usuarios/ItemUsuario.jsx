import { faFilePen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import {
  borrarUsuarioAPI,
  leerUsuariosAPI,
} from "../../../helpers/queries";
import { Link } from "react-router-dom";

const ItemUsuario = ({ usuario, setListaUsuarios }) => {
  console.log(usuario);
  const borrarUsuario = () => {
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
        const response = await borrarUsuarioAPI(usuario._id);
        if (response.status === 200) {
          const listaUsuariosActualizada = await leerUsuariosAPI();
          setListaUsuarios(listaUsuariosActualizada);

          Swal.fire({
            title: "Eliminado!",
            text: `El usuario ${usuario.nombreUser} se eliminó exitosamente.`,
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Ocurrió un error",
            text: `No se pudo eliminar el usuario ${usuario.nombreUser}. Vuelva a intentarlo en unos momentos.`,
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <tr>
     
      <td>{usuario.userName}</td>
      <td className="text-center">{usuario.role}</td>
      <td className="text-center">{usuario.nombreUser}</td>
      <td className="text-center">{usuario.apellidoUser}</td>
      <td className="text-center">{usuario.userEmail}</td>
      <td className="anchoColumna">
        <div className="d-flex align-items-center justify-content-center">
          <Link
            to={`/administrador/editarusuario/${usuario._id}`}
            className="btn btn-warning ms-0 me-2"
          >
            <FontAwesomeIcon icon={faFilePen} />
          </Link>
          <Button variant="danger" onClick={borrarUsuario}>
            <FontAwesomeIcon icon={faTrashCan} />
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default ItemUsuario;
