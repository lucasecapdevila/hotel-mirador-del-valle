import { Navbar, Container, Nav, Button } from "react-bootstrap";
import logo from "../../assets/iconNav.png";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
const Menu = ({ usuarioLogueado, setUsuarioLogueado }) => {
  const navegacion = useNavigate();
  const logout = ()=>{
    Swal.fire({
      title: "Cerrar sesión",
      text: "¿Estás seguro que deseas cerrar sesión?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#aca650",
      cancelButtonColor: "hsl(0, 71.42857142857143%, 66%)",
      confirmButtonText: "Si, deseo salir",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Saliste !",
          text: "Tu sesión se cerró exitosamente",
          icon: "success"
        });
        sessionStorage.removeItem('inicioHotelMiradorDelValle')
        setUsuarioLogueado({});
        navegacion('/');
      }
    });
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
                HOTEL
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
<<<<<<< HEAD
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
            
=======
              {usuarioLogueado.email ? (
                 usuarioLogueado.rol === "Administrador" ? (
                   <>
                   <NavLink
                     end
                     className="nav-link "
                     to="/administrador"
                   >
                     ADMINISTRADOR
                   </NavLink>
                   <Button className="nav-link" variant="link" onClick={logout}>CERRAR SESION</Button>
                 </>
                ):( 
                    <Button className="nav-link" variant="link" onClick={logout}>CERRAR SESION</Button> 
                  )
                ):(
                
                  <>

                    <NavLink
                      end
                      className="nav-link "
                      to="/Login"
                    >
                      LOGIN
                    </NavLink>
                  </>
                )}
>>>>>>> dev
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );

};

export default Menu;
