import { Roboto } from 'next/font/google';
import Posts from '@/components/AllPosts/Posts';

const roboto = Roboto({
    weight: '700',
    subsets: ['latin'],
});
export default function AllPostsContent() {

    
    return (
    <main>
    <section className="row justify-content-center container-fluid">
        <div className="d-flex flex-column justify-content-center align-items-center">
            <h1 className={`ms-2 mt-5 text-md-start fw-semibold text-custom1 ${roboto.className}`}>
                Barra de pesquisa!
            </h1>
            <Posts />
        </div>
    </section>
    </main>
      )
    }