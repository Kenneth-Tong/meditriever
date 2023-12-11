import { useState } from "react";

const Create = () => {
    const[drugName, medication] = useState('');
    const[effects, symptoms] = useState('');
    const[companyName, company] = useState('');
    const[contents, ingredients] = useState('');
    const[howTo, intake] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const home = { drugName, effects, companyName, contents, howTo };
        
        fetch('http://localhost:3000/drug', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(home)
        })
      };

      try {
        const response = await fetch('http://localhost:3000/drug', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        const data = await response.json();
        console.log('Data from the backend:', data);
      } catch (error) {
        console.error('Error sending data to the backend:', error);
      }
    };

return (
    <div className="create">
      <h2>Medication</h2>
      <form onSubmit={handleSubmit}>
        <label>Medication Name</label>
        <input 
          type="text" 
          required 
          value={drugName}
          onChange={(e) => medication(e.target.value)}
        />
        <label>Symptoms:</label>
        <textarea
          required
          value={effects}
          onChange={(e) => symptoms(e.target.value)}
        ></textarea>
        <label>Company:</label>
        <textarea
          required
          value={companyName}
          onChange={(e) => company(e.target.value)}
        ></textarea>
        <label>Contents:</label>
        <textarea
          required
          value={contents}
          onChange={(e) => ingredients(e.target.value)}
        ></textarea>
        <label>Intake:</label>
        <textarea
          required
          value={howTo}
          onChange={(e) => intake(e.target.value)}
        ></textarea>
        <button>Add Medication</button>
      </form>
    </div>
  );
}
 
export default Create;