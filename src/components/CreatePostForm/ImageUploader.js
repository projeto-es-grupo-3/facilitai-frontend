import React, { useRef } from 'react';
import styles from '@/components/CreatePostForm/CreatePostForm.module.css';

export default  function ImageUploader({ onImageSelect, selectedImage, setFile }){
  const fileInputRef = useRef(null);
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        onImageSelect(reader.result);
      };
      reader.readAsDataURL(file);
    }
    
  };
  return (
    <div className={`row ${styles.imgSelect}`}>
      <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleImageChange} />
      <button
        type="button"
        className={`col-12 h-100 ${styles.selectImage}`}
        style={{ backgroundImage: `url(${selectedImage})` }}
        onClick={handleButtonClick}
      />
    </div>
  );
};
