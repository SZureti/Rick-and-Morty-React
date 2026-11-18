import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { useNavigate, useOutletContext, useParams } from "react-router";

function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useOutletContext();

  useEffect(() => {
    async function fetchCharacter() {
      setLoading(true);
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/${id}`,
      );
      setCharacter(response.data);
      setLoading(false);
    }
    fetchCharacter();
  }, [id]);

  if (loading) {
    return (
      <Container className="text-center py-5">
        <Spinner animation="border" role="status" />
        <p className="mt-2">Loading character...</p>
      </Container>
    );
  }

  const isFavorite = favorites.some((c) => c.id === character.id);
  const atLimit = favorites.length >= 4;

  return (
    <Container className="py-4">
      <Button variant="primary" className="mb-4" onClick={() => navigate(-1)}>
        ← Back to Characters
      </Button>
      <Row className="justify-content-center">
        <Col md={5} className="mb-4">
          <Card className="character-card">
            <div className="character-img-wrap">
              <img src={character.image} alt={character.name} />
              <span
                className={`status-dot status-${character.status.toLowerCase()}`}
              ></span>
            </div>
          </Card>
        </Col>
        <Col md={6}>
          <h1>{character.name}</h1>
          <div className="character-info">
            <span className="info-label">Status</span>
            <span>{character.status}</span>
          </div>
          <div className="character-info">
            <span className="info-label">Species</span>
            <span>{character.species}</span>
          </div>
          <div className="character-info">
            <span className="info-label">Gender</span>
            <span>{character.gender}</span>
          </div>
          <div className="character-info">
            <span className="info-label">Origin</span>
            <span>{character.origin.name}</span>
          </div>
          <div className="character-info">
            <span className="info-label">Last known location</span>
            <span>{character.location.name}</span>
          </div>
          <div className="character-info">
            <span className="info-label">Episodes</span>
            <span>{character.episode.length}</span>
          </div>
          <Button
            variant={isFavorite ? "danger" : "primary"}
            className="mt-4"
            onClick={() => toggleFavorite(character)}
            disabled={!isFavorite && atLimit}
          >
            {isFavorite ? "★ Remove from favorites" : "☆ Add to favorites"}
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default CharacterDetail;
