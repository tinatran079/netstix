import React from "react";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import "./DetailsPage.css";
import ReviewForm from "./ReviewForm";

function DetailsPage() {
    const [game, setGame] = useState([]);
    const [tags, setTags] = useState([]);
    const [screenshots, setScreenshots] = useState([]);
    const [genres, setGenres] = useState([]);
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
      resetTimeout()
      timeoutRef.current = setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === screenshots.length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );

      return () => {
        resetTimeout()
      };
    }, [index]);

    useEffect(() => {
        getData();
    }, []);

    const getGame = async () => {
      const response = await fetch(`http://localhost:8000/api/games/${id}`);
      const data = await response.json();

      setGame(data)
      setTags(data.tags)
      setGenres(data.genres)
    }

    const getScreenshots = async () => {
      const response = await fetch(`http://localhost:8000/api/games/${id}/screenshots`);
      const data = await response.json();
      setScreenshots(data.results)
    }

    const getData = async () => {
        getGame();
        getScreenshots();
    };

    const postReview = () => {

    }

  return (
    <div >
        <h1>Video Games :&#41;</h1>
        <thead>
          <tr>
            <th>Title</th>
            <th>Rating</th>
            <th>Genre</th>
            <th>Tags</th>
            <th>Screenshots</th>
          </tr>
        </thead>
        <tr>
            <td id="title">{game.name}</td>
            <td>{game.rating}</td>
            <td>
              {genres.slice(0,5).map((genre) => (
                <ul key={genre.name}>
                  {/^[A-Za-z0-9]*$/.test(genre.name[0]) ? genre.name : ''}
                </ul>
              ))}
            </td>
            <td>
              {tags.slice(0,5).map((tag) => (
                <ul key={tag.name}>
                  {/^[A-Za-z0-9]*$/.test(tag.name[0]) ? tag.name : ''}
                </ul>
              ))}
            </td>
            <td className="slideshow">
              <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                {screenshots.map((ss, index) => (
                  <div className="slide" key={index}>
                    <img src={ss.image}  />
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
            </td>
        </tr>
        <body>
          <ReviewForm />
          <p dangerouslySetInnerHTML={{__html: game.description}}></p>
        </body>
    </div>
  );
}

export default DetailsPage;
