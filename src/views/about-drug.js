import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Create from '../Create';

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

        // Construct the full URL
        const apiUrl = `http://localhost:3000/about-drug/${drugName}`;
        console.log('Request URL:', apiUrl);

        // Make the fetch request with GET method (assuming small data)
        const response = await fetch(apiUrl);

        // Check for HTTP error status
        if (!response.ok) {
          console.error('HTTP error! Status:', response.status);
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse JSON response
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
          <p>Warnings: {drugData.warnings}</p>
          <p>Brand Name: {drugData.brand_name}</p>
          <p>Indications and Usage: {drugData.indications_and_usage}</p>
          <p>Inactive Ingredients: {drugData.inactive_ingredients}</p>
          <p>Dosage and Administration: {drugData.dosage_and_administration}</p>

          {/* Pass drugName to Create component */}
          <Create drugName={drugName} />
        </div>
      )}
    </div>
  );
}

export default AboutDrug;
