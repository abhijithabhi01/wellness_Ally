import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';



function Header() {
  return (
    <>
   
   <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#">Start Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive">
          <Nav className="ms-auto">
            <Nav.Item className="nav-item">
              <Nav.Link href="#" className="nav-link">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item">
              <Nav.Link href="#" className="nav-link">About</Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item">
              <Nav.Link href="#" className="nav-link">Services</Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item">
              <Nav.Link href="#" className="nav-link">Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header