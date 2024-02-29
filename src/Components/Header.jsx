import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Header() {
  return (
    <>
    
    <Navbar style={{height:'11vh'}} expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand > <h2  id='header-h2' className='ms-4'> Wellness + Ally</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav  className="my-2 my-lg-0"  style={{ maxHeight: '100px',marginLeft:'850px' }} navbarScroll >
            
            <Nav.Link   href="#action1">Home</Nav.Link>
            {/* <Nav.Link href="#action2">Diet Plans</Nav.Link>
            <Nav.Link href="#action2">Exercise Videos</Nav.Link>
            <Nav.Link href="#action2">Medication Suggetion</Nav.Link> */}
            <NavDropdown className='ms-3' title="Services" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action1">Diet Plans</NavDropdown.Item>
              <NavDropdown.Item href="#action2"> Exercise Videos</NavDropdown.Item>
              <NavDropdown.Item href="#action3"> Medication Suggetion </NavDropdown.Item>
             
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
    </>
  )
}

export default Header