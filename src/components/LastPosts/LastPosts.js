import styles from '@/components/LastPosts/LastPosts.module.css';
import React from 'react';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
});

export default function LastPosts({children}) {

    return (
        <div className={`row bg-custom1 rounded-3 shadow d-flex justify-content-center align-items-center  ${styles.lastPosts}`}>
            <div className="col-12 h-25">
                <h1 className={`mt-5 text-center ${styles.titulo} ${roboto.className}`}>Últimos anúncios</h1>
            </div>
            <div className="col-12 d-flex flex-column justify-content-start align-items-center h-50">
                {
                    children
                }
            </div>
            <div className="col-12 d-flex flex-column justify-content-start align-items-center">
                <button className={`${styles.atualizar}`}>Atualizar Anúncios</button>
            </div>
        </div>
    )
}