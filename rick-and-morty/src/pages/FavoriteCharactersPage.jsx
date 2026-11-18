import { Col, Container, Row } from "react-bootstrap";
import { useOutletContext } from "react-router";
import CharacterCard from "../components/CharacterCard.jsx";

function FavoriteCharactersPage() {
  const { favorites } = useOutletContext();

  return (
    <Container className="py-4">
      <h1 className="text-center mb-4">My Favorites ({favorites.length}/4)</h1>

      {favorites.length === 0 ? (
        <p className="text-center">
          No favorites yet — go to the Characters page and star up to 4!
        </p>
      ) : (
        <Row className="g-4">
          {favorites.map((character) => (
            <Col key={character.id} sm={6} md={4} lg={3}>
              <CharacterCard character={character} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default FavoriteCharactersPage;
