import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams

import './about-drug.css';
import Create from '../Create'; // Import Create component

const AboutDrug = () => {
  const { drugName } = useParams(); // Use useParams to get drugName from URL
  const [drugData, setDrugData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`http://localhost:3000/about-drug/${drugName}`);
        const data = await response.json();

        console.log('Data from the backend in AboutDrug component:', data);
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
