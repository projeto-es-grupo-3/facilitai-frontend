import { Roboto } from 'next/font/google';

const roboto = Roboto({
    weight: '700',
    subsets: ['latin'],
});
export default function CreatePostContent({ children }) {

    return (
        <main className="container-xl mb-5 align-items-center">
            <section className="row">
                <div className="col-12 d-flex justify-content-center">
                    <h1 className={`ms-2 mt-5 text-md-start fw-semibold text-custom1 ${roboto.className}`}>
                        Crie seu Anúncio aqui!
                    </h1>
                </div>
                <div className="col-12">
                    {
                        children
                    }
                </div>
                <div className="col-12 d-flex justify-content-center">
                    <h4 className={`ms-2 mt-5 text-md-start fw-semibold text-custom1 ${roboto.className}`}>
                        * Lembre de selecionar a categoria adequada e uma boa imagem
                    </h4>
                </div>
            </section>
        </main>
    )
}