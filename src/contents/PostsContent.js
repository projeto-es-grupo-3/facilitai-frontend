import { Roboto } from 'next/font/google';
import Category from '@/components/Category/Category';
import LastPosts from '@/components/LastPosts/LastPosts';


const roboto = Roboto({
    weight: '700',
    subsets: ['latin'],
});
export default function LoginContent() {

    

    return (
        <main>
            <section className="justify-content-center align-items-center">
                <h1 className={`ms-2 mt-5 text-md-start fw-semibold text-custom1 ${roboto.className}`}>
                    Crie um anúncio ou selecione uma categoria para navegar!
                </h1>
                <Category/>
                <LastPosts/>
            </section>
        </main>
    )
}