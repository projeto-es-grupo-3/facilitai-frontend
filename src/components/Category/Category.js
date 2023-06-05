import styles from '@/components/Category/Category.module.css';
import Link from 'next/link';
import { Roboto } from 'next/font/google';


const roboto = Roboto({
    weight: '700',
    subsets: ['latin'],
});

export default function Category() {
  return (
    <div className="container">
    <div className={`d-flex flex-column ${styles.selectCategory}`}>
      <section>
        <div className="row">
          <div className={`col-12 ${styles.buttonWrapper}`}>
            <Link href="new-post">
              <button className={`btn btn-primary ${styles.newPost}`}>
                <span className={`${styles.buttonText}`}>Criar Anúncio</span>
              </button>
            </Link>
          </div>
        </div>
      </section>
        <section className="d-flex justify-content-start">
          <div className={`${styles.buttonWrapper}`}>
            <Link href="posts-aptms">
              <button className={`btn btn-primary ${styles.apartments}`}>
                <span className={`${styles.buttonText}`}>Apartamentos</span>
              </button>
            </Link>
          </div>
          <div className={`${styles.buttonWrapper}`}>
            <Link href="all-posts">
              <button className={`btn btn-primary ${styles.others}`}>
                <span className={`${styles.buttonText}`}>Anúncios</span>
              </button>
            </Link>
          </div>
          <div className={`${styles.buttonWrapper}`}>
            <Link href="posts-books">
              <button className={`btn btn-primary ${styles.books}`}>
                <span className={`${styles.buttonText}`}>Livros</span>
              </button>
            </Link>
          </div>
        </section>
    </div>
  </div>

  );
}
