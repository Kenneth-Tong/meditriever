import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import AboutUs from './views/about-us'
import Home from './views/home'
import LoginPage from './views/login-page'
import FAQs from './views/fa-qs'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={AboutUs} exact path="/about-us" />
        <Route component={Home} exact path="/" />
        <Route component={LoginPage} exact path="/login-page" />
        <Route component={FAQs} exact path="/fa-qs" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))