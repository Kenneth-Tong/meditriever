import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
    </div>
  );
}

export default AboutDrug;
