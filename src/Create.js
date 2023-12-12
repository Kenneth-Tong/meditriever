import { useState } from "react";

const Create = () => {
  const [drugName, medication] = useState('');
  const [effects, symptoms] = useState('');
  const [companyName, company] = useState('');
  const [contents, ingredients] = useState('');
  const [howTo, intake] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const medicationData = { drugName, effects, companyName, contents, howTo };

    try {
      const response = await fetch('http://localhost:3000/about-drug', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(medicationData),
      });

      const data = await response.json();
      console.log('Data from the backend:', data);
    } catch (error) {
      console.error('Error sending data to the backend:', error);
    }
  };

return (
    <div className="create">
      <h2>Medication Information</h2>
      <form onSubmit={handleSubmit}>
        <label>Medication Name:</label>
        <h2
          type="text" 
          required 
          value={drugName}
          onChange={(e) => medication(e.target.value)}
        />
        <div></div>
        <label>Company:</label>
        <h2
          required
          value={companyName}
          onChange={(e) => company(e.target.value)}
        />
        <div></div>
         <label>Symptoms:</label>
        <h2
          required
          value={effects}
          onChange={(e) => symptoms(e.target.value)}
        />
        <div></div>
        <label>Contents:</label>
        <h2
          required
          value={contents}
          onChange={(e) => ingredients(e.target.value)}
        />
        <div></div>
        <label>Intake:</label>
        <h2
          required
          value={howTo}
          onChange={(e) => intake(e.target.value)}
        />
        <div></div>
        <button>Add Medication</button>
      </form>
    </div>
  );
}
 
export default Create;