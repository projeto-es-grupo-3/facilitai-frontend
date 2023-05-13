import Image from 'next/image';
import book from '@/../public/gif/book.gif';
import Form from '@/components/Form/Form';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
    weight: '700',
    subsets: ['latin'],
});
export default function LoginContent() {
    return (
        <main>
            <section className="container-fluid mt-5 mb-3">
                <div className="row">
                    <div className="col-12 col-lg-6 d-flex flex-column justify-content-center mt-5">
                        <h1 className={`ms-2 mt-5 text-md-start fw-semibold text-custom1 ${roboto.className}`}>
                            Possua em sua mão as facilidades providas pelos alunos da UFCG!
                        </h1>
                        <Image
                            className="align-self-sm-end align-self-center gifSection"
                            src={book}
                            alt="gif-papper"
                        />
                    </div>
                    <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
                        <Form />
                    </div>
                </div>
            </section>
        </main>
    )
}