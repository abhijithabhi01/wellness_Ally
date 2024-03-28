import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bg from '../assets/yoga.jpg'
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";


function Login() {

  const API_URL = import.meta.env.VITE_APP_API_URL;
  const[phone, setPhone] = useState("");
  const [password, setPassword] = useState("")
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const  navigate = useNavigate()

  const  handleLogin = async (e) =>{
    e.preventDefault();
    console.log(phone,  password);
    if ( !phone || !password ) {
      setError('Please fill in all fields.');
      return;
    }
    try {
      const response = await axios.post(`${API_URL}/api/v1/login/`, {  phone, password});
      console.log(response.data.data.token.access );
      console.log(response.data.data.user);
      sessionStorage.setItem("existinguser",JSON.stringify(response.data.data.user))
       const token =  sessionStorage.setItem( "token", response.data.data.token.access );
       toast.success("Login successful!");
     setTimeout(() => {
      navigate('/home')
     }, 2000);

      console.log(response);
    } catch (err) {
      setError('Login failed. Please try again.');
      console.log(err);
    }
  };

  return (
<>
  
  <div className='d-flex justify-content-center align-items-center ' style={{minHeight:'100vh'}}>
    <Container>
      <div className='d-flex justify-content-center align-items-center flex-column '>
        <div style={{background:"#efeff5",width:'70%'}} className="">
        <h3 style={{color:"black",textAlign:'center',height:'50px'}}>Login Form</h3>
          <Row className="justify-content-center">
            <Col xs={12} lg={6}>
              <img src={bg} className='w-100'/>
            </Col>
            <Col xs={12} lg={6} className='p-5'>
              <div className='d-flex justify-content-center align-items-center mt-2'>
                <Form className='w-100 fw-bold' onSubmit={handleLogin}>
                 
                  <Form.Group className=" p-3" controlId="exampleForm.ControlInput2">
                    <Form.Label style={{color:'black'}}>Mobile number</Form.Label>
                    <Form.Control type="text" placeholder="enter your number" 
                    value={phone} 
                    onChange={(e) =>setPhone(e.target.value)} 
                    maxLength={'10'}
                    />
                  </Form.Group>
                  <Form.Group className=" p-3" controlId="exampleForm.ControlInput3">
                    <Form.Label style={{color:'black'}}>Password</Form.Label>
                    <Form.Control type="password" placeholder="password"
                      value={ password} 
                      onChange={(e) =>  setPassword(e.target.value)}  />
                  </Form.Group>
                  <div className='d-flex justify-content-center align-items-center'>
                                    <Button  className=' fw-bold mt-4 w-50 text-center' variant="primary" type="submit">Login</Button>
                                    </div>
                                    {error && <p className="text-danger text-center mt-2">{error}</p>}
                      {successMessage && <p className="text-success text-center mt-2">{successMessage}</p>}
                    
                  <br />
                  <p className='text-center mt-2' style={{color:'black'}}>
                    Don't have an account? <Link style={{textDecoration:'none'}} to={'/register'}><span style={{color:'red'}}>Register</span></Link>
                  </p>
                </Form>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  </div>


  <ToastContainer theme='colored' autoClose='2000' />
</>
  )
}

export default Login