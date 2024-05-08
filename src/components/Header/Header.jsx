import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import logo from './../../assets/img/Logo.png';

export function Header() {
  return (
    <Navbar expand="lg" className=" bg-navbar">
      <Container >
        <Navbar.Brand className="logo" href="#home">
          <img src={logo} className="Logo-imagem" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" links">
            <Nav.Link href="#home">Precificação</Nav.Link>
            <Nav.Link href="#link">Ingredientes</Nav.Link>
            <Nav.Link href="#link">Preço final</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
