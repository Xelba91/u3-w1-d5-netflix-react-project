import React from "react";
import { Container } from "react-bootstrap";
import NetflixCarousel from "./NetflixCarousel";

const NetflixHero = (props) => {
  return (
    <Container fluid>
      <div className="mt-3" key={props.title}>
        <h4 className="text-start" id={props.title}>
          {props.title}
        </h4>
        <NetflixCarousel searchQuery={props.title} />
      </div>
    </Container>
  );
};

export default NetflixHero;
