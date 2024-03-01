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

<div className='d-flex justify-content-center align-items-center ' style={{minHeight:'100vh'}}>
  <Container>
    <div className='d-flex justify-content-center align-items-center flex-column '>
      <div style={{background:"#efeff5",width:'70%'}} className="">
        <Row className="justify-content-center">
          <Col xs={12} lg={6}>
            <img src={bg} className='w-100'/>
          </Col>
          <Col xs={12} lg={6} className='p-5'>
            <div className='d-flex justify-content-center align-items-center mt-2'>
              <Form className='w-100 fw-bold'>
               
                <Form.Group className=" p-3" controlId="exampleForm.ControlInput2">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className=" p-3" controlId="exampleForm.ControlInput3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="password" />
                </Form.Group>
                <div className='d-flex justify-content-center align-items-center'>
                                  <Button  className=' fw-bold mt-4 w-50 text-center' variant="primary" type="submit">Login</Button>
                                  </div>
                <br />
                <p className='text-center mt-2'>
                  Don't have an account? <Link style={{textDecoration:'none'}} to={'/Register'}>Register</Link>
                </p>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  </Container>
</div>
  )
}

export default Login