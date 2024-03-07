import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login';
import { Route, Routes } from 'react-router-dom';
import Register from './Pages/Register';
import Home from './Pages/Home';
import HealthProfile from './Pages/HealthProfile';
import Diet from './Pages/Diet';
function App() {
  return (
    <>

    <Routes>
    <Route path='/'element={<Home/>}/>
      <Route path='/login'element={<Login/>}/>
      <Route path='/register'element={<Register/>}/>
     
      <Route path='/heath-profile/:id'element={<HealthProfile/>}/>
      <Route path='/*'element={<Home/>}/>
      <Route path='/diet'element={<Diet/>}/>


      </Routes>
    </>
  )
}

export default App
