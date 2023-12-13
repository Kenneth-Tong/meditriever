import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Create from '../Create';

const api = 'http://127.0.0.1:5000/'

const AboutDrug = () => {
  const { drugName } = useParams();
  const [drugData, setDrugData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        console.log('Name:', drugName);

        // test
        const r = await fetch(api + 'test')

        console.log(r)

        var body = {
          'drug':drugName
        }
      
        const apiUrl = `${api}about-drug`;
        console.log('Request URL:', apiUrl);
        console.log('data:', JSON.stringify(body))
        const response = await fetch(apiUrl, {
          method:'POST',
          mode:'cors',
          headers:{
            'Content-type':'application/json'
          },
          body:JSON.stringify(body)
        });

        if (!response.ok) {
          console.error('HTTP error! Status:', response.status);
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Parsed Data:', data);

        setDrugData(data);
      } catch (error) {
        console.error('Error fetching data from the backend:', error);
        setError('Error fetching data. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [drugName]);

  return (
    <div className="about-drug">

    <header data-thq="thq-navbar" className="home-navbar">
      <div className="home-container1">
        <div data-thq="thq-navbar-nav" className="home-desktop-menu">
          <Link to="/" className="home-navlink">
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
            <Link to="/login-page" className="search-button home-login">
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

      <h1>About Medication</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {drugData && (
        <div>
          <p>Generic Name: {drugData.generic_name}</p>
          <p>Brand Name: {drugData.brand_name}</p>
          <p>Purpose for Taking: {drugData.purpose}</p>
          <p>Active Ingredients: {drugData.active_ingredients}</p>
          <p>Warnings: {drugData.warnings}</p>
          <p>Possible Reactions: {drugData.reactions}</p>
          <p>Drug Interactions: {drugData.interactions}</p>
          <p>Dosage and Administration: {drugData.dosage_and_administration}</p>

          {/* Pass drugName to Create component */}
          <Create drugName={drugName} />
        </div>
      )}

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
    </div>
  );
}

export default AboutDrug;
