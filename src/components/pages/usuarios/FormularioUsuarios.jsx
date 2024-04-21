import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import {
  crearUsuarioAPI,
  editarUsuarioAPI,
  obtenerUsuarioAPI,
} from "../../../helpers/queries";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const FormularioUsuarios = ({ editar, titulo }) => {
  const { id } = useParams();
  const navegacion = useNavigate();

  useEffect(() => {
    if (editar) {
      cargarDatosEnFormulario();
    }
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const cargarDatosEnFormulario = async () => {
    //  Traer datos de la habitación:
    const response = await obtenerUsuarioAPI(id);
    if (response.status === 200) {
      const usuarioBuscado = await response.json();
      //  Mostrar datos en el formulario:
      setValue("numeroHabitacion", habitacionBuscada.numeroHabitacion);
      setValue("tipoHabitacion", habitacionBuscada.tipoHabitacion);
      setValue("precioHabitacion", habitacionBuscada.precioHabitacion);
      setValue("disponibilidad", habitacionBuscada.disponibilidad);
      setValue("imagenHabitacion", habitacionBuscada.imagenHabitacion);
      setValue("descripcionBreve", habitacionBuscada.descripcionBreve);
      setValue("descripcionAmplia", habitacionBuscada.descripcionAmplia);
    } else {
      Swal.fire({
        title: "Ocurrió un error",
        text: "Intente realizar esta operación en unos minutos.",
        icon: "error",
      });
    }
  };

  const usuarioValidado = async (usuario) => {
    try {
      if (editar) {
        const response = await editarUsuarioAPI(id, usuario);
        if (response.status === 200) {
          Swal.fire({
            title: "Habitación editada",
            text: `La habitación número ${usuario.numeroUsuario} fue modificada exitosamente.`,
            icon: "success",
          });
          //  Redireccionar a tabla de Admin una vez termine la edición
          navegacion("/administrador");
        } else {
          Swal.fire({
            title: "Ocurrió un error",
            text: "Intente modificar la habitación en unos minutos.",
            icon: "error",
          });
        }
      } else {
        const response = await crearUsuarioAPI(usuario);
        if (response.status === 201) {
          Swal.fire({
            title: "Habitación agregada",
            text: `La habitación número ${usuario.numeroUsuario} fue agregada exitosamente.`,
            icon: "success",
          });
          reset();
        } else {
          Swal.fire({
            title: "Ocurrió un error",
            text: "Intente agregar la habitación en unos minutos.",
            icon: "error",
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="mainPage">
      <section className="container">
        <h1 className="mt-4 titulos">{titulo}</h1>
        <hr />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formRol">
            <Form.Label>Rol que desempeña</Form.Label>
            <Form.Select
              {...register("rol", {
                required: "el rol de usuario es obligatorio.",
              })}
            >
              <option value="">Seleccione una opción</option>
              <option value="admin">Administrador</option>
              <option value="user">Usuario</option>
            </Form.Select>
            <Form.Text className="text-danger">{errors.rol?.message}</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="textos fw-bold">Usuario</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ej:juan2024"
              {...register("user", {
                required: "El usuario es obligatorio",
                minLength: {
                  value: 4,
                  message: "El usuario debe contener al menos 4 caracteres",
                },
                maxLength: {
                  value: 64,
                  message: "El usuario debe contener como máximo 64 caracteres",
                },
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                  message: "Ingrese una dirección de correo electrónico válida",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.email?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="textos fw-bold">Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ej: juan_perez@gmail.com"
              {...register("email", {
                required: "El email es obligatorio",
                minLength: {
                  value: 4,
                  message: "El email debe contener al menos 4 caracteres",
                },
                maxLength: {
                  value: 250,
                  message: "El email debe contener como máximo 250 caracteres",
                },
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                  message: "Ingrese una dirección de correo electrónico válida",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.email?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="textos fw-bold">Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder=""
              {...register("password", {
                required: "El password es obligatorio",
                minLength: {
                  value: 8,
                  message: "el minimo es de 8 caracteres",
                },
                maxLength: {
                  value: 15,
                  message: "el maximo es de 15 caracteres",
                },
                pattern: {
                  value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                  message:
                    "El password debe contener al menos una letra mayúscula, una letra minúscula y un número",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.password?.message}
            </Form.Text>
          </Form.Group>

          <Button className="btnLogin w-100 fw-bold textos" type="submit">
            GUARDAR
          </Button>
        </Form>
      </section>
    </main>
  );
};

export default FormularioUsuarios;
