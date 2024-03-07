import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bg from '../assets/yoga.jpg';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


function Register() {
  const [full_name, setFull_name] = useState('');
const [phone, setPhone] = useState('');
const [password, setPassword] = useState('');
const [dob, setDob] = useState('');
  const [gender, setGender] = useState("female"); 
  const [error, setError] = useState();
  const [successMessage, setSuccessMessage] = useState();
  const  navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(full_name, phone, password, dob);
    if (!full_name || !phone || !password || !dob || !gender) {
      setError('Please fill in all fields.');
      return;
    }
    try {
      const response = await axios.post('http://localhost:8000/api/v1/register/', { full_name, phone, password, dob, gender });
      console.log(response);
      
      setSuccessMessage('Registration successful!');
      navigate('/login')
      console.log(response);
    } catch (err) {
      setError('Registration failed. Please try again.');
      console.log(err);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Container>
        <div className="d-flex justify-content-center align-items-center flex-column">
          <div style={{ background: '#efeff5', width: '70%' }}>
            <Row className="justify-content-center">
              <Col xs={12} lg={6}>
                <img src={bg} className="w-100" alt="background" />
              </Col>
              <Col xs={12} lg={6} className="p-5">
                <div className="d-flex justify-content-center align-items-center mt-2">
                  <Form className="w-100 fw-bold" onSubmit={handleRegister}>
                    <Form.Group className="p-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Fullname</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Fullname"
                        value={full_name}
                        onChange={(e) => setFull_name(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="p-3" controlId="exampleForm.ControlInput2">
                      <Form.Label>Mobile Number</Form.Label>
                      <Form.Control
                        type="tel"
                        placeholder="Mobile number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="p-3" controlId="exampleForm.ControlInput3">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      /> </Form.Group>

                    <Form.Group className="p-3" controlId="exampleForm.ControlInput4">
                      <Form.Label>Dob</Form.Label>
                      <Form.Control
                        type="date"
                        placeholder="dob"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                      />


                    </Form.Group>
     
     
                    <FormControl>
  <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
  <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group" value={gender} onChange={(e) => setGender(e.target.value)}>
    <div className='d-flex justify-content-center align-items-center'>
      <FormControlLabel value="female" control={<Radio />} label="Female" group={gender} />
      <FormControlLabel value="male" control={<Radio />} label="Male" group={gender} />
      <FormControlLabel value="other" control={<Radio />} label="Other" group={gender} />
    </div>
  </RadioGroup>
</FormControl>


                    <div className="d-flex justify-content-center align-items-center">
                      <Button className="fw-bold mt-4 w-50 text-center" type="submit">
                        Register
                      </Button>
                    </div>
                    {error && <p className="text-danger text-center mt-2">{error}</p>}
                    {successMessage && <p className="text-success text-center mt-2">{successMessage}</p>}
                    <br />
                    <p className="text-center mt-2">
                      Already have an account? <Link style={{ textDecoration: 'none' }} to={'/login'}>
                        Login
                      </Link>
                    </p>
                  </Form>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Register;
