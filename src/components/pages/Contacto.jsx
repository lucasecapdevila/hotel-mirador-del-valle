import { Container, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

const Contacto = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_58pt40w', 'template_wpbthn6', form.current, {
        publicKey: 'rjGqT4RLJZlCmkRSd',
      })
      .then(
        () => {
          Swal.fire(`Consulta Enviada!`, `Responderemos a la brevedad!`, "success");
          form.current.reset()
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      console.log(mensajeEnviado);
  };

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

            <Form ref={form} onSubmit={sendEmail}>
              <Form.Group className="mb-3" controlId="userName">
                <Form.Label className="textos fw-bold">
                  Nombre Completo:
                </Form.Label>
                <Form.Control
                name="user_name"
                  type="text"
                  placeholder="Ej: Juan Perez"
                  as="textarea"
                  className="textareaForm"
                  required
                  minLength={5}
                  maxLength={45}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="textos fw-bold">Email:</Form.Label>
                <Form.Control
                 name="user_email"
                  type="email"
                  placeholder="Ej: juan_perez@gmail.com"
                  required
                  minLength={4}
                  maxLength={200}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="userName">
                <Form.Label className="textos fw-bold">Consulta:</Form.Label>
                <Form.Control
                 name="message"
                  id="formConsulta"
                  type="text"
                  placeholder="Ej: Quiero consultar sobre si..."
                  as="textarea"
                  required
                  minLength={10}
                  maxLength={500}
                />
              </Form.Group>

              <Button className="btnLogin w-100 fw-bold textos mb-3" type="submit" value="Send">
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
