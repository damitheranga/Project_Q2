import React from "react";
import { Navbar } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="https://freeiconshop.com/wp-content/uploads/edd/book-open-flat.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        New York Times best-selling books
      </Navbar.Brand>
    </Navbar>
  );
}
