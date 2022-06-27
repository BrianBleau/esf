import styles from './Overview.module.scss';
import Image from 'next/image';
import davisonPhoto from '/public/DavisonTomphoto2.jpg'

export default function Overview () {
    return(
        <section className={styles.overviewContainer}>
            <div>
                <h1>ESF Vision</h1>
                <p>ESF services are geared towards currently incarcerated felons with a confirmed release date or those who have been recently released.
                The foundations of success are those who have chosen a field of business, demonstrate a positive attitude, and show a willingness to learn.
                The vision of Entrepreneurship Services For Felons is to lower recidivism one ex-felon at a
                time through the creation of Felon-owned small businesses.
                </p>
            </div>
            <div>
               <h1>Mission Statement</h1>
               <p>
                ESF provides consulting and training services through an individualized plan for each felon.
                The content of these plans fluctuates based upon the student’s level of business knowledge,
                personal development, and the specific requirements of their chosen business. Each successful
                small business entrepreneur is encouraged to hire and mentor other ex-felons.
                </p>         
            </div>
            <div>
                <h1>More About ESF</h1>
                
                <p>
                    <span className={styles.director}>
                        <Image
                        src={davisonPhoto}
                        alt="Picture of the director"
                        width={200}
                        height={200}
                        />
                
                </span>
                    
                ESF’s Director, Dr. Thomas Davison, created the training curriculum for these modules. Dr.
                Davison has been teaching entrepreneur-focused business coursework in two State prisons in
                Ohio for over five years. Additionally, he has a lifetime of experience working with at-risk youth
                and young men through the State of Ohio, The United States Army, The Boy Scouts of America,
                and other local community programs.
                <br />
                <br />
                ESF and their clients have a lifetime commitment to each other and their mutual success. The
                non-profit works closely with each ex-felon from planning, start-up, and implementation to
                break-even points. ESF has helped ex-felons start many businesses, including a food truck,
                landscaping, dog training, truck owner-operator, hot-dog cart, motivational speaker, life coach,
                etc.
                </p>
            </div>
        </section>
    )
}