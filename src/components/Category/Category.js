import styles from '@/components/Category/Category.module.css';
import Link from 'next/link';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: '700',
  subsets: ['latin'],
});

export default function Category() {
  return (
    <section className={`container ${styles.select}`}>
      <div className="row link">
        <Link href="/create-post">
          <div className={`col-12 d-flex justify-content-center align-items-center ${styles.select} ${styles.newPost}`}>
            <span className={`text-center ${styles.buttonText}`}>Criar Anúncio</span>
          </div>
        </Link>
      </div>
      <div className="row link">
        <Link className="col-4" href="/search?var=apartments">
          <div className={`d-flex justify-content-center align-items-center ${styles.select} ${styles.apartments}`}>
            <span id="apartments" className={`text-center ${styles.buttonText}`}>Apartamentos</span>
          </div>
        </Link>
        <Link className="col-4" href="/search?var=books">
          <div className={`d-flex justify-content-center align-items-center ${styles.select} ${styles.books}`}>
            <span id="books" className={`text-center ${styles.buttonText}`}>Anúncios</span>
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