# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


import React from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bg from '../assets/yoga.jpg'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


 
    <Navbar style={{height:'11vh'}} expand="lg" className="bg-body-tertiary">
      <Container >
<div className='d-flex justify-content-between '>

<div>


        <Navbar.Brand > <h2  id='header-h2' className='p-3'> Wellness + Ally</h2></Navbar.Brand>
        
        </div>

        <div>

       
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav  className="my-2 my-lg-0 p-3 "  style={{ maxHeight: '10px',fontSize:'1px' }} navbarScroll >
            
            <Nav.Link   href="#action1">Home</Nav.Link>
            {/* <Nav.Link href="#action2">Diet Plans</Nav.Link>
            <Nav.Link href="#action2">Exercise Videos</Nav.Link>
            <Nav.Link href="#action2">Medication Suggetion</Nav.Link> */}
            <NavDropdown className='ms-3 ' title="Services" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action1">Diet Plans</NavDropdown.Item>
              <NavDropdown.Item href="#action2"> Exercise Videos</NavDropdown.Item>
              <NavDropdown.Item href="#action3"> Medication Suggetion </NavDropdown.Item>
              <NavDropdown.Item href="#action3"> Symptom Management </NavDropdown.Item>
             
              {/* <NavDropdown.Divider /> */}
              
              {/* <NavDropdown.Item href="#action5">
             
              </NavDropdown.Item> */}
            </NavDropdown>
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
             {/* <Nav.Link className='ms-3' href="#action1">Contact</Nav.Link> */}

          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse> </div>
            </div>

      </Container>
    </Navbar>

    <!--     ------------------------------------------------------------------------------------------------------------------------------------------------------- -->
     <Navbar style={{height:'11vh'}} expand="lg" className="bg-body-tertiary">
      <Container fluid>
        {/* <Navbar.Brand > </Navbar.Brand> */}
        <div className='d-flex justify-content-between'>

        <div>
        <p  style={{fontSize:'20px',fontFamily:'monospace',fontWeight:'bold'}} className='ms-5'> Wellness + Ally</p></div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <div>
          <Nav  className="my-2 my-lg-0"  navbarScroll >
            <Nav.Link   href="#action1">Home</Nav.Link>
            {/* <Nav.Link href="#action2">Diet Plans</Nav.Link>
            <Nav.Link href="#action2">Exercise Videos</Nav.Link>
            <Nav.Link href="#action2">Medication Suggetion</Nav.Link> */}
            <div>
            <NavDropdown className='ms-3' title="Services" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action1">Diet Plans</NavDropdown.Item>
              <NavDropdown.Item href="#action2"> Exercise Videos</NavDropdown.Item>
              <NavDropdown.Item href="#action3"> Medication Suggetion </NavDropdown.Item>
             
              {/* <NavDropdown.Divider /> */}
              
              {/* <NavDropdown.Item href="#action5">
             
            </NavDropdown.Item> */}
            </NavDropdown>
            </div>
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
             {/* <Nav.Link className='ms-3' href="#action1">Contact</Nav.Link> */}

          </Nav> </div>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
    </div>