import React from 'react';
import Home from './pages/home/Home';
import About from './pages/about/About';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Signup from './pages/signup/Signup';
import SignIn from './pages/signin/SignIn';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
