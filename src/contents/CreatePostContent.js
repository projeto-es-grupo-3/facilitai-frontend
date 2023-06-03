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
    <section className="row justify-content-center container-fluid">
        <div className="d-flex flex-column justify-content-center align-items-center">
            <h1 className={`ms-2 mt-5 text-md-start fw-semibold text-custom1 ${roboto.className}`}>
                Crie seu Anúncio aqui!
            </h1>
            <h1 className={`ms-2 mt-5 text-md-start fw-semibold text-custom1 ${roboto.className}`}>
                Lembre de selecionar a categoria adequada e uma boa imagem
            </h1>
            <CreatePost />
        </div>
    </section>
    </main>
      )
    }