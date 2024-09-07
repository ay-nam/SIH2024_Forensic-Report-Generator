// components/ImageDropzone.js
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const ImageDropzone = () => {
  const [images, setImages] = useState([]);

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
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
  }, [images]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/*',
    multiple: true,
  });

  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <div className="dropzone-container" {...getRootProps()}>
      <input {...getInputProps()} />
      <p className="dropzone-message">
        {isDragActive ? 'Drop the images here ...' : 'Drag & drop images here, or click to select files'}
      </p>
      <div className="image-preview">
        {images.map((file, index) => (
          <div key={file.name} className="image-container">
            <img src={file.preview} alt="preview" />
            <button className="remove-button" onClick={() => removeImage(index)}>
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageDropzone;
