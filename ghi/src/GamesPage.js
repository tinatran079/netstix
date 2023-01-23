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
    if (searchParams.get("search") === null){
      const response = await fetch("http://localhost:8000/api/games");
      const data = await response.json();
      // console.log(data.results[0].name)
      setGames(data.results);
    }
    else{
      const query = encodeURIComponent(searchParams.get("search"))
      const response = await fetch(`http://localhost:8000/api/games?search=${query}`);
      const data = await response.json();
      setGames(data.results);
    }
  };

  return (
    <div>
      <h2>
        <form action="/games" method="get">
          <label htmlFor="header-search">
              <span className="visually-hidden">Search games</span>
          </label>
          <input
              type="text"
              id="header-search"
              placeholder="Search games"
              name="search"
          />
          <button type="submit">Search</button>
        </form>
      </h2>
      <h1>List of games</h1>
        <thead>
          <tr>
            <th>Title</th>
            <th>Rating</th>
            <th>Tags</th>
          </tr>
        </thead>
      {games.map((game) => (
          <div key={game.id}>
            <tr>
              <td id="title">
                <NavLink to={'/games/' + game.id}>{game.name}</NavLink>
              </td>
              <td>{game.rating}</td>
              <td>
                {game.tags.slice(0,3).map((tag) => (
                  <ul key={tag.name}>
                    {/^[A-Za-z0-9]*$/.test(tag.name[0]) ? tag.name : 'Russian'}
                  </ul>
                ))}
              </td>
              {/* <th>
                <img src={game.background_image} />
              </th> */}
            </tr>
          </div>
        ))}
    </div>
  );
}

export default GamesPage;
