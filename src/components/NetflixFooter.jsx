import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons";

const NetflixFooter = () => {
  return (
    <Container fluid>
      <Row className="justify-content-center mt-5 text-secondary text-start">
        <Row className="mb-2">
          <Col md={3}>
            <Facebook size="1.4rem" style={{ marginRight: "2vmin" }} />
            <Instagram size="1.4rem" style={{ marginRight: "2vmin" }} />
            <Twitter size="1.4rem" style={{ marginRight: "2vmin" }} />
            <Youtube size="1.4rem" />
          </Col>
        </Row>
        <Row xs={1} sm={2} md={4} lg={4} className="mb-3">
          <Col md={3}>
            <p>
              <a href="#audioandsubtitles" className="text-secondary">
                Audio and Subtitles
              </a>
            </p>
            <p>
              <a href="#mediacenter" className="text-secondary">
                Media Center
              </a>
            </p>
            <p>
              <a href="#privacy" className="text-secondary">
                Privacy
              </a>
            </p>
            <p>
              <a href="#contactus" className="text-secondary">
                Contact us
              </a>
            </p>
          </Col>

          <Col md={3}>
            <p>
              <a href="#audiodescription" className="text-secondary">
                Audio Description
              </a>
            </p>
            <p>
              <a href="#investors" className="text-secondary">
                Investor Relations
              </a>
            </p>
            <p>
              <a href="#legal" className="text-secondary">
                Legal Notices
              </a>
            </p>
          </Col>
          <Col md={3}>
            <p>
              <a href="#help" className="text-secondary">
                Help Center
              </a>
            </p>
            <p>
              <a href="#jobs" className="text-secondary">
                Jobs
              </a>
            </p>
            <p>
              <a href="#cookies" className="text-secondary">
                Cookie Preferences
              </a>
            </p>
          </Col>
          <Col md={3}>
            <p>
              <a href="#giftcards" className="text-secondary">
                Gift Cards
              </a>
            </p>
            <p>
              <a href="#conditions" className="text-secondary">
                Terms of Use
              </a>
            </p>
            <p>
              <a href="#corporate" className="text-secondary">
                Corporate Info
              </a>
            </p>
          </Col>
        </Row>

        <Row className="mb-2">
          <Col md={3}>
            <Button variant="" className="mt-2 text-secondary border border-secondary rounded-0" href="#" as="a">
              Service Code
            </Button>
          </Col>
        </Row>
        <Row className="mb-3 mt-3 copyright">
          <Col md={3}>&copy; 1997-2024 Netflix, Inc.</Col>
        </Row>
      </Row>
    </Container>
  );
};

export default NetflixFooter;
