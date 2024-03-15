import React from "react";

const SingleMovie = ({ img, title, year }) => (
  <div id="movie">
    <img
      src={img}
      className="poster"
      alt="movie poster"
      style={{ width: "95%", height: "300px", objectFit: "fill", objectPosition: "50% 50%" }}
    />
    <p className="mx-2">{title}</p>
    <p>{year}</p>
  </div>
);

export default SingleMovie;
