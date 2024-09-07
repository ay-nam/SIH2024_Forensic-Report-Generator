// components/DynamicTextBoxes.js
import React, { useState } from 'react';

const TextBoxes = () => {
  const [numberOfBoxes, setNumberOfBoxes] = useState(0);
  const [textBoxes, setTextBoxes] = useState([]);

  const handleChange = (event) => {
    const value = parseInt(event.target.value, 10);

    if (!isNaN(value) && value >= 0) {
      setNumberOfBoxes(value);
      setTextBoxes(Array(value).fill(''));
    } else {
      setNumberOfBoxes(0);
      setTextBoxes([]);
    }
  };

  const handleTextBoxChange = (index, event) => {
    const updatedTextBoxes = [...textBoxes];
    updatedTextBoxes[index] = event.target.value;
    setTextBoxes(updatedTextBoxes);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/submit-textboxes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ textBoxes }),
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
    <div className="text-boxes-container">
      <label htmlFor="number-input" style={{ marginRight: '10px' }}>
        Enter the number of text boxes:
      </label>
      <input
        id="number-input"
        type="number"
        value={numberOfBoxes}
        onChange={handleChange}
        min="0"
        className="text-box-input"
      />
      <div>
        {textBoxes.map((value, index) => (
          <input
            key={index}
            type="text"
            value={value}
            onChange={(event) => handleTextBoxChange(index, event)}
            placeholder={`Text Box ${index + 1}`}
            className="text-box-input"
          />
        ))}
      </div>
      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default TextBoxes;
