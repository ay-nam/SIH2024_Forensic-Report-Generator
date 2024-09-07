// components/DynamicTextBoxes.js
import React, { useState } from 'react';

const TextBoxes = () => {
  const [numberOfBoxes, setNumberOfBoxes] = useState(0);
  const [textBoxes, setTextBoxes] = useState([]);

  // Handle the input change to update the number of text boxes
  const handleChange = (event) => {
    const value = parseInt(event.target.value, 10);

    if (!isNaN(value) && value >= 0) {
      setNumberOfBoxes(value);
      setTextBoxes(Array(value).fill('')); // Create an array of empty strings based on the entered number
    } else {
      setNumberOfBoxes(0);
      setTextBoxes([]);
    }
  };

  // Update the value of each text box
  const handleTextBoxChange = (index, event) => {
    const updatedTextBoxes = [...textBoxes];
    updatedTextBoxes[index] = event.target.value;
    setTextBoxes(updatedTextBoxes);
  };

  // Submit data to backend
  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/submit-textboxes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ textBoxes }), // Sending the textBoxes array as JSON
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Data submitted successfully:', result);
        alert('Data submitted successfully!');
      } else {
        console.error('Failed to submit data:', response.statusText);
        alert('Failed to submit data.');
      }
    } catch (error) {
      console.error('Error submitting data:', error);
      alert('Error submitting data.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <label htmlFor="number-input" style={{ marginRight: '10px' }}>
        Enter the number of text boxes:
      </label>
      <input
        id="number-input"
        type="number"
        value={numberOfBoxes}
        onChange={handleChange}
        min="0"
        style={{ width: '50px', marginBottom: '20px' }}
      />
      <div>
        {textBoxes.map((value, index) => (
          <input
            key={index}
            type="text"
            value={value}
            onChange={(event) => handleTextBoxChange(index, event)}
            placeholder={`Text Box ${index + 1}`}
            style={{
              display: 'block',
              margin: '10px 0',
              padding: '8px',
              width: '300px',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          />
        ))}
      </div>
      <button
        onClick={handleSubmit}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          borderRadius: '5px',
          border: '1px solid #ccc',
          backgroundColor: '#28a745',
          color: '#fff',
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default TextBoxes;
