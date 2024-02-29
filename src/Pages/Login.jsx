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
  <div className='d-flex justiy-content-center aligh-items-center '/* style={{marginTop:'100px',width:'50vw',marginLeft:'500px'}} */>
<Container><div className='d-flex justiy-content-center aligh-items-center '  style={{marginTop:'150px',width:'65vw'}} >

  <div  style={{background:"#efeff5",width:'100%'}} >
      <Row>
        <Col>
        <img src={bg} className='w-100'/>
        </Col>

        <Col>
        <div className='d-flex justiy-content-center aligh-items-center mt-2 '>
    <Form className='w-75 ms-5 fw-bold' style={{marginTop:'100px',fontSize:'20px',height:'30px'}}>
     
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label> Email</Form.Label>
        <Form.Control type="email" placeholder="  name@example.com"  style={{borderRadius:'20px',fontSize:'20px',height:'60px'}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label> Password</Form.Label>
        <Form.Control type="password" placeholder="   password"  style={{borderRadius:'20px',fontSize:'20px',height:'60px'}} />
      </Form.Group>
      <Button className='fw-bold mt-4 w-25' style={{marginLeft:'180px',borderRadius:"10px",fontSize:'18px'}} variant="primary" type="submit">Login</Button>{' '} <br />
      <p className='text-center mt-2'>
        Dont have an account? <Link style={{textDecoration:'none'}} to={'/register'}>Register</Link>
      </p>

    </Form>

       </div>
        </Col>
      </Row>
      </div> </div>

    </Container>
    </div>
  )
}

export default Login