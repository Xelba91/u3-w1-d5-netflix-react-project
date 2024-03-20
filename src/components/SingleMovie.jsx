import React, { useState } from "react";
import { Link } from "react-router-dom";

const SingleMovie = ({ img, title, year, id }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleMouseEnter = () => {
    setShowDetails(true);
  };

  const handleMouseLeave = () => {
    setShowDetails(false);
  };

  return (
    <div className="my-3" id="movie">
      <Link to={"/details/" + id}>
        <img
          src={img}
          className="poster"
          alt="movie poster"
          style={{ width: "95%", height: "300px", objectFit: "fill", objectPosition: "50% 50%" }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </Link>

      {showDetails && (
        <div className="overlay">
          <div className="details">
            <p className="mx-2">{title}</p>
            <p>- {year} -</p>
          </div>
          {/* <MovieDetails img={img} title={title} year={year} /> */}
        </div>
      )}
    </div>
  );
};

export default SingleMovie;
