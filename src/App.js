import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import Home from './views/home.js';
import AboutUs from './views/about-us'
import Home from './views/home'
import LoginPage from './views/login-page'
import FAQs from './views/fa-qs'
import NotFound from './views/not-found'

function App() {
  return (
    <Routes>
      <Route component={Home} exact path ="/home"
      <Route component={AboutUs} exact path="/about-us" />
      <Route component={Home} exact path="/" />
      <Route component={LoginPage} exact path="/login-page" />
      <Route component={FAQs} exact path="/fa-qs" />
      <Route component={NotFound} path="**" />
      <Redirect to="**" />
    </Routes>
  );
}

export default App;


