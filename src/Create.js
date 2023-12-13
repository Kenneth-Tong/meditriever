import React, { useState } from 'react';

const Create = ({ drugName, onSubmit }) => {
  const [effects, setEffects] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [contents, setContents] = useState('');
  const [howTo, setHowTo] = useState('');
  const [purpose, setPurpose] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const medicationData = { drugName, effects, companyName, purpose, contents, howTo };

    console.log('Submitting medication data from Create:', medicationData);

    try {
      // Send medicationData to the backend
      if (onSubmit) {
        await onSubmit(medicationData);
        console.log("Send and works");
      }
    } catch (error) {
      console.error('Error sending data to the backend:', error);
    }
  };

  return (
    <div className="create">
      <h2>Medication Information</h2>
      <form onSubmit={handleSubmit}>
        <button>Add Medication</button>
      </form>
    </div>
  );
}

export default Create;
