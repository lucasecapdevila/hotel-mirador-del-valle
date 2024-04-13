import { Form, Button, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Registro = () => {

  const{
    register,
    handleSubmit,
    formState: { errors },
  } = useForm ()

 const usuarioLogueado = (usuarioform) => {
 console.log(usuarioform)
 }

  return (
    <>
      <main className="mainPage registroBg">
        <div>
          <div className="d-flex justify-content-center">
            <Card className="cardRegistro p-md-1" sm={12} >
              <Card.Header className="titulos fs-2" as="h5">
                Iniciar Sesión
              </Card.Header>
              <Card.Body>
                <Form className="d-flex cardRegistrosm" onSubmit={handleSubmit(usuarioLogueado)}>
                <div className="d-flex flex-column col-lg-7">

            <Form.Group className="mb-3" controlId="formBasicImg">
            <Form.Label className="textos fw-bold">
                        Imagen para el Perfil:
            </Form.Label>
            <Form.Control
            type="file"
            placeholder="Ej: https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg"
            />
            <Form.Text className="text-danger">
            error
            </Form.Text>
           </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label className="textos fw-bold">
              Nombre:<span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Juan"
              as="textarea" className="textareaForm"

              {...register("nombreUser", {
                required:
                  "Ingresar tu nombre es obligatorio.",
                minLength: {
                  value: 3,
                  message:
                    "Debe ingresar como mínimo 3 carácteres para el nombre de usuario.",
                },
                maxLength: {
                  value: 15,
                  message:
                    "Puede ingresar como máximo 15 carácteres para el nombre de usuario.",
                },
              })}

            />
            <Form.Text className="text-danger">
            {errors.nombreUser?.message}
            </Form.Text>

          </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicUserName">
            <Form.Label className="textos fw-bold">
              Apellido:<span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Perez"
              as="textarea" className="textareaForm"

              {...register("apellidoUser", {
                required:
                  "El apellido del Usuario es obligatorio.",
                minLength: {
                  value: 3,
                  message:
                    "Debe ingresar como mínimo 3 carácteres para el apellido de usuario.",
                },
                maxLength: {
                  value: 20,
                  message:
                    "Puede ingresar como máximo 20 carácteres para el apellido de usuario.",
                },
              })}

            />
            <Form.Text className="text-danger">
            {errors.apellidoUser?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="userName">
            <Form.Label className="textos fw-bold">
              Nombre de usuario:<span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Juancito Perez"
              as="textarea" className="textareaForm"

              {...register("userName", {
                required:
                  "Un nombre de Usuario es obligatorio.",
                minLength: {
                  value: 3,
                  message:
                    "Debe ingresar como mínimo 3 carácteres para un nombre de usuario.",
                },
                maxLength: {
                  value: 15,
                  message:
                    "Puede ingresar como máximo 15 carácteres para un nombre de usuario.",
                },
              })}

            />
            <Form.Text className="text-danger">
            {errors.userName?.message}
            </Form.Text>
          </Form.Group>

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

          <Form.Group className="mb-3" controlId="userPassword">
          <Form.Label className="textos fw-bold">
          Contraseña
          </Form.Label>
          <Form.Control type="password" placeholder="Password"
          
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
          </div>
          <div className="d-flex justify-content-center">
          <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/78/c0/68/vista-del-ingreso-al.jpg?w=900&h=-1&s=1"
          alt="imagen de el usuario "
          id="imgRegistro"
          />
          </div>
                </Form>
              </Card.Body>
              <div className="d-flex justify-content-center textos azul mt-2">
                <p>
                  ¿Ya tenes una cuenta? 
                </p>
                <Link className=" fw-semibold linkRegistro ms-1" to={"/login"}>
                     INICIA SESION
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </>
  );
};

export default Registro;
