import { Roboto } from 'next/font/google';
import { useRouter } from 'next/router';

const roboto = Roboto({
    weight: '700',
    subsets: ['latin'],
});
export default function PostsContent({ children }) {
    const router  = useRouter();
    const handleChange = (num) => {
        if (num === 1) {
            router.push("/posts/search-apartments")
        } else if (num === 2) {
            router.push("/posts/search-books")
        }
    }

    return (
        <main className='container-md mb-5 align-items-center'>
            <section className="row">
                <div className="col-12 d-flex flex-column justify-content-center align-items-center">
                    <h1 className={`ms-2 mt-5 text-md-start fw-semibold text-custom1 ${roboto.className}`}>
                        <div className="d-flex d-none d-lg-block flex-column flex-md-row justify-content-evenly">
                            <span className={` btn btn-md btn-block me-2 mb-2 bg-custom1 text-custom3 fs-4 ${roboto.className}`} onClick={() => handleChange(1)} >Apartamento</span>
                            <span className={` btn btn-md btn-block me-2 mb-2 bg-custom1 text-custom3 fs-4 ${roboto.className}`} onClick={() => handleChange(2)} >Livro</span>
                            <span className={` btn btn-md btn-block me-2 mb-2 bg-custom1 text-custom3 fs-4 ${roboto.className}`} onClick={() => handleChange(3)} >Outros</span>
                        </div>
                    </h1>
                </div>
                <section className="d-flex flex-column justify-content-center align-items-center">
                {
                    children
                }
            </section>
            </section>
            
        </main>
    )
}