import { Container } from 'react-bootstrap'


const Footer = () => {
    return (
        <>
        <footer className="text-center bg-dark text-light py-3">
        <Container className='d-flex justify-content-center footerdiv'>
        <div className="bg-primary col-sm-12 col-md-3 col-lg-3">
        <p>Parrafo </p>
        <p>Parrafo</p>
        <p>Parrafo </p>
        </div>
        <div className="bg-primary col-sm-12 col-md-3 col-lg-3 mx-lg-3">
        <p>Info footer</p>
        <p>Info footer</p>
        <a href="mailto:hotelmiradordelvalle.25.07@gmail.com" className='text-light'>hotelmiradordelvalle.25.07@gmail.com</a>
        </div>
        <div className="bg-primary col-sm-12 col-md-3 col-lg-3">
        <p>Info footer</p>
        <p>Info footer</p>
        <p>Info footer</p>
        </div>
        <div className="bg-primary col-sm-12 col-md-3 col-lg-3 ms-lg-3">
        <p>Info footer </p>
        <p>Info footer </p>
        <p>Info footer </p>
        </div>
        </Container>
        </footer>
        </>
    );
};

export default Footer;