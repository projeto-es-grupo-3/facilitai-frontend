import Head from 'next/head';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Polygon from '@/components/Polygon/Polygon';
import React from "react"

export default function Posts() {
    return (
        <>
            <Head>
                <title>Livros</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Polygon/>
            <Header />
            <Footer />
        </>
    )
}