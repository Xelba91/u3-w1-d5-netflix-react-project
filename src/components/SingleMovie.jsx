import React from "react";

const SingleMovie = ({ img, title, year }) => (
  <>
    <img
      src={img}
      className="poster"
      alt="movie poster"
      style={{ width: "95%", height: "300px", objectFit: "fill", objectPosition: "50% 50%" }}
    />
    <p>{title}</p>
    <p>{year}</p>
  </>
);

export default SingleMovie;
