import styles from '@/components/Category/Category.module.css';

export default function Category() {
    return (
        <div className={`${styles.selectCategory}`}>
            <div className={`${styles.buttonWrapper}`}>
                <button className={`${styles.newPost}`}/>
                <span className={`${styles.buttonText}`}>Criar Anúncio</span>
            </div>
            <div className={`${styles.boxContainer}`}>
                <div className={`${styles.buttonWrapper}`}>
                    <button className={`${styles.apartments}`}/>
                    <span className={`${styles.buttonText}`}>Apartamentos</span>
                </div>
                <div className={`${styles.buttonWrapper}`}>
                    <button className={`${styles.others}`}/>
                    <span className={`${styles.buttonText}`}>Todos os Anúncios</span>
                </div>
                <div className={`${styles.buttonWrapper}`}>
                    <button className={`${styles.books}`}/>
                    <span className={`${styles.buttonText}`}>Livros</span>
                </div>
            </div>
        </div>
    )
}