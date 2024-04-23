import Aos from "aos";
import 'aos/dist/aos.css'
import jose from '../../assets/joseVera.webp'
import agus from '../../assets/agusSuarez.webp'
import nati from '../../assets/natiLopez.webp'
import lucas from '../../assets/lucasCapdevila.webp'
import { useEffect } from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";

const QuienesSomos = () => {
  useEffect(() => {
    Aos.init()
  })

  return (
    <main className="mainPage">
      <Carousel id="carouselPrincipal" fade>
        <Carousel.Item>
          <img
            className="img-fluid"
            src="https://images.pexels.com/photos/7821349/pexels-photo-7821349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
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
          <h1 className="text-center fs-1 titulos azul">
            Hotel Mirador del Valle
          </h1>
          <article className="fs-5 textoJustificado textos">
            <p className="mb-4">
              Bienvenido al Hotel Mirador del Valle, un refugio de tranquilidad
              y comodidad donde la elegancia se encuentra con la naturaleza para
              ofrecerte una experiencia inolvidable. Somos un hotel de 3
              estrellas ubicado en el pintoresco valle de Tafí, provincia de
              Tucumán. Nos encontramos a tan solo 107 kms de San Miguel de
              Tucumán.
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

        <section className="my-5">
          <h2 className="text-center fs-1 titulos azul">Nuestra historia</h2>
          <article className="fs-5 my-4 textoJustificado textos">
            <div className="d-flex flex-column flex-xl-row justify-content-center align-items-start">
              <img
                data-aos="fade-right"
                data-aos-duration="2200"
                className="img-fluid mb-4 me-xl-4 imgQuienesSomosHotel"
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/243247791.jpg?k=3c07e955c37818f415ca2e8581a04c94744f46df996ae3281ed5bcf7fff45c12&o=&hp=1"
                alt="Nuestro hotel"
              />
              <p className="mb-4">
                El emblemático edificio del Hotel fue construido en dos etapas.
                La primera en el año 1978, significó un hito en los servicios
                hoteleros de Tafí, ya que el proyecto ofrecía características
                arquitectónicas de singular belleza y calidez, y fue realizado
                empleando madera y otros elementos naturales. Cada detalle del
                diseño fue cuidadosamente considerado para integrarse
                armoniosamente con el paisaje circundante. Las grandes aberturas
                permitían que la luz natural inundara los espacios interiores,
                mientras que las vistas panorámicas del Valle de Tafí se
                convertían en una parte integral de la experiencia de hospedaje.
                El diseño arquitectónico, con sus líneas limpias y su enfoque en
                la simplicidad elegante, atrajo tanto a los viajeros locales
                como a los internacionales en busca de una experiencia única y
                en sintonía con la naturaleza.
              </p>
            </div>
          </article>

          <article className="fs-5 my-4 textoJustificado textos">
            <div className="d-flex flex-column flex-xl-row-reverse justify-content-center align-items-start">
              <img
                data-aos="fade-left"
                data-aos-duration="2200"
                className="img-fluid mb-4 ms-xl-4 imgQuienesSomosHotel"
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/6836911.jpg?k=da8b3433a2b7e003fb4640c44688eae91c890900c3ad3dec440bce5bfeb23468&o=&hp=1"
                alt="Nuestro hotel"
              />
              <p className="mb-4">
                En la segunda etapa, concretada en 1986, se agregaron 20
                habitaciones, entre las cuales destacan las dos Suites y un
                amplio sector de esparcimiento con Sala de TV, Mesa de Juegos y
                un Living para reuniones íntimas, todo esto con ingreso directo
                desde el Estacionamiento semicubierto y el sector de Solárium,
                Quincho y Juegos Infantiles. En el año 2022 se realizó una nueva
                expansión que no solo se limitó a sus instalaciones físicas,
                sino que también se reflejó en su reputación y prestigio en la
                industria hotelera. Se convirtió en un punto de referencia para
                viajeros exigentes que buscaban una experiencia única y
                auténtica en el corazón de Tafí. Desde entonces, el Hotel ha
                seguido evolucionando y adaptándose a las cambiantes necesidades
                de sus huéspedes, pero su compromiso con la excelencia en
                servicio y hospitalidad ha permanecido inquebrantable a lo largo
                de los años. Hoy en día, sigue siendo un destino de ensueño para
                aquellos que buscan una escapada tranquila y lujosa en medio de
                la belleza natural del Valle de Tafí.
              </p>
            </div>
          </article>
        </section>

        <section className="my-5">
          <h2 className="text-center fs-1 titulos azul">
            Privilegios en el Paraíso
          </h2>
          <article className="fs-5 my-4 textoJustificado textos">
            <div className="d-flex flex-column flex-xl-row justify-content-center align-items-start">
              <img
                data-aos="fade-right"
                data-aos-duration="2200"
                className="img-fluid mb-4 me-xl-4 imgQuienesSomosHotel"
                src="https://tafidelvalle.net/wp-content/uploads/2023/09/Tafi_del_Valle_-_postal-1280x720-1.jpg"
                alt="Nuestro hotel"
              />
              <p className="mb-4">
                Todos sabemos que Tafí del Valle está a sólo un paso del Paraíso
                Terrenal, sus paisajes y su clima lo convierten en un destino
                turístico único e inolvidable, lo que no todos saben es que sólo
                algunos privilegiados disfrutan a pleno de todos sus encantos… A
                un paso del centro de la Villa y con el sello inconfundible de
                un ambiente a la vez cálido y refinado, el Hotel Mirador del
                Valle es Tafí en su más pura esencia, un clásico que se renueva
                permanentemente, en su cuidada ambientación que no descuida la
                promoción de artistas y artesanos tucumanos, en su excelente
                cocina que fusiona los sabores de la tierra con platos gourmet
                de prolija elaboración, en la reconocida calidad de su atención,
                y en la calidez de su gente, heredera de la tradicional
                hospitalidad de los Valles. Cuando el destino de sus vacaciones
                está cerca del Paraíso Terrenal, le recomendamos que disfrute de
                todos sus privilegios en Hotel Mirador del Valle, un lugar
                pensado para Usted.
              </p>
            </div>
          </article>
        </section>

        <section className="my-5">
          <h2 className="text-center fs-1 titulos azul">Conócenos</h2>
          <p className="fs-5 my-4 textoJustificado textos">
            En Hotel Mirador del Valle, nos enorgullece presentar a nuestro
            equipo apasionado y dedicado que trabaja incansablemente para
            ofrecer experiencias inolvidables a nuestros huéspedes. Con una
            combinación de talento, experiencia y compromiso, nuestro equipo
            está aquí para hacer que tu estadía sea excepcional en todos los
            sentidos. Desde nuestro equipo directivo hasta nuestro personal de
            servicio, cada miembro aporta su habilidad única y su atención al
            detalle para garantizar que cada momento sea perfecto. Nos
            esforzamos por crear un ambiente acogedor y familiar donde nuestros
            huéspedes se sientan bienvenidos y atendidos en todo momento.
          </p>
          <Row className="d-flex justify-content-evenly align-items-start">
            <Col sm={12} md={6} lg={4} xl={2} className="d-flex flex-column justify-content-center mb-4"  data-aos="flip-left" data-aos-duration="2000">
              <div className="contenedorImgUsuario">
                <img className="img-fluid imgUsuario" src={jose} alt="José Vera, Gerente General de Sucursal" />
              </div>
              <h4 className="text-center fs-3 my-3 titulos azul">José Manuel Vera</h4>
              <p className="text-center fs-5">Gerente General de Sucursal</p>
            </Col>
            <Col sm={12} md={6} lg={4} xl={2} className="d-flex flex-column justify-content-center mb-4"  data-aos="flip-left" data-aos-duration="2000">
              <div className="contenedorImgUsuario">
                <img className="img-fluid imgUsuario" src={lucas} alt="Lucas Capdevila, Encargado de Recepción" />
              </div>
              <h4 className="text-center fs-3 my-3 titulos azul">Lucas Capdevila</h4>
              <p className="text-center fs-5">Encargado de Recepción</p>
            </Col>
            <Col sm={12} md={6} lg={4} xl={2} className="d-flex flex-column justify-content-center mb-4"  data-aos="flip-left" data-aos-duration="2000">
              <div className="contenedorImgUsuario">
                <img className="img-fluid imgUsuario" src={nati} alt="Natalia Lopez, Coordinadora General de Excursiones" />
              </div>
              <h4 className="text-center fs-3 my-3 titulos azul">Natalia G. Lopez</h4>
              <p className="text-center fs-5">Coordinadora General de Excursiones</p>
            </Col>
            <Col sm={12} md={6} lg={4} xl={2} className="d-flex flex-column justify-content-center mb-4"  data-aos="flip-left" data-aos-duration="2000">
              <div className="contenedorImgUsuario">
                <img className="img-fluid imgUsuario" src={agus} alt="Agustina Suarez, Directora de Sistemas y IT" />
              </div>
              <h4 className="text-center fs-3 my-3 titulos azul">Agustina Suarez</h4>
              <p className="text-center fs-5">Directora de Sistemas y IT</p>
            </Col>
          </Row>
        </section>
      </Container>
    </main>
  );
};

export default QuienesSomos;
