import React from "react";
import { Nav, Navbar, NavDropdown, Container,Button } from "react-bootstrap";
import { Link, NavLink,useNavigate} from "react-router-dom";

const Menu = (usuarioLogueado, setUsuarioLogueado) => {
  const navigate =  useNavigate();
  const logout = ()=>{
    localStorage.removeItem('tokenUsuario');
    setUsuarioLogueado({});
    navigate('/')
}
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Brooks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link end as={NavLink} to="/">Inicio</Nav.Link>

            {usuarioLogueado.usuario ? (
                <>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Categorias</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Nuestras Pizzas
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Picadas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Nuestras Pintas
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link end as={NavLink} to="/sobreNosotros">Nosotros</Nav.Link>
            <Button variant='dark' onClick={logout}>
                    Logout
            </Button>
                </>
              ) : (
                <>
            <Nav.Link end as={NavLink} to="/registar">Registrar</Nav.Link>
            <Nav.Link end as={NavLink} to="/login">Login</Nav.Link>
                </>

              )}
              
            <Nav.Link  end as={NavLink} to="/administrar">Administrador</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
