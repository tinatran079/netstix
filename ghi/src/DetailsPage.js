import React from "react";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import "./DetailsPage.css";

function DetailsPage() {
    const [game, setGame] = useState([]);
    const [tags, setTags] = useState([]);
    const [genres, setGenres] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const response = await fetch(`http://localhost:8000/api/games/${id}`);
        const data = await response.json();

        setTags(data.tags)
        setGenres(data.genres)
        setGame(data);
    };

  return (
    <div >
        <h1>Video Games :&#41;</h1>
        <thead>
          <tr>
            <th>Title</th>
            <th>Rating</th>
            <th>Genre</th>
            <th>Tags</th>
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
        </tr>
        <body>
            <p dangerouslySetInnerHTML={{__html: game.description}}></p>
        </body>
    </div>
  );
}

export default DetailsPage;
