import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import Register from './components/Register';
import LoginIn from './components/LoginIn';


const App = () => {
return(
  <div className="App">
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element ={<Home />}></Route>
    <Route path='/cart' element ={<Cart />}></Route>
    <Route path ='/signup' element={<Register/>}></Route>
    <Route path ='/login' element={<LoginIn/>}></Route>
  </Routes>
  </BrowserRouter>
  {/* <Register/> */}
  
</div>

)
}
export default App;