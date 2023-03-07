import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams, NavLink } from "react-router-dom";
import { getUser } from "./auth";
import SideNavBar from "./SideNavBar";
import Card from "react-bootstrap/Card";
import "./MainPage.css";

function MainPage() {
  const [games, setGames] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    getData();
    getUser();
  }, []);

  const getData = async () => {
    if (searchParams.get("search") === null) {
      const response = await fetch("http://localhost:8000/api/games");
      const data = await response.json();
      // console.log(data.results[0].name)
      setGames(data.results);
    } else {
      const query = encodeURIComponent(searchParams.get("search"));
      const response = await fetch(
        `http://localhost:8000/api/games?search=${query}`
      );
      const data = await response.json();
      // console.log(data.results[0].name)
      setGames(data.results);
    }
  };

  return (
    <div className="row main-container">
      <h2>
        <strong>New and Trending</strong>
      </h2>
      <p>Check out our latest and most popular games below</p>
      {games.map((game) => (
        <Card style={{ width: "20rem" }} key={game.id} className="cards">
          <NavLink to={"/games/" + game.id}>
            <Card.Img variant="top" src={game.background_image} />
          </NavLink>
          <Card.Body>
            <Card.Title>
              <NavLink to={"/games/" + game.id}> {game.name} </NavLink>
            </Card.Title>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
export default MainPage;
