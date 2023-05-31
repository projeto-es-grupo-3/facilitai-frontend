import { Roboto } from 'next/font/google';
import Category from '@/components/Category/Category';

const roboto = Roboto({
    weight: '700',
    subsets: ['latin'],
});
export default function LoginContent(props) {

    

    return (
        <main>
            <section className="container-fluid mt-5 mb-3">
                <div className="row">
                    <div className="col-12 col-lg-6 d-flex flex-column justify-content-center mt-5">
                        <h1 className={`ms-2 mt-5 text-md-start fw-semibold text-custom1 ${roboto.className}`}>
                            Crie um anúncio ou selecione uma categoria para navegar!
                        </h1>
                        <Category/>
                    </div>
                    <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
                        {
                            props.children
                        }
                    </div>
                </div>
            </section>
        </main>
    )
}