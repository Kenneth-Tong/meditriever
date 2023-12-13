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
      <h1>About Drug</h1>
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
