import React from 'react';
import bg from '../assets/bgg.jpeg';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


function Login() {
  const containerStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '80vh',
    width: '30%',
    marginTop: ' 6%', 
    marginLeft:'35%',
    // opacity:'35%'
    
  };

  return (
    <>
      <div className='d-flex justify-content-center align-items-center bg-dark' id="m_div" style={containerStyle}>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 2, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
     
      <TextField id="standard-basic" label="Email" variant="standard" style={{color:'white'}}/>
      <TextField id="standard-basic" label= "password" variant="standard" style={{color:'white'}}/>

    </Box>
      </div>
    </>
  );
}

export default Login;
