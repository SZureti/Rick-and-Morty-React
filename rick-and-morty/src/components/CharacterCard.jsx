import { Button, Card } from "react-bootstrap";
import { Link, useNavigate, useOutletContext } from "react-router";

function CharacterCard({ character }) {
  const { favorites, toggleFavorite } = useOutletContext();
  const isFavorite = favorites.some((c) => c.id === character.id);
  const atLimit = favorites.length >= 4;

  function handleFavorite(event) {
    event.preventDefault(); // 👈 stop the Link from navigating to the detail page
    event.stopPropagation();
    toggleFavorite(character);
  }

  return (
    <Link to={`/characters/${character.id}`} className="card-link">
      <Card className="h-100 character-card">
        <div className="character-img-wrap">
          <Card.Img variant="top" src={character.image} />
          <span
            className={`status-dot status-${character.status.toLowerCase()}`}
          ></span>
        </div>
        <Card.Body>
          <Card.Title className="character-name">{character.name}</Card.Title>
          <div className="character-info">
            <span className="info-label">Status</span>
            <span>{character.status}</span>
          </div>
          <div className="character-info">
            <span className="info-label">Species</span>
            <span>{character.species}</span>
          </div>
          <div className="character-info">
            <span className="info-label">Origin</span>
            <span className="text-end">{character.origin.name}</span>
          </div>
          <Button
            variant={isFavorite ? "danger" : "primary"}
            size="sm"
            className="mt-2 w-100"
            onClick={handleFavorite}
            disabled={!isFavorite && atLimit}
          >
            {isFavorite ? "★ Remove favorite" : "☆ Add favorite"}
          </Button>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default CharacterCard;
