import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

function AboutPage() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    async function fetchStats() {
      const [characters, locations, episodes] = await Promise.all([
        axios.get("https://rickandmortyapi.com/api/character"),
        axios.get("https://rickandmortyapi.com/api/location"),
        axios.get("https://rickandmortyapi.com/api/episode"),
      ]);
      setStats({
        characters: characters.data.info.count,
        locations: locations.data.info.count,
        episodes: episodes.data.info.count,
      });
    }
    fetchStats();
  }, []);

  return (
    <Container>
      <h1>About Rick and Morty</h1>
      <p>
        Rick and Morty is an adult animated science-fiction sitcom created by
        Justin Roiland and Dan Harmon for Adult Swim. It follows Rick Sanchez, a
        cynical genius scientist, and his anxious grandson Morty Smith as they
        travel across an infinite multiverse of alien worlds and parallel
        realities.
      </p>
      {stats && (
        <p>
          Across the series, fans have catalogued {stats.episodes} episodes
          featuring {stats.characters} characters spread over {stats.locations}{" "}
          locations.
        </p>
      )}
    </Container>
  );
}

export default AboutPage;
