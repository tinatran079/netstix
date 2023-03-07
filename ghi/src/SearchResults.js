import React from "react";
import { NavLink } from "react-router-dom";
import "./SearchResults.css";

function SearchResults(props) {
  const { games } = props;

  return (
    <div className="search-results">
      {games.map((game) => (
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

export default SearchResults;
