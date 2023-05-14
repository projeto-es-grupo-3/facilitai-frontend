import styles from '@/components/Polygon/Polygon.module.css'

export default function Polygon() {
    return (
        <div className="container-fluid bg-primary">
            <div className={`rounded-5 ${styles.polygon}`}/>
        </div>
    )
}
 