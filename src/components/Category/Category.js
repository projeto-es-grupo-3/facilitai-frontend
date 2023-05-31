import styles from '@/components/Category/Category.module.css';
import Link from 'next/link';

export default function Category() {
    return (
        <div className={`${styles.selectCategory}`}>
            <div className={`${styles.buttonWrapper}`}>
                <Link href="new-post">
                    <button className={`${styles.newPost}`}/>
                    <span className={`${styles.buttonText}`}>Criar Anúncio</span>
                </Link>
            </div>
            <div className={`${styles.boxContainer}`}>
                <div className={`${styles.buttonWrapper}`}>
                    <Link href="posts-aptms">
                        <button className={`${styles.apartments}`}/>
                        <span className={`${styles.buttonText}`}>Apartamentos</span>
                    </Link>
                </div>
                <div className={`${styles.buttonWreapper}`}>
                    <Link href="all-posts">
                        <button className={`${styles.others}`}/>
                        <span className={`${styles.buttonText}`}>Todos os Anúncios</span>
                    </Link>
                </div>
                <div className={`${styles.buttonWrapper}`}>
                    <Link href="posts-books">
                        <button className={`${styles.books}`}/>
                        <span className={`${styles.buttonText}`}>Livros</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}