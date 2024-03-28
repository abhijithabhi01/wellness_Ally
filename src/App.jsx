import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login';
import { Route, Routes } from 'react-router-dom';
import Register from './Pages/Register';
import Home from './Pages/Home';
import HealthProfile from './Pages/HealthProfile';
import HealthIssue from './Pages/HealthIssue';
import Symptoms from './Pages/Symptoms';
import Exercise from './Pages/Exersice';
import Diet from './Pages/Diet';
import Products from './Pages/Products/Products';
import ProductsList from './Pages/Products/ProductsList';
import Payment from './Pages/Products/Payment';
import CommunityChat from './Pages/CommunityChat';
import DocChat from './Pages/DocChat';
import BookAppointment from './Pages/BookAppointment';

function App() {
  console.log(import.meta.env);
const url = import.meta.env.VITE_APP_API_URL;
console.log(url);
  return (
    <>

    <Routes>
    <Route path='/'element={<Login/>}/>
      <Route path='/login'element={<Login/>}/>
      <Route path='/register'element={<Register/>}/>
      <Route path='/heath-profile/:id'element={<HealthProfile/>}/>
      <Route path='/health-issue/:id'element={<HealthIssue/>}/>
      <Route path='/health-issue/Symptoms'element={<Symptoms/>}/>
      <Route path='/health-issue/Exercise'element={<Exercise/>}/>
      <Route path='/health-issue/Diet'element={<Diet/>}/>
      <Route path='/health-issue/Products'element={<Products/>}/>
      <Route path='/health-issue/Products-list'element={<ProductsList/>}/>
      <Route path='/checkout' element={<Payment/>}/>
      <Route path='/*'element={<Home/>}/>
      <Route path='/chatt'element={<CommunityChat/>}/>
      <Route path='/docchat'element={<DocChat/>}/>
      <Route path='/bookappointment'element={<BookAppointment/>}/>
      
  
      </Routes>
    </>
  )
}

export default App
