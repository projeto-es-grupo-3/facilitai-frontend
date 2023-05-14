import Image from 'next/image';
import { Roboto } from 'next/font/google';
import article from '@/../public/gif/article.gif';
import ideia from '@/../public/gif/ideia.gif';
import papper from '@/../public/gif/papper.gif';

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
});

export default function HomeContent() {

    return (
        <>
            <main>
                <section className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-12 col-lg-6 d-flex flex-column">
                            <h1 className={`ms-2 text-md-start fw-semibold text-custom1 ${roboto.className}`}>
                                Possua em sua mão as facilidades providas pelos alunos da UFCG!
                            </h1>
                            <p className="ms-2 mt-3 reposive-text">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                        <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
                            <Image
                                className="gifSection"
                                src={article}
                                alt="gif-article"
                            />
                        </div>
                    </div>
                </section>
                <section className="container-fluid mt-5">
                    <div className="row flex-row-reverse">
                        <div className="col-12 col-lg-6 d-flex flex-column">
                            <h1 className={`ms-2 text-md-start fw-semibold text-custom1 ${roboto.className}`}>
                                Por uma UFCG colaborativa!
                            </h1>
                            <p className="ms-2 mt-3  reposive-text">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                        <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
                            <Image
                                className="gifSection"
                                src={ideia}
                                alt="gif-article"
                            />
                        </div>
                    </div>
                </section>
                <section className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-12 col-lg-6 d-flex flex-column">
                            <h1 className={`ms-2 text-md-start fw-semibold text-custom1 ${roboto.className}`}>
                                Alunos mais qualificados do país com melhores condições de vida!
                            </h1>
                            <p className="ms-2 mt-3 reposive-text">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                        <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
                            <Image
                                className="gifSection"
                                src={papper}
                                alt="gif-papper"
                            />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}