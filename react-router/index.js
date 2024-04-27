import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './component/User/layout';
import Home from './component/User/Home';
import About from './component/User/About';
import Services from './component/User/Services';
import Contactus from './component/User/Contactus';
import Registration from './component/User/Registration';
import Login from './component/User/Login';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/ >}>

            <Route path='/Home' element={<Home/ >}></Route>
            <Route path='/About' element={<About/ >}></Route>
            <Route path='/Services' element={<Services/ >}></Route>
            <Route path='/Contactus' element={<Contactus/ >}></Route>
            <Route path='/Registration' element={<Registration/ >}></Route>
            <Route path='/Login' element={<Login/ >}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    
      
    

  </React.StrictMode>
);



