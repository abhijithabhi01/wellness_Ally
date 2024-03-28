import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'


function Header() {
const navigate = useNavigate()

  const handlelogout = ()=>{
    
    sessionStorage.removeItem("existinguser")
    sessionStorage.removeItem("token")
  navigate('/')
  window.location.reload();
  }
  return (
    <>
<Navbar className="bg-body-secondary" >
      <Container>

        <Navbar.Brand href="/home"  style={{fontFamily:'monospace',fontWeight:'bold', fontSize:'25px'}}> <img src={logo}  style={{width:'9%',marginRight:'15px'}} alt="" />Wellness  Ally</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end"> 
          <Navbar.Text>
          <Link to={'/bookappointment'} style={{textDecoration:'none',fontSize:'15px'}} className='fa-large'>Book Appointment </Link>
           <Link style={{textDecoration:'none',fontSize:'15px'}} className='fa-large'><button onClick={handlelogout}
           style={{background:'none',color:'red'}}
           >Logout</button> </Link> 
           {/* <Link style={{textDecoration:'none',fontSize:'15px'}} className='ms-2'>Contact </Link>
           <Link style={{textDecoration:'none',fontSize:'15px'}} className='ms-2'>Service </Link> */}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>  
    </Navbar>
  
    </>
  )
}

export default Header