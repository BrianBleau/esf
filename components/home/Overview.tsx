import styles from './Overview.module.scss'

export default function Overview () {
    return(
        <section className={styles.overviewContainer}>
            <div>
               <h1>How We Help</h1>
               <p>
                    Consulting, training services, and support will be an individualized plan for each felon. Their
                    Training and support needs will fluctuate based upon their personal development and their own
                    business requirements. Each successful small business entrepreneur will be encouraged to hire
                    and mentor other ex-felons.
                </p>         
            </div>
        </section>
    )
}