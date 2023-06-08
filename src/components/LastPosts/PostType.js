import styles from '@/components/LastPosts/LastPosts.module.css';
import React from 'react';
import { Roboto } from 'next/font/google';
import Image from 'next/image';
import capelo from '../../../public/images/capelo.png';
import livro from '../../../public/images/livro.png';
import predio from '../../../public/images/predio.png';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

 export default function PostType({ textButton, category }) {

    let imagem = capelo

    if (category === "books") {
      imagem = livro
    } else if (category === "predio") {
      imagem = predio
    }

    return (
      <button className={`row ${styles.button} ${roboto.className}`}>
        <div className="col-2">
          <Image className={`${styles.image}`} src={imagem} alt="post" />
        </div>
        <div className="col-10">
          <span className={`${styles.textButtonPost} text-wrap`}>{textButton}</span>
        </div>
      </button>
    )
}