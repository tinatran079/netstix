import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams, NavLink } from "react-router-dom";

function MainPage() {
    const [games, setGames] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams([]);
    const [searchInput, setSearchInput] = useState("");

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
      // console.log(data.results[0].name)
      setGames(data.results);
    }
  };
  return (
    <div>
      <h1>Testing testing</h1>
      {games.map((game) => (
          <div key={game.id}>
            <tr>
              <td id="title">
                <NavLink to={'/games/' + game.id}>{game.name}</NavLink>
              </td>
              <td>{game.rating}</td>
              <td>
                {game.tags.slice(0,3).map((tag) => (
                    <ul key={tag.name}>{tag.name}</ul>
                ))}
              </td>
              {/* <th>
                <img src={game.background_image} />
              </th> */}
            </tr>
          </div>
        ))}
      <body>
      </body>
    </div>
  );
}

export default MainPage;
