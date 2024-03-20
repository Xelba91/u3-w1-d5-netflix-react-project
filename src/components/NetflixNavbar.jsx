import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.png";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BellFill, Search } from "react-bootstrap-icons";
import Avatar from "../assets/avatar.png";
import { Link } from "react-router-dom";

function NetflixNavbar() {
  return (
    <Navbar expand="lg" data-bs-theme="dark" className="align-content-center">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo Netflix" style={{ width: "100px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">
              <div className="nav-link my-auto">Home</div>
            </Link>
            <Link to="/1">
              <div className="nav-link">Tv Shows </div>
            </Link>

            <Nav.Link href="#movies">Movies</Nav.Link>
            <Nav.Link href="#recent">Recently Added</Nav.Link>
            <Nav.Link href="#mylist">My List</Nav.Link>
            <NavDropdown title="Sort By" id="nav-dropdown">
              <NavDropdown.Item href="#genre">Genre</NavDropdown.Item>
              <NavDropdown.Item href="#mostwatched">Most Watched</NavDropdown.Item>
              <NavDropdown.Item href="#recent">Most Recent</NavDropdown.Item>
              <NavDropdown.Item href="#picks">Our Picks</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="d-flex align-items-center">
            <Nav.Item>
              <Search color="white" size="1rem" className="nav-icon" />
            </Nav.Item>
            <Nav.Item>
              <span className="nav-icon">KIDS</span>
            </Nav.Item>
            <Nav.Item>
              <BellFill color="white" size="1rem" className="nav-icon" />
            </Nav.Item>
            <img src={Avatar} alt="avatar" className="nav-avatar" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NetflixNavbar;
