import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams, NavLink } from "react-router-dom";
import "./GamesPage.css";

function GamesPage() {
  const [games, setGames] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    if (searchParams.get("search") === null) {
      const response = await fetch("http://localhost:8000/api/games");
      const data = await response.json();
      setGames(data.results);
    } else {
      const query = encodeURIComponent(searchParams.get("search"));
      const response = await fetch(
        `http://localhost:8000/api/games?search=${query}`
      );
      const data = await response.json();
      setGames(data.results);
    }
  };

  return (
    <div className="main">
      {games !== null &&
        games.map((game) => (
          <div className="card" key={game.id}>
            <img src={game.background_image} alt={game.name} />
            <div className="card-body">
              <NavLink to={"/games/" + game.id}> {game.name} </NavLink>
            </div>
          </div>
        ))}
    </div>
  );
}
export default GamesPage;
