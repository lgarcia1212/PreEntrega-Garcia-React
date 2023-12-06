import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../NavBar/Logo';
import { Link } from 'react-router-dom';
import '../../App.css'

function NavBar() {
  return (
    <div className='container-fluid'>
      <Navbar bg="light" data-bs-theme="light">
        <Container  className='navbar'>
          <Navbar.Brand to="/" className='navbar__logo'> <Logo /> </Navbar.Brand>
          <Nav className="navbar__links-container">
            <Link to="/" className='navbar__links-container__links'>Inicio</Link>
            <Link to="/category/tinto" className='navbar__links-container__links'>Tinto</Link>
            <Link to="/category/blanco" className='navbar__links-container__links'>Blanco</Link>
            <Link to="/category/rosado" className='navbar__links-container__links'>Rosado</Link>
          </Nav>
          <Link to="/cart"> <CartWidget /> </Link>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;