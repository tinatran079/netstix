import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import "./SideNav.css";
import actionIcon from './images/actionIcon.png';
import fightingIcon from './images/fightingIcon.png';
import chess from './images/chess.png';
import compass from './images/compass.png';
import diamond from './images/diamond.png';
import edu from './images/edu.png';
import flashCard from './images/flashCard.png';
import cctv from './images/cctv.png';
import coffee from './images/coffee.png';
import house from './images/house.png';
import joystick from './images/joystick.png';
import multPlayer from './images/multPlayer.png';
import numerology from './images/numerology.png';
import racing from './images/racing.png';
import football from './images/football.png';
import solution from './images/solution.png';
import target from './images/target.png';
import wizard from './images/wizard.png';
import run from './images/run.png';

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

  const genreIcons = {
    Action: actionIcon,
    Indie: diamond,
    Adventure: compass,
    RPG: wizard,
    Strategy: chess,
    Shooter: target,
    Casual: coffee,
    Simulation: cctv,
    Puzzle: solution,
    Arcade: joystick,
    Platformer: run,
    Racing: racing,
    "Massively Multiplayer": multPlayer,
    Sports: football,
    Fighting: fightingIcon,
    Family: house,
    "Board Games": numerology,
    Educational: edu,
    Card: flashCard,
  }


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
                <img src={genreIcons[genre.name]} alt={genre.name} className="genre-icon"/>
                <span>{genre.name}</span>
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
