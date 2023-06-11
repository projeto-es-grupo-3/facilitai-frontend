import { Roboto } from 'next/font/google';

const roboto = Roboto({
    weight: '700',
    subsets: ['latin'],
});
export default function CreatePostContent({ children }) {

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
                    {
                        children
                    }
                </div>
            </section>
        </main>
    )
}