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
      <div className="col-12 mb-3">
        <div className="d-flex flex-column flex-md-row justify-content-evenly">
        <span className={` btn btn-md btn-block me-2 mb-2 bg-custom1 text-custom3 fs-4 ${roboto.className}`} onClick={() => handleChange(1)} >Apartamento</span>
        <span className={` btn btn-md btn-block me-2 mb-2 bg-custom1 text-custom3 fs-4 ${roboto.className}`} onClick={() => handleChange(2)} >Livro</span>
        <span className={` btn btn-md btn-block me-2 mb-2 bg-custom1 text-custom3 fs-4 ${roboto.className}`} onClick={() => handleChange(3)} >Outros</span>
        </div>
        
      </div>
    )
  }
  export default SelectCategory;
