import styles from '@/components/LastPosts/LastPosts.module.css';
import React from 'react';
import { Roboto } from 'next/font/google';
import Image from 'next/image';
import predio from '../../../public/images/predio.png'
import livro from '../../../public/images/livro.png'

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
  });

  const PostType1 = ({textButton, imagem}) => {
    if (imagem == 1) {
      return(
        <button className={`${styles.button} ${roboto.className}` }>
        <Image className={`${styles.image} float-start`} src={predio} alt=""/>
        <div className={`mx-auto`}>{textButton}</div>
  </button>
      )
    } else {
      return(
      <button className={`${styles.button} ${roboto.className} float-start` }>
        <Image className={`align-items-center`} src={livro} alt="" width={50} height={54} />
        {textButton}
 
      </button>
      )
    }
  }
  
  export default PostType1;
