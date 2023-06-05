import { Roboto } from 'next/font/google';
import Category from '@/components/Category/Category';
import LastPosts from '@/components/LastPosts/LastPosts';
import React from 'react';

const roboto = Roboto({
    weight: '700',
    subsets: ['latin'],
});

export default function DashboardContent() {
    return (
        <main className='d-flex justify-content-center align-items-center'>
            <section  style={{marginRight: '5vw'}}>
            <h1 className={`ms-2 mt-5 text-md-start fw-semibold text-custom1 ${roboto.className}`} style={{ width: '44.5vw' , fontSize:'3vw'}}>
                Crie um anúncio ou selecione uma categoria para navegar!
            </h1>
                <Category/>
            </section>
            <section>
                <LastPosts/>
            </section>
        </main>
    )
}