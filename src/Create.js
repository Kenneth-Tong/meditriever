import React, { useState } from 'react';

const CreateDrug = ({ drugName, onSubmit }) => {
  const [generic_name, setEffects] = useState('');
  const [brand_name, setCompanyName] = useState('');
  const [active_ingredients, setActive_Ingredients] = useState('');
  const [warnings, setWarnings] = useState('');
  const [purpose, setPurpose] = useState('');
  const [reactions, setReactions] = useState('');
  const [interactions, setInteractions] = useState('');
  const [dosage_and_administration, setDosage_and_Administration] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const medicationData = { drugName, generic_name, brand_name, purpose, active_ingredients, warnings, reactions, interactions, dosage_and_administration };

    console.log('Submitting medication data from CreateDrug:', medicationData);

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
    <div className="create drug">
      <h2>Medication Information</h2>
      <form onSubmit={handleSubmit}>
        <button>Add Medication</button>
      </form>
    </div>
  );
}

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
        <p>This ran</p>
    </div>
  );
}

export default { CreateDrug, CreateLocation };
