import styles from '@/components/LastPosts/LastPosts.module.css';
import React from 'react';
import { Roboto } from 'next/font/google';
import PostType1 from '@/components/LastPosts/PostType1';

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
  });

export default function LastPosts() {
    const textButton = 'Procurando alguém para dividir apartamento no endereço ...';
    const imagem = 1;

    return (
        <div className={`bg-custom1 rounded-3 shadow d-flex flex-column justify-content-between align-items-center ${styles.lastPosts}`} action="">
            <h1 className={`mt-5 text-center ${styles.titulo} ${roboto.className}`}>Últimos anúncios</h1>
            <PostType1 textButton={textButton} imagem={imagem} />
            <PostType1 textButton={textButton} imagem={imagem} />
            <PostType1 textButton={textButton} imagem={imagem} />
            <PostType1 textButton={textButton} imagem={imagem} />
            <button className={`${styles.atualizar}`}>Atualizar Anúncios</button>
        </div>
    )
}