import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './views/home.js';
import AboutUs from './views/about-us.js'
//import LoginPage from './views/login-page.js'
import FAQs from './views/fa-qs.js'
import NotFound from './views/not-found.js'

function App() {
  return (
    <Routes>
      <Route component={Home} exact path ="/home" /> 
      <Route component={AboutUs} exact path="/about-us" />
      <Route component={Home} exact path="/" />
      <Route component={FAQs} exact path="/fa-qs" />
      <Route component={NotFound} path="**" />
    </Routes>
  );
}

export default App;


