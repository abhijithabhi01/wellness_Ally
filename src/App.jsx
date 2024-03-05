import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login';
import { Route, Routes } from 'react-router-dom';
import Register from './Pages/Register';
import Home from './Pages/Home';
import Bp from './Pages/Bp';
function App() {
  return (
    <>

    <Routes>
    <Route path='/'element={<Home/>}/>
      <Route path='/login'element={<Login/>}/>
      <Route path='/register'element={<Register/>}/>
      <Route path='/bp'element={<Bp/>}/>
      <Route path='/*'element={<Home/>}/>


      </Routes>
    </>
  )
}

export default App
