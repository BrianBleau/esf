import styles from './aboutHeader.module.scss'

export default function AboutHeader () {
    return(
        <section className={styles.aboutContainer}>
            <div className={styles.headerContainer}>
                <div className={styles.photoContainer}></div>
            </div>
                <div>
                    <h1 className={styles.title}>ESF Director <br></br>Dr. Tom Davidson</h1>
                    <p className={styles.para}>Thomas obtained his degree as a Doctor of Management in Organizational Management (D.M.) and Masters in Business Administration (MBA)
                    degrees from Franklin University in Columbus, Ohio. He holds many International and National certifications, including  Certified Internal Auditor (CIA),
                    Certified Toast Master (CTM), Certified Public Manager (CPM), Certified Government Auditing Professional (CGAP). <br />Furthermore,
                    Thomas has gained many state certifications in criminal investigations, OSCEA inspections, forensic financial auditing, etc.
                    He has created and run several successful businesses, worked as a professional business consultant,
                    and has over thirty years of experience teaching college coursework in business, communications, and criminal justice. 
                    </p>
                    <h1>More from Dr. D</h1>
                    <p>Dr. Davison has been published in dozens of literary magazines and journals, including Twisted Vine, Kaleidoscope,
                         Author’s Publish, Shanti Arts, etc. His winning poem was selected by the American Jewish Historical Society to be posted in the Emma Lazarus Museum.
                          Later this year, in 2022, he will have two books published. The first is a chapbook of his poetry called Different Prisons.
                         The second is a fiction novella entitled, The Boy With Strange Eyes. Additionally,
                          he has a five-part serial named Eternal Prisoner that will be released on Amazon soon.   
                    </p>
                </div>
        </section>
    )
}