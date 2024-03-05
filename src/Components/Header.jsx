import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'


function Header() {
  return (
    <>
<Navbar className="bg-body-secondary" >
      <Container>

        <Navbar.Brand href="#home"  style={{fontFamily:'monospace',fontWeight:'bold', fontSize:'25px'}}> <img src={logo}  style={{width:'9%',marginRight:'15px'}} alt="" />Wellness + Ally</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end"> 
          <Navbar.Text>
           <Link style={{textDecoration:'none',fontSize:'15px'}} className='fa-large'>Home </Link> 
           <Link style={{textDecoration:'none',fontSize:'15px'}} className='ms-2'>Contact </Link>
           <Link style={{textDecoration:'none',fontSize:'15px'}} className='ms-2'>Service </Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>  
    </Navbar>
  
    </>
  )
}

export default Header