import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'react-dangerous-html'

import Offer from '../components/Offer'
import Guide from '../components/Guide'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <a href="#name" className="home-link">
        <div className="home-go-to-top">
          <svg viewBox="0 0 1024 1024" className="home-icon">
            <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
          </svg>
        </div>
      </a>
      <section id="name" className="home-intro">
        <div className="home-home">
          <div className="home-video">
            <div className="home-tint">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1624204921625-49bb8dce6730?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQyfHxtZWRpY2luZXN8ZW58MHx8fHwxNzAxMTM3NjY4fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
                className="home-image"
              />
            </div>
          </div>
          <div className="home-content">
            <header data-thq="thq-navbar" className="home-navbar">
              <div className="home-container1">
                <div data-thq="thq-navbar-nav" className="home-desktop-menu">
                  <Link to="/home" className="home-navlink">
                    <img
                      alt="image"
                      src="/Icons/meditriever_logo.png"
                      className="home-image1"
                    />
                  </Link>
                  <div className="home-buttons">
                    <svg viewBox="0 0 1024 1024" className="home-icon02">
                      <path d="M512 598q108 0 225 47t117 123v86h-684v-86q0-76 117-123t225-47zM512 512q-70 0-120-50t-50-120 50-121 120-51 120 51 50 121-50 120-120 50z"></path>
                    </svg>
                    <Link to="/login-page" className="home-login button">
                      Login
                    </Link>
                
                  </div>
                </div>
              </div>
              <div data-thq="thq-burger-menu" className="home-menu">
                <button className="home-hamburger button">
                  <svg viewBox="0 0 1024 1024" className="home-icon04">
                    <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                </button>
              </div>
              <div data-thq="thq-mobile-menu" className="home-mobile-menu">
                <div
                  data-thq="thq-mobile-menu-nav"
                  data-role="Nav"
                  className="home-nav"
                >
                  <div className="home-container2">
                    <img alt="logo" src="/logo.svg" className="home-logo" />
                    <div data-thq="thq-close-menu" className="home-menu-close">
                      <svg viewBox="0 0 1024 1024" className="home-icon06">
                        <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                      </svg>
                    </div>
                  </div>
                  <nav
                    data-thq="thq-mobile-menu-nav-links"
                    data-role="Nav"
                    className="home-nav1"
                  >
                    <span className="home-text">About</span>
                    <span className="home-text01">Features</span>
                    <span className="home-text02">Pricing</span>
                    <span className="home-text03">Team</span>
                    <span className="home-text04">Blog</span>
                  </nav>
                  <div className="home-container3">
                    <button className="home-login1 button">Login</button>
                    <button className="button">Register</button>
                  </div>
                </div>
                <div className="home-icon-group">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon08"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon10"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="home-icon12"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </div>
              </div>
            </header>
            <div className="home-center">
              <div className="home-heading">
                <h1 className="home-header">Meditriever</h1>
                <p class="py-4">
                  Fetch, retrieve, and store medications you need.   
                </p>
              </div>
              <div className="home-border"></div>
              <input
                type="text"
                placeholder="Search a medication"
                className="home-textinput input"
              />
              <button name="Search" type="button" className="button">
                <span>
                  <span>Search</span>
                  <br></br>
                </span>
              </button>
              <div className="home-container4">
                <div className="home-explore">
                  <a href="#new" className="home-link01 button">
                    Add a New Prescription
                  </a>
                  <a href="#new" className="home-link02 Heading">
                    New
                  </a>
                </div>
                <div className="home-new">
                  <a href="#explore" className="home-link03 button">
                    Explore Store Locations
                  </a>
                  <a href="#explore" className="home-link04 Heading">
                    Explore
                  </a>
                </div>
                <div className="home-about">
                  <a href="#about" className="home-link05 button">
                    Learn more about us!
                  </a>
                  <a href="#about" className="home-link06 Heading">
                    About Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-boarder"></div>
      </section>
      <section id="new" className="home-popular-prescriptions">
        <div className="home-main">
          <div className="home-heading1">
            <h2 className="home-header1">Popular Medications</h2>
          </div>
        </div>
        <div className="home-offers">
          <Link to="/home">
            <div className="home-offer-container">
              <Offer
                Image="https://images.unsplash.com/photo-1632067694852-8386d261115a?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHR5bGVub2x8ZW58MHx8fHwxNzAxMTM4MDE4fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
                Guides="Two common side-effects"
                Location="Tylenol"
                Description="Usually taken for pain relief."
              ></Offer>
            </div>
          </Link>
          <Link to="/home">
            <div className="home-offer-container1">
              <Offer
                Image="https://images.unsplash.com/photo-1675521005096-729123cd1dc8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fGFkZGVyYWxsfGVufDB8fHx8MTcwMTEzODA0NXww&amp;ixlib=rb-4.0.3&amp;w=1500"
                Guides="x common side-effects"
                Location="Adderall"
              ></Offer>
            </div>
          </Link>
          <Link to="/home">
            <div className="home-offer-container2">
              <Offer
                Image="https://images.unsplash.com/photo-1544991936-9464fa9919d2?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ2fHxtZWRpY2luZXxlbnwwfHx8fDE3MDExMzg2OTB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
                Guides="x common side-effects"
                Location="Prozac"
              ></Offer>
            </div>
          </Link>
          <Link to="/home">
            <div className="home-offer-container3"></div>
          </Link>
          <Link to="/home">
            <div className="home-offer-container4"></div>
          </Link>
          <Link to="/home">
            <div className="home-offer-container5"></div>
          </Link>
          <Link to="/home">
            <div className="home-offer-container6"></div>
          </Link>
          <Link to="/home">
            <div className="home-offer-container7"></div>
          </Link>
          <Link to="/home">
            <div className="home-offer-container8"></div>
          </Link>
        </div>
        <div className="home-pagination">
          <button className="home-previous button-option button">
            <svg viewBox="0 0 1024 1024" className="home-icon14">
              <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
            </svg>
            <span className="home-text08">Previous</span>
          </button>
          <div className="home-pages">
            <div className="home-primary">
              <div className="home-number-current page-current page">
                <span className="home-text09">1</span>
              </div>
              <div className="page">
                <span className="home-text10">2</span>
              </div>
              <div className="page home-number1">
                <span className="home-text11">3</span>
              </div>
            </div>
            <img alt="image" src="/more.svg" className="home-more" />
            <div className="home-max-number page">
              <span className="home-text12">
                <span>5</span>
                <br></br>
              </span>
            </div>
          </div>
          <button className="home-next button-option button">
            <span className="home-text15">Next</span>
            <svg viewBox="0 0 1024 1024" className="home-icon16">
              <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
            </svg>
          </button>
        </div>
      </section>
      <section id="how-it-works" className="home-new-user-create-account">
        <div className="home-highlight">
          <div className="home-content1">
            <div className="home-heading2">
              <h2 className="home-header2">New User? </h2>
              <p className="home-caption1">Sign up for free!</p>
            </div>
            <button className="button-arrow button">

            <Link to="/login-page">
              <a href="#how-it-works" className="home-link08">
                <span className="home-text16">Read more</span>
                <br></br>
              </a>
            </Link>
            
            </button>
          </div>
          <div className="home-image2">
            <div className="home-container5"></div>
            <div className="home-rectangle"></div>
          </div>
        </div>
      </section>
      <section id="explore" className="home-find-a-pharmacy">
        <div className="home-video-details">
          <div className="home-heading3">
            <h2 className="home-header3">Explore.</h2>
          </div>
        </div>
        <p className="home-caption2">
          Most common pharmacies for all your medications in the area
        </p>
        <div className="home-highlight1">
          <div className="home-image3">
            <img
              alt="image"
              src="/highlight-2-1500w.png"
              className="home-image4"
            />
          </div>
          <div className="home-content2">
            <div className="home-heading4">
              <h2 className="home-header4">Need a medication?</h2>
              <p className="home-caption3">
                <span>
                  We have you covered. Find the closest pharmacy to you with the
                  press of a button.
                </span>
                <br></br>
              </p>
            </div>
            <button className="home-find button">Find </button>
          </div>
        </div>
      </section>
      <section id="about" className="home-about-us">
        <div className="home-heading5">
          <Link to="/about-us" className="home-navlink10">
            <h2 className="home-header5">Meet Meditriever</h2>
          </Link>
          <p className="home-caption4">The founders of Meditriever</p>
        </div>
        <div className="home-list">
          <Link to="/home">
            <div className="home-guide-wrapper">
              <Guide
                Name="Kenneth Tong"
                Location="Biology CMG, Computer Science 2025"
                Portrait="/Guides/ken.jpg"
                rootClassName="guide-root-class-name9"
              ></Guide>
            </div>
          </Link>
          <Link to="/home">
            <div className="home-guide-wrapper1">
              <Guide
                Name="Natalie Cheng"
                Location="Computer Science 2025"
                Portrait="/Guides/natalie.jpg"
                rootClassName="guide-root-class-name2"
              ></Guide>
            </div>
          </Link>
          <Link to="/home">
            <div className="home-guide-wrapper2">
              <Guide
                Name="Aparna Singh"
                Location="Computer Science, EAP 2025"
                Portrait="/Guides/aparna.jpg"
                rootClassName="guide-root-class-name"
              ></Guide>
            </div>
          </Link>
          <Link to="/home">
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
        <div className="home-container8">
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

export default Home
