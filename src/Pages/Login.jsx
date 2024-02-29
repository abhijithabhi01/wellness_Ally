import React from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bg from '../assets/yoga.jpg'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function Login() {
  return (
  
<Container><div className='d-flex justiy-content-center aligh-items-center' style={{margin:'10%',marginLeft:'10%'}}>

  <div style={{background:"#efeff5",width:'100%',borderRadius:'30px',}} >
      <Row>
        <Col>
        <img src={bg} style={{width:'100%',height:'70vh',borderRadius:'10px'}} />
        </Col>
        <Col>
        <div className='align-items-center justify-content-center' style={{marginTop:'115px'}}>
       <Form className='w-75 m-5'>
       <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label style={{marginLeft:'15px', fontWeight:'bolder'}}>Email Adress</Form.Label>
        <Form.Control type="email" placeholder="Email"  style={{borderRadius:'60px', height:'50px', width:'400px'}} />
      </Form.Group>


      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label style={{marginLeft:'15px', fontWeight:'bolder'}}> Password</Form.Label>
        <Form.Control type="password" placeholder="password"  style={{borderRadius:'60px', height:'50px', width:'400px'}} />
      </Form.Group>

      <Button style={{marginLeft:'100px' ,borderRadius:"10px",fontSize:'15px',fontWeight:'bold', width:'170px'}} variant="primary" type="submit">Login</Button>{' '} <br />
      <p   style={{marginLeft:'80px', marginTop:'20px' }}>
        Dont'have an account? <Link style={{textDecoration:'none'}} to={'/register'}>Register</Link>
      </p>
      </Form>
       </div>
        </Col>
      </Row>
      </div> </div>

    </Container>
  )
}

export default Login