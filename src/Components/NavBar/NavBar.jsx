import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../NavBar/Logo';

function NavBar() {
  return (
    <div class="d-flex justify-content-center">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home"> <Logo /> </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">Vinos</Nav.Link>
            <Nav.Link href="#pricing">Accesorios</Nav.Link>
            <Nav.Link href="#pricing">Combos</Nav.Link>
            <Nav.Link href="#pricing"> <CartWidget /> </Nav.Link>

          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;