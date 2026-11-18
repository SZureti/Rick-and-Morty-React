import { useState } from "react";
import { Outlet } from "react-router";
import NavBar from "./components/NavBar.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [favorites, setFavorites] = useState([]);

  function toggleFavorite(character) {
    setFavorites((prev) => {
      const alreadyFav = prev.some((c) => c.id === character.id);
      if (alreadyFav) {
        return prev.filter((c) => c.id !== character.id); // remove
      }
      if (prev.length >= 4) {
        return prev; // at the cap of 4 — ignore the add
      }
      return [...prev, character]; // add
    });
  }

  return (
    <>
      <NavBar favoritesCount={favorites.length} />
      <Outlet context={{ count, setCount, favorites, toggleFavorite }} />
    </>
  );
}

export default App;
