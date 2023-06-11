import styles from '@/components/CreatePostForm/CreatePostForm.module.css';
import React from 'react';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
  });

  const SelectCategory = ({category, onCategoryChange}) => {

    const handleChange = (newCategory) => {
      onCategoryChange(newCategory);
    }
  
    return (
      <div className="d-flex justify-content-end" style={{ width: '1073px' }}>
        <button className={`btn btn-md btn-block ${styles.button} ${roboto.className}`} onClick={() => handleChange(1)}>
          <div className="mx-auto">Apartamento</div>
        </button>
        <button className={`btn btn-md btn-block ${styles.button} ${roboto.className}`} onClick={() => handleChange(2)}>
          <div className="mx-auto">Geral</div>
        </button>
        <button className={`btn btn-md btn-block ${styles.button} ${roboto.className}`} onClick={() => handleChange(3)}>
          <div className="mx-auto">Livro</div>
        </button>
      </div>
    )
  }
  export default SelectCategory;
