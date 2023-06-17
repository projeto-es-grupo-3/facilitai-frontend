import { Roboto } from 'next/font/google';

const roboto = Roboto({
    weight: '700',
    subsets: ['latin'],
});
export default function PostsContent({children}) {

    
    return (
        <main className='container-xl mb-5 align-items-center'>
            <section className="row bg-primary">
                <div className="col-12 d-flex flex-column justify-content-center align-items-center">
                    <h1 className={`ms-2 mt-5 text-md-start fw-semibold text-custom1 ${roboto.className}`}>
                        Barra de pesquisa!
                    </h1>
                </div>
               
            </section>
            <section className="col-12">
                    {
                        children
                    }
            </section>
        </main>
      )
    }