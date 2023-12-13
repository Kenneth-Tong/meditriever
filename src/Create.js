import React, { useState } from 'react';

const Create = ({ drugName, onSubmit }) => {
  const [effects, setEffects] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [contents, setContents] = useState('');
  const [howTo, setHowTo] = useState('');
  const [purpose, setPurpose] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const medicationData = { drugName, effects, companyName, contents, howTo, purpose };

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
        <label>Medication Name:</label>
        <input
          type="text"
          required
          value={drugName}
          onChange={() => {}} // Placeholder onChange to avoid warnings
        />
        <div></div>
        <label>Company:</label>
        <input
          required
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <div></div>
        <label>Symptoms:</label>
        <input
          required
          value={effects}
          onChange={(e) => setEffects(e.target.value)}
        />
        <div></div>
        <label>Purpose:</label>
        <input
          required
          value={purpose}
          onChange={(e) => setPurpose(e.target.value)}
        />
        <div></div>
        <label>Contents:</label>
        <input
          required
          value={contents}
          onChange={(e) => setContents(e.target.value)}
        />
        <div></div>
        <label>Intake:</label>
        <input
          required
          value={howTo}
          onChange={(e) => setHowTo(e.target.value)}
        />
        <div></div>
        <button>Add Medication</button>
      </form>
    </div>
  );
}

export default Create;
