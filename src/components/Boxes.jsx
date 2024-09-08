// components/FormContainer.js
import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import '../styles/box.css'; // Ensure this path is correct

const FormContainer = () => {
  const [textBoxes, setTextBoxes] = useState([]);
  const [images, setImages] = useState([]);

  // Handle change in the number of text boxes
  const handleChange = (event) => {
    const value = parseInt(event.target.value, 10);

    if (!isNaN(value) && value >= 0) {
      setTextBoxes(Array(value).fill('')); // Ensure textBoxes array is updated correctly
    } else {
      setTextBoxes([]);
    }
  };

  // Handle text box input change
  const handleTextBoxChange = (index, event) => {
    const updatedTextBoxes = [...textBoxes];
    updatedTextBoxes[index] = event.target.value;
    setTextBoxes(updatedTextBoxes);
  };

  // Handle image drop
  const onDrop = useCallback(
    (acceptedFiles, rejectedFiles) => {
      const imageFiles = acceptedFiles.filter((file) =>
        file.type.startsWith('image/')
      );

      if (rejectedFiles.length > 0 || imageFiles.length < acceptedFiles.length) {
        alert('Only image files are allowed.');
      }

      const uploadedImages = imageFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );
      setImages([...images, ...uploadedImages]);
    },
    [images]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/*',
    multiple: true,
  });

  // Handle remove image
  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  // Handle form submission
  const handleSubmit = async () => {
    const formData = new FormData();

    // Append text box data
    formData.append('textBoxes', JSON.stringify(textBoxes));

    // Append image files
    images.forEach((image) => {
      formData.append('images', image);
    });

    try {
      const response = await fetch('http://127.0.0.1:5000/upload', {
        method: 'POST',
        body: formData,
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
    <div className="form-container">
      {/* Image Dropzone Section */}
      <div className="dropzone-container" {...getRootProps()}>
        <input {...getInputProps()} />
        <p className="dropzone-message">
          {isDragActive
            ? 'Drop the images here ...'
            : 'Drag & drop images here, or click to select files'}
        </p>
        <div className="image-preview">
          {images.map((file, index) => (
            <div key={file.name} className="image-container">
              <img src={file.preview} alt="preview" />
              <button
                className="remove-button"
                onClick={() => removeImage(index)}
              >
                &times;
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Text Box Input Section */}
      <div className="text-boxes-container">
        <label htmlFor="number-input" style={{ marginBottom: '10px' }}>
          Enter the number of text boxes:
        </label>
        <input
          id="number-input"
          type="number"
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
              placeholder={`Inference`}
              className="text-box-input"
              style={{ display: 'block' }}
            />
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default FormContainer;
