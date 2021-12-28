import styles from './CreditScore.module.scss';

export default function CreditScore () {
    return(
        <section className={styles.creditContainer}>
            <p>Strategies on how to raise your credit score</p>
            <div className={styles.growthCurve}/>
        </section>
    )
}