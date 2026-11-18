import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import CharacterCard from "../components/CharacterCard.jsx";

function CharactersPage() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [info, setInfo] = useState({});
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    let active = true;

    async function fetchCharacters() {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character?page=${page}&name=${search}`,
        );
        if (!active) return;
        setCharacters(response.data.results);
        setInfo(response.data.info);
      } catch (error) {
        if (!active) return;
        setCharacters([]);
        setInfo({});
      }
      if (active) setLoading(false);
    }

    fetchCharacters();

    return () => {
      active = false;
    };
  }, [page, search]);

  function handleSubmit(event) {
    event.preventDefault();
    setSearch(searchInput);
    setPage(1);
  }

  return (
    <Container className="py-4">
      <h1 className="text-center mb-4">Characters</h1>

      <Form onSubmit={handleSubmit} className="d-flex gap-2 mb-4">
        <Form.Control
          type="text"
          placeholder="Search characters by name..."
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
        />
        <Button type="submit">Search</Button>
      </Form>

      <div className="d-flex justify-content-between align-items-center my-3">
        <Button onClick={() => setPage(page - 1)} disabled={!info.prev}>
          Previous
        </Button>
        <span>
          Page {page} of {info.pages}
        </span>
        <Button onClick={() => setPage(page + 1)} disabled={!info.next}>
          Next
        </Button>
      </div>

      {loading ? (
        <div className="text-center py-5">
          <Spinner animation="border" role="status" />
          <p className="mt-2">Loading characters...</p>
        </div>
      ) : characters.length === 0 ? (
        <p className="text-center">No characters found.</p>
      ) : (
        <Row className="g-4">
          {characters.map((character) => (
            <Col key={character.id} sm={6} md={4} lg={3}>
              <CharacterCard character={character} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default CharactersPage;
