import { Roboto } from 'next/font/google';
import SelectCategory from '@/components/CreatePost/SelectCategory';
import CreatePost from '@/components/CreatePost/CreatePost.js';

const roboto = Roboto({
    weight: '700',
    subsets: ['latin'],
});
export default function LoginContent() {

    

    return (
        <main>
            <section className="row justify-content-center container-fluid mt-5 mb-3">
                <div className="col-12 col-lg-6 d-flex flex-column justify-content-center mt-5">
                    <h1 className={`ms-2 mt-5 text-md-start fw-semibold text-custom1 ${roboto.className}`}>
                        Crie seu Anúncio aqui, primeiro selecione uma categoria
                    </h1>
                    <SelectCategory/>
                    <CreatePost/>
                </div>
            </section>
        </main>
    )
}