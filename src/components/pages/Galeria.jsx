import { Container } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import Carousel from "react-bootstrap/Carousel";
import "react-image-gallery/styles/css/image-gallery.css";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import imagen1 from "../../assets/galeria1.jpg";
import imagen2 from "../../assets/galeria2.jpg";
import imagen3 from "../../assets/galeria3.jpg";
import imagen4 from "../../assets/galeria4.jpg";
import imagen5 from "../../assets/galeria5.jpg";
import imagen6 from "../../assets/galeria6.jpg";
import imagen7 from "../../assets/galeria7.jpg";
import imagen8 from "../../assets/galeria8.jpg";
import imagen9 from "../../assets/galeria9.avif";
import imagen10 from "../../assets/galeria10.jpg";

const Galeria = () => {
  const [show1, img1Show] = useState(false);
  const [show2, img2Show] = useState(false);
  const [show3, img3Show] = useState(false);
  const [show4, img4Show] = useState(false);
  const [show5, img5Show] = useState(false);
  const [show6, img6Show] = useState(false);
  const [show7, img7Show] = useState(false);
  const [show8, img8Show] = useState(false);

  const images = [
    {
      original: imagen1,

      thumbnail: imagen1,
    },
    {
      original: imagen2,

      thumbnail: imagen2,
    },
    {
      original: imagen3,

      thumbnail: imagen3,
    },
    {
      original: imagen4,

      thumbnail: imagen4,
    },
    {
      original: imagen5,

      thumbnail: imagen5,
    },
  ];

  const images2 = [
    {
      original: imagen6,
      thumbnail: imagen6,
    },
    {
      original: imagen7,
      thumbnail: imagen7,
    },
    {
      original: imagen8,
      thumbnail: imagen8,
    },
    {
      original: imagen9,
      thumbnail: imagen9,
    },
    {
      original: imagen10,

      thumbnail: imagen10,
    },
  ];

  return (
    <>
      <Carousel id="carouselPrincipal" fade>
        <Carousel.Item>
          <img
            className="img-fluid"
            src="https://th.bing.com/th/id/R.5b37faf8cc966e41e8465b589b639c74?rik=YcRS4yQ6ICHHfQ&pid=ImgRaw&r=0"
            alt="imagen de vista de tafi del valle, con catus y un hermoso paisaje"
          />
          <Carousel.Caption>
            <h2 className="fs-1 text-uppercase titulos">GALERIA DE IMAGENES</h2>
            <hr />
            <p className="textosAlternativos">
              “La tranquilidad y el confort son nuestros pilares fundamentales.”
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://th.bing.com/th/id/R.9c52c9c4b667afb0b4c92b685978f440?rik=gMc9iQqWYIK8Bg&pid=ImgRaw&r=0" 
          alt="imagen de paisaje de tafi del valle, montañas y renovacion"/>
          <Carousel.Caption>
            <h2 className="fs-1 text-uppercase titulos">Valles Calchaquies</h2>
            <hr />
            <p className="textosAlternativos">
              “La belleza de nuestro entorno se fusiona con el confort de
              nuestras instalaciones.”
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <section className="galeriacolor1 p-3">
        <Container className="d-flex galeriaIMG">
          <article className="col-lg-3 mb-1 ">
            <a href="#!" onClick={() => img1Show(true)}>
              <img title="Habitacion Doble"
                className="w-100 mb-2 rounded"
                src="https://webbox.imgix.net/images/tgvirijswhqazimw/15f2acc4-6011-42ed-9306-a55780d38ef8.jpeg?auto=format,compress&fit=crop&crop=entropy&w=1318"
                alt="habitacion del hotel doble, con dos camas matrimoniales"
              />
            </a>
          </article>
          <article className="col-lg-3 mb-1 ms-2">
            <a href="#!" onClick={() => img2Show(true)}>
              <img title="Habitacion Deluxe"
                className="w-100 mb-2 rounded"
                src="https://th.bing.com/th/id/R.da812afc5e9c5249d36e06f19200601e?rik=Yang08J6h2qevg&riu=http%3a%2f%2fwww.hotelalmirante.com%2fwp-content%2fuploads%2f2016%2f09%2falmirante_alta_editadas-9160.jpg&ehk=9x%2b2pHEqZlVtei4ydS3QIPSVyuHISRi22UWP2FeNcXw%3d&risl=&pid=ImgRaw&r=0"
                alt="habitacion del hotel deluxe, con tres camas individuales ideal para pasar con amigos"
              />
            </a>
          </article>
          <article className="col-lg-3 mb-1 ms-2">
            <a href="#!" onClick={() => img3Show(true)}>
              <img title="Habitacion Suite"
                className="w-100 mb-2 rounded"
                src="https://www.wyndhampolanco.com/img/galeria/HABITACIONES/2020/WHYNDHAM-POLANCO-HAB-DOB-A.jpg"
                alt="habitaciones suite, con la mejor calidad de dos camas y un televisor de 45 pulgadas"
              />
            </a>
          </article>
          <article className="col-lg-3 mb-1 ms-2">
            <a href="#!" onClick={() => img4Show(true)}>
              <img title="Habitacion Twin"
                className="w-100 mb-2 rounded"
                src="https://i.pinimg.com/originals/4d/64/67/4d64679bfd445492de4e7ed92cb66873.jpg"
                alt="habitaciones twin, individuales para amigos"
              />
            </a>
          </article>
        </Container>
      </section>

      <section className="galeriacolor1 p-3">
        <Container className="d-flex galeriaIMG">
          <article className="col-lg-3 mb-1 ">
            <a href="#!" onClick={() => img5Show(true)}>
              <img title="Restaurante"
                className="w-100 mb-2 rounded"
                src="https://images.pexels.com/photos/1449773/pexels-photo-1449773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="restaurante del hotel, para pasar todos tus ratos"
              />
            </a>
          </article>
          <article className="col-lg-3 mb-1 ms-2">
            <a href="#!" onClick={() => img6Show(true)}>
              <img title="Gimnasio"
                className="w-100 mb-2 rounded"
                src="https://images.pexels.com/photos/6796964/pexels-photo-6796964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="gimnasio del hotel, con maquinas, pesas y todo lo necesario que tiene un gimnasio"
              />
            </a>
          </article>
          <article className="col-lg-3 mb-1 ms-2">
            <a href="#!" onClick={() => img7Show(true)}>
              <img title="Piscina"
                className="w-100 mb-2 rounded"
                src="https://images.pexels.com/photos/462129/pexels-photo-462129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="piscina grande del hotel donde se reflejan palmeras de fondo y sillones para tomar sol"
              />
            </a>
          </article>
          <article className="col-lg-3 mb-1 ms-2">
            <a href="#!" onClick={() => img8Show(true)}>
              <img title="Paisajes/Vistas"
                className="w-100 mb-2 rounded"
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/47/c6/b5/hotel-waynay-killa.jpg?w=700&h=-1&s=1"
                alt="balcon del hotel donde se ve una hermosa vista a los valles calchaquies"
              />
            </a>
          </article>
        </Container>
      </section>
      <section className="galeriacolor2 p-3">
        <Container className="d-flex align-items-center justify-content-center carruselIMG">
          <article className="col-lg-4">
            <h2 className="titulos fw-normal tituloGaleria">Nuestro Hotel</h2>{" "}
            <hr />
          </article>
          <article className="col-lg-8">
            <div id="carruselIMG">
              <ImageGallery
                items={images}
                slideInterval={2000}
                slideDuration={1000}
                thumbnailPosition="left"
                fullscreen
              ></ImageGallery>
            </div>
          </article>
        </Container>
      </section>

      <section className="galeriacolor1 p-3">
        <Container className="d-flex align-items-center justify-content-center carruselIMG">
          <article className="col-lg-8">
            <div id="carruselIMG">
              <ImageGallery
                items={images2}
                slideInterval={2000}
                slideDuration={1000}
                thumbnailPosition="left"
              ></ImageGallery>
            </div>
          </article>
          <article className="col-lg-4">
            <h2 className="titulos fw-normal text-center tituloGaleria my-2">
              Valles Calchaquies
            </h2>
            <hr />
          </article>
        </Container>
      </section>

      <Modal
        show={show1}
        onHide={() => img1Show(false)}
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton className="modalCard">
          <Modal.Title id="example-custom-modal-styling-title">
            Habitaciones Dobles
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalCard">
          <Carousel slide={false} className="carruselModal">
            <Carousel.Item>
              <img className="carruselModal"
                src="https://webbox.imgix.net/images/tgvirijswhqazimw/15f2acc4-6011-42ed-9306-a55780d38ef8.jpeg?auto=format,compress&fit=crop&crop=entropy&w=1318"
                alt="habitacion del hotel doble, con camas matrimoniales y decoradas con un cuadro"
              />
              <Carousel.Caption>
                <p>Conoce nuestras Habitaciones!!</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="carruselModal"
                src="https://webbox.imgix.net/images/tgvirijswhqazimw/82bf24d5-0e27-48b0-9deb-edbbdf07f056.jpeg?auto=format,compress&fit=crop&crop=entropy&w=1318"
                alt="habitacion del hotel doble, con camas matrimoniales"
              />
              <Carousel.Caption>
                <p>Habitaciones Dobles</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="carruselModal"
                src="https://webbox.imgix.net/images/tgvirijswhqazimw/26591600-99f5-45e2-a3e1-ba09b85f6a5a.jpeg?auto=format,compress&fit=crop&crop=entropy&w=1318"
                alt="habitacion del hotel doble, con television mediana"
              />
              <Carousel.Caption>
                <p>Comodidad y Elegancia</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Modal.Body>
      </Modal>

      <Modal
        show={show2}
        onHide={() => img2Show(false)}
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton className="modalCard">
          <Modal.Title id="example-custom-modal-styling-title">
            Habitaciones Deluxe
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalCard">
          <Carousel slide={false} className="carruselModal">
            <Carousel.Item>
              <img className="carruselModal"
                src="https://th.bing.com/th/id/R.da812afc5e9c5249d36e06f19200601e?rik=Yang08J6h2qevg&riu=http%3a%2f%2fwww.hotelalmirante.com%2fwp-content%2fuploads%2f2016%2f09%2falmirante_alta_editadas-9160.jpg&ehk=9x%2b2pHEqZlVtei4ydS3QIPSVyuHISRi22UWP2FeNcXw%3d&risl=&pid=ImgRaw&r=0"
                alt="habitacion del hotel deluxe, para pasar con amigos"
              />
              <Carousel.Caption>
                <p>Para pasar con amigos!</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="carruselModal"
                src="https://cdn2.paraty.es/ohtels-villaromana/images/a80bc241bb565f4=s1900"
                alt="habitacion del hotel deluxe, tres camas, tele pequeña, vista al paisaje"
              />
              <Carousel.Caption>
                <p>Sentite como en casa!</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="carruselModal"
                src="https://th.bing.com/th/id/OIP.kwZlfVoiOhpAvDaf_qlN5QHaE8?rs=1&pid=ImgDetMain"
                alt="habitacion del hotel deluxe, cuatro camas con armario"
              />
              <Carousel.Caption>
                <p>Con las buenas compañias</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Modal.Body>
      </Modal>

      <Modal
        show={show3}
        onHide={() => img3Show(false) }
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton className="modalCard">
          <Modal.Title id="example-custom-modal-styling-title">
            Habitaciones Suite
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalCard">
          <Carousel slide={false} className="carruselModal">
            <Carousel.Item>
              <img className="carruselModal"
                src="https://www.wyndhampolanco.com/img/galeria/HABITACIONES/2020/WHYNDHAM-POLANCO-HAB-DOB-A.jpg"
                alt="habitacion del hotel suite, dos camas y televisor grande con vista al balcon"
              />
              <Carousel.Caption>
                <p>Suite</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="carruselModal"
                src="https://th.bing.com/th/id/OIP.WliN4IBfnzkH0gRUeJ-6EAHaE8?rs=1&pid=ImgDetMain"
                alt="habitacion del hotel suite, elegante, dos camas y tv"
              />
              <Carousel.Caption>
                <p>La mejor Comodidad</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="carruselModal"
                src="https://www.wyndhampolanco.com/img/galeria/HABITACIONES/2020/WHYNDHAM-POLANCO-WC2.jpg"
                alt="habitacion del hotel suite, baño limpio, comodo y cuidado"
              />
              <Carousel.Caption>
                <p>La mas solicitada</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Modal.Body>
      </Modal>

      <Modal
        show={show4}
        onHide={() => img4Show(false)}
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton className="modalCard">
          <Modal.Title id="example-custom-modal-styling-title">
            Habitaciones Twin
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalCard">
          <Carousel slide={false} className="carruselModal">
            <Carousel.Item>
              <img className="carruselModal"
                src="https://i.pinimg.com/originals/4d/64/67/4d64679bfd445492de4e7ed92cb66873.jpg"
                alt="habitacion del hotel twin, para sentirse como en casa"
              />
              <Carousel.Caption>
                <p>Twins</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="carruselModal"
                src="https://i.pinimg.com/originals/06/1e/04/061e04e5dd074a322ed3ff79fd84fece.jpg"
                alt="habitacion del hotel twin, tres camas, con tv"
              />
              <Carousel.Caption>
                <p>Disfruten su estancia!</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="carruselModal"
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/0d/4f/d6/mision-aguascalientes.jpg?w=400&h=300&s=1"
                alt="habitacion del hotel twin, dos camas, comoda"
              />
              <Carousel.Caption>
                <p>Oasis de descanso</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Modal.Body>
      </Modal>

      <Modal
        show={show5}
        onHide={() => img5Show(false)}
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton className="modalCard">
          <Modal.Title id="example-custom-modal-styling-title">
            Restaurante
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalCard">
          <Carousel slide={false} className="carruselModal">
            <Carousel.Item>
              <img className="carruselModal"
                src="https://hotelmiradordeltafi.com.ar/images/gallery/restaurante.jpg"
                alt="restaurante del hotel"
              />
              <Carousel.Caption>
                <p>Restaurante</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="carruselModal"
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/14/b4/62/mirador-del-tafi-hotel.jpg?w=1400&h=-1&s=1"
                alt="servicio de comidas hotel, todo tipos de comidas para la mañana, tarde y noche"
              />
              <Carousel.Caption>
                <p>Servicio a la habitacion</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Modal.Body>
      </Modal>

      <Modal
        show={show6}
        onHide={() => img6Show(false)}
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton className="modalCard">
          <Modal.Title id="example-custom-modal-styling-title">
            Gimnasio
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalCard">
          <Carousel slide={false} className="carruselModal">
            <Carousel.Item>
              <img className="carruselModal"
                src="https://th.bing.com/th/id/R.d76e6e87395e064af655ec38f4ad2d44?rik=5%2fXcTmQzw7MibQ&riu=http%3a%2f%2fwww.thesukosol.com%2fwp-content%2fuploads%2f2018%2f02%2factivity1.jpg&ehk=dCmzG6XU5Y9Gif%2bBzCiHIYFjltUNC7Va%2f4XodNuq2LA%3d&risl=&pid=ImgRaw&r=0"
                alt="gym del hotel, maquinas caminadoras, pesas"
              />
              <Carousel.Caption>
                <p>Mantenete en forma en tus vacaciones!</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="carruselModal"
                src="https://th.bing.com/th/id/OIP.G93O_vD_otvtKIiMCAYeXQHaEK?w=768&h=432&rs=1&pid=ImgDetMain"
                alt="gym del hotel, maquinas caminadoras"
              />
              <Carousel.Caption>
                <p>Totalmente gratuito</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Modal.Body>
      </Modal>

      <Modal
        show={show7}
        onHide={() => img7Show(false)}
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton className="modalCard">
          <Modal.Title id="example-custom-modal-styling-title">
            Piscina
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalCard">
          <Carousel slide={false} className="carruselModal">
            <Carousel.Item>
              <img className="carruselModal"
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1e/19/a1/ca/hotel-colonial-tafi-del.jpg?w=1400&h=-1&s=1"
                alt="piscina con vista al valle del hotel"
              />
              <Carousel.Caption>
                <p>Divertite!</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="carruselModal"
                src="https://th.bing.com/th/id/OIP.UG4YBcBqf0RusKMM5-YMWAHaFj?w=800&h=600&rs=1&pid=ImgDetMain"
                alt="piscina con hermosa vista al valle"
              />
              <Carousel.Caption>
                <p>Refrescate con una hermosa vista!</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Modal.Body>
      </Modal>

      <Modal
        show={show8}
        onHide={() => img8Show(false)}
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton className="modalCard">
          <Modal.Title id="example-custom-modal-styling-title">
            Valles Calchaquies
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalCard">
          <Carousel slide={false} className="carruselModal">
            <Carousel.Item>
              <img className="carruselModal"
                src="https://conocedores.com/wp-content/uploads/2021/09/valles-calchaquies-tucuman-30092021in3.jpg"
                alt="valles calchaquies de noche, con las estrellas iluminando"
              />
              <Carousel.Caption>
                <p>Disfruta de las vistas</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="carruselModal"
                src="https://th.bing.com/th/id/OIP.O8ME_2kNgKyInsk0ueNLaAHaE7?rs=1&pid=ImgDetMain"
                alt="tafi del valle camino que te lleva al cerro"
              />
              <Carousel.Caption>
                <p>De nuestro hermoso Tucuman</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Galeria;
