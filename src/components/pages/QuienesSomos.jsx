import {
  faBriefcase,
  faDumbbell,
  faFaceSmile,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  Accordion,
  Carousel,
  Container,
  Row,
  Col,
  Button,
  Modal,
} from "react-bootstrap";

const QuienesSomos = () => {
  return (
    <main className="mainPage">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="img-fluid"
            src="https://images.pexels.com/photos/7821349/pexels-photo-7821349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Carousel.Caption>
            <h2 className="fs-1 text-uppercase titulos">El hotel</h2>
            <p className="textosAlternativos">
              Estamos situados en el corazón de los Valles Calchaquíes.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Carousel.Caption>
            <h2 className="fs-1 text-uppercase titulos">Quienes somos</h2>
            <p className="textosAlternativos">
              Hotel Mirador del Valle, tu lugar para descansar.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Carousel.Caption>
            <h2 className="fs-1 text-uppercase titulos">Nuestra misión</h2>
            <p className="textosAlternativos">
              Estamos preparados para brindarte el mejor servicio.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container>
        <section className="my-4">
          <h2 className="text-center fs-1 titulos">Hotel Mirador del Valle</h2>
          <article className="fs-5 textoJustificado textos">
            <p className="mb-4">
              Bienvenido al Hotel Mirador del Valle, donde la elegancia se
              encuentra con la naturaleza para ofrecerte una experiencia
              inolvidable. Ubicado en el pintoresco valle de Tafí, nuestro hotel
              es un refugio de tranquilidad y comodidad.
            </p>
            <p className="mb-4">
              En Mirador del Valle, nos enorgullece brindar un servicio
              excepcional y una atención personalizada para satisfacer las
              necesidades de cada huésped. Nuestro equipo dedicado está
              comprometido a hacer que tu estancia sea lo más placentera
              posible, ofreciendo un ambiente acogedor y familiar.
            </p>
            <p className="mb-4">
              Disfruta de nuestras amplias y confortables habitaciones con
              vistas panorámicas que te cautivarán desde el momento en que
              llegues. Además, nuestras instalaciones cuentan con una variedad
              de servicios y comodidades diseñadas para hacer que tu visita sea
              inolvidable, desde exquisita gastronomía hasta actividades
              recreativas para todas las edades.
            </p>
            <p className="mb-4">
              Ya sea que estés aquí por negocios o placer, en el Hotel Mirador
              del Valle encontrarás todo lo que necesitas para una experiencia
              única. ¡Esperamos darte la bienvenida pronto y convertir tu
              estancia en momentos inolvidables!
            </p>
          </article>
        </section>
      </Container>
    </main>
  );
};

export default QuienesSomos;
