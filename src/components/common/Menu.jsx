import {Navbar, Container, Nav} from 'react-bootstrap'
import logo from "../../assets/iconNav.png"
import { Link, NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <>
          <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Brand as={Link} to="/">
               
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <NavLink end className="nav-link" to="/">INICIO</NavLink>
                  <NavLink end className="nav-link" to="/quienesSomos">EL HOTEL</NavLink>
                  <NavLink end className="nav-link" to="/galeriadeimagenes">GALERIA</NavLink>
                  <NavLink end className="nav-link" to="/habitaciones">HABITACIONES</NavLink>
                  <NavLink end className="nav-link" to="/contacto">CONTACTO</NavLink>
                  <NavLink end className="nav-link" to="/registro">REGISTRO</NavLink>
                  <NavLink end className="nav-link" to="/administrador">ADMINISTRADOR</NavLink>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar> 
        </>
    );
};

export default Menu;