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

  <div style={{background:"#efeff5",width:'100%',borderRadius:'30px'}} >
      <Row>
        <Col>
        <img src={bg} style={{width:'90%',height:'70vh',borderRadius:'10px'}} />
        </Col>
        <Col>
        <div style={{height:'50vh',width:'80%',marginTop:"100px"}}>
       <Form >
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label> Email</Form.Label>
        <Form.Control type="email" placeholder="name@example.com"  style={{borderRadius:'60px'}}/>
      </Form.Group>


      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label> Password</Form.Label>
        <Form.Control type="password" placeholder="password"  style={{borderRadius:'60px'}} />
      </Form.Group>

      <Button style={{marginLeft:'100px' ,borderRadius:"10px",fontSize:'15px',fontWeight:'bold'}} variant="primary" type="submit">Login</Button>{' '} <br />
      <p   style={{marginLeft:'10%'}}>
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