import { Navbar, Container, Nav, Button } from "react-bootstrap";
import logo from "../../assets/iconNav.png";
import { Link, NavLink, useNavigate } from 'react-router-dom';
const Menu = ({ usuarioLogueado, setUsuarioLogueado }) => {
  const navegacion = useNavigate();
  const logout = ()=>{
    sessionStorage.removeItem('inicioHotelMiradorDelValle')
    setUsuarioLogueado("");
    navegacion('/');
  }
  
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src={logo}
              height={85}
              alt="logo del hotel mirador del valle"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink end className="nav-link" to="/">
                INICIO
              </NavLink>
              <NavLink end className="nav-link" to="/quienesSomos">
                EL HOTEL
              </NavLink>
              <NavLink end className="nav-link" to="/galeriadeimagenes">
                GALERIA
              </NavLink>
              <NavLink end className="nav-link" to="/habitaciones">
                HABITACIONES
              </NavLink>
              <NavLink end className="nav-link" to="/contacto">
                CONTACTO
              </NavLink>
              {usuarioLogueado.length > 0 ? (
              <>
                <NavLink end className="nav-link" to="/administrador">
                  ADMINISTRADOR
                </NavLink>
                <Button className="nav-link" variant="link" onClick={logout}>CERRAR SESION</Button>
              </>
            ) : (
              <NavLink end className="nav-link" to="/login">
                LOGIN
              </NavLink>
            )}
              <NavLink end className="nav-link" to="/registro">
                REGISTRO
              </NavLink>
            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );

};

export default Menu;
