import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./NavBar.css";

function NavBar() {
    return (
    <Navbar bg="dark" expand="lg">
        <Container className='navbar-dark bg-dark'>
        <Navbar.Brand href="#home">Aleciram</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#home">Shop</Nav.Link>
            <Nav.Link href="#link">Contacto</Nav.Link>
            <NavDropdown title="Cursos" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Curso 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Curso 2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Curso 3</NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}

export default NavBar;