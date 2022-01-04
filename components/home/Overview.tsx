import styles from './Overview.module.scss'

export default function Overview () {
    return(
        <section className={styles.overviewContainer}>
            <div>
                <h1>Who We Serve</h1>
                <p>ESF services are geared towards currently incarcerated felons with a confirmed release date or those who have been recently released. The foundations of success are those who have chosen a field of business, demonstrate a positive attitude, and show a willingness to learn.</p>
            </div>
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