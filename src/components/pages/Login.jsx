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
  } = useForm();
  const navegacion = useNavigate();
  
  const onSubmit = async (usuario) => {
    try {
      const respuesta = await iniciarSesion(usuario);
      console.log(usuario)
      console.log(respuesta.status)
      if (respuesta.status === 200) {
        const dato = await respuesta.json();
        console.log(dato)
        console.log(dato.role)
        if (dato.role === "Usuario") {
          console.log(dato.role)

          sessionStorage.setItem('inicioHotelMiradorDelValle', JSON.stringify({email: dato.email, userName: dato.userName, token: dato.token}))
          setUsuarioLogueado(dato);
          navegacion("/");
          Swal.fire({
            title: `Bienvenido ${dato.nombreUsuario}`,
            icon: "success",
            confirmButtonColor: '#B79B63',
            customClass: {
              popup: 'contenedor-sweet'
            }
          });
          
        } else if (dato.role === "Administrador") {
          console.log(dato.role)
          sessionStorage.setItem('inicioHotelMiradorDelValle', JSON.stringify({email: dato.email}))
          setUsuarioLogueado(dato);
          navegacion("/administrador");
          Swal.fire({
            title: `Bienvenido administrador`,
            icon: "success",
            confirmButtonColor: '#B79B63',
            customClass: {
              popup: 'contenedor-sweet'
            }
          });
        } else {
          Swal.fire({
            title: "Error al loguearse!",
            text: "Intente Nuevamente",
            icon: "error",
            customClass: {
              popup: 'contenedor-sweet'
            }
          });
        }
      } else{
        Swal.fire({
          title: "Error al loguearse!",
          text: "Intente Nuevamente",
          icon: "error",
          customClass: {
            popup: 'contenedor-sweet'
          }
        });
      }
    } catch (error) {
      console.log(error);
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
                  {...register("userEmail", {
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
                  {errors.userEmail?.message}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="textos fw-bold">Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder=""
                  {...register("userPassword", {
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
                  {errors.userPassword?.message}
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
