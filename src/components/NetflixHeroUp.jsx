import React from "react";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import { TextLeft, Grid } from "react-bootstrap-icons";

// icone a destra in alto
const iconStyle = {
  marginRight: "1rem",
  border: "solid white 0.2px",
  padding: "1px",
};

const NetflixHeroUp = () => {
  return (
    <Container fluid className="mt-3">
      <Row className="justify-content-between">
        <Col className="d-flex" md={11}>
          <h2 className="mb-1">Movies</h2>
          <Dropdown className="ms-3">
            <Dropdown.Toggle className="bg-black text-white rounded" variant="dark">
              Genres
            </Dropdown.Toggle>
            <Dropdown.Menu className="bg-black text-white rounded">
              <Dropdown.Item className="text-white rounded" href="#Harry Potter">
                Harry Potter
              </Dropdown.Item>
              <Dropdown.Item className="text-white rounded" href="#Matrix">
                Matrix
              </Dropdown.Item>
              <Dropdown.Item
                className="text-white rounded"
                href="#Avengers"
                // onMouseEnter={(e) => (e.target.style.color = "black")}
                // onMouseLeave={(e) => (e.target.style.color = "white")}
              >
                Avengers
              </Dropdown.Item>
              <Dropdown.Item className="text-white rounded" href="#Star Wars">
                Star Wars
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col md={1} className="d-flex justify-content-end">
          <TextLeft size="1.4rem" style={iconStyle} />
          <Grid size="1.4rem" style={iconStyle} />
        </Col>
      </Row>
    </Container>
  );
};
export default NetflixHeroUp;
