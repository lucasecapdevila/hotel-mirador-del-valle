import { Container, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const Contacto = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      user_name: '',
      user_email: '',
      consulta: '',
    },
  })

  const form = useRef();

  const sendEmail = () => {
    emailjs
      .sendForm('service_58pt40w', 'template_wpbthn6', form.current, {
        publicKey: 'rjGqT4RLJZlCmkRSd',
      })
      .then(() => {
        Swal.fire({
          title: "Consulta Enviada!!",
          text: `Su consulta ya fue enviada, responderemos a la brevedad!!.`,
          icon: "success",
        });
        reset()
      })
      .catch((error) => {
        Swal.fire({
          title: "Lo sentimos, ocurrió un error",
          text: `Su consulta NO fue enviada, intentelo mas tarde. Gracias y disculpa!.`,
          icon: "error",
        });
      });
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

            <Form ref={form} onSubmit={handleSubmit(sendEmail)}>
              <Form.Group className="mb-3" controlId="user_name">
                <Form.Label className="textos fw-bold">
                  Nombre Completo:
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ej: Juan Perez"
                  {...register("user_name", {
                    required:
                      'El nombre completo es obligatorio.',
                    minLength: {
                      value: 5,
                      message: 'Debe ingresar como mínimo 5 carácteres para el nombre.',
                    },
                    maxLength: {
                      value: 45,
                      message: 'Debe ingresar como mínimo 5 carácteres para el nombre.',
                    },
                    pattern: {
                      value:
                      /^[a-zA-Z ]+$/gm,
                      message: 'El nombre no puede llevar carácteres ni números.',
                    }
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.user_name?.message}
                </Form.Text>
              </Form.Group>



              {/* /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/ */}

              <Form.Group className="mb-3" controlId="user_email">
                <Form.Label className="textos fw-bold">Email:</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ej: juan_perez@gmail.com"
                  {...register("user_email", {
                    required: "El email es obligatorio",
                    minLength: {
                      value: 4,
                      message:
                        "El email debe contener al menos 4 carácteres",
                    },
                    maxLength: {
                      value: 250,
                      message:
                        "El email debe contener como máximo 250 carácteres",
                    },
                    pattern: {
                      value:
                        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                      message:
                        "Ingrese una dirección de correo electrónico válida",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.user_email?.message}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="consulta">
                <Form.Label className="textos fw-bold">Consulta:</Form.Label>
                <Form.Control
                  className="formConsulta"
                  type="text"
                  placeholder="Ej: Quiero consultar sobre..."
                  as="textarea"
                  {...register("consulta", {
                    required:
                      "La consulta es obligatoria.",
                    minLength: {
                      value: 10,
                      message:
                        "Debe ingresar como mínimo 10 carácteres para la consulta.",
                    },
                    maxLength: {
                      value: 200,
                      message:
                        "Debe ingresar como máximo 200 carácteres para la consulta.",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.consulta?.message}
                </Form.Text>
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
