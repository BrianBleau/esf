import styles from './Jailbird.module.scss';
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

export default function Jailbird () {
    return(
        <section className={styles.jailbirdContainer}>
            <div className={styles.jailbirdInner}>
                <p><RiDoubleQuotesL /> My time in your classes and ESF opened a new paradigm of vision for my life. I owe you more than I could ever reciprocate. <RiDoubleQuotesR /></p>
                <p>-Jayden</p>
            </div>
        </section>
    )
}