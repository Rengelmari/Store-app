import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import "./navBar.css";

function NavBar() {
    return (
    <Navbar bg="dark" expand="lg">
        <Container className='navbar-dark bg-dark'>
        <Navbar.Brand href="#home">Aleciram</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Link to= {`/productos`} className="navItem">Shop</Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
                <NavDropdown.Item>
                    <Link to= {`/productos`} className="navItem">Earrings</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                    <Link to= {`/productos`} className="navItem">Necklace</Link>
                </NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        <div>
        <CartWidget/>
        </div>
        
        </Container>
    </Navbar>
    );
}

export default NavBar;