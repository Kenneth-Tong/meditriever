import React, { useState } from 'react';

const CreateLocation = ({ locationName, onSubmit }) => {
  const [address, setAddress] = useState('');
  const [times, setTimes] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const locationData = { locationName, address, times };

    console.log('Submitting medication data from CreateLocation:', locationData);

    try {
      // Send medicationData to the backend
      if (onSubmit) {
        await onSubmit(locationData);
        console.log("Send and works");
      }
    } catch (error) {
      console.error('Error sending data to the backend:', error);
    }
  };

  return (
    <div>
        <p>This Ran</p>
    </div>
  );
}

export default CreateLocation;
