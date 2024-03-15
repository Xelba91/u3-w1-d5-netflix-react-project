import React from "react";
import { Container, Row } from "react-bootstrap";
import NetflixCarousel from "./NetflixCarousel";

const NetflixHero = (props) => {
  return (
    <Container fluid>
      <div className="mt-3" key={props.title}>
        <h4 className="text-start" id={props.title}>
          {props.title}
        </h4>
        <Row>
          <NetflixCarousel searchQuery={props.title} />
        </Row>
      </div>
    </Container>
  );
};

export default NetflixHero;
