import { Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Registro = () => {

    
  return (
    <>
      <main className="mainPage registroBg">
        <div className="mainPage fondoLogin">
          <div className="d-flex justify-content-center">
            <Card className="cardRegistro p-md-1">
              <Card.Header className="titulos fs-2" as="h5">
                Iniciar Sesión
              </Card.Header>
              <Card.Body>
                <Form className="d-flex">
                  <div className="d-flex flex-column col-lg-7">
                    <Form.Group className="mb-3">
                      <Form.Label className="textos fw-bold">
                        Imagen para el Perfil:
                      </Form.Label>
                      <Form.Control
                        type="file"
                        placeholder="Ej: https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg"
                      />
                      <Form.Text className="text-danger">error</Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formNombreUsuario">
            <Form.Label className="textos fw-bold">
              Nombre de Usuario<span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Una habitación reconfortante."
              as="textarea"
            />
            <Form.Text className="text-danger">
              error
            </Form.Text>
          </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="textos fw-bold">Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Ej: juan_perez@gmail.com"
                      />
                      <Form.Text className="text-danger">error</Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label className="textos fw-bold">
                        Contraseña
                      </Form.Label>
                      <Form.Control type="password" placeholder="" />
                      <Form.Text className="text-danger">error</Form.Text>
                    </Form.Group>

                  </div>
                  <div className="ms-auto">
                    <img
                      src="https://th.bing.com/th/id/OIP.XPqGoDVJimdcOymSdvcq2wHaE5?rs=1&pid=ImgDetMain"
                      alt=""
                      id="imgRegistro"
                    />
                  </div>

                </Form>
              </Card.Body>
              <Button className="btnLogin w-100 fw-bold textos" type="submit">
                INGRESAR
              </Button>
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
