import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'react-dangerous-html'
import { Helmet } from 'react-helmet'

import Guide from '../components/Guide'
import './about-us.css'

const AboutUs = (props) => {
  return (
    <div className="about-us-container">
      <Helmet>
        <title>About-Us - Traveler template</title>
        <meta property="og:title" content="About-Us - Traveler template" />
      </Helmet>
      <header data-thq="thq-navbar" className="about-us-navbar">
        <div className="about-us-container1">
          <header data-thq="thq-navbar" className="about-us-navbar-interactive">
            <div data-thq="thq-navbar-nav" className="about-us-desktop-menu">
              <Link to="/" className="about-us-navlink">
                <img
                  alt="image"
                  src="/Icons/mediritriever_logo_ideas-removebg-preview-300w.png"
                  className="about-us-image"
                />
              </Link>
              <svg viewBox="0 0 1024 1024" className="about-us-icon">
                <path d="M512 598q108 0 225 47t117 123v86h-684v-86q0-76 117-123t225-47zM512 512q-70 0-120-50t-50-120 50-121 120-51 120 51 50 121-50 120-120 50z"></path>
              </svg>
              <div className="about-us-buttons">
                <button type="button" className="about-us-login button">
                  Login
                </button>
                <button type="button" className="about-us-register button">
                  Register
                </button>
              </div>
            </div>
            <div data-thq="thq-burger-menu" className="about-us-burger-menu">
              <svg viewBox="0 0 1024 1024" className="about-us-icon02">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-thq="thq-mobile-menu" className="about-us-mobile-menu">
              <div className="about-us-nav">
                <div className="about-us-top">
                  <img
                    alt="image"
                    src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                    className="about-us-logo"
                  />
                  <div
                    data-thq="thq-close-menu"
                    className="about-us-close-menu"
                  >
                    <svg viewBox="0 0 1024 1024" className="about-us-icon04">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav className="about-us-links">
                  <span className="about-us-text">About</span>
                  <span className="about-us-text01">Features</span>
                  <span className="about-us-text02">Pricing</span>
                  <span className="about-us-text03">Team</span>
                  <span className="about-us-text04">Blog</span>
                </nav>
                <div className="about-us-buttons1">
                  <button className="about-us-login1 button">Login</button>
                  <button className="button">Register</button>
                </div>
              </div>
              <div>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="about-us-icon06"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="about-us-icon08"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="about-us-icon10"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </header>
        </div>
        <div data-thq="thq-burger-menu" className="about-us-menu">
          <button className="about-us-hamburger button">
            <svg viewBox="0 0 1024 1024" className="about-us-icon12">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </button>
        </div>
        <div data-thq="thq-mobile-menu" className="about-us-mobile-menu1">
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="about-us-nav1"
          >
            <div className="about-us-container2">
              <img alt="logo" src="/logo.svg" className="about-us-logo1" />
              <div data-thq="thq-close-menu" className="about-us-menu-close">
                <svg viewBox="0 0 1024 1024" className="about-us-icon14">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className="about-us-nav2"
            >
              <span className="about-us-text05">About</span>
              <span className="about-us-text06">Features</span>
              <span className="about-us-text07">Pricing</span>
              <span className="about-us-text08">Team</span>
              <span className="about-us-text09">Blog</span>
            </nav>
            <div className="about-us-container3">
              <button className="about-us-login2 button">Login</button>
              <button className="button">Register</button>
            </div>
          </div>
          <div className="about-us-icon-group1">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="about-us-icon16"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="about-us-icon18"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="about-us-icon20"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <section id="about" className="home-about-us">
        <div className="home-heading5">
          <Link to="/about-us" className="home-navlink10">
            <h2 className="home-header5">Meet Meditriever</h2>
          </Link>
          <p className="home-caption4">The founders of Meditriever</p>
        </div>
        <div className="home-list">
          <Link to="/">
            <div className="home-guide-wrapper">
              <Guide
                Name="Kenneth Tong"
                Location="Biology CMG, Computer Science 2025"
                Portrait="/Guides/ken.jpg"
                rootClassName="guide-root-class-name9"
              ></Guide>
            </div>
          </Link>
          <Link to="/">
            <div className="home-guide-wrapper1">
              <Guide
                Name="Natalie Cheng"
                Location="Computer Science, Anthropology 2025"
                Portrait="/Guides/natalie.jpg"
                rootClassName="guide-root-class-name2"
              ></Guide>
            </div>
          </Link>
          <Link to="/">
            <div className="home-guide-wrapper2">
              <Guide
                Location="Computer Science, EAP 2025"
                Portrait="/Guides/aparna.jpg"
                rootClassName="guide-root-class-name"
                Name="Aparna Singh"
              ></Guide>
            </div>
          </Link>
          <Link to="/">
            <div className="home-guide-wrapper3">
              <Guide
                Name="Katherine Zhang"
                Location="BMB 2025"
                Portrait="/Guides/kat.jpg"
                rootClassName="guide-root-class-name1"
              ></Guide>
            </div>
          </Link>
        </div>
      </section>
      <section className="about-us-footer">
        <div className="about-us-content">
          <div className="about-us-main">
            <div className="about-us-branding">
              <div className="about-us-heading1">
                <img alt="image" src="/logo.svg" className="about-us-image1" />
                <p className="about-us-caption1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
              </div>
            </div>
            <div className="about-us-links1">
              <div className="about-us-items">
                <button className="about-us-link button button-clean">
                  Find a guide
                </button>
                <a
                  href="#destinations"
                  className="about-us-link01 button button-clean"
                >
                  Find a tour
                </a>
                <a
                  href="#destinations"
                  className="about-us-link02 button button-clean"
                >
                  Visit a city
                </a>
                <a
                  href="#destinations"
                  className="about-us-link03 button button-clean"
                >
                  Visit a country
                </a>
              </div>
              <div className="about-us-items1">
                <button className="about-us-link04 button button-clean">
                  How it works
                </button>
                <button className="about-us-link05 button button-clean">
                  Cancelation policy
                </button>
                <button className="about-us-link06 button button-clean">
                  Local guides
                </button>
                <button className="about-us-link07 button button-clean">
                  Affiliate
                </button>
              </div>
              <div className="about-us-items2">
                <button className="about-us-link08 button button-clean">
                  About us
                </button>
                <button className="about-us-link09 button button-clean">
                  Blog
                </button>
                <button className="about-us-link10 button button-clean">
                  Partners
                </button>
                <button className="about-us-link11 button button-clean">
                  Faqs
                </button>
                <button className="about-us-link12 button button-clean">
                  Careers
                </button>
              </div>
            </div>
          </div>
          <span className="about-us-copyright">
            © 2022 Character. All Rights Reserved.
          </span>
        </div>
      </section>
      <div>
      </div>
    </div>
  )
}

export default AboutUs
