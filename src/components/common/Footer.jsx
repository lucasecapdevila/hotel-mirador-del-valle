import { Container } from 'react-bootstrap'
import logo from "../../assets/iconWhite.png"

const Footer = () => {
    return (
        <>
        <footer className="bg-dark text-light py-3 d-flex justify-content-center">
        <Container className='footerdiv row'>
        <div className="col-lg-3 col-md-3">
        <img src={logo} alt="logo mirador del valle hotel" className='mt-lg-4 footerimg'/>
        </div>
        <div className="col-lg-4 mx-lg-auto col-md-4 mx-md-auto">
        <h4 className="footerTitulo mt-2">CONTÁCTANOS</h4>
        <p className='footerTexto'>Info footer</p>
        <p className='footerTexto'>Info footer</p>
        <p className='footerTexto'>Info footer</p>
        </div>
        <div className="col-lg-4 col-md-4">
        <p className='footerTexto'>Info footer</p>
        <p className='footerTexto'>Info footer</p>
        <p className='footerTexto'>Info footer</p>
        </div>
        </Container>
        </footer>
        </>
    );
};

export default Footer;