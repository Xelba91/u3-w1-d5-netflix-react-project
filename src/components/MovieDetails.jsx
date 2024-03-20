import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [comments, setComments] = useState([]);

  let url = `http://www.omdbapi.com/?apikey=2a3fd527&i=` + movieId;
  console.log(url);
  useEffect(() => {
    // Effettua la richiesta per ottenere i dettagli del film dall'API esterna (OMDbAPI)
    fetch(`http://www.omdbapi.com/?apikey=2a3fd527&i=` + movieId)
      // http://www.omdbapi.com/?apikey=[PUT_YOUR_API_KEY_HERE]&i=tt0241527
      .then((response) => response.json())
      .then((data) => {
        console.log(movieId);
        console.log(data);
        setMovieDetails(data);
      })

      .catch((error) => console.log(error));

    // Effettua la richiesta per ottenere i commenti relativi al film dalle API interne
    // fetch(`/api/comments/${movieId}`)
    //   .then((response) => response.json())
    //   .then((data) => setComments(data))
    //   .catch((error) => console.log(error));
  }, [movieId]);

  return (
    <div>
      {movieDetails && (
        <div>
          <img
            src={movieDetails.Poster}
            alt={movieDetails.Title}
            style={{ width: "300px", display: "block", margin: "0 auto" }}
          />
          <h2>{movieDetails.Title}</h2>
          <p>{movieDetails.Plot}</p>
          <p>Director: {movieDetails.Director}</p>
          <p>Year: {movieDetails.Year}</p>
          <p>IMDb Rating: {movieDetails.imdbRating}</p>
        </div>
      )}
      <h3>Comments:</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieDetails;
