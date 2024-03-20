import React, { useState } from "react";
import MovieDetails from "./MovieDetails"; // Importa il componente MovieDetails
import { Link } from "react-router-dom";

const SingleMovie = ({ img, title, year, id }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [currentMovieId, setCurrentMovieId] = useState(null);

  const handleClick = () => {
    setShowDetails(true);
    setCurrentMovieId(id);
  };

  const handleClose = () => {
    setShowDetails(false);
    setCurrentMovieId(null);
  };

  return (
    <div className="my-3" id="movie">
      <Link to={"/details/" + id}>
        <img
          src={img}
          className="poster"
          alt="movie poster"
          style={{ width: "95%", height: "300px", objectFit: "fill", objectPosition: "50% 50%" }}
          onClick={handleClick}
        />
      </Link>
      {showDetails && currentMovieId === id && (
        <div className="overlay">
          <div className="details">
            <p className="mx-2">{title}</p>
            <p>- {year} -</p>
            <button onClick={handleClose}>Close</button>
          </div>
          {/* <MovieDetails img={img} title={title} year={year} /> */}
        </div>
      )}
    </div>
  );
};

export default SingleMovie;
