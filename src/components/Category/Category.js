import styles from '@/components/Category/Category.module.css';
import Link from 'next/link';
import { Roboto } from 'next/font/google';
import { useRouter } from 'next/router';

const roboto = Roboto({
  weight: '700',
  subsets: ['latin'],
});

export default function Category() {

  const router  = useRouter();

  const handlePush = (e, num) => {
    e.preventDefault()
    if (num===1) {
      router.push("/posts/search-apartments")

    } else if (num===2) {
      router.push("/posts/search-books")
    }
}

  return (
    <section className={`container ${styles.select}`}>
      <div className="row link">
        <Link className="col-12" href="/create-post">
          <div className={`d-flex justify-content-center align-items-center ${styles.select} ${styles.newPost}`}>
            <span className={`text-center ${styles.buttonText}`}>Criar Anúncio</span>
          </div>
        </Link>
      </div>
      <div className="row link">
        <Link className="col-4" href="" onClick={e => handlePush(e, 1)}>
          <div className={`d-flex justify-content-center align-items-center ${styles.select} ${styles.apartments}`}>
            <span id="apartments" className={`text-center ${styles.buttonText}`}>Apartamentos</span>
          </div>
        </Link>
        <Link className="col-4" href="" onClick={e => handlePush(e, 2)} >
          <div className={`d-flex justify-content-center align-items-center ${styles.select} ${styles.books}`}>
            <span id="books" className={`text-center ${styles.buttonText}`}>Livros</span>
          </div>
        </Link>
        <Link className="col-4 " href="/search?var=others">
          <div className={`d-flex justify-content-center align-items-center ${styles.select} ${styles.others}`}>
            <span id="others" className={`text-center ${styles.buttonText}`}>Outros</span>
          </div>
        </Link>
      </div>
    </section>
  );
}