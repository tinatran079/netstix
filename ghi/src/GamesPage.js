import React from "react";
import { useState, useEffect } from "react";
import "./GamesPage.css";

function GamesPage() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch("https://api.rawg.io/api/games?key=bd6157ccfd954ffa922b2a920a46f6b5");
    const data = await response.json();
    // console.log(data.results[0].name)
    setGames(data.results);
  };

  return (
    <div>
      <h1>List of games</h1>
        <thead>
          <tr>
            <th>Title</th>
            <th>Rating</th>
            <th>Tags</th>
            {/* <th>{games[0]}</th> */}
          </tr>
        </thead>
      {games.map((game) => (
          <div key={game.id}>
            <tr>
              <th>{game.name}</th>
              <th>{game.rating}</th>
              <th>{game.tags[0].name}</th>
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
