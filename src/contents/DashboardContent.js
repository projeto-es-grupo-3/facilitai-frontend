import React from 'react';
import { Children, cloneElement } from "react";
import { Roboto } from 'next/font/google';


const roboto = Roboto({
    weight: '700',
    subsets: ['latin'],
});

export default function DashboardContent({ children }) {
    const arrayChildren = Children.toArray(children);

    return (
        <main className='container-xl mb-5 align-items-center'>
                <div className="row">
                    <section className="col-12 col-lg-6 align-items-center d-none d-lg-block">
                        <h1 className={`ms-2 mt-5 text-md-start fw-semibold text-custom1 ${roboto.className}`}>
                            Crie um anúncio ou selecione uma categoria para navegar!
                        </h1>
                        {
                            arrayChildren[0]
                        }
                    </section>
                    <section className="col-12 col-lg-6 d-flex justify-content-center ">
                        {
                            arrayChildren[1]
                        }
                    </section>
                </div>
        </main>
    )
}