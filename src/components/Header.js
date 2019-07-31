import React from "react";
import Navbar from 'react-bootstrap/Navbar';

const Header = (props) => {
  return (
    <Navbar bg="light">
      <Navbar.Brand href="#home">{props.text}</Navbar.Brand>
    </Navbar>
  );
};

export default Header;