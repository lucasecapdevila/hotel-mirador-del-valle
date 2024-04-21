import { Carousel, Container } from "react-bootstrap";

const QuienesSomos = () => {
  return (
    <main className="mainPage">
      <Carousel fade>
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
          <h1 className="text-center fs-1 titulos">Hotel Mirador del Valle</h1>
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
          <h2 className="text-center fs-1 titulos">Nuestra historia</h2>
          <article className="fs-5 my-4 textoJustificado textos">
            <div className="d-flex flex-column flex-xl-row justify-content-center align-items-start">
              <img
                className="img-fluid mb-4 me-xl-4 imgEntradaHotel"
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
                className="img-fluid mb-4 ms-xl-4 imgEntradaHotel"
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/6836911.jpg?k=da8b3433a2b7e003fb4640c44688eae91c890900c3ad3dec440bce5bfeb23468&o=&hp=1"
                alt="Nuestro hotel"
              />
              <div>
                <p className="mb-4">
                  En la segunda etapa, concretada en 1986, se agregaron 20
                  habitaciones, entre las cuales destacan las dos Suites y un
                  amplio sector de esparcimiento con Sala de TV, Mesa de Juegos
                  y un Living para reuniones íntimas, todo esto con ingreso
                  directo desde el Estacionamiento semicubierto y el sector de
                  Solárium, Quincho y Juegos Infantiles. En el año 2022 se
                  realizó una nueva expansión que no solo se limitó a sus
                  instalaciones físicas, sino que también se reflejó en su
                  reputación y prestigio en la industria hotelera. Se convirtió
                  en un punto de referencia para viajeros exigentes que buscaban
                  una experiencia única y auténtica en el corazón de Tafí. Desde
                  entonces, el Hotel ha seguido evolucionando y adaptándose a
                  las cambiantes necesidades de sus huéspedes, pero su
                  compromiso con la excelencia en servicio y hospitalidad ha
                  permanecido inquebrantable a lo largo de los años. Hoy en día,
                  sigue siendo un destino de ensueño para aquellos que buscan
                  una escapada tranquila y lujosa en medio de la belleza natural
                  del Valle de Tafí.
                </p>
              </div>
            </div>
          </article>
        </section>
      </Container>
    </main>
  );
};

export default QuienesSomos;
