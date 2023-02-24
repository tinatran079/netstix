import React from "react";
import { useState, useEffect, useNavigate } from "react";
import { Navigate, NavLink, useParams } from "react-router-dom";
import "./DetailsPage.css";
import ReviewForm from "./ReviewForm";
import { getUser, useAuthContext } from "./auth";
import Card from "react-bootstrap/Card";

function DetailsPage() {
  const [username, setUsername] = useState("");
  const [game, setGame] = useState([]);
  const [tags, setTags] = useState([]);
  const [genres, setGenres] = useState([]);
  const [screenshots, setScreenshots] = useState([]);
  const [gameImage, setGameImage] = useState([]);
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  const [index, setIndex] = React.useState(0);
  const delay = 2500;
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === screenshots.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  useEffect(() => {
    getData();
    getUsername();
  }, []);

  const getUsername = async () => {
    const username = await getUser();
    setUsername(username);
  };

  const getGame = async () => {
    const response = await fetch(`http://localhost:8000/api/games/${id}`);
    const data = await response.json();

    setGame(data);
    setTags(data.tags);
    setGenres(data.genres);
    setGameImage(data.background_image)
  };

  const getScreenshots = async () => {
    const response = await fetch(
      `http://localhost:8000/api/games/${id}/screenshots`
    );
    const data = await response.json();
    setScreenshots(data.results);
  };

  const getReviews = async () => {
    const response = await fetch(`http://localhost:8000/api/reviews`);
    const data = await response.json();
    setReviews(data.reviews);
  };

  const getData = async () => {
    getGame();
    getScreenshots();
    getReviews();
  };

  return (
    <div className="details-page-container" style={{ backgroundImage: `url(${game.background_image})`}}>
      <h1>{game.name}</h1>
      <div className="container">
        <div className="slideshow">
          <div
            className="slideshowSlider"
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {screenshots.map((ss, index) => (
              <div className="slide" key={index}>
                <img src={ss.image} />
              </div>
            ))}
          </div>
          <div className="slideshowDots">
            {screenshots.map((_, idx) => (
              <div
                key={idx}
                className={`slideshowDot${index === idx ? " active" : ""}`}
                onClick={() => {
                  setIndex(idx);
                }}
              ></div>
            ))}
          </div>
        </div>
        <div>
          <h3>Tags</h3>
          {genres.slice(0, 5).map((genre) => (
            <ul key={genre.name}>
              {/^[A-Za-z0-9]*$/.test(genre.name[0]) ? genre.name : ""}
            </ul>
          ))}
          {tags.slice(0, 5).map((tag) => (
            <ul key={tag.name}>
              {/^[A-Za-z0-9]*$/.test(tag.name[0]) ? tag.name : ""}
            </ul>
          ))}
        </div>
      </div>

      <h3>Rating: {game.rating} </h3>
      <div>
        <p dangerouslySetInnerHTML={{ __html: game.description }}></p>
      </div>
      <h1>Reviews</h1>
      <h2>
        {username ? (
          <ReviewForm getReviews={getReviews} />
        ) : (
          <NavLink className="navlink" to="/login">
            Sign in to Create a Review!
          </NavLink>
        )}
      </h2>
      <div className="row">
        {reviews
          .filter((review) => review.game_id === game.id)
          .map((rev) => (
            <Card style={{ width: "20rem" }} key={rev.id} className="cards">
              <Card.Header>{rev.username}</Card.Header>
              <Card.Body>
                <Card.Title>{rev.subject}</Card.Title>
                <Card.Text> {rev.description}</Card.Text>
              </Card.Body>
            </Card>
          ))}
      </div>
    </div>
  );
}

export default DetailsPage;
