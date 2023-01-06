import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import Register from './components/Register';
import LoginIn from './components/LoginIn';
import Profile from './pages/Profile';


const App = () => {
  // let navigate = useNavigate();
  //   const routeChange = () => {
  //       navigate('/login');
  //   }
  
    
return(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element ={<Home />}></Route>
    <Route path='/home' element ={<Home />}></Route>
    <Route path='/cart' element ={<Cart />}></Route>
    <Route path ='/signup' element={<Register/>}></Route>
    <Route path ='/login' element={<LoginIn/>}></Route>
    <Route path ='/profile' element={<Profile/>}></Route> 
  </Routes>
  </BrowserRouter>
)
}
export default App;