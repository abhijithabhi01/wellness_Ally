import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login';
import { Route, Routes } from 'react-router-dom';
import Register from './Pages/Register';
import Home from './Pages/Home';
import HealthProfile from './Pages/HealthProfile';
import HealthIssue from './Pages/HealthIssue';
function App() {
  return (
    <>

    <Routes>
    <Route path='/'element={<Home/>}/>
      <Route path='/login'element={<Login/>}/>
      <Route path='/register'element={<Register/>}/>
      <Route path='/heath-profile/:id'element={<HealthProfile/>}/>
      <Route path='/health-issue/:id'element={<HealthIssue/>}/>
      <Route path='/*'element={<Home/>}/>


      </Routes>
    </>
  )
}

export default App
