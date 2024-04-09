import { Form, Button, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { login } from "../../helpers/queries";
import Swal from "sweetalert2";
import { useNavigate, Link } from "react-router-dom";

const Login = ({ setUsuarioLogueado }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navegacion = useNavigate();

  const onSubmit = (usuario) => {
    if (login(usuario)) {
      Swal.fire({
        title: "Usuario logueado",
        text: `El usuario ${usuario.email} fue logueado correctamente`,
        icon: "success",
      });
      setUsuarioLogueado(usuario.email);
      navegacion("/administrador");
    } else {
      Swal.fire({
        title: "Error en el login",
        text: "El email o password son incorrectos",
        icon: "error",
      });
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
          <div className="text-center textos azul mt-3">
          <p>
            ¿No tenes cuenta?
            <Link className=" fw-semibold linkRegistro" to={"/error404/"}>
              REGISTRATE
            </Link>
          </p>
        </div>
        </Card>
        
      </div>
    </div>
  );
};

export default Login;
