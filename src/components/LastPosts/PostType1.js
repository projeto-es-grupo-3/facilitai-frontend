import styles from '@/components/LastPosts/LastPosts.module.css';
import React from 'react';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
  });

  const PostType1 = ({textButton, srcImage}) => {
    return (
        <button className={`${styles.button} ${roboto.className}`}>
            {textButton} 
        </button>
    )
  }
  
  export default PostType1;
