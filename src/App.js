import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './views/home.js'
import LoginPage from './views/login-page.js'
import FAQs from './views/fa-qs.js'
import NotFound from './views/not-found.js'
import AboutDrug from './views/about-drug.js'
import AboutLocation from './views/about-location.js';

function App() {
  return (
    <div>
      <nav>...</nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-drug/:drugName" component={AboutDrug} element={<AboutDrug />} />
          <Route path="/login-page" element={<LoginPage />} />
          <Route path="/fa-qs" element={<FAQs />} />
          <Route path="/about-location/:locationName" component={AboutLocation} element={<AboutLocation />} />
          <Route path="/404" element={<NotFound />} />
      </Routes>
  </div>
  );
}

export default App;


