import React, { useState, useRef } from 'react';
import { Roboto } from 'next/font/google';
import styles from '@/components/CreatePost/CreatePost.module.css';
import SelectCategory from '@/components/CreatePost/SelectCategory';
import FormApartamento from '@/components/CreatePost/FormApartamento';
import FormGeral from '@/components/CreatePost/FormGeneric';
import FormLivro from '@/components/CreatePost/FormBook';
import Image from 'next/image';
import predio from '../../../public/images/predio.png';
import capelo from '../../../public/images/capelo.png';
import livro from '../../../public/images/livro.png';
import ImageUploader from '@/components/CreatePost/ImageUploader';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

export default function CreatePost() {
  const [category, setCategory] = useState(2);
  const [selectedImage, setSelectedImage] = useState('');
  const fileInputRef = useRef(null);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  const handleImageSelect = (imageData) => {
    setSelectedImage(imageData);
  };

  let formComponent;
  let img;
  if (category === 1) {
    formComponent = <FormApartamento />;
    img = (
      <div className={`${styles.divImg} d-flex justify-content-center align-items-center`}>
        <Image className={`${styles.img}`} alt='' src={predio} />
      </div>
    );
  } else if (category === 2) {
    formComponent = <FormGeral />;
    img = (
      <div className={`${styles.divImg} d-flex justify-content-center align-items-center`}>
        <Image className={`${styles.img}`} alt='' src={capelo} />
      </div>
    );
  } else if (category === 3) {
    formComponent = <FormLivro />;
    img = (
      <div className={`${styles.divImg} d-flex justify-content-center align-items-center`}>
        <Image className={`${styles.img}`} alt='' src={livro} />
      </div>
    );
  }

  return (
    <div className={`${styles.createPost}`}>
      <SelectCategory category={category} onCategoryChange={handleCategoryChange} />
      <form className={`${styles.form} ${roboto.className} d-flex justify-content-start`}>
        <ImageUploader selectedImage={selectedImage} onImageSelect={handleImageSelect} />
        {formComponent}
        <div className='d-flex justify-content-center align-items-center'>{img}</div>
      </form>
    </div>
  );
}
