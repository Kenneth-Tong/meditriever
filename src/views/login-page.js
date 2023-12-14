import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Login from '../components/login'; // Import the Login component
import Logout from '../components/logout'; //Import the Logout component
import useGoogleOAuth from './useGoogleOAuth'; //Import Login Hook
import AboutDrug from './about-drug'

import Script from 'react-dangerous-html';
import { Helmet } from 'react-helmet';
import {gapi} from 'gapi-script';

import './login-page.css'

const clientID = "26529385532-afh4c5tp9ijjh4eg1utsaa8p16c9bgvl.apps.googleusercontent.com";

function LoginPage() {

//const LoginPage = (props) => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const { isAuthenticated, user, login, logout } = useGoogleOAuth();
 
  //handleLogin funtion to send a POST request to the Flask server with the user data
  const handleLogin = () => {
    function nameDrug(){
      let userInput = document.querySelector("#userInput");
      {/* Pass userInput to AboutDrug component */}
      <AboutDrug drugName={userInput} />
      }

    // Prepare the user data to send to the server
    const userData = {
      username: username,
      email: email,
    };

    // Make a POST request to Flask server
    fetch('/add_user', {
      method: 'POST',
      mode:'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.message); // Handle the response from the server
      })
      .catch(error => {
        console.error('Error:', error);
      });

    // Send the search entry to Flask server
  const searchEntry = 'userInput'
  const searchUserData = {
    email: email, // Assuming you have the user's email
    user_search_input: searchEntry,
  };

  fetch('/add_search', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(searchUserData),
  })
    .then(response => response.json())
    .then(data => {
      console.log(data.message); // Handle the response from the server
    })
    .catch(error => {
      console.error('Error:', error);
    });
};


  //for login successes and failures
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientID: clientID,
        scope: "",
      })
    };

    gapi.load('client:auth2', start);
  })


  return (
    <div className="login-page-container">
      <header data-thq="thq-navbar" className="login-page-navbar">
        <div className="login-page-container1">
          <header
            data-thq="thq-navbar"
            className="login-page-navbar-interactive"
          >
            <div data-thq="thq-navbar-nav" className="login-page-desktop-menu">
              <Link to="/" className="login-page-navlink">
                <img
                  alt="image"
                  src="/Icons/meditriever_logo.png"
                  className="login-page-image"
                />
              </Link>
              <div className="login-page-buttons">
                <button type="button" className="login-page-login button">
                  Login
                </button>
              </div>
            </div>
          </header>
        </div>
      </header>
      <section className="login-page-login-box">
        <div id="faqs" className="login-page-content">
          <div className="login-page-heading"></div>
          <h2 className="login-page-header">Login</h2>
          <p className="login-page-caption">
            Use Google to Login or sign in with your username and password
          </p>
          <div className="login-page-accordion">
          </div>
          
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <button onClick={handleLogin}> <Link to = '/'> Login </Link> </button>
              
          </div>
          
          <div>
            {isAuthenticated ? (
              <div>
                <p>Welcome, {user.name}!</p>
                <button onClick={logout}>Logout</button>
              </div>
            ) : (
              <button onClick={login}>Login with Google</button>
            )}
          </div>
    
          <div class="col s12 m6 offset-m3 center-align">
            {isAuthenticated ? (
              <div>
                <p>Welcome, {user.name}!</p>
                <button onClick={logout}>Logout</button>
              </div>
            ) : (
                <button onClick={login}>Login with Google</button>
            )}
            
            <Logout />
          </div>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/css/materialize.min.css"></link>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/js/materialize.min.js"></script>
            
        </div>
      </section>
      <section className="home-footer">
        <div className="home-content3">
          <div className="home-container6">
            <img
              alt="image"
              src="/Icons/meditriever_logo.png"
              className="home-image5"
            />
            <div className="home-main1">
              <div className="home-branding">
                <div className="home-heading6"></div>
              </div>
              <div className="home-links">
                <div className="home-items">
                  <Link to="/login-page">
                    <a href="#how-it-works" className="home-link08">
                      <span>
                      <font color="white">Sign In</font>
                      </span>
                      <br></br>
                    </a>
                    <Link to="/fa-qs" className="home-navlink15">
                      <span>
                        <font color="white">FAQs</font>
                      </span>
                      <br></br>
                    </Link>
                  </Link>
                </div>
                <div className="home-items1">
                  <a
                    href="#explore"
                    className="home-link09 button button-clean"
                  >
                    <span className="home-text24">
                      <span>Your Closest Pharmacy</span>
                      <br></br>
                    </span>
                    <span>
                      <span>Find a Medication</span>
                      <br></br>
                    </span>
                  </a>
                </div>
                <div className="home-items2">
                  <a href="#about" className="home-link10 button button-clean">
                    <span>
                      <span>About Us</span>
                      <br></br>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <span className="home-copyright">
            © 2023 Meditriever. All Rights Reserved.
          </span>
        </div>
      </section>
      <div>
        <div className="login-page-container6">
          <Script
            html={`<script>
  function initAccordion() {
    /*
    Accordion - Code Embed
    */
    const accordionContainers = document.querySelectorAll(
      '[data-role="accordion-container"]'
    ); // All accordion containers
    const accordionContents = document.querySelectorAll(
      '[data-role="accordion-content"]'
    ); // All accordion content
    const accordionIconsClosed = document.querySelectorAll(
      '[data-role="accordion-icon-closed"]'
    ); // All accordion closed icons
    const accordionIconsOpen = document.querySelectorAll(
      '[data-role="accordion-icon-open"]'
    ); // All accordion open icons

    accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
    });

    accordionIconsClosed.forEach((icon) => {
      icon.style.display = "flex";
    });

    accordionIconsOpen.forEach((icon) => {
      icon.style.display = "none";
    });

    accordionContainers.forEach((accordionContainer, index) => {
      if (accordionContainer.classList.contains("initialised")) {
        return;
      }

      accordionContainer.classList.add("initiased");

      accordionContainer.addEventListener("click", () => {
        if (accordionContents[index].style.display === "flex") {
          // If the accordion is already open, close it
          accordionContents[index].style.display = "none";
          accordionIconsClosed[index].style.display = "flex";
          accordionIconsOpen[index].style.display = "none";
        } else {
          // If the accordion is closed, open it
          accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
          });

          accordionIconsClosed.forEach((accordionIcon) => {
            accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
          });

          accordionIconsOpen.forEach((accordionIcon) => {
            accordionIcon.style.display = "none";
          });

          accordionContents[index].style.display = "flex"; // Shows accordion content
          accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
          accordionIconsOpen[index].style.display = "flex";
        }
      });
    });
  }

  initAccordion();
</script>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}



export default LoginPage
