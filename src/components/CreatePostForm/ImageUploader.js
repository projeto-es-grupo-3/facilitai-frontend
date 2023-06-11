import React, { useRef, useState } from 'react';
import styles from '@/components/CreatePostForm/CreatePostForm.module.css';

const ImageUploader = ({ onImageSelect, selectedImage }) => {
  const fileInputRef = useRef(null);
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onImageSelect(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  
  return (
    <div>
      <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleImageChange} />
      <button
        type="button"
        className={`${styles.selectImage}`}
        style={{ backgroundImage: `url(${selectedImage})` }}
        onClick={handleButtonClick}
      />
    </div>
  );
};

const ParentComponent = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  return (
    <div>
      {/* Renderiza o componente ImageUploader com a prop selectedImage */}
      <ImageUploader selectedImage={selectedImage} onImageSelect={handleImageSelect} />
    </div>
  );
};

export default ParentComponent;
