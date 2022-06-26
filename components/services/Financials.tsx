import styles from './Financials.module.scss';

export default function Financials () {
    return(
        <section className={styles.sectionContainer}>
            <div className={styles.taxForm} />
            <p>How to use quick-books or other available software for business financials</p>
        </section>
    )
}