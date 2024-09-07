import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const ImageDropzone = () => {
  const [images, setImages] = useState([]);

  // Callback function to handle accepted files
  const onDrop = useCallback((acceptedFiles) => {
    const uploadedImages = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file), // Create a preview URL for displaying the image
      })
    );
    setImages([...images, ...uploadedImages]); // Append new images to the existing list
  }, [images]);

  // Setting up the dropzone
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/*', // Accept only image files
    multiple: true, // Allow multiple files
  });

  // Remove image from the list
  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <div
      {...getRootProps()}
      style={{
        border: '2px dashed #cccccc',
        padding: '20px',
        textAlign: 'center',
        cursor: 'pointer',
        borderRadius: '10px',
      }}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the images here ...</p>
      ) : (
        <p>Drag & drop images here, or click to select files</p>
      )}
      <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>
        {images.map((file, index) => (
          <div key={file.name} style={{ position: 'relative', margin: '10px' }}>
            <img
              src={file.preview}
              alt="preview"
              style={{
                width: '100px',
                height: '100px',
                objectFit: 'cover',
                borderRadius: '8px',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
              }}
            />
            <button
              onClick={() => removeImage(index)}
              style={{
                position: 'absolute',
                top: '5px',
                right: '5px',
                background: 'red',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '20px',
                height: '20px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageDropzone;
