import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router";
import heroImage from "../assets/hero.png";

function NavBar({ favoritesCount }) {
  return (
    <Navbar
      variant="dark"
      expand="lg"
      style={{
        backgroundColor: "var(--re-navbar)",
      }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={heroImage}
            alt="Rick and Morty logo"
            style={{ height: "120px " }}
          />
        </Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/characters">
            Characters
          </Nav.Link>
          <Nav.Link as={Link} to="favorites">
            Favorites ({favoritesCount})
          </Nav.Link>
          <Nav.Link as={Link} to="review">
            Review
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
