import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import "./SideNav.css";

export default function SideNavBar() {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [games, setGames] = useState([]);


  useEffect(() => {
    async function fetchGenres() {
      const response = await fetch("http://localhost:8000/api/genres");
      const data = await response.json();
      setGenres(data.results);
    }
    fetchGenres();
  }, []);

   useEffect(() => {
    async function fetchGames() {
      const response = await fetch(selectedGenre !== "" ? `http://localhost:8000/api/games/genres/${selectedGenre}` : "http://localhost:8000/api/games");
      const data = await response.json();
      setGames(data.results);
    }
    fetchGames();
  }, [selectedGenre]);



  function handleGenreSelect(genreId) {
    setSelectedGenre(genreId);
  }

  return (
    <div className="side-container">
      <div className="sidebar">
        <h3>Genres</h3>
        <ul>
          {genres.map((genre) => (
            <li key={genre.id}>
              <button
                className={selectedGenre === genre.id ? "active" : ""}
                onClick={() => handleGenreSelect(genre.id)}
              >
                {genre.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="main">
        {games.map((game) => (
          <div className="card" key={game.id}>
            <img src={game.background_image} alt={game.name} />
            <div className="card-body">
              <NavLink to={"/games/" + game.id}> {game.name} </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
