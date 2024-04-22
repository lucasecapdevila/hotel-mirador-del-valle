import { Form, Button, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { iniciarSesion } from "../../helpers/queries";
import Swal from "sweetalert2";
import { useNavigate, Link } from "react-router-dom";

const Login = ({ setUsuarioLogueado }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navegacion = useNavigate();

  const onSubmit = async (usuario) => {
    try {
      const respuesta = await iniciarSesion(usuario);

      if (respuesta) {
        delete respuesta.password;
        sessionStorage.setItem("inicioHotelMiradorDelValle", JSON.stringify(respuesta));

        const esAdministrador = respuesta.rol === "Administrador";

        if (esAdministrador) {
          setUsuarioLogueado(respuesta);
          Swal.fire("Bienvenido Administrador!", "", "success");
          reset();
          navegacion("/administrador");
        } else {
          setUsuarioLogueado(respuesta);
          Swal.fire(`Sesión iniciada!`, `Bienvenido ${respuesta.userName}!`, "success");
          reset();
          navegacion("/");
        }
      } else {
        Swal.fire("Error!", "El email o la contraseña son incorrectos.", "error");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      Swal.fire("Error!", "Hubo un problema al iniciar sesión. Por favor, inténtalo de nuevo más tarde.", "error");
    }
  };


  return (
    <div className="mainPage fondoLogin">
      <div className="d-flex justify-content-center">
        <Card className="cardLogin p-md-1">
          <Card.Header className="titulos fs-2" as="h5">
            Iniciar Sesión
          </Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit(onSubmit)}>
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
                      message:
                        "El email debe contener como máximo 250 caracteres",
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                      message:
                        "Ingrese una dirección de correo electrónico válida",
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
                INGRESAR
              </Button>
            </Form>
          </Card.Body>
          <div className="d-flex justify-content-center text-center textos azul mt-3">
            <p>¿No tenes cuenta? </p>
            <Link className=" fw-semibold linkRegistro ms-2" to={"/registro"}>
              REGISTRATE
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Login;
