import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Script from 'react-dangerous-html';
import { Helmet } from 'react-helmet';
import axios from 'axios';

const findLocation = () => {

    const [zipCode, setZipCode] = useState('');
    const [pharmacy, setPharmacy] = useState(null);

    const handleZipCodeChange = (e) => {
        setZipCode(e.target.value);
    };

    const handleFindPharmacy = async () => {
    try {
        const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=your_latitude,your_longitude&radius=5000&type=pharmacy&keyword=pharmacy&key=your_google_maps_api_key`
    );

    if (response.data.results.length > 0) {
        setPharmacy(response.data.results[0]);
    } 
    else {
        setPharmacy(null);
    }} 
    catch (error) {
      console.error('Error fetching pharmacy data:', error);}
    };

  return (
    <div>
      <h1>Pharmacy Locator</h1>
      <label>
        Enter your ZIP code:
        <input type="text" value={zipCode} onChange={handleZipCodeChange} />
      </label>
      <button onClick={handleFindPharmacy}>Find Pharmacy</button>
      {pharmacy && (
        <div>
          <h2>Closest Pharmacy</h2>
          <p>Name: {pharmacy.name}</p>
          <p>Address: {pharmacy.vicinity}</p>
        </div>
      )}
    </div>
  );
}

export default findLocation;