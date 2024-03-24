import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from "react-router-bootstrap";

export default function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark"
    data-bs-theme="dark">
      <Container>
      <LinkContainer className="link-primary" to="/">
            <Navbar.Brand>Awesome Shop</Navbar.Brand>
          </LinkContainer>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <LinkContainer className="link-primary" to="/">
            <Nav.Link>Home</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}