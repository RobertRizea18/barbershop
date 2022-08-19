import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./header.css";
import { BsScissors } from "react-icons/bs";

const Header = () => {
  return (
    <Navbar expand="lg" variant="dark">
      <Container>
        <Navbar.Brand className="navbar-font" href="/">
          <span className="barber">B A R B E R </span>
          <br></br>
          <span className="shop">S H O P</span>
          <BsScissors className="nav-scissorss" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="navbar-collapse">
          <Nav className="me-auto">
            <Link to="/" className="custom-nav-link">
              ACASA
            </Link>
            <Link to="/about" className="custom-nav-link">
              DESPRE NOI
            </Link>
            <Link to="/services" className="custom-nav-link">
              SERVICII
            </Link>
            <Link to="/contact" className="custom-nav-link">
              CONTACT
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
