import {Navbar, Container, Nav} from 'react-bootstrap'
import logo from "../../assets/iconNav.png"

const Menu = () => {
    return (
        <>
          <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} height={80} alt="logo del hotel mirador del valle" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">El hotel</Nav.Link>
            <Nav.Link href="#link">Contacto</Nav.Link>
            <Nav.Link href="#link">Galeria</Nav.Link>
            <Nav.Link href="#link">Habitaciones</Nav.Link>
            <Nav.Link href="#link">Registro</Nav.Link>
            <Nav.Link href="#link">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>   
        </>
    );
};

export default Menu;