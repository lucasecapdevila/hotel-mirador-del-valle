import { Container, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Contacto = () => {
  const contactoValidacion = (mensajeEnviado) => {
    console.log(mensajeEnviado);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <Container className="mainPage">
        <section className="d-flex mt-3 contactoPagina">

          <article className="col-sm-12 col-lg-6 p-lg-3">
            <h2 className="titulos">VISITANOS</h2>
            <hr className="mt-0 w-50 border-3 azul solid opacity-100" />
            <article className="d-flex p-1">
              <FontAwesomeIcon icon={faLocationDot} className="fa-2x" />
              <p className="footerTitulo2 ms-3">
                <b>Valles Calchaquies</b>, Tafi del valle, Tucuman
              </p>
            </article>
            <p className="textos textFormContacto">
              Complete el formulario para comunicarse con nosotros.
              <br />
              Le responderemos a la brevedad posible.
            </p>
            <hr className="mt-0 border-1 azul solid opacity-90" />
            <article>
              <p className="titulos textFormContacto2">
                O puedes contactarnos en redes sociales!!
              </p>
              <a
            href="https://www.instagram.com/hotelmiradordelvalle/"
            target="_blank"
            className="text-black"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="fa-3x" 
            />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61558151730710&mibextid=kFxxJD"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="fa-3x ms-3 text-black"
            />
          </a>
          <a
            href="https://wa.me/543813048258?text=%C2%A1Hola,%20amigos%20de%20Hotel%20Mirador%20del%20Valle!%0ANecesito%20asesoramiento.%20"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="fa-3x ms-3 text-black"
            />
          </a>
              <p className="titulos textFormContacto2 mt-3"> Email: 
              <a
              href="mailto:hotelmiradordelvalle.25.07@gmail.com"
              title="Correo Electronico"
              className="azul link-underline link-underline-opacity-0 fw-semibold gmailText ms-1"
            >
              hotelmiradordelvalle.25.07@gmail.com
            </a>
              </p>
            </article>
          </article>

          <article className="col-sm-12 col-lg-6 p-lg-3">
            <h2 className="titulos">CONTACTANOS</h2>
            <hr className="mt-0 w-50 border-3 azul solid opacity-100" />

            <Form onSubmit={handleSubmit(contactoValidacion)}>
              <Form.Group className="mb-3" controlId="userName">
                <Form.Label className="textos fw-bold">
                  Nombre Completo:
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ej: Juan Perez"
                  as="textarea"
                  className="textareaForm"
                  {...register("nombreCompleto", {
                    required: "Un Nombre Completo de Usuario es obligatorio.",
                    minLength: {
                      value: 4,
                      message:
                        "Debe ingresar como mínimo 4 carácteres para su nombre completo.",
                    },
                    maxLength: {
                      value: 60,
                      message:
                        "Puede ingresar como máximo 60 carácteres para su nombre completo.",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.nombreCompleto?.message}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="textos fw-bold">Email:</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ej: juan_perez@gmail.com"
                  {...register("emailContacto", {
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
                  {errors.emailContacto?.message}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formConsulta">
                <Form.Label className="textos fw-bold">Consulta:</Form.Label>
                <Form.Control
                  id="formConsulta"
                  type="text"
                  placeholder="Ej: Quiero consultar sobre si..."
                  as="textarea"
                  {...register("mensajeConsulta", {
                    required:
                      "Escribir una consulta para enviar el formulario es obligatorio.",
                    minLength: {
                      value: 5,
                      message: "La consulta debe tener mas de 5 caracteres.",
                    },
                    maxLength: {
                      value: 400,
                      message: "La consulta puede tener hasta 400 caracteres.",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.mensajeConsulta?.message}
                </Form.Text>
              </Form.Group>

              <Button className="btnLogin w-100 fw-bold textos mb-3" type="submit">
                ENVIAR
              </Button>
            </Form>
          </article>

        </section>
      </Container>
    </>
  );
};

export default Contacto;
