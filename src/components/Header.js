import React from "react";
import { Container, Navbar } from "react-bootstrap";

const Header = () => (
  <div>
    <Navbar variant="dark" bg="dark">
      <Container>
        <Navbar.Brand href="../">Movies</Navbar.Brand>
      </Container>
    </Navbar>
  </div>
);

export default Header;
