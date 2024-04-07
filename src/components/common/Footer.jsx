import { Container } from 'react-bootstrap'
import logo from "../../assets/iconWhite.png"
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import grupo2 from "../../assets/diseñoweb-grupo2.png"

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
        <hr/>
        <p className='footerTexto mb-0'><strong>Hotel Mirador Del Valle - Tafi Del Valle</strong></p>
        <p className='footerTexto mt-0'>Ubicado en el corazón de los <em>Valles Calchaquíes, Tucumán</em></p>
        <p className='footerTexto '>Celular para consultas: <a href="tel:+543816076542" title='Numero de Celular/WhatsApp' className='text-white link-underline link-underline-opacity-0'>3816076542</a></p>
        <p className='footerTexto'><a href="mailto:hotelmiradordelvalle.25.07@gmail.com" title='Correo Electronico' className='text-light link-underline link-underline-opacity-0 fw-semibold gmailText'>hotelmiradordelvalle.25.07@gmail.com</a></p>
        </div>
        <div className="col-lg-4 col-md-4">
        <h4 className='footerTitulo mt-2'>REDES SOCIALES</h4>
        <hr />
        <a href="https://www.instagram.com/hotelmiradordelvalle/" target="_blank" className='me-3'>
        <FaInstagram style={{color: 'white', fontSize: '45px'}}/>
        </a>
        <a href="https://www.facebook.com/profile.php?id=61558151730710&mibextid=kFxxJD" target="_blank">
        <FaFacebook style={{color: 'white', fontSize: '45px'}}/>
        </a>
        <p className='footerTexto'><i class="bi bi-instagram"></i></p>
        <p className='footerTitulo2 mb-lg-0'>SITIO GESTIONADO POR:</p>
        <hr className='mt-0'/>
        <a href='https://github.com/lucasecapdevila/hotel-mirador-del-valle-frontend' target="_blank"><img src={grupo2} width={260} alt="logo rolling code grupo 2 - c76i"/></a>
        </div>
        </Container>
        </footer>
        </>
    );
};

export default Footer;