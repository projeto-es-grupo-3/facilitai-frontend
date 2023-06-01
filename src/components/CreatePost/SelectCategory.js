import styles from '@/components/LastPosts/LastPosts.module.css';
import React from 'react';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
  });

  const PostType1 = () => {
    let categoria = 0;
      return(
        <div className="d-flex justify-content-between">
        <button className={`${styles.button} ${roboto.className}`} onClick={categoria=1}>
        <div className={`mx-auto`}>Apartamento</div>
        </button>
        <button className={`${styles.button} ${roboto.className}`} onClick={categoria=2}>
        <div className={`mx-auto`}>Geral</div>
        </button>
        <button className={`${styles.button} ${roboto.className}`} onClick={categoria=3}>
        <div className={`mx-auto`}>Livro</div>
        </button>
        </div>
      )
  }
  export default PostType1;
