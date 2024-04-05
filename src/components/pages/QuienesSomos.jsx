import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';

const QuienesSomos = () => {
  return (
    <main className='mainPage'>
      <Carousel fade>
        <Carousel.Item>
          <img className='img-fluid' src="https://images.pexels.com/photos/5118088/pexels-photo-5118088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Carousel.Caption>
            <h2 className='titulos'>El hotel</h2>
            <p className='textos'>Estamos situados en el corazón de los Valles Calchaquíes.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://images.pexels.com/photos/1537577/pexels-photo-1537577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Carousel.Caption>
            <h2 className='titulos'>Quienes somos</h2>
            <p className='textos'>Hotel Mirador del Valle, tu lugar para descansar.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://images.pexels.com/photos/9290787/pexels-photo-9290787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Carousel.Caption>
            <h2 className='titulos'>Nuestra misión</h2>
            <p className='textos'>Estamos preparados para brindarte el mejor servicio.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container>
        asd
      </Container>
    </main>
  )
}

export default QuienesSomos