import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
// import Service from './Components/Pages/Service';
import Products from './Components/Pages/Products';
import Contact from './Components/Pages/Contact';
import Blog from './Components/Pages/Blog';
import Login from './Components/Pages/Login';
import Uno from './Components/Product_Pages/Uno'
import Hexa from './Components/Product_Pages/Hexa'
import Octa from './Components/Product_Pages/Octa'
import Quadra from './Components/Product_Pages/Quadra';

//npm start


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/about' element = {<About />} />
      {/* <Route path='/service' element = {<Service />} /> */}
      <Route path='/product' element = {<Products />} />
      <Route path='/contact' element = {<Contact />} />
      <Route path='/blog' element = {<Blog />} />
      <Route path='/login' element = {<Login />} />
      <Route path='/Uno' element = {<Uno />} />
      <Route path='/Hexa' element = {<Hexa />} />
      <Route path='/Octa' element = {<Octa />} />
      <Route path='/Quadra' element = {<Quadra />} />
    </Routes>
    
    
    </>
  );
}

export default App;
